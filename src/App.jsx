import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./eevee/Navbar.jsx";
import Home from "./eevee/Home.jsx";
import About from "./eevee/About.jsx";
import Skills from "./eevee/Skills.jsx";
import Projects from "./eevee/Projects.jsx";
import Reviews from "./eevee/Reviews.jsx";
import ReviewDetail from "./eevee/ReviewDetails.jsx";
import Contact from "./eevee/Contact.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
