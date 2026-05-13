export const companies = [
  "Systems Limited",
  "Arbisoft",
  "Devsinc",
  "10Pearls",
  "Netsol",
  "Contour Software",
  "VentureDive"
];

const phases = [
  { range: "Months 1-3", level: "Beginner", progress: 25 },
  { range: "Months 4-6", level: "Intermediate", progress: 50 },
  { range: "Months 7-9", level: "Advanced", progress: 75 },
  { range: "Months 10-12", level: "Professional", progress: 100 }
];

function buildRoadmap(field) {
  const [projectOne, projectTwo, projectThree, projectFour] = field.projects;
  const primaryTools = field.tools.slice(0, 4);
  const advancedTools = field.tools.slice(2, 6);

  return {
    title: field.title,
    summary: `A complete 1-year ${field.title} roadmap for Pakistani BSCS, IT and Data Science students.`,
    periods: [
      {
        ...phases[0],
        skills: [field.skills[0], field.skills[1], "Git and portfolio basics", "Problem solving fundamentals"],
        tools: [primaryTools[0], primaryTools[1], "GitHub", "VS Code"],
        projects: [projectOne, "Personal learning portfolio", "Weekly practice log"],
        outcome: `Understand ${field.title} foundations and explain basic concepts in interviews.`
      },
      {
        ...phases[1],
        skills: [field.skills[2], field.skills[3], "API and data workflows", "Team collaboration"],
        tools: [primaryTools[2], primaryTools[3], "Postman", "Notion"],
        projects: [projectTwo, "Team mini project", "Documented case study"],
        outcome: `Build useful ${field.title} projects and publish them with clear documentation.`
      },
      {
        ...phases[2],
        skills: [field.skills[4] || field.skills[0], field.skills[5] || field.skills[1], "Testing and security basics", "Performance improvement"],
        tools: [advancedTools[0], advancedTools[1], "Testing tools", "Analytics dashboard"],
        projects: [projectThree, "Internship-style assignment", "Open source or community contribution"],
        outcome: `Handle advanced ${field.title} tasks with production-minded habits.`
      },
      {
        ...phases[3],
        skills: ["Interview preparation", "Client communication", "Deployment or delivery", "Career positioning"],
        tools: [advancedTools[2] || "LinkedIn", advancedTools[3] || "GitHub", "CV builder", "Portfolio website"],
        projects: [projectFour, "Final year project enhancement", "Freelance proposal or job application kit"],
        outcome: `Become ready for ${field.roles[0]}, internships, freelance work, or junior roles.`
      }
    ]
  };
}

