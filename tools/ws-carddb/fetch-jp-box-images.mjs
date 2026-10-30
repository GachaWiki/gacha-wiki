// JP product box art: matches official ws-tcg.com product pages to JP sets by
// name, picks the product image (banners/playmats excluded), resizes to webp
// and rehosts to R2 ws-cards/<setId>/box.webp.
// Match JP products to JP sets by (Japanese) name, pick the best product
// image from the cached pages, resize and rehost to R2 as box.webp.
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import sharp from 'sharp';

const PAGES = 'C:/Users/Borin/ZCodeProject/jp-prod-pages';
const SETS_DIR = 'C:/Users/Borin/ZCodeProject/gacha-wiki/tools/ws-carddb/sets';
const STAGE = 'C:/Users/Borin/ZCodeProject/gacha-wiki/tools/ws-carddb/r2_upload/ws-boxes';
const R2_BASE = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';
const R2_BUCKET = 'gachawiki-images';
const REPO = 'C:/Users/Borin/ZCodeProject/gacha-wiki';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const prods = await Bun.file('C:/Users/Borin/ZCodeProject/jp-products.json').json();

// recency: product list page order (page 1 = newest)
const rank = new Map();
let r = 0;
for (let p = 1; p <= 56; p++) {
  const html = await Bun.file(`C:/Users/Borin/ZCodeProject/jp-arch/p${p}.html`).text();
  for (const c of [...html.matchAll(/products\/([a-z0-9_-]+)\/"/g)].map((m) => m[1])) if (!rank.has(c)) rank.set(c, r++);
}

const PREFIXES = /^(ブースターパック|トライアルデッキ|エクストラブースター|プレミアムブースター|スペシャルセット|スターターセット|スタートデッキ|PRパック|スターターデッキ)\s*/;
const clean = (t) => t.split('商品情報')[0].replace(PREFIXES, '').replace(/[「」『』〈〉《】\s\u3000]/g, '').replace(/[!！?？:：・.。,、]/g, '').trim();
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf]+/g, '-').replace(/^-+|-+$/g, '');
const prodCat = (t) => {
  if (/プレミアムブースター/.test(t)) return 'Premium Booster';
  if (/エクストラブースター/.test(t)) return 'Extra Booster';
  if (/トライアルデッキ/.test(t)) return 'Trial Deck';
  if (/ブースターパック/.test(t)) return 'Booster Pack';
  if (/スペシャルセット|スタータ|スタート|PRパック/.test(t)) return 'Special';
  return '';
};

// product -> images (all candidates from cached page)
function imagesOf(code) {
  const f = path.join(PAGES, code + '.html');
  if (!fs.existsSync(f)) return [];
  const html = fs.readFileSync(f, 'utf8');
  return [...html.matchAll(/<img[^>]*src="(https:\/\/ws-tcg\.com\/wordpress\/wp-content\/uploads\/[^"]+)"[^>]*>/g)].map((m) => {
    const tag = m[0];
    return {
      url: m[1],
      name: m[1].split('/').pop().toLowerCase(),
      w: Number((tag.match(/width="(\d+)"/) || [])[1] || 0),
      h: Number((tag.match(/height="(\d+)"/) || [])[1] || 0),
    };
  });
}

const BAD = /組み立て|プレイマット|kumitate|playmat|1920x1080|now.on.sale|バナー|スリーブ|バインダー|収納|デッキケース|mat_|sleeve|banner|icon|logo|qr_/i;
const GOODPRE = /^(box|tr|ex|sp|pr|cs|td|st|bp|eb|pb)[_-]/;

function pickImage(code) {
  const cands = imagesOf(code).filter((c) => !BAD.test(c.name) && (c.w === 0 || c.h === 0 || (c.w >= 200 && c.h >= 200)));
  const scored = cands.map((c) => ({ ...c, score: (GOODPRE.test(c.name) ? 2 : 0) + (c.w ? 0.5 : 0) }));
  scored.sort((a, b) => b.score - a.score);
  return scored[0] || null;
}

// group products by name slug (dedupe by image)
const bySlug = new Map();
for (const p of prods) {
  if (!p.title) continue;
  const slug = slugify(clean(p.title));
  if (!slug) continue;
  if (!bySlug.has(slug)) bySlug.set(slug, []);
  bySlug.get(slug).push({ ...p, rank: rank.get(p.code) ?? 9999 });
}

const wranglerPut = (key, file) =>
  new Promise((resolve) => {
    execFile('bunx', ['wrangler', 'r2', 'object', 'put', `${R2_BUCKET}/${key}`, '--file', file, '--remote'], { cwd: REPO, shell: true }, (err) => resolve(!err));
  });

// JP sets: those in tools/sets starting with jp-
const jpSetFiles = fs.readdirSync(SETS_DIR).filter((f) => f.startsWith('jp-') && f.endsWith('.json'));
const toFetch = [];
let matched = 0;
for (const f of jpSetFiles) {
  const setId = f.replace('.json', '');
  const set = JSON.parse(fs.readFileSync(path.join(SETS_DIR, f), 'utf8'));
  const slug = slugify(clean(set.name || ''));
  let cands = bySlug.get(slug) || [];
  if (cands.length > 1) {
    const boosters = cands.filter((p) => prodCat(p.title) === 'Booster Pack');
    if (boosters.length) cands = boosters;
  }
  if (cands.length) {
    cands.sort((a, b) => a.rank - b.rank);
    const picked = pickImage(cands[0].code);
    if (picked) {
      set.boxSource = cands[0].code;
      set.boxNatural = picked.url;
      fs.writeFileSync(path.join(SETS_DIR, f), JSON.stringify(set, null, 1));
      toFetch.push({ setId, url: picked.url });
      matched++;
      continue;
    }
  }
}
console.log('matched sets with a product image:', matched, '/', jpSetFiles.length);

// download + convert + upload
let done = 0;
const jobs = [];
for (const job of toFetch) {
  const file = path.join(STAGE, job.setId + '.webp');
  if (fs.existsSync(file)) { jobs.push({ key: `ws-cards/${job.setId}/box.webp`, file }); continue; }
  try {
    const res = await fetch(job.url, { headers: { 'user-agent': UA } });
    const buf = Buffer.from(await res.arrayBuffer());
    if (!res.ok || buf.length < 6000) throw new Error('bad');
    await sharp(buf).resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(file);
    jobs.push({ key: `ws-cards/${job.setId}/box.webp`, file });
    done++;
  } catch {
    console.log('[skip]', job.setId);
  }
  await new Promise((r) => setTimeout(r, 120));
}
console.log('converted:', done, '+cached', jobs.length - done);

const queue = [...jobs];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const { key, file } = queue.shift();
    let ok = await wranglerPut(key, file);
    if (!ok) { await new Promise((r) => setTimeout(r, 1500)); ok = await wranglerPut(key, file); }
    if (!ok) console.log('[fail]', key);
  }
}));

// stamp R2 urls into set JSONs
for (const job of jobs) {
  const f = path.join(SETS_DIR, job.key.split('/')[1] + '.json');
  const set = JSON.parse(fs.readFileSync(f, 'utf8'));
  set.boxImage = `${R2_BASE}/ws-cards/${job.setId}/box.webp`;
  fs.writeFileSync(f, JSON.stringify(set, null, 1));
}
console.log('uploaded + stamped:', jobs.length);
