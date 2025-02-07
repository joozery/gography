import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/places/001.jpg";
import img2 from "../../assets/places/002.jpg";
import img3 from "../../assets/places/003.jpg";
import img4 from "../../assets/places/004.jpg";

const SlideShow = () => {
  const destinations = [
    { title: "Nagano Prefecture", subtitle: "Japan Alps", image: img1 },
    { title: "Marrakech Merzouga", subtitle: "Sahara Desert, Morocco", image: img2 },
    { title: "Yosemite National Park", subtitle: "Sierra Nevada, USA", image: img3 },
    { title: "Los Lances Beach", subtitle: "Tarifa, Spain", image: img4 },
    { title: "Nagano Prefecture", subtitle: "Japan Alps", image: img1 },
    { title: "Marrakech Merzouga", subtitle: "Sahara Desert, Morocco", image: img2 },
    { title: "Yosemite National Park", subtitle: "Sierra Nevada, USA", image: img3 },
    { title: "Los Lances Beach", subtitle: "Tarifa, Spain", image: img4 },
  ];

  const swiperRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(destinations[0].image);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleSlideChange = (swiper) => {
    if (destinations[swiper.activeIndex]) {
      setBackgroundImage(destinations[swiper.activeIndex].image);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-end justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header Section */}
      <div className="absolute top-50 left-10 text-left z-10">
        <h1 className="text-4xl font-light">Switzerland Alps</h1>
        <h2 className="text-6xl font-bold mt-2">Saint Antönien</h2>
        <p className="mt-4 text-lg max-w-md">
          Mauris malesuada nisi sit amet, auctor accumsan tincidunt.
        </p>
        <button className="mt-6 bg-yellow-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-yellow-400">
          Discover Location
        </button>
      </div>

      {/* Swiper Section */}
      <div className="absolute bottom-10 z-10 w-2/3 flex justify-end">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold">{destination.title}</h3>
                  <p className="text-gray-300 text-sm">{destination.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Arrows */}
      <div className="absolute bottom-12 right-10 z-20 flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-3 rounded-full shadow hover:scale-110 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-3 rounded-full shadow hover:scale-110 transition"
        >
          ❯
        </button>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
};

export default SlideShow;