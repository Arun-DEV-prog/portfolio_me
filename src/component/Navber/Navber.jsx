import React from "react";
import logo from "../../assets/logo.png";
import LocalTime from "../../utilities/LocalTime";

const Navbar = () => {
  return (
    <div className=" w-full px-6 py-4  backdrop-blur-md  text-white z-20 border-b border-blue-800">
      {/* Logo */}
      <div className="flex items-center justify-between w-10/12 mx-auto ">
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="h-30 " />
          <span className="font-bold font-playwrite text-3xl">Arun</span>
        </div>

        <div className="">
          <ul className=" flex space-x-3">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <div className="font-playwrite ">
            Dhaka,Bangladesh <br />
            <LocalTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
