// Hero.jsx
import React from "react";
import meImg from "../../assets/IMG_0971-removebg-preview.png";
import "./hero.css";
import { SocialIcon } from "react-social-icons";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  // Scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center p-5 z-20 relative">
      <div>
        <div className="bg rounded items-center justify-center mx-auto mt-10 h-[500px]">
          <div className=" h-[450px] mx-auto">
            <img
              className="w-full h-full object-cover"
              src={meImg}
              alt="Arun Roy"
            />
          </div>
          <div className="text-center -mt-10 -rotate-45">
            <h1 className="text-7xl font-bold birthstone-regular">Arun</h1>
          </div>
        </div>

        <div className="text-center mt-10 p-5">
          <h1 className="text-2xl">
            <span className="text-gray-400 font-playwrite">Hi I'm </span>Arun
            Kumar Roy
          </h1>
          <h1 className="text-3xl">MERN Stack Developer</h1>
        </div>

        <div className="flex flex-row gap-4 justify-center items-center">
          <SocialIcon url="https://www.linkedin.com/in/arunkumar-roy" />
          <SocialIcon url="https://www.facebook.com/arunkumar.roy.52090008/" />
          <SocialIcon url="https://github.com/Arun-DEV-prog" />
        </div>

        <div className="md:flex gap-7 justify-center mt-10">
          {/* Start a Project button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="border mb-3 border-gray-500 flex items-center hover:text-red-500 cursor-pointer gap-3 p-7 rounded-4xl font-playwrite text-2xl"
          >
            Start a Project
            <span className="h-[50px] md:w-[50px] rounded-full">
              <MdArrowOutward color="red" size={30} className="mx-auto mt-3" />
            </span>
          </button>

          {/* View my Works button */}
          <button
            onClick={() => scrollToSection("projects")}
            className="border mb-3 border-gray-500 flex items-center hover:text-red-500 cursor-pointer gap-3 p-7 rounded-4xl font-playwrite text-2xl"
          >
            View my Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
