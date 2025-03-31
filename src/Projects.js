import React from "react";

const projects = [
  {
    title: "Mumbai Housing Market Analysis",
    description: "An analysis of Mumbai’s real estate trends using Python and Tableau.",
    image: "https://via.placeholder.com/400x200", // Placeholder image URL
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/mumbai-housing-analysis",
    tools: ["Kaggle","Excel", "Tableau" ]
  },
  {
    title: "Sales Performance Dashboard",
    description: "A dashboard tracking sales trends and key business metrics.",
    image: "https://via.placeholder.com/400x200", // Placeholder image URL
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/sales-dashboard",
    tools: ["Tableau", "SQL", "Excel"]
  },
  {
    title: "Customer Segmentation Using K-Means",
    description: "Cluster analysis of customer behavior using K-Means and Python.",
    image: "https://via.placeholder.com/400x200", // Placeholder image URL
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/customer-segmentation",
    tools: ["Python", "Scikit-learn", "K-Means"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-12 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Image Section */}
            <div className="mb-4">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* Title Section */}
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            {/* Description Section */}
            <p className="text-gray-400 mt-2">{project.description}</p>
            {/* Tools Section */}
            <div className="mt-4 flex gap-4 flex-wrap">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{tool}</span>
              ))}
            </div>
            {/* Links Section */}
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
