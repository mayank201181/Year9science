import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "making-and-purifying",
  title: "Making Salts & Purifying Substances",
  strand: "Chemistry",
  icon: "🧂",
  summary:
    "Prepare pure dry salt crystals from acids, distinguish pure substances from formulations, separate mixtures by distillation and chromatography, and identify gases with chemical tests.",
  intro:
    "Every crisp blue copper sulfate crystal, every dose of medicine, and every drop of purified drinking water relies on two core chemical skills: **making** the exact substance you want and **purifying** it so nothing unwanted remains. In this topic you will master the equations and practical steps for making soluble salts, learn how chemists test purity and design formulations, separate mixtures using distillation and paper chromatography ({{R_f}} values), and identify four common laboratory gases with unmistakable chemical tests.",
  guide: [
    // =========================================================================
    // SECTION 1: making-soluble-salts
    // =========================================================================
    {
      id: "making-soluble-salts",
      heading: "Making Soluble Salts from Acids",
      discovery: {
        problem:
          "You want to make pure, dry blue crystals of **copper(II) sulfate** by reacting warm dilute sulfuric acid with insoluble black copper(II) oxide powder. If you guess the mass of powder and add slightly too little, leftover sulfuric acid stays mixed into your solution — and ruins the crystals when you evaporate it! How can you guarantee that **100% of the acid** is used up, yet **none** of the black powder ends up in your final crystals?",
        idea: "Add the insoluble copper(II) oxide **in excess** (keep adding spatula by spatula while warming and stirring until unreacted black solid stays at the bottom). Because all the acid has reacted, the excess solid simply sits undissolved and can be removed cleanly by **filtration** — leaving a pure aqueous solution of copper(II) sulfate ready for crystallisation!",
      },
      body: `A **salt** is an ionic compound formed when the hydrogen ions ({{H^+}}) of an acid are replaced by metal ions (or ammonium ions). You can make soluble salts by reacting an acid with a metal, an insoluble metal oxide/hydroxide (a **base**), or a metal carbonate.

### 1. The Three General Word Equations
- **Acid + Metal oxide → Salt + Water**  *(neutralisation; no gas)*
- **Acid + Metal hydroxide → Salt + Water**  *(neutralisation; no gas)*
- **Acid + Metal carbonate → Salt + Water + Carbon dioxide**  *(effervescence / fizzing)*
- **Acid + Metal → Salt + Hydrogen**  *(effervescence; only works for metals more reactive than hydrogen, e.g. Mg, Zn, Fe — NOT copper, silver or gold, and NOT dangerously reactive Na or K!)*

### 2. Naming the Salt
Every salt has a two-part name: the **metal** comes first (from the base, carbonate, or metal), and the **ending** comes from the acid:

| Acid used | Acid formula | Salt name ending | Example with zinc oxide |
|---|---|---|---|
| Hydrochloric acid | HCl | **chloride** | Zinc chloride |
| Sulfuric acid | H₂SO₄ | **sulfate** | Zinc sulfate |
| Nitric acid | HNO₃ | **nitrate** | Zinc nitrate |

### 3. Preparing Pure, Dry Crystals (Excess Insoluble Base Method)
To prepare a soluble salt such as copper(II) sulfate from dilute sulfuric acid and insoluble copper(II) oxide:

1. **Warm the dilute acid gently** in a beaker using a Bunsen burner or water bath (do **not** boil) — warming increases particle kinetic energy so the reaction proceeds quickly.
2. **Add the insoluble base in excess**, a spatula at a time, stirring with a glass rod until **unreacted solid remains** at the bottom. This proves every drop of acid has been neutralised.
3. **Filter the mixture** through filter paper in a funnel into a conical flask. The unreacted solid stays in the filter paper as the **residue**; the pure salt solution passes through as the **filtrate**.
4. **Evaporate gently** in an evaporating basin over a boiling water bath (or gentle flame) until about half the water has evaporated and crystals begin to form around the edge (**crystallisation point** — tested by dipping a cool glass rod into the solution to see if tiny crystals form on the tip).
5. **Leave to cool slowly** so large, well-formed hydrated crystals grow as solubility drops. Filter off the remaining liquid and **pat the crystals dry** gently between sheets of filter paper (or dry in a warm oven).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step laboratory method for making pure dry copper sulfate crystals from sulfuric acid and excess copper oxide">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Making Pure Dry Soluble Salt Crystals (Excess Insoluble Base Method)</text>

  <!-- Step 1: React -->
  <rect x="14" y="36" width="122" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="75" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">1. Warm &amp; Excess</text>
  <!-- Beaker -->
  <path d="M44 96 L44 156 Q44 162 50 162 L100 162 Q106 162 106 156 L106 96" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="46" y="122" width="58" height="38" rx="3" fill="var(--info-soft)" stroke="none"/>
  <!-- Excess CuO dots -->
  <circle cx="58" cy="156" r="3" fill="var(--ink)"/>
  <circle cx="67" cy="157" r="3" fill="var(--ink)"/>
  <circle cx="77" cy="156" r="3" fill="var(--ink)"/>
  <circle cx="87" cy="157" r="3" fill="var(--ink)"/>
  <!-- Spatula pouring -->
  <line x1="88" y1="68" x2="72" y2="92" stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="72" cy="100" r="2" fill="var(--ink)"/>
  <circle cx="75" cy="108" r="2" fill="var(--ink)"/>
  <!-- Gentle heat wave -->
  <path d="M58 174 Q64 168 70 174 T82 174 T94 174" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="75" y="194" text-anchor="middle" font-size="10" fill="var(--ink)">Warm acid + excess</text>
  <text x="75" y="207" text-anchor="middle" font-size="10" fill="var(--ink)">CuO until solid</text>
  <text x="75" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">remains at bottom</text>

  <!-- Arrow 1->2 -->
  <path d="M138 134 L150 134" stroke="var(--brand)" stroke-width="2"/>
  <polygon points="150,130 156,134 150,138" fill="var(--brand)"/>

  <!-- Step 2: Filter -->
  <rect x="156" y="36" width="122" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="217" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">2. Filter Mixture</text>
  <!-- Funnel -->
  <polygon points="191,74 243,74 221,108 221,126 213,126 213,108" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
  <!-- Residue in funnel -->
  <path d="M207 95 L227 95 L217 107 Z" fill="var(--ink)"/>
  <!-- Drip -->
  <circle cx="217" cy="133" r="2.2" fill="var(--info)"/>
  <!-- Conical flask -->
  <path d="M209 124 L209 138 L191 168 Q189 172 194 172 L240 172 Q245 172 243 168 L225 138 L225 124" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M196 158 L238 158 L242 170 L192 170 Z" fill="var(--info-soft)"/>
  <text x="217" y="194" text-anchor="middle" font-size="10" fill="var(--ink)">Residue: excess CuO</text>
  <text x="217" y="207" text-anchor="middle" font-size="10" fill="var(--ink)">Filtrate: pure blue</text>
  <text x="217" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">salt solution</text>

  <!-- Arrow 2->3 -->
  <path d="M280 134 L292 134" stroke="var(--brand)" stroke-width="2"/>
  <polygon points="292,130 298,134 292,138" fill="var(--brand)"/>

  <!-- Step 3: Evaporate -->
  <rect x="298" y="36" width="122" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="359" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">3. Evaporate Gently</text>
  <!-- Steam lines -->
  <path d="M342 96 Q346 88 342 80" fill="none" stroke="var(--ink-2)" stroke-width="1.5"/>
  <path d="M359 94 Q363 86 359 78" fill="none" stroke="var(--ink-2)" stroke-width="1.5"/>
  <path d="M376 96 Q380 88 376 80" fill="none" stroke="var(--ink-2)" stroke-width="1.5"/>
  <!-- Evaporating dish -->
  <path d="M327 104 Q327 128 359 128 Q391 128 391 104 Z" fill="var(--info-soft)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Water bath beaker -->
  <path d="M332 128 L332 162 L386 162 L386 128" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <rect x="334" y="142" width="50" height="18" fill="var(--brand-soft)"/>
  <path d="M342 173 Q348 168 354 173 T366 173 T378 173" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="359" y="194" text-anchor="middle" font-size="10" fill="var(--ink)">Heat over water bath</text>
  <text x="359" y="207" text-anchor="middle" font-size="10" fill="var(--ink)">to crystallisation</text>
  <text x="359" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">point (do NOT boil dry)</text>

  <!-- Arrow 3->4 -->
  <path d="M422 134 L434 134" stroke="var(--brand)" stroke-width="2"/>
  <polygon points="434,130 440,134 434,138" fill="var(--brand)"/>

  <!-- Step 4: Cool & Dry -->
  <rect x="440" y="36" width="106" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="493" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">4. Cool &amp; Dry</text>
  <!-- Dish with crystals -->
  <ellipse cx="493" cy="136" rx="36" ry="12" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
  <!-- Diamond crystals -->
  <polygon points="476,126 483,118 490,126 483,134" fill="var(--info)" stroke="var(--ink)" stroke-width="1.2"/>
  <polygon points="494,122 503,112 512,122 503,132" fill="var(--info)" stroke="var(--ink)" stroke-width="1.2"/>
  <polygon points="484,135 492,128 500,135 492,142" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.2"/>
  <text x="493" y="194" text-anchor="middle" font-size="10" fill="var(--ink)">Cool slowly so</text>
  <text x="493" y="207" text-anchor="middle" font-size="10" fill="var(--ink)">crystals grow; pat</text>
  <text x="493" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">dry on filter paper</text>
</svg>`,
      diagramCaption:
        "The four stages of making a pure, dry soluble salt from an acid and an insoluble base: react with excess solid, filter, gently evaporate to crystallisation point, then cool and dry.",
      whyItWorks:
        "Adding excess insoluble base solves a stoichiometric problem without needing exact weighing: any base left over does not dissolve in water, so filtration removes it completely. Gentle evaporation removes just enough water to saturate the hot solution; because salts are much less soluble in cold water than hot water, cooling forces pure salt ions to arrange neatly into crystals while keeping their water of crystallisation intact.",
      keyPoints: [
        "Hydrochloric acid forms chlorides, sulfuric acid forms sulfates, and nitric acid forms nitrates.",
        "Acid + metal oxide/hydroxide → salt + water; Acid + metal carbonate → salt + water + CO₂; Acid + metal → salt + H₂.",
        "The insoluble base or carbonate MUST be added in excess so that all the acid reacts completely.",
        "Filter off the excess solid (residue), evaporate the filtrate gently to crystallisation point, cool slowly, and pat crystals dry between filter paper.",
      ],
      strategies: [
        "Name-building split: grab the metal from the base/carbonate/metal first, then convert the acid name (hydrochloric → chloride, sulfuric → sulfate, nitric → nitrate).",
        "Check metal reactivity before choosing reactants: unreactive copper will NOT react with dilute acid, so always pick copper(II) oxide or copper(II) carbonate instead.",
        "Spot the 'why' for every practical step: warm = faster reaction; excess = use up all acid; filter = remove excess solid; cool slowly = grow large crystals.",
      ],
      thinkDeeper:
        "Why can you NOT use the 'add excess solid and filter' method to make sodium chloride from hydrochloric acid and sodium hydroxide? Both sodium hydroxide and sodium chloride are soluble in water — so excess sodium hydroxide would dissolve and pass straight through the filter paper! Chemists instead use a **titration** with an indicator to mix exact neutralising volumes.",
      workedExamples: [
        {
          title: "Writing Salt Equations & Choosing Reactants",
          problem:
            "A student needs to prepare pure crystals of **copper(II) nitrate**. Suggest a suitable acid and an insoluble solid reactant, then write the word equation for the reaction.",
          steps: [
            "Look at the salt ending: **nitrate** comes from **nitric acid**.",
            "Look at the metal: **copper**. Copper is below hydrogen in the reactivity series, so copper metal will NOT react with dilute nitric acid to give hydrogen.",
            "Choose an insoluble copper compound instead: **copper(II) oxide** (black powder) or **copper(II) carbonate** (green powder).",
            "Write the word equation using copper(II) oxide: acid + metal oxide → salt + water.",
          ],
          answer:
            "Nitric acid + copper(II) oxide → copper(II) nitrate + water (or nitric acid + copper(II) carbonate → copper(II) nitrate + water + carbon dioxide).",
          yourTurn: {
            question:
              "Name the salt formed when dilute nitric acid reacts with insoluble zinc oxide.",
            answer: {
              type: "text",
              accept: ["zinc nitrate"],
              display: "zinc nitrate",
            },
            solution:
              "The metal is zinc and nitric acid always forms a nitrate salt, so the salt is **zinc nitrate** (with water as the other product).",
          },
        },
        {
          title: "Diagnosing a Flawed Salt Preparation",
          problem:
            "Jayden reacts dilute sulfuric acid with excess magnesium carbonate, filters the mixture, and then heats the blue-clear filtrate fiercely on a roaring Bunsen flame until all the water boils away completely. Explain two problems with boiling the solution completely to dryness.",
          steps: [
            "Check what happens when a salt solution is heated fiercely to complete dryness: hydrated salt crystals lose their water of crystallisation and turn into a dull, anhydrous powder (and some salts thermally decompose).",
            "Check the safety hazard: as the last liquid evaporates rapidly, hot concentrated salt spits out of the evaporating basin.",
            "State the correct technique: evaporate gently over a water bath until the crystallisation point, then turn off the heat and leave to cool slowly.",
          ],
          answer:
            "1. Heating fiercely to dryness causes spitting (safety hazard) and produces fine anhydrous powder instead of hydrated crystals (or decomposes the salt). 2. Instead, evaporate gently to crystallisation point and cool slowly.",
          yourTurn: {
            question:
              "In the insoluble base method, what separation technique removes the unreacted excess solid from the salt solution?",
            answer: {
              type: "text",
              accept: ["filtration", "filtering"],
              display: "filtration",
            },
            solution:
              "**Filtration** traps the insoluble unreacted excess solid as the residue in the filter paper while allowing the soluble salt solution (filtrate) to pass through.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: purity-formulations
    // =========================================================================
    {
      id: "purity-formulations",
      heading: "Pure Substances, Mixtures & Formulations",
      discovery: {
        problem:
          "A carton on a supermarket shelf proudly states **'100% Pure Orange Juice — Nothing Added!'** Meanwhile, a chemist in a lab insists the juice is definitely **NOT** pure. Who is right, and how could you prove whether a clear colourless liquid in a flask is truly pure water?",
        idea: "In everyday speech, 'pure' means natural or unadulterated. In chemistry, a **pure substance** contains only a **single element or a single compound** — orange juice is a mixture of water, sugars, citric acid, and vitamins! To prove the clear liquid is pure water, measure its **boiling point** (exactly 100 °C at 1 atm) and **melting point** (exactly 0 °C): pure substances melt and boil at a **single sharp, fixed temperature**.",
      },
      body: `### 1. Pure Substances vs Mixtures
- A **chemically pure substance** consists of **only one element** (e.g. pure gold, oxygen gas) or **only one compound** (e.g. pure distilled water, pure sodium chloride), not mixed with any other substance.
- A **mixture** contains two or more elements or compounds **not chemically bonded together**, which can be separated by physical methods.

### 2. Testing Purity with Melting and Boiling Points
Chemists check purity by measuring melting and boiling points:

| Property | Pure substance | Impure substance (mixture) |
|---|---|---|
| **Melting point** | Sharp, fixed temperature (e.g. ice melts at exactly **0 °C**) | **Lowered** and melts over a **range** of temperatures (e.g. −4 °C to −1 °C) |
| **Boiling point** | Sharp, fixed temperature (e.g. water boils at exactly **100 °C**) | **Raised** and boils over a **range** of temperatures (e.g. 101 °C to 104 °C) |
| **Heating curve** | Flat horizontal plateau during change of state | Sloped, uneven region during change of state |

### 3. Formulations: Useful Mixtures by Design
Not every mixture is accidental contamination! A **formulation** is a **mixture that has been designed as a useful product**. Every chemical in a formulation is added in a **carefully measured quantity** so the final product has exact, reliable properties.

Examples of everyday formulations:
- **Medicines (tablets):** active drug (treats symptoms) + filler/binder (gives tablet bulk and shape) + coating (masks bitter taste and controls release).
- **Paints:** **pigment** (gives colour) + **binder/resin** (forms a dry film that sticks to the wall) + **solvent** (thins the paint so it spreads easily, then evaporates) + **additives** (prevent mould or speed drying).
- **Alloys** (e.g. steel, bronze, brass), **fuels**, **cleaning agents**, **cosmetics**, and **NPK fertilisers**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heating curves comparing a pure substance with a sharp horizontal melting plateau against an impure mixture with a lower sloped melting range, alongside a paint formulation breakdown">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="178" y="22" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Heating Curves: Pure vs Impure</text>
  <text x="445" y="22" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Paint Formulation</text>

  <!-- Left panel: Graph -->
  <rect x="16" y="34" width="322" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Axes -->
  <line x1="56" y1="202" x2="322" y2="202" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="56" y1="202" x2="56" y2="48" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="190" y="224" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)">Time heated →</text>
  <text x="34" y="130" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)" transform="rotate(-90 34 130)">Temp (°C)</text>

  <!-- Fixed mp dashed reference -->
  <line x1="56" y1="112" x2="318" y2="112" stroke="var(--line)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="52" y="115" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--brand)">m.p.</text>

  <!-- Pure curve (green/brand): sharp horizontal plateau -->
  <polyline points="62,190 120,112 222,112 296,58" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="172" y="102" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Pure: flat, sharp m.p.</text>

  <!-- Impure curve (orange/bad): lower & sloped range -->
  <polyline points="62,194 114,154 226,126 306,74" fill="none" stroke="var(--bad)" stroke-width="2.8" stroke-dasharray="6 3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="200" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Impure: lower &amp; sloped</text>
  <text x="200" y="181" text-anchor="middle" font-size="9.5" fill="var(--bad)">(melts over a range)</text>

  <!-- Right panel: Formulation bar breakdown -->
  <rect x="352" y="34" width="192" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="448" y="54" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Measured Mixture by Mass</text>

  <!-- Stacked vertical/horizontal bars -->
  <rect x="368" y="68" width="160" height="28" rx="6" fill="var(--brand)" opacity="0.9"/>
  <text x="448" y="86" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">Solvent (45%) — spreads</text>

  <rect x="368" y="104" width="160" height="28" rx="6" fill="var(--info)" opacity="0.9"/>
  <text x="448" y="122" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">Binder (30%) — holds film</text>

  <rect x="368" y="140" width="160" height="28" rx="6" fill="var(--bad)" opacity="0.9"/>
  <text x="448" y="158" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">Pigment (20%) — colour</text>

  <rect x="368" y="176" width="160" height="24" rx="6" fill="var(--accent)" opacity="0.95"/>
  <text x="448" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="#171a2f">Additives (5%) — anti-mould</text>

  <text x="448" y="220" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Exact ratios → reliable product</text>
</svg>`,
      diagramCaption:
        "Left: A pure substance melts at a fixed sharp temperature (flat plateau), whereas impurities lower and broaden the melting range. Right: Paint is a formulation whose components each perform a specific role.",
      whyItWorks:
        "In a pure solid, particles pack in a uniform, repeating crystal lattice where every bond breaks at the exact same thermal energy — creating a sharp melting point. Impurity particles disrupt that neat packing, weakening forces in some places so the solid begins melting earlier and over a spread of temperatures. When boiling, dissolved non-volatile impurity particles sit at the liquid surface and obstruct solvent molecules escaping into the gas phase, raising the boiling point.",
      keyPoints: [
        "Scientifically, a pure substance is a single element or a single compound, not mixed with anything else.",
        "Pure substances have sharp, exact melting and boiling points (flat plateau on a heating curve).",
        "Impurities LOWER the melting point, RAISE the boiling point, and cause both changes of state to happen over a range of temperatures.",
        "A formulation is a carefully designed mixture with measured proportions of components, each giving a specific useful property (e.g. medicines, paints, alloys, fuels).",
      ],
      strategies: [
        "Always check BOTH criteria when evaluating melting/boiling data: (1) is it a single fixed value (range = 0 °C)? (2) does that value match the data-book value for the target substance?",
        "Remember the twin shift rule: impurities push the liquid window WIDER — melting point goes DOWN, boiling point goes UP.",
        "When explaining a formulation in an exam, include two parts: 'designed mixture' + 'measured quantities for a specific function'.",
      ],
      thinkDeeper:
        "Why do road crews in cold countries spread rock salt (sodium chloride) over roads before an icy night, even though the air temperature might fall to −5 °C? Salt dissolves in the thin film of surface water, forming an impure saltwater mixture whose freezing/melting point drops well below 0 °C (down to around −10 °C or lower), preventing hazardous sheet ice from forming!",
      workedExamples: [
        {
          title: "Evaluating Purity from Melting-Point Data",
          problem:
            "Pure paracetamol has a melting point of **169 °C**. Three laboratory samples are tested:\n- Sample A melts from 162 °C to 167 °C.\n- Sample B melts sharply at 169 °C.\n- Sample C melts sharply at 136 °C.\nClassify each sample as pure paracetamol, impure paracetamol, or a different pure substance.",
          steps: [
            "Check Sample B: melts at a single fixed temperature (169 °C) matching pure paracetamol → **pure paracetamol**.",
            "Check Sample A: melts below 169 °C and over a 5 °C range (162–167 °C) → **impure paracetamol** (impurities lower and broaden the melting point).",
            "Check Sample C: melts sharply at a single fixed temperature (136 °C), so it IS a pure substance — just NOT paracetamol (136 °C is actually pure aspirin!).",
          ],
          answer:
            "Sample A = impure paracetamol; Sample B = pure paracetamol; Sample C = a different pure substance.",
          yourTurn: {
            question:
              "An impure wax sample starts melting at 52 °C and finishes melting at 59 °C. What is the width of its melting range (in °C)?",
            answer: { type: "number", value: 7, display: "7 °C" },
            solution:
              "Melting range = {{59 - 52 = 7}} °C. Because it melts over a 7 °C range instead of one sharp temperature, the wax is a mixture.",
          },
        },
        {
          title: "Formulation Composition by Mass",
          problem:
            "A 400 mg cold-relief tablet contains 300 mg of active paracetamol, 80 mg of starch binder, and 20 mg of magnesium stearate lubricant. Calculate the percentage by mass of the active ingredient.",
          steps: [
            "Check the total mass of the formulation: {{300 + 80 + 20 = 400}} mg.",
            "Divide the mass of active ingredient by the total mass and multiply by 100: {{(300 / 400) * 100 = 75}}%.",
          ],
          answer: "75% active ingredient by mass.",
          yourTurn: {
            question:
              "A 500 mg tablet contains 125 mg of active ibuprofen. What percentage by mass of the tablet is active ibuprofen?",
            answer: { type: "number", value: 25, display: "25%" },
            solution:
              "{{(125 / 500) * 100 = 25}}%. The remaining 75% consists of carefully measured fillers, binders, and coating.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: distillation-chromatography
    // =========================================================================
    {
      id: "distillation-chromatography",
      heading: "Distillation & Paper Chromatography (Rf Values)",
      discovery: {
        problem:
          "You accidentally spill ethanol (boiling point **78 °C**) into a beaker of water (boiling point **100 °C**). The two liquids mix completely into a single clear liquid, so filtration and a separating funnel are useless. How can you separate pure ethanol back out — and why is a simple distillation flask alone not quite sharp enough?",
        idea: "Because ethanol and water have **different boiling points**, you use **fractional distillation**! Heating the mixture vapourises both liquids slightly, but passing the vapour up a tall glass-bead **fractionating column** lets the higher-boiling water vapour condense back into the flask while the lower-boiling ethanol vapour reaches the top at 78 °C and enters the cold condenser first.",
      },
      body: `### 1. Simple Distillation vs Fractional Distillation
- **Simple distillation** separates a **pure liquid solvent from a solution** (e.g. pure water from salty seawater or ink). The solution is heated until the solvent boils; vapour rises into a **Liebig condenser** cooled by circulating cold water (**cold water enters at the bottom and leaves at the top** so the jacket stays completely full and gives counter-current cooling), condenses back to liquid, and drips into the receiving flask as the **distillate**.
- **Fractional distillation** separates a mixture of **two or more miscible liquids** with different (often close) boiling points (e.g. ethanol 78 °C and water 100 °C). A **fractionating column** packed with glass beads provides a large surface area and a temperature gradient (hot at the bottom, cooler at the top): the liquid with the **lowest boiling point** reaches the thermometer bulb and distils over first.

### 2. Paper Chromatography
Chromatography separates dissolved coloured (or invisible, later stained) substances such as inks or food dyes based on differences in **solubility** and **attraction to the paper**:
- **Stationary phase:** the chromatography paper (technically, water molecules trapped in its cellulose fibres) — does not move.
- **Mobile phase:** the solvent (e.g. water or ethanol) that moves upwards through the paper carrying dissolved dyes.
- **More soluble** substances (and those less strongly attracted to the stationary phase) travel **further up** the paper.

**Essential practical rules:**
1. Draw the **baseline in pencil** (near the bottom) — graphite is insoluble in the solvent, whereas pen ink would dissolve, run up the paper, and contaminate the chromatogram.
2. Keep the **solvent level BELOW the pencil baseline** — if submerged, the ink spots wash straight down into the beaker instead of rising up the paper.
3. Put a **lid** on the beaker (especially with volatile solvents like ethanol) to stop solvent evaporating from the paper surface.
4. Remove the paper **before** the solvent reaches the very top edge and immediately mark the **solvent front** in pencil.

### 3. Reading Chromatograms & Calculating {{R_f}} Values
- A **pure substance** produces **only one spot** (in that solvent); a **mixture** separates into **two or more spots**.
- Spots that rise to the **same height** in the same solvent (same {{R_f}} value) are likely to be the **same substance**.

The **retention factor ({{R_f}})** is the ratio of how far the spot travelled compared with the solvent front (both measured from the pencil baseline):

{{R_f = "distance moved by spot" / "distance moved by solvent"}}

- {{R_f}} is always a decimal **between 0 and 1** (a spot can never outrun the solvent carrying it!).
- {{R_f}} has **no units** (centimetres cancel out).
- Changing the solvent or temperature changes the {{R_f}} value of a substance.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Simple distillation apparatus showing flask, thermometer, Liebig condenser with water entering at the bottom and leaving at the top, and distillate flask. Right: Paper chromatogram showing pencil baseline, solvent front, pure spot A, mixture B with two spots, and Rf distances.">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="155" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Simple Distillation</text>
  <text x="430" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Paper Chromatography &amp; Rf</text>

  <!-- LEFT: Simple Distillation -->
  <rect x="12" y="30" width="292" height="208" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Round bottom flask -->
  <circle cx="72" cy="166" r="28" fill="var(--info-soft)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="65" y="96" width="14" height="44" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Thermometer -->
  <line x1="72" y1="62" x2="72" y2="112" stroke="var(--bad)" stroke-width="2.5"/>
  <circle cx="72" cy="113" r="3.5" fill="var(--bad)"/>
  <text x="72" y="54" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">Thermometer</text>
  <!-- Heat underneath -->
  <path d="M56 208 Q64 200 72 208 T88 208" fill="none" stroke="var(--bad)" stroke-width="2"/>
  <text x="72" y="224" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Heat mixture</text>
  <!-- Side arm & Liebig condenser -->
  <line x1="79" y1="110" x2="236" y2="148" stroke="var(--ink)" stroke-width="3"/>
  <!-- Water jacket -->
  <polygon points="108,108 214,134 209,151 103,125" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6" opacity="0.85"/>
  <!-- Water IN (bottom) & OUT (top) -->
  <line x1="196" y1="149" x2="196" y2="174" stroke="var(--info)" stroke-width="2"/>
  <polygon points="192,155 196,147 200,155" fill="var(--info)"/>
  <text x="196" y="186" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">Cold H₂O IN</text>
  <line x1="126" y1="112" x2="126" y2="84" stroke="var(--info)" stroke-width="2"/>
  <polygon points="122,90 126,82 130,90" fill="var(--info)"/>
  <text x="150" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">Warm H₂O OUT</text>
  <!-- Receiving beaker -->
  <path d="M232 162 L232 206 L282 206 L282 162" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="234" y="186" width="46" height="18" fill="var(--info-soft)"/>
  <circle cx="242" cy="160" r="2.2" fill="var(--info)"/>
  <text x="257" y="224" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Distillate</text>

  <!-- RIGHT: Chromatography -->
  <rect x="316" y="30" width="232" height="208" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Paper strip -->
  <rect x="358" y="46" width="114" height="162" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
  <!-- Solvent level at bottom (below baseline) -->
  <rect x="360" y="191" width="110" height="15" fill="var(--info-soft)"/>
  <text x="415" y="224" text-anchor="middle" font-size="9.5" fill="var(--info)">Solvent below baseline</text>
  <!-- Pencil baseline -->
  <line x1="358" y1="180" x2="472" y2="180" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="3 2"/>
  <text x="352" y="183" text-anchor="end" font-size="9" fill="var(--ink-2)">Pencil</text>
  <!-- Solvent front -->
  <line x1="358" y1="68" x2="472" y2="68" stroke="var(--info)" stroke-width="1.6" stroke-dasharray="4 3"/>
  <text x="478" y="71" font-size="9" font-weight="700" fill="var(--info)">Solvent front</text>

  <!-- Spot A (pure, 1 spot) -->
  <circle cx="390" cy="180" r="2.5" fill="var(--ink-2)"/>
  <circle cx="390" cy="116" r="6" fill="var(--brand)"/>
  <text x="390" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">A</text>

  <!-- Spot B (mixture, 2 spots) -->
  <circle cx="440" cy="180" r="2.5" fill="var(--ink-2)"/>
  <circle cx="440" cy="144" r="6" fill="var(--bad)"/>
  <circle cx="440" cy="96" r="6" fill="var(--accent)"/>
  <text x="440" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">B</text>

  <!-- Measurement arrows -->
  <line x1="340" y1="180" x2="340" y2="68" stroke="var(--info)" stroke-width="1.4"/>
  <text x="336" y="126" text-anchor="end" font-size="9" font-weight="700" fill="var(--info)">d_sol</text>

  <line x1="484" y1="180" x2="484" y2="116" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="490" y="152" font-size="9" font-weight="700" fill="var(--brand)">d_spot</text>
  <text x="512" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Rf = d_spot/d_sol</text>
</svg>`,
      diagramCaption:
        "Left: Simple distillation condenses vapour using a water-cooled Liebig condenser (water IN at the bottom). Right: Paper chromatography separates ink A (pure, 1 spot) and ink B (mixture, 2 spots) above a pencil baseline.",
      whyItWorks:
        "Every substance in chromatography constantly partitions between sticking to the stationary phase and dissolving in the moving solvent. Because the balance between those two attractions is a fixed ratio at a given temperature, a dye moves at a constant fraction of the solvent's speed — so doubling the run time doubles both distances, leaving {{R_f}} unchanged!",
      keyPoints: [
        "Simple distillation recovers a solvent from a solution; fractional distillation separates miscible liquids with different boiling points (lowest boiling point distils first).",
        "In a Liebig condenser, cold water enters at the BOTTOM and leaves at the TOP to keep the cooling jacket full.",
        "Draw the chromatography baseline in PENCIL (insoluble) and keep the solvent level BELOW the pencil line.",
        "{{R_f = " + '"distance moved by spot" / "distance moved by solvent"' + "}} — always between 0 and 1, with NO units.",
      ],
      strategies: [
        "Always measure both distances from the PENCIL BASELINE (not the bottom edge of the paper) to the CENTRE of the spot.",
        "Quick sanity check on every {{R_f}} calculation: if your answer is bigger than 1, you divided upside down!",
        "When distinguishing distillation methods, ask: 'Am I separating a liquid from a dissolved solid (simple) or two mixed liquids with close boiling points (fractional)?'",
      ],
      thinkDeeper:
        "A student runs a black food dye on a chromatogram using water as the solvent and sees **only one spot** at {{R_f = 0.40}}. Does this 100% prove the dye is pure? Not necessarily! Two different dyes might happen to have identical solubility in water. Repeating the chromatogram with a **different solvent** (such as ethanol) can reveal whether that single spot actually splits into two hidden components.",
      workedExamples: [
        {
          title: "Calculating and Applying an Rf Value",
          problem:
            "On a paper chromatogram, the solvent front moves **8.0 cm** above the pencil baseline, and a blue dye spot moves **3.6 cm** above the baseline.\n(a) Calculate the {{R_f}} value of the blue dye.\n(b) If the same dye is run again in the same solvent until the solvent front moves **12.0 cm**, how far will the blue spot travel?",
          steps: [
            "(a) Write the formula: {{R_f = " + '"distance moved by spot" / "distance moved by solvent"' + "}}.",
            "Substitute: {{R_f = 3.6 / 8.0 = 0.45}} (no units; check: {{0 < 0.45 < 1}} ✓).",
            "(b) Rearrange: distance moved by spot = {{R_f * 12.0 = 0.45 * 12.0 = 5.4}} cm.",
          ],
          answer: "(a) 0.45   (b) 5.4 cm",
          yourTurn: {
            question:
              "A green dye spot travels 4.2 cm from the pencil baseline while the solvent front travels 7.0 cm. Calculate the Rf value of the green dye.",
            answer: { type: "number", value: 0.6, display: "0.6" },
            solution:
              "{{R_f = 4.2 / 7.0 = 0.6}} (no units; between 0 and 1).",
          },
        },
        {
          title: "Choosing Simple vs Fractional Distillation",
          problem:
            "A flask contains a liquid mixture of **propanone** (boiling point 56 °C) and **water** (boiling point 100 °C). Name the separation method needed and state which liquid is collected in the receiving flask first.",
          steps: [
            "Both propanone and water are miscible liquids with different boiling points → use **fractional distillation**.",
            "Compare boiling points: 56 °C is lower than 100 °C.",
            "The liquid with the **lower boiling point** evaporates more easily, reaches the top of the fractionating column first, and condenses first.",
          ],
          answer:
            "Fractional distillation; **propanone** (b.p. 56 °C) is collected first.",
          yourTurn: {
            question:
              "A mixture of ethanol (boiling point 78 °C) and water (boiling point 100 °C) is separated by fractional distillation. Which liquid distils over first?",
            answer: {
              type: "text",
              accept: ["ethanol"],
              display: "ethanol",
            },
            solution:
              "**Ethanol** has the lower boiling point (78 °C < 100 °C), so it vapourises and reaches the top of the fractionating column first.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: chemical-gas-tests
    // =========================================================================
    {
      id: "chemical-gas-tests",
      heading: "Chemical Tests for Common Gases",
      discovery: {
        problem:
          "You react an unknown white powder with dilute hydrochloric acid and observe rapid fizzing. The escaping gas is completely colourless and odourless. Is it **hydrogen** (meaning the powder was a metal) or **carbon dioxide** (meaning the powder was a metal carbonate)? How can you tell in under ten seconds?",
        idea: "Every common lab gas has a signature chemical test! Bubble the gas through clear **limewater**: if it turns **milky/cloudy**, it is **carbon dioxide** (confirming a carbonate). Hold a **lit splint** at the mouth of a collected tube: if you hear a sharp **squeaky pop**, it is **hydrogen** (confirming a reactive metal).",
      },
      body: `Because most common gases are colourless, chemists rely on four rapid, reliable chemical tests. Memorise **both** the exact **test method** AND the exact **positive result**!

| Gas | Formula | Test Method | Positive Result | Why it happens |
|---|---|---|---|---|
| **Hydrogen** | H₂ | Hold a **lit (burning) splint** at the mouth of the test tube | Burns with a **squeaky pop** | Explosive combustion with air: {{2H_2 + O_2 -> 2H_2O}} |
| **Oxygen** | O₂ | Insert a **glowing splint** into the test tube | Glowing splint **relights** | High oxygen concentration rapidly accelerates combustion |
| **Carbon dioxide** | CO₂ | Bubble gas through **limewater** (aqueous calcium hydroxide) | Limewater turns **milky / cloudy white** | Forms insoluble white **calcium carbonate** precipitate ({{CaCO_3}}) |
| **Chlorine** | Cl₂ | Hold **damp blue litmus paper** in the gas | Turns **red**, then **bleaches white** | Dissolves in moisture to form acidic HCl (turns red) and bleaching HClO (bleaches white) |

### Watch Out for Classic Lab Confusions!
- **Lit splint vs Glowing splint:** Never mix these up! Hydrogen needs a **lit** (flaming) splint to ignite the gas; oxygen uses a **glowing** splint (flame blown out so only an orange ember remains) so you can clearly see it **relight**.
- **Damp litmus for chlorine:** The litmus paper **must be damp** so chlorine gas can dissolve in the water film to form the acids that turn it red and then bleach it white. Dry chlorine barely reacts with dry paper!
- **Safety with chlorine:** Chlorine is a pale green, **toxic** gas — always test it inside a **fume cupboard**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four chemical gas tests: hydrogen gives a squeaky pop with a lit splint, oxygen relights a glowing splint, carbon dioxide turns limewater milky, and chlorine turns damp blue litmus paper red then bleaches it white">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The Four Essential Chemical Gas Tests</text>

  <!-- Card 1: Hydrogen -->
  <rect x="14" y="36" width="126" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="77" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Hydrogen (H₂)</text>
  <!-- Test tube -->
  <path d="M62 84 L62 152 Q62 164 77 164 Q92 164 92 152 L92 84" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Lit splint -->
  <line x1="77" y1="62" x2="77" y2="90" stroke="var(--warn)" stroke-width="3"/>
  <path d="M77 90 Q71 98 77 106 Q83 98 77 90 Z" fill="var(--bad)"/>
  <!-- Pop starburst -->
  <text x="77" y="132" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">POP!</text>
  <text x="77" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Lit splint</text>
  <text x="77" y="201" text-anchor="middle" font-size="10" fill="var(--ink-2)">→ burns with a</text>
  <text x="77" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">squeaky pop</text>

  <!-- Card 2: Oxygen -->
  <rect x="150" y="36" width="126" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="213" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Oxygen (O₂)</text>
  <!-- Test tube -->
  <path d="M198 84 L198 152 Q198 164 213 164 Q228 164 228 152 L228 84" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Glowing splint relighting -->
  <line x1="213" y1="64" x2="213" y2="112" stroke="var(--warn)" stroke-width="3"/>
  <path d="M213 110 Q204 124 213 136 Q222 124 213 110 Z" fill="var(--accent)"/>
  <path d="M213 116 Q209 124 213 130 Q217 124 213 116 Z" fill="var(--bad)"/>
  <text x="213" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Glowing splint</text>
  <text x="213" y="201" text-anchor="middle" font-size="10" fill="var(--ink-2)">→ bursts into flame</text>
  <text x="213" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">(relights)</text>

  <!-- Card 3: Carbon Dioxide -->
  <rect x="286" y="36" width="126" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="349" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">Carbon Dioxide</text>
  <!-- Test tube with cloudy limewater -->
  <path d="M334 84 L334 152 Q334 164 349 164 Q364 164 364 152 L364 84" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <path d="M336 122 L362 122 L362 152 Q362 162 349 162 Q336 162 336 152 Z" fill="var(--line)"/>
  <!-- Delivery tube + bubbles -->
  <path d="M318 76 L346 76 L346 146" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="348" cy="140" r="2.5" fill="var(--surface)"/>
  <circle cx="353" cy="132" r="2.5" fill="var(--surface)"/>
  <circle cx="344" cy="128" r="2" fill="var(--surface)"/>
  <text x="349" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Bubble in limewater</text>
  <text x="349" y="201" text-anchor="middle" font-size="10" fill="var(--ink-2)">→ turns milky /</text>
  <text x="349" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="var(--info)">cloudy white</text>

  <!-- Card 4: Chlorine -->
  <rect x="422" y="36" width="124" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="484" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Chlorine (Cl₂)</text>
  <!-- Test tube with pale green tint -->
  <path d="M469 84 L469 152 Q469 164 484 164 Q499 164 499 152 L499 84" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Litmus strip: blue top, red mid, white bottom -->
  <rect x="479" y="66" width="10" height="22" fill="var(--info)" stroke="var(--ink)" stroke-width="1"/>
  <rect x="479" y="88" width="10" height="16" fill="var(--bad)" stroke="var(--ink)" stroke-width="1"/>
  <rect x="479" y="104" width="10" height="26" fill="#ffffff" stroke="var(--ink)" stroke-width="1"/>
  <text x="484" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Damp blue litmus</text>
  <text x="484" y="201" text-anchor="middle" font-size="10" fill="var(--ink-2)">→ turns red, then</text>
  <text x="484" y="215" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">bleaches white</text>
</svg>`,
      diagramCaption:
        "Summary of the four chemical gas tests: always state both the exact apparatus/reagent and the exact positive observation.",
      whyItWorks:
        "Each test triggers a specific chemical reaction unique to that gas: hydrogen reacts explosively with oxygen in air to form water vapour (producing a mini shockwave — the pop!); oxygen supplies concentrated O₂ so glowing carbon embers ignite back into flame; carbon dioxide reacts with dissolved calcium hydroxide to precipitate solid chalk (CaCO₃), scattering light so the clear liquid looks milky; and chlorine reacts with water on the damp litmus to make hydrochloric acid (red) and hypochlorous acid (which oxidises and destroys the dye, bleaching it white).",
      keyPoints: [
        "Hydrogen (H₂): lit splint → burns with a squeaky pop.",
        "Oxygen (O₂): glowing splint → relights.",
        "Carbon dioxide (CO₂): bubble through limewater → turns milky / cloudy white (calcium carbonate precipitate).",
        "Chlorine (Cl₂): damp blue litmus paper → turns red then bleaches white (perform in a fume cupboard).",
      ],
      strategies: [
        "Always write a TWO-PART exam answer for gas tests: (1) Test action/reagent + (2) Positive observation. Giving only one part loses half the marks!",
        "Link gas tests directly back to Section 1: metal + acid gives H₂ (squeaky pop), whereas metal carbonate + acid gives CO₂ (limewater milky).",
        "Check the word 'damp' for chlorine and 'glowing' for oxygen — missing those exact adjectives is a classic mark-scheme trap.",
      ],
      thinkDeeper:
        "If you keep bubbling carbon dioxide through milky limewater for a long time, something surprising happens: the cloudy white mixture turns **clear and colourless again**! That is because excess CO₂ reacts with the insoluble calcium carbonate and water to form **soluble calcium hydrogencarbonate**, {{Ca(HCO_3)_2}} — the exact same reaction that carves out limestone caves!",
      workedExamples: [
        {
          title: "Identifying Gases from Salt-Making Reactions",
          problem:
            "A student adds dilute hydrochloric acid to two unlabelled white/grey solids:\n- Tube 1 fizzes and the gas turns limewater milky.\n- Tube 2 fizzes and the gas gives a squeaky pop with a lit splint.\nIdentify the gas in each tube and deduce what type of solid reactant was used.",
          steps: [
            "Tube 1: turning limewater milky is the positive test for **carbon dioxide (CO₂)**.",
            "Acid + **metal carbonate** → salt + water + CO₂, so Tube 1 contained a **metal carbonate**.",
            "Tube 2: burning with a squeaky pop with a lit splint is the positive test for **hydrogen (H₂)**.",
            "Acid + **reactive metal** → salt + H₂, so Tube 2 contained a **reactive metal** (such as magnesium or zinc).",
          ],
          answer:
            "Tube 1: CO₂ gas from a metal carbonate. Tube 2: H₂ gas from a reactive metal.",
          yourTurn: {
            question:
              "Which gas is identified when a glowing wooden splint relights inside a test tube?",
            answer: {
              type: "text",
              accept: ["oxygen", "o2", "oxygen gas"],
              display: "oxygen",
            },
            solution:
              "**Oxygen (O₂)** supports combustion strongly enough to relight a glowing splint.",
          },
        },
        {
          title: "Explaining the Two-Stage Chlorine Test",
          problem:
            "Why does damp blue litmus paper turn **red first** and then **white** when exposed to chlorine gas, and why must the litmus paper be damp?",
          steps: [
            "Chlorine dissolves in the water on the damp paper to form two acids: hydrochloric acid (HCl) and chloric(I)/hypochlorous acid (HClO).",
            "Because the solution is acidic, blue litmus turns **red** first.",
            "Chloric(I) acid is a strong bleach that destroys the litmus dye, so the paper then **bleaches white**.",
            "Without water (dry paper), chlorine cannot dissolve to form these acids, so no colour change happens.",
          ],
          answer:
            "Moisture lets chlorine dissolve into an acidic bleaching solution, which turns blue litmus red before bleaching it white.",
          yourTurn: {
            question:
              "Name the insoluble white precipitate formed when carbon dioxide turns limewater milky.",
            answer: {
              type: "text",
              accept: ["calcium carbonate", "caco3"],
              display: "calcium carbonate",
            },
            solution:
              "Carbon dioxide reacts with limewater (calcium hydroxide solution) to produce insoluble white **calcium carbonate** ({{CaCO_3}}) and water.",
          },
        },
      ],
    },
  ],

  // ===========================================================================
  // LEARN SMART
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "Word equation: acid + metal oxide → ?",
        back: "Salt + water (neutralisation; no gas produced).",
      },
      {
        front: "Word equation: acid + metal carbonate → ?",
        back: "Salt + water + carbon dioxide (causes fizzing/effervescence).",
      },
      {
        front: "Word equation: acid + reactive metal → ?",
        back: "Salt + hydrogen (e.g. magnesium + hydrochloric acid → magnesium chloride + hydrogen).",
      },
      {
        front: "Which salts are made by hydrochloric, sulfuric, and nitric acids?",
        back: "Hydrochloric → chloride; Sulfuric → sulfate; Nitric → nitrate.",
      },
      {
        front: "Why is the insoluble base added in EXCESS when making a soluble salt?",
        back: "To make sure all the acid has reacted completely so no unreacted acid contaminates the crystals.",
      },
      {
        front: "How is excess unreacted insoluble base removed from the salt solution?",
        back: "By filtration (the excess solid stays in the filter paper as the residue; the salt solution is the filtrate).",
      },
      {
        front: "What is the scientific definition of a pure substance?",
        back: "A single element or a single compound, not mixed with any other substance.",
      },
      {
        front: "How do impurities affect a substance's melting point and boiling point?",
        back: "Impurities LOWER the melting point (and broaden its range) and RAISE the boiling point (over a range).",
      },
      {
        front: "What is a formulation?",
        back: "A mixture designed as a useful product, where every component is added in carefully measured quantities for a specific purpose (e.g. paint, medicines, alloys, fuels).",
      },
      {
        front: "When should you use fractional distillation instead of simple distillation?",
        back: "Use fractional distillation to separate two or more miscible liquids with different (often close) boiling points (e.g. ethanol and water).",
      },
      {
        front: "Why does cold water enter at the BOTTOM of a Liebig condenser?",
        back: "So the cooling jacket fills completely from the bottom up and stays full, providing efficient counter-current cooling.",
      },
      {
        front: "Why must a chromatography baseline be drawn in pencil, and why must the solvent sit below it?",
        back: "Pencil graphite is insoluble so it will not run and contaminate the chromatogram; keeping the solvent below prevents the ink spots washing into the beaker.",
      },
      {
        front: "Formula and properties of the retention factor, Rf?",
        back: "Rf = distance moved by spot ÷ distance moved by solvent front. Always between 0 and 1, with NO units.",
      },
      {
        front: "Chemical test and positive result for hydrogen (H₂)?",
        back: "Insert a lit (burning) splint → burns with a squeaky pop.",
      },
      {
        front: "Chemical test and positive result for oxygen (O₂)?",
        back: "Insert a glowing splint → splint relights.",
      },
      {
        front: "Chemical tests and positive results for carbon dioxide (CO₂) and chlorine (Cl₂)?",
        back: "CO₂: bubble through limewater → turns milky/cloudy white. Cl₂: damp blue litmus paper → turns red then bleaches white.",
      },
    ],
    mustKnow: [
      "Can you name the salt formed from any metal/oxide/carbonate and hydrochloric, sulfuric, or nitric acid?",
      "Can you write complete word equations for acid + metal oxide, acid + metal carbonate, and acid + metal?",
      "Can you describe and justify all five steps of making pure, dry salt crystals using an excess insoluble base?",
      "Can you explain the scientific meaning of 'pure' and use melting/boiling point data to identify pure vs impure samples?",
      "Can you define 'formulation' and explain the role of components in medicines, paints, or alloys?",
      "Can you choose between filtration, crystallisation, simple distillation, fractional distillation, and chromatography for any mixture?",
      "Can you explain the stationary phase, mobile phase, pencil baseline, and solvent-level rules in paper chromatography?",
      "Can you calculate Rf values accurately and rearrange the formula to predict spot distances?",
      "Can you state BOTH the exact test and the exact positive result for H₂, O₂, CO₂, and Cl₂?",
      "Can you link a gas test result back to the type of acid reaction that produced it?",
    ],
    misconceptions: [
      {
        wrong: "Never write: '100% pure orange juice is a pure substance because nothing was added.'",
        right: "Write instead: 'Orange juice is a mixture of water, sugars, citric acid and vitamins; chemically, a pure substance is a single element or single compound.'",
      },
      {
        wrong: "Never write: 'Heat the salt solution strongly until all the water boils completely dry to get nice crystals.'",
        right: "Write instead: 'Evaporate gently over a water bath to the crystallisation point, then leave to cool slowly so hydrated crystals form, and pat dry between filter paper.'",
      },
      {
        wrong: "Never write: 'Draw the chromatography baseline in pen and submerge the dots under the solvent.'",
        right: "Write instead: 'Draw the baseline in pencil (insoluble graphite) and keep the solvent level below the baseline so spots do not wash into the beaker.'",
      },
      {
        wrong: "Never write: 'The Rf value of the dye is 0.65 cm' or 'Rf = 1.54'.",
        right: "Write instead: 'Rf = 0.65 (no units; Rf is always between 0 and 1 because a spot can never overtake the solvent front).'",
      },
      {
        wrong: "Never write: 'Test oxygen with a lit splint' or 'Hydrogen relights a glowing splint.'",
        right: "Write instead: 'Hydrogen gives a squeaky pop with a LIT splint; oxygen relights a GLOWING splint.'",
      },
      {
        wrong: "Never write: 'Connect cold water into the top of the Liebig condenser so gravity pulls it down.'",
        right: "Write instead: 'Cold water enters at the BOTTOM and leaves at the TOP so the condenser jacket remains completely full for maximum cooling.'",
      },
    ],
    examMistakes: [
      "Choosing copper metal + dilute sulfuric acid to make copper(II) sulfate — copper is unreactive with dilute acids; always use copper(II) oxide or copper(II) carbonate.",
      "Forgetting to mention 'in excess' when describing how to add an insoluble base to an acid.",
      "Saying impurities simply 'change' the melting point instead of specifying that they LOWER the melting point and cause melting over a RANGE.",
      "Writing 'turns cloudy' for carbon dioxide without naming **limewater** as the reagent.",
      "Forgetting the word **damp** when describing the blue litmus paper test for chlorine, or omitting the final **bleaches white** stage.",
      "Measuring chromatography distances from the bottom of the paper instead of from the **pencil baseline**.",
      "Confusing filtrate (the liquid passing through the filter paper) with residue (the insoluble solid trapped on the filter paper).",
    ],
    mnemonics: [
      {
        topic: "Salt Naming from Acids",
        device: "Hydro-Chloride · Sulf-Sulfate · Nitri-Nitrate",
        explanation:
          "Match the acid root straight to the salt ending: Hydrochloric → chloride, Sulfuric → sulfate, Nitric → nitrate.",
      },
      {
        topic: "The Four Gas Tests",
        device: "H-Pop · O-Glow · C-Lime · Cl-Bleach",
        explanation:
          "Hydrogen = lit splint POP; Oxygen = GLOWing splint relights; CO₂ = LIMEwater milky; Chlorine = damp blue litmus red then BLEACHed white.",
      },
      {
        topic: "Paper Chromatography Rules",
        device: "P-B-S-F (Pencil, Below, Spot ÷ Front)",
        explanation:
          "Draw the line in Pencil, keep solvent Below the line, and divide Spot distance by solvent Front distance to get Rf.",
      },
    ],
    realWorld: [
      {
        title: "Singapore Desalination & NEWater",
        emoji: "💧",
        detail:
          "Singapore produces ultra-pure drinking water from seawater and reclaimed water using advanced membrane filtration and distillation-style purification, tested continually for electrical conductivity and fixed physical constants.",
      },
      {
        title: "Pharmaceutical Tablet Formulations",
        emoji: "💊",
        detail:
          "A paracetamol tablet is a precision formulation: only part is the active drug, while measured binders, disintegrants, and coatings ensure every tablet delivers an exact, safe dose.",
      },
      {
        title: "Forensic Ink & Anti-Doping Chromatography",
        emoji: "🔎",
        detail:
          "Forensic scientists compare Rf values of ink from forged cheques against suspect pens, while sports laboratories use advanced chromatography to detect banned substances in athletes' samples.",
      },
      {
        title: "Salting Winter Roads",
        emoji: "❄️",
        detail:
          "Spreading rock salt on roads lowers the freezing point of water below 0 °C because impurities disrupt the regular ice crystal lattice — the exact same principle tested in melting-point purity checks.",
      },
      {
        title: "Swimming Pool Chlorine Safety",
        emoji: "🏊",
        detail:
          "Chlorine compounds disinfect Singapore swimming pools by killing bacteria, and pool water technicians monitor chemical levels carefully because excess free chlorine gas is toxic and bleaches fabrics.",
      },
    ],
    videos: [
      {
        title: "Making Soluble Salts Required Practical (Copper Sulfate)",
        channel: "FreeScienceLessons",
        url: "https://www.youtube.com/results?search_query=FreeScienceLessons+making+soluble+salts+copper+sulfate",
      },
      {
        title: "Pure Substances, Melting Points & Formulations",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+purity+and+formulations+GCSE+chemistry",
      },
      {
        title: "Simple & Fractional Distillation Explained",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+simple+and+fractional+distillation",
      },
      {
        title: "Paper Chromatography, Rf Values & Gas Tests",
        channel: "FreeScienceLessons",
        url: "https://www.youtube.com/results?search_query=FreeScienceLessons+chromatography+Rf+values+and+gas+tests",
      },
    ],
    formulas: [
      {
        name: "Retention factor (Rf)",
        formula: '{{R_f = "distance moved by spot" / "distance moved by solvent"}}',
        note: "Dimensionless ratio (0 < Rf < 1), measured from pencil baseline.",
      },
      {
        name: "Acid + Metal Oxide",
        formula: "acid + metal oxide → salt + water",
        note: "Neutralisation reaction; no gas evolved.",
      },
      {
        name: "Acid + Metal Carbonate",
        formula: "acid + metal carbonate → salt + water + carbon dioxide",
        note: "Effervescence (CO₂ turns limewater milky).",
      },
      {
        name: "Acid + Reactive Metal",
        formula: "acid + metal → salt + hydrogen",
        note: "Only for metals above hydrogen (e.g. Mg, Zn, Fe); H₂ gives squeaky pop.",
      },
      {
        name: "Acid-to-Salt Naming Rule",
        formula: "HCl → chloride · H₂SO₄ → sulfate · HNO₃ → nitrate",
        note: "Metal name comes first, acid ending comes second.",
      },
      {
        name: "Pure Substance",
        formula: "Single element or single compound with sharp fixed m.p. and b.p.",
        note: "Impurities lower m.p. (broad range) and raise b.p.",
      },
      {
        name: "Formulation",
        formula: "Designed mixture with carefully measured proportions for a specific function",
        note: "Examples: medicines, paints, alloys, fuels, fertilisers.",
      },
      {
        name: "Simple vs Fractional Distillation",
        formula: "Simple = solvent from solution · Fractional = miscible liquids by boiling point",
        note: "Lowest boiling point fraction distils over first.",
      },
      {
        name: "Stationary & Mobile Phases",
        formula: "Stationary phase = paper (water in fibres) · Mobile phase = moving solvent",
        note: "Higher solubility in mobile phase → larger Rf.",
      },
      {
        name: "Limewater Test Equation",
        formula: "{{Ca(OH)_2 + CO_2 -> CaCO_3 + H_2O}}",
        note: "Insoluble white calcium carbonate makes limewater look milky.",
      },
      {
        name: "Four Gas Tests Summary",
        formula: "H₂: lit splint pops · O₂: glowing relights · CO₂: limewater milky · Cl₂: damp blue litmus red→white",
        note: "Always state both test method and positive observation.",
      },
    ],
  },
};