export const fieldCategories = [
  {
    title: "Core Development",
    description: "Build reliable software products, web platforms, mobile apps and engineering systems.",
    fields: [
      {
        id: "software-engineering",
        title: "Software Engineering",
        description: "Design, build, test and maintain production software for startups, enterprises and product teams.",
        skills: ["DSA", "OOP", "Databases", "System design", "Testing", "Clean architecture"],
        tools: ["Java", "Python", "PostgreSQL", "Git", "Docker", "Jira"],
        roles: ["Software Engineer", "Backend Developer", "QA Automation Engineer"],
        salary: { min: 80000, avg: 220000, max: 550000 },
        demand: 90,
        demandLevel: "High",
        difficulty: 78,
        learningTime: "9-12 months",
        global: 86,
        projects: ["Library management API", "University course registration system", "Scalable inventory service", "Production-ready SaaS module"]
      },
      {
        id: "web-development",
        title: "Web Development (MERN)",
        description: "Create modern websites, dashboards, SaaS products, APIs and freelance-ready business applications.",
        skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Authentication"],
        tools: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB Atlas", "Vercel"],
        roles: ["Frontend Developer", "MERN Developer", "Full Stack Developer"],
        salary: { min: 70000, avg: 180000, max: 450000 },
        demand: 94,
        demandLevel: "High",
        difficulty: 68,
        learningTime: "6-10 months",
        global: 90,
        projects: ["Responsive portfolio", "Job board with API filters", "MERN student LMS", "Client-ready SaaS dashboard"]
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Build Android and iOS apps for consumers, universities, businesses and startup products.",
        skills: ["Dart", "Flutter", "React Native", "Firebase", "Mobile UI", "API integration"],
        tools: ["Flutter", "React Native", "Android Studio", "Firebase", "Expo", "Figma"],
        roles: ["Mobile App Developer", "Flutter Developer", "React Native Engineer"],
        salary: { min: 75000, avg: 190000, max: 480000 },
        demand: 84,
        demandLevel: "High",
        difficulty: 72,
        learningTime: "7-11 months",
        global: 84,
        projects: ["Campus events app", "Firebase chat app", "Food delivery clone", "Published portfolio mobile app"]
      }
    ]
  },
  {
    title: "Advanced Fields",
    description: "Work with intelligent systems, data products, automation and modern security challenges.",
    fields: [
      {
        id: "ai-ml",
        title: "AI / Machine Learning",
        description: "Build models, automation workflows, recommendation systems and intelligent applications.",
        skills: ["Python", "Statistics", "Machine learning", "Deep learning", "NLP", "MLOps"],
        tools: ["Python", "Jupyter", "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"],
        roles: ["ML Engineer", "AI Engineer", "Computer Vision Engineer"],
        salary: { min: 90000, avg: 240000, max: 650000 },
        demand: 88,
        demandLevel: "High",
        difficulty: 86,
        learningTime: "10-14 months",
        global: 93,
        projects: ["EDA notebook on Pakistani education data", "House price prediction model", "Urdu sentiment classifier", "Deployed AI assistant demo"]
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Turn raw data into decisions using statistics, visualization, predictive modeling and storytelling.",
        skills: ["Python", "SQL", "Statistics", "Data visualization", "Machine learning", "Storytelling"],
        tools: ["Pandas", "SQL", "Power BI", "Tableau", "Scikit-learn", "Excel"],
        roles: ["Data Scientist", "Data Analyst", "BI Analyst"],
        salary: { min: 80000, avg: 200000, max: 520000 },
        demand: 82,
        demandLevel: "High",
        difficulty: 80,
        learningTime: "8-12 months",
        global: 87,
        projects: ["Sales analytics dashboard", "Student performance analysis", "Customer churn model", "Executive data story portfolio"]
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        description: "Protect networks, cloud systems, web applications and company data from evolving threats.",
        skills: ["Networking", "Linux", "Web security", "SOC analysis", "Threat modeling", "Incident response"],
        tools: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Splunk", "TryHackMe"],
        roles: ["SOC Analyst", "Security Engineer", "Penetration Tester"],
        salary: { min: 85000, avg: 210000, max: 560000 },
        demand: 86,
        demandLevel: "High",
        difficulty: 84,
        learningTime: "9-13 months",
        global: 85,
        projects: ["Home security lab", "OWASP vulnerability report", "SOC alert playbook", "CTF writeup portfolio"]
      }
    ]
  },
  {
    title: "Infrastructure",
    description: "Power modern products with cloud platforms, automation, networks and operations.",
    fields: [
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        description: "Deploy, monitor and scale applications on AWS, Azure, GCP and hybrid infrastructure.",
        skills: ["Linux", "Networking", "Cloud architecture", "IAM", "Containers", "Monitoring"],
        tools: ["AWS", "Azure", "Docker", "Terraform", "CloudWatch", "Kubernetes"],
        roles: ["Cloud Engineer", "Solutions Architect", "Cloud Support Engineer"],
        salary: { min: 90000, avg: 230000, max: 620000 },
        demand: 87,
        demandLevel: "High",
        difficulty: 82,
        learningTime: "9-12 months",
        global: 92,
        projects: ["Static site on cloud storage", "Linux server deployment", "Containerized MERN app", "Cloud architecture capstone"]
      },
      {
        id: "devops",
        title: "DevOps",
        description: "Automate deployments, improve reliability and connect engineering with operations.",
        skills: ["Linux", "CI/CD", "Docker", "Kubernetes", "Monitoring", "Infrastructure as code"],
        tools: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Grafana", "Jenkins"],
        roles: ["DevOps Engineer", "Site Reliability Engineer", "Platform Engineer"],
        salary: { min: 95000, avg: 250000, max: 680000 },
        demand: 85,
        demandLevel: "High",
        difficulty: 86,
        learningTime: "10-14 months",
        global: 91,
        projects: ["CI/CD pipeline", "Dockerized backend", "Kubernetes deployment", "Monitoring and rollback system"]
      },
      {
        id: "networking",
        title: "Networking",
        description: "Design, configure and troubleshoot communication systems and enterprise networks.",
        skills: ["TCP/IP", "Routing", "Switching", "Firewalls", "Subnetting", "Network security"],
        tools: ["Cisco Packet Tracer", "Wireshark", "GNS3", "pfSense", "Linux", "MikroTik"],
        roles: ["Network Engineer", "NOC Engineer", "Network Administrator"],
        salary: { min: 55000, avg: 140000, max: 340000 },
        demand: 72,
        demandLevel: "Medium",
        difficulty: 70,
        learningTime: "6-10 months",
        global: 68,
        projects: ["Campus network topology", "Subnetting lab", "Firewall rulebook", "NOC troubleshooting portfolio"]
      }
    ]
  },
  {
    title: "Creative",
    description: "Mix technical skills with product design, media, experiences and growth.",
    fields: [
      {
        id: "game-development",
        title: "Game Development",
        description: "Create games, simulations, mechanics and interactive experiences for multiple devices.",
        skills: ["C#", "Game physics", "Unity", "Level design", "3D basics", "Optimization"],
        tools: ["Unity", "C#", "Blender", "Git", "Itch.io", "Visual Studio"],
        roles: ["Game Developer", "Unity Developer", "Gameplay Programmer"],
        salary: { min: 60000, avg: 150000, max: 400000 },
        demand: 64,
        demandLevel: "Medium",
        difficulty: 78,
        learningTime: "8-12 months",
        global: 78,
        projects: ["2D arcade game", "Physics puzzle prototype", "Multilevel mobile game", "Published game portfolio"]
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Design useful digital products through research, wireframes, prototypes and design systems.",
        skills: ["User research", "Wireframing", "Visual design", "Prototyping", "Usability testing", "Design systems"],
        tools: ["Figma", "FigJam", "Maze", "Notion", "Framer", "Miro"],
        roles: ["UI Designer", "UX Designer", "Product Designer"],
        salary: { min: 65000, avg: 170000, max: 430000 },
        demand: 76,
        demandLevel: "Medium",
        difficulty: 62,
        learningTime: "5-9 months",
        global: 80,
        projects: ["Student app wireframes", "FinTech onboarding redesign", "Clickable SaaS prototype", "UX case study portfolio"]
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Grow products through SEO, paid ads, content, analytics and conversion strategy.",
        skills: ["SEO", "Content strategy", "Analytics", "Paid ads", "Email marketing", "Conversion optimization"],
        tools: ["Google Analytics", "Search Console", "Meta Ads", "Ahrefs", "Canva", "HubSpot"],
        roles: ["SEO Specialist", "Growth Marketer", "Performance Marketer"],
        salary: { min: 50000, avg: 130000, max: 350000 },
        demand: 78,
        demandLevel: "High",
        difficulty: 58,
        learningTime: "4-8 months",
        global: 76,
        projects: ["SEO audit report", "Content calendar", "Ad campaign mock", "Growth analytics dashboard"]
      }
    ]
  },
  {
    title: "Emerging",
    description: "Explore new platforms where software meets hardware, immersive technology and automation.",
    fields: [
      {
        id: "blockchain",
        title: "Blockchain",
        description: "Build decentralized applications, smart contracts, wallets and token-based products.",
        skills: ["Solidity", "Smart contracts", "Web3 integration", "Security", "Token standards", "DeFi basics"],
        tools: ["Solidity", "Hardhat", "Ethers.js", "MetaMask", "OpenZeppelin", "Polygon"],
        roles: ["Blockchain Developer", "Smart Contract Engineer", "Web3 Developer"],
        salary: { min: 85000, avg: 230000, max: 700000 },
        demand: 70,
        demandLevel: "Medium",
        difficulty: 88,
        learningTime: "10-14 months",
        global: 86,
        projects: ["ERC20 token", "NFT minting app", "Secure voting contract", "Audited Web3 portfolio dApp"]
      },
      {
        id: "iot",
        title: "IoT",
        description: "Connect sensors, devices, cloud services and dashboards for smart systems.",
        skills: ["Embedded basics", "Sensors", "Python", "MQTT", "Cloud IoT", "Data dashboards"],
        tools: ["Arduino", "Raspberry Pi", "Python", "MQTT", "Node-RED", "Firebase"],
        roles: ["IoT Engineer", "Embedded Developer", "Automation Engineer"],
        salary: { min: 60000, avg: 155000, max: 420000 },
        demand: 66,
        demandLevel: "Medium",
        difficulty: 80,
        learningTime: "8-12 months",
        global: 74,
        projects: ["Smart attendance sensor", "Temperature monitoring dashboard", "MQTT device network", "Smart campus IoT capstone"]
      },
      {
        id: "ar-vr",
        title: "AR/VR",
        description: "Create immersive training, education, retail and entertainment experiences.",
        skills: ["Unity", "3D interaction", "XR SDKs", "Spatial design", "Performance", "UX for XR"],
        tools: ["Unity", "AR Foundation", "Blender", "Meta Quest SDK", "C#", "Figma"],
        roles: ["XR Developer", "AR Developer", "VR Developer"],
        salary: { min: 65000, avg: 170000, max: 460000 },
        demand: 62,
        demandLevel: "Medium",
        difficulty: 82,
        learningTime: "8-13 months",
        global: 78,
        projects: ["AR product viewer", "VR classroom prototype", "3D campus guide", "Immersive training portfolio"]
      },
      {
        id: "robotics",
        title: "Robotics",
        description: "Combine software, electronics, sensors and control systems for automated machines.",
        skills: ["Python", "Control systems", "Sensors", "ROS", "Computer vision", "Embedded programming"],
        tools: ["ROS", "Python", "Arduino", "Raspberry Pi", "OpenCV", "Gazebo"],
        roles: ["Robotics Engineer", "Automation Engineer", "Research Assistant"],
        salary: { min: 65000, avg: 165000, max: 430000 },
        demand: 60,
        demandLevel: "Medium",
        difficulty: 90,
        learningTime: "12-16 months",
        global: 76,
        projects: ["Line-following robot", "Object detection bot", "ROS simulation", "Autonomous navigation capstone"]
      }
    ]
  },
  {
    title: "Business Tech",
    description: "Bridge business, data, finance and product strategy with technical understanding.",
    fields: [
      {
        id: "business-intelligence",
        title: "Business Intelligence",
        description: "Create dashboards, reports and decision systems for executives and operations teams.",
        skills: ["SQL", "Data modeling", "Power BI", "Excel", "KPI design", "Business storytelling"],
        tools: ["Power BI", "SQL Server", "Excel", "Tableau", "DAX", "BigQuery"],
        roles: ["BI Analyst", "Reporting Analyst", "Data Analyst"],
        salary: { min: 65000, avg: 165000, max: 420000 },
        demand: 80,
        demandLevel: "High",
        difficulty: 64,
        learningTime: "5-9 months",
        global: 78,
        projects: ["Sales KPI dashboard", "HR analytics report", "SQL data warehouse mini model", "Executive BI portfolio"]
      },
      {
        id: "fintech",
        title: "FinTech",
        description: "Build and analyze payment, lending, banking, compliance and finance products.",
        skills: ["APIs", "Payment systems", "Security", "Data analysis", "Compliance basics", "Backend logic"],
        tools: ["Node.js", "PostgreSQL", "Stripe sandbox", "Postman", "Power BI", "Docker"],
        roles: ["FinTech Analyst", "Product Analyst", "Backend Engineer"],
        salary: { min: 75000, avg: 205000, max: 520000 },
        demand: 79,
        demandLevel: "High",
        difficulty: 76,
        learningTime: "7-11 months",
        global: 82,
        projects: ["Payment ledger API", "Wallet transaction dashboard", "Fraud detection rules", "FinTech product case study"]
      },
      {
        id: "product-management",
        title: "Product Management",
        description: "Guide product strategy, feature planning, user research, delivery and growth.",
        skills: ["User research", "Roadmapping", "Analytics", "Agile delivery", "Prioritization", "Stakeholder management"],
        tools: ["Jira", "Notion", "Figma", "Mixpanel", "Google Analytics", "Miro"],
        roles: ["Associate Product Manager", "Product Analyst", "Scrum Master"],
        salary: { min: 70000, avg: 190000, max: 500000 },
        demand: 74,
        demandLevel: "Medium",
        difficulty: 68,
        learningTime: "6-10 months",
        global: 80,
        projects: ["Product requirement document", "User research report", "Feature prioritization board", "SaaS product case study"]
      }
    ]
  }
];

export const allFields = fieldCategories.flatMap((category) =>
  category.fields.map((field) => ({
    ...field,
    category: category.title,
    companies,
    roadmap: buildRoadmap(field)
  }))
);

export const roadmaps = Object.fromEntries(
  allFields.map((field) => [field.id, field.roadmap])
);

export function getRoadmap(fieldId) {
  const field = allFields.find((item) => item.id === fieldId) || allFields[1];
  return {
    field,
    roadmap: field.roadmap
  };
}

export const insightData = allFields.map((field) => ({
  id: field.id,
  field: field.title.replace(" Development", "").replace(" Computing", ""),
  demand: field.demand,
  salary: field.salary.avg,
  global: field.global,
  difficulty: field.difficulty,
  learningMonths: Number(field.learningTime.split("-")[1]?.replace(/\D/g, "")) || 12,
  demandLevel: field.demandLevel
}));

export const dashboardProgress = [
  { skill: "HTML/CSS", progress: 92 },
  { skill: "JavaScript", progress: 76 },
  { skill: "React", progress: 64 },
  { skill: "Node.js", progress: 48 },
  { skill: "MongoDB", progress: 40 },
  { skill: "Cloud Deployment", progress: 32 }
];
