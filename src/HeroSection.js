import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    
    <section className="h-screen flex flex-col items-center justify-center text-center text-white bg-black pt-5">
      <motion.h1 
        className="text-5xl font-bold animate-fadeIn"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Kaustubh Pawar</span>
      </motion.h1>
      
      <TypeAnimation
        sequence={[
          "Data Analyst", 2000,
          "Business Analyst", 2000,
          "Tableau Enthusiast", 2000,
          "SQL & Python Expert", 2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-gray-400 mt-4"
      />
      
      <motion.div 
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex gap-4">

        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70} // Adjust offset to account for navbar height
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all cursor-pointer"
          >
          View Projects
        </Link>

        {/* Resume Download Button */}
        <a 
          href="/resume.pdf" 
          download="KaustubhPawar_Resume" 
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all cursor-pointer"
          
        >
          Download Resume
        </a>

        
        
      </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
