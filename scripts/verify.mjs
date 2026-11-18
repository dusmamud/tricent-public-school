// Playwright verification for Tricent Public School (round 2: 29 routes).
// Overflow sweep + console errors + interactions. Run: BASE_URL=http://127.0.0.1:4175 node scripts/verify.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/.npm-global/lib/node_modules/playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4175';
const VIEWPORTS = [390, 768, 1440];
const ROUTES = [
	'/',
	'/about',
	'/academics',
	'/facilities',
	'/admissions',
	'/gallery',
	'/news-events',
	'/news-events/admissions-open-2026-27',
	'/news-events/basketball-championship-win',
	'/contact',
	'/parent-login',
	'/careers',
	'/privacy-policy',
	'/terms',
	'/mandatory-disclosure',
	'/results',
	'/academic-calendar',
	'/faculty',
	'/notices',
	'/downloads',
	'/transport',
	'/testimonials',
	'/faq',
	'/sitemap'
];
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
	await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
	await page.waitForTimeout(700);
	const overflow = await page.evaluate(() => {
		const de = document.documentElement;
		return { scrollWidth: de.scrollWidth, innerWidth: window.innerWidth, over: de.scrollWidth > window.innerWidth + 1 };
	});
	results.overflow.push({ route, width, ...overflow });
	if (errors.length) results.errors.push({ route, width, errors });
	if (failed.length) results.failedRequests.push({ route, width, failed });
	return page;
}

for (const route of ROUTES) {
	for (const w of VIEWPORTS) {
		const page = await checkRoute(route, w);
		await page.close();
	}
}

// Viewport screenshots (instant scroll, no fullPage)
async function shot(name, route, w, y) {
	const page = await context.newPage({ viewport: { width: w, height: 900 } });
	await page.goto(BASE + route, { waitUntil: 'domcontentloaded' });
	await page.waitForTimeout(1000);
	await page.evaluate(async (yy) => {
		const h = document.body.scrollHeight;
		for (let s = 0; s <= h; s += 600) {
			window.scrollTo({ top: s, behavior: 'instant' });
			await new Promise((r) => setTimeout(r, 50));
		}
		window.scrollTo({ top: yy, behavior: 'instant' });
	}, y);
	await page.waitForTimeout(900);
	await page.screenshot({ path: `scripts/shots/${name}` });
	results.screenshots.push(name);
	await page.close();
}
await shot('home-390-ticker.png', '/', 390, 480);
await shot('home-390-quicklinks.png', '/', 390, 1750);
await shot('disclosure-1440.png', '/mandatory-disclosure', 1440, 0);
await shot('results-1440.png', '/results', 1440, 0);
await shot('news-detail-390.png', '/news-events/basketball-championship-win', 390, 0);

// Interactions
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

await interact('results year tab switches to 2023-24', async (page) => {
	await page.goto(BASE + '/results', { waitUntil: 'domcontentloaded' });
	await page.getByRole('tab', { name: '2023–24' }).click();
	await page.waitForTimeout(400);
	return await page.getByText('Ananya Singh').first().isVisible();
});

await interact('calendar filter Exam shows exams only', async (page) => {
	await page.goto(BASE + '/academic-calendar', { waitUntil: 'domcontentloaded' });
	await page.getByRole('button', { name: 'Exam', exact: true }).click();
	await page.waitForTimeout(300);
	const txt = await page.textContent('main, div');
	return txt.includes('Half-Yearly Examinations') && !txt.includes('Diwali break');
});

await interact('faculty filter Science shows Dr. Meera Bhatt', async (page) => {
	await page.goto(BASE + '/faculty', { waitUntil: 'domcontentloaded' });
	await page.getByRole('button', { name: 'Science', exact: true }).click();
	await page.waitForTimeout(300);
	return await page.getByText('Dr. Meera Bhatt').isVisible();
});

await interact('notices search finds sports day', async (page) => {
	await page.goto(BASE + '/notices', { waitUntil: 'domcontentloaded' });
	await page.locator('input[type="search"]').fill('sports day');
	await page.waitForTimeout(300);
	return await page.getByText('Annual Sports Day on 05 December 2026').isVisible();
});

await interact('downloads PDF link returns 200', async (page) => {
	const resp = await page.request.get(BASE + '/downloads/admission-form.pdf');
	return resp.status() === 200 && (resp.headers()['content-type'] || '').includes('pdf');
});

await interact('faq accordion opens transport answer', async (page) => {
	await page.goto(BASE + '/faq', { waitUntil: 'domcontentloaded' });
	await page.getByRole('button', { name: 'Transport', exact: true }).click();
	await page.waitForTimeout(300);
	await page.getByText('Which areas do the school buses cover?').click();
	await page.waitForTimeout(500);
	return await page.getByText('15 GPS-enabled buses cover Simri Bakhtiyarpur').isVisible();
});

await interact('home count-up stats reach 20+ and 100%', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
	await page.evaluate(() => window.scrollTo({ top: 1100, behavior: 'instant' }));
	await page.waitForTimeout(1800);
	const txt = await page.evaluate(() => document.body.innerText);
	return txt.includes('20+') && txt.includes('100%');
});

await interact('testimonials filter Alumni shows Rohit Verma', async (page) => {
	await page.goto(BASE + '/testimonials', { waitUntil: 'domcontentloaded' });
	await page.getByRole('button', { name: 'Alumni', exact: true }).click();
	await page.waitForTimeout(300);
	return await page.getByText('Rohit Verma').isVisible();
});

await interact('news card links to detail page', async (page) => {
	await page.goto(BASE + '/news-events', { waitUntil: 'domcontentloaded' });
	await page.getByText('Tricent Wins Inter-School Basketball Championship').click();
	await page.waitForTimeout(500);
	return page.url().includes('/news-events/basketball-championship-win');
});

await interact('header search finds Mandatory Disclosure', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
	await page.getByLabel('Search').click();
	await page.waitForTimeout(300);
	await page.locator('input[type="search"]').fill('disclosure');
	await page.waitForTimeout(300);
	return await page.getByText('Mandatory Disclosure').first().isVisible();
});

await browser.close();

// Filter out known VM-blocked external requests (Google Fonts + Maps embed)
const knownBlocked = (u) => u.includes('fonts.googleapis.com') || u.includes('fonts.gstatic.com') || u.includes('google.com/maps');
const isFontsErr = (e) => e.includes('ERR_TUNNEL_CONNECTION_FAILED') || e.includes('fonts.g');
results.failedRequests = results.failedRequests
	.map((r) => ({ ...r, failed: r.failed.filter((f) => !knownBlocked(f)) }))
	.filter((r) => r.failed.length > 0);
results.errors = results.errors
	.map((r) => ({ ...r, errors: r.errors.filter((e) => !isFontsErr(e)) }))
	.filter((r) => r.errors.length > 0);

const badOverflow = results.overflow.filter((o) => o.over);
console.log(JSON.stringify({ ...results, badOverflow }, null, 2));
console.log(
	`\nSUMMARY: overflow issues ${badOverflow.length}/${results.overflow.length} · page errors ${results.errors.length} · failed requests (excl. VM-blocked Fonts/Maps) ${results.failedRequests.length} · interactions ${results.interactions.filter((i) => i.ok).length}/${results.interactions.length} passed`
);
