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
		title: 'Admissions Open for Academic Year 2026–27 — forms available at the school office and online',
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
		title: 'Admission Application Form 2026–27',
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
	'admissions-open-2026-27': [
		'Tricent Public School invites applications for Nursery to Class IX and Class XI for the academic year 2026–27. Application forms are available at the school office and through the online enquiry form on the Admissions page.',
		'Admission to Nursery to Class V is through a friendly interaction with the child, while Classes VI to IX and XI have a simple written assessment in English, Mathematics and Science. The first list of selected students will be published on 22 February 2026.',
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
