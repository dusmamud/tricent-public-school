<script lang="ts">
	let { dark = false, compact = false }: { dark?: boolean; compact?: boolean } = $props();
</script>

<a href="/" class="flex min-w-0 items-center gap-3" aria-label="Tricent Public School — Home">
	<svg
		viewBox="0 0 64 64"
		class={compact ? 'h-10 w-10 shrink-0' : 'h-12 w-12 shrink-0 sm:h-14 sm:w-14'}
		aria-hidden="true"
	>
		<path
			d="M32 3 L55 11 V33 C55 46 45 55 32 60 C19 55 9 46 9 33 V11 Z"
			fill={dark ? '#c9a227' : '#0b3b2e'}
		/>
		<path
			d="M32 8 L50 14.5 V33 C50 43 42.5 50.5 32 54.5 C21.5 50.5 14 43 14 33 V14.5 Z"
			fill="none"
			stroke={dark ? '#0b3b2e' : '#c9a227'}
			stroke-width="1.6"
		/>
		<text
			x="32"
			y="41"
			font-family="Georgia, 'Times New Roman', serif"
			font-size="27"
			font-weight="700"
			fill={dark ? '#0b3b2e' : '#c9a227'}
			text-anchor="middle"
		>
			T
		</text>
	</svg>
	<span class="min-w-0 leading-none">
		<span
			class="block font-display text-[1.35rem] font-bold tracking-[0.08em] sm:text-[1.6rem] {dark
				? 'text-white'
				: 'text-forest-900'}"
		>
			TRICENT
		</span>
		<span
			class="mt-1 block text-[0.6rem] font-bold tracking-[0.32em] sm:text-[0.68rem] {dark
				? 'text-gold-400'
				: 'text-forest-800'}"
		>
			PUBLIC SCHOOL
		</span>
	</span>
</a>
