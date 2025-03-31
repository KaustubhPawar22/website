import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white py-4 px-8 flex justify-between items-center shadow-md z-10">
      <h1 className="text-2xl font-bold text-blue-500">My Portfolio</h1>
      <ul className="flex gap-6 text-lg">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset to account for navbar height
            className="hover:text-blue-500 cursor-pointer"
            activeClass="text-blue-500 font-bold" // Active class for highlighting
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset to account for navbar height
            className="hover:text-blue-500 cursor-pointer"
            activeClass="text-blue-500 font-bold" // Active class for highlighting
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset to account for navbar height
            className="hover:text-blue-500 cursor-pointer"
            activeClass="text-blue-500 font-bold" // Active class for highlighting
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset to account for navbar height
            className="hover:text-blue-500 cursor-pointer"
            activeClass="text-blue-500 font-bold" // Active class for highlighting
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset to account for navbar height
            className="hover:text-blue-500 cursor-pointer"
            activeClass="text-blue-500 font-bold" // Active class for highlighting
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
