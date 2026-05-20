export type FocusItem = { label: string; body: string };
export type ExperienceItem = {
	title: string;
	date: string;
	bullets: string[];
};

export const aboutMeta = {
	title: 'About me',
	lede: "I'm Jonas — a software developer focused on backend systems, APIs, and clean full-stack delivery. I turn complex problems into maintainable code and interfaces people can actually use.",
	resumeHref: '/Yonas_Girma_Resume.pdf',
	resumeLabel: 'Download resume (PDF)',
};

export const focusItems: FocusItem[] = [
	{
		label: 'Web development',
		body: 'dynamic, data-driven apps with Django and REST APIs; frontend and backend wired through clear API boundaries; CRUD systems end to end.',
	},
	{
		label: 'Backend development',
		body: 'databases with MongoDB and PostgreSQL; authentication and authorization; performance and scalability on the server side.',
	},
	{
		label: 'Engineering & tools',
		body: 'Git/GitHub workflows, Linux and terminal-first development, Docker, Postman, and the usual toolchain for shipping reliably.',
	},
];

export const experience: ExperienceItem[] = [
	{
		title: 'Software Engineering Trainee — A2SV (Africa to Silicon Valley)',
		date: '2024 — Present',
		bullets: [
			'Selected for a competitive program centered on data structures and algorithms.',
			'150+ LeetCode problems solved; strong in sliding window, two pointers, and prefix-sum patterns.',
			'Interview-level problem solving and collaborative engineering practice.',
		],
	},
	{
		title: 'Backend Developer — Freelance',
		date: 'Jan 2024 — Present',
		bullets: [
			'REST APIs with Django REST Framework and Spring Boot.',
			'MongoDB and PostgreSQL for dynamic, data-driven applications.',
			'Backend systems for small startups — auth, CRUD, and integration work.',
		],
	},
	{
		title: 'Full Stack Developer',
		date: '2023 — Present',
		bullets: [
			'Full-stack apps with Node.js, Express, and MongoDB.',
			'RESTful APIs with authentication, CRUD, and database integrations.',
			'Responsive UIs with React, Tailwind CSS, and modern layout practices.',
			'Deployments via GitHub, Vercel, and Docker for learning and client work.',
		],
	},
];

export const stack: string[] = [
	'Python',
	'Django',
	'FastAPI',
	'Spring',
	'Node.js',
	'React',
	'JavaScript',
	'Tailwind',
	'PostgreSQL',
	'MongoDB',
	'Docker',
	'Linux',
	'Git',
	'Astro',
];
