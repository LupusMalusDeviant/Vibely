// Sitemap für beide Sprachfassungen, mit hreflang-Verweisen. Wird beim Build zu dist/sitemap.xml.
// GitHub Pages liest keine robots.txt unterhalb der Domain-Wurzel: die Sitemap einmal in der
// Google Search Console einreichen (README, Abschnitt „Auffindbarkeit“).
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const root = new URL(`${base}/`, site);
  const pages = { en: root.href, de: new URL('de/', root).href };
  const alt = Object.entries(pages)
    .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pages.en}"/>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(pages)
  .map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alt}\n  </url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
