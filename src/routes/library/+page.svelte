<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { librarySections, libraryProgrammes } from '#lib/data/more';

	const totalBooks = librarySections.reduce((sum, s) => sum + s.count, 0);
</script>

<PageHero
	title="Library"
	subtitle="A quiet, sunlit reading hall with over 12,000 books — fiction, reference, science, Hindi and a dedicated children's corner — open to every student from Nursery to Class XII."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Facilities', href: '/facilities' }, { label: 'Library' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Intro with photo -->
	<div class="grid items-center gap-8 lg:grid-cols-2">
		<Reveal>
			<picture class="contents">
				<source
					type="image/avif"
					srcset="/images/responsive/library-480.avif 480w, /images/responsive/library-800.avif 800w, /images/responsive/library-1200.avif 1200w"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
				<source
					type="image/webp"
					srcset="/images/responsive/library-480.webp 480w, /images/responsive/library-800.webp 800w, /images/responsive/library-1200.webp 1200w"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
				<img
					src="/images/library.webp"
					alt="Students reading in the Tricent Public School library"
					width="1920"
					height="1280"
					class="h-auto w-full rounded-xl object-cover shadow-sm"
					loading="lazy"
				/>
			</picture>
		</Reveal>
		<Reveal>
			<div>
				<SectionHeading eyebrow="The Heart of the School" text="Every class gets a library period every week — and the doors stay open long after the last bell.">
					A Place to <span class="text-gold-600 italic">Get Lost in a Book</span>
				</SectionHeading>
				<p class="mt-5 text-sm leading-relaxed text-ink/70 sm:text-base">
					The Tricent library is a bright, air-conditioned reading hall with seating for 120 students,
					open shelves that children can browse freely, and a junior corner with low shelves and floor
					cushions for our youngest readers. Teachers bring classes here for research, storytelling and
					silent reading — and students come on their own during breaks and after school.
				</p>
				<p class="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
					The collection is refreshed every year with new titles chosen by teachers, students and the
					librarian, and the catalogue is searchable from the library computers.
				</p>
				<div class="mt-6 flex flex-wrap gap-3">
					<span class="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest-50 px-4 text-sm font-bold text-forest-900">
						<Icon name="book" cls="h-4 w-4 text-gold-600" />
						{totalBooks.toLocaleString('en-IN')}+ books
					</span>
					<span class="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest-50 px-4 text-sm font-bold text-forest-900">
						<Icon name="users" cls="h-4 w-4 text-gold-600" />
						120 reading seats
					</span>
					<span class="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest-50 px-4 text-sm font-bold text-forest-900">
						<Icon name="monitor" cls="h-4 w-4 text-gold-600" />
						Digital catalogue
					</span>
				</div>
			</div>
		</Reveal>
	</div>

	<!-- Collections -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Our Collections" text="Six sections covering every age and interest — from picture books to board-exam reference.">
				What You Will <span class="text-gold-600 italic">Find on the Shelves</span>
			</SectionHeading>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each librarySections as s}
			<Reveal>
				<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
					<div class="flex items-start justify-between gap-3">
						<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
							<Icon name="book" cls="h-6 w-6" />
						</span>
						<span class="font-display text-3xl font-bold text-forest-900">{s.count.toLocaleString('en-IN')}</span>
					</div>
					<h3 class="mt-4 font-display text-lg font-bold text-forest-900">{s.section}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
				</article>
			</Reveal>
		{/each}
	</div>

	<!-- Timings + rules -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Timings & Rules" text="Simple rules that keep the library fair and welcoming for everyone.">
				When to Visit &amp; <span class="text-gold-600 italic">How It Works</span>
			</SectionHeading>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<Reveal>
			<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
				<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
					<Icon name="clock" cls="h-6 w-6" />
				</span>
				<h3 class="mt-4 font-display text-xl font-bold text-forest-900">Opening Hours</h3>
				<ul class="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Monday – Friday:</strong> 8:00 AM – 4:30 PM</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Saturday:</strong> 8:00 AM – 1:00 PM</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Sunday &amp; school holidays:</strong> closed</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Reading hall:</strong> open during lunch break and after school till 4:30 PM</span>
					</li>
				</ul>
			</article>
		</Reveal>
		<Reveal>
			<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
				<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
					<Icon name="shield" cls="h-6 w-6" />
				</span>
				<h3 class="mt-4 font-display text-xl font-bold text-forest-900">Issue &amp; Return Rules</h3>
				<ul class="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">2 books per student</strong> at a time, issued against the school ID card.</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Loan period:</strong> 14 days, renewable once if no one else has reserved the book.</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Late fine:</strong> ₹2 per day per book after the due date.</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span><strong class="text-forest-900">Reference books</strong> (encyclopaedias, dictionaries) are for use inside the library only.</span>
					</li>
					<li class="flex items-start gap-2.5">
						<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
						<span>Lost or damaged books are charged at the current replacement cost.</span>
					</li>
				</ul>
			</article>
		</Reveal>
	</div>

	<!-- Reading programmes -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Reading Programmes" text="The library is not just shelves — it is where Tricent's reading culture lives.">
				Programmes That <span class="text-gold-600 italic">Build Readers</span>
			</SectionHeading>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		{#each libraryProgrammes as p}
			<Reveal>
				<article class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name="sparkles" cls="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-display text-lg font-bold text-forest-900">{p.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.desc}</p>
					<p class="mt-4 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-cream px-4 text-xs font-extrabold tracking-wide text-forest-800 uppercase">
						<Icon name="users" cls="h-4 w-4 text-gold-600" />
						{p.forClasses}
					</p>
				</article>
			</Reveal>
		{/each}
	</div>

	<!-- Librarian note -->
	<Reveal>
		<figure class="mt-16 rounded-xl bg-forest-900 px-6 py-10 text-center shadow-sm sm:px-12">
			<Icon name="quote" cls="mx-auto h-8 w-8 text-gold-400" />
			<blockquote class="mx-auto mt-5 max-w-2xl font-display text-xl leading-relaxed font-bold text-white sm:text-2xl">
				“A child who reads will never be alone. My door — and every shelf in this library — is open to
				every student, every day.”
			</blockquote>
			<figcaption class="mt-5 text-sm font-bold tracking-wide text-gold-400">
				Mrs. Rekha Sinha — Librarian
				<span class="mt-1 block text-xs font-normal text-white/60"
					>M.Lib.I.Sc. — 14 years of experience</span
				>
			</figcaption>
		</figure>
	</Reveal>

	<Reveal>
		<p class="mt-10 text-sm text-ink/70">
			All figures on this page — book counts, timings and fines — are demo entries for client
			presentation. The school will confirm the final library details before the website launch.
		</p>
	</Reveal>
</div>
