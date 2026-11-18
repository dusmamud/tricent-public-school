<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { stages } from '#lib/data/site';

	const subjects = [
		'English',
		'Hindi',
		'Mathematics',
		'Science',
		'Social Science',
		'Computer Science',
		'Sanskrit',
		'Art & Craft',
		'Music & Dance',
		'Physical Education',
		'Value Education',
		'Coding & Robotics'
	];
</script>

<PageHero
	title="Academics"
	subtitle="A CBSE journey from Nursery to Class XII — activity-based, experiential and built around the whole child."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics' }]}
/>

<!-- STAGES -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="Learning Stages" text="Five stages, one continuous journey — each designed for the age it serves.">
			From First Steps to <span class="text-gold-600 italic">Board Exams</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-12 space-y-10">
		{#each stages as s, i}
			<Reveal>
				<article
					id={s.id}
					class="grid scroll-mt-32 gap-6 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-3"
				>
					<div class={i % 2 === 1 ? 'lg:order-2' : ''}>
						<p class="text-xs font-extrabold tracking-[0.25em] text-gold-700 uppercase">
							{s.classes}
						</p>
						<h2 class="mt-2 font-display text-2xl font-bold text-forest-900 sm:text-3xl">{s.stage}</h2>
						<p class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800">
							<Icon name="users" cls="h-3.5 w-3.5" />
							Age {s.age}
						</p>
						<p class="mt-4 leading-relaxed text-ink/70">{s.text}</p>
					</div>
					<div class="lg:col-span-2 {i % 2 === 1 ? 'lg:order-1' : ''}">
						<ul class="grid h-full gap-3 sm:grid-cols-2">
							{#each s.highlights as h}
								<li class="flex items-center gap-3 rounded-lg bg-cream px-4 py-3.5 text-sm font-semibold text-forest-900">
									<Icon name="check" cls="h-5 w-5 shrink-0 text-forest-700" />
									{h}
								</li>
							{/each}
						</ul>
					</div>
				</article>
			</Reveal>
		{/each}
	</div>
</section>

<!-- SUBJECTS -->
<section class="bg-cream">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<SectionHeading eyebrow="Curriculum" center>Subjects <span class="text-gold-600 italic">We Teach</span></SectionHeading>
		</Reveal>
		<Reveal>
			<div class="mt-8 flex flex-wrap justify-center gap-2.5">
				{#each subjects as sub}
					<span class="rounded-full border border-forest-900/15 bg-white px-4 py-2 text-sm font-semibold text-forest-900 shadow-sm">
						{sub}
					</span>
				{/each}
			</div>
		</Reveal>
	</div>
</section>

<!-- SUPPORT -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-3">
		{#each [{ icon: 'book', title: 'Continuous Assessment', text: 'Weekly quizzes, unit tests and projects — not one high-stakes exam — so teachers spot gaps early and parents always know where their child stands.' }, { icon: 'users', title: 'Remedial Support', text: 'Free after-school remedial classes and peer tutoring for any child who needs a little more time with a concept. No child is left behind.' }, { icon: 'target', title: 'Career Counselling', text: 'From Class IX, structured guidance on streams, competitive exams (JEE / NEET / CUET / CA Foundation) and college choices — with parents in the loop.' }] as c}
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-7 shadow-sm">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
						<Icon name={c.icon} cls="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-display text-xl font-bold text-forest-900">{c.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{c.text}</p>
				</div>
			</Reveal>
		{/each}
	</div>
	<div class="mt-12 text-center">
		<a
			href="/admissions"
			class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-forest-900 px-7 text-sm font-extrabold tracking-wide text-white transition hover:bg-forest-800"
		>
			ADMISSIONS OPEN 2027–28
			<Icon name="arrow-right" cls="h-4 w-4 text-gold-400" />
		</a>
	</div>
</section>
