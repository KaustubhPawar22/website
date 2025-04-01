import React from "react";
import { Link } from "react-router-dom";
import projects from "./data/projects";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-12 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Image with Link */}
            <Link to={`/projects/${project.slug}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg" 
              />
            </Link>
            {/* Title with Link */}
            <Link to={`/projects/${project.slug}`} className="text-2xl font-semibold block mt-4 hover:text-blue-400">
              {project.title}
            </Link>
            {/* Description */}
            <p className="text-gray-400 mt-2">{project.description}</p>
            {/* Tools Section */}
            <div className="mt-4 flex gap-4 flex-wrap">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{tool}</span>
              ))}
            </div>
          </div>        
        ))}
      </div>
    </section>
  );
};

export default Projects;
