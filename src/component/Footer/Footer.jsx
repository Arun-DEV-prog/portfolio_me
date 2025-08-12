import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-4 space-y-10 py-5 flex flex-col md:flex-col justify-center items-center ">
        <p className="text-xl font-playwrite text-center">
          &copy; {new Date().getFullYear()} Arun Kumar Roy. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Arun-DEV-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/arun-kumar-roy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/arun_roy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
