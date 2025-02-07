import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceCard = ({
  img, // รูปภาพจาก API
  title = "No Title", // ชื่อ fallback
  location = "Unknown Location", // ที่ตั้ง fallback
  description = "No description available", // รายละเอียด fallback
  price, // ราคา
  type = "Tour", // ประเภท fallback
  id, // ID ของ place
}) => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  // ✅ ตรวจสอบว่ามีรูปภาพหรือไม่ ถ้าไม่มีให้ใช้ภาพ Placeholder
  const imageSrc = img || "https://placehold.co/600x400";

  // ✅ ตรวจสอบราคา ถ้าไม่มีให้ขึ้นเป็น "N/A" และแปลงเป็นรูปแบบไทย
  const formattedPrice =
    price !== "N/A" && price !== undefined ? `฿${Number(price).toLocaleString()}` : "N/A";

  // ฟังก์ชันเปลี่ยนเส้นทางไปยังหน้า SingleTourDetails
  const handleViewDetails = () => {
    navigate(`/tours/${id}`); // ลิงก์ไปยัง `/tours/:id`
  };

  return (
    <div className="shadow-md border border-gray-300 rounded-lg bg-white text-black transition-all duration-300 hover:shadow-lg cursor-pointer font-prompt">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          alt={title}
          className="mx-auto h-[420px] w-full object-cover rounded-lg border-4 border-white shadow-md transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>

      <div className="space-y-2 p-3 rounded-b-lg">
        <h1 className="line-clamp-1 font-bold text-xl text-center">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span>{location}</span>
        </div>
        <p className="text-gray-700 text-center">{description}</p>
        <div className="border-t border-gray-300 py-3">
          <div className="text-center">
            <p className="text-sm text-gray-600">{type}</p>
            <p className="text-2xl font-bold text-black">{formattedPrice}</p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button
            onClick={handleViewDetails} // เรียกใช้ฟังก์ชัน handleViewDetails
            className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-700 transition-all"
          >
            รายละเอียดทัวร์
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;