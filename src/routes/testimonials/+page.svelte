<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { testimonials } from '#lib/data/site';
	import { extraTestimonials } from '#lib/data/more';

	const all = [...testimonials, ...extraTestimonials];
	const kinds = ['All', 'Parents', 'Students', 'Alumni'] as const;
	let kind = $state<(typeof kinds)[number]>('All');

	function kindOf(role: string) {
		if (role.includes('Parent')) return 'Parents';
		if (role.includes('Alumn')) return 'Alumni';
		return 'Students';
	}

	const shown = $derived(kind === 'All' ? all : all.filter((t) => kindOf(t.role) === kind));
</script>

<PageHero
	title="What Families Say"
	subtitle="Parents, students and alumni on life at Tricent — in their own words."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter testimonials">
			{#each kinds as k}
				<button
					type="button"
					aria-pressed={kind === k}
					onclick={() => {
						kind = k;
					}}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {kind === k
						? 'bg-forest-900 text-gold-400'
						: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
				>
					{k}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-10 grid gap-6 md:grid-cols-2">
		{#each shown as t}
			<Reveal>
				<figure
					class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
				>
					<Icon name="quote" cls="h-8 w-8 text-gold-500" />
					<blockquote class="mt-4 flex-1 font-display text-lg leading-relaxed text-forest-900 italic">
						“{t.quote}”
					</blockquote>
					<figcaption class="mt-6 flex items-center gap-3 border-t border-forest-900/10 pt-5">
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-900 text-sm font-bold text-gold-400"
						>
							{t.name
								.replace('Mrs. ', '')
								.replace('Mr. ', '')
								.replace('Ms. ', '')
								.split(' ')
								.map((w) => w[0])
								.slice(0, 2)
								.join('')}
						</span>
						<span>
							<span class="block text-sm font-bold text-forest-900">{t.name}</span>
							<span class="block text-xs text-ink/70">{t.role}</span>
						</span>
						<span class="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
							{#each Array(5) as _}
								<Icon name="star" cls="h-4 w-4 text-gold-500" />
							{/each}
						</span>
					</figcaption>
				</figure>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-12 text-center">
			<SectionHeading center eyebrow="Share Your Story" text="Are you a Tricent parent or alumnus? We would love to hear from you.">
				Your Words <span class="text-gold-600 italic">Matter</span>
			</SectionHeading>
			<a
				href="/contact"
				class="mt-6 inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-7 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
			>
				SHARE YOUR TESTIMONIAL
				<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
			</a>
		</div>
	</Reveal>
</div>
