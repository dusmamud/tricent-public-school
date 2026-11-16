<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { newsItems } from '#lib/data/site';

	const upcoming = [
		{ day: '22', month: 'Nov', title: 'Annual Sports Day', text: 'March past, track finals and the inter-house championship at the school ground. Parents welcome.' },
		{ day: '05', month: 'Dec', title: 'Science & Art Exhibition', text: 'Working models, robotics demos and art displays by Classes III–XII in the auditorium.' },
		{ day: '20', month: 'Dec', title: 'Christmas Carnival & Fete', text: 'Games, food stalls and performances — our annual family carnival before the winter break.' }
	];
</script>

<PageHero
	title="News & Events"
	subtitle="What is happening at Tricent — results, championships, celebrations and dates to remember."
	crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="News">
			Latest <span class="text-gold-600 italic">News</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each newsItems as n}
			<Reveal>
				<article class="h-full overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
					<div class="relative aspect-[16/10] overflow-hidden">
						<img src={n.image} alt={n.title} class="h-full w-full object-cover" loading="lazy" />
						<span class="absolute top-3 left-3 rounded-sm bg-gold-500 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-wider text-forest-950 uppercase">
							{n.tag}
						</span>
					</div>
					<div class="p-5">
						<p class="flex items-center gap-1.5 text-xs font-semibold text-ink/50">
							<Icon name="calendar" cls="h-3.5 w-3.5" />
							{n.date}
						</p>
						<h2 class="mt-2 font-display text-lg leading-snug font-bold text-forest-900">{n.title}</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{n.text}</p>
					</div>
				</article>
			</Reveal>
		{/each}
	</div>
</section>

<section class="bg-cream">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<SectionHeading eyebrow="School Calendar" center>
				Upcoming <span class="text-gold-600 italic">Events</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-10 space-y-4">
			{#each upcoming as e}
				<Reveal>
					<div class="flex gap-5 rounded-xl border border-forest-900/10 bg-white p-5 shadow-sm sm:items-center">
						<div class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-forest-900 text-white">
							<span class="font-display text-2xl leading-none font-bold text-gold-400">{e.day}</span>
							<span class="mt-0.5 text-[0.65rem] font-extrabold tracking-widest uppercase">{e.month}</span>
						</div>
						<div>
							<h3 class="font-display text-lg font-bold text-forest-900">{e.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-ink/65">{e.text}</p>
						</div>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>
