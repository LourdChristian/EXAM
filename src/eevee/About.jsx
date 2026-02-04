import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="relative z-10 flex flex-col items-center bg-gray-900 px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Small label */}
      <motion.p
        className="mb-4 select-none text-sm uppercase tracking-widest text-cyan-400"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AMA College Student
      </motion.p>

      {/* Title */}
      <motion.h1
        className="mb-12 text-center text-6xl font-extrabold tracking-tight text-white md:text-7xl"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        ABOUT <span className="text-cyan-400">ME</span>
      </motion.h1>

      {/* Card */}
      <motion.div
        className="max-w-3xl rounded-xl border border-cyan-400/25 bg-black/50 p-8 text-center shadow-xl shadow-cyan-500/10 backdrop-blur-sm"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I am <strong className="text-white">Lourd Christian</strong>, currently
          pursuing my studies at{" "}
          <strong className="text-cyan-400">AMA College</strong>. I am passionate
          about Frontend Development and dedicated to building engaging user
          experiences.
        </p>

        <p className="text-md italic tracking-wide text-gray-400">
          “Crafting code that brings ideas to life and inspires others.”
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
