import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://gography.website:3004";

const SinglePost = () => {
  const { id } = useParams(); // ดึง id จาก URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogposts/${id}`);
        if (!response.ok) throw new Error("ไม่สามารถดึงข้อมูลโพสต์ได้");

        const data = await response.json();
        setPost(data.blogPost); // สมมติว่า API คืนค่า { blogPost: {...} }
      } catch (err) {
        console.error("เกิดข้อผิดพลาดในการดึงโพสต์:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center mt-10">กำลังโหลด...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen">
      {/* Cover Image Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            post.image
              ? `${API_URL}${post.image}`
              : "https://via.placeholder.com/1920x500?text=No+Image"
          })`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-6">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-10">
        <p className="text-gray-500 mb-6 text-sm">{`โพสต์เมื่อ: ${post.date}`}</p>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} // ใช้ dangerouslySetInnerHTML หาก content มี HTML
        />
      </div>
    </div>
  );
};

export default SinglePost;