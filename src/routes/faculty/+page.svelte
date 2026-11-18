<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { facultyDirectory, teacherSlug } from '#lib/data/more';

	const departments = ['All', ...facultyDirectory.map((d) => d.department)];
	let dept = $state('All');

	const shown = $derived(
		dept === 'All' ? facultyDirectory : facultyDirectory.filter((d) => d.department === dept)
	);
</script>

<PageHero
	title="Our Faculty"
	subtitle="90+ qualified educators — from Montessori-trained Pre-Primary teachers to Ph.D. subject experts — who know every child by name and by strength."
	crumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Faculty' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter by department">
			{#each departments as d}
				<button
					type="button"
					aria-pressed={dept === d}
					onclick={() => {
						dept = d;
					}}
					class="min-h-11 rounded-full px-4 text-sm font-extrabold tracking-wide transition {dept === d
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{d}
				</button>
			{/each}
		</div>
	</Reveal>

	{#each shown as group}
		<section class="mt-12">
			<Reveal>
				<SectionHeading eyebrow="{group.members.length} Educators">
					{group.department}
				</SectionHeading>
			</Reveal>
			<div class="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each group.members as m}
					<Reveal>
						<a href="/faculty/{teacherSlug(m.name)}" class="group block h-full">
							<article
								class="h-full rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg"
							>
								<span
									class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-900 font-display text-xl font-bold text-gold-400"
								>
									{m.initials}
								</span>
								<h3
									class="mt-4 font-display text-lg leading-snug font-bold text-forest-900 transition group-hover:text-forest-700"
								>
									{m.name}
								</h3>
								<p class="mt-1 text-sm font-bold text-gold-700">{m.role}</p>
								<p class="mt-2 text-xs leading-relaxed text-ink/70">{m.note}</p>
								<p
									class="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-forest-800"
								>
									VIEW PROFILE
									<Icon name="arrow-right" cls="h-3.5 w-3.5" />
								</p>
							</article>
						</a>
					</Reveal>
				{/each}
			</div>
		</section>
	{/each}

	<Reveal>
		<p class="mt-12 rounded-xl bg-cream px-5 py-4 text-center text-sm leading-relaxed text-ink/70">
			Faculty details are demo entries for client presentation. The school will publish its official staff
			list — with qualifications and experience — here and in the Mandatory Disclosure.
		</p>
	</Reveal>
</div>
