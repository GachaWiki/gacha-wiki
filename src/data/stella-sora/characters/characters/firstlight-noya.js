// Firstlight Noya Character Data - Stella Sora
// Generated from live game tables (Oct 19 2026 patch, v2.0.0)

export const FirstlightNoya = {
  "id": 162,
  "name": "Firstlight Noya",
  "icon": "/stella/assets/Firstlight_Noya.png",
  "portrait": "/stella/assets/Firstlight_Noya_portrait.png",
  "background": "/stella/assets/Firstlight_Noya_background.png",
  "description": "Swinging a greatsword that buried her past, Noya relies on years of brutal arena combat to carve out a path to the future.",
  "voiceActor": {
    "cn": "Kiyo",
    "cnLocalized": "Kiyo",
    "jp": "Riona Imaizumi",
    "jpLocalized": "今泉りおな"
  },
  "birthday": "6.21",
  "grade": 5,
  "element": "Lux",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "The Night Watch",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "The Night Watch"
  ],
  "dateEvents": [
    {
      "name": "A Bitter Defeat",
      "icon": "DatingSPCG_162301",
      "clue": "Visit the streets of Filanis to unlock",
      "secondChoice": "The player eagerly challenges her to a match, and the crowd starts cheering her on. She looks at you, and you nod. You have never seen Alina play chess before—you did not even know she knew how.\nWith your approval, a confident smile spreads across Alina's face, as if to say: Guess I have no choice. Watch this!"
    },
    {
      "name": "Warmth",
      "icon": "DatingSPCG_162302",
      "clue": "Visit Insura to unlock",
      "secondChoice": "It is late at night. You and Alina place the blankets by the fire, hoping they will dry.\nTo avoid catching a cold from sleeping on the floor, you sit by the fire with her, chatting about random things to stay awake.\n\"The desert has a very different kind of scenery. When evening comes, it feels like the whole world is painted gold...\"\n\"And the people living in that city have their own rules...\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wings",
      "Chill Crushed Ice",
      "Cosmic Form",
      "Fiery Honeypot",
      "Fragrant Ice Delight",
      "Love Candle",
      "Moonlit Companion",
      "Star Eclipse",
      "Sweet Ice Furry"
    ],
    "hates": [
      "Deluxe Blower",
      "Exquisite Blower",
      "Portable Blower"
    ]
  },
  "normalAttack": {
    "name": "Honed Sword Art",
    "icon": "Icon/Skill/16201_Normal",
    "description": "Wields the greatsword [Daybreak] and the longsword [Dawn] to deal continuous attacks.\u000bStrike 1: Swings the greatsword, dealing <color=#fb8037>&Param1& x2</color> of Max HP as Lux Auto Attack DMG.\u000bStrike 2: Swings the greatsword, dealing <color=#fb8037>&Param2& x3</color> of Max HP as Lux Auto Attack DMG.\u000bStrike 3: Swings the greatsword, dealing <color=#fb8037>&Param3& x2</color> of Max HP as Lux Auto Attack DMG.\u000bStrike 4: Swings the longsword and fires 2 Glows, each dealing <color=#fb8037>&Param4&</color> of Max HP as Lux Skill DMG.\u000bWhen Firstlight Noya is farther away from the target, her Auto Attacks become a sprint attack with the longsword, dealing <color=#fb8037>&Param5& x3</color> of Max HP as Lux Skill DMG. This effect can be triggered once every 1.5s.\u000bWhen Firstlight Noya's Auto Attacks deal DMG to a target with ##Glimmer#4029#, each stack of ##Glimmer#4029# on the target increases the &Param6& of this attack by <color=#fb8037>&Param7&</color>.",
    "shortDescription": "Wields the greatsword and longsword to deal continuous attacks. When farther away from the target, Firstlight Noya performs a sprint attack with the longsword. Increases the &Param6& dealt by Firstlight Noya's Auto Attacks against targets with ##Glimmer#4029#.",
    "params": [
      "45%/51%/58%/78%/84%/90%/103%/108%/114%/125%/134%/142%/150%",
      "46%/53%/60%/81%/88%/94%/107%/113%/118%/130%/139%/147%/156%",
      "66%/76%/86%/115%/125%/134%/152%/160%/168%/185%/198%/210%/222%",
      "21%/25%/28%/37%/40%/43%/49%/52%/55%/60%/64%/68%/72%",
      "30%/35%/39%/53%/57%/62%/70%/74%/77%/85%/91%/96%/102%",
      "DMG multiplier",
      "4.2%/4.9%/5.5%/7.5%/8.1%/8.7%/9.9%/10.4%/10.9%"
    ],
    "hints": {
      "4029": {
        "id": 4029,
        "name": "Glimmer"
      }
    }
  },
  "skill": {
    "name": "Storm Flash: Radiance",
    "icon": "Icon/Skill/16201_Skill_Main",
    "description": "Rapidly swings the longsword [Dawn], dealing <color=#fb8037>&Param1& x5</color> of Max HP as AoE Lux Skill DMG. Then slams down with the greatsword [Daybreak], dealing <color=#fb8037>&Param2&</color> of Max HP as AoE Lux Auto Attack DMG, and generates 1 Starfall that deals <color=#fb8037>&Param3&</color> of Max HP as AoE Lux Auto Attack DMG.\u000bStorm Flash: Radiance (Main Skill) can trigger ##Lux Mark#1015# to generate ##Lucent#4028#: deals &Param4& of Max HP as AoE Lux Mark DMG and inflicts 1 stack of ##Glimmer#4029#.",
    "shortDescription": "Rapidly swings the longsword to deal DMG multiple times, then slams down with the greatsword to deal AoE DMG and generate Starfall. The Main Skill can trigger ##Lux Mark#1015#.",
    "params": [
      "36%/42%/47%/64%/69%/74%/84%/89%/93%/102%/109%/116%/123%",
      "64%/74%/84%/113%/122%/131%/149%/156%/164%/180%/193%/205%/216%",
      "23%/26%/30%/40%/43%/46%/52%/55%/58%/64%/68%/72%/76%",
      "21%/27%/33%/39%/45%/51%/58%/64%/70%/0%/0%/0%/0%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4028": {
        "id": 4028,
        "name": "Lucent",
        "description": "When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer."
      },
      "4029": {
        "id": 4029,
        "name": "Glimmer"
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Thunderstrike: Break",
    "icon": "Icon/Skill/16201_Skill_Support",
    "description": "Spins rapidly with the longsword [Dawn], dealing <color=#fb8037>&Param1& x8</color> of Max HP as AoE Lux Skill DMG. Then thrusts the greatsword [Daybreak] into the ground to create continuous shockwaves, dealing <color=#fb8037>&Param2& x6</color> and <color=#fb8037>&Param3&</color> of Max HP as AoE Lux Auto Attack DMG.\u000bThunderstrike: Break (Support Skill) can trigger ##Lux Mark#1015# to generate ##Lucent#4028#: deals &Param4& of Max HP as AoE Lux Mark DMG and inflicts 1 stack of ##Glimmer#4029#.",
    "shortDescription": "Spins rapidly with the longsword, then thrusts the greatsword into the ground to create shockwaves, dealing AoE DMG. The Support Skill can trigger ##Lux Mark#1015#.",
    "params": [
      "52%/60%/67%/91%/98%/105%/120%/126%/132%/145%/155%/165%/176%",
      "54%/62%/70%/94%/102%/109%/124%/131%/137%/150%/161%/171%/182%",
      "92%/106%/120%/161%/174%/187%/213%/224%/235%/257%/276%/294%/312%",
      "21%/27%/33%/39%/45%/51%/58%/64%/70%/0%/0%/0%/0%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4028": {
        "id": 4028,
        "name": "Lucent",
        "description": "When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer."
      },
      "4029": {
        "id": 4029,
        "name": "Glimmer"
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Empyrean Starender",
    "icon": "Icon/Skill/16201_Ultra_1",
    "description": "Firstlight Noya's Ultimate has two forms, attacking with the greatsword [Daybreak] and the longsword [Dawn] respectively. She enters battle with the greatsword-form Ultimate by default.\u000bGreatsword Form: Leaps into the air and swings the greatsword, dealing <color=#fb8037>&Param1& x5</color> and <color=#fb8037>&Param2&</color> of Max HP as AoE Lux Auto Attack DMG in a large area.\u000bLongsword Form: Dashes quickly and attacks at high speed, dealing <color=#fb8037>&Param3& x7</color> of Max HP as AoE Lux Skill DMG in a large area, then generates a field that deals <color=#fb8037>&Param4& x7</color> of Max HP as AoE Lux Skill DMG in a large area.\u000bWhen casting Empyrean Starender (Ultimate), Firstlight Noya gains Starender: increases &Param5& by <color=#fb8037>&Param6&</color> for &Param7&s.\u000bEmpyrean Starender (Ultimate) can trigger ##Lux Mark#1015# to generate ##Lucent#4028#: deals &Param8& of Max HP as AoE Lux Mark DMG and inflicts 1 stack of ##Glimmer#4029#.",
    "shortDescription": "Firstlight Noya's Ultimate has two forms, attacking with the greatsword [Daybreak] and the longsword [Dawn] respectively to deal large AoE DMG. When casting the Ultimate, Firstlight Noya gains Starender: increases &Param5&. The Ultimate can trigger ##Lux Mark#1015#.",
    "params": [
      "216%/248%/281%/378%/408%/438%/499%/525%/551%/605%/648%/687%/726%",
      "270%/311%/351%/473%/510%/548%/624%/656%/689%/756%/810%/859%/907%",
      "54%/63%/71%/95%/103%/111%/126%/132%/139%/153%/163%/173%/183%",
      "109%/125%/142%/191%/206%/221%/252%/265%/278%/305%/327%/346%/366%",
      "Crit Rate",
      "7.1%/8.2%/9.2%/12.5%/13.5%/14.5%/16.5%/17.3%/18.2%",
      "",
      "21%/27%/33%/39%/45%/51%/58%/64%/70%/0%/0%/0%/0%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4028": {
        "id": 4028,
        "name": "Lucent",
        "description": "When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer."
      },
      "4029": {
        "id": 4029,
        "name": "Glimmer"
      }
    },
    "cooldown": "30s",
    "energy": 235
  },
  "talents": [
    {
      "name": "Buried Past",
      "talents": [
        {
          "name": "Buried Past",
          "description": "While in the Starender state, increases Firstlight Noya's Crit DMG by <color=#0abec5>&Param1&</color>. Dealing any DMG grants her Starender. Triggers once every 5 minutes.",
          "params": [
            "12%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG Boost by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Auto Attack DMG Boost",
          "description": "Auto Attack DMG Boost +<color=#0abec5>&Param1&</color>.",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Crit DMG Boost +<color=#0abec5>&Param1&</color>.",
          "params": [
            "3%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG Boost by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Auto Attack DMG Boost",
          "description": "Auto Attack DMG Boost +<color=#0abec5>&Param1&</color>.",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Crit DMG Boost +<color=#0abec5>&Param1&</color>.",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Night Watcher's Duty",
      "talents": [
        {
          "name": "Night Watcher's Duty",
          "description": "Increases Firstlight Noya's Max HP by <color=#0abec5>&Param1&</color>. Increases the DMG Multiplier of Radiance Flurry and Judgment Starfall against targets with ##Glimmer#4029# by <color=#0abec5>&Param2&</color>.",
          "params": [
            "10%",
            "36%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Resolve Beyond Fate",
      "talents": [
        {
          "name": "Resolve Beyond Fate",
          "description": "Increases Lux DMG dealt by Firstlight Noya against elite or higher-tier enemies by <color=#0abec5>&Param1&</color>.",
          "params": [
            "18%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Shining in the Night",
      "talents": [
        {
          "name": "Shining in the Night",
          "description": "After triggering ##Lux Mark#1015#, Firstlight Noya's Auto Attack DMG increases by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "24%",
            "8"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Meeting You at Dawn",
      "talents": [
        {
          "name": "Meeting You at Dawn",
          "description": "When Firstlight Noya's HP is above 20%, the DMG Multiplier of the longsword [Dawn] increases by <color=#0abec5>&Param1&</color>, and the greatsword [Daybreak] increases by <color=#0abec5>&Param2&</color>.",
          "params": [
            "21%",
            "18%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1443,
      "atk": 106
    },
    {
      "hp": 1881,
      "atk": 138
    },
    {
      "hp": 2315,
      "atk": 170
    },
    {
      "hp": 2749,
      "atk": 202
    },
    {
      "hp": 3183,
      "atk": 234
    },
    {
      "hp": 3617,
      "atk": 266
    },
    {
      "hp": 4052,
      "atk": 298
    },
    {
      "hp": 4486,
      "atk": 330
    },
    {
      "hp": 4920,
      "atk": 362
    },
    {
      "hp": 5354,
      "atk": 394
    },
    {
      "hp": 6425,
      "atk": 473
    },
    {
      "hp": 6859,
      "atk": 505
    },
    {
      "hp": 7293,
      "atk": 537
    },
    {
      "hp": 7727,
      "atk": 569
    },
    {
      "hp": 8161,
      "atk": 601
    },
    {
      "hp": 8595,
      "atk": 632
    },
    {
      "hp": 9030,
      "atk": 664
    },
    {
      "hp": 9464,
      "atk": 696
    },
    {
      "hp": 9898,
      "atk": 728
    },
    {
      "hp": 10332,
      "atk": 760
    },
    {
      "hp": 10766,
      "atk": 792
    },
    {
      "hp": 12922,
      "atk": 951
    },
    {
      "hp": 13356,
      "atk": 983
    },
    {
      "hp": 13790,
      "atk": 1015
    },
    {
      "hp": 14224,
      "atk": 1047
    },
    {
      "hp": 14658,
      "atk": 1079
    },
    {
      "hp": 15092,
      "atk": 1111
    },
    {
      "hp": 15526,
      "atk": 1143
    },
    {
      "hp": 15960,
      "atk": 1174
    },
    {
      "hp": 16394,
      "atk": 1206
    },
    {
      "hp": 16828,
      "atk": 1238
    },
    {
      "hp": 17263,
      "atk": 1270
    },
    {
      "hp": 20721,
      "atk": 1525
    },
    {
      "hp": 21155,
      "atk": 1557
    },
    {
      "hp": 21589,
      "atk": 1589
    },
    {
      "hp": 22023,
      "atk": 1621
    },
    {
      "hp": 22457,
      "atk": 1653
    },
    {
      "hp": 22891,
      "atk": 1685
    },
    {
      "hp": 23325,
      "atk": 1716
    },
    {
      "hp": 23759,
      "atk": 1748
    },
    {
      "hp": 24193,
      "atk": 1780
    },
    {
      "hp": 24627,
      "atk": 1812
    },
    {
      "hp": 25062,
      "atk": 1844
    },
    {
      "hp": 30069,
      "atk": 2213
    },
    {
      "hp": 30503,
      "atk": 2245
    },
    {
      "hp": 30937,
      "atk": 2277
    },
    {
      "hp": 31371,
      "atk": 2308
    },
    {
      "hp": 31806,
      "atk": 2340
    },
    {
      "hp": 32240,
      "atk": 2372
    },
    {
      "hp": 32674,
      "atk": 2404
    },
    {
      "hp": 33108,
      "atk": 2436
    },
    {
      "hp": 33542,
      "atk": 2468
    },
    {
      "hp": 33976,
      "atk": 2500
    },
    {
      "hp": 34410,
      "atk": 2532
    },
    {
      "hp": 41298,
      "atk": 3039
    },
    {
      "hp": 41732,
      "atk": 3071
    },
    {
      "hp": 42166,
      "atk": 3103
    },
    {
      "hp": 42600,
      "atk": 3135
    },
    {
      "hp": 43034,
      "atk": 3167
    },
    {
      "hp": 43468,
      "atk": 3199
    },
    {
      "hp": 43902,
      "atk": 3231
    },
    {
      "hp": 44336,
      "atk": 3263
    },
    {
      "hp": 44770,
      "atk": 3294
    },
    {
      "hp": 45205,
      "atk": 3326
    },
    {
      "hp": 45639,
      "atk": 3358
    },
    {
      "hp": 54770,
      "atk": 4030
    },
    {
      "hp": 55204,
      "atk": 4062
    },
    {
      "hp": 55638,
      "atk": 4094
    },
    {
      "hp": 56072,
      "atk": 4126
    },
    {
      "hp": 56506,
      "atk": 4158
    },
    {
      "hp": 56940,
      "atk": 4190
    },
    {
      "hp": 57374,
      "atk": 4222
    },
    {
      "hp": 57808,
      "atk": 4254
    },
    {
      "hp": 58242,
      "atk": 4286
    },
    {
      "hp": 58676,
      "atk": 4318
    },
    {
      "hp": 59111,
      "atk": 4350
    },
    {
      "hp": 70931,
      "atk": 5220
    },
    {
      "hp": 71366,
      "atk": 5252
    },
    {
      "hp": 71800,
      "atk": 5284
    },
    {
      "hp": 72234,
      "atk": 5315
    },
    {
      "hp": 72668,
      "atk": 5347
    },
    {
      "hp": 73102,
      "atk": 5379
    },
    {
      "hp": 73536,
      "atk": 5411
    },
    {
      "hp": 73970,
      "atk": 5443
    },
    {
      "hp": 74404,
      "atk": 5475
    },
    {
      "hp": 74838,
      "atk": 5507
    },
    {
      "hp": 75272,
      "atk": 5539
    },
    {
      "hp": 90321,
      "atk": 6646
    },
    {
      "hp": 90755,
      "atk": 6678
    },
    {
      "hp": 91189,
      "atk": 6710
    },
    {
      "hp": 91624,
      "atk": 6742
    },
    {
      "hp": 92058,
      "atk": 6774
    },
    {
      "hp": 92492,
      "atk": 6806
    },
    {
      "hp": 92926,
      "atk": 6838
    },
    {
      "hp": 93360,
      "atk": 6870
    },
    {
      "hp": 93794,
      "atk": 6902
    },
    {
      "hp": 94228,
      "atk": 6934
    },
    {
      "hp": 94662,
      "atk": 6966
    },
    {
      "hp": 94662,
      "atk": 6966
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
