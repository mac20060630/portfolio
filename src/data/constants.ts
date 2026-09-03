// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  PYTHON = "python",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 26,
    name: "python",
    label: "Python",
    shortDescription: "Sssslithering through data like a boss! 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Freelance Designer",
    company: "Freelance",
    description: [
      "Specializing in web and app design, creating intuitive and visually stunning user interfaces.",
      "Collaborating with clients to translate their vision into functional digital products.",
      "Focused on delivering high-quality, responsive designs that enhance user experience.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.REACT,
    ],
  },
  {
    id: 2,
    startDate: "Jan 2025",
    endDate: "May 2025",
    title: "Project Management Intern",
    company: "Karunadu Technologies Private Limited",
    description: [
      "Coordinated project workflows and ensured timely delivery of key milestones.",
      "Facilitated communication between technical teams and stakeholders.",
      "Gained hands-on experience in Agile methodologies and project life cycle management.",
    ],
    skills: [
      SkillNames.GITHUB,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Jan 2025",
    endDate: "Jan 2025",
    title: "Project Intern",
    company: "F8 Products LLP",
    description: [
      "Contributed to research and development phases of various innovative projects.",
      "Assisted in technical documentation and quality assurance testing.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.PYTHON,
    ],
  },
  {
    id: 4,
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    title: "Student Intern",
    company: "Karunadu Technologies Private Limited",
    description: [
      "Explored various software development practices and assisted senior developers.",
      "Worked on minor feature enhancements and bug fixes for internal tools.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
    ],
  },
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  location: string;
  description: string[];
  skills: SkillNames[];
  status?: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "CMR University (CMRU)",
    location: "Bengaluru, Karnataka",
    status: "Pursuing",
    description: [
      "Specializing in Cloud Computing, AI Architectures, and Modern Distributed Systems.",
      "Actively developing intelligent web systems, 3D WebGL interfaces, and AI-driven platforms.",
      "Participating in hackathons, open-source initiatives, and inter-collegiate technical symposiums.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.PYTHON,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2024",
    degree: "Diploma in Computer Science & Engineering",
    institution: "Nitte Meenakshi Institute of Technology (NMIT)",
    location: "Bengaluru, Karnataka",
    status: "Completed",
    description: [
      "Graduated with a comprehensive foundation in Software Engineering, Algorithms, and Operating Systems.",
      "Acquired hands-on proficiency in Full-Stack Web Development, Relational Databases, and Network Protocols.",
      "Spearheaded technical lab projects and collaborated on capstone software implementations.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.LINUX,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  category: "Leadership" | "Certification" | "AI & ML" | "Hackathon";
  date: string;
  badgeText?: string;
  description: string;
  link?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Core & Editorial Team Member",
    issuer: "OSA 2025 (Open Source Annual Conference)",
    category: "Leadership",
    date: "2025",
    badgeText: "Core Committee",
    description: "Selected for the core editorial and organizing committee for OSA 2025. Directed technical publication documentation, curated speaker sessions, and coordinated technical fest operations.",
  },
  {
    id: 2,
    title: "Cisco Certified: Networking Fundamentals & Protocols",
    issuer: "Cisco Networking Academy",
    category: "Certification",
    date: "2024",
    badgeText: "Cisco Academy",
    description: "Demonstrated verified mastery of TCP/IP suite, OSI layer models, subnetting, network routing, packet forwarding, and secure network infrastructure architecture.",
  },
  {
    id: 3,
    title: "Generative AI Specialization",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "2025",
    badgeText: "Infosys Certified",
    description: "Completed comprehensive training on Transformer models, LLM fine-tuning, prompt engineering, multimodal embeddings, and building generative agentic workflows.",
  },
  {
    id: 4,
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "2024",
    badgeText: "Infosys Certified",
    description: "Rigorous certification covering supervised and unsupervised learning algorithms, neural network design, predictive regression models, and deep learning implementations using Python.",
  },
  {
    id: 5,
    title: "Full-Stack & Interactive Web Engineering",
    issuer: "Independent / Creative Tech Excellence",
    category: "Certification",
    date: "2025",
    badgeText: "Engineering Award",
    description: "Mastery in developing high-performance modern web architectures combining Next.js 14, 3D WebGL (Spline/Three.js), GSAP physics-driven animation, and production cloud deployments.",
  },
  {
    id: 6,
    title: "Hackathon Innovation & Buildathon Finalist",
    issuer: "Inter-Collegiate Technical Symposium",
    category: "Hackathon",
    date: "2024 - 2025",
    badgeText: "Technical Finalist",
    description: "Competed in high-intensity sprint hackathons, designing and presenting functional AI-assisted prototypes and real-time situational awareness dashboards under tight deadlines.",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};


