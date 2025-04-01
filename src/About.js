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
        <p>👋 Hello! I’m <span className="text-blue-500 font-semibold">Kaustubh</span>, a Data Analyst with a passion for uncovering insights that drive smarter business decisions.</p>

        <p className="mt-4">I specialize in transforming complex data into clear, actionable insights using tools like <strong>Python, SQL, Tableau, and Power BI</strong>. With a knack for making sense of numbers and spotting trends, I turn raw data into stories that are not just informative but also visually compelling.</p>

        <p className="mt-4">I’ve honed my skills in <strong>data analytics and business intelligence</strong> across various industries. Whether it’s creating dynamic dashboards, building predictive models, or optimizing data pipelines, I’m always focused on delivering value and clarity through data.</p>

        <p className="mt-4">When I’m not analyzing data, I’m probably exploring new technologies, discussing the best data visualization techniques, or debating the age-old Excel vs Power BI debate. (Hint: There’s no clear winner—each has its strengths!)</p>
      </motion.div>

      <motion.div 
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Python 🐍</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">SQL 🍝</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Tableau 📊</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Power BI ⚡</span>
        <span className="bg-blue-600 px-4 py-2 rounded text-white">Excel 📅</span>
      </motion.div>

      <motion.div 
        className="mt-6 text-center text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="italic">"Data is my language, and I’m fluent in finding the story it tells."</p>
      </motion.div>
    </section>
  );
};

export default About;
