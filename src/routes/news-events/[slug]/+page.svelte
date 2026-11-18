<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	let { data } = $props();
	const item = $derived(data.item);
	const body = $derived(data.body);
	const related = $derived(data.related);
	const absoluteImage = $derived(`https://tricent-public-school.pages.dev${item.image}`);
	const canonical = $derived(`https://tricent-public-school.pages.dev/news-events/${item.slug}`);
	const published = $derived(new Date(item.date).toISOString().slice(0, 10));
</script>

<svelte:head>
	<title>{item.title} | Tricent Public School</title>
	<meta name="description" content={item.text} />
	<meta property="og:title" content={item.title} />
	<meta property="og:description" content={item.text} />
	<meta property="og:image" content={absoluteImage} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Tricent Public School" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={item.title} />
	<meta name="twitter:description" content={item.text} />
	<meta name="twitter:image" content={absoluteImage} />
	<link rel="canonical" href={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: item.title,
		description: item.text,
		image: absoluteImage,
		datePublished: published,
		author: {
			'@type': 'Organization',
			name: 'Tricent Public School',
			url: 'https://tricent-public-school.pages.dev/'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Tricent Public School',
			url: 'https://tricent-public-school.pages.dev/'
		},
		mainEntityOfPage: canonical
	})}</script>`}
</svelte:head>

<article class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wider text-ink/70">
			<a href="/" class="transition hover:text-gold-700">HOME</a>
			<span aria-hidden="true">/</span>
			<a href="/news-events" class="transition hover:text-gold-700">NEWS &amp; EVENTS</a>
			<span aria-hidden="true">/</span>
			<span class="text-gold-700">{item.tag.toUpperCase()}</span>
		</nav>
		<p class="mt-6 flex flex-wrap items-center gap-3">
			<span
				class="rounded-sm bg-gold-500 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-wider text-forest-950 uppercase"
			>
				{item.tag}
			</span>
			<span class="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
				<Icon name="calendar" cls="h-4 w-4" />
				{item.date}
			</span>
		</p>
		<h1 class="mt-4 font-display text-3xl leading-tight font-bold text-forest-900 sm:text-4xl lg:text-[2.75rem]">
			{item.title}
		</h1>
	</Reveal>

	<Reveal>
		<picture class="contents">
			<source
				type="image/avif"
				srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[item.image.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${item.image.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
				sizes="(max-width: 896px) 100vw, 896px"
			/>
			<source
				type="image/webp"
				srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[item.image.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${item.image.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
				sizes="(max-width: 896px) 100vw, 896px"
			/>
			<img
				src={item.image}
				alt={item.title}
				class="mt-8 aspect-[16/9] w-full rounded-xl object-cover shadow-lg"
			/>
		</picture>
	</Reveal>

	<Reveal>
		<div class="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/80">
			{#each body as para}
				<p>{para}</p>
			{/each}
		</div>
		<div class="mt-10 flex flex-wrap gap-3">
			<a
				href="/news-events"
				class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-forest-900 px-6 text-sm font-extrabold tracking-wide text-forest-900 transition hover:bg-forest-900 hover:text-white"
			>
				<Icon name="arrow-left" cls="h-4 w-4" />
				ALL NEWS &amp; EVENTS
			</a>
			<a
				href="/admissions"
				class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
			>
				ADMISSION OPEN
				<Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</Reveal>

	{#if related.length > 0}
		<section class="mt-16 border-t border-forest-900/10 pt-10">
			<Reveal>
				<h2 class="font-display text-2xl font-bold text-forest-900">More from the Campus</h2>
			</Reveal>
			<div class="mt-6 grid gap-5 sm:grid-cols-3">
				{#each related as r}
					<Reveal>
						<a href="/news-events/{r.slug}" class="group block h-full">
							<article
								class="h-full overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg"
							>
								<picture class="contents">
									<source
										type="image/avif"
										srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[r.image.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${r.image.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.avif ${w}w`).join(', ')}
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
									<source
										type="image/webp"
										srcset={({ 'school-bus': [480], dance: [480], 'sports-day': [480], 'computer-lab': [480, 800], 'smart-classroom': [480, 800] }[r.image.replace('/images/', '').replace(/\.[^.]+$/, '')] ?? [480, 800, 1200]).map((w) => `/images/responsive/${r.image.replace('/images/', '').replace(/\.[^.]+$/, '')}-${w}.webp ${w}w`).join(', ')}
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
									<img
										src={r.image}
										alt={r.title}
										class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								</picture>
								<div class="p-4">
									<p class="text-xs font-semibold text-ink/70">{r.date}</p>
									<h3 class="mt-1.5 leading-snug font-bold text-forest-900 transition group-hover:text-forest-700">
										{r.title}
									</h3>
								</div>
							</article>
						</a>
					</Reveal>
				{/each}
			</div>
		</section>
	{/if}
</article>
