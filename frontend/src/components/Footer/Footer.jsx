import React from "react";
import FooterLogo from "../../assets/logo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer2.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5  rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px] mb-3" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm font-prompt text-white ">
              พวกเราคือกลุ่มคนที่รักการเดินทางและถ่ายภาพ เมื่อ 2 สิ่งนี้มารวมกัน Gography จึงเกิดขึ้น เราต่างเข้าใจคนที่รักการเดินทาง และคนที่ให้ความสำคัญกับภาพถ่าย
              </p>
              <br />
              <div className="flex items-center gap-3 font-prompt text-white">
                <FaLocationArrow />
                <p>79/576 ซอยรามคำแหง 150 แขวงสะพานสูง เขตสะพานสูง กรุงเทพมหานคร </p>
              </div>
              <div className="flex items-center gap-3 mt-3 font-prompt text-white">
                <FaMobileAlt />
                <p>	
                092-878-0919</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6 text-white">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-white">
                  Quick Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link, index) => (
                      <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-back space-x-1 text-white dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {/* <span>&#11162;</span> */}
                          <span>• </span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-white">
                  Support
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link, index) => (
                      <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-white space-x-1 text-white dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {/* <span>&#11162;</span> */}
                          <span>• </span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-white">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    {FooterLinks.map((link, index) => (
                      <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-white space-x-1 text-white dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {/* <span>&#11162;</span> */}
                          <span>• </span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 text-white">
              @copyright 2025 All rights reserved || Gography
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
