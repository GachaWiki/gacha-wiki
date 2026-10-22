// Nanoha Character Data - Stella Sora
// Generated from live game tables (Oct 19 2026 patch, v2.0.0)

export const Nanoha = {
  "id": 119,
  "name": "Nanoha",
  "icon": "/stella/assets/Nanoha.png",
  "portrait": "/stella/assets/Nanoha_portrait.png",
  "background": "/stella/assets/Nanoha_background.png",
  "description": "Nanoha is a maid working at Goodwind who is also skilled in \"Flower\" Ninjutsu. She takes pride in her Sunflower Shuriken, which can hit its target while moving at high speed.",
  "voiceActor": {
    "cn": "Dou Nai",
    "cnLocalized": "豆奶",
    "jp": "Satomi Sato",
    "jpLocalized": "佐藤聡美"
  },
  "birthday": "4.20",
  "grade": 5,
  "element": "Ventus",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Inquisitive",
  "faction": "Goodwind Homecare",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Goodwind Homecare"
  ],
  "dateEvents": [
    {
      "name": "Customized Sweetness",
      "icon": "DatingSPCG_119301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "\"One of these little cakes is made just for you, with all your favorite flavors mixed in. Would you care to guess which one?\"\n\nExcited by the fun challenge, you dive in and start tasting them one by one."
    },
    {
      "name": "The Best Maid",
      "icon": "DatingSPCG_119302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "You go first and dispatch five darts. Unfortunately, none of them hit the spot exactly, leaving you a little frustrated.\n\n\"Please, allow Nanoha to win this for you,\" Amidst the noisy crowd, Nanoha whispers softly into your ear."
    },
    {
      "name": "Maid Attendant",
      "icon": "DatingSPCG_119303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Because of Nanoha's maid outfit, the two of you became the center of attention the moment you walked in.\n\nAnd since she stayed quietly at your side the whole time, people around the class started whispering to each other, wondering if you might come from some prominent family."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Chill Crushed Ice",
      "Chilling Wind Spinner",
      "Fragrant Ice Delight",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Porcelain Cup",
      "Sweet Ice Furry",
      "Whisper Wind Spinner"
    ],
    "hates": [
      "Emerging Talent",
      "Rising Star",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Flowers Scatter",
    "icon": "Icon/Skill/11901_Normal",
    "description": "Throws multiple darts.\u000bStrike 1: <color=#ec6d21>&Param1& x2</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 2: <color=#ec6d21>&Param2& x2</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 3: <color=#ec6d21>&Param3& x3</color> of ATK as Ventus Auto Attack DMG.",
    "shortDescription": "Throws a number of darts.",
    "params": [
      "15%/17%/19%/26%/28%/30%/35%/37%/38%/42%/45%/48%/51%",
      "15%/17%/19%/26%/28%/30%/35%/37%/38%/42%/45%/48%/51%",
      "22%/25%/28%/39%/42%/45%/51%/54%/56%/62%/66%/71%/75%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Flowers Dance",
    "icon": "Icon/Skill/11901_Skill_Main",
    "description": "Throws two sunflower shurikens, each flying back and forth 8 times and dealing <color=#ec6d21>&Param1&</color> of ATK as Ventus Skill DMG.\u000bFlowers Dance (Main Skill) can trigger ##Ventus Mark#1017# and create a Blossom, dealing &Param2& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Throws sunflower shurikens that strike the target and return. The Main Skill can trigger ##Ventus Mark#1017# and create a Blossom.",
    "params": [
      "6%/7%/8%/12%/13%/14%/15%/16%/17%/19%/20%/21%/23%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Flowers Bloom",
    "icon": "Icon/Skill/11901_Skill_Support",
    "description": "Conjures an exploding sunflower that fires 12 shurikens, each dealing <color=#ec6d21>&Param1&</color> of ATK as Ventus Skill DMG.\u000bFlowers Bloom (Support Skill) can trigger ##Ventus Mark#1017# and create a Blossom, dealing &Param2& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Conjures an exploding sunflower that fires multiple shurikens. The Support Skill can trigger ##Ventus Mark#1017# and create a Blossom.",
    "params": [
      "25%/29%/33%/45%/49%/52%/59%/63%/66%/72%/77%/82%/87%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Flowers Thrice",
    "icon": "Icon/Skill/11901_Ultra",
    "description": "Generates 2 stationary clones that attack enemies with shurikens, dealing of ATK<color=#ec6d21>&Param1& x2, <color=#ec6d21>&Param2& x2</color>, and <color=#ec6d21></color>&Param3& x3</color> as Ventus Ultimate DMG.\u000bEach clone lasts for 25s. Up to 2 clones can be present simultaneously.\u000bWhen a clone deals DMG, it can trigger ##Ventus Mark#1017# and create a Blossom, dealing &Param4& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Generates clones that attack enemies. The clones can trigger ##Ventus Mark#1017# and create a Blossom.",
    "params": [
      "19%/22%/25%/33%/36%/39%/44%/47%/49%/54%/58%/61%/65%",
      "19%/22%/25%/33%/36%/39%/44%/47%/49%/54%/58%/61%/65%",
      "28%/32%/37%/49%/53%/57%/65%/69%/72%/79%/85%/90%/96%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Like a Dream",
      "talents": [
        {
          "name": "Like a Dream",
          "description": "When Nanoha's clone is on the battlefield, her ATK is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "47%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Rejuvenating Spring",
      "talents": [
        {
          "name": "Rejuvenating Spring",
          "description": "When Nanoha triggers ##Ventus Mark#1017#, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "10"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Esoteric Arts",
      "talents": [
        {
          "name": "Esoteric Arts",
          "description": "When Nanoha casts a skill, her Ventus DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Circulation of Wind",
      "talents": [
        {
          "name": "Circulation of Wind",
          "description": "When Nanoha deals Auto Attack DMG to a target, increases her Auto Attack DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "22%",
            "6"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Ninja Creed",
      "talents": [
        {
          "name": "Ninja Creed",
          "description": "Increases Nanoha's Ventus DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "24%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 782,
      "atk": 114
    },
    {
      "hp": 1017,
      "atk": 148
    },
    {
      "hp": 1252,
      "atk": 182
    },
    {
      "hp": 1486,
      "atk": 216
    },
    {
      "hp": 1721,
      "atk": 250
    },
    {
      "hp": 1956,
      "atk": 284
    },
    {
      "hp": 2190,
      "atk": 318
    },
    {
      "hp": 2425,
      "atk": 352
    },
    {
      "hp": 2660,
      "atk": 386
    },
    {
      "hp": 2895,
      "atk": 420
    },
    {
      "hp": 3474,
      "atk": 504
    },
    {
      "hp": 3708,
      "atk": 538
    },
    {
      "hp": 3943,
      "atk": 572
    },
    {
      "hp": 4178,
      "atk": 606
    },
    {
      "hp": 4412,
      "atk": 640
    },
    {
      "hp": 4647,
      "atk": 674
    },
    {
      "hp": 4882,
      "atk": 708
    },
    {
      "hp": 5116,
      "atk": 742
    },
    {
      "hp": 5351,
      "atk": 776
    },
    {
      "hp": 5586,
      "atk": 811
    },
    {
      "hp": 5820,
      "atk": 845
    },
    {
      "hp": 6986,
      "atk": 1014
    },
    {
      "hp": 7221,
      "atk": 1048
    },
    {
      "hp": 7456,
      "atk": 1082
    },
    {
      "hp": 7690,
      "atk": 1116
    },
    {
      "hp": 7925,
      "atk": 1150
    },
    {
      "hp": 8160,
      "atk": 1184
    },
    {
      "hp": 8394,
      "atk": 1218
    },
    {
      "hp": 8629,
      "atk": 1252
    },
    {
      "hp": 8864,
      "atk": 1286
    },
    {
      "hp": 9098,
      "atk": 1320
    },
    {
      "hp": 9333,
      "atk": 1354
    },
    {
      "hp": 11203,
      "atk": 1626
    },
    {
      "hp": 11438,
      "atk": 1660
    },
    {
      "hp": 11672,
      "atk": 1694
    },
    {
      "hp": 11907,
      "atk": 1728
    },
    {
      "hp": 12142,
      "atk": 1762
    },
    {
      "hp": 12376,
      "atk": 1796
    },
    {
      "hp": 12611,
      "atk": 1830
    },
    {
      "hp": 12846,
      "atk": 1864
    },
    {
      "hp": 13080,
      "atk": 1898
    },
    {
      "hp": 13315,
      "atk": 1932
    },
    {
      "hp": 13550,
      "atk": 1966
    },
    {
      "hp": 16257,
      "atk": 2359
    },
    {
      "hp": 16491,
      "atk": 2393
    },
    {
      "hp": 16726,
      "atk": 2427
    },
    {
      "hp": 16961,
      "atk": 2461
    },
    {
      "hp": 17195,
      "atk": 2495
    },
    {
      "hp": 17430,
      "atk": 2529
    },
    {
      "hp": 17665,
      "atk": 2563
    },
    {
      "hp": 17899,
      "atk": 2597
    },
    {
      "hp": 18134,
      "atk": 2631
    },
    {
      "hp": 18369,
      "atk": 2665
    },
    {
      "hp": 18604,
      "atk": 2700
    },
    {
      "hp": 22327,
      "atk": 3240
    },
    {
      "hp": 22562,
      "atk": 3274
    },
    {
      "hp": 22797,
      "atk": 3308
    },
    {
      "hp": 23032,
      "atk": 3342
    },
    {
      "hp": 23266,
      "atk": 3376
    },
    {
      "hp": 23501,
      "atk": 3410
    },
    {
      "hp": 23736,
      "atk": 3444
    },
    {
      "hp": 23970,
      "atk": 3478
    },
    {
      "hp": 24205,
      "atk": 3512
    },
    {
      "hp": 24440,
      "atk": 3546
    },
    {
      "hp": 24674,
      "atk": 3580
    },
    {
      "hp": 29611,
      "atk": 4297
    },
    {
      "hp": 29846,
      "atk": 4331
    },
    {
      "hp": 30080,
      "atk": 4365
    },
    {
      "hp": 30315,
      "atk": 4399
    },
    {
      "hp": 30550,
      "atk": 4433
    },
    {
      "hp": 30784,
      "atk": 4467
    },
    {
      "hp": 31019,
      "atk": 4501
    },
    {
      "hp": 31254,
      "atk": 4535
    },
    {
      "hp": 31488,
      "atk": 4569
    },
    {
      "hp": 31723,
      "atk": 4603
    },
    {
      "hp": 31958,
      "atk": 4637
    },
    {
      "hp": 38349,
      "atk": 5565
    },
    {
      "hp": 38584,
      "atk": 5599
    },
    {
      "hp": 38819,
      "atk": 5633
    },
    {
      "hp": 39053,
      "atk": 5667
    },
    {
      "hp": 39288,
      "atk": 5701
    },
    {
      "hp": 39523,
      "atk": 5735
    },
    {
      "hp": 39758,
      "atk": 5769
    },
    {
      "hp": 39992,
      "atk": 5803
    },
    {
      "hp": 40227,
      "atk": 5837
    },
    {
      "hp": 40462,
      "atk": 5871
    },
    {
      "hp": 40696,
      "atk": 5905
    },
    {
      "hp": 48832,
      "atk": 7086
    },
    {
      "hp": 49067,
      "atk": 7120
    },
    {
      "hp": 49302,
      "atk": 7154
    },
    {
      "hp": 49537,
      "atk": 7188
    },
    {
      "hp": 49771,
      "atk": 7222
    },
    {
      "hp": 50006,
      "atk": 7256
    },
    {
      "hp": 50241,
      "atk": 7290
    },
    {
      "hp": 50475,
      "atk": 7324
    },
    {
      "hp": 50710,
      "atk": 7358
    },
    {
      "hp": 50945,
      "atk": 7392
    },
    {
      "hp": 51179,
      "atk": 7426
    },
    {
      "hp": 51179,
      "atk": 7426
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
