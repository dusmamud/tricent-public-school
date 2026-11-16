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

<!-- Back to top -->
{#if showTop}
	<button
		type="button"
		aria-label="Back to top"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed right-4 bottom-20 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400 shadow-lg transition hover:bg-forest-800 lg:bottom-6"
	>
		<Icon name="arrow-up" cls="h-5 w-5" />
	</button>
{/if}
