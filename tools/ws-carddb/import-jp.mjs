// Import the complete Japanese Weiss Schwarz cardlist via the official
// ws-tcg.com Cake API (manage/CardListUser/searchJson). Writes one JSON per
// expansion into tools/ws-carddb/sets-jp/ using the same schema as the EN
// importer plus lang/traits/flavor.
// Endpoints: filter-options (titles/expansions), searchJson (25 cards/page).
import fs from 'node:fs';
import path from 'node:path';
import { HERE } from './lib.mjs';

const API = 'https://ws-tcg.com/manage/CardListUser';
const IMG_BASE = 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const KIND = { '2': 'Character', '3': 'Event', '4': 'Climax' };
const COLOR = { '[[yellow.gif]]': 'yellow', '[[green.gif]]': 'green', '[[red.gif]]': 'red', '[[blue.gif]]': 'blue' };
const outDir = path.join(HERE, 'sets-jp');
fs.mkdirSync(outDir, { recursive: true });

const jget = async (url) => (await fetch(url, { headers: { 'user-agent': UA } })).json();

// 1) expansions + titles
const filter = await jget(`${API}/filter-options`);
const expansions = filter.expansions.filter((e) => e.disp_flg !== 0);
console.log('expansions:', expansions.length);

// 2) crawl every page of searchJson (4 parallel workers, page ranges)
const first = await jget(`${API}/searchJson?page=1`);
const pages = first.page_count;
const total = first.total;
console.log('cards total:', total, '| pages:', pages);

const items = Array.from({ length: total });
const pageRange = [...Array(pages).keys()].map((i) => i + 1);
const queue = [...pageRange];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      for (let attempt = 0; attempt < 4; attempt++) {
        try {
          const j = await jget(`${API}/searchJson?page=${p}`);
          if (Array.isArray(j.items)) {
            j.items.forEach((it, i) => (items[(p - 1) * 25 + i] = it));
            break;
          }
        } catch {}
        await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
      }
      if (p % 200 === 0) console.log('  crawled page', p, '/', pages);
    }
  })
);
const all = items.filter(Boolean);
console.log('crawled items:', all.length);

// 3) group by expansion and map to our schema
const stripHtml = (s) =>
  String(s || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
    .trim();

const byExp = new Map();
for (const it of all) {
  if (!KIND[it.card_kind]) continue; // skip 'no card' rows
  if (!byExp.has(it.expansion)) byExp.set(it.expansion, []);
  const traits = [it.feature1, it.feature2, it.feature3].filter((t) => t && t !== '-');
  const text = [stripHtml(it.text), it.flavor ? `"${String(it.flavor).trim()}"` : ''].filter(Boolean).join('\n');
  byExp.get(it.expansion).push({
    num: it.card_number,
    name: it.card_name,
    type: KIND[it.card_kind],
    rarity: it.rare || '',
    color: COLOR[it.color] || '',
    level: it.level === '-' ? '' : String(it.level ?? ''),
    cost: it.cost === '-' ? '' : String(it.cost ?? ''),
    power: it.power === '-' || it.power == null ? '' : String(it.power),
    soul: (String(it.soul || '').match(/soul\.gif/g) || []).length,
    trigger: it.card_trigger && it.card_trigger !== '-' ? String(it.card_trigger) : '',
    traits,
    text,
    img: it.picture ? IMG_BASE + it.picture : '',
    variant: it.variation ? String(it.variation) : '',
  });
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const taken = new Set();
let n = 0, skipped = 0;
for (const exp of expansions) {
  const cards = byExp.get(exp.id) || [];
  if (!cards.length) { skipped++; continue; }
  const code = cards[0].num.split('/')[0]; // e.g. DC, from DC/W01-001
  let slug = 'jp-' + (slugify(code) || 'e' + exp.id);
  if (taken.has(slug)) slug += '-e' + exp.id;
  taken.add(slug);
  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify({ setId: slug, expansion: exp.id, name: exp.name, lang: 'jp', release: null, shopItem: null, cards }, null, 1)
  );
  n++;
}
console.log('wrote', n, 'JP sets | expansions without cards:', skipped);
