// Substitua o conteúdo dos arrays abaixo com os dados completos do seu arquivo React original

export const mysteries = [
    {
    id: "breaking_the_seal",
    name: "Breaking the Seal",
    level: 12,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 12 },
      { quest: "Archaeology tutorial" }
    ],
    rewards: ["900 experience", "Access to the main fortress"]
  },
  {
    id: "prison_break",
    name: "Prison Break",
    level: 12,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 12 },
      { quest: "Breaking the Seal" }
    ],
    rewards: ["900 experience", "Access to the prison block"]
  },
  {
    id: "eyes_in_their_stars",
    name: "Eyes in Their Stars",
    level: 24,
    digSite: "Infernal Source Dig Site",
    alignment: "Zamorakian",
    requirements: [{ skill: "Archaeology", level: 24 }],
    rewards: ["1,300 experience", "Access to the Dungeon of Disorder"]
  },
  {
    id: "embrace_the_chaos",
    name: "Embrace the Chaos",
    level: 29,
    digSite: "Infernal Source Dig Site",
    alignment: "Zamorakian",
    requirements: [
      { skill: "Archaeology", level: 29 },
      { quest: "Eyes in Their Stars" }
    ],
    rewards: ["1,400 experience", "Access to the Source (Vestibule of Futility)"]
  },
  {
    id: "contract_claws",
    name: "Contract Claws",
    level: 29,
    digSite: "Infernal Source Dig Site",
    alignment: "Zamorakian",
    requirements: [
      { skill: "Archaeology", level: 29 },
      { skill: "Prayer", level: 35 },
      { quest: "Embrace the Chaos" },
      { quest: "Land of the Goblins (partial)" }
    ],
    rewards: [
      "1,400 experience",
      "A shortcut to the Harrowing when entering the lift at the Infernal Source Dig Site"
    ]
  },
  {
    id: "secrets_of_the_monolith",
    name: "Secrets of the Monolith",
    level: 40,
    digSite: "Archaeology Guild",
    alignment: "General",
    requirements: [
      { skill: "Archaeology", level: 40 },
      { quest: "Qualification - Assistant" }
    ],
    rewards: ["2,000 experience", "You can harness more energy from the Monolith (+100 energy)"]
  },
  {
    id: "queen_of_the_icyene",
    name: "Queen of the Icyene",
    level: 42,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 42 }],
    rewards: ["2,100 experience"]
  },
  {
    id: "fallen_angels",
    name: "Fallen Angels",
    level: 42,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 42 }],
    rewards: ["2,100 experience"]
  },
  {
    id: "time_served",
    name: "Time Served",
    level: 47,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 47 },
      { quest: "Prison Break" }
    ],
    rewards: ["2,800 experience", "Partial access to the Vault"]
  },
  {
    id: "fall_and_rise",
    name: "Fall and Rise",
    level: 61,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 61 }],
    rewards: ["5,100 experience"]
  },
  {
    id: "empty_children",
    name: "Empty Children",
    level: 66,
    digSite: "Senntisten Dig Site",
    alignment: "Zarosian",
    requirements: [{ skill: "Archaeology", level: 66 }],
    rewards: ["7,300 experience"]
  },
  {
    id: "secrets_of_the_inquisition",
    name: "Secrets of the Inquisition",
    level: 67,
    digSite: "Senntisten Dig Site",
    alignment: "Zarosian",
    requirements: [{ skill: "Archaeology", level: 67 }],
    rewards: ["7,800 experience", "Aurelius's Mask"]
  },
  {
    id: "night_theatre",
    name: "Night Theatre",
    level: 67,
    digSite: "Senntisten Dig Site",
    alignment: "Zarosian",
    requirements: [{ skill: "Archaeology", level: 67 }],
    rewards: ["7,800 experience"]
  },
  {
    id: "dagon_bye",
    name: "Dagon Bye",
    level: 68,
    digSite: "Infernal Source Dig Site",
    alignment: "Zamorakian",
    requirements: [
      { skill: "Archaeology", level: 68 },
      { quest: "Contract Claws" },
      { quest: "Embrace the Chaos" },
      { quest: "Qualification - Assistant" }
    ],
    rewards: [
      "8,400 experience",
      "Pact with Dagon",
      "A shortcut to the Dagon Overlook when entering the lift at the Infernal Source Dig Site",
      "Access to Ancient Summoning"
    ]
  },
  {
    id: "leap_of_faith",
    name: "Leap of Faith",
    level: 70,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [{ skill: "Archaeology", level: 70 }],
    rewards: ["9,300 experience"]
  },
  {
    id: "atonement",
    name: "Atonement",
    level: 70,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [{ skill: "Archaeology", level: 70 }],
    rewards: ["9,300 experience"]
  },
  {
    id: "the_dour_of_bable",
    name: "The Dour of Bable",
    level: 72,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 72 }],
    rewards: ["10,000 experience"]
  },
  {
    id: "the_cult_of_orcus",
    name: "The Cult of Orcus",
    level: 74,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 74 },
      { quest: "Prison Break" }
    ],
    rewards: ["11,000 experience"]
  },
  {
    id: "the_first_commander",
    name: "The First Commander",
    level: 76,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [{ skill: "Archaeology", level: 76 }],
    rewards: ["12,000 experience"]
  },
  // ⚠ CORRIGIDO: estava como nível 92 / Saradominist / Everlight — dados errados
  {
    id: "the_spy_who_loved_metal",
    name: "The Spy Who Loved Metal",
    level: 76,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [{ skill: "Archaeology", level: 76 }],
    rewards: ["12,000 experience"]
  },
  // ★ NOVO
  {
    id: "wing_out",
    name: "Wing Out",
    level: 76,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [
      { skill: "Archaeology", level: 76 },
      { skill: "Smithing", level: 40 }
    ],
    rewards: ["12,000 experience", "Ability to upgrade wingsuit v2 to wingsuit v3"]
  },
  // ★ NOVO
  {
    id: "out_of_the_crucible",
    name: "Out of the Crucible",
    level: 83,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [{ skill: "Archaeology", level: 83 }],
    rewards: ["16,000 experience"]
  },
  // ★ NOVO
  {
    id: "into_the_forge",
    name: "Into the Forge",
    level: 83,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [
      { skill: "Archaeology", level: 83 },
      { skill: "Dungeoneering", level: 35 },
      { skill: "Fishing", level: 28 },
      { quest: "Out of the Crucible" }
    ],
    rewards: ["21,000 experience", "8,000 experience"]
  },
  // ★ NOVO
  {
    id: "a_study_in_aether",
    name: "A Study in Aether",
    level: 85,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [{ skill: "Archaeology", level: 85 }],
    rewards: ["18,000 experience"]
  },
  // ★ NOVO
  {
    id: "a_new_home",
    name: "A New Home",
    level: 87,
    digSite: "Daemonheim Dig Site",
    alignment: "Dragonkin",
    requirements: [{ skill: "Archaeology", level: 87 }],
    rewards: ["19,500 experience"]
  },
  // ★ NOVO
  {
    id: "forge_war",
    name: "Forge War!",
    level: 89,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [
      { skill: "Archaeology", level: 89 },
      { quest: "Out of the Crucible" }
    ],
    rewards: ["21,000 experience"]
  },
  // ★ NOVO
  {
    id: "crypt_o_zoology",
    name: "Crypt o' Zoology",
    level: 90,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [{ skill: "Archaeology", level: 90 }],
    rewards: ["21,500 experience"]
  },
  // ★ NOVO
  {
    id: "know_thy_measure",
    name: "Know Thy Measure",
    level: 90,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 90 },
      { quest: "Qualification - Associate" },
      { quest: "Talked to Mr Mordaut about the dig site" }
    ],
    rewards: ["39,500 experience", "Access to the Moksha ritual site"]
  },
  // ★ NOVO
  {
    id: "teleport_node_on",
    name: "Teleport Node On",
    level: 90,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 90 },
      { skill: "Runecrafting", level: 70 },
      { skill: "Crafting", level: 70 },
      { skill: "Divination", level: 70 },
      { quest: "Know Thy Measure" }
    ],
    rewards: [
      "3,000 experience (first teleport device)",
      "3,000 experience (second teleport device)",
      "3,000 experience (third teleport device)",
      "3,000 experience (final teleport device)",
      "35,000 experience (mystery reward)"
    ]
  },
  // ★ NOVO
  {
    id: "the_epic_of_hebe",
    name: "The Epic of Hebe",
    level: 92,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 92 }],
    rewards: ["23,000 experience"]
  },
  {
    id: "howls_floating_workshop",
    name: "Howl's Floating Workshop",
    level: 95,
    digSite: "Stormguard Citadel Dig Site",
    alignment: "Armadylean",
    requirements: [{ skill: "Archaeology", level: 95 }],
    rewards: [
      "28,000 experience",
      "Access to Ancient Invention and the ability to make blueprints from torn blueprint fragments (Howl's workshop)"
    ]
  },
  {
    id: "writings_on_the_walls",
    name: "Writings on the Walls",
    level: 99,
    digSite: "Archaeology Guild",
    alignment: "General",
    requirements: [
      { skill: "Archaeology", level: 99 },
      { quest: "Qualification - Guildmaster" },
      { quest: "Time Served" },
      { quest: "Eyes in Their Stars" },
      { quest: "Hallowed Be... (partial)" },
      { quest: "Into the Forge" }
    ],
    rewards: ["35,000 experience"]
  },
  {
    id: "you_have_chosen",
    name: "You Have Chosen...",
    level: 100,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [
      { skill: "Archaeology", level: 100 },
      { quest: "Out of the Crucible" },
      { quest: "The First Commander (partial)" }
    ],
    rewards: [
      "37,000 experience",
      "Access to Warforge - Bandos's sanctum excavation site"
    ]
  },
  {
    id: "death_watch",
    name: "Death Watch",
    level: 101,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [{ skill: "Archaeology", level: 101 }],
    rewards: ["39,500 experience"]
  },
  {
    id: "hallowed_be",
    name: "Hallowed Be...",
    level: 105,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [{ skill: "Archaeology", level: 105 }],
    rewards: ["49,000 experience"]
  },
  {
    id: "the_everlight",
    name: "The Everlight",
    level: 105,
    digSite: "Everlight Dig Site",
    alignment: "Saradominist",
    requirements: [
      { skill: "Archaeology", level: 105 },
      { skill: "Construction", level: 40 },
      { quest: "Hallowed Be..." }
    ],
    rewards: [
      "49,000 experience",
      "Ability to unlock the Heightened Senses relic power"
    ]
  },
  {
    id: "free_your_mind",
    name: "Free Your Mind",
    level: 106,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [{ skill: "Archaeology", level: 106 }],
    rewards: ["51,500 experience"]
  },
  {
    id: "decimation",
    name: "Decimation",
    level: 107,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 107 },
      { quest: "Prison Break" }
    ],
    rewards: ["54,000 experience"]
  },
  {
    id: "shadow_fall",
    name: "Shadow Fall",
    level: 107,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 107 },
      { quest: "Prison Break" }
    ],
    rewards: ["54,000 experience"]
  },
  {
    id: "the_forgotten_prisoner",
    name: "The Forgotten Prisoner",
    level: 107,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 107 },
      { quest: "Prison Break" }
    ],
    rewards: ["54,000 experience"]
  },
  {
    id: "the_vault_of_shadows",
    name: "The Vault of Shadows",
    level: 107,
    digSite: "Kharid-et Dig Site",
    alignment: "Zarosian",
    requirements: [
      { skill: "Archaeology", level: 107 },
      { quest: "Time Served" },
      { quest: "All shadow anchors powered or pylon active" }
    ],
    rewards: [
      "2,500 experience (ice button puzzle)",
      "5,000 experience (blood button puzzle)",
      "7,500 experience (smoke button puzzle)",
      "10,000 experience (shadow button puzzle)",
      "25,000 experience",
      "30,000 experience",
      "Ability to teleport between the five buttons"
    ]
  },
  {
    id: "fragmented_memories",
    name: "Fragmented Memories",
    level: 108,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 108 },
      { skill: "Hunter", level: 86 },
      { quest: "Know Thy Measure" }
    ],
    rewards: ["56,500 experience"]
  },
  {
    id: "heart_of_the_forge",
    name: "Heart of the Forge",
    level: 110,
    digSite: "Warforge Dig Site",
    alignment: "Bandosian",
    requirements: [
      { skill: "Archaeology", level: 110 },
      { quest: "Out of the Crucible" }
    ],
    rewards: ["62,000 experience"]
  },
  {
    id: "a_new_age",
    name: "A New Age",
    level: 113,
    digSite: "Daemonheim Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 113 },
      { skill: "Dungeoneering", level: 95 },
      { quest: "A New Home" },
      { quest: "A New Form" },
      { quest: "Thought Process" },
      { quest: "Twilight of the Gods" }
    ],
    rewards: ["67,000 experience"]
  },
  {
    id: "a_new_form",
    name: "A New Form",
    level: 113,
    digSite: "Daemonheim Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 113 },
      { skill: "Dungeoneering", level: 95 }
    ],
    rewards: ["67,000 experience"]
  },
  {
    id: "i_am_become_death",
    name: "I Am Become Death",
    level: 113,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 113 },
      { quest: "Fragmented Memories" }
    ],
    rewards: ["67,000 experience"]
  },
  {
    id: "mysterious_city",
    name: "Mysterious City",
    level: 120,
    digSite: "Orthen Dig Site",
    alignment: "Dragonkin",
    requirements: [
      { skill: "Archaeology", level: 120 },
      { quest: "Fragmented Memories" }
    ],
    rewards: [
      "80,000 experience",
      "150 additional power at the mysterious monolith"
    ]
  }
];

export const research = [
    { id: "mysterious_monolith_existence", name: "Mysterious Monolith: Existence", level: 40, description: "Reach Assistant qualification.", rewards: ["Ability to harness more energy from the monolith (+100 energy)"] }
    // ... cole o restante do array al original aqui
];

export const collections = [
    { id: "museum_training_weapons", level: 1, name: "Museum - Training Weapons", collector: "Velucia", rewards: "1,000 chronotes", complete: "No" },
    { id: "museum_zarosian_i", level: 25, name: "Museum - Zarosian I", collector: "Velucia", rewards: "2,635 chronotes", complete: "Yes" }
    // ... cole o restante do array Di original aqui
];

export const artefacts = [
    { level: "1", name: "Centurion's dress sword", materials: ["1 × Centurion's dress sword (damaged)", "5 × Imperial iron", "5 × Purpleheart wood"], xp: "250.0", chronotes: "N/A", collections: "Museum - Training Weapons (tutorial-only)" },
    { level: "5", name: "Venator dagger", materials: ["1 × Venator dagger (damaged)", "16 × Third Age iron", "12 × Zarosian insignia"], xp: "305.1", chronotes: "206", collections: "Zarosian I\nMuseum - Zarosian I" }
    // ... cole o restante do array io original aqui
];
