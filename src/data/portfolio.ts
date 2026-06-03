export const PERSONAL_INFO = {
  name: "Santhosh Kumar V",
  roles: ["Full Stack Developer", "Python Developer", "Django Developer", "AI Enthusiast"],
  email: "santhoshkumarv09042005@gmail.com",
  phone: "6374354152",
  github: "https://github.com/santhoshkumarv09042005-cloud",
  linkedin: "https://www.linkedin.com/in/santhosh-kumar-8b42202a3",
  location: "Trichy, Tamil Nadu",
  bio: "I'm a passionate Full Stack Developer from Trichy, Tamil Nadu. I love building scalable web applications and exploring AI-driven solutions.",
  longBio: "Currently employed as a Django Developer Intern at Chadura Tech Pvt, I bridge elegant frontends with powerful Python backends. I'm pursuing my B.Tech in IT and constantly pushing boundaries with modern web technologies.",
  college: "MPNMJ Engineering College",
  degree: "B.Tech Information Technology",
  collegeYear: "2022 – 2026",
  resumeLink: "#",
};

export const STATS = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Months Experience", value: 6, suffix: "+" },
  { label: "GitHub Repos", value: 10, suffix: "+" },
];

export const SKILLS = {
  Backend: [
    { name: "Python", level: 90 },
    { name: "Django", level: 88 },
    { name: "FastAPI", level: 75 },
    { name: "REST APIs", level: 82 },
  ],
  Frontend: [
    { name: "HTML5", level: 92 },
    { name: "CSS3", level: 88 },
    { name: "JavaScript", level: 72 },
    { name: "Bootstrap", level: 80 },
  ],
  Database: [
    { name: "PostgreSQL", level: 82 },
    { name: "SQLite", level: 88 },
    { name: "MySQL", level: 70 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Linux", level: 80 },
    { name: "VS Code", level: 90 },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Django REST API Backend",
    description: "Production-ready REST API with JWT authentication, role-based access control, and full CRUD operations. Built during internship at Chadura Tech.",
    tech: ["Django", "DRF", "PostgreSQL", "JWT"],
    category: "Django Projects",
    github: "https://github.com/santhoshkumarv09042005-cloud",
    live: "#",
    featured: true,
    color: "#a855f7",
  },
  {
    id: 2,
    title: "FastAPI Microservice",
    description: "High-performance async REST API built with FastAPI, featuring automatic OpenAPI documentation, Pydantic validation, and PostgreSQL integration.",
    tech: ["FastAPI", "Python", "PostgreSQL", "Pydantic"],
    category: "Full Stack Projects",
    github: "https://github.com/santhoshkumarv09042005-cloud",
    live: "#",
    featured: true,
    color: "#22d3ee",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "Ultra-modern 3D portfolio website built with Next.js, Three.js, and Framer Motion featuring glassmorphism design and smooth animations.",
    tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    category: "Web Applications",
    github: "https://github.com/santhoshkumarv09042005-cloud",
    live: "#",
    featured: true,
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "Django E-Commerce App",
    description: "Full-featured e-commerce web application with cart management, user authentication, order tracking, and admin panel.",
    tech: ["Django", "Python", "SQLite", "HTML/CSS"],
    category: "Django Projects",
    github: "https://github.com/santhoshkumarv09042005-cloud",
    live: "#",
    featured: false,
    color: "#ec4899",
  },
  {
    id: 5,
    title: "Student Management System",
    description: "Web-based student management system with attendance tracking, grade management, and role-based dashboards for students and faculty.",
    tech: ["Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    category: "Web Applications",
    github: "https://github.com/santhoshkumarv09042005-cloud",
    live: "#",
    featured: false,
    color: "#10b981",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    type: "internship",
    title: "Django Developer Intern",
    organization: "Chadura Tech Pvt",
    period: "2024 – Present",
    description: "Working on Django-based web applications and REST APIs. Building scalable backend systems, integrating third-party services, and collaborating with the product team.",
    tags: ["Django", "Python", "REST API", "PostgreSQL"],
  },
  {
    id: 2,
    type: "education",
    title: "B.Tech – Information Technology",
    organization: "MPNMJ Engineering College",
    period: "2022 – 2026",
    description: "Pursuing B.Tech in Information Technology with focus on software development, data structures, algorithms, and web technologies. Active in coding clubs and hackathons.",
    tags: ["Python", "Data Structures", "Web Dev", "Networking"],
  },
  {
    id: 3,
    type: "project",
    title: "Open Source & Personal Projects",
    organization: "GitHub",
    period: "2023 – Present",
    description: "Continuously building and publishing personal projects on GitHub. Exploring FastAPI, Django REST Framework, and modern frontend technologies through hands-on projects.",
    tags: ["Python", "Django", "FastAPI", "GitHub"],
  },
];

export const SERVICES = [
  {
    icon: "Server",
    title: "Django Backend",
    description: "Scalable Django web apps and admin panels with clean architecture, ORM optimization, and production-ready configuration.",
    color: "#a855f7",
  },
  {
    icon: "Zap",
    title: "REST API Development",
    description: "Fast, documented REST APIs using Django REST Framework or FastAPI with JWT auth, pagination, and OpenAPI docs.",
    color: "#22d3ee",
  },
  {
    icon: "Globe",
    title: "Full Stack Web Apps",
    description: "End-to-end web applications from database design to responsive frontend, built with modern tech stacks.",
    color: "#3b82f6",
  },
  {
    icon: "Database",
    title: "Database Design",
    description: "Efficient PostgreSQL/MySQL schema design, query optimization, and migration management for production systems.",
    color: "#ec4899",
  },
  {
    icon: "Code2",
    title: "Python Scripting",
    description: "Automation scripts, data processing pipelines, and CLI tools built with Python for real-world business needs.",
    color: "#f59e0b",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECT_CATEGORIES = ["All", "Django Projects", "Full Stack Projects", "Web Applications"];
