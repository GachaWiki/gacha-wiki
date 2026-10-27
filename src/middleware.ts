// Dev-only image proxy: rewrites k2b1c5ab57ed98e51.gachawiki.info references to /__gwimg/*
// and forwards them with the signed origin header, so `bun run dev` previews
// show real images (the gate cookie cannot travel to localhost). No effect in production.
import { defineMiddleware } from 'astro:middleware';

const ORIGIN_SIG = '05392a88685c21317544b049d61934f539ff284eef079d20f842532d521b881f';
const IMG_HOST = 'https://k2b1c5ab57ed98e51.gachawiki.info/';

export const onRequest = defineMiddleware(async (context, next) => {
  if (!import.meta.env.DEV) return next();

  const url = new URL(context.request.url);
  if (url.pathname.startsWith('/__gwimg/')) {
    const target = IMG_HOST + decodeURIComponent(url.pathname.slice('/__gwimg/'.length)) + url.search;
    const upstream = await fetch(target);
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
