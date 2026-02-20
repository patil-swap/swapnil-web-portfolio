import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import clipgenie from "../assets/clipgenie.webp";
import odyssey from "../assets/odyssey.webp";
import snaplogo from "../assets/snaplogo.webp";
import tkt_mgnt from "../assets/tkt_mgnt.webp";
import cancer_diagnosis from "../assets/cancer_diagnosis.webp";
import mindscribe from "../assets/mindscribe.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#mvp-cards", label: "MVP Ideas" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Swapnil Patil, a creative FullStack developer, crafting immersive and intuitive web experiences.",
  description:
    "I'm currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "View Resume",
  resumeLink: "/Swapnil Patil - Full Stack Engineer.pdf"
};

export const PROJECTS = [
  {
    name: "SnapLogo",
    description:
      "A user-friendly logo creation tool built with React, enabling quick, customizable logo designs.",
    image: projects1,
    link: "https://github.com/patil-swap/SnapLogo"
  },
  {
    name: "Odyssey",
    description:
      "An interactive platform to discover and share travel experiences, with a sleek React-based interface.",
    image: projects2,
    link: "https://github.com/patil-swap/SnapLogo"
  },
  {
    name: "ClipGenie",
    description:
      "A React-powered video management app for easy short video generation, clipping, organization, and sharing.",
    image: projects3,
    link: "https://github.com/patil-swap/ClipGenie"
  },
  {
    name: "Ticket Management",
    description:
      "A streamlined ticketing system designed for efficient issue tracking and management.",
    image: projects4,
    link: "https://github.com/patil-swap/Ticket-Management"
  },
  {
    name: "MindScribe",
    description:
      "An AI-powered PDF note-taking app that extracts, organizes, and enhances your study materials for smarter, faster learning",
    image: projects5,
    link: "https://github.com/patil-swap/MindScribe"
  },
  {
    name: "Lung and Colon Cancer Detection",
    description:
      "A data-driven, Jupyter Notebook project utilizing machine learning for early cancer diagnosis.",
    image: projects6,
    link: "https://github.com/patil-swap/Lung-Colon-Cancer-Detection"
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a full-stack developer with a strong foundation in both frontend and backend technologies, creating dynamic and scalable web applications. My experience spans developing interactive UIs to building robust server-side logic, always ensuring a seamless user experience and efficient performance across the stack.",
    "I specialize in frameworks and technologies like Ruby on Rails, Django, React, and Next.js, and leverage cloud platforms such as AWS and Azure for scalable deployments. I've worked with programming languages like JavaScript, Python, and TypeScript, utilizing them in projects that demonstrate my ability to create versatile and efficient solutions. Passionate about problem-solving, I focus on writing clean, modular code while collaborating with teams to create user-centric solutions that exceed expectations. I'm always seeking new challenges to further enhance my skills and contribute to innovative projects."
  ]
};

export const EXPERIENCES = [
  {
    yearRange: "May 2025 — January 2026",
    title: "Full Stack Developer at Weevva Systems",
    location: "St John's, Canada",
    description: [
      "Designed and maintained scalable full-stack applications with AI-driven features, improving automation throughput and reducing manual workflows by roughly 20%",
      "Developed and optimized APIs, data pipelines, and model-inference services using FastAPI and PostgreSQL, cutting average response times by 30-40% under peak use",
      "Built and maintained front-end features with React, Next.js and TailwindCSS, increasing engagement on AI-powered UI components by 10-15% based on usage analytics"
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

export const MVP_CARDS = [
  {
    title:"PDF to Dataset Converter",
    problem:"Training LLMs on custom data is powerful, but turning PDFs into usable datasets is messy.",
    idea:"A tool to upload PDFs, extract content, clean it, and export a structured dataset ready for fine-tuning.",
    target_user:"Students, AI hobbyists, and devs building niche LLM-based tools.",
    mvp: [
      "Upload PDFs",
      "Extract text (ignore headers/footers)",
      "Clean, chunk, and format",
      "Export to JSON/CSV"
    ],
    stack: ["React", "FastAPI", "PyMuPDF or PDFPlumber"]
  },
  {
    title:"AI Prompt Builder",
    problem:"Most people don't know how to write effective prompts. They're vague, messy, or just too long.",
    idea:"A tool that helps you build better prompts by asking guiding questions and structuring your input.",
    target_user:"Junior devs, students, and anyone experimenting with GPT.",
    mvp: [
      "Input your use case",
      "Answer guided questions (output type, tone, format)",
      "Auto-generate prompt",
      "Option to test it with GPT"
    ],
    stack: ["React", "OpenAI API", "Prompt templates"]
  },
  {
    title:"CVE Radar Lite",
    problem:"Security vulnerabilities (CVEs) are published daily, but it's hard to filter what's relevant to your stack.",
    idea:"A filtered CVE tracker that focuses only on high-severity issues in technologies you care about.",
    target_user:"Indie devs, junior engineers, students learning security.",
    mvp: [
      "Pull CVEs from NVD",
      "Filter by CVSS score, keywords, or vendor",
      "Show summary + patch link"
    ],
    stack: ["Next.js", "FastAPI", "NVD API"]
  },
  {
    title:"ReadTick",
    problem:"Many people want to read more but struggle to stay consistent. Most reading apps track progress but don't help build the habit itself.",
    idea:"A minimalist tool to help users commit to daily reading, track streaks, and gently nudge them to keep going.",
    target_user:"Students, professionals, and casual readers trying to build a sustainable reading habit.",
    mvp: [
      "Sign in with email",
      "Add books (title only or upload PDF)",
      "Set a daily read-time goal (e.g., 15 minutes)",
      "Daily prompt: 'Do you want to read today?'",
      "Start timer when user clicks 'Read Now'",
      "After time is up, prompt: 'Want to keep reading?'",
      "Track and display reading streak"
    ],
    stack: ["React", "Supabase", "Firebase Messaging"]
  },
  {
    title:"ThinkLog",
    problem:"Journaling helps with focus and mental clarity, but most people drop off because it feels like a chore.",
    idea:"A minimalist journal that asks one thoughtful question per day and encourages short, consistent reflection.",
    target_user:"Students, developers, or anyone juggling stress and decisions.",
    mvp: [
      "Sign in",
      "One daily prompt (e.g., 'What went right today?')",
      "Short answer limit (e.g., 280 characters)",
      "Calendar view to revisit past entries",
      "Private, no sharing or social features"
    ],
    stack: ["Next.js", "Supabase", "LocalStorage fallback"]
  },
  {
    title:"MealPlan Micro",
    problem:"Most meal planning tools are bloated. Students and busy folks just need a quick way to plan basic meals and prep.",
    idea:"A barebones planner to schedule simple meals and keep track of ingredients - without the fluff.",
    target_user:"Students, solo developers, or anyone trying to avoid impulsive takeout.",
    mvp: [
      "Add meals by day and time (e.g., lunch, dinner)",
      "Attach recipe links or notes",
      "Auto-generate shopping list",
      "Daily reminder: 'Here's your meal plan for today'"
    ],
    stack: ["React", "Supabase or Firebase", "Browser notifications"]
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
