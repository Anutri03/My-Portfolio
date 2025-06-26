
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about" className="bg-gray-900/50">
        <About />
      </div>
      <div id="projects" className="bg-black/50">
        <Projects />
      </div>
      <div id="skills" className="bg-gray-900/50">
        <Skills />
      </div>
      <div id="contact" className="bg-black/50">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
