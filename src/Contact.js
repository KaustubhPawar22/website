import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-6"
      
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-6 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-400 text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-400 text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-gray-400 text-sm mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-400 transition"
          >
            Send
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition"
          >
            Reset
          </button>
        </div>
      </motion.form>
      
      {/* Divider */}
      <div className="my-6 w-1/3 border-t border-gray-600 mx-auto"></div>

      {/* Call-to-Action Message
      <motion.p
        className="text-lg text-gray-400 text-center mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Prefer to connect differently? Find me here 👇
      </motion.p> */}

      {/* Social Icons */}
      <motion.div
        className="mt-0 flex gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500 text-2xl">
          <FaGithub />
        </a>
        <a href="#" className="text-green-400 hover:text-green-500 text-2xl">
          <FaEnvelope />
        </a>
      </motion.div>
      <footer className="text-center py-4 text-gray-400 text-sm bg-gray-900">
        © {new Date().getFullYear()} Kaustubh Pawar. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
