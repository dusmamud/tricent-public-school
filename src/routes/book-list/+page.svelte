<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { bookList } from '#lib/data/more';

	const classes = ['Nursery', 'KG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

	let filter = $state('All');

	const shownClasses = $derived(filter === 'All' ? classes : [filter]);

	const shownCount = $derived(bookList.filter((b) => filter === 'All' || b.cls === filter).length);
</script>

<PageHero
	title="Book List 2027–28"
	subtitle="Prescribed textbooks for every class, Nursery to Class XII, for the academic session 2027–28. Use the class filter to see only your child's books."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Book List 2027–28' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Class filter -->
	<Reveal>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter books by class">
			{#each ['All', ...classes] as c}
				<button
					type="button"
					aria-pressed={filter === c}
					onclick={() => {
						filter = c;
					}}
					class="min-h-11 rounded-full px-4 text-sm font-extrabold tracking-wide transition {filter === c
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{c === 'All' ? 'All Classes' : `Class ${c}`}
				</button>
			{/each}
		</div>
		<p class="mt-4 text-sm text-ink/70">
			Showing <strong class="text-forest-900">{shownCount} book{shownCount === 1 ? '' : 's'}</strong>
			{#if filter === 'All'}
				across all classes for session 2027–28.
			{:else}
				for Class {filter}, session 2027–28.
			{/if}
		</p>
	</Reveal>

	<!-- Grouped lists -->
	{#each shownClasses as cls}
		<Reveal>
			<div class="mt-12">
				<SectionHeading eyebrow="Session 2027–28" text="Prescribed textbooks — please buy the exact editions listed below.">
					Class <span class="text-gold-600 italic">{cls}</span>
				</SectionHeading>
				<div class="mt-6 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
					<table class="w-full min-w-[560px] text-left text-sm">
						<thead>
							<tr class="bg-forest-900 text-white">
								<th class="w-40 px-5 py-3.5 font-bold">Subject</th>
								<th class="px-5 py-3.5 font-bold">Book Title</th>
								<th class="px-5 py-3.5 font-bold">Publisher</th>
							</tr>
						</thead>
						<tbody>
							{#each bookList.filter((b) => b.cls === cls) as b}
								<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
									<td class="px-5 py-3.5 font-bold text-forest-900">{b.subject}</td>
									<td class="px-5 py-3.5 text-ink/70">{b.title}</td>
									<td class="px-5 py-3.5 whitespace-nowrap text-ink/70">{b.publisher}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</Reveal>
	{/each}

	<!-- Where to buy -->
	<Reveal>
		<div class="mt-14 rounded-xl border border-forest-900/10 bg-cream px-6 py-6 sm:px-8">
			<div class="flex items-start gap-4">
				<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-forest-800 shadow-sm">
					<Icon name="book" cls="h-6 w-6" />
				</span>
				<div>
					<h3 class="font-display text-lg font-bold text-forest-900">Where to buy</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-ink/70">
						All books on this list are available at the school book counter (open Mon – Sat, 8:00 AM –
						4:00 PM) and at the school’s prescribed vendors in Simri Bakhtiyarpur and Patna. Please buy
						only the editions listed above — older editions may not match the 2027–28 syllabus. Notebooks,
						stationery and school uniforms are also available at the book counter.
					</p>
					<p class="mt-3 text-sm leading-relaxed text-ink/70">
						Questions about the book list? Call the school office on
						<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>
						or write to
						<a href="mailto:info@tricentpublicschool.com" class="font-bold text-forest-800">info@tricentpublicschool.com</a>.
					</p>
				</div>
			</div>
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-10 text-sm text-ink/70">
			All book titles, editions and publishers on this page are demo entries for client presentation.
			The school will publish the final prescribed book list for session 2027–28 before the new session
			begins.
		</p>
	</Reveal>
</div>
