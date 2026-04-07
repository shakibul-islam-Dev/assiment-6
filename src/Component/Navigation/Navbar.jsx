import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { use } from "react";

const Navbar = ({ navgationData }) => {
  const navDatas = use(navgationData);
  // console.log(navDatas);
  return (
    <nav className="container mx-auto flex items-center justify-between pt-8">
      <Logo navDatas={navDatas}></Logo>
      <Navlinks navDatas={navDatas}></Navlinks>
      <Logins navDatas={navDatas}></Logins>
    </nav>
  );
};
//:Logogs
const Logo = ({ navDatas }) => {
  return (
    <div>
      <h1 className="text-3xl cursor-pointer font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        {navDatas.brand}
      </h1>
    </div>
  );
};
//Navslink
const Navlinks = ({ navDatas }) => {
  const items = navDatas?.menu_items || [];

  return (
    <ul className=" font-semibold flex items-center gap-8  ">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-xl hover:text-purple-600 transition-all duration-300 "
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

//Signup
const Logins = ({ navDatas }) => {
  const actions = navDatas?.actions || [];
  return (
    <div className="flex items-center gap-3">
      <button className="text-2xl cursor-pointer">
        <FiShoppingCart />
      </button>
      {actions.map((btn, index) => (
        <button
          key={index}
          className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
            index === 1
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold hover:bg-[#5a32cc] shadow-lg"
              : "bg-transparent text-gray-800 font-bold hover:text-[#6c3cf7]"
          }`}
        >
          {" "}
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
