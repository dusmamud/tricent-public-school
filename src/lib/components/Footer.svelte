<script lang="ts">
	import Logo from '#lib/components/Logo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { school } from '#lib/data/site';

	let email = $state('');
	let error = $state('');
	let done = $state(false);

	function subscribe(e: Event) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter a valid email address.';
			return;
		}
		error = '';
		done = true;
	}
</script>

<footer class="bg-forest-900 text-white">
	<div class="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
			<div>
				<Logo dark />
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
					Nurturing young minds with strong values, academic excellence and holistic development.
				</p>
				<div class="mt-5 flex gap-2">
					{#each [{ n: 'facebook', label: 'Facebook' }, { n: 'instagram', label: 'Instagram' }, { n: 'youtube', label: 'YouTube' }, { n: 'linkedin', label: 'LinkedIn' }] as s}
						<a
							href="/"
							aria-label={s.label}
							class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-gold-400 hover:text-gold-400"
						>
							<Icon name={s.n} cls="h-4.5 w-4.5" />
						</a>
					{/each}
				</div>
			</div>

			<nav aria-label="Quick links">
				<h3 class="text-xs font-extrabold tracking-[0.25em] text-gold-400">QUICK LINKS</h3>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each [{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Academics', href: '/academics' }, { label: 'Facilities', href: '/facilities' }, { label: 'Admissions', href: '/admissions' }, { label: 'Gallery', href: '/gallery' }, { label: 'Contact Us', href: '/contact' }] as l}
						<li>
							<a href={l.href} class="text-white/75 transition hover:text-gold-300">{l.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Information">
				<h3 class="text-xs font-extrabold tracking-[0.25em] text-gold-400">INFORMATION</h3>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each [{ label: 'Fee Structure', href: '/admissions#fees' }, { label: 'Admission Process', href: '/admissions#process' }, { label: 'School Calendar', href: '/news-events' }, { label: 'News & Events', href: '/news-events' }, { label: 'Careers', href: '/careers' }, { label: 'Alumni', href: '/about#alumni' }, { label: 'Parent Login', href: '/parent-login' }] as l}
						<li>
							<a href={l.href} class="text-white/75 transition hover:text-gold-300">{l.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div>
				<h3 class="text-xs font-extrabold tracking-[0.25em] text-gold-400">CONTACT US</h3>
				<ul class="mt-4 space-y-3 text-sm text-white/75">
					<li class="flex gap-2.5">
						<Icon name="pin" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
						<span>{school.address}</span>
					</li>
					<li>
						<a href={school.phoneHref} class="flex gap-2.5 transition hover:text-gold-300">
							<Icon name="phone" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
							{school.phoneDisplay}
						</a>
					</li>
					<li>
						<a href="mailto:{school.email}" class="flex gap-2.5 transition hover:text-gold-300">
							<Icon name="mail" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
							{school.email}
						</a>
					</li>
					<li class="flex gap-2.5">
						<Icon name="clock" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
						<span>{school.hours}</span>
					</li>
				</ul>

				<h3 class="mt-6 text-xs font-extrabold tracking-[0.25em] text-gold-400">NEWSLETTER</h3>
				{#if done}
					<p class="mt-3 rounded-md bg-white/10 px-4 py-3 text-sm text-gold-300">
						Thank you! You are subscribed to school updates.
					</p>
				{:else}
					<form class="mt-3" onsubmit={subscribe} novalidate>
						<div class="flex overflow-hidden rounded-md border border-white/20 bg-white/10">
							<label for="newsletter-email" class="sr-only">Email address</label>
							<input
								id="newsletter-email"
								type="email"
								bind:value={email}
								placeholder="Enter your email"
								class="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
							/>
							<button
								type="submit"
								aria-label="Subscribe"
								class="flex w-11 shrink-0 items-center justify-center bg-gold-500 text-forest-950 transition hover:bg-gold-400"
							>
								<Icon name="send" cls="h-4 w-4" />
							</button>
						</div>
						{#if error}
							<p class="mt-2 text-xs text-red-300">{error}</p>
						{/if}
					</form>
				{/if}
			</div>
		</div>
	</div>
	<div class="border-t border-white/10">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8"
		>
			<p>© 2025 Tricent Public School. All Rights Reserved.</p>
			<p class="flex gap-4">
				<a href="/privacy-policy" class="transition hover:text-gold-300">Privacy Policy</a>
				<span aria-hidden="true">|</span>
				<a href="/terms" class="transition hover:text-gold-300">Terms &amp; Conditions</a>
			</p>
		</div>
	</div>
</footer>
