<script lang="ts">
	let {
		title,
		subtitle,
		crumb
	}: { title: string; subtitle?: string; crumb: { label: string; href?: string }[] } = $props();
</script>

<svelte:head>
	<title>{title} | Tricent Public School</title>
</svelte:head>

<section class="relative overflow-hidden bg-forest-900">
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.07]"
		style="background-image: radial-gradient(circle at 20% 30%, #c9a227 0, transparent 32%), radial-gradient(circle at 80% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 60% 90%, #c9a227 0, transparent 30%);"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
		<nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wider text-white/60">
			{#each crumb as c, i}
				{#if c.href}
					<a href={c.href} class="transition hover:text-gold-300">{c.label.toUpperCase()}</a>
				{:else}
					<span class="text-gold-400">{c.label.toUpperCase()}</span>
				{/if}
				{#if i < crumb.length - 1}
					<span aria-hidden="true" class="text-white/40">/</span>
				{/if}
			{/each}
		</nav>
		<h1 class="mt-4 max-w-3xl font-display text-4xl leading-tight font-bold text-white sm:text-5xl">
			{title}
		</h1>
		{#if subtitle}
			<p class="mt-4 max-w-2xl leading-relaxed text-white/75">{subtitle}</p>
		{/if}
		<div class="mt-6 h-1 w-20 rounded bg-gold-500" aria-hidden="true"></div>
	</div>
</section>
