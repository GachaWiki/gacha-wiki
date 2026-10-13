# Weiss Schwarz Card DB importer

Imports the official English Weiss Schwarz cardlist (en.ws-tcg.com) for the
sets the shop carries and generates the wiki card database at
`/weiss-schwarz/cards/`. Runs on Bun, no extra dependencies.

Pipeline per set (three commands):

```bash
bun tools/ws-carddb/import-cards.mjs <setId>            # card data -> sets/<setId>.json
bun tools/ws-carddb/fetch-card-images.mjs <setId> --upload   # images -> R2 ws-cards/
bun tools/ws-carddb/gen-data.mjs <setId>                 # -> src/data/ws-cards/
```

## How it works

- The cardlist search results are JS-paginated, but the pagination endpoint
  `GET /cardlist/cardsearch_ex?expansion_name=<id>&view=text&page=N` returns
  plain HTML fragments with curl + a browser user agent (the site 404s some
  non-browser UAs). No headless browser needed.
- Every card entry is parsed with its FULL variant list (foil SP/SEC/SSP...
  included), matching the official per-set item count. Counts are
  cross-checked against the site's "N items" total on import.
- Card images come from
  `en.ws-tcg.com/wordpress/wp-content/images/cardimages/<SET>/<NUM>.png`
  (URL is embedded per card), converted to webp (sharp) and uploaded to
  R2 `gachawiki-images/ws-cards/<setId>/<num>.webp`.
- `gen-data.mjs` writes `src/data/ws-cards/<setId>.js` and regenerates the
  registry `index.js` (newest set first). The page, filters, popup and
  shop cross-links all derive from the registry.

## Adding a new set

1. Add the set to `SETS` in `lib.mjs`: wiki id, official expansion id (look
   it up in the expansion `<select>` on en.ws-tcg.com/cardlist/), display
   name, EN release date, and the matching shop item id.
2. Run the three commands above with the new setId.
3. Check the dev server `/weiss-schwarz/cards/` and `/shop/` (the shop card
   gains a "Card database" link automatically via the registry).

## Gotchas

- Use `fetch` for binary downloads, never Bun's `execFile`: it returns
  stdout as a UTF-8 string and corrupts image bytes.
- wrangler flakes on Windows (~1 in 20 puts): the uploader runs a 4-process
  pool and retries every file once.
- A few variant images legitimately do not exist upstream (404): they are
  skipped and counted as "unavailable upstream"; the card still appears in
  the database with its data and no image.
- Card data is official Bushiroad content imported for reference; keep the
  fineprint attribution on the page.
