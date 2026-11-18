<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { alumniProfiles } from '#lib/data/more';

	// Alumni register form
	let fullName = $state('');
	let batch = $state('');
	let email = $state('');
	let role = $state('');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	const batchYears = Array.from({ length: 22 }, (_, i) => String(2026 - i));

	function submitRegister(e: Event) {
		e.preventDefault();
		const errs: Record<string, string> = {};
		if (fullName.trim().length < 3) errs.fullName = 'Please enter your full name.';
		if (!batch) errs.batch = 'Please select your batch / passing year.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
			errs.email = 'Please enter a valid email address.';
		if (role.trim().length < 3) errs.role = 'Please enter your current role or organisation.';
		errors = errs;
		if (Object.keys(errs).length > 0) return;

		try {
			const existing = JSON.parse(localStorage.getItem('tricent-alumni-register') ?? '[]');
			const entries = Array.isArray(existing) ? existing : [];
			entries.push({
				fullName: fullName.trim(),
				batch,
				email: email.trim(),
				role: role.trim(),
				message: message.trim(),
				registeredAt: new Date().toISOString()
			});
			localStorage.setItem('tricent-alumni-register', JSON.stringify(entries));
		} catch {
			// Demo form: if local storage is unavailable, still show the success panel.
		}
		submitted = true;
	}

	function resetForm() {
		fullName = '';
		batch = '';
		email = '';
		role = '';
		message = '';
		errors = {};
		submitted = false;
	}
</script>

