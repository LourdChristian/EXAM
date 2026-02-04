import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <motion.div
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="text-center flex flex-col justify-center items-center px-6 py-20 min-h-screen">
        <motion.img
          src={profilePic}
          className="mx-auto rounded-full border-4 border-cyan-500 mb-6 w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
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
    </motion.div>
  );
}

export default Home;
