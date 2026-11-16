<script lang="ts">
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Page Not Found | Tricent Public School</title>
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
	<p class="font-display text-7xl font-bold text-gold-500">404</p>
	<h1 class="mt-4 font-display text-3xl font-bold text-forest-900 sm:text-4xl">
		This page seems to have left the classroom
	</h1>
	<p class="mx-auto mt-4 max-w-md leading-relaxed text-ink/65">
		The page “{page.url.pathname}” does not exist or has moved. Let us take you back to the school
		you were looking for.
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/"
			class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
		>
			<Icon name="arrow-left" cls="h-4 w-4 text-gold-400" />
			BACK TO HOME
		</a>
		<a
			href="/admissions"
			class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
		>
			ADMISSIONS
			<Icon name="arrow-right" cls="h-4 w-4" />
		</a>
	</div>
</section>
