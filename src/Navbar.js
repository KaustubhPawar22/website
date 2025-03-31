import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">My Portfolio</h1>
      <ul className="hidden md:flex gap-6 text-lg">
        {["home", "about", "projects", "resume", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer ${
                activeSection === item ? "text-blue-500 font-bold border-b-2 border-blue-500" : "hover:text-blue-500"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
