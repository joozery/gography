/// ฟังก์ชันบันทึกข้อมูล Tour
const API_BASE_URL = import.meta.env.VITE_API_URL;
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
      console.log(
        `FormData content: ${key} =`,
        value instanceof File ? value.name : value
      );
    }

    // ส่งข้อมูลไปยัง API
    const response = await fetch(`${API_BASE_URL}/api/tours`, {
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
    console.log(
      `FormData: ${key} =`,
      value instanceof File ? value.name : value
    );
  }

  const response = await fetch(`${API_BASE_URL}/api/tours/${tourId}/gallery`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to save gallery");
  }

  console.log("Gallery saved successfully.");
};

//SavePlans New
export const saveTourPlan = async (tourId, tourPlan) => {
  for (let plan of tourPlan) {
    const formData = new FormData();
    formData.append("tourId", 197);
    formData.append("day", plan.day);
    formData.append("date", plan.date);
    formData.append("description", plan.description);
    // formData.append("image", plan.image); // อัปโหลด 1 รูปต่อ 1 วัน
    if (plan.image) formData.append("image", plan.image); // ✅ ส่งรูป 1 รูปต่อ 1 วัน

    try {
      await fetch(`${API_BASE_URL}/api/tours/${tourId}/plans`, {
        method: "POST",
        body: formData,
      });
      console.log("All tour plans uploaded!");
    } catch (error) {
      console.error("Error saving tour plan:", error);
      throw error;
    }
  }
};

//Edit Tour

// ดึงข้อมูลทัวร์ตาม tourId
export const getTourById = async (tourId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tours/${tourId}`);
    if (!response.ok) throw new Error("Failed to fetch tour data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tour data:", error);
    throw error;
  }
};

export const getTourPlans = async (tourId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tours/${tourId}/plans`);
    if (!response.ok) throw new Error("Failed to fetch tour data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tour data:", error);
    throw error;
  }
};

// // อัปเดตข้อมูลทัวร์
// export const updateTour = async (tourId, tourData) => {
//   try {
//     let body;
//     let headers = {};

//     if (tourData.cover_image || tourData.pdf_file) {
//       body = new FormData();
//       Object.keys(tourData).forEach((key) => {
//         if (tourData[key] !== null) {
//           body.append(key, tourData[key]);
//         }
//       });
//     } else {
//       body = JSON.stringify(tourData);
//       headers["Content-Type"] = "application/json";
//     }

//     const response = await fetch(`${API_BASE_URL}/${tourId}`, {
//       method: "PUT",
//       headers,
//       body,
//     });

//     if (!response.ok) throw new Error("Failed to update tour");
//     return await response.json();
//   } catch (error) {
//     console.error("Error updating tour:", error);
//     throw error;
//   }
// };

// // อัปเดตแผนทัวร์
// export const updateTourPlan = async (tourId, tourPlan) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${tourId}/plan`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ tourPlan }),
//     });

//     if (!response.ok) throw new Error("Failed to update tour plan");
//     return await response.json();
//   } catch (error) {
//     console.error("Error updating tour plan:", error);
//     throw error;
//   }
// };

// อัปเดตรูปภาพแกลเลอรี
// export const updateGallery = async (tourId, galleryFiles) => {
//   try {
//     const formData = new FormData();

//     galleryFiles.forEach((file) => {
//       formData.append("gallery", file);
//     });

//     const response = await fetch(`${API_BASE_URL}/${tourId}/gallery`, {
//       method: "PUT",
//       body: formData,
//     });

//     if (!response.ok) throw new Error("Failed to update gallery");
//     return await response.json();
//   } catch (error) {
//     console.error("Error updating gallery:", error);
//     throw error;
//   }
// };

// 🟢 อัปเดตข้อมูลทัวร์
export const updateTour = async (tourId, tourData) => {
  try {
    let body;
    let headers = {};

    // เช็คว่ามีไฟล์ภาพหรือ PDF ไหม
    const hasFile = tourData.cover_image instanceof File || tourData.pdf_file instanceof File;

    if (hasFile) {
      body = new FormData();
      Object.keys(tourData).forEach((key) => {
        if (tourData[key] !== null && tourData[key] !== undefined) {
          body.append(key, tourData[key]);
        }
      });
    } else {
      body = JSON.stringify(tourData);
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_BASE_URL}/${tourId}`, {
      method: "PUT",
      headers,
      body,
    });

    if (!response.ok) throw new Error(`Failed to update tour: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("❌ Error updating tour:", error);
    throw error;
  }
};

// 🔵 อัปเดตแผนทัวร์ (Tour Plan)
export const updateTourPlan = async (tourId, tourPlan) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${tourId}/plan`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tourPlan }),
    });

    if (!response.ok) throw new Error(`Failed to update tour plan: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("❌ Error updating tour plan:", error);
    throw error;
  }
};