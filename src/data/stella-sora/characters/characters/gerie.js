// Gerie Character Data - Stella Sora
// Generated from live game tables (Oct 19 2026 patch, v2.0.0)

export const Gerie = {
  "id": 149,
  "name": "Gerie",
  "icon": "/stella/assets/Gerie.png",
  "portrait": "/stella/assets/Gerie_portrait.png",
  "background": "/stella/assets/Gerie_background.png",
  "description": "Gerie brandishes her chain-shovel \"Mercy\" with reckless abandon on the battlefield, crushing swathes of foes. She sows terror into her opponent's soul before delivering judgment.",
  "voiceActor": {
    "cn": "Jing Chen",
    "cnLocalized": "静宸",
    "jp": "Yukari Amane",
    "jpLocalized": "天音ゆかり"
  },
  "birthday": "3.28",
  "grade": 5,
  "element": "Terra",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "Grace Imperium",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "The Cave Mass",
      "icon": "DatingSPCG_149301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "\"Boss, there are long-lost remains here. Please turn away, so you won't be frightened.\" She turns you around with her other hand. \"Please wait a moment and let me grant the unfortunate their final peace.\""
    },
    {
      "name": "Sea Prayer",
      "icon": "DatingSPCG_149302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "\"It's vast and calm here.\" She takes your hands. \"Please share this stillness with me and use it to measure your own nature.\""
    },
    {
      "name": "The Snow Spirit",
      "icon": "DatingSPCG_149303",
      "clue": "Visit Hot Spring Resort to unlock",
      "secondChoice": "\"Just a moment, Boss~\"\n\nWith that, she walked straight into the shop. Before long, she came back out wearing a yukata.\n\n\"What do I look? Pretty scary, right?~\"\n\n\"Scary? I think it looks great.\"\n\n\"Huh...? Isn't this the look from that Goodwind horror story...?\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Blazing Wings",
      "Chilling Wind Spinner",
      "Emerging Talent",
      "Fiery Honeypot",
      "Love Candle",
      "Rising Star",
      "Shining Star",
      "Whisper Wind Spinner"
    ],
    "hates": [
      "Deluxe Blower",
      "Exquisite Blower",
      "Portable Blower"
    ]
  },
  "normalAttack": {
    "name": "Kiss of Death",
    "icon": "Icon/Skill/14901_Normal",
    "description": "Slings the chain shovel to deal DMG multiple times.\u000bStrike 1: <color=#ec6d21>&Param1&</color> of ATK as Terra Auto Attack DMG.\u000bStrike 2: <color=#ec6d21>&Param2& x2</color> of ATK as Terra Auto Attack DMG.\u000bStrike 3: <color=#ec6d21>&Param3&</color> of ATK as Terra Auto Attack DMG.\u000bStrike 4: <color=#ec6d21>&Param4& x2</color> of ATK as Terra Auto Attack DMG.\u000bStrike 5: <color=#ec6d21>&Param5&</color> and <color=#ec6d21>&Param6&</color> of ATK as Terra Auto Attack DMG.",
    "shortDescription": "Swings the chain shovel to deal DMG multiple times.",
    "params": [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "hints": {}
  },
  "skill": {
    "name": "Thorned Inferno",
    "icon": "Icon/Skill/14901_Skill_Main",
    "description": "Leaps at the target, dealing <color=#ec6d21>&Param1&</color> and <color=#ec6d21>&Param2&</color> of ATK as AoE Terra Skill DMG, and creates an Iron Cage.\u000bIron Cage: Links 2 nearby targets, dealing <color=#ec6d21>&Param3&</color> of ATK as Terra Skill DMG every second for 8s. When Gerie is near the Iron Cage, she enters the Lethal status, which increases her &Param4& by <color=#ec6d21>&Param5&</color>.\u000bThorned Inferno (Main Skill) can trigger ##Terra Mark#1020#, dealing &Param6& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Leaps at the target, dealing AoE Terra DMG, and creates an Iron Cage that deals DMG over time.\u000bWhen Gerie is near the Iron Cage, she enters the Lethal status, which increases her Auto Attack DMG.\u000bThe Main Skill can trigger ##Terra Mark#1020#.",
    "params": [
      "",
      "",
      "",
      "",
      "",
      ""
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
    "name": "Immediate Execution",
    "icon": "Icon/Skill/14901_Skill_Support",
    "description": "Slings the chain shovel and creates Seismic Waves, dealing <color=#ec6d21>&Param1&</color> and <color=#ec6d21>&Param2&</color> of ATK as Terra Skill DMG respectively.\u000bImmediate Execution (Support Skill) can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Slings the chain shovel and creates Seismic Waves, dealing Terra DMG respectively.\u000bThe Support Skill can trigger ##Terra Mark#1020#.",
    "params": [
      "",
      "",
      ""
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Divine: Retribution of Evil",
    "icon": "Icon/Skill/14901_Ultra",
    "description": "Generates 3 huge chain shovels, each dealing <color=#ec6d21>&Param1& of ATK x3</color> as Terra Ultimate DMG to targets along its path.\u000bDivine: Retribution of Evil (Ultimate) can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Generates multiple huge chain shovels, each dealing Terra DMG to targets along its path.\u000bHer Ultimate can trigger ##Terra Mark#1020#.",
    "params": [
      "",
      "",
      ""
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Original Sin",
      "talents": [
        {
          "name": "Original Sin",
          "description": "After Gerie deals Skill DMG, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times. This effect can only be triggered once per sec.",
          "params": [
            "2.5%",
            "5",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "White Throne",
      "talents": [
        {
          "name": "White Throne",
          "description": "When Gerie triggers ##Terra Mark#1020#, her Terra DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2.5%",
            "4",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Lazarus' Resurrection",
      "talents": [
        {
          "name": "Lazarus' Resurrection",
          "description": "After Gerie deals Ultimate DMG to a target, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "8.3%",
            "20",
            "7"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Shackled at Dusk",
      "talents": [
        {
          "name": "Shackled at Dusk",
          "description": "When any Trekker inflicts ##Terra Mark#1020#, increases Gerie's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Messiah' Promise",
      "talents": [
        {
          "name": "Messiah' Promise",
          "description": "Increases Gerie's Terra DMG to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1345,
      "atk": 114
    },
    {
      "hp": 1753,
      "atk": 148
    },
    {
      "hp": 2158,
      "atk": 182
    },
    {
      "hp": 2563,
      "atk": 216
    },
    {
      "hp": 2967,
      "atk": 250
    },
    {
      "hp": 3372,
      "atk": 284
    },
    {
      "hp": 3777,
      "atk": 318
    },
    {
      "hp": 4181,
      "atk": 352
    },
    {
      "hp": 4586,
      "atk": 386
    },
    {
      "hp": 4990,
      "atk": 420
    },
    {
      "hp": 5989,
      "atk": 504
    },
    {
      "hp": 6393,
      "atk": 538
    },
    {
      "hp": 6798,
      "atk": 572
    },
    {
      "hp": 7203,
      "atk": 606
    },
    {
      "hp": 7607,
      "atk": 640
    },
    {
      "hp": 8012,
      "atk": 674
    },
    {
      "hp": 8417,
      "atk": 708
    },
    {
      "hp": 8821,
      "atk": 742
    },
    {
      "hp": 9226,
      "atk": 776
    },
    {
      "hp": 9630,
      "atk": 811
    },
    {
      "hp": 10035,
      "atk": 845
    },
    {
      "hp": 12044,
      "atk": 1014
    },
    {
      "hp": 12449,
      "atk": 1048
    },
    {
      "hp": 12854,
      "atk": 1082
    },
    {
      "hp": 13258,
      "atk": 1116
    },
    {
      "hp": 13663,
      "atk": 1150
    },
    {
      "hp": 14068,
      "atk": 1184
    },
    {
      "hp": 14472,
      "atk": 1218
    },
    {
      "hp": 14877,
      "atk": 1252
    },
    {
      "hp": 15282,
      "atk": 1286
    },
    {
      "hp": 15686,
      "atk": 1320
    },
    {
      "hp": 16091,
      "atk": 1354
    },
    {
      "hp": 19314,
      "atk": 1626
    },
    {
      "hp": 19719,
      "atk": 1660
    },
    {
      "hp": 20123,
      "atk": 1694
    },
    {
      "hp": 20528,
      "atk": 1728
    },
    {
      "hp": 20933,
      "atk": 1762
    },
    {
      "hp": 21337,
      "atk": 1796
    },
    {
      "hp": 21742,
      "atk": 1830
    },
    {
      "hp": 22146,
      "atk": 1864
    },
    {
      "hp": 22551,
      "atk": 1898
    },
    {
      "hp": 22956,
      "atk": 1932
    },
    {
      "hp": 23360,
      "atk": 1966
    },
    {
      "hp": 28028,
      "atk": 2359
    },
    {
      "hp": 28433,
      "atk": 2393
    },
    {
      "hp": 28837,
      "atk": 2427
    },
    {
      "hp": 29242,
      "atk": 2461
    },
    {
      "hp": 29647,
      "atk": 2495
    },
    {
      "hp": 30051,
      "atk": 2529
    },
    {
      "hp": 30456,
      "atk": 2563
    },
    {
      "hp": 30860,
      "atk": 2597
    },
    {
      "hp": 31265,
      "atk": 2631
    },
    {
      "hp": 31670,
      "atk": 2665
    },
    {
      "hp": 32074,
      "atk": 2700
    },
    {
      "hp": 38494,
      "atk": 3240
    },
    {
      "hp": 38899,
      "atk": 3274
    },
    {
      "hp": 39304,
      "atk": 3308
    },
    {
      "hp": 39708,
      "atk": 3342
    },
    {
      "hp": 40113,
      "atk": 3376
    },
    {
      "hp": 40517,
      "atk": 3410
    },
    {
      "hp": 40922,
      "atk": 3444
    },
    {
      "hp": 41327,
      "atk": 3478
    },
    {
      "hp": 41731,
      "atk": 3512
    },
    {
      "hp": 42136,
      "atk": 3546
    },
    {
      "hp": 42541,
      "atk": 3580
    },
    {
      "hp": 51052,
      "atk": 4297
    },
    {
      "hp": 51456,
      "atk": 4331
    },
    {
      "hp": 51861,
      "atk": 4365
    },
    {
      "hp": 52266,
      "atk": 4399
    },
    {
      "hp": 52670,
      "atk": 4433
    },
    {
      "hp": 53075,
      "atk": 4467
    },
    {
      "hp": 53480,
      "atk": 4501
    },
    {
      "hp": 53884,
      "atk": 4535
    },
    {
      "hp": 54289,
      "atk": 4569
    },
    {
      "hp": 54693,
      "atk": 4603
    },
    {
      "hp": 55098,
      "atk": 4637
    },
    {
      "hp": 66117,
      "atk": 5565
    },
    {
      "hp": 66521,
      "atk": 5599
    },
    {
      "hp": 66926,
      "atk": 5633
    },
    {
      "hp": 67330,
      "atk": 5667
    },
    {
      "hp": 67735,
      "atk": 5701
    },
    {
      "hp": 68140,
      "atk": 5735
    },
    {
      "hp": 68544,
      "atk": 5769
    },
    {
      "hp": 68949,
      "atk": 5803
    },
    {
      "hp": 69354,
      "atk": 5837
    },
    {
      "hp": 69758,
      "atk": 5871
    },
    {
      "hp": 70163,
      "atk": 5905
    },
    {
      "hp": 84190,
      "atk": 7086
    },
    {
      "hp": 84595,
      "atk": 7120
    },
    {
      "hp": 84999,
      "atk": 7154
    },
    {
      "hp": 85404,
      "atk": 7188
    },
    {
      "hp": 85809,
      "atk": 7222
    },
    {
      "hp": 86213,
      "atk": 7256
    },
    {
      "hp": 86618,
      "atk": 7290
    },
    {
      "hp": 87023,
      "atk": 7324
    },
    {
      "hp": 87427,
      "atk": 7358
    },
    {
      "hp": 87832,
      "atk": 7392
    },
    {
      "hp": 88236,
      "atk": 7426
    },
    {
      "hp": 88236,
      "atk": 7426
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
