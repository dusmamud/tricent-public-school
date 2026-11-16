<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { notices } from '#lib/data/more';

	const categories = ['All', ...Array.from(new Set(notices.map((n) => n.category)))];
	let filter = $state('All');
	let q = $state('');

	const shown = $derived(
		notices.filter(
			(n) =>
				(filter === 'All' || n.category === filter) &&
				(q.trim() === '' || n.title.toLowerCase().includes(q.trim().toLowerCase()))
		)
	);
	const pinned = $derived(shown.filter((n) => n.pinned));
	const rest = $derived(shown.filter((n) => !n.pinned));
</script>

<PageHero
	title="Notice Board"
	subtitle="Circulars, exam schedules, holidays and announcements for parents and students — check here before calling the office."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Notice Board' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
			<div class="flex flex-wrap gap-2" role="group" aria-label="Filter notices">
				{#each categories as c}
					<button
						type="button"
						aria-pressed={filter === c}
						onclick={() => {
							filter = c;
						}}
						class="min-h-11 rounded-full px-4 text-sm font-extrabold tracking-wide transition {filter ===
						c
							? 'bg-forest-900 text-gold-400'
							: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
					>
						{c}
					</button>
				{/each}
			</div>
			<label class="relative sm:ml-auto sm:w-72">
				<span class="sr-only">Search notices</span>
				<Icon
					name="search"
					cls="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-ink/40"
				/>
				<input
					type="search"
					bind:value={q}
					placeholder="Search notices…"
					class="min-h-11 w-full rounded-full border border-forest-900/20 bg-white pr-4 pl-10 text-sm text-ink placeholder:text-ink/40 focus:border-gold-500 focus:outline-none"
				/>
			</label>
		</div>
	</Reveal>

	{#if pinned.length > 0}
		<section class="mt-10">
			<Reveal>
				<SectionHeading eyebrow="Pinned">
					Important <span class="text-gold-600 italic">Notices</span>
				</SectionHeading>
			</Reveal>
			<div class="mt-6 grid gap-5 md:grid-cols-2">
				{#each pinned as n}
					<Reveal>
						<article
							class="flex h-full gap-4 rounded-xl border border-gold-500/40 bg-gold-500/10 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<span
								class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-950"
							>
								<Icon name="megaphone" cls="h-5 w-5" />
							</span>
							<div class="min-w-0">
								<p class="text-xs font-bold tracking-wider text-gold-600 uppercase">
									{n.date} · {n.category}
								</p>
								<h3 class="mt-1.5 leading-snug font-bold text-forest-900">{n.title}</h3>
							</div>
						</article>
					</Reveal>
				{/each}
			</div>
		</section>
	{/if}

	<section class="mt-12">
		<Reveal>
			<SectionHeading eyebrow="All Circulars">
				Notice <span class="text-gold-600 italic">Archive</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-6 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
			{#each rest as n}
				<div
					class="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-forest-900/5 px-5 py-4 transition last:border-0 hover:bg-forest-50/60"
				>
					<span class="w-32 shrink-0 text-sm font-bold text-forest-900">{n.date}</span>
					<span class="min-w-0 flex-1 text-sm text-ink/75">{n.title}</span>
					<span
						class="rounded-full bg-forest-50 px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-forest-800 uppercase"
					>
						{n.category}
					</span>
				</div>
			{:else}
				<p class="px-5 py-10 text-center text-sm text-ink/60">
					No notices match your search — try another keyword or category.
				</p>
			{/each}
		</div>
		<p class="mt-4 text-sm text-ink/60">
			Notices are demo entries for client presentation. The school office publishes real circulars here and
			on the parent portal.
		</p>
	</section>
</div>
