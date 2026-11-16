<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import PageHero from '#lib/components/PageHero.svelte';

	let email = $state('');
	let password = $state('');
	let showPw = $state(false);
	let error = $state('');
	let loggedIn = $state(false);

	function login(e: Event) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter a valid email address.';
			return;
		}
		if (password.length < 4) {
			error = 'Password must be at least 4 characters.';
			return;
		}
		error = '';
		loggedIn = true;
	}

	function logout() {
		loggedIn = false;
		email = '';
		password = '';
	}
</script>

<PageHero
	title="Parent Login"
	subtitle="Track attendance, fees, notices and your child’s progress — all in one place."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Parent Login' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	{#if !loggedIn}
		<Reveal>
			<div class="mx-auto max-w-md rounded-2xl border border-forest-900/10 bg-white p-7 shadow-lg sm:p-9">
				<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-800">
					<Icon name="lock" cls="h-6 w-6" />
				</span>
				<h2 class="mt-4 text-center font-display text-2xl font-bold text-forest-900">Parent Portal</h2>
				<p class="mt-1 text-center text-sm text-ink/60">
					Demo login — use any email and a 4+ character password.
				</p>
				<form class="mt-7 space-y-5" onsubmit={login} novalidate>
					<div>
						<label for="login-email" class="mb-1.5 block text-sm font-bold text-forest-900">Email Address</label>
						<input
							id="login-email"
							type="email"
							bind:value={email}
							placeholder="parent@example.com"
							class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
						/>
					</div>
					<div>
						<label for="login-password" class="mb-1.5 block text-sm font-bold text-forest-900">Password</label>
						<div class="relative">
							<input
								id="login-password"
								type={showPw ? 'text' : 'password'}
								bind:value={password}
								placeholder="Your password"
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 pr-12 text-sm focus:border-forest-700 focus:outline-none"
							/>
							<button
								type="button"
								aria-label={showPw ? 'Hide password' : 'Show password'}
								onclick={() => {
									showPw = !showPw;
								}}
								class="absolute top-1/2 right-3 -translate-y-1/2 text-forest-800"
							>
								<Icon name="eye" cls="h-5 w-5" />
							</button>
						</div>
					</div>
					{#if error}
						<p class="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
					{/if}
					<button
						type="submit"
						class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
					>
						LOGIN
						<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
					</button>
					<p class="text-center text-xs text-ink/50">
						Forgot password? Contact the school office at +91 75440 00044.
					</p>
				</form>
			</div>
		</Reveal>
	{:else}
		<div class="fade-up">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<div>
					<h2 class="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
						Welcome back, Parent
					</h2>
					<p class="mt-1 text-sm text-ink/60">Signed in as {email} · Demo dashboard — sample data only.</p>
				</div>
				<button
					type="button"
					onclick={logout}
					class="inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-forest-900 px-5 text-sm font-extrabold text-forest-900 transition hover:bg-forest-900 hover:text-white"
				>
					Logout
				</button>
			</div>

			<div class="mt-8 grid gap-6 lg:grid-cols-3">
				<div class="rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<div class="flex items-center gap-4">
						<span class="flex h-16 w-16 items-center justify-center rounded-full bg-forest-900 font-display text-xl font-bold text-gold-400">AV</span>
						<div>
							<p class="font-display text-lg font-bold text-forest-900">Aarav Verma</p>
							<p class="text-sm text-ink/60">Class VI-B · Roll No. 12</p>
						</div>
					</div>
					<dl class="mt-5 space-y-3 text-sm">
						<div class="flex justify-between border-b border-forest-900/5 pb-2.5">
							<dt class="text-ink/60">Attendance (Nov)</dt>
							<dd class="font-bold text-forest-800">96%</dd>
						</div>
						<div class="flex justify-between border-b border-forest-900/5 pb-2.5">
							<dt class="text-ink/60">Fee status</dt>
							<dd class="font-bold text-forest-800">Paid till Mar 2026</dd>
						</div>
						<div class="flex justify-between border-b border-forest-900/5 pb-2.5">
							<dt class="text-ink/60">Class teacher</dt>
							<dd class="font-bold text-forest-800">Mrs. Sunita Mishra</dd>
						</div>
						<div class="flex justify-between">
							<dt class="text-ink/60">Bus route</dt>
							<dd class="font-bold text-forest-800">Route 4 · GPS live</dd>
						</div>
					</dl>
				</div>

				<div class="rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h3 class="flex items-center gap-2 font-display text-lg font-bold text-forest-900">
						<Icon name="calendar" cls="h-5 w-5 text-gold-600" />
						Latest Notices
					</h3>
					<ul class="mt-4 space-y-3 text-sm">
						{#each [{ d: '18 Nov', t: 'Annual Sports Day on 22 Nov — students to report in house T-shirts.' }, { d: '15 Nov', t: 'Unit Test II timetable published for Classes VI–X.' }, { d: '10 Nov', t: 'Winter uniform from 1 December. Winter timings: 9:00 AM – 3:30 PM.' }] as n}
							<li class="flex gap-3 rounded-lg bg-cream px-4 py-3">
								<span class="shrink-0 rounded bg-forest-900 px-2 py-1 text-[0.65rem] font-extrabold text-gold-400">{n.d}</span>
								<span class="leading-relaxed text-ink/75">{n.t}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-xl bg-forest-900 p-6 text-white shadow-sm">
					<h3 class="font-display text-lg font-bold text-gold-400">Quick Links</h3>
					<ul class="mt-4 space-y-2.5 text-sm">
						{#each [{ label: 'Pay Fees Online', href: '/admissions#fees' }, { label: 'Download Report Card', href: '/parent-login' }, { label: 'Bus Tracking (Route 4)', href: '/facilities#transport' }, { label: 'School Calendar', href: '/news-events' }, { label: 'Contact Class Teacher', href: '/contact' }] as l}
							<li>
								<a href={l.href} class="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 transition hover:bg-white/10">
									{l.label}
									<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/if}
</section>
