"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image:
      "https://i.ibb.co.com/9342TcNM/i-Phone-13-PRO-hobbyhub-1-web-app.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern personal portfolio showcasing my skills, projects, and contact info.",
    liveLink: "https://myportfolio.com",
    github: "https://github.com/myusername/portfolio-client",
    challenges:
      "Ensuring perfect responsiveness and smooth animations without performance loss.",
    futurePlans: "Add a blog section and integrate CMS for dynamic content.",
  },
  {
    id: 2,
    name: "E-Commerce App",
    image: "https://via.placeholder.com/400x250?text=E-Commerce+App",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack e-commerce platform with cart, checkout, and payment integration.",
    liveLink: "https://myecommerce.com",
    github: "https://github.com/myusername/ecommerce-client",
    challenges:
      "Managing state efficiently and handling large amounts of data in real-time.",
    futurePlans: "Implement AI-based product recommendations.",
  },
  {
    id: 3,
    name: "Chat Application",
    image: "https://via.placeholder.com/400x250?text=Chat+Application",
    techStack: ["React", "Socket.IO", "Node.js"],
    description:
      "A real-time chat app with private rooms, typing indicators, and file sharing.",
    liveLink: "https://mychatapp.com",
    github: "https://github.com/myusername/chatapp-client",
    challenges: "Optimizing WebSocket performance and ensuring security.",
    futurePlans: "Add video call functionality and push notifications.",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20 flex flex-col relative p-4"
      style={{ position: "relative" }}
    >
      {/* Progress circle */}
      <figure
        style={{
          position: "sticky",
          left: -40,
          top: 24,
          width: 50,
          height: 50,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 6px rgba(99,102,241,0.7)",
          zIndex: 10,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="#6366f1"
            strokeWidth="5"
            fill="none"
            opacity="0.2"
            pathLength="1"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="#6366f1"
            strokeWidth="5"
            fill="none"
            pathLength="1"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </figure>

      <img
        src={project.image}
        alt={project.name}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
      <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors"
      >
        View More / Details
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
