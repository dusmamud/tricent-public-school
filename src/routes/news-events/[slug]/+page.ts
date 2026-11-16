import { newsItems } from '#lib/data/site';
import { newsBodies } from '#lib/data/more';
import { error } from '@sveltejs/kit';

export function entries() {
	return newsItems.map((n) => ({ slug: n.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const item = newsItems.find((n) => n.slug === params.slug);
	if (!item) error(404, 'News article not found');
	return {
		item,
		body: newsBodies[params.slug] ?? [item.text],
		related: newsItems.filter((n) => n.slug !== params.slug).slice(0, 3)
	};
}
