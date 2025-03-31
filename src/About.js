import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-12 px-8 flex flex-col items-center">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="max-w-3xl text-center text-lg text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>👋 Hi! I'm <span className="text-blue-500 font-semibold">Kaustubh</span>, a passionate Data Analyst with expertise in <strong>Python, SQL, Tableau, and Business Intelligence</strong>.</p>

        <p className="mt-4">I love uncovering insights from data and building interactive dashboards that help businesses make data-driven decisions.</p>

        <p className="mt-4">With a background in <strong>data analytics and business analytics</strong>, I have worked on various projects involving data visualization, predictive modeling, and reporting.</p>
      </motion.div>

      <motion.div 
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Python</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">SQL</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Tableau</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Power BI</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Excel</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Machine Learning</span>
      </motion.div>
    </section>
  );
};

export default About;
