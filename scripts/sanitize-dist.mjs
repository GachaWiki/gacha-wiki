// Post-build sanitizer: strips adult-industry wording tokens from the BUILT
// HTML/XML so deployed pages never carry them, while source data keeps exact
// game text. Run after `bun run build:cloudflare` and before pages deploy.
// Tokens: R18/r-18, NSFW, HCG, and the store name Erolabs (any case, word
// boundary only, so erolabsshare URLs are never touched).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

let files = 0, changed = 0, hits = 0;
const rules = [
  // preposition + store name phrases first so deletion keeps grammar
  [/\s+(?:on|via|at|by|from|of|in|auf|der|sur|en|para|da|trên|平台上|で)\s*[Ee][Rr][Oo][Ll][Aa][Bb][Ss]\b\.?/g, ''],
  [/[Ee][Rr][Oo][Ll][Aa][Bb][Ss]\b(?:\s*[Pp]latform)?(?:\s*平台)?(?:\s*プラットフォーム)?/g, ''],
  [/\s*[Rr]-?18\b\s*(?:版|向け|の)?/g, ' '],
  [/\b[Nn][Ss][Ff][Ww]\b\s*/g, ''],
  [/\s*[Hh][Cc][Gg]\b/g, ' story'],
];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(html|xml)$/.test(name)) continue;
    files++;
    let s = readFileSync(p, 'utf8');
    const before = s;
    for (const [re, rep] of rules) s = s.replace(re, rep);
    if (s !== before) {
      s = s.replace(/ {2,}/g, ' ').replace(/ \./g, '.').replace(/\.,/g, ',');
      writeFileSync(p, s);
      changed++;
      hits += 1;
    }
  }
}
walk(DIST);
console.log(`[sanitize-dist] ${files} files scanned, ${changed} changed`);
