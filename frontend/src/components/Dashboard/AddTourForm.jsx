import React, { useState } from "react";
import "./AddTourForm.css";
import TourPlanSection from "./TourPlanSection";
import GalleryUpload from "./GalleryUpload";
import { saveTour, saveTourPlan, saveGallery } from "./tourService";

const AddTourForm = () => {
  const [tourData, setTourData] = useState({
    title: "",
    country: "Norway",
    month: "January",
    cover_image: null,
    pdf_file: null,
    information: "",
    terms_conditions: "",
    price: "",
    included: "",
    not_included: "",
    gallery: [],
  });

  const [tourPlan, setTourPlan] = useState([
    { id: 1, day: 1, date: "", description: "", images: [] },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setTourData({
      ...tourData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateTourPlan = (tourPlan) => {
    console.log("Validating Tour Plan:", tourPlan); // Debug ข้อมูล tourPlan ก่อนส่ง
    if (!Array.isArray(tourPlan) || tourPlan.length === 0) {
      throw new Error("โปรดเพิ่มข้อมูลในแผนวันทัวร์อย่างน้อยหนึ่งวัน");
    }
  
    return tourPlan.map((plan, index) => ({
      day: plan.day || index + 1, // ใช้ index ถ้าไม่มี day
      date: plan.date || null,   // ใช้ null ถ้าไม่มี date
      description: plan.description?.trim() || "No description provided",
      image: plan.images.length > 0 ? plan.images[0].file.name : null, // ใช้ชื่อไฟล์ถ้ามี
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    setLoading(true); // ตั้งสถานะกำลังบันทึกเพื่อแสดงตัวโหลดใน UI
  
    try {
      // 1. บันทึกข้อมูลโปรแกรมทัวร์ (Tour)
      const result = await saveTour(tourData); // เรียก API ผ่าน saveTour
      console.log("Saved tour result:", result);
  
      const tourId = result.tourId; // รับ tourId ที่สร้างจาก Backend
  
      if (!tourId) {
        throw new Error("ไม่สามารถสร้างโปรแกรมทัวร์ได้ กรุณาลองใหม่อีกครั้ง");
      }
  
      // 2. บันทึกข้อมูลแผนทัวร์ (Tour Plan)
      console.log("Tour ID:", tourId);
      console.log("Tour Plan Data Being Sent:", tourPlan);

      const validatedPlan = validateTourPlan(tourPlan); // ตรวจสอบและเตรียมข้อมูลแผนทัวร์
      await saveTourPlan(tourId, validatedPlan); // บันทึกแผนทัวร์ใน Backend
      console.log("Tour plan saved successfully!");
  
      // 3. บันทึกข้อมูลแกลเลอรี (Gallery) ถ้ามีรูปภาพ
      console.log("Gallery data being sent:", tourData.gallery);
      if (tourData.gallery.length > 0) {
        await saveGallery(tourId, tourData.gallery);
      }
  
      // แสดงข้อความแจ้งเตือนสำเร็จ
      alert("โปรแกรมทัวร์บันทึกสำเร็จ!");
  
      // รีเซ็ตฟอร์มกลับค่าเริ่มต้น
      setTourData({
        title: "",
        country: "Norway",
        month: "January",
        cover_image: null,
        pdf_file: null,
        information: "",
        terms_conditions: "",
        price: "",
        included: "",
        not_included: "",
        gallery: [],
      });
      setTourPlan([{ id: 1, day: 1, date: "", description: "", images: [] }]);
    } catch (error) {
      console.error("Failed to save tour:", error);
      alert(error.message || "เกิดข้อผิดพลาดในการบันทึกโปรแกรมทัวร์ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false); // ปิดสถานะกำลังโหลด
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">เพิ่มโปรแกรมทัวร์</h1>
      <form onSubmit={handleSave}>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label>ชื่อทัวร์</label>
            <input
              type="text"
              name="title"
              value={tourData.title}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label>ประเทศ</label>
            <select
              name="country"
              value={tourData.country}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
                <option value="Norway">Norway</option>
                <option value="Georgia">Georgia</option>
                <option value="Japan">Japan</option>
                <option value="Iceland">Iceland</option>
                <option value="Argentina">Argentina</option>
                <option value="New Zealand">New Zealand</option>
                <option value="India">India</option>
                <option value="Turkey">Turkey</option>
                <option value="Russia">Russia</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Egypt">Egypt</option>
                <option value="Canada">Canada</option>
                <option value="Indonesia">Indonesia</option>
            </select>
          </div>
          <div>
            <label>เดือน</label>
            <select
              name="month"
              value={tourData.month}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select a month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label>เพิ่มรูปปกทัวร์</label>
            <input
              type="file"
              name="cover_image"
              accept="image/*"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label>เพิ่มไฟล์ PDF</label>
            <input
              type="file"
              name="pdf_file"
              accept=".pdf"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <label>รายละเอียดทัวร์</label>
          <textarea
            name="information"
            value={tourData.information}
            onChange={handleChange}
            className="border p-2 rounded w-full h-32"
          ></textarea>
        </div>

        <TourPlanSection tourPlan={tourPlan || []} setTourPlan={setTourPlan} />

        <div className="mb-6">
          <label>Terms & Conditions</label>
          <textarea
            name="terms_conditions"
            value={tourData.terms_conditions}
            onChange={handleChange}
            className="border p-2 rounded w-full h-32"
            placeholder="กรอกเงื่อนไขและข้อกำหนด"
          ></textarea>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={tourData.price}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="กรอกราคา"
              required
            />
            / Per person
          </div>
          <div>
            <label>Included</label>
            <textarea
              name="included"
              value={tourData.included}
              onChange={handleChange}
              className="border p-2 rounded w-full h-32"
              placeholder="สิ่งที่รวมในแพ็กเกจ"
            ></textarea>
          </div>
          <div>
            <label>Not Included</label>
            <textarea
              name="not_included"
              value={tourData.not_included}
              onChange={handleChange}
              className="border p-2 rounded w-full h-32"
              placeholder="สิ่งที่ไม่รวมในแพ็กเกจ"
            ></textarea>
          </div>
        </div>

        <GalleryUpload gallery={tourData.gallery} setTourData={setTourData} />

        <div className="flex justify-end space-x-2 mt-6">
          <button
            type="submit"
            className={`bg-black text-white px-4 py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "กำลังบันทึก..." : "บันทึกโปรแกรม"}
          </button>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => {
              setTourData({
                title: "",
                country: "Norway",
                month: "January",
                cover_image: null,
                pdf_file: null,
                information: "",
                terms_conditions: "",
                price: "",
                included: "",
                not_included: "",
                gallery: [],
              });
              setTourPlan([{ id: 1, day: 1, date: "", description: "", images: [] }]);
            }}
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTourForm;