import React from "react";
import VideoSrc from "../../assets/video/VID.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// นำเข้าภาพ
import Img1 from "../../assets/places/01.jpeg";
import Img2 from "../../assets/places/02.jpeg";
import Img3 from "../../assets/places/03.jpg";
import Img4 from "../../assets/places/04.jpg";
import Img5 from "../../assets/places/05.jpg";
import Img6 from "../../assets/places/06.jpg";
import Img7 from "../../assets/places/07.jpg";

// CSS Custom Pagination & Navigation
const swiperStyles = `
  .swiper-pagination-bullet {
    background: #B0B0B0 !important; /* สีเทา */
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    background: #FFFFFF !important; /* สีขาว */
  }
  .swiper-button-prev, .swiper-button-next {
    color: #D3D3D3 !important; /* เทาอ่อน */
  }
  @media (max-width: 767px) {
    .swiper-button-prev, .swiper-button-next {
      display: none !important; /* ซ่อนปุ่มลูกศร แต่ยังแสดงรูป */
    }
  }
`;

const StartExploring = () => {
  const sliderImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div
      className="w-full py-10 font-prompt min-h-[650px]"
      style={{
        background: `radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%),
                     radial-gradient(circle at 30% 100%, rgba(255, 255, 255, 0.1), transparent 50%),
                     #05141B`,
      }}
    >
      <style>{swiperStyles}</style> {/* ใช้ Custom CSS */}
      
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          START EXPLORING
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* วิดีโอ */}
          <div className="w-full h-[450px]">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg shadow-lg"
            >
              <source src={VideoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Instagram Feed */}
          <div className="w-full h-[450px]">
            <div
              className="elfsight-app-2794371f-2cea-4199-8ebf-7f68611b5655"
              data-elfsight-app-lazy
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
        </div>

        {/* สไลด์ภาพ - ใช้ Swiper Responsive */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Explore Beautiful Destinations
          </h3>
          <div className="max-w-[1200px] mx-auto overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },  // มือถือแสดง 1 รูป
                768: { slidesPerView: 2 }, // Tablet แสดง 2 รูป
                1024: { slidesPerView: 3 }, // Desktop แสดง 3 รูป
              }}
              className="swiper-container"
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartExploring;
