<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { sportsTeams, sportsFixtures, sportsAchievements } from '#lib/data/more';

	const teamIcon: Record<string, string> = {
		Cricket: 'target',
		Football: 'users',
		Basketball: 'trophy',
		Athletics: 'award',
		Karate: 'shield'
	};
</script>

<PageHero
	title="Sports at Tricent"
	subtitle="Five school teams, morning training on the main ground, and inter-house and inter-school fixtures through the year — sport is part of every student’s week."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Sports' }]}
/>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading
			eyebrow="Our Teams"
			text="Trials are held every April for the new session. Any student from Class VI upwards can trial — selection is on merit, and training is free."
		>
			Five Teams, <span class="text-gold-600 italic">One Tricent</span>
		</SectionHeading>
	</Reveal>

	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each sportsTeams as team}
			<Reveal>
				<article
					class="flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="flex items-start justify-between gap-3">
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name={teamIcon[team.sport] ?? 'trophy'} cls="h-6 w-6" />
						</span>
						<span
							class="rounded-full bg-gold-500/15 px-3 py-1 text-[0.7rem] font-extrabold tracking-wider text-gold-600 uppercase"
						>
							{team.ageGroup}
						</span>
					</div>
					<h3 class="mt-4 font-display text-2xl font-bold text-forest-900">{team.sport}</h3>
					<dl class="mt-4 flex-1 space-y-3 border-t border-forest-900/10 pt-4 text-sm">
						<div class="flex items-center gap-3">
							<Icon name="user" cls="h-4 w-4 shrink-0 text-gold-600" />
							<dt class="w-16 shrink-0 font-bold text-ink/50">Coach</dt>
							<dd class="font-semibold text-forest-900">{team.coach}</dd>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="star" cls="h-4 w-4 shrink-0 text-gold-600" />
							<dt class="w-16 shrink-0 font-bold text-ink/50">Captain</dt>
							<dd class="font-semibold text-forest-900">{team.captain}</dd>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="clock" cls="h-4 w-4 shrink-0 text-gold-600" />
							<dt class="w-16 shrink-0 font-bold text-ink/50">Training</dt>
							<dd class="font-semibold text-forest-900">{team.training}</dd>
						</div>
					</dl>
				</article>
			</Reveal>
		{/each}

		<Reveal>
			<article
				class="flex h-full flex-col justify-center rounded-xl bg-forest-900 p-6 text-white shadow-sm sm:p-8"
			>
				<span class="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-400">
					<Icon name="trophy" cls="h-6 w-6" />
				</span>
				<h3 class="mt-4 font-display text-2xl leading-snug font-bold">Annual Sports Day</h3>
				<p class="mt-2 flex-1 text-sm leading-relaxed text-white/75">
					Every December the four houses — Lotus, Ganga, Yamuna and Saraswati — compete in athletics,
					marches and relays on the main ground, in front of parents and guests.
				</p>
				<p class="mt-4 flex items-center gap-2 text-sm font-bold text-gold-400">
					<Icon name="calendar" cls="h-4 w-4" />
					5 December 2026 — Tricent Main Ground
				</p>
			</article>
		</Reveal>
	</div>

	<Reveal>
		<div class="mt-16">
			<SectionHeading
				eyebrow="Fixtures & Results"
				text="Inter-school fixtures for the 2026–27 session — past results and upcoming matches, updated after every game."
			>
				Fixtures & <span class="text-gold-600 italic">Results</span>
			</SectionHeading>
			<div class="mt-8 overflow-x-auto rounded-xl border border-forest-900/10 bg-white shadow-sm">
				<table class="w-full min-w-[720px] text-left text-sm">
					<thead>
						<tr class="bg-forest-900 text-white">
							<th class="px-5 py-3.5 font-bold">Date</th>
							<th class="px-5 py-3.5 font-bold">Event</th>
							<th class="px-5 py-3.5 font-bold">Opponent</th>
							<th class="px-5 py-3.5 font-bold">Result</th>
							<th class="px-5 py-3.5 font-bold">Venue</th>
						</tr>
					</thead>
					<tbody>
						{#each sportsFixtures as f}
							<tr class="border-t border-forest-900/5 transition hover:bg-forest-50/60">
								<td class="px-5 py-3.5 font-bold whitespace-nowrap text-forest-900">{f.date}</td>
								<td class="px-5 py-3.5 text-ink/70">{f.event}</td>
								<td class="px-5 py-3.5 text-ink/70">{f.opponent}</td>
								<td class="px-5 py-3.5">
									{#if f.result === 'Upcoming'}
										<span
											class="inline-block rounded-full bg-gold-500/15 px-3 py-1 text-xs font-extrabold tracking-wide text-gold-600 uppercase"
										>
											Upcoming
										</span>
									{:else}
										<span class="font-bold text-forest-900">{f.result}</span>
									{/if}
								</td>
								<td class="px-5 py-3.5 text-ink/70">{f.venue}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-16">
			<SectionHeading eyebrow="Hall of Fame" text="Recent honours won by Tricent teams at district and state level.">
				Recent <span class="text-gold-600 italic">Achievements</span>
			</SectionHeading>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each sportsAchievements as a}
					<article
						class="h-full rounded-xl border border-forest-900/10 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-gold-400"
						>
							<Icon name="award" cls="h-6 w-6" />
						</span>
						<h3 class="mt-4 font-display text-lg leading-snug font-bold text-forest-900">{a.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{a.detail}</p>
					</article>
				{/each}
			</div>
		</div>
	</Reveal>

	<Reveal>
		<p class="mt-12 text-sm text-ink/60">
			All teams, coaches, fixtures and results above are demo entries for client presentation. The school
			will publish its official sports calendar and match results here each season.
		</p>
	</Reveal>
</div>
