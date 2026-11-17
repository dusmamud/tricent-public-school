<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { admissionSteps, importantDates, feeStructure, admissionFaqs } from '#lib/data/site';

	let openFaq = $state<number | null>(0);

	// Enquiry form
	let parentName = $state('');
	let phone = $state('');
	let email = $state('');
	let childClass = $state('Nursery');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	function submitEnquiry(e: Event) {
		e.preventDefault();
		const errs: Record<string, string> = {};
		if (parentName.trim().length < 3) errs.parentName = 'Please enter the parent’s full name.';
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s+]/g, '').replace(/^91/, '')))
			errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
			errs.email = 'Please enter a valid email address.';
		errors = errs;
		if (Object.keys(errs).length === 0) submitted = true;
	}
</script>

<PageHero
	title="Admissions"
	subtitle="Admissions open for Academic Year 2027–28 — Nursery to Class IX and Class XI. Limited seats, early applicants get priority."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions' }]}
/>

<!-- STEPS -->
<section id="process" class="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="How to Apply" center>
			Admission in <span class="text-gold-600 italic">Three Simple Steps</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-12 grid gap-6 md:grid-cols-3">
		{#each admissionSteps as s}
			<Reveal>
				<div class="relative h-full rounded-xl border border-forest-900/10 bg-white p-7 text-center shadow-sm">
					<span
						class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 font-display text-2xl font-bold text-gold-400"
					>
						{s.n}
					</span>
					<h3 class="mt-4 font-display text-xl font-bold text-forest-900">{s.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>

<!-- DATES -->
<section id="dates" class="bg-cream">
	<div class="mx-auto max-w-5xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<SectionHeading eyebrow="Important Dates" center>
				Admission Calendar <span class="text-gold-600 italic">2027–28</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-10 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Event</th>
							<th class="px-5 py-3.5 text-right font-bold">Date</th>
						</tr>
					</thead>
					<tbody>
						{#each importantDates as d, i}
							<tr class={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/60'}>
								<td class="px-5 py-3.5 font-medium text-ink/85">{d.event}</td>
								<td class="px-5 py-3.5 text-right font-bold whitespace-nowrap text-forest-900">{d.date}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</Reveal>
	</div>
</section>

<!-- FEES -->
<section id="fees" class="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="Fee Structure" text="Transparent fees, no hidden charges. Sibling and alumni concessions apply — see the FAQ below.">
			Fee Structure <span class="text-gold-600 italic">2027–28</span>
		</SectionHeading>
	</Reveal>
	<Reveal>
		<div class="mt-10 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-forest-900 text-white">
						<th class="px-5 py-3.5 font-bold">Particulars</th>
						<th class="px-5 py-3.5 text-right font-bold">Nursery – KG</th>
						<th class="px-5 py-3.5 text-right font-bold">Classes I – V</th>
						<th class="px-5 py-3.5 text-right font-bold">Classes VI – VIII</th>
						<th class="px-5 py-3.5 text-right font-bold">Classes IX – XII</th>
					</tr>
				</thead>
				<tbody>
					{#each feeStructure as f, i}
						<tr class={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/60'}>
							<td class="px-5 py-3.5 font-medium text-ink/85">{f.head}</td>
							<td class="px-5 py-3.5 text-right font-semibold">{f.nursery}</td>
							<td class="px-5 py-3.5 text-right font-semibold">{f.primary}</td>
							<td class="px-5 py-3.5 text-right font-semibold">{f.middle}</td>
							<td class="px-5 py-3.5 text-right font-semibold">{f.senior}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-xs text-ink/50">
			Fees shown are indicative (demo) for the 2027–28 session. Please confirm the current fee
			schedule at the school office before payment.
		</p>
	</Reveal>

	<!-- Documents -->
	<div class="mt-12 grid gap-6 lg:grid-cols-2">
		<Reveal>
			<div class="h-full rounded-xl border border-forest-900/10 bg-white p-7 shadow-sm">
				<h3 class="flex items-center gap-2 font-display text-xl font-bold text-forest-900">
					<Icon name="file" cls="h-5 w-5 text-gold-600" />
					Documents Required
				</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-ink/75">
					{#each ['Birth certificate of the child', 'Aadhaar card of child and parents', '4 passport-size photographs', 'Previous school report card (Class II onwards)', 'Transfer certificate (at admission time)', 'Address proof of parents'] as d}
						<li class="flex items-start gap-2.5">
							<Icon name="check" cls="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest-700" />
							{d}
						</li>
					{/each}
				</ul>
			</div>
		</Reveal>
		<Reveal>
			<div class="flex h-full flex-col justify-between rounded-xl bg-forest-900 p-7 text-white shadow-sm">
				<div>
					<h3 class="font-display text-xl font-bold text-gold-400">Need help with admissions?</h3>
					<p class="mt-2 text-sm leading-relaxed text-white/75">
						Our admissions team is available Monday to Saturday, 8:00 AM – 4:00 PM. Call us, or
						fill the enquiry form below and we will call you back within 24 hours.
					</p>
				</div>
				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href="tel:+917544000044"
						class="inline-flex min-h-11 items-center gap-2 rounded-sm bg-gold-500 px-5 text-sm font-extrabold text-forest-950 transition hover:bg-gold-400"
					>
						<Icon name="phone" cls="h-4 w-4" />
						+91 75440 00044
					</a>
					<a
						href="#enquire"
						class="inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/40 px-5 text-sm font-extrabold text-white transition hover:bg-white/10"
					>
						Enquire Online
					</a>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<!-- ENQUIRY FORM -->
<section id="enquire" class="bg-cream">
	<div class="mx-auto max-w-3xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<SectionHeading eyebrow="Enquire Now" center>
				Admission <span class="text-gold-600 italic">Enquiry Form</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			{#if submitted}
				<div class="mt-10 rounded-xl border border-forest-700/30 bg-white p-8 text-center shadow-sm">
					<span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name="check" cls="h-8 w-8" />
					</span>
					<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">Thank you, {parentName}!</h3>
					<p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/65">
						Your enquiry for <strong>Class {childClass}</strong> has been received. Our admissions
						team will call you on <strong>{phone}</strong> within 24 hours.
					</p>
					<p class="mt-3 text-xs text-ink/50">Demo form — no data is sent anywhere.</p>
					<button
						type="button"
						onclick={() => {
							submitted = false;
							parentName = '';
							phone = '';
							email = '';
							message = '';
						}}
						class="mt-6 inline-flex min-h-11 items-center rounded-sm border-2 border-forest-900 px-5 text-sm font-extrabold text-forest-900 transition hover:bg-forest-900 hover:text-white"
					>
						Submit Another Enquiry
					</button>
				</div>
			{:else}
				<form
					class="mt-10 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8"
					onsubmit={submitEnquiry}
					novalidate
				>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="parent-name" class="mb-1.5 block text-sm font-bold text-forest-900">
								Parent’s Full Name *
							</label>
							<input
								id="parent-name"
								type="text"
								bind:value={parentName}
								placeholder="e.g. Rakesh Kumar"
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							/>
							{#if errors.parentName}<p class="mt-1.5 text-xs text-red-600">{errors.parentName}</p>{/if}
						</div>
						<div>
							<label for="phone" class="mb-1.5 block text-sm font-bold text-forest-900">
								Mobile Number *
							</label>
							<input
								id="phone"
								type="tel"
								bind:value={phone}
								placeholder="10-digit mobile"
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							/>
							{#if errors.phone}<p class="mt-1.5 text-xs text-red-600">{errors.phone}</p>{/if}
						</div>
						<div>
							<label for="email" class="mb-1.5 block text-sm font-bold text-forest-900">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								placeholder="you@example.com"
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							/>
							{#if errors.email}<p class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
						</div>
						<div>
							<label for="child-class" class="mb-1.5 block text-sm font-bold text-forest-900">
								Class Applying For *
							</label>
							<select
								id="child-class"
								bind:value={childClass}
								class="w-full rounded-md border border-forest-900/20 bg-white px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							>
								{#each ['Nursery', 'KG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'XI'] as c}
									<option value={c}>{c === 'Nursery' || c === 'KG' ? c : 'Class ' + c}</option>
								{/each}
							</select>
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="mb-1.5 block text-sm font-bold text-forest-900">
								Message (optional)
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={message}
								placeholder="Anything you would like us to know — transport route, sibling studying here, etc."
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						class="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400 sm:w-auto"
					>
						SUBMIT ENQUIRY
						<Icon name="arrow-right" cls="h-4 w-4" />
					</button>
				</form>
			{/if}
		</Reveal>
	</div>
</section>

<!-- FAQ -->
<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="FAQ" center>
			Admissions <span class="text-gold-600 italic">FAQs</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-10 space-y-3">
		{#each admissionFaqs as f, i}
			<Reveal>
				<div class="overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
					<button
						type="button"
						aria-expanded={openFaq === i}
						onclick={() => {
							openFaq = openFaq === i ? null : i;
						}}
						class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
					>
						<span class="font-display text-base font-bold text-forest-900 sm:text-lg">{f.q}</span>
						<Icon
							name="chevron-down"
							cls="h-5 w-5 shrink-0 text-forest-800 transition-transform {openFaq === i
								? 'rotate-180'
								: ''}"
						/>
					</button>
					<div
						class="grid transition-all duration-500 ease-in-out {openFaq === i
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<p class="px-5 pb-5 text-sm leading-relaxed text-ink/70">{f.a}</p>
						</div>
					</div>
				</div>
			</Reveal>
		{/each}
	</div>
</section>
