<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { admissionFaqs } from '#lib/data/site';
	import { generalFaqs } from '#lib/data/more';

	const categories = ['All', 'General', 'Admissions', 'Fees', 'Transport', 'Academics'] as const;
	let cat = $state<(typeof categories)[number]>('All');
	let open = $state<number | null>(0);

	const all = [
		...generalFaqs.map((f) => ({ q: f.q, a: f.a, category: f.category })),
		...admissionFaqs.map((f) => ({ q: f.q, a: f.a, category: 'Admissions' }))
	];
	const shown = $derived(cat === 'All' ? all : all.filter((f) => f.category === cat));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: all.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	})}</script>`}
</svelte:head>

<PageHero
	title="Frequently Asked Questions"
	subtitle="Answers to the questions parents ask us most — admissions, fees, transport, academics and school life."
	crumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
/>

<div class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter questions">
			{#each categories as c}
				<button
					type="button"
					aria-pressed={cat === c}
					onclick={() => {
						cat = c;
						open = 0;
					}}
					class="min-h-11 rounded-full px-4 text-sm font-extrabold tracking-wide transition {cat === c
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{c}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-8 space-y-3">
		{#each shown as f, i}
			<Reveal>
				<div class="overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
					<button
						type="button"
						aria-expanded={open === i}
						onclick={() => {
							open = open === i ? null : i;
						}}
						class="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left"
					>
						<span class="font-bold text-forest-900">{f.q}</span>
						<Icon
							name="chevron-down"
							cls="h-5 w-5 shrink-0 text-forest-800 transition-transform {open === i
								? 'rotate-180'
								: ''}"
						/>
					</button>
					<div
						class="grid transition-all duration-500 ease-in-out {open === i
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<p class="px-5 pb-5 text-sm leading-relaxed text-ink/70">{f.a}</p>
						</div>
					</div>
				</div>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-12 rounded-xl bg-forest-900 px-6 py-8 text-center text-white">
			<SectionHeading eyebrow="Still Curious?" center>
				<span class="text-white">Ask Us <span class="text-gold-400 italic">Directly</span></span>
			</SectionHeading>
			<p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
				Call the school office, send an enquiry, or visit the campus — we are happy to help.
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-3">
				<a
					href="tel:+917544000044"
					class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
				>
					<Icon name="phone" cls="h-4 w-4" />
					+91 75440 00044
				</a>
				<a
					href="/admissions#enquire"
					class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-white/70 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-white hover:text-forest-900"
				>
					ENQUIRE NOW
				</a>
			</div>
		</div>
	</Reveal>
</div>
