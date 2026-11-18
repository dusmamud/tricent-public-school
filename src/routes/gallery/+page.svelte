<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { galleryItems } from '#lib/data/site';

	const filters = ['All', 'Campus', 'Classroom', 'Sports', 'Cultural'];
	let active = $state('All');
	let lightbox = $state<number | null>(null);

	let visible = $derived(
		active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)
	);

	function open(i: number) {
		lightbox = i;
	}
	function close() {
		lightbox = null;
	}
	function step(dir: number) {
		if (lightbox === null) return;
		lightbox = (lightbox + dir + visible.length) % visible.length;
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (lightbox === null) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}}
/>

<PageHero
	title="Gallery"
	subtitle="Moments from our campus — classrooms, playgrounds, stages and assemblies."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="flex flex-wrap justify-center gap-2">
		{#each filters as f}
			<button
				type="button"
				onclick={() => {
					active = f;
					lightbox = null;
				}}
				aria-pressed={active === f}
				class="min-h-11 rounded-full px-5 text-sm font-bold transition {active === f
					? 'bg-forest-900 text-white'
					: 'border border-forest-900/20 bg-white text-forest-900 hover:bg-forest-50'}"
			>
				{f}
			</button>
		{/each}
	</div>

	<div class="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
		{#each visible as g, i}
			<Reveal>
				<button
					type="button"
					onclick={() => open(i)}
					class="group relative block w-full overflow-hidden rounded-xl text-left"
				>
					<picture class="contents">
						<source
							type="image/avif"
							srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[g.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${g.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
						/>
						<source
							type="image/webp"
							srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[g.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${g.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
						/>
						<img
							src={g.src}
							alt={g.title}
							class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					</picture>
					<span
						class="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent"
					></span>
					<span class="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
						<span class="text-sm font-bold text-white">{g.title}</span>
						<span
							class="rounded-full bg-gold-500 px-2 py-0.5 text-[0.6rem] font-extrabold tracking-wider text-forest-950 uppercase"
						>
							{g.category}
						</span>
					</span>
				</button>
			</Reveal>
		{/each}
	</div>
</section>

{#if lightbox !== null}
	<div
		class="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4"
		role="dialog"
		aria-label="Photo viewer"
	>
		<button
			type="button"
			aria-label="Close photo viewer"
			onclick={close}
			class="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
		>
			<Icon name="x" cls="h-5 w-5" />
		</button>
		<button
			type="button"
			aria-label="Previous photo"
			onclick={() => step(-1)}
			class="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
		>
			<Icon name="chevron-left" cls="h-6 w-6" />
		</button>
		<figure class="max-w-4xl text-center">
			<picture class="contents">
				<source
					type="image/avif"
					srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[visible[lightbox].src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${visible[lightbox].src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
					sizes="(max-width: 896px) 100vw, 896px"
				/>
				<source
					type="image/webp"
					srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[visible[lightbox].src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${visible[lightbox].src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
					sizes="(max-width: 896px) 100vw, 896px"
				/>
				<img
					src={visible[lightbox].src}
					alt={visible[lightbox].title}
					class="max-h-[75vh] w-auto rounded-lg object-contain shadow-2xl"
				/>
			</picture>
			<figcaption class="mt-4 flex items-center justify-center gap-3 text-white">
				<span class="font-bold">{visible[lightbox].title}</span>
				<span class="text-white/50">·</span>
				<span class="text-sm text-white/70">{lightbox + 1} / {visible.length}</span>
			</figcaption>
		</figure>
		<button
			type="button"
			aria-label="Next photo"
			onclick={() => step(1)}
			class="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
		>
			<Icon name="chevron-right" cls="h-6 w-6" />
		</button>
	</div>
{/if}
