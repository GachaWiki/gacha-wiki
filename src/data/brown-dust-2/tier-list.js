// Brown Dust 2 community tier list, in the site's standard tier-row layout,
// covering the full roster. SS/S/A follow the GameWith character ranking
// (October 26, 2026); the B row holds the characters GameWith does not rate,
// placed per DotGG's PvE table (October 3, 2026); NR = not rated by any
// current source. Cross-checked against Kamigame (October 22), the Korean
// Arca.live dealer table (October 30) and the Bahamut guide (October 24).
// JP and EN character names differ for two entries: JP Jenis is EN Zenith,
// JP Ruvia is EN Rubia. Kyubi has no EN wiki coverage yet and renders as an
// unlinked tile.
export const BD2_TIER_LIST = {
  lastUpdated: 'October 30, 2026',
  tiers: [
    {
      tier: 'SS',
      chars: ['mamonir', 'granadair', 'liberta', 'sacred-justia', 'refithea', 'diana', 'helena', 'teresse'],
    },
    {
      tier: 'S',
      chars: [
        'palette', 'darian', 'tyr', 'sonya', 'olivier', 'wilhelmina', 'blade', 'luvencia',
        'levia', 'venaka', 'nebris', 'zenith', 'eleaneer', 'celia', 'seir', 'lathel',
      ],
    },
    {
      tier: 'A',
      chars: [
        'ren-yamashiro', 'tenka-izumo', 'aquila', 'nekyndalia', 'ikaruga', 'arines', 'elpis',
        'priestess', 'hikage', 'yumi', 'michaela', 'morpeah', 'loen', 'granhildr', 'Kyubi',
        'yuri', 'ventana', 'angelica', 'elise', 'rafina', 'anastasia', 'liatris', 'eclipse',
        'rubia', 'sylvia', 'rou', 'scheherazade', 'justia',
      ],
    },
    {
      tier: 'B',
      chars: [
        'eris', 'dalvi', 'yozakura', 'nartas', 'roxy', 'alec', 'gray', 'high-elf-archer',
        'yomi', 'sword-maiden', 'glacia', 'goblin-slayer',
      ],
    },
    {
      tier: 'NR',
      chars: [
        'layla', 'lisianne', 'bernie', 'gynt', 'fred', 'remnunt', 'samay', 'andrew', 'jayden',
        'emma', 'ingrid', 'cynthia', 'julie', 'carlson', 'lydia', 'rigenette', 'beatrice',
        'maria', 'kry', 'lecliss', 'olstein', 'wiggle', 'kyouka-uzen', 'lucrezia',
      ],
    },
  ],
};
