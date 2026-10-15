// Mechanical migration of hardcoded font-size literals to the shared type-scale tokens.
// Usage: bun scripts/font-scale-migrate.mjs <paths...> [--apply]
// Without --apply it only reports what would change (dry run).

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The scale from src/styles/typography.css, in px (root is 16px).
const STEPS = [
  ['--text-3xs', 10],
  ['--text-2xs', 11],
  ['--text-xs', 12],
  ['--text-sm', 13],
  ['--text-md', 14],
  ['--text-body', 15],
  ['text-base', 16], // placeholder, replaced below so base stays unmangled
  ['--text-lg', 18],
  ['--text-xl', 20],
  ['--text-2xl', 24],
  ['--text-3xl', 28],
  ['--text-4xl', 36],
  ['--text-5xl', 40],
  ['--text-6xl', 48],
].map(([tok, px]) => [tok === 'text-base' ? '--text-base' : tok, px]);

const ROOT_PX = 16;

function nearestStep(px) {
  let best = STEPS[0];
  let bestDist = Math.abs(px - best[1]);
  for (const step of STEPS) {
    const dist = Math.abs(px - step[1]);
    if (dist < bestDist || (dist === bestDist && step[1] > best[1])) {
      // ties round up to the larger step
      best = step;
      bestDist = dist;
    }
  }
  return best;
}

// Matches a font-size declaration: property, value (number+unit, var(), 0, inherit, clamp/calc), trailing !important.
const FONT_SIZE_RE = /(font-size:\s*)([-\d.]+(?:rem|px)|var\([^)]*\)|0|inherit|clamp\([^;]*\)|calc\([^;]*\)|[-\d.]+(?:em|%))(\s*!important)?/g;

function convertValue(rawValue, note) {
  // returns {replacement, note} — replacement null means skip
  const value = rawValue.trim();
  if (value === '0' || value === 'inherit') return { replacement: null, note: 'skip-zero-inherit' };
  if (value.startsWith('var(')) {
    if (/var\(--text-(3xs|2xs|xs|sm|md|body|base|lg|xl|2xl|3xl|4xl|5xl|6xl)\b/.test(value)) {
      return { replacement: value.replace(/,\s*[^)]*\)/, ''), note: 'strip-stale-fallback' };
    }
    return { replacement: null, note: 'skip-other-var' };
  }
  if (value.startsWith('clamp(') || value.startsWith('calc(')) {
    return { replacement: null, note: 'manual-clamp-calc' };
  }
  const m = /^(-?[\d.]+)(rem|px|em|%)$/.exec(value);
  if (!m) return { replacement: null, note: 'manual-unrecognized' };
  const [, numStr, unit] = m;
  const num = parseFloat(numStr);
  if (Number.isNaN(num)) return { replacement: null, note: 'manual-unrecognized' };
  if (unit === 'em' || unit === '%') return { replacement: null, note: 'manual-em-percent' };
  let px;
  if (unit === 'px') px = num;
  else px = num * ROOT_PX;
  if (px <= 0) return { replacement: null, note: 'skip-zero-inherit' };
  const [token] = nearestStep(px);
  return { replacement: `var(${token})`, note: `mapped ${value} -> ${token}` };
}

function transformCss(text, report, relPath) {
  return text.replace(FONT_SIZE_RE, (full, pre, value, bang = '') => {
    const { replacement, note } = convertValue(value);
    if (!replacement) {
      report.skipped.push(`${relPath}: ${full.trim()} [${note}]`);
      return full;
    }
    if (replacement === value.trim()) return full;
    report.converted++;
    return `${pre}${replacement}${bang}`;
  });
}

function transformAstro(text, report, relPath) {
  // <style> blocks carry CSS...
  let out = text.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (full, css) => {
    const next = transformCss(css, report, relPath);
    return next === css ? full : full.replace(css, next);
  });
  // ...and inline style="..." attributes carry single declarations
  out = out.replace(/(style=")([^"]*)(")/g, (full, pre, body, post) => {
    const next = transformCss(body, report, relPath);
    return next === body ? full : pre + next + post;
  });
  return out;
}

function collectFiles(target) {
  const st = statSync(target);
  if (st.isFile()) return [target];
  const out = [];
  for (const entry of readdirSync(target, { withFileTypes: true })) {
    const p = join(target, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(p));
    else if (entry.name.endsWith('.css') || entry.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const targets = args.filter((a) => !a.startsWith('--'));
if (!targets.length) {
  console.error('usage: bun scripts/font-scale-migrate.mjs <paths...> [--apply]');
  process.exit(1);
}

const report = { converted: 0, skipped: [], filesChanged: 0 };
let filesScanned = 0;

for (const target of targets) {
  for (const file of collectFiles(target)) {
    const text = readFileSync(file, 'utf8');
    const relPath = file.replace(/\\/g, '/');
    const isAstro = file.endsWith('.astro');
    const next = isAstro ? transformAstro(text, report, relPath) : transformCss(text, report, relPath);
    filesScanned++;
    if (next !== text) {
      report.filesChanged++;
      console.log(`${apply ? 'APPLY' : 'DRY'}  ${relPath}`);
      if (apply) writeFileSync(file, next);
    }
  }
}

console.log(`\nfiles scanned: ${filesScanned}, files changed: ${report.filesChanged}, declarations converted: ${report.converted}`);
if (report.skipped.length) {
  console.log(`skipped/manual (${report.skipped.length}):`);
  for (const line of report.skipped) console.log('  ' + line);
}
