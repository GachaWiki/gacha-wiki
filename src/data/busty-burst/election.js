// JP server anniversary Paladin Popularity Election results.
// Wording follows the official event notices (人気聖騎士総選挙):
// voting tickets are earned through AP spent, SSR 1st gets a new costume
// plus an exclusive weapon, SR 1st is promoted to SSR later.
// Source: official in-game notices, archived on the JP wiki event pages.

export const ELECTIONS = [
  {
    id: '3rd-anniversary',
    name: '3rd Anniversary Paladin Popularity Election',
    jpName: '3周年Anniversary人気聖騎士総選挙',
    dates: 'September 3 - 17, 2026',
    ticketLine: 'Voting tickets earned based on AP spent.',
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
      { rank: 1, name: 'Elaine', slug: 'elaine', votes: 10254948 },
      { rank: 2, name: 'Hanis', slug: null, votes: 8313796 },
      { rank: 3, name: 'Black Knight', slug: 'the-dark-knight', votes: 7565749 },
      { rank: 4, name: 'Yomi', slug: null, votes: 6343898 },
      { rank: 5, name: 'Walpriede', slug: null, votes: 5703931 },
      { rank: 6, name: 'Noa', slug: null, votes: 4775037 },
      { rank: 7, name: 'Sura', slug: 'sura', votes: 4571908 },
      { rank: 8, name: 'Melfis', slug: null, votes: 4115315 },
      { rank: 9, name: 'Theresia', slug: 'theresia', votes: 3861317 },
      { rank: 10, name: 'Captain Frigis', slug: 'captain-of-the-vern-holy-knights-order-frigis', votes: 3747761 },
    ],
    sr: [
      { rank: 1, name: 'Tsukina', slug: 'tsukina', votes: 15476702 },
      { rank: 2, name: 'Yukata Raoul & Cluul', slug: null, votes: 11612418 },
      { rank: 3, name: 'Yukata Louise', slug: null, votes: 9751829 },
      { rank: 4, name: 'Navigator Katicia', slug: null, votes: 8756503 },
      { rank: 5, name: 'Sky Festival Songstress Bernadette', slug: 'songstress-of-the-sky-festival-bernadette', votes: 7959668 },
      { rank: 6, name: 'Rui', slug: 'rui', votes: 7275902 },
      { rank: 7, name: 'Sharik', slug: 'sharik', votes: 7069521 },
      { rank: 8, name: 'Horse-Hopscotch Tsukina', slug: null, votes: 6500645 },
      { rank: 9, name: 'Emerald Bride Reslia', slug: null, votes: 6221644 },
      { rank: 10, name: 'Nerine', slug: 'nerine', votes: 3984534 },
    ],
  },
  {
    id: '2nd-anniversary',
    name: '2nd Anniversary Paladin Popularity Election',
    jpName: '2周年Anniversary人気聖騎士総選挙',
    dates: 'September 4 - 25, 2025 (extended by one week)',
    ticketLine: 'Voting tickets earned based on AP spent.',
    rewards:
      'SSR group 1st place: new costume plus an exclusive weapon. SR group 1st place: SSR promotion at a later date.',
    titleThreshold: 3000,
    missions: [],
    ssrWinnerNote: 'Melfis took 1st in the SSR group: new costume and exclusive weapon implemented.',
    srWinnerNote: 'Super Bust Dirndl Adrienne took 1st in the SR group: promoted to SSR (already live in EN).',
    ssr: [
      { rank: 1, name: 'Melfis', slug: null, votes: 36685037 },
      { rank: 2, name: 'Reiki', slug: null, votes: 25274278 },
      { rank: 3, name: 'Elaine', slug: 'elaine', votes: 18951805 },
      { rank: 4, name: 'Hanis', slug: null, votes: 17891909 },
      { rank: 5, name: 'Yura', slug: 'yura', votes: 17163008 },
      { rank: 6, name: 'Noa', slug: null, votes: 8152305 },
      { rank: 7, name: 'Captain Frigis', slug: 'captain-of-the-vern-holy-knights-order-frigis', votes: 7916235 },
      { rank: 8, name: 'Bernadette', slug: 'bernadette', votes: 6223083 },
      { rank: 9, name: 'Black Knight', slug: 'the-dark-knight', votes: 5805652 },
      { rank: 10, name: 'Goddess of Wisdom and Courage Athena', slug: 'athena', votes: 5596615 },
    ],
    sr: [
      { rank: 1, name: 'Super Bust Dirndl Adrienne', slug: 'super-bust-dirndl-adrienne', votes: 47250124 },
      { rank: 2, name: 'Nerine', slug: 'nerine', votes: 28919878 },
      { rank: 3, name: 'Sharik', slug: 'sharik', votes: 24496576 },
      { rank: 4, name: 'Sky Festival Songstress Bernadette', slug: 'songstress-of-the-sky-festival-bernadette', votes: 22183360 },
      { rank: 5, name: 'Rui', slug: 'rui', votes: 16686813 },
      { rank: 6, name: 'Yukata Louise', slug: null, votes: 14285335 },
      { rank: 7, name: 'Tsukina', slug: 'tsukina', votes: 11374939 },
      { rank: 8, name: 'Kirie', slug: null, votes: 8442265 },
      { rank: 9, name: 'Nue', slug: 'nue', votes: 6368763 },
      { rank: 10, name: 'Bride of Seduction Ophelio', slug: 'the-bride-of-seduction-ophelio', votes: 6360732 },
    ],
  },
];
