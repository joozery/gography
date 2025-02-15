import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceCard = ({
  img, // รูปภาพจาก API
  title = "No Title", // ชื่อ fallback
  location = "Unknown Location", // ประเทศ fallback
  date = "N/A", // เดือน fallback
  id, // ID ของ place
}) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  // ตรวจสอบว่ามีรูปภาพหรือไม่ ถ้าไม่มีให้ใช้ภาพ Placeholder
  const imageSrc = img || "https://placehold.co/600x400";

  // ฟังก์ชันเปลี่ยนเส้นทางไปยังหน้า SingleTourDetails
  const handleViewDetails = () => {
    navigate(`/tours/${id}`); // ลิงก์ไปยัง `/tours/:id`
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
      onClick={handleViewDetails}
    >
      {/* รูปภาพ */}
      <img
        src={imageSrc === "https://placehold.co/600x400" ? "https://placehold.co/212x500" : `${API_URL}${imageSrc}`}
        alt={title}
        className="h-[500px] w-full object-cover rounded-lg group-hover:brightness-75 transition-all duration-500"
      />

      {/* Overlay เนื้อหา */}
      <div className="absolute inset-0 flex flex-col space-y-2 items-center justify-end p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-lg font-semibold text-center tracking-wide">{title}</h3>
        <p className="text-sm font-light">{location}</p>
        <span className="text-xs font-medium italic">{date}</span>
      </div>
    </div>
  );
};

export default PlaceCard;