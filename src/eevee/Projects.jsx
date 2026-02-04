import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Showcase my projects and skills with a modern portfolio design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://example.com",
    image: "https://i.pinimg.com/originals/7a/c4/7e/7ac47e236cb08361a1a610fb6639a624.gif"
  },
  {
    id: 2,
    title: "Chat App",
    description: "Real-time chat application with responsive UI and online status.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://example.com",
    video: "https://v1.pinimg.com/videos/mc/expMp4/04/2a/d6/042ad6e9bd965371d81b30edf4230f05_t1.mp4"
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "Full-featured e-commerce platform with cart and checkout system.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://example.com",
    image: "https://media1.tenor.com/m/L9zCCqiskVMAAAAC/mcdonalds-ronald-mcdonald.gif"
  }
];

function Projects() {
  return (
    <motion.section
      className="px-6 py-12 bg-gray-900 flex flex-col items-center pt-20" // Added pt-20 for extra top padding
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-4">Featured Projects</h1>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        A diverse portfolio of apps demonstrating practical, scalable web development skills
      </p>

      <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-full h-64 object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
