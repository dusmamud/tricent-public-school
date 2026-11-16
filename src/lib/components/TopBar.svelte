<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { school } from '#lib/data/site';
</script>

<div class="bg-forest-900 text-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
		<div class="flex min-w-0 items-center gap-4">
			<a href={school.phoneHref} class="flex items-center gap-1.5 font-semibold whitespace-nowrap">
				<Icon name="phone" cls="h-3.5 w-3.5 text-gold-400" />
				{school.phoneDisplay}
			</a>
			<a
				href="mailto:{school.email}"
				class="hidden items-center gap-1.5 whitespace-nowrap md:flex"
			>
				<Icon name="mail" cls="h-3.5 w-3.5 text-gold-400" />
				{school.email}
			</a>
			<span class="hidden items-center gap-1.5 whitespace-nowrap xl:flex">
				<Icon name="pin" cls="h-3.5 w-3.5 text-gold-400" />
				{school.address}
			</span>
		</div>
		<div class="flex shrink-0 items-center gap-3 sm:gap-4">
			<a href="/careers" class="hidden hover:text-gold-300 sm:inline">Career</a>
			<a href="/about#alumni" class="hidden hover:text-gold-300 sm:inline">Alumni</a>
			<a href="/news-events" class="hidden hover:text-gold-300 lg:inline">News &amp; Events</a>
			<a href="/mandatory-disclosure" class="hidden font-bold text-gold-400 hover:text-gold-300 md:inline"
				>Mandatory Disclosure</a
			>
			<a href="/parent-login" class="hidden hover:text-gold-300 md:inline">Parent Login</a>
			<a
				href="/admissions"
				class="rounded-sm bg-gold-500 px-3 py-1.5 text-[0.7rem] font-extrabold tracking-wider text-forest-950 transition hover:bg-gold-400"
			>
				ADMISSION OPEN
			</a>
		</div>
	</div>
</div>
