// Playwright verification for Tricent Public School (local preview).
// Checks horizontal overflow, console errors, failed requests, screenshots,
// and key interactions. Run: BASE_URL=http://127.0.0.1:4174 node scripts/verify.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/.npm-global/lib/node_modules/playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4173';
const VIEWPORTS = [360, 390, 768, 1024, 1440];
const ROUTES = ['/', '/about', '/academics', '/facilities', '/admissions', '/gallery', '/news-events', '/contact', '/parent-login', '/careers'];
const results = { overflow: [], errors: [], failedRequests: [], interactions: [], screenshots: [] };

const browser = await chromium.launch();
const context = await browser.newContext({ ignoreHTTPSErrors: true });

async function checkRoute(route, width) {
	const page = await context.newPage({ viewport: { width, height: 900 } });
	const errors = [];
	const failed = [];
	page.on('pageerror', (e) => errors.push(String(e)));
	page.on('console', (m) => {
		if (m.type() === 'error') errors.push(m.text());
	});
	page.on('requestfailed', (r) => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
	page.on('response', (r) => {
		if (r.status() >= 400) failed.push(`${r.url()} :: HTTP ${r.status()}`);
	});
	await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
	await page.waitForTimeout(800);
	const overflow = await page.evaluate(() => {
		const de = document.documentElement;
		return { scrollWidth: de.scrollWidth, innerWidth: window.innerWidth, over: de.scrollWidth > window.innerWidth + 1 };
	});
	results.overflow.push({ route, width, ...overflow });
	if (errors.length) results.errors.push({ route, width, errors });
	if (failed.length) results.failedRequests.push({ route, width, failed });
	return page;
}

// 1. Overflow sweep
for (const route of ROUTES) {
	for (const w of VIEWPORTS) {
		const page = await checkRoute(route, w);
		await page.close();
	}
}

// 2. Screenshots (home 390 + 1440, admissions 390)
const shots = [
	['/', 390, 'home-390.png'],
	['/', 1440, 'home-1440.png'],
	['/admissions', 390, 'admissions-390.png'],
	['/about', 1440, 'about-1440.png'],
	['/gallery', 1440, 'gallery-1440.png']
];
for (const [route, w, name] of shots) {
	const page = await context.newPage({ viewport: { width: w, height: 900 } });
	await page.goto(BASE + route, { waitUntil: 'networkidle' });
	await page.waitForTimeout(1200);
	// scroll through to trigger reveals
	await page.evaluate(async () => {
		await new Promise((res) => {
			let y = 0;
			const t = setInterval(() => {
				y += 700;
				window.scrollTo(0, y);
				if (y >= document.body.scrollHeight) {
					clearInterval(t);
					window.scrollTo(0, 0);
					res();
				}
			}, 120);
		});
	});
	await page.waitForTimeout(600);
	await page.screenshot({ path: `scripts/shots/${name}`, fullPage: true });
	results.screenshots.push(name);
	await page.close();
}

// 3. Interactions
async function interact(name, fn) {
	const page = await context.newPage({ viewport: { width: 390, height: 844 } });
	try {
		const ok = await fn(page);
		results.interactions.push({ name, ok: !!ok });
	} catch (e) {
		results.interactions.push({ name, ok: false, error: String(e).slice(0, 300) });
	}
	await page.close();
}

await interact('mobile menu opens + Academics submenu', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Open menu').click();
	await page.waitForTimeout(300);
	await page.getByLabel('Toggle Academics submenu').click();
	await page.waitForTimeout(300);
	return await page.getByText('Pre-Primary (Nursery – KG)').first().isVisible();
});

await interact('hero next arrow changes slide', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	const first = await page.locator('h1').first().innerText();
	await page.getByLabel('Next slide').click();
	await page.waitForTimeout(1300);
	const second = await page.locator('h1').first().innerText();
	return first !== second;
});

await interact('admissions FAQ toggles + enquiry form submits', async (page) => {
	await page.goto(BASE + '/admissions', { waitUntil: 'networkidle' });
	await page.getByText('Is there an entrance test?').click();
	await page.waitForTimeout(400);
	const faqVisible = await page.getByText('Nursery to Class V admissions are through a friendly interaction').isVisible();
	await page.locator('#parent-name').fill('Test Parent');
	await page.locator('#phone').fill('9876543210');
	await page.locator('#child-class').selectOption('VI');
	await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
	await page.waitForTimeout(400);
	const ok = await page.getByText(/Thank you, Test Parent/).isVisible();
	return faqVisible && ok;
});

await interact('gallery filter + lightbox', async (page) => {
	await page.goto(BASE + '/gallery', { waitUntil: 'networkidle' });
	await page.getByRole('button', { name: 'Sports', exact: true }).click();
	await page.waitForTimeout(300);
	await page.locator('button:has(img[alt="Basketball"])').first().click();
	await page.waitForTimeout(400);
	const lb = await page.getByRole('dialog', { name: 'Photo viewer' }).isVisible();
	await page.getByLabel('Close photo viewer').click();
	await page.waitForTimeout(300);
	return lb;
});

await interact('parent login demo → dashboard', async (page) => {
	await page.goto(BASE + '/parent-login', { waitUntil: 'networkidle' });
	await page.locator('#login-email').fill('parent@example.com');
	await page.locator('#login-password').fill('demo1234');
	await page.getByRole('button', { name: 'LOGIN' }).click();
	await page.waitForTimeout(400);
	return await page.getByText('Aarav Verma').isVisible();
});

await interact('header search finds fees', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Search').click();
	await page.waitForTimeout(300);
	await page.locator('input[type="search"]').fill('fees');
	await page.waitForTimeout(300);
	return await page.getByText('Fee Structure').first().isVisible();
});

await browser.close();

// Filter out the known VM-blocked Google Fonts request from failures
const knownBlocked = (u) => u.includes('fonts.googleapis.com') || u.includes('fonts.gstatic.com');
results.failedRequests = results.failedRequests
	.map((r) => ({ ...r, failed: r.failed.filter((f) => !knownBlocked(f)) }))
	.filter((r) => r.failed.length > 0);

const badOverflow = results.overflow.filter((o) => o.over);
console.log(JSON.stringify({ ...results, badOverflow }, null, 2));
console.log(
	`\nSUMMARY: overflow issues ${badOverflow.length}/${results.overflow.length} · page errors ${results.errors.length} · failed requests (excl. Google Fonts) ${results.failedRequests.length} · interactions ${results.interactions.filter((i) => i.ok).length}/${results.interactions.length} passed`
);
