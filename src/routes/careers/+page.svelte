<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';

	const roles = [
		{
			title: 'PGT Mathematics',
			dept: 'Senior Secondary · Full-time',
			text: 'Teach Classes XI–XII Mathematics and mentor JEE / CUET aspirants. M.Sc. + B.Ed. with 3+ years of senior teaching preferred.'
		},
		{
			title: 'Primary Teacher (English)',
			dept: 'Primary Wing · Full-time',
			text: 'Teach English to Classes I–V through phonics, storytelling and activity-based learning. B.Ed. / D.El.Ed. with strong spoken English.'
		},
		{
			title: 'Transport In-charge',
			dept: 'Operations · Full-time',
			text: 'Manage 15 GPS-enabled buses, routes, drivers and daily safety checks. Experience in school transport operations preferred.'
		}
	];

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let role = $state(roles[0].title);
	let note = $state('');
	let error = $state('');
	let done = $state(false);

	function apply(e: Event) {
		e.preventDefault();
		if (name.trim().length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter your full name and a valid email address.';
			return;
		}
		error = '';
		done = true;
	}
</script>

<PageHero
	title="Careers"
	subtitle="Join a team that shapes young lives — where good teachers are respected, supported and celebrated."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="Open Positions" text="We are always looking for passionate educators and caring staff.">
			Work at <span class="text-gold-600 italic">Tricent</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each roles as r}
			<Reveal>
				<article class="flex h-full flex-col justify-between rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<div>
						<span class="inline-flex rounded-full bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800">{r.dept}</span>
						<h2 class="mt-3 font-display text-xl font-bold text-forest-900">{r.title}</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{r.text}</p>
					</div>
					<a
						href="#apply"
						onclick={() => {
							role = r.title;
						}}
						class="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold text-white transition hover:bg-forest-800"
					>
						Apply for this role
						<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
					</a>
				</article>
			</Reveal>
		{/each}
	</div>

	<div id="apply" class="mx-auto mt-14 max-w-2xl scroll-mt-28">
		<Reveal>
			<SectionHeading eyebrow="Apply Now" center>
				Application <span class="text-gold-600 italic">Form</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			{#if done}
				<div class="mt-8 rounded-xl border border-forest-700/30 bg-white p-8 text-center shadow-sm">
					<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name="check" cls="h-7 w-7" />
					</span>
					<h3 class="mt-4 font-display text-xl font-bold text-forest-900">Application received, {name}!</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">
						Thank you for applying for <strong>{role}</strong>. Our HR team will contact you at {email}
						if your profile is shortlisted.
					</p>
					<p class="mt-2 text-xs text-ink/70">Demo form — no application is actually sent.</p>
				</div>
			{:else}
				<form class="mt-8 space-y-5 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8" onsubmit={apply} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="applicant-name" class="mb-1.5 block text-sm font-bold text-forest-900">Full Name *</label>
							<input id="applicant-name" type="text" bind:value={name} placeholder="Your name" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
						</div>
						<div>
							<label for="applicant-phone" class="mb-1.5 block text-sm font-bold text-forest-900">Phone</label>
							<input id="applicant-phone" type="tel" bind:value={phone} placeholder="10-digit mobile" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
						</div>
					</div>
					<div>
						<label for="applicant-email" class="mb-1.5 block text-sm font-bold text-forest-900">Email *</label>
						<input id="applicant-email" type="email" bind:value={email} placeholder="you@example.com" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none" />
					</div>
					<div>
						<label for="applicant-role" class="mb-1.5 block text-sm font-bold text-forest-900">Role</label>
						<select id="applicant-role" bind:value={role} class="w-full rounded-md border border-forest-900/20 bg-white px-4 py-3 text-sm focus:border-forest-700 focus:outline-none">
							{#each roles as r}
								<option value={r.title}>{r.title}</option>
							{/each}
							<option value="Other">Other / General Application</option>
						</select>
					</div>
					<div>
						<label for="applicant-note" class="mb-1.5 block text-sm font-bold text-forest-900">Brief Introduction</label>
						<textarea id="applicant-note" rows="4" bind:value={note} placeholder="Your qualification, experience and why you would love to teach at Tricent…" class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"></textarea>
					</div>
					{#if error}
						<p class="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
					{/if}
					<button type="submit" class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400 sm:w-auto">
						SUBMIT APPLICATION
						<Icon name="arrow-right" cls="h-4 w-4" />
					</button>
				</form>
			{/if}
		</Reveal>
	</div>
</section>
