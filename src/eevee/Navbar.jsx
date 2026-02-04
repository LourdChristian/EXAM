import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-blue shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
                color: "#00bcd4",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="bg-gray-800 text-white p-2 rounded"
            >
              <span className="font-extrabold text-lg">LC</span>
            </motion.div>
            <Link to="/" className="text-2xl font-bold text-cyan-500" style={{ letterSpacing: '0.1em' }}>
              <motion.span
                whileHover={{
                  scale: 1.2,
                  color: "#00bcd4",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                Louuuurd
              </motion.span>
            </Link>
          </div>
        </div>

        <div className="space-x-8 flex">
          {links.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={link.path}
                className={`text-white hover:text-cyan-500 transition-colors duration-300 ${
                  location.pathname === link.path ? "text-cyan-500 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
