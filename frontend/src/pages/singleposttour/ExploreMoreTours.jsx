import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ปุ่ม Custom Arrow
const CustomArrow = ({ className, onClick, arrowType }) => (
  <button
    className={`${className} bg-black rounded-full w-10 h-10 flex items-center justify-center z-10`}
    onClick={onClick}
    style={{
      display: "block",
      backgroundColor: arrowType === "prev" ? "#333" : "#555",
    }}
  >
    {arrowType === "prev" ? "⬅️" : "➡️"}
  </button>
);

const ExploreMoreTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("http://gography.website:3004/api/tours"); // Replace with your API URL
        if (!response.ok) throw new Error("Failed to fetch tours");
        const data = await response.json();

        const formattedTours = data.tours.map((tour) => ({
          id: tour.id,
          image: tour.cover_image || "https://placehold.co/400x300",
          title: tour.title || "No Title",
          price: tour.price || "N/A",
        }));

        setTours(formattedTours);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const sliderSettings = {
    dots: false, // ปิด Dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow arrowType="next" />, // ปุ่มถัดไป
    prevArrow: <CustomArrow arrowType="prev" />, // ปุ่มก่อนหน้า
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex items-center justify-center text-white">
        🔄 Loading tours...
      </div>
    );
  }

  return (
    <div
      className="h-[70vh] px-6 py-6"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Explore More Tours
        </h2>
        <Slider {...sliderSettings}>
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="border rounded-lg shadow-md p-4 bg-white mx-4"
            >
              <img
                src={`${API_URL}${tour.image}`}
                alt={tour.title}
                className="w-full h-[280px] object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-md font-bold text-black line-clamp-2">
                  {tour.title}
                </h3>
                <p className="text-md text-gray-600 mt-2">
                  {tour.price !== "N/A"
                    ? `฿${Number(tour.price).toLocaleString()}`
                    : "N/A"}
                </p>
                <button className="mt-2 px-4 py-1 bg-black text-white rounded hover:bg-gray-800 transition-all"
                onClick={() => window.location.href = `/tours/${tour.id}`}>
                  รายละเอียดทัวร์
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreMoreTours;