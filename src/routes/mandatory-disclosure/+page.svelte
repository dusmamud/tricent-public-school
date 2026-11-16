<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { disclosure } from '#lib/data/more';
	import { feeStructure } from '#lib/data/site';
</script>

<PageHero
	title="Mandatory Public Disclosure"
	subtitle="As required by CBSE Affiliation Bye-Laws (Appendix IX, Circular No. 03/2021) — general information, documents, results, staff and infrastructure of Tricent Public School, published for parents and the public."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Mandatory Disclosure' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap items-center gap-3 rounded-xl border border-gold-500/40 bg-gold-500/10 px-5 py-4">
			<Icon name="alert-circle" cls="h-6 w-6 shrink-0 text-gold-600" />
			<p class="text-sm leading-relaxed text-ink/80">
				<strong class="text-forest-900">Demo disclosure.</strong> All documents below are shown as demo
				entries for client presentation. Before launch, the school must upload self-attested copies of the
				real documents, signed by the Chairman / Manager / Secretary and the Principal.
			</p>
		</div>
	</Reveal>

	<!-- A. General information -->
	<section class="mt-12">
		<Reveal>
			<SectionHeading eyebrow="Section A" text="Identity of the school as recorded with CBSE.">
				General <span class="text-gold-600 italic">Information</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				{#each disclosure.general as row}
					<div
						class="grid gap-1 border-b border-forest-900/5 px-5 py-3.5 last:border-0 sm:grid-cols-[280px_1fr] sm:gap-4"
					>
						<span class="text-sm font-bold text-forest-900">{row.label}</span>
						<span class="text-sm text-ink/75">{row.value}</span>
					</div>
				{/each}
			</div>
		</Reveal>
	</section>

	<!-- B. Documents -->
	<section class="mt-14">
		<Reveal>
			<SectionHeading
				eyebrow="Section B"
				text="Self-attested copies of the statutory documents. Click a document to download its demo copy."
			>
				Documents &amp; <span class="text-gold-600 italic">Certificates</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full min-w-[640px] text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Document</th>
							<th class="px-5 py-3.5 font-bold">Reference</th>
							<th class="px-5 py-3.5 font-bold">Valid Up To</th>
							<th class="px-5 py-3.5 font-bold">Status</th>
						</tr>
					</thead>
					<tbody>
						{#each disclosure.documents as d}
							<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
								<td class="px-5 py-3.5 font-semibold text-forest-900">{d.name}</td>
								<td class="px-5 py-3.5 text-ink/70">{d.ref}</td>
								<td class="px-5 py-3.5 text-ink/70">{d.validity}</td>
								<td class="px-5 py-3.5">
									<span
										class="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800"
									>
										<Icon name="file" cls="h-3.5 w-3.5" />
										{d.status}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</Reveal>
	</section>

	<!-- C. Results & academics -->
	<section class="mt-14">
		<Reveal>
			<SectionHeading eyebrow="Section C" text="Fee structure, academic calendar, committees and board results.">
				Results &amp; <span class="text-gold-600 italic">Academics</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-8 grid gap-6 lg:grid-cols-2">
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h3 class="font-display text-xl font-bold text-forest-900">Fee Structure (indicative, demo)</h3>
					<div class="mt-4 space-y-2 text-sm">
						{#each feeStructure as f}
							<div class="flex justify-between gap-3 border-b border-forest-900/5 pb-2 last:border-0">
								<span class="text-ink/70">{f.head}</span>
								<span class="shrink-0 font-bold text-forest-900">{f.nursery} – {f.senior}</span>
							</div>
						{/each}
					</div>
					<a
						href="/admissions#fees"
						class="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-forest-800 transition hover:text-gold-600"
					>
						SEE FULL FEE TABLE <Icon name="arrow-right" cls="h-4 w-4" />
					</a>
				</div>
			</Reveal>
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h3 class="font-display text-xl font-bold text-forest-900">Board Results — Last 3 Years</h3>
					<div class="mt-4 space-y-2 text-sm">
						<div class="flex justify-between gap-3 border-b border-forest-900/5 pb-2">
							<span class="text-ink/70">Class X (2023–24 / 2024–25 / 2025–26)</span>
							<span class="shrink-0 font-bold text-forest-900">100% pass</span>
						</div>
						<div class="flex justify-between gap-3 border-b border-forest-900/5 pb-2">
							<span class="text-ink/70">Class XII (2023–24 / 2024–25 / 2025–26)</span>
							<span class="shrink-0 font-bold text-forest-900">100% pass</span>
						</div>
						<div class="flex justify-between gap-3 pb-2">
							<span class="text-ink/70">Students above 90% (2025–26)</span>
							<span class="shrink-0 font-bold text-forest-900">76 (X + XII)</span>
						</div>
					</div>
					<div class="mt-5 flex flex-wrap gap-3">
						<a
							href="/results"
							class="inline-flex items-center gap-2 text-sm font-extrabold text-forest-800 transition hover:text-gold-600"
						>
							SEE DETAILED RESULTS <Icon name="arrow-right" cls="h-4 w-4" />
						</a>
						<a
							href="/academic-calendar"
							class="inline-flex items-center gap-2 text-sm font-extrabold text-forest-800 transition hover:text-gold-600"
						>
							ACADEMIC CALENDAR <Icon name="arrow-right" cls="h-4 w-4" />
						</a>
					</div>
				</div>
			</Reveal>
		</div>

		<div class="mt-6 grid gap-6 lg:grid-cols-2">
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h3 class="font-display text-xl font-bold text-forest-900">School Management Committee</h3>
					<ul class="mt-4 space-y-2.5 text-sm">
						{#each disclosure.smc as m}
							<li class="flex justify-between gap-3 border-b border-forest-900/5 pb-2 last:border-0">
								<span class="font-semibold text-forest-900">{m.name}</span>
								<span class="text-right text-ink/60">{m.role}</span>
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h3 class="font-display text-xl font-bold text-forest-900">Parent Teacher Association</h3>
					<ul class="mt-4 space-y-2.5 text-sm">
						{#each disclosure.pta as m}
							<li class="flex justify-between gap-3 border-b border-forest-900/5 pb-2 last:border-0">
								<span class="font-semibold text-forest-900">{m.name}</span>
								<span class="text-right text-ink/60">{m.role}</span>
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</div>
	</section>

	<!-- D. Staff -->
	<section class="mt-14">
		<Reveal>
			<SectionHeading eyebrow="Section D" text="Teaching staff strength by category — 78 teaching staff in total.">
				Staff <span class="text-gold-600 italic">(Teaching)</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each disclosure.staff as s}
					<div
						class="flex items-center justify-between rounded-xl border border-forest-900/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
					>
						<span class="text-sm font-semibold text-ink/75">{s.label}</span>
						<span class="font-display text-2xl font-bold text-forest-900">{s.count}</span>
					</div>
				{/each}
			</div>
		</Reveal>
		<p class="mt-4 text-sm text-ink/60">
			Full staff directory with names, subjects and qualifications is on the
			<a href="/faculty" class="font-bold text-forest-800 underline decoration-gold-500 underline-offset-4"
				>Faculty page</a
			>.
		</p>
	</section>

	<!-- E. Infrastructure -->
	<section class="mt-14">
		<Reveal>
			<SectionHeading eyebrow="Section E" text="Campus, classrooms, laboratories, library and amenities.">
				School <span class="text-gold-600 italic">Infrastructure</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				{#each disclosure.infrastructure as row}
					<div
						class="grid gap-1 border-b border-forest-900/5 px-5 py-3.5 last:border-0 sm:grid-cols-[280px_1fr] sm:gap-4"
					>
						<span class="text-sm font-bold text-forest-900">{row.label}</span>
						<span class="text-sm text-ink/75">{row.value}</span>
					</div>
				{/each}
			</div>
		</Reveal>
		<p class="mt-4 text-sm text-ink/60">
			Photographs of the campus are on the
			<a href="/facilities" class="font-bold text-forest-800 underline decoration-gold-500 underline-offset-4"
				>Facilities page</a
			>
			and in the
			<a href="/gallery" class="font-bold text-forest-800 underline decoration-gold-500 underline-offset-4"
				>Gallery</a
			>. A video walkthrough of the infrastructure will be linked here by the school.
		</p>
	</section>
</div>
