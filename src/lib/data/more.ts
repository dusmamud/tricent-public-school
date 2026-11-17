// Tricent Public School — extended data for the professional round
// (mandatory disclosure, results, calendar, faculty, notices, downloads,
// transport, FAQs). All demo/mock content for client presentation.

export const disclosure = {
	general: [
		{ label: 'Name of the school', value: 'Tricent Public School' },
		{ label: 'Affiliation No.', value: '330000 (Demo)' },
		{ label: 'School Code', value: '65432 (Demo)' },
		{ label: 'Complete address', value: 'Beldari, Simri Bakhtiyarpur, Patna – 801113, Bihar' },
		{ label: 'Principal name & qualification', value: 'Dr. Ananya Sharma — M.Ed., Ph.D. (Education)' },
		{ label: 'School email ID', value: 'info@tricentpublicschool.com' },
		{ label: 'Contact details', value: '+91 75440 00044 (Mon – Sat, 8:00 AM – 4:00 PM)' }
	],
	documents: [
		{ name: 'Affiliation / Upgradation Letter', ref: 'CBSE/AFF/330000/2010', validity: '31 Mar 2027', status: 'Demo copy' },
		{ name: 'Society / Trust Registration Certificate', ref: 'SR/PTN/2005/118', validity: 'Renewed 2025', status: 'Demo copy' },
		{ name: 'No Objection Certificate (State Govt.)', ref: 'NOC/BIH/2010/442', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Recognition Certificate (RTE Act, 2009)', ref: 'RTE/BIH/2011/089', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Building Safety Certificate (National Building Code)', ref: 'BSC/PTN/2025/077', validity: '31 Dec 2026', status: 'Demo copy' },
		{ name: 'Fire Safety Certificate', ref: 'FSC/PTN/2025/213', validity: '31 Dec 2026', status: 'Demo copy' },
		{ name: 'DEO Certificate / Self-Certification', ref: 'DEO/PTN/2025/031', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Water, Health & Sanitation Certificates', ref: 'WHS/PTN/2025/154', validity: '30 Jun 2027', status: 'Demo copy' }
	],
	smc: [
		{ name: 'Mr. Suresh Prasad', role: 'Chairman' },
		{ name: 'Mrs. Kavita Prasad', role: 'Manager' },
		{ name: 'Dr. Ananya Sharma', role: 'Principal (Member Secretary)' },
		{ name: 'Mr. Rajesh Kumar', role: 'Vice Principal' },
		{ name: 'Mrs. Sunita Mishra', role: 'Teacher Representative' },
		{ name: 'Mr. Rakesh Kumar', role: 'Parent Representative' },
		{ name: 'Dr. Meera Nair', role: 'Educationist Member' }
	],
	pta: [
		{ name: 'Mrs. Sunita Verma', role: 'President (Parent, Class VIII)' },
		{ name: 'Mr. Rakesh Kumar', role: 'Vice President (Parent, Class XI)' },
		{ name: 'Mrs. Priya Gupta', role: 'Secretary (Parent, Class III)' },
		{ name: 'Mr. Amit Patel', role: 'Teacher Member' },
		{ name: 'Mrs. Sunita Mishra', role: 'Teacher Member' },
		{ name: 'Dr. Ananya Sharma', role: 'Principal (Ex-officio)' }
	],
	staff: [
		{ label: 'Principal', count: 1 },
		{ label: 'Vice Principal', count: 1 },
		{ label: 'PGT (Classes XI – XII)', count: 12 },
		{ label: 'TGT (Classes VI – X)', count: 18 },
		{ label: 'PRT (Classes I – V)', count: 22 },
		{ label: 'Pre-Primary Teachers', count: 10 },
		{ label: 'PET / Sports & Yoga', count: 4 },
		{ label: 'Music, Dance & Art', count: 4 },
		{ label: 'Counsellor', count: 1 },
		{ label: 'Librarian', count: 1 },
		{ label: 'Lab Assistants', count: 3 },
		{ label: 'Special Educator', count: 1 }
	],
	infrastructure: [
		{ label: 'Campus area', value: '3.2 acres' },
		{ label: 'Classrooms', value: '48 (avg. size 20 × 24 ft)' },
		{ label: 'Science laboratories', value: '3 (Physics, Chemistry, Biology)' },
		{ label: 'Computer labs', value: '1 — 40 networked systems' },
		{ label: 'Library', value: '1 — 12,000+ books, reading hall' },
		{ label: 'Internet connectivity', value: '100 Mbps leased line + Wi-Fi campus' },
		{ label: 'Auditorium', value: '500 seats' },
		{ label: 'Playground & sports', value: 'Basketball court, cricket nets, athletics track' },
		{ label: 'Toilets — Girls', value: '24' },
		{ label: 'Toilets — Boys', value: '24' },
		{ label: 'Toilets — CWSN', value: '4 (accessible)' },
		{ label: 'School buses', value: '15 GPS-enabled' },
		{ label: 'Drinking water', value: 'RO + UV purified, tested quarterly' }
	]
};

export const boardResults = [
	{
		year: '2025–26',
		x: { appeared: 132, passed: 132, pass: 100, topper: 'Priya Sharma', topScore: '99.0%', above90: 41 },
		xii: { appeared: 108, passed: 108, pass: 100, topper: 'Vikram Singh', topScore: '98.1%', above90: 35 }
	},
	{
		year: '2024–25',
		x: { appeared: 124, passed: 124, pass: 100, topper: 'Sneha Kumari', topScore: '98.6%', above90: 38 },
		xii: { appeared: 102, passed: 102, pass: 100, topper: 'Aditya Raj', topScore: '97.8%', above90: 31 }
	},
	{
		year: '2023–24',
		x: { appeared: 118, passed: 118, pass: 100, topper: 'Ananya Singh', topScore: '98.2%', above90: 32 },
		xii: { appeared: 96, passed: 96, pass: 100, topper: 'Rohit Verma', topScore: '97.4%', above90: 28 }
	}
];

export const calendarTerms = [
	{ term: 'Term 1', period: 'April – September 2026', note: 'New session, Periodic Test 1, Half-Yearly Exams' },
	{ term: 'Term 2', period: 'October 2026 – March 2027', note: 'Periodic Test 2, Pre-Boards, Annual Exams, Results' }
];

export const calendarEvents = [
	{ date: '01 Apr 2026', event: 'New academic session begins', category: 'Event' },
	{ date: '14 Apr 2026', event: 'Dr. B. R. Ambedkar Jayanti — Holiday', category: 'Holiday' },
	{ date: '01 May 2026', event: 'Labour Day — Holiday', category: 'Holiday' },
	{ date: '15 – 25 May 2026', event: 'Summer break', category: 'Holiday' },
	{ date: '01 Jun 2026', event: 'School reopens after summer break', category: 'Event' },
	{ date: '11 Jul 2026', event: 'Parent–Teacher Meeting (Term 1)', category: 'Event' },
	{ date: '03 – 08 Aug 2026', event: 'Periodic Test 1 (Classes VI – XII)', category: 'Exam' },
	{ date: '15 Aug 2026', event: 'Independence Day celebration', category: 'Event' },
	{ date: '02 Oct 2026', event: 'Gandhi Jayanti — Holiday', category: 'Holiday' },
	{ date: '12 – 21 Oct 2026', event: 'Half-Yearly Examinations', category: 'Exam' },
	{ date: '24 Oct – 02 Nov 2026', event: 'Diwali break', category: 'Holiday' },
	{ date: '14 Nov 2026', event: "Children's Day celebration", category: 'Event' },
	{ date: '20 Nov 2026', event: 'National Science Exhibition (school round)', category: 'Activity' },
	{ date: '05 Dec 2026', event: 'Annual Sports Day', category: 'Activity' },
	{ date: '20 Dec 2026', event: 'Annual Day & Prize Distribution', category: 'Event' },
	{ date: '25 Dec 2026 – 01 Jan 2027', event: 'Winter break', category: 'Holiday' },
	{ date: '26 Jan 2027', event: 'Republic Day celebration', category: 'Event' },
	{ date: '01 – 10 Feb 2027', event: 'Pre-Board Examinations (Classes X & XII)', category: 'Exam' },
	{ date: '15 Feb 2027', event: 'Annual Examinations begin', category: 'Exam' },
	{ date: '20 Mar 2027', event: 'Result declaration & report cards', category: 'Event' },
	{ date: '31 Mar 2027', event: 'Session 2026–27 ends', category: 'Event' }
];

export function teacherSlug(name: string) {
	return name
		.toLowerCase()
		.replace(/[^a-z\s]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}

export const facultyDirectory = [
	{
		department: 'Leadership',
		members: [
			{
				initials: 'AS',
				name: 'Dr. Ananya Sharma',
				role: 'Principal',
				note: 'M.Ed., Ph.D. (Education) — 22 yrs',
				bio: 'Dr. Sharma has led Tricent since 2012, shaping it from a 400-student school into a 1,800-strong CBSE institution. She believes a school runs on trust — between teachers, parents and children — and her door is open to every family.',
				subjects: ['Educational Leadership', 'School Culture'],
				achievements: ['CBSE Best Principal Award 2023 (demo)', '100% board results for 3 consecutive years'],
				quote: 'Every child arrives with a gift — our job is to help them unwrap it.',
				office: 'Mon – Fri, 10:00 AM – 12:00 PM'
			},
			{
				initials: 'RK',
				name: 'Mr. Rajesh Kumar',
				role: 'Vice Principal',
				note: 'M.Sc. Mathematics — 18 yrs',
				bio: 'A mathematics teacher at heart, Mr. Kumar now leads academics and board preparation across the school. He designed the remedial programme that lifted the Class X mathematics average by 18% in two years.',
				subjects: ['Mathematics', 'Academic Planning'],
				achievements: ['Designed the school remedial programme', 'Mentor to 3 state-level maths Olympiad finalists'],
				quote: 'Discipline is not restriction — it is the freedom to achieve.',
				office: 'Mon – Sat, 9:00 – 11:00 AM'
			},
			{
				initials: 'SM',
				name: 'Mrs. Sunita Mishra',
				role: 'Head, Primary Wing',
				note: 'B.Ed., Montessori trained — 16 yrs',
				bio: 'Mrs. Mishra champions joyful early learning. Under her, the Primary Wing moved to a play-way phonics programme where reading begins with stories, rhymes and sand trays — not with rote work.',
				subjects: ['Early Childhood Education', 'Phonics'],
				achievements: ['Built the play-way phonics programme', 'Primary Wing reading levels up 35% in 3 years'],
				quote: 'Children learn best when they forget they are learning.',
				office: 'Mon – Fri, 9:00 – 11:00 AM'
			},
			{
				initials: 'AP',
				name: 'Mr. Amit Patel',
				role: 'Head, Science & Labs',
				note: 'M.Sc. Physics — 14 yrs',
				bio: 'Mr. Patel runs the three science laboratories, the robotics club and the school science fair. His students built the rainwater-harvesting model that won 2nd prize at the district science exhibition.',
				subjects: ['Physics', 'Robotics'],
				achievements: ['District science exhibition 2nd prize (2026)', 'Robotics club — 60 active members'],
				quote: 'Science is not a subject — it is a way of asking questions.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			}
		]
	},
	{
		department: 'English',
		members: [
			{
				initials: 'RN',
				name: 'Mrs. Ritu Nair',
				role: 'PGT English',
				note: 'M.A. English, B.Ed. — 15 yrs',
				bio: 'Mrs. Nair teaches senior English and runs the debate and literary club. Her students have won the district debate championship two years running, and the school magazine she edits is read cover to cover.',
				subjects: ['English Literature', 'Creative Writing'],
				achievements: ['District debate champions 2025', 'Editor, school magazine “The Tricentian”'],
				quote: 'Words build worlds.',
				office: 'Mon & Wed, 1:00 – 3:00 PM'
			},
			{
				initials: 'DK',
				name: 'Mr. Deepak Kumar',
				role: 'TGT English',
				note: 'M.A. English — 9 yrs',
				bio: 'Mr. Kumar makes grammar feel like a game and drama feel like life. He directs the annual day English musical and coaches the middle-school elocution team.',
				subjects: ['English Grammar', 'Drama'],
				achievements: ['Directed 5 annual day musicals', 'Elocution team — district winners 2024'],
				quote: 'Read a hundred books, and you have lived a hundred lives.',
				office: 'Tue & Fri, 1:00 – 3:00 PM'
			},
			{
				initials: 'SK',
				name: 'Ms. Shreya Kapoor',
				role: 'PRT English',
				note: 'B.A., B.Ed. — 6 yrs',
				bio: 'Ms. Kapoor runs the Primary reading programme — a library period every week, a reading challenge every term, and a classroom library in every room. Library circulation is up 40% since she took charge.',
				subjects: ['English', 'Phonics'],
				achievements: ['Reading programme — circulation up 40%', 'Young Authors Day founder'],
				quote: 'A child who reads will never be alone.',
				office: 'Mon – Thu, 12:00 – 1:00 PM'
			}
		]
	},
	{
		department: 'Hindi & Sanskrit',
		members: [
			{
				initials: 'GT',
				name: 'Mrs. Geeta Tripathi',
				role: 'PGT Hindi',
				note: 'M.A. Hindi, B.Ed. — 17 yrs',
				bio: 'Mrs. Tripathi teaches senior Hindi literature and coaches the Hindi debate team to the state-level finals. Her classroom is famous for its poetry wall, where students pin their own verses.',
				subjects: ['Hindi Literature', 'Debate'],
				achievements: ['Hindi debate — state-level finalists', 'School poetry wall curator'],
				quote: 'Bhasha hi sanskriti hai.',
				office: 'Mon & Wed, 2:00 – 4:00 PM'
			},
			{
				initials: 'VS',
				name: 'Mr. Vinod Sharma',
				role: 'TGT Hindi & Sanskrit',
				note: 'M.A. Sanskrit — 11 yrs',
				bio: 'Mr. Sharma keeps Sanskrit alive at Tricent — shloka recitation, Sanskrit week, and a small but passionate group of students who can chant the Bhagavad Gita from memory.',
				subjects: ['Hindi', 'Sanskrit'],
				achievements: ['Sanskrit shloka recitation — district winners', 'Sanskrit Week founder'],
				quote: 'Sanskrit is the mother of clarity.',
				office: 'Tue & Thu, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Mathematics',
		members: [
			{
				initials: 'NP',
				name: 'Mr. Nitin Pandey',
				role: 'PGT Mathematics',
				note: 'M.Sc. Maths — 13 yrs',
				bio: 'Mr. Pandey teaches senior mathematics and coaches the Olympiad group — 12 of his students qualified for Olympiad level 2 last year. His rule: no one leaves the class with a doubt.',
				subjects: ['Mathematics', 'Statistics'],
				achievements: ['12 students qualified for Olympiad level 2', 'Maths Olympiad coach, 6 years'],
				quote: 'Maths is not about numbers — it is about patterns.',
				office: 'Mon – Fri, 2:00 – 3:00 PM'
			},
			{
				initials: 'KJ',
				name: 'Mrs. Kavita Jha',
				role: 'TGT Mathematics',
				note: 'M.Sc. Maths, B.Ed. — 10 yrs',
				bio: 'Mrs. Jha built the maths lab and the activity corners that turned fractions into board games and geometry into art. Her middle-school students now ask for extra maths periods.',
				subjects: ['Mathematics', 'Mental Maths'],
				achievements: ['Built the maths lab & activity corners', 'Mental maths championship organiser'],
				quote: 'Every problem has a solution — sometimes you just need a new angle.',
				office: 'Mon, Wed & Fri, 1:00 – 2:00 PM'
			},
			{
				initials: 'AR',
				name: 'Mr. Arjun Rao',
				role: 'PRT Mathematics',
				note: 'B.Sc., B.Ed. — 7 yrs',
				bio: 'Mr. Rao founded the abacus club and teaches Vedic maths to Classes III–V. His students can multiply two-digit numbers faster than a calculator — and they love showing off.',
				subjects: ['Mathematics', 'Vedic Maths'],
				achievements: ['Abacus club founder', 'Vedic maths workshop for parents'],
				quote: 'Make maths a game, and children will play to win.',
				office: 'Tue & Thu, 12:00 – 1:00 PM'
			}
		]
	},
	{
		department: 'Science',
		members: [
			{
				initials: 'MB',
				name: 'Dr. Meera Bhatt',
				role: 'PGT Chemistry',
				note: 'M.Sc., Ph.D. Chemistry — 16 yrs',
				bio: 'Dr. Bhatt brings a research lab’s rigour to school chemistry — and a storyteller’s warmth. Three of her students have qualified for NTSE, and her practical classes are the most awaited of the week.',
				subjects: ['Chemistry'],
				achievements: ['Ph.D. Chemistry', '3 NTSE qualifiers mentored'],
				quote: 'Chemistry is the poetry of matter.',
				office: 'Mon & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'SG',
				name: 'Mr. Sanjay Gupta',
				role: 'PGT Biology',
				note: 'M.Sc. Zoology — 12 yrs',
				bio: 'Mr. Gupta leads the eco-club and the school’s rainwater-harvesting project. His biology field trips — to the botanical garden, the river bank, the village pond — are where textbooks come alive.',
				subjects: ['Biology', 'Environmental Science'],
				achievements: ['Eco-club founder', 'Rainwater harvesting model — district prize'],
				quote: 'Teach a child to love nature, and they will protect it forever.',
				office: 'Wed & Fri, 2:00 – 4:00 PM'
			},
			{
				initials: 'NS',
				name: 'Mrs. Neha Singh',
				role: 'TGT Science',
				note: 'M.Sc. Physics, B.Ed. — 8 yrs',
				bio: 'Mrs. Singh coordinates the school science fair and makes general science hands-on — every concept gets an experiment, every experiment gets a question to take home.',
				subjects: ['General Science'],
				achievements: ['Science fair coordinator', 'Hands-on science kit designer'],
				quote: 'Curiosity is the beginning of all science.',
				office: 'Mon – Fri, 1:00 – 2:00 PM'
			},
			{
				initials: 'PK',
				name: 'Mr. Prakash Kumar',
				role: 'Lab Assistant',
				note: 'B.Sc. — 9 yrs',
				bio: 'Mr. Kumar keeps all three laboratories running — apparatus, chemicals, safety checks — with a zero-incident record for five straight years. Every practical class starts with his safety briefing.',
				subjects: ['Lab Safety', 'Practical Support'],
				achievements: ['Zero-incident lab record, 5 years', 'Lab safety trainer for new teachers'],
				quote: 'A safe lab is a learning lab.',
				office: 'Mon – Sat, 8:00 AM – 4:00 PM'
			}
		]
	},
	{
		department: 'Social Science',
		members: [
			{
				initials: 'AV',
				name: 'Mrs. Anita Verma',
				role: 'PGT History & Civics',
				note: 'M.A. History — 14 yrs',
				bio: 'Mrs. Verma mentors the Model UN team and teaches history as a living story — with debates, role play and field visits to Patna’s heritage sites. Her students argue like parliamentarians.',
				subjects: ['History', 'Civics'],
				achievements: ['Model UN team mentor', 'Heritage walk programme founder'],
				quote: 'History is not the past — it is the mirror of the present.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'RM',
				name: 'Mr. Rahul Mehta',
				role: 'TGT Geography',
				note: 'M.A. Geography, B.Ed. — 8 yrs',
				bio: 'Mr. Mehta built the geography map lab and runs field trips that teach contour lines on real hillsides. His disaster-management workshops are now part of the school safety drill.',
				subjects: ['Geography', 'Disaster Management'],
				achievements: ['Geography map lab founder', 'Disaster-management workshop lead'],
				quote: 'The world is the best classroom.',
				office: 'Mon & Wed, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Computer Science',
		members: [
			{
				initials: 'VK',
				name: 'Mr. Vikram Khanna',
				role: 'PGT Computer Science',
				note: 'MCA — 11 yrs',
				bio: 'Mr. Khanna runs the coding club, where 40 students have built real apps — a library tracker, a bus-timing board, a quiz game. He teaches Python and AI to Classes XI–XII.',
				subjects: ['Python', 'AI & Data'],
				achievements: ['Coding club — 40 students built working apps', 'AI workshop for Classes IX–XII'],
				quote: 'Code is the new handwriting.',
				office: 'Mon – Fri, 2:00 – 3:00 PM'
			},
			{
				initials: 'PS',
				name: 'Ms. Pooja Sinha',
				role: 'TGT Computer Science',
				note: 'B.Tech., B.Ed. — 6 yrs',
				bio: 'Ms. Sinha introduces the youngest students to computers — Scratch stories, robotics kits, and the rule that every child finishes the term having built something of their own.',
				subjects: ['Computers', 'Scratch & Robotics'],
				achievements: ['Robotics club junior winners', 'Scratch storytelling festival'],
				quote: 'Every child can code — they just need the first hello world.',
				office: 'Tue & Fri, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Arts, Music & Sports',
		members: [
			{
				initials: 'RD',
				name: 'Mrs. Rina Das',
				role: 'Music Teacher',
				note: 'M.A. Music — 13 yrs',
				bio: 'Mrs. Das leads the school choir and the vocal and instrumental programme. Her choir won the district cultural fest, and the morning assembly’s song is the sound of Tricent.',
				subjects: ['Vocal Music', 'Instrumental Music'],
				achievements: ['District cultural fest — choir winners', 'School orchestra founder'],
				quote: 'Music is the soul of the school.',
				office: 'Mon, Wed & Fri, 2:00 – 4:00 PM'
			},
			{
				initials: 'FY',
				name: 'Mr. Farhan Yusuf',
				role: 'Dance & Drama',
				note: 'Diploma, NSD — 9 yrs',
				bio: 'Mr. Yusuf has choreographed the annual day for six years and runs the theatre society, where shy students become confident performers — and confident students become directors.',
				subjects: ['Dance', 'Theatre'],
				achievements: ['Annual day choreographer, 6 years', 'Theatre society — 3 inter-school wins'],
				quote: 'The stage teaches what no textbook can.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'BS',
				name: 'Mr. Bablu Singh',
				role: 'PET / Sports',
				note: 'B.P.Ed., Karate Black Belt — 12 yrs',
				bio: 'Mr. Singh coaches basketball, athletics and karate, and runs the morning fitness programme. His U-16 basketball team won the district championship in 2026.',
				subjects: ['Physical Education', 'Karate'],
				achievements: ['District basketball champions 2026', 'Karate — 30 black belts trained'],
				quote: 'A healthy body builds a focused mind.',
				office: 'Mon – Sat, 7:00 – 8:00 AM'
			}
		]
	},
	{
		department: 'Primary Wing',
		members: [
			{
				initials: 'LC',
				name: 'Mrs. Lata Choudhary',
				role: 'PRT — Class I',
				note: 'B.Ed., NTT — 12 yrs',
				bio: 'Mrs. Choudhary welcomes every child into Class I with phonics reading corners and a “book of the week”. Her classroom is where reading begins — and where the love of it starts.',
				subjects: ['English', 'EVS'],
				achievements: ['Phonics reading corners founder', 'Class I reading levels — best in the wing'],
				quote: 'First steps matter most.',
				office: 'Mon – Thu, 12:00 – 1:00 PM'
			},
			{
				initials: 'MJ',
				name: 'Mrs. Manju Jha',
				role: 'PRT — Class II',
				note: 'B.Ed. — 10 yrs',
				bio: 'Mrs. Jha teaches Class II with activity-based maths kits she designed herself — beads, blocks and games that make numbers feel like play.',
				subjects: ['Mathematics', 'Hindi'],
				achievements: ['Activity-based maths kits designer', 'Class II maths fair organiser'],
				quote: 'Little hands, big ideas.',
				office: 'Mon – Thu, 12:00 – 1:00 PM'
			},
			{
				initials: 'SK',
				name: 'Ms. Sara Khan',
				role: 'Pre-Primary Teacher',
				note: 'Montessori trained — 7 yrs',
				bio: 'Ms. Khan runs the nursery rhyme festival and the play-way corners where the youngest Tricentians learn through sand, water, blocks and song.',
				subjects: ['Play-way Learning', 'Rhymes'],
				achievements: ['Nursery rhyme festival founder', 'Play-way corners designer'],
				quote: 'Play is the work of childhood.',
				office: 'Mon – Fri, 11:00 AM – 12:00 PM'
			},
			{
				initials: 'DP',
				name: 'Mrs. Divya Prasad',
				role: 'Pre-Primary Teacher',
				note: 'NTT, B.A. — 8 yrs',
				bio: 'Mrs. Prasad runs the storytelling circle — 200 stories a year, told with puppets, props and voices that make the nursery fall silent and listen.',
				subjects: ['Art & Craft', 'Storytelling'],
				achievements: ['Storytelling circle — 200 stories a year', 'Pre-Primary art display curator'],
				quote: 'Every story opens a door.',
				office: 'Mon – Fri, 11:00 AM – 12:00 PM'
			}
		]
	}
];

export const allTeachers = facultyDirectory.flatMap((d) =>
	d.members.map((m) => ({ ...m, department: d.department, slug: teacherSlug(m.name) }))
);

export const notices = [
	{
		date: '12 Nov 2026',
		title: 'Admissions Open for Academic Year 2027–28 — forms available at the school office and online',
		category: 'Admissions',
		pinned: true
	},
	{
		date: '10 Nov 2026',
		title: 'Half-Yearly Examination date sheet released for Classes VI – XII',
		category: 'Examinations',
		pinned: true
	},
	{
		date: '08 Nov 2026',
		title: 'Diwali break: school closed from 24 October to 02 November 2026',
		category: 'Holiday',
		pinned: false
	},
	{
		date: '05 Nov 2026',
		title: 'Parent–Teacher Meeting on 15 November 2026 (9:00 AM – 12:00 PM)',
		category: 'General',
		pinned: false
	},
	{
		date: '01 Nov 2026',
		title: 'Annual Sports Day on 05 December 2026 — house trials begin 18 November',
		category: 'Sports',
		pinned: false
	},
	{
		date: '28 Oct 2026',
		title: 'Term 1 fee due date: 10 November 2026 — pay online via parent portal',
		category: 'Fees',
		pinned: false
	},
	{
		date: '24 Oct 2026',
		title: 'Winter uniform compulsory from 01 December 2026',
		category: 'General',
		pinned: false
	},
	{
		date: '20 Oct 2026',
		title: 'National Science Exhibition (school round) on 20 November — register by 10 November',
		category: 'Activity',
		pinned: false
	}
];

export const downloads = [
	{
		title: 'Admission Application Form 2027–28',
		desc: 'For Nursery to Class IX and XI — fill and submit with documents at the school office.',
		file: '/downloads/admission-form.pdf',
		pages: '2 pages',
		size: '84 KB'
	},
	{
		title: 'Transfer Certificate Application',
		desc: 'Apply for a TC when leaving the school — attach the last fee receipt.',
		file: '/downloads/tc-application.pdf',
		pages: '1 page',
		size: '52 KB'
	},
	{
		title: 'Fee Challan (Term 1)',
		desc: 'Printable fee challan for offline payment at the school office or bank.',
		file: '/downloads/fee-challan.pdf',
		pages: '1 page',
		size: '48 KB'
	},
	{
		title: 'Transport Request Form',
		desc: 'Request a bus seat or change of route / stop — submit before the 10th of the month.',
		file: '/downloads/transport-form.pdf',
		pages: '1 page',
		size: '56 KB'
	},
	{
		title: 'Leave Application Form',
		desc: 'For planned leave of more than 2 days — parent signature mandatory.',
		file: '/downloads/leave-application.pdf',
		pages: '1 page',
		size: '44 KB'
	},
	{
		title: 'Bonafide Certificate Request',
		desc: 'Request a bonafide certificate for passport, bank or other official work.',
		file: '/downloads/bonafide-certificate.pdf',
		pages: '1 page',
		size: '46 KB'
	}
];

export const busRoutes = [
	{ route: 'Route 1', areas: 'Simri Bakhtiyarpur Town — Station Road, Main Bazaar, College Chowk', pickup: '7:00 AM', fee: '₹1,200 / month' },
	{ route: 'Route 2', areas: 'Patna City — Kankarbagh, Rajendra Nagar, Patrakar Nagar', pickup: '6:30 AM', fee: '₹1,200 / month' },
	{ route: 'Route 3', areas: 'Beldari – Saharsa Road — Beldari, Sonbarsa, Maheshkhunt', pickup: '7:15 AM', fee: '₹1,200 / month' },
	{ route: 'Route 4', areas: 'Bakhtiyarpur Station — Station, Rampur, Dharampur', pickup: '7:05 AM', fee: '₹1,200 / month' },
	{ route: 'Route 5', areas: 'Kumarkhand — Kumarkhand, Bhawanipur, Madhepura Road', pickup: '6:45 AM', fee: '₹1,200 / month' },
	{ route: 'Route 6', areas: 'Murliganj — Murliganj, Jadia, Banmankhi Road', pickup: '6:50 AM', fee: '₹1,200 / month' }
];

export const generalFaqs = [
	{
		category: 'General',
		q: 'What are the school timings?',
		a: 'Classes run Monday to Saturday, 8:00 AM to 4:00 PM. Pre-Primary runs 8:30 AM to 12:30 PM. The school office is open 8:00 AM to 4:00 PM on working days.'
	},
	{
		category: 'General',
		q: 'Is the school CBSE affiliated?',
		a: 'Yes. Tricent Public School is affiliated to the Central Board of Secondary Education (CBSE), New Delhi — Affiliation No. 330000 (Demo). Our Mandatory Disclosure page lists the affiliation letter and all statutory certificates.'
	},
	{
		category: 'Fees',
		q: 'What does the fee include?',
		a: 'Tuition fee covers academics, labs, library, sports and co-curricular activities. Transport (₹1,200/month) is optional. There is a one-time admission fee and a ₹500 registration fee. See the full fee structure on the Admissions page.'
	},
	{
		category: 'Fees',
		q: 'Is there a concession for siblings?',
		a: 'Yes — a 10% concession on tuition fee for the second sibling, and a 10% concession on the one-time admission fee for alumni wards.'
	},
	{
		category: 'Transport',
		q: 'Which areas do the school buses cover?',
		a: 'Our 15 GPS-enabled buses cover Simri Bakhtiyarpur, Patna and nearby towns on 6 routes. Every bus has a trained driver and a lady attendant, and parents get live GPS tracking. See the Transport page for routes and timings.'
	},
	{
		category: 'Transport',
		q: 'Can I change my child’s bus route mid-year?',
		a: 'Yes. Submit the Transport Request Form (available on the Downloads page) before the 10th of the month. Route changes are confirmed subject to seat availability on the requested route.'
	},
	{
		category: 'Academics',
		q: 'Which streams are offered in Classes XI – XII?',
		a: 'Science (PCM / PCB), Commerce and Humanities. Competitive-exam mentoring is available for JEE, NEET, CUET and CA Foundation.'
	},
	{
		category: 'Academics',
		q: 'How are parents kept informed about progress?',
		a: 'Through the parent portal (attendance, marks, notices), Parent–Teacher Meetings every term, and the diary. Parents can also log in to the Parent Login page for a demo of the dashboard.'
	}
];

export const extraTestimonials = [
	{
		quote:
			'My daughter joined in Nursery and now reads on her own in Class II. The teachers make learning feel like play — she asks to go to school on Sundays too!',
		name: 'Mrs. Kavita Jha',
		role: 'Parent, Class II'
	},
	{
		quote:
			'I joined Tricent in Class IX. The board preparation here is serious but never stressful — weekly tests, doubt sessions, and teachers who actually listen.',
		name: 'Aarav Verma',
		role: 'Student, Class X'
	},
	{
		quote:
			'The robotics club changed my life. We built our first line-follower robot in Class VIII, and today I am studying Computer Science at IIT Patna.',
		name: 'Rohit Verma',
		role: 'Alumnus, Batch of 2024'
	},
	{
		quote:
			'As a single parent, the office staff and teachers have always been supportive — fee reminders are gentle, and the bus attendant knows my son by name.',
		name: 'Mrs. Neha Singh',
		role: 'Parent, Class V'
	}
];

export const newsBodies: Record<string, string[]> = {
	'admissions-open-2027-28': [
		'Tricent Public School invites applications for Nursery to Class IX and Class XI for the academic year 2027–28. Application forms are available at the school office and through the online enquiry form on the Admissions page.',
		'Admission to Nursery to Class V is through a friendly interaction with the child, while Classes VI to IX and XI have a simple written assessment in English, Mathematics and Science. The first list of selected students will be published on 22 February 2027.',
		'Parents are encouraged to apply early — seats are limited in every class, and early applicants get priority for the entrance interaction. For any help, call the admissions office at +91 75440 00044 between 8:00 AM and 4:00 PM, Monday to Saturday.'
	],
	'class-x-results-100-percent': [
		'Tricent Public School’s Class X batch of 2025–26 has recorded a 100% pass rate in the CBSE Board Examinations, with 41 students scoring above 90%. School topper Priya Sharma scored 99.0%.',
		'Principal Dr. Ananya Sharma congratulated the students and teachers: "This result belongs to every child who worked steadily through the year, and to teachers who never let a doubt go unanswered."',
		'The full three-year board results, including Class XII, are published on the Results page and in the Mandatory Disclosure section of this website.'
	],
	'basketball-championship-win': [
		'Tricent’s U-16 basketball team lifted the district inter-school championship trophy after a thrilling 42–38 win in the final against St. Xavier’s, Patna.',
		'Captain Aarav Verma (Class X) scored 18 points and was named Player of the Tournament. Coach Mr. Bablu Singh credited the team’s discipline: "They trained every morning at 6:30 — this trophy is their alarm clock paying off."',
		'The team will now represent the district at the state-level championship in December 2026.'
	],
	'annual-day-2026': [
		'Annual Day 2026 filled the 500-seat auditorium with colour, applause and proud parents. The evening featured a welcome dance by the Pre-Primary wing, a Hindi drama, an English musical, and the prize distribution for academic and sports toppers.',
		'Chief guest Dr. Meera Nair, educationist, praised the school’s focus on values: "Marks open doors, but character decides how far you walk through them."',
		'The programme ended with the school song and the traditional lamp-lighting by the outgoing Class XII batch.'
	],
	'science-exhibition-2nd-prize': [
		'A working model on rainwater harvesting built by Class IX students won second prize at the district-level National Science Exhibition.',
		'The model, guided by Mr. Amit Patel (Head, Science & Labs), demonstrates how a school rooftop can harvest 40,000 litres of rainwater in a season. The team will present the model at the state exhibition next month.',
		'The school science club meets every Friday, and students from Classes VI to XII can join with a simple sign-up at the science lab.'
	],
	'teachers-day-celebrations': [
		'Students honoured their teachers on 05 September 2026 with handmade cards, a special morning assembly and performances in every wing.',
		'The Pre-Primary children presented a song, the Middle School staged a skit on "My Favourite Teacher", and the Senior School organised a thank-you wall where every teacher received a personal note.',
		'Principal Dr. Ananya Sharma thanked the students: "A teacher’s best gift is a student who keeps learning. Today, you gave us that gift."'
	]
};

// Tricent Public School — alumni & houses data (to be appended to src/lib/data/more.ts).
// All demo/mock content for client presentation.

export const alumniProfiles = [
	{
		initials: 'AK',
		name: 'Aarav Kumar',
		batch: 'Batch of 2012',
		role: 'IAS Officer — District Magistrate, Patna',
		detail:
			'Cleared the UPSC Civil Services Examination 2018 with AIR 47 and now serves as District Magistrate, Patna, Bihar.',
		quote: 'Tricent taught me discipline before ambition — the morning assembly, the house duties, the teachers who never let me settle.'
	},
	{
		initials: 'PS',
		name: 'Dr. Priya Sharma',
		batch: 'Batch of 2015',
		role: 'Resident Doctor — AIIMS, New Delhi',
		detail:
			'MBBS from AIIMS New Delhi (NEET UG AIR 112); now a resident doctor in the Department of Internal Medicine.',
		quote: 'The science labs at Tricent were where I first fell in love with medicine — every experiment felt like a discovery.'
	},
	{
		initials: 'VS',
		name: 'Vikram Singh',
		batch: 'Batch of 2013',
		role: 'Software Engineer — Bengaluru',
		detail:
			'B.Tech from IIT Delhi; builds payment systems at a leading fintech company in Bengaluru and mentors Tricent coders online.',
		quote: 'My first program ran in the Tricent computer lab. That one working line of code decided my career.'
	},
	{
		initials: 'AS',
		name: 'Ananya Singh',
		batch: 'Batch of 2017',
		role: 'Advocate — Patna High Court',
		detail:
			'BA LLB (Hons.) from NLSIU Bengaluru; practises constitutional and education law at the Patna High Court.',
		quote: 'Debate club gave me my voice. I still argue the way Mrs. Mishra taught us to — evidence first, emotion second.'
	},
	{
		initials: 'RK',
		name: 'Rohit Kumar',
		batch: 'Batch of 2011',
		role: 'Founder — Agri-tech Startup, Patna',
		detail:
			'Founded a farm-to-market agri-tech startup that now works with 4,000+ farmers across Bihar and Jharkhand.',
		quote: 'Tricent is a school in a farming district — it taught me to solve problems for the people around me, not far away.'
	},
	{
		initials: 'SK',
		name: 'Sneha Kumari',
		batch: 'Batch of 2019',
		role: 'Research Scholar — IISc Bengaluru',
		detail:
			'Integrated M.Sc. in Physics from IISc Bengaluru; researches quantum materials and has published two papers as co-author.',
		quote: 'The annual science exhibition was my first conference. I presented a volcano model; today I present at real ones.'
	},
	{
		initials: 'AR',
		name: 'Lt. Cdr. Aditya Raj',
		batch: 'Batch of 2016',
		role: 'Indian Navy — Lieutenant Commander',
		detail:
			'Commissioned into the Indian Navy through the NDA; serves as a Lieutenant Commander on a frontline warship.',
		quote: 'Sports day, NCC drills, house captaincy — Tricent trained my body and my leadership long before the Navy did.'
	},
	{
		initials: 'MG',
		name: 'Meera Gupta',
		batch: 'Batch of 2014',
		role: 'Chartered Accountant — Partner, Audit Firm, Delhi',
		detail:
			'Qualified as a Chartered Accountant in 2020; now a partner at a Delhi audit firm and a visiting mentor for Tricent commerce students.',
		quote: 'Commerce at Tricent was never just balance sheets — it was learning to be honest with numbers and with people.'
	}
];

export const houses = [
	{
		name: 'Ashoka',
		colour: '#C0392B',
		motto: 'Courage Before Comfort',
		captain: 'Arjun Verma (Class XII)',
		viceCaptain: 'Kavya Singh (Class XI)',
		points: 486,
		members: 612,
		eventsWon: 14
	},
	{
		name: 'Raman',
		colour: '#1D4ED8',
		motto: 'Curiosity Lights the Way',
		captain: 'Ishita Roy (Class XII)',
		viceCaptain: 'Dev Patel (Class X)',
		points: 512,
		members: 598,
		eventsWon: 16
	},
	{
		name: 'Tagore',
		colour: '#15803D',
		motto: 'Where the Mind is Without Fear',
		captain: 'Nandini Jha (Class XII)',
		viceCaptain: 'Ayaan Khan (Class XI)',
		points: 468,
		members: 605,
		eventsWon: 12
	},
	{
		name: 'Teresa',
		colour: '#D97706',
		motto: 'Service Above Self',
		captain: 'Sara Thomas (Class XII)',
		viceCaptain: 'Kabir Das (Class X)',
		points: 441,
		members: 590,
		eventsWon: 10
	}
];

export const houseFixtures = [
	{
		date: '21 Nov 2026',
		event: 'Inter-House Cricket Final',
		houses: 'Raman vs Ashoka',
		venue: 'Main Cricket Ground'
	},
	{
		date: '28 Nov 2026',
		event: 'Inter-House Debate — "Should AI be taught in schools?"',
		houses: 'All four houses',
		venue: 'School Auditorium'
	},
	{
		date: '05 Dec 2026',
		event: 'Annual Sports Day',
		houses: 'All four houses',
		venue: 'Athletics Track & Main Ground'
	},
	{
		date: '12 Dec 2026',
		event: 'Inter-House Science Quiz',
		houses: 'Tagore vs Teresa',
		venue: 'Senior Science Lab'
	},
	{
		date: '19 Dec 2026',
		event: 'Inter-House Basketball Tournament',
		houses: 'Ashoka vs Teresa',
		venue: 'Basketball Court'
	},
	{
		date: '16 Jan 2027',
		event: 'Inter-House Cultural Fest — Music, Dance & Drama',
		houses: 'All four houses',
		venue: 'School Auditorium'
	},
	{
		date: '24 Jan 2027',
		event: 'Inter-House Football Semi-Final',
		houses: 'Raman vs Tagore',
		venue: 'Main Football Ground'
	},
	{
		date: '06 Feb 2027',
		event: 'Inter-House Chess Championship',
		houses: 'All four houses',
		venue: 'Library Reading Hall'
	}
];

// Student life & sports — demo data for client presentation.
// To be appended to src/lib/data/more.ts by the coordinator.

export const clubs = [
	{
		name: 'Science & Robotics Club',
		category: 'Academic',
		desc: 'Hands-on experiments, working models and robotics kits — members build projects for the National Science Exhibition every year.',
		day: 'Monday',
		members: 42
	},
	{
		name: 'Mathematics Club',
		category: 'Academic',
		desc: 'Olympiad practice, puzzles and mental-maths challenges for Classes VI to XII, guided by the senior maths faculty.',
		day: 'Wednesday',
		members: 36
	},
	{
		name: 'Literary & Debating Society',
		category: 'Academic',
		desc: 'Debates, elocution, creative writing and the school magazine — the home of Tricent’s young writers and speakers.',
		day: 'Friday',
		members: 48
	},
	{
		name: 'Quiz Club',
		category: 'Academic',
		desc: 'Weekly quizzes on current affairs, science and general knowledge, with inter-house and inter-school quiz teams.',
		day: 'Tuesday',
		members: 30
	},
	{
		name: 'Music & Choir',
		category: 'Arts',
		desc: 'Vocal and instrumental training in classical and contemporary music, performing at assembly, Annual Day and community events.',
		day: 'Tuesday',
		members: 54
	},
	{
		name: 'Dance Troupe',
		category: 'Arts',
		desc: 'Classical, folk and contemporary dance — the troupe opens every major school celebration and competes at district level.',
		day: 'Thursday',
		members: 46
	},
	{
		name: 'Art & Craft Studio',
		category: 'Arts',
		desc: 'Painting, sketching, pottery and craft — members exhibit their work in the annual art exhibition and decorate the campus.',
		day: 'Saturday',
		members: 38
	},
	{
		name: 'Drama & Theatre Club',
		category: 'Arts',
		desc: 'Stage plays, street theatre and mime — the club stages one full production every term, in Hindi and English.',
		day: 'Friday',
		members: 34
	},
	{
		name: 'Sports & Fitness Club',
		category: 'Sports',
		desc: 'Morning fitness, athletics training and inter-house tournaments — open to every student who wants to stay active.',
		day: 'Monday',
		members: 72
	},
	{
		name: 'NCC & Scouts',
		category: 'Service',
		desc: 'Discipline, drill, camping and community service — Tricent’s NCC cadets and scouts lead the school’s social outreach.',
		day: 'Saturday',
		members: 58
	},
	{
		name: 'Eco Club',
		category: 'Service',
		desc: 'Tree plantation, waste segregation and the school kitchen garden — students run Tricent’s green campus programme.',
		day: 'Wednesday',
		members: 44
	},
	{
		name: 'Interact & Community Service',
		category: 'Service',
		desc: 'Volunteering, donation drives and literacy camps in nearby villages — service hours count toward the house championship.',
		day: 'Thursday',
		members: 40
	}
];

export const studentCouncil = [
	{ role: 'Head Boy', name: 'Aarav Verma', class: 'XII-A' },
	{ role: 'Head Girl', name: 'Priya Sharma', class: 'XII-B' },
	{ role: 'Vice Head Boy', name: 'Rohan Kumar', class: 'XI-A' },
	{ role: 'Vice Head Girl', name: 'Sneha Kumari', class: 'XI-B' },
	{ role: 'Captain — Ashoka House', name: 'Aditya Raj', class: 'X-A' },
	{ role: 'Captain — Raman House', name: 'Ananya Singh', class: 'X-B' },
	{ role: 'Captain — Tagore House', name: 'Vikram Singh', class: 'IX-A' },
	{ role: 'Captain — Teresa House', name: 'Meera Nair', class: 'IX-B' }
];

export const sportsTeams = [
	{
		sport: 'Cricket',
		coach: 'Mr. Rajesh Kumar',
		captain: 'Aarav Verma (XII-A)',
		ageGroup: 'U-17 & U-14',
		training: 'Mon, Wed & Fri — 6:30 AM'
	},
	{
		sport: 'Football',
		coach: 'Mr. Amit Patel',
		captain: 'Rohan Kumar (XI-A)',
		ageGroup: 'U-17 & U-14',
		training: 'Tue & Thu — 6:30 AM'
	},
	{
		sport: 'Basketball',
		coach: 'Mrs. Sunita Mishra',
		captain: 'Priya Sharma (XII-B)',
		ageGroup: 'U-17 (Girls & Boys)',
		training: 'Mon, Wed & Sat — 4:00 PM'
	},
	{
		sport: 'Athletics',
		coach: 'Mr. Rakesh Kumar',
		captain: 'Vikram Singh (IX-A)',
		ageGroup: 'U-19, U-17 & U-14',
		training: 'Mon – Sat — 6:00 AM'
	},
	{
		sport: 'Karate',
		coach: 'Ms. Kavita Singh',
		captain: 'Ananya Singh (X-B)',
		ageGroup: 'U-17 & U-14',
		training: 'Tue, Thu & Sat — 4:30 PM'
	}
];

export const sportsFixtures = [
	{ date: '28 Nov 2026', event: 'Inter-School Cricket — Quarter Final', opponent: 'Delhi Public School, Patna', result: 'Upcoming', venue: 'Tricent Cricket Ground' },
	{ date: '05 Dec 2026', event: 'Annual Sports Day', opponent: 'Inter-House Athletics Meet', result: 'Upcoming', venue: 'Tricent Main Ground' },
	{ date: '12 Dec 2026', event: 'District Basketball Championship — Final', opponent: 'St. Xavier’s School, Patna', result: 'Upcoming', venue: 'Patliputra Sports Complex' },
	{ date: '19 Dec 2026', event: 'Inter-School Football — Semi Final', opponent: 'Loyola High School, Patna', result: 'Upcoming', venue: 'Tricent Football Field' },
	{ date: '08 Nov 2026', event: 'Inter-School Basketball — League', opponent: 'Notre Dame Academy, Patna', result: 'Won 42–38', venue: 'Tricent Basketball Court' },
	{ date: '01 Nov 2026', event: 'District Athletics Meet — 100 m Final', opponent: 'District Schools', result: 'Won — Gold', venue: 'Moin-ul-Haq Stadium' },
	{ date: '25 Oct 2026', event: 'Inter-School Cricket — League', opponent: 'B. D. Public School, Patna', result: 'Won by 6 wickets', venue: 'Tricent Cricket Ground' },
	{ date: '18 Oct 2026', event: 'State Karate Championship', opponent: 'State Schools', result: 'Won — 3 Gold, 2 Silver', venue: 'Patliputra Sports Complex' }
];

export const sportsAchievements = [
	{
		title: 'District Basketball Champions 2026',
		detail: 'U-17 boys’ team won the district championship, beating St. Xavier’s 42–38 in the final.'
	},
	{
		title: 'State Karate — 3 Gold Medals',
		detail: 'Tricent karatekas won 3 gold and 2 silver medals at the Bihar State School Karate Championship 2026.'
	},
	{
		title: 'District Athletics — Overall Runners-Up',
		detail: '14 medals across sprints, long jump and relays at the Patna District Athletics Meet 2026.'
	},
	{
		title: 'Best Emerging Cricket Team 2025',
		detail: 'U-14 cricket team reached the semi-finals of the CBSE Cluster Cricket Tournament in its debut season.'
	}
];

// Tricent Public School — library, scholarships & book-list data
// All demo/mock content for client presentation.

export const librarySections = [
	{
		section: 'Fiction',
		count: 3400,
		desc: 'Novels, short stories and classics for young readers — from Indian authors to world literature.'
	},
	{
		section: 'Reference',
		count: 2100,
		desc: 'Encyclopaedias, dictionaries, atlases and yearbooks for project work and quick fact-checking.'
	},
	{
		section: 'Science',
		count: 1800,
		desc: 'Popular science, biographies of scientists and experiment guides for curious minds.'
	},
	{
		section: 'Hindi',
		count: 1600,
		desc: 'Hindi novels, poetry, stories and reference books that celebrate Indian literature.'
	},
	{
		section: "Children's",
		count: 2200,
		desc: 'Picture books, fairy tales and early readers for Nursery to Class V, with a dedicated junior corner.'
	},
	{
		section: 'Digital',
		count: 900,
		desc: 'E-books, audiobooks and learning CDs/DVDs available on the library computers and reading tablets.'
	}
];

export const libraryProgrammes = [
	{
		name: 'Reading Challenge',
		desc: 'Students read a set number of books each term and earn badges and certificates at the Annual Day.',
		forClasses: 'Classes III – VIII'
	},
	{
		name: 'Story Circle',
		desc: 'A weekly storytelling session in the junior library — puppets, props and voices that make stories come alive.',
		forClasses: 'Nursery – Class II'
	},
	{
		name: 'Book Club',
		desc: 'Senior students meet every Friday to discuss a book of the month, debate its ideas and review it for the school magazine.',
		forClasses: 'Classes IX – XII'
	},
	{
		name: 'Author Week',
		desc: 'A week-long celebration every November with author talks, book fairs, quizzes and a young-authors showcase.',
		forClasses: 'All classes'
	}
];

export const scholarships = [
	{
		name: 'Merit Scholarship',
		desc: 'Awarded to the Class X and Class XII board toppers and the top three students of every class in the annual examination.',
		benefit: 'Up to 50% tuition fee waiver',
		eligibility: 'Class X / XII board toppers and class toppers',
		criteria: '90% or above in the board / annual examination'
	},
	{
		name: 'Sports Scholarship',
		desc: 'For students who represent the school at district, state or national level in any recognised sport.',
		benefit: 'Up to 25% tuition fee waiver',
		eligibility: 'District, state or national level sportspersons',
		criteria: 'Medal or selection at district level or above'
	},
	{
		name: 'Sibling Concession',
		desc: 'A concession on tuition fee when two or more children from the same family study at Tricent.',
		benefit: '10% tuition fee concession',
		eligibility: 'Second and subsequent siblings',
		criteria: 'Both siblings enrolled in the same academic year'
	},
	{
		name: 'Staff Ward Concession',
		desc: 'A concession for children of permanent teaching and non-teaching staff of the school.',
		benefit: '25% tuition fee concession',
		eligibility: 'Wards of permanent school staff',
		criteria: 'Parent employed with the school for at least 2 years'
	},
	{
		name: 'Single Girl Child Scholarship',
		desc: 'Encouraging education of the single girl child — awarded to meritorious single girl children of the family.',
		benefit: 'Up to 25% tuition fee waiver',
		eligibility: 'Single girl child of the family',
		criteria: '75% or above in the previous annual examination'
	}
];

export const bookList = [
	// Nursery
	{ cls: 'Nursery', subject: 'English', title: 'My First Alphabet Book', publisher: 'Ratna Sagar' },
	{ cls: 'Nursery', subject: 'Rhymes', title: 'Nursery Rhymes & Songs', publisher: 'Viva Education' },
	{ cls: 'Nursery', subject: 'Art & Craft', title: 'Little Hands Art Book', publisher: 'Madhubun' },
	// KG
	{ cls: 'KG', subject: 'English', title: 'Phonics Fun — Level 1', publisher: 'Ratna Sagar' },
	{ cls: 'KG', subject: 'Mathematics', title: 'Numbers & Shapes', publisher: 'Viva Education' },
	{ cls: 'KG', subject: 'Hindi', title: 'Hindi Varnmala', publisher: 'Goyal Brothers' },
	// Class I
	{ cls: 'I', subject: 'English', title: 'New Oxford Modern English — Primer', publisher: 'Oxford University Press' },
	{ cls: 'I', subject: 'Mathematics', title: 'Maths Mate — Class 1', publisher: 'Ratna Sagar' },
	{ cls: 'I', subject: 'Hindi', title: 'Hindi Pathmala — 1', publisher: 'Goyal Brothers' },
	{ cls: 'I', subject: 'EVS', title: 'My World Around Me — 1', publisher: 'Viva Education' },
	// Class II
	{ cls: 'II', subject: 'English', title: 'New Oxford Modern English — 2', publisher: 'Oxford University Press' },
	{ cls: 'II', subject: 'Mathematics', title: 'Maths Mate — Class 2', publisher: 'Ratna Sagar' },
	{ cls: 'II', subject: 'Hindi', title: 'Hindi Pathmala — 2', publisher: 'Goyal Brothers' },
	{ cls: 'II', subject: 'EVS', title: 'My World Around Me — 2', publisher: 'Viva Education' },
	// Class III
	{ cls: 'III', subject: 'English', title: 'New Oxford Modern English — 3', publisher: 'Oxford University Press' },
	{ cls: 'III', subject: 'Mathematics', title: 'Maths Mate — Class 3', publisher: 'Ratna Sagar' },
	{ cls: 'III', subject: 'Hindi', title: 'Hindi Pathmala — 3', publisher: 'Goyal Brothers' },
	{ cls: 'III', subject: 'EVS', title: 'Looking Around — 3', publisher: 'NCERT' },
	// Class IV
	{ cls: 'IV', subject: 'English', title: 'New Oxford Modern English — 4', publisher: 'Oxford University Press' },
	{ cls: 'IV', subject: 'Mathematics', title: 'Maths Mate — Class 4', publisher: 'Ratna Sagar' },
	{ cls: 'IV', subject: 'Hindi', title: 'Hindi Pathmala — 4', publisher: 'Goyal Brothers' },
	{ cls: 'IV', subject: 'EVS', title: 'Looking Around — 4', publisher: 'NCERT' },
	// Class V
	{ cls: 'V', subject: 'English', title: 'New Oxford Modern English — 5', publisher: 'Oxford University Press' },
	{ cls: 'V', subject: 'Mathematics', title: 'Maths Mate — Class 5', publisher: 'Ratna Sagar' },
	{ cls: 'V', subject: 'Hindi', title: 'Hindi Pathmala — 5', publisher: 'Goyal Brothers' },
	{ cls: 'V', subject: 'EVS', title: 'Looking Around — 5', publisher: 'NCERT' },
	// Class VI
	{ cls: 'VI', subject: 'English', title: 'Honeysuckle — English Textbook', publisher: 'NCERT' },
	{ cls: 'VI', subject: 'Mathematics', title: 'Mathematics — Class VI', publisher: 'NCERT' },
	{ cls: 'VI', subject: 'Science', title: 'Science — Class VI', publisher: 'NCERT' },
	{ cls: 'VI', subject: 'Social Science', title: 'Our Pasts, Our Environment — VI', publisher: 'NCERT' },
	// Class VII
	{ cls: 'VII', subject: 'English', title: 'Honeycomb — English Textbook', publisher: 'NCERT' },
	{ cls: 'VII', subject: 'Mathematics', title: 'Mathematics — Class VII', publisher: 'NCERT' },
	{ cls: 'VII', subject: 'Science', title: 'Science — Class VII', publisher: 'NCERT' },
	{ cls: 'VII', subject: 'Social Science', title: 'Our Pasts II, Our Environment — VII', publisher: 'NCERT' },
	// Class VIII
	{ cls: 'VIII', subject: 'English', title: 'Honeydew — English Textbook', publisher: 'NCERT' },
	{ cls: 'VIII', subject: 'Mathematics', title: 'Mathematics — Class VIII', publisher: 'NCERT' },
	{ cls: 'VIII', subject: 'Science', title: 'Science — Class VIII', publisher: 'NCERT' },
	{ cls: 'VIII', subject: 'Social Science', title: 'Our Pasts III, Social & Political Life — VIII', publisher: 'NCERT' },
	// Class IX
	{ cls: 'IX', subject: 'English', title: 'Beehive — English Textbook', publisher: 'NCERT' },
	{ cls: 'IX', subject: 'Mathematics', title: 'Mathematics — Class IX', publisher: 'NCERT' },
	{ cls: 'IX', subject: 'Science', title: 'Science — Class IX', publisher: 'NCERT' },
	{ cls: 'IX', subject: 'Social Science', title: 'India and the Contemporary World — IX', publisher: 'NCERT' },
	// Class X
	{ cls: 'X', subject: 'English', title: 'First Flight — English Textbook', publisher: 'NCERT' },
	{ cls: 'X', subject: 'Mathematics', title: 'Mathematics — Class X', publisher: 'NCERT' },
	{ cls: 'X', subject: 'Science', title: 'Science — Class X', publisher: 'NCERT' },
	{ cls: 'X', subject: 'Social Science', title: 'India and the Contemporary World II — X', publisher: 'NCERT' },
	// Class XI
	{ cls: 'XI', subject: 'English', title: 'Hornbill — English Textbook', publisher: 'NCERT' },
	{ cls: 'XI', subject: 'Accountancy', title: 'Accountancy — Class XI (Part I & II)', publisher: 'NCERT' },
	// Class XII
	{ cls: 'XII', subject: 'English', title: 'Flamingo — English Textbook', publisher: 'NCERT' },
	{ cls: 'XII', subject: 'Accountancy', title: 'Accountancy — Class XII (Part I & II)', publisher: 'NCERT' }
];

// Tricent Public School — school timings and fee data (demo figures for client presentation).
// Tuition matches the Admissions page fee structure: Nursery–KG ₹1,800, Classes I–V ₹2,200,
// Classes VI–VIII ₹2,800, Classes IX–XII ₹3,500 per month; transport ₹1,200 per month (optional).

export const bellSchedule = [
	{ period: 'Assembly', time: '8:00 – 8:20 AM', activity: 'Morning assembly — prayer, thought of the day, news and announcements' },
	{ period: 'Period 1', time: '8:20 – 9:00 AM', activity: 'First teaching period' },
	{ period: 'Period 2', time: '9:00 – 9:40 AM', activity: 'Second teaching period' },
	{ period: 'Period 3', time: '9:40 – 10:20 AM', activity: 'Third teaching period' },
	{ period: 'Period 4', time: '10:20 – 11:00 AM', activity: 'Fourth teaching period' },
	{ period: 'Short Break', time: '11:00 – 11:10 AM', activity: 'Short break' },
	{ period: 'Period 5', time: '11:10 – 11:50 AM', activity: 'Fifth teaching period' },
	{ period: 'Period 6', time: '11:50 AM – 12:30 PM', activity: 'Sixth teaching period' },
	{ period: 'Lunch Break', time: '12:30 – 1:00 PM', activity: 'Lunch break' },
	{ period: 'Period 7', time: '1:00 – 1:40 PM', activity: 'Seventh teaching period' },
	{ period: 'Period 8', time: '1:40 – 2:20 PM', activity: 'Eighth teaching period' },
	{ period: 'Dispersal', time: '2:20 – 2:30 PM', activity: 'Dispersal — buses leave campus by 2:45 PM' }
];

export const termTimings = [
	{
		term: 'Summer Timings',
		schoolHours: '8:00 AM – 2:30 PM',
		assembly: '8:00 AM',
		dispersal: '2:30 PM',
		note: 'April to October. Pre-Primary dispersal at 12:30 PM. Buses leave campus by 2:45 PM.'
	},
	{
		term: 'Winter Timings',
		schoolHours: '8:30 AM – 3:00 PM',
		assembly: '8:30 AM',
		dispersal: '3:00 PM',
		note: 'November to March. Winter uniform is compulsory from 1 December. Pre-Primary dispersal at 1:00 PM.'
	}
];

export const feeByClass = [
	{ cls: 'Nursery', tuition: 1800, transport: 1200, termMonths: 3 },
	{ cls: 'KG', tuition: 1800, transport: 1200, termMonths: 3 },
	{ cls: 'I', tuition: 2200, transport: 1200, termMonths: 3 },
	{ cls: 'II', tuition: 2200, transport: 1200, termMonths: 3 },
	{ cls: 'III', tuition: 2200, transport: 1200, termMonths: 3 },
	{ cls: 'IV', tuition: 2200, transport: 1200, termMonths: 3 },
	{ cls: 'V', tuition: 2200, transport: 1200, termMonths: 3 },
	{ cls: 'VI', tuition: 2800, transport: 1200, termMonths: 3 },
	{ cls: 'VII', tuition: 2800, transport: 1200, termMonths: 3 },
	{ cls: 'VIII', tuition: 2800, transport: 1200, termMonths: 3 },
	{ cls: 'IX', tuition: 3500, transport: 1200, termMonths: 3 },
	{ cls: 'X', tuition: 3500, transport: 1200, termMonths: 3 },
	{ cls: 'XI', tuition: 3500, transport: 1200, termMonths: 3 },
	{ cls: 'XII', tuition: 3500, transport: 1200, termMonths: 3 }
];

// Virtual tour spots for Tricent Public School (demo data for client presentation).
// x / y are percent coordinates (0-100) within the campus map container.

export const tourSpots = [
	{
		id: 'main-building',
		name: 'Main Building',
		x: 26,
		y: 27,
		photo: '/images/hero-campus.webp',
		desc: 'The heart of the campus — 48 classrooms across three floors, the school office, the Principal’s room and the staff rooms, all arranged around a shaded central courtyard.',
		fact: '48 classrooms, average size 20 x 24 ft'
	},
	{
		id: 'library',
		name: 'Library',
		x: 63,
		y: 24,
		photo: '/images/library.webp',
		desc: 'A quiet reading hall with over 12,000 books, a reference section, newspapers and magazines, and a weekly library period for every class from I to XII.',
		fact: '12,000+ books and a dedicated reading hall'
	},
	{
		id: 'science-labs',
		name: 'Science Labs',
		x: 63,
		y: 52,
		photo: '/images/science-lab.webp',
		desc: 'Three separate laboratories for Physics, Chemistry and Biology, each with a demonstration bench, safety equipment and a lab assistant — plus the robotics club workshop.',
		fact: '3 labs with a zero-incident safety record for 5 years'
	},
	{
		id: 'playground',
		name: 'Playground',
		x: 85,
		y: 50,
		photo: '/images/sports-day.jpg',
		desc: 'The sports ground with a basketball court, cricket nets and an athletics track, where morning fitness, house matches and the Annual Sports Day take place.',
		fact: 'Basketball court, cricket nets and athletics track'
	},
	{
		id: 'auditorium',
		name: 'Auditorium',
		x: 21,
		y: 59,
		photo: '/images/assembly.jpg',
		desc: 'A 500-seat auditorium with a stage, lighting and sound, home to morning assembly on special days, the Annual Day, debates, concerts and prize distributions.',
		fact: '500 seats with stage, lighting and sound'
	},
	{
		id: 'bus-bay',
		name: 'Bus Bay',
		x: 50,
		y: 89,
		photo: '/images/school-bus.jpg',
		desc: 'The covered bus bay where the school’s 15 GPS-enabled buses pick up and drop off students, supervised by teachers and a lady attendant on every bus.',
		fact: '15 GPS-enabled buses on 6 routes'
	}
];
