<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { boardResults } from '#lib/data/more';

	let year = $state(0);
	const current = $derived(boardResults[year]);

	function bar(pct: number) {
		return `width: ${pct}%`;
	}
</script>

<PageHero
	title="Board Results"
	subtitle="CBSE Class X and Class XII results for the last three years — 100% pass rate every year, with toppers and the number of students above 90%."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Board Results' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="tablist" aria-label="Result year">
			{#each boardResults as r, i}
				<button
					type="button"
					role="tab"
					aria-selected={year === i}
					onclick={() => {
						year = i;
					}}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {year === i
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{r.year}
				</button>
			{/each}
		</div>
	</Reveal>

	{#key year}
		<div class="fade-up mt-10 grid gap-6 lg:grid-cols-2">
			{#each [{ label: 'Class X', data: current.x }, { label: 'Class XII', data: current.xii }] as c}
				<Reveal>
					<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
						<div class="flex items-start justify-between gap-3">
							<div>
								<p class="text-xs font-extrabold tracking-[0.25em] text-gold-700 uppercase">
									CBSE Board · {current.year}
								</p>
								<h2 class="mt-2 font-display text-3xl font-bold text-forest-900">{c.label}</h2>
							</div>
							<span
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
							>
								<Icon name="trophy" cls="h-7 w-7" />
							</span>
						</div>

						<div class="mt-6">
							<div class="flex items-end justify-between">
								<span class="text-sm font-bold text-ink/70">Pass percentage</span>
								<span class="font-display text-4xl font-bold text-forest-900">{c.data.pass}%</span>
							</div>
							<div class="mt-2 h-3 overflow-hidden rounded-full bg-forest-900/10">
								<div
									class="h-full rounded-full bg-gradient-to-r from-forest-700 to-gold-500 transition-all duration-1000"
									style={bar(c.data.pass)}
								></div>
							</div>
						</div>

						<dl class="mt-7 grid grid-cols-3 gap-4 border-t border-forest-900/10 pt-6 text-center">
							<div>
								<dt class="text-[0.65rem] font-bold tracking-wider text-ink/50 uppercase">Appeared</dt>
								<dd class="mt-1 font-display text-2xl font-bold text-forest-900">{c.data.appeared}</dd>
							</div>
							<div>
								<dt class="text-[0.65rem] font-bold tracking-wider text-ink/50 uppercase">Passed</dt>
								<dd class="mt-1 font-display text-2xl font-bold text-forest-900">{c.data.passed}</dd>
							</div>
							<div>
								<dt class="text-[0.65rem] font-bold tracking-wider text-ink/50 uppercase">Above 90%</dt>
								<dd class="mt-1 font-display text-2xl font-bold text-forest-900">{c.data.above90}</dd>
							</div>
						</dl>

						<div class="mt-6 flex items-center gap-3 rounded-lg bg-cream px-4 py-3">
							<Icon name="award" cls="h-6 w-6 shrink-0 text-gold-600" />
							<p class="text-sm">
								<span class="font-bold text-forest-900">School Topper: {c.data.topper}</span>
								<span class="text-ink/60"> — {c.data.topScore}</span>
							</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	{/key}

	<Reveal>
		<div class="mt-12">
			<SectionHeading eyebrow="Three-Year Trend" text="Consistent 100% pass rates in both Class X and Class XII.">
				Results at a <span class="text-gold-600 italic">Glance</span>
			</SectionHeading>
			<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full min-w-[560px] text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Year</th>
							<th class="px-5 py-3.5 font-bold">Class X — Appeared / Passed</th>
							<th class="px-5 py-3.5 font-bold">Class XII — Appeared / Passed</th>
							<th class="px-5 py-3.5 font-bold">Above 90% (X + XII)</th>
						</tr>
					</thead>
					<tbody>
						{#each boardResults as r}
							<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
								<td class="px-5 py-3.5 font-bold text-forest-900">{r.year}</td>
								<td class="px-5 py-3.5 text-ink/70">{r.x.appeared} / {r.x.passed} ({r.x.pass}%)</td>
								<td class="px-5 py-3.5 text-ink/70">{r.xii.appeared} / {r.xii.passed} ({r.xii.pass}%)</td>
								<td class="px-5 py-3.5 font-bold text-forest-900">{r.x.above90 + r.xii.above90}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p class="mt-4 text-sm text-ink/60">
				All results above are demo figures for client presentation. The school will publish its official
				board results here after each examination.
			</p>
		</div>
	</Reveal>
</div>
