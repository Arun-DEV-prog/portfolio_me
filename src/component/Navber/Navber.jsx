import React from "react";
import logo from "../../assets/logo.png";
import LocalTime from "../../utilities/LocalTime";

const Navbar = () => {
  return (
    <div className="w-full px-6 backdrop-blur-md text-white z-20 border-b border-blue-800">
      {/* Container: stacked on small, flex on md */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 py-4">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="font-bold font-playwrite text-2xl md:text-3xl">
            Arun Kumar Roy
          </span>
        </div>

        {/* Download Resume Button */}
        <button className="btn btn-accent border border-gray-500 hover:text-red-500 cursor-pointer px-6 py-2 rounded-xl font-playwrite text-lg md:text-xl">
          Download resume
        </button>

        {/* Location and Local Time */}
        <div className="font-playwrite text-center text-sm md:text-base">
          Dhaka, Bangladesh <br />
          <LocalTime />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
