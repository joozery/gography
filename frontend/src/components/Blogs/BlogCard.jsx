import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        state={{ image, date, title, description, author }}
      >
        <div
          className="p-4 shadow-lg rounded-lg text-white transition-all duration-500 hover:shadow-xl font-prompt"
          style={{
            background: "linear-gradient(100deg, #ffffff 10%, #455663 100%)",
          }}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:scale-110 rounded-t-lg"
            />
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold text-lg text-black">
              {title}
            </h1>
            <p className="text-sm text-gray-700">{date}</p>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </div>
          <div className="flex items-center justify-end pt-3">
            <p className="text-blue-300 font-semibold hover:underline">
              Learn More ->
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
