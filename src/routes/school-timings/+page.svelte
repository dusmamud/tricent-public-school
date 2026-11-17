<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { bellSchedule, termTimings } from '#lib/data/more';
</script>

<PageHero
	title="School Timings"
	subtitle="The school day at Tricent Public School — morning assembly, eight teaching periods, lunch break and dispersal — plus summer and winter timings and office hours."
	crumb={[{ label: 'Home', href: '/' }, { label: 'School Timings' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Bell schedule -->
	<Reveal>
		<SectionHeading
			eyebrow="The School Day"
			text="Classes run Monday to Saturday. The bell schedule below follows the summer timings; in winter the whole day shifts 30 minutes later."
		>
			Bell <span class="text-gold-600 italic">Schedule</span>
		</SectionHeading>
	</Reveal>

	<Reveal>
		<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
			<table class="w-full min-w-[560px] text-left text-sm">
				<thead>
					<tr class="bg-forest-900 text-white">
						<th class="px-5 py-3.5 font-bold">Period</th>
						<th class="px-5 py-3.5 font-bold">Time</th>
						<th class="px-5 py-3.5 font-bold">Activity</th>
					</tr>
				</thead>
				<tbody>
					{#each bellSchedule as b, i}
						<tr
							class="border-t border-forest-900/5 transition hover:bg-forest-50/60 {b.period ===
								'Assembly' ||
							b.period === 'Lunch Break' ||
							b.period === 'Dispersal'
								? 'bg-cream/70 font-semibold text-forest-900'
								: i % 2 === 0
									? 'bg-white'
									: 'bg-forest-50/40'}"
						>
							<td class="px-5 py-3.5 font-bold text-forest-900">{b.period}</td>
							<td class="px-5 py-3.5 whitespace-nowrap text-ink/70">{b.time}</td>
							<td class="px-5 py-3.5 text-ink/70">{b.activity}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-xs text-ink/50">
			Pre-Primary (Nursery – KG) runs 8:30 AM – 12:30 PM in summer and 9:00 AM – 1:00 PM in
			winter, with its own shorter day.
		</p>
	</Reveal>

	<!-- Summer vs winter -->
	<Reveal>
		<div class="mt-14">
			<SectionHeading
				eyebrow="Summer & Winter"
				text="The school day starts half an hour later in winter, so children are not travelling in the early-morning cold."
			>
				Term <span class="text-gold-600 italic">Timings</span>
			</SectionHeading>
			<div class="mt-8 grid gap-6 md:grid-cols-2">
				{#each termTimings as t}
					<article
						class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
					>
						<div class="flex items-start justify-between gap-3">
							<div>
								<p class="text-xs font-extrabold tracking-[0.25em] text-gold-600 uppercase">
									{t.term === 'Summer Timings' ? 'Apr – Oct' : 'Nov – Mar'}
								</p>
								<h3 class="mt-2 font-display text-2xl font-bold text-forest-900">{t.term}</h3>
							</div>
							<span
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
							>
								<Icon name="clock" cls="h-6 w-6" />
							</span>
						</div>
						<p class="mt-4 font-display text-3xl font-bold text-forest-900">{t.schoolHours}</p>
						<dl class="mt-6 space-y-3 border-t border-forest-900/10 pt-5 text-sm">
							<div class="flex items-center justify-between gap-3">
								<dt class="font-bold text-ink/60">Assembly</dt>
								<dd class="font-bold text-forest-900">{t.assembly} daily</dd>
							</div>
							<div class="flex items-center justify-between gap-3">
								<dt class="font-bold text-ink/60">Dispersal</dt>
								<dd class="font-bold text-forest-900">{t.dispersal}</dd>
							</div>
						</dl>
						<p class="mt-5 rounded-lg bg-cream px-4 py-3 text-sm leading-relaxed text-ink/70">
							{t.note}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Reveal>

	<!-- Office hours + assembly -->
	<div class="mt-14 grid gap-6 lg:grid-cols-2">
		<Reveal>
			<article class="h-full rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
				<span
					class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
				>
					<Icon name="building" cls="h-6 w-6" />
				</span>
				<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">Office Hours</h3>
				<dl class="mt-6 space-y-4 text-sm">
					<div class="flex items-start justify-between gap-3 border-b border-forest-900/5 pb-4">
						<dt class="font-bold text-ink/60">School Office</dt>
						<dd class="text-right font-bold text-forest-900">Mon – Sat<br />8:00 AM – 4:00 PM</dd>
					</div>
					<div class="flex items-start justify-between gap-3 border-b border-forest-900/5 pb-4">
						<dt class="font-bold text-ink/60">Accounts Office</dt>
						<dd class="text-right font-bold text-forest-900">Mon – Sat<br />9:00 AM – 1:00 PM</dd>
					</div>
					<div class="flex items-start justify-between gap-3 border-b border-forest-900/5 pb-4">
						<dt class="font-bold text-ink/60">Principal's Office</dt>
						<dd class="text-right font-bold text-forest-900">Mon – Fri<br />10:00 AM – 12:00 PM</dd>
					</div>
					<div class="flex items-start justify-between gap-3">
						<dt class="font-bold text-ink/60">Parent Meeting Hours</dt>
						<dd class="text-right font-bold text-forest-900">2:30 – 3:30 PM<br />on working days</dd>
					</div>
				</dl>
				<p class="mt-5 text-sm leading-relaxed text-ink/70">
					Parents visiting the school are requested to meet teachers during parent meeting hours,
					or by appointment through the school office. Please carry your parent ID card.
				</p>
			</article>
		</Reveal>

		<Reveal>
			<article class="h-full overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<img
					src="/images/assembly.jpg"
					alt="Morning assembly at Tricent Public School"
					class="aspect-[16/9] w-full object-cover"
					loading="lazy"
				/>
				<div class="p-6 sm:p-8">
					<span
						class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800"
					>
						<Icon name="users" cls="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">Morning Assembly</h3>
					<p class="mt-3 text-sm leading-relaxed text-ink/70">
						Every school day begins with assembly at <strong class="text-forest-900">8:00 AM</strong>
						(summer) and <strong class="text-forest-900">8:30 AM</strong> (winter) — prayer, thought of
						the day, news headlines, birthdays and announcements. Students are expected to reach
						school at least 10 minutes before assembly.
					</p>
					<div class="mt-5 flex flex-wrap gap-3">
						<a
							href="tel:+917544000044"
							class="inline-flex min-h-11 items-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold text-white transition hover:bg-forest-800"
						>
							<Icon name="phone" cls="h-4 w-4 text-gold-400" />
							+91 75440 00044
						</a>
						<a
							href="/contact"
							class="inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-forest-900 px-5 text-sm font-extrabold text-forest-900 transition hover:bg-forest-900 hover:text-white"
						>
							Contact the School
							<Icon name="arrow-right" cls="h-4 w-4" />
						</a>
					</div>
				</div>
			</article>
		</Reveal>
	</div>

	<Reveal>
		<p class="mt-12 rounded-xl border border-forest-900/10 bg-cream px-6 py-5 text-sm leading-relaxed text-ink/70">
			All timings above are demo figures for client presentation. The school will confirm the
			current session timings at the school office before the start of each term.
		</p>
	</Reveal>
</div>
