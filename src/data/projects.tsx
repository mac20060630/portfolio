import { ReactNode } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiFramer, 
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiKotlin,
  SiAndroid,
  SiOpenstreetmap,
  SiGooglegemini,
  SiThreedotjs,
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
  node: {
    title: "Node.js",
    bg: "bg-[#339933]",
    fg: "text-white",
    icon: <SiNodedotjs />,
  },
  firebase: {
    title: "Firebase",
    bg: "bg-[#FFCA28]",
    fg: "text-black",
    icon: <SiFirebase />,
  },
  postgresql: {
    title: "PostgreSQL",
    bg: "bg-[#4169E1]",
    fg: "text-white",
    icon: <SiPostgresql />,
  },
  kotlin: {
    title: "Kotlin",
    bg: "bg-[#7F52FF]",
    fg: "text-white",
    icon: <SiKotlin />,
  },
  android: {
    title: "Android Studio",
    bg: "bg-[#3DDC84]",
    fg: "text-black",
    icon: <SiAndroid />,
  },
  gemini: {
    title: "Gemini AI",
    bg: "bg-[#1A73E8]",
    fg: "text-white",
    icon: <SiGooglegemini />,
  },
  osm: {
    title: "OpenStreetMap",
    bg: "bg-[#7EBC6F]",
    fg: "text-white",
    icon: <SiOpenstreetmap />,
  },
  threejs: {
    title: "Three.js / WebGL",
    bg: "bg-black",
    fg: "text-white",
    icon: <SiThreedotjs />,
  },
};

const projects: Project[] = [
  {
    id: "speed-route",
    category: "AI & Mobile Engineering",
    title: "SpeedRoute — AI Travel & Navigation",
    src: "/assets/projects/speed-route.png",
    screenshots: ["speed-route.png"],
    skills: {
      frontend: [
        commonSkills.kotlin,
        commonSkills.android,
        commonSkills.osm,
      ],
      backend: [
        commonSkills.gemini,
      ],
    },
    live: "https://github.com/mac20060630/SpeedRoute/releases",
    github: "https://github.com/mac20060630/SpeedRoute",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          <strong>SpeedRoute (TripRank)</strong> is an intelligent, AI-powered Android travel assistant and turn-by-turn navigation engine built natively with Kotlin and Android Studio.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          It integrates <strong>Google Gemini AI</strong> for automated itinerary generation, real-time OpenStreetMap routing, speed camera proximity warnings, and an interactive global leaderboard where users compare travel efficiency.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Features offline map caching, telemetry sensors, and background GPS tracking optimized for low battery consumption.
        </p>
      </div>
    ),
  },
  {
    id: "the-eye",
    category: "Intelligence & 3D WebGL",
    title: "The Eye — 3D Geopolitical OSINT",
    src: "/assets/projects/the-eye.jpg",
    screenshots: ["the-eye.jpg"],
    skills: {
      frontend: [
        commonSkills.typescript,
        commonSkills.threejs,
        commonSkills.react,
        commonSkills.tailwind,
      ],
      backend: [
        commonSkills.node,
      ],
    },
    live: "https://github.com/mac20060630/ai-arena-proj-the-eye-",
    github: "https://github.com/mac20060630/ai-arena-proj-the-eye-",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          <strong>The Eye (World Monitor)</strong> is an open-source real-time geopolitical intelligence dashboard designed for situational awareness, threat analysis, and live conflict tracking.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Renders an interactive 3D WebGL globe with geospatial telemetry layers displaying active hotspots, cyber attack vectors, satellite feeds, and international flight corridors.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Aggregates real-time feeds from defense observatories, think tanks, and OSINT sources into an intuitive military-grade command center interface.
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
    github: "https://github.com/mac20060630/whitepearl",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          The official website for White Pearl Convention Centre, a premiere wedding and banquet destination in Bengaluru.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Features interactive venue explorers, 3D spatial tours, capacity calculators, and a seamless booking inquiry funnel designed for high-end celebrations.
        </p>
      </div>
    ),
  },
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
          Features high-fidelity visual documentation of artistic installations with smooth GSAP and Framer Motion transitions that mirror the organic nature of the work.
        </p>
      </div>
    ),
  },
  {
    id: "lead-gen-dashboard",
    category: "SaaS Platform",
    title: "Lead Generation & Outreach SaaS",
    src: "/assets/projects/lead-gen-dashboard.png",
    screenshots: ["lead-gen-dashboard.png"],
    skills: {
      frontend: [
        commonSkills.nextjs,
        commonSkills.react,
        commonSkills.tailwind,
        commonSkills.typescript,
      ],
      backend: [
        commonSkills.node,
        commonSkills.firebase,
        commonSkills.postgresql,
      ],
    },
    live: "https://lead-gen-dashboard-demo.vercel.app/",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive automation platform designed to streamline lead acquisition and email marketing workflows.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Featuring a high-performance glassmorphic UI, real-time metrics visualization, and CRM integration, empowering businesses to automate multi-stage email sequences.
        </p>
      </div>
    ),
  },
];

export default projects;
