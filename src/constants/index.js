import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Swapnil Patil, a creative FullStack developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
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
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow."
  ]
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design."
    ]
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops."
    ]
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic."
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6
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
