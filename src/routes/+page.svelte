<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import CountUp from '#lib/components/CountUp.svelte';
	import { features, academics, facilities, newsItems, testimonials, stats } from '#lib/data/site';
	import { notices } from '#lib/data/more';

	const slides = [
		{
			image: '/images/hero-campus.webp',
			kicker: 'TRICENT PUBLIC SCHOOL · PATNA',
			titleA: 'Inspiring Excellence,',
			titleB: 'Building Futures',
			text: 'At Tricent Public School, we nurture young minds with strong values, modern learning and boundless opportunities.'
		},
		{
			image: '/images/about-students.webp',
			kicker: 'NURSERY TO CLASS XII · CBSE',
			titleA: 'Where Young Minds',
			titleB: 'Grow with Values',
			text: 'Confident, compassionate and responsible global citizens — prepared for a successful future, and for life.'
		},
		{
			image: '/images/library.webp',
			kicker: 'LEARNING BEYOND CLASSROOMS',
			titleA: 'Curiosity, Creativity',
			titleB: 'and Character',
			text: 'Smart classrooms, modern labs, sports, arts and culture — every child finds their stage at Tricent.'
		}
	];

	const lifeImages = [
		{ src: '/images/basketball.webp', title: 'Basketball' },
		{ src: '/images/science-lab.webp', title: 'Science Lab' },
		{ src: '/images/dance.png', title: 'Cultural Day' },
		{ src: '/images/karate.jpg', title: 'Karate' },
		{ src: '/images/sports-day.jpg', title: 'Sports Day' }
	];

	let slide = $state(0);
	let quote = $state(0);

	$effect(() => {
		const t = setInterval(() => {
			slide = (slide + 1) % slides.length;
		}, 6000);
		return () => clearInterval(t);
	});

	$effect(() => {
		const t = setInterval(() => {
			quote = (quote + 1) % testimonials.length;
		}, 7000);
		return () => clearInterval(t);
	});
</script>

