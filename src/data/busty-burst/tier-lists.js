import { BUSTY_BURST_PALADINS } from './paladins.js';
import { getCharacterDataBySlug } from './character-database.js';

export const BUSTY_BURST_TIER_LISTS = {
  beginner: {
    name: 'SSR Tier List',
    description:
      'Tier list for SSR characters. Covers general performance across all game modes.',
    lastUpdated: '2026-11-03',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Must-have for beginners',
          color: '#ff6b6b',
        },
        characters: ['festive_attire_estiriel', 'frey', 'dragon_crusher_medusa', 'messeria', 'top_dancer_messeria', 'sweet-bunny-artia', 'underboob-cheerleader-gemini', 'tempting-naked-apron-diana',
          // October 2026 Burst FES release (user correction: SSS DPS)
          'elaine',
          // October 2026 The Sun and the Moon release (user: SSS support duo, both work on physical and magic teams)
          'bernadette', 'adrienne',],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent choices for early progression',
          color: '#feca57',
        },
        characters: [
          'teresia', 'dark_knight', 'ophelio', 'luca', 'lapis', 'rosa', 'chocolate-hildis', 'giselle', 'meinias', 'shaty', 'gemini', 'lust', 'setsuka', 'samurai_cow_girl_setsuka', 'trish', 'diana', 'priscilla',
          // September 2026 wave (rated from kits)
          'school-bloomers-black-knight', 'ange', 'raffine', 'the-bride-of-luck-theresia', 'alluring-naked-apron-zilka', 'gil', 'nina',
          // October 2026 Entwined with the Wind release (user: SS; skip the banner, she joins the Tower of Trials Summon pool / 200 pity exchange)
          'lin',
          // October 2026 Octopus Empire's Counterattack release (user verdict: SS)
          'aiming-for-your-heart-shaty',
          'riding-the-big-wave-of-love-priscilla',
          // November 2026 Midsummer Sky Festival release (user verdict: SS; Holy damage taken UP debuff, can tank in front, mostly physical teams but works with magic)
          'swordsman-of-the-sky-festival-raguen',
        ],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong characters for early game',
          color: '#48dbfb',
        },
        characters: [
          'festival_empress_shamshel',
          'elegant_portrait_shamshel',
          'artia',
          'estiriel',
          'hildis',
          'marina',
          'stenlina',
          'hisara',
          'bianca',
          'natasha',
          'queen_of_pies_and_cookies_aphrodia',
          'killer_bikini_theresia',
          'lucie',
          'viatrice',
          'underboob_cheerleader_vanessa',
          'ishtovia',
          'seductive_vampire_soltina',
          'noble_succubus_empress_shamshel',
          'chocolate-frey',
          'fruit_basket_bianca',
          'lycorys',
          'inrine',
          'ruru',
          'zilka',
          'lilith',
          'lilirara',
          'ilugio',
          // Summer + September 2026 wave (rated from kits)
          'the-bride-of-purity-giselle',
          'sirius',
          'getting-out-of-the-pool-artia',
          'ines',
          'eva',
          'yaksha',
          'fionore',
          // October 2026 FANZINE 4th release (user verdict: S)
          'skateboarder-nue',
          // November 2026 Midsummer Sky Festival release (user verdict: S; good AoE dealer, some events and maps need her, not game-breaking)
          'fireworks-master-of-the-sky-festival-viatrice',
        ],
      },
      {
        tier: 'A',
        definition: {
          label: 'A',
          description: 'Good starting options',
          color: '#1dd1a1',
        },
        characters: [
          'magical_princess_luceria',
          'sobrina',
          'nora',
          'yu_lima_elka',
          'magical_holy_night_festival_kaguya',
          'new_years_calligraphy_pastel',
          'pastel',
          'seductive_high_cut_swimsuit_nerys',
          'raguen',
          'soltina',
          'elegant_portrait_aysis',
          'golem_summoner_nerys',
          'the_strongest_witch_shaharl',
          'kaguya',
          'mischievous_mermaid_princess_lorelia',
          'magdalena',
          // Summer 2026 wave (rated from kits)
          'bonita',
          'raoul',
          'cluul',
          'abigail',
          'american-police-lapis',
        ],
      },
    ],
  },
  sr: {
    name: 'SR Tier List',
    description:
      'Tier list for SR characters in SR Raid mode.',
    lastUpdated: '2026-11-03',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Best SR characters',
          color: '#ff6b6b',
        },
        characters: ['liesel'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent SR choices',
          color: '#feca57',
        },
        characters: ['venus', 'artemis', 'chocolate-shaty', 'rui', 'raffi'],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong SR characters',
          color: '#48dbfb',
        },
        characters: [
          'nue',
          'slightly-mischievous-devil-luca',
          'collie',
          'the-bride-of-seduction-ophelio',
          'sarka',
          // November 2026 list split: SR units moved out of the SSR list, tier letters kept
          'sr_gracie',
          // October 2026 The Sun and the Moon SR (user correction: S tier)
          'sharik',
          // November 2026 Midsummer Sky Festival SR, free event unit (user verdict: S; nice support that increases crit rate, activates her ultimate quite fast)
          'songstress-of-the-sky-festival-bernadette',
        ],
      },
      {
        tier: 'A',
        definition: {
          label: 'A',
          description: 'Good SR options',
          color: '#1dd1a1',
        },
        characters: [
          'festive_natasha',
          'holy_night_succubus_yu_rima_elca',
          'overflowing_jubako_lynette',
          'epic_fishing_meinias',
          'sr_gladys',
          'sr_emelaria',
          'sr_nerys',
          'sr_irina',
          'sr_sobrina',
          'sr_messeria',
          'sr_paia',
          'sr_azura',
          'sr_zoe',
          'sr_constantia',
          'sr_farneria',
          'sr_athena',
          'sr_medusa',
          'sr_lucrezia',
          'sr_ishtovia',
          'sr_veronica',
          'sr_celestia',
          'sr_guinevia',
          'vanessa',
          'beautia',
          'underboob-cheerleader-henrietti',
          'ashley',
          // November 2026 list split: SR units moved out of the SSR list, tier letters kept
          'want_some_beer_stenrina',
          'katisha',
        ],
      },
      {
        tier: 'B',
        definition: {
          label: 'B',
          description: 'Decent SR characters',
          color: '#8b8b8b',
        },
        characters: [
          'sr_henrietti',
        ],
      },
    ],
  },
};

