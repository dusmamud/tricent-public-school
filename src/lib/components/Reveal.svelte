<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, cls = '' }: { children: Snippet; cls?: string } = $props();
	let el: HTMLDivElement;

	$effect(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						obs.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.1 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	});
</script>

<div bind:this={el} class="reveal {cls}">
	{@render children()}
</div>
