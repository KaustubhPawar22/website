// src/data/projects.js

const projects = [
  {
    slug: "mmr-housing-report",
    title: "Mumbai Housing Market Analysis",
    description: "An analysis of Mumbai’s real estate trends using Python and Tableau.",
    image: "https://hips.hearstapps.com/hmg-prod/images/mcdowell-farmhouse-exterior-6659429cc95fc.jpg?crop=0.651xw:0.976xh;0.309xw,0.0240xh&resize=1120:*",
    tableauLink: "https://public.tableau.com/views/YourDashboard",
    githubLink: "https://github.com/yourgithub/mumbai-housing-analysis",
    tools: ["Kaggle", "Excel", "Tableau"],
    date: "July 2023",
    detailedDescription: "This project began with collecting housing data from Kaggle and public sources. We cleaned and preprocessed the data, performed exploratory data analysis, and built interactive dashboards using Tableau.",
    process: [
      "Collected raw housing data from multiple sources.",
      "Cleaned data to remove outliers and missing values.",
      "Conducted exploratory data analysis to uncover trends.",
      "Built predictive models for housing prices.",
      "Created interactive dashboards in Tableau to present findings."
    ],
    results: "The analysis revealed key trends such as rising prices in certain regions and significant correlations between property size and price, helping investors target high-growth areas.",
    challenges: "Handling missing data and ensuring consistency across multiple data sources was a major challenge.",
    conclusion: "This project provided actionable insights for stakeholders and set the foundation for future predictive analyses in the real estate market.",
    resultImage: "https://hips.hearstapps.com/hmg-prod/images/mcdowell-farmhouse-exterior-6659429cc95fc.jpg?crop=0.651xw:0.976xh;0.309xw,0.0240xh&resize=1120:*"
  },
  // Additional projects can be added here.
];

export default projects;
