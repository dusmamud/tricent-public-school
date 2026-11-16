<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { facilities } from '#lib/data/site';
</script>

<PageHero
	title="Facilities"
	subtitle="A green, safe and modern campus — built so that learning never has to wait for a classroom, a lab or a bus."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Facilities' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="Campus" text="Everything a child needs to learn, play, create and grow — on one safe campus.">
			World-Class <span class="text-gold-600 italic">Infrastructure</span>
		</SectionHeading>
	</Reveal>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each facilities as f}
			<Reveal>
				<article
					id={f.id}
					class="h-full scroll-mt-32 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="relative aspect-[16/10] overflow-hidden">
						<img src={f.image} alt={f.title} class="h-full w-full object-cover" loading="lazy" />
						<span
							class="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400 ring-4 ring-white/80"
						>
							<Icon name={f.icon} cls="h-5 w-5" />
						</span>
					</div>
					<div class="p-6">
						<h2 class="font-display text-xl font-bold text-forest-900">{f.title}</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{f.detail}</p>
					</div>
				</article>
			</Reveal>
		{/each}

		<!-- Campus at a glance card -->
		<Reveal>
			<article class="flex h-full flex-col justify-between rounded-xl bg-forest-900 p-6 text-white shadow-sm">
				<div>
					<span class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold-400">
						<Icon name="sparkles" cls="h-5 w-5" />
					</span>
					<h2 class="mt-4 font-display text-xl font-bold">Campus at a Glance</h2>
					<ul class="mt-4 space-y-2.5 text-sm text-white/80">
						<li class="flex gap-2"><span class="text-gold-400">•</span> 6-acre green campus</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> 60+ classrooms, all ventilated</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> 12,000+ books in the library</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> 15 GPS-enabled buses</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> CCTV-secured campus & infirmary</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> RO drinking water & clean washrooms</li>
						<li class="flex gap-2"><span class="text-gold-400">•</span> 500-seat auditorium</li>
					</ul>
				</div>
				<a
					href="/admissions#enquire"
					class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold-500 px-5 text-sm font-extrabold text-forest-950 transition hover:bg-gold-400"
				>
					BOOK A CAMPUS TOUR
					<Icon name="arrow-right" cls="h-4 w-4" />
				</a>
			</article>
		</Reveal>
	</div>
</section>
