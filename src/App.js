import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";


function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <section id="home"><HeroSection /></section>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
