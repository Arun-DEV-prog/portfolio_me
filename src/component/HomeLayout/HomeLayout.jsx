import React from "react";
import Navber from "../Navber/Navber";
import Hero from "../Hero/Hero";
import Aboutme from "../Aboutme/Aboutme";
import Tech_Skills from "../../Tech_Skills/Tech_Skills";
import EducationSection from "../EducationSection/EducationSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import RightNavbar from "../RightSideNavber/RightNavbar";

const HomeLayout = () => {
  return (
    <div>
      {/* Main scroll container with relative position */}
      <div className="min-h-screen relative bg-black">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
          }}
        />

        {/* Fixed right navbar */}
        <RightNavbar />

        {/* Content wrapper with relative position */}
        <div className="relative z-20">
          <Navber />

          <div id="home">
            <Hero />
          </div>

          <div id="about">
            <Aboutme />
          </div>

          <div id="skills">
            <Tech_Skills />
          </div>

          <div id="education" className="font-playwrite min-h-screen py-10">
            <EducationSection
              useMotion={false}
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

          <div id="projects">
            <ProjectsSection />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
