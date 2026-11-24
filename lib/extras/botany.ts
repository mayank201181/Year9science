import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "A single mature tropical rain tree on Tanglin's campus can transpire over 300 litres of water vapour into Singapore's sky every sunny day — lifting it upwards with zero moving parts.",
  didYouKnow: [
    "Almost 95% of a tree's dry solid mass comes from invisible carbon dioxide gas in the air and water from rain, NOT from eating soil!",
    "Gippsland's giant mountain ash (*Eucalyptus regnans*) is the tallest flowering plant species on Earth, regularly reaching 85–100 metres — pulling water up lignified xylem tubes under negative pressures exceeding 10 atmospheres.",
    "The undersides of many tropical broadleaves pack over 200 to 500 microscopic stomata into every single square millimetre — tens of millions of adjustable pores per leaf.",
    "Plants respire continuously 24 hours a day; in bright sunlight, photosynthesis runs so much faster than respiration that leaves release a large net surplus of oxygen.",
    "Singapore's native *Shorea* (dipterocarp) rainforest trees synchronise 'mast fruiting' every few years, raining millions of spinning helicopter-winged seeds across Bukit Timah so seed-eating animals cannot eat them all.",
  ],
  activities: [
    {
      title: "Rainbow Xylem Dye Race (Celery or Bok Choy)",
      emoji: "🥬",
      materials: [
        "2 fresh leafy stalks of celery or pale bok choy (cut cleanly at the base)",
        "2 clear glasses of water + dark blue or red food colouring",
        "1 desk fan (or a sunny windowsill vs a shaded cupboard)",
        "Ruler and stopwatch",
      ],
      steps: [
        "Mix 10 drops of food colouring into each glass of water and trim 1 cm off the bottom of both stalks under water.",
        "Stand one glass in a still shaded corner and the second glass in front of a gentle fan or bright window.",
        "After 45 minutes, slice both stems horizontally every 2 cm from the base upwards and measure how high the coloured dye travelled.",
        "Look closely at the stained dots in the cross-section — those exact rings are the dead, hollow xylem bundles!",
      ],
      maths:
        "Calculate the upward speed of water (`height ÷ time` in mm/min) in both conditions. The windy or bright stalk draws water up faster because rapid evaporation at the leaves strengthens the transpiration pull.",
    },
    {
      title: "Dipterocarp Rotor-Seed Engineering Challenge",
      emoji: "🚁",
      materials: [
        "Scrap paper strips (12 cm × 3 cm)",
        "Scissors and 1 paperclip per seed model",
        "Stopwatch and measuring tape",
      ],
      steps: [
        "Cut a 5 cm slit down the middle of one end of a paper strip and fold the two wings in opposite directions to mimic a *Shorea* winged seed.",
        "Attach a paperclip to the bottom stem as the 'embryo weight' and drop it from a safe standing height (2.0 m), timing how long it stays airborne.",
        "Test three wing lengths (3 cm, 5 cm, 7 cm) with 3 repeat trials each, excluding any collision anomalies, and calculate the mean fall time.",
        "Compare your slowest rotor with a crumpled paper ball of the same mass to see how wind dispersal extends travel distance.",
      ],
      maths:
        "Even a 1 m/s forest breeze moves a seed falling for 2.5 s by 2.5 metres further than a 0.6 s drop — multiplying the area of new soil a tree can colonise away from its shaded parent canopy!",
    },
  ],
  bonusDiagrams: [
    {
      title: "The 4-Step Starch Test Safety Flowchart",
      caption: "Remember B-E-R-I: Boil in water → Ethanol water bath (flame OFF!) → Rinse in warm water → Iodine (blue-black = starch).",
      svg:
        '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step starch test flowchart: boil in water, turn off Bunsen burner and heat in ethanol water bath, rinse in warm water, add iodine turning blue-black">' +
        '<rect x="0" y="0" width="560" height="190" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Testing a Leaf for Starch (B-E-R-I Method)</text>' +
        '<g stroke="var(--brand)" stroke-width="1.6" fill="var(--surface-2)">' +
        '<rect x="14" y="42" width="118" height="118" rx="10" />' +
        '<rect x="152" y="42" width="126" height="118" rx="10" stroke="var(--bad)" fill="var(--bad-soft)" />' +
        '<rect x="298" y="42" width="114" height="118" rx="10" />' +
        '<rect x="432" y="42" width="114" height="118" rx="10" stroke="var(--good)" fill="var(--brand-soft)" />' +
        '</g>' +
        '<g stroke="var(--ink-2)" stroke-width="2">' +
        '<line x1="132" y1="100" x2="148" y2="100" /><polygon points="151,100 144,96 144,104" fill="var(--ink-2)" stroke="none" />' +
        '<line x1="278" y1="100" x2="294" y2="100" /><polygon points="297,100 290,96 290,104" fill="var(--ink-2)" stroke="none" />' +
        '<line x1="412" y1="100" x2="428" y2="100" /><polygon points="431,100 424,96 424,104" fill="var(--ink-2)" stroke="none" />' +
        '</g>' +
        '<g font-size="10.5" text-anchor="middle" fill="var(--ink)">' +
        '<text x="73" y="64" font-weight="700" fill="var(--brand)">1. Boil in Water</text>' +
        '<text x="73" y="86" fill="var(--ink-2)">1 minute</text>' +
        '<text x="73" y="108">Kills leaf cells &amp;</text>' +
        '<text x="73" y="124">breaks membranes</text>' +
        '<text x="73" y="140">so iodine enters</text>' +
        '<text x="215" y="64" font-weight="700" fill="var(--bad)">2. Ethanol Bath</text>' +
        '<text x="215" y="84" font-weight="700" fill="var(--bad)">FLAME OFF!</text>' +
        '<text x="215" y="106">Flammable liquid:</text>' +
        '<text x="215" y="122">dissolves green</text>' +
        '<text x="215" y="138">chlorophyll safely</text>' +
        '<text x="355" y="64" font-weight="700" fill="var(--brand)">3. Warm Rinse</text>' +
        '<text x="355" y="86" fill="var(--ink-2)">Dip in warm water</text>' +
        '<text x="355" y="108">Softens brittle</text>' +
        '<text x="355" y="124">white leaf to lay</text>' +
        '<text x="355" y="140">flat on white tile</text>' +
        '<text x="489" y="64" font-weight="700" fill="var(--good)">4. Add Iodine</text>' +
        '<text x="489" y="88" font-weight="700">Blue-black =</text>' +
        '<text x="489" y="104" font-weight="700" fill="var(--good)">Starch present</text>' +
        '<text x="489" y="126" fill="var(--ink-2)">Orange-brown =</text>' +
        '<text x="489" y="142" fill="var(--ink-2)">No starch</text>' +
        '</g>' +
        '</svg>',
    },
    {
      title: "How Environmental Conditions Shift Transpiration",
      caption: "Heat, wind, dry air and bright light accelerate evaporation and diffusion out of stomata; high humidity slows it down.",
      svg:
        '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four environmental factors affecting transpiration: heat, wind, low humidity and bright light increase transpiration rate">' +
        '<rect x="0" y="0" width="560" height="200" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">4 Factors That Speed Up Transpiration</text>' +
        '<g stroke="var(--line)" stroke-width="1.3" fill="var(--surface-2)">' +
        '<rect x="18" y="42" width="122" height="138" rx="10" />' +
        '<rect x="152" y="42" width="122" height="138" rx="10" />' +
        '<rect x="286" y="42" width="122" height="138" rx="10" />' +
        '<rect x="420" y="42" width="122" height="138" rx="10" />' +
        '</g>' +
        '<g font-size="10.5" text-anchor="middle" fill="var(--ink)">' +
        '<text x="79" y="66" font-weight="700" fill="var(--bad)">Higher Temp ↑</text>' +
        '<text x="79" y="92">More kinetic</text><text x="79" y="108">energy → faster</text><text x="79" y="124">evaporation &amp;</text><text x="79" y="140">diffusion</text>' +
        '<text x="79" y="166" font-weight="700" fill="var(--good)">Rate ↑</text>' +
        '<text x="213" y="66" font-weight="700" fill="var(--brand)">More Wind ↑</text>' +
        '<text x="213" y="92">Blows away</text><text x="213" y="108">humid air layer →</text><text x="213" y="124">steeper vapour</text><text x="213" y="140">gradient</text>' +
        '<text x="213" y="166" font-weight="700" fill="var(--good)">Rate ↑</text>' +
        '<text x="347" y="66" font-weight="700" fill="var(--brand)">Dry Air (Low RH)</text>' +
        '<text x="347" y="92">Less vapour</text><text x="347" y="108">outside leaf →</text><text x="347" y="124">steeper diffusion</text><text x="347" y="140">gradient</text>' +
        '<text x="347" y="166" font-weight="700" fill="var(--good)">Rate ↑</text>' +
        '<text x="481" y="66" font-weight="700" fill="var(--bad)">Bright Light ↑</text>' +
        '<text x="481" y="92">Guard cells</text><text x="481" y="108">turn turgid →</text><text x="481" y="124">stomata open</text><text x="481" y="140">wider for CO₂</text>' +
        '<text x="481" y="166" font-weight="700" fill="var(--good)">Rate ↑</text>' +
        '</g>' +
        '</svg>',
    },
  ],
  history: {
    title: "Van Helmont's Five-Year Willow Tree Mystery",
    story:
      "For two thousand years people assumed plants simply 'ate' soil through their roots. In the 1640s, Flemish physician Jan Baptist van Helmont put that belief to a rigorous fair test: he dried and weighed exactly 90.7 kg of soil, planted a 2.3 kg willow sapling in it, covered the pot so no dust could enter, and gave it only rainwater for five years. When he pulled the tree out, the willow had gained 74.4 kg — yet the dried soil had lost only 57 grams! Van Helmont proved plants do NOT eat soil, though he guessed the new mass came solely from water; a century later Joseph Priestley and Jan Ingenhousz solved the missing half of the puzzle by discovering that sunlight lets green leaves absorb invisible carbon dioxide gas and release fresh oxygen.",
  },
};
