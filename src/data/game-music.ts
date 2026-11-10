// Per-game background music config for the shared GameMusicPlayer component:
// track lists (R2 or site-local audio), playing/idle colors, and the storage
// key prefix. The prefixes are the legacy per-game ones (zn-/bb-/hw-/mj-/ss-/
// gsa-/ts-music-*) so existing visitor preferences keep working; never rename
// them. To give a new game music, add one entry here and the player renders.
import type { GameKey } from './game-navigation';

const R2 = 'https://k2b1c5ab57ed98e51.gachawiki.info';

export interface GameMusicConfig {
  // Game display name used in the toggle's aria-label.
  gameLabel: string;
  // localStorage/sessionStorage key prefix (legacy, see file comment).
  storagePrefix: string;
  // Track URLs in switch order; a single track hides the track switcher.
  tracks: string[];
  // Playing-state text and border colors.
  accent: string;
  accentBorder: string;
  // Idle button border and text colors (may reference game CSS variables).
  idleBorder: string;
  idleColor: string;
}

export const GAME_MUSIC: Partial<Record<GameKey, GameMusicConfig>> = {
  'zone-nova': {
    gameLabel: 'Zone Nova',
    storagePrefix: 'zn',
    tracks: [`${R2}/zone-nova/audio/landing-music.mp3`],
    accent: '#ffb74a',
    accentBorder: 'rgba(255, 183, 77, 0.4)',
    idleBorder: 'rgba(255, 255, 255, 0.15)',
    idleColor: '#b3b3b3',
  },
  'busty-burst': {
    gameLabel: 'Busty Burst',
    storagePrefix: 'bb',
    // Login-screen theme (KF2I_bgm21).
    tracks: [`${R2}/busty-burst/audio/login-music.mp3`],
    accent: '#6db8d8',
    accentBorder: 'rgba(109, 184, 216, 0.4)',
    idleBorder: 'rgba(255, 255, 255, 0.15)',
    idleColor: '#b3b3b3',
  },
  'horizon-walker': {
    gameLabel: 'Horizon Walker',
    storagePrefix: 'hw',
    // With You + Platinum Sanctuary Adventure.
    tracks: [
      `${R2}/horizon-walker/audio/login-music.mp3?v=2`,
      `${R2}/horizon-walker/audio/login-music-2.mp3?v=1`,
    ],
    accent: '#e8a547',
    accentBorder: 'rgba(232, 165, 71, 0.4)',
    idleBorder: 'rgba(255, 255, 255, 0.15)',
    idleColor: '#b3b3b3',
  },
  majo: {
    gameLabel: 'MAJO',
    storagePrefix: 'mj',
    // Title screen theme + main screen loop (FMOD banks).
    tracks: [
      `${R2}/majo/audio/landing-music.mp3?v=1`,
      `${R2}/majo/audio/landing-music-2.mp3?v=1`,
    ],
    accent: '#c084fc',
    accentBorder: 'rgba(192, 132, 252, 0.4)',
    idleBorder: 'rgba(255, 255, 255, 0.15)',
    idleColor: '#b3b3b3',
  },
  'stella-sora': {
    gameLabel: 'Stella Sora',
    storagePrefix: 'ss',
    // Official site BGM + two Music_System menu themes (Wwise banks).
    tracks: [
      `${R2}/stella-sora/audio/site-bgm.mp3`,
      `${R2}/stella-sora/audio/menu-music-1.mp3`,
      `${R2}/stella-sora/audio/menu-music-2.mp3`,
    ],
    accent: '#e8a53d',
    accentBorder: 'rgba(232, 165, 61, 0.4)',
    idleBorder: 'var(--ss-border, #404040)',
    idleColor: '#b3b3b3',
  },
  'gene-sys-adam': {
    gameLabel: 'Gene-Sys: Adam',
    storagePrefix: 'gsa',
    // Official site theme + Bgm_Main + Bgm_lobby3 (systembgm bundles).
    tracks: [
      `${R2}/gene-sys-adam/audio/bgm-site.mp3`,
      `${R2}/gene-sys-adam/audio/bgm-main.mp3`,
      `${R2}/gene-sys-adam/audio/bgm-lobby.mp3`,
    ],
    accent: '#e0596b',
    accentBorder: 'rgba(224, 89, 107, 0.4)',
    idleBorder: 'var(--gsa-border, #3d3236)',
    idleColor: '#b3a8ab',
  },
  'brown-dust-2': {
    gameLabel: 'Brown Dust 2',
    storagePrefix: 'bd2',
    // Pack event BGM decoded from the sound bundles (P19 event theme + loops).
    tracks: [
      `${R2}/brown-dust-2/audio/bgm-1.mp3`,
      `${R2}/brown-dust-2/audio/bgm-2.mp3`,
      `${R2}/brown-dust-2/audio/bgm-3.mp3`,
      `${R2}/brown-dust-2/audio/bgm-4.mp3`,
      `${R2}/brown-dust-2/audio/bgm-5.mp3`,
      `${R2}/brown-dust-2/audio/bgm-6.mp3`,
      `${R2}/brown-dust-2/audio/bgm-7.mp3`,
      `${R2}/brown-dust-2/audio/bgm-8.mp3`,
      `${R2}/brown-dust-2/audio/bgm-9.mp3`,
      `${R2}/brown-dust-2/audio/bgm-10.mp3`,
      `${R2}/brown-dust-2/audio/bgm-11.mp3`,
      `${R2}/brown-dust-2/audio/bgm-12.mp3`,
    ],
    accent: '#d6bc85',
    accentBorder: 'rgba(214, 188, 133, 0.4)',
    idleBorder: 'var(--bd2-border, #363026)',
    idleColor: '#a49c8c',
  },
  'last-origin-global': {
    gameLabel: 'Last Origin Global',
    storagePrefix: 'lo',
    // Title, lobby and Alteration Sanctum themes (UnityCache bgm_01/02/29 bundles).
    tracks: [
      `${R2}/last-origin-global/audio/bgm-title.mp3`,
      `${R2}/last-origin-global/audio/bgm-lobby.mp3`,
      `${R2}/last-origin-global/audio/bgm-sanctum.mp3`,
    ],
    accent: '#ff6b7a',
    accentBorder: 'rgba(230, 57, 70, 0.45)',
    idleBorder: 'var(--lo-border, #2a2a32)',
    idleColor: '#b3b3b3',
  },
  'taimanin-squad': {
    gameLabel: 'Taimanin Squad',
    storagePrefix: 'ts',
    // Lobby + academy lobby + arena battle themes (Steam soundbgm bundle),
    // served from R2 like every other game's audio.
    tracks: [
      `${R2}/taimanin-squad/audio/bgm-lobby.mp3`,
      `${R2}/taimanin-squad/audio/bgm-academy.mp3`,
      `${R2}/taimanin-squad/audio/bgm-arena.mp3`,
    ],
    accent: '#b8a9c8',
    accentBorder: 'rgba(184, 169, 200, 0.45)',
    idleBorder: 'var(--ts-border, #2e2838)',
    idleColor: '#b3a8ab',
  },
  'edens-ritter-grenze': {
    gameLabel: "Eden's Ritter Grenze",
    storagePrefix: 'erge',
    // Title (000_TOP), main (003_MAIN) and event (ER1_bgm03) themes,
    // pulled from the game's own bgm bundles and served from R2.
    tracks: [
      `${R2}/edens-ritter-grenze/media/bgm-000_TOP.mp3`,
      `${R2}/edens-ritter-grenze/media/bgm-003_MAIN.mp3`,
      `${R2}/edens-ritter-grenze/media/bgm-ER1_bgm03.mp3`,
    ],
    accent: '#c8a04a',
    accentBorder: 'rgba(200, 160, 74, 0.45)',
    idleBorder: 'rgba(255, 255, 255, 0.15)',
    idleColor: '#b3b3b3',
  },
  'star-lusts': {
    gameLabel: 'Star Lusts',
    storagePrefix: 'sl',
    // Decoded from the game's FMOD banks and served from R2: the LOCAL APK
    // Master_Bank (sharedassets0) holds the login-screen music (TitleMovie,
    // subsong 1) and the theme song Love Dive with vocals (3) and the
    // instrumental (4); Remote_Master_Bank subsongs 61 (title menu), 43 (main
    // menu battle mix), 33 (summon), 47 (battle), 44 (boss), 66 (results), and
    // Event_Bank subsong 5 (Christmas event theme).
    tracks: [
      `${R2}/star-lusts/audio/bgm-title-movie.mp3`,
      `${R2}/star-lusts/audio/love-dive.mp3`,
      `${R2}/star-lusts/audio/love-dive-inst.mp3`,
      `${R2}/star-lusts/audio/bgm-main-menu.mp3`,
      `${R2}/star-lusts/audio/bgm-gacha.mp3`,
      `${R2}/star-lusts/audio/bgm-battle.mp3`,
      `${R2}/star-lusts/audio/bgm-boss.mp3`,
      `${R2}/star-lusts/audio/bgm-results.mp3`,
      `${R2}/star-lusts/audio/bgm-event-xmas.mp3`,
    ],
    accent: '#9db4e8',
    accentBorder: 'rgba(157, 180, 232, 0.45)',
    idleBorder: 'var(--sl-border, #2c2c48)',
    idleColor: '#b3b3b3',
  },
};

export function getMusicConfig(gameKey: string | undefined): GameMusicConfig | undefined {
  if (!gameKey) return undefined;
  return GAME_MUSIC[gameKey as GameKey];
}
