import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Reviews from "./Reviews.jsx";
import Contact from "./Contact.jsx";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="text-center flex flex-col justify-center items-center px-6 py-20">
        <motion.img
          src={profilePic}
          className="mx-auto rounded-full border-4 border-cyan-500 mb-6 w-68 h-68 object-cover"
          alt="Lourd Christian"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Lourd Christian
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-cyan-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Aspiring Web Developer | Student & Learner
        </motion.p>
        <motion.p
          className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I am a student passionate about learning web development. I enjoy
          exploring new technologies, building projects, and improving my
          skills to create practical and useful applications.
        </motion.p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </motion.div>
  );
}

export default Home;
