<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { scholarships } from '#lib/data/more';

	const classes = ['Nursery', 'KG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

	let studentName = $state('');
	let studentClass = $state('');
	let admissionNo = $state('');
	let scheme = $state('');
	let parentPhone = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	function submitApplication(e: Event) {
		e.preventDefault();
		const errs: Record<string, string> = {};
		if (studentName.trim().length < 3) errs.studentName = 'Please enter the student’s full name.';
		if (!studentClass) errs.studentClass = 'Please select the student’s class.';
		if (admissionNo.trim().length < 4)
			errs.admissionNo = 'Please enter the admission number (at least 4 characters).';
		if (!scheme) errs.scheme = 'Please select a scholarship scheme.';
		if (!/^[6-9]\d{9}$/.test(parentPhone.replace(/[\s+]/g, '').replace(/^91/, '')))
			errs.parentPhone = 'Please enter a valid 10-digit Indian mobile number.';
		errors = errs;
		if (Object.keys(errs).length === 0) {
			try {
				localStorage.setItem(
					'tricent-scholarship-apply',
					JSON.stringify({
						studentName: studentName.trim(),
						studentClass,
						admissionNo: admissionNo.trim(),
						scheme,
						parentPhone: parentPhone.trim(),
						submittedAt: new Date().toISOString()
					})
				);
			} catch {
				// localStorage unavailable — the success panel still shows
			}
			submitted = true;
		}
	}

	function applyAgain() {
		studentName = '';
		studentClass = '';
		admissionNo = '';
		scheme = '';
		parentPhone = '';
		errors = {};
		submitted = false;
	}
</script>

<PageHero
	title="Scholarships"
	subtitle="Tricent rewards merit, sporting talent and family commitment — with tuition waivers and concessions that recognise hard work and make good education more accessible."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Scholarships' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Schemes -->
	<Reveal>
		<SectionHeading eyebrow="Scholarship Schemes" text="Five schemes for the 2027–28 session. Every scheme is awarded for one academic year and reviewed annually.">
			Support for <span class="text-gold-600 italic">Every Achiever</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each scholarships as s}
			<Reveal>
				<article class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name="award" cls="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-display text-lg leading-snug font-bold text-forest-900">{s.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{s.desc}</p>
					<p class="mt-4 rounded-lg bg-cream px-4 py-3 text-sm font-bold text-forest-900">{s.benefit}</p>
					<p class="mt-3 text-xs leading-relaxed text-ink/70">
						<span class="font-bold text-forest-800">Who can apply:</span>
						{s.eligibility}
					</p>
				</article>
			</Reveal>
		{/each}
		<Reveal>
			<article class="flex h-full flex-col justify-center rounded-xl bg-forest-900 p-6 text-white shadow-sm">
				<Icon name="trophy" cls="h-8 w-8 text-gold-400" />
				<h3 class="mt-4 font-display text-lg leading-snug font-bold">Not sure which scheme fits?</h3>
				<p class="mt-2 flex-1 text-sm leading-relaxed text-white/75">
					Our admissions office will check your child’s eligibility and help you apply for the best
					available scheme.
				</p>
				<a
					href="/contact"
					class="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold-500 px-5 text-sm font-extrabold tracking-wide text-forest-900 transition hover:bg-gold-400"
				>
					Talk to Admissions
					<Icon name="arrow-right" cls="h-4 w-4" />
				</a>
			</article>
		</Reveal>
	</div>

	<!-- Eligibility table -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Eligibility at a Glance" text="Compare every scheme — who can apply, the minimum criteria and the benefit.">
				Who Can <span class="text-gold-600 italic">Apply</span>
			</SectionHeading>
			<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full min-w-[640px] text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Scheme</th>
							<th class="px-5 py-3.5 font-bold">Who can apply</th>
							<th class="px-5 py-3.5 font-bold">Minimum criteria</th>
							<th class="px-5 py-3.5 font-bold">Benefit</th>
						</tr>
					</thead>
					<tbody>
						{#each scholarships as s}
							<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
								<td class="px-5 py-3.5 font-bold text-forest-900">{s.name}</td>
								<td class="px-5 py-3.5 text-ink/70">{s.eligibility}</td>
								<td class="px-5 py-3.5 text-ink/70">{s.criteria}</td>
								<td class="px-5 py-3.5 font-bold whitespace-nowrap text-forest-900">{s.benefit}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</Reveal>

	<!-- How to apply -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="How to Apply" text="Four simple steps — from the application form to the award letter.">
				Applying in <span class="text-gold-600 italic">Four Steps</span>
			</SectionHeading>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each [
			{ n: 1, title: 'Fill the form', text: 'Submit the demo application form below, or collect a paper form from the school office.' },
			{ n: 2, title: 'Attach documents', text: 'Marksheet, sports certificate or proof of sibling / staff / single-girl-child status, as applicable.' },
			{ n: 3, title: 'Verification', text: 'The scholarship committee verifies documents and results within 15 working days.' },
			{ n: 4, title: 'Award letter', text: 'Selected students receive an award letter, and the waiver is applied to the next term’s fee.' }
		] as step}
			<Reveal>
				<div class="relative h-full rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm">
					<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 font-display text-2xl font-bold text-gold-400">
						{step.n}
					</span>
					<h3 class="mt-4 font-display text-lg font-bold text-forest-900">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{step.text}</p>
				</div>
			</Reveal>
		{/each}
	</div>

	<!-- Demo application form -->
	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Demo Application" text="A demo form for client presentation — no application is actually submitted.">
				Apply for a <span class="text-gold-600 italic">Scholarship</span>
			</SectionHeading>
		</div>
	</Reveal>
	<Reveal>
		<div class="mx-auto mt-10 max-w-2xl rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
			{#if submitted}
				<div class="text-center">
					<span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name="check" cls="h-8 w-8" />
					</span>
					<h3 class="mt-5 font-display text-2xl font-bold text-forest-900">Application received</h3>
					<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70">
						Thank you, <strong class="text-forest-900">{studentName}</strong>. Your demo application for the
						<strong class="text-forest-900">{scheme}</strong> (Class {studentClass}) has been recorded.
						The scholarship committee will contact the parent on
						<strong class="text-forest-900">{parentPhone}</strong> after verification.
					</p>
					<button
						type="button"
						onclick={applyAgain}
						class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-forest-900/20 px-5 text-sm font-extrabold tracking-wide text-forest-900 transition hover:bg-forest-50"
					>
						Submit another application
					</button>
				</div>
			{:else}
				<form onsubmit={submitApplication} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="sch-name" class="mb-1.5 block text-sm font-bold text-forest-900">Student name *</label>
							<input
								id="sch-name"
								type="text"
								bind:value={studentName}
								placeholder="e.g. Aarav Verma"
								class="min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
							/>
							{#if errors.studentName}<p class="mt-1.5 text-xs text-red-600">{errors.studentName}</p>{/if}
						</div>
						<div>
							<label for="sch-class" class="mb-1.5 block text-sm font-bold text-forest-900">Class *</label>
							<select
								id="sch-class"
								bind:value={studentClass}
								class="min-h-12 w-full rounded-sm border border-forest-900/20 bg-white px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
							>
								<option value="" disabled>Select class</option>
								{#each classes as c}
									<option value={c}>{c}</option>
								{/each}
							</select>
							{#if errors.studentClass}<p class="mt-1.5 text-xs text-red-600">{errors.studentClass}</p>{/if}
						</div>
						<div>
							<label for="sch-adm" class="mb-1.5 block text-sm font-bold text-forest-900">Admission number *</label>
							<input
								id="sch-adm"
								type="text"
								bind:value={admissionNo}
								placeholder="e.g. TPS/2027/1234"
								class="min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
							/>
							{#if errors.admissionNo}<p class="mt-1.5 text-xs text-red-600">{errors.admissionNo}</p>{/if}
						</div>
						<div>
							<label for="sch-scheme" class="mb-1.5 block text-sm font-bold text-forest-900">Scholarship scheme *</label>
							<select
								id="sch-scheme"
								bind:value={scheme}
								class="min-h-12 w-full rounded-sm border border-forest-900/20 bg-white px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
							>
								<option value="" disabled>Select scheme</option>
								{#each scholarships as s}
									<option value={s.name}>{s.name} — {s.benefit}</option>
								{/each}
							</select>
							{#if errors.scheme}<p class="mt-1.5 text-xs text-red-600">{errors.scheme}</p>{/if}
						</div>
						<div class="sm:col-span-2">
							<label for="sch-phone" class="mb-1.5 block text-sm font-bold text-forest-900">Parent mobile number *</label>
							<input
								id="sch-phone"
								type="tel"
								inputmode="numeric"
								bind:value={parentPhone}
								placeholder="10-digit mobile number"
								class="min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
							/>
							{#if errors.parentPhone}<p class="mt-1.5 text-xs text-red-600">{errors.parentPhone}</p>{/if}
						</div>
					</div>
					<button
						type="submit"
						class="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800 sm:w-auto"
					>
						<Icon name="send" cls="h-4 w-4 text-gold-400" />
						SUBMIT APPLICATION
					</button>
					<p class="mt-4 text-xs leading-relaxed text-ink/70">
						Applications for the 2027–28 session close on 31 January 2027. One scholarship per student —
						if a student qualifies for more than one scheme, the higher benefit applies.
					</p>
				</form>
			{/if}
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-10 text-sm text-ink/70">
			All scholarship names, benefits and criteria on this page are demo entries for client presentation.
			The school will confirm the final schemes, percentages and deadlines before the website launch.
		</p>
	</Reveal>
</div>
