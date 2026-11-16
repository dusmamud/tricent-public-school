<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
</script>

<PageHero
	title="Privacy Policy"
	subtitle="How Tricent Public School collects, uses and protects information shared through this website."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="space-y-8 text-[0.95rem] leading-relaxed text-ink/75">
		<p><strong class="text-forest-900">Last updated: November 2026.</strong> This is a demo policy for the school website. The school will publish its final policy before launch.</p>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Information We Collect</h2>
			<p class="mt-2">When you fill an enquiry, admission, contact or application form, we collect the details you provide — such as name, phone number, email address and your message — only to respond to your request.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">How We Use It</h2>
			<p class="mt-2">Your information is used to answer enquiries, process admissions, share school updates you subscribed to, and improve our services. We do not sell or share your personal information with third parties for marketing.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Children’s Privacy</h2>
			<p class="mt-2">Forms on this website are intended for parents and guardians. We do not knowingly collect personal information directly from children under 13 without parental consent.</p>
		</div>
		<div>
			<h2 class="font-display text-xl font-bold text-forest-900">Your Rights</h2>
			<p class="mt-2">You may ask us to correct or delete your information at any time by writing to <a class="font-bold text-forest-800 underline" href="mailto:info@tricentpublicschool.com">info@tricentpublicschool.com</a> or calling +91 75440 00044.</p>
		</div>
	</div>
</section>
