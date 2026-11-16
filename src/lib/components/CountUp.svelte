<script lang="ts">
	// Animated count-up number: starts when scrolled into view, respects reduced motion.
	let { value, suffix = '', duration = 1200, cls = '' }: {
		value: number;
		suffix?: string;
		duration?: number;
		cls?: string;
	} = $props();

	let el: HTMLSpanElement | undefined = $state();
	let shown = $state(0);
	let started = $state(false);

	$effect(() => {
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			shown = value;
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started) {
					started = true;
					const t0 = performance.now();
					const tick = (t: number) => {
						const p = Math.min(1, (t - t0) / duration);
						shown = Math.round(value * (1 - Math.pow(1 - p, 3)));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<span bind:this={el} class={cls}>{shown}{suffix}</span>
