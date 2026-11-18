<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { tourSpots } from '#lib/data/more';

	let selectedId = $state(tourSpots[0].id);
	const selected = $derived(tourSpots.find((s) => s.id === selectedId) ?? tourSpots[0]);

	const photos = [
		{ src: '/images/hero-campus.webp', caption: 'Main Building', spotId: 'main-building' },
		{ src: '/images/assembly.jpg', caption: 'Auditorium', spotId: 'auditorium' },
		{ src: '/images/library.webp', caption: 'Library', spotId: 'library' },
		{ src: '/images/science-lab.webp', caption: 'Science Labs', spotId: 'science-labs' },
		{ src: '/images/sports-day.jpg', caption: 'Playground', spotId: 'playground' },
		{ src: '/images/school-bus.jpg', caption: 'Bus Bay', spotId: 'bus-bay' },
		{ src: '/images/computer-lab.jpg', caption: 'Computer Lab', spotId: null }
	];

	function pinStyle(spot: (typeof tourSpots)[number]) {
		return `left: ${spot.x}%; top: ${spot.y}%;`;
	}
</script>

<PageHero
	title="Virtual Tour"
	subtitle="Walk the campus without leaving home — tap a numbered pin on the map to see each corner of Tricent, from the Main Building to the Bus Bay."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Virtual Tour' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading
			eyebrow="Campus Map"
			text="Six stops around our 3.2-acre campus. Select a pin on the map, or use the list below it."
		>
			Explore the <span class="text-gold-600 italic">Campus</span>
		</SectionHeading>
	</Reveal>

	<div class="mt-10 grid gap-6 lg:grid-cols-5">
		<Reveal cls="lg:col-span-3">
			<div id="campus-map" class="rounded-xl border border-forest-900/10 bg-white p-4 shadow-sm sm:p-5">
				<div class="relative aspect-[1000/620] w-full overflow-hidden rounded-lg">
					<svg
						viewBox="0 0 1000 620"
						preserveAspectRatio="xMidYMid slice"
						class="absolute inset-0 h-full w-full"
						role="img"
						aria-label="Stylised map of the Tricent Public School campus"
					>
						<rect x="0" y="0" width="1000" height="620" fill="#d8e8cf" />
						<rect x="0" y="500" width="1000" height="62" fill="#9aa0a6" />
						<line
							x1="0"
							y1="531"
							x2="1000"
							y2="531"
							stroke="#ffffff"
							stroke-width="4"
							stroke-dasharray="28 22"
						/>
						<rect x="250" y="260" width="40" height="240" fill="#e8ddc0" />
						<rect x="460" y="150" width="60" height="350" fill="#e8ddc0" />
						<rect x="80" y="80" width="360" height="180" rx="6" fill="#fffdf5" stroke="#0b3b2e" stroke-width="3" />
						<rect x="80" y="80" width="360" height="34" rx="6" fill="#c9a227" />
						<rect x="120" y="150" width="280" height="70" fill="#0b3b2e" opacity="0.08" />
						<text x="260" y="102" text-anchor="middle" font-size="17" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">MAIN BUILDING</text>
						<rect x="520" y="80" width="220" height="140" rx="6" fill="#fffdf5" stroke="#0b3b2e" stroke-width="3" />
						<rect x="520" y="80" width="220" height="34" rx="6" fill="#c9a227" />
						<text x="630" y="102" text-anchor="middle" font-size="17" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">LIBRARY</text>
						<rect x="520" y="260" width="220" height="130" rx="6" fill="#fffdf5" stroke="#0b3b2e" stroke-width="3" />
						<rect x="520" y="260" width="220" height="34" rx="6" fill="#c9a227" />
						<text x="630" y="282" text-anchor="middle" font-size="17" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">SCIENCE LABS</text>
						<rect x="80" y="300" width="260" height="130" rx="6" fill="#fffdf5" stroke="#0b3b2e" stroke-width="3" />
						<rect x="80" y="300" width="260" height="34" rx="6" fill="#c9a227" />
						<text x="210" y="322" text-anchor="middle" font-size="17" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">AUDITORIUM</text>
						<ellipse cx="850" cy="400" rx="125" ry="82" fill="#b7d9a8" stroke="#0b3b2e" stroke-width="3" />
						<ellipse cx="850" cy="400" rx="95" ry="56" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="12 10" />
						<text x="850" y="405" text-anchor="middle" font-size="17" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">PLAYGROUND</text>
						<rect x="380" y="530" width="240" height="58" rx="6" fill="#e8ddc0" stroke="#0b3b2e" stroke-width="3" />
						<rect x="400" y="548" width="70" height="22" rx="4" fill="#c9a227" />
						<rect x="490" y="548" width="70" height="22" rx="4" fill="#c9a227" />
						<text x="500" y="520" text-anchor="middle" font-size="15" font-weight="700" fill="#0b3b2e" font-family="Georgia, serif">BUS BAY</text>
						<g fill="#4a7c59">
							<circle cx="470" cy="70" r="18" />
							<circle cx="780" cy="120" r="18" />
							<circle cx="780" cy="330" r="18" />
							<circle cx="380" cy="330" r="18" />
							<circle cx="60" cy="470" r="18" />
							<circle cx="960" cy="180" r="18" />
							<circle cx="960" cy="560" r="18" />
							<circle cx="60" cy="600" r="14" />
						</g>
						<g fill="#7a5a36">
							<rect x="467" y="82" width="6" height="14" />
							<rect x="777" y="132" width="6" height="14" />
							<rect x="777" y="342" width="6" height="14" />
							<rect x="377" y="342" width="6" height="14" />
							<rect x="57" y="482" width="6" height="14" />
							<rect x="957" y="192" width="6" height="14" />
							<rect x="957" y="572" width="6" height="14" />
						</g>
						<text x="500" y="610" text-anchor="middle" font-size="14" font-weight="700" fill="#0b3b2e" opacity="0.65" font-family="Georgia, serif">MAIN ROAD</text>
					</svg>
					{#each tourSpots as spot, i}
						<button
							type="button"
							aria-label={`Show ${spot.name} on the tour`}
							aria-pressed={selectedId === spot.id}
							onclick={() => {
								selectedId = spot.id;
							}}
							style={pinStyle(spot)}
							class="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-sm font-extrabold shadow-md transition {selectedId ===
							spot.id
								? 'scale-110 bg-forest-900 text-gold-400'
								: 'bg-gold-500 text-forest-900 hover:scale-110'}"
						>
							{i + 1}
						</button>
					{/each}
				</div>
				<div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Tour stops">
					{#each tourSpots as spot, i}
						<button
							type="button"
							aria-pressed={selectedId === spot.id}
							onclick={() => {
								selectedId = spot.id;
							}}
							class="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-bold transition {selectedId ===
							spot.id
								? 'bg-forest-900 text-gold-400'
								: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
						>
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold {selectedId ===
								spot.id
									? 'bg-gold-500 text-forest-900'
									: 'bg-forest-50 text-forest-800'}"
							>
								{i + 1}
							</span>
							{spot.name}
						</button>
					{/each}
				</div>
			</div>
		</Reveal>

		<Reveal cls="lg:col-span-2">
			{#key selected.id}
				<article
					class="fade-up flex h-full flex-col overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm"
				>
					<picture class="contents">
						<source
							type="image/avif"
							srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[selected.photo.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${selected.photo.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<source
							type="image/webp"
							srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[selected.photo.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${selected.photo.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<img
							src={selected.photo}
							alt={selected.name}
							loading="lazy"
							class="h-52 w-full object-cover sm:h-60"
						/>
					</picture>
					<div class="flex flex-1 flex-col p-6 sm:p-7">
						<p class="flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] text-gold-700 uppercase">
							<Icon name="pin" cls="h-4 w-4" />
							Stop {tourSpots.findIndex((s) => s.id === selected.id) + 1} of {tourSpots.length}
						</p>
						<h2 class="mt-2 font-display text-3xl font-bold text-forest-900">{selected.name}</h2>
						<p class="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{selected.desc}</p>
						<p class="mt-5 flex items-start gap-2 rounded-lg bg-cream px-4 py-3 text-sm">
							<Icon name="sparkles" cls="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
							<span><span class="font-bold text-forest-900">Good to know: </span>{selected.fact}</span>
						</p>
						<a
							href="/admissions"
							class="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
						>
							SEE IT IN PERSON — BOOK A VISIT
							<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
						</a>
					</div>
				</article>
			{/key}
		</Reveal>
	</div>

	<Reveal>
		<div class="mt-14">
			<SectionHeading
				eyebrow="Photo Tour"
				text="Swipe through the campus in pictures. Tap a photo to jump to its stop on the map above."
			>
				Campus in <span class="text-gold-600 italic">Pictures</span>
			</SectionHeading>
			<div class="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
				{#each photos as p}
					{#if p.spotId}
						<button
							type="button"
							onclick={() => {
								selectedId = p.spotId as string;
								document.getElementById('campus-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
							}}
							class="group w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-forest-900/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-72"
						>
							<picture class="contents">
								<source
									type="image/avif"
									srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[p.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${p.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
									sizes="288px"
								/>
								<source
									type="image/webp"
									srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[p.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${p.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
									sizes="288px"
								/>
								<img src={p.src} alt={p.caption} loading="lazy" class="h-44 w-full object-cover" />
							</picture>
							<span class="flex min-h-11 items-center gap-2 px-4 py-2 text-sm font-bold text-forest-900">
								<Icon name="map" cls="h-4 w-4 shrink-0 text-gold-600" />
								{p.caption}
							</span>
						</button>
					{:else}
						<figure
							class="w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm sm:w-72"
						>
							<picture class="contents">
								<source
									type="image/avif"
									srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[p.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${p.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
									sizes="288px"
								/>
								<source
									type="image/webp"
									srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[p.src.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${p.src.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
									sizes="288px"
								/>
								<img src={p.src} alt={p.caption} loading="lazy" class="h-44 w-full object-cover" />
							</picture>
							<figcaption class="flex min-h-11 items-center gap-2 px-4 py-2 text-sm font-bold text-forest-900">
								<Icon name="monitor" cls="h-4 w-4 shrink-0 text-gold-600" />
								{p.caption}
							</figcaption>
						</figure>
					{/if}
				{/each}
			</div>
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-12 border-t border-forest-900/10 pt-5 text-sm text-ink/60">
			All tour stops, photos and facts on this page are demo content for client presentation. Visit the
			school to see the real campus — call
			<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>
			to book a guided visit.
		</p>
	</Reveal>
</div>
