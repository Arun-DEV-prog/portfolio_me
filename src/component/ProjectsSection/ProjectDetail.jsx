import React from "react";
import { useParams, Link } from "react-router";

const projectData = [
  {
    id: 1,
    name: "ArtiFacts - A Historical website",
    image: "https://i.ibb.co.com/WpFKDW7J/Macbook-Air-hobbyhub-1-web-app.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern personal portfolio showcasing my skills, projects, and contact info.",
    liveLink: "https://hobbyhub-1.web.app/",
    github: "https://github.com/Arun-DEV-prog/artiCraft_client",
    challenges:
      "Ensuring perfect responsiveness and smooth animations without performance loss.",
    futurePlans: "Add a blog section and integrate CMS for dynamic content.",
  },
  {
    id: 2,
    name: "E-Commerce App",
    image: "https://via.placeholder.com/800x400?text=E-Commerce+App",
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
    image: "https://via.placeholder.com/800x400?text=Chat+Application",
    techStack: ["React", "Socket.IO", "Node.js"],
    description:
      "A real-time chat app with private rooms, typing indicators, and file sharing.",
    liveLink: "https://mychatapp.com",
    github: "https://github.com/myusername/chatapp-client",
    challenges: "Optimizing WebSocket performance and ensuring security.",
    futurePlans: "Add video call functionality and push notifications.",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-white">
        <p className="text-xl text-black">Project not found.</p>
        <Link to="/" className="text-indigo-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-white">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-[500px] object-cover rounded-xl shadow-lg mb-6"
      />
      <h1 className="text-3xl text-black font-bold mb-4">{project.name}</h1>
      <p className="mb-4 text-gray-300">{project.description}</p>

      <h3 className="text-xl font-semibold mt-6">Technology Stack</h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">Live Project</h3>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 underline block mb-4"
      >
        {project.liveLink}
      </a>

      <h3 className="text-xl font-semibold mt-6">GitHub Repository (Client)</h3>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 underline block mb-4"
      >
        {project.github}
      </a>

      <h3 className="text-xl font-semibold mt-6">Challenges Faced</h3>
      <p className="text-gray-300 mb-4">{project.challenges}</p>

      <h3 className="text-xl font-semibold mt-6">Future Plans</h3>
      <p className="text-gray-300">{project.futurePlans}</p>

      <Link
        to="/"
        className="mt-8 inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Back to Projects
      </Link>
    </div>
  );
}
