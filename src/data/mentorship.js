export const mentors = [
  {
    id: "m-aina-khan",
    name: "Aina Khan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    expertise: ["AI", "Data Science"],
    years: 8,
    rating: 4.9,
    price: 6500,
    slots: ["10:00 AM", "12:30 PM", "04:00 PM"],
    bio: "Senior ML consultant helping BSCS students build AI portfolios, research demos, and internship-ready projects."
  },
  {
    id: "m-hamza-rauf",
    name: "Hamza Rauf",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    expertise: ["Web Dev", "Backend"],
    years: 9,
    rating: 4.8,
    price: 5500,
    slots: ["09:30 AM", "02:00 PM", "07:00 PM"],
    bio: "Full-stack engineer focused on MERN, SaaS architecture, GitHub portfolios, and software house interview prep."
  },
  {
    id: "m-sara-malik",
    name: "Sara Malik",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    expertise: ["Cybersecurity", "Cloud Security"],
    years: 7,
    rating: 4.7,
    price: 6000,
    slots: ["11:00 AM", "03:00 PM", "08:30 PM"],
    bio: "Security mentor for SOC labs, Linux, web security, cloud security, and entry-level cybersecurity roadmaps."
  },
  {
    id: "m-umer-siddiqui",
    name: "Umer Siddiqui",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    expertise: ["DevOps", "Cloud"],
    years: 10,
    rating: 4.9,
    price: 7500,
    slots: ["10:30 AM", "05:00 PM", "09:00 PM"],
    bio: "DevOps lead guiding students through Linux, Docker, CI/CD, AWS, monitoring, and junior cloud roles."
  },
  {
    id: "m-mehak-shah",
    name: "Mehak Shah",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    expertise: ["UI/UX", "Product"],
    years: 6,
    rating: 4.6,
    price: 4500,
    slots: ["01:00 PM", "04:30 PM", "06:30 PM"],
    bio: "Product designer helping students create UX case studies, Figma portfolios, and internship-ready design systems."
  },
  {
    id: "m-bilal-ahmed",
    name: "Bilal Ahmed",
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=400&q=80",
    expertise: ["Data Science", "BI"],
    years: 7,
    rating: 4.5,
    price: 5000,
    slots: ["09:00 AM", "12:00 PM", "05:30 PM"],
    bio: "Analytics consultant mentoring students on SQL, Power BI, Python notebooks, dashboards, and data analyst hiring."
  },
  {
    id: "m-zoya-fatima",
    name: "Zoya Fatima",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    expertise: ["Mobile", "Web Dev"],
    years: 5,
    rating: 4.7,
    price: 4200,
    slots: ["11:30 AM", "02:30 PM", "07:30 PM"],
    bio: "Mobile app mentor covering Flutter, React Native, Firebase, app portfolios, and freelance client workflows."
  },
  {
    id: "m-danish-iqbal",
    name: "Danish Iqbal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    expertise: ["AI", "MLOps"],
    years: 11,
    rating: 5,
    price: 9000,
    slots: ["08:30 AM", "01:30 PM", "06:00 PM"],
    bio: "AI platform advisor for advanced students working on LLM apps, MLOps, deployment, and global remote roles."
  },
  {
    id: "m-nida-hassan",
    name: "Nida Hassan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    expertise: ["Career Strategy", "Web Dev"],
    years: 8,
    rating: 4.8,
    price: 5800,
    slots: ["10:00 AM", "03:30 PM", "08:00 PM"],
    bio: "Career coach for CV reviews, LinkedIn optimization, portfolio positioning, and Pakistani software house interviews."
  }
];

export const consultingPlans = [
  {
    id: "free",
    name: "Free Plan",
    price: 0,
    description: "Start with basic AI guidance and career exploration.",
    features: ["Basic AI guidance", "Career quiz", "Roadmap previews", "Saved careers"]
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 2999,
    description: "Structured guidance for active internship preparation.",
    features: ["2 mentorship sessions/month", "Skill gap review", "Priority roadmap tracking", "Company shortlist"]
  },
  {
    id: "elite",
    name: "Elite Plan",
    price: 7999,
    description: "Weekly coaching for serious career acceleration.",
    features: ["Weekly mentorship", "Resume review", "Portfolio audit", "Mock interview plan"]
  },
  {
    id: "ultimate",
    name: "Ultimate Plan",
    price: 14999,
    description: "Dedicated 1-on-1 consulting and job support.",
    features: ["1-on-1 career coach", "Job application support", "Deep skill analysis", "Hiring ecosystem priority"]
  }
];

export const candidates = [
  { id: "c-1", name: "Ali Raza", skills: ["React", "Node.js", "MongoDB"], level: "Junior", match: 91, education: "BSCS, FAST Lahore" },
  { id: "c-2", name: "Hira Ahmed", skills: ["Python", "Pandas", "Power BI"], level: "Intern", match: 86, education: "BS Data Science, COMSATS" },
  { id: "c-3", name: "Saad Khan", skills: ["AWS", "Docker", "Linux"], level: "Junior", match: 84, education: "BSIT, Punjab University" },
  { id: "c-4", name: "Maham Tariq", skills: ["Figma", "UX Research", "React"], level: "Intern", match: 79, education: "BSSE, NUST" },
  { id: "c-5", name: "Usman Malik", skills: ["Cybersecurity", "Linux", "Networking"], level: "Junior", match: 88, education: "BSCS, UET Taxila" },
  { id: "c-6", name: "Ayesha Noor", skills: ["TensorFlow", "Python", "NLP"], level: "Junior", match: 93, education: "BS AI, ITU Lahore" },
  { id: "c-7", name: "Daniyal Shah", skills: ["Flutter", "Firebase", "REST APIs"], level: "Intern", match: 77, education: "BSCS, Bahria University" },
  { id: "c-8", name: "Fatima Iqbal", skills: ["SQL", "Tableau", "Statistics"], level: "Junior", match: 82, education: "BSDS, IBA Karachi" },
  { id: "c-9", name: "Hassan Javed", skills: ["DevOps", "Kubernetes", "CI/CD"], level: "Junior", match: 89, education: "BSSE, GIKI" },
  { id: "c-10", name: "Zainab Ali", skills: ["JavaScript", "Testing", "Playwright"], level: "Intern", match: 80, education: "BSIT, Air University" },
  { id: "c-11", name: "Rohan Qureshi", skills: ["Backend", "PostgreSQL", "Redis"], level: "Junior", match: 87, education: "BSCS, Iqra University" }
];

export const jobs = [
  { id: "j-1", title: "MERN Intern", company: "Devsinc", skills: ["React", "Node.js"], match: 92 },
  { id: "j-2", title: "AI Research Assistant", company: "Arbisoft", skills: ["Python", "NLP"], match: 88 },
  { id: "j-3", title: "Cloud Trainee", company: "Systems Limited", skills: ["AWS", "Linux"], match: 84 },
  { id: "j-4", title: "Data Analyst Intern", company: "Contour Software", skills: ["SQL", "Power BI"], match: 86 }
];
