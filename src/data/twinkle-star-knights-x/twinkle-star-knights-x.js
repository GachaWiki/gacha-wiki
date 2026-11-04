// Twinkle Star Knights X landing page data (pre-registration stage)

export const twinkleStarKnightsXConfig = {
  meta: {
    title: 'Twinkle Star Knights X Wiki - Characters & Pre-Registration | GachaWiki',
    description:
      'Twinkle Star Knights X wiki with revealed character profiles and pre-registration info. An R18 RPG coming to EROLABS. Pre-register now and get Star Jewels.',
    gameTitle: 'Twinkle Star Knights X',
  },

  gameInfo: {
    description:
      'Twinkle Star Knights X is an R18 RPG distributed on the EROLABS platform, currently in pre-registration. The game is set at the Star Knight academies of the city-state Ryusei, where protagonist Clotho Hinomiya inherits the title of Student Council President and leads the Star Knights as the Demon King destined to save the world. All rewards and dates below are from the official pre-registration campaign.',
    lastUpdated: new Date(),
  },

  story: {
    content: [
      'The catastrophe known as "Recreate" and the monsters it unleashed have thrown the world into chaos.',
      'To fight back, the nations and the city-state Ryusei establish the Ryusei and Shinsei Academies to train Star Knights.',
      'Clotho Hinomiya, a second-year transfer student at Shinsei Academy, dreams of becoming a Star Knight. On his first day, Student Council President Venus Kujo tells him: "Become the Student Council President... and the Demon King who will save the world!"',
      'Clotho agrees to an official duel with the title of Student Council President on the line, and after winning, he inherits the position.',
      'Lead your Star Knights and become the Demon King destined to save the world!',
    ],
  },

  prereg: {
    status: 'Open',
    page: 'https://www.ero-labs.com/en/prereg/twinkle-star-knights-x/70',
    milestones: [
      { preregistrations: 10000, reward: 'Star Jewels x 500', image: 'gameimg/gift01.webp' },
      { preregistrations: 20000, reward: 'Star Jewels x 500', image: 'gameimg/gift02.webp' },
      { preregistrations: 50000, reward: 'Star Jewels x 1000', image: 'gameimg/gift03.webp' },
      { preregistrations: 80000, reward: 'Star Jewels x 1000', image: 'gameimg/gift04.webp' },
      { preregistrations: 100000, reward: 'Star Jewels x 2000', image: 'gameimg/gift05.webp' },
    ],
    referralEvent: {
      reward: 'Recruit Ticket x 10',
      time: 'Nov 04, 2026 12:00 to Dec 08, 2026 11:00 (UTC+8)',
      codeExpiry: 'Jan 01, 2027 12:59 (UTC+8)',
      rules: [
        'Pre-registration must be completed to participate in the sharing mission.',
        'Invite 5 different friends to enter your referral code, and enter another player\'s referral code yourself, to claim the exclusive Pre-registration Reward Code.',
        'Reward codes can only be redeemed in-game after the official launch.',
        'Each EROLABS account can redeem one reward code, and each game account can redeem it only once.',
      ],
    },
  },

  links: {
    official: 'https://www.ero-labs.com/en/prereg/twinkle-star-knights-x/70',
    discord: 'https://discord.com/invite/h6q59YNwGW',
  },

  sections: [
    { id: 'about', title: 'About', type: 'game-info' },
    { id: 'resources', title: 'Resources', type: 'guides-grid' },
  ],

  guides: [
    {
      id: 'characters',
      title: 'Characters',
      description: '5 revealed characters with race and affiliation info.',
      url: '/guides/twinkle-star-knights-x/characters/',
      category: 'characters',
      size: 'large',
    },
  ],

  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Revealed character profiles',
      size: 'small',
      guides: [
        { id: 'tskx-characters', title: 'Database', url: '/guides/twinkle-star-knights-x/characters/' },
      ],
    },
  ],
};
