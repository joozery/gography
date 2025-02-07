import React, { useState } from "react";
import NatureVid from "../../assets/video/norway.mp4";

const Hero = ({ onSearch }) => {
  const [priceValue, setPriceValue] = useState(150000);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const monthMapping = {
    January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
    July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
  };

  const handleSearch = () => {
    const filters = {
      country: selectedCountry || "",
      month: selectedMonth || "",
      maxPrice: parseInt(priceValue, 10) || 0, // แปลงให้เป็นตัวเลข
    };

    console.log("✅ Filters sent from Hero:", filters); // Debug เช็คค่าที่ส่งไป Home
    onSearch(filters); // ส่งค่าฟิลเตอร์ไปยัง `Home.jsx`
  };

  return (
    <div className="relative h-[700px] font-prompt">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>

      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
        <div className="bg-white shadow-lg rounded-md p-6 w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">Our Packages</p>
            <h2 className="text-2xl font-bold text-gray-800">Search Your Destination</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
            {/* Dropdown สำหรับเลือกประเทศ */}
            <div>
              <label htmlFor="destination" className="opacity-70">Choose your Destination</label>
              <select
                name="destination"
                id="destination"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a country</option>
                <option value="Norway">Norway</option>
                <option value="Georgia">Georgia</option>
                <option value="Japan">Japan</option>
                <option value="Iceland">Iceland</option>
                <option value="Argentina">Argentina</option>
                <option value="New Zealand">New Zealand</option>
                <option value="India">India</option>
                <option value="Turkey">Turkey</option>
                <option value="Russia">Russia</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Egypt">Egypt</option>
                <option value="Canada">Canada</option>
                <option value="Indonesia">Indonesia</option>
              </select>
            </div>

            {/* Dropdown สำหรับเลือกเดือน */}
            <div>
              <label htmlFor="month" className="opacity-70">Choose your Month</label>
              <select
                name="month"
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            {/* Price Range Input */}
            <div>
              <label htmlFor="price" className="opacity-70 block">
                <div className="w-full flex justify-between items-center">
                  <p>Max Price</p>
                  <p className="font-bold text-xl">฿ {priceValue}</p>
                </div>
              </label>
              <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                <input
                  type="range"
                  name="price"
                  id="price"
                  className="appearance-none w-full bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full"
                  min="15000"
                  max="500000"
                  value={priceValue}
                  step="10"
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:scale-105 px-6 py-3 rounded-full duration-300 mx-auto block"
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;