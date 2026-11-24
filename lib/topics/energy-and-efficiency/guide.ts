import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "energy-and-efficiency",
  title: "Energy Stores, Transfers & Efficiency",
  strand: "Physics",
  icon: "⚡",
  summary: "Track energy across 8 stores and 4 pathways, read Sankey diagrams, tame heat transfer, and calculate work, power and efficiency.",
  intro:
    "Energy is physics' universal currency: you can move it from one account to another, spread it out, or measure how fast it is spent, yet the grand total never changes. In Year 9 Physics you will learn to trace every joule through **8 energy stores** and **4 transfer pathways**, quantify waste using **Sankey diagrams** and **efficiency**, explain **conduction, convection and infrared radiation** at the particle level, and calculate **work done** and **power** while weighing up the world's **energy resources**.",
  guide: [
    // =========================================================================
    // SECTION 1: Energy Stores, Pathways & Conservation
    // =========================================================================
    {
      id: "stores-transfers-conservation",
      heading: "Energy Stores, Pathways & Conservation",
      discovery: {
        problem:
          "You pull back a rubber band on a slingshot, fire a pebble straight upward, and eventually the pebble lands in sand and stops moving. At the end nothing is stretched, nothing is high up, and nothing is moving. Did the energy disappear?",
        idea:
          "No! Energy can never be created or destroyed. It began in the **elastic potential store** of the rubber band, shifted mechanically to the **kinetic store** of the pebble, shifted to the **gravitational potential store** at the top, returned to kinetic as it fell, and finally dissipated into the **thermal store** of the pebble, sand and surrounding air (making them a tiny fraction of a degree warmer).",
      },
      body: `Think of energy like money held in bank accounts. In modern physics we separate **where energy is kept** (**stores**) from **how energy moves between stores** (**pathways**). Mixing those two up is the single most common Year 9 exam mistake.

### The 8 Energy Stores
| Store | What holds the energy? | Everyday example |
|---|---|---|
| **Kinetic** | Moving objects | A cyclist sprinting along East Coast Park |
| **Gravitational potential (GPE)** | Objects raised in a gravitational field | Water held behind a hydroelectric dam |
| **Elastic potential** | Stretched, squashed or twisted objects | A stretched bowstring or compressed spring |
| **Thermal (internal)** | Vibrating/moving particles in any object | Hot kopi in a mug; warm surrounding air |
| **Chemical** | Bonds between atoms in fuels, food & batteries | Petrol, glucose in a banana, a lithium cell |
| **Nuclear** | Forces inside atomic nuclei | Uranium fuel rods, hydrogen fusing in the Sun |
| **Magnetic** | Repelling or attracting magnetic poles | Two magnets held close together |
| **Electrostatic** | Repelling or attracting electric charges | A rubbed balloon clinging to a wall |

### The 4 Transfer Pathways (NOT stores!)
Energy shifts from one store to another via four pathways:
1. **Mechanical working** — a force moves an object through a distance (e.g. gravity pulling a falling ball, friction slowing brakes).
2. **Electrical working** — an electric current does work in a circuit (e.g. a battery driving a motor).
3. **Heating** — energy flows from a hotter object to a colder one by conduction, convection or infrared radiation.
4. **Radiation (waves)** — energy is carried by waves such as light or sound (e.g. sunlight warming a solar panel; sound carrying energy from a drum).

### The Law of Conservation of Energy & Dissipation
> **Law of Conservation of Energy:** Energy cannot be created or destroyed; it can only be transferred usefully, stored, or dissipated from one store to another.

In a **closed system**, the total energy before a change equals the total energy after: {{E_"before" = E_"after"}}. In real machines, friction and air resistance always spread some energy out into the **thermal store of the surroundings**. We call this **dissipation** — the energy still exists, but it is spread so thinly that it is no longer useful.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy store transfer chain for a battery-powered winch lifting a mass, showing conservation of 200 J total energy">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Conservation of Energy: Electric Winch Lifting a Crate (200 J Total)</text>
  <!-- Start store -->
  <rect x="20" y="68" width="136" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <text x="88" y="96" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Chemical Store</text>
  <text x="88" y="114" text-anchor="middle" font-size="11" fill="var(--ink-2)">(Battery)</text>
  <text x="88" y="138" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">200 J</text>
  <!-- Electrical pathway arrow -->
  <line x1="156" y1="110" x2="218" y2="110" stroke="var(--ink)" stroke-width="2.5" />
  <polygon points="218,104 230,110 218,116" fill="var(--ink)" />
  <text x="190" y="94" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Electrical</text>
  <text x="190" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">working</text>
  <!-- Motor box -->
  <rect x="232" y="76" width="96" height="68" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2" />
  <text x="280" y="106" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--ink)">Motor &amp;</text>
  <text x="280" y="124" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--ink)">Winch</text>
  <!-- Useful path up-right -->
  <path d="M 328 96 L 386 68" stroke="var(--good)" stroke-width="3" fill="none" />
  <polygon points="382,63 396,63 388,74" fill="var(--good)" />
  <text x="352" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Mechanical</text>
  <!-- Useful store -->
  <rect x="398" y="38" width="144" height="66" rx="10" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2" />
  <text x="470" y="60" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Gravitational</text>
  <text x="470" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Potential Store</text>
  <text x="470" y="95" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--good)">140 J (Useful)</text>
  <!-- Wasted path down-right -->
  <path d="M 328 124 L 386 154" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="5,3" fill="none" />
  <polygon points="388,148 396,159 382,159" fill="var(--bad)" />
  <text x="350" y="158" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Heating &amp;</text>
  <text x="350" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Sound waves</text>
  <!-- Dissipated store -->
  <rect x="398" y="128" width="144" height="66" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2" />
  <text x="470" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Thermal Store</text>
  <text x="470" y="165" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(Surroundings)</text>
  <text x="470" y="185" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--bad)">60 J (Dissipated)</text>
  <!-- Conservation equation footer -->
  <rect x="75" y="210" width="410" height="28" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="229" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--ink)">Total Input (200 J) = Useful Output (140 J) + Dissipated (60 J)</text>
</svg>`,
      diagramCaption: "Stores sit in boxes; pathways sit on arrows. Notice how 140 J + 60 J = 200 J — no energy is ever lost from the universe.",
      workedExamples: [
        {
          title: "Accounting for Dissipated Energy",
          problem:
            "A battery-powered toy car uses 200 J from its chemical store. Exactly 75 J ends up in its kinetic store and the remainder is dissipated to the thermal store of the surroundings. State the main pathways involved and calculate the energy dissipated.",
          steps: [
            "Start store: **chemical store** of the battery (200 J).",
            "Pathways: **electrical working** from battery to motor, then **mechanical working** to accelerate the car, while friction transfers energy by **heating** (and sound radiation).",
            "Apply conservation of energy: {{E_\"dissipated\" = E_\"total\" - E_\"useful\" = 200 - 75 = 125}} J.",
          ],
          answer: "125 J dissipated to the thermal store of the surroundings",
          yourTurn: {
            question:
              "A phone charger supplies 450 J via the electrical pathway. If 360 J is transferred into the battery's chemical store, how many joules are dissipated to the thermal store of the surroundings?",
            answer: { type: "number", value: 90, display: "90 J" },
            solution: "By conservation of energy, dissipated energy = 450 J − 360 J = 90 J.",
          },
        },
        {
          title: "Ideal Closed System: A Falling Ball",
          problem:
            "A 2.0 kg ball is released from rest from a balcony where its gravitational potential store holds 180 J. Assuming air resistance is negligible, calculate the energy in its kinetic store at the instant its gravitational potential store has fallen to 65 J.",
          steps: [
            "Because air resistance is negligible, no energy is dissipated — the ball–Earth system is closed.",
            "Total mechanical energy remains 180 J throughout the fall.",
            "At the lower height: {{E_k = 180 - 65 = 115}} J.",
          ],
          answer: "115 J",
        },
      ],
      keyPoints: [
        "There are **8 energy stores** (kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, magnetic, electrostatic) and **4 transfer pathways** (mechanical, electrical, heating, radiation).",
        "**Light**, **sound**, and **electricity** are transfer pathways — never list them as energy stores.",
        "Energy is measured in **joules (J)**, where {{1 \"kJ\" = 1000 \"J\"}} and {{1 \"MJ\" = 1 000 000 \"J\"}}.",
        "In any closed system, total energy before = total energy after (**Law of Conservation of Energy**).",
        "Wasted energy is **dissipated** (spread out) into the **thermal store of the surroundings**, making it less useful.",
      ],
      whyItWorks:
        "Thinking in stores and pathways fixes an old confusion: light and electric currents cannot sit still in a box waiting to be used later. A battery holds a **chemical** store; an electric current is just the **pathway** carrying energy from that chemical store to a motor's **kinetic** store or a heater's **thermal** store.",
      strategies: [
        "**Box-and-Arrow Check:** Put nouns that describe *state* (height, speed, stretch, temperature, fuel) in boxes (stores), and put *actions* (pushing, current flowing, heating, waves) on arrows (pathways).",
        "**Before-and-After Ledger:** List every store's value before the event and add them up; that sum must match the sum of all stores after the event, including the surroundings.",
        "**Never say 'lost':** Replace 'energy is lost as heat' with 'energy is dissipated to the thermal store of the surroundings'.",
      ],
      thinkDeeper:
        "A pendulum swings back and forth inside a classroom and gradually stops. Does this violate the Law of Conservation of Energy? Trace where every joule of its initial gravitational potential store goes, and predict what would happen if you ran the exact same pendulum inside a vacuum chamber on a frictionless pivot.",
    },

    // =========================================================================
    // SECTION 2: Sankey Diagrams & Calculating Efficiency
    // =========================================================================
    {
      id: "sankey-efficiency",
      heading: "Sankey Diagrams & Calculating Efficiency",
      discovery: {
        problem:
          "Old filament light bulbs get burning hot, whereas modern LED bulbs feel barely warm while giving the same brightness. Both are plugged into the same mains supply. If an old bulb needs 60 J every second to give 6 J of useful light, while an LED needs only 10 J to give 6 J of useful light, which wastes less energy — and what fraction of input energy is useful for each?",
        idea:
          "The filament bulb wastes 54 J every second (only {{6/60 = 0.10}} or **10%** useful!). The LED wastes only 4 J every second ({{6/10 = 0.60}} or **60%** useful) — six times more efficient for the exact same brightness!",
      },
      body: `A **Sankey diagram** turns energy conservation into a picture you can read at a glance.

### Rules of a Sankey Diagram
- The **width (thickness)** of every arrow is strictly **proportional** to the amount of energy (in J) or power (in W) it represents. The *length* of the arrow does not matter.
- The **total input** arrow enters from the left.
- The **useful output** arrow continues straight across to the right.
- Any **wasted (dissipated)** energy arrows curve downward.
- Because energy is conserved:
  {{"Total input width" = "Useful output width" + "Wasted output width(s)"}}

### Calculating Efficiency
**Efficiency** tells you what proportion of the total input energy (or power) is transferred usefully:

{{"Efficiency (decimal)" = ("Useful energy output") / ("Total energy input") = ("Useful power output") / ("Total power input")}}

{{"Efficiency (%)" = ("Useful output") / ("Total input") * 100%}}

Notice two mathematical guardrails:
1. Efficiency has **no units** (joules ÷ joules or watts ÷ watts cancel out). Write it either as a decimal between **0 and 1** (e.g. {{0.75}}) or as a percentage between **0% and 100%** (e.g. {{75%}}).
2. No real machine can have an efficiency greater than **1 (100%)** — that would mean creating energy out of nothing!

### Reducing Unwanted Energy Transfers
To boost efficiency, engineers shrink the downward wasted arrow:
- **Lubrication (oil/grease):** Smooths microscopic bumps between moving surfaces, reducing friction and thermal dissipation.
- **Streamlining:** Smooth aerodynamic shapes reduce air resistance (drag) on cars, trains and cyclists.
- **Thermal insulation:** Trapping air or using low-conductivity materials slows unwanted heating of the surroundings.
- **Tightening loose parts & ball bearings:** Reduces vibrations (wasted sound) and sliding friction.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Proportional Sankey diagram showing 100 J total input splitting into 70 J useful kinetic output and 30 J wasted thermal output">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Proportional Sankey Diagram (1 grid step = 10 J)</text>
  <!-- Subtle horizontal grid lines (10 px = 10 J) -->
  <g stroke="var(--line)" stroke-width="0.8" stroke-dasharray="3,3">
    <line x1="40" y1="45" x2="520" y2="45" />
    <line x1="40" y1="65" x2="520" y2="65" />
    <line x1="40" y1="85" x2="520" y2="85" />
    <line x1="40" y1="105" x2="520" y2="105" />
    <line x1="40" y1="125" x2="520" y2="125" />
    <line x1="40" y1="145" x2="520" y2="145" />
  </g>
  <!-- Input + Useful straight band: top at y=45, useful bottom at y=115 (70px thick = 70 J) -->
  <!-- Input bottom at y=145 (100px thick = 100 J). Waste splits down from y=115..145 (30px thick = 30 J) -->
  <!-- Main input to useful arrow -->
  <path d="M 60 45 L 430 45 L 430 33 L 478 80 L 430 127 L 430 115 L 60 115 Z" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2" />
  <!-- Input lower portion curving down into waste arrow (30px thick) -->
  <path d="M 60 115 L 220 115 Q 290 115 290 185 L 302 185 L 275 215 L 248 185 L 260 185 Q 260 145 210 145 L 60 145 Z" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2" />
  <!-- Left bracket showing 100 J -->
  <line x1="50" y1="45" x2="50" y2="145" stroke="var(--ink)" stroke-width="2" />
  <line x1="45" y1="45" x2="55" y2="45" stroke="var(--ink)" stroke-width="2" />
  <line x1="45" y1="145" x2="55" y2="145" stroke="var(--ink)" stroke-width="2" />
  <text x="140" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Total Input</text>
  <text x="140" y="109" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">100 J (100 px)</text>
  <!-- Useful label -->
  <text x="360" y="76" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--good)">Useful Output</text>
  <text x="360" y="93" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">70 J (70 px)</text>
  <!-- Wasted label -->
  <text x="385" y="182" text-anchor="start" font-size="12" font-weight="800" fill="var(--bad)">Wasted Thermal</text>
  <text x="385" y="198" text-anchor="start" font-size="11.5" font-weight="700" fill="var(--ink-2)">30 J (30 px wide)</text>
  <line x1="305" y1="190" x2="378" y2="190" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="3,2" />
  <!-- Bottom formula pill -->
  <rect x="65" y="222" width="430" height="22" rx="6" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="237" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Efficiency = 70 J ÷ 100 J = 0.70 (or 70%)   |   70 J + 30 J = 100 J</text>
</svg>`,
      diagramCaption: "In a scale Sankey diagram, only arrow width represents energy: 70 px useful + 30 px wasted = 100 px total input.",
      workedExamples: [
        {
          title: "Calculating Efficiency from Input and Useful Output",
          problem:
            "An electric motor takes in 800 J of energy via the electrical pathway and transfers 600 J usefully to lift a crate. Calculate (a) the wasted energy and (b) the efficiency as both a decimal and a percentage.",
          steps: [
            "Wasted energy = total input − useful output = {{800 - 600 = 200}} J.",
            "Efficiency (decimal) = {{600 / 800 = 0.75}}.",
            "Efficiency (%) = {{0.75 * 100% = 75%}}.",
          ],
          answer: "Wasted = 200 J; Efficiency = 0.75 (75%)",
          yourTurn: {
            question:
              "An LED lamp has a total power input of 12 W and transfers 9.6 W usefully as light radiation. Calculate its efficiency as a percentage.",
            answer: { type: "number", value: 80, display: "80%" },
            solution: "Efficiency = (9.6 ÷ 12) × 100% = 0.8 × 100% = 80%.",
          },
        },
        {
          title: "Rearranging Efficiency to Find Total Input",
          problem:
            "A wind turbine is 35% efficient and generates 420 kJ of useful electrical energy. Calculate the total kinetic energy input from the wind.",
          steps: [
            "Convert 35% to a decimal: {{0.35}}.",
            "Rearrange {{\"Efficiency\" = \"Useful\" / \"Total\"}} to {{\"Total\" = \"Useful\" / \"Efficiency\"}}.",
            "Substitute: {{\"Total\" = 420 / 0.35 = 1200}} kJ.",
            "Sanity check: 1200 kJ is larger than 420 kJ, which makes sense because some wind energy is always dissipated.",
          ],
          answer: "1200 kJ",
          yourTurn: {
            question:
              "A crane has an efficiency of 0.60 and receives 2500 J of energy. How many joules of useful gravitational potential energy are gained by the load?",
            answer: { type: "number", value: 1500, display: "1500 J" },
            solution: "Useful output = efficiency × total input = 0.60 × 2500 = 1500 J.",
          },
        },
      ],
      keyPoints: [
        "On a Sankey diagram, **arrow width** is proportional to energy or power; arrow length is irrelevant.",
        "Useful output points **horizontally right**; wasted energy curves **downward**.",
        "{{\"Efficiency\" = \"Useful output\" / \"Total input\"}} (multiply by 100 for a percentage).",
        "Efficiency has **no units** and can **never exceed 1 (or 100%)**.",
        "Lubrication, streamlining and thermal insulation all reduce unwanted thermal dissipation and raise efficiency.",
      ],
      whyItWorks:
        "Why does efficiency work equally well with **power (W)** and **energy (J)**? Because power is just energy per second ({{P = E / t}}). Over the same time {{t}}, {{P_\"useful\" / P_\"total\" = (E_\"useful\" / t) / (E_\"total\" / t) = E_\"useful\" / E_\"total\"}} — the time {{t}} cancels completely!",
      strategies: [
        "**Check the ceiling:** If your calculated efficiency comes out above 1 or 100%, you almost certainly divided total by useful instead of useful by total!",
        "**Watch the question's output:** If a question gives *wasted* energy and *total* energy, subtract first to find *useful* energy before dividing.",
        "**Unit match:** Convert kJ and J (or kW and W) to the *same* unit before dividing.",
      ],
      thinkDeeper:
        "An electric space heater is plugged into a wall socket and transfers 1980 J of thermal energy to the room and 20 J of light from its glowing element for every 2000 J of electrical input. Why is an electric heater nearly 100% efficient even though thermal energy is normally 'wasted' in motors and lamps?",
    },

    // =========================================================================
    // SECTION 3: Conduction, Convection & Infrared Radiation
    // =========================================================================
    {
      id: "thermal-transfer",
      heading: "Conduction, Convection & Infrared Radiation",
      discovery: {
        problem:
          "At a Tanglin Science lab bench, a wooden stool leg and a steel table leg are in the exact same air-conditioned room at 22 °C. Yet when you touch both, the steel feels icy cold while the wood feels warm. How can two objects at the exact same temperature feel so different?",
        idea:
          "Your skin senses the **rate of thermal energy leaving your hand**, not temperature directly! Steel is a **thermal conductor** (packed with free delocalised electrons), so it rapidly conducts thermal energy away from your 37 °C hand. Wood is a **thermal insulator**, so it conducts heat away very slowly.",
      },
      body: `Thermal energy always transfers spontaneously from a **hotter region to a colder region** until both reach thermal equilibrium (the same temperature). There are three mechanisms — and each relies on different physics.

### 1. Conduction (mainly Solids)
- In any solid, particles vibrate around fixed positions. Heating one end makes particles there vibrate with **more kinetic energy**.
- They collide with neighbouring particles and pass vibrations along the material.
- **Why metals are superstar conductors:** Metals contain **delocalised (free) electrons** that move rapidly through the metal lattice, colliding with metal ions far down the rod and transferring kinetic energy vastly faster than vibrations alone.
- **Insulators** (wood, plastic, glass, air) have no free electrons. Gases like **air** are terrible conductors because their particles are very far apart — which is why trapped air pockets (foam, wool, feathers, double glazing) make brilliant insulators!

### 2. Convection (Fluids: Liquids & Gases ONLY)
- Cannot happen in solids because solid particles cannot flow from place to place.
- **The 5-step convection cycle** (memorise every link in the chain!):
  1. The fluid near the heat source is heated and gains kinetic energy.
  2. Its particles move faster and spread further apart, so the fluid **expands**.
  3. Because the same mass now occupies a larger volume, its **density decreases**.
  4. The warmer, **less dense** fluid **rises**.
  5. Cooler, **denser** fluid sinks to take its place, setting up a continuous **convection current**.

### 3. Infrared (IR) Radiation (Electromagnetic Waves — works in a Vacuum!)
- Every object above absolute zero emits **infrared radiation** (an electromagnetic wave). The hotter the object, the more IR it emits per second.
- Because IR is a wave — not moving particles — it is the **only mechanism that travels through a vacuum** (like sunlight crossing empty space from the Sun to Earth).
- **Surface colours and textures matter:**
  - **Matt (dull) black** surfaces are the **best absorbers** and **best emitters** of IR radiation.
  - **Shiny silver / white** surfaces are the **best reflectors** and **poorest absorbers/emitters** of IR radiation.

### Designing Insulation: Vacuum Flasks & Homes
| Feature | What it stops | How it works |
|---|---|---|
| **Vacuum between glass walls** | Conduction & convection | No particles present to vibrate or flow |
| **Silvered inner walls** | Infrared radiation | Reflects IR back inside (or reflects external IR out) |
| **Plastic stopper / lid** | Convection & evaporation | Traps warm air inside; plastic is a poor conductor |
| **Double glazing & cavity foam** | Conduction & convection | Trapped air/foam conducts poorly and cannot circulate |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel comparison of thermal energy transfer: conduction in a metal rod, convection current in a heated beaker of water, and infrared radiation across a vacuum">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Three Mechanisms of Thermal Energy Transfer</text>
  <!-- Panel 1: Conduction -->
  <rect x="14" y="34" width="170" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="99" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">1. Conduction</text>
  <text x="99" y="69" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Solids (esp. metals)</text>
  <!-- Metal rod -->
  <rect x="28" y="96" width="142" height="44" rx="6" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5" />
  <!-- Particles vibrating hot->cold -->
  <circle cx="46" cy="118" r="8" fill="var(--bad)" />
  <circle cx="72" cy="118" r="7.5" fill="var(--bad)" opacity="0.75" />
  <circle cx="98" cy="118" r="7" fill="var(--brand)" opacity="0.7" />
  <circle cx="124" cy="118" r="7" fill="var(--brand)" opacity="0.5" />
  <circle cx="150" cy="118" r="7" fill="var(--ink-2)" opacity="0.5" />
  <!-- Free electron darting -->
  <path d="M 48 104 Q 95 92 146 105" stroke="var(--brand)" stroke-width="1.8" fill="none" stroke-dasharray="3,2" />
  <polygon points="145,101 153,106 144,109" fill="var(--brand)" />
  <text x="99" y="88" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Free electrons + vibrations</text>
  <text x="42" y="156" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">HOT</text>
  <text x="152" y="156" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink-2)">COLD</text>
  <text x="99" y="182" text-anchor="middle" font-size="10" fill="var(--ink)">Particles pass vibrations;</text>
  <text x="99" y="196" text-anchor="middle" font-size="10" fill="var(--ink)">free e⁻ speed up metals.</text>
  <text x="99" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Needs particles</text>
  <!-- Panel 2: Convection -->
  <rect x="195" y="34" width="170" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">2. Convection</text>
  <text x="280" y="69" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Liquids &amp; gases only</text>
  <!-- Beaker -->
  <path d="M 225 84 L 225 162 L 335 162 L 335 84" fill="var(--surface)" stroke="var(--ink)" stroke-width="2" />
  <!-- Rising hot arrow left-center, sinking cool right -->
  <path d="M 258 152 L 258 100" stroke="var(--bad)" stroke-width="2.5" fill="none" />
  <polygon points="253,103 258,93 263,103" fill="var(--bad)" />
  <path d="M 264 94 Q 280 88 296 94" stroke="var(--ink-2)" stroke-width="1.8" fill="none" />
  <path d="M 302 100 L 302 146" stroke="var(--brand)" stroke-width="2.5" fill="none" />
  <polygon points="297,144 302,154 307,144" fill="var(--brand)" />
  <text x="242" y="128" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">Less</text>
  <text x="242" y="139" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">dense</text>
  <text x="319" y="128" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand)">Cooler</text>
  <text x="319" y="139" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand)">sinks</text>
  <rect x="240" y="165" width="40" height="8" rx="3" fill="var(--bad)" />
  <text x="280" y="186" text-anchor="middle" font-size="10" fill="var(--ink)">Warm fluid expands,</text>
  <text x="280" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">becomes less dense &amp; rises.</text>
  <text x="280" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Needs flowing fluid</text>
  <!-- Panel 3: IR Radiation -->
  <rect x="376" y="34" width="170" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="461" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">3. IR Radiation</text>
  <text x="461" y="69" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">EM waves (any medium)</text>
  <!-- Hot emitter circle -->
  <circle cx="408" cy="122" r="18" fill="var(--bad)" />
  <text x="408" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">SUN</text>
  <!-- Wavy IR rays across vacuum -->
  <path d="M 432 108 Q 442 100 452 108 T 472 108 T 492 108" stroke="var(--bad)" stroke-width="2" fill="none" />
  <polygon points="490,104 498,108 490,112" fill="var(--bad)" />
  <path d="M 432 124 Q 442 116 452 124 T 472 124 T 492 124" stroke="var(--bad)" stroke-width="2" fill="none" />
  <polygon points="490,120 498,124 490,128" fill="var(--bad)" />
  <path d="M 432 140 Q 442 132 452 140 T 472 140 T 492 140" stroke="var(--bad)" stroke-width="2" fill="none" />
  <polygon points="490,136 498,140 490,144" fill="var(--bad)" />
  <!-- Absorber plate -->
  <rect x="502" y="94" width="16" height="58" rx="3" fill="var(--ink)" />
  <text x="510" y="164" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">Matt</text>
  <text x="510" y="174" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">black</text>
  <text x="461" y="192" text-anchor="middle" font-size="10" fill="var(--ink)">Matt black absorbs/emits;</text>
  <text x="461" y="206" text-anchor="middle" font-size="10" fill="var(--ink)">shiny silver reflects.</text>
  <text x="461" y="222" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Works in a vacuum!</text>
</svg>`,
      diagramCaption: "Match the medium to the mechanism: conduction (vibrating solid + free electrons), convection (density-driven fluid flow), radiation (IR waves even across a vacuum).",
      workedExamples: [
        {
          title: "Explaining a Vacuum Flask Feature-by-Feature",
          problem:
            "Explain how a vacuum flask keeps hot soup warm for hours by linking three structural features to the thermal transfer mechanisms they reduce.",
          steps: [
            "**Double glass wall with a vacuum between them:** Stops **conduction** and **convection** completely because there are no particles in a vacuum to vibrate or move.",
            "**Silvered inner glass surfaces:** Reduces **infrared radiation** because shiny silver surfaces are poor emitters and good reflectors of IR waves.",
            "**Plastic lid / stopper:** Stops warm air rising out (**convection**) and stops evaporation; plastic also has low thermal conductivity (**conduction**).",
          ],
          answer: "Vacuum stops conduction & convection; silvered walls reduce IR radiation; plastic lid stops convection, evaporation & conduction.",
          yourTurn: {
            question:
              "Which thermal energy transfer mechanism is the ONLY one that can travel through the vacuum of space from the Sun to Earth?",
            answer: {
              type: "text",
              accept: ["radiation", "infrared radiation", "infrared", "ir radiation", "thermal radiation"],
              display: "infrared radiation",
            },
            solution: "Infrared radiation (electromagnetic waves) does not require particles, so it is the only mechanism that travels through a vacuum.",
          },
        },
        {
          title: "Quantifying Savings from Thermal Insulation",
          problem:
            "An uninsulated house wall transfers 2400 J of thermal energy outside every second. Installing cavity wall insulation reduces the rate of energy transfer by 65%. Calculate the new rate of energy transfer (in W) and the power saved.",
          steps: [
            "Power saved = {{65%}} of {{2400 \"W\"}} = {{0.65 * 2400 = 1560}} W.",
            "New rate of energy loss = {{2400 - 1560 = 840}} W (or {{0.35 * 2400 = 840}} W).",
            "Notice that trapped foam bubbles in the cavity stop both convection currents and conduction across the gap.",
          ],
          answer: "New heat loss = 840 W; power saved = 1560 W",
          yourTurn: {
            question:
              "An open mug of tea transfers 400 J of thermal energy every minute. Putting an insulated lid on reduces thermal energy loss by 45%. How many joules are transferred per minute now?",
            answer: { type: "number", value: 220, display: "220 J" },
            solution: "Remaining fraction = 100% − 45% = 55% = 0.55. Energy lost per minute = 0.55 × 400 = 220 J.",
          },
        },
      ],
      keyPoints: [
        "**Conduction** occurs mainly in solids; metals conduct rapidly because **delocalised (free) electrons** transfer kinetic energy through the lattice.",
        "**Convection** occurs only in **fluids (liquids and gases)**: heated fluid expands → becomes **less dense** → rises; cooler, denser fluid sinks.",
        "**Never write 'heat rises'!** Write '**warm, less dense fluid rises**'.",
        "**Infrared radiation** is an electromagnetic wave that travels through a **vacuum**; **matt black** is the best absorber & emitter, **shiny silver** is the best reflector.",
        "Good insulators (foam, wool, air gaps) trap tiny pockets of air so neither conduction nor convection can happen easily.",
      ],
      whyItWorks:
        "Why does warm air rise? Not because the individual molecules get lighter! Each air molecule has the exact same mass when heated. What changes is the **spacing** between molecules: faster-moving molecules push further apart, so 1 m³ of warm air contains *fewer* molecules (less mass per unit volume = lower **density**), and the surrounding denser cold air pushes it upward by buoyancy.",
      strategies: [
        "**State-of-Matter Filter:** Solid? Think conduction. Liquid or gas moving? Think convection. Empty space or surface colours? Think IR radiation.",
        "**5-Word Convection Mantra:** *Heat → expand → less dense → rise → sink.*",
        "**Black vs Silver Rule:** Remember matt black is best at *both* absorbing AND emitting — a hot matt black kettle cools *faster* than a shiny silver one!",
      ],
      thinkDeeper:
        "In Singapore's tropical climate, air-conditioning units are always mounted high near the ceiling, while winter radiators in the UK are mounted low near the floor. Use density and convection currents to explain why both placements are scientifically optimal — and what would go wrong if you swapped them.",
    },

    // =========================================================================
    // SECTION 4: Work Done, Power & Renewable vs Non-Renewable Resources
    // =========================================================================
    {
      id: "work-power-resources",
      heading: "Work Done, Power & Renewable vs Non-Renewable Resources",
      discovery: {
        problem:
          "Two identical 60 kg students climb the exact same 5 m staircase at Tanglin. Priya sprints up in 4 seconds; Liam walks slowly up in 12 seconds. Who did more **work**, and who developed more **power**?",
        idea:
          "Both lifted the exact same weight through the exact same vertical distance, so they did the **exact same work**! However, Priya transferred that energy **three times faster**, so her **power** is three times greater than Liam's.",
      },
      body: `### Work Done: Energy Transferred by a Force
In physics, **work is done** whenever a force moves an object through a distance in the direction of the force:

{{W = F * d}}

- {{W}} = work done in **joules (J)**
- {{F}} = force in **newtons (N)**
- {{d}} = distance moved in the direction of the force in **metres (m)**

Crucially, **work done = energy transferred** ({{1 "J" = 1 "N m"}}). Holding a heavy bag completely still transfers **zero mechanical work** to the bag because {{d = 0}}!

### Power: The Rate of Energy Transfer
**Power** measures how fast energy is transferred (or how fast work is done):

{{P = E / t}}   or   {{P = W / t}}

- {{P}} = power in **watts (W)**, where {{1 "W" = 1 "J/s"}} and {{1 "kW" = 1000 "W"}}
- {{E}} (or {{W}}) = energy transferred (or work done) in **joules (J)**
- {{t}} = time taken in **seconds (s)**

### Connecting Stores: GPE and Kinetic Energy (Look-Ahead)
When you lift a mass {{m}} (kg) vertically by height {{h}} (m), you do work against its weight {{m g}}, increasing its **gravitational potential store**: {{E_p = m * g * h}} (with {{g = 10 "N/kg"}} or {{9.8 "N/kg"}}). A moving mass {{m}} at speed {{v}} (m/s) holds **kinetic energy**: {{E_k = 1/2 * m * v^2}}.

### Renewable vs Non-Renewable Energy Resources
- **Non-renewable** resources will eventually run out because they cannot be replenished on a human timescale: **coal, oil, natural gas** (fossil fuels) and **nuclear (uranium)**.
- **Renewable** resources are naturally replenished as fast as (or faster than) we use them: **solar, wind, hydroelectric, tidal, wave, geothermal, biomass**.

| Resource | Renewable? | Emits {{CO_2}} in operation? | Key advantage | Key limitation |
|---|---|---|---|---|
| **Fossil fuels** (coal, oil, gas) | No | Yes (major greenhouse gas) | Reliable, high energy density, quick gas start-up | Finite; causes global warming & acid rain |
| **Nuclear** | No | No | Huge reliable output, zero {{CO_2}} | Radioactive waste; high decommissioning cost |
| **Solar (PV)** | Yes | No | Silent, scales from rooftops to farms (ideal in sunny Singapore!) | Intermittent (no output at night; weather-dependent) |
| **Wind** | Yes | No | Low running cost, zero {{CO_2}} | Unreliable when calm; visual/noise concerns |
| **Hydroelectric** | Yes | No | Reliable, fast start-up on demand | Floods valleys, disrupts river ecosystems; needs hills |
| **Geothermal** | Yes | Very low / No | 24/7 reliable baseload | Only viable in volcanically active regions |
| **Biomass** | Yes (if replanted) | Released when burned (approx. carbon-neutral) | Reliable, uses organic waste | Requires large land area; local air pollution |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formula triangles for Work Done W equals F times d and Power P equals E divided by t, plus a bar chart comparing power outputs">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Work Done (W = F × d) &amp; Power (P = E ÷ t)</text>
  <!-- Left triangle: W = F x d -->
  <rect x="18" y="36" width="166" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="101" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Work Done</text>
  <polygon points="101,68 42,166 160,166" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <line x1="71" y1="118" x2="131" y2="118" stroke="var(--brand)" stroke-width="1.8" />
  <line x1="101" y1="118" x2="101" y2="166" stroke="var(--brand)" stroke-width="1.8" />
  <text x="101" y="108" text-anchor="middle" font-size="18" font-weight="800" fill="var(--ink)">W</text>
  <text x="77" y="152" text-anchor="middle" font-size="17" font-weight="800" fill="var(--ink)">F</text>
  <text x="125" y="152" text-anchor="middle" font-size="17" font-weight="800" fill="var(--ink)">d</text>
  <text x="101" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">W in J · F in N · d in m</text>
  <text x="101" y="206" text-anchor="middle" font-size="10" fill="var(--ink-2)">F = W ÷ d   |   d = W ÷ F</text>
  <text x="101" y="222" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">1 J = 1 N × 1 m</text>
  <!-- Middle triangle: P = E / t -->
  <rect x="197" y="36" width="166" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Power</text>
  <polygon points="280,68 221,166 339,166" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <line x1="250" y1="118" x2="310" y2="118" stroke="var(--brand)" stroke-width="1.8" />
  <line x1="280" y1="118" x2="280" y2="166" stroke="var(--brand)" stroke-width="1.8" />
  <text x="280" y="108" text-anchor="middle" font-size="18" font-weight="800" fill="var(--ink)">E</text>
  <text x="256" y="152" text-anchor="middle" font-size="17" font-weight="800" fill="var(--ink)">P</text>
  <text x="304" y="152" text-anchor="middle" font-size="17" font-weight="800" fill="var(--ink)">t</text>
  <text x="280" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">E in J · P in W · t in s</text>
  <text x="280" y="206" text-anchor="middle" font-size="10" fill="var(--ink-2)">E = P × t   |   t = E ÷ P</text>
  <text x="280" y="222" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">1 W = 1 J/s</text>
  <!-- Right panel: Same Work, Different Power -->
  <rect x="376" y="36" width="166" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="459" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Same Work (3000 J)</text>
  <text x="459" y="70" text-anchor="middle" font-size="10" fill="var(--ink-2)">Faster time = Higher power</text>
  <!-- Bar 1: Priya 4s -> 750 W -->
  <text x="390" y="96" font-size="10.5" font-weight="700" fill="var(--ink)">Sprint (4 s)</text>
  <rect x="390" y="102" width="136" height="24" rx="5" fill="var(--brand)" />
  <text x="458" y="118" text-anchor="middle" font-size="11" font-weight="800" fill="var(--surface)">750 W</text>
  <!-- Bar 2: Liam 12s -> 250 W -->
  <text x="390" y="148" font-size="10.5" font-weight="700" fill="var(--ink)">Walk (12 s)</text>
  <rect x="390" y="154" width="46" height="24" rx="5" fill="var(--bad)" />
  <text x="444" y="170" font-size="11" font-weight="800" fill="var(--bad)">250 W</text>
  <text x="459" y="202" text-anchor="middle" font-size="10" fill="var(--ink-2)">3× faster ⇒ 3× power</text>
  <text x="459" y="218" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">(Work done is identical!)</text>
</svg>`,
      diagramCaption: "Cover the unknown in the triangle to rearrange, and always convert time to seconds (s) and distance to metres (m) before calculating.",
      workedExamples: [
        {
          title: "Two-Step Work Done and Power",
          problem:
            "A student pushes a loaded lab trolley with a steady horizontal force of 45 N over a distance of 8.0 m in 6.0 s. Calculate (a) the work done and (b) the student's power.",
          steps: [
            "Check units: {{F = 45 \"N\"}}, {{d = 8.0 \"m\"}}, {{t = 6.0 \"s\"}} — all standard SI units.",
            "(a) Work done: {{W = F * d = 45 * 8.0 = 360}} J.",
            "(b) Power: {{P = W / t = 360 / 6.0 = 60}} W.",
          ],
          answer: "(a) 360 J; (b) 60 W",
          yourTurn: {
            question:
              "A winch pulls a boat with a steady force of 320 N across a distance of 15 m in 20 s. Calculate the power of the winch in watts.",
            answer: { type: "number", value: 240, display: "240 W" },
            solution: "First find work done: W = 320 × 15 = 4800 J. Then power: P = 4800 ÷ 20 = 240 W.",
          },
        },
        {
          title: "Unit Conversions with Kilowatts and Minutes",
          problem:
            "A 2.4 kW electric kettle is switched on for 1.5 minutes. Calculate the total energy transferred in joules and kilojoules.",
          steps: [
            "Convert power to watts: {{2.4 \"kW\" = 2.4 * 1000 = 2400 \"W\"}}.",
            "Convert time to seconds: {{1.5 \"min\" = 1.5 * 60 = 90 \"s\"}}.",
            "Rearrange {{P = E / t}} to {{E = P * t = 2400 * 90 = 216 000}} J.",
            "Divide by 1000 for kilojoules: {{216 000 / 1000 = 216}} kJ.",
          ],
          answer: "216 000 J (or 216 kJ)",
          yourTurn: {
            question:
              "A 600 W microwave oven operates for 2 minutes. How many joules of energy does it transfer?",
            answer: { type: "number", value: 72000, display: "72000 J" },
            solution: "Time = 2 × 60 = 120 s. Energy = P × t = 600 × 120 = 72 000 J.",
          },
        },
      ],
      keyPoints: [
        "**Work done** {{W = F * d}} (J = N × m) — force must act in the direction of motion.",
        "**Power** {{P = E / t = W / t}} (W = J ÷ s) — 1 watt equals 1 joule transferred every second.",
        "Always convert **minutes → seconds** (× 60), **cm → m** (÷ 100), and **kW → W** (× 1000) before substituting.",
        "**Non-renewable** resources (coal, oil, gas, nuclear) are finite; **renewable** resources (solar, wind, hydro, tidal, geothermal, biomass) are replenished naturally.",
        "**Nuclear** is **non-renewable** (uranium is finite) yet produces **zero {{CO_2}}** during electricity generation — don't confuse 'renewable' with 'carbon-free'!",
      ],
      whyItWorks:
        "If you lift a box twice as heavy ({{2F}}) or twice as high ({{2d}}), you must transfer twice as much energy — so work scales linearly with both {{F}} and {{d}}: {{W = F d}}. And because a powerful engine does the same job in *half* the time, dividing by {{t}} ({{P = W / t}}) automatically doubles the power.",
      strategies: [
        "**SI Unit Audit:** Before plugging numbers into any formula, write down each symbol with its converted SI value ({{F}} in N, {{d}} in m, {{t}} in s, {{P}} in W).",
        "**Two-Axis Resource Comparison:** In evaluation questions, always mention **both** an environmental factor ({{CO_2}}, habitat loss, radioactive waste) **and** a practical factor (reliability/intermittency, cost, location).",
        "**Remember 'Energy = Power × Time':** Whenever a question gives watts and minutes, multiply watts by seconds to get joules.",
      ],
      thinkDeeper:
        "Singapore currently generates around 95% of its electricity from natural gas and has very little flat land or strong steady wind. Why are **floating solar farms** on reservoirs like Tengeh Reservoir and **imported hydroelectric/solar electricity** from neighbouring countries realistic clean-energy strategies for Singapore, whereas geothermal and large onshore wind farms are not?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Name all 8 energy stores.", back: "Kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, magnetic, electrostatic." },
      { front: "Name the 4 energy transfer pathways.", back: "Mechanical working, electrical working, heating, and radiation (light/sound waves)." },
      { front: "State the Law of Conservation of Energy.", back: "Energy cannot be created or destroyed; it can only be transferred usefully, stored, or dissipated from one store to another." },
      { front: "What does 'dissipated' mean in physics?", back: "Energy has spread out into less useful stores — usually the thermal store of the surroundings." },
      { front: "On a Sankey diagram, what represents the amount of energy?", back: "The **width (thickness)** of each arrow — never the length." },
      { front: "State the equation for efficiency.", back: "{{Efficiency = (\"Useful output\") / (\"Total input\")}} (multiply by 100 for %). No units; always ≤ 1 or ≤ 100%." },
      { front: "Why are metals much better thermal conductors than non-metals?", back: "Metals contain **delocalised (free) electrons** that move quickly through the lattice, colliding with ions and transferring kinetic energy rapidly." },
      { front: "Explain how a convection current forms in a heated fluid.", back: "Heated fluid expands → particles spread further apart → density decreases → warm, less dense fluid rises → cooler, denser fluid sinks to replace it." },
      { front: "Which thermal transfer works through a vacuum, and which surface is the best emitter & absorber?", back: "**Infrared (IR) radiation** travels through a vacuum. **Matt (dull) black** is the best absorber and best emitter; **shiny silver** is the best reflector." },
      { front: "State the equation and SI units for work done.", back: "{{W = F * d}}, where {{W}} is work done in joules (J), {{F}} is force in newtons (N), and {{d}} is distance in metres (m)." },
      { front: "Define power and state its equation and SI unit.", back: "Power is the rate of energy transfer (energy transferred per second): {{P = E / t}} (or {{W / t}}), measured in **watts (W)**, where 1 W = 1 J/s." },
      { front: "Is nuclear energy renewable or non-renewable? Does it emit CO₂ when generating electricity?", back: "**Non-renewable** (uranium reserves are finite), but it emits **no {{CO_2}}** during operation." },
      { front: "How does a vacuum flask stop all three forms of heat transfer?", back: "Vacuum stops conduction & convection; silvered walls reflect IR radiation; insulated plastic lid stops convection, evaporation & conduction." },
      { front: "State two ways to increase the efficiency of a mechanical machine.", back: "Lubricating moving parts (reduces friction), streamlining (reduces air resistance/drag), or tightening loose parts (reduces wasted vibrations)." },
    ],
    mustKnow: [
      "Identify initial and final energy stores and the transfer pathways for everyday systems (bouncing ball, kettle, braking car, wind-up toy).",
      "Apply conservation of energy ({{E_\"total in\" = E_\"useful\" + E_\"wasted\"}}) to find missing energy values.",
      "Read, sketch and interpret scale Sankey diagrams by measuring arrow widths.",
      "Calculate efficiency as a decimal or percentage, and rearrange to find useful output or total input.",
      "Explain thermal conduction in non-metals (particle vibrations) and metals (delocalised electrons).",
      "Explain convection currents in liquids and gases using expansion and density changes.",
      "Compare absorption, emission and reflection of infrared radiation by matt black vs shiny silver surfaces.",
      "Calculate work done ({{W = F * d}}) and power ({{P = E / t}}), converting minutes to seconds, cm to m, and kW/kJ to W/J.",
      "Evaluate renewable and non-renewable energy resources by reliability, carbon emissions, and environmental impact.",
      "Explain how insulation features (double glazing, cavity foam, loft insulation, vacuum flasks) reduce unwanted thermal transfers.",
    ],
    misconceptions: [
      {
        wrong: "Light, sound and electricity are energy stores.",
        right: "Light (radiation), sound (radiation) and electricity (electrical working) are **transfer pathways** — energy is held in the 8 stores (chemical, kinetic, GPE, elastic, thermal, nuclear, magnetic, electrostatic).",
      },
      {
        wrong: "Wasted energy is destroyed or used up and disappears.",
        right: "Energy is never destroyed; wasted energy is **dissipated** to the **thermal store of the surroundings**.",
      },
      {
        wrong: "Heat rises in convection currents.",
        right: "**Warm, less dense fluid** (liquid or gas) rises while cooler, denser fluid sinks — 'heat' itself is not a substance that floats.",
      },
      {
        wrong: "Metals feel colder than wood because metals are at a lower temperature.",
        right: "Both are at room temperature; metal conducts thermal energy away from your warmer hand much faster because of its **free electrons**.",
      },
      {
        wrong: "Nuclear power is renewable because it does not release carbon dioxide.",
        right: "Nuclear power is **non-renewable** because uranium ore is a finite resource — zero {{CO_2}} does not mean renewable.",
      },
      {
        wrong: "An efficient machine can have an efficiency of 120%.",
        right: "Efficiency can **never exceed 1 (100%)** because useful energy output can never be greater than total energy input.",
      },
    ],
    examMistakes: [
      "Forgetting to convert time from **minutes to seconds** (× 60) when using {{P = E / t}} or {{E = P * t}}.",
      "Dividing **wasted energy** by total input instead of **useful energy** by total input when calculating efficiency.",
      "Mixing up decimal efficiency and percentage efficiency (e.g. writing 0.65% instead of 65% or 0.65).",
      "Writing 'heat rises' instead of explaining that heated fluid **expands**, becomes **less dense**, and rises.",
      "Forgetting that **matt black** is the best **emitter** as well as the best **absorber** of infrared radiation.",
      "Using **centimetres** or **kilometres** in {{W = F * d}} without converting to metres first.",
      "Claiming 'a vacuum stops radiation' — a vacuum stops conduction and convection, while **infrared radiation** passes right through a vacuum!",
    ],
    mnemonics: [
      {
        topic: "The 8 Energy Stores",
        device: "Kids Get Extra Treats Causing Nasty Messy Explosions",
        explanation: "**K**inetic, **G**ravitational potential, **E**lastic potential, **T**hermal, **C**hemical, **N**uclear, **M**agnetic, **E**lectrostatic.",
      },
      {
        topic: "The 4 Transfer Pathways",
        device: "M-E-H-R (Make Every House Run)",
        explanation: "**M**echanical working, **E**lectrical working, **H**eating, **R**adiation (light/sound waves).",
      },
      {
        topic: "Convection Mechanism",
        device: "H-E-D-R-S (Hot Elephants Dance Right Skyward)",
        explanation: "**H**eated → **E**xpands → **D**ensity decreases → **R**ises → cooler denser fluid **S**inks.",
      },
    ],
    realWorld: [
      {
        title: "Tengeh Reservoir Floating Solar Farm (Singapore)",
        emoji: "☀️",
        detail: "Covering 45 hectares with 122 000 solar panels, this 60 MW floating PV farm powers Singapore's water treatment plants using clean renewable radiation while reservoir water keeps the panels cooler and more efficient.",
      },
      {
        title: "Regenerative Braking in MRT Trains & EVs",
        emoji: "🚇",
        detail: "Instead of dissipating all a train's kinetic store into hot brake pads, regenerative braking runs the motor in reverse as a generator, transferring kinetic energy back into electrical/chemical stores to lift overall efficiency.",
      },
      {
        title: "Spacecraft Foil Blankets & Emergency Thermal Wraps",
        emoji: "🛰️",
        detail: "Both NASA satellites and marathon emergency blankets use shiny metallic surfaces: shiny foil reflects infrared radiation back toward a runner's body (or reflects fierce solar IR away from spacecraft instruments in the vacuum of space).",
      },
      {
        title: "Green Tropical Building Design in Singapore",
        emoji: "🏢",
        detail: "Light-coloured reflective roofs, double-glazed low-emissivity windows, and shaded facades reduce infrared absorption and thermal conduction, slashing air-conditioning power demand.",
      },
      {
        title: "Hydroelectric Pumped Storage",
        emoji: "💧",
        detail: "When wind or solar produces spare electricity, pumps push water uphill into a high reservoir (storing GPE). At peak evening demand, water flows back down through turbines in seconds — acting like a giant rechargeable battery.",
      },
    ],
    videos: [
      {
        title: "Energy Stores and Transfers — GCSE / Year 9 Physics",
        channel: "Cognito / Freesciencelessons",
        url: "https://www.youtube.com/results?search_query=energy+stores+and+transfers+GCSE+physics+cognito",
      },
      {
        title: "Sankey Diagrams and Efficiency Calculations",
        channel: "Physics Online / Cognito",
        url: "https://www.youtube.com/results?search_query=sankey+diagrams+and+efficiency+GCSE+physics",
      },
      {
        title: "Conduction, Convection and Radiation Explained",
        channel: "Cognito / FuseSchool",
        url: "https://www.youtube.com/results?search_query=conduction+convection+radiation+GCSE+physics",
      },
      {
        title: "Work Done, Power and Energy Resources",
        channel: "Freesciencelessons / Cognito",
        url: "https://www.youtube.com/results?search_query=work+done+power+energy+resources+GCSE+physics",
      },
    ],
    formulas: [
      { name: "Conservation of Energy", formula: '{{E_"total in" = E_"useful" + E_"dissipated"}}', note: "Total energy in a closed system never changes (unit: J)." },
      { name: "Efficiency (decimal)", formula: '{{"Efficiency" = "Useful output" / "Total input"}}', note: "Works with energy (J) or power (W). Always between 0 and 1; no units." },
      { name: "Efficiency (percentage)", formula: '{{"Efficiency (%)" = ("Useful output" / "Total input") * 100%}}', note: "Always ≤ 100%." },
      { name: "Work Done", formula: "{{W = F * d}}", note: "W in joules (J), F in newtons (N), d in metres (m) along the force." },
      { name: "Power (Energy)", formula: "{{P = E / t}}", note: "P in watts (W), E in joules (J), t in seconds (s). 1 W = 1 J/s." },
      { name: "Power (Work)", formula: "{{P = W / t}}", note: "Equivalent to E/t because work done equals energy transferred." },
      { name: "Energy from Power", formula: "{{E = P * t}}", note: "Convert kW → W (×1000) and minutes → s (×60) first." },
      { name: "Gravitational Potential Energy", formula: "{{E_p = m * g * h}}", note: "m in kg, g ≈ 9.8 or 10 N/kg, vertical height h in m." },
      { name: "Kinetic Energy", formula: "{{E_k = 1/2 * m * v^2}}", note: "m in kg, speed v in m/s; doubling speed quadruples kinetic energy." },
      { name: "Unit Prefixes", formula: '{{1 "kJ" = 1000 "J", 1 "kW" = 1000 "W", 1 "MJ" = 10^6 "J"}}', note: "kilo = ×1000, mega = ×1 000 000." },
    ],
  },
};
