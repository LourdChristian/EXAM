import profilePic from "../assets/profile.jpg";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Reviews from "./Reviews.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <section
        id="home"
        className="text-center flex flex-col justify-center items-center px-6 py-20"
      >
        <img
          src={profilePic}
          className="mx-auto rounded-full border-4 border-cyan-500 mb-6 w-44 h-44 object-cover"
          alt="Lourd Christian"
        />

        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Lourd Christian
        </h1>

        <p className="text-xl md:text-2xl text-cyan-400 mb-6">
          Aspiring Web Developer | Student & Learner
        </p>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
          I am a student passionate about learning web development. I enjoy
          exploring new technologies, building projects, and improving my
          skills to create practical and useful applications.
        </p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}

export default Home;
