// JP server anniversary Paladin Popularity Election results.
// Wording follows the official event notices (人気聖騎士総選挙):
// voting tickets are earned through AP spent, SSR 1st gets a new costume
// plus an exclusive weapon, SR 1st is promoted to SSR later.
// Source: official in-game notices, archived on the JP wiki event pages.
// jpWikiUrl = wikiru event page; xPosts = official JP account (@kyonyuburst)
// posts (deleted posts link to their Wayback Machine capture, the only archive).
// Row art: ELECTION_ART_DIMS keys map to R2 busty-burst/election/rows/<key>.webp
// (image-manifest ELECTION_ART), card art from the JP wiki character pages.
// Banner: the event key visual from the X opening post, already on R2
// busty-burst/x/<tid>-1.webp. Reslia uses her base art; her Emerald Bride
// page has no art attached.

export const ELECTION_ART_DIMS = {
  elaine: [1287, 1684],
  hanis: [1640, 1753],
  'black-knight': [1201, 1557],
  yomi: [1054, 1468],
  walpriede: [1098, 1613],
  noa: [1385, 1545],
  sura: [1532, 1527],
  melfis: [1083, 2025],
  theresia: [688, 1633],
  frigis: [1861, 1814],
  tsukina: [1041, 1362],
  'yukata-raoul-cluul': [1099, 1009],
  'yukata-louise': [1070, 1286],
  katicia: [648, 1602],
  'sky-festival-bernadette': [600, 1359],
  rui: [1367, 1536],
  sharik: [794, 778],
  'horse-hopscotch-tsukina': [1331, 1584],
  reslia: [1393, 1614],
  nerine: [773, 1328],
  reiki: [1728, 1772],
  yura: [1543, 1571],
  bernadette: [1530, 1543],
  athena: [920, 891],
  'super-bust-dirndl-adrienne': [833, 1162],
  kirie: [986, 1395],
  nue: [1515, 1725],
  ophelio: [1484, 1291],
};

