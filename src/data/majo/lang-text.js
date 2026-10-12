// Text-pack builders for the MAJO character template: the English pages and
// the localized wikis (/zh/, /zh-tw/, /ja/, /ko/) render the same template
// with a CharTextPack. EN packs mirror the original EN page exactly; language
// packs swap in the game's own localization (game-text.js per language) with
// English as the secondary line.

export function buildEnTextPack(char) {
  const skills = {};
  for (const [slot, arr] of Object.entries(char.skills || {})) {
    skills[slot] = arr.map(s => ({
      name: s.nameZh,
      nameAlt: s.nameEn,
      info: s.infoZh,
      infoAlt: s.infoEn,
      detail: s.detailEn || s.detailZh,
    }));
  }
  return {
    name: char.nameEn,
    nameAlt: `${char.nameZh}${char.nameJa ? ' · ' + char.nameJa : ''}`,
    title: char.titleEn,
    skills,
    description: char.descriptionEn,
    descriptionAlt: char.descriptionZh,
  };
}

// gt: { NAMES, TITLES, DESCRIPTIONS, SKILLS, CLASSES, FACTIONS, ATTACK_TYPES }
// from src/data/majo/<lang>/game-text.js
export function buildLangTextPack(char, gt) {
  const skills = {};
  for (const [slot, arr] of Object.entries(char.skills || {})) {
    skills[slot] = arr.map((s, i) => {
      const loc = (gt.SKILLS && gt.SKILLS[`${char.slug}|${slot}|${i}`]) || {};
      return {
        name: loc.name || s.nameZh,
        nameAlt: s.nameEn,
        info: loc.info || s.infoZh,
        infoAlt: s.infoEn,
        detail: loc.detail || s.detailEn || s.detailZh,
      };
    });
  }
  return {
    name: (gt.NAMES && gt.NAMES[char.slug]) || char.nameEn,
    nameAlt: `${char.nameEn}${char.nameJa ? ' · ' + char.nameJa : ''}`,
    title: (gt.TITLES && gt.TITLES[char.slug]) || char.titleEn,
    attackTypeLabel: (gt.ATTACK_TYPES && gt.ATTACK_TYPES[char.attackType]) || char.attackType,
    factionLabel: (gt.FACTIONS && gt.FACTIONS[char.faction]) || char.faction,
    skills,
    description: (gt.DESCRIPTIONS && gt.DESCRIPTIONS[char.slug]) || char.descriptionEn,
    descriptionAlt: char.descriptionEn,
  };
}
