// Horizon Walker Character Builds Data
// Character builds information for the builds index page

import { getCharacterBySlug } from '../characters.js';

// Horizon Walker Character Builds Data
// Character builds information for the builds index page
// Currently featuring only Juha - the Saint of Bullet

const characterBuilds = [
  {
    id: 9,
    buildSlug: 'garud',
    displayName: 'Garud',
    rarity: 'EX',
    available: true,
  },
  {
    id: 1,
    buildSlug: 'juha',
    displayName: 'Juha',
    rarity: 'EX',
    available: true,
  },
  {
    id: 8,
    buildSlug: 'juza',
    displayName: 'Juza',
    rarity: 'EX',
    available: true,
  },
  {
    id: 2,
    buildSlug: 'vlissing',
    displayName: 'Vlissing',
    rarity: 'EX',
    available: true,
  },
  {
    id: 3,
    buildSlug: 'olivia',
    displayName: 'Olivia',
    rarity: 'EX',
    available: true,
  },
  {
    id: 4,
    buildSlug: 'emilia',
    displayName: 'Emilia',
    rarity: 'EX',
    available: true,
  },
  {
    id: 5,
    buildSlug: 'echidna',
    displayName: 'Echidna',
    rarity: 'EX',
    available: true,
  },
  {
    id: 6,
    buildSlug: 'kim-ga-young',
    displayName: 'Kim Ga-young',
    rarity: 'S',
    available: true,
  },
  {
    id: 7,
    buildSlug: 'palekar',
    displayName: 'Palekar',
    rarity: 'EX',
    available: true,
  },
  {
    id: 10,
    buildSlug: 'ahram',
    displayName: 'Ahram',
    rarity: 'EX',
    available: true,
  },
  {
    id: 11,
    buildSlug: 'berga',
    displayName: 'Berga',
    rarity: 'EX',
    available: true,
  },
  {
    id: 12,
    buildSlug: 'efreeti',
    displayName: 'Efreeti',
    rarity: 'EX',
    available: true,
  },
  {
    id: 13,
    buildSlug: 'eugenia',
    displayName: 'Eugenia',
    rarity: 'EX',
    available: true,
  },
  {
    id: 14,
    buildSlug: 'everette',
    displayName: 'Everette',
    rarity: 'EX',
    available: true,
  },
  {
    id: 15,
    buildSlug: 'fammene',
    displayName: 'Fammene',
    rarity: 'EX',
    available: true,
  },
  {
    id: 16,
    buildSlug: 'griselda',
    displayName: 'Griselda',
    rarity: 'EX',
    available: true,
  },
  {
    id: 17,
    buildSlug: 'kalma',
    displayName: 'Kalma',
    rarity: 'EX',
    available: true,
  },
  {
    id: 18,
    buildSlug: 'kaul',
    displayName: 'Kaul',
    rarity: 'EX',
    available: true,
  },
  {
    id: 19,
    buildSlug: 'korabi',
    displayName: 'Korabi',
    rarity: 'EX',
    available: true,
  },
  {
    id: 20,
    buildSlug: 'kotoha',
    displayName: 'Kotoha',
    rarity: 'EX',
    available: true,
  },
  {
    id: 21,
    buildSlug: 'leah',
    displayName: 'Leah',
    rarity: 'EX',
    available: true,
  },
  {
    id: 22,
    buildSlug: 'mahari',
    displayName: 'Mahari',
    rarity: 'EX',
    available: true,
  },
  {
    id: 23,
    buildSlug: 'marhim',
    displayName: 'Marhim',
    rarity: 'EX',
    available: true,
  },
  {
    id: 24,
    buildSlug: 'marika',
    displayName: 'Marika',
    rarity: 'EX',
    available: true,
  },
  {
    id: 25,
    buildSlug: 'matrotho',
    displayName: 'Matrotho',
    rarity: 'EX',
    available: true,
  },
  {
    id: 26,
    buildSlug: 'maximilia',
    displayName: 'Maximilia',
    rarity: 'EX',
    available: true,
  },
  {
    id: 27,
    buildSlug: 'mira',
    displayName: 'Mira',
    rarity: 'EX',
    available: true,
  },
  {
    id: 28,
    buildSlug: 'mirana',
    displayName: 'Mirana',
    rarity: 'EX',
    available: true,
  },
  {
    id: 29,
    buildSlug: 'nari',
    displayName: 'Nari',
    rarity: 'EX',
    available: true,
  },
  {
    id: 30,
    buildSlug: 'nika',
    displayName: 'Nika',
    rarity: 'EX',
    available: true,
  },
  {
    id: 31,
    buildSlug: 'platina',
    displayName: 'Platina',
    rarity: 'EX',
    available: true,
  },
  {
    id: 32,
    buildSlug: 'tx-manticore',
    displayName: 'TX - Manticore',
    rarity: 'EX',
    available: true,
  },
  {
    id: 33,
    buildSlug: 'valeta',
    displayName: 'Valeta',
    rarity: 'EX',
    available: true,
  },
  {
    id: 34,
    buildSlug: 'yeonwoo',
    displayName: 'Yeonwoo',
    rarity: 'EX',
    available: true,
  },
  {
    id: 35,
    buildSlug: 'yui',
    displayName: 'Yui',
    rarity: 'EX',
    available: true,
  },
  {
    id: 36,
    buildSlug: 'yvonna',
    displayName: 'Yvonna',
    rarity: 'EX',
    available: true,
  },
];

