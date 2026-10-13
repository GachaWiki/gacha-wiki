// Harvest sample-card preview images from official en.ws-tcg.com product
// pages and stage them for R2 under shop/cards/<id>-<n>.webp.
// Usage:
//   bun tools/shop-scanner/fetch_card_previews.mjs             stage only
//   bun tools/shop-scanner/fetch_card_previews.mjs --upload    upload + verify
// Input: preview-batch.json = [{ id, url }] (one entry per catalog item).
// A downloaded image counts as a card preview when its aspect ratio is
// portrait card-shaped (0.55-0.85 w/h): box art is wider, banners are 16:9.
// Output: card-previews.json = { [id]: [{ file, url, width, height }] }.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';
import { R2_BASE, R2_BUCKET, REPO_ROOT } from './lib.mjs';

const HERE = new URL('.', import.meta.url);
const toPath = (url) => new URL(url, HERE).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const UPLOAD = process.argv.includes('--upload');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';
const MAX_PREVIEWS = 3;
const MAX_CANDIDATES = 10;

const batch = JSON.parse(fs.readFileSync(toPath('preview-batch.json'), 'utf8'));
const stageDir = toPath('r2_upload/shop/cards');
fs.mkdirSync(stageDir, { recursive: true });

const manifest = {};
for (const item of batch) {
  // Entries may pin images directly (cardlist cardimages URLs) instead of
  // scraping the product page: pages with JS-only galleries need this.
  let urls = item.images;
  if (!urls) {
    const html = await (await fetch(item.url, { headers: { 'user-agent': UA } })).text();
    urls = [...new Set(
      [...html.matchAll(/src="(https:\/\/en\.ws-tcg\.com\/wordpress\/wp-content\/uploads\/[^"]+)"/g)]
        .map((m) => m[1])
    )].slice(0, MAX_CANDIDATES);
  }
  const picked = [];
  for (const imgUrl of urls) {
    if (picked.length >= MAX_PREVIEWS) break;
    let meta;
    try {
      const buf = Buffer.from(await (await fetch(imgUrl, { headers: { 'user-agent': UA } })).arrayBuffer());
      meta = await sharp(buf).metadata();
      const ratio = meta.width / meta.height;
      if (ratio < 0.55 || ratio > 0.85) continue; // not card-shaped
      const n = picked.length + 1;
      const outFile = path.join(stageDir, `${item.id}-${n}.webp`);
      await sharp(buf)
        .resize({ height: 420, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outFile);
      picked.push({
        file: `${item.id}-${n}.webp`,
        url: `${R2_BASE}/shop/cards/${item.id}-${n}.webp`,
        width: meta.width,
        height: meta.height,
      });
    } catch {
      // skip unreadable images
    }
  }
  manifest[item.id] = picked;
  console.log(`[ok] ${item.id}: ${picked.length} card previews`);
}

fs.writeFileSync(toPath('card-previews.json'), JSON.stringify(manifest, null, 2));

if (UPLOAD) {
  const files = Object.values(manifest).flat();
  for (const entry of files) {
    const file = path.join(stageDir, entry.file);
    const key = `shop/cards/${entry.file}`;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        execSync(`bunx wrangler r2 object put ${R2_BUCKET}/${key} --file "${file}" --remote`, {
          cwd: REPO_ROOT,
          stdio: 'inherit',
        });
        break;
      } catch {
        if (attempt === 2) console.error(`[fail] upload ${key} (wrangler crashed twice, retry manually)`);
      }
    }
  }
  for (const entry of files) {
    const res = await fetch(entry.url, { method: 'HEAD', headers: { 'user-agent': UA } });
    console.log(`[${res.status === 200 ? 'ok' : 'fail'}] ${res.status} ${entry.url}`);
  }
} else {
  console.log(`\nStaged previews in tools/shop-scanner/r2_upload/shop/cards/. Re-run with --upload to push to R2.`);
}
