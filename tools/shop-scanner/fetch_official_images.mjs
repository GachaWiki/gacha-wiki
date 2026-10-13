// Manual pipeline image fetcher (used while the Amazon Creators API is not
// available): pulls the official product artwork from en.ws-tcg.com product
// pages, converts to webp and stages it for R2 under shop/<id>.webp.
// Usage:
//   bun tools/shop-scanner/fetch_official_images.mjs             stage only
//   bun tools/shop-scanner/fetch_official_images.mjs --upload    upload + verify
// Input: official-batch.json = [{ id, url, image? }] where url is the official
// product page. Without an explicit image the first wp-content/uploads image
// on the page is used (often the hero banner), so pin the BP-box/TD art when
// the page has one.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';
import { R2_BASE, R2_BUCKET, REPO_ROOT } from './lib.mjs';

const HERE = new URL('.', import.meta.url);
const toPath = (url) => new URL(url, HERE).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const UPLOAD = process.argv.includes('--upload');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';

const batch = JSON.parse(fs.readFileSync(toPath('official-batch.json'), 'utf8'));
const stageDir = toPath('r2_upload/shop');
fs.mkdirSync(stageDir, { recursive: true });

let dims;
try {
  dims = JSON.parse(fs.readFileSync(toPath('image-dims.json'), 'utf8'));
} catch {
  dims = {};
}

for (const item of batch) {
  let imgUrl = item.image;
  if (!imgUrl) {
    const html = await (await fetch(item.url, { headers: { 'user-agent': UA } })).text();
    const m = html.match(/src="(https:\/\/en\.ws-tcg\.com\/wordpress\/wp-content\/uploads\/[^"]+)"/);
    if (!m) {
      console.error(`[fail] no product image found on ${item.url}`);
      continue;
    }
    imgUrl = m[1];
  }
  const imgRes = await fetch(imgUrl, { headers: { 'user-agent': UA } });
  if (!imgRes.ok) {
    console.error(`[fail] image fetch ${imgRes.status} ${m[1]}`);
    continue;
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const outFile = path.join(stageDir, `${item.id}.webp`);
  await sharp(buf)
    .resize({ width: 500, height: 500, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outFile);
  const meta = await sharp(outFile).metadata();
  dims[item.id] = { width: meta.width, height: meta.height };
  console.log(`[ok] ${item.id}.webp (${meta.width}x${meta.height}) <- ${imgUrl.split('/').pop()}`);
}

fs.writeFileSync(toPath('image-dims.json'), JSON.stringify(dims, null, 2));

if (UPLOAD) {
  for (const item of batch) {
    const file = path.join(stageDir, `${item.id}.webp`);
    if (!fs.existsSync(file)) continue;
    const key = `shop/${item.id}.webp`;
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
  for (const item of batch) {
    const url = `${R2_BASE}/shop/${item.id}.webp`;
    const res = await fetch(url, { method: 'HEAD', headers: { 'user-agent': UA } });
    console.log(`[${res.status === 200 ? 'ok' : 'fail'}] ${res.status} ${url}`);
  }
} else {
  console.log(`\nStaged images in tools/shop-scanner/r2_upload/shop/. Re-run with --upload to push to R2.`);
}
