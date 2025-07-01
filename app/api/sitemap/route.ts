import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://ecoclimatic.fr';
  const staticPages = [
    '',
    '/solutions',
    '/maintenance',
    '/installation',
    '/depannage',
  ];

  const urls = staticPages.map((path) => `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 