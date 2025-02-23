import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "aos/dist/aos.css"; // ✅ นำเข้า AOS
import AOS from "aos";
import img1 from "../../assets/places/001.jpg";
import img2 from "../../assets/places/002.jpg";
import img3 from "../../assets/places/003.jpg";
import img4 from "../../assets/places/004.jpg";

const SlideShow = () => {
  const destinations = [
    {
      title: "Nagano Prefecture",
      subtitle: "Japan Alps",
      image: img1,
      url: "https://www.japan.travel/en/destinations/honshu/nagano/",
      description:
        "Nagano Prefecture is known for its stunning alpine scenery, ski resorts, and historic Zenkoji Temple.",
    },
    {
      title: "Marrakech Merzouga",
      subtitle: "Sahara Desert, Morocco",
      image: img2,
      url: "https://www.visitmorocco.com/en/destination/marrakech",
      description:
        "Experience the golden dunes of Merzouga in the Sahara Desert, famous for camel trekking and Berber culture.",
    },
    {
      title: "Yosemite National Park",
      subtitle: "Sierra Nevada, USA",
      image: img3,
      url: "https://www.nps.gov/yose/index.htm",
      description:
        "Yosemite National Park is renowned for its breathtaking granite cliffs, waterfalls, and giant sequoia trees.",
    },
    {
      title: "Los Lances Beach",
      subtitle: "Tarifa, Spain",
      image: img4,
      url: "https://www.andalucia.com/tarifa/beaches",
      description:
        "Los Lances Beach is a paradise for windsurfers and kitesurfers, offering stunning views of the Atlantic Ocean.",
    },
    {
      title: "Nagano Prefecture",
      subtitle: "Japan Alps",
      image: img1,
      url: "https://www.japan.travel/en/destinations/honshu/nagano/",
      description:
        "Nagano is famous for its hot springs, winter sports, and beautiful mountain landscapes.",
    },
    {
      title: "Marrakech Merzouga",
      subtitle: "Sahara Desert, Morocco",
      image: img2,
      url: "https://www.visitmorocco.com/en/destination/marrakech",
      description:
        "Explore the vibrant souks of Marrakech before venturing into the vast Sahara Desert.",
    },
    {
      title: "Yosemite National Park",
      subtitle: "Sierra Nevada, USA",
      image: img3,
      url: "https://www.nps.gov/yose/index.htm",
      description:
        "Home to El Capitan and Half Dome, Yosemite offers incredible hiking trails and scenic landscapes.",
    },
    {
      title: "Los Lances Beach",
      subtitle: "Tarifa, Spain",
      image: img4,
      url: "https://www.andalucia.com/tarifa/beaches",
      description:
        "Tarifa’s Los Lances Beach is the ultimate destination for water sports lovers and beachgoers.",
    },
  ];

  const swiperRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(destinations[0].image);
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setFadeOut(true); // ✅ เริ่ม Fade-Out ก่อนเปลี่ยนค่า
    setTimeout(() => {
      setFadeOut(false); // ✅ Fade-In เมื่อค่าถูกเปลี่ยน
      setBackgroundImage(destinations[swiper.activeIndex].image);
      setActiveDestination(destinations[swiper.activeIndex]);
    }, 300);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      className="min-h-[800px]  bg-cover bg-center text-white flex flex-col justify-end p-10 pb-24 transition-all duration-500 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full mt-20 md:mt-0">
        {/* แถวเดียวกัน (Flexbox) */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 xl:pl-20">
          {/* Content ทางซ้าย */}
          <div
            className={`w-full md:w-2/5 text-left transition-opacity duration-400 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            data-aos="fade-left"
            key={activeDestination.title}
          >
            <h1 className="text-4xl font-light">
              {activeDestination.subtitle}
            </h1>
            <h2 className="text-6xl font-bold mt-2">
              {activeDestination.title}
            </h2>
            <p className="mt-4 text-lg max-w-md">
              {activeDestination.description}
            </p>
            <a
              href={activeDestination.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-yellow-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-yellow-400"
            >
              Discover Location
            </a>
          </div>

          {/* Swiper ทางขวา */}
          <div className={`relative w-full md:w-3/5 lg:right-[-50px]`}
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 }, // มือถือ แสดง 1 รูป
                768: { slidesPerView: 2 }, // Tablet แสดง 2 รูป
                1024: { slidesPerView: 3 }, // Desktop ตั้งแต่ 1024px ขึ้นไปแสดง 3 รูป
                1280: { slidesPerView: 4 }, // Desktop ตั้งแต่ 1280px ขึ้นไปแสดง 4 รูป
              }}
              className="swiper-container"
            >
              {destinations.map((destination, index) => (
                <SwiperSlide key={index}>
                  {/* ใช้รูปเป็น background-image */}
                  <div
                    className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${destination.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* ข้อความด้านบน */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-lg font-bold text-white">
                        {destination.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {destination.subtitle}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Arrows */}
          <div className="absolute right-0 bottom-[-60px]">
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="bg-white text-black h-12 w-12 flex items-center justify-center rounded-full shadow hover:scale-110 transition"
              >
                ❮
              </button>
              <button
                onClick={handleNext}
                className="bg-white text-black h-12 w-12 flex items-center justify-center rounded-full shadow hover:scale-110 transition"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
