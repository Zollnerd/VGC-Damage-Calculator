var ABILITIES_ADV = [
    'Air Lock',
    'Battle Armor',
    'Blaze',
    'Chlorophyll',
    'Clear Body',
    'Cloud Nine',
    'Drizzle',
    'Drought',
    'Flash Fire',
    'Flash Fire (activated)',
    'Forecast',
    'Guts',
    'Huge Power',
    'Hustle',
    'Hyper Cutter',
    'Intimidate',
    'Levitate',
    'Marvel Scale',
    'Overgrow',
    'Pure Power',
    'Rain Dish',
    'Sand Stream',
    'Sand Veil',
    'Shell Armor',
    'Soundproof',
    'Swarm',
    'Swift Swim',
    'Thick Fat',
    'Torrent',
    'Volt Absorb',
    'Water Absorb',
    'White Smoke',
    'Wonder Guard'
];

var ABILITIES_DPP = ABILITIES_ADV.concat([
    'Adaptability',
    'Bad Dreams',
    'Download',
    'Dry Skin',
    'Filter',
    'Flower Gift',
    'Heatproof',
    'Ice Body',
    'Iron Fist',
    'Klutz',
    'Magic Guard',
    'Mold Breaker',
    'Motor Drive',
    'Normalize',
    'Poison Heal',
    'Reckless',
    'Scrappy',
    'Simple',
    'Skill Link',
    'Slow Start',
    'Sniper',
    'Snow Cloak',
    'Snow Warning',
    'Solar Power',
    'Solid Rock',
    'Technician',
    'Tinted Lens',
    'Unaware'
]);

var ABILITIES_BW = ABILITIES_DPP.concat([
    'Analytic',
    'Contrary',
    'Defeatist',
    'Defiant',
    'Flare Boost',
    'Infiltrator',
    'Lightningrod',
    'Multiscale',
    'Overcoat',
    'Sand Force',
    'Sand Rush',
    'Sap Sipper',
    'Sheer Force',
    'Storm Drain',
    'Teravolt',
    'Toxic Boost',
    'Turboblaze',
    'Unnerve'
]);

var ABILITIES_XY = ABILITIES_BW.concat([
    'Aerilate',
    'Aura Break',
    'Bulletproof',
    'Dark Aura',
    'Delta Stream',
    'Desolate Land',
    'Fairy Aura',
    'Fur Coat',
    'Mega Launcher',
    'Parental Bond',
    'Pixilate',
    'Primordial Sea',
    'Protean',
    'Refrigerate',
    'Strong Jaw',
    'Tough Claws'
]);

var ABILITIES_SM = ABILITIES_XY.concat([
    'Electric Surge',
    'Psychic Surge',
    'Grassy Surge',
    'Misty Surge',
    'Merciless',
    'Stakeout',
    'Water Bubble',
    'Steelworker',
    'Liquid Voice',
    'Galvanize',
    'Fluffy',
    'RKS System',
    'Shadow Shield',
    'Prism Armor',
    'Full Metal Body',
    'Shadow Shield'
   // 'Battery'
]);

ABILITIES_XY.splice(ABILITIES_XY.indexOf('Lightningrod'), 1, 'Lightning Rod');
