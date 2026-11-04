import { getCollection, type CollectionEntry } from 'astro:content';

export type Thought = CollectionEntry<'thoughts'>;

/** Published thoughts, newest first. Drafts and files named "_…" (the template) are left out. */
export async function publishedThoughts(): Promise<Thought[]> {
	const all = await getCollection(
		'thoughts',
		({ id, filePath, data }) =>
			!data.draft && !id.startsWith('_') && !(filePath ?? '').split(/[\\/]/).pop()!.startsWith('_'),
	);
	return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// UTC, so a date in the front matter never shifts by a day.
const dateOpts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
export const fmtDate = (d: Date) => d.toLocaleDateString('en-AU', dateOpts);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
