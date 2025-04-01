// src/pages/ProjectDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./data/projects";

const ProjectDetail = () => {
  // Get the project slug from the URL
  const { slug } = useParams();
  // Find the corresponding project data
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <Link to="/projects" className="mt-4 text-blue-400 hover:underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-6">{project.date}</p>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </header>

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Overview</h2>
          <p className="text-lg text-gray-300">{project.detailedDescription}</p>
        </section>

        {/* Process & Steps Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Process & Steps</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-300">
            {project.process.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Results & Insights Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Results & Insights</h2>
          <p className="text-lg text-gray-300">{project.results}</p>
          {project.resultImage && (
            <img
              src={project.resultImage}
              alt="Results Visualization"
              className="w-full h-64 object-cover rounded-lg mt-4"
            />
          )}
        </section>

        {/* Challenges & Learnings Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Challenges & Learnings</h2>
          <p className="text-lg text-gray-300">{project.challenges}</p>
        </section>

        {/* Conclusion & Future Work Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Conclusion & Future Work</h2>
          <p className="text-lg text-gray-300">{project.conclusion}</p>
        </section>

        {/* External Links Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Explore More</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.tableauLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              View Dashboard
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
            >
              GitHub Code
            </a>
          </div>
        </section>

        {/* Back Navigation */}
        <div className="mt-8">
          <Link to="/projects" className="text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
