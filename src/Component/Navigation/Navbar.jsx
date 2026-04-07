import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { use } from "react";

const Navbar = ({ navgationData, cartsData }) => {
  const topBadge = cartsData.length;

  const navDatas = use(navgationData);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between pt-8 px-4 lg:px-0 relative">
      <Logo navDatas={navDatas} />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Navlinks navDatas={navDatas} />
      </div>

      <div className="flex items-center gap-4">
        <Logins navDatas={navDatas} topBadge={topBadge} />

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-xl p-6 flex flex-col items-center gap-6 md:hidden z-50 rounded-b-2xl">
          <Navlinks navDatas={navDatas} mobile={true} />
        </div>
      )}
    </nav>
  );
};

// Logo Component
const Logo = ({ navDatas }) => {
  return (
    <div className="z-50">
      <h1 className="text-2xl md:text-3xl cursor-pointer font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        {navDatas.brand}
      </h1>
    </div>
  );
};

// Navlinks Component
const Navlinks = ({ navDatas, mobile }) => {
  const items = navDatas?.menu_items || [];

  return (
    <ul
      className={`font-semibold flex ${mobile ? "flex-col items-center gap-6" : "items-center gap-8"}`}
    >
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-lg md:text-xl hover:text-purple-600 transition-all duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Logins Component
const Logins = ({ navDatas, topBadge }) => {
  const actions = navDatas?.actions || [];
  return (
    <div className="flex  relative items-center gap-2 md:gap-3">
      <button className=" relative text-xl md:text-2xl cursor-pointer">
        <FiShoppingCart className="" />
        {topBadge > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white shadow-sm">
            {topBadge}
          </span>
        )}
      </button>

      {actions.map((btn, index) => (
        <button
          key={index}
          className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 cursor-pointer text-sm md:text-base ${
            index === 1
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold hover:shadow-xl"
              : "bg-transparent text-gray-800 font-bold hover:text-[#6c3cf7] hidden xs:block"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
