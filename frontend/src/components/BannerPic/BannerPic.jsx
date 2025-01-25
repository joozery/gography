import React from "react";
import VideoSrc from "../../assets/video/VID.mp4";

// นำเข้าภาพ
import Img1 from "../../assets/places/01.jpeg";
import Img2 from "../../assets/places/02.jpeg";
import Img3 from "../../assets/places/03.jpg";
import Img4 from "../../assets/places/04.jpg";
import Img5 from "../../assets/places/05.jpg";
import Img6 from "../../assets/places/06.jpg";
import Img7 from "../../assets/places/07.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StartExploring = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

        {/* สไลด์ภาพ */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Explore Beautiful Destinations
          </h3>
          <Slider {...sliderSettings} className="max-w-[1200px] mx-auto">
            {sliderImages.map((img, index) => (
              <div key={index} className="px-4">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StartExploring;
