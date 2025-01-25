import React, { useEffect } from "react";
import BackgroundImage from "../../assets/covertest.webp";

const Testimonial = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="py-10 relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
             
            </p>
            <h1 className="text-3xl font-bold text-white">What our customer</h1>
            <p className="text-xs text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* Elfsight Reviews Widget */}
          <div className="py-">
            <div className="elfsight-app-971a473b-844a-4d2f-bf50-17b08198f082"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
