<script lang="ts">
	import '../app.css';
	import TopBar from '#lib/components/TopBar.svelte';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	let showTop = $state(false);

	$effect(() => {
		const onScroll = () => {
			showTop = window.scrollY > 600;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<TopBar />
<Header />

<main class="min-w-0">
	{@render children()}
</main>

<Footer />
<!-- Spacer so the fixed mobile call bar never covers footer content -->
<div class="h-16 lg:hidden" aria-hidden="true"></div>

<!-- Mobile call bar -->
<div
	class="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-forest-900 lg:hidden"
>
	<a
		href="tel:+917544000044"
		class="flex min-h-16 items-center justify-center gap-2 text-sm font-bold tracking-wide text-white"
	>
		<Icon name="phone" cls="h-5 w-5 text-gold-400" />
		Call Now
	</a>
	<a
		href="/admissions"
		class="flex min-h-16 items-center justify-center gap-2 bg-gold-500 text-sm font-bold tracking-wide text-forest-950"
	>
		Enquire Now
		<Icon name="arrow-right" cls="h-5 w-5" />
	</a>
</div>

<!-- WhatsApp chat -->
<a
	href="https://wa.me/917544000044?text=Hello%20Tricent%20Public%20School%2C%20I%20want%20to%20enquire%20about%20admissions%20for%20Academic%20Year%202027-28"
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Chat with us on WhatsApp"
	class="fixed right-4 bottom-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 lg:bottom-6"
>
	<Icon name="whatsapp" cls="h-6 w-6" />
</a>

<!-- Back to top -->
{#if showTop}
	<button
		type="button"
		aria-label="Back to top"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed right-4 bottom-[7.5rem] z-50 flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400 shadow-lg transition hover:bg-forest-800 lg:bottom-24"
	>
		<Icon name="arrow-up" cls="h-5 w-5" />
	</button>
{/if}
