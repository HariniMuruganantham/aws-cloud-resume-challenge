export const HERO_CONTENT =
  "Building reliable and automated cloud-native systems. DevOps Engineer | AWS | AIOps | Automation. Focused on strengthening DevOps fundamentals, optimizing cloud infrastructure, and exploring AI-driven operational intelligence.";

export const ABOUT_TEXT =
  "I design, automate, and operate systems that move applications from development to production reliably. My primary focus is DevOps and cloud engineering, where I work on Linux-based systems, AWS infrastructure, and CI/CD automation. I enjoy building clean deployment pipelines using GitHub Actions, containerizing applications with Docker, and managing cloud resources with Infrastructure as Code. Alongside core DevOps practices, I actively explore AIOps — building systems that use anomaly detection, LLMs, and autonomous remediation to improve operational workflows. For me, DevOps is about stability, repeatability, and enabling teams to deliver with confidence.";

export const SKILLS = [
  // Cloud
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
    level: 85,
  },

  // OS & Scripting
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg",
    category: "devops",
    level: 85,
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "development",
    level: 80,
  },

  // Containers & CI/CD
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 80,
  },
  {
    name: "Docker Swarm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 70,
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "containers",
    level: 80,
  },
  {
    name: "Git & GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "devops",
    level: 85,
  },

  // Programming
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "development",
    level: 75,
  },

  // GenAI & Automation
  {
    name: "RAG",
    icon: "https://img.icons8.com/ios-filled/100/artificial-intelligence.png",
    category: "ai",
    level: 70,
  },
  {
    name: "LLMs",
    icon: "https://img.icons8.com/ios-filled/100/brain.png",
    category: "ai",
    level: 70,
  },
  {
    name: "LangChain",
    icon: "https://img.icons8.com/ios-filled/100/flow-chart.png",
    category: "ai",
    level: 65,
  },
  {
    name: "n8n",
    icon: "https://img.icons8.com/ios-filled/100/workflow.png",
    category: "ai",
    level: 65,
  },

  // Collaboration
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    category: "tools",
    level: 80,
  },
  {
    name: "Confluence",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
    category: "tools",
    level: 80,
  },
];

export const PROJECTS = [
  // ── AIOps (featured, pinned top) ───────────────────────────────────────────
  {
    title: "AIOps Log Anomaly Detective",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "An AIOps system that ingests AWS CloudWatch logs via LocalStack, runs Isolation Forest anomaly detection, and uses GPT-4o-mini to generate human-readable root-cause summaries. Features a React/Vite dashboard with real-time alert feeds and severity classification.",
    technologies: [
      "Python",
      "Isolation Forest",
      "GPT-4o-mini",
      "LocalStack",
      "Docker",
      "React",
      "Vite",
      "AWS CloudWatch",
    ],
    category: "aiops",
    githubLink: "https://github.com/HariniMuruganantham/AiOps-Log-Anamoly-Detective",
    websiteLink: "",
  },
  {
    title: "AIOps Self-Healing Infrastructure",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description:
      "An autonomous remediation pipeline that monitors simulated AWS infrastructure via LocalStack, detects anomalies with NumPy-based statistical analysis, triggers self-healing actions (restart, scale, rollback), and visualises the live topology using D3.js.",
    technologies: [
      "Python",
      "NumPy",
      "LocalStack",
      "Docker",
      "React",
      "Vite",
      "D3.js",
      "AWS",
    ],
    category: "aiops",
    githubLink: "https://github.com/HariniMuruganantham/AiOps-SelfHealing-Infra",
    websiteLink: "",
  },

  // ── Cloud & DevOps ─────────────────────────────────────────────────────────
  {
    title: "AWS Blue–Green Deployment (Zero Downtime)",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Production-style Blue–Green Deployment on AWS achieving zero-downtime releases using ALB weighted routing, dual Auto Scaling Groups, private subnets, NAT Gateway, and automated health checks.",
    technologies: [
      "AWS",
      "EC2",
      "Application Load Balancer",
      "Auto Scaling",
      "VPC",
      "Blue–Green Deployment",
    ],
    category: "cloud",
    githubLink: "https://github.com/HariniMuruganantham/AWS-Blue-Green-Deployment",
    websiteLink: "",
  },
  {
    title: "Cloud Resume Challenge",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Serverless portfolio hosted on AWS with a live visitor counter. S3 + CloudFront for static hosting, Lambda + API Gateway + DynamoDB for the backend counter, Terraform for IaC, and GitHub Actions for fully automated CI/CD.",
    technologies: [
      "AWS",
      "S3",
      "CloudFront",
      "Lambda",
      "DynamoDB",
      "API Gateway",
      "Terraform",
      "GitHub Actions",
    ],
    category: "cloud",
    githubLink: "https://github.com/HariniMuruganantham/aws-cloud-resume-challenge",
    websiteLink: "https://harini-devops-portfolio.vercel.app/",
  },
  {
    title: "GitHub Integration Automation Script",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80",
    description:
      "Automation script using the GitHub API to integrate repositories with external systems, enabling repeatable DevOps workflows and repository lifecycle management.",
    technologies: ["GitHub API", "Automation", "Shell Scripting", "DevOps"],
    category: "devops",
    githubLink: "https://github.com/HariniMuruganantham/github-integration-script",
    websiteLink: "",
  },
  {
    title: "E-Commerce Cloud Hosting",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Deployed and hosted an e-commerce application on AWS with Terraform-managed infrastructure, focusing on scalability, reliability, and cloud best practices.",
    technologies: ["AWS", "Terraform", "React"],
    category: "cloud",
    githubLink: "",
    websiteLink: "",
  },

  // ── AI ─────────────────────────────────────────────────────────────────────
  {
    title: "AI Tutor Platform",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    description:
      "AI-powered learning platform that summarises content, generates tests, answers questions, and creates personalised learning roadmaps using RAG and LLMs.",
    technologies: ["Python", "RAG", "FAISS", "LLMs", "HuggingFace", "Streamlit", "Groq"],
    category: "ai",
    githubLink: "https://github.com/HariniMuruganantham/AI-Tutor",
    websiteLink: "",
  },
  {
    title: "Travel Chatbot",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    description:
      "Intelligent travel assistant built with LangChain, CrewAI agents, and Groq inference. Handles destination queries, itinerary planning, and travel recommendations.",
    technologies: ["Python", "LangChain", "CrewAI", "Groq"],
    category: "ai",
    githubLink: "https://github.com/HariniMuruganantham/travel-chatbot",
    websiteLink: "",
  },
];

export const CONTACT = {
  address: "India",
  email: "harinimurugananthamm@gmail.com",
  social: {
    github: "https://github.com/HariniMuruganantham",
    linkedin: "https://www.linkedin.com/in/harini-muruganantham",
    substack: "https://substack.com/@harinimuruganantham",
  },
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter((s) => s.category === "cloud"),
  containers: SKILLS.filter((s) => s.category === "containers"),
  devops: SKILLS.filter((s) => s.category === "devops"),
  development: SKILLS.filter((s) => s.category === "development"),
  ai: SKILLS.filter((s) => s.category === "ai"),
  tools: SKILLS.filter((s) => s.category === "tools"),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  aiops: PROJECTS.filter((p) => p.category === "aiops"),
  cloud: PROJECTS.filter((p) => p.category === "cloud"),
  devops: PROJECTS.filter((p) => p.category === "devops"),
  ai: PROJECTS.filter((p) => p.category === "ai"),
};