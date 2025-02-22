import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Hero2 from "../components/Hero/Hero2";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import HeroSlider from "../components/Hero/HeroSlider";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [filteredTours, setFilteredTours] = useState([]); // เก็บผลลัพธ์การค้นหา
  const [loading, setLoading] = useState(false); // จัดการสถานะการโหลด

  // ฟังก์ชันจัดการการค้นหา
  const handleSearch = (filters) => {
    console.log("Filters received in Home:", filters);
    setLoading(true);
  
    const queryParams = new URLSearchParams({
      country: filters.country || "",
      month: filters.month || "",
      maxPrice: filters.maxPrice || 0,
    }).toString();
  
    fetch(`http://gography.website:3004/api/tours?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredTours(data.tours || []);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className="h-[800px] relative">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video> */}

          {/* ส่ง handleSearch ไปยัง Hero2 */}
          <HeroSlider />
       
        </div>
        {/* ส่ง filteredTours และ loading ไปยัง Places */}
        <Places
          handleOrderPopup={handleOrderPopup}
          filteredTours={filteredTours || []} // ป้องกัน undefined
          loading={loading}
        />

        <BannerPic img={BannerImg} />
        <Banner />
        <Testimonial />
        <BlogsComp />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;