import { Routes, Route } from "react-router-dom";
import Navbar from "./eevee/Navbar.jsx";
import Home from "./eevee/Home.jsx";
import About from "./eevee/About.jsx";
import Skills from "./eevee/Skills.jsx";
import Projects from "./eevee/Projects.jsx";
import Reviews from "./eevee/Reviews.jsx";
import ReviewDetail from "./eevee/ReviewDetails.jsx";
import Contact from "./eevee/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
