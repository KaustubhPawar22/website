const projects = [
  {
    slug: "mmr-housing-report",
    title: "Mumbai Housing Price Analysis: Insights for Buyers & Investors",
    description: "Comprehensive analysis of Mumbai's real estate market trends",
    image: "/images/projects/housing-thumbnail.jpg",
    date: "July 2023",
    tools: ["Python", "Pandas", "Tableau", "Kaggle", "Excel"],
    
    // Report Content Sections
    abstract: "This analysis of Mumbai's residential real estate market reveals key trends and actionable insights through data analysis and visualization.",
    
    introduction: {
      overview: "Mumbai's dynamic real estate market analysis focusing on:",
      objectives: [
        "Identify regional price trends",
        "Analyze property size impact",
        "Compare property status pricing"
      ],
      questions: [
        "Which regions are most expensive?",
        "How does BHK correlate with price?",
        "Price distribution by property status?"
      ]
    },

    dataDescription: {
      source: "https://www.kaggle.com/datasets/dravidvaishnav/mumbai-house-prices",
      variables: ["Price (Cr)", "Area (sq.ft.)", "BHK", "Locality", "Status", "Age"],
      cleaningSteps: [
        "Removed 120 duplicates",
        "Standardized price units",
        "Categorized unknown ages as Resale"
      ]
    },

    eda: {
      sections: [
        {
          title: "Price Distribution by Region",
          image: "/images/projects/price_by_region.png",
          insights: [
            "Malad West & Andheri West: High-price leaders",
            "Thane West & Kandivali East: Affordable options"
          ]
        },
        {
          title: "BHK vs Price Analysis",
          image: "/images/projects/bhk_vs_price.png",
          insights: [
            "3BHK median price: ₹2.8 Cr",
            "Studio apartments concentrated in Worli"
          ]
        },
        {
          title: "Price per Sq.Ft.",
          image: "/images/projects/price_per_sqft.png",
          insights: [
            "South Mumbai: ₹35,000/sq.ft.",
            "Thane: ₹12,000/sq.ft."
          ]
        }
      ]
    },

    findings: [
      "Location premium: Bandra properties 40% more expensive",
      "Resale discount: 20% cheaper than new properties",
      "Ready-to-move premium: 15% higher than under-construction"
    ],

    challenges: [
      "10% missing age data",
      "Vague locality descriptions ('Reputed Builder')",
      "Non-standardized area measurements"
    ],

    recommendations: {
      buyers: [
        "Target Kanjurmarg/Borivali for affordability",
        "Consider resale properties for discounts"
      ],
      investors: [
        "Focus on Powai/Andheri East developments",
        "Monitor infrastructure projects in Thane corridor"
      ]
    },

    technical: {
      tools: ["Python", "Pandas", "Matplotlib", "Tableau"],
      dashboard: "https://public.tableau.com/app/profile/kaustubh.pawar6926/viz/Final_17433630682940/MMRHousingReport",
      attachments: {
        notebook: "/documents/mumbai-housing-analysis.ipynb",
        report: "/documents/mumbai-housing-report.pdf"
      }
    }
  },
  // ... other projects
];

export default projects;
