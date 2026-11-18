/** Swap <html lang="en"> for lang="hi" on the Hindi admissions page. */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (event.url.pathname === '/admissions-hindi') {
				return html.replace('<html lang="en">', '<html lang="hi">');
			}
			return html;
		}
	});
	return response;
}