// Per-character tier notes keyed by tier list character id.
// Shape follows the Horizon Walker tier notes: type info/warning,
// optional variant + shortTitle for the on-card highlight chip.
export const TIER_NOTES = {
  'riding-the-big-wave-of-love-priscilla': {
    type: 'info',
    title: 'Best def down and Wind damage taken up',
    text: 'Best def down and Wind damage taken up using her ultimate. Works very well with physical and mono teams.',
  },
  'swordsman-of-the-sky-festival-raguen': {
    type: 'info',
    title: 'Holy damage taken UP debuff, front tank',
    text: 'Her Holy type damage taken UP debuff is a really good damage increase for the team, and she can act as a tank in front. Mostly used in physical teams but works with magic teams too. Good damage.',
  },
  'fireworks-master-of-the-sky-festival-viatrice': {
    type: 'info',
    title: 'Good AoE dealer for events and maps',
    text: 'Good AoE dealer, some events and maps need her. Not game-breaking.',
  },
  'songstress-of-the-sky-festival-bernadette': {
    type: 'info',
    title: 'Nice support with fast ultimates',
    text: 'Nice support that increases crit rate, and she can activate her ultimate quite fast.',
  },
};

export const getTierList = (listName = 'beginner') => {
  const tierList = BUSTY_BURST_TIER_LISTS[listName];
  if (!tierList) return null;

  // Map character IDs to full character data
  const tiersWithData = tierList.tiers.map(tier => ({
    ...tier,
    characters: tier.characters
      .map(
        charId =>
          BUSTY_BURST_PALADINS.find(p => p.id === charId) || {
            id: charId,
            name: 'Unknown',
            image: '',
          }
      )
      .filter(Boolean), // Remove any unknown characters
  }));

  return {
    ...tierList,
    tiers: tiersWithData,
  };
};

export const getAllTierLists = () => {
  return Object.keys(BUSTY_BURST_TIER_LISTS).map(key => ({
    id: key,
    name: BUSTY_BURST_TIER_LISTS[key].name,
    description: BUSTY_BURST_TIER_LISTS[key].description,
  }));
};

export const ELEMENT_ORDER = ['Fire', 'Water', 'Wind', 'Light', 'Dark', 'Mind'];

const ELEMENT_MERGE = { Holy: 'Light' };

export const TIER_ORDER = ['SSS', 'SS', 'S', 'A', 'B', 'NYR'];

export function getElementTierList(listName = 'beginner') {
  const tierList = BUSTY_BURST_TIER_LISTS[listName];
  if (!tierList) return null;

  const elementData = {};
  ELEMENT_ORDER.forEach(el => { elementData[el] = {}; });
  TIER_ORDER.forEach(tier => {
    ELEMENT_ORDER.forEach(el => {
      elementData[el][tier] = [];
    });
  });

  tierList.tiers.forEach(tierEntry => {
    tierEntry.characters.forEach(slug => {
      const char = BUSTY_BURST_PALADINS.find(p => p.id === slug);
      if (!char) return;

      const dbSlug = slug.replace(/_/g, '-');
      const dbChar = getCharacterDataBySlug(dbSlug);
      const rawElement = dbChar?.element || char.element || 'Unknown';
      const el = ELEMENT_MERGE[rawElement] || rawElement;

      if (!elementData[el]) {
        elementData[el] = {};
        TIER_ORDER.forEach(t => { elementData[el][t] = []; });
      }
      elementData[el][tierEntry.tier].push({ ...char, element: rawElement });
    });
  });

  const sections = ELEMENT_ORDER
    .map(element => {
      const tiers = TIER_ORDER
        .map(tier => ({
          tier,
          definition: BUSTY_BURST_TIER_LISTS[listName].tiers.find(t => t.tier === tier)?.definition || { label: tier, color: '#888' },
          characters: elementData[element]?.[tier] || [],
        }))
        .filter(t => t.characters.length > 0);
      return { element, tiers, total: tiers.reduce((s, t) => s + t.characters.length, 0) };
    })
    .filter(s => s.total > 0);

  return {
    name: tierList.name,
    description: tierList.description,
    lastUpdated: tierList.lastUpdated,
    sections,
  };
}
