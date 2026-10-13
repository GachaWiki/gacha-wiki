// Shared helpers for the Weiss Schwarz card database importer: set registry,
// HTTP via curl (the cardlist rejects some non-browser user agents), and the
// card HTML fragment parser. No external dependencies.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

export const CARDLIST_BASE = 'https://en.ws-tcg.com';
export const R2_BASE = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';
export const R2_BUCKET = 'gachawiki-images';
export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

export const HERE = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
export const REPO_ROOT = new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

// Registry: wiki set id -> official cardlist expansion id + display metadata.
// Expansion ids verified against the live /cardlist/ expansion select (2026-10-13).
export const SETS = {
  'nikke-vol2': { expansion: 290, name: 'GODDESS OF VICTORY: NIKKE Vol.2', release: '2026-09-25', shopItem: 'nikke-vol2' },
  'nikke-vol1': { expansion: 252, name: 'GODDESS OF VICTORY: NIKKE', release: '2025-04-18', shopItem: 'nikke-vol1' },
  're-zero-vol3': { expansion: 289, name: 'Re:ZERO -Starting Life in Another World- Vol.3', release: '2026-08-28', shopItem: 're-zero-vol3' },
  'blue-archive-the-animation': { expansion: 288, name: 'Blue Archive The Animation', release: '2026-07-31', shopItem: 'blue-archive-the-animation' },
  'umamusume-pretty-derby': { expansion: 286, name: 'Umamusume: Pretty Derby', release: '2026-06-26', shopItem: 'umamusume-pretty-derby' },
  'umamusume-trial-deck-race-2': { expansion: 285, name: 'Umamusume: Pretty Derby Trial Deck Race 2', release: '2026-06-26', shopItem: 'umamusume-trial-deck-race-2' },
  'oshi-no-ko-vol2': { expansion: 278, name: '【OSHI NO KO】 Vol.2', release: '2026-03-27', shopItem: 'oshi-no-ko-vol2' },
  'sao-gun-gale-online-2': { expansion: 267, name: 'SAO Alternative Gun Gale Online 2', release: '2025-09-05', shopItem: 'sao-gun-gale-online-2' },
  'bang-dream-mygo-ave-mujica': { expansion: 264, name: 'MyGO!!!!! × Ave Mujica', release: '2025-07-18', shopItem: 'bang-dream-mygo-ave-mujica' },
  'hatsune-miku-colorful-stage': { expansion: 261, name: 'HATSUNE MIKU: COLORFUL STAGE!', release: '2025-06-27', shopItem: 'hatsune-miku-colorful-stage' },
  'love-live-sif2-miracle-live': { expansion: 238, name: 'Love Live! School idol festival 2 MIRACLE LIVE!', release: '2024-11-08', shopItem: 'love-live-sif2-miracle-live' },
  'oshi-no-ko-vol1': { expansion: 230, name: '【OSHI NO KO】', release: '2024-09-20', shopItem: 'oshi-no-ko-vol1' },
};

// Trigger icon filenames -> display labels (unknown filenames fall back to
// the raw name; verified against partimages/ usage).
const TRIGGER_LABELS = {
  soul: 'Soul',
  doublesoul: 'Double Soul',
  wind: 'Wind',
  flame: 'Flame',
  shot: 'Shot',
  gate: 'Gate',
  standby: 'Standby',
  choice: 'Choice',
  treasure: 'Treasure',
  bag: 'Bag',
  book: 'Book',
  bar: 'Bar',
  return: 'Return',
};

export function httpGet(url) {
  return execFileSync('curl', ['-s', '-A', UA, url], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
}

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ');

// Parse one card <li> block from a cardsearch_ex fragment into a card object.
export function parseCard(block) {
  const num = (block.match(/class="number">([^<]+)</) || [])[1]?.trim();
  const name = (block.match(/class="ttl[^"]*">([^<]+)</) || [])[1]?.trim();
  const imgSrc = (block.match(/<div class="image"><img src="([^"]+)"/) || [])[1];

  // dt/dd pairs for the structured fields
  const fields = {};
  const dlRe = /<dt>([^<]+)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g;
  let m;
  while ((m = dlRe.exec(block))) {
    fields[m[1].trim()] = m[2];
  }

  const partImgs = (dd) => [...dd.matchAll(/partimages\/([a-z0-9_]+)\.gif/g)].map((x) => x[1]);
  const side = /partimages\/s\.gif/.test(fields['Side'] || '') ? 'S' : 'W';
  const color = partImgs(fields['Color'] || '')[0] ?? '';
  const soul = (fields['Soul'] || '').match(/partimages\/soul\.gif/g)?.length ?? 0;
  const trigger = partImgs(fields['Trigger'] || '')[0] ?? '';

  // Detail text: <br> becomes newline, other tags stripped, entities decoded.
  const detail = block.match(/class="p-cards__detail[^"]*">([\s\S]*?)<\/div>/);
  const text = detail
    ? decodeEntities(detail[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')).trim()
    : '';

  // Foil variants carry a suffix after the E-number (E001SP, E001SEC, ...).
  const variant = num?.match(/E\d+(.+)$/)?.[1] ?? '';

  return {
    num,
    name: decodeEntities(name || ''),
    type: decodeEntities((fields['Card Type'] || '').replace(/<[^>]+>/g, '').trim()),
    rarity: decodeEntities((fields['Rarity'] || '').replace(/<[^>]+>/g, '').trim()),
    side,
    color,
    level: (fields['Level'] || '').replace(/<[^>]+>/g, '').trim(),
    cost: (fields['Cost'] || '').replace(/<[^>]+>/g, '').trim(),
    power: (fields['Power'] || '').replace(/<[^>]+>/g, '').trim(),
    soul,
    trigger: trigger ? (TRIGGER_LABELS[trigger] ?? trigger) : '',
    text,
    img: imgSrc ? (imgSrc.startsWith('http') ? imgSrc : `${CARDLIST_BASE}${imgSrc}`) : '',
    variant,
  };
}

export function parseCards(fragment) {
  const cards = [];
  const liRe = /<li class="ex-item">([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRe.exec(fragment))) cards.push(parseCard(m[1]));
  return cards;
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const fileKey = (num) => num.replace('/', '-');
