import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll"; // To wrap sections
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import ProjectDetails from "./ProjectDetails"; // Import Project Details Page
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          {/* Main Page with Scroll Sections */}
          <Route
            path="/"
            element={
              <>
                <Element name="home"><HeroSection /></Element>
                <Element name="about"><About /></Element>
                <Element name="projects"><Projects /></Element>
                <Element name="resume"><Resume /></Element>
                <Element name="contact"><Contact /></Element>
                <Element name="footer"><Footer /></Element>
              </>
            }
          />
          {/* Project Details Page */}
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
