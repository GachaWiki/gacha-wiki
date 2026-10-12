// Gene-Sys: Adam element matchup data: the advantage wheel from
// RoleElementWeaknessData (group 141000000). Every arrow is +30% damage for
// the attacker (weakEffect 13000); attacking against the arrow is -30%
// (7000). Light and Dark are strong against each other, so their strong and
// weak matchup is the same element. Icons are the game's own battleelement_N
// assets on R2 (kept here so pages do not depend on the roster for them).
const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam';

export const GSA_ELEMENT_MATCHUPS = {
  Fire: { id: 1, zh: '火', icon: `${R2}/battleelement_1.webp`, strongVs: 'Wind', weakVs: 'Water' },
  Earth: { id: 2, zh: '土', icon: `${R2}/battleelement_2.webp`, strongVs: 'Water', weakVs: 'Wind' },
  Wind: { id: 3, zh: '風', icon: `${R2}/battleelement_3.webp`, strongVs: 'Earth', weakVs: 'Fire' },
  Water: { id: 4, zh: '水', icon: `${R2}/battleelement_4.webp`, strongVs: 'Fire', weakVs: 'Earth' },
  Light: { id: 5, zh: '光', icon: `${R2}/battleelement_5.webp`, strongVs: 'Dark', weakVs: 'Dark' },
  Dark: { id: 6, zh: '闇', icon: `${R2}/battleelement_6.webp`, strongVs: 'Light', weakVs: 'Light' },
};

// Element damage bonus, same for every arrow on the wheel.
export const GSA_ELEMENT_BONUS = 30;

// The Pursuit system: each element pairs one initiator status with one
// pursuit (from the game's own combat tips in the EN localization). Landing
// a skill that carries the pursuit effect on an enemy suffering the status
// fires the pursuit for bonus damage; the status is consumed when it fires.
// Pursuits are graded S, M and L, higher grade means higher damage.
export const GSA_PURSUIT_CHAINS = {
  Fire: { status: 'Burn', statusZh: '燃燒', pursuit: 'Detonate', pursuitZh: '引爆', effect: 'A massive amount of bonus damage' },
  Earth: { status: 'Petrify', statusZh: '石化', pursuit: 'Shatter', pursuitZh: '碎石', effect: "Lowers the target's elemental RES except Light and Dark" },
  Wind: { status: 'Electrocute', statusZh: '觸電', pursuit: 'Overload', pursuitZh: '超載', effect: 'Inflicts Silence on the target' },
  Water: { status: 'Freeze', statusZh: '冰凍', pursuit: 'Ice Break', pursuitZh: '破冰', effect: "Lowers the target's ATK Speed" },
  Light: { status: 'Judgment', statusZh: '審判', pursuit: 'Sanction', pursuitZh: '制裁', effect: "Lowers the target's Physical RES and Energy RES" },
  Dark: { status: 'Ebon', statusZh: '漆黑', pursuit: 'Abyss', pursuitZh: '深淵', effect: 'Prevents the target from being healed for a period' },
};

// Pursuit grades from weakest to strongest.
export const GSA_PURSUIT_GRADES = ['S', 'M', 'L'];
