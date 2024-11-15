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
  { href: "#insight", label: "Insights" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Swapnil Patil, a creative FullStack developer, crafting immersive and intuitive web experiences.",
  description:
    "I'm currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf"
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
    yearRange: "Feburary 2022 — April 2024",
    title: "Freelance Software Developer",
    location: "Remote, Canada",
    description: [
      "Developed and designed 10+ responsive websites with React and Next.js, leading to a 30% increase in client online engagement and user satisfaction",
      "Implemented efficient ETL processes that reduced data loading time by 40%, improving the accuracy and timeliness of data for client operations and decision-making",
      "Managed MySQL and PostgreSQL databases for 5 projects, optimized cloud applications on AWS and Azure, reducing operational costs by 25% and improving scalability"
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

export const INSIGHTS = [
  {
    name: "ClipGenie",
    title: "AI Video Generator Tool",
    description:
      "Developing ClipGenie, a video editing app, was a fun yet challenging project. I used React for the front-end and Node.js for the back-end to manage user uploads. One of the biggest hurdles was creating a fast and responsive preview system for users to check their edits. By utilizing Web Workers and HTML5 Video APIs, I managed to offload heavy computations to improve the preview performance, making the app more responsive and user-friendly.",
    image: clipgenie
  },
  {
    name: "Odyssey",
    title: "AI Travel Planning App",
    description:
      "When I started Odyssey, a travel planning app, I wanted to integrate Google Maps API with a clean, intuitive user interface. The challenge was to balance complex backend data with a user-friendly front end. I tackled this by building a scalable architecture in React and optimizing the API calls to ensure fast, real-time updates. This project gave me hands-on experience in geolocation services and how to structure data effectively for front-end consumption.",
    image: odyssey
  },
  {
    name: "SnapLogo",
    title: "Real-Time Logo Generator",
    description:
      "In building SnapLogo, I combined my interest in design and coding. The biggest obstacle was integrating Tailwind CSS with custom animations in React. It took some time to fine-tune the styles to be fully responsive, but I eventually achieved a fluid and scalable interface. Through this project, I strengthened my front-end development skills and became more comfortable with design systems, ensuring consistency and user satisfaction.",
    image: snaplogo
  },
  {
    name: "Ticket Management App",
    title: "Customer Support Ticket System",
    description:
      "With my Ticket Management App, I aimed to streamline the process of managing customer support tickets. The main challenge was creating a robust backend using Django and connecting it to a React frontend. Ensuring smooth communication between the two frameworks was tricky at first, but implementing RESTful APIs and efficient data models solved the issue. This project helped me improve my skills in backend development while learning about the complexities of managing real-time data.",
    image: tkt_mgnt
  },
  {
    name: "Lung and Colon Cancer Detection (Capstone Project)",
    title: "Histopathological Image Analysis for Cancer Diagnosis",
    description:
      "For my Lung and Colon Cancer Detection project, I focused on building a predictive model using Jupyter Notebook and Python. The challenge was dealing with large datasets and ensuring that the model was both accurate and efficient. I spent a significant amount of time experimenting with various machine learning algorithms, and the final model achieved an impressive accuracy rate. This project was a major step in expanding my knowledge of data science and machine learning.",
    image: cancer_diagnosis
  },
  {
    name: "MindScribe (Future Project)",
    title: "AI-Powered Note-Taking App",
    description:
      "I'm in the early stages of building MindScribe, an AI-powered note-taking app, which will allow users to highlight key points in PDFs and summarize them. The biggest challenge will be integrating LangChain for NLP capabilities while ensuring the UI is intuitive and easy to use. I'm currently working on the data flow and backend architecture, making sure it's scalable for future features like voice-to-text. This project will push me to further develop my skills in AI and cloud computing.",
    image: mindscribe
  }
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "jason@example.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill"
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill"
    }
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`
};
