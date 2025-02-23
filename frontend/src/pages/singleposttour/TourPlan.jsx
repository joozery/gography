import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination , Autoplay } from "swiper/modules";

const TourDetails = ({ data }) => {
  const API_URL = import.meta.env.VITE_API_URL; // URL ของ API
  const IMAGE_BASE_URL = `${API_URL}/uploads/`;
  // const removeSpanStyle = (html) => {
  //   return html.replace(/<span\s+[^>]*style="[^"]*"[^>]*>/g, '<span>'); // ลบเฉพาะ style ใน <span>
  // };

  function RichText({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  // ฟังก์ชันเพื่อแปลงวันที่
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div
      className=""
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="container mx-auto px-2 py-6  lg:p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Tour Plan</h1>

          {data.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">ไม่พบข้อมูลของ Tour</p>
            </div>
          ) : (
            <>
              {data.map((plan, index) => (
                <div key={index} className="relative mb-10 lg:block hidden">
                  {/* เส้น Timeline */}
                  <div className="absolute top-0 left-[20px] w-[2px] bg-gray-300 h-full z-0"></div>

                  <div className="relative flex items-start gap-6">
                    {/* Day และ Date */}
                    <div className="flex flex-col items-start w-[150px]">
                      <div className="flex items-center">
                        <div className="w-[10px] h-[10px] bg-white border-4 border-gray-500 rounded-full z-10"></div>
                        <div className="ml-4">
                          <div className="text-xl font-bold text-gray-800">
                            Day {plan.day_number}
                          </div>
                          <p className="text-sm text-gray-500">
                            {formatDate(plan.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6">
                      <RichText content={plan.description} />
                    </div>

                    <div className="w-full lg:w-1/3">
                      <img
                        src={
                          plan.image === null
                            ? "https://placehold.co/1920x1080"
                            : `${IMAGE_BASE_URL}${plan.image}`
                        }
                        alt={`Day ${plan.day_number}`}
                        className="w-full h-full rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="block lg:hidden">
                <Swiper
                  modules={[Navigation, Pagination , Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  // navigation={{
                  //   navigation: {
                  //     nextEl: ".swiper-button-next",
                  //     prevEl: ".swiper-button-prev",
                  //   },
                  // }}
                  pagination={{ clickable: true }}
                  // autoplay={{ delay: 3000, disableOnInteraction: false }} // สไลด์ทุกๆ 3 วินาที
                  className="timeline-swiper"
                >
                  {data.map((plan, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative flex flex-col items-start gap-6 mb-10 p-3">
                        {/* เส้น Timeline */}
                        <div className="absolute top-0 left-[20px] w-[3px] bg-gray-300 h-screen z-0"></div>

                        {/* Day และ Date */}
                        <div className="flex flex-col items-start">
                          <div className="flex items-center">
                            {/* <div className="w-[10px] h-[10px] bg-white border-4 border-gray-500 rounded-full z-10"></div> */}
                            <div className="ml-6 sm:ml-10">
                              <div className="text-2xl font-bold text-gray-800">
                                Day {plan.day_number}
                              </div>
                              <p className="text-base text-gray-500">
                                {formatDate(plan.date)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-2 sm:p-6 ml-6 sm:ml-10">
                          <RichText content={plan.description} />
                        </div>

                        <div className="w-full pl-6 sm:pl-10">
                          <img
                            src={
                              plan.image === null
                                ? "https://placehold.co/1920x1080"
                                : `${IMAGE_BASE_URL}${plan.image}`
                            }
                            alt={`Day ${plan.day_number}`}
                            className="w-full h-full rounded-lg shadow-md object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
