export const HERO_CONTENT =
  "Building reliable and automated cloud-native systems. DevOps Engineer | AWS | Automation. Focused on strengthening DevOps fundamentals, optimizing cloud infrastructure, and exploring AI-driven automation.";

export const ABOUT_TEXT =
  "I design, automate, and operate systems that move applications from development to production reliably. My primary focus is DevOps and cloud engineering, where I work on Linux-based systems, AWS infrastructure, and CI/CD automation. I enjoy building clean deployment pipelines using GitHub Actions, containerizing applications with Docker, and managing cloud resources with Infrastructure as Code. Alongside core DevOps practices, I actively explore AI, LLMs, and RAG-based automation to understand how intelligent systems can improve operational workflows. For me, DevOps is about stability, repeatability, and enabling teams to deliver with confidence.";

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
    name: "Shell Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "devops",
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
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "devops",
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
  {
    title: "AI Tutor Platform",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    description:
      "An AI-powered learning platform that summarizes content, generates tests, answers questions, and creates learning roadmaps using RAG and LLMs.",
    technologies: [
      "Python",
      "RAG",
      "FAISS",
      "LLMs",
      "HuggingFace",
      "Streamlit",
      "Groq",
    ],
    category: "ai",
    githubLink: "https://github.com/HariniMuruganantham/AI-Tutor",
    websiteLink: "",
  },
  {
    title: "E-Commerce Cloud Hosting",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Deployed and hosted an e-commerce application on AWS with a focus on scalability, reliability, and cloud best practices.",
    technologies: ["AWS", "Terraform", "React"],
    category: "devops", 
    githubLink: "",
    websiteLink: "",
  },
  {
    title: "Travel Chatbot",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    description:
      "An intelligent chatbot for travel-related queries using LLMs, LangChain, and agent-based workflows.",
    technologies: ["Python", "LangChain", "CrewAI", "Groq"],
    category: "ai",
    githubLink: "https://github.com/HariniMuruganantham/travel-chatbot.git",
    websiteLink: "",
  },
  {
    title: "Cloud Portfolio Hosting",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hosted a personal portfolio on AWS showcasing DevOps projects and technical skills.",
    technologies: ["AWS", "GitHub"],
    category: "devops",
    githubLink: "https://github.com/HariniMuruganantham/aws-cloud-resume-challenge.git",
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
  cloud: SKILLS.filter(skill => skill.category === "cloud"),
  containers: SKILLS.filter(skill => skill.category === "containers"),
  devops: SKILLS.filter(skill => skill.category === "devops"),
  development: SKILLS.filter(skill => skill.category === "development"),
  ai: SKILLS.filter(skill => skill.category === "ai"),
  tools: SKILLS.filter(skill => skill.category === "tools"),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === "devops"),
  ai: PROJECTS.filter(project => project.category === "ai"),
  devopsAI: PROJECTS.filter(project => project.category === "devops-ai"),
};
