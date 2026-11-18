<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { houses, houseFixtures } from '#lib/data/more';

	const ranked = $derived([...houses].sort((a, b) => b.points - a.points));
	const leader = $derived(ranked[0]);
	const totalPoints = $derived(houses.reduce((sum, h) => sum + h.points, 0));
</script>

<PageHero
	title="Our Houses"
	subtitle="Every Tricent student belongs to one of four houses — Ashoka, Raman, Tagore and Teresa. Houses compete through the year in academics, sports, culture and service, and the House Championship is decided on Annual Day."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Houses' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- House cards -->
	<Reveal>
		<SectionHeading
			eyebrow="Four Houses, One School"
			text="Each house is led by a student captain and vice-captain, guided by a house master, and cheered on by every member from Nursery to Class XII."
		>
			Meet the <span class="text-gold-600 italic">Houses</span>
		</SectionHeading>
	</Reveal>

	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each houses as h}
			<Reveal>
				<article
					class="flex h-full flex-col overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="h-2 w-full" style="background-color: {h.colour}" aria-hidden="true"></div>
					<div class="flex flex-1 flex-col p-6">
						<div class="flex items-center justify-between gap-3">
							<span
								class="flex h-12 w-12 items-center justify-center rounded-full text-lg font-display font-bold text-white"
								style="background-color: {h.colour}"
								aria-hidden="true"
							>
								{h.name.charAt(0)}
							</span>
							<span
								class="rounded-full px-3 py-1 text-xs font-extrabold tracking-wide text-white"
								style="background-color: {h.colour}"
							>
								{h.points} PTS
							</span>
						</div>
						<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">{h.name} House</h3>
						<p class="mt-1 text-sm font-bold text-ink/60 italic">“{h.motto}”</p>
						<dl class="mt-5 flex-1 space-y-3 border-t border-forest-900/10 pt-5 text-sm">
							<div class="flex items-start gap-2">
								<Icon name="star" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
								<div>
									<dt class="text-xs font-bold tracking-wider text-ink/50 uppercase">Captain</dt>
									<dd class="font-semibold text-forest-900">{h.captain}</dd>
								</div>
							</div>
							<div class="flex items-start gap-2">
								<Icon name="users" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
								<div>
									<dt class="text-xs font-bold tracking-wider text-ink/50 uppercase">Vice-Captain</dt>
									<dd class="font-semibold text-forest-900">{h.viceCaptain}</dd>
								</div>
							</div>
							<div class="flex items-start gap-2">
								<Icon name="trophy" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
								<div>
									<dt class="text-xs font-bold tracking-wider text-ink/50 uppercase">Events Won</dt>
									<dd class="font-semibold text-forest-900">
										{h.eventsWon} events · {h.members} members
									</dd>
								</div>
							</div>
						</dl>
					</div>
				</article>
			</Reveal>
		{/each}
	</div>

	<!-- Points table -->
	<div class="mt-16">
		<Reveal>
			<SectionHeading
				eyebrow="House Championship 2026–27"
				text="Points are awarded for winning inter-house events and for house conduct, attendance and service. {totalPoints.toLocaleString('en-IN')} points have been awarded so far this session."
			>
				Points <span class="text-gold-600 italic">Table</span>
			</SectionHeading>
		</Reveal>

		<Reveal>
			<div class="mt-8 overflow-hidden rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<div class="flex items-center gap-3 bg-forest-900 px-5 py-4 sm:px-6">
					<Icon name="trophy" cls="h-6 w-6 shrink-0 text-gold-400" />
					<p class="text-sm font-bold text-white sm:text-base">
						Leading the championship: <span class="text-gold-400">{leader.name} House</span> — {leader.points}
						points
					</p>
				</div>
				<div class="overflow-x-auto">
					<table class="w-full min-w-[560px] text-left text-sm">
						<thead>
							<tr class="bg-forest-50 text-forest-900">
								<th class="px-5 py-3.5 font-bold">Rank</th>
								<th class="px-5 py-3.5 font-bold">House</th>
								<th class="px-5 py-3.5 font-bold">Points</th>
								<th class="px-5 py-3.5 font-bold">Events Won</th>
								<th class="px-5 py-3.5 font-bold">Members</th>
							</tr>
						</thead>
						<tbody>
							{#each ranked as h, i}
								<tr
									class="border-t border-forest-900/5 transition hover:bg-forest-50/60 {i === 0
										? 'bg-gold-500/10'
										: ''}"
								>
									<td class="px-5 py-3.5">
										<span
											class="inline-flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold {i === 0
												? 'bg-gold-500 text-white'
												: 'bg-forest-50 text-forest-900'}"
										>
											{i + 1}
										</span>
									</td>
									<td class="px-5 py-3.5">
										<span class="flex items-center gap-2.5 font-bold text-forest-900">
											<span
												class="h-3.5 w-3.5 shrink-0 rounded-full"
												style="background-color: {h.colour}"
												aria-hidden="true"
											></span>
											{h.name}
											{#if i === 0}
												<span
													class="rounded-full bg-gold-500 px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wider text-white uppercase"
												>
													Leader
												</span>
											{/if}
										</span>
									</td>
									<td class="px-5 py-3.5 font-display text-lg font-bold text-forest-900">{h.points}</td>
									<td class="px-5 py-3.5 text-ink/70">{h.eventsWon}</td>
									<td class="px-5 py-3.5 text-ink/70">{h.members}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</Reveal>
	</div>

	<!-- Fixtures -->
	<div class="mt-16 grid gap-10 lg:grid-cols-5">
		<Reveal cls="lg:col-span-3">
			<div>
				<SectionHeading
					eyebrow="Coming Up"
					text="Inter-house fixtures for the rest of the 2026–27 session. Parents are welcome at all outdoor events."
				>
					Competition <span class="text-gold-600 italic">Calendar</span>
				</SectionHeading>
				<ul class="mt-8 space-y-4">
					{#each houseFixtures as f}
						<li
							class="flex flex-col gap-3 rounded-xl border border-forest-900/10 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:gap-5"
						>
							<span
								class="flex min-h-11 shrink-0 items-center gap-2 self-start rounded-sm bg-forest-900 px-4 py-2 text-sm font-extrabold text-gold-400 sm:self-auto"
							>
								<Icon name="calendar" cls="h-4 w-4" />
								{f.date}
							</span>
							<div class="min-w-0 flex-1">
								<h3 class="font-display text-lg leading-snug font-bold text-forest-900">{f.event}</h3>
								<p class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/65">
									<span class="flex items-center gap-1.5">
										<Icon name="users" cls="h-4 w-4 text-gold-600" />
										{f.houses}
									</span>
									<span class="flex items-center gap-1.5">
										<Icon name="pin" cls="h-4 w-4 text-gold-600" />
										{f.venue}
									</span>
								</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</Reveal>

		<Reveal cls="lg:col-span-2">
			<div>
				<div class="overflow-hidden rounded-xl shadow-sm">
					<picture class="contents">
						<source
							type="image/avif"
							srcset="/images/responsive/sports-day-480.avif 480w"
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<source
							type="image/webp"
							srcset="/images/responsive/sports-day-480.webp 480w"
							sizes="(max-width: 1024px) 100vw, 40vw"
						/>
						<img
							src="/images/sports-day.jpg"
							alt="Students competing on sports day at Tricent Public School"
							width="768"
							height="512"
							class="h-56 w-full object-cover sm:h-64"
							loading="lazy"
						/>
					</picture>
				</div>
				<div class="mt-6 rounded-xl border border-forest-900/10 bg-cream px-6 py-5">
					<h3 class="flex items-center gap-2 font-display text-lg font-bold text-forest-900">
						<Icon name="shield" cls="h-5 w-5 text-gold-600" />
						How points are earned
					</h3>
					<ul class="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
						<li class="flex gap-2">
							<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
							10 points for winning an inter-house event, 6 for second place, 4 for third.
						</li>
						<li class="flex gap-2">
							<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
							Bonus points for best house conduct, attendance and community service each term.
						</li>
						<li class="flex gap-2">
							<Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
							The House Championship trophy is presented on Annual Day in December.
						</li>
					</ul>
					<a
						href="/academic-calendar"
						class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm bg-forest-900 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
					>
						VIEW FULL CALENDAR
						<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
					</a>
				</div>
			</div>
		</Reveal>
	</div>

	<Reveal>
		<p class="mt-12 text-sm text-ink/60">
			All house points, captains, members and fixtures on this page are demo entries for client presentation.
			The school will publish the official house standings here during the session.
		</p>
	</Reveal>
</div>
