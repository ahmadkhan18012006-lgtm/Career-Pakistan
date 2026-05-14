export const quizCareers = [
  "Frontend Development",
  "Backend Development",
  "Full Stack",
  "AI/ML",
  "Data Science",
  "Cyber Security",
  "Cloud Computing",
  "UI/UX",
  "DevOps",
  "Mobile Development"
];

export const careerFieldMap = {
  "Frontend Development": "web-development",
  "Backend Development": "backend-engineering",
  "Full Stack": "web-development",
  "AI/ML": "ai-engineering",
  "Data Science": "data-science",
  "Cyber Security": "cybersecurity",
  "Cloud Computing": "cloud-computing",
  "UI/UX": "ui-ux-design",
  DevOps: "devops",
  "Mobile Development": "mobile-app-development"
};

export const quizQuestions = [
  {
    id: "work_style",
    category: "Work Style",
    question: "What type of work do you enjoy most?",
    helper: "Choose the option that feels most natural, not the one that sounds most impressive.",
    options: [
      {
        id: "visual_interfaces",
        label: "Designing and building visual interfaces",
        description: "Web apps, dashboards, UI components, product screens",
        weights: { "Frontend Development": 10, "UI/UX": 7, "Full Stack": 5, "Mobile Development": 4 }
      },
      {
        id: "systems_logic",
        label: "Solving backend logic and systems problems",
        description: "APIs, databases, architecture, scalability",
        weights: { "Backend Development": 10, "Full Stack": 8, DevOps: 4, "Cloud Computing": 4 }
      },
      {
        id: "data_ai",
        label: "Finding patterns in data and building intelligent systems",
        description: "Models, analytics, automation, predictions",
        weights: { "AI/ML": 10, "Data Science": 9, "Backend Development": 3 }
      },
      {
        id: "security_ops",
        label: "Protecting systems and keeping infrastructure reliable",
        description: "Security, cloud, Linux, monitoring, operations",
        weights: { "Cyber Security": 10, DevOps: 7, "Cloud Computing": 7, "Backend Development": 2 }
      }
    ]
  },
  {
    id: "favorite_tools",
    category: "Tools",
    question: "Which toolkit sounds most exciting to learn?",
    helper: "Your preferred tools are a strong signal for career fit.",
    options: [
      {
        id: "react_stack",
        label: "React, Tailwind, JavaScript, design systems",
        description: "Modern frontend and product UI development",
        weights: { "Frontend Development": 10, "Full Stack": 6, "UI/UX": 4 }
      },
      {
        id: "node_db",
        label: "Node.js, PostgreSQL, MongoDB, APIs",
        description: "Server-side application development",
        weights: { "Backend Development": 10, "Full Stack": 9, DevOps: 3 }
      },
      {
        id: "python_ml",
        label: "Python, Pandas, TensorFlow, notebooks",
        description: "Data, machine learning and AI workflows",
        weights: { "AI/ML": 10, "Data Science": 10, "Backend Development": 2 }
      },
      {
        id: "aws_linux",
        label: "AWS, Docker, Linux, Kubernetes",
        description: "Cloud, deployment and reliability tooling",
        weights: { "Cloud Computing": 10, DevOps: 10, "Cyber Security": 4 }
      }
    ]
  },
  {
    id: "project_preference",
    category: "Projects",
    question: "Which portfolio project would you rather build?",
    helper: "A strong portfolio project should match the work you can repeat for months.",
    options: [
      {
        id: "saas_dashboard",
        label: "A polished SaaS dashboard",
        description: "Responsive UI, charts, forms, auth, API integration",
        weights: { "Frontend Development": 9, "Full Stack": 9, "UI/UX": 5 }
      },
      {
        id: "api_platform",
        label: "A secure API platform",
        description: "Auth, database models, caching, validation, deployment",
        weights: { "Backend Development": 10, "Full Stack": 8, DevOps: 4, "Cloud Computing": 3 }
      },
      {
        id: "ai_predictor",
        label: "An AI prediction or recommendation app",
        description: "Data processing, model evaluation, useful predictions",
        weights: { "AI/ML": 10, "Data Science": 9, "Full Stack": 3 }
      },
      {
        id: "mobile_cloud_security",
        label: "A mobile app or secure cloud lab",
        description: "Mobile screens, deployment, monitoring, security reports",
        weights: { "Mobile Development": 9, "Cloud Computing": 7, "Cyber Security": 7, DevOps: 5 }
      }
    ]
  },
  {
    id: "strengths",
    category: "Strengths",
    question: "What are you naturally good at?",
    helper: "Career matching improves when strengths and interest overlap.",
    options: [
      {
        id: "visual_detail",
        label: "Visual detail and user empathy",
        description: "You notice layout, flow, friction and polish",
        weights: { "UI/UX": 10, "Frontend Development": 8, "Mobile Development": 4 }
      },
      {
        id: "logic_debugging",
        label: "Logic, debugging and structured thinking",
        description: "You enjoy breaking problems into clean systems",
        weights: { "Backend Development": 9, "Full Stack": 8, "Cyber Security": 4 }
      },
      {
        id: "math_analysis",
        label: "Math, analysis and experimentation",
        description: "You like evidence, testing and measurable results",
        weights: { "Data Science": 10, "AI/ML": 9, "Cloud Computing": 2 }
      },
      {
        id: "automation_reliability",
        label: "Automation and reliability",
        description: "You enjoy making systems repeatable and stable",
        weights: { DevOps: 10, "Cloud Computing": 9, "Cyber Security": 5 }
      }
    ]
  },
  {
    id: "career_goal",
    category: "Goal",
    question: "What is your most important goal for the next 12 months?",
    helper: "Later answers carry more weight because they express your near-term direction.",
    options: [
      {
        id: "internship_fast",
        label: "Get an internship or freelance work quickly",
        description: "Portfolio-first path with visible projects",
        weights: { "Frontend Development": 10, "Full Stack": 8, "UI/UX": 6, "Mobile Development": 5 }
      },
      {
        id: "high_salary",
        label: "Aim for high-growth technical roles",
        description: "Harder learning curve, stronger long-term upside",
        weights: { "AI/ML": 10, "Cloud Computing": 8, DevOps: 8, "Backend Development": 7 }
      },
      {
        id: "software_house",
        label: "Join a Pakistani software house",
        description: "Software teams, product delivery, client projects",
        weights: { "Full Stack": 9, "Backend Development": 8, "Frontend Development": 7, DevOps: 5 }
      },
      {
        id: "secure_systems",
        label: "Work in security, infrastructure or operations",
        description: "Networks, cloud, Linux and defensive workflows",
        weights: { "Cyber Security": 10, "Cloud Computing": 9, DevOps: 8 }
      }
    ]
  },
  {
    id: "learning_preference",
    category: "Learning",
    question: "How do you prefer to learn?",
    helper: "This helps estimate which roadmap you can sustain.",
    options: [
      {
        id: "build_ui",
        label: "Build small visual projects repeatedly",
        description: "You learn by seeing progress on screen",
        weights: { "Frontend Development": 9, "Mobile Development": 7, "UI/UX": 7, "Full Stack": 5 }
      },
      {
        id: "read_docs",
        label: "Read docs and implement systems carefully",
        description: "You like durable engineering knowledge",
        weights: { "Backend Development": 9, "Cloud Computing": 7, DevOps: 6 }
      },
      {
        id: "experiments",
        label: "Run experiments and compare results",
        description: "You like notebooks, metrics and iteration",
        weights: { "Data Science": 10, "AI/ML": 9 }
      },
      {
        id: "labs",
        label: "Practice labs and real-world scenarios",
        description: "You like hands-on systems and troubleshooting",
        weights: { "Cyber Security": 9, DevOps: 8, "Cloud Computing": 8 }
      }
    ]
  }
];
