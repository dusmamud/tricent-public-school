<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const contents = [
		{ title: 'About the School', desc: 'Who we are, our campus and our values.' },
		{ title: 'Academics', desc: 'Nursery to Class XII, CBSE curriculum and streams.' },
		{ title: 'Admissions', desc: 'How to apply for the 2027–28 session, step by step.' },
		{ title: 'Fees', desc: 'Tuition, transport and one-time charges, explained plainly.' },
		{ title: 'Facilities', desc: 'Library, labs, sports, transport and the auditorium.' },
		{ title: 'Contact', desc: 'Address, phone, email and office hours.' }
	];

	const facts = [
		{ label: 'Session', value: '2027–28' },
		{ label: 'Classes', value: 'Nursery – XII' },
		{ label: 'Affiliation No.', value: '330000 (Demo)' },
		{ label: 'Tuition fee', value: '₹1,800 – ₹3,500 / month' },
		{ label: 'Campus', value: '3.2 acres, 48 classrooms' },
		{ label: 'Admissions', value: 'Open for Nursery – IX & XI' }
	];
</script>

<PageHero
	title="Prospectus 2027–28"
	subtitle="Everything a parent needs to know about Tricent Public School for the 2027–28 session — academics, admissions, fees, facilities and contact details, in one free PDF."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Prospectus 2027–28' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 lg:grid-cols-5">
		<Reveal cls="lg:col-span-3">
			<article
				class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-forest-900 p-6 text-white shadow-sm sm:p-8"
			>
				<span class="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gold-400">
					<Icon name="file" cls="h-7 w-7" />
				</span>
				<h2 class="mt-5 font-display text-3xl leading-tight font-bold sm:text-4xl">
					Tricent Public School — Prospectus 2027–28
				</h2>
				<p class="mt-3 max-w-xl leading-relaxed text-white/75">
					The official school prospectus for the 2027–28 academic session. Download it, print it, or share
					it with family — no sign-up needed.
				</p>
				<p class="mt-4 text-xs font-semibold tracking-wider text-white/60 uppercase">
					PDF · 1 page · 2 KB
				</p>
				<div class="mt-6 flex flex-col gap-3 sm:flex-row">
					<a
						href="/downloads/prospectus-2027-28.pdf"
						download
						class="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-900 transition hover:bg-gold-400"
					>
						<Icon name="download" cls="h-5 w-5" />
						DOWNLOAD PROSPECTUS (PDF)
					</a>
					<a
						href="/admissions"
						class="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-white/10"
					>
						APPLY FOR ADMISSION
						<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
					</a>
				</div>
			</article>
		</Reveal>

		<Reveal cls="lg:col-span-2">
			<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
				<p class="text-xs font-extrabold tracking-[0.25em] text-gold-700 uppercase">At a Glance</p>
				<h2 class="mt-2 font-display text-2xl font-bold text-forest-900">Key facts from the prospectus</h2>
				<dl class="mt-5 divide-y divide-forest-900/10">
					{#each facts as f}
						<div class="flex items-center justify-between gap-4 py-3">
							<dt class="text-sm font-bold text-ink/70">{f.label}</dt>
							<dd class="text-right text-sm font-extrabold text-forest-900">{f.value}</dd>
						</div>
					{/each}
				</dl>
				<p class="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink/70">
					<Icon name="phone" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
					<span>
						Questions? Call
						<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>
						(Mon – Sat, 8:00 AM – 4:00 PM).
					</span>
				</p>
			</article>
		</Reveal>
	</div>

	<Reveal>
		<div class="mt-14">
			<SectionHeading
				eyebrow="What's Inside"
				text="Six sections cover the whole school — read the checklist below, then download the full PDF."
			>
				Inside the <span class="text-gold-600 italic">Prospectus</span>
			</SectionHeading>
			<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each contents as c}
					<article
						class="flex items-start gap-3 rounded-xl border border-forest-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name="check" cls="h-5 w-5" />
						</span>
						<div>
							<h3 class="font-display text-lg font-bold text-forest-900">{c.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-ink/65">{c.desc}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-12 rounded-xl border border-forest-900/10 bg-cream px-6 py-5">
			<h3 class="font-display text-lg font-bold text-forest-900">Prefer a printed copy?</h3>
			<p class="mt-1 text-sm leading-relaxed text-ink/70">
				Printed prospectuses are available at the school office — Beldari, Simri Bakhtiyarpur, Patna 801113 —
				or write to
				<a href="mailto:info@tricentpublicschool.com" class="font-bold text-forest-800">
					info@tricentpublicschool.com
				</a>.
			</p>
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-8 border-t border-forest-900/10 pt-5 text-sm text-ink/70">
			The prospectus is demo content for client presentation. All details — including the affiliation number
			330000, fees and dates — are illustrative and will be replaced with the school’s official figures before
			publication.
		</p>
	</Reveal>
</div>
