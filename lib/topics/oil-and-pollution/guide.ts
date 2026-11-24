import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "oil-and-pollution",
  title: "Crude Oil, Fuels & Atmospheric Pollution",
  strand: "Chemistry",
  icon: "🛢️",
  summary:
    "Explore crude oil, alkanes and chain-length trends, separate fractions in a column, crack heavy oils into alkenes tested with bromine water, and tackle combustion and atmospheric pollutants.",
  intro:
    "Look out across the Singapore Strait toward Jurong Island and you will see towering silver fractionating columns turning thick, black **crude oil** into aviation jet fuel, petrol, diesel, plastics, and road tarmac. Yet burning those same hydrocarbon fuels drives global climate change, acid rain, and urban smog. In this topic you will learn the structure and formulas of **alkanes** and **alkenes**, how **fractional distillation** and **cracking** transform crude oil into useful products, how **bromine water** spots double bonds, and how chemists understand and reduce **atmospheric pollution**.",
  guide: [
    // =========================================================================
    // SECTION 1: hydrocarbons-alkanes
    // =========================================================================
    {
      id: "hydrocarbons-alkanes",
      heading: "Crude Oil, Hydrocarbons & Alkanes",
      discovery: {
        problem:
          "Cooking gas (propane, {{C_3H_8}}) flows effortlessly as a gas and ignites with a tiny spark, whereas heavy road bitumen ({{C_{35}H_{72}}}) is a thick, sticky black tar that refuses to catch fire at room temperature. Both molecules are made of **only carbon and hydrogen atoms**! Why do two molecules built from the exact same two elements behave so dramatically differently?",
        idea: "It all comes down to **carbon chain length** and **intermolecular forces**! Longer hydrocarbon chains have much larger surface areas, creating far stronger attractive forces between neighbouring molecules. Pulling those giant chains apart requires much more thermal energy — giving long chains higher boiling points, higher viscosity (thick and treacly), and much lower flammability!",
      },
      body: `### 1. Crude Oil & Hydrocarbons
- **Crude oil** (petroleum) is a **finite** (non-renewable) fossil fuel formed over millions of years from the compressed remains of ancient marine plankton buried beneath mud and rock in the absence of oxygen.
- Crude oil is a **mixture** of many different **hydrocarbons** — compounds containing **hydrogen and carbon atoms ONLY**. *(Never forget the word **ONLY** in exam definitions! Ethanol, {{C_2H_5OH}}, contains oxygen too, so it is NOT a hydrocarbon.)*

### 2. The Alkanes — Saturated Hydrocarbons
Most molecules in crude oil belong to a homologous series called the **alkanes**:
- Alkanes are **saturated hydrocarbons** because every carbon–carbon link is a **single covalent bond** ({{C-C}}) — each carbon atom forms 4 single bonds, holding the maximum possible number of hydrogen atoms.
- Every alkane obeys the general formula: **{{C_nH_{2n+2}}}** (where {{n}} is the number of carbon atoms).

| Alkane | Carbons ({{n}}) | Molecular formula | Boiling point (°C) | State at room temp (25 °C) |
|---|---|---|---|---|
| **Methane** | 1 | {{CH_4}} | −162 | Gas |
| **Ethane** | 2 | {{C_2H_6}} | −89 | Gas |
| **Propane** | 3 | {{C_3H_8}} | −42 | Gas |
| **Butane** | 4 | {{C_4H_{10}}} | −0.5 | Gas |
| **Pentane** | 5 | {{C_5H_{12}}} | +36 | Liquid |

### 3. How Chain Length Controls Physical Properties
As the carbon chain length **increases** (more carbon atoms per molecule):
- **Boiling point INCREASES** — stronger intermolecular forces between longer molecules need more energy to overcome.
- **Viscosity INCREASES** — longer chains tangle together easily, making the liquid thicker and slower to pour (compare runny petrol vs sticky bitumen).
- **Flammability DECREASES** — longer molecules do not vapourise easily, so they are much harder to ignite and burn with dirtier, smokier flames.
- **Volatility DECREASES** — short chains evaporate readily; long chains barely evaporate at all.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First four alkanes methane, ethane, propane, and butane with single C-C bonds and arrows showing boiling point and viscosity increasing while flammability decreases with chain length">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Alkanes (CₙH₂ₙ₊₂): Saturated Single C–C Bonds &amp; Chain-Length Trends</text>

  <!-- Methane box -->
  <rect x="14" y="34" width="102" height="122" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="65" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Methane (CH₄)</text>
  <line x1="65" y1="74" x2="65" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="42" y1="97" x2="88" y2="97" stroke="var(--ink)" stroke-width="1.8"/>
  <circle cx="65" cy="97" r="9" fill="var(--brand)"/>
  <text x="65" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">C</text>
  <text x="65" y="69" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">H</text>
  <text x="65" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">H</text>
  <text x="34" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">H</text>
  <text x="96" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">H</text>
  <text x="65" y="148" text-anchor="middle" font-size="9" fill="var(--ink-2)">b.p. −162 °C</text>

  <!-- Ethane box -->
  <rect x="124" y="34" width="122" height="122" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="185" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Ethane (C₂H₆)</text>
  <line x1="146" y1="97" x2="224" y2="97" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="168" y1="74" x2="168" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="202" y1="74" x2="202" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <circle cx="168" cy="97" r="9" fill="var(--brand)"/>
  <circle cx="202" cy="97" r="9" fill="var(--brand)"/>
  <text x="168" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">C</text>
  <text x="202" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">C</text>
  <text x="168" y="69" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="202" y="69" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="168" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="202" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="138" y="101" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="232" y="101" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="185" y="148" text-anchor="middle" font-size="9" fill="var(--ink-2)">b.p. −89 °C</text>

  <!-- Propane box -->
  <rect x="254" y="34" width="138" height="122" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="323" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Propane (C₃H₈)</text>
  <line x1="272" y1="97" x2="374" y2="97" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="291" y1="74" x2="291" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="323" y1="74" x2="323" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="355" y1="74" x2="355" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <circle cx="291" cy="97" r="8.5" fill="var(--brand)"/>
  <circle cx="323" cy="97" r="8.5" fill="var(--brand)"/>
  <circle cx="355" cy="97" r="8.5" fill="var(--brand)"/>
  <text x="291" y="101" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">C</text>
  <text x="323" y="101" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">C</text>
  <text x="355" y="101" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">C</text>
  <text x="291" y="69" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="323" y="69" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="355" y="69" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="291" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="323" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="355" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="265" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="381" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">H</text>
  <text x="323" y="148" text-anchor="middle" font-size="9" fill="var(--ink-2)">b.p. −42 °C</text>

  <!-- Butane box -->
  <rect x="400" y="34" width="146" height="122" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="473" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Butane (C₄H₁₀)</text>
  <line x1="414" y1="97" x2="532" y2="97" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="431" y1="74" x2="431" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="459" y1="74" x2="459" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="487" y1="74" x2="487" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="515" y1="74" x2="515" y2="120" stroke="var(--ink)" stroke-width="1.8"/>
  <circle cx="431" cy="97" r="8" fill="var(--brand)"/>
  <circle cx="459" cy="97" r="8" fill="var(--brand)"/>
  <circle cx="487" cy="97" r="8" fill="var(--brand)"/>
  <circle cx="515" cy="97" r="8" fill="var(--brand)"/>
  <text x="431" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">C</text>
  <text x="459" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">C</text>
  <text x="487" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">C</text>
  <text x="515" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">C</text>
  <text x="431" y="69" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="459" y="69" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="487" y="69" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="515" y="69" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="431" y="132" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="459" y="132" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="487" y="132" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="515" y="132" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="408" y="100" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="538" y="100" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">H</text>
  <text x="473" y="148" text-anchor="middle" font-size="9" fill="var(--ink-2)">b.p. −0.5 °C</text>

  <!-- Trend banner at bottom -->
  <rect x="14" y="168" width="532" height="68" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="36" y1="186" x2="514" y2="186" stroke="var(--brand)" stroke-width="2.5"/>
  <polygon points="512,181 524,186 512,191" fill="var(--brand)"/>
  <text x="280" y="181" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Increasing Carbon Chain Length (more C atoms per molecule)</text>

  <text x="106" y="209" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Boiling point ↑</text>
  <text x="106" y="224" text-anchor="middle" font-size="9" fill="var(--ink-2)">stronger intermolecular forces</text>

  <text x="280" y="209" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--info)">Viscosity ↑</text>
  <text x="280" y="224" text-anchor="middle" font-size="9" fill="var(--ink-2)">thicker, harder to pour</text>

  <text x="454" y="209" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Flammability ↓</text>
  <text x="454" y="224" text-anchor="middle" font-size="9" fill="var(--ink-2)">harder to ignite, smokier</text>
</svg>`,
      diagramCaption:
        "The first four alkanes (methane, ethane, propane, butane) all follow CₙH₂ₙ₊₂ with single C–C bonds. Increasing chain length raises boiling point and viscosity while lowering flammability.",
      whyItWorks:
        "Why does every alkane have exactly {{2n + 2}} hydrogens? Picture a chain of {{n}} carbon atoms linked by single bonds: every carbon atom has 4 bonds in total. Each middle carbon uses 2 bonds to connect left and right, leaving 2 bonds for hydrogens (top and bottom). The two end carbons each have 1 extra bond capping the ends of the chain — giving {{2n + 2}} hydrogens every single time!",
      keyPoints: [
        "Crude oil is a finite mixture of hydrocarbons — compounds containing hydrogen and carbon ONLY.",
        "Alkanes are saturated hydrocarbons (all single C–C bonds) with general formula CₙH₂ₙ₊₂.",
        "Memorise the first four alkanes in order: Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).",
        "As chain length increases: boiling point INCREASES, viscosity INCREASES, and flammability DECREASES.",
      ],
      strategies: [
        "Remember the first four alkane prefixes with 'Monkeys Eat Peeled Bananas': Meth- (1), Eth- (2), Prop- (3), But- (4).",
        "When explaining WHY longer alkanes have higher boiling points, ALWAYS say 'stronger **intermolecular forces** between molecules' — NEVER say 'covalent bonds break during boiling'!",
        "Check every formula with the quick test: double the number of carbons and add 2. If H = 2n + 2, it is an alkane.",
      ],
      thinkDeeper:
        "When liquid pentane ({{C_5H_{12}}}) boils at 36 °C, do the strong covalent {{C-C}} and {{C-H}} bonds inside each pentane molecule snap apart? **NO!** Boiling is a physical change that only overcomes the weak **intermolecular forces** BETWEEN separate pentane molecules — intact {{C_5H_{12}}} molecules simply fly apart into a gas. Breaking the actual covalent bonds takes extreme heat (over 500 °C) and is called **cracking**!",
      workedExamples: [
        {
          title: "Using the Alkane General Formula CₙH₂ₙ₊₂",
          problem:
            "Octane is an alkane found in petrol that contains **8 carbon atoms** per molecule. (a) Find its molecular formula. (b) Predict whether octane has a higher or lower boiling point and viscosity than butane ({{C_4H_{10}}}).",
          steps: [
            "(a) Substitute {{n = 8}} into {{C_nH_{2n+2}}}: hydrogen atoms = {{2(8) + 2 = 18}} → formula is **{{C_8H_{18}}}**.",
            "(b) Octane (8 carbons) has a longer carbon chain than butane (4 carbons).",
            "Longer chains have stronger intermolecular forces between molecules, so octane has a **higher boiling point** (126 °C vs −0.5 °C) and **higher viscosity** (thicker liquid).",
          ],
          answer: "(a) C₈H₁₈   (b) Higher boiling point and higher viscosity.",
          yourTurn: {
            question:
              "How many hydrogen atoms are in one molecule of the alkane **decane**, which contains 10 carbon atoms?",
            answer: { type: "number", value: 22, display: "22" },
            solution:
              "Using {{C_nH_{2n+2}}} with {{n = 10}}: {{2(10) + 2 = 22}} hydrogen atoms (formula {{C_{10}H_{22}}}).",
          },
        },
        {
          title: "Identifying Hydrocarbons vs Non-Hydrocarbons",
          problem:
            "Which of these four compounds is NOT a hydrocarbon: {{C_3H_8}}, {{C_6H_{12}}}, {{C_2H_5OH}}, or {{CH_4}}? Explain why.",
          steps: [
            "Recall the strict definition: a hydrocarbon contains **hydrogen and carbon atoms ONLY**.",
            "Inspect each formula: {{C_3H_8}}, {{C_6H_{12}}}, and {{CH_4}} contain only C and H.",
            "{{C_2H_5OH}} (ethanol) contains an **oxygen** atom as well, so it is NOT a hydrocarbon.",
          ],
          answer: "C₂H₅OH (ethanol), because it contains oxygen in addition to carbon and hydrogen.",
          yourTurn: {
            question:
              "Name the alkane with molecular formula C₃H₈.",
            answer: {
              type: "text",
              accept: ["propane"],
              display: "propane",
            },
            solution:
              "3 carbon atoms → prefix **prop-** (Monkeys Eat **Peeled** Bananas) → **propane** ({{C_3H_8}}).",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: fractional-distillation-oil
    // =========================================================================
    {
      id: "fractional-distillation-oil",
      heading: "Fractional Distillation of Crude Oil",
      discovery: {
        problem:
          "Raw crude oil straight out of an underground well is almost useless: if you pour it straight into a car engine, the thick tar clogs the fuel injectors and won't burn cleanly! Since crude oil is a mixture of hundreds of hydrocarbons with **different boiling points**, how can an oil refinery separate them continuously into petrol, jet fuel, diesel, and road tar in one giant tower?",
        idea: "Heat the crude oil in a furnace until most of it **evaporates into hot vapour**, then pump it into the bottom of a tall **fractionating column** that is **very hot at the bottom (~350 °C) and cool at the top (~25 °C)**. As vapours rise and cool, each group of molecules (**fraction**) condenses back into liquid on the tray matching its own boiling point!",
      },
      body: `### 1. How the Fractionating Column Works
1. **Evaporation:** Crude oil is heated in a furnace to around **350–400 °C** so almost all the hydrocarbons turn into **vapour** (except very long-chain bitumen, which stays a thick liquid at the base).
2. **Temperature Gradient:** The hot vapour enters near the bottom of the tall **fractionating column**, which is **hot at the bottom and progressively cooler towards the top**.
3. **Rising & Condensing:** Vapours rise up the column through bubble caps. Whenever a vapour reaches a level cooler than its **boiling point**, it **condenses** back into liquid and drains out through a side pipe as a **fraction** (a mixture of hydrocarbons with similar chain lengths and boiling points).
4. **Short chains reach the top:** Very short-chain hydrocarbons (refinery gases, 1–4 carbons) have boiling points below room temperature, so they never condense and leave as gases from the very top.

### 2. The Six Main Fractions (Top → Bottom)

| Fraction (Top → Bottom) | Chain length | Temp zone | Main everyday uses |
|---|---|---|---|
| **1. Refinery gases (LPG)** | C₁ – C₄ | Coolest (< 25 °C) | Domestic heating, camping & cooking gas |
| **2. Petrol (Gasoline)** | C₅ – C₁₀ | ~40 – 110 °C | Fuel for cars and motorbikes |
| **3. Kerosene (Paraffin)** | C₁₀ – C₁₆ | ~150 – 250 °C | Aviation jet fuel for aircraft |
| **4. Diesel oil** | C₁₄ – C₂₀ | ~250 – 300 °C | Fuel for lorries, buses, trains & diesel cars |
| **5. Heavy fuel oil** | C₂₀ – C₃₅ | ~300 – 350 °C | Fuel for large cargo ships & power stations |
| **6. Bitumen** | > C₃₅ | Hottest (> 350 °C, residue) | Surfacing roads and waterproofing flat roofs |

### 3. Trends Down the Fractionating Column
Moving from the **top** (refinery gases) to the **bottom** (bitumen):
- Carbon chain length **increases**
- Boiling point **increases**
- Viscosity **increases** (runnier at top → thick sticky tar at bottom)
- Colour gets **darker** (colourless → pale yellow → brown → thick black)
- Flammability **decreases** (ignites easily at top → very hard to burn at bottom)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Industrial fractionating column separating crude oil vapour from hottest bottom 350 degrees Celsius to coolest top 25 degrees Celsius into refinery gases, petrol, kerosene, diesel, fuel oil, and bitumen">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Fractional Distillation of Crude Oil</text>

  <!-- Furnace & Crude oil input on left -->
  <rect x="14" y="176" width="96" height="46" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="62" y="196" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Furnace</text>
  <text x="62" y="211" text-anchor="middle" font-size="9" fill="var(--ink)">Heats crude oil</text>
  <text x="62" y="166" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Crude oil IN</text>
  <line x1="110" y1="198" x2="156" y2="198" stroke="var(--bad)" stroke-width="3"/>
  <polygon points="154,193 164,198 154,203" fill="var(--bad)"/>

  <!-- Gradient arrow beside column -->
  <line x1="138" y1="216" x2="138" y2="48" stroke="var(--info)" stroke-width="2.2"/>
  <polygon points="133,50 138,40 143,50" fill="var(--info)"/>
  <text x="128" y="54" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--info)">COOL (~25 °C)</text>
  <text x="128" y="67" text-anchor="end" font-size="8.5" fill="var(--ink-2)">Short chains</text>
  <text x="128" y="128" text-anchor="end" font-size="8.8" fill="var(--ink-2)">Vapours rise</text>
  <text x="128" y="140" text-anchor="end" font-size="8.8" fill="var(--ink-2)">&amp; condense</text>
  <text x="128" y="220" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--bad)">HOT (~350 °C)</text>
  <text x="128" y="233" text-anchor="end" font-size="8.5" fill="var(--ink-2)">Long chains</text>

  <!-- Fractionating Column Tower -->
  <rect x="164" y="34" width="76" height="202" rx="14" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Colour bands inside column (cool light top -> hot dark bottom) -->
  <rect x="166" y="36" width="72" height="30" rx="10" fill="var(--info-soft)"/>
  <rect x="166" y="68" width="72" height="30" fill="var(--brand-soft)"/>
  <rect x="166" y="100" width="72" height="30" fill="var(--warn-soft)"/>
  <rect x="166" y="132" width="72" height="30" fill="var(--accent-soft)"/>
  <rect x="166" y="164" width="72" height="30" fill="var(--bad-soft)"/>
  <rect x="166" y="196" width="72" height="38" rx="8" fill="var(--ink)" opacity="0.22"/>

  <!-- Trays -->
  <line x1="166" y1="67" x2="238" y2="67" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="6 3"/>
  <line x1="166" y1="99" x2="238" y2="99" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="6 3"/>
  <line x1="166" y1="131" x2="238" y2="131" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="6 3"/>
  <line x1="166" y1="163" x2="238" y2="163" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="6 3"/>
  <line x1="166" y1="195" x2="238" y2="195" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="6 3"/>

  <!-- 6 Output pipes and labels -->
  <!-- 1. Refinery gases -->
  <line x1="240" y1="51" x2="270" y2="51" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,47 276,51 268,55" fill="var(--ink)"/>
  <text x="282" y="55" font-size="10.5" font-weight="700" fill="var(--ink)">1. Refinery gases</text>
  <text x="415" y="55" font-size="9.5" fill="var(--ink-2)">Cooking &amp; heating (C₁–C₄)</text>

  <!-- 2. Petrol -->
  <line x1="240" y1="83" x2="270" y2="83" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,79 276,83 268,87" fill="var(--ink)"/>
  <text x="282" y="87" font-size="10.5" font-weight="700" fill="var(--ink)">2. Petrol</text>
  <text x="415" y="87" font-size="9.5" fill="var(--ink-2)">Car fuel (C₅–C₁₀)</text>

  <!-- 3. Kerosene -->
  <line x1="240" y1="115" x2="270" y2="115" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,111 276,115 268,119" fill="var(--ink)"/>
  <text x="282" y="119" font-size="10.5" font-weight="700" fill="var(--ink)">3. Kerosene</text>
  <text x="415" y="119" font-size="9.5" fill="var(--ink-2)">Aircraft jet fuel (C₁₀–C₁₆)</text>

  <!-- 4. Diesel -->
  <line x1="240" y1="147" x2="270" y2="147" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,143 276,147 268,151" fill="var(--ink)"/>
  <text x="282" y="151" font-size="10.5" font-weight="700" fill="var(--ink)">4. Diesel oil</text>
  <text x="415" y="151" font-size="9.5" fill="var(--ink-2)">Lorries, buses, trains</text>

  <!-- 5. Fuel oil -->
  <line x1="240" y1="179" x2="270" y2="179" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,175 276,179 268,183" fill="var(--ink)"/>
  <text x="282" y="183" font-size="10.5" font-weight="700" fill="var(--ink)">5. Heavy fuel oil</text>
  <text x="415" y="183" font-size="9.5" fill="var(--ink-2)">Cargo ships &amp; power plants</text>

  <!-- 6. Bitumen -->
  <line x1="240" y1="215" x2="270" y2="215" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="268,211 276,215 268,219" fill="var(--ink)"/>
  <text x="282" y="219" font-size="10.5" font-weight="700" fill="var(--ink)">6. Bitumen</text>
  <text x="415" y="219" font-size="9.5" fill="var(--ink-2)">Roads &amp; roofing (>C₃₅)</text>
</svg>`,
      diagramCaption:
        "Hot crude oil vapour rises through the temperature gradient of the fractionating column; each fraction condenses at the height matching its boiling point.",
      whyItWorks:
        "Fractional distillation is a purely **physical separation** — no covalent bonds are broken and no new chemicals are created! Because every fraction has a distinct boiling-point range determined by its carbon chain length, setting up a steady vertical temperature gradient turns a chaotic mixture of hundreds of hydrocarbons into six clean, continuous liquid/gas streams.",
      keyPoints: [
        "Crude oil is heated until it evaporates into vapour, then fed into a fractionating column that is HOT at the bottom and COOL at the top.",
        "Vapours rise and condense back into liquid when they reach a level matching their boiling point.",
        "Memorise the 6 fractions top-to-bottom: Refinery gases → Petrol → Kerosene → Diesel → Fuel oil → Bitumen.",
        "Fractions at the top have shorter chains, lower boiling points, lower viscosity, and higher flammability than those at the bottom.",
      ],
      strategies: [
        "Use the top-to-bottom fraction mnemonic: **R**eally **P**olite **K**ids **D**on't **F**ight **B**ullies (Refinery gases, Petrol, Kerosene, Diesel, Fuel oil, Bitumen).",
        "In 4-mark 'describe fractional distillation' questions, ALWAYS hit all four steps: (1) heat/evaporate crude oil, (2) temperature gradient (hot bottom, cool top), (3) vapours rise, (4) condense at their own boiling points.",
        "Remember: each collected fraction is STILL a mixture of hydrocarbons with similar boiling points — NOT a single pure compound!",
      ],
      thinkDeeper:
        "A fraction leaving the column is called 'petrol', yet petrol actually contains over 100 different hydrocarbon molecules ranging from 5 to 10 carbons long! Why doesn't an oil refinery bother separating octane ({{C_8H_{18}}}) completely from heptane ({{C_7H_{16}}})? Because molecules of similar chain length burn similarly inside a car engine, so collecting them as a boiling-point **fraction** is vastly cheaper and faster than isolating every single pure alkane.",
      workedExamples: [
        {
          title: "Predicting Where a Hydrocarbon Condenses",
          problem:
            "A fractionating column has trays at 340 °C (bottom), 260 °C, 180 °C, 80 °C, and 20 °C (top). Three alkanes enter as hot vapour: **Butane** (b.p. −0.5 °C), **Octane** (b.p. 126 °C), and **Hexadecane** (b.p. 287 °C). State which tray each alkane condenses on (or if it exits as a gas).",
          steps: [
            "Vapour rises upward from the hot bottom until it enters a tray COOLER than its boiling point.",
            "**Hexadecane** (b.p. 287 °C): still vapour at 340 °C, then reaches the **260 °C** tray (260 < 287) → condenses in the **diesel** zone (260 °C).",
            "**Octane** (b.p. 126 °C): stays vapour past 340 °C, 260 °C, and 180 °C, then reaches **80 °C** (80 < 126) → condenses in the **petrol** zone (80 °C).",
            "**Butane** (b.p. −0.5 °C): even the coolest tray (20 °C) is warmer than −0.5 °C → exits the very top as **refinery gas**.",
          ],
          answer:
            "Hexadecane at 260 °C (diesel); Octane at 80 °C (petrol); Butane exits the top as refinery gas.",
          yourTurn: {
            question:
              "Which fraction collected from a fractionating column is used as aviation fuel for jet aircraft?",
            answer: {
              type: "text",
              accept: ["kerosene", "paraffin"],
              display: "kerosene",
            },
            solution:
              "**Kerosene** (also called paraffin) condenses between petrol and diesel and is used as aviation jet fuel.",
          },
        },
        {
          title: "Comparing Two Fractions",
          problem:
            "Compare **petrol** and **heavy fuel oil** in terms of (a) carbon chain length, (b) viscosity, and (c) flammability.",
          steps: [
            "Locate both in the column: petrol is near the TOP; heavy fuel oil is near the BOTTOM.",
            "Compare properties: petrol has **shorter chains**, **lower viscosity** (runnier), and **higher flammability** (ignites easily).",
            "Heavy fuel oil has **longer chains**, **higher viscosity** (thicker), and **lower flammability**.",
          ],
          answer:
            "Petrol has shorter chains, lower viscosity, and higher flammability than heavy fuel oil.",
          yourTurn: {
            question:
              "Name the thick black residue collected from the very bottom of the fractionating column and used for surfacing roads.",
            answer: {
              type: "text",
              accept: ["bitumen"],
              display: "bitumen",
            },
            solution:
              "**Bitumen** consists of very long chains (>35 carbons) with boiling points above 350 °C, collected at the bottom for roads and roofing.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: cracking-alkenes
    // =========================================================================
    {
      id: "cracking-alkenes",
      heading: "Cracking & Testing for Alkenes",
      discovery: {
        problem:
          "An oil refinery distils 100 barrels of crude oil and ends up with **far more thick heavy fuel oil** than customers want, yet **not nearly enough petrol** for cars — and zero raw materials to make plastic bottles! Can chemists break long, unwanted alkane chains apart into shorter, high-demand molecules?",
        idea: "Yes — through **cracking**! Heating long-chain alkanes to high temperatures (with a catalyst or steam) thermally decomposes them, snapping strong {{C-C}} covalent bonds to produce a **shorter, more useful alkane** (for fuel) PLUS an **alkene** containing a reactive {{C=C}} double bond (used as the building block for polymers/plastics)!",
      },
      body: `### 1. Why Do Refineries Crack Long Hydrocarbons?
1. **Supply vs Demand:** Fractional distillation yields too many long-chain, viscous, low-demand fractions (fuel oil, heavy wax) and too few short-chain, high-demand fuels (petrol, diesel, LPG).
2. **Making Polymers:** Cracking always produces **alkenes** (such as ethene and propene), which are the essential raw materials (**monomers**) for making plastics (polymers) like poly(ethene).

### 2. Thermal Decomposition by Cracking
Cracking is a **thermal decomposition** reaction (breaking large molecules into smaller ones using heat). Two industrial methods are used:
- **Catalytic cracking:** vapourise long-chain hydrocarbon and pass it over a **hot catalyst** (aluminium oxide / zeolite porous pot) at around **500–600 °C**.
- **Steam cracking:** mix hydrocarbon vapour with **steam** at a very high temperature (**800–900 °C**) with no catalyst.

In every balanced cracking equation, **total carbon atoms and total hydrogen atoms are conserved**:

{{C_{10}H_{22} -> C_8H_{18} + C_2H_4}}

*(Decane → Octane [shorter alkane] + Ethene [alkene]. Check: C: 10 = 8 + 2 ✓; H: 22 = 18 + 4 ✓!)*

### 3. Alkenes — Unsaturated Hydrocarbons
- **Alkenes** are **unsaturated hydrocarbons** because they contain at least one **carbon–carbon double covalent bond ({{C=C}})**.
- General formula of alkenes: **{{C_nH_{2n}}}** (2 fewer hydrogens than the matching alkane!).
- First three alkenes: **Ethene ({{C_2H_4}})**, **Propene ({{C_3H_6}})**, **Butene ({{C_4H_8}})** *(Note: there is NO 'methene' because a {{C=C}} double bond requires at least 2 carbon atoms!)*

### 4. Chemical Test for Alkenes (Bromine Water Test)
To distinguish an unsaturated **alkene** from a saturated **alkane**, shake the hydrocarbon with **orange (or orange-brown) bromine water**:
- **Alkene (unsaturated, has C=C):** bromine water **rapidly decolourises** — turns from **orange to colourless**! (Bromine adds straight across the reactive {{C=C}} double bond.)
- **Alkane (saturated, single C–C bonds only):** **no change** — bromine water **stays orange**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: Cracking equation breaking decane C10H22 into octane C8H18 and ethene C2H4 with a C double bond C. Bottom: Bromine water test staying orange with an alkane and turning colourless with an alkene.">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="21" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Cracking Long Alkanes &amp; the Bromine Water Test</text>

  <!-- TOP PANEL: Cracking reaction -->
  <rect x="14" y="32" width="532" height="92" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Thermal Decomposition (Heat + Catalyst)</text>

  <!-- Long chain C10H22 -->
  <rect x="24" y="58" width="166" height="44" rx="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <text x="107" y="77" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">C₁₀H₂₂ (Decane)</text>
  <text x="107" y="93" text-anchor="middle" font-size="9" fill="var(--ink-2)">Long alkane (low demand)</text>

  <!-- Arrow with Heat + Catalyst -->
  <line x1="196" y1="80" x2="254" y2="80" stroke="var(--bad)" stroke-width="2.5"/>
  <polygon points="252,75 262,80 252,85" fill="var(--bad)"/>
  <text x="226" y="72" text-anchor="middle" font-size="8.8" font-weight="700" fill="var(--bad)">Heat ~550 °C</text>
  <text x="226" y="96" text-anchor="middle" font-size="8.8" fill="var(--ink-2)">+ Catalyst</text>

  <!-- Shorter alkane C8H18 -->
  <rect x="266" y="58" width="122" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="327" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">C₈H₁₈ (Octane)</text>
  <text x="327" y="93" text-anchor="middle" font-size="9" fill="var(--brand)">Petrol fuel (CₙH₂ₙ₊₂)</text>

  <text x="401" y="84" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">+</text>

  <!-- Alkene C2H4 -->
  <rect x="414" y="58" width="122" height="44" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.6"/>
  <text x="475" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">C₂H₄ (Ethene)</text>
  <text x="475" y="93" text-anchor="middle" font-size="9" fill="var(--info)">C=C alkene → polymers</text>

  <text x="280" y="116" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">Atom check: 10 C = 8 + 2 ✓   and   22 H = 18 + 4 ✓</text>

  <!-- BOTTOM PANEL: Bromine water test -->
  <!-- Left: Alkane -->
  <rect x="14" y="134" width="258" height="104" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="143" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Alkane + Orange Bromine Water</text>
  <!-- Test tube stays orange -->
  <path d="M52 162 L52 214 Q52 224 66 224 Q80 224 80 214 L80 162" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M54 186 L78 186 L78 214 Q78 222 66 222 Q54 222 54 214 Z" fill="var(--accent)"/>
  <text x="172" y="178" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">STAYS ORANGE</text>
  <text x="172" y="195" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Saturated (C–C single only)</text>
  <text x="172" y="210" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">No reaction with bromine</text>

  <!-- Right: Alkene -->
  <rect x="288" y="134" width="258" height="104" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="417" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Alkene + Orange Bromine Water</text>
  <!-- Test tube turns colourless -->
  <path d="M326 162 L326 214 Q326 224 340 224 Q354 224 354 214 L354 162" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M328 186 L352 186 L352 214 Q352 222 340 222 Q328 222 328 214 Z" fill="var(--surface-2)"/>
  <text x="446" y="178" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">TURNS COLOURLESS!</text>
  <text x="446" y="195" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Unsaturated (has C=C bond)</text>
  <text x="446" y="210" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Br₂ adds across double bond</text>
</svg>`,
      diagramCaption:
        "Top: Cracking splits long-chain decane into shorter octane (petrol) and ethene (alkene for plastics), conserving all C and H atoms. Bottom: Orange bromine water turns colourless only with an unsaturated alkene.",
      whyItWorks:
        "Why does bromine water react instantly with alkenes but ignore alkanes? A {{C=C}} double bond is electron-rich and reactive — one of the two bonds opens up easily so two bromine atoms snap straight onto the two carbons, forming a **colourless** dibromoalkane (an **addition reaction**). In an alkane, every carbon is already saturated with 4 single bonds, so bromine has nowhere to attach!",
      keyPoints: [
        "Cracking thermally decomposes long, low-demand alkanes into shorter, high-demand fuels (alkanes) + alkenes (for making polymers).",
        "Conditions: catalytic cracking (hot catalyst ~550 °C) OR steam cracking (high temperature ~850 °C + steam).",
        "Alkenes are unsaturated hydrocarbons containing a C=C double bond and obey the general formula CₙH₂ₙ.",
        "Test for alkenes: shake with orange bromine water → turns COLOURLESS (never say 'clear'!). Alkanes leave bromine water orange.",
      ],
      strategies: [
        "Balance ANY cracking equation by simple subtraction: C atoms left = total C − product C; H atoms left = total H − product H.",
        "Exam gold rule: ALWAYS write '**orange to colourless**' for the bromine water test — writing 'clear' loses the mark because orange bromine water is ALREADY clear (transparent)!",
        "Check whether a cracking product is an alkane or alkene using its H:C ratio: if {{H = 2n + 2}}, it is an alkane; if {{H = 2n}}, it is an alkene.",
      ],
      thinkDeeper:
        "Can one long alkane molecule crack into **one** shorter alkane and **TWO** alkene molecules? Absolutely! Try cracking dodecane ({{C_{12}H_{26}}}) into hexane ({{C_6H_{14}}}) plus **two** molecules of propene ({{2C_3H_6}}): carbons = {{6 + 2(3) = 12}} ✓, hydrogens = {{14 + 2(6) = 26}} ✓! Every time a chain cracks, atoms are conserved and at least one alkene forms.",
      workedExamples: [
        {
          title: "Balancing a Cracking Equation",
          problem:
            "Tetradecane ({{C_{14}H_{30}}}) is cracked to produce **octane** ({{C_8H_{18}}}) and **one molecule of an alkene X**. Find the molecular formula of X and verify that X is an alkene.",
          steps: [
            "Conserve carbon atoms: {{14 - 8 = 6}} carbon atoms.",
            "Conserve hydrogen atoms: {{30 - 18 = 12}} hydrogen atoms.",
            "Write the formula of X: **{{C_6H_{12}}}** (hexene).",
            "Check against alkene general formula {{C_nH_{2n}}}: when {{n = 6}}, {{2n = 12}} → matches {{C_6H_{12}}} ✓!",
          ],
          answer: "C₆H₁₂ (hexene), which fits CₙH₂ₙ.",
          yourTurn: {
            question:
              "When dodecane (C₁₂H₂₆) is cracked into decane (C₁₀H₂₂) and one alkene molecule, how many carbon atoms are in that alkene molecule?",
            answer: { type: "number", value: 2, display: "2" },
            solution:
              "Carbon balance: {{12 - 10 = 2}} carbons (hydrogen balance: {{26 - 22 = 4}} → ethene, {{C_2H_4}}).",
          },
        },
        {
          title: "Distinguishing an Alkane from an Alkene",
          problem:
            "Two colourless liquids in unlabelled bottles are **hexane** ({{C_6H_{14}}}) and **hexene** ({{C_6H_{12}}}). Describe a quick chemical test and the exact results to identify each bottle.",
          steps: [
            "Add a few drops of **orange bromine water** to a sample of each liquid and shake gently.",
            "**Hexene** (unsaturated alkene with {{C=C}}) rapidly turns the bromine water from **orange to colourless**.",
            "**Hexane** (saturated alkane with single bonds only) causes **no change** — the bromine water **stays orange**.",
          ],
          answer:
            "Shake with orange bromine water: hexene turns it colourless; hexane leaves it orange.",
          yourTurn: {
            question:
              "What exact colour does orange bromine water turn when shaken with an unsaturated alkene?",
            answer: {
              type: "text",
              accept: ["colourless", "colorless"],
              display: "colourless",
            },
            solution:
              "Alkenes decolourise orange bromine water, turning it **colourless** (remember: never write 'clear' instead of 'colourless'!).",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: combustion-pollution
    // =========================================================================
    {
      id: "combustion-pollution",
      heading: "Combustion & Atmospheric Pollution",
      discovery: {
        problem:
          "Compare a Bunsen burner with its **air hole fully open** (roaring blue flame, clean beaker bottom) against the exact same gas burning with its **air hole closed** (flickering yellow flame that coats the bottom of a beaker in black soot!). Both burn the exact same methane gas — so why does closing the air hole create black soot and invisible deadly **carbon monoxide**?",
        idea: "Closing the air hole starves the flame of **oxygen**, switching it from **complete combustion** (plenty of {{O_2}} → harmless {{CO_2 + H_2O}}) to **incomplete combustion** (limited {{O_2}} → toxic **carbon monoxide {{CO}}** and solid **carbon soot particulates {{C}}** + water)!",
      },
      body: `### 1. Complete vs Incomplete Combustion of Hydrocarbons
Burning fuels releases thermal energy by reacting hydrocarbons with oxygen:

- **Complete combustion** (plentiful / excess oxygen; clean hot blue flame):
  - **Hydrocarbon + Oxygen → Carbon dioxide + Water**
  - Example (methane): **{{CH_4 + 2O_2 -> CO_2 + 2H_2O}}**
- **Incomplete combustion** (limited oxygen; cooler yellow smoky flame):
  - **Hydrocarbon + Limited oxygen → Carbon monoxide + Carbon (soot) + Water**
  - Releases **less energy** per gram of fuel AND creates dangerous pollutants.

### 2. Major Atmospheric Pollutants, Sources & Effects

| Pollutant | Source | Environmental & Health Problems |
|---|---|---|
| **Carbon monoxide (CO)** | Incomplete combustion of carbon fuels (faulty boilers, car exhausts) | **Toxic, colourless, odourless gas** — binds irreversibly to **haemoglobin** in red blood cells, stopping oxygen transport (can be fatal) |
| **Particulates / Soot (C)** | Incomplete combustion (especially diesel engines & wood fires) | Causes **global dimming** (reflects sunlight), blackens buildings, and penetrates deep into lungs triggering **asthma & respiratory disease** |
| **Sulfur dioxide (SO₂)** | Burning fossil fuels (coal, diesel) containing **sulfur impurities** | Dissolves in rainwater to form **acid rain** (kills fish/aquatic life, damages trees, corrodes limestone buildings & metal bridges) |
| **Nitrogen oxides (NOₓ)** | High temperatures inside **car engines** make atmospheric **N₂ and O₂** react | Causes **acid rain**, photochemical smog, and triggers breathing problems / asthma |
| **Greenhouse gases (CO₂, CH₄)** | Complete combustion of fossil fuels (CO₂); cattle farming, rice paddies & landfills (CH₄) | Trap outgoing infrared heat radiation → **enhanced greenhouse effect**, **global warming** & climate change (rising sea levels, extreme weather) |

### 3. Reducing Atmospheric Pollution
- **Desulfurisation:** remove sulfur impurities from petrol and diesel before burning (low-sulfur fuels) and scrub {{SO_2}} from power-station chimneys.
- **Catalytic converters** in car exhausts convert toxic {{CO}} and {{NO_x}} into far less harmful {{CO_2}} and {{N_2}} ({{2CO + 2NO -> 2CO_2 + N_2}}).
- **Particulate filters** on diesel exhausts trap black soot particles before they enter the air.
- **Transition to clean energy:** electric vehicles, solar/wind renewables, better insulation, and hydrogen fuel cells (which produce only water!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Complete combustion with excess oxygen gives blue flame, CO2 and water versus incomplete combustion with limited oxygen giving yellow smoky flame, toxic CO and soot. Right: Sulfur dioxide and nitrogen oxides form acid rain while CO2 and methane enhance the greenhouse effect.">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="145" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Complete vs Incomplete Combustion</text>
  <text x="422" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Key Atmospheric Pollutants</text>

  <!-- LEFT TOP: Complete combustion -->
  <rect x="12" y="30" width="268" height="98" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Blue flame icon -->
  <path d="M44 106 Q30 82 44 56 Q58 82 44 106 Z" fill="var(--info)"/>
  <path d="M44 104 Q37 88 44 74 Q51 88 44 104 Z" fill="var(--info-soft)"/>
  <text x="166" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="var(--info)">Complete Combustion (Excess O₂)</text>
  <text x="166" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Fuel + O₂ → CO₂ + H₂O</text>
  <text x="166" y="84" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Hot blue flame · maximum energy</text>
  <text x="166" y="100" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">No soot · CO₂ still drives warming</text>
  <text x="44" y="120" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--info)">Air hole OPEN</text>

  <!-- LEFT BOTTOM: Incomplete combustion -->
  <rect x="12" y="138" width="268" height="100" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Yellow smoky flame -->
  <path d="M44 214 Q28 190 44 162 Q60 190 44 214 Z" fill="var(--accent)"/>
  <circle cx="38" cy="154" r="3" fill="var(--ink)"/>
  <circle cx="48" cy="148" r="3.5" fill="var(--ink)"/>
  <circle cx="43" cy="158" r="2.2" fill="var(--ink)"/>
  <text x="166" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Incomplete Combustion (Limited O₂)</text>
  <text x="166" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Fuel + O₂ → CO + C (soot) + H₂O</text>
  <text x="166" y="192" text-anchor="middle" font-size="9.5" fill="var(--bad)">CO: toxic (blocks haemoglobin O₂)</text>
  <text x="166" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">C soot: global dimming &amp; asthma</text>
  <text x="44" y="229" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--bad)">Air hole CLOSED</text>

  <!-- RIGHT PANEL: Acid rain & Greenhouse -->
  <rect x="292" y="30" width="256" height="98" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="420" y="49" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Acid Rain: SO₂ &amp; NOₓ</text>
  <text x="420" y="68" text-anchor="middle" font-size="9.5" fill="var(--ink)">SO₂: sulfur impurities inside coal/diesel</text>
  <text x="420" y="84" text-anchor="middle" font-size="9.5" fill="var(--ink)">NOₓ: air N₂ + O₂ inside hot car engines</text>
  <text x="420" y="102" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">Dissolve in clouds → kills aquatic life,</text>
  <text x="420" y="116" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">damages trees &amp; corrodes stone/metal</text>

  <rect x="292" y="138" width="256" height="100" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="420" y="157" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Greenhouse Effect: CO₂ &amp; CH₄</text>
  <text x="420" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink)">Short-wave sunlight warms Earth's surface</text>
  <text x="420" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink)">Greenhouse gases trap outgoing IR heat</text>
  <text x="420" y="210" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Solutions: catalytic converters, low-S</text>
  <text x="420" y="224" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">fuels, renewables &amp; electric transport</text>
</svg>`,
      diagramCaption:
        "Left: Oxygen supply controls whether burning hydrocarbons produces CO₂ + H₂O (complete) or toxic CO + soot (incomplete). Right: Major atmospheric pollutants and how engineers reduce emissions.",
      whyItWorks:
        "Carbon monoxide is uniquely dangerous because it is **colourless and odourless** (giving zero warning) and binds to **haemoglobin** roughly 200 times more tightly than oxygen does! Meanwhile, nitrogen oxides ({{NO_x}}) do **NOT** come from nitrogen inside petrol — they form because the extreme spark-ignition heat inside a car engine forces nitrogen ({{N_2}}, 78% of air) and oxygen ({{O_2}}, 21% of air) from the surrounding air to react together!",
      keyPoints: [
        "Complete combustion (excess O₂): hydrocarbon + oxygen → carbon dioxide + water.",
        "Incomplete combustion (limited O₂): produces toxic carbon monoxide (CO, blocks O₂ transport by haemoglobin) and soot particulates (C, global dimming & breathing issues).",
        "Sulfur dioxide (SO₂, from sulfur impurities in fossil fuels) and nitrogen oxides (NOₓ, from N₂ + O₂ in hot car engines) dissolve in rainwater to cause acid rain.",
        "Greenhouse gases (CO₂ and CH₄) trap outgoing infrared radiation, driving global warming; catalytic converters, low-sulfur fuels, and renewables reduce emissions.",
      ],
      strategies: [
        "Never confuse the **sources** of SO₂ and NOₓ: SO₂ comes from **sulfur impurities in the fuel**; NOₓ comes from **nitrogen and oxygen in the AIR** reacting at high engine temperatures.",
        "Balance complete combustion equations in the **C → H → O** order: balance carbon into CO₂ first, hydrogen into H₂O second, and count total oxygen atoms last!",
        "Keep pollutant effects sharply distinct in exams: CO₂/CH₄ → global warming (NOT acid rain / ozone hole!); SO₂/NOₓ → acid rain; CO → toxic haemoglobin blocker; C soot → global dimming & asthma.",
      ],
      thinkDeeper:
        "A modern petrol car fitted with a **catalytic converter** reduces carbon monoxide (CO) and nitrogen oxides (NOₓ) emissions by over 90%, yet climate scientists point out it does **NOT** stop global warming! Why? Look at the converter's reaction: {{2CO + 2NO -> 2CO_2 + N_2}}. While it eliminates toxic CO and acid-rain-forming NO, the product {{CO_2}} is still a greenhouse gas!",
      workedExamples: [
        {
          title: "Balancing Complete Combustion of Propane (C–H–O Method)",
          problem:
            "Write a balanced symbol equation for the **complete combustion** of propane ({{C_3H_8}}) in excess oxygen.",
          steps: [
            "Write unbalanced reactants & products: {{C_3H_8 + O_2 -> CO_2 + H_2O}}.",
            "Balance **C** first: 3 carbons in {{C_3H_8}} → put **3** in front of {{CO_2}}.",
            "Balance **H** second: 8 hydrogens in {{C_3H_8}} → put **4** in front of {{H_2O}} ({{4 * 2 = 8}}).",
            "Balance **O** last: right side has {{3(2) + 4(1) = 6 + 4 = 10}} oxygen atoms → put **5** in front of {{O_2}} ({{5 * 2 = 10}}).",
          ],
          answer: "{{C_3H_8 + 5O_2 -> 3CO_2 + 4H_2O}}",
          yourTurn: {
            question:
              "In the balanced complete combustion equation for propane (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O), how many molecules of **O₂** react with 1 molecule of propane?",
            answer: { type: "number", value: 5, display: "5" },
            solution:
              "Total oxygen atoms on the right = {{(3 * 2) + (4 * 1) = 10}} atoms = **5** {{O_2}} molecules.",
          },
        },
        {
          title: "Tracing Sources of Acid Rain Pollutants",
          problem:
            "A student claims: 'Removing all sulfur from petrol will completely prevent car exhausts from causing acid rain.' Evaluate whether this claim is correct.",
          steps: [
            "Check what removing sulfur achieves: it prevents **sulfur dioxide (SO₂)** from forming during combustion — that part helps significantly.",
            "Check what is STILL produced inside a hot car engine: **nitrogen oxides (NOₓ)** form from nitrogen and oxygen in the **air** at high engine temperatures, regardless of how pure the petrol is!",
            "Conclude: low-sulfur petrol reduces acid rain, but **NOₓ** will still cause acid rain unless reduced by a **catalytic converter**.",
          ],
          answer:
            "Incorrect — removing sulfur stops SO₂, but hot car engines still produce nitrogen oxides (NOₓ) from air, which also cause acid rain.",
          yourTurn: {
            question:
              "Name the toxic, colourless, odourless gas produced by incomplete combustion that binds to haemoglobin in red blood cells.",
            answer: {
              type: "text",
              accept: ["carbon monoxide", "co"],
              display: "carbon monoxide",
            },
            solution:
              "**Carbon monoxide (CO)** forms when hydrocarbon fuels burn in a limited oxygen supply and stops red blood cells carrying oxygen.",
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
        front: "What is a hydrocarbon?",
        back: "A compound containing hydrogen and carbon atoms ONLY.",
      },
      {
        front: "What is the general formula of the alkanes, and why are they called 'saturated'?",
        back: "CₙH₂ₙ₊₂; saturated because every carbon–carbon bond is a single covalent bond (C–C).",
      },
      {
        front: "Name and give the formulas of the first four alkanes in order.",
        back: "Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).",
      },
      {
        front: "How do boiling point, viscosity, and flammability change as hydrocarbon chain length increases?",
        back: "Boiling point INCREASES, viscosity INCREASES (thicker), and flammability DECREASES.",
      },
      {
        front: "Why do longer-chain alkanes have higher boiling points?",
        back: "Longer molecules have stronger intermolecular forces between them, requiring more thermal energy to separate.",
      },
      {
        front: "How does temperature change inside a crude oil fractionating column?",
        back: "Very hot at the bottom (~350 °C) and progressively cooler towards the top (~25 °C).",
      },
      {
        front: "List the 6 crude oil fractions from TOP (coolest) to BOTTOM (hottest).",
        back: "Refinery gases → Petrol → Kerosene → Diesel oil → Heavy fuel oil → Bitumen.",
      },
      {
        front: "What are the main uses of kerosene, diesel, and bitumen?",
        back: "Kerosene = jet aircraft fuel; Diesel = lorries/buses/trains; Bitumen = surfacing roads and flat roofs.",
      },
      {
        front: "Give two reasons why refineries crack long-chain alkanes.",
        back: "1. Higher demand for short-chain fuels (petrol/diesel). 2. Produces alkenes needed as raw materials for making polymers (plastics).",
      },
      {
        front: "What are the conditions for catalytic cracking and steam cracking?",
        back: "Catalytic cracking: hot catalyst (alumina/zeolite) at ~550 °C. Steam cracking: mixed with steam at very high temperature (~850 °C).",
      },
      {
        front: "What is an alkene, and what is its general formula?",
        back: "An unsaturated hydrocarbon containing a carbon–carbon double bond (C=C); general formula CₙH₂ₙ.",
      },
      {
        front: "How does orange bromine water distinguish an alkene from an alkane?",
        back: "Alkene: turns orange bromine water COLOURLESS rapidly. Alkane: stays orange (no change).",
      },
      {
        front: "Products of complete combustion vs incomplete combustion of a hydrocarbon?",
        back: "Complete (excess O₂): CO₂ + H₂O. Incomplete (limited O₂): toxic carbon monoxide (CO) + carbon soot (C) + H₂O.",
      },
      {
        front: "Why is carbon monoxide (CO) so dangerous to humans?",
        back: "It is colourless and odourless, and binds tightly to haemoglobin in red blood cells, preventing oxygen from reaching cells.",
      },
      {
        front: "Compare the sources of sulfur dioxide (SO₂) and nitrogen oxides (NOₓ).",
        back: "SO₂ comes from sulfur impurities inside fossil fuels; NOₓ forms when N₂ and O₂ from the AIR react at high car-engine temperatures.",
      },
      {
        front: "How do greenhouse gases (CO₂, CH₄) cause global warming?",
        back: "They allow incoming short-wavelength sunlight through to warm Earth, then absorb and re-radiate outgoing long-wavelength infrared heat back towards Earth.",
      },
    ],
    mustKnow: [
      "Can you define crude oil and hydrocarbon (remembering the word ONLY)?",
      "Can you name, draw, and write formulas for methane, ethane, propane, and butane using CₙH₂ₙ₊₂?",
      "Can you explain why longer hydrocarbon chains have higher boiling points, higher viscosity, and lower flammability?",
      "Can you describe how fractional distillation separates crude oil using evaporation, a temperature gradient, and condensation?",
      "Can you list the 6 crude oil fractions in order from top to bottom and state a major use for each?",
      "Can you explain why cracking is needed and state the conditions for catalytic vs steam cracking?",
      "Can you balance any cracking equation by conserving C and H atoms and distinguish alkanes (CₙH₂ₙ₊₂) from alkenes (CₙH₂ₙ)?",
      "Can you describe the orange bromine water test for alkenes (using 'colourless', never 'clear')?",
      "Can you write and balance complete combustion equations (using the C–H–O order) and contrast them with incomplete combustion?",
      "Can you state the sources, effects, and mitigation methods for CO, soot particulates, SO₂, NOₓ, CO₂, and CH₄?",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'A hydrocarbon is any compound containing carbon and hydrogen.'",
        right: "Write instead: 'A hydrocarbon is a compound containing hydrogen and carbon atoms ONLY.'",
      },
      {
        wrong: "Never write: 'Long alkanes have higher boiling points because their strong covalent C–C bonds take more heat to break.'",
        right: "Write instead: 'Long alkanes have higher boiling points because there are stronger INTERMOLECULAR FORCES between neighbouring molecules (covalent bonds do NOT break during boiling).'",
      },
      {
        wrong: "Never write: 'Alkenes turn orange bromine water clear.'",
        right: "Write instead: 'Alkenes turn orange bromine water COLOURLESS' (orange bromine water is already transparent/clear!).",
      },
      {
        wrong: "Never write: 'Nitrogen oxides (NOₓ) come from nitrogen impurities dissolved inside petrol.'",
        right: "Write instead: 'Nitrogen oxides form when nitrogen (N₂) and oxygen (O₂) from the AIR react together at the very high temperatures inside car engines.'",
      },
      {
        wrong: "Never write: 'Carbon dioxide causes acid rain and destroys the ozone layer.'",
        right: "Write instead: 'Carbon dioxide is a GREENHOUSE GAS driving global warming; acid rain is caused by sulfur dioxide (SO₂) and nitrogen oxides (NOₓ).'",
      },
      {
        wrong: "Never write: 'Fractional distillation cracks long molecules into petrol and ethene.'",
        right: "Write instead: 'Fractional distillation is a PHYSICAL separation by boiling point (no bonds broken); CRACKING is a chemical thermal decomposition that breaks covalent C–C bonds.'",
      },
    ],
    examMistakes: [
      "Leaving out the word **ONLY** when defining a hydrocarbon — costs the mark every single time.",
      "Writing 'clear' instead of **colourless** for the positive bromine water test.",
      "Getting the temperature gradient of the fractionating column upside down — remember: **HOT at the bottom, COOL at the top**.",
      "Forgetting to check conservation of BOTH carbon AND hydrogen atoms in a cracking equation.",
      "Confusing viscosity (thickness/resistance to flow) with flammability (ease of burning): long chains have HIGH viscosity and LOW flammability.",
      "Saying catalytic converters stop global warming — they remove toxic CO and NOₓ, but still emit greenhouse gas CO₂.",
      "Confusing carbon monoxide (CO, toxic haemoglobin blocker) with carbon dioxide (CO₂, greenhouse gas).",
    ],
    mnemonics: [
      {
        topic: "First Four Alkanes (C₁–C₄)",
        device: "Monkeys Eat Peeled Bananas",
        explanation:
          "M = Methane (C₁), E = Ethane (C₂), P = Propane (C₃), B = Butane (C₄).",
      },
      {
        topic: "Crude Oil Fractions (Top → Bottom)",
        device: "Really Polite Kids Don't Fight Bullies",
        explanation:
          "Refinery gases → Petrol → Kerosene → Diesel → Fuel oil → Bitumen (coolest/shortest at top to hottest/longest at bottom).",
      },
      {
        topic: "Balancing Combustion Equations",
        device: "C → H → O (Carbon, Hydrogen, Oxygen last)",
        explanation:
          "Always balance Carbon into CO₂ first, Hydrogen into H₂O second, and total Oxygen molecules (O₂) last.",
      },
    ],
    realWorld: [
      {
        title: "Jurong Island Oil Refineries, Singapore",
        emoji: "🏭",
        detail:
          "Singapore is one of the world's top five petroleum refining and petrochemical hubs! Massive fractionating towers and steam crackers on Jurong Island separate crude oil into jet fuel for Changi Airport, ship bunker fuel, and ethene for plastics.",
      },
      {
        title: "Home Carbon Monoxide Detectors",
        emoji: "🚨",
        detail:
          "Because carbon monoxide is invisible and completely odourless, homes with gas boilers or heaters install electronic CO alarms that sound loudly before dangerous levels bind to haemoglobin.",
      },
      {
        title: "Three-Way Catalytic Converters",
        emoji: "🚗",
        detail:
          "Honeycomb ceramic blocks coated with platinum, rhodium, and palladium inside car exhausts provide a huge surface area to turn poisonous CO and smog-causing NOₓ into harmless N₂ and CO₂.",
      },
      {
        title: "Low-Sulfur Marine & Road Fuels",
        emoji: "🚢",
        detail:
          "International shipping rules (IMO 2020) slashed the allowed sulfur content in ship fuel oil from 3.5% down to 0.5%, dramatically cutting SO₂ emissions and acid rain around busy ports like Singapore.",
      },
      {
        title: "Plastic Packaging from Cracked Alkenes",
        emoji: "♻️",
        detail:
          "Ethene and propene produced by cracking heavy oil fractions are joined end-to-end (polymerisation) to manufacture poly(ethene) bags, pipes, and medical syringes.",
      },
    ],
    videos: [
      {
        title: "Crude Oil, Hydrocarbons & Alkanes",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+crude+oil+hydrocarbons+alkanes",
      },
      {
        title: "Fractional Distillation of Crude Oil Explained",
        channel: "FreeScienceLessons",
        url: "https://www.youtube.com/results?search_query=FreeScienceLessons+fractional+distillation+crude+oil",
      },
      {
        title: "Cracking & Alkenes (Bromine Water Test)",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+cracking+and+alkenes+bromine+water",
      },
      {
        title: "Complete & Incomplete Combustion and Atmospheric Pollutants",
        channel: "FreeScienceLessons",
        url: "https://www.youtube.com/results?search_query=FreeScienceLessons+atmospheric+pollutants+acid+rain+carbon+monoxide",
      },
    ],
    formulas: [
      {
        name: "Hydrocarbon",
        formula: "Compound containing hydrogen and carbon ONLY",
        note: "Crude oil is a finite mixture of many different hydrocarbons.",
      },
      {
        name: "Alkane General Formula",
        formula: "{{C_nH_{2n+2}}}",
        note: "Saturated hydrocarbons with single C–C bonds only (CH₄, C₂H₆, C₃H₈, C₄H₁₀).",
      },
      {
        name: "Alkene General Formula",
        formula: "{{C_nH_{2n}}}",
        note: "Unsaturated hydrocarbons containing a C=C double bond (C₂H₄, C₃H₆, C₄H₈).",
      },
      {
        name: "Chain-Length Trend",
        formula: "Longer chain → higher b.p. · higher viscosity · lower flammability",
        note: "Caused by stronger intermolecular forces between larger molecules.",
      },
      {
        name: "Cracking General Equation",
        formula: "long-chain alkane → shorter alkane + alkene(s)",
        note: "Thermal decomposition conserving all C and H atoms.",
      },
      {
        name: "Bromine Water Test",
        formula: "Alkene + orange bromine water → colourless · Alkane → stays orange",
        note: "Tests for an unsaturated C=C double bond; always write 'colourless'.",
      },
      {
        name: "Complete Combustion",
        formula: "hydrocarbon + excess O₂ → CO₂ + H₂O",
        note: "Clean blue flame; releases maximum energy (e.g. CH₄ + 2O₂ → CO₂ + 2H₂O).",
      },
      {
        name: "Incomplete Combustion",
        formula: "hydrocarbon + limited O₂ → CO + C (soot) + H₂O",
        note: "Smoky yellow flame; produces toxic CO and lung-damaging soot.",
      },
      {
        name: "Acid Rain Gases",
        formula: "SO₂ (sulfur impurities in fuel) & NOₓ (air N₂ + O₂ in hot engines)",
        note: "Dissolve in rainwater to lower pH, harming lakes, trees, and stone.",
      },
      {
        name: "Catalytic Converter Reaction",
        formula: "{{2CO + 2NO -> 2CO_2 + N_2}}",
        note: "Removes toxic CO and acid-rain-causing NOₓ from car exhausts.",
      },
      {
        name: "Greenhouse Gases",
        formula: "CO₂ (fossil fuels) & CH₄ (cattle, rice paddies, landfills)",
        note: "Absorb outgoing infrared radiation, driving global warming.",
      },
    ],
  },
};