<svelte:head>
	<title>Tricent Public School, Patna | Inspiring Excellence, Building Futures</title>
	<meta
		name="description"
		content="Tricent Public School, Beldari, Simri Bakhtiyarpur, Patna — CBSE co-educational school from Nursery to Class XII. Admissions open for 2026–27."
	/>
	<meta property="og:title" content="Tricent Public School, Patna" />
	<meta
		property="og:description"
		content="Inspiring Excellence, Building Futures — CBSE school from Nursery to Class XII. Admissions open for 2026–27."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/hero-campus.webp" />
	<link rel="canonical" href="https://tricent-public-school.pages.dev/" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'School',
		name: 'Tricent Public School',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Beldari, Simri Bakhtiyarpur',
			addressLocality: 'Patna',
			postalCode: '801113',
			addressRegion: 'Bihar',
			addressCountry: 'IN'
		},
		telephone: '+91-75440-00044',
		email: 'info@tricentpublicschool.com'
	})}</script>`}
</svelte:head>

<!-- ============ HERO SLIDER ============ -->
<section class="relative overflow-hidden bg-forest-950" aria-label="Welcome">
	<div class="relative h-[540px] sm:h-[580px] lg:h-[660px]">
		{#each slides as s, i}
			<div
				class="absolute inset-0 transition-opacity duration-1000 {i === slide
					? 'opacity-100'
					: 'pointer-events-none opacity-0'}"
				aria-hidden={i !== slide}
			>
				<img
					src={s.image}
					alt=""
					class="h-full w-full object-cover {i === slide ? 'hero-kenburns' : ''}"
					fetchpriority={i === 0 ? 'high' : 'low'}
				/>
				<div
					class="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-950/45 to-transparent"
				></div>
			</div>
		{/each}

		<div class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
			{#key slide}
				<div class="fade-up max-w-2xl">
					<p class="text-[0.7rem] font-extrabold tracking-[0.3em] text-gold-400">
						{slides[slide].kicker}
					</p>
					<h1 class="mt-3 font-display text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
						{slides[slide].titleA}
						<br />
						<span class="text-gold-400 italic">{slides[slide].titleB}</span>
					</h1>
					<p class="mt-4 max-w-xl leading-relaxed text-white/85">{slides[slide].text}</p>
					<div class="mt-7 flex flex-wrap gap-3">
						<a
							href="/admissions"
							class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
						>
							ADMISSION OPEN
							<Icon name="arrow-right" cls="h-4 w-4" />
						</a>
						<a
							href="/about"
							class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-white/80 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-white hover:text-forest-900"
						>
							EXPLORE CAMPUS
							<Icon name="arrow-right" cls="h-4 w-4" />
						</a>
					</div>
				</div>
			{/key}
		</div>

		<button
			type="button"
			aria-label="Previous slide"
			onclick={() => {
				slide = (slide - 1 + slides.length) % slides.length;
			}}
			class="absolute top-1/2 left-3 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white hover:text-forest-900 md:flex lg:left-6"
		>
			<Icon name="chevron-left" cls="h-6 w-6" />
		</button>
		<button
			type="button"
			aria-label="Next slide"
			onclick={() => {
				slide = (slide + 1) % slides.length;
			}}
			class="absolute top-1/2 right-3 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white hover:text-forest-900 md:flex lg:right-6"
		>
			<Icon name="chevron-right" cls="h-6 w-6" />
		</button>

		<div class="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
			{#each slides as _, i}
				<button
					type="button"
					aria-label="Go to slide {i + 1}"
					onclick={() => {
						slide = i;
					}}
					class="h-2.5 rounded-full transition-all {i === slide
						? 'w-8 bg-gold-400'
						: 'w-2.5 bg-white/60 hover:bg-white'}"
				></button>
			{/each}
		</div>
	</div>
</section>

<!-- ============ NOTICE TICKER ============ -->
<div class="marquee overflow-hidden border-b border-forest-900/10 bg-gold-500 py-2.5" aria-label="Latest notices">
	<div class="marquee-track flex w-max items-center gap-8">
		{#each [...notices.slice(0, 4), ...notices.slice(0, 4)] as n}
			<a
				href="/notices"
				class="flex shrink-0 items-center gap-2 text-xs font-extrabold tracking-wide whitespace-nowrap text-forest-950 transition hover:text-forest-800"
			>
				<Icon name="megaphone" cls="h-4 w-4" />
				{n.title}
			</a>
			<span class="shrink-0 text-gold-600" aria-hidden="true">✦</span>
		{/each}
	</div>
</div>

<!-- ============ FEATURE STRIP ============ -->
<section class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:-mt-10 lg:px-8">
	<Reveal>
		<div
			class="grid grid-cols-2 gap-y-6 rounded-xl bg-white px-4 py-6 shadow-xl ring-1 ring-forest-900/5 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:py-8"
		>
			{#each features as f, i}
				<div
					class="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-3 sm:text-left {i > 0
						? 'lg:border-l lg:border-forest-900/10 lg:pl-6'
						: ''}"
				>
					<span
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
					>
						<Icon name={f.icon} cls="h-6 w-6" />
					</span>
					<span>
						<span class="block text-sm font-bold text-forest-900">{f.title}</span>
						<span class="mt-0.5 block text-xs leading-snug text-ink/60">{f.text}</span>
					</span>
				</div>
			{/each}
		</div>
	</Reveal>
</section>

<!-- ============ WELCOME / ABOUT ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
		<Reveal>
			<div class="relative">
				<img
					src="/images/about-students.webp"
					alt="Students of Tricent Public School in maroon uniforms with the school bus"
					class="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
					loading="lazy"
				/>
				<div
					class="absolute -bottom-5 left-4 flex items-center gap-3 rounded-lg bg-forest-900 px-5 py-4 text-white shadow-xl sm:left-6"
				>
					<span class="font-display text-3xl font-bold text-gold-400">20+</span>
					<span class="text-xs leading-snug font-semibold tracking-wide">
						Years of<br />Excellence
					</span>
				</div>
			</div>
		</Reveal>
		<Reveal>
			<div>
				<p class="text-xs font-extrabold tracking-[0.28em] text-gold-600 uppercase">Welcome to</p>
				<h2 class="mt-2 font-display text-3xl leading-tight font-bold text-forest-900 sm:text-4xl">
					Tricent Public School
				</h2>
				<p class="mt-4 leading-relaxed text-ink/70">
					Tricent Public School is a premier co-educational institution dedicated to developing
					confident, compassionate and responsible global citizens. We blend academic excellence
					with character building to prepare students for a successful future.
				</p>
				<div class="mt-8 grid grid-cols-2 gap-6 border-y border-forest-900/10 py-6 sm:grid-cols-4">
					{#each stats as s}
						<div class="text-center sm:text-left">
							<span
								class="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-800 sm:mx-0"
							>
								<Icon name={s.icon} cls="h-5 w-5" />
							</span>
							<p class="mt-2 font-display text-2xl font-bold text-forest-900">
								{#if s.count}
									<CountUp value={s.count} suffix={s.suffix ?? ''} />
								{:else}
									{s.value}
								{/if}
							</p>
							<p class="text-xs font-semibold tracking-wide text-ink/55 uppercase">{s.label}</p>
						</div>
					{/each}
				</div>
				<a
					href="/about"
					class="mt-8 inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
				>
					READ MORE ABOUT US
					<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
				</a>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ QUICK LINKS ============ -->
<section class="border-y border-forest-900/10 bg-white">
	<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
		<Reveal>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
				{#each [{ icon: 'file', label: 'Mandatory Disclosure', href: '/mandatory-disclosure' }, { icon: 'trophy', label: 'Board Results', href: '/results' }, { icon: 'calendar', label: 'Academic Calendar', href: '/academic-calendar' }, { icon: 'download', label: 'Downloads', href: '/downloads' }, { icon: 'megaphone', label: 'Notice Board', href: '/notices' }, { icon: 'bus', label: 'Transport', href: '/transport' }, { icon: 'users', label: 'Our Faculty', href: '/faculty' }, { icon: 'alert-circle', label: 'FAQ', href: '/faq' }] as q}
					<a
						href={q.href}
						class="group flex items-center gap-3 rounded-xl border border-forest-900/10 bg-cream px-4 py-4 transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-md"
					>
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-forest-950"
						>
							<Icon name={q.icon} cls="h-5 w-5" />
						</span>
						<span class="text-sm leading-snug font-bold text-forest-900">{q.label}</span>
					</a>
				{/each}
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ ACADEMICS ============ -->
<section class="bg-cream">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
			<div class="lg:col-span-3">
				<Reveal>
					<SectionHeading eyebrow="Academics" text="From Nursery to Class XII — a CBSE journey built on curiosity, discipline and joy.">
						Explore. <span class="text-gold-600 italic">Learn.</span> Excel.
					</SectionHeading>
				</Reveal>
				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					{#each academics as a}
						<Reveal>
							<div
								class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
							>
								<span
									class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
								>
									<Icon name={a.icon} cls="h-6 w-6" />
								</span>
								<h3 class="mt-4 font-display text-lg font-bold text-forest-900">{a.title}</h3>
								<p class="mt-2 text-sm leading-relaxed text-ink/65">{a.text}</p>
							</div>
						</Reveal>
					{/each}
				</div>
				<a
					href="/academics"
					class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold tracking-wide text-forest-800 transition hover:text-gold-600"
				>
					EXPLORE ACADEMICS
					<Icon name="arrow-right" cls="h-4 w-4" />
				</a>
			</div>
			<div class="lg:col-span-2">
				<Reveal>
					<div class="relative mx-auto max-w-md pb-10">
						<img
							src="/images/academics-classroom.webp"
							alt="Students learning together in a bright classroom"
							class="aspect-square w-full rounded-full object-cover ring-8 ring-white shadow-xl"
							loading="lazy"
						/>
						<div
							class="absolute right-1/2 bottom-0 translate-x-1/2 rounded-xl bg-forest-900 px-6 py-4 text-center text-white shadow-xl"
						>
							<p class="font-display text-xl font-bold text-gold-400">Holistic Growth</p>
							<p class="mt-0.5 text-xs font-semibold tracking-[0.2em] text-white/75">
								MIND · BODY · VALUES
							</p>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	</div>
</section>

<!-- ============ FACILITIES ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
	<Reveal>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<SectionHeading eyebrow="Facilities">
				World-Class <span class="text-gold-600 italic">Infrastructure</span>
			</SectionHeading>
			<a
				href="/facilities"
				class="inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-forest-900 px-5 text-xs font-extrabold tracking-wider text-forest-900 transition hover:bg-forest-900 hover:text-white"
			>
				VIEW ALL FACILITIES
				<Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each facilities.slice(0, 4) as f}
			<Reveal>
				<a href="/facilities#{f.id}" class="group block h-full">
					<article
						class="h-full overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg"
					>
						<div class="relative aspect-[4/3] overflow-hidden">
							<img
								src={f.image}
								alt={f.title}
								class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
								loading="lazy"
							/>
							<span
								class="absolute -bottom-5 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400 ring-4 ring-white"
							>
								<Icon name={f.icon} cls="h-5 w-5" />
							</span>
						</div>
						<div class="px-5 pt-8 pb-5">
							<h3 class="font-display text-lg font-bold text-forest-900">{f.title}</h3>
							<p class="mt-1.5 text-sm leading-relaxed text-ink/65">{f.text}</p>
						</div>
					</article>
				</a>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ============ STUDENT LIFE ============ -->
<section class="bg-cream">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<Reveal>
			<div class="flex flex-wrap items-end justify-between gap-4">
				<SectionHeading eyebrow="Student Life">
					Learning <span class="text-gold-600 italic">Beyond Classrooms</span>
				</SectionHeading>
				<a
					href="/gallery"
					class="inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-forest-900 px-5 text-xs font-extrabold tracking-wider text-forest-900 transition hover:bg-forest-900 hover:text-white"
				>
					VIEW GALLERY
					<Icon name="arrow-right" cls="h-4 w-4" />
				</a>
			</div>
		</Reveal>
		<div class="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
			{#each lifeImages as img, i}
				<Reveal cls={i === 0 ? 'col-span-2 row-span-2' : ''}>
					<a href="/gallery" class="group relative block h-full overflow-hidden rounded-xl">
						<img
							src={img.src}
							alt={img.title}
							class="h-full min-h-40 w-full object-cover transition duration-500 group-hover:scale-105 {i === 0
								? 'aspect-[4/3] lg:aspect-auto lg:h-full'
								: 'aspect-[4/3]'}"
							loading="lazy"
						/>
						<span
							class="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100"
						></span>
						<span class="absolute bottom-3 left-3 text-sm font-bold text-white">{img.title}</span>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ MARQUEE BAND ============ -->
<div class="marquee overflow-hidden bg-forest-950 py-4" aria-hidden="true">
	<div class="marquee-track flex w-max items-center gap-10">
		{#each Array(2) as _}
			{#each ['ADMISSIONS OPEN 2026–27', 'CBSE AFFILIATION', '100% BOARD RESULTS', '20+ YEARS OF EXCELLENCE', 'NURSERY TO CLASS XII', 'GPS-ENABLED SCHOOL BUSES'] as m}
				<span class="flex shrink-0 items-center gap-10 text-sm font-extrabold tracking-[0.2em] whitespace-nowrap text-gold-400">
					{m}
					<span class="text-gold-500">✦</span>
				</span>
			{/each}
		{/each}
	</div>
</div>

<!-- ============ NEWS & EVENTS ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
	<Reveal>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<SectionHeading eyebrow="News & Events">
				Latest from <span class="text-gold-600 italic">the Campus</span>
			</SectionHeading>
			<a
				href="/news-events"
				class="inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-forest-900 px-5 text-xs font-extrabold tracking-wider text-forest-900 transition hover:bg-forest-900 hover:text-white"
			>
				VIEW ALL NEWS
				<Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each newsItems.slice(0, 3) as n}
			<Reveal>
				<a href="/news-events/{n.slug}" class="group block h-full">
					<article
						class="h-full overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg"
					>
						<div class="relative aspect-[16/10] overflow-hidden">
							<img
								src={n.image}
								alt={n.title}
								class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
								loading="lazy"
							/>
							<span
								class="absolute top-3 left-3 rounded-sm bg-gold-500 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-wider text-forest-950 uppercase"
							>
								{n.tag}
							</span>
						</div>
						<div class="p-5">
							<p class="flex items-center gap-1.5 text-xs font-semibold text-ink/50">
								<Icon name="calendar" cls="h-3.5 w-3.5" />
								{n.date}
							</p>
							<h3
								class="mt-2 font-display text-lg leading-snug font-bold text-forest-900 transition group-hover:text-forest-700"
							>
								{n.title}
							</h3>
							<p class="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">{n.text}</p>
						</div>
					</article>
				</a>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="bg-forest-900">
	<div class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
		<Reveal>
			<Icon name="quote" cls="mx-auto h-10 w-10 text-gold-500" />
			<p class="mt-3 text-xs font-extrabold tracking-[0.28em] text-gold-400 uppercase">
				What Parents Say
			</p>
			{#key quote}
				<blockquote class="fade-up mt-6">
					<p class="font-display text-2xl leading-relaxed font-medium text-white italic sm:text-[1.7rem]">
						“{testimonials[quote].quote}”
					</p>
					<footer class="mt-6">
						<p class="font-bold text-gold-400">{testimonials[quote].name}</p>
						<p class="mt-0.5 text-sm text-white/60">{testimonials[quote].role}</p>
					</footer>
				</blockquote>
			{/key}
			<div class="mt-8 flex justify-center gap-2">
				{#each testimonials as _, i}
					<button
						type="button"
						aria-label="Show testimonial {i + 1}"
						onclick={() => {
							quote = i;
						}}
						class="h-2.5 rounded-full transition-all {i === quote
							? 'w-8 bg-gold-400'
							: 'w-2.5 bg-white/40 hover:bg-white/70'}"
					></button>
				{/each}
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ ADMISSIONS BANNER ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<div
			class="flex flex-col items-center gap-6 rounded-2xl bg-forest-900 px-6 py-10 text-center shadow-xl sm:px-10 lg:flex-row lg:justify-between lg:text-left"
		>
			<div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-5 lg:text-left">
				<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
					<Icon name="gradcap" cls="h-8 w-8" />
				</span>
				<div>
					<h2 class="font-display text-2xl font-bold text-gold-400 sm:text-3xl">
						Admissions Open for Academic Year 2026–27
					</h2>
					<p class="mt-1 text-white/75">Give your child the best start for a bright tomorrow.</p>
				</div>
			</div>
			<a
				href="/admissions"
				class="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
			>
				ENQUIRE NOW
				<Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</Reveal>
</section>
