// Shared helpers for the shop scanner: PA-API 5 request signing, env loading,
// slugs, TCG type guessing and publisher trust checks. No external dependencies.
import crypto from 'node:crypto';
import fs from 'node:fs';

export const PAAPI_HOST = 'webservices.amazon.com';
export const PAAPI_REGION = 'us-east-1';
export const PAAPI_SERVICE = 'ProductAdvertisingAPI';
export const MARKETPLACE = 'www.amazon.com';
// Keep in sync with AFFILIATE_IDS.amazonTag in src/data/shop.js
export const PARTNER_TAG = 'gachawiki-20';

export const R2_BASE = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';
export const R2_BUCKET = 'gachawiki-images';

export const SCANNER_DIR = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
export const REPO_ROOT = new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

// Publishers whose TCG products we treat as authentic at a glance. Anything else
// gets flagged "unknown" in the scan table for manual review (bootleg guard).
const TRUSTED_PUBLISHERS = ['bushiroad', 'bandai', 'konami', 'pokemon'];

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Bun auto-loads .env, but also parse it manually so the scripts work from any
// cwd and under plain node. Only PAAPI_* variables are picked up.
function loadDotEnv() {
  if (process.env.PAAPI_ACCESS_KEY) return;
  let text;
  try {
    text = fs.readFileSync(new URL('../../.env', import.meta.url), 'utf8');
  } catch {
    return;
  }
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*(PAAPI_[A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

export function loadKeys() {
  loadDotEnv();
  const accessKey = process.env.PAAPI_ACCESS_KEY;
  const secretKey = process.env.PAAPI_SECRET_KEY;
  if (!accessKey || !secretKey) {
    console.error('Missing PAAPI_ACCESS_KEY / PAAPI_SECRET_KEY.');
    console.error('Request keys in Associates Central: Tools -> Product Advertising API,');
    console.error('then put both values in gacha-wiki/.env (gitignored). See .env.example.');
    process.exit(1);
  }
  return { accessKey, secretKey };
}

const sha256Hex = (data) => crypto.createHash('sha256').update(data).digest('hex');
const hmac = (key, data) => crypto.createHmac('sha256', key).update(data).digest();

// Signed PA-API POST (AWS SigV4). Retries 429s with a short backoff since the
// baseline rate limit is roughly one request per second.
async function paapiCall(target, operation, payload, keys, attempt = 1) {
  const amzDate = new Date().toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);
  const body = JSON.stringify(payload);
  const canonicalHeaders =
    `content-encoding:amz-1.0\n` +
    `content-type:application/json\n` +
    `host:${PAAPI_HOST}\n` +
    `x-amz-date:${amzDate}\n` +
    `x-amz-target:${target}\n`;
  const signedHeaders = 'content-encoding;content-type;host;x-amz-date;x-amz-target';
  const canonicalRequest =
    `POST\n/onca/sigv4/${operation}\n\n${canonicalHeaders}\n${signedHeaders}\n${sha256Hex(body)}`;
  const credentialScope = `${dateStamp}/${PAAPI_REGION}/${PAAPI_SERVICE}/aws4_request`;
  const stringToSign =
    `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${sha256Hex(canonicalRequest)}`;
  const kDate = hmac(`AWS4${keys.secretKey}`, dateStamp);
  const kRegion = hmac(kDate, PAAPI_REGION);
  const kService = hmac(kRegion, PAAPI_SERVICE);
  const kSigning = hmac(kService, 'aws4_request');
  const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');

  const res = await fetch(`https://${PAAPI_HOST}/onca/sigv4/${operation}`, {
    method: 'POST',
    headers: {
      'content-encoding': 'amz-1.0',
      'content-type': 'application/json',
      host: PAAPI_HOST,
      'x-amz-date': amzDate,
      'x-amz-target': target,
      Authorization:
        `AWS4-HMAC-SHA256 Credential=${keys.accessKey}/${credentialScope}, ` +
        `SignedHeaders=${signedHeaders}, Signature=${signature}`,
    },
    body,
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`PA-API returned non-JSON (${res.status}): ${text.slice(0, 200)}`);
  }
  if (res.status === 429 && attempt <= 5) {
    await sleep(1100 * attempt);
    return paapiCall(target, operation, payload, keys, attempt + 1);
  }
  if (!res.ok) {
    const err = data.Errors?.[0];
    throw new Error(`PA-API error ${res.status} ${err?.Code ?? ''}: ${err?.Message ?? text.slice(0, 200)}`);
  }
  return data;
}

export async function paapiSearchItems(keywords, keys) {
  return paapiCall(
    'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems',
    'search/items',
    {
      Keywords: keywords,
      SearchIndex: 'All',
      PartnerTag: PARTNER_TAG,
      PartnerType: 'Associates',
      Marketplace: MARKETPLACE,
      Resources: [
        'ItemInfo.Title',
        'ItemInfo.ByLineInfo',
        'ItemInfo.ProductInfo.ReleaseDate',
        'Images.Primary.Large',
        'Offers.Listings.Price',
      ],
    },
    keys
  );
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Stable catalog id derived from the product title (shared by fetch_images and
// make_entries so image keys and entry ids always match).
export function itemId(row) {
  return slugify(row.title).slice(0, 70).replace(/-+$/, '');
}

export function guessType(title) {
  const t = title.toLowerCase();
  if (t.includes('trial deck') || t.includes('start deck')) return 'trial-deck';
  if (t.includes('special set') || t.includes('premium set') || t.includes('gift set') || t.includes('prismatic')) return 'special-set';
  if (t.includes('booster box') || t.includes('display box')) return 'booster-box';
  if (t.includes('booster pack') || /\bpack\b/.test(t)) return 'booster-pack';
  return 'other';
}

export function publisherTrust(publisher) {
  const p = (publisher || '').toLowerCase();
  return TRUSTED_PUBLISHERS.some((t) => p.includes(t)) ? 'trusted' : 'unknown';
}

// Flatten a PA-API item plus its keyword-group context into one review row.
export function itemToRow(item, group = {}, keyword = '') {
  const title = item.ItemInfo?.Title?.DisplayValue ?? '(no title)';
  const brand = item.ItemInfo?.ByLineInfo?.Brand?.DisplayValue ?? '';
  const manufacturer = item.ItemInfo?.ByLineInfo?.Manufacturer?.DisplayValue ?? '';
  const publisher = brand || manufacturer;
  const image = item.Images?.Primary?.Large ?? null;
  return {
    asin: item.ASIN,
    title,
    publisher,
    release: item.ItemInfo?.ProductInfo?.ReleaseDate?.DisplayValue ?? '',
    price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount ?? '',
    image: image?.URL ?? '',
    imageWidth: image?.Width ?? 0,
    imageHeight: image?.Height ?? 0,
    detailPageUrl: item.DetailPageURL ?? '',
    franchise: group.franchise ?? '',
    wikiGame: group.wikiGame ?? null,
    keyword,
    suggestedType: guessType(title),
    publisherTrust: publisherTrust(publisher),
  };
}
