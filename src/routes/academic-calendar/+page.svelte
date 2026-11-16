<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { calendarTerms, calendarEvents } from '#lib/data/more';

	const categories = ['All', 'Holiday', 'Exam', 'Event', 'Activity'] as const;
	let filter = $state<(typeof categories)[number]>('All');

	const shown = $derived(
		filter === 'All' ? calendarEvents : calendarEvents.filter((e) => e.category === filter)
	);

	const catStyle: Record<string, string> = {
		Holiday: 'bg-red-50 text-red-700',
		Exam: 'bg-forest-50 text-forest-800',
		Event: 'bg-gold-500/15 text-gold-600',
		Activity: 'bg-cream text-ink/70'
	};
</script>

<PageHero
	title="Academic Calendar 2026–27"
	subtitle="Terms, examinations, holidays and events for the whole academic year — so parents can plan the year at a glance."
	crumb={[
		{ label: 'Home', href: '/' },
		{ label: 'Academics', href: '/academics' },
		{ label: 'Academic Calendar' }
	]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2">
		{#each calendarTerms as t}
			<Reveal>
				<div class="flex h-full gap-4 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<span
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-400"
					>
						<Icon name="calendar" cls="h-7 w-7" />
					</span>
					<div>
						<h2 class="font-display text-2xl font-bold text-forest-900">{t.term}</h2>
						<p class="mt-1 text-sm font-bold text-gold-600">{t.period}</p>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{t.note}</p>
					</div>
				</div>
			</Reveal>
		{/each}
	</div>

	<section class="mt-14">
		<Reveal>
			<SectionHeading eyebrow="Year at a Glance" text="Filter by holidays, examinations, events or activities.">
				Important <span class="text-gold-600 italic">Dates</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter calendar">
				{#each categories as c}
					<button
						type="button"
						aria-pressed={filter === c}
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

		<Reveal>
			<div class="mt-8 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				{#each shown as e}
					<div
						class="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-forest-900/5 px-5 py-3.5 transition last:border-0 hover:bg-forest-50/60"
					>
						<span class="w-44 shrink-0 text-sm font-bold text-forest-900">{e.date}</span>
						<span class="min-w-0 flex-1 text-sm text-ink/75">{e.event}</span>
						<span
							class="rounded-full px-3 py-1 text-[0.65rem] font-extrabold tracking-wider uppercase {catStyle[
								e.category
							]}"
						>
							{e.category}
						</span>
					</div>
				{:else}
					<p class="px-5 py-8 text-center text-sm text-ink/60">No dates in this category.</p>
				{/each}
			</div>
		</Reveal>
		<p class="mt-4 text-sm text-ink/60">
			Dates are indicative (demo) and may change with CBSE / state government circulars. The school office
			confirms the final dates each term — call
			<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>.
		</p>
	</section>
</div>
