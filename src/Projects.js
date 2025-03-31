import React from "react";

const projects = [
  {
    title: "Mumbai Housing Market Analysis",
    description: "An analysis of Mumbai’s real estate trends using Python and Tableau.",
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/mumbai-housing-analysis"
  },
  {
    title: "Sales Performance Dashboard",
    description: "A dashboard tracking sales trends and key business metrics.",
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/sales-dashboard"
  },
  {
    title: "Customer Segmentation Using K-Means",
    description: "Cluster analysis of customer behavior using K-Means and Python.",
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/customer-segmentation"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-12 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.tableauLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded">
                View Dashboard
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-4 py-2 rounded">
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
