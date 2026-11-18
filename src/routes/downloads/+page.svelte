<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { downloads } from '#lib/data/more';
</script>

<PageHero
	title="Downloads"
	subtitle="Forms and documents for parents — admission, transfer certificate, fee challan, transport, leave and bonafide certificate. Print, fill and submit at the school office."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading
			eyebrow="Forms & Documents"
			text="All files are PDF — they open in any browser or PDF reader. Demo forms for client presentation."
		>
			Download <span class="text-gold-600 italic">Centre</span>
		</SectionHeading>
	</Reveal>

	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each downloads as d}
			<Reveal>
				<article
					class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<span
						class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
					>
						<Icon name="file" cls="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-display text-lg leading-snug font-bold text-forest-900">{d.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{d.desc}</p>
					<p class="mt-3 text-xs font-semibold text-ink/70">
						PDF · {d.pages} · {d.size}
					</p>
					<a
						href={d.file}
						download
						class="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
					>
						<Icon name="download" cls="h-4 w-4 text-gold-400" />
						DOWNLOAD PDF
					</a>
				</article>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-12 rounded-xl border border-forest-900/10 bg-cream px-6 py-5">
			<h3 class="font-display text-lg font-bold text-forest-900">Need something else?</h3>
			<p class="mt-1 text-sm leading-relaxed text-ink/70">
				For TC status, bonafide certificates and other documents, visit the school office (Mon – Sat,
				8:00 AM – 4:00 PM) or call
				<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>.
			</p>
		</div>
	</Reveal>
</div>
