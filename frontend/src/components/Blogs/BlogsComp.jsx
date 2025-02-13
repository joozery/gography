import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const API_URL = import.meta.env.VITE_API; // URL ของ API

const BlogsComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ดึงข้อมูล Blog จาก API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogposts`);
        if (!response.ok) throw new Error("Failed to fetch blog posts");
        const data = await response.json();
        setBlogs(data.blogPosts); // ✅ ตั้งค่าข้อมูลจาก API
      } catch (error) {
        console.error("❌ Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      } 
    };

    fetchBlogs();
  }, []);

  return (
    <div
      className="py-10 text-white"
      style={{
        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%),
                     radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%),
                     #05141B`,
      }}
    >
      {/* Section Featured Posts */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">FEATURED POSTS</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
          ติดตามบทความล่าสุดของเราเกี่ยวกับสถานที่ท่องเที่ยวที่น่าสนใจ
        </p>
      </div>

      {/* Section Latest Blogs */}
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-white py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>

        {loading ? (
          <div className="text-center text-gray-400">🔄 กำลังโหลดข้อมูล...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-400">❌ ไม่พบบทความ</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {blogs.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                //image={`${API_URL}${item.image}`} // ✅ ดึงรูปภาพจาก API
                image={item.image} // ✅ ดึงรูปภาพจาก API
                title={item.title}
                description={item.content.substring(0, 100) + "..."} // ตัดคำให้อ่านง่าย
                author="Admin" // กำหนดค่าเริ่มต้น (หรือปรับให้ดึงจาก API ถ้ามี)
                date={item.date}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogsComp;