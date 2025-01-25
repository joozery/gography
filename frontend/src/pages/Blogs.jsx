import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import BackgroundImage from "../assets/coverblog.webp"; // นำเข้าภาพพื้นหลัง

const Blogs = () => {
  return (
    <div>
      {/* ส่วน Hero */}
      <div
        className="h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <h1 className="text-5xl font-bold">LATEST BLOGS</h1>
        <p className="text-lg mt-4">
          Find inspiration, guides, and stories for wherever you're going
        </p>
      </div>

      {/* ส่วนเนื้อหาบทความ */}
      <div className="bg-gray-100 py-">
        <BlogsComp />
      </div>
    </div>
  );
};

export default Blogs;
