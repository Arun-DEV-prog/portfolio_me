import React, { useState } from "react";

const Aboutme = () => {
  const [seeMore, setSeeMore] = useState(false);

  const shortText = `Hi, I’m Arun Kumar Roy — a passionate MERN stack developer with a strong focus on building functional, user-friendly, and visually appealing web applications.`;

  const fullText = `Hi, I’m Arun Kumar Roy — a passionate MERN stack developer with a
    strong focus on building functional, user-friendly, and visually
    appealing web applications. My programming journey began with curiosity — learning HTML and CSS
    to create simple static pages — and soon turned into a full-fledged
    passion as I explored JavaScript, React, and backend technologies
    like Node.js and Express.js with MongoDB. Over time, I’ve built a
    variety of projects ranging from real-time live cricket scoring
    systems to micro-tasking platforms and delivery service
    applications. I especially enjoy working on dynamic, interactive
    features such as live score updates, payment integrations, and
    custom dashboards. Problem-solving, debugging, and optimizing code
    for performance are challenges I genuinely love to take on. When I’m
    not coding, I enjoy exploring new tech tools, brainstorming creative
    project ideas, and keeping up with the latest in the web development
    world. Outside of programming, I have a strong interest in sports —
    especially cricket — which is why I’ve even built projects inspired
    by it. I also enjoy casual photography, traveling to new places, and
    spending time learning about emerging technologies. I like to think
    of myself as a curious learner with a drive to create solutions that
    not only work but also feel intuitive and enjoyable for users. My
    approach to development is guided by three principles: keep
    learning, keep building, and keep improving.`;

  return (
    <div className="w-10/12 mx-auto text-white relative z-20">
      <h1 className="text-center font-playwrite text-3xl mt-10">About me</h1>
      <div className="bg-gray-700 p-5 rounded-md mt-3">
        <p className="font-playwrite">
          {seeMore ? fullText : shortText}
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="ml-2 text-blue-400 hover:underline"
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
