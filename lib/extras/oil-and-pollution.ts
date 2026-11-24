import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Did you know that the thick black tar paving Singapore's expressways and the invisible gas powering a camping stove come out of the exact same barrel of crude oil — separated purely by chain length and boiling point?",
  didYouKnow: [
    "Singapore's Jurong Island is one of the world's top five petroleum refining hubs: its giant steam crackers run 24/7 at over 800 °C to turn heavy oil fractions into ethene for global plastics.",
    "Until 2020, ocean cargo ships burned fuel oil containing up to 3.5% sulfur. The global IMO 2020 rule slashed that limit to 0.5%, cutting global shipping sulfur dioxide (SO₂) emissions by over 70% overnight!",
    "Carbon monoxide binds to haemoglobin roughly 200 times more tightly than oxygen does — which is why even tiny concentrations in a poorly ventilated room quickly become life-threatening.",
    "A single modern car catalytic converter contains microscopic coatings of platinum, palladium, and rhodium spread across a ceramic honeycomb with an internal surface area bigger than two football pitches!",
    "The wax in an ordinary birthday candle is actually a mixture of long-chain solid alkanes (around C₂₅H₅₂ to C₃₀H₆₂) — holding a cool ceramic spoon just above the yellow tip collects black carbon soot from incomplete combustion.",
  ],
  activities: [
    {
      title: "Viscosity Ramp Race (Modelling Chain Length)",
      emoji: "🏁",
      materials: [
        "Smooth chopping board or baking tray propped at a 20° slope",
        "Four liquids representing increasing chain length: water, cooking oil, liquid dish soap, and honey or maple syrup",
        "Teaspoon, ruler, and smartphone stopwatch",
      ],
      steps: [
        "Draw a pencil start line near the top of the tilted board and a finish line 25 cm lower down.",
        "Place one level teaspoon of each liquid on the start line and release them together, timing how many seconds each takes to reach the finish line.",
        "Calculate the average flow speed (distance ÷ time) for each liquid and rank them from lowest viscosity to highest viscosity.",
        "Match each household liquid to its closest crude-oil fraction analogue: petrol (very runny), kerosene/diesel (medium), heavy fuel oil (oily), and bitumen (ultra-thick).",
      ],
      maths:
        "Just like honey's long tangled sugar chains resist flowing down the ramp, longer hydrocarbon chains experience stronger intermolecular forces and tangle together, raising viscosity dramatically down the fractionating column.",
    },
    {
      title: "Bead-and-Clip Cracking & Atom Conservation Challenge",
      emoji: "✂️",
      materials: [
        "12 large coloured beads or paperclips (representing carbon atoms)",
        "26 smaller beads or stickers (representing hydrogen atoms)",
        "Scissors or a pencil to mark the cracking cut",
      ],
      steps: [
        "Build a 12-carbon chain representing dodecane (C₁₂H₂₆), checking that every middle carbon links to 2 H atoms and each end carbon links to 3 H atoms.",
        "Pick any point along the chain to 'crack' it into a shorter alkane (minimum 1 C) and an alkene (minimum 2 C).",
        "Move ONE hydrogen atom from the alkene end onto the cut end of the shorter alkane so the shorter alkane becomes saturated (CₙH₂ₙ₊₂) — notice the alkene fragment now has TWO spare bonds that pair up into a C=C double bond!",
        "Count total C and H atoms before and after cracking to verify conservation of mass, then test two different cut points.",
      ],
      maths:
        "Whenever a single alkane CₙH₂ₙ₊₂ cracks into a shorter alkane CₐH₂ₐ₊₂ plus an alkene C_bH₂_b, conservation of atoms forces a + b = n and (2a + 2) + 2b = 2n + 2 — proving mathematically why cracking an alkane ALWAYS produces an alkene!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Inside a Three-Way Catalytic Converter",
      caption:
        "A platinum/rhodium honeycomb turns toxic carbon monoxide (CO) and acid-rain-causing nitrogen oxide (NO) into CO₂ and harmless N₂ gas.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a car catalytic converter turning toxic carbon monoxide and nitrogen oxide into carbon dioxide and nitrogen gas across a platinum honeycomb">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">How a Catalytic Converter Cleans Car Exhaust</text>

  <!-- Inlet pipe -->
  <rect x="16" y="102" width="124" height="44" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="78" y="121" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Dirty Exhaust IN</text>
  <text x="78" y="137" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2CO + 2NO</text>

  <!-- Arrow IN -->
  <line x1="142" y1="124" x2="176" y2="124" stroke="var(--bad)" stroke-width="2.8"/>
  <polygon points="174,119 184,124 174,129" fill="var(--bad)"/>

  <!-- Converter honeycomb chamber -->
  <rect x="184" y="68" width="192" height="112" rx="16" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <text x="280" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Ceramic Honeycomb</text>
  <!-- Grid representing huge surface area -->
  <line x1="204" y1="104" x2="356" y2="104" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="204" y1="118" x2="356" y2="118" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="204" y1="132" x2="356" y2="132" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="204" y1="146" x2="356" y2="146" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="234" y1="100" x2="234" y2="152" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="264" y1="100" x2="264" y2="152" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="296" y1="100" x2="296" y2="152" stroke="var(--line)" stroke-width="1.8"/>
  <line x1="326" y1="100" x2="326" y2="152" stroke="var(--line)" stroke-width="1.8"/>
  <text x="280" y="168" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Platinum &amp; Rhodium Catalyst</text>

  <!-- Arrow OUT -->
  <line x1="378" y1="124" x2="412" y2="124" stroke="var(--good)" stroke-width="2.8"/>
  <polygon points="410,119 420,124 410,129" fill="var(--good)"/>

  <!-- Outlet pipe -->
  <rect x="420" y="102" width="124" height="44" rx="6" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="482" y="121" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Cleaner Exhaust</text>
  <text x="482" y="137" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2CO₂ + N₂</text>

  <!-- Bottom equation & caveat note -->
  <rect x="46" y="194" width="468" height="44" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="280" y="213" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">2CO + 2NO → 2CO₂ + N₂</text>
  <text x="280" y="229" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Removes toxic CO &amp; acid-rain NOₓ, but CO₂ still acts as a greenhouse gas!</text>
</svg>`,
    },
    {
      title: "The Enhanced Greenhouse Effect",
      caption:
        "Short-wavelength sunlight warms Earth's surface, while rising levels of CO₂ and CH₄ absorb and re-radiate outgoing long-wavelength infrared heat.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the enhanced greenhouse effect showing short-wave sunlight entering and long-wave infrared heat absorbed and trapped by carbon dioxide and methane">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">How Greenhouse Gases (CO₂ &amp; CH₄) Warm Earth</text>

  <!-- Sun in top-left -->
  <circle cx="58" cy="64" r="24" fill="var(--accent)"/>
  <text x="58" y="68" text-anchor="middle" font-size="10" font-weight="800" fill="#171a2f">SUN</text>

  <!-- Atmosphere layer band -->
  <rect x="20" y="106" width="520" height="48" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.4" opacity="0.85"/>
  <text x="280" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--info)">Atmosphere with Greenhouse Gases (CO₂, CH₄, H₂O)</text>
  <text x="280" y="142" text-anchor="middle" font-size="9" fill="var(--ink-2)">Higher fossil-fuel CO₂ &amp; farming CH₄ thicken this heat-trapping blanket</text>

  <!-- Earth surface at bottom -->
  <rect x="20" y="198" width="520" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="280" y="220" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Earth's Surface (warms up &amp; emits infrared heat)</text>

  <!-- Incoming short-wave solar rays passing straight through -->
  <line x1="82" y1="78" x2="176" y2="194" stroke="var(--accent)" stroke-width="3"/>
  <polygon points="171,195 182,199 178,188" fill="var(--accent)"/>
  <text x="166" y="76" font-size="9.5" font-weight="700" fill="var(--warn)">1. Short-wave sunlight</text>
  <text x="166" y="89" font-size="9" fill="var(--ink-2)">passes straight through</text>

  <!-- Outgoing infrared absorbed & re-radiated downward -->
  <line x1="270" y1="196" x2="296" y2="156" stroke="var(--bad)" stroke-width="2.6" stroke-dasharray="5 3"/>
  <line x1="306" y1="156" x2="344" y2="194" stroke="var(--bad)" stroke-width="2.8"/>
  <polygon points="338,194 349,198 345,187" fill="var(--bad)"/>
  <text x="372" y="176" font-size="9.5" font-weight="700" fill="var(--bad)">2. Outgoing IR trapped</text>
  <text x="372" y="189" font-size="9" fill="var(--ink-2)">&amp; re-radiated to Earth</text>

  <!-- Some IR escapes to space -->
  <line x1="454" y1="196" x2="492" y2="54" stroke="var(--ink-2)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <polygon points="487,56 494,46 497,58" fill="var(--ink-2)"/>
  <text x="456" y="76" text-anchor="middle" font-size="9" fill="var(--ink-2)">Some IR escapes</text>
  <text x="456" y="89" text-anchor="middle" font-size="9" fill="var(--ink-2)">to space</text>
</svg>`,
    },
  ],
  history: {
    title: "Eunice Newton Foote & the Greenhouse Gas Breakthrough (1856)",
    story:
      "Over 160 years ago, in a sunlit home laboratory in Seneca Falls, New York, American scientist and inventor Eunice Newton Foote set up a deceptively simple experiment. She filled tall glass cylinders with different gases — ordinary air, hydrogen, and 'carbonic acid gas' (carbon dioxide) — placed a mercury thermometer inside each cylinder, and set them in bright sunlight. The cylinder filled with carbon dioxide warmed dramatically hotter than air and took far longer to cool back down in the shade! In August 1856, her paper concluded boldly: 'An atmosphere of that gas would give to our earth a high temperature.' Three years later, Irish physicist John Tyndall independently proved how CO₂ and water vapour absorb invisible infrared radiation. Together, their simple bench-top measurements laid the entire scientific foundation for modern climate chemistry.",
  },
};
