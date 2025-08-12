"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "ArtiFacts Website",
    image: "https://i.ibb.co.com/twJyvDGK/Macbook-Air-hobbyhub-1-web-app-1.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "Explore the fascinating stories behind ancient artifacts — each piece preserving the culture, traditions, and history of civilizations long past.",
    liveLink: "https://myportfolio.com",
    github: "https://github.com/myusername/portfolio-client",
    challenges:
      "Ensuring perfect responsiveness and smooth animations without performance loss.",
    futurePlans: "Add a blog section and integrate CMS for dynamic content.",
  },
  {
    id: 2,
    name: "Hobby Hub Websites",
    image: "https://i.ibb.co.com/JW1KmMJP/Macbook-Air-arun1234-web-app-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Welcome to the MyGroup web application — a platform where users can create, join, and manage interest-based groups.",
    liveLink: "https://arun1234.web.app/",
    github: "https://github.com/myusername/ecommerce-client",
    challenges:
      "Managing state efficiently and handling large amounts of data in real-time.",
    futurePlans: "Implement AI-based product recommendations.",
  },
  {
    id: 3,
    name: "Micro-Tasking Platsform",
    image: "https://i.ibb.co.com/JWsfjhv9/Macbook-Air-aruncse21-web-app.png",
    techStack: ["React", "Socket.IO", "Node.js"],
    description:
      "A full-featured MERN stack platform where users can register as Workers or Buyers. Workers complete small tasks and earn coins, which they can later withdraw. Buyers can post tasks and pay workers upon approval. The platform includes real-time notifications, Stripe payments",
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
        className=" w-full object-cover rounded-lg mb-4"
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
    <motion.section
      className="max-w-6xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </motion.div>
    </motion.section>
  );
}
