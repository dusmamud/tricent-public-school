<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const groups = [
		{
			title: 'School',
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'About Us', href: '/about' },
				{ label: 'Our Faculty', href: '/faculty' },
				{ label: 'Careers', href: '/careers' },
				{ label: 'Contact Us', href: '/contact' }
			]
		},
		{
			title: 'Academics',
			links: [
				{ label: 'Academics', href: '/academics' },
				{ label: 'Board Results', href: '/results' },
				{ label: 'Academic Calendar', href: '/academic-calendar' },
				{ label: 'Facilities', href: '/facilities' },
				{ label: 'Transport', href: '/transport' }
			]
		},
		{
			title: 'Admissions',
			links: [
				{ label: 'Admissions', href: '/admissions' },
				{ label: 'Admission Process', href: '/admissions#process' },
				{ label: 'Fee Structure', href: '/admissions#fees' },
				{ label: 'Important Dates', href: '/admissions#dates' },
				{ label: 'Enquire Now', href: '/admissions#enquire' }
			]
		},
		{
			title: 'Parents & Students',
			links: [
				{ label: 'Parent Login', href: '/parent-login' },
				{ label: 'Notice Board', href: '/notices' },
				{ label: 'Downloads', href: '/downloads' },
				{ label: 'Testimonials', href: '/testimonials' },
				{ label: 'FAQ', href: '/faq' }
			]
		},
		{
			title: 'Discover',
			links: [
				{ label: 'Photo Gallery', href: '/gallery' },
				{ label: 'News & Events', href: '/news-events' },
				{ label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
				{ label: 'Privacy Policy', href: '/privacy-policy' },
				{ label: 'Terms & Conditions', href: '/terms' }
			]
		}
	];
</script>

<PageHero
	title="Sitemap"
	subtitle="Every page on the Tricent Public School website, grouped by section."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each groups as g}
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
					<h2 class="font-display text-xl font-bold text-forest-900">{g.title}</h2>
					<ul class="mt-4 space-y-2.5">
						{#each g.links as l}
							<li>
								<a
									href={l.href}
									class="group flex items-center gap-2 text-sm font-medium text-ink/75 transition hover:text-forest-800"
								>
									<Icon
										name="arrow-right"
										cls="h-3.5 w-3.5 text-gold-600 transition-transform group-hover:translate-x-0.5"
									/>
									{l.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		{/each}
		<Reveal>
			<div
				class="flex h-full flex-col justify-between gap-4 rounded-xl bg-forest-900 p-6 text-white shadow-sm"
			>
				<div>
					<h2 class="font-display text-xl font-bold text-gold-400">Can't find something?</h2>
					<p class="mt-2 text-sm leading-relaxed text-white/75">
						Use the search in the header, or call the school office — we will point you in the right
						direction.
					</p>
				</div>
				<a
					href="/contact"
					class="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold-500 px-5 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
				>
					CONTACT US
				</a>
			</div>
		</Reveal>
	</div>
</div>
