import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A-side: Notes (long mathematical write-ups) at /posts/. */
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().optional(),
		description: z.string().optional(),
		/**
		 * A PDF note: the PDF (usually under /files/notes/) is shown page by page with a reader.
		 * The Markdown body, if any, appears above it as an introduction.
		 */
		pdf: z.string().optional(),
	}),
});

/**
 * B-side: Thoughts (随想) at /alice/thoughts/.
 * Files whose name starts with "_" (such as _template.md) are loaded but never published:
 * publishedThoughts() in src/lib/thoughts.ts leaves them out. (Loading the template keeps the
 * folder from ever matching zero files, which would leave deleted posts in Astro's cache.)
 */
const thoughts = defineCollection({
	loader: glob({ base: './src/content/thoughts', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		/** One line shown in the list. */
		description: z.string().optional(),
		/** Language of the post, e.g. 'zh-CN'. Defaults to English. */
		lang: z.string().optional(),
		/** true keeps the post off the site. */
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog, thoughts };
