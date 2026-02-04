import React from "react";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "Vite",
  "VS Code"
];

function Skills() {
  return (
    <section className="px-6 py-12 bg-gray-900 flex flex-col items-center overflow-hidden">
      <h1 className="text-5xl font-extrabold text-white mb-4">Skills & Tools</h1>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        My toolkit for building scalable, modern web applications
      </p>

      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {skillsData.concat(skillsData).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 min-w-[120px] bg-gray-800 rounded-full shadow-md text-white font-medium text-lg mx-4"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Skills;
