import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaGithub,
  FaGit,
  FaRProject,
  FaMicrosoft,
} from "react-icons/fa";
import { SiTableau, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";

const Resume = () => {
  return (
    <section id="resume" className="text-center">
      <div
        id="resume"
        className="min-h-screen bg-gray-900 text-white py-12 px-8 flex flex-col items-center mb-5"
      >
        {/* Resume Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Resume
        </motion.h2>

        {/* Resume Download Button */}
        <motion.a
          href="/resume.pdf" // Replace with the actual path to your resume file
          download="KaustubhPawar_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-500 transition mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          📄 Download Resume
        </motion.a>

        {/* Skills Heading */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Skill Icons */}
          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaPython className="text-yellow-500 text-4xl" />
            <p>Python</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <SiTableau className="text-blue-600 text-4xl" />
            <p>Tableau</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaMicrosoft className="text-yellow-500 text-4xl" />
            <p>Power BI</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaDatabase className="text-green-500 text-4xl" />
            <p>SQL</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg"
              alt="Excel"
              className="w-10 h-10 object-contain"
            />
            <p>Excel</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg"
              alt="Sheets"
              className="w-10 h-10 object-contain"
            />
            <p>Sheets</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg"
              alt="BigQuery"
              className="w-10 h-10 object-contain"
            />
            <p>BigQuery</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <SiPandas className="text-blue-500 text-4xl" />
            <p>Pandas</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <SiNumpy className="text-indigo-500 text-4xl" />
            <p>NumPy</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <SiScikitlearn className="text-orange-500 text-4xl" />
            <p>Scikit-Learn</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaRProject className="text-blue-500 text-4xl" />
            <p>R</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/kaggle-1.svg"
              alt="Kaggle"
              className="w-10 h-10 object-contain"
            />
            <p>Kaggle</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaGit className="text-orange-500 text-4xl" />
            <p>Git</p>
          </motion.div>

          <motion.div className="space-y-2 flex flex-col items-center justify-center">
            <FaGithub className="text-black text-4xl" />
            <p>GitHub</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
