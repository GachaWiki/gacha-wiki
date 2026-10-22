// Firenze Character Data - Stella Sora
// Generated from live game tables (Oct 19 2026 patch, v2.0.0)

export const Firenze = {
  "id": 110,
  "name": "Firenze",
  "icon": "/stella/assets/Firenze.png",
  "portrait": "/stella/assets/Firenze_portrait.png",
  "background": "/stella/assets/Firenze_background.png",
  "description": "Firenze can summon doppelgangers to fight for her on the battlefield. Rumor has it that she does the same in her office, which is how she always manages to stay so graceful.",
  "voiceActor": {
    "cn": "Zi Yin",
    "cnLocalized": "子音",
    "jp": "Chiwa Saito",
    "jpLocalized": "斎藤千和"
  },
  "birthday": "11.16",
  "grade": 5,
  "element": "Umbra",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "United Harvest",
  "tags": [
    "Vanguard",
    "Steady",
    "United Harvest"
  ],
  "dateEvents": [
    {
      "name": "School Days",
      "icon": "DatingSPCG_110301",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "\"No, come on!\" you reply. \"It's just because I can totally tell that you were an excellent student, and I want to know the other parts of your life.\"\n\"So you're curious about my favorite food and stuff? Heh, you're pretty nosy.\""
    },
    {
      "name": "The Bait",
      "icon": "DatingSPCG_110302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Like Firenze said, she's not fishing to catch some fish, so she stays calm and relaxed even when no fish takes the bait for quite some time...\nUntil her competitive side takes over.\n\"How dare you ignore me, fish?\" She also hates to fail."
    },
    {
      "name": "A \"Romantic\" Stroll",
      "icon": "DatingSPCG_110303",
      "clue": "Visit the Market to unlock",
      "secondChoice": "It turns out she regularly leaves the office to inspect commercial hubs across the city, including this one.\n\"This is the only place you see genuine market trends and real civic life,\" she explains.\n\"So this is just work to you, not a casual stroll...\" You sigh. That sounds exactly like the Firenze you know."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wings",
      "Deluxe Blower",
      "Exquisite Blower",
      "Fiery Honeypot",
      "Gilded Ceramic Bowl",
      "Love Candle",
      "Mystic Potion Kettle",
      "Porcelain Cup",
      "Portable Blower"
    ],
    "hates": [
      "Emerging Talent",
      "Rising Star",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Blooming Shadows",
    "icon": "Icon/Skill/11001_Normal",
    "description": "Swings the cane to strike multiple times.\u000bStrike 1: <color=#ec6d21>&Param1&</color> of ATK as Umbra Auto Attack DMG.\u000bStrike 2: <color=#ec6d21>&Param2&</color> of ATK as Umbra Auto Attack DMG.\u000bStrike 3: <color=#ec6d21>&Param3& x5</color> of ATK as Umbra Auto Attack DMG.\u000bStrike 4: <color=#ec6d21>&Param4&</color> and <color=#ec6d21>&Param5&</color> of ATK as Umbra Auto Attack DMG.\u000bWhen there is no ##Shadow Clone#4002# present, the 2nd hit of the Auto Attack summons 1 ##Shadow Clone#4002#.\u000bThe 4th hit of the Auto Attack commands all ##Shadow Clones#4002# to sprint strike, dealing <color=#ec6d21>&Param6&</color> of ATK as Umbra Minion DMG.",
    "shortDescription": "Swings the cane to strike multiple times and summons ##Shadow Clones#4002# to attack.",
    "params": [
      "32%/36%/41%/55%/60%/64%/73%/77%/80%/88%/94%/101%/107%",
      "16%/19%/21%/29%/31%/33%/38%/40%/42%/46%/49%/53%/56%",
      "7%/8%/9%/12%/13%/14%/16%/17%/17%/19%/20%/22%/23%",
      "37%/42%/48%/64%/69%/75%/85%/89%/94%/103%/110%/117%/125%",
      "39%/44%/50%/67%/73%/78%/89%/94%/98%/107%/115%/123%/131%",
      "54%/62%/70%/94%/102%/109%/124%/131%/137%/150%/161%/171%/182%"
    ],
    "hints": {
      "4002": {
        "id": 4002,
        "name": "Shadow Clone"
      }
    }
  },
  "skill": {
    "name": "Elegant Parade",
    "icon": "Icon/Skill/11001_Skill_Main",
    "description": "Unleashes combo slashes with the cane sword, dealing <color=#ec6d21>&Param1& x3</color> of ATK as Umbra Skill DMG. When casting the Main Skill, summons 1 ##Shadow Clone#4002# and orders all ##Shadow Clones#4002# to unleash combo slashes, dealing <color=#ec6d21>&Param2& x3</color> of ATK as Umbra Minion DMG. It can be cast 2 times initially.\u000bElegant Parade (Main Skill) and ##Shadow Clones#4002# can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4005#.",
    "shortDescription": "Unleashes combo slashes with the cane sword, dealing multiple instances of DMG. Casting the Main Skill can summon ##Shadow Clones#4002# and trigger combo slashes. The Main Skill and ##Shadow Clones#4002# can trigger ##Umbra Mark#1019#.",
    "params": [
      "109%/125%/142%/191%/206%/221%/252%/265%/278%/304%/326%/348%/370%",
      "40%/46%/52%/70%/76%/82%/93%/98%/103%/113%/121%/129%/137%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%",
      "4%/5%/6%/7%/9%/10%/11%/12%/14%"
    ],
    "hints": {
      "4002": {
        "id": 4002,
        "name": "Shadow Clone"
      },
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4005": {
        "id": 4005,
        "name": "Dark Burn"
      }
    },
    "cooldown": "6s"
  },
  "supportSkill": {
    "name": "Reign of Night",
    "icon": "Icon/Skill/11001_Skill_Support",
    "description": "Strikes the ground with the cane, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Skill DMG, and summons 2 ##Shadow Clones#4002#.\u000bWhen the main Trekker deals DMG, ##Shadow Clones#4002# also strike at the target, dealing <color=#ec6d21>&Param2&</color> of ATK as Umbra Minion DMG. This effect can only be triggered once every 1.5s.\u000bReign of Night (Support Skill) and ##Shadow Clones#4002# can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4005#.",
    "shortDescription": "Pounds the ground to deal AoE DMG and summons multiple ##Shadow Clones#4002#. When the main Trekker deals DMG, ##Shadow Clones#4002# also strike at the target. The Support Skill and ##Shadow Clones#4002# can trigger ##Umbra Mark#1019#.",
    "params": [
      "108%/124%/141%/189%/204%/220%/250%/263%/276%/302%/323%/345%/367%",
      "32%/37%/41%/56%/60%/65%/73%/77%/81%/89%/95%/101%/108%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%",
      "4%/5%/6%/7%/9%/10%/11%/12%/14%"
    ],
    "hints": {
      "4002": {
        "id": 4002,
        "name": "Shadow Clone"
      },
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4005": {
        "id": 4005,
        "name": "Dark Burn"
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Personal Tuition",
    "icon": "Icon/Skill/11001_Ultra",
    "description": "Spreads a dark magic circle, dealing <color=#ec6d21>&Param1& x5</color> and <color=#ec6d21>&Param2&</color> of ATK as Umbra Ultimate DMG.\u000bDarkness Descends (Ultimate) can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4005#.",
    "shortDescription": "Spreads a dark magic circle, dealing multiple instances of DMG. The Ultimate can trigger ##Umbra Mark#1019#.",
    "params": [
      "176%/203%/229%/309%/333%/358%/408%/429%/450%/492%/528%/563%/598%",
      "396%/455%/515%/693%/748%/804%/914%/962%/1009%/1104%/1184%/1263%/1342%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%",
      "4%/5%/6%/7%/9%/10%/11%/12%/14%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4005": {
        "id": 4005,
        "name": "Dark Burn"
      }
    },
    "cooldown": "25s",
    "energy": 218
  },
  "talents": [
    {
      "name": "Bleak Ruination",
      "talents": [
        {
          "name": "Bleak Ruination",
          "description": "When Firenze triggers an ##Umbra Mark#1019#, increases the Umbra DMG of Firenze and ##Shadow Clones#4002# on the field by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "7%",
            "5",
            "3"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Sorrowful Strength",
      "talents": [
        {
          "name": "Sorrowful Strength",
          "description": "When Firenze summons a ##Shadow Clone#4002#, increases Firenze's ATK by <color=#0abec5>&Param1&</color> and the Minion DMG of ##Shadow Clones#4002# on the field by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "5"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Tender Adamantine Heart",
      "talents": [
        {
          "name": "Tender Adamantine Heart",
          "description": "When Firenze casts a skill, increases Firenze's ATK by <color=#0abec5>&Param1&</color> and the Minion DMG of ##Shadow Clones#4002# on the field by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "8"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Tough Rose",
      "talents": [
        {
          "name": "Tough Rose",
          "description": "When any Trekker applies an ##Umbra Mark#1019# to a target, increases Firenze's Ultimate DMG by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "4%",
            "10",
            "20"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Unique Individuals",
      "talents": [
        {
          "name": "Unique Individuals",
          "description": "An all-Umbra squad increases Firenze's Umbra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "20%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "690"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1325,
      "atk": 115
    },
    {
      "hp": 1727,
      "atk": 150
    },
    {
      "hp": 2125,
      "atk": 184
    },
    {
      "hp": 2524,
      "atk": 219
    },
    {
      "hp": 2922,
      "atk": 254
    },
    {
      "hp": 3320,
      "atk": 288
    },
    {
      "hp": 3719,
      "atk": 323
    },
    {
      "hp": 4117,
      "atk": 357
    },
    {
      "hp": 4516,
      "atk": 392
    },
    {
      "hp": 4914,
      "atk": 427
    },
    {
      "hp": 5897,
      "atk": 512
    },
    {
      "hp": 6296,
      "atk": 546
    },
    {
      "hp": 6694,
      "atk": 581
    },
    {
      "hp": 7093,
      "atk": 616
    },
    {
      "hp": 7491,
      "atk": 650
    },
    {
      "hp": 7890,
      "atk": 685
    },
    {
      "hp": 8288,
      "atk": 719
    },
    {
      "hp": 8687,
      "atk": 754
    },
    {
      "hp": 9085,
      "atk": 789
    },
    {
      "hp": 9483,
      "atk": 823
    },
    {
      "hp": 9882,
      "atk": 858
    },
    {
      "hp": 11861,
      "atk": 1029
    },
    {
      "hp": 12259,
      "atk": 1064
    },
    {
      "hp": 12657,
      "atk": 1099
    },
    {
      "hp": 13056,
      "atk": 1133
    },
    {
      "hp": 13454,
      "atk": 1168
    },
    {
      "hp": 13853,
      "atk": 1202
    },
    {
      "hp": 14251,
      "atk": 1237
    },
    {
      "hp": 14650,
      "atk": 1272
    },
    {
      "hp": 15048,
      "atk": 1306
    },
    {
      "hp": 15447,
      "atk": 1341
    },
    {
      "hp": 15845,
      "atk": 1375
    },
    {
      "hp": 19019,
      "atk": 1651
    },
    {
      "hp": 19418,
      "atk": 1685
    },
    {
      "hp": 19816,
      "atk": 1720
    },
    {
      "hp": 20215,
      "atk": 1755
    },
    {
      "hp": 20613,
      "atk": 1789
    },
    {
      "hp": 21011,
      "atk": 1824
    },
    {
      "hp": 21410,
      "atk": 1858
    },
    {
      "hp": 21808,
      "atk": 1893
    },
    {
      "hp": 22207,
      "atk": 1927
    },
    {
      "hp": 22605,
      "atk": 1962
    },
    {
      "hp": 23004,
      "atk": 1997
    },
    {
      "hp": 27600,
      "atk": 2396
    },
    {
      "hp": 27999,
      "atk": 2430
    },
    {
      "hp": 28397,
      "atk": 2465
    },
    {
      "hp": 28795,
      "atk": 2499
    },
    {
      "hp": 29194,
      "atk": 2534
    },
    {
      "hp": 29592,
      "atk": 2568
    },
    {
      "hp": 29991,
      "atk": 2603
    },
    {
      "hp": 30389,
      "atk": 2638
    },
    {
      "hp": 30788,
      "atk": 2672
    },
    {
      "hp": 31186,
      "atk": 2707
    },
    {
      "hp": 31585,
      "atk": 2741
    },
    {
      "hp": 37907,
      "atk": 3290
    },
    {
      "hp": 38305,
      "atk": 3325
    },
    {
      "hp": 38704,
      "atk": 3359
    },
    {
      "hp": 39102,
      "atk": 3394
    },
    {
      "hp": 39500,
      "atk": 3428
    },
    {
      "hp": 39899,
      "atk": 3463
    },
    {
      "hp": 40297,
      "atk": 3498
    },
    {
      "hp": 40696,
      "atk": 3532
    },
    {
      "hp": 41094,
      "atk": 3567
    },
    {
      "hp": 41493,
      "atk": 3601
    },
    {
      "hp": 41891,
      "atk": 3636
    },
    {
      "hp": 50272,
      "atk": 4363
    },
    {
      "hp": 50671,
      "atk": 4398
    },
    {
      "hp": 51069,
      "atk": 4433
    },
    {
      "hp": 51468,
      "atk": 4467
    },
    {
      "hp": 51866,
      "atk": 4502
    },
    {
      "hp": 52265,
      "atk": 4536
    },
    {
      "hp": 52663,
      "atk": 4571
    },
    {
      "hp": 53062,
      "atk": 4605
    },
    {
      "hp": 53460,
      "atk": 4640
    },
    {
      "hp": 53858,
      "atk": 4675
    },
    {
      "hp": 54257,
      "atk": 4709
    },
    {
      "hp": 65107,
      "atk": 5651
    },
    {
      "hp": 65506,
      "atk": 5686
    },
    {
      "hp": 65904,
      "atk": 5720
    },
    {
      "hp": 66302,
      "atk": 5755
    },
    {
      "hp": 66701,
      "atk": 5789
    },
    {
      "hp": 67099,
      "atk": 5824
    },
    {
      "hp": 67498,
      "atk": 5859
    },
    {
      "hp": 67896,
      "atk": 5893
    },
    {
      "hp": 68295,
      "atk": 5928
    },
    {
      "hp": 68693,
      "atk": 5962
    },
    {
      "hp": 69092,
      "atk": 5997
    },
    {
      "hp": 82905,
      "atk": 7196
    },
    {
      "hp": 83303,
      "atk": 7230
    },
    {
      "hp": 83702,
      "atk": 7265
    },
    {
      "hp": 84100,
      "atk": 7300
    },
    {
      "hp": 84499,
      "atk": 7334
    },
    {
      "hp": 84897,
      "atk": 7369
    },
    {
      "hp": 85296,
      "atk": 7403
    },
    {
      "hp": 85694,
      "atk": 7438
    },
    {
      "hp": 86092,
      "atk": 7472
    },
    {
      "hp": 86491,
      "atk": 7507
    },
    {
      "hp": 86889,
      "atk": 7542
    },
    {
      "hp": 86889,
      "atk": 7542
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
