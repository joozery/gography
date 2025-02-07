import React, { useEffect } from "react";

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
        className="py-10"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
        }}
      >
        <div className="container mx-auto px-6">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
           
          </div>
          {/* Elfsight Reviews Widget */}
          <div className="elfsight-app-971a473b-844a-4d2f-bf50-17b08198f082"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;