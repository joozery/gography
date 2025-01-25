import React from "react";
import Places from "../components/Places/Places";
import CoverImage from "../assets/coverabout.webp"; // นำรูป coverabout มาใช้งาน

const PlacesRoute = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[1000px]">
        {/* ภาพพื้นหลัง */}
        <img
          src={CoverImage}
          alt="Cover"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        {/* ข้อความบนภาพ */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-lg uppercase tracking-widest">Trips</p>
          <h1 className="text-5xl font-bold mt-2">Your World of Joy</h1>
        </div>
      </div>

      {/* Section ด้านล่าง */}
      <div className="pt-0">
        <Places />
      </div>
    </>
  );
};

export default PlacesRoute;
