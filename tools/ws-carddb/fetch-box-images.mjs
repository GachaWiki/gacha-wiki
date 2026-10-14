// Product box art for the card DB: picks the best product image from the cached
// official product pages (banners/playmats/deck diagrams excluded), resizes to
// webp and uploads to R2 ws-cards/<setId>/box.webp. See README for the harvest
// step (curl the /products/ + /products-archive/ listings first).
// Pick the best product image per cached product page, resize to webp and
// upload to R2 as ws-cards/<setId>/box.webp; rewrite set.boxImage to the R2 URL.
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import sharp from 'sharp';

const PAGES = 'C:/Users/Borin/ZCodeProject/ws-prod-pages';
const SETS_DIR = 'C:/Users/Borin/ZCodeProject/gacha-wiki/tools/ws-carddb/sets';
const STAGE = 'C:/Users/Borin/ZCodeProject/gacha-wiki/tools/ws-carddb/r2_upload/ws-boxes';
const R2_BASE = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';
const R2_BUCKET = 'gachawiki-images';
const REPO = 'C:/Users/Borin/ZCodeProject/gacha-wiki';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

function pickImage(code) {
  const f = path.join(PAGES, code.replace(/\/$/, '') + '_.html');
  if (!fs.existsSync(f)) return null;
  const html = fs.readFileSync(f, 'utf8');
  const cands = [...html.matchAll(/<img[^>]*src="(https:\/\/en\.ws-tcg\.com\/wordpress\/wp-content\/uploads\/[^"]+)"[^>]*>/g)]
    .map((m) => {
      const tag = m[0];
      return {
        url: m[1],
        name: m[1].split('/').pop().toLowerCase(),
        w: Number((tag.match(/width="(\d+)"/) || [])[1] || 0),
        h: Number((tag.match(/height="(\d+)"/) || [])[1] || 0),
      };
    })
    .filter((c) => c.w >= 200 && c.h >= 200); // skip icons
  const bad = /kumitate|playmat|1920x1080|now-on-sale|banner|decklist|deck-list|mat_|_mat|sleeve|binder|storage/;
  const good = cands.filter((c) => !bad.test(c.name) && !(c.w && c.h && c.w / c.h > 1.7));
  const pool = good.length ? good : cands.filter((c) => !bad.test(c.name));
  if (!pool.length) return null;
  const score = (c) =>
    (/box|booster|package/.test(c.name) ? 3 : 0) + (/^b|p|t|e|c/.test(c.name) && /_-/.test(c.name) ? 1 : 0) + Math.min(c.w, c.h) / 1000;
  pool.sort((a, b) => score(b) - score(a));
  return pool[0];
}

const wranglerPut = (key, file) =>
  new Promise((resolve) => {
    execFile('bunx', ['wrangler', 'r2', 'object', 'put', `${R2_BUCKET}/${key}`, '--file', file, '--remote'], { cwd: REPO, shell: true }, (err) => resolve(!err));
  });

async function uploadPool(entries, poolSize = 4) {
  const queue = [...entries];
  await Promise.all(Array.from({ length: poolSize }, async () => {
    while (queue.length) {
      const { key, file } = queue.shift();
      let ok = await wranglerPut(key, file);
      if (!ok) { await new Promise((r) => setTimeout(r, 1500)); ok = await wranglerPut(key, file); }
      console.log(`[${ok ? 'ok' : 'fail'}] ${key}`);
    }
  }));
}

fs.mkdirSync(STAGE, { recursive: true });
const jobs = [];
for (const f of fs.readdirSync(SETS_DIR).filter((x) => x.endsWith('.json'))) {
  const setId = f.replace('.json', '');
  const set = JSON.parse(fs.readFileSync(path.join(SETS_DIR, f), 'utf8'));
  if (!set.boxSource) continue;
  const picked = pickImage(set.boxSource);
  if (!picked) { delete set.boxImage; fs.writeFileSync(path.join(SETS_DIR, f), JSON.stringify(set, null, 1)); continue; }
  set.boxImage = `${R2_BASE}/ws-cards/${setId}/box.webp`;
  set.boxNatural = picked.url;
  fs.writeFileSync(path.join(SETS_DIR, f), JSON.stringify(set, null, 1));
  jobs.push({ setId, url: picked.url });
}

console.log('sets with a picked product image:', jobs.length);

// download + convert
const uploads = [];
let i = 0;
for (const job of jobs) {
  const file = path.join(STAGE, job.setId + '.webp');
  if (fs.existsSync(file)) { uploads.push({ key: `ws-cards/${job.setId}/box.webp`, file }); continue; }
  try {
    const res = await fetch(job.url, { headers: { 'user-agent': UA } });
    const buf = Buffer.from(await res.arrayBuffer());
    if (!res.ok || !(buf[0] === 0x89 || buf[0] === 0xff)) throw new Error('bad image');
    await sharp(buf).resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(file);
    uploads.push({ key: `ws-cards/${job.setId}/box.webp`, file });
  } catch (e) {
    console.log('[skip]', job.setId, String(e.message).slice(0, 40));
  }
  i++;
  if (i % 40 === 0) console.log('converted', i + '/' + jobs.length);
  await new Promise((r) => setTimeout(r, 150));
}
console.log('converted:', uploads.length);
await uploadPool(uploads);
console.log('uploaded');
