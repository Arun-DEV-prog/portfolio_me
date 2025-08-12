import React from "react";
import js from "../assets/js_5968292.png";
import reactLogo from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mn from "../assets/mndb.png";
import sql from "../assets/mysql_919836.png";
import python from "../assets/python_5968350.png";
import node from "../assets/node.png";
import ex from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Tech_Skills = () => {
  const skills = [
    { name: "JavaScript", img: js },
    { name: "React", img: reactLogo },
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "MongoDB", img: mn },
    { name: "SQL", img: sql },
    { name: "Python", img: python },
    { name: "Node.js", img: node },
    { name: "Express.js", img: ex },
    { name: "Tailwind CSS", img: tailwind },
  ];

  return (
    <div className="w-10/12 mx-auto text-white relative z-20 mt-10">
      <h1 className="text-3xl text-center font-playwrite mb-6">Tech Skills</h1>

      <Marquee gradient={false} speed={50}>
        <div className="flex justify-between gap-10 items-center">
          {skills.map(({ name, img }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
              className="flex flex-col items-center p-4 rounded-2xl
                         bg-white/10 backdrop-blur-md shadow-lg border border-white/20
                         w-40 h-40 transition-all duration-300"
            >
              <img
                src={img}
                alt={name}
                className="w-16 h-16 object-contain mb-2"
                title={name}
              />
              <span className="text-base font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Tech_Skills;
