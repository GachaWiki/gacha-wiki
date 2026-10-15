// Font-scale lint: every font-size in src/ must resolve to the shared --text-* type scale
// (src/styles/typography.css). Run via `bun run lint:fonts`. Exit 1 lists violations.
// Need a new size? Add a step to the scale in typography.css, never a literal here.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1').replace(/\/$/, '');

// Values that are fine anywhere: token refs, aliases, and relative/neutral keywords.
const OK_VALUE = [
  /^var\(--text-(3xs|2xs|xs|sm|md|body|base|lg|xl|2xl|3xl|4xl|5xl|6xl)\b/, // the scale (fallback stripped by convention)
  /^var\(--zn-cf-text-/, // zone-nova chart page aliases, defined as var(--text-*)
  /^var\(--nav-font-/, // game navigation aliases, defined as var(--text-*)
  /^var\(--bc-/, // BreadcrumbBase overridable params, token defaults
  /^0(\.0*)?$/, // marquee/measure tricks
  /^inherit$/,
  /^[\d.]+em$/, // relative sizing by design (scales with parent)
  /^[\d.]+%$/,
  /cqh|cqi|cqw/, // container-query units (image-fitted text)
];
// clamps/calcs are fine only when composed from tokens (or vw/vh + tokens).
const OK_FUNCTION = (value) => /^(clamp|calc|max|min)\(/.test(value) && !/[\d.]+(rem|px)/.test(value);

// Exact literal exceptions, keyed by file suffix. Keep this list SHORT; add a reason.
const EXCEPTIONS = [
  { file: 'src/styles/core/z-index-system.css', value: '10px', reason: 'z-index debug overlay' },
  { file: 'src/layouts/silver-and-blood/RedeemCodesLayout.astro', value: '16px', reason: 'iOS input zoom guard (px required)' },
  { file: 'src/pages/404.astro', value: 'clamp(4.5rem, 16vw, 7.5rem)', reason: 'decorative 404 numeral, beyond display scale' },
];

function collectFiles(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(p, out);
    else if (/\.(css|astro|js|mjs|ts)$/.test(entry.name)) out.push(p);
  }
  return out;
}

const violations = [];
let checked = 0;

for (const file of collectFiles(join(ROOT, 'src'))) {
  const text = readFileSync(file, 'utf8');
  const relPath = file.slice(ROOT.length + 1).replace(/\\/g, '/');
  const isOwnScript = relPath === 'scripts/check-font-scales.mjs';
  const re = /font-size:\s*([^;"}\n]+)/g;
  let m;
  while ((m = re.exec(text))) {
    if (isOwnScript) continue;
    const value = m[1].trim().replace(/\s*!important$/, '');
    checked++;
    if (OK_VALUE.some((rx) => rx.test(value))) continue;
    if (OK_FUNCTION(value)) continue;
    const ex = EXCEPTIONS.find((e) => relPath.endsWith(e.file) && value === e.value);
    if (ex) continue;
    const line = text.slice(0, m.index).split('\n').length;
    violations.push(`${relPath}:${line}  font-size: ${value}`);
  }
}

if (violations.length) {
  console.error(`lint:fonts: ${violations.length} off-scale font-size value(s):`);
  for (const v of violations) console.error('  ' + v);
  console.error('\nAllowed: var(--text-*) tokens from src/styles/typography.css.');
  console.error('Need a size between steps? Add/adjust a step in the scale, not a literal.');
  process.exit(1);
}
console.log(`lint:fonts: OK (${checked} font-size declarations, all on the shared type scale)`);
