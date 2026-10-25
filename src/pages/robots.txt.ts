import type { APIRoute } from 'astro';
import { site } from '../config';
export const GET: APIRoute = () => new Response(site.domain ? `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
