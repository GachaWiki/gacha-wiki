// Turn the picked scan results into review-ready shop catalog entry blocks.
// Usage: bun tools/shop-scanner/make_entries.mjs
// Reads picked.json + scan-results.json (+ image-dims.json when images are
// processed), skips ASINs already cataloged in src/data/shop-items.js, and
// writes proposed-entries.json. The blocks are NOT auto-merged: review them,
// fill the editorial fields (blurb, specs, release) from the official
// Bushiroad Weiss Schwarz product info, then merge by hand.
import fs from 'node:fs';
import { itemId, R2_BASE } from './lib.mjs';

const HERE = new URL('.', import.meta.url);
const toPath = (url) => new URL(url, HERE).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const readJson = (name) => JSON.parse(fs.readFileSync(toPath(name), 'utf8'));

const scan = readJson('scan-results.json').results;
const picked = readJson('picked.json');
let dims = {};
try {
  dims = readJson('image-dims.json');
} catch {}

const catalogFile = toPath('../../src/data/shop-items.js');
const catalogText = fs.readFileSync(catalogFile, 'utf8');
const catalogedAsins = [...catalogText.matchAll(/asin: '([A-Z0-9]{10})'/g)].map((m) => m[1]);

const cleanTitle = (t) => t.replace(/\s+/g, ' ').trim();

const entries = [];
for (const row of scan.filter((r) => picked.includes(r.asin))) {
  if (catalogedAsins.includes(row.asin)) {
    console.log(`[skip] ${row.asin} already in shop-items.js`);
    continue;
  }
  const id = itemId(row);
  const size = dims[id] ?? { width: 500, height: 500 };
  entries.push({
    id,
    name: cleanTitle(row.title),
    franchise: row.franchise || '',
    type: row.suggestedType,
    wikiGame: row.wikiGame || null,
    image: `${R2_BASE}/shop/${id}.webp`,
    imageAlt: `${cleanTitle(row.title)} product art`,
    imageWidth: size.width,
    imageHeight: size.height,
    blurb: '',
    specs: [],
    release: row.release,
    links: [{ store: 'Amazon (US)', asin: row.asin, note: '' }],
  });
}

fs.writeFileSync(toPath('proposed-entries.json'), JSON.stringify(entries, null, 2));
console.log(`\n${entries.length} proposed entries -> proposed-entries.json`);
console.log('Fill blurb + specs from the official Bushiroad product pages, fix type/franchise,');
console.log('then merge into src/data/shop-items.js. Never merge unreviewed scanner output.');
