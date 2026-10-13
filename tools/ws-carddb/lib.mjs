// Shared helpers for the Weiss Schwarz card database importer: set registry,
// HTTP via curl (the cardlist rejects some non-browser user agents), and the
// card HTML fragment parser. No external dependencies.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

export const CARDLIST_BASE = 'https://en.ws-tcg.com';
export const R2_BASE = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev';
export const R2_BUCKET = 'gachawiki-images';
export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

export const HERE = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
export const REPO_ROOT = new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

// Registry: wiki set id -> official cardlist expansion id + display metadata.
// Expansion ids verified against the live /cardlist/ expansion select (2026-10-13).
export const SETS = {
  'nikke-vol2': { expansion: 290, name: 'GODDESS OF VICTORY: NIKKE Vol.2', release: '2026-09-25', shopItem: 'nikke-vol2' },
  'nikke-vol1': { expansion: 252, name: 'GODDESS OF VICTORY: NIKKE', release: '2025-04-18', shopItem: 'nikke-vol1' },
  're-zero-vol3': { expansion: 289, name: 'Re:ZERO -Starting Life in Another World- Vol.3', release: '2026-08-28', shopItem: 're-zero-vol3' },
  'blue-archive-the-animation': { expansion: 288, name: 'Blue Archive The Animation', release: '2026-07-31', shopItem: 'blue-archive-the-animation' },
  'umamusume-pretty-derby': { expansion: 286, name: 'Umamusume: Pretty Derby', release: '2026-06-26', shopItem: 'umamusume-pretty-derby' },
  'umamusume-trial-deck-race-2': { expansion: 285, name: 'Umamusume: Pretty Derby Trial Deck Race 2', release: '2026-06-26', shopItem: 'umamusume-trial-deck-race-2' },
  'oshi-no-ko-vol2': { expansion: 278, name: '【OSHI NO KO】 Vol.2', release: '2026-03-27', shopItem: 'oshi-no-ko-vol2' },
  'sao-gun-gale-online-2': { expansion: 267, name: 'SAO Alternative Gun Gale Online 2', release: '2025-09-05', shopItem: 'sao-gun-gale-online-2' },
  'bang-dream-mygo-ave-mujica': { expansion: 264, name: 'MyGO!!!!! × Ave Mujica', release: '2025-07-18', shopItem: 'bang-dream-mygo-ave-mujica' },
  'hatsune-miku-colorful-stage': { expansion: 261, name: 'HATSUNE MIKU: COLORFUL STAGE!', release: '2025-06-27', shopItem: 'hatsune-miku-colorful-stage' },
  'love-live-sif2-miracle-live': { expansion: 238, name: 'Love Live! School idol festival 2 MIRACLE LIVE!', release: '2024-11-08', shopItem: 'love-live-sif2-miracle-live' },
  'oshi-no-ko-vol1': { expansion: 230, name: '【OSHI NO KO】', release: '2024-09-20', shopItem: 'oshi-no-ko-vol1' },
  // === Generated 276 sets below from the official expansion list
  // (tools/ws-carddb/gen-registry.mjs, 2026-10-13). No release dates in the
  // official cardlist, so release stays null; shopItem none (not in shop).
  'bang-dream-10th-anniversary': { expansion: 287, name: "BanG Dream! 10th Anniversary!" },
  'umamusume-pretty-derby-race-1': { expansion: 284, name: "Umamusume: Pretty Derby Race 1" },
  'nazarick-tomb-of-the-undead-vol-3': { expansion: 283, name: "Nazarick: Tomb of the Undead Vol.3" },
  'fujimi-fantasia-bunko-vol-2': { expansion: 282, name: "Fujimi Fantasia Bunko Vol.2" },
  'fujimi-fantasia-bunko-vol-2-281': { expansion: 281, name: "Fujimi Fantasia Bunko Vol.2 (Trial Deck)" },
  'the-eminence-in-shadow': { expansion: 280, name: "The Eminence in Shadow" },
  'the-eminence-in-shadow-279': { expansion: 279, name: "The Eminence in Shadow (Trial Deck)" },
  'fairy-tail-100-years-quest': { expansion: 277, name: "FAIRY TAIL: 100 YEARS QUEST" },
  'makeine-too-many-losing-heroines': { expansion: 276, name: "Makeine: Too Many Losing Heroines!" },
  'makeine-too-many-losing-heroines-275': { expansion: 275, name: "Makeine: Too Many Losing Heroines! (Trial Deck)" },
  'tv-anime-dandadan': { expansion: 274, name: "TV Anime \"DANDADAN\"" },
  'tv-anime-dandadan-273': { expansion: 273, name: "TV Anime \"DANDADAN\"" },
  'girls-band-cry': { expansion: 272, name: "Girls Band Cry" },
  'girls-band-cry-271': { expansion: 271, name: "Girls Band Cry (Trial Deck)" },
  'konosuba-god-s-blessing-on-this-wonderful-world-re-edit': { expansion: 270, name: "KONOSUBA -God's blessing on this wonderful world! Re:Edit" },
  'azur-lane-vol-2': { expansion: 269, name: "Azur Lane Vol.2" },
  'marvel': { expansion: 268, name: "Marvel" },
  'disney-mirrorverse': { expansion: 266, name: "Disney Mirrorverse" },
  'disney-mirrorverse-265': { expansion: 265, name: "Disney Mirrorverse (Trial Deck)" },
  'bang-dream-ave-mujica': { expansion: 263, name: "BanG Dream! [Ave Mujica]" },
  'fairy-tail': { expansion: 262, name: "Fairy Tail" },
  'hatsune-miku-colorful-stage-nightcord-at-25-00': { expansion: 260, name: "HATSUNE MIKU: COLORFUL STAGE! Nightcord at 25:00" },
  'hatsune-miku-colorful-stage-wonderlands-x-showtime': { expansion: 259, name: "HATSUNE MIKU: COLORFUL STAGE! Wonderlands × Showtime" },
  'hatsune-miku-colorful-stage-vivid-bad-squad': { expansion: 258, name: "HATSUNE MIKU: COLORFUL STAGE! Vivid BAD SQUAD" },
  'hatsune-miku-colorful-stage-more-more-jump': { expansion: 257, name: "HATSUNE MIKU: COLORFUL STAGE! MORE MORE JUMP!" },
  'hatsune-miku-colorful-stage-leo-need': { expansion: 256, name: "HATSUNE MIKU: COLORFUL STAGE! Leo/need" },
  'lycoris-recoil': { expansion: 255, name: "Lycoris Recoil" },
  'rurouni-kenshin': { expansion: 254, name: "Rurouni Kenshin" },
  'rurouni-kenshin-253': { expansion: 253, name: "Rurouni Kenshin (Trial Deck)" },
  'goddess-of-victory-nikke': { expansion: 251, name: "GODDESS OF VICTORY: NIKKE" },
  'rascal-does-not-dream-series': { expansion: 250, name: "Rascal Does Not Dream Series" },
  'persona-3-reload': { expansion: 249, name: "Persona 3 Reload™" },
  'blue-archive': { expansion: 248, name: "Blue Archive" },
  'blue-archive-247': { expansion: 247, name: "Blue Archive (Trial Deck)" },
  'pixar-characters': { expansion: 246, name: "PIXAR CHARACTERS" },
  'cars': { expansion: 245, name: "Cars" },
  'monster-inc': { expansion: 244, name: "Monster, Inc." },
  'toy-story': { expansion: 243, name: "Toy Story" },
  'the-quintessential-quintuplets-specials': { expansion: 242, name: "The Quintessential Quintuplets Specials" },
  'macross-delta': { expansion: 241, name: "MACROSS Delta" },
  'frieren-beyond-journey-s-end': { expansion: 240, name: "Frieren: Beyond Journey's End" },
  'frieren-beyond-journey-s-end-239': { expansion: 239, name: "Frieren: Beyond Journey's End (Trial Deck)" },
  'dengeki-bunko': { expansion: 237, name: "Dengeki Bunko" },
  'dengeki-bunko-schwarz-side': { expansion: 236, name: "Dengeki Bunko Schwarz Side" },
  'dengeki-bunko-wei-side': { expansion: 235, name: "Dengeki Bunko Weiß Side" },
  'marvel-234': { expansion: 234, name: "MARVEL (Booster Pack)" },
  'marvel-233': { expansion: 233, name: "MARVEL (Trial Deck)" },
  'jojo-s-bizarre-adventure-stone-ocean': { expansion: 232, name: "JoJo's Bizarre Adventure: Stone Ocean" },
  'jojo-s-bizarre-adventure-stardust-crusaders': { expansion: 231, name: "JoJo's Bizarre Adventure: Stardust Crusaders" },
  'oshi-no-ko': { expansion: 229, name: "【OSHI NO KO】" },
  'hololive-production-summer-collection': { expansion: 228, name: "hololive production Summer Collection" },
  'ayakashi-triangle': { expansion: 227, name: "Ayakashi Triangle" },
  'ayakashi-triangle-226': { expansion: 226, name: "Ayakashi Triangle (Trial Deck)" },
  'hololive-production-feat-wei-schwarz-ambassadors': { expansion: 225, name: "hololive production feat. Weiß Schwarz Ambassadors" },
  'love-live-school-idol-festival-series-10th-anniversary': { expansion: 224, name: "Love Live! School idol festival Series 10th Anniversary" },
  'shakugan-no-shana': { expansion: 223, name: "Shakugan no Shana" },
  'rwby': { expansion: 222, name: "RWBY" },
  'bocchi-the-rock': { expansion: 221, name: "BOCCHI THE ROCK!" },
  'bocchi-the-rock-220': { expansion: 220, name: "BOCCHI THE ROCK! (Trial Deck)" },
  'bang-dream-girls-band-party-countdown-collection': { expansion: 219, name: "Bang Dream! Girls Band Party! Countdown Collection" },
  'bang-dream-mygo': { expansion: 218, name: "Bang Dream! [MyGO!!!!!]" },
  'saekano-the-movie-finale': { expansion: 217, name: "Saekano the Movie: Finale" },
  'lycoris-recoil-216': { expansion: 216, name: "Lycoris Recoil (Booster Pack)" },
  'lycoris-recoil-215': { expansion: 215, name: "Lycoris Recoil (Trial Deck)" },
  'chainsaw-man': { expansion: 214, name: "Chainsaw Man" },
  'chainsaw-man-213': { expansion: 213, name: "Chainsaw Man (Trial Deck)" },
  'spy-x-family': { expansion: 212, name: "SPY x FAMILY" },
  'spy-x-family-211': { expansion: 211, name: "SPY x FAMILY (Trial Deck)" },
  'guilty-gear-strive': { expansion: 210, name: "Guilty Gear -Strive-" },
  'guilty-gear-strive-209': { expansion: 209, name: "Guilty Gear -Strive- (Trial Deck)" },
  'arifureta-from-commonplace-to-world-s-strongest': { expansion: 208, name: "Arifureta: From Commonplace to World's Strongest" },
  'arifureta-from-commonplace-to-world-s-strongest-207': { expansion: 207, name: "Arifureta: From Commonplace to World's Strongest (Trial Deck)" },
  'azur-lane': { expansion: 206, name: "Azur Lane" },
  'azur-lane-iron-blood-ver': { expansion: 205, name: "Azur Lane Iron Blood Ver." },
  'azur-lane-sakura-empire-ver': { expansion: 204, name: "Azur Lane Sakura Empire Ver." },
  'azur-lane-royal-navy-ver': { expansion: 203, name: "Azur Lane Royal Navy Ver." },
  'azur-lane-eagle-union-ver': { expansion: 202, name: "Azur Lane Eagle Union Ver." },
  'revue-starlight-the-movie': { expansion: 201, name: "Revue Starlight The Movie" },
  'nazarick-tomb-of-the-undead-vol-2': { expansion: 200, name: "Nazarick: Tomb of the Undead Vol.2" },
  'umamusume-pretty-derby-199': { expansion: 199, name: "Umamusume: Pretty Derby" },
  'the-eminence-in-shadow-198': { expansion: 198, name: "The Eminence in Shadow" },
  'revue-starlight-re-live': { expansion: 197, name: "Revue Starlight -Re LIVE-" },
  'makeine-too-many-losing-heroines-196': { expansion: 196, name: "Makeine: Too Many Losing Heroines!" },
  'dandadan': { expansion: 195, name: "\"DANDADAN\"" },
  'girls-band-cry-194': { expansion: 194, name: "Girls Band Cry" },
  'disney-mirrorverse-193': { expansion: 193, name: "Disney Mirrorverse" },
  'the-fruit-of-grisaia': { expansion: 192, name: "The Fruit of Grisaia" },
  'hatsune-miku-colorful-stage-191': { expansion: 191, name: "HATSUNE MIKU: COLORFUL STAGE!" },
  'rurouni-kenshin-190': { expansion: 190, name: "Rurouni Kenshin" },
  'goddess-of-victory-nikke-189': { expansion: 189, name: "GODDESS OF VICTORY: NIKKE" },
  'bang-dream-girls-band-party-5th-anniversary': { expansion: 188, name: "BanG Dream! Girls Band Party! 5th Anniversary" },
  'date-a-live-vol-2': { expansion: 187, name: "Date A Live Vol.2" },
  'blue-archive-186': { expansion: 186, name: "Blue Archive" },
  'pixar-characters-185': { expansion: 185, name: "PIXAR CHARACTERS" },
  'macross-delta-184': { expansion: 184, name: "MACROSS Delta" },
  'frieren-beyond-journey-s-end-183': { expansion: 183, name: "Frieren: Beyond Journey's End" },
  'love-live-school-idol-festival-2-miracle-live': { expansion: 182, name: "Love Live! School idol festival 2 MIRACLE LIVE!" },
  'miss-kobayashi-s-dragon-maid': { expansion: 181, name: "Miss Kobayashi's Dragon Maid" },
  'love-live-superstar': { expansion: 180, name: "Love Live! Superstar!!" },
  'saekano-how-to-raise-a-boring-girlfriend': { expansion: 179, name: "Saekano: How to Raise a Boring Girlfriend" },
  'saekano-how-to-raise-a-boring-girlfriend-178': { expansion: 178, name: "Saekano: How to Raise a Boring Girlfriend (Trial Deck)" },
  'dengeki-bunko-177': { expansion: 177, name: "Dengeki Bunko" },
  'marvel-176': { expansion: 176, name: "MARVEL" },
  'oshi-no-ko-175': { expansion: 175, name: "【OSHI NO KO】" },
  'ayakashi-triangle-174': { expansion: 174, name: "Ayakashi Triangle" },
  'love-live-nijigasaki': { expansion: 173, name: "Love Live! Nijigasaki" },
  'shakugan-no-shana-172': { expansion: 172, name: "Shakugan no Shana" },
  'bocchi-the-rock-171': { expansion: 171, name: "BOCCHI THE ROCK!" },
  'lycoris-recoil-170': { expansion: 170, name: "Lycoris Recoil" },
  'chainsaw-man-169': { expansion: 169, name: "Chainsaw Man" },
  'spy-x-family-168': { expansion: 168, name: "SPY x FAMILY" },
  'guilty-gear-strive-167': { expansion: 167, name: "Guilty Gear -Strive-" },
  'arifureta-from-commonplace-to-world-s-strongest-166': { expansion: 166, name: "Arifureta: From Commonplace to World's Strongest" },
  'azur-lane-165': { expansion: 165, name: "Azur Lane" },
  'avatar-the-last-airbender': { expansion: 164, name: "Avatar: The Last Airbender" },
  'the-fruit-of-grisaia-163': { expansion: 163, name: "The Fruit of Grisaia" },
  'hololive-production-2nd-generation': { expansion: 162, name: "hololive production 2nd Generation" },
  'miss-kobayashi-s-dragon-maid-161': { expansion: 161, name: "Miss Kobayashi's Dragon Maid" },
  'saekano-how-to-raise-a-boring-girlfriend-160': { expansion: 160, name: "Saekano: How to Raise a Boring Girlfriend" },
  'tokyo-revengers': { expansion: 159, name: "Tokyo Revengers" },
  'is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon': { expansion: 158, name: "Is It Wrong to Try to Pick Up Girls in a Dungeon?" },
  'mushoku-tensei-jobless-reincarnation': { expansion: 157, name: "Mushoku Tensei: Jobless Reincarnation" },
  'hololive-production': { expansion: 156, name: "hololive production" },
  'rent-a-girlfriend': { expansion: 155, name: "Rent-A-Girlfriend" },
  'mushoku-tensei-jobless-reincarnation-154': { expansion: 154, name: "Mushoku Tensei: Jobless Reincarnation" },
  'rwby-153': { expansion: 153, name: "RWBY" },
  'the-quintessential-quintuplets': { expansion: 152, name: "The Quintessential Quintuplets" },
  'rwby-151': { expansion: 151, name: "RWBY (Booster Pack)" },
  'the-seven-deadly-sins': { expansion: 150, name: "The Seven Deadly Sins" },
  'kaguya-sama-love-is-war': { expansion: 149, name: "Kaguya-sama: Love is War" },
  'date-a-live': { expansion: 148, name: "Date A Live" },
  'adventure-time': { expansion: 147, name: "Adventure Time" },
  'fujimi-fantasia-bunko': { expansion: 146, name: "Fujimi Fantasia Bunko" },
  'rascal-does-not-dream-series-145': { expansion: 145, name: "Rascal Does Not Dream Series" },
  'cardcaptor-sakura-clear-card': { expansion: 144, name: "Cardcaptor Sakura : Clear Card" },
  'konosuba-god-s-blessing-on-this-wonderful-world': { expansion: 143, name: "KONOSUBA -God's blessing on this wonderful world!" },
  'bang-dream': { expansion: 142, name: "BanG Dream!" },
  'love-live-sunshine': { expansion: 141, name: "Love Live! Sunshine!!" },
  'to-loveru-darkness-2nd': { expansion: 140, name: "To Loveru Darkness 2nd" },
  'the-idolm-ster-cinderella-girls': { expansion: 139, name: "THE IDOLM@STER CINDERELLA GIRLS" },
  'the-melancholy-of-haruhi-suzumiya': { expansion: 138, name: "The Melancholy of Haruhi Suzumiya" },
  'nisekoi-false-love': { expansion: 137, name: "-NISEKOI-False Love" },
  'angel-beats-re-edit': { expansion: 136, name: "Angel Beats! Re:Edit" },
  'love-live': { expansion: 135, name: "Love Live!" },
  'puella-magi-madoka-magica': { expansion: 134, name: "Puella Magi Madoka Magica" },
  'bofuri-i-don-t-want-to-get-hurt-so-i-ll-max-out-my-defense': { expansion: 133, name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense." },
  'fate-grand-order': { expansion: 132, name: "Fate/Grand Order" },
  'mob-psycho-100': { expansion: 131, name: "Mob Psycho 100" },
  'nazarick-tomb-of-the-undead': { expansion: 130, name: "Nazarick: Tomb of the Undead" },
  'that-time-i-got-reincarnated-as-a-slime': { expansion: 129, name: "That Time I Got Reincarnated as a Slime" },
  'jojo-s-bizarre-adventure': { expansion: 128, name: "JoJo's Bizarre Adventure" },
  'goblin-slayer': { expansion: 127, name: "Goblin Slayer" },
  'batman-ninja': { expansion: 126, name: "Batman Ninja" },
  'revue-starlight': { expansion: 125, name: "Revue Starlight" },
  'sao-alternative-gun-gale-online': { expansion: 124, name: "SAO Alternative - Gun Gale Online -" },
  'no-game-no-life': { expansion: 123, name: "No Game No Life" },
  're-zero-starting-life-in-another-world': { expansion: 122, name: "Re:ZERO -Starting Life in Another World-" },
  'fate-apocrypha': { expansion: 121, name: "Fate/Apocrypha" },
  'gurren-lagann': { expansion: 120, name: "GURREN LAGANN" },
  'accel-world': { expansion: 119, name: "Accel・World" },
  'fate-kaleid-liner-prisma-illya': { expansion: 118, name: "Fate/kaleid liner PRISMA ILLYA" },
  'detective-opera-milky-holmes': { expansion: 117, name: "Detective Opera Milky Holmes" },
  'log-horizon': { expansion: 116, name: "LOG HORIZON" },
  'attack-on-titan': { expansion: 115, name: "Attack on Titan" },
  'kancolle': { expansion: 114, name: "Kancolle" },
  'fairy-tail-113': { expansion: 113, name: "Fairy Tail" },
  'persona': { expansion: 112, name: "Persona" },
  'kill-la-kill': { expansion: 111, name: "KILL la KILL" },
  'monogatari-series-bakemonogatari-nisemonogatari': { expansion: 110, name: "MONOGATARI Series (BAKEMONOGATARI, NISEMONOGATARI)" },
  'hatsune-miku-project-diva': { expansion: 109, name: "Hatsune Miku -Project DIVA-" },
  'fate': { expansion: 108, name: "Fate" },
  'sword-art-online': { expansion: 107, name: "Sword Art Online" },
  'rascal-does-not-dream-of-bunny-girl-senpai': { expansion: 106, name: "Rascal Does Not Dream of Bunny Girl Senpai" },
  'rascal-does-not-dream-of-bunny-girl-senpai-105': { expansion: 105, name: "Rascal Does Not Dream of Bunny Girl Senpai (Trial Deck)" },
  'bang-dream-girls-band-party-vol-2': { expansion: 104, name: "BanG Dream! Girls Band Party! Vol.2" },
  're-zero-starting-life-in-another-world-vol-2': { expansion: 103, name: "Re:ZERO -Starting Life in Another World- Vol.2" },
  'demo-deck-batman-ninja': { expansion: 102, name: "【Demo Deck】Batman Ninja" },
  'batman-ninja-101': { expansion: 101, name: "Batman Ninja (Booster Pack)" },
  'batman-ninja-100': { expansion: 100, name: "Batman Ninja (Trial Deck)" },
  'revue-starlight-99': { expansion: 99, name: "Revue Starlight (Booster Pack)" },
  'revue-starlight-98': { expansion: 98, name: "Revue Starlight (Trial Deck)" },
  'bang-dream-girls-band-party-multi-live': { expansion: 97, name: "BanG Dream! Girls Band Party! MULTI LIVE" },
  'sao-alternative-gun-gale-online-96': { expansion: 96, name: "SAO Alternative - Gun Gale Online - (Booster Pack)" },
  'sao-alternative-gun-gale-online-95': { expansion: 95, name: "SAO Alternative - Gun Gale Online - (Trial Deck)" },
  'no-game-no-life-94': { expansion: 94, name: "No Game No Life (Booster Pack)" },
  'no-game-no-life-93': { expansion: 93, name: "No Game No Life (Trial Deck)" },
  'cardcaptor-sakura-clear-card-92': { expansion: 92, name: "Cardcaptor Sakura : Clear Card (Booster Pack)" },
  'cardcaptor-sakura-clear-card-91': { expansion: 91, name: "Cardcaptor Sakura : Clear Card (Trial Deck)" },
  're-zero-starting-life-in-another-world-90': { expansion: 90, name: "Re:ZERO -Starting Life in Another World- (Booster Pack)" },
  're-zero-starting-life-in-another-world-89': { expansion: 89, name: "Re:ZERO -Starting Life in Another World- (Trial Deck)" },
  'konosuba-god-s-blessing-on-this-wonderful-world-2': { expansion: 88, name: "KONOSUBA -God's blessing on this wonderful world! 2" },
  'kancolle-arrival-reinforcement-fleets-from-europe': { expansion: 87, name: "KanColle : Arrival! Reinforcement Fleets from Europe!" },
  'fate-apocrypha-86': { expansion: 86, name: "Fate/Apocrypha (Booster Pack)" },
  'fate-apocrypha-85': { expansion: 85, name: "Fate/Apocrypha (Trial Deck)" },
  'bang-dream-girls-band-party': { expansion: 84, name: "BanG Dream! Girls Band Party!" },
  'bang-dream-girls-band-party-roselia': { expansion: 83, name: "BanG Dream! Girls Band Party! [Roselia]" },
  'gurren-lagann-82': { expansion: 82, name: "GURREN LAGANN (Booster Pack)" },
  'gurren-lagann-81': { expansion: 81, name: "GURREN LAGANN (Trial Deck)" },
  'love-live-sunshine-80': { expansion: 80, name: "Love Live! Sunshine!! (Extra Booster)" },
  'love-live-sunshine-79': { expansion: 79, name: "Love Live! Sunshine!! (Trial Deck)" },
  'persona-5': { expansion: 78, name: "Persona 5" },
  'persona-5-77': { expansion: 77, name: "Persona 5 (Booster Pack)" },
  'sword-art-online-the-movie-ordinal-scale': { expansion: 76, name: "Sword Art Online The Movie - Ordinal Scale -" },
  'accel-world-infinite-burst': { expansion: 75, name: "Accel・World -Infinite Burst-" },
  'attack-on-titan-vol-2': { expansion: 74, name: "Attack on Titan Vol.2" },
  'konosuba-god-s-blessing-on-this-wonderful-world-73': { expansion: 73, name: "KONOSUBA -God's blessing on this wonderful world! (Booster Pack)" },
  'konosuba-god-s-blessing-on-this-wonderful-world-72': { expansion: 72, name: "KONOSUBA -God's blessing on this wonderful world! (Trial Deck)" },
  'bang-dream-71': { expansion: 71, name: "BanG Dream! (Booster Pack)" },
  'accel-world-70': { expansion: 70, name: "Accel・World (Booster Pack)" },
  'accel-world-69': { expansion: 69, name: "Accel・World (Trial Deck)" },
  'kancolle-fleet-in-the-deep-sea-sighted': { expansion: 68, name: "KanColle : Fleet in the Deep Sea, Sighted!" },
  'sword-art-online-re-edit': { expansion: 67, name: "Sword Art Online Re: Edit" },
  'bang-dream-66': { expansion: 66, name: "BanG Dream! (Trial Deck)" },
  'love-live-sunshine-65': { expansion: 65, name: "Love Live! Sunshine!! (Booster Pack)" },
  'love-live-sunshine-64': { expansion: 64, name: "Love Live! Sunshine!! (Trial Deck)" },
  'to-loveru-darkness-2nd-62': { expansion: 62, name: "To Loveru Darkness 2nd (Booster Pack)" },
  'to-loveru-darkness-2nd-61': { expansion: 61, name: "To Loveru Darkness 2nd (Trial Deck)" },
  'fate-kaleid-liner-prisma-illya-60': { expansion: 60, name: "Fate/kaleid liner PRISMA ILLYA (Booster Pack)" },
  'love-live-dx-vol-2': { expansion: 59, name: "Love Live! DX Vol.2" },
  'nisekoi-false-love-58': { expansion: 58, name: "NISEKOI: -False Love- (Extra Booster)" },
  'disgaea': { expansion: 57, name: "Disgaea" },
  'disgaea-55': { expansion: 55, name: "Disgaea (Trial Deck)" },
  'sword-art-online-vol-2': { expansion: 54, name: "Sword Art Online Ⅱ Vol.2" },
  'the-melancholy-of-haruhi-suzumiya-53': { expansion: 53, name: "The Melancholy of Haruhi Suzumiya (Extra Booster)" },
  'fate-stay-night-unlimited-blade-works-vol-2': { expansion: 52, name: "Fate/stay night [Unlimited Blade Works] Vol.2" },
  'the-idolm-ster-cinderella-girls-51': { expansion: 51, name: "THE IDOLM@STER CINDERELLA GIRLS (Booster Pack)" },
  'the-idolm-ster-cinderella-girls-heart': { expansion: 50, name: "THE IDOLM@STER CINDERELLA GIRLS ~Heart~" },
  'the-idolm-ster-cinderella-girls-power': { expansion: 49, name: "THE IDOLM@STER CINDERELLA GIRLS ~Power~" },
  'the-idolm-ster-cinderella-girls-smile': { expansion: 48, name: "THE IDOLM@STER CINDERELLA GIRLS ~Smile~" },
  'nisemonogatari': { expansion: 47, name: "NISEMONOGATARI" },
  'nisemonogatari-46': { expansion: 46, name: "NISEMONOGATARI (Trial Deck)" },
  'the-melancholy-of-haruhi-suzumiya-45': { expansion: 45, name: "The Melancholy of Haruhi Suzumiya (Booster Pack)" },
  'the-melancholy-of-haruhi-suzumiya-44': { expansion: 44, name: "The Melancholy of Haruhi Suzumiya (Trial Deck)" },
  'tutorial-deck-detective-opera-milky-holmes': { expansion: 43, name: "【Tutorial Deck】 Detective Opera Milky Holmes" },
  'love-live-vol-2': { expansion: 42, name: "Love Live! Vol.2" },
  'love-live-school-idol-festival': { expansion: 41, name: "Love Live! School idol festival" },
  'kancolle-2nd-fleet': { expansion: 40, name: "Kancolle, 2nd Fleet" },
  'log-horizon-39': { expansion: 39, name: "LOG HORIZON (Extra Booster)" },
  'log-horizon-38': { expansion: 38, name: "LOG HORIZON (Trial Deck)" },
  'puella-magi-madoka-magica-the-movie-rebellion': { expansion: 37, name: "PUELLA MAGI MADOKA MAGICA THE MOVIE -Rebellion-" },
  'fate-stay-night-unlimited-blade-works': { expansion: 36, name: "Fate/stay night [Unlimited Blade Works]" },
  'fate-stay-night-unlimited-blade-works-35': { expansion: 35, name: "Fate/stay night [Unlimited Blade Works] (Trial Deck)" },
  'attack-on-titan-34': { expansion: 34, name: "Attack on Titan (Booster Pack)" },
  'attack-on-titan-33': { expansion: 33, name: "Attack on Titan (Trial Deck)" },
  'love-live-dx': { expansion: 32, name: "Love Live! DX" },
  'kancolle-31': { expansion: 31, name: "Kancolle (Booster Pack)" },
  'kancolle-30': { expansion: 30, name: "Kancolle (Trial Deck)" },
  'sword-art-online-ii': { expansion: 29, name: "Sword Art Online II" },
  'sword-art-online-ii-28': { expansion: 28, name: "Sword Art Online II (Trial Deck)" },
  'hatsune-miku-project-diva-f-2nd': { expansion: 27, name: "Hatsune Miku: Project DIVA F 2nd" },
  'nisekoi-false-love-ver-e': { expansion: 26, name: "NISEKOI -False Love- ver.E" },
  'nisekoi-false-love-25': { expansion: 25, name: "NISEKOI -False Love- (Trial Deck)" },
  'fairy-tail-ver-e': { expansion: 24, name: "FAIRY TAIL ver.E" },
  'fairy-tail-ver-e-23': { expansion: 23, name: "FAIRY TAIL ver.E (Trial Deck)" },
  'persona-4-ver-e': { expansion: 22, name: "Persona 4 ver.E" },
  'persona-4-ver-e-21': { expansion: 21, name: "Persona 4 ver.E (Trial Deck)" },
  'kill-la-kill-20': { expansion: 20, name: "KILL la KILL (Booster Pack)" },
  'kill-la-kill-19': { expansion: 19, name: "KILL la KILL (Trial Deck)" },
  'angel-beats-re-edit-18': { expansion: 18, name: "Angel Beats! Re:Edit (Booster Pack)" },
  'angel-beats-re-edit-17': { expansion: 17, name: "Angel Beats! Re:Edit (Trial Deck)" },
  'love-live-16': { expansion: 16, name: "Love Live! (Booster Pack)" },
  'love-live-15': { expansion: 15, name: "Love Live! (Trial Deck)" },
  'sword-art-online-vol-2-14': { expansion: 14, name: "Sword Art Online Vol.2 (Booster Pack)" },
  'bakemonogatari': { expansion: 13, name: "BAKEMONOGATARI" },
  'bakemonogatari-12': { expansion: 12, name: "BAKEMONOGATARI (Trial Deck)" },
  'hatsune-miku-project-diva-11': { expansion: 11, name: "Hatsune Miku -Project DIVA- ƒ (Booster Pack)" },
  'hatsune-miku-project-diva-10': { expansion: 10, name: "Hatsune Miku -Project DIVA- ƒ (Trial Deck)" },
  'fate-zero': { expansion: 9, name: "Fate/Zero" },
  'sword-art-online-8': { expansion: 8, name: "Sword Art Online (Booster Pack)" },
  'sword-art-online-7': { expansion: 7, name: "Sword Art Online (Trial Deck)" },
  'disgaea-hour-of-darkness': { expansion: 6, name: "Disgaea ～Hour of Darkness～" },
  'puella-magi-madoka-magica-5': { expansion: 5, name: "Puella Magi Madoka Magica (Booster Pack)" },
  'pr-card-schwarz-side': { expansion: 4, name: "PR Card 【Schwarz Side】" },
  'pr-card-wei-side': { expansion: 3, name: "PR Card 【Weiẞ Side】" },
  'fate-zero-2': { expansion: 2, name: "Fate/Zero (Trial Deck)" },
  'disgaea-1': { expansion: 1, name: "Disgaea" },
};

// Trigger icon filenames -> display labels (unknown filenames fall back to
// the raw name; verified against partimages/ usage).
const TRIGGER_LABELS = {
  soul: 'Soul',
  doublesoul: 'Double Soul',
  wind: 'Wind',
  flame: 'Flame',
  shot: 'Shot',
  gate: 'Gate',
  standby: 'Standby',
  choice: 'Choice',
  treasure: 'Treasure',
  bag: 'Bag',
  book: 'Book',
  bar: 'Bar',
  return: 'Return',
};

// curl with retries: the official site occasionally resets TLS connections
// (curl exit 35) under sustained fetching; back off and try again.
export function httpGet(url, retries = 3) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return execFileSync('curl', ['-s', '-A', UA, url], {
        maxBuffer: 64 * 1024 * 1024,
      }).toString('utf8');
    } catch (e) {
      lastErr = e;
      if (attempt < retries) execFileSync('sleep', [String(500 * (attempt + 1))]);
    }
  }
  throw lastErr;
}

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ');

