<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { busRoutes } from '#lib/data/more';
</script>

<PageHero
	title="Transport"
	subtitle="15 GPS-enabled buses across 6 routes — trained drivers, a lady attendant on every bus, and live tracking shared with parents."
	crumb={[
		{ label: 'Home', href: '/' },
		{ label: 'Facilities', href: '/facilities' },
		{ label: 'Transport' }
	]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-3">
		{#each [{ icon: 'map', title: 'Live GPS Tracking', text: 'Parents see the bus location in real time on the parent portal.' }, { icon: 'shield', title: 'Trained Staff', text: 'Verified drivers and a lady attendant on every single bus.' }, { icon: 'clock', title: 'On-Time Pickup', text: 'Fixed pickup points and timings — buses reach school by 7:45 AM.' }] as f}
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm">
					<span
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
					>
						<Icon name={f.icon} cls="h-6 w-6" />
					</span>
					<h3 class="mt-3 font-display text-lg font-bold text-forest-900">{f.title}</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-ink/65">{f.text}</p>
				</div>
			</Reveal>
		{/each}
	</div>

	<section class="mt-14">
		<Reveal>
			<SectionHeading eyebrow="Routes & Timings" text="Morning pickup times. Transport fee is ₹1,200 per month on all routes (demo).">
				Bus <span class="text-gold-600 italic">Routes</span>
			</SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full min-w-[680px] text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Route</th>
							<th class="px-5 py-3.5 font-bold">Areas Covered</th>
							<th class="px-5 py-3.5 font-bold">Pickup</th>
							<th class="px-5 py-3.5 font-bold">Fee</th>
						</tr>
					</thead>
					<tbody>
						{#each busRoutes as r}
							<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
								<td class="px-5 py-3.5 font-bold text-forest-900">{r.route}</td>
								<td class="px-5 py-3.5 text-ink/70">{r.areas}</td>
								<td class="px-5 py-3.5 text-ink/70">{r.pickup}</td>
								<td class="px-5 py-3.5 font-bold text-forest-900">{r.fee}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</Reveal>
	</section>

	<section class="mt-14 grid gap-6 lg:grid-cols-2">
		<Reveal>
			<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
				<h3 class="font-display text-2xl font-bold text-forest-900">Safety Rules</h3>
				<ul class="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
					{#each ['Students must reach the pickup point 5 minutes early — buses do not wait.', 'Younger children are handed over only to a parent or an authorised guardian.', 'No child is allowed to stand or move around in a moving bus.', 'In case of a delay, parents get an SMS / app alert from the transport office.'] as rule}
						<li class="flex gap-2.5">
							<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>{rule}</span>
						</li>
					{/each}
				</ul>
			</div>
		</Reveal>
		<Reveal>
			<div
				class="flex h-full flex-col justify-between gap-5 rounded-xl bg-forest-900 p-6 text-white shadow-sm sm:p-8"
			>
				<div>
					<h3 class="font-display text-2xl font-bold text-gold-400">Request a Bus Seat</h3>
					<p class="mt-2 text-sm leading-relaxed text-white/75">
						New admissions can opt for transport at admission time. Existing students can request a seat
						or a route change with the Transport Request Form — submit before the 10th of the month.
					</p>
				</div>
				<div class="flex flex-wrap gap-3">
					<a
						href="/downloads/transport-form.pdf"
						download
						class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
					>
						<Icon name="download" cls="h-4 w-4" />
						TRANSPORT FORM (PDF)
					</a>
					<a
						href="/admissions#enquire"
						class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-white/70 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-white hover:text-forest-900"
					>
						ENQUIRE NOW
					</a>
				</div>
			</div>
		</Reveal>
	</section>
</div>
