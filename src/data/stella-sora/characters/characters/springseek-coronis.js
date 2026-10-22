// Springseek Coronis Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const SpringseekCoronis = {
  "id": 159,
  "name": "Springseek Coronis",
  "icon": "/stella/assets/Springseek_Coronis.png",
  "portrait": "/stella/assets/Springseek_Coronis_portrait.png",
  "background": "/stella/assets/Springseek_Coronis_background.png",
  "description": "Clad in traditional Loong attire, Coronis is enjoying her vacation in Cangwu. Her carefully brewed potions are a testament to her intense \"affection.\"",
  "voiceActor": {
    "cn": "Zhou Yuhan",
    "cnLocalized": "周语晗",
    "jp": "Yuka Saito",
    "jpLocalized": "斉藤佑圭"
  },
  "birthday": "10.15",
  "grade": 5,
  "element": "Terra",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "Freelance Trekker",
  "tags": [
    "Versatile",
    "Collector",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "In Search of Totems",
      "icon": "DatingSPCG_159301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "\"Loong culture is fascinating,\" she muses. \"Even their totems defy our standard classifications.\"\n\"Is that what we're investigating?\"\nShe doesn't answer. Instead, she beckons you deeper inside.\n\"You'll see soon enough.\""
    },
    {
      "name": "A Peculiar Doll",
      "icon": "DatingSPCG_159302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "Startled by her voice, you turn to see she's crouched right next to you, scrutinizing the figure in her hand.\n\"Given these proportions, a human subject would be missing two ribs on either side.\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Porcelain Cup",
      "Card Capturer",
      "Cosmic Form",
      "Gilded Ceramic Bowl",
      "Moonlit Companion",
      "Mystic Potion Kettle",
      "Reflective Photo Capturer",
      "Star Eclipse",
      "Ultra-Precision Photo Capturer"
    ],
    "hates": [
      "Deluxe Blower",
      "Exquisite Blower",
      "Portable Blower"
    ]
  },
  "normalAttack": {
    "name": "Evergreen Needles",
    "icon": "Icon/Skill/15901_Normal",
    "description": "Fires streams of chemicals, each dealing <color=#fb8037>&Param1&</color> of ATK as Terra Auto Attack DMG. Magazine capacity: 15.",
    "shortDescription": "Fires consecutive streams of chemicals to deal DMG.",
    "params": [
      "11%/13%/14%/20%/21%/23%/26%/27%/29%/31%/34%/36%/38%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Jade of Vitality",
    "icon": "Icon/Skill/15901_Skill_Main",
    "description": "Shoots forward, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Terra Skill DMG. Drops one Auspice, which fires a continuous beam, dealing <color=#fb8037>&Param2&</color> of ATK as Terra Skill DMG every 0.6s for 8s.\u000bWhen casting Jade of Vitality (Main Skill), enters Crystallized State: Movement SPD increases by 15% for 8s.\u000bThe Main Skill and Auspice can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Deals DMG to targets in front. Drops one Auspice, which fires continuous beam that deals DMG over time.\u000bWhen casting the Main Skill, enters Crystallized State.\u000bThe Main Skill and Auspice can trigger ##Terra Mark#1020#.",
    "params": [
      "258%/297%/336%/452%/488%/524%/596%/627%/658%/720%/772%/823%/875%",
      "17%/19%/22%/30%/32%/34%/39%/41%/43%/48%/51%/54%/58%",
      "17%/23%/28%/33%/39%/44%/49%/55%/60%"
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "14s"
  },
  "supportSkill": {
    "name": "Instant Blossom",
    "icon": "Icon/Skill/15901_Skill_Support",
    "description": "Throws 6 Rose Vials and 1 Wither Vial, dealing DMG over time 1s after landing.\u000bRose Vial: Deals <color=#fb8037>&Param1&</color> of ATK as AoE Terra Skill DMG every 0.8s.\u000bWither Vial: Deals <color=#fb8037>&Param2&</color> of ATK as AoE Terra Skill DMG every 0.8s and also inflicts Wither. Wither: Lasts 5s; stacks up to 5 times; at max stacks, deals <color=#fb8037>&Param3&</color> of ATK as Terra Skill DMG and removes all stacks.\u000bEach potion lasts 6s and inflicts ##Terra Mark: Earth Vein#2029# when dealing DMG.",
    "shortDescription": "Throws 6 Rose Vials and 1 Wither Vial.\u000bRose Vial: Deals DMG over time.\u000bWither Vial: Deals DMG over time and also inflicts Wither. Deals DMG at max stacks of Wither with all stacks removed afterward.",
    "params": [
      "24%/28%/32%/43%/46%/50%/57%/60%/63%/69%/74%/79%/84%",
      "67%/77%/87%/117%/126%/136%/154%/162%/170%/186%/200%/213%/226%",
      "114%/131%/148%/199%/215%/230%/262%/276%/289%/317%/339%/362%/385%"
    ],
    "hints": {
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Springseek: Burst of Blaze",
    "icon": "Icon/Skill/15901_Ultra",
    "description": "Shoots and shatters a vial in the air, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Terra Ultimate DMG. The flying crystal shards then deal <color=#ec6d21>&Param2& x8</color> of ATK as AoE Terra Ultimate DMG.",
    "shortDescription": "Shoots and shatters a vial in the air, dealing initial DMG with the shot and additional DMG with flying crystal shards.",
    "params": [
      "497%/571%/646%/869%/939%/1009%/1148%/1207%/1267%/1386%/1485%/1585%/1684%",
      "62%/71%/81%/109%/117%/126%/143%/151%/158%/173%/186%/198%/211%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Guiding Lanterns",
      "talents": [
        {
          "name": "Guiding Lanterns",
          "description": "When Springseek Coronis deals Skill DMG, increases the target's Terra DMG Taken by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "4.7%",
            "12",
            "3"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Eternal Flame",
      "talents": [
        {
          "name": "Eternal Flame",
          "description": "When any Trekker inflicts ##Terra Mark#1020# on a target, increases Springseek Coronis's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "0.57%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Magical Touch",
      "talents": [
        {
          "name": "Magical Touch",
          "description": "When Springseek Coronis deals Ultimate DMG, increases the target's Terra DMG Taken by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "3.5%",
            "20",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Healing Auspice",
      "talents": [
        {
          "name": "Healing Auspice",
          "description": "When Springseek Coronis casts a skill, increases Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "34%",
            "10"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Fresh Start",
      "talents": [
        {
          "name": "Fresh Start",
          "description": "Increases Springseek Coronis's Terra DMG to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.19%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
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
            "575"
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
          "name": "Terra DMG Boost",
          "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 788,
      "atk": 114
    },
    {
      "hp": 1025,
      "atk": 148
    },
    {
      "hp": 1262,
      "atk": 182
    },
    {
      "hp": 1498,
      "atk": 216
    },
    {
      "hp": 1735,
      "atk": 250
    },
    {
      "hp": 1971,
      "atk": 284
    },
    {
      "hp": 2208,
      "atk": 318
    },
    {
      "hp": 2444,
      "atk": 352
    },
    {
      "hp": 2681,
      "atk": 386
    },
    {
      "hp": 2917,
      "atk": 420
    },
    {
      "hp": 3501,
      "atk": 504
    },
    {
      "hp": 3737,
      "atk": 538
    },
    {
      "hp": 3974,
      "atk": 572
    },
    {
      "hp": 4210,
      "atk": 606
    },
    {
      "hp": 4447,
      "atk": 640
    },
    {
      "hp": 4684,
      "atk": 674
    },
    {
      "hp": 4920,
      "atk": 708
    },
    {
      "hp": 5157,
      "atk": 742
    },
    {
      "hp": 5393,
      "atk": 776
    },
    {
      "hp": 5630,
      "atk": 811
    },
    {
      "hp": 5866,
      "atk": 845
    },
    {
      "hp": 7041,
      "atk": 1014
    },
    {
      "hp": 7278,
      "atk": 1048
    },
    {
      "hp": 7514,
      "atk": 1082
    },
    {
      "hp": 7751,
      "atk": 1116
    },
    {
      "hp": 7987,
      "atk": 1150
    },
    {
      "hp": 8224,
      "atk": 1184
    },
    {
      "hp": 8460,
      "atk": 1218
    },
    {
      "hp": 8697,
      "atk": 1252
    },
    {
      "hp": 8933,
      "atk": 1286
    },
    {
      "hp": 9170,
      "atk": 1320
    },
    {
      "hp": 9407,
      "atk": 1354
    },
    {
      "hp": 11291,
      "atk": 1626
    },
    {
      "hp": 11528,
      "atk": 1660
    },
    {
      "hp": 11764,
      "atk": 1694
    },
    {
      "hp": 12001,
      "atk": 1728
    },
    {
      "hp": 12237,
      "atk": 1762
    },
    {
      "hp": 12474,
      "atk": 1796
    },
    {
      "hp": 12710,
      "atk": 1830
    },
    {
      "hp": 12947,
      "atk": 1864
    },
    {
      "hp": 13183,
      "atk": 1898
    },
    {
      "hp": 13420,
      "atk": 1932
    },
    {
      "hp": 13656,
      "atk": 1966
    },
    {
      "hp": 16385,
      "atk": 2359
    },
    {
      "hp": 16621,
      "atk": 2393
    },
    {
      "hp": 16858,
      "atk": 2427
    },
    {
      "hp": 17094,
      "atk": 2461
    },
    {
      "hp": 17331,
      "atk": 2495
    },
    {
      "hp": 17567,
      "atk": 2529
    },
    {
      "hp": 17804,
      "atk": 2563
    },
    {
      "hp": 18040,
      "atk": 2597
    },
    {
      "hp": 18277,
      "atk": 2631
    },
    {
      "hp": 18514,
      "atk": 2665
    },
    {
      "hp": 18750,
      "atk": 2700
    },
    {
      "hp": 22503,
      "atk": 3240
    },
    {
      "hp": 22740,
      "atk": 3274
    },
    {
      "hp": 22976,
      "atk": 3308
    },
    {
      "hp": 23213,
      "atk": 3342
    },
    {
      "hp": 23449,
      "atk": 3376
    },
    {
      "hp": 23686,
      "atk": 3410
    },
    {
      "hp": 23922,
      "atk": 3444
    },
    {
      "hp": 24159,
      "atk": 3478
    },
    {
      "hp": 24396,
      "atk": 3512
    },
    {
      "hp": 24632,
      "atk": 3546
    },
    {
      "hp": 24869,
      "atk": 3580
    },
    {
      "hp": 29844,
      "atk": 4297
    },
    {
      "hp": 30081,
      "atk": 4331
    },
    {
      "hp": 30317,
      "atk": 4365
    },
    {
      "hp": 30554,
      "atk": 4399
    },
    {
      "hp": 30790,
      "atk": 4433
    },
    {
      "hp": 31027,
      "atk": 4467
    },
    {
      "hp": 31263,
      "atk": 4501
    },
    {
      "hp": 31500,
      "atk": 4535
    },
    {
      "hp": 31736,
      "atk": 4569
    },
    {
      "hp": 31973,
      "atk": 4603
    },
    {
      "hp": 32209,
      "atk": 4637
    },
    {
      "hp": 38651,
      "atk": 5565
    },
    {
      "hp": 38888,
      "atk": 5599
    },
    {
      "hp": 39124,
      "atk": 5633
    },
    {
      "hp": 39361,
      "atk": 5667
    },
    {
      "hp": 39597,
      "atk": 5701
    },
    {
      "hp": 39834,
      "atk": 5735
    },
    {
      "hp": 40071,
      "atk": 5769
    },
    {
      "hp": 40307,
      "atk": 5803
    },
    {
      "hp": 40544,
      "atk": 5837
    },
    {
      "hp": 40780,
      "atk": 5871
    },
    {
      "hp": 41017,
      "atk": 5905
    },
    {
      "hp": 49217,
      "atk": 7086
    },
    {
      "hp": 49453,
      "atk": 7120
    },
    {
      "hp": 49690,
      "atk": 7154
    },
    {
      "hp": 49927,
      "atk": 7188
    },
    {
      "hp": 50163,
      "atk": 7222
    },
    {
      "hp": 50400,
      "atk": 7256
    },
    {
      "hp": 50636,
      "atk": 7290
    },
    {
      "hp": 50873,
      "atk": 7324
    },
    {
      "hp": 51109,
      "atk": 7358
    },
    {
      "hp": 51346,
      "atk": 7392
    },
    {
      "hp": 51582,
      "atk": 7426
    },
    {
      "hp": 51582,
      "atk": 7426
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
