// Tricent Public School — shared site data (demo/mock content for client presentation).
// Real names, fees, dates and photos to be replaced by the school before launch.

export const school = {
	name: 'Tricent Public School',
	tagline: 'Inspiring Excellence, Building Futures',
	motto: 'Nurturing young minds with strong values, academic excellence and holistic development.',
	phoneDisplay: '+91 75440 00044',
	phoneHref: 'tel:+917544000044',
	email: 'info@tricentpublicschool.com',
	address: 'Beldari, Simri Bakhtiyarpur, Patna – 801113, Bihar',
	hours: 'Mon – Sat: 8:00 AM – 4:00 PM',
	affiliation: 'CBSE Affiliation No. 330000 (Demo)',
	established: 2005
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{
		label: 'About Us',
		href: '/about',
		children: [
			{ label: 'Our Faculty', href: '/faculty' },
			{ label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
			{ label: 'Alumni', href: '/alumni' },
			{ label: 'Houses', href: '/houses' }
		]
	},
	{
		label: 'Academics',
		href: '/academics',
		children: [
			{ label: 'Pre-Primary (Nursery – KG)', href: '/academics#pre-primary' },
			{ label: 'Primary (I – V)', href: '/academics#primary' },
			{ label: 'Middle School (VI – VIII)', href: '/academics#middle' },
			{ label: 'Secondary (IX – X)', href: '/academics#secondary' },
			{ label: 'Senior Secondary (XI – XII)', href: '/academics#senior' },
			{ label: 'Board Results', href: '/results' },
			{ label: 'Academic Calendar', href: '/academic-calendar' },
			{ label: 'Book List', href: '/book-list' },
			{ label: 'Scholarships', href: '/scholarships' },
			{ label: 'School Timings', href: '/school-timings' }
		]
	},
	{
		label: 'Facilities',
		href: '/facilities',
		children: [
			{ label: 'Smart Classrooms', href: '/facilities#smart-classrooms' },
			{ label: 'Science Laboratories', href: '/facilities#science-labs' },
			{ label: 'Library', href: '/facilities#library' },
			{ label: 'Computer Lab', href: '/facilities#computer-lab' },
			{ label: 'Transport', href: '/facilities#transport' },
			{ label: 'Sports & Activities', href: '/facilities#sports' },
			{ label: 'Library', href: '/library' },
			{ label: 'Sports', href: '/sports' },
			{ label: 'Virtual Tour', href: '/virtual-tour' },
			{ label: 'Student Life', href: '/student-life' }
		]
	},
	{
		label: 'Admissions',
		href: '/admissions',
		children: [
			{ label: 'Admission Process', href: '/admissions#process' },
			{ label: 'Fee Structure', href: '/admissions#fees' },
			{ label: 'Important Dates', href: '/admissions#dates' },
			{ label: 'Enquire Now', href: '/admissions#enquire' },
			{ label: 'Downloads', href: '/downloads' },
			{ label: 'Transport', href: '/transport' },
			{ label: 'FAQ', href: '/faq' },
			{ label: 'Pay Fees Online', href: '/pay-fees' },
			{ label: 'Prospectus', href: '/prospectus' },
			{ label: 'हिंदी में प्रवेश', href: '/admissions-hindi' }
		]
	},
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Contact Us', href: '/contact' }
];

export const stats = [
	{ value: 'CBSE', label: 'Affiliation', icon: 'shield' },
	{ value: '1:20', label: 'Teacher Ratio', icon: 'users' },
	{ value: '20+', label: 'Years of Excellence', icon: 'award', count: 20, suffix: '+' },
	{ value: '100%', label: 'Commitment', icon: 'target', count: 100, suffix: '%' }
];

export const features = [
	{
		icon: 'monitor',
		title: 'Smart Classrooms',
		text: 'Technology-enabled learning for all'
	},
	{
		icon: 'users',
		title: 'Experienced Faculty',
		text: 'Qualified mentors who inspire'
	},
	{
		icon: 'bus',
		title: 'Safe Transport',
		text: 'GPS-enabled buses for secure travel'
	},
	{
		icon: 'lotus',
		title: 'Holistic Development',
		text: 'Mind · Body · Values — balanced growth'
	},
	{
		icon: 'flask',
		title: 'Modern Labs',
		text: 'Well-equipped labs for practical learning'
	}
];

export const academics = [
	{
		icon: 'book',
		title: 'CBSE Curriculum',
		text: 'Comprehensive curriculum from Nursery to Class XII designed for holistic growth.'
	},
	{
		icon: 'gradcap',
		title: 'Experienced Faculty',
		text: 'Our educators inspire, mentor and bring out the best in every child.'
	},
	{
		icon: 'bulb',
		title: 'Innovative Learning',
		text: 'Activity-based, experiential and technology-integrated learning approach.'
	},
	{
		icon: 'trophy',
		title: 'Excellence Driven',
		text: 'Focus on academics, sports, arts and life skills for all-round development.'
	}
];

export const stages = [
	{
		id: 'pre-primary',
		stage: 'Pre-Primary',
		classes: 'Nursery – KG',
		age: '3 – 5 yrs',
		text: 'A joyful, play-based foundation where curiosity leads. Phonics, numbers, rhymes, stories, art and outdoor play build confidence and early language skills in a safe, caring space.',
		highlights: ['Play-way learning', 'Phonics & storytelling', 'Art, music & movement', 'Safe, caring classrooms']
	},
	{
		id: 'primary',
		stage: 'Primary',
		classes: 'Classes I – V',
		age: '6 – 10 yrs',
		text: 'Strong foundations in English, Hindi, Mathematics, EVS and computers, taught through activity corners, reading programmes and hands-on projects that make learning stick.',
		highlights: ['Reading programme', 'Activity-based Maths', 'Computer basics', 'Value education']
	},
	{
		id: 'middle',
		stage: 'Middle School',
		classes: 'Classes VI – VIII',
		age: '11 – 13 yrs',
		text: 'Deeper subject learning in Science, Social Science, Mathematics and languages, with lab work, coding clubs, sports and leadership roles that build independence and teamwork.',
		highlights: ['Lab-based Science', 'Coding & robotics club', 'Third language', 'Clubs & houses']
	},
	{
		id: 'secondary',
		stage: 'Secondary',
		classes: 'Classes IX – X',
		age: '14 – 15 yrs',
		text: 'A focused CBSE programme with structured board preparation — regular assessments, remedial support, career counselling and stress-free exam guidance for Classes IX and X.',
		highlights: ['Board exam preparation', 'Career counselling', 'Remedial classes', 'Olympiads & NTSE']
	},
	{
		id: 'senior',
		stage: 'Senior Secondary',
		classes: 'Classes XI – XII',
		age: '16 – 17 yrs',
		text: 'Science, Commerce and Humanities streams with dedicated labs, competitive-exam mentoring for JEE / NEET / CUET / CA Foundation, and one-to-one guidance towards college and career.',
		highlights: ['Science · Commerce · Humanities', 'JEE / NEET / CUET mentoring', 'College counselling', 'Research projects']
	}
];

export const facilities = [
	{
		id: 'smart-classrooms',
		icon: 'monitor',
		title: 'Smart Classrooms',
		text: 'Digital classrooms with smart boards and audio-visual aids.',
		detail:
			'Every classroom from Class I upwards is a smart classroom — interactive digital boards, audio-visual lessons and recorded revision content that make abstract concepts easy to see and remember.',
		image: '/images/smart-classroom.jpg'
	},
	{
		id: 'science-labs',
		icon: 'flask',
		title: 'Science Laboratories',
		text: 'Well-equipped labs to encourage curiosity and innovation.',
		detail:
			'Separate Physics, Chemistry and Biology laboratories with modern apparatus, safety equipment and trained lab staff, so students learn science by doing — not just by reading.',
		image: '/images/science-lab.webp'
	},
	{
		id: 'library',
		icon: 'book',
		title: 'Library',
		text: 'A rich collection of books to nurture reading and research.',
		detail:
			'Our library holds 12,000+ books, reference material, journals and a quiet reading hall. Weekly library periods and a reading challenge keep every child turning pages.',
		image: '/images/library.webp'
	},
	{
		id: 'transport',
		icon: 'bus',
		title: 'Transport',
		text: 'Safe, reliable and GPS-enabled transport across routes.',
		detail:
			'15 GPS-enabled buses cover Simri Bakhtiyarpur, Patna and nearby towns, each with a trained driver, a lady attendant and live tracking shared with parents.',
		image: '/images/school-bus.jpg'
	},
	{
		id: 'computer-lab',
		icon: 'laptop',
		title: 'Computer Lab',
		text: 'Hands-on computing, coding and digital literacy for every class.',
		detail:
			'40 networked computers with high-speed internet, coding and robotics kits, and digital-literacy lessons from Class I — preparing students for a digital world, safely.',
		image: '/images/computer-lab.jpg'
	},
	{
		id: 'sports',
		icon: 'trophy',
		title: 'Sports & Fitness',
		text: 'Basketball, cricket, athletics, karate and yoga on a green campus.',
		detail:
			'A full-size playground, basketball court, cricket nets, karate and yoga training, and an annual sports day — because a healthy body builds a focused mind.',
		image: '/images/basketball.webp'
	},
	{
		id: 'auditorium',
		icon: 'music',
		title: 'Auditorium & Cultural Stage',
		text: 'Annual day, dance, drama and music on a stage built for applause.',
		detail:
			'A 500-seat auditorium hosts the annual day, cultural festivals, debates and inter-house competitions, with dedicated music, dance and art rooms for practice.',
		image: '/images/dance.png'
	},
	{
		id: 'activities',
		icon: 'shield',
		title: 'Activity & Self-Defence',
		text: 'Karate, scouts, NCC and clubs that build discipline and courage.',
		detail:
			'Karate and self-defence training, Scouts & Guides, NCC, and student clubs — from robotics to eco-club — give every child a place to lead and belong.',
		image: '/images/karate.jpg'
	}
];

export const galleryItems = [
	{ src: '/images/hero-campus.webp', title: 'Our Campus', category: 'Campus' },
	{ src: '/images/about-students.webp', title: 'Proud Tricentians', category: 'Campus' },
	{ src: '/images/assembly.jpg', title: 'Morning Assembly', category: 'Campus' },
	{ src: '/images/smart-classroom.jpg', title: 'Smart Classroom', category: 'Classroom' },
	{ src: '/images/science-lab.webp', title: 'Science Lab', category: 'Classroom' },
	{ src: '/images/academics-classroom.webp', title: 'Learning Together', category: 'Classroom' },
	{ src: '/images/library.webp', title: 'Library', category: 'Classroom' },
	{ src: '/images/computer-lab.jpg', title: 'Computer Lab', category: 'Classroom' },
	{ src: '/images/basketball.webp', title: 'Basketball', category: 'Sports' },
	{ src: '/images/sports-day.jpg', title: 'Annual Sports Day', category: 'Sports' },
	{ src: '/images/karate.jpg', title: 'Karate Training', category: 'Sports' },
	{ src: '/images/dance.png', title: 'Cultural Performance', category: 'Cultural' }
];

export const newsItems = [
	{
		slug: 'admissions-open-2026-27',
		date: '12 Nov 2026',
		tag: 'Admissions',
		title: 'Admissions Open for Academic Year 2026–27',
		text: 'Applications for Nursery to Class IX and XI are now open. Limited seats — early applicants get priority for the entrance interaction.',
		image: '/images/about-students.webp'
	},
	{
		slug: 'class-x-results-100-percent',
		date: '28 Oct 2026',
		tag: 'Results',
		title: 'Class X CBSE Results: 100% Pass, 32 Students Above 90%',
		text: 'Our Class X batch recorded a 100% pass rate with the school topper scoring 98.2%. Congratulations to our students and teachers.',
		image: '/images/academics-classroom.webp'
	},
	{
		slug: 'basketball-championship-win',
		date: '18 Oct 2026',
		tag: 'Sports',
		title: 'Tricent Wins Inter-School Basketball Championship',
		text: 'Our U-16 basketball team lifted the district inter-school trophy after a thrilling 42–38 final. Well played, champions!',
		image: '/images/basketball.webp'
	},
	{
		slug: 'annual-day-2026',
		date: '02 Oct 2026',
		tag: 'Cultural',
		title: 'Annual Day 2026: A Grand Celebration of Talent',
		text: 'Dance, drama, music and awards — our Annual Day filled the auditorium with colour, applause and proud parents.',
		image: '/images/dance.png'
	},
	{
		slug: 'science-exhibition-2nd-prize',
		date: '14 Sep 2026',
		tag: 'Academics',
		title: 'National Science Exhibition: Our Model Wins 2nd Prize',
		text: 'A working model on rainwater harvesting by Class IX students won second prize at the district science exhibition.',
		image: '/images/science-lab.webp'
	},
	{
		slug: 'teachers-day-celebrations',
		date: '05 Sep 2026',
		tag: 'Events',
		title: "Teachers' Day Celebrations Across the Campus",
		text: 'Students honoured their teachers with cards, performances and a heartfelt assembly — thank you to every mentor at Tricent.',
		image: '/images/assembly.jpg'
	}
];

export const testimonials = [
	{
		quote:
			'We shifted our daughter to Tricent in Class VI, and the change has been remarkable — confident, curious and genuinely happy to go to school every morning.',
		name: 'Mrs. Sunita Verma',
		role: 'Parent, Class VIII'
	},
	{
		quote:
			'The teachers know every child by name and by strength. My son got personal attention for his board preparation and scored 94% in Class X.',
		name: 'Mr. Rakesh Kumar',
		role: 'Parent, Class XI'
	},
	{
		quote:
			'Tricent gave me more than marks — debate club, basketball and the annual stage taught me to speak up and lead. I still carry that confidence in college.',
		name: 'Ananya Singh',
		role: 'Alumna, Batch of 2023'
	},
	{
		quote:
			'Safe buses with GPS tracking, a caring staff and regular updates on the parent app — as a working mother, that peace of mind matters most.',
		name: 'Mrs. Priya Gupta',
		role: 'Parent, Class III'
	}
];

export const admissionSteps = [
	{
		n: '1',
		title: 'Enquire',
		text: 'Fill the enquiry form online or visit the school office. Our admissions team responds within 24 hours.'
	},
	{
		n: '2',
		title: 'Visit & Interact',
		text: 'Book a campus tour and a friendly interaction for your child (Nursery–KG: observation; Classes I+: simple assessment).'
	},
	{
		n: '3',
		title: 'Enrol',
		text: 'Submit documents, complete the fee formalities and collect the admission kit — welcome to the Tricent family!'
	}
];

export const importantDates = [
	{ event: 'Application forms available', date: '01 Dec 2026' },
	{ event: 'Last date to submit forms', date: '31 Jan 2027' },
	{ event: 'Interaction / assessment (Nursery – V)', date: '08 – 14 Feb 2027' },
	{ event: 'Entrance test (VI – IX, XI)', date: '15 Feb 2027' },
	{ event: 'First list of selected students', date: '22 Feb 2027' },
	{ event: 'Fee payment & confirmation', date: 'By 10 Mar 2027' },
	{ event: 'New session begins', date: '01 Apr 2027' }
];

export const feeStructure = [
	{ head: 'Registration (one-time, non-refundable)', nursery: '₹500', primary: '₹500', middle: '₹500', senior: '₹500' },
	{ head: 'Admission Fee (one-time)', nursery: '₹10,000', primary: '₹12,000', middle: '₹15,000', senior: '₹15,000' },
	{ head: 'Tuition Fee (per month)', nursery: '₹1,800', primary: '₹2,200', middle: '₹2,800', senior: '₹3,500' },
	{ head: 'Transport (per month, optional)', nursery: '₹1,200', primary: '₹1,200', middle: '₹1,200', senior: '₹1,200' }
];

export const admissionFaqs = [
	{
		q: 'What is the age criteria for Nursery admission?',
		a: 'For Nursery, the child should be 3+ years as on 31 March 2026. For KG, 4+ years, and for Class I, 5+ years as on 31 March 2026.'
	},
	{
		q: 'Is there an entrance test?',
		a: 'Nursery to Class V admissions are through a friendly interaction/observation — no written test. Classes VI to IX and XI have a simple written assessment in English, Mathematics and Science.'
	},
	{
		q: 'What documents are required?',
		a: 'Birth certificate, Aadhaar card of child and parents, 4 passport-size photographs, previous school report card (Class II onwards) and transfer certificate at the time of admission.'
	},
	{
		q: 'Does the school provide transport?',
		a: 'Yes. GPS-enabled buses cover Simri Bakhtiyarpur, Patna and nearby areas. Routes and stops are finalised at admission time, and parents get live tracking.'
	},
	{
		q: 'Are there any sibling or alumni concessions?',
		a: 'Yes — a 10% concession on tuition fee for the second sibling, and a 10% concession on the one-time admission fee for alumni wards.'
	},
	{
		q: 'Can I pay the fee online?',
		a: 'Yes. Fees can be paid online through UPI, net banking or card via the parent portal, or at the school office by cheque / demand draft.'
	}
];

export const faculty = [
	{ initials: 'AS', name: 'Dr. Ananya Sharma', role: 'Principal', note: 'M.Ed., Ph.D. (Education) — 22 yrs in school leadership.' },
	{ initials: 'RK', name: 'Mr. Rajesh Kumar', role: 'Vice Principal', note: 'M.Sc. Mathematics — leads academics and board preparation.' },
	{ initials: 'SM', name: 'Mrs. Sunita Mishra', role: 'Head, Primary Wing', note: 'B.Ed., Montessori trained — champion of joyful early learning.' },
	{ initials: 'AP', name: 'Mr. Amit Patel', role: 'Head, Science & Labs', note: 'M.Sc. Physics — runs the labs, robotics and science club.' }
];

export const timeline = [
	{ year: '2005', text: 'Tricent Public School founded in Beldari with 120 students and a simple dream — quality education for every child.' },
	{ year: '2010', text: 'CBSE affiliation granted; first Class X batch passes with 100% results.' },
	{ year: '2015', text: 'Senior Secondary wing opens with Science, Commerce and Humanities streams.' },
	{ year: '2019', text: 'Smart classrooms, science labs and GPS-enabled buses across all routes.' },
	{ year: '2023', text: 'New library, computer lab and 500-seat auditorium inaugurated.' },
	{ year: '2026', text: 'Admissions open for 2026–27 with 1,800+ students and 90+ educators.' }
];
