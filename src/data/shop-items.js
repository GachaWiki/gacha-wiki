// TCG Shop catalog: Weiss Schwarz sets for gacha games, Amazon US links only.
// Every entry renders as one full-width rich card on /shop (image, blurb,
// specs, sample cards) under the filter toolbar.
// New entries come from the scanner pipeline in tools/shop-scanner; fill the
// editorial fields (blurb, specs, release) from official Bushiroad product
// info before merging. No unreviewed or invented product data. cardPreviews
// are sample-card images harvested by fetch_card_previews.mjs.

// Display labels for the item type filter and grid badges.
export const SHOP_TYPES = {
  'booster-box': 'Booster Box',
  'trial-deck': 'Trial Deck',
  'special-set': 'Special Set',
  'booster-pack': 'Booster Pack',
  other: 'TCG Product',
};

export const SHOP_ITEMS = [
  {
    id: 'nikke-vol2',
    name: 'GODDESS OF VICTORY: NIKKE Vol.2',
    franchise: 'GODDESS OF VICTORY: NIKKE',
    type: 'booster-box',
    wikiGame: null,
    tagline: 'WSに勝利の女神の祝福を。',
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/nikke-ws-vol2-box.webp',
    imageAlt: 'Weiss Schwarz GODDESS OF VICTORY: NIKKE Vol.2 booster box art',
    imageWidth: 400,
    imageHeight: 400,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol2-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol2-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol2-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-nik2',
    blurb:
      'The second Weiss Schwarz set for NIKKE. Features Rapi: Red Hood, Cinderella, Grave and more, with hot-stamped sign cards from 40 cast members and newly drawn illustrator art. All editions are out now: Japanese and Korean since September 19, English since September 25, 2026.',
    specs: [
      'English edition: 8 cards per pack, 10 packs per booster box',
      '112 card types plus parallel types',
      'Sign cards from 40 voice actors, including 9 SSP and 31 SP',
      '14 exclusive newly-drawn illustrations',
      '1 of 26 exclusive PR cards per booster box',
    ],
    releases: [
      { region: 'English', date: '2026-09-25', status: 'out' },
      { region: 'Japanese', date: '2026-09-19', status: 'out' },
      { region: 'Korean', date: '2026-09-19', status: 'out' },
    ],
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=goddess+of+victory+nikke+weiss+schwarz',
        note: 'EN and JP boxes, fast shipping',
      },
    ],
  },
  {
    id: 'nikke-vol1',
    name: 'GODDESS OF VICTORY: NIKKE (Vol.1) + Trial Deck',
    franchise: 'GODDESS OF VICTORY: NIKKE',
    type: 'booster-box',
    wikiGame: null,
    tagline: '勝利の女神：NIKKE',
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/nikke-ws-vol1-pack.webp',
    imageAlt: 'Weiss Schwarz GODDESS OF VICTORY: NIKKE Vol.1 booster pack art',
    imageWidth: 400,
    imageHeight: 647,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol1-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol1-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/nikke-vol1-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-nik',
    blurb:
      'The first Weiss Schwarz set for NIKKE and the Trial Deck that lets new players start playing right away. The Japanese edition launched in December 2024, the English edition followed on April 18, 2025, and an official reprint has kept sealed boxes easy to find.',
    specs: [
      'English edition: 8 cards per pack, 12 packs per booster box, US$4.50 per pack',
      '115 card types plus 173 parallel types',
      'SP cards of the Nikke cast, English-exclusive stitched playmat per carton',
      'Trial Deck: prebuilt yellow and red deck, great for beginners',
    ],
    releases: [
      { region: 'English', date: '2025-04-18', status: 'out' },
      { region: 'Japanese', date: '2024-12-13', status: 'out' },
    ],
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=goddess+of+victory+nikke+weiss+schwarz',
        note: 'EN and JP boxes',
      },
    ],
  },
  {
    id: 're-zero-vol3',
    name: 'Re:ZERO -Starting Life in Another World- Vol.3',
    franchise: 'Re:Zero',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/re-zero-vol3.webp',
    imageAlt: 'Weiss Schwarz Re:ZERO Vol.3 booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/re-zero-vol3-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/re-zero-vol3-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/re-zero-vol3-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-rzv3/',
    blurb:
      'Third English edition booster for Re:Zero. 100 normal card types plus 116 parallels, with English-exclusive cards, Secret Plus rares and a serial-numbered SIR chase card.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '100 normal card types plus 116 parallel types',
      'English-exclusive ENX cards and SEC+ secret rares',
    ],
    release: '2026-08-28',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+re+zero+vol+3+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'blue-archive-the-animation',
    name: 'Blue Archive The Animation',
    franchise: 'Blue Archive',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/blue-archive-the-animation.webp',
    imageAlt: 'Weiss Schwarz Blue Archive The Animation booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/blue-archive-the-animation-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/blue-archive-the-animation-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/blue-archive-the-animation-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-bava/',
    blurb:
      'English edition booster for the Blue Archive anime. 100 normal card types plus 121 parallels, with 3 English-exclusive cards and an exclusive PR card in every display box.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '100 normal card types plus 121 parallel types',
      '1 of 6 exclusive PR cards per display box',
    ],
    release: '2026-07-31',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+blue+archive+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'umamusume-pretty-derby',
    name: 'Umamusume: Pretty Derby',
    franchise: 'Uma Musume Pretty Derby',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/umamusume-pretty-derby.webp',
    imageAlt: 'Weiss Schwarz Umamusume: Pretty Derby booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/umamusume-pretty-derby-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/umamusume-pretty-derby-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/umamusume-pretty-derby-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-uma/',
    blurb:
      'The first English edition booster for Umamusume: Pretty Derby. A deep 155 normal card types plus 155 parallels, with OFR and SP rares and an exclusive PR card in every display box.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '155 normal card types plus 155 parallel types',
      '1 of 2 exclusive PR cards per display box',
    ],
    release: '2026-06-26',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+umamusume+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'umamusume-trial-deck-race-2',
    name: 'Umamusume: Pretty Derby Trial Deck Race 2',
    franchise: 'Uma Musume Pretty Derby',
    type: 'trial-deck',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/umamusume-trial-deck-race-2.webp',
    imageAlt: 'Weiss Schwarz Umamusume: Pretty Derby Trial Deck Race 2 box art',
    imageWidth: 308,
    imageHeight: 500,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/umamusume-trial-deck-race-2-1.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/td-umar2/',
    blurb:
      'Prebuilt 50-card Trial Deck that plays right out of the box, released alongside the booster. Every deck guarantees an RRR embossed or OFR card, and includes a playmat and rules sheet.',
    specs: [
      '50 cards per deck, 6 decks per display',
      '18 card types plus 18 parallel types',
      'Playmat and rules sheet included',
    ],
    release: '2026-06-26',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+umamusume+trial+deck',
        note: '',
      },
    ],
  },
  {
    id: 'oshi-no-ko-vol2',
    name: '【OSHI NO KO】 Vol.2',
    franchise: 'Oshi no Ko',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/oshi-no-ko-vol2.webp',
    imageAlt: 'Weiss Schwarz Oshi no Ko Vol.2 booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol2-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol2-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol2-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-osk2/',
    blurb:
      'Second English edition booster for Oshi no Ko, 220 cards deep, with hot-stamped sign cards from six cast members including Rie Takahashi and Takeo Otsuka.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '220 total card types including parallels',
      'Sign cards from 6 voice actors',
    ],
    release: '2026-03-27',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+oshi+no+ko+vol+2+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'sao-gun-gale-online-2',
    name: 'SAO Alternative Gun Gale Online 2',
    franchise: 'Sword Art Online',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/sao-gun-gale-online-2.webp',
    imageAlt: 'Weiss Schwarz Sword Art Online Alternative Gun Gale Online 2 box art',
    imageWidth: 396,
    imageHeight: 500,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/sao-gun-gale-online-2-1.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/eb-ggo2/',
    blurb:
      'Extra Booster covering Sword Art Online Alternative: Gun Gale Online. 60 normal card types plus 73 parallels, with hot-stamped autographs from the GGO cast and even author Keiichi Sigsawa.',
    specs: [
      '6 cards per pack, 6 packs per display',
      '60 normal card types plus 73 parallel types',
      'Autographs from the GGO cast and the series author',
    ],
    release: '2025-09-05',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+gun+gale+online+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'bang-dream-mygo-ave-mujica',
    name: 'MyGO!!!!! × Ave Mujica',
    franchise: 'BanG Dream!',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/bang-dream-mygo-ave-mujica.webp',
    imageAlt: 'Weiss Schwarz BanG Dream! MyGO!!!!! × Ave Mujica booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/bang-dream-mygo-ave-mujica-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/bang-dream-mygo-ave-mujica-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/bang-dream-mygo-ave-mujica-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-bdam-2/',
    blurb:
      'English edition booster for BanG Dream! It MyGO!!!!! and Ave Mujica. 100 normal card types plus 140 parallels, 20 newly drawn member illustrations and 10 serial-numbered SIR cards.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '100 normal card types plus 140 parallel types',
      'English-exclusive stitched playmat per carton',
    ],
    release: '2025-07-18',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+mygo+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'hatsune-miku-colorful-stage',
    name: 'HATSUNE MIKU: COLORFUL STAGE!',
    franchise: 'Project Sekai',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/hatsune-miku-colorful-stage.webp',
    imageAlt: 'Weiss Schwarz Hatsune Miku: Colorful Stage! booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/hatsune-miku-colorful-stage-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/hatsune-miku-colorful-stage-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/hatsune-miku-colorful-stage-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-pjs/',
    blurb:
      'English edition booster for Project Sekai: Colorful Stage feat. Hatsune Miku. 108 normal card types plus 105 parallels, with hot-stamped sign cards from the Vocaloid voice providers and 20 cast voice actors.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      '108 normal card types plus 105 parallel types',
      'Sign cards from Vocaloid voice providers and cast',
    ],
    release: '2025-06-27',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+hatsune+miku+colorful+stage+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'love-live-sif2-miracle-live',
    name: 'Love Live! School idol festival 2 MIRACLE LIVE!',
    franchise: 'Love Live!',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/love-live-sif2-miracle-live.webp',
    imageAlt: 'Weiss Schwarz Love Live! School idol festival 2 MIRACLE LIVE! booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/love-live-sif2-miracle-live-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/love-live-sif2-miracle-live-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/love-live-sif2-miracle-live-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-llsif-2/',
    blurb:
      'English edition booster for Love Live! School idol festival 2 MIRACLE LIVE!, spanning the whole franchise. 138 normal card types plus 142 parallels and sign cards from four lead voice actresses.',
    specs: [
      '9 cards per pack, 16 packs per booster box',
      '138 normal card types plus 142 parallel types',
      'Sign cards from 4 voice actresses',
    ],
    release: '2024-11-08',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+love+live+school+idol+festival+booster+box',
        note: '',
      },
    ],
  },
  {
    id: 'oshi-no-ko-vol1',
    name: '【OSHI NO KO】',
    franchise: 'Oshi no Ko',
    type: 'booster-box',
    wikiGame: null,
    image: 'https://k2b1c5ab57ed98e51.gachawiki.info/shop/oshi-no-ko-vol1.webp',
    imageAlt: 'Weiss Schwarz Oshi no Ko booster box art',
    imageWidth: 500,
    imageHeight: 449,
    cardPreviews: [
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol1-1.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol1-2.webp',
      'https://k2b1c5ab57ed98e51.gachawiki.info/shop/cards/oshi-no-ko-vol1-3.webp',
    ],
    officialUrl: 'https://en.ws-tcg.com/products/bp-osk/',
    blurb:
      'The first English edition booster for Oshi no Ko. 100 normal card types plus 100 parallels, six newly drawn illustrations and hot-stamped sign cards from the six main cast members.',
    specs: [
      '9 cards per pack, 16 packs per booster box',
      '100 normal card types plus 100 parallel types',
      '6 newly drawn illustrations',
    ],
    release: '2024-09-20',
    links: [
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=weiss+schwarz+oshi+no+ko+booster+box',
        note: '',
      },
    ],
  },
];

// Unique sorted franchise list for the shop filter dropdown.
export function getShopFranchises() {
  return [...new Set(SHOP_ITEMS.map((i) => i.franchise).filter(Boolean))].sort();
}
