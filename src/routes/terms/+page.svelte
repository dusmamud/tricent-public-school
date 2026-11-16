<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
</script>

<PageHero
	title="Terms & Conditions"
	subtitle="The terms that govern the use of the Tricent Public School website."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="space-y-8 text-[0.95rem] leading-relaxed text-ink/75">
		<p><strong class="text-forest-900">Last updated: November 2026.</strong> This is a demo document for the school website. The school will publish its final terms before launch.</p>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Use of This Website</h2>
			<p class="mt-2">The content on this website — including text, photographs, fees, dates and school details — is provided for general information. The school may update it at any time without prior notice.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Admissions & Fees</h2>
			<p class="mt-2">Admission is subject to seat availability, the school’s admission criteria and verification of documents. Fee details shown on this website are indicative; the fee schedule confirmed at the school office at the time of admission will apply.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Photographs & Media</h2>
			<p class="mt-2">Photographs on this website are used for illustration. The school takes care to use images respectfully; parents may contact the office regarding any photograph of their child.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Contact</h2>
			<p class="mt-2">For questions about these terms, write to <a class="font-bold text-forest-800 underline" href="mailto:info@tricentpublicschool.com">info@tricentpublicschool.com</a> or call +91 75440 00044.</p>
		</div>
	</div>
</section>
