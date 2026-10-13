// Scan Amazon US for TCG products via the Product Advertising API.
// Usage:
//   bun tools/shop-scanner/scan.mjs                      scan every keyword group in keywords.json
//   bun tools/shop-scanner/scan.mjs "ad hoc keywords"     single ad-hoc search
// Writes tools/shop-scanner/scan-results.json and prints a review table.
// Next steps after reviewing: put the ASINs you want into picked.json, then run
// fetch_images.mjs and make_entries.mjs (see README.md).
import fs from 'node:fs';
import { loadKeys, paapiSearchItems, itemToRow, sleep } from './lib.mjs';

const HERE = new URL('.', import.meta.url);
const [, , ...args] = process.argv;
const keys = loadKeys();

const groups = args.length
  ? [{ franchise: '', keywords: args }]
  : JSON.parse(fs.readFileSync(new URL('keywords.json', HERE), 'utf8')).scan;

const results = [];
for (const group of groups) {
  for (const keyword of group.keywords) {
    let data;
    try {
      data = await paapiSearchItems(keyword, keys);
    } catch (err) {
      console.error(`[fail] "${keyword}": ${err.message}`);
      await sleep(1100);
      continue;
    }
    const items = data.SearchResult?.Items ?? [];
    for (const item of items) results.push(itemToRow(item, group, keyword));
    console.log(`[ok] "${keyword}" -> ${items.length} items`);
    await sleep(1100); // baseline PA-API quota is ~1 request/second
  }
}

fs.writeFileSync(
  new URL('scan-results.json', HERE),
  JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2)
);

// Review table: trust "?" marks publishers outside the trusted list (possible
// bootlegs); verify those by hand before picking.
const trunc = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
console.log(`\n${results.length} results -> scan-results.json\n`);
console.log(
  'ASIN       TYPE          TRUST    PRICE      RELEASE    TITLE'
);
for (const r of results) {
  console.log(
    [
      r.asin.padEnd(11),
      r.suggestedType.padEnd(13),
      (r.publisherTrust === 'trusted' ? 'yes' : '?').padEnd(8),
      (r.price || '-').padEnd(10),
      (r.release || '-').padEnd(10),
      trunc(r.title, 60),
    ].join('')
  );
}
