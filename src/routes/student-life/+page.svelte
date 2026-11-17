<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { clubs, studentCouncil } from '#lib/data/more';

	const categories = ['All', 'Academic', 'Arts', 'Sports', 'Service'] as const;
	type Category = (typeof categories)[number];

	let filter = $state<Category>('All');
	const shown = $derived(filter === 'All' ? clubs : clubs.filter((c) => c.category === filter));

	const clubIcon: Record<string, string> = {
		'Science & Robotics Club': 'flask',
		'Mathematics Club': 'calculator',
		'Literary & Debating Society': 'book',
		'Quiz Club': 'bulb',
		'Music & Choir': 'music',
		'Dance Troupe': 'sparkles',
		'Art & Craft Studio': 'eye',
		'Drama & Theatre Club': 'megaphone',
		'Sports & Fitness Club': 'trophy',
		'NCC & Scouts': 'shield',
		'Eco Club': 'lotus',
		'Interact & Community Service': 'heart'
	};

	const gallery = [
		{ src: '/images/basketball.webp', alt: 'Students playing basketball on the school court', caption: 'Basketball — District Champions 2026' },
		{ src: '/images/dance.png', alt: 'Students performing a dance at a school celebration', caption: 'Dance Troupe — Annual Day performance' },
		{ src: '/images/karate.jpg', alt: 'Students training in karate', caption: 'Karate — State Championship medallists' },
		{ src: '/images/sports-day.jpg', alt: 'Students taking part in the Annual Sports Day', caption: 'Annual Sports Day — Inter-House athletics' }
	];
</script>

<PageHero
	title="Student Life"
	subtitle="Beyond the classroom — clubs, societies, sport and student leadership that help every Tricent student discover what they are good at."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Student Life' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading
			eyebrow="Clubs & Societies"
			text="Twelve clubs meet every week after school. Every student from Class VI upwards joins at least one club — membership is free and open to all."
		>
			Something for <span class="text-gold-600 italic">Every Interest</span>
		</SectionHeading>
	</Reveal>

	<Reveal>
		<div class="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter clubs by category">
			{#each categories as c}
				<button
					type="button"
					role="tab"
					aria-selected={filter === c}
					onclick={() => {
						filter = c;
					}}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {filter === c
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{c}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each shown as club (club.name)}
			<Reveal>
				<article
					class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="flex items-start justify-between gap-3">
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name={clubIcon[club.name] ?? 'star'} cls="h-6 w-6" />
						</span>
						<span
							class="rounded-full bg-gold-500/15 px-3 py-1 text-[0.7rem] font-extrabold tracking-wider text-gold-600 uppercase"
						>
							{club.category}
						</span>
					</div>
					<h3 class="mt-4 font-display text-lg leading-snug font-bold text-forest-900">{club.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{club.desc}</p>
					<div class="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-forest-900/10 pt-4 text-xs font-semibold text-ink/60">
						<span class="inline-flex items-center gap-1.5">
							<Icon name="calendar" cls="h-4 w-4 text-gold-600" />
							Meets {club.day}s
						</span>
						<span class="inline-flex items-center gap-1.5">
							<Icon name="users" cls="h-4 w-4 text-gold-600" />
							{club.members} members
						</span>
					</div>
				</article>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-16">
			<SectionHeading
				eyebrow="Sports & Arts"
				text="From the basketball court to the stage — sport and the arts are part of the timetable, not an afterthought."
			>
				Life Beyond <span class="text-gold-600 italic">the Classroom</span>
			</SectionHeading>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each gallery as g}
					<figure class="overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
						<img src={g.src} alt={g.alt} loading="lazy" class="aspect-[4/3] w-full object-cover" />
						<figcaption class="px-4 py-3 text-sm font-bold text-forest-900">{g.caption}</figcaption>
					</figure>
				{/each}
			</div>
			<div class="mt-6">
				<a
					href="/sports"
					class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
				>
					EXPLORE SPORTS AT TRICENT
					<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
				</a>
			</div>
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-16">
			<SectionHeading
				eyebrow="Student Council 2026–27"
				text="Elected by students and staff, the council leads assemblies, house competitions and community service — and speaks for students in school decisions."
			>
				Student <span class="text-gold-600 italic">Leadership</span>
			</SectionHeading>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each studentCouncil as member}
					<article
						class="rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<span
							class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 font-display text-lg font-bold text-gold-400"
						>
							<Icon name="user" cls="h-7 w-7" />
						</span>
						<h3 class="mt-4 font-display text-lg leading-snug font-bold text-forest-900">{member.name}</h3>
						<p class="mt-1 text-sm font-bold text-gold-600">{member.role}</p>
						<p class="mt-1 text-xs font-semibold text-ink/50">Class {member.class}</p>
					</article>
				{/each}
			</div>
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-12 text-sm text-ink/60">
			All club memberships, meeting days and council names above are demo entries for client presentation.
			The school will publish its official clubs list and elected council here each academic session.
		</p>
	</Reveal>
</div>
