import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center text-white bg-black">
      <motion.h1 
        className="text-5xl font-bold"
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
        <button className="bg-blue-500 px-6 py-2 text-lg rounded">View Projects</button>
        <button className="bg-gray-700 px-6 py-2 text-lg rounded">Download Resume</button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
