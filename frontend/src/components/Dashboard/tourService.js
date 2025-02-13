/// ฟังก์ชันบันทึกข้อมูล Tour
export const saveTour = async (tourData) => {
  console.log("Preparing to send tour data:", tourData); // Debug

  try {
    // สร้าง FormData
    const formData = new FormData();
    formData.append("title", tourData.title);
    formData.append("country", tourData.country);
    formData.append("month", tourData.month);
    formData.append("price", tourData.price);

    // เพิ่มฟิลด์เพิ่มเติม
    formData.append("information", tourData.information); // เพิ่ม field
    formData.append("terms_conditions", tourData.terms_conditions); // เพิ่ม field
    formData.append("included", tourData.included); // เพิ่ม field
    formData.append("not_included", tourData.not_included); // เพิ่ม field

    // ตรวจสอบและเพิ่ม cover_image
    if (tourData.cover_image instanceof File) {
      formData.append("cover_image", tourData.cover_image);
    } else if (tourData.cover_image) {
      console.warn("Cover image is not a valid file:", tourData.cover_image);
    }

    // ตรวจสอบและเพิ่ม pdf_file
    if (tourData.pdf_file instanceof File) {
      formData.append("pdf_file", tourData.pdf_file);
    } else if (tourData.pdf_file) {
      console.warn("PDF file is not a valid file:", tourData.pdf_file);
    }

    // Debug ข้อมูลก่อนส่ง
    for (let [key, value] of formData.entries()) {
      console.log(`FormData content: ${key} =`, value instanceof File ? value.name : value);
    }

    // ส่งข้อมูลไปยัง API
    const response = await fetch("http://gography.website:3004/api/tours", {
      method: "POST",
      body: formData,
    });

    // ตรวจสอบสถานะ Response
    if (!response.ok) {
      const error = await response.json();
      console.error("API Error Response:", error);
      throw new Error(error.error || "Failed to save tour");
    }

    // รับผลลัพธ์จาก API
    const result = await response.json();
    console.log("Tour saved successfully:", result);
    return result;
  } catch (error) {
    console.error("Error saving tour:", error.message);
    throw error;
  }
};

// ฟังก์ชันบันทึก Gallery Images
export const saveGallery = async (tourId, gallery) => {
  if (!gallery || gallery.length === 0) {
    throw new Error("No images to upload");
  }

  const formData = new FormData();
  gallery.forEach((image) => {
    formData.append("images", image);
  });

  // Debug ข้อมูล FormData
  for (let [key, value] of formData.entries()) {
    console.log(`FormData: ${key} =`, value instanceof File ? value.name : value);
  }

  const response = await fetch(`http://gography.website:3004/api/tours/${tourId}/gallery`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to save gallery");
  }

  console.log("Gallery saved successfully.");
};

// ฟังก์ชันบันทึก Tour Plan
export const saveTourPlan = async (tourId, tourPlan) => {
  const validatedPlan = tourPlan.map((plan, index) => ({
    day: plan.day || index + 1, // ใช้ index ถ้าไม่มี day
    date: plan.date || null,   // ใช้ null ถ้าไม่มี date
    description: plan.description?.trim() || "No description provided",
    image: plan.image || null, // ใช้ null ถ้าไม่มีรูปภาพ
  }));

  console.log("Validated Tour Plan:", validatedPlan); // ✅ Debug ข้อมูล

  try {
    const response = await fetch(`http://gography.website:3004/api/tours/${tourId}/plans`, {
      method: "POST",
      body: JSON.stringify({ tourPlan: validatedPlan }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("API Error Response:", error);
      throw new Error(error.error || "Failed to save tour plan");
    }

    console.log("Tour plan saved successfully.");
  } catch (error) {
    console.error("Error saving tour plan:", error.message);
    throw error;
  }
};