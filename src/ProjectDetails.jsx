import React from "react";

const ProjectDetail = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <article className="p-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-400">{project.date}</p>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg my-4"
      />

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
    </article>
  );
};

export default ProjectDetail;
