import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey there! 👋",
  introduction:
    "I'm Swapnil Patil — Full Stack Developer specializing in AI-integrated web applications, RAG pipelines, and production LLM tooling.",
  description:
    "I build with Next.js, FastAPI, Python, and React. Currently open to full-time roles across Canada and remote.",
  resumeLinkText: "View Resume",
  resumeLink: "/Swapnil_Patil_Full_Stack_Engineer.pdf"
};

export const PROJECTS = [
  {
    name: "CVE Lucid",
    description:
      "A security intelligence dashboard that pulls live CVE data from NIST NVD, with LLM-powered plain-English explanations scoped by role — engineer, manager, or executive. Features full-text search across thousands of vulnerabilities, double opt-in email alerts, and daily digests filtered to your tech stack.",
    stack: "Next.js 14, SQLite FTS5, Groq (Llama 3), Recharts, Resend, TanStack Query",
    image: projects1,
    link: "https://github.com/patil-swap/cve_lucid",
    demoLink: "#"
  },
  {
    name: "EasyLearn",
    description:
      "A full-stack AI book analysis application with a local RAG pipeline. Upload a book, ask questions, get contextually accurate answers with streaming responses. Built with local LLM inference via Ollama — no cloud API dependency.",
    stack: "Next.js, FastAPI, LangChain, ChromaDB, Ollama, FlashrankRerank",
    image: projects2,
    link: "https://github.com/patil-swap/easylearn",
    demoLink: "#"
  },
  {
    name: "ReelScribe",
    description:
      "A media transcription tool that handles YouTube, Instagram, TikTok, and local video files. Automatic provider fallback between Groq Whisper and Deepgram ensures reliability.",
    stack: "FastAPI, Groq Whisper, Deepgram, yt-dlp",
    image: projects3,
    link: "https://github.com/patil-swap/reelscribe",
    demoLink: "#"
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a backend-leaning Full Stack Engineer with 4+ years of experience building production AI features and scalable web platforms. I focus on turning LLMs and RAG pipelines into reliable product capabilities — not just demos.",
    "My recent work includes building RAG-based AI assistants, security intelligence dashboards with LLM-powered explanations, and media transcription tools. I work across the full stack — FastAPI and PostgreSQL on the backend, Next.js and React on the frontend, with LangChain, ChromaDB, and Ollama for AI pipelines. Previously worked on fintech platforms and security compliance automation."
  ]
};

export const EXPERIENCES = [
  {
    yearRange: "May 2025 — January 2026",
    title: "Full Stack Developer at Weevva Systems",
    location: "St John's, Canada",
    description: [
      "Designed and implemented a RAG-based AI assistant using OpenAI APIs (Azure OpenAI Service) and Pinecone vector embeddings; built the full pipeline including PDF ingestion, chunking, embedding, and system prompt guardrails to scope responses to the knowledge domain",
      "Built and maintained frontend features for a rental management dashboard using React, Next.js, and TailwindCSS, including multi-step signup flows, input validations, and the main landing page",
      "Improved model inference performance through optimization and monitoring, reducing latency from 250ms to 120ms in production",
      "Developed and integrated FastAPI backend services with PostgreSQL to support AI-driven workflows and cloud-based deployments on Azure"
    ]
  },
  {
    yearRange: "April 2020 — December 2021",
    title: "Software Engineer at Msys Technologies",
    location: "Pune, India",
    description: [
      "Engineered data integration solutions for configuration management systems using Ruby, reducing audit time by 40% and streamlining compliance efforts",
      "Mitigated non-compliance issues by creating Ruby cookbooks to efficiently oversee specific controls, and improving system reliability by 12%",
      "Deployed and managed applications using Docker and CI/CD pipelines, optimizing AWS and Azure cloud platforms, resulting in a 30% increase in scalability and a 20% cost reduction",
      "Led the Chef Compliance team to complete critical tasks in a remote environment, training 4 new hires and receiving the Performance Excellence Award for Q3 2021"
    ]
  },
  {
    yearRange: "June 2018 — March 2020",
    title: "Associate Software Developer at Allerin Technologies",
    location: "Mumbai, India",
    description: [
      "Directed the development of web applications using Ruby on Rails, CSS, HAML, and JavaScript, employing TDD and agile methodologies, resulting in a 15% improvement in codebase maintainability",
      "Enhanced user engagement by 40% through jQuery for DOM manipulation, event handling, and A/B testing, and achieved a 16% boost in customer retention",
      "Improved data processing efficiency by 17% through SQL optimization, including indexing, partitioning, and query tuning",
      "Developed and integrated automated testing frameworks using RSpec and Jupyter into CI/CD pipelines, achieving over 95% test coverage and ensuring high code quality"
    ]
  }
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "swapnilkpatil96@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/patil-swap",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/s-k-patil",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill"
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/swap_nil_17/",
      ariaLabel: "Explore my coding journey on LeetCode.",
      icon: "RiCodeBoxFill"
    }
  ],
  footerText: `© ${new Date().getFullYear()} Swapnil Patil. All rights reserved.`
};
