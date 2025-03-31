import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-12 px-8 flex flex-col items-center">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p 
        className="text-lg text-gray-400 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Let's connect! Feel free to reach out via email or check out my LinkedIn and GitHub for my latest projects.
      </motion.p>

      <motion.div 
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/kaustubh-pawar-344a31277/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-blue-500 transition"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/KaustubhPawar22" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-gray-700 transition"
        >
          <FaGithub size={24} />
          GitHub
        </a>

        {/* Email */}
        <a 
          href="mailto:kaustubhpawar500@gmail.com" 
          className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-green-500 transition"
        >
          <FaEnvelope size={24} />
          Email Me
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
