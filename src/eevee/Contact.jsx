import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      info: "bautolourdz@gmail.com",
      link: "mailto:bautolourdz@gmail.com",
    },
    {
      icon: <FaPhone size={28} />,
      title: "Phone",
      info: "+639293132686",
      link: "tel:+639293132686",
    },
    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      info: "linkedin.com/in/lourdc",
      link: "https://linkedin.com/in/lourdc",
    },
    {
      icon: <FaGithub size={28} />,
      title: "GitHub",
      info: "github.com/LourdChristian",
      link: "https://github.com/LourdChristian",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 text-white flex flex-col items-center px-6 py-16 pt-28" // Increased pt-28 for more space
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Headings */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6 md:mb-8"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Let's collaborate on your next project!
      </motion.h2>

      <motion.h1
        className="text-cyan-500 font-extrabold text-6xl mb-16 md:mb-20 text-center tracking-wide"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        LET'S CONNECT
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {contacts.map((c) => (
          <motion.a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700
                       shadow-md transition"
            whileHover={{
              scale: 1.08,
              borderColor: "#22d3ee",
              boxShadow: "0 0 25px rgba(34,211,238,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="text-cyan-500 mb-4"
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {c.icon}
            </motion.div>

            <h3 className="font-bold text-xl text-white">{c.title}</h3>
            <p className="text-gray-300 mt-2 text-center">{c.info}</p>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
