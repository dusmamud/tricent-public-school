<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { admissionSteps, importantDates, feeStructure } from '#lib/data/site';
</script>

<svelte:head>
	<title>प्रवेश 2027–28 | ट्राइसेंट पब्लिक स्कूल, पटना</title>
	<meta
		name="description"
		content="ट्राइसेंट पब्लिक स्कूल, पटना में शैक्षणिक वर्ष 2027–28 के लिए प्रवेश — नर्सरी से कक्षा IX और कक्षा XI। प्रवेश प्रक्रिया, महत्वपूर्ण तिथियाँ और शुल्क संरचना।"
	/>
	<link rel="canonical" href="https://tricent-public-school.pages.dev/admissions-hindi" />
	<meta property="og:title" content="प्रवेश 2027–28 | ट्राइसेंट पब्लिक स्कूल, पटना" />
	<meta
		property="og:description"
		content="ट्राइसेंट पब्लिक स्कूल, पटना में शैक्षणिक वर्ष 2027–28 के लिए प्रवेश — नर्सरी से कक्षा IX और कक्षा XI। प्रवेश प्रक्रिया, महत्वपूर्ण तिथियाँ और शुल्क संरचना।"
	/>
	<meta property="og:image" content="https://tricent-public-school.pages.dev/images/og-default.jpg" />
	<meta property="og:url" content="https://tricent-public-school.pages.dev/admissions-hindi" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Tricent Public School" />
	<meta property="og:locale" content="hi_IN" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="प्रवेश 2027–28 | ट्राइसेंट पब्लिक स्कूल, पटना" />
	<meta
		name="twitter:description"
		content="ट्राइसेंट पब्लिक स्कूल, पटना में शैक्षणिक वर्ष 2027–28 के लिए प्रवेश — नर्सरी से कक्षा IX और कक्षा XI।"
	/>
	<meta name="twitter:image" content="https://tricent-public-school.pages.dev/images/og-default.jpg" />
</svelte:head>

<PageHero
	title="प्रवेश 2027–28"
	subtitle="नर्सरी से कक्षा IX और कक्षा XI के लिए प्रवेश खुले हैं। अपने बच्चे के उज्ज्वल भविष्य की शुरुआत ट्राइसेंट से करें।"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'हिंदी में' }]}
	meta={false}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="rounded-xl bg-cream px-5 py-4 text-center text-sm leading-relaxed text-ink/70">
			यह पृष्ठ प्रवेश की मुख्य जानकारी हिंदी में देता है। पूरी जानकारी, फॉर्म और अंग्रेज़ी विवरण के लिए
			<a href="/admissions" class="font-bold text-forest-800 underline">Admissions पृष्ठ</a> देखें।
		</div>
	</Reveal>

	<!-- Steps -->
	<section class="mt-12">
		<Reveal>
			<SectionHeading eyebrow="प्रवेश प्रक्रिया" text="तीन आसान चरणों में प्रवेश पूरा करें।">
				प्रवेश कैसे <span class="text-gold-600 italic">लें?</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-8 grid gap-5 md:grid-cols-3">
			{#each admissionSteps as s}
				<Reveal>
					<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm">
						<span
							class="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 font-display text-lg font-bold text-gold-400"
						>
							{s.n}
						</span>
						<h2 class="mt-4 font-display text-xl font-bold text-forest-900">{s.title}</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<!-- Important dates -->
	<section class="mt-16">
		<Reveal>
			<SectionHeading eyebrow="महत्वपूर्ण तिथियाँ" center>
				प्रवेश <span class="text-gold-600 italic">कैलेंडर 2027–28</span>
			</SectionHeading>
		</Reveal>
		<div class="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
			<table class="w-full text-left text-sm">
				<thead>
					<tr class="bg-forest-900 text-white">
						<th class="px-5 py-3.5 font-bold">कार्यक्रम</th>
						<th class="px-5 py-3.5 font-bold">तिथि</th>
					</tr>
				</thead>
				<tbody>
					{#each importantDates as d}
						<tr class="border-t border-forest-900/5">
							<td class="px-5 py-3.5 font-medium text-forest-900">{d.event}</td>
							<td class="px-5 py-3.5 font-bold whitespace-nowrap text-ink/70">{d.date}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-4 text-center text-sm text-ink/60">
			आवेदन जमा करने की अंतिम तिथि: <strong class="text-forest-900">31 जनवरी 2027</strong>
		</p>
	</section>

	<!-- Fee structure -->
	<section class="mt-16">
		<Reveal>
			<SectionHeading eyebrow="शुल्क संरचना" text="पारदर्शी शुल्क — कोई छिपा हुआ शुल्क नहीं।" center>
				शुल्क <span class="text-gold-600 italic">विवरण</span>
			</SectionHeading>
		</Reveal>
		<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-forest-900 text-white">
						<th class="px-5 py-3.5 font-bold">शुल्क</th>
						<th class="px-5 py-3.5 font-bold">नर्सरी–KG</th>
						<th class="px-5 py-3.5 font-bold">कक्षा I–V</th>
						<th class="px-5 py-3.5 font-bold">कक्षा VI–VIII</th>
						<th class="px-5 py-3.5 font-bold">कक्षा IX–XII</th>
					</tr>
				</thead>
				<tbody>
					{#each feeStructure as f}
						<tr class="border-t border-forest-900/5">
							<td class="px-5 py-3.5 font-medium text-forest-900">{f.head}</td>
							<td class="px-5 py-3.5 text-ink/70">{f.nursery}</td>
							<td class="px-5 py-3.5 text-ink/70">{f.primary}</td>
							<td class="px-5 py-3.5 text-ink/70">{f.middle}</td>
							<td class="px-5 py-3.5 text-ink/70">{f.senior}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-4 text-center text-sm text-ink/60">
			शुल्क सांकेतिक (डेमो) है। ऑनलाइन शुल्क भुगतान के लिए
			<a href="/pay-fees" class="font-bold text-forest-800 underline">Pay Fees</a> पृष्ठ देखें।
		</p>
	</section>

	<!-- CTA -->
	<section class="mt-16">
		<Reveal>
			<div
				class="flex flex-col items-center gap-6 rounded-2xl bg-forest-900 px-6 py-10 text-center shadow-xl sm:px-10 lg:flex-row lg:justify-between lg:text-left"
			>
				<div>
					<h2 class="font-display text-2xl font-bold text-gold-400 sm:text-3xl">अभी पूछताछ करें</h2>
					<p class="mt-1 text-white/75">
						फॉर्म भरें या स्कूल कार्यालय में संपर्क करें — हमारी टीम 24 घंटे में जवाब देगी।
					</p>
				</div>
				<div class="flex flex-wrap justify-center gap-3">
					<a
						href="/admissions#enquire"
						class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
					>
						ENQUIRE NOW
						<Icon name="arrow-right" cls="h-4 w-4" />
					</a>
					<a
						href="tel:+917544000044"
						class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-white/40 px-7 text-sm font-extrabold tracking-wide text-white transition hover:border-gold-400 hover:text-gold-300"
					>
						<Icon name="phone" cls="h-4 w-4" />
						+91 75440 00044
					</a>
				</div>
			</div>
		</Reveal>
	</section>
</div>
