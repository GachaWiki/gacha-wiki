// Chixia Character Data - Stella Sora
// Generated from live game tables (Oct 19 2026 patch, v2.0.0)

export const Chixia = {
  "id": 141,
  "name": "Chixia",
  "icon": "/stella/assets/Chixia.png",
  "portrait": "/stella/assets/Chixia_portrait.png",
  "background": "/stella/assets/Chixia_background.png",
  "description": "Nobody would expect a Xuan Shi to be so timid. Her giant writing brush is a modified flamethrower and also her instrument in drawing powerful talismans.",
  "voiceActor": {
    "cn": "Tang Xiafang",
    "cnLocalized": "唐夏芳",
    "jp": "Sora Tokui",
    "jpLocalized": "徳井青空"
  },
  "birthday": "4.10",
  "grade": 5,
  "element": "Ignis",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Collector",
  "faction": "Yunji Studio",
  "tags": [
    "Versatile",
    "Collector",
    "Yunji Studio"
  ],
  "dateEvents": [
    {
      "name": "The Mural Master",
      "icon": "DatingSPCG_141301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "These murals are wildly abstract, much like the careless scribbles of a three-year-old. They look strange indeed inside the damp, dim cave.\n\nAnd then you notice that Chixia isn't scared of the dark anymore. In fact, she's so excited that sparks are flying from her tail."
    },
    {
      "name": "Cake Artistry",
      "icon": "DatingSPCG_141302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "\"I want that one!\"\n\nChixia's eyes light up as she points at the small cake, excitedly placing her order. However, she is told it's actually a failed practice attempt made by one of the shop's new apprentices.\n\nSeeing her stunned by the words \"failed,\" you step in quickly, have a quiet word with the staff, and manage to buy the strange little cake at a discount."
    },
    {
      "name": "A Hot Spring Mystery",
      "icon": "DatingSPCG_141303",
      "clue": "Visit Hot Spring Resort to unlock",
      "secondChoice": "You were surprised to learn that there actually were people who didn't like hot spring soaks.\n\n\"The water will make the scales on my tail wet. And it will make my fire spells go wonky. Anyway, there's no way I'm getting in there!\"\n\n\"But when you take a bath, your tail gets wet, too...\"\n\nBefore you could finish, you saw the guilty look on her face. Could it be...?\n\n\"Hey, you're afraid of baths?! What are you, a cat?\""
    },
    {
      "name": "",
      "icon": "",
      "clue": "",
      "secondChoice": "The menu is packed with choices and you don't know where to start. After some indecision, you end up ordering the same thing as ==DATING_CHARACTER==."
    },
    {
      "name": "",
      "icon": "",
      "clue": "",
      "secondChoice": "As you sit down with your orders, a couple at the next table leans in close. Please, not in public...!"
    },
    {
      "name": "",
      "icon": "",
      "clue": "",
      "secondChoice": "Almost immediately, the comic book section draws your attention. Each of you grabs one."
    },
    {
      "name": "",
      "icon": "",
      "clue": "",
      "secondChoice": "You discover an old manuscript recording Stellaroid sightings. Holding one side each, you read together."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Capturer",
      "Chill Crushed Ice",
      "Emerging Talent",
      "Fragrant Ice Delight",
      "Reflective Photo Capturer",
      "Rising Star",
      "Shining Star",
      "Sweet Ice Furry",
      "Ultra-Precision Photo Capturer"
    ],
    "hates": [
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Porcelain Cup"
    ]
  },
  "normalAttack": {
    "name": "Mystic Brushstrokes",
    "icon": "Icon/Skill/14101_Normal",
    "description": "Waves the writing brush and inflicts Ink.\u000bStrike 1: <color=#fb8037>&Param1&</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 2: <color=#fb8037>&Param2&</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 3: <color=#fb8037>&Param3& x4</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 4: <color=#fb8037>&Param4& x3</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 5: <color=#fb8037>&Param5&</color> of ATK as Ignis Auto Attack DMG.",
    "shortDescription": "Hurls the writing brush to perform multiple attacks.",
    "params": [
      "12%/14%/15%/21%/23%/24%/28%/29%/31%/34%/36%/38%/41%",
      "14%/16%/19%/25%/27%/29%/34%/35%/37%/41%/44%/47%/50%",
      "7%/8%/9%/12%/13%/14%/16%/17%/18%/20%/21%/23%/24%",
      "6%/7%/8%/11%/12%/13%/15%/16%/17%/18%/20%/21%/22%",
      "22%/25%/29%/39%/42%/45%/51%/54%/57%/62%/67%/71%/76%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Purifying Flames",
    "icon": "Icon/Skill/14101_Skill_Main",
    "description": "Spreads out a torrent of flames, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Ignis Skill DMG every 0.2s for a total of 3s. When dealing DMG to targets with Ink, inflicts ##Ignite#2027#.\u000bPurifying Flames (Main Skill) can trigger ##Ignis Mark#1016# and inflict Incineration, dealing &Param3& of ATK as AoE Ignis Mark DMG.",
    "shortDescription": "Spreads out a torrent of flames ahead, dealing DMG over time.\u000bThe Main Skill can trigger ##Ignis Mark#1016# and inflict Incineration.",
    "params": [
      "24%/28%/32%/43%/46%/50%/57%/60%/63%/68%/73%/78%/83%",
      "Purifying Flames",
      "28%/36%/45%/53%/61%/70%/78%/86%/95%"
    ],
    "hints": {
      "2027": {
        "id": 2027,
        "name": "Ignite"
      },
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "7s"
  },
  "supportSkill": {
    "name": "Awakening: Crimson Dragon",
    "icon": "Icon/Skill/14101_Skill_Support",
    "description": "Summons a ##Crimson Dragon#4018# every 2s, up to 3 times.\u000b##Crimson Dragon#4018# spits Ink at the target, dealing <color=#fb8037>&Param1&</color> of ATK as Ignis Minion's DMG. Upon vanishing, it charges toward the target, dealing <color=#fb8037>&Param2&</color> of ATK as Ignis Minion's AoE DMG.\u000bWhen ##Crimson Dragon#4018# deals DMG, inflicts ##Ignis Mark: Sacred Flame#2013#.\u000bMinions summoned by &Param3& will be removed when the Support Skill is cast again.",
    "shortDescription": "Summons a ##Crimson Dragon#4018# to attack the target.\u000b##Crimson Dragon#4018#'s DMG can inflict ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "39%/45%/51%/69%/74%/80%/91%/95%/100%/109%/117%/125%/133%",
      "57%/65%/73%/99%/107%/115%/131%/137%/144%/158%/169%/180%/192%",
      "Awakening: Crimson Dragon"
    ],
    "hints": {
      "4018": {
        "id": 4018,
        "name": "Crimson Dragon",
        "description": "Crimson Dragon inherits 100% of Chixia's ATK for 8s, during which it is immune to DMG."
      },
      "2013": {
        "id": 2013,
        "name": "Ignis Mark: Sacred Flame",
        "description": "Some Ignis characters apply a special status to the target for 10 sec.\u000bWhen triggered by specific Ignis characters' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "18s"
  },
  "ultimate": {
    "name": "Dragon's Ascension",
    "icon": "Icon/Skill/14101_Ultra",
    "description": "Conjures a Fire Dragon to circle around the target, dealing <color=#fb8037>&Param1&</color> of ATK as Ignis Ultimate DMG in a large area every 0.3s for a total of 5s.",
    "shortDescription": "Conjures a Fire Dragon to attack the target's location.",
    "params": [
      "87%/101%/114%/153%/165%/177%/202%/212%/223%/244%/261%/279%/296%",
      "",
      "",
      "Dragon's Ascension",
      "28%/36%/45%/53%/61%/70%/78%/86%/95%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Blaze Tome",
      "talents": [
        {
          "name": "Blaze Tome",
          "description": "Increases all friendly units' Ignis DMG dealt to targets inflicted with ##Ignis Mark#1016# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "14%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Blaze Unbound",
      "talents": [
        {
          "name": "Blaze Unbound",
          "description": "Increases Crit Rate by <color=#0abec5>&Param1&</color> and Crit DMG by <color=#0abec5>&Param2&</color> for Chixia's Ultimate.",
          "params": [
            "10%",
            "0.08%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Prime Advantage",
      "talents": [
        {
          "name": "Prime Advantage",
          "description": "When Chixia casts her Ultimate, increases all friendly units' ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "28%",
            "15"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Trial of Growth",
      "talents": [
        {
          "name": "Trial of Growth",
          "description": "When ##Ignis Mark#1016# is triggered, increases the ATK of Chixia and her minions by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "12"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Qualified Xuan Shi",
      "talents": [
        {
          "name": "Qualified Xuan Shi",
          "description": "Increases the Ignis DMG dealt by Chixia and her minions to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "24%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 752,
      "atk": 111
    },
    {
      "hp": 977,
      "atk": 144
    },
    {
      "hp": 1202,
      "atk": 177
    },
    {
      "hp": 1428,
      "atk": 211
    },
    {
      "hp": 1653,
      "atk": 244
    },
    {
      "hp": 1879,
      "atk": 277
    },
    {
      "hp": 2104,
      "atk": 310
    },
    {
      "hp": 2330,
      "atk": 344
    },
    {
      "hp": 2555,
      "atk": 377
    },
    {
      "hp": 2781,
      "atk": 410
    },
    {
      "hp": 3337,
      "atk": 492
    },
    {
      "hp": 3562,
      "atk": 526
    },
    {
      "hp": 3788,
      "atk": 559
    },
    {
      "hp": 4013,
      "atk": 592
    },
    {
      "hp": 4239,
      "atk": 625
    },
    {
      "hp": 4464,
      "atk": 659
    },
    {
      "hp": 4689,
      "atk": 692
    },
    {
      "hp": 4915,
      "atk": 725
    },
    {
      "hp": 5140,
      "atk": 758
    },
    {
      "hp": 5366,
      "atk": 792
    },
    {
      "hp": 5591,
      "atk": 825
    },
    {
      "hp": 6711,
      "atk": 990
    },
    {
      "hp": 6937,
      "atk": 1023
    },
    {
      "hp": 7162,
      "atk": 1057
    },
    {
      "hp": 7387,
      "atk": 1090
    },
    {
      "hp": 7613,
      "atk": 1123
    },
    {
      "hp": 7838,
      "atk": 1156
    },
    {
      "hp": 8064,
      "atk": 1190
    },
    {
      "hp": 8289,
      "atk": 1223
    },
    {
      "hp": 8515,
      "atk": 1256
    },
    {
      "hp": 8740,
      "atk": 1290
    },
    {
      "hp": 8966,
      "atk": 1323
    },
    {
      "hp": 10762,
      "atk": 1588
    },
    {
      "hp": 10987,
      "atk": 1621
    },
    {
      "hp": 11213,
      "atk": 1654
    },
    {
      "hp": 11438,
      "atk": 1688
    },
    {
      "hp": 11664,
      "atk": 1721
    },
    {
      "hp": 11889,
      "atk": 1754
    },
    {
      "hp": 12115,
      "atk": 1787
    },
    {
      "hp": 12340,
      "atk": 1821
    },
    {
      "hp": 12565,
      "atk": 1854
    },
    {
      "hp": 12791,
      "atk": 1887
    },
    {
      "hp": 13016,
      "atk": 1920
    },
    {
      "hp": 15617,
      "atk": 2304
    },
    {
      "hp": 15842,
      "atk": 2337
    },
    {
      "hp": 16067,
      "atk": 2371
    },
    {
      "hp": 16293,
      "atk": 2404
    },
    {
      "hp": 16518,
      "atk": 2437
    },
    {
      "hp": 16744,
      "atk": 2470
    },
    {
      "hp": 16969,
      "atk": 2504
    },
    {
      "hp": 17195,
      "atk": 2537
    },
    {
      "hp": 17420,
      "atk": 2570
    },
    {
      "hp": 17646,
      "atk": 2603
    },
    {
      "hp": 17871,
      "atk": 2637
    },
    {
      "hp": 21448,
      "atk": 3165
    },
    {
      "hp": 21674,
      "atk": 3198
    },
    {
      "hp": 21899,
      "atk": 3231
    },
    {
      "hp": 22125,
      "atk": 3264
    },
    {
      "hp": 22350,
      "atk": 3298
    },
    {
      "hp": 22576,
      "atk": 3331
    },
    {
      "hp": 22801,
      "atk": 3364
    },
    {
      "hp": 23027,
      "atk": 3397
    },
    {
      "hp": 23252,
      "atk": 3431
    },
    {
      "hp": 23477,
      "atk": 3464
    },
    {
      "hp": 23703,
      "atk": 3497
    },
    {
      "hp": 28445,
      "atk": 4197
    },
    {
      "hp": 28670,
      "atk": 4230
    },
    {
      "hp": 28896,
      "atk": 4263
    },
    {
      "hp": 29121,
      "atk": 4297
    },
    {
      "hp": 29347,
      "atk": 4330
    },
    {
      "hp": 29572,
      "atk": 4363
    },
    {
      "hp": 29798,
      "atk": 4396
    },
    {
      "hp": 30023,
      "atk": 4430
    },
    {
      "hp": 30249,
      "atk": 4463
    },
    {
      "hp": 30474,
      "atk": 4496
    },
    {
      "hp": 30700,
      "atk": 4529
    },
    {
      "hp": 36840,
      "atk": 5435
    },
    {
      "hp": 37065,
      "atk": 5469
    },
    {
      "hp": 37290,
      "atk": 5502
    },
    {
      "hp": 37516,
      "atk": 5535
    },
    {
      "hp": 37741,
      "atk": 5568
    },
    {
      "hp": 37967,
      "atk": 5602
    },
    {
      "hp": 38192,
      "atk": 5635
    },
    {
      "hp": 38418,
      "atk": 5668
    },
    {
      "hp": 38643,
      "atk": 5701
    },
    {
      "hp": 38869,
      "atk": 5735
    },
    {
      "hp": 39094,
      "atk": 5768
    },
    {
      "hp": 46910,
      "atk": 6921
    },
    {
      "hp": 47135,
      "atk": 6954
    },
    {
      "hp": 47361,
      "atk": 6988
    },
    {
      "hp": 47586,
      "atk": 7021
    },
    {
      "hp": 47812,
      "atk": 7054
    },
    {
      "hp": 48037,
      "atk": 7087
    },
    {
      "hp": 48263,
      "atk": 7121
    },
    {
      "hp": 48488,
      "atk": 7154
    },
    {
      "hp": 48714,
      "atk": 7187
    },
    {
      "hp": 48939,
      "atk": 7221
    },
    {
      "hp": 49164,
      "atk": 7254
    },
    {
      "hp": 49164,
      "atk": 7254
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
