export type FocusItem = { label: string; body: string };
export type ExperienceItem = {
  title: string;
  date: string;
  bullets: string[];
};

export const aboutMeta = {
  title: "About me",
  lede: "Software developer focused on backend systems, APIs, and modern full-stack applications.",
  resumeHref: "/Yonas_Girma_Resume.pdf",
  resumeLabel: "Download resume (PDF)",
};

export const focusItems: FocusItem[] = [
  {
    label: "Web development",
    body: "dynamic, data-driven apps with Django and REST APIs; frontend and backend wired through clear API boundaries; CRUD systems end to end.",
  },
  {
    label: "Backend development",
    body: "authentication, databases, APIs, and scalable backend systems with MongoDB and PostgreSQL.",
  },
  {
    label: "Engineering & tools",
    body: " Linux, Docker, Git/GitHub workflows, Postman, and terminal-first development.",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineering Trainee — A2SV (Africa to Silicon Valley)",
    date: "2024 — Present",
    bullets: [
      "Selected for a competitive program centered on data structures and algorithms.",
      "150+ LeetCode problems solved; strong in sliding window, two pointers, and prefix-sum patterns.",
      "Interview-level problem solving and collaborative engineering practice.",
    ],
  },
  {
    title: "Backend Developer — Freelance",
    date: "Jan 2024 — Present",
    bullets: [
      "Built backend systems and APIs with Django REST Framework and Spring Boot",
      "Worked with MongoDB and PostgreSQL for scalable web applications",
      "Developed authentication, integrations, and startup-focused backend services",
    ],
  },
  {
    title: "Full Stack Developer",
    date: "2023 — Present",
    bullets: [
      "Built full-stack applications using Node.js, Express, React, and MongoDB",
      "RESTful APIs with authentication, CRUD, and database integrations.",
      "Responsive UIs with React, Tailwind CSS, and modern layout practices.",
      "Deployments via GitHub, Vercel, and Docker for learning and client work.",
    ],
  },
];

export const stack: string[] = [
  "Python",
  "Django",
  "FastAPI",
  "Spring",
  "Node.js",
  "React",
  "JavaScript",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Linux",
  "Git",
  "Astro",
];
