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
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-cyan-600">
          {location.pathname === "/" ? "" : <Link to="/">Home</Link>}
        </div>
        <div className="space-x-6 flex">
          {links.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={link.path}
                className={`text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
                  location.pathname === link.path ? "text-cyan-600 font-semibold" : ""
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