// Helper function to get rarity badge class
export function getRarityBadgeClass(rarity) {
  // Use data attributes for rarity badges
  return `data-rarity='${rarity}'`;
}

// Filter builds based on availability
export function getAvailableBuilds() {
  return characterBuilds.filter(build => build.available);
}

// Filter builds based on rarity
export function getBuildsByRarity(rarity) {
  return characterBuilds.filter(build => build.rarity === rarity && build.available);
}

// Filter builds based on role
export function getBuildsByRole(role) {
  return characterBuilds.filter(build => build.role === role && build.available);
}

// Get total count of available builds
export function getTotalBuilds() {
  return characterBuilds.filter(build => build.available).length;
}

// Get builds by build slug
export function getBuildByCharacter(slug) {
  return characterBuilds.find(build => build.buildSlug === slug && build.available);
}

// Enhanced build data with character information
export function getEnhancedBuilds() {
  return characterBuilds.map(build => {
    const characterData = getCharacterBySlug(build.buildSlug);
    return {
      ...build,
      cost: characterData?.cost || 0, // Use character database cost, fallback to 0 if not found
      tags: characterData?.tags || [], // Use character database tags
      characterData: characterData || null,
    };
  });
}

// Get enhanced build by build slug
export function getEnhancedBuildByCharacter(slug) {
  const build = characterBuilds.find(build => build.buildSlug === slug && build.available);
  if (!build) return null;

  const characterData = getCharacterBySlug(build.buildSlug);
  return {
    ...build,
    characterData: characterData || null,
  };
}

// Export all builds data
export { characterBuilds };

// Export metadata for SEO
export const buildsSEO = {
  title: 'Horizon Walker Character Builds - Juha, Vlissing, Olivia & Echidna Build Guides',
  description:
    'Complete build guides for Horizon Walker characters. Featuring Juha ranged DPS build, Vlissing magic healer/support build, Olivia melee counterattack build, and Echidna poison DoT mage build with optimized equipment and strategies.',
  keywords: [
    'Horizon Walker',
    'Juha build',
    'Saint of Bullet',
    'Vlissing build',
    'Flow Guardian',
    'Olivia build',
    'Valiant Duke',
    'Echidna build',
    'Venombound Elemental',
    'character builds',
    'build guides',
    'ranged DPS',
    'magic healer',
    'support build',
    'melee DPS',
    'counterattack build',
    'poison damage',
    'DoT mage',
    'venombound',
    'arcane elemental',
    'slash damage',
    'warrior build',
    'archer build',
    'critical damage',
    'team buffer',
    'AP support',
    'optimization',
    'tactical builds',
  ],
};
