import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const RightNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 border bg-[#1a1a1a]  p-2 rounded-full shadow-lg flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`
            group
            relative
            p-3 rounded-full  text-gray-400  cursor-pointer transition-all duration-300
            ${
              activeSection === section.id
                ? "bg-white ring-4 ring-orange-400 animate-pulse"
                : "bg-[#1a1a1a] hover:bg-orange-600"
            }
          `}
          aria-label={section.label}
        >
          {section.icon}

          {/* Tooltip text */}
          <span
            className={`
              absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap
              rounded bg-orange-700 px-2 py-1 text-sm font-medium text-white
              opacity-0
              pointer-events-none
              transition-opacity duration-300
              group-hover:opacity-100
              ${
                activeSection === section.id
                  ? "opacity-100 pointer-events-auto"
                  : ""
              }
            `}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default RightNavbar;
