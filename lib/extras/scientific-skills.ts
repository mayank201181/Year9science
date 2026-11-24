import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1999, NASA lost a $125 million Mars spacecraft because one engineering team used metric newtons while another used imperial pounds — proving that scientific units and checking data can literally make or break a mission.",
  didYouKnow: [
    "Alexander Fleming discovered penicillin in 1928 because he refused to throw away an 'anomalous' Petri dish contaminated by a mould ring that killed nearby bacteria!",
    "The SI kilogram was originally a platinum-iridium cylinder locked under three glass bell jars in Paris — until 2019, when scientists redefined it using Planck's constant so its true value could never drift by a microgram.",
    "At CERN's Large Hadron Collider, physicists refuse to announce a new particle discovery until the probability of a random error drops below 1 in 3.5 million ('five sigma').",
    "Every Year 9 science practical you do uses the exact same peer-review logic professional journals demand: a clear method so another team across the world can test reproducibility.",
    "Digital displays showing five decimal places do NOT guarantee high accuracy — an uncalibrated digital balance reading 52.438 g for a 50.000 g mass has high resolution, high precision, and terrible accuracy!",
  ],
  activities: [
    {
      title: "Ruler-Drop Reaction Time & Anomaly Lab",
      emoji: "📏",
      materials: [
        "1 × 30 cm ruler (resolution 1 mm)",
        "A partner and a notepad for a results table",
      ],
      steps: [
        "Hold the ruler vertically so the 0 cm mark sits exactly between your partner's open thumb and forefinger.",
        "Drop the ruler without warning and record the centimetre mark where they catch it (to 1 decimal place, e.g. 14.5 cm).",
        "Take 5 repeat trials, deliberately creating 1 distraction trial (e.g. talking) to see how an anomaly looks in raw data.",
        "Circle the anomaly, exclude it, calculate the concordant mean and ± uncertainty (half the range), then swap roles and compare reproducibility.",
      ],
      maths: "Converting catch distance d (in m) to reaction time uses t = √(2d ÷ 9.8). A 15 cm drop equals roughly 0.17 s — showing why hand-timing short falls creates huge random percentage error!",
    },
    {
      title: "Paper Helicopter Fair-Test Design Challenge",
      emoji: "🚁",
      materials: [
        "A4 scrap paper, scissors, ruler, 3 paperclips",
        "Phone stopwatch and a safe 2.0 m drop mark",
      ],
      steps: [
        "Cut a standard paper spinner (two rotor blades folded opposite ways, paperclip weighted at the base).",
        "Choose ONE independent variable: rotor blade length (e.g. 4, 6, 8, 10, 12 cm) while keeping drop height (2.0 m), paper type, and number of paperclips strictly constant.",
        "Drop each rotor length 3 times, record times in a properly headed table (units ONLY in headers), exclude any anomaly (e.g. hitting a chair), and calculate each mean.",
        "Plot a scatter graph of Mean Fall Time / s (y-axis) against Rotor Length / cm (x-axis) with a smooth line/curve of best fit and write a PEE conclusion.",
      ],
      maths: "Longer blades sweep out more air per rotation, increasing upward air resistance so the helicopter reaches a slower terminal velocity and a longer fall time — a classic continuous-IV curve of best fit.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Standard 2D Apparatus Symbol Sheet",
      caption: "Draw glassware cleanly in 2D with open rims, ruled sides, and zero shading.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reference sheet of six standard 2D scientific apparatus diagrams: beaker, conical flask, test tube, measuring cylinder, funnel, tripod and heat arrow">
  <rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Tanglin Lab 2D Apparatus Reference Sheet</text>
  <g transform="translate(22,48)">
    <path d="M 16 14 L 16 96 L 76 96 L 76 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <line x1="16" y1="62" x2="76" y2="62" stroke="var(--brand)" stroke-width="1.5"/>
    <text x="46" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Beaker</text>
    <text x="46" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Open top</text>
  </g>
  <g transform="translate(116,48)">
    <path d="M 36 14 L 36 36 L 12 96 L 80 96 L 56 36 L 56 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <line x1="20" y1="74" x2="72" y2="74" stroke="var(--brand)" stroke-width="1.5"/>
    <text x="46" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Conical Flask</text>
    <text x="46" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Straight ruled sides</text>
  </g>
  <g transform="translate(212,48)">
    <path d="M 34 14 L 34 84 A 12 12 0 0 0 58 84 L 58 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <line x1="34" y1="58" x2="58" y2="58" stroke="var(--brand)" stroke-width="1.5"/>
    <text x="46" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Test Tube</text>
    <text x="46" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Rounded base</text>
  </g>
  <g transform="translate(302,48)">
    <path d="M 16 18 L 40 54 L 40 94 M 76 18 L 52 54 L 52 94" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <text x="46" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Filter Funnel</text>
    <text x="46" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Open stem</text>
  </g>
  <g transform="translate(392,48)">
    <line x1="10" y1="42" x2="82" y2="42" stroke="var(--ink)" stroke-width="2"/>
    <line x1="18" y1="42" x2="10" y2="96" stroke="var(--ink)" stroke-width="2"/>
    <line x1="74" y1="42" x2="82" y2="96" stroke="var(--ink)" stroke-width="2"/>
    <line x1="12" y1="36" x2="80" y2="36" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
    <line x1="46" y1="94" x2="46" y2="60" stroke="var(--bad)" stroke-width="2.2"/>
    <polygon points="46,52 40,63 52,63" fill="var(--bad)"/>
    <text x="46" y="106" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">HEAT</text>
    <text x="46" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Tripod &amp; Gauze</text>
    <text x="46" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">HEAT arrow only</text>
  </g>
  <g transform="translate(486,48)">
    <path d="M 22 14 L 22 96 L 44 96 L 44 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <line x1="14" y1="96" x2="52" y2="96" stroke="var(--ink)" stroke-width="2"/>
    <line x1="22" y1="32" x2="31" y2="32" stroke="var(--ink-2)" stroke-width="1.2"/>
    <line x1="22" y1="50" x2="31" y2="50" stroke="var(--ink-2)" stroke-width="1.2"/>
    <line x1="22" y1="68" x2="31" y2="68" stroke="var(--ink-2)" stroke-width="1.2"/>
    <text x="33" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Cylinder</text>
    <text x="33" y="137" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Scale ticks</text>
  </g>
  <text x="280" y="206" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Always use a sharp pencil, ruler, and straight horizontal label lines with NO arrowheads.</text>
</svg>`,
    },
    {
      title: "Four Scientific Graph Patterns at a Glance",
      caption: "Recognise directly proportional, linear offset, negative correlation, and levelling-off curves instantly.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four mini graphs comparing directly proportional, linear non-proportional, negative correlation, and limiting-factor curve">
  <rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Reading Graph Shapes Like a Scientist</text>

  <g transform="translate(22,44)">
    <rect x="0" y="0" width="120" height="156" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <line x1="22" y1="108" x2="106" y2="108" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="108" x2="22" y2="22" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="108" x2="102" y2="28" stroke="var(--good)" stroke-width="2.4"/>
    <circle cx="22" cy="108" r="3" fill="var(--good)"/>
    <text x="60" y="129" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Directly Prop.</text>
    <text x="60" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Straight through (0,0)</text>
  </g>

  <g transform="translate(154,44)">
    <rect x="0" y="0" width="120" height="156" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <line x1="22" y1="108" x2="106" y2="108" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="108" x2="22" y2="22" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="84" x2="102" y2="26" stroke="var(--brand)" stroke-width="2.4"/>
    <text x="60" y="129" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Linear Offset</text>
    <text x="60" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Misses (0,0): NOT prop.</text>
  </g>

  <g transform="translate(286,44)">
    <rect x="0" y="0" width="120" height="156" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <line x1="22" y1="108" x2="106" y2="108" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="108" x2="22" y2="22" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="24" y1="30" x2="102" y2="96" stroke="var(--bad)" stroke-width="2.4"/>
    <text x="60" y="129" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Negative Trend</text>
    <text x="60" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">As IV rises, DV falls</text>
  </g>

  <g transform="translate(418,44)">
    <rect x="0" y="0" width="120" height="156" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <line x1="22" y1="108" x2="106" y2="108" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="108" x2="22" y2="22" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M 22 108 Q 42 42 102 42" fill="none" stroke="var(--ink)" stroke-width="2.4"/>
    <text x="60" y="129" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Levels Off</text>
    <text x="60" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Smooth curve + plateau</text>
  </g>
</svg>`,
    },
  ],
  history: {
    title: "The $125 Million Unit Mistake: Mars Climate Orbiter (1999)",
    story: "In September 1999, NASA's Mars Climate Orbiter reached Mars after a 9-month voyage — and burned up in the Martian atmosphere instead of entering orbit. The investigation uncovered a classic systematic unit error: spacecraft software written by Lockheed Martin output thruster impulse in imperial pound-force seconds, while NASA's navigation software assumed SI newton-seconds (a factor of 4.45 difference!). Every single course-correction calculation was systematically shifted in one direction, sending the probe 100 km too low. Today, strict unit labelling in headers and independent verification checks are mandatory on every mission — and in every Tanglin lab notebook.",
  },
};
