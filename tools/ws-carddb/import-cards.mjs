// Import one Weiss Schwarz set's card list from the official EN cardlist.
// Usage: bun tools/ws-carddb/import-cards.mjs <setId> [setId...]
// Fetches the paginated cardsearch_ex fragments with plain curl (no browser
// needed), parses every card entry (foil variants included, matching the
// official per-set item count) and writes tools/ws-carddb/sets/<setId>.json.
import fs from 'node:fs';
import path from 'node:path';
import { SETS, httpGet, parseCards, sleep, HERE } from './lib.mjs';

const setsDir = path.join(HERE, 'sets');
fs.mkdirSync(setsDir, { recursive: true });

for (const setId of process.argv.slice(2)) {
  const meta = SETS[setId];
  if (!meta) {
    console.error(`[fail] unknown set id "${setId}" (see SETS in lib.mjs)`);
    continue;
  }

  // Official total from the searchresults page ("NNN items.", count may be
  // wrapped in tags so strip them before matching)
  const searchHtml = httpGet(
    `${'https://en.ws-tcg.com'}/cardlist/searchresults/?expansion_name=${meta.expansion}&view=text&sort=new`
  );
  const plain = searchHtml.replace(/<[^>]+>/g, ' ');
  const total = Number((plain.match(/(\d[\d,]*)\s*items/i) || [])[1]?.replace(/,/g, '') || 0);

  const cards = [];
  for (let page = 1; page <= 60; page++) {
    const frag = httpGet(
      `https://en.ws-tcg.com/cardlist/cardsearch_ex?expansion_name=${meta.expansion}&view=text&page=${page}`
    );
    const pageCards = parseCards(frag);
    if (pageCards.length === 0) break;
    cards.push(...pageCards);
    process.stdout.write(`\r  page ${page}: ${cards.length} cards`);
    await sleep(400);
    if (pageCards.length < 15) break;
  }

  const seen = new Set();
  const deduped = cards.filter((c) => c.num && !seen.has(c.num) && seen.add(c.num));
  const setCode = deduped[0]?.num?.split('-')[0] ?? '';
  const out = { setId, ...meta, total, setCode, cards: deduped };
  fs.writeFileSync(path.join(setsDir, `${setId}.json`), JSON.stringify(out, null, 1));

  const matchNote = total && total !== deduped.length ? ` (MISMATCH: official total ${total})` : '';
  console.log(`\r[ok] ${setId}: ${deduped.length} cards (${setCode})${matchNote}        `);
}
