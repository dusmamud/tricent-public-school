<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { school } from '#lib/data/site';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('General Enquiry');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let sent = $state(false);

	function submit(e: Event) {
		e.preventDefault();
		const errs: Record<string, string> = {};
		if (name.trim().length < 3) errs.name = 'Please enter your full name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Please enter a valid email address.';
		if (message.trim().length < 10) errs.message = 'Please write a message of at least 10 characters.';
		errors = errs;
		if (Object.keys(errs).length === 0) sent = true;
	}
</script>

<PageHero
	title="Contact Us"
	subtitle="We would love to hear from you — visit the campus, call us, or send a message."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each [{ icon: 'pin', title: 'Our Campus', lines: [school.address] }, { icon: 'phone', title: 'Call Us', lines: [school.phoneDisplay, 'Mon – Sat, 8 AM – 4 PM'] }, { icon: 'mail', title: 'Email Us', lines: [school.email, 'Replies within 24 hours'] }, { icon: 'clock', title: 'School Hours', lines: ['Mon – Sat: 8:00 AM – 4:00 PM', 'Sunday: Closed'] }] as c}
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm">
					<span class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name={c.icon} cls="h-6 w-6" />
					</span>
					<h2 class="mt-3 font-display text-lg font-bold text-forest-900">{c.title}</h2>
					{#each c.lines as line}
						<p class="mt-1 text-sm leading-relaxed text-ink/65">{line}</p>
					{/each}
				</div>
			</Reveal>
		{/each}
	</div>

	<div class="mt-12 grid gap-8 lg:grid-cols-5">
		<Reveal cls="lg:col-span-2">
			<div>
				<SectionHeading eyebrow="Send a Message">
					Get in <span class="text-gold-600 italic">Touch</span>
				</SectionHeading>
				{#if sent}
					<div class="mt-8 rounded-xl border border-forest-700/30 bg-forest-50 p-6 text-center">
						<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 text-gold-400">
							<Icon name="check" cls="h-7 w-7" />
						</span>
						<h3 class="mt-4 font-display text-xl font-bold text-forest-900">Message sent, {name}!</h3>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">
							Thank you for writing to us. Our office will reply to {email} within 24 hours.
						</p>
						<p class="mt-2 text-xs text-ink/70">Demo form — no message is actually sent.</p>
					</div>
				{:else}
					<form class="mt-8 space-y-5" onsubmit={submit} novalidate>
						<div>
							<label for="name" class="mb-1.5 block text-sm font-bold text-forest-900">Your Name *</label>
							<input id="name" type="text" bind:value={name} placeholder="Full name" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
							{#if errors.name}<p class="mt-1.5 text-xs text-red-600">{errors.name}</p>{/if}
						</div>
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="email" class="mb-1.5 block text-sm font-bold text-forest-900">Email *</label>
								<input id="email" type="email" bind:value={email} placeholder="you@example.com" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
								{#if errors.email}<p class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
							</div>
							<div>
								<label for="phone" class="mb-1.5 block text-sm font-bold text-forest-900">Phone</label>
								<input id="phone" type="tel" bind:value={phone} placeholder="10-digit mobile" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
							</div>
						</div>
						<div>
							<label for="subject" class="mb-1.5 block text-sm font-bold text-forest-900">Subject</label>
							<select id="subject" bind:value={subject} class="w-full rounded-md border border-forest-900/20 bg-white px-4 py-3 text-sm focus:border-forest-700 focus:outline-none">
								{#each ['General Enquiry', 'Admissions', 'Transport', 'Fee Related', 'Feedback'] as s}
									<option value={s}>{s}</option>
								{/each}
							</select>
						</div>
						<div>
							<label for="message" class="mb-1.5 block text-sm font-bold text-forest-900">Message *</label>
							<textarea id="message" rows="5" bind:value={message} placeholder="Write your message here…" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"></textarea>
							{#if errors.message}<p class="mt-1.5 text-xs text-red-600">{errors.message}</p>{/if}
						</div>
						<button type="submit" class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-7 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800">
							SEND MESSAGE
							<Icon name="send" cls="h-4 w-4 text-gold-400" />
						</button>
					</form>
				{/if}
			</div>
		</Reveal>
		<Reveal cls="lg:col-span-3">
			<div class="h-full min-h-96 overflow-hidden rounded-xl border border-forest-900/10 shadow-sm">
				<iframe
					title="Tricent Public School on Google Maps — Beldari, Simri Bakhtiyarpur, Patna"
					src="https://www.google.com/maps?q=Simri+Bakhtiyarpur,+Patna,+Bihar&output=embed"
					class="h-full min-h-96 w-full border-0"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					allowfullscreen
				></iframe>
			</div>
			<p class="mt-3 text-sm text-ink/70">
				Map not loading?
				<a
					href="https://www.google.com/maps/search/?api=1&query=Simri+Bakhtiyarpur,+Patna,+Bihar"
					target="_blank"
					rel="noreferrer"
					class="font-bold text-forest-800 underline underline-offset-2"
				>
					Open in Google Maps
				</a>
			</p>
		</Reveal>
	</div>
</section>
