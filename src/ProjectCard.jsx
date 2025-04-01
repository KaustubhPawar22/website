// Example snippet in ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <h3 className="text-2xl font-semibold">
        <Link to={`/projects/${project.slug}`} className="hover:text-blue-400">
          {project.title}
        </Link>
      </h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="mt-4 flex gap-4 flex-wrap">
        {project.tools.map((tool, idx) => (
          <span key={idx} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{tool}</span>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-2">{project.date}</p>
    </div>
  );
};

export default ProjectCard;
