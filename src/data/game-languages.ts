// Central registry of localized wikis per game: one source of truth consumed
// by the game navigation (Languages dropdown), the landing-page language
// blocks (GameLanguageLinks) and the /select/ pages, so every entry point
// shows the same language list. Games without localized wikis are absent.

import type { GameKey, NavigationSection } from './game-navigation';

export interface GameLanguage {
  /** display label, e.g. 'English' or '简体中文' */
  lang: string;
  /** html lang code for the label span, e.g. 'zh-Hans' (optional) */
  htmlLang?: string;
  /** small note shown on the /select/ page, e.g. '遊戲官方文本' */
  note?: string;
  /** landing URL of that language's wiki */
  href: string;
}

export interface GameLanguageInfo {
  /** the game's language-selection page (games-list entry point) */
  selectUrl: string;
  /** game theme accent used on the select page */
  accent: string;
  /** all language versions, English first */
  languages: GameLanguage[];
}

export const GAME_LANGUAGES: Partial<Record<GameKey, GameLanguageInfo>> = {
  'horizon-walker': {
    selectUrl: '/guides/horizon-walker/select/',
    accent: '#e8a53d',
    languages: [
      { lang: 'English', href: '/guides/horizon-walker/', note: 'English wiki' },
      { lang: '中文', htmlLang: 'zh-Hans', note: '官方游戏文本 · 简体中文', href: '/zh/guides/horizon-walker/' },
      { lang: '繁體中文', htmlLang: 'zh-Hant', note: '官方遊戲文本', href: '/zh-tw/guides/horizon-walker/' },
      { lang: '日本語', htmlLang: 'ja', note: '公式ローカライズ', href: '/ja/guides/horizon-walker/' },
      { lang: '한국어', htmlLang: 'ko', note: '공식 로컬라이즈', href: '/ko/guides/horizon-walker/' },
    ],
  },
  majo: {
    selectUrl: '/guides/majo/select/',
    accent: '#a89bd1',
    languages: [
      { lang: 'English', href: '/guides/majo/', note: 'English wiki' },
      { lang: '简体中文', htmlLang: 'zh-Hans', note: '游戏官方文本 · 魔女之夜', href: '/zh/guides/majo/' },
      { lang: '繁體中文', htmlLang: 'zh-Hant', note: '遊戲官方文本 · 魔女之夜', href: '/zh-tw/guides/majo/' },
      { lang: '日本語', htmlLang: 'ja', note: 'ゲーム公式テキスト · ウィッチーズ・ナイト', href: '/ja/guides/majo/' },
      { lang: '한국어', htmlLang: 'ko', note: '게임 공식 텍스트 · 마녀의 밤', href: '/ko/guides/majo/' },
    ],
  },
  'gene-sys-adam': {
    selectUrl: '/guides/gene-sys-adam/select/',
    accent: '#e0596b',
    languages: [
      { lang: 'English', href: '/guides/gene-sys-adam/', note: 'English wiki' },
      { lang: '繁體中文', htmlLang: 'zh-Hant', note: '遊戲官方文本 · 黑色基因', href: '/zh-tw/guides/gene-sys-adam/' },
      { lang: '日本語', htmlLang: 'ja', note: '公式テキスト · 創生記：アダム', href: '/ja/guides/gene-sys-adam/' },
      { lang: '한국어', htmlLang: 'ko', note: '공식 텍스트 · 던 오프 아담', href: '/ko/guides/gene-sys-adam/' },
      { lang: 'Tiếng Việt', htmlLang: 'vi', note: 'Văn bản chính thức · Gene-Sys: Adam', href: '/vi/guides/gene-sys-adam/' },
      { lang: 'ไทย', htmlLang: 'th', note: 'ข้อความอย่างเป็นทางการ · Gene-Sys: Adam', href: '/th/guides/gene-sys-adam/' },
      { lang: '简体中文', htmlLang: 'zh-Hans', note: '游戏官方文本 · 黑色基因', href: '/zh-cn/guides/gene-sys-adam/' },
    ],
  },
};

// Localized titles for the landing-page "Other languages" block, keyed by the
// current language's htmlLang code (English entries fall back to 'en').
export const OTHER_LANGS_TITLE: Record<string, string> = {
  en: 'Other languages',
  'zh-Hans': '其他语言',
  'zh-Hant': '其他語言',
  ja: '他の言語',
  ko: '다른 언어',
  vi: 'Ngôn ngữ khác',
  th: 'ภาษาอื่น ๆ',
};

export function getGameLanguageInfo(gameKey: string | undefined): GameLanguageInfo | undefined {
  if (!gameKey) return undefined;
  return GAME_LANGUAGES[gameKey as GameKey];
}

// Navigation section appended to the game's second header when the game has
// localized wikis; links to every language's landing page (works as a
// switch-back-to-English link on the localized wikis too).
export function getGameLanguageSection(gameKey: string | undefined): NavigationSection | undefined {
  const info = getGameLanguageInfo(gameKey);
  if (!info || info.languages.length < 2) return undefined;
  return {
    title: 'Languages',
    links: info.languages.map(l => ({ name: l.lang, href: l.href })),
  };
}
