import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		year: z.string().optional(),
		role: z.string().optional(),
		dek: z.string().optional(),
		stack: z.array(z.string()).optional(),
		liveDemo: z.string().url().optional(),
		github: z.string().url().optional(),
		client: z.string().optional(),
		caseStudy: z.string().url().optional(),
		filterTags: z.array(
			z.enum(['extension', 'fullstack', 'frontend', 'experiment', 'client']),
		),
		cardTags: z.array(z.string()),
		figure: z.string().optional(),
		notes: z.string().optional(),
		order: z.number().optional(),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		meta: z.string().optional(),
		dek: z.string().optional(),
	}),
});

export const collections = { projects, writing };
