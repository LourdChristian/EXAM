import { motion } from "framer-motion";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite, SiFramer } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={48} />, level: "Advanced", progress: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} />, level: "Intermediate", progress: 70 },
  { name: "JavaScript", icon: <SiJavascript size={48} />, level: "Advanced", progress: 85 },
  { name: "Vite", icon: <SiVite size={48} />, level: "Intermediate", progress: 60 },
  { name: "Framer Motion", icon: <SiFramer size={48} />, level: "Intermediate", progress: 65 },
  { name: "GitHub", icon: <FaGithub size={48} />, level: "Advanced", progress: 85 },
];

function Skills() {
  return (
    <motion.section
      className="px-6 py-12 bg-gray-900 flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-white mb-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Tools
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mb-12"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My toolkit for building scalable, modern web applications
      </motion.p>

      <div className="w-full overflow-hidden">
        {/* DO NOT motion-animate this container */}
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {skills.concat(skills).concat(skills).map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center h-28 min-w-[140px]
                         bg-gray-800 rounded-xl shadow-md text-white font-medium text-lg
                         px-6 py-4 border-4 border-gray-500"
              whileHover={{
                scale: 1.08,
                borderColor: "#22d3ee", // cyan-400
                boxShadow: "0 0 25px rgba(34,211,238,0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>

              <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className="h-2 bg-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </motion.section>
  );
}

export default Skills;
