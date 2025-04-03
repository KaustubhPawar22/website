import React from "react";

const ProjectDetail = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <article className="p-6">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="mt-2 flex gap-4 text-gray-400">
          <span>{project.date}</span>
          <span>•</span>
          <span>{project.tools.join(' / ')}</span>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Introduction</h2>
        <p className="text-lg mb-4">{project.introduction.overview}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Objectives</h3>
            <ul className="list-disc pl-6">
              {project.introduction.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Research Questions</h3>
            <ul className="list-disc pl-6">
              {project.introduction.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data Description Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Data Description</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Variables</h3>
            <ul className="list-disc pl-6">
              {project.dataDescription.variables.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Cleaning Process</h3>
            <ol className="list-decimal pl-6">
              {project.dataDescription.cleaningSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EDA Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Exploratory Analysis</h2>
        {project.eda.sections.map((section, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <img 
              src={section.image} 
              alt={section.title} 
              className="w-full rounded-lg mb-2"
            />
            <ul className="list-disc pl-6">
              {section.insights.map((insight, j) => (
                <li key={j} className="text-gray-300">{insight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Findings & Recommendations */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Key Findings</h2>
          <ul className="list-disc pl-6">
            {project.findings.map((f, i) => (
              <li key={i} className="text-gray-300">{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Recommendations</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-blue-400 mb-2">For Buyers</h3>
              <ul className="list-disc pl-6">
                {project.recommendations.buyers.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-blue-400 mb-2">For Investors</h3>
              <ul className="list-disc pl-6">
                {project.recommendations.investors.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Technical Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Technical Details</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href={project.dataDescription.source} className="resource-button">
            📁 Original Dataset
          </a>
          <a href={project.technical.dashboard} className="resource-button">
            📊 Interactive Dashboard
          </a>
          <a href={project.technical.attachments.report} className="resource-button">
            📄 Full Report
          </a>
          <a href={project.technical.attachments.notebook} className="resource-button">
            🐍 Jupyter Notebook
          </a>
        </div>
      </section>
    </article>
  );
};
export default ProjectDetail;
