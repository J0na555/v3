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
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string(),
				}),
			)
			.optional(),
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
