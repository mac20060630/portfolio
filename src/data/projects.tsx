import { ReactNode } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiFramer, 
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const commonSkills = {
  nextjs: {
    title: "Next.js",
    bg: "bg-black",
    fg: "text-white",
    icon: <SiNextdotjs />,
  },
  react: {
    title: "React",
    bg: "bg-[#61DAFB]",
    fg: "text-black",
    icon: <SiReact />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "bg-[#06B6D4]",
    fg: "text-white",
    icon: <SiTailwindcss />,
  },
  framer: {
    title: "Framer Motion",
    bg: "bg-black",
    fg: "text-white",
    icon: <SiFramer />,
  },
  typescript: {
    title: "TypeScript",
    bg: "bg-[#3178C6]",
    fg: "text-white",
    icon: <SiTypescript />,
  },
  javascript: {
    title: "JavaScript",
    bg: "bg-[#F7DF1E]",
    fg: "text-black",
    icon: <SiJavascript />,
  },
};

const projects: Project[] = [
  {
    id: "abhii-studio",
    category: "Artist Portfolio",
    title: "Abhii Studio",
    src: "/assets/projects/abhii-studio.png",
    screenshots: ["abhii-studio.png"],
    skills: {
      frontend: [
        commonSkills.nextjs,
        commonSkills.react,
        commonSkills.tailwind,
        commonSkills.framer,
      ],
      backend: [],
    },
    live: "https://abhiistudio.vercel.app/",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          A digital archive and portfolio for Abhijit Debnath, an interdisciplinary artist whose work explores themes of memory, displacement, and temporary structures using materials like bamboo and textile.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          The site features high-fidelity visual documentation of artistic installations, with smooth GSAP and Framer Motion transitions that mirror the organic nature of the work.
        </p>
      </div>
    ),
  },
  {
    id: "white-pearl",
    category: "Venue Showcase",
    title: "White Pearl Convention Centre",
    src: "/assets/projects/white-pearl.png",
    screenshots: ["white-pearl.png"],
    skills: {
      frontend: [
        commonSkills.nextjs,
        commonSkills.react,
        commonSkills.tailwind,
        commonSkills.framer,
        commonSkills.typescript,
      ],
      backend: [],
    },
    live: "https://whitepearl-eight.vercel.app/",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          The official website for White Pearl Convention Centre, a premiere wedding venue in Bengaluru. The platform provides an immersive look into their luxurious spaces and world-class hospitality services.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Includes interactive venue explorers, capacity details, and a seamless booking inquiry flow designed to convert high-end celebration leads.
        </p>
      </div>
    ),
  },
  {
    id: "flowersss",
    category: "Interactive Animation",
    title: "Flowersss",
    src: "/assets/projects/flowers-coral.png",
    screenshots: ["flowers-coral.png"],
    skills: {
      frontend: [
        commonSkills.javascript,
      ],
      backend: [],
    },
    live: "https://flowers-coral-ten.vercel.app/",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          An interactive, bioluminescent floral animation that glows against a dark, starry background. The site serves as a creative showcase, featuring fluid, glowing animations of blooming flowers and grass.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Built as a visual surprise, this project highlights custom CSS and JavaScript animations to create a serene, ambient experience.
        </p>
      </div>
    ),
  },
];

export default projects;
