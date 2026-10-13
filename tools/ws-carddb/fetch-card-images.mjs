// Download + convert every card image of the imported sets and upload to R2.
// Usage: bun tools/ws-carddb/fetch-card-images.mjs <setId> [setId...] [--upload]
// Images land at R2 ws-cards/<setId>/<num-with-slash-dashed>.webp and each
// card's set JSON gets its public r2 URL recorded. Uploads run 4 wrangler
// processes in parallel; wrangler flakes on Windows occasionally so every
// file gets one retry. NOTE: use fetch (not execFile) for binary: Bun's
// execFile mangles non-UTF8 stdout.
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import sharp from 'sharp';
import { R2_BASE, R2_BUCKET, REPO_ROOT, UA, fileKey, HERE, sleep } from './lib.mjs';

const UPLOAD = process.argv.includes('--upload');
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const setsDir = path.join(HERE, 'sets');
const stageRoot = path.join(HERE, 'r2_upload');

const wranglerPut = (key, file) =>
  new Promise((resolve) => {
    execFile(
      'bunx',
      ['wrangler', 'r2', 'object', 'put', `${R2_BUCKET}/${key}`, '--file', file, '--remote'],
      { cwd: REPO_ROOT, shell: true },
      (err) => resolve(!err)
    );
  });

async function uploadPool(entries, poolSize = 4) {
  const queue = [...entries];
  const workers = Array.from({ length: poolSize }, async () => {
    while (queue.length) {
      const { key, file } = queue.shift();
      let ok = await wranglerPut(key, file);
      if (!ok) {
        await sleep(1500);
        ok = await wranglerPut(key, file);
      }
      console.log(`[${ok ? 'ok' : 'fail'}] put ${key}`);
    }
  });
  await Promise.all(workers);
}

for (const setId of args) {
  const setPath = path.join(setsDir, `${setId}.json`);
  const set = JSON.parse(fs.readFileSync(setPath, 'utf8'));
  const stageDir = path.join(stageRoot, 'ws-cards', setId);
  fs.mkdirSync(stageDir, { recursive: true });

  let converted = 0;
  let failed = 0;
  for (const card of set.cards) {
    const file = path.join(stageDir, `${fileKey(card.num)}.webp`);
    if (fs.existsSync(file)) {
      card.r2 = `${R2_BASE}/ws-cards/${setId}/${fileKey(card.num)}.webp`;
      converted++;
      continue;
    }
    if (!card.img) continue;
    try {
      const res = await fetch(card.img, { headers: { 'user-agent': UA } });
      const buf = Buffer.from(await res.arrayBuffer());
      if (!res.ok || !(buf[0] === 0x89 || buf[0] === 0xff)) {
        // not PNG/JPEG: official image missing for this entry
        failed++;
        continue;
      }
      await sharp(buf).webp({ quality: 82 }).toFile(file);
      card.r2 = `${R2_BASE}/ws-cards/${setId}/${fileKey(card.num)}.webp`;
      converted++;
    } catch {
      failed++;
    }
    if ((converted + failed) % 50 === 0) console.log(`  staged ${converted + failed}/${set.cards.length}`);
    await sleep(150);
  }
  fs.writeFileSync(setPath, JSON.stringify(set, null, 1));
  console.log(`[ok] ${setId}: staged ${converted}/${set.cards.length} images (${failed} unavailable upstream)`);
}

if (UPLOAD) {
  for (const setId of args) {
    const set = JSON.parse(fs.readFileSync(path.join(setsDir, `${setId}.json`), 'utf8'));
    const entries = set.cards
      .filter((c) => c.r2)
      .map((c) => ({
        key: `ws-cards/${setId}/${fileKey(c.num)}.webp`,
        file: path.join(stageRoot, 'ws-cards', setId, `${fileKey(c.num)}.webp`),
      }))
      .filter((e) => fs.existsSync(e.file));
    await uploadPool(entries);
  }

  // Verify every referenced R2 URL answers 200
  for (const setId of args) {
    const set = JSON.parse(fs.readFileSync(path.join(setsDir, `${setId}.json`), 'utf8'));
    let ok = 0;
    const bad = [];
    for (const c of set.cards) {
      if (!c.r2) continue;
      const res = await fetch(c.r2, { method: 'HEAD', headers: { 'user-agent': UA } });
      if (res.status === 200) ok++;
      else bad.push(`${res.status} ${c.r2}`);
    }
    console.log(`[verify] ${setId}: ${ok} ok, ${bad.length} bad`);
    bad.slice(0, 5).forEach((b) => console.log(`  ${b}`));
  }
}