export const ELECTIONS = [
  {
    id: '3rd-anniversary',
    name: '3rd Anniversary Paladin Popularity Election',
    jpName: '3周年Anniversary人気聖騎士総選挙',
    dates: 'September 3 - 17, 2026',
    ticketLine: 'Voting tickets earned based on AP spent.',
    banner: { tid: '2095422796092637351', w: 1920, h: 1080 },
    jpWikiUrl: 'https://kyonyufantasyburst.wikiru.jp/?イベント157_3周年Anniversary人気聖騎士総選挙',
    xPosts: [
      { label: 'X opening post', url: 'https://x.com/kyonyuburst/status/2095422796092637351' },
      { label: 'X results post', url: 'https://x.com/kyonyuburst/status/2100484901237923962' },
    ],
    rewards:
      'SSR group 1st place: new costume confirmed, plus an exclusive weapon planned. SR group 1st place: SSR promotion at a later date.',
    titleThreshold: 5000,
    missions: [
      { tickets: 100, crystals: 100 },
      { tickets: 300, crystals: 100 },
      { tickets: 500, crystals: 200 },
      { tickets: 1000, crystals: 200 },
      { tickets: 3000, crystals: 400 },
    ],
    ssrWinnerNote: 'Elaine takes 1st in the SSR group: new costume and exclusive weapon planned.',
    srWinnerNote: 'Tsukina takes 1st in the SR group: SSR promotion planned.',
    ssr: [
      { rank: 1, name: 'Elaine', slug: 'elaine', votes: 10254948, art: 'elaine' },
      { rank: 2, name: 'Hanis', slug: null, votes: 8313796, art: 'hanis' },
      { rank: 3, name: 'Black Knight', slug: 'the-dark-knight', votes: 7565749, art: 'black-knight' },
      { rank: 4, name: 'Yomi', slug: null, votes: 6343898, art: 'yomi' },
      { rank: 5, name: 'Walpriede', slug: null, votes: 5703931, art: 'walpriede' },
      { rank: 6, name: 'Noa', slug: null, votes: 4775037, art: 'noa' },
      { rank: 7, name: 'Sura', slug: 'sura', votes: 4571908, art: 'sura' },
      { rank: 8, name: 'Melfis', slug: null, votes: 4115315, art: 'melfis' },
      { rank: 9, name: 'Theresia', slug: 'theresia', votes: 3861317, art: 'theresia' },
      { rank: 10, name: 'Captain Frigis', slug: 'captain-of-the-vern-holy-knights-order-frigis', votes: 3747761, art: 'frigis' },
    ],
    sr: [
      { rank: 1, name: 'Tsukina', slug: 'tsukina', votes: 15476702, art: 'tsukina' },
      { rank: 2, name: 'Yukata Raoul & Cluul', slug: null, votes: 11612418, art: 'yukata-raoul-cluul' },
      { rank: 3, name: 'Yukata Louise', slug: null, votes: 9751829, art: 'yukata-louise' },
      { rank: 4, name: 'Navigator Katicia', slug: null, votes: 8756503, art: 'katicia' },
      { rank: 5, name: 'Sky Festival Songstress Bernadette', slug: 'songstress-of-the-sky-festival-bernadette', votes: 7959668, art: 'sky-festival-bernadette' },
      { rank: 6, name: 'Rui', slug: 'rui', votes: 7275902, art: 'rui' },
      { rank: 7, name: 'Sharik', slug: 'sharik', votes: 7069521, art: 'sharik' },
      { rank: 8, name: 'Horse-Hopscotch Tsukina', slug: null, votes: 6500645, art: 'horse-hopscotch-tsukina' },
      { rank: 9, name: 'Emerald Bride Reslia', slug: null, votes: 6221644, art: 'reslia' },
      { rank: 10, name: 'Nerine', slug: 'nerine', votes: 3984534, art: 'nerine' },
    ],
  },
  {
    id: '2nd-anniversary',
    name: '2nd Anniversary Paladin Popularity Election',
    jpName: '2周年Anniversary人気聖騎士総選挙',
    dates: 'September 4 - 25, 2025 (extended by one week)',
    ticketLine: 'Voting tickets earned based on AP spent.',
    banner: { tid: '1963498262381408377', w: 1200, h: 675 },
    jpWikiUrl: 'https://kyonyufantasyburst.wikiru.jp/?イベント103_2周年Anniversary人気聖騎士総選挙',
    xPosts: [
      { label: 'X opening post (Wayback Machine)', url: 'https://web.archive.org/web/20250904070400/https://twitter.com/kyonyuburst/status/1963498262381408377' },
      { label: 'X results post (Wayback Machine)', url: 'https://web.archive.org/web/20250925080400/https://twitter.com/kyonyuburst/status/1971123506571284868' },
    ],
    rewards:
      'SSR group 1st place: new costume plus an exclusive weapon. SR group 1st place: SSR promotion at a later date.',
    titleThreshold: 3000,
    missions: [],
    ssrWinnerNote: 'Melfis took 1st in the SSR group: new costume and exclusive weapon implemented.',
    srWinnerNote: 'Super Bust Dirndl Adrienne took 1st in the SR group: promoted to SSR (already live in EN).',
    ssr: [
      { rank: 1, name: 'Melfis', slug: null, votes: 36685037, art: 'melfis' },
      { rank: 2, name: 'Reiki', slug: null, votes: 25274278, art: 'reiki' },
      { rank: 3, name: 'Elaine', slug: 'elaine', votes: 18951805, art: 'elaine' },
      { rank: 4, name: 'Hanis', slug: null, votes: 17891909, art: 'hanis' },
      { rank: 5, name: 'Yura', slug: 'yura', votes: 17163008, art: 'yura' },
      { rank: 6, name: 'Noa', slug: null, votes: 8152305, art: 'noa' },
      { rank: 7, name: 'Captain Frigis', slug: 'captain-of-the-vern-holy-knights-order-frigis', votes: 7916235, art: 'frigis' },
      { rank: 8, name: 'Bernadette', slug: 'bernadette', votes: 6223083, art: 'bernadette' },
      { rank: 9, name: 'Black Knight', slug: 'the-dark-knight', votes: 5805652, art: 'black-knight' },
      { rank: 10, name: 'Goddess of Wisdom and Courage Athena', slug: 'athena', votes: 5596615, art: 'athena' },
    ],
    sr: [
      { rank: 1, name: 'Super Bust Dirndl Adrienne', slug: 'super-bust-dirndl-adrienne', votes: 47250124, art: 'super-bust-dirndl-adrienne' },
      { rank: 2, name: 'Nerine', slug: 'nerine', votes: 28919878, art: 'nerine' },
      { rank: 3, name: 'Sharik', slug: 'sharik', votes: 24496576, art: 'sharik' },
      { rank: 4, name: 'Sky Festival Songstress Bernadette', slug: 'songstress-of-the-sky-festival-bernadette', votes: 22183360, art: 'sky-festival-bernadette' },
      { rank: 5, name: 'Rui', slug: 'rui', votes: 16686813, art: 'rui' },
      { rank: 6, name: 'Yukata Louise', slug: null, votes: 14285335, art: 'yukata-louise' },
      { rank: 7, name: 'Tsukina', slug: 'tsukina', votes: 11374939, art: 'tsukina' },
      { rank: 8, name: 'Kirie', slug: null, votes: 8442265, art: 'kirie' },
      { rank: 9, name: 'Nue', slug: 'nue', votes: 6368763, art: 'nue' },
      { rank: 10, name: 'Bride of Seduction Ophelio', slug: 'the-bride-of-seduction-ophelio', votes: 6360732, art: 'ophelio' },
    ],
  },
];
