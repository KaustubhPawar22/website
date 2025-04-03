import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          // Find the section that is **most visible**
          let mostVisibleSection = visibleSections.reduce((prev, curr) =>
            prev.intersectionRatio > curr.intersectionRatio ? prev : curr
          ).target.id;

          setActiveSection(mostVisibleSection);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // ✅ Adjust for better accuracy when scrolling
        threshold: [0.3, 0.6, 0.9], // ✅ Ensures better active section selection
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ✅ Ensure navbar updates correctly when returning from Project Details
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
      { threshold: 0.4 } // Adjusted threshold to make section selection more accurate
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full h-12 bg-black bg-opacity-90 text-white py-4 px-8 flex justify-between items-center shadow-md z-50 ">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();

          const scrollToTop = () => {
            const scrollStep = -window.scrollY / 25; // Adjust for speed
            if (window.scrollY !== 0) {
              window.scrollBy(0, scrollStep);
              requestAnimationFrame(scrollToTop);
            } else {
              window.location.reload(); // Refresh only after reaching top
            }
          };

          scrollToTop();
        }}
        className="text-2xl font-bold text-blue-500"
      >
        My Portfolio
      </a>

      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {["home", "about", "projects", "resume", "contact"].map((item) => (
          <li key={item}>
            <ScrollLink
              to={item}
              smooth={true}
              duration={500}
              offset={-25}
              onClick={() => setActiveSection(item)}
              className={`cursor-pointer ${
                activeSection === item
                  ? "text-blue-500 font-bold border-b-2 border-blue-500 "
                  : "hover:text-blue-500"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        {menuOpen ? (
          <FiX
            onClick={toggleMenu}
            className="text-white text-3xl cursor-pointer"
          />
        ) : (
          <FiMenu
            onClick={toggleMenu}
            className="text-white text-3xl cursor-pointer"
          />
        )}
      </div>

      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 text-lg md:hidden">
          {["home", "about", "projects", "resume", "contact"].map((item) => (
            <li key={item} className="py-2">
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                offset={-20}
                onClick={() => {
                  toggleMenu();
                  setActiveSection(item);
                }}
                className="cursor-pointer text-white hover:text-blue-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
