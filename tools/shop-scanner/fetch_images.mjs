// Download product images for the picked scan results, convert them to webp
// (sharp, already a project dependency) and stage them for R2 upload.
// Usage:
//   bun tools/shop-scanner/fetch_images.mjs             download + convert picked ASINs
//   bun tools/shop-scanner/fetch_images.mjs --upload    also upload to R2 and verify
// Picks come from tools/shop-scanner/picked.json (array of ASIN strings chosen
// from scan-results.json). Real image dimensions land in image-dims.json, which
// make_entries.mjs uses for accurate width/height attributes.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';
import { itemId, R2_BASE, R2_BUCKET, REPO_ROOT } from './lib.mjs';

const HERE = new URL('.', import.meta.url);
const UPLOAD = process.argv.includes('--upload');
const toPath = (url) => new URL(url, HERE).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const readJson = (name) => JSON.parse(fs.readFileSync(toPath(name), 'utf8'));
const scan = readJson('scan-results.json').results;
let picked;
try {
  picked = readJson('picked.json');
} catch {
  console.error('Create picked.json first: a JSON array of ASINs from scan-results.json.');
  process.exit(1);
}

const rows = scan.filter((r) => picked.includes(r.asin));
if (rows.length !== picked.length) {
  const missing = picked.filter((asin) => !scan.some((r) => r.asin === asin));
  console.error(`ASINs not in scan-results.json (re-run scan.mjs): ${missing.join(', ')}`);
  process.exit(1);
}

const stageDir = toPath('r2_upload/shop');
fs.mkdirSync(stageDir, { recursive: true });

let dims;
try {
  dims = readJson('image-dims.json');
} catch {
  dims = {};
}

for (const row of rows) {
  if (!row.image) {
    console.error(`[skip] ${row.asin} has no image in scan results`);
    continue;
  }
  const id = itemId(row);
  const res = await fetch(row.image, { headers: { 'user-agent': 'Mozilla/5.0 (gacha-wiki shop scanner)' } });
  if (!res.ok) {
    console.error(`[fail] image fetch ${res.status} for ${row.asin}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const outFile = path.join(stageDir, `${id}.webp`);
  await sharp(buf)
    .resize({ width: 500, height: 500, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outFile);
  const meta = await sharp(outFile).metadata();
  dims[id] = { width: meta.width, height: meta.height };
  console.log(`[ok] ${id}.webp (${meta.width}x${meta.height})`);
}

fs.writeFileSync(toPath('image-dims.json'), JSON.stringify(dims, null, 2));

if (UPLOAD) {
  for (const row of rows) {
    const id = itemId(row);
    const file = path.join(stageDir, `${id}.webp`);
    if (!fs.existsSync(file)) continue;
    const key = `shop/${id}.webp`;
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
  for (const row of rows) {
    const id = itemId(row);
    const url = `${R2_BASE}/shop/${id}.webp`;
    const res = await fetch(url, { method: 'HEAD', headers: { 'user-agent': 'Mozilla/5.0' } });
    console.log(`[${res.status === 200 ? 'ok' : 'fail'}] ${res.status} ${url}`);
  }
} else {
  console.log(`\nStaged ${rows.length} images in tools/shop-scanner/r2_upload/shop/.`);
  console.log('Re-run with --upload to push them to R2 and verify.');
}
