import React from "react";
import NatureVid from "../../assets/video/norway.mp4";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="relative h-[700px] font-prompt">
      {/* วิดีโอพื้นหลัง */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>

      {/* ฟิลเตอร์ค้นหา */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
        <div className="bg-white shadow-lg rounded-md p-6 w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">Our Packages</p>
            <h2 className="text-2xl font-bold text-gray-800">
              Search Your Destination
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
            {/* Destination Input */}
            <div>
              <label htmlFor="destination" className="opacity-70">
                Search your Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Dubai"
                className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="opacity-70">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price Range Input */}
            <div>
              <label htmlFor="price" className="opacity-70 block">
                <div className="w-full flex justify-between items-center">
                  <p>Max Price</p>
                  <p className="font-bold text-xl">$ {priceValue}</p>
                </div>
              </label>
              <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                <input
                  type="range"
                  name="price"
                  id="price"
                  className="appearance-none w-full bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full"
                  min="150"
                  max="1000"
                  value={priceValue}
                  step="10"
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:scale-105 px-6 py-3 rounded-full duration-300 mx-auto block">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
