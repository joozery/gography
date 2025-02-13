import React, { useState } from "react";
import Logo from "../../assets/logo2.png";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Trips", link: "/best-places" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 text-white font-prompt font-semi bg-transparent">
        <div className="w-[95%] mx-auto flex items-center justify-between py-4"> {/* กำหนดความกว้าง */}
          {/* โลโก้ */}
          <div className="flex items-center">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* เมนู */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavbarLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-bold"
                        : "text-gray-300 hover:text-white"
                    }
                  >
                    {link.name.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ปุ่ม CONTACT US */}
          <div className="flex items-center gap-4">
            <button
              className="border border-white text-white px-3 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-normal"
              onClick={handleOrderPopup}
            >
              CONTACT US
            </button>

            {/* เมนู Responsive */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        {/* Responsive Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
