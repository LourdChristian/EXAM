import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

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
    <section
      id="contact"
      className="bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Let's collaborate on your next project!</h2>

      <h1 className="text-cyan-500 font-extrabold text-6xl mb-8 text-center tracking-wide">
        LET'S CONNECT
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {contacts.map((c) => (
          <a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="text-cyan-500 mb-4">{c.icon}</div>
            <h3 className="font-bold text-xl text-white">{c.title}</h3>
            <p className="text-gray-300 mt-2 text-center">{c.info}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
