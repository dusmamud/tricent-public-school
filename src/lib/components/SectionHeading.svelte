<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		text,
		center = false,
		children
	}: { eyebrow: string; text?: string; center?: boolean; children: Snippet } = $props();
</script>

<div class={center ? 'text-center' : 'text-left'}>
	<p
		class="text-xs font-extrabold tracking-[0.28em] text-gold-600 uppercase {center
			? ''
			: ''}"
	>
		{eyebrow}
	</p>
	<h2 class="mt-2 font-display text-3xl leading-tight font-bold text-forest-900 sm:text-4xl">
		{@render children()}
	</h2>
	{#if text}
		<p class="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink/70 {center ? 'mx-auto' : ''}">
			{text}
		</p>
	{/if}
</div>
