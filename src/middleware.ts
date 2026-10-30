// Dev-only image proxy: rewrites k2b1c5ab57ed98e51.gachawiki.info references to /__gwimg/*
// and forwards them to the R2 host, so `bun run dev` previews show real images.
// No effect in production.
import { defineMiddleware } from 'astro:middleware';

const IMG_HOST = 'https://k2b1c5ab57ed98e51.gachawiki.info/';

export const onRequest = defineMiddleware(async (context, next) => {
  if (!import.meta.env.DEV) return next();

  const url = new URL(context.request.url);
  if (url.pathname.startsWith('/__gwimg/')) {
    const target = IMG_HOST + decodeURIComponent(url.pathname.slice('/__gwimg/'.length)) + url.search;
    // The R2 host can hiccup transiently; never let a failed image fetch
    // 500 the whole page - retry once, then fall back to a blank pixel.
    let upstream: Response | null = null;
    for (let attempt = 0; attempt < 2 && !upstream; attempt++) {
      try {
        upstream = await fetch(target);
      } catch {
        upstream = null;
      }
    }
    if (!upstream) {
      const pixel = Buffer.from(
        'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        'base64'
      );
      return new Response(pixel, {
        status: 200,
        headers: { 'Content-Type': 'image/gif', 'Cache-Control': 'no-store' },
      });
    }
    const headers = new Headers();
    headers.set('Content-Type', upstream.headers.get('content-type') || 'application/octet-stream');
    headers.set('Cache-Control', 'no-store');
    return new Response(upstream.body, { status: upstream.status, headers });
  }

  const response = await next();
  const type = response.headers.get('content-type') || '';
  if (type.includes('text/html') || type.includes('text/css') || type.includes('javascript')) {
    const rewritten = (await response.text()).replaceAll(IMG_HOST, '/__gwimg/');
    return new Response(rewritten, { status: response.status, headers: response.headers });
  }
  return response;
});
