import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "aos/dist/aos.css";

export default function EducationSection({
  education = [],
  useMotion = false,
}) {
  useEffect(() => {
    if (!useMotion) {
      import("aos").then((AOS) => {
        AOS.init({ duration: 700, once: true, offset: 80 });
      });
    }
  }, [useMotion]);

  const TimelineItem = ({ item, index }) => {
    const content = (
      <div
        className={`relative w-full md:w-4/5 px-6 py-4 ${
          index % 2 === 0 ? "md:pr-20 md:ml-auto" : "md:pl-20 md:mr-auto"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
          <h3 className="text-lg font-bold text-gray-900">{item.degree}</h3>
          <p className="text-sm text-gray-700 mt-1">
            {item.institution} •{" "}
            <span className="text-xs text-gray-500">{item.year}</span>
          </p>
          {item.details && (
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {item.details}
            </p>
          )}
        </div>
      </div>
    );

    if (useMotion) {
      const { motion } = require("framer-motion");
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {content}
        </motion.div>
      );
    }

    return (
      <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
        {content}
      </div>
    );
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold shadow-md">
          ED
        </div>
        <div className="">
          <h2 className="text-3xl text-white font-playwrite font-bold">
            Education
          </h2>
          <p className="text-sm font-playwrite text-gray-400">
            Academic milestones & achievements
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500/50 via-pink-500/50 to-transparent" />

        {/* Timeline Items */}
        {education.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:items-start mb-12 ${
              idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Marker Dot */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-md border-4 border-white" />

            <TimelineItem item={item} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}

EducationSection.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string,
      year: PropTypes.string,
      details: PropTypes.string,
    })
  ),
  useMotion: PropTypes.bool,
};
