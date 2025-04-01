// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">My Portfolio</h1>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX onClick={toggleMenu} className="text-white text-3xl cursor-pointer" />
          ) : (
            <FiMenu onClick={toggleMenu} className="text-white text-3xl cursor-pointer" />
          )}
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 text-white mt-4">
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-500" onClick={toggleMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
