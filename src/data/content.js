// src/data/content.js

export const heroData = {
  name: "MOHAMMED QASIM",
  lvl: 21,
  class: "Frontend Developer",
  uni: "UOITC - ISM Dept",
  hp: 2100,
  mp: 999,
};

export const bioText = `
I am Mohammed Qasim, a fourth-year student at UOITC, majoring in Information Systems Managment (ISM).

As a specialized Frontend Developer, I focus on building high-performance, Progressive Web Apps (PWAs) using the latest Vue.js ecosystem. 
I have a strong passion for transforming complex UI/UX designs into pixel-perfect, responsive code using Tailwind CSS v4.

My goal is to bridge the gap between creative programming and business requirements to deliver seamless digital experiences.
`;

export const skillsData = [
  { name: "JavaScript (ES6+)", cost: "Core", desc: "The Logic Engine: Async/Await, DOM, Modules" },
  { name: "Vue.js 3", cost: "Mastery", desc: "The Framework: Composition API, Script Setup" },
  { name: "HTML5 & CSS3", cost: "Base", desc: "The Foundation: Semantic Markup, Flexbox, Grid" },
  { name: "Tailwind CSS v4", cost: "High", desc: "The Style: JIT Engine, Responsive Design" },
  { name: "Pinia", cost: "State", desc: "Data Mgmt: Global Store & Persistence" }
];

export const socialData = [
  { name: "GitHub", url: "https://github.com/MohammedQasim07", icon: "🐙", color: "text-purple-400", desc: "View Source Code" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-qasim-959940295/", icon: "💼", color: "text-blue-400", desc: "Professional Network" },
  { name: "WhatsApp", url: "https://wa.me/9647766345286", icon: "📞", color: "text-green-500", desc: "+964 776 634 5286" },
  { name: "Email", url: "mailto:mohammedqasim20040609@gmail.com", icon: "📧", color: "text-yellow-400", desc: "Direct Message" }
];

export const questsData = [
  {
    id: 1,
    title: "CINEVERSE",
    status: "Deployed",
    image: "/CiniVerse.png", // تأكد أن الصور في مجلد public
    desc: "A high-performance Progressive Web App (PWA) for discovering movies and anime. Designed with a premium, Netflix-inspired UI featuring infinite scrolling, real-time search, and dynamic filtering.",
    tech: ["Vue 3", "Tailwind v4", "Pinia", "TMDB API"],
    link: "https://cineverse-rust.vercel.app/"
  },
  {
    id: 2,
    title: "GAMEVERSE",
    status: "Deployed",
    image: "/GameVerse.png",
    desc: "A fully responsive PWA for game discovery with offline capabilities. Features a custom 'Retro-Modern' UI system combining pixel-art aesthetics with modern UX.",
    tech: ["Vue 3", "Pinia", "PWA", "RAWG API"],
    link: "https://prismatic-ganache-4e35f1.netlify.app/"
  },
  {
    id: 3,
    title: "AURA | أورا ",
    status: "Deployed",
    image: "/Aura.png",
    desc: "A luxury e-commerce PWA for electronics. Features a premium 'Glassmorphism' UI, dual-theme support (Emerald/Gold), and full RTL localization.",
    tech: ["Vue 3", "Tailwind", "i18n", "E-Commerce"],
    link: "https://benevolent-biscuit-17822c.netlify.app/"
  }
];