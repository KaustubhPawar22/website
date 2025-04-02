import React, { useState, useEffect } from "react";
import projects from "./data/projects";
import ProjectDetail from "./ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-12 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            />
            <h3 className="text-2xl font-semibold block mt-4 hover:text-blue-400">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-4 flex-wrap">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-500"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl w-full shadow-2xl transition-transform duration-300 transform scale-100 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
              onClick={closeModal}
            >
              ✖
            </button>
            <ProjectDetail project={selectedProject} closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
