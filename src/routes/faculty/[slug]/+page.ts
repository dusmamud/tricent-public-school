import { allTeachers } from '#lib/data/more';
import { error } from '@sveltejs/kit';

export function entries() {
	return allTeachers.map((t) => ({ slug: t.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const idx = allTeachers.findIndex((t) => t.slug === params.slug);
	if (idx === -1) error(404, 'Teacher not found');
	const teacher = allTeachers[idx];
	return {
		teacher,
		prev: idx > 0 ? allTeachers[idx - 1] : null,
		next: idx < allTeachers.length - 1 ? allTeachers[idx + 1] : null,
		siblings: allTeachers.filter((t) => t.department === teacher.department && t.slug !== teacher.slug)
	};
}
