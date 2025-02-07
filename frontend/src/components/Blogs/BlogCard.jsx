import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title, description, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours/${id}`); // เปลี่ยนลิงก์ไปยังหน้า SingleTourDetails
  };

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative cursor-pointer"
      onClick={handleClick}
    >
      {/* รูปภาพ */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* ข้อมูล Blog */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        <div className="mt-4 text-blue-400 font-semibold text-sm flex items-center">
          Learn More →
        </div>
      </div>
    </div>
  );
};

export default BlogCard;