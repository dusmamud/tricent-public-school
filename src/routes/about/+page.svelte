<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { stats, faculty, timeline, school } from '#lib/data/site';
</script>

<PageHero
	title="About Us"
	subtitle="Twenty years of nurturing confident, compassionate and responsible young citizens in the heart of Bihar."
	crumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
/>

<!-- STORY -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
		<Reveal>
			<div>
				<SectionHeading eyebrow="Our Story">
					A School Built on <span class="text-gold-600 italic">Values & Vision</span>
				</SectionHeading>
				<p class="mt-5 leading-relaxed text-ink/70">
					Founded in {school.established} in Beldari, Simri Bakhtiyarpur, Tricent Public School began
					with 120 students and a simple belief — that every child deserves an education that builds
					character as surely as it builds knowledge.
				</p>
				<p class="mt-4 leading-relaxed text-ink/70">
					Today, with 1,800+ students from Nursery to Class XII and 90+ educators, we remain a
					co-educational CBSE school where academic rigour walks hand in hand with sports, arts,
					culture and service. Our classrooms are smart, our labs are busy, our playgrounds are loud —
					and our values are quiet, steady and non-negotiable.
				</p>
				<ul class="mt-6 space-y-3">
					{#each ['CBSE-affiliated, Nursery to Class XII', '1:20 teacher–student ratio', 'Safe, GPS-enabled transport across all routes', 'A campus where every child is known by name'] as point}
						<li class="flex items-start gap-2.5 text-sm font-medium text-ink/80">
							<Icon name="check" cls="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
							{point}
						</li>
					{/each}
				</ul>
			</div>
		</Reveal>
		<Reveal>
			<img
				src="/images/hero-campus.webp"
				alt="Aerial view of the Tricent Public School campus"
				class="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
			/>
		</Reveal>
	</div>
</section>

<!-- MISSION / VISION / VALUES -->
<section class="bg-cream">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-6 md:grid-cols-3">
			{#each [{ icon: 'target', title: 'Our Mission', text: 'To provide a safe, joyful and challenging learning environment where every child discovers their strengths, respects others and grows into a responsible citizen.' }, { icon: 'eye', title: 'Our Vision', text: 'To be Bihar’s most trusted school — where academic excellence, strong values and all-round development prepare students for a changing world.' }, { icon: 'heart', title: 'Our Values', text: 'Integrity, compassion, discipline, curiosity and service. These five values shape our assemblies, our classrooms and our playgrounds — every single day.' }] as card}
				<Reveal>
					<div class="h-full rounded-xl border border-forest-900/10 bg-white p-7 shadow-sm">
						<span class="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-800">
							<Icon name={card.icon} cls="h-6 w-6" />
						</span>
						<h3 class="mt-4 font-display text-xl font-bold text-forest-900">{card.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{card.text}</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- STATS BAND -->
<section class="bg-forest-900">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 text-center sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
		{#each [...stats, { value: '1,800+', label: 'Students', icon: 'users' }, { value: '90+', label: 'Educators', icon: 'gradcap' }] as s}
			<div>
				<Icon name={s.icon} cls="mx-auto h-6 w-6 text-gold-400" />
				<p class="mt-2 font-display text-3xl font-bold text-white">{s.value}</p>
				<p class="mt-1 text-xs font-semibold tracking-wider text-white/60 uppercase">{s.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- PRINCIPAL -->
<section id="principal" class="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid items-center gap-10 lg:grid-cols-5">
		<Reveal>
			<div class="flex flex-col items-center rounded-xl bg-cream p-8 text-center lg:col-span-2">
				<span class="flex h-28 w-28 items-center justify-center rounded-full bg-forest-900 font-display text-4xl font-bold text-gold-400">
					AS
				</span>
				<p class="mt-5 font-display text-xl font-bold text-forest-900">Dr. Ananya Sharma</p>
				<p class="text-sm font-semibold text-gold-600">Principal, Tricent Public School</p>
				<p class="mt-3 text-sm leading-relaxed text-ink/60">
					M.Ed., Ph.D. (Education) — 22 years in school leadership, and still happiest standing at
					the school gate every morning.
				</p>
			</div>
		</Reveal>
		<Reveal cls="lg:col-span-3">
			<div>
				<SectionHeading eyebrow="Principal's Message">Dear Parents & Students</SectionHeading>
				<blockquote class="mt-5 border-l-4 border-gold-500 pl-5 font-display text-xl leading-relaxed text-forest-900 italic sm:text-2xl">
					“A school is not its buildings — it is the trust parents place in us every morning when
					they send their child through our gate. We honour that trust with safe classrooms,
					honest teaching and children who leave us kinder than they arrived.”
				</blockquote>
				<p class="mt-5 leading-relaxed text-ink/70">
					At Tricent, we measure success not only in board results — though we are proud of them —
					but in the confidence of a child who speaks up, the discipline of a team that trains
					together, and the kindness of a student who helps a classmate. I invite you to visit our
					campus, meet our teachers and see this for yourself.
				</p>
			</div>
		</Reveal>
	</div>
</section>

<!-- TIMELINE -->
<section class="bg-cream">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<SectionHeading eyebrow="Our Journey" center>Two Decades of <span class="text-gold-600 italic">Growing Together</span></SectionHeading>
		</Reveal>
		<ol class="relative mt-12 space-y-8 border-l-2 border-gold-500/40 pl-8">
			{#each timeline as t}
				<Reveal>
					<li class="relative">
						<span class="absolute -left-[2.65rem] flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 ring-4 ring-cream">
							<span class="h-2 w-2 rounded-full bg-forest-900"></span>
						</span>
						<p class="font-display text-2xl font-bold text-forest-900">{t.year}</p>
						<p class="mt-1 leading-relaxed text-ink/70">{t.text}</p>
					</li>
				</Reveal>
			{/each}
		</ol>
	</div>
</section>

<!-- FACULTY -->
<section id="faculty" class="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
	<Reveal>
		<SectionHeading eyebrow="Our Team" text="Experienced educators who inspire, mentor and bring out the best in every child.">
			Meet the <span class="text-gold-600 italic">Leadership</span>
		</SectionHeading>
	</Reveal>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each faculty as f}
			<Reveal>
				<div class="h-full rounded-xl border border-forest-900/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
					<span class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest-900 font-display text-2xl font-bold text-gold-400">
						{f.initials}
					</span>
					<h3 class="mt-4 font-display text-lg font-bold text-forest-900">{f.name}</h3>
					<p class="text-sm font-bold text-gold-600">{f.role}</p>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{f.note}</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ALUMNI -->
<section id="alumni" class="bg-forest-900">
	<div class="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
		<Reveal>
			<div class="text-center">
				<p class="text-xs font-extrabold tracking-[0.28em] text-gold-400 uppercase">Alumni</p>
				<h2 class="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
					Once a Tricentian, <span class="text-gold-400 italic">Always a Tricentian</span>
				</h2>
				<p class="mx-auto mt-3 max-w-2xl leading-relaxed text-white/70">
					Our alumni study at IITs, AIIMS, NLS and Delhi University, serve in the civil services and
					the armed forces, and build businesses across India. They return to mentor our students —
					and to remind us why this work matters.
				</p>
			</div>
		</Reveal>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each [{ name: 'Ananya Singh', detail: 'B.A. LL.B., NLS Bengaluru · Batch of 2023', quote: 'Debate club and the annual stage taught me to speak up and lead.' }, { name: 'Rohan Verma', detail: 'B.Tech, IIT Patna · Batch of 2021', quote: 'My Physics teachers stayed back after school until every concept was clear.' }, { name: 'Dr. Kavya Jha', detail: 'MBBS, AIIMS Patna · Batch of 2019', quote: 'Tricent taught me discipline — the morning assembly, the labs, the mentors.' }] as a}
				<Reveal>
					<figure class="h-full rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
						<blockquote class="leading-relaxed text-white/85">“{a.quote}”</blockquote>
						<figcaption class="mt-4">
							<p class="font-bold text-gold-400">{a.name}</p>
							<p class="text-sm text-white/55">{a.detail}</p>
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a
				href="/admissions"
				class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-extrabold tracking-wide text-forest-950 transition hover:bg-gold-400"
			>
				JOIN THE TRICENT FAMILY
				<Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</div>
</section>
