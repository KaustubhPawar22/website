import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-gray-900 text-white py-12 px-8 flex flex-col items-center">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Resume & Skills
      </motion.h2>

      {/* Resume Download Button */}
      <motion.a
        href="/resume.pdf" // Replace with the actual path to your resume file
        download="KaustubhPawar_Resume.pdf"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-500 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        📄 Download Resume
      </motion.a>

      {/* Skills Section */}
      <motion.div 
        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {["Python", "SQL", "Tableau", "Power BI", "Excel", "Data Visualization", "Business Analytics"].map((skill, index) => (
          <span key={index} className="bg-gray-800 px-4 py-2 rounded text-white shadow-md">
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Resume;
