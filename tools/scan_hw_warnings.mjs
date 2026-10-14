// Scan: import every HW character + mercenary data file, capture validator warnings
import { readdir } from 'node:fs/promises';

const CHAR_DIR = 'src/data/horizon-walker/characters';
const MERC_DIR = 'src/data/horizon-walker/mercenaries';
const warns = [];
const origWarn = console.warn;
const origErr = console.error;
console.warn = (...a) => { warns.push(a.map(String).join(' ')); };
console.error = (...a) => { warns.push('ERR ' + a.map(String).join(' ')); };

let files = [];
for (const d of [CHAR_DIR, MERC_DIR]) {
  for (const f of await readdir(d)) {
    if (f.endsWith('.js') && f !== 'index.js') files.push(`${d}/${f}`);
  }
}
let ok = 0, failed = 0;
for (const f of files) {
  try {
    await import('../' + f);
    ok++;
  } catch (e) {
    failed++;
    warns.push(`IMPORT FAIL ${f}: ${e.message}`);
  }
}
console.warn = origWarn;
console.error = origErr;
console.log(`imported ${ok}/${files.length}, failed ${failed}, warnings ${warns.length}`);
for (const w of warns) console.log('WARN:', w.slice(0, 300));
