<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { teacherSlug } from '#lib/data/more';

	let { data } = $props();
	const teacher = $derived(data.teacher);
	const prev = $derived(data.prev);
	const next = $derived(data.next);
	const siblings = $derived(data.siblings);
	const firstName = $derived(
		teacher.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/, '').split(' ')[0]
	);
	const canonical = $derived(`https://tricent-public-school.pages.dev/faculty/${teacher.slug}`);
	const ogImage = 'https://tricent-public-school.pages.dev/images/og-default.jpg';
</script>

<svelte:head>
	<title>{teacher.name} | Tricent Public School</title>
	<meta
		name="description"
		content="{teacher.name}, {teacher.role} ({teacher.department}) at Tricent Public School, Patna. {teacher.bio}"
	/>
	<meta property="og:title" content="{teacher.name} — {teacher.role}" />
	<meta
		property="og:description"
		content="{teacher.name}, {teacher.role} ({teacher.department}) at Tricent Public School, Patna. {teacher.bio}"
	/>
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Tricent Public School" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{teacher.name} — {teacher.role}" />
	<meta
		name="twitter:description"
		content="{teacher.name}, {teacher.role} ({teacher.department}) at Tricent Public School, Patna."
	/>
	<meta name="twitter:image" content={ogImage} />
	<link rel="canonical" href={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: teacher.name,
		jobTitle: teacher.role,
		description: teacher.bio,
		worksFor: {
			'@type': 'School',
			name: 'Tricent Public School',
			url: 'https://tricent-public-school.pages.dev/'
		},
		url: canonical
	})}</script>`}
</svelte:head>

<!-- Portfolio hero -->
<section class="relative overflow-hidden bg-forest-900">
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.07]"
		style="background-image: radial-gradient(circle at 20% 30%, #c9a227 0, transparent 32%), radial-gradient(circle at 80% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 60% 90%, #c9a227 0, transparent 30%);"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
		<nav
			aria-label="Breadcrumb"
			class="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wider text-white/60"
		>
			<a href="/" class="transition hover:text-gold-300">HOME</a>
			<span aria-hidden="true">/</span>
			<a href="/faculty" class="transition hover:text-gold-300">FACULTY</a>
			<span aria-hidden="true">/</span>
			<span class="text-gold-400">{teacher.name.toUpperCase()}</span>
		</nav>
		<div class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
			<span
				class="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gold-500 font-display text-4xl font-bold text-forest-950 ring-4 ring-white/20 sm:h-32 sm:w-32"
			>
				{teacher.initials}
			</span>
			<div>
				<p class="text-xs font-extrabold tracking-[0.28em] text-gold-400 uppercase">
					{teacher.department} · Tricent Public School
				</p>
				<h1 class="mt-2 font-display text-4xl leading-tight font-bold text-white sm:text-5xl">
					{teacher.name}
				</h1>
				<p class="mt-2 text-lg font-bold text-gold-400">{teacher.role}</p>
				<p class="mt-1 text-sm text-white/70">{teacher.note}</p>
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-3">
		<!-- Main column -->
		<div class="lg:col-span-2">
			<Reveal>
				<SectionHeading eyebrow="About">
					Meet <span class="text-gold-600 italic">{firstName}</span>
				</SectionHeading>
				<p class="mt-5 text-[1.05rem] leading-relaxed text-ink/80">{teacher.bio}</p>
				<blockquote
					class="mt-8 rounded-xl border-l-4 border-gold-500 bg-cream px-6 py-5 font-display text-xl leading-relaxed text-forest-900 italic"
				>
					“{teacher.quote}”
				</blockquote>
			</Reveal>

			<section class="mt-12">
				<Reveal>
					<h2 class="font-display text-2xl font-bold text-forest-900">Subjects &amp; Focus</h2>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each teacher.subjects as s}
							<span
								class="rounded-full bg-forest-50 px-4 py-2 text-sm font-bold text-forest-800"
							>
								{s}
							</span>
						{/each}
					</div>
				</Reveal>
			</section>

			<section class="mt-12">
				<Reveal>
					<h2 class="font-display text-2xl font-bold text-forest-900">Achievements</h2>
					<ul class="mt-4 space-y-3">
						{#each teacher.achievements as a}
							<li class="flex gap-3 rounded-xl border border-forest-900/10 bg-white px-5 py-4 shadow-sm">
								<Icon name="award" cls="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
								<span class="text-sm leading-relaxed font-medium text-ink/80">{a}</span>
							</li>
						{/each}
					</ul>
				</Reveal>
			</section>
		</div>

		<!-- Side column -->
		<aside>
			<Reveal>
				<div class="rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h2 class="font-display text-xl font-bold text-forest-900">Meet {firstName}</h2>
					<ul class="mt-4 space-y-3 text-sm">
						<li class="flex gap-2.5">
							<Icon name="clock" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>
								<span class="font-bold text-forest-900">Office hours</span><br />
								<span class="text-ink/70">{teacher.office}</span>
							</span>
						</li>
						<li class="flex gap-2.5">
							<Icon name="users" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>
								<span class="font-bold text-forest-900">Department</span><br />
								<span class="text-ink/70">{teacher.department}</span>
							</span>
						</li>
						<li class="flex gap-2.5">
							<Icon name="pin" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>
								<span class="font-bold text-forest-900">Campus</span><br />
								<span class="text-ink/70">Tricent Public School, Beldari, Patna</span>
							</span>
						</li>
					</ul>
					<a
						href="/contact"
						class="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
					>
						BOOK A MEETING
						<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
					</a>
					<p class="mt-3 text-center text-xs leading-relaxed text-ink/70">
						Parents can request a meeting through the school office or the contact form.
					</p>
				</div>
			</Reveal>

			{#if siblings.length > 0}
				<Reveal>
					<div class="mt-6 rounded-xl border border-forest-900/10 bg-cream p-6">
						<h3 class="font-display text-lg font-bold text-forest-900">
							More from {teacher.department}
						</h3>
						<ul class="mt-3 space-y-2.5">
							{#each siblings as s}
								<li>
									<a
										href="/faculty/{s.slug}"
										class="group flex items-center gap-3 text-sm font-semibold text-ink/75 transition hover:text-forest-800"
									>
										<span
											class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-900 text-[0.65rem] font-bold text-gold-400"
										>
											{s.initials}
										</span>
										<span>
											<span class="block group-hover:underline">{s.name}</span>
											<span class="block text-xs font-normal text-ink/70">{s.role}</span>
										</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>
			{/if}
		</aside>
	</div>

	<!-- Prev / next -->
	<nav
		class="mt-16 flex flex-col gap-3 border-t border-forest-900/10 pt-8 sm:flex-row sm:justify-between"
		aria-label="Browse teachers"
	>
		{#if prev}
			<a
				href="/faculty/{prev.slug}"
				class="group flex items-center gap-3 rounded-xl border border-forest-900/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
			>
				<Icon name="arrow-left" cls="h-5 w-5 shrink-0 text-forest-800" />
				<span>
					<span class="block text-[0.65rem] font-extrabold tracking-wider text-ink/70 uppercase"
						>Previous teacher</span
					>
					<span class="block font-bold text-forest-900 group-hover:underline">{prev.name}</span>
				</span>
			</a>
		{:else}
			<span></span>
		{/if}
		{#if next}
			<a
				href="/faculty/{next.slug}"
				class="group flex items-center gap-3 rounded-xl border border-forest-900/10 bg-white px-5 py-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
			>
				<span>
					<span class="block text-[0.65rem] font-extrabold tracking-wider text-ink/70 uppercase"
						>Next teacher</span
					>
					<span class="block font-bold text-forest-900 group-hover:underline">{next.name}</span>
				</span>
				<Icon name="arrow-right" cls="h-5 w-5 shrink-0 text-forest-800" />
			</a>
		{/if}
	</nav>

	<div class="mt-8 text-center">
		<a
			href="/faculty"
			class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
		>
			VIEW ALL FACULTY
			<Icon name="arrow-right" cls="h-4 w-4" />
		</a>
	</div>
</div>
