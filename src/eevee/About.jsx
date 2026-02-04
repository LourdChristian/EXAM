import React from "react";

function About() {
  return (
    <section className="px-6 py-12 bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
        About Me
      </h1>

      <p className="text-gray-400 max-w-3xl text-center mb-12 text-lg leading-relaxed">
        Hi, I’m <span className="text-cyan-400 font-semibold">Lourd Christian</span>.
        I’m a student passionate about learning and building practical projects.
        I enjoy exploring new technologies and applying them to real-world problems,
        always ready to grow my skills and knowledge.
      </p>

      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Who I Am</h2>
        <p className="text-gray-400 mb-4">
          I’m a student eager to learn and explore web development.
          I focus on building projects that help me practice new skills
          and understand how technology works in real applications.
        </p>
        <p className="text-gray-400">
          I’m always ready to take on challenges, experiment with new tools,
          and collaborate with others to grow as a developer.
          Learning is my top priority, and I aim to create practical, meaningful solutions along the way.
        </p>
      </div>
    </section>
  );
}

export default About;
