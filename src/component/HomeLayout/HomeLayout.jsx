import React from "react";
import Navber from "../Navber/Navber";
import { Outlet } from "react-router";
import Hero from "../Hero/Hero";
import Aboutme from "../Aboutme/Aboutme";
import Tech_Skills from "../../Tech_Skills/Tech_Skills";
import Marquee from "react-fast-marquee";
import EducationSection from "../EducationSection/EducationSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="min-h-screen  relative bg-black">
        {/* Copper Forge Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
          }}
        />

        {/* Your Content/Components */}
        <div className=" ">
          <Navber />
        </div>
        <div className=" ">
          <Hero />
        </div>
        <div>
          <Aboutme />
        </div>
        <div>
          <Tech_Skills />
        </div>

        <div className=" relative font-playwrite z-20 min-h-screen py-10">
          <EducationSection
            useMotion={false} // set true for Framer Motion
            education={[
              {
                degree: "B.Sc. in Computer Science",
                institution: "Gopalganj Science and Technology University",
                year: "2021-22",
                details: "Currently Studying",
              },
              {
                degree: "Higher Secondary Certificate (HSC)",
                institution: "Debigonj Govt College",
                year: "2019",
                details: "Science Group, GPA 5.00",
              },
            ]}
          />
        </div>

        <div className=" relative z-20">
          <ProjectsSection />
        </div>

        <div className="relative z-20">
          <Contact />
        </div>
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
