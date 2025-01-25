import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="shadow-md border border-gray-300 rounded-lg bg-white text-black transition-all duration-300 hover:shadow-lg cursor-pointer font-prompt"
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover rounded-lg border-4 border-white shadow-md transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3 rounded-b-lg">
          <h1 className="line-clamp-1 font-bold text-xl text-center">{title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="text-gray-700 text-center">{description}</p>
          <div className="border-t border-gray-300 py-3">
            <div className="text-center">
              <p className="text-sm text-gray-600">{type}</p>
              <p className="text-2xl font-bold text-black">${price}</p>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleOrderPopup}
              className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-700 transition-all"
            >
              รายละเอียดทัวร์
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