<PageHero
	title="Our Alumni"
	subtitle="From the classrooms of Tricent to IITs, AIIMS, the civil services, the armed forces and boardrooms across India — our alumni carry the school's values wherever they go."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Alumni' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Stats band -->
	<Reveal>
		<div class="grid grid-cols-3 gap-4 rounded-xl bg-forest-900 px-4 py-8 text-center sm:px-8">
			<div>
				<p class="font-display text-3xl font-bold text-gold-400 sm:text-4xl">2,400+</p>
				<p class="mt-1 text-xs font-bold tracking-wider text-white/70 uppercase sm:text-sm">Alumni</p>
			</div>
			<div>
				<p class="font-display text-3xl font-bold text-gold-400 sm:text-4xl">28</p>
				<p class="mt-1 text-xs font-bold tracking-wider text-white/70 uppercase sm:text-sm">Batches</p>
			</div>
			<div>
				<p class="font-display text-3xl font-bold text-gold-400 sm:text-4xl">40+</p>
				<p class="mt-1 text-xs font-bold tracking-wider text-white/70 uppercase sm:text-sm">Cities</p>
			</div>
		</div>
	</Reveal>

	<!-- Notable alumni -->
	<div class="mt-16">
		<Reveal>
			<SectionHeading
				eyebrow="Notable Alumni"
				text="A few of the Tricent graduates making their mark in public service, medicine, technology, law, business and the armed forces."
			>
				Where Tricent <span class="text-gold-600 italic">Takes You</span>
			</SectionHeading>
		</Reveal>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each alumniProfiles as a}
				<Reveal>
					<article
						class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<div class="flex items-center gap-4">
							<span
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-900 font-display text-lg font-bold text-gold-400"
								aria-hidden="true"
							>
								{a.initials}
							</span>
							<div class="min-w-0">
								<h3 class="font-display text-lg leading-snug font-bold text-forest-900">{a.name}</h3>
								<p class="mt-0.5 text-xs font-bold tracking-wide text-gold-700 uppercase">{a.batch}</p>
							</div>
						</div>
						<p class="mt-4 flex items-center gap-2 text-sm font-bold text-forest-800">
							<Icon name="gradcap" cls="h-5 w-5 shrink-0 text-gold-600" />
							{a.role}
						</p>
						<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{a.detail}</p>
						<blockquote
							class="mt-4 border-l-2 border-gold-500 pl-3 text-sm leading-relaxed text-ink/70 italic"
						>
							“{a.quote}”
						</blockquote>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>

	<!-- Register form -->
	<div class="mt-16 grid gap-10 lg:grid-cols-5">
		<Reveal cls="lg:col-span-2">
			<div>
				<SectionHeading
					eyebrow="Stay Connected"
					text="Register with the Tricent Alumni Network to receive reunion invitations, school news and mentorship opportunities."
				>
					Join the Alumni <span class="text-gold-600 italic">Register</span>
				</SectionHeading>
				<div class="mt-8 overflow-hidden rounded-xl shadow-sm">
					<picture class="contents">
						<source
							type="image/avif"
							srcset="/images/responsive/assembly-480.avif 480w, /images/responsive/assembly-800.avif 800w, /images/responsive/assembly-1200.avif 1200w"
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<source
							type="image/webp"
							srcset="/images/responsive/assembly-480.webp 480w, /images/responsive/assembly-800.webp 800w, /images/responsive/assembly-1200.webp 1200w"
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<img
							src="/images/assembly.jpg"
							alt="Students assembled for the morning assembly at Tricent Public School"
							width="1600"
							height="628"
							class="h-56 w-full object-cover sm:h-64"
							loading="lazy"
						/>
					</picture>
				</div>
				<p class="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink/70">
					<Icon name="shield" cls="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
					Your details are kept only in this browser for this demo and are never shared. The school office
					will confirm registrations by email.
				</p>
			</div>
		</Reveal>

		<Reveal cls="lg:col-span-3">
			<div>
				{#if submitted}
					<div class="rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
						<span
							class="flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name="check" cls="h-7 w-7" />
						</span>
						<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">
							Thank you, {fullName.trim()}!
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">
							Your registration for the {batch} batch has been saved. The alumni coordinator will write
							to {email.trim()} with reunion and mentorship updates.
						</p>
						<button
							type="button"
							onclick={resetForm}
							class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
						>
							<Icon name="arrow-left" cls="h-4 w-4 text-gold-400" />
							REGISTER ANOTHER
						</button>
					</div>
				{:else}
					<form
						onsubmit={submitRegister}
						novalidate
						class="rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8"
					>
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="alumni-name" class="text-sm font-bold text-forest-900">Full name *</label>
								<input
									id="alumni-name"
									type="text"
									bind:value={fullName}
									placeholder="e.g. Aarav Kumar"
									class="mt-1.5 min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
								/>
								{#if errors.fullName}<p class="mt-1.5 text-xs text-red-600">{errors.fullName}</p>{/if}
							</div>
							<div>
								<label for="alumni-batch" class="text-sm font-bold text-forest-900">
									Batch / passing year *
								</label>
								<select
									id="alumni-batch"
									bind:value={batch}
									class="mt-1.5 min-h-12 w-full rounded-sm border border-forest-900/20 bg-white px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
								>
									<option value="" disabled>Select your batch</option>
									{#each batchYears as y}
										<option value={y}>{y}</option>
									{/each}
								</select>
								{#if errors.batch}<p class="mt-1.5 text-xs text-red-600">{errors.batch}</p>{/if}
							</div>
							<div>
								<label for="alumni-email" class="text-sm font-bold text-forest-900">Email *</label>
								<input
									id="alumni-email"
									type="email"
									bind:value={email}
									placeholder="you@example.com"
									class="mt-1.5 min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
								/>
								{#if errors.email}<p class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
							</div>
							<div>
								<label for="alumni-role" class="text-sm font-bold text-forest-900">
									Current role / organisation *
								</label>
								<input
									id="alumni-role"
									type="text"
									bind:value={role}
									placeholder="e.g. Doctor, AIIMS New Delhi"
									class="mt-1.5 min-h-12 w-full rounded-sm border border-forest-900/20 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
								/>
								{#if errors.role}<p class="mt-1.5 text-xs text-red-600">{errors.role}</p>{/if}
							</div>
							<div class="sm:col-span-2">
								<label for="alumni-message" class="text-sm font-bold text-forest-900">
									Message <span class="font-normal text-ink/70">(optional)</span>
								</label>
								<textarea
									id="alumni-message"
									bind:value={message}
									rows="4"
									placeholder="Share a memory, an achievement, or how you would like to help current students."
									class="mt-1.5 w-full resize-y rounded-sm border border-forest-900/20 px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							class="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800 sm:w-auto"
						>
							<Icon name="send" cls="h-4 w-4 text-gold-400" />
							REGISTER AS ALUMNI
						</button>
						<p class="mt-3 text-xs text-ink/70">
							Fields marked * are required. Demo form — entries are saved only in your browser.
						</p>
					</form>
				{/if}
			</div>
		</Reveal>
	</div>

	<!-- Give back -->
	<div class="mt-16">
		<Reveal>
			<SectionHeading
				eyebrow="Give Back"
				text="Three simple ways alumni help the next generation of Tricent students."
			>
				Help the Next <span class="text-gold-600 italic">Generation</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each [{ icon: 'users', title: 'Mentor Students', text: 'Guide a Class XI or XII student through career choices, entrance exams and interviews — one hour a month, online or on campus.' }, { icon: 'bulb', title: 'Guest Lecture', text: 'Share your field with a classroom: a talk, a workshop or a career day session for students curious about your profession.' }, { icon: 'heart', title: 'Sponsor a Scholarship', text: 'Support the Tricent merit-cum-means scholarship fund. Even ₹5,000 a year covers a deserving student’s books and exam fees.' }] as way}
				<Reveal>
					<article
						class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name={way.icon} cls="h-6 w-6" />
						</span>
						<h3 class="mt-4 font-display text-xl font-bold text-forest-900">{way.title}</h3>
						<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{way.text}</p>
						<a
							href="/contact"
							class="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
						>
							GET INVOLVED
							<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
						</a>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>

	<Reveal>
		<p class="mt-12 text-sm text-ink/70">
			All alumni profiles, statistics and achievements on this page are demo entries for client presentation.
			The school will publish verified alumni stories here after launch.
		</p>
	</Reveal>
</div>