// Parse one card <li> block from a cardsearch_ex fragment into a card object.
export function parseCard(block) {
  const num = (block.match(/class="number">([^<]+)</) || [])[1]?.trim();
  const name = (block.match(/class="ttl[^"]*">([^<]+)</) || [])[1]?.trim();
  const imgSrc = (block.match(/<div class="image"><img src="([^"]+)"/) || [])[1];

  // dt/dd pairs for the structured fields
  const fields = {};
  const dlRe = /<dt>([^<]+)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g;
  let m;
  while ((m = dlRe.exec(block))) {
    fields[m[1].trim()] = m[2];
  }

  const partImgs = (dd) => [...dd.matchAll(/partimages\/([a-z0-9_]+)\.gif/g)].map((x) => x[1]);
  const side = /partimages\/s\.gif/.test(fields['Side'] || '') ? 'S' : 'W';
  const color = partImgs(fields['Color'] || '')[0] ?? '';
  const soul = (fields['Soul'] || '').match(/partimages\/soul\.gif/g)?.length ?? 0;
  const trigger = partImgs(fields['Trigger'] || '')[0] ?? '';

  // Detail text: <br> becomes newline, other tags stripped, entities decoded.
  const detail = block.match(/class="p-cards__detail[^"]*">([\s\S]*?)<\/div>/);
  const text = detail
    ? decodeEntities(detail[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')).trim()
    : '';

  // Foil variants carry a suffix after the E-number (E001SP, E001SEC, ...).
  const variant = num?.match(/E\d+(.+)$/)?.[1] ?? '';

  return {
    num,
    name: decodeEntities(name || ''),
    type: decodeEntities((fields['Card Type'] || '').replace(/<[^>]+>/g, '').trim()),
    rarity: decodeEntities((fields['Rarity'] || '').replace(/<[^>]+>/g, '').trim()),
    side,
    color,
    level: (fields['Level'] || '').replace(/<[^>]+>/g, '').trim(),
    cost: (fields['Cost'] || '').replace(/<[^>]+>/g, '').trim(),
    power: (fields['Power'] || '').replace(/<[^>]+>/g, '').trim(),
    soul,
    trigger: trigger ? (TRIGGER_LABELS[trigger] ?? trigger) : '',
    text,
    img: imgSrc ? (imgSrc.startsWith('http') ? imgSrc : `${CARDLIST_BASE}${imgSrc}`) : '',
    variant,
  };
}

export function parseCards(fragment) {
  const cards = [];
  const liRe = /<li class="ex-item">([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRe.exec(fragment))) cards.push(parseCard(m[1]));
  return cards;
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const fileKey = (num) => num.replace('/', '-');
