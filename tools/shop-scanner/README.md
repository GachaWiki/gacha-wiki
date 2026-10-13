# Shop Scanner (Amazon PA-API 5)

Scans Amazon US for Weiss Schwarz sets for gacha games and turns them into
catalog entries for the shop page (`src/data/shop-items.js`). Scope (2026-10):
Amazon US links only, Weiss Schwarz only. Runs on Bun, no extra dependencies.

## One-time setup

1. Amazon routes API access through the **Creators API** (successor of the
   classic Product Advertising API 5). Eligibility: an approved Associates
   account PLUS **at least 10 qualifying sales within the past 30 days**.
   Request access in Associates Central: **Tools -> Creators API**
   (https://affiliate-program.amazon.com/creatorsapi/docs/en-us/introduction).
   Approval can take up to 48h; a persistent "AssociateNotEligible" error
   means the sales requirement is not met yet.
2. Copy `.env.example` to `gacha-wiki/.env` (gitignored) and fill in
   `PAAPI_ACCESS_KEY` and `PAAPI_SECRET_KEY`.

**Status (2026-10-13): not eligible yet (4 qualifying sales total, need 10 in
a rolling 30-day window). Until then items are added manually from the
official Weiss Schwarz site (en.ws-tcg.com product pages + images).**

Note: the request layer in lib.mjs currently speaks classic PA-API 5
(webservices.amazon.com, SigV4). The Creators API exposes the same operations
(SearchItems, GetItems, GetVariations, GetBrowseNodes) but with its own
endpoints and credential format: when credentials arrive, adapt the signing /
URL in lib.mjs following the "Migrating to Creators API from PA-API" guide in
the docs. The scan logic itself stays unchanged.

## Adding items to the shop (the runbook)

1. **Add keywords** to `keywords.json` if you are scanning a new franchise
   (one group = franchise label + keyword strings + optional `wikiGame` key
   linking the item to a wiki game page).
2. **Scan**:
   `bun tools/shop-scanner/scan.mjs`
   (or ad hoc: `bun tools/shop-scanner/scan.mjs "weiss schwarz <thing>"`)
   Review the table and `scan-results.json`. `TRUST ?` means the publisher is
   not in the trusted list (Bushiroad/Bandai/Konami/Pokémon): Weiss Schwarz
   counterfeits are common on Amazon, check those listings by hand.
3. **Pick**: write the ASINs you want into `picked.json` (JSON array).
4. **Images**:
   `bun tools/shop-scanner/fetch_images.mjs --upload`
   Converts to webp, uploads to R2 `gachawiki-images/shop/<id>.webp` and
   curl-verifies each URL (must all be 200).
5. **Entries**:
   `bun tools/shop-scanner/make_entries.mjs`
   Writes `proposed-entries.json` with one entry block per pick. REVIEW every
   block: fill `note`, fix `type`/`franchise` if the guess is off, delete junk.
   Then merge the blocks into `SHOP_ITEMS` in `src/data/shop-items.js`
   (newest first) and check the page on the dev server.

## Notes and rules

- PA-API baseline quota is ~1 request/second; the scanner already paces
  itself. Amazon revokes keys on accounts that go 30 days without a
  PA-API-driven sale, so expect to re-request if the scanner sits unused.
- Never display prices from scan results on the wiki: PA-API terms forbid
  caching price data. Cards link to Amazon, which shows the live price.
- Image URLs from PA-API expire, which is why images are downloaded to R2
  instead of hotlinked.
- Entry ids and R2 keys both derive from the product title (`itemId` in
  `lib.mjs`), so they always match across scripts.
- The partner tag lives in `lib.mjs` (`PARTNER_TAG`) and must stay in sync
  with `AFFILIATE_IDS.amazonTag` in `src/data/shop.js`.
