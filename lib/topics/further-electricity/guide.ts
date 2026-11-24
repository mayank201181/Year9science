import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "further-electricity",
  title: "Further Electricity, Circuits & Resistance",
  strand: "Physics",
  icon: "🔋",
  summary: "Master charge, current, series & parallel rules, Ohm's Law, I–V curves, electrical power, 3-pin plug safety, and static electricity.",
  intro:
    "Every phone screen, Singapore MRT train, and classroom LED runs on one elegant set of rules: moving electric charges transferring energy around closed loops. In Year 9 Further Electricity you move beyond sketching simple bulbs to predicting exact currents, potential differences, resistances, and power ratings—and explaining how sensors, fuses, and earth wires keep modern electrical systems smart and safe.",

  guide: [
    // =========================================================================
    // SECTION 1: Charge, Current, Potential Difference & Circuit Symbols
    // =========================================================================
    {
      id: "charge-current-pd",
      heading: "Charge, Current, Potential Difference & Circuit Symbols",
      discovery: {
        problem:
          "Two identical copper wires carry electricity. Wire X transfers 120 C of electric charge in 1 minute. Wire Y transfers 100 C of electric charge in 25 seconds. Before reading any formula, which wire carries the larger electric current—and why?",
        idea:
          "Current measures **how fast** charge passes a point each second (not total charge alone!). Wire X transfers 120 C in 60 s, which is **2 C per second (2 A)**. Wire Y transfers 100 C in 25 s, which is **4 C per second (4 A)**—double the current despite moving less total charge!",
      },
      body:
        "Inside metal wires, tiny negatively charged **delocalised electrons** can drift through the lattice of positive metal ions. When a cell or power supply is connected in a complete closed loop, it pushes those electrons around the circuit.\n\n" +
        "**Electric current ({{I}})** is the **rate of flow of electric charge**, measured in **amperes (amps, A)** using an **ammeter** connected **in series** (so all the current flows straight through it). One amp means 1 coulomb (C) of charge passes a point every second:\n\n" +
        "- **Charge equation:** {{Q = I * t}} (Charge in coulombs, C = Current in amps, A × Time in seconds, s).\n" +
        "- Rearranged: {{I = Q / t}} and {{t = Q / I}}.\n" +
        "- Always convert minutes to seconds (× 60) and milliamps to amps (÷ 1000) before substituting!\n\n" +
        "**Potential difference (voltage, {{V}})** is the **energy transferred per unit of charge** passing between two points in a circuit, measured in **volts (V)** using a **voltmeter** connected **in parallel** across a component. One volt equals one joule of energy transferred per coulomb of charge ({{1 V = 1 J/C}}), giving {{E = Q * V}}.\n\n" +
        "**Conventional current vs electron flow:** By historical convention (set before electrons were discovered), circuit arrows show **conventional current** flowing from the **positive (+) terminal to the negative (−) terminal**. In metal wires, negatively charged **electrons** actually drift the opposite way, from **negative (−) to positive (+)**.\n\n" +
        "| Component | Function | Key Exam Detail |\n" +
        "|---|---|---|\n" +
        "| Fixed resistor | Limits current at a constant resistance | Plain rectangle on wire |\n" +
        "| Variable resistor | Adjusts resistance smoothly | Rectangle with diagonal arrow |\n" +
        "| Fuse | Melts to break circuit if current is too high | Rectangle with wire straight through |\n" +
        "| Diode / LED | Allows current in one direction only | Triangle pointing to vertical bar (LED adds outward arrows) |\n" +
        "| LDR (Light-Dependent Resistor) | Resistance drops as light intensity rises | Resistor inside circle with two inward arrows |\n" +
        "| Thermistor (NTC) | Resistance drops as temperature rises | Resistor with hockey-stick line across it |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard circuit symbols and ammeter vs voltmeter connections">` +
        `<rect width="560" height="250" rx="12" fill="var(--surface)" />` +
        `<text x="18" y="24" font-size="13" font-weight="700" fill="var(--ink)">Standard Circuit Symbols &amp; Meter Placement</text>` +
        // Row 1 symbols (left side, 3 cols x 3 rows)
        // Cell
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<line x1="20" y1="58" x2="50" y2="58" /><line x1="50" y1="44" x2="50" y2="72" stroke-width="2" />` +
        `<line x1="60" y1="50" x2="60" y2="66" stroke-width="4" /><line x1="60" y1="58" x2="90" y2="58" />` +
        `</g>` +
        `<text x="55" y="84" font-size="10" text-anchor="middle" fill="var(--ink-2)">Cell (+ long, − short)</text>` +
        // Fixed Resistor
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<line x1="120" y1="58" x2="140" y2="58" /><rect x="140" y="48" width="44" height="20" fill="var(--surface-2)" />` +
        `<line x1="184" y1="58" x2="204" y2="58" />` +
        `</g>` +
        `<text x="162" y="84" font-size="10" text-anchor="middle" fill="var(--ink-2)">Fixed Resistor</text>` +
        // Variable Resistor
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<line x1="230" y1="58" x2="250" y2="58" /><rect x="250" y="48" width="44" height="20" fill="var(--surface-2)" />` +
        `<line x1="294" y1="58" x2="314" y2="58" />` +
        `<line x1="254" y1="74" x2="292" y2="42" stroke="var(--brand)" />` +
        `<polygon points="294,40 285,43 290,49" fill="var(--brand)" stroke="none" />` +
        `</g>` +
        `<text x="272" y="84" font-size="10" text-anchor="middle" fill="var(--ink-2)">Variable Resistor</text>` +
        // Row 2: Fuse, Diode, Thermistor
        // Fuse
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<rect x="33" y="114" width="44" height="20" fill="var(--surface-2)" />` +
        `<line x1="20" y1="124" x2="90" y2="124" />` +
        `</g>` +
        `<text x="55" y="150" font-size="10" text-anchor="middle" fill="var(--ink-2)">Fuse</text>` +
        // Diode
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<circle cx="162" cy="124" r="18" fill="var(--surface-2)" />` +
        `<line x1="120" y1="124" x2="152" y2="124" />` +
        `<polygon points="152,114 152,134 170,124" fill="var(--brand-soft)" />` +
        `<line x1="170" y1="114" x2="170" y2="134" />` +
        `<line x1="170" y1="124" x2="204" y2="124" />` +
        `</g>` +
        `<text x="162" y="154" font-size="10" text-anchor="middle" fill="var(--ink-2)">Diode</text>` +
        // Thermistor
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<line x1="230" y1="124" x2="250" y2="124" /><rect x="250" y="114" width="44" height="20" fill="var(--surface-2)" />` +
        `<line x1="294" y1="124" x2="314" y2="124" />` +
        `<polyline points="246,140 256,140 288,108" stroke="var(--bad)" />` +
        `</g>` +
        `<text x="272" y="154" font-size="10" text-anchor="middle" fill="var(--ink-2)">Thermistor</text>` +
        // Row 3: LDR, Lamp, LED
        // LDR
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<circle cx="55" cy="196" r="20" fill="var(--surface-2)" />` +
        `<line x1="20" y1="196" x2="38" y2="196" /><rect x="38" y="189" width="34" height="14" fill="var(--surface)" />` +
        `<line x1="72" y1="196" x2="90" y2="196" />` +
        `<line x1="26" y1="168" x2="40" y2="180" stroke="var(--brand)" /><line x1="36" y1="162" x2="49" y2="174" stroke="var(--brand)" />` +
        `</g>` +
        `<text x="55" y="232" font-size="10" text-anchor="middle" fill="var(--ink-2)">LDR (arrows in)</text>` +
        // Filament Lamp
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<line x1="120" y1="196" x2="146" y2="196" /><circle cx="162" cy="196" r="16" fill="var(--surface-2)" />` +
        `<line x1="151" y1="185" x2="173" y2="207" /><line x1="173" y1="185" x2="151" y2="207" />` +
        `<line x1="178" y1="196" x2="204" y2="196" />` +
        `</g>` +
        `<text x="162" y="232" font-size="10" text-anchor="middle" fill="var(--ink-2)">Filament Lamp</text>` +
        // LED
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<circle cx="272" cy="196" r="16" fill="var(--surface-2)" />` +
        `<line x1="230" y1="196" x2="262" y2="196" /><polygon points="262,188 262,204 278,196" fill="var(--brand-soft)" />` +
        `<line x1="278" y1="188" x2="278" y2="204" /><line x1="278" y1="196" x2="314" y2="196" />` +
        `<line x1="282" y1="178" x2="294" y2="166" stroke="var(--good)" /><line x1="290" y1="184" x2="302" y2="172" stroke="var(--good)" />` +
        `</g>` +
        `<text x="272" y="232" font-size="10" text-anchor="middle" fill="var(--ink-2)">LED (arrows out)</text>` +
        // Divider + Right Panel: Measuring Circuit
        `<line x1="336" y1="36" x2="336" y2="236" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="448" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Correct Meter Connections</text>` +
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        // Circuit loop
        `<polyline points="370,130 370,75 436,75" />` +
        `<line x1="436" y1="63" x2="436" y2="87" /><line x1="446" y1="69" x2="446" y2="81" stroke-width="4" />` +
        `<polyline points="446,75 524,75 524,155 478,155" />` +
        `<rect x="424" y="145" width="54" height="20" fill="var(--surface-2)" />` +
        `<polyline points="424,155 370,155 370,130" />` +
        // Ammeter in series on left wire
        `<circle cx="370" cy="116" r="14" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        // Voltmeter in parallel across resistor
        `<polyline points="414,155 414,205 437,205" stroke="var(--good)" />` +
        `<polyline points="465,205 488,205 488,155" stroke="var(--good)" />` +
        `<circle cx="451" cy="205" r="14" fill="var(--surface-2)" stroke="var(--good)" />` +
        `</g>` +
        `<text x="370" y="121" font-size="13" font-weight="700" text-anchor="middle" fill="var(--brand)">A</text>` +
        `<text x="451" y="210" font-size="13" font-weight="700" text-anchor="middle" fill="var(--good)">V</text>` +
        `<text x="451" y="159" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">R</text>` +
        `<text x="448" y="236" font-size="10" text-anchor="middle" fill="var(--ink-2)">A in series (low R) · V in parallel (high R)</text>` +
        `</svg>`,
      diagramCaption:
        "Memorise the 9 core symbols and meter rules: an ammeter breaks into the loop in series; a voltmeter clips across a component in parallel.",
      workedExamples: [
        {
          title: "Calculating Charge from Current and Time",
          problem: "A desk fan draws a steady current of 2.5 A for 4 minutes. Calculate the total electric charge transferred.",
          steps: [
            "List given values and check SI units: I = 2.5 A, t = 4 minutes.",
            "Convert time to seconds: {{t = 4 * 60 = 240}} s.",
            "Apply {{Q = I * t}}: {{Q = 2.5 * 240 = 600}} C.",
          ],
          answer: "600 C",
          yourTurn: {
            question: "A steady current of 1.5 A flows through a lamp for 3 minutes. Calculate the charge transferred in coulombs.",
            answer: { type: "number", value: 270, display: "270 C" },
            solution: "Convert 3 minutes to seconds: 3 × 60 = 180 s. Then Q = I × t = 1.5 × 180 = 270 C.",
          },
        },
        {
          title: "Finding Current from Charge and Time",
          problem: "A phone charger transfers 450 C of charge in 2.5 minutes. Calculate the charging current.",
          steps: [
            "Convert time to seconds: {{t = 2.5 * 60 = 150}} s.",
            "Rearrange {{Q = I * t}} to make {{I}} the subject: {{I = Q / t}}.",
            "Substitute: {{I = 450 / 150 = 3}} A.",
          ],
          answer: "3 A",
          yourTurn: {
            question: "A camping torch transfers 180 C of charge in 2 minutes. Calculate the current in amps.",
            answer: { type: "number", value: 1.5, display: "1.5 A" },
            solution: "Convert 2 minutes to seconds: 2 × 60 = 120 s. Then I = Q ÷ t = 180 ÷ 120 = 1.5 A.",
          },
        },
      ],
      whyItWorks:
        "Think of electrons in a wire like cyclists riding nose-to-tail around a closed track. **Current** is how many cyclists pass a checkpoint each second (coulombs per second), so an ammeter must sit directly on the track (in series) to count them all without slowing them down (very low resistance). **Potential difference** is how much energy each cyclist drops off between entering and leaving a hill (joules per coulomb), so a voltmeter compares energy before and after the component (in parallel) while stealing virtually no cyclists (very high resistance).",
      keyPoints: [
        "Current is the rate of flow of charge: {{Q = I * t}} with Q in coulombs (C), I in amps (A), and t in seconds (s).",
        "Potential difference is energy transferred per coulomb of charge: {{E = Q * V}}, so 1 V = 1 J/C.",
        "Always connect an **ammeter in series** and a **voltmeter in parallel** across the component being tested.",
        "Conventional current points from + to −, whereas electrons in metal wires drift from − to +.",
        "Always convert minutes to seconds (× 60) and milliamps (mA) to amps (÷ 1000) before calculating.",
      ],
      strategies: [
        "FIFA method: Formula → Insert values (after converting to SI units!) → Fine-tune/rearrange → Answer with unit.",
        "Distinguish LDR vs LED by arrow direction: Light goes IN to a Light-Dependent Resistor; Light comes OUT of a Light-Emitting Diode.",
      ],
      thinkDeeper:
        "What would happen to the current in a circuit if someone accidentally connected a voltmeter in series instead of parallel? Explain using the resistance of a voltmeter.",
    },

    // =========================================================================
    // SECTION 2: Series vs Parallel Circuits
    // =========================================================================
    {
      id: "series-parallel-circuits",
      heading: "Series vs Parallel Circuits",
      discovery: {
        problem:
          "At home, your bedroom ceiling light, desk lamp, and air-conditioner are all connected to the same 230 V mains supply. If you switch off the desk lamp, the air-conditioner keeps running at full power. Are household sockets wired in series or in parallel—and what happens to the total current from the fuse box when you switch ON another appliance?",
        idea:
          "They must be wired in **parallel**! Each appliance sits on its own independent branch with the full 230 V across it. Switching on another branch opens a **new pathway** for charge, so **total current increases** and the **total resistance of the circuit actually decreases**!",
      },
      body:
        "Circuits can connect components in a single unbroken loop (**series**) or across separate branches (**parallel**). Every circuit problem in Year 9 physics comes down to knowing three rules for each layout:\n\n" +
        "| Property | Series Circuit (1 loop) | Parallel Circuit (multiple branches) |\n" +
        "|---|---|---|\n" +
        "| **Current ({{I}})** | **Same everywhere:** {{I_1 = I_2 = I_3}} | **Splits across branches:** {{I_total = I_1 + I_2}} |\n" +
        "| **Potential Difference ({{V}})** | **Shared between components:** {{V_total = V_1 + V_2}} | **Same across every branch:** {{V_total = V_1 = V_2}} |\n" +
        "| **Total Resistance ({{R_total}})** | **Adds up:** {{R_total = R_1 + R_2}} | **Smaller than the smallest branch resistor!** |\n\n" +
        "**Why does adding a resistor in series INCREASE total resistance?** Every electron must pass through BOTH resistors one after the other, experiencing more collisions overall, so current falls.\n\n" +
        "**Why does adding a resistor in parallel DECREASE total resistance?** Adding a parallel branch creates an **extra pathway** for current to flow from the same battery voltage. More total current can leave the battery for the same potential difference, and since {{R_total = V / I_total}}, a bigger total current means a **smaller total resistance**!\n\n" +
        "**Stretch note (two identical resistors in parallel):** Two identical resistors of value {{R}} in parallel carry twice the current of one resistor, so their combined resistance is exactly **half** ({{R / 2}}). More generally, for two parallel branches you can find each branch current using {{I = V / R}}, add them to get {{I_total}}, and then find {{R_total = V / I_total}}.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of a 12 V series circuit and a 12 V parallel circuit with 4 ohm and 2 ohm resistors">` +
        `<rect width="560" height="250" rx="12" fill="var(--surface)" />` +
        // Left: Series
        `<text x="140" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Series Circuit (12 V)</text>` +
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<polyline points="42,175 42,60 128,60" />` +
        `<line x1="128" y1="48" x2="128" y2="72" /><line x1="138" y1="54" x2="138" y2="66" stroke-width="4" />` +
        `<polyline points="138,60 238,60 238,175 212,175" />` +
        `<rect x="156" y="165" width="56" height="20" fill="var(--surface-2)" />` +
        `<line x1="156" y1="175" x2="124" y2="175" />` +
        `<rect x="68" y="165" width="56" height="20" fill="var(--surface-2)" />` +
        `<line x1="68" y1="175" x2="42" y2="175" />` +
        `<circle cx="42" cy="118" r="12" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        `</g>` +
        `<text x="133" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="var(--brand)">12 V</text>` +
        `<text x="42" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">2 A</text>` +
        `<text x="96" y="179" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">4 Ω</text>` +
        `<text x="184" y="179" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">2 Ω</text>` +
        `<text x="96" y="200" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">8 V</text>` +
        `<text x="184" y="200" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">4 V</text>` +
        `<text x="140" y="224" font-size="10" text-anchor="middle" fill="var(--ink-2)">I same (2 A) · V splits (8+4 = 12 V)</text>` +
        `<text x="140" y="239" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">R_total = 4 + 2 = 6 Ω</text>` +
        // Divider
        `<line x1="280" y1="18" x2="280" y2="238" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        // Right: Parallel
        `<text x="420" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Parallel Circuit (12 V)</text>` +
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<polyline points="322,190 322,60 408,60" />` +
        `<line x1="408" y1="48" x2="408" y2="72" /><line x1="418" y1="54" x2="418" y2="66" stroke-width="4" />` +
        `<polyline points="418,60 518,60 518,190" />` +
        // Branch 1 (y = 126)
        `<line x1="322" y1="126" x2="392" y2="126" />` +
        `<rect x="392" y="116" width="56" height="20" fill="var(--surface-2)" />` +
        `<line x1="448" y1="126" x2="518" y2="126" />` +
        // Branch 2 (y = 190)
        `<line x1="322" y1="190" x2="392" y2="190" />` +
        `<rect x="392" y="180" width="56" height="20" fill="var(--surface-2)" />` +
        `<line x1="448" y1="190" x2="518" y2="190" />` +
        // Junction dots
        `<circle cx="322" cy="126" r="3" fill="var(--ink)" /><circle cx="518" cy="126" r="3" fill="var(--ink)" />` +
        `<circle cx="322" cy="92" r="12" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        `</g>` +
        `<text x="413" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="var(--brand)">12 V</text>` +
        `<text x="322" y="96" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">9 A</text>` +
        `<text x="420" y="130" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">4 Ω</text>` +
        `<text x="484" y="121" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">3 A (12 V)</text>` +
        `<text x="420" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">2 Ω</text>` +
        `<text x="484" y="185" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">6 A (12 V)</text>` +
        `<text x="420" y="224" font-size="10" text-anchor="middle" fill="var(--ink-2)">V same (12 V) · I splits (3+6 = 9 A)</text>` +
        `<text x="420" y="239" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">R_total = 12 ÷ 9 = 1.33 Ω (&lt; 2 Ω!)</text>` +
        `</svg>`,
      diagramCaption:
        "Same 12 V supply and same 4 Ω & 2 Ω resistors: in series they add to 6 Ω (2 A); in parallel they give 1.33 Ω (9 A total).",
      workedExamples: [
        {
          title: "Solving a Series Circuit Step by Step",
          problem:
            "A 12 V battery is connected in series with a 4 Ω resistor and a 2 Ω resistor. Calculate the total resistance, the current, and the potential difference across each resistor.",
          steps: [
            "Total resistance in series adds: {{R_total = 4 + 2 = 6}} Ω.",
            "Current everywhere in series is the same: {{I = V / R_total = 12 / 6 = 2}} A.",
            "PD across 4 Ω resistor: {{V_1 = I * R_1 = 2 * 4 = 8}} V.",
            "PD across 2 Ω resistor: {{V_2 = I * R_2 = 2 * 2 = 4}} V. Sanity check: {{8 + 4 = 12}} V!",
          ],
          answer: "R_total = 6 Ω, I = 2 A, V₁ = 8 V, V₂ = 4 V",
          yourTurn: {
            question: "A 15 V battery is connected in series with a 3 Ω resistor and a 7 Ω resistor. Calculate the current flowing in the circuit (in amps).",
            answer: { type: "number", value: 1.5, display: "1.5 A" },
            solution: "Total resistance R_total = 3 + 7 = 10 Ω. Current I = V ÷ R_total = 15 ÷ 10 = 1.5 A.",
          },
        },
        {
          title: "Current Splitting in a Parallel Circuit",
          problem:
            "A 4 Ω resistor and a 6 Ω resistor are connected in parallel across a 12 V battery. Calculate the current in each branch and the total current leaving the battery.",
          steps: [
            "In parallel, each branch receives the full supply potential difference: {{V = 12}} V.",
            "Current in the 4 Ω branch: {{I_1 = 12 / 4 = 3}} A.",
            "Current in the 6 Ω branch: {{I_2 = 12 / 6 = 2}} A.",
            "Total current from the battery is the sum of branch currents: {{I_total = 3 + 2 = 5}} A.",
          ],
          answer: "I₁ = 3 A, I₂ = 2 A, I_total = 5 A",
          yourTurn: {
            question:
              "Two lamps are connected in parallel across a 9 V battery. Branch 1 carries a current of 0.4 A and branch 2 carries a current of 0.6 A. Calculate the total current leaving the battery (in A).",
            answer: { type: "number", value: 1, display: "1 A" },
            solution: "In parallel, total current equals the sum of the branch currents: 0.4 + 0.6 = 1.0 A.",
          },
        },
      ],
      whyItWorks:
        "Imagine traffic leaving a toll plaza (the battery) onto highways. A **series** circuit is a single one-lane road with two toll gates in a row: every car passes both gates, so traffic flow (current) is identical everywhere, and each gate takes a share of the driver's budget (voltage). A **parallel** circuit splits into two separate lanes side by side: opening a second lane lets MORE cars leave the plaza each second, lowering the overall bottleneck (total resistance), while every lane connects the same start and finish points (same voltage).",
      keyPoints: [
        "Series: current is **identical** everywhere, potential difference **splits** (larger resistor gets a larger share of V), and {{R_total = R_1 + R_2}}.",
        "Parallel: potential difference is **identical** across every branch, current **splits** (smaller resistance branch takes larger current), and {{I_total = I_1 + I_2}}.",
        "Adding another resistor in parallel ALWAYS **reduces** total resistance because it opens an extra pathway for charge.",
        "If one bulb blows in series, the whole loop breaks; in parallel, other branches keep working independently.",
      ],
      strategies: [
        "Check your series answers by verifying that the component voltages add back to the battery voltage.",
        "In parallel problems, never add resistances directly—instead find each branch current with {{I = V / R}} and sum the currents!",
      ],
      thinkDeeper:
        "Two identical 10 Ω resistors are connected in parallel across a 10 V supply. Then a THIRD 10 Ω resistor is added in parallel. Predict what happens to (a) the current in each original resistor and (b) the total current leaving the battery.",
    },

    // =========================================================================
    // SECTION 3: Resistance, Ohm's Law & I–V Characteristics
    // =========================================================================
    {
      id: "resistance-ohms-law",
      heading: "Resistance, Ohm's Law & I–V Characteristics",
      discovery: {
        problem:
          "You double the voltage across a cold metal wire and the current doubles. Next, you double the voltage across a glowing filament lamp, but the current increases by LESS than double. Why didn't the filament lamp follow the same straight-line rule?",
        idea:
          "As more current flows through the thin tungsten filament, it heats up dramatically. Hotter metal ions **vibrate faster and more violently**, causing **more frequent collisions** with drifting electrons—so the filament's **resistance increases**!",
      },
      body:
        "**Resistance ({{R}})** is the opposition to the flow of electric current, measured in **ohms (Ω)**. It is defined by the relationship:\n\n" +
        "- **Ohm's Law equation:** {{V = I * R}} (Potential difference in V = Current in A × Resistance in Ω).\n" +
        "- Rearranged: {{R = V / I}} and {{I = V / R}}.\n\n" +
        "**Ohm's Law** states that the current through an **ohmic conductor** (such as a fixed metal resistor) is **directly proportional** to the potential difference across it, **provided the temperature remains constant**. On an **I–V graph** (current on the vertical axis, potential difference on the horizontal axis), this produces a **straight line through the origin** whose gradient equals {{1 / R}} (a steeper line means LOWER resistance!).\n\n" +
        "**Three essential I–V characteristic graphs:**\n" +
        "1. **Fixed Resistor (Ohmic, constant temperature):** Straight line through (0, 0). Doubling {{V}} doubles {{I}}; resistance stays constant.\n" +
        "2. **Filament Lamp (Non-ohmic):** S-shaped curve passing through (0, 0) that gets **flatter** at higher potential differences. Higher current heats the metal filament → metal ions vibrate more → more collisions with electrons → **resistance increases**.\n" +
        "3. **Diode (Non-ohmic):** Allows current in **one direction only**. In reverse bias (negative V), resistance is extremely high so current is essentially zero. In forward bias, above a small threshold (~0.7 V), resistance drops sharply and current rises steeply.\n\n" +
        "**Smart sensing resistors (both non-ohmic with environment):**\n" +
        "- **LDR (Light-Dependent Resistor):** In **darkness**, resistance is very **high** (thousands of Ω). As **light intensity increases**, resistance **decreases** steeply. Used in automatic street lamps and smartphone auto-brightness.\n" +
        "- **Thermistor (NTC):** When **cold**, resistance is **high**. As **temperature increases**, resistance **decreases** steeply (opposite of a metal filament!). Used in thermostats, incubators, and air-conditioner temperature sensors.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="I-V characteristic graphs for an ohmic resistor, filament lamp, and diode, plus LDR and thermistor resistance curves">` +
        `<rect width="560" height="250" rx="12" fill="var(--surface)" />` +
        `<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">I–V Characteristic Curves &amp; Sensor Resistors</text>` +
        // Panel 1: Ohmic Resistor (x: 20..145)
        `<g transform="translate(20,38)">` +
        `<rect width="124" height="128" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<line x1="62" y1="12" x2="62" y2="108" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<line x1="12" y1="60" x2="112" y2="60" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<line x1="20" y1="98" x2="104" y2="22" stroke="var(--brand)" stroke-width="2.5" />` +
        `<text x="68" y="20" font-size="10" font-weight="700" fill="var(--ink-2)">I</text>` +
        `<text x="108" y="55" font-size="10" font-weight="700" fill="var(--ink-2)">V</text>` +
        `<text x="62" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Ohmic Resistor</text>` +
        `</g>` +
        // Panel 2: Filament Lamp (x: 154..278)
        `<g transform="translate(154,38)">` +
        `<rect width="124" height="128" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<line x1="62" y1="12" x2="62" y2="108" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<line x1="12" y1="60" x2="112" y2="60" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<path d="M 16 90 C 36 88, 52 78, 62 60 C 72 42, 88 32, 108 30" fill="none" stroke="var(--bad)" stroke-width="2.5" />` +
        `<text x="68" y="20" font-size="10" font-weight="700" fill="var(--ink-2)">I</text>` +
        `<text x="108" y="55" font-size="10" font-weight="700" fill="var(--ink-2)">V</text>` +
        `<text x="62" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Filament Lamp</text>` +
        `</g>` +
        // Panel 3: Diode (x: 288..412)
        `<g transform="translate(288,38)">` +
        `<rect width="124" height="128" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<line x1="62" y1="12" x2="62" y2="108" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<line x1="12" y1="60" x2="112" y2="60" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<path d="M 16 60 L 76 60 C 86 60, 92 48, 98 18" fill="none" stroke="var(--good)" stroke-width="2.5" />` +
        `<text x="68" y="20" font-size="10" font-weight="700" fill="var(--ink-2)">I</text>` +
        `<text x="108" y="55" font-size="10" font-weight="700" fill="var(--ink-2)">V</text>` +
        `<text x="62" y="122" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Diode (1-way)</text>` +
        `</g>` +
        // Panel 4: LDR / Thermistor R curve (x: 422..544)
        `<g transform="translate(422,38)">` +
        `<rect width="122" height="128" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<line x1="22" y1="16" x2="22" y2="100" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<line x1="22" y1="100" x2="110" y2="100" stroke="var(--ink-2)" stroke-width="1.2" />` +
        `<path d="M 28 22 C 36 68, 56 88, 106 94" fill="none" stroke="var(--brand)" stroke-width="2.5" />` +
        `<text x="14" y="24" font-size="10" font-weight="700" fill="var(--ink-2)">R</text>` +
        `<text x="66" y="112" font-size="9" text-anchor="middle" fill="var(--ink-2)">Light / Temp →</text>` +
        `<text x="61" y="123" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">LDR &amp; Thermistor</text>` +
        `</g>` +
        // Bottom summary callout strip
        `<rect x="20" y="178" width="524" height="58" rx="8" fill="var(--brand-soft)" />` +
        `<text x="282" y="198" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">On an I–V graph: Resistance R = V ÷ I (point value) · Steeper slope = LOWER resistance!</text>` +
        `<text x="282" y="216" font-size="10" text-anchor="middle" fill="var(--ink-2)">Filament lamp heats up → ions vibrate more → R rises.  LDR/Thermistor → more light/heat → R drops.</text>` +
        `</svg>`,
      diagramCaption:
        "Memorise the shape and physical reason behind all four curves: ohmic straight line, filament S-curve, diode one-way curve, and downward LDR/thermistor curve.",
      workedExamples: [
        {
          title: "Using Ohm's Law (V = I × R)",
          problem: "A resistor has a potential difference of 6 V across it and carries a current of 0.4 A. Calculate its resistance.",
          steps: [
            "Write Ohm's Law: {{V = I * R}}.",
            "Rearrange for resistance: {{R = V / I}}.",
            "Substitute: {{R = 6 / 0.4 = 15}} Ω.",
          ],
          answer: "15 Ω",
          yourTurn: {
            question: "A fixed resistor has a resistance of 25 Ω and carries a current of 0.3 A. Calculate the potential difference across it (in volts).",
            answer: { type: "number", value: 7.5, display: "7.5 V" },
            solution: "Using V = I × R: V = 0.3 × 25 = 7.5 V.",
          },
        },
        {
          title: "Sensing Circuit Calculation with an LDR",
          problem:
            "An LDR has a resistance of 200 Ω in bright sunlight and 4000 Ω in darkness. It is connected across a 12 V supply. Compare the current in bright light and in darkness.",
          steps: [
            "In bright light: {{I_light = V / R = 12 / 200 = 0.06}} A (60 mA).",
            "In darkness: {{I_dark = V / R = 12 / 4000 = 0.003}} A (3 mA).",
            "Because darkness raises resistance 20 times, the current drops to one-twentieth of its bright-light value.",
          ],
          answer: "0.06 A in bright light; 0.003 A in darkness",
          yourTurn: {
            question:
              "At 20 °C a thermistor has a resistance of 500 Ω across a 10 V supply. When heated to 60 °C its resistance drops to 100 Ω. Calculate the current through the thermistor at 60 °C (in amps).",
            answer: { type: "number", value: 0.1, display: "0.1 A" },
            solution: "At 60 °C, R = 100 Ω and V = 10 V. Using I = V ÷ R = 10 ÷ 100 = 0.1 A.",
          },
        },
      ],
      whyItWorks:
        "In a metal filament, the number of free electrons is fixed, so heating only makes the lattice ions jiggle more violently—causing more frequent collisions and raising resistance. An LDR or NTC thermistor is made of a **semiconductor**: extra light or heat energy frees many more charge carriers inside the semiconductor, vastly outweighing extra vibrations, so resistance **plummets** instead of rising!",
      keyPoints: [
        "Ohm's Law: {{V = I * R}}, with {{V}} in volts (V), {{I}} in amps (A), and {{R}} in ohms (Ω).",
        "An ohmic conductor gives a straight line through the origin on an I–V graph ONLY at **constant temperature**.",
        "On an I–V graph (I vertical, V horizontal), a **steeper line means lower resistance** ({{gradient = 1 / R}}).",
        "A filament lamp curves flat because heating increases lattice ion vibrations, increasing electron collisions and resistance.",
        "LDR resistance decreases as light increases; thermistor resistance decreases as temperature increases.",
      ],
      strategies: [
        "Before reading a resistor's I–V graph, check which axis has I and which has V—then always compute {{R = V / I}} directly from coordinate values.",
        "Remember **L-U-R-D** and **T-U-R-D**: Light Up → Resistance Down (LDR); Temperature Up → Resistance Down (Thermistor).",
      ],
      thinkDeeper:
        "A student measures a filament lamp at 2 V (current 0.4 A) and at 8 V (current 1.0 A). Compute the resistance at both points and explain why you must NOT find resistance of a curved I–V graph by taking the gradient of a tangent.",
    },

    // =========================================================================
    // SECTION 4: Electrical Power, Mains Safety & Static Electricity
    // =========================================================================
    {
      id: "electrical-power-safety-static",
      heading: "Electrical Power, Mains Safety & Static Electricity",
      discovery: {
        problem:
          "A Singapore mains hairdryer uses 230 V and is rated at 1840 W. You have a drawer containing 3 A, 5 A, and 13 A plug fuses. Which fuse should you fit—and what goes wrong if you pick one that is too small OR too large?",
        idea:
          "First find the normal operating current: {{I = P / V = 1840 / 230 = 8}} A. A 3 A or 5 A fuse would melt immediately during normal use! So you pick the next rating ABOVE the operating current: **13 A**. (A far oversized fuse like 30 A would fail to melt during a fault, allowing the cable to overheat and catch fire.)",
      },
      body:
        "**Electrical power ({{P}})** is the rate at which an appliance transfers energy, measured in **watts (W)**, where {{1 W = 1 J/s}}:\n\n" +
        "- **Power equation:** {{P = I * V}} (Power in watts, W = Current in amps, A × Potential difference in volts, V).\n" +
        "- **Energy transferred:** {{E = P * t}} (Energy in joules, J = Power in watts, W × Time in seconds, s), or combined: {{E = I * V * t}}.\n\n" +
        "**UK & Singapore 3-Pin Mains Plug (230 V AC, 50 Hz):**\n" +
        "- **Live wire (Brown, right):** Carries alternating potential at **230 V** relative to earth. Both the **fuse** and any **switch** are placed in the live wire so the appliance is completely isolated from 230 V when off or when the fuse blows.\n" +
        "- **Neutral wire (Blue, left):** Completes the circuit back to the power station at approximately **0 V**.\n" +
        "- **Earth wire (Green & Yellow stripes, top):** Safety wire at **0 V** connected to the **metal casing** of an appliance. If the live wire comes loose and touches the metal case, a huge fault current rushes safely down the low-resistance earth wire, **melting the fuse** (or tripping a circuit breaker) instantly so nobody gets an electric shock.\n" +
        "- **Double insulation:** Appliances with plastic casings (like phone chargers and hairdryers) carry the double-square symbol and do **not** need an earth wire because the outer case cannot become live.\n\n" +
        "**Static electricity (charging by friction):** When two **insulating** materials are rubbed together (e.g. a polythene rod rubbed with a dry cloth), friction transfers **negatively charged electrons** from one surface to the other—**protons NEVER move** because they are locked inside atomic nuclei!\n" +
        "- The object that **gains electrons** becomes **negatively charged (−)**.\n" +
        "- The object that **loses electrons** is left **positively charged (+)**.\n" +
        "- **Rule of charges:** **Like charges repel** (+ repels +, − repels −); **unlike (opposite) charges attract** (+ attracts −).",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wired 3-pin UK and Singapore mains plug and static electricity electron transfer diagram">` +
        `<rect width="560" height="250" rx="12" fill="var(--surface)" />` +
        // Left side: 3-pin plug (x: 16..300)
        `<text x="158" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">UK / Singapore 3-Pin Plug (230 V AC)</text>` +
        // Plug casing outline
        `<path d="M 158 34 L 246 86 L 234 202 L 82 202 L 70 86 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2" />` +
        // Earth pin (top)
        `<rect x="148" y="46" width="20" height="24" rx="2" fill="#eab308" stroke="var(--ink)" stroke-width="1.5" />` +
        `<text x="158" y="42" font-size="9" font-weight="700" text-anchor="middle" fill="var(--good)">EARTH (Green/Yellow, 0 V)</text>` +
        // Neutral pin (left)
        `<rect x="92" y="114" width="20" height="22" rx="2" fill="#eab308" stroke="var(--ink)" stroke-width="1.5" />` +
        `<text x="50" y="114" font-size="9" font-weight="700" text-anchor="middle" fill="#2563eb">NEUTRAL</text>` +
        `<text x="50" y="126" font-size="9" text-anchor="middle" fill="var(--ink-2)">Blue (0 V)</text>` +
        // Live pin (right) + Fuse
        `<rect x="204" y="114" width="20" height="22" rx="2" fill="#eab308" stroke="var(--ink)" stroke-width="1.5" />` +
        `<rect x="202" y="144" width="24" height="32" rx="3" fill="var(--brand-soft)" stroke="var(--bad)" stroke-width="1.8" />` +
        `<text x="214" y="164" font-size="8" font-weight="700" text-anchor="middle" fill="var(--bad)">FUSE</text>` +
        `<text x="272" y="114" font-size="9" font-weight="700" text-anchor="middle" fill="#92400e">LIVE</text>` +
        `<text x="272" y="126" font-size="9" text-anchor="middle" fill="var(--ink-2)">Brown</text>` +
        `<text x="272" y="138" font-size="9" text-anchor="middle" fill="var(--bad)">(230 V)</text>` +
        // Wires from cable grip (bottom center x=158, y=198)
        `<path d="M 158 194 L 158 70" fill="none" stroke="#16a34a" stroke-width="4" />` +
        `<path d="M 158 194 L 158 70" fill="none" stroke="#facc15" stroke-width="2" stroke-dasharray="5 5" />` +
        `<path d="M 152 194 C 136 176, 102 166, 102 136" fill="none" stroke="#2563eb" stroke-width="4" />` +
        `<path d="M 164 194 C 180 184, 214 186, 214 176" fill="none" stroke="#92400e" stroke-width="4" />` +
        `<line x1="214" y1="144" x2="214" y2="136" stroke="#92400e" stroke-width="4" />` +
        // Cable grip
        `<rect x="132" y="190" width="52" height="14" rx="3" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5" />` +
        `<text x="158" y="200" font-size="8" font-weight="700" text-anchor="middle" fill="var(--ink)">Cable Grip</text>` +
        `<rect x="148" y="204" width="20" height="24" fill="var(--ink-2)" />` +
        `<text x="158" y="242" font-size="9" text-anchor="middle" fill="var(--ink-2)">Brass pins (conduct) · Plastic case (insulates)</text>` +
        // Divider
        `<line x1="312" y1="20" x2="312" y2="238" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        // Right side: Static Electricity Electron Transfer
        `<text x="436" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Static Charging by Friction</text>` +
        // Cloth (loses e-, becomes +)
        `<rect x="332" y="48" width="84" height="58" rx="10" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.8" />` +
        `<text x="374" y="72" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Dry Cloth</text>` +
        `<text x="374" y="92" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bad)">+  +  +</text>` +
        // Polythene rod (gains e-, becomes -)
        `<rect x="456" y="58" width="88" height="36" rx="14" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8" />` +
        `<text x="500" y="73" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Polythene Rod</text>` +
        `<text x="500" y="87" font-size="12" font-weight="700" text-anchor="middle" fill="var(--brand)">−  −  −</text>` +
        // Electron transfer arrow
        `<line x1="418" y1="76" x2="450" y2="76" stroke="var(--brand)" stroke-width="2.5" />` +
        `<polygon points="454,76 446,71 446,81" fill="var(--brand)" />` +
        `<text x="436" y="44" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">Electrons (e⁻) move!</text>` +
        `<text x="436" y="124" font-size="10" text-anchor="middle" fill="var(--ink-2)">Protons stay fixed in the nucleus</text>` +
        // Forces box
        `<rect x="332" y="142" width="212" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<text x="438" y="164" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Electrostatic Forces</text>` +
        `<text x="438" y="186" font-size="11" font-weight="700" text-anchor="middle" fill="var(--bad)">(−)  ←   →  (−)   Like repel</text>` +
        `<text x="438" y="208" font-size="11" font-weight="700" text-anchor="middle" fill="var(--good)">(+)  →   ←  (−)   Unlike attract</text>` +
        `</svg>`,
      diagramCaption:
        "Left: Blue to the Left, bRown to the Right, sTriped to the Top! Right: Friction transfers ONLY negative electrons between insulators.",
      workedExamples: [
        {
          title: "Power, Fuse Rating & Energy Transferred",
          problem:
            "A 2300 W electric kettle operates on the 230 V mains for 2 minutes. Calculate (a) its normal operating current, (b) the correct plug fuse from 3 A, 5 A, or 13 A, and (c) the energy transferred in kJ.",
          steps: [
            "(a) Rearrange {{P = I * V}} to {{I = P / V}}: {{I = 2300 / 230 = 10}} A.",
            "(b) Choose the fuse rating just ABOVE the normal current (10 A): fit a **13 A fuse**.",
            "(c) Convert 2 minutes to seconds: {{t = 2 * 60 = 120}} s. Then {{E = P * t = 2300 * 120 = 276000}} J = **276 kJ**.",
          ],
          answer: "10 A; 13 A fuse; 276 kJ",
          yourTurn: {
            question: "A hairdryer operates on a 230 V mains supply with a current of 5 A. Calculate its electrical power in watts.",
            answer: { type: "number", value: 1150, display: "1150 W" },
            solution: "Using P = I × V: P = 5 × 230 = 1150 W.",
          },
        },
        {
          title: "Explaining Static Charging Without Saying Protons Move",
          problem:
            "A pupil rubs a perspex (acetate) rod with a dry woollen cloth. The perspex rod becomes positively charged. Explain how this happens.",
          steps: [
            "Friction between the two insulators transfers **electrons**.",
            "Negatively charged **electrons move OFF the perspex rod** onto the woollen cloth.",
            "Losing negative electrons leaves the perspex rod with an overall **positive charge**, while the cloth gains an equal **negative charge**.",
          ],
          answer: "Electrons transfer from the perspex rod to the cloth, leaving the rod positively charged.",
        },
      ],
      whyItWorks:
        "Combine our two earlier definitions! Potential difference is energy per coulomb ({{V = E / Q}}) and current is coulombs per second ({{I = Q / t}}). Multiply them together: {{I * V = (Q / t) * (E / Q) = E / t = P}}! The coulombs cancel out cleanly, leaving joules per second—which is electrical power in watts.",
      keyPoints: [
        "Electrical power: {{P = I * V}} (watts = amps × volts); Energy transferred: {{E = P * t}} (joules = watts × seconds).",
        "3-pin plug wiring: **Brown = Live (right, 230 V)**, **Blue = Neutral (left, 0 V)**, **Green/Yellow = Earth (top, 0 V)**.",
        "Always choose a fuse rating slightly **higher** than the normal operating current (from 3 A, 5 A, 13 A), wired into the **live** side.",
        "Circuit breakers (RCCBs/MCBs) work faster than fuses and can be reset with a switch instead of replaced.",
        "Static electricity is caused ONLY by the transfer of **electrons** between insulators; like charges repel, unlike charges attract.",
      ],
      strategies: [
        "Plug wiring rhyme: b**L**ue to the **L**eft, b**R**own to the **R**ight, s**T**riped to the **T**op!",
        "When explaining how an object becomes positively charged by friction, NEVER write 'it gained protons'—always write 'it **lost electrons**'.",
      ],
      thinkDeeper:
        "Why does a plastic-cased toaster NOT exist, whereas a plastic-cased phone charger needs only a 2-pin plug (or a plastic earth pin) in Singapore?",
    },
  ],

  learn: {
    flashcards: [
      { front: "What is electric current and its unit?", back: "The rate of flow of electric charge, measured in amperes (amps, A). 1 A = 1 C/s." },
      { front: "Equation linking charge (Q), current (I), and time (t)?", back: "{{Q = I * t}} (coulombs = amps × seconds)." },
      { front: "What is potential difference (voltage)?", back: "The energy transferred per coulomb of charge between two points, measured in volts (V). 1 V = 1 J/C." },
      { front: "How must an ammeter and a voltmeter be connected?", back: "Ammeter in SERIES (low resistance); Voltmeter in PARALLEL across the component (high resistance)." },
      { front: "Current, PD, and resistance rules in a SERIES circuit?", back: "Current is the SAME everywhere; PD SPLITS across components; total resistance ADDS ({{R_total = R_1 + R_2}})." },
      { front: "Current, PD, and resistance rules in a PARALLEL circuit?", back: "PD is the SAME across each branch; current SPLITS between branches; total resistance is SMALLER than the smallest branch resistor." },
      { front: "State Ohm's Law equation and condition.", back: "{{V = I * R}}. Current is directly proportional to PD for an ohmic conductor at CONSTANT TEMPERATURE." },
      { front: "What does the I–V graph of a filament lamp look like, and why?", back: "An S-shaped curve flattening at high V: higher current heats the filament → metal ions vibrate more → more electron collisions → resistance increases." },
      { front: "What does a diode do in a circuit?", back: "Allows current to flow in ONE direction only (very low resistance in forward bias above ~0.7 V; extremely high resistance in reverse bias)." },
      { front: "How does an LDR's resistance change with light?", back: "Brighter light → LOWER resistance (darkness → high resistance). Used in automatic street lights." },
      { front: "How does an NTC thermistor's resistance change with temperature?", back: "Higher temperature → LOWER resistance (cold → high resistance). Used in thermostats and AC sensors." },
      { front: "Equations for electrical power (P) and energy (E)?", back: "{{P = I * V}} (watts = amps × volts) and {{E = P * t}} (joules = watts × seconds)." },
      { front: "Colours, positions, and potentials of the 3 wires in a UK/Singapore plug?", back: "Live = Brown, Right (230 V); Neutral = Blue, Left (0 V); Earth = Green/Yellow stripes, Top (0 V)." },
      { front: "How do the earth wire and fuse work together during a fault?", back: "If the live wire touches a metal casing, a huge current flows safely to earth through the low-resistance earth wire, melting the fuse in the live wire and disconnecting the 230 V supply." },
      { front: "Why does a double-insulated appliance NOT need an earth wire?", back: "Its outer casing is made of an electrical insulator (plastic), so the user cannot touch live metal even if an internal wire comes loose." },
      { front: "How does an insulating object become positively charged by friction?", back: "Negatively charged ELECTRONS transfer OFF the object onto the other material. Protons never move!" },
    ],
    mustKnow: [
      "Recall and rearrange {{Q = I * t}} (converting minutes to seconds and mA to A).",
      "Draw and recognise all standard circuit symbols including variable resistor, fuse, diode, LED, LDR, and thermistor.",
      "Connect ammeters in series and voltmeters in parallel, explaining their resistance properties.",
      "Apply series and parallel rules for current, potential difference, and total resistance.",
      "Explain why adding a resistor in parallel reduces total circuit resistance.",
      "Recall and rearrange Ohm's Law ({{V = I * R}}) to calculate V, I, or R.",
      "Sketch and explain the I–V graphs for an ohmic resistor, filament lamp, and diode.",
      "Predict how LDR and thermistor resistance changes with light and temperature in sensing circuits.",
      "Calculate electrical power ({{P = I * V}}), energy ({{E = P * t}}), and select the right plug fuse (3 A, 5 A, or 13 A).",
      "Explain the roles of live, neutral, earth wires, fuses, circuit breakers, and electron transfer in static electricity.",
    ],
    misconceptions: [
      {
        wrong: "Current gets 'used up' as it goes around a series circuit, so the second bulb gets less current.",
        right: "Charge is conserved: current is **identical** at every point in a series circuit. It is **energy** (reflected by potential difference) that is transferred in the bulbs.",
      },
      {
        wrong: "Adding another resistor in parallel increases the total resistance because there are more resistors.",
        right: "Adding a resistor in parallel **decreases** total resistance because it opens an extra pathway, allowing more total current to flow from the same supply voltage.",
      },
      {
        wrong: "A steeper line on an I–V graph (I on y-axis, V on x-axis) means a bigger resistance.",
        right: "On an I–V graph, the gradient is {{I / V = 1 / R}}, so a **steeper line means a SMALLER resistance**.",
      },
      {
        wrong: "An object becomes positively charged by friction because protons rub onto it.",
        right: "Protons are locked inside atomic nuclei and NEVER move in friction. An object becomes positive solely because it **loses negatively charged electrons**.",
      },
      {
        wrong: "A 13 A fuse is always safer than a 3 A fuse because it can handle bigger currents.",
        right: "A fuse must be rated just ABOVE the appliance's normal current. Putting a 13 A fuse on a 1 A lamp lets a dangerous 10 A fault overheat the thin flex before the fuse ever melts!",
      },
      {
        wrong: "Heating a thermistor increases its resistance just like a filament lamp.",
        right: "A metal filament's resistance increases when heated, but an NTC **thermistor** is a semiconductor whose resistance **decreases** sharply when temperature rises.",
      },
    ],
    examMistakes: [
      "Forgetting to convert time from minutes to seconds in {{Q = I * t}} or {{E = P * t}}.",
      "Forgetting to convert milliamps (mA) to amps (÷ 1000) or kilowatts (kW) to watts (× 1000).",
      "Adding parallel resistances directly as {{R_1 + R_2}} instead of finding each branch current first.",
      "Stating that the filament lamp's resistance increases simply 'because voltage increased' without mentioning **temperature rising** and **more collisions with vibrating metal ions**.",
      "Putting the fuse or switch in the **neutral** wire instead of the **live** wire (the appliance stays at 230 V even when switched off!).",
      "Writing 'protons move' or 'positive charges move' when explaining static charging by friction.",
      "Drawing a voltmeter in series or leaving gaps at the corners of a circuit diagram.",
    ],
    mnemonics: [
      {
        topic: "3-Pin Plug Wiring",
        device: "bLue Left · bRown Right · sTriped Top",
        explanation: "The second letter of each wire colour tells you its terminal inside an open UK/Singapore 3-pin plug: bLue = Left (Neutral), bRown = Right (Live + Fuse), sTriped = Top (Earth).",
      },
      {
        topic: "LDR & Thermistor Trends",
        device: "LURD & TURD",
        explanation: "Light Up → Resistance Down (LDR); Temperature Up → Resistance Down (Thermistor).",
      },
      {
        topic: "Core Electricity Equations",
        device: "Q = It · V = IR · P = IV",
        explanation: "Three three-letter pyramids unlock almost every Year 9 calculation: 'Quit' (Q=It), 'Vir' (V=IR), and 'Piv' (P=IV).",
      },
    ],
    realWorld: [
      {
        title: "Singapore's 230 V BS 1363 3-Pin Plugs",
        detail: "Singapore uses the same BS 1363 fused 3-pin plug as the UK—widely regarded as one of the safest domestic plugs on Earth thanks to its built-in live fuse, longer earth pin that opens safety shutters first, and insulated pin sleeves.",
        emoji: "🔌",
      },
      {
        title: "Automatic Streetlights & MRT Tunnel Lighting",
        detail: "LDR sensing circuits detect tropical dusk or sudden monsoon cloud cover: as light drops, the LDR's resistance rises, changing the circuit voltage to trigger LED street lamps automatically.",
        emoji: "💡",
      },
      {
        title: "Air-Conditioner Thermostats",
        detail: "Every Tanglin classroom AC relies on an NTC thermistor: as the room cools, the thermistor's resistance rises until the controller switches off the compressor to save energy.",
        emoji: "❄️",
      },
      {
        title: "Aircraft Refuelling & Earthing Straps",
        detail: "Aviation fuel rushing through hoses transfers electrons by friction, creating dangerous static voltages. At Changi Airport, ground crew clip a copper earthing cable between tanker and plane before pumping fuel so charges drain safely without sparking.",
        emoji: "✈️",
      },
      {
        title: "USB-C Fast Charging & Power",
        detail: "Since {{P = I * V}}, doubling a charger's voltage from 5 V to 20 V lets a laptop draw 60 W at just 3 A instead of 12 A—keeping cables thin and cool!",
        emoji: "📱",
      },
    ],
    videos: [
      {
        title: "GCSE Physics — Charge, Current & Q = It",
        channel: "Freesciencelessons",
        url: "https://www.youtube.com/results?search_query=Freesciencelessons+charge+current+Q+It+GCSE+physics",
      },
      {
        title: "Series and Parallel Circuits Explained",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+series+and+parallel+circuits+GCSE+physics",
      },
      {
        title: "I–V Characteristics (Resistor, Filament Lamp & Diode)",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=Cognito+IV+characteristics+ohmic+filament+lamp+diode",
      },
      {
        title: "Electrical Power, Three-Pin Plugs & Static Electricity",
        channel: "Freesciencelessons",
        url: "https://www.youtube.com/results?search_query=Freesciencelessons+three+pin+plug+fuses+power+static+electricity",
      },
    ],
    formulas: [
      { name: "Charge, Current & Time", formula: "{{Q = I * t}}", note: "Q in coulombs (C), I in amps (A), t in seconds (s)." },
      { name: "Energy, Charge & Potential Difference", formula: "{{E = Q * V}}", note: "E in joules (J), Q in coulombs (C), V in volts (V); 1 V = 1 J/C." },
      { name: "Ohm's Law", formula: "{{V = I * R}}", note: "V in volts (V), I in amps (A), R in ohms (Ω)." },
      { name: "Series Total Resistance", formula: "{{R_total = R_1 + R_2}}", note: "Current is identical everywhere; PD splits across components." },
      { name: "Parallel Branch Current Rule", formula: "{{I_total = I_1 + I_2}}", note: "PD is identical across every branch; total R is smaller than the smallest branch." },
      { name: "Electrical Power", formula: "{{P = I * V}}", note: "P in watts (W), I in amps (A), V in volts (V)." },
      { name: "Electrical Energy Transferred", formula: "{{E = P * t}}", note: "E in joules (J), P in watts (W), t in seconds (s)." },
      { name: "Ohmic Conductor", formula: "Constant R at constant temperature", note: "Straight line through the origin on an I–V graph; gradient = 1/R." },
      { name: "LDR & Thermistor", formula: "Light↑ or Temp↑ ⇒ R↓", note: "Semiconductor sensing resistors whose resistance falls as stimulus increases." },
      { name: "3-Pin Plug Standard", formula: "Live Brown (230 V) · Neutral Blue (0 V) · Earth Green/Yellow (0 V)", note: "Fuse and switch ALWAYS sit in the live wire." },
    ],
  },
};
