export interface Project {
  id: number;
  index: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  accent: string;
  link: string;
}

export interface Skill {
  label: string;
  color: string;
}

export interface Experience {
  index: number;
  role: string;
  org: string;
  period: string;
  desc: string;
}

export interface ContactLink {
  label: string;
  href: string;
  value: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    index: "01",
    name: "Constellations",
    description:
      "An offline-first, privacy-focused dream journal for iOS. Voice transcription runs on-device via Whisper. Dreams are tagged automatically with Claude, then visualised as a force-directed star map of recurring symbols.",
    tags: [
      "React Native",
      "Expo",
      "SQLCipher",
      "Drizzle ORM",
      "Claude API",
      "Whisper",
    ],
    year: "2026",
    accent: "hsl(270,50%,60%)",
    link: "https://github.com/apeacewilliams/dream-journal",
  },
  {
    id: 2,
    index: "02",
    name: "Portfolio",
    description:
      "End-to-end encrypted note-taking with local-first sync. Zero knowledge architecture — keys never leave your device. Markdown editor with offline support.",
    tags: ["TypeScript", "Next.js"],
    year: "2026",
    accent: "hsl(200,55%,55%)",
    link: "#",
  },
];

export const SKILLS: Skill[] = [
  { label: "React Native", color: "hsl(270,50%,60%)" },
  { label: "TypeScript", color: "hsl(200,55%,55%)" },
  { label: "React", color: "hsl(200,55%,55%)" },
  { label: "Expo", color: "hsl(270,50%,60%)" },
  { label: "Python", color: "hsl(150,45%,45%)" },
  { label: "Node.js", color: "hsl(150,45%,45%)" },
  { label: "PostgreSQL", color: "hsl(45,60%,55%)" },
  { label: "SQLite", color: "hsl(45,60%,55%)" },
  { label: "Drizzle ORM", color: "hsl(45,60%,55%)" },
  { label: "Next.js", color: "hsl(200,55%,55%)" },
  { label: "Tailwind CSS", color: "hsl(340,55%,55%)" },
  { label: "Claude API", color: "hsl(270,50%,60%)" },
];

export const EXPERIENCE: Experience[] = [
  {
    index: 1,
    role: "Software Engineer",
    org: "Independent",
    period: "2025 — Present",
    desc: "Building Constellations (working name), an offline-first dream journal for iOS. Full-stack ownership: React Native, on-device Whisper transcription, encrypted SQLite, Claude API integration.",
  },
  {
    index: 2,
    role: "Software Engineer",
    org: "Napo",
    period: "Aug 2025 — Dec 2025",
    desc: "Implemented full-stack solutions and led frontend architecture decisions (React, Next.js), improved component systems, and tackled backend challenges in Python (Django, FastAPI).",
  },
  {
    index: 3,
    role: "Software Engineer",
    org: "The Times",
    period: "Oct 2023 — Aug 2025",
    desc: "Developed full-stack features across various projects. Worked across React, Node.js, and PostgreSQL. Owned delivery from design handoff to production in several projects. Led the migration of a major legacy codebase to React and TypeScript.",
  },
  {
    index: 4,
    role: "Software Engineer Apprentice",
    org: "Trainline",
    period: "Sept 2021 — Oct 2023",
    desc: "Developed full-stack features that boosted SEO performance and conversion rate. Worked across React, Node.js, and GraphQL. Completed a 2-year apprenticeship while contributing to the codebase and mentoring new apprentices.",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/apeacewilliams",
    value: "apeacewilliams",
  },
  {
    label: "Email",
    href: "mailto:apeacewilliams@proton.me",
    value: "apeacewilliams@proton.me",
  },
  { label: "LinkedIn", href: "#", value: "in/peaceawilliams" },
];
