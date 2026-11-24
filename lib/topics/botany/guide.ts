import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "botany",
  title: "Botany: Plant Biology & Fieldwork",
  strand: "Biology",
  icon: "🌿",
  summary: "How leaves harness light, move water and sugars, reproduce, and how ecologists sample real habitats in Singapore and Gippsland.",
  intro:
    "Plants build almost their entire mass out of thin air and water, lift water tens of metres without a pump, and shape every ecosystem from Tanglin's tropical campus in Singapore to the temperate forests of Gippsland. In this topic you will zoom from the microscopic layers of a leaf all the way out to quadrat and transect fieldwork across whole habitats.",
  guide: [
    // =========================================================================
    // SECTION 1: leaf-structure-cells
    // =========================================================================
    {
      id: "leaf-structure-cells",
      heading: "Plant Organs, Leaf Cross-Section & Specialised Cells",
      discovery: {
        problem:
          "Hold a fresh green leaf up to the light. The top side is usually darker green and shiny, while the underside looks paler and duller. Why would a plant invest more green pigment near the top, coat the top in wax, and hide most of its tiny breathing pores underneath?",
        idea:
          "Sunlight hits the upper surface first, so packing chloroplast-rich cells right under a transparent, waterproof upper skin traps maximum light while blocking water loss. Placing most pores (stomata) on the cooler, shaded underside lets carbon dioxide diffuse in without baking the leaf dry.",
      },
      body:
        "A flowering plant is organised into four main **organs**, each built from specialised tissues:\n\n" +
        "- **Leaves** — the main site of photosynthesis, engineered to be broad (large surface area to absorb sunlight) and thin (short diffusion distance for gases).\n" +
        "- **Stems** — support leaves and flowers toward the light and contain transport tubes (**xylem** and **phloem**).\n" +
        "- **Roots** — anchor the plant and absorb water and dissolved mineral ions from the soil.\n" +
        "- **Flowers** — reproductive organs that produce gametes, seeds, and fruits.\n\n" +
        "### Inside a Leaf Cross-Section (Top to Bottom)\n\n" +
        "| Layer | Structure | Function |\n" +
        "| --- | --- | --- |\n" +
        "| **Waxy cuticle** | Thin waterproof lipid layer on the upper surface | Reduces water loss by evaporation while letting light pass straight through |\n" +
        "| **Upper epidermis** | Single layer of flat, **transparent** cells with no chloroplasts | Protects inner tissues and allows sunlight to reach the palisade layer below |\n" +
        "| **Palisade mesophyll** | Tall, column-shaped cells packed tightly together, full of **chloroplasts** | Main site of photosynthesis; standing vertically minimises cell walls light must cross |\n" +
        "| **Spongy mesophyll** | Loosely packed rounded cells with large **air spaces** between them | Allows rapid diffusion of CO₂ to photosynthesising cells and O₂/water vapour out |\n" +
        "| **Vascular bundle (vein)** | **Xylem** (upper side) and **phloem** (lower side) | Delivers water & minerals to leaf cells and exports dissolved sugars away |\n" +
        "| **Lower epidermis** | Outer protective layer dotted with **stomata** flanked by **guard cells** | Controls gas exchange (CO₂ in, O₂ out) and limits water vapour loss |\n\n" +
        "### Three Classic Specialised Plant Cells\n\n" +
        "1. **Palisade mesophyll cell** — elongated rectangular shape near the leaf top, crammed with dozens of **chloroplasts** containing green **chlorophyll**, and a large central vacuole that pushes chloroplasts out to the cell edge where light and CO₂ arrive first.\n" +
        "2. **Guard cells** — curved pairs of cells around each pore (**stoma**, plural **stomata**). They have unevenly thickened inner cell walls: when water enters and they become **turgid** (swollen), they bow apart and **open** the stoma; when water leaves and they become **flaccid** (limp), they straighten and **close** the stoma to conserve water.\n" +
        "3. **Root hair cell** — epidermal cell near the root tip with a long, finger-like projection. This gives a **huge surface area** for absorbing water (by **osmosis**) and mineral ions (by **active transport**). It has a thin cell wall for a short diffusion path, many mitochondria for active transport, and **NO chloroplasts** because roots grow underground in the dark where photosynthesis is impossible.",
      diagram:
        '<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a leaf showing waxy cuticle, upper epidermis, palisade mesophyll, vascular bundle, spongy mesophyll, lower epidermis, guard cells and stoma">' +
        '<rect x="0" y="0" width="560" height="270" rx="12" fill="var(--surface)" />' +
        '<text x="20" y="22" font-size="13" font-weight="700" fill="var(--ink)">Leaf Cross-Section (Top to Bottom)</text>' +
        '<rect x="24" y="36" width="320" height="10" rx="4" fill="var(--brand)" opacity="0.35" stroke="var(--brand)" stroke-width="1.2" />' +
        '<g fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2">' +
        '<rect x="24" y="46" width="64" height="22" /><rect x="88" y="46" width="64" height="22" />' +
        '<rect x="152" y="46" width="64" height="22" /><rect x="216" y="46" width="64" height="22" /><rect x="280" y="46" width="64" height="22" />' +
        '</g>' +
        '<g fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3">' +
        '<rect x="28" y="70" width="34" height="58" rx="6" /><rect x="66" y="70" width="34" height="58" rx="6" />' +
        '<rect x="104" y="70" width="34" height="58" rx="6" /><rect x="142" y="70" width="34" height="58" rx="6" />' +
        '<rect x="180" y="70" width="34" height="58" rx="6" /><rect x="218" y="70" width="34" height="58" rx="6" />' +
        '<rect x="256" y="70" width="34" height="58" rx="6" /><rect x="294" y="70" width="44" height="58" rx="6" />' +
        '</g>' +
        '<g fill="var(--good)">' +
        '<circle cx="38" cy="84" r="3" /><circle cx="52" cy="94" r="3" /><circle cx="40" cy="112" r="3" />' +
        '<circle cx="76" cy="86" r="3" /><circle cx="90" cy="102" r="3" /><circle cx="78" cy="116" r="3" />' +
        '<circle cx="114" cy="82" r="3" /><circle cx="128" cy="98" r="3" /><circle cx="116" cy="115" r="3" />' +
        '<circle cx="152" cy="86" r="3" /><circle cx="166" cy="104" r="3" /><circle cx="154" cy="116" r="3" />' +
        '<circle cx="192" cy="84" r="3" /><circle cx="204" cy="100" r="3" /><circle cx="192" cy="114" r="3" />' +
        '<circle cx="230" cy="86" r="3" /><circle cx="242" cy="104" r="3" /><circle cx="230" cy="116" r="3" />' +
        '<circle cx="268" cy="84" r="3" /><circle cx="280" cy="102" r="3" /><circle cx="268" cy="115" r="3" />' +
        '<circle cx="308" cy="86" r="3" /><circle cx="324" cy="102" r="3" /><circle cx="310" cy="116" r="3" />' +
        '</g>' +
        '<rect x="24" y="130" width="320" height="72" fill="var(--surface)" stroke="var(--line)" stroke-dasharray="3 3" />' +
        '<g fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2">' +
        '<circle cx="54" cy="152" r="16" /><circle cx="100" cy="176" r="17" /><circle cx="150" cy="154" r="15" />' +
        '<circle cx="282" cy="154" r="16" /><circle cx="318" cy="180" r="15" />' +
        '</g>' +
        '<circle cx="216" cy="166" r="27" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5" />' +
        '<path d="M192 166 A24 24 0 0 1 240 166 Z" fill="var(--bad)" opacity="0.28" stroke="var(--bad)" stroke-width="1.2" />' +
        '<path d="M192 166 A24 24 0 0 0 240 166 Z" fill="var(--good)" opacity="0.28" stroke="var(--good)" stroke-width="1.2" />' +
        '<text x="216" y="159" font-size="9" font-weight="700" text-anchor="middle" fill="var(--ink)">Xylem</text>' +
        '<text x="216" y="179" font-size="9" font-weight="700" text-anchor="middle" fill="var(--ink)">Phloem</text>' +
        '<text x="150" y="190" font-size="10" fill="var(--ink-2)" text-anchor="middle">Air space</text>' +
        '<g fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2">' +
        '<rect x="24" y="202" width="110" height="20" /><rect x="198" y="202" width="146" height="20" />' +
        '</g>' +
        '<ellipse cx="146" cy="212" rx="12" ry="9" fill="var(--good)" opacity="0.55" stroke="var(--good)" stroke-width="1.4" />' +
        '<ellipse cx="186" cy="212" rx="12" ry="9" fill="var(--good)" opacity="0.55" stroke="var(--good)" stroke-width="1.4" />' +
        '<path d="M166 248 L166 220" stroke="var(--brand)" stroke-width="2" />' +
        '<polygon points="166,216 162,223 170,223" fill="var(--brand)" />' +
        '<text x="166" y="261" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">CO₂ in · O₂ &amp; H₂O out (Stoma)</text>' +
        '<g stroke="var(--ink-2)" stroke-width="1">' +
        '<line x1="344" y1="41" x2="372" y2="41" /><line x1="344" y1="57" x2="372" y2="57" />' +
        '<line x1="344" y1="98" x2="372" y2="98" /><line x1="243" y1="166" x2="372" y2="146" />' +
        '<line x1="333" y1="180" x2="372" y2="180" /><line x1="344" y1="212" x2="372" y2="212" />' +
        '<line x1="196" y1="220" x2="372" y2="236" />' +
        '</g>' +
        '<g font-size="11" fill="var(--ink)" font-weight="600">' +
        '<text x="378" y="45">Waxy cuticle (waterproof)</text>' +
        '<text x="378" y="61">Upper epidermis (transparent)</text>' +
        '<text x="378" y="102">Palisade mesophyll (chloroplasts)</text>' +
        '<text x="378" y="150">Vascular bundle (vein)</text>' +
        '<text x="378" y="184">Spongy mesophyll &amp; air spaces</text>' +
        '<text x="378" y="216">Lower epidermis</text>' +
        '<text x="378" y="240">Guard cells &amp; stoma</text>' +
        '</g>' +
        '</svg>',
      diagramCaption: "Every layer in a leaf cross-section is positioned to maximise light capture and gas diffusion while reducing evaporation.",
      whyItWorks:
        "Diffusion is fast over tiny distances (fractions of a millimetre) but painfully slow over centimetres. By keeping leaves paper-thin and placing open air spaces right beside spongy mesophyll cells, CO₂ reaches every chloroplast rapidly. Meanwhile, the vertical palisade cells act like fibre-optic columns stacked right below a clear epidermis window.",
      keyPoints: [
        "Waxy cuticle + transparent upper epidermis reduce water evaporation while letting sunlight reach the palisade layer.",
        "Palisade mesophyll cells sit near the top of the leaf and are packed with chloroplasts — the primary site of photosynthesis.",
        "Spongy mesophyll has large air spaces so CO₂, O₂ and water vapour diffuse quickly to and from cells.",
        "Guard cells open stomata when turgid (water in) and close them when flaccid (water out), mostly on the lower epidermis.",
        "Root hair cells have a long projection for a huge surface area and NO chloroplasts because they are underground in darkness.",
      ],
      strategies: [
        "Link **structure → function**: never just write 'root hair cells have a projection' — finish with 'which increases surface area to absorb water and minerals faster'.",
        "Work strictly **top to bottom** when labelling a leaf cross-section: Waxy cuticle → Upper epidermis → Palisade → Spongy → Lower epidermis.",
        "Always check **units** when calculating stomatal density (count ÷ area in mm²).",
      ],
      thinkDeeper:
        "Floating water lilies have their stomata on the **upper** epidermis instead of the lower epidermis, and desert cacti have leaves reduced to sharp spines with green stems. Explain how each extreme adaptation solves a different environmental challenge.",
      workedExamples: [
        {
          title: "Calculating Stomatal Density Under a Microscope",
          problem:
            "A Year 9 student peels nail varnish off the lower epidermis of a hibiscus leaf on the Tanglin campus. In a microscope field of view of area {{0.25}} mm², they count 38, 42 and 40 stomata in three random spots. Calculate the mean stomatal density in stomata per mm².",
          steps: [
            "Find the mean number of stomata per field of view: {{(38 + 42 + 40) / 3 = 120 / 3 = 40}} stomata.",
            "Divide the mean count by the field-of-view area ({{0.25}} mm²): {{40 / 0.25 = 160}}.",
            "Include units: 160 stomata per mm².",
          ],
          answer: "160 stomata/mm²",
          yourTurn: {
            question:
              "On a eucalyptus leaf in Gippsland, a student counts 22, 26 and 24 stomata across three microscope views, each of area 0.2 mm². What is the mean stomatal density (in stomata per mm²)?",
            answer: { type: "number", value: 120, display: "120" },
            solution:
              "Mean count = (22 + 26 + 24) ÷ 3 = 24 stomata. Stomatal density = 24 ÷ 0.2 = 120 stomata per mm².",
          },
        },
        {
          title: "Comparing Specialised Plant Cells",
          problem:
            "A student claims that root hair cells contain lots of chloroplasts to make food for the roots. State whether they are correct and explain why.",
          steps: [
            "Identify the misconception: the student is **incorrect** — root hair cells contain **no chloroplasts**.",
            "Explain the biological reason: roots grow underground in the dark, so there is no light for photosynthesis.",
            "Add how roots actually get glucose: sugars are transported down from the leaves in the **phloem**.",
          ],
          answer: "Incorrect — root hair cells grow underground in the dark so they cannot photosynthesise and have no chloroplasts.",
          yourTurn: {
            question:
              "Which leaf tissue layer contains the highest concentration of chloroplasts for absorbing sunlight?",
            answer: {
              type: "text",
              accept: ["palisade mesophyll", "palisade layer", "palisade", "palisade cells", "palisade tissue"],
              display: "palisade mesophyll",
            },
            solution:
              "The palisade mesophyll sits directly beneath the transparent upper epidermis and its tall cells are packed with chloroplasts.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: photosynthesis-starch
    // =========================================================================
    {
      id: "photosynthesis-starch",
      heading: "Photosynthesis, Limiting Factors & Testing for Starch",
      discovery: {
        problem:
          "A tropical rain tree begins as a tiny seed weighing less than 1 g and grows into a 10-tonne giant, yet the soil underneath barely loses any mass. Where do all the carbon atoms in its solid wood and leaves come from?",
        idea:
          "Almost all of the dry mass of a plant comes from **carbon dioxide gas** in the air (combined with water from the soil) during photosynthesis — plants literally build solid sugar and wood out of air, water, and sunlight!",
      },
      body:
        "**Photosynthesis** is the **endothermic** chemical reaction in chloroplasts that uses light energy absorbed by **chlorophyll** to convert carbon dioxide and water into glucose and oxygen:\n\n" +
        "- **Word equation:** `carbon dioxide + water → glucose + oxygen` (with **light** and **chlorophyll** written above/below the arrow)\n" +
        "- **Balanced symbol equation:** `6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`\n\n" +
        "Because glucose is soluble and would affect water movement (osmosis) in cells, plants rapidly join glucose molecules into **insoluble starch** for storage. Plants also use glucose for **respiration** (24 hours a day!), to make **cellulose** cell walls, lipids/oils in seeds, and (combined with **nitrate ions** from soil) **amino acids** to build proteins.\n\n" +
        "### Testing a Leaf for Starch (4 Essential Steps)\n\n" +
        "1. **Boil the leaf in water** for ~1 minute — kills the cells, breaks cell membranes so iodine can enter, and denatures enzymes so starch cannot break down.\n" +
        "2. **Turn OFF the Bunsen burner, then heat the leaf in ethanol** inside a boiling tube placed in a hot water bath — removes the green **chlorophyll** so the colour change is clear. Turning off the flame is critical because **ethanol is highly flammable**.\n" +
        "3. **Rinse the leaf in warm water** — washes off ethanol and softens the brittle leaf so it spreads flat on a white tile.\n" +
        "4. **Add orange-brown iodine solution** — if starch is present, iodine turns **blue-black**; if no starch is present, it stays **orange-brown**.\n\n" +
        "**Classic control experiments:** Before testing, a potted plant is kept in the dark for 24–48 hours to **destarch** it (it uses up stored starch in respiration). Then:\n" +
        "- A **variegated leaf** (green + white patches) tests blue-black ONLY on green parts → proves **chlorophyll** is needed.\n" +
        "- Covering part of a leaf with **black foil** keeps that strip orange-brown → proves **light** is needed.\n" +
        "- Sealing a leaf in a flask with **soda lime / potassium hydroxide** (which absorbs CO₂) gives no starch → proves **carbon dioxide** is needed.\n\n" +
        "### Limiting Factors\n\n" +
        "A **limiting factor** is whichever factor is in shortest supply and therefore stops the rate of photosynthesis increasing any further. The three main environmental limiting factors are **light intensity**, **CO₂ concentration**, and **temperature**:\n\n" +
        "- **Light intensity / CO₂ graphs:** As you increase the factor on the x-axis, the rate rises linearly (that factor is limiting). Once the curve **levels off (plateaus)**, adding more of that x-axis factor makes no difference — one of the *other* factors (e.g., CO₂ or temperature) has become the limiting factor.\n" +
        "- **Temperature graph:** Rate rises steadily up to an **optimum** (around 30–37 °C) as particles gain kinetic energy and collide more often. Above ~40–45 °C the rate plunges to zero because the **enzymes** controlling photosynthesis **denature** (their active sites change shape permanently).\n\n" +
        "In lab experiments with pondweed (*Elodea* or *Cabomba*), we measure rate by counting oxygen bubbles per minute (or collecting O₂ gas in a gas syringe for better accuracy), adding **sodium hydrogencarbonate** so CO₂ is in excess and using an **LED lamp** or glass water heat-shield so temperature stays constant.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two graphs showing photosynthesis limiting factors: light intensity plateauing at low versus high carbon dioxide, and temperature peaking at optimum then dropping due to enzyme denaturation">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />' +
        '<text x="145" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="var(--ink)">Light Intensity &amp; CO₂</text>' +
        '<line x1="44" y1="200" x2="262" y2="200" stroke="var(--ink)" stroke-width="1.6" />' +
        '<line x1="44" y1="200" x2="44" y2="38" stroke="var(--ink)" stroke-width="1.6" />' +
        '<text x="153" y="224" font-size="11" text-anchor="middle" fill="var(--ink-2)">Light intensity</text>' +
        '<text x="18" y="120" font-size="11" text-anchor="middle" fill="var(--ink-2)" transform="rotate(-90 18 120)">Rate of photosynthesis</text>' +
        '<path d="M44 200 Q92 105 142 98 L254 98" fill="none" stroke="var(--brand)" stroke-width="2.6" />' +
        '<path d="M44 200 Q80 142 120 140 L254 140" fill="none" stroke="var(--ink-2)" stroke-width="2.2" stroke-dasharray="5 4" />' +
        '<text x="196" y="89" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">High CO₂ (0.1%)</text>' +
        '<text x="196" y="132" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Low CO₂ (0.04%)</text>' +
        '<text x="86" y="182" font-size="9.5" fill="var(--good)" font-weight="700">Light limits</text>' +
        '<text x="198" y="156" font-size="9.5" fill="var(--bad)" text-anchor="middle" font-weight="700">Plateau: CO₂ or temp limits</text>' +
        '<line x1="286" y1="24" x2="286" y2="232" stroke="var(--line)" stroke-width="1" />' +
        '<text x="425" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="var(--ink)">Temperature &amp; Enzymes</text>' +
        '<line x1="322" y1="200" x2="540" y2="200" stroke="var(--ink)" stroke-width="1.6" />' +
        '<line x1="322" y1="200" x2="322" y2="38" stroke="var(--ink)" stroke-width="1.6" />' +
        '<text x="431" y="224" font-size="11" text-anchor="middle" fill="var(--ink-2)">Temperature (°C)</text>' +
        '<path d="M326 194 Q388 145 436 62 Q462 56 480 120 L504 198" fill="none" stroke="var(--brand)" stroke-width="2.6" />' +
        '<line x1="444" y1="60" x2="444" y2="200" stroke="var(--good)" stroke-width="1.2" stroke-dasharray="3 3" />' +
        '<circle cx="444" cy="60" r="4" fill="var(--good)" />' +
        '<text x="444" y="49" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">Optimum (~35 °C)</text>' +
        '<text x="444" y="213" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">35</text>' +
        '<text x="504" y="213" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">50</text>' +
        '<text x="502" y="132" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--bad)">Enzymes</text>' +
        '<text x="502" y="144" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--bad)">denature</text>' +
        '<text x="366" y="150" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">More kinetic</text>' +
        '<text x="366" y="162" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">energy</text>' +
        '</svg>',
      diagramCaption: "Left: where a curve slopes upwards, the x-axis factor is limiting; where it flattens, another factor is limiting. Right: high temperatures denature enzymes.",
      whyItWorks:
        "Think of photosynthesis like a bakery making sandwiches that require bread (CO₂), filling (water), and a baker working under a lamp (light + enzymes). Doubling the bread supply makes zero difference if the room is pitch dark — the bottleneck (limiting factor) always sets the maximum speed.",
      keyPoints: [
        "Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (endothermic; requires light energy absorbed by chlorophyll).",
        "Starch test: boil in water → turn flame OFF & heat in ethanol water bath (dissolves chlorophyll) → rinse in warm water → iodine turns blue-black.",
        "Always destarch plants in darkness for 24–48 h before starting a photosynthesis experiment so any starch found was made during the test.",
        "On a limiting-factor graph, the sloping section is limited by the x-axis factor; the flat plateau is limited by another factor.",
        "Above the optimum temperature (~40–45 °C), photosynthesis drops sharply because enzymes denature (never say enzymes are 'killed'!).",
      ],
      strategies: [
        "Read the **slope vs plateau**: 'As light increases from 0 to X, light is the limiting factor; above X the curve levels off, so CO₂ or temperature is now limiting.'",
        "In ethanol starch-test questions, ALWAYS pair the **safety step** ('turn off the Bunsen burner / use a hot water bath') with the **reason** ('ethanol is flammable').",
        "In pondweed trials, check for an **anomalous repeat** before calculating the mean bubble rate.",
      ],
      thinkDeeper:
        "A commercial tomato grower in a glasshouse heats the building and pumps in extra CO₂ on a bright sunny afternoon, but switches off the CO₂ generator at midnight. Why is pumping extra CO₂ at night a complete waste of money?",
      workedExamples: [
        {
          title: "Pondweed Bubble Rate Excluding an Anomaly",
          problem:
            "A student places a lamp 20 cm from a shoot of *Cabomba* pondweed and counts the oxygen bubbles produced in 2 minutes across four repeat trials: 46, 48, 19, and 50 bubbles. Calculate the mean rate of photosynthesis in bubbles per minute.",
          steps: [
            "Spot the anomalous reading: 19 bubbles is far lower than 46, 48 and 50, so **exclude 19**.",
            "Calculate the mean bubbles in 2 minutes: {{(46 + 48 + 50) / 3 = 144 / 3 = 48}} bubbles.",
            "Divide by 2 minutes to get the rate per minute: {{48 / 2 = 24}} bubbles/min.",
          ],
          answer: "24 bubbles/min",
          yourTurn: {
            question:
              "In a pondweed investigation, three valid repeats produce 36, 42 and 39 bubbles in 3 minutes. What is the mean rate in bubbles per minute?",
            answer: { type: "number", value: 13, display: "13" },
            solution:
              "Mean bubbles in 3 minutes = (36 + 42 + 39) ÷ 3 = 39 bubbles. Rate = 39 ÷ 3 = 13 bubbles per minute.",
          },
        },
        {
          title: "Interpreting a Limiting-Factor Graph",
          problem:
            "At a constant temperature of 25 °C and 0.04% CO₂, a plant's photosynthesis rate rises from 0 to 30 units as light increases from 0 to 400 lux, then stays flat at 30 units from 400 to 800 lux. When CO₂ is raised to 0.1%, the rate at 800 lux climbs to 52 units. What was the limiting factor at (a) 200 lux and (b) 600 lux with 0.04% CO₂?",
          steps: [
            "At 200 lux (between 0 and 400 lux), increasing light still increases the rate → **light intensity** is the limiting factor.",
            "At 600 lux with 0.04% CO₂, the graph is flat (extra light has no effect), and raising CO₂ boosted the rate from 30 to 52 → **carbon dioxide concentration** was the limiting factor.",
          ],
          answer: "(a) Light intensity; (b) Carbon dioxide concentration.",
          yourTurn: {
            question:
              "Why does the rate of photosynthesis fall rapidly to zero when a plant is heated above 45 °C? Give the one-word biological verb describing what happens to the enzymes.",
            answer: {
              type: "text",
              accept: ["denature", "denatured", "denaturation", "denatures"],
              display: "denature",
            },
            solution:
              "At high temperatures, the enzymes controlling photosynthesis denature — their active sites change shape permanently so substrates no longer fit.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: plant-transport
    // =========================================================================
    {
      id: "plant-transport",
      heading: "Xylem, Transpiration & Phloem Translocation",
      discovery: {
        problem:
          "Mountain ash eucalyptus trees in Gippsland tower over 90 metres high — as tall as a 30-storey Singapore HDB block — yet plants have no heart and no muscles. How does water travel from soil to the topmost leaves against gravity?",
        idea:
          "Sun-driven evaporation from the leaves pulls water upwards like drinking through a giant bundle of microscopic straws! Because water molecules stick together (**cohesion**), every drop that evaporates out of a stoma tugs the whole continuous column in the xylem upwards.",
      },
      body:
        "Flowering plants have two separate vascular transport systems bundled inside their roots, stems and leaf veins:\n\n" +
        "| Feature | Xylem | Phloem |\n" +
        "| --- | --- | --- |\n" +
        "| **Substances carried** | **Water** and dissolved **mineral ions** (e.g. nitrates, magnesium) | Dissolved **sugars** (mainly sucrose) & amino acids |\n" +
        "| **Direction of flow** | **One way only** — upwards from roots to leaves | **Both directions** — up and down from leaves to roots, shoots, flowers & fruits |\n" +
        "| **Name of process** | **Transpiration stream** | **Translocation** |\n" +
        "| **Cell structure** | **Dead**, hollow cells with **no end walls**; walls strengthened by waterproof **lignin** spirals/rings | **Living** sieve-tube cells with perforated **sieve plates**, supported by **companion cells** with mitochondria |\n" +
        "| **Energy needed?** | Passive (driven by evaporation from leaves) | Active transport requires energy from respiration |\n\n" +
        "### The Transpiration Stream\n\n" +
        "**Transpiration** is the loss of water vapour from a plant's leaves: water evaporates from the moist surfaces of spongy mesophyll cells into the air spaces and **diffuses out through open stomata**. This lowers water pressure at the top of the leaf, pulling more water up the continuous column in the **xylem** vessels, which in turn draws water from the soil into the **root hair cells** by osmosis.\n\n" +
        "### Four Environmental Factors Affecting Transpiration Rate\n\n" +
        "1. **Higher temperature** → water molecules gain kinetic energy → faster evaporation and diffusion → **faster transpiration**.\n" +
        "2. **Greater wind speed / air flow** → blows away the moist layer of water vapour outside the leaf → keeps the concentration gradient steep → **faster transpiration**.\n" +
        "3. **Lower humidity (drier air)** → steeper water-vapour concentration gradient between moist leaf air spaces and dry outside air → **faster transpiration**. (High humidity in Singapore's tropical air *reduces* transpiration!)\n" +
        "4. **Higher light intensity** → stomata open wider to admit CO₂ for photosynthesis → more water vapour escapes → **faster transpiration**.\n\n" +
        "### Measuring Transpiration with a Bubble Potometer\n\n" +
        "A **potometer** measures the rate of **water uptake** by a leafy shoot (a close estimate of transpiration because ~98–99% of absorbed water is transpired; ~1–2% is used in photosynthesis and keeping cells turgid). Cut the stem **underwater at a slant** so no air bubbles block the xylem, seal joints with petroleum jelly so water cannot leak, and record how far an air bubble moves along a capillary tube in a set time:\n\n" +
        "`Rate of uptake = distance moved by bubble ÷ time` (in mm/min) or `volume of water taken up ÷ time` (in cm³/min).",
      diagram:
        '<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of dead lignified xylem carrying water one way upward in the transpiration stream versus living phloem with sieve plates carrying sugars both ways in translocation">' +
        '<rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />' +
        '<text x="140" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Xylem (Transpiration Stream)</text>' +
        '<text x="420" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Phloem (Translocation)</text>' +
        '<line x1="280" y1="16" x2="280" y2="242" stroke="var(--line)" stroke-width="1.2" />' +
        '<rect x="64" y="42" width="52" height="168" rx="4" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="3" />' +
        '<path d="M64 60 L116 74 M64 92 L116 106 M64 124 L116 138 M64 156 L116 170 M64 188 L116 202" stroke="var(--bad)" stroke-width="2" opacity="0.7" />' +
        '<path d="M90 198 L90 54" stroke="var(--brand)" stroke-width="3" />' +
        '<polygon points="90,46 84,58 96,58" fill="var(--brand)" />' +
        '<g font-size="11" fill="var(--ink)">' +
        '<text x="130" y="62" font-weight="700" fill="var(--brand)">One-way UP</text>' +
        '<text x="130" y="80">Water + mineral ions</text>' +
        '<text x="130" y="106" font-weight="700" fill="var(--bad)">Lignin rings</text>' +
        '<text x="130" y="122" fill="var(--ink-2)">Strengthens walls</text>' +
        '<text x="130" y="150" font-weight="700">Dead, hollow tube</text>' +
        '<text x="130" y="166" fill="var(--ink-2)">No end walls</text>' +
        '<text x="130" y="194" fill="var(--ink-2)">Evaporation at stomata</text>' +
        '<text x="130" y="208" fill="var(--ink-2)">pulls water up</text>' +
        '</g>' +
        '<text x="90" y="232" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Roots → Stem → Leaves</text>' +
        '<rect x="318" y="42" width="52" height="168" rx="4" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2.4" />' +
        '<rect x="370" y="42" width="22" height="168" rx="3" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />' +
        '<circle cx="381" cy="84" r="4" fill="var(--good)" /><circle cx="381" cy="166" r="4" fill="var(--good)" />' +
        '<line x1="318" y1="98" x2="370" y2="98" stroke="var(--good)" stroke-width="2.5" stroke-dasharray="4 4" />' +
        '<line x1="318" y1="154" x2="370" y2="154" stroke="var(--good)" stroke-width="2.5" stroke-dasharray="4 4" />' +
        '<path d="M336 196 L336 58" stroke="var(--good)" stroke-width="2.4" />' +
        '<polygon points="336,50 331,60 341,60" fill="var(--good)" />' +
        '<path d="M354 56 L354 194" stroke="var(--ink)" stroke-width="2.4" />' +
        '<polygon points="354,202 349,192 359,192" fill="var(--ink)" />' +
        '<g font-size="11" fill="var(--ink)">' +
        '<text x="404" y="62" font-weight="700" fill="var(--good)">Two-way (Up &amp; Down)</text>' +
        '<text x="404" y="80">Dissolved sugars</text>' +
        '<text x="404" y="106" font-weight="700">Sieve plates</text>' +
        '<text x="404" y="122" fill="var(--ink-2)">Tiny pores in end walls</text>' +
        '<text x="404" y="150" font-weight="700">Living cells</text>' +
        '<text x="404" y="166" fill="var(--ink-2)">Companion cells supply</text>' +
        '<text x="404" y="180" fill="var(--ink-2)">ATP from mitochondria</text>' +
        '</g>' +
        '<text x="355" y="232" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Leaves ↔ Roots, shoots &amp; fruits</text>' +
        '</svg>',
      diagramCaption: "Xylem vessels are dead, lignified one-way pipes for water; phloem sieve tubes are living two-way pipelines for dissolved sugars.",
      whyItWorks:
        "Because transpiration pulls water under suction (negative pressure), flimsy walls would collapse flat — woody lignin rings keep xylem tubes rigid like a reinforced vacuum hose. Meanwhile, moving dissolved sucrose both up to growing buds and down to roots requires active loading by living companion cells.",
      keyPoints: [
        "Xylem transports water & mineral ions ONE way (roots → leaves) through dead, hollow, lignin-strengthened tubes.",
        "Phloem transports dissolved sugars BOTH ways (translocation) through living sieve tubes assisted by companion cells.",
        "Transpiration is the evaporation and diffusion of water vapour out through leaf stomata.",
        "Transpiration speeds up in warm, windy, dry (low-humidity), bright conditions — and slows down in cool, still, humid, dark conditions.",
        "A bubble potometer estimates transpiration by measuring water uptake; stems must be cut underwater to prevent air locks in the xylem.",
      ],
      strategies: [
        "Always explain wind and humidity using the phrase **water-vapour concentration gradient** — examiners award a dedicated mark for it.",
        "Distinguish **evaporation** (liquid water turning to vapour on mesophyll walls) from **diffusion** (water vapour moving out through stomata).",
        "When asked what a potometer measures, write **rate of water uptake** (not all water is transpired — a tiny fraction is used in photosynthesis/turgidity).",
      ],
      thinkDeeper:
        "If a gardener strips a complete ring of outer bark (removing the phloem but leaving the deeper xylem intact) around a tree trunk, the leaves stay green for weeks, yet a bulge full of sugary sap swells just ABOVE the ring and the roots eventually starve. Why?",
      workedExamples: [
        {
          title: "Calculating Water Uptake Rate from a Potometer",
          problem:
            "In a still room, the air bubble in a potometer moves 18 mm in 6 minutes. When a desk fan is switched on beside the leafy shoot, the bubble moves 42 mm in 6 minutes. Calculate (a) the rate in still air, (b) the rate with the fan, and (c) the percentage increase.",
          steps: [
            "Still air rate: {{18 / 6 = 3}} mm/min.",
            "Fan rate: {{42 / 6 = 7}} mm/min.",
            "Increase = {{7 - 3 = 4}} mm/min. Percentage increase = {{(4 / 3) * 100}} ≈ 133% (or more than double!).",
            "Reason: moving air sweeps humid air away from the stomata, keeping the concentration gradient steep.",
          ],
          answer: "(a) 3 mm/min; (b) 7 mm/min; (c) 133% increase.",
          yourTurn: {
            question:
              "A potometer air bubble moves 36 mm in 8 minutes in a warm laboratory. Calculate the rate of water uptake in mm/min.",
            answer: { type: "number", value: 4.5, display: "4.5" },
            solution: "Rate = distance ÷ time = 36 ÷ 8 = 4.5 mm/min.",
          },
        },
        {
          title: "Explaining Humidity in Singapore vs Gippsland",
          problem:
            "Two identical leafy shoots are tested at 22 °C: Shoot A is placed in a humid Singapore greenhouse (88% relative humidity) and Shoot B in dry Gippsland air (35% relative humidity). Predict which shoot loses mass faster and explain why.",
          steps: [
            "Prediction: **Shoot B** (in dry Gippsland air) loses mass faster.",
            "Mechanism: inside the leaf air spaces, humidity is nearly 100%. In dry 35% air there is a **steeper water-vapour concentration gradient** between inside and outside the leaf.",
            "Result: water vapour diffuses out through the stomata faster, increasing the rate of transpiration.",
          ],
          answer: "Shoot B loses mass faster because dry air creates a steeper water-vapour concentration gradient out of the stomata.",
          yourTurn: {
            question:
              "What is the biological name for the movement of dissolved sugars both up and down a plant through the phloem?",
            answer: {
              type: "text",
              accept: ["translocation"],
              display: "translocation",
            },
            solution:
              "Translocation is the two-way transport of dissolved sugars (and amino acids) through living phloem tissue.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: reproduction-fieldwork
    // =========================================================================
    {
      id: "reproduction-fieldwork",
      heading: "Plant Reproduction & TTS / Gippsland Fieldwork Sampling",
      discovery: {
        problem:
          "During a Year 9 fieldwork trip in Gippsland (or on the Tanglin sports field), you are asked: 'How many clover plants grow across this 20 m × 15 m meadow — and do ferns prefer the shady forest edge or the sunny middle?' You have 30 minutes and one 0.5 m × 0.5 m square frame. What two different sampling plans do you need?",
        idea:
          "To estimate **total population** across a uniform area, place quadrats at **random coordinates** to avoid human bias, then scale up the mean. To see how **distribution changes** from shade to sun, lay a **belt transect** tape across the gradient and sample at regular intervals!",
      },
      body:
        "### Flowers, Pollination, Fertilisation & Seed Dispersal\n\n" +
        "Flowers are plant reproductive organs containing male **stamens** (**anther** making pollen + **filament**) and female **carpels** (**stigma** receiving pollen + **style** + **ovary** holding **ovules**).\n\n" +
        "| Feature | Insect-Pollinated (e.g. hibiscus) | Wind-Pollinated (e.g. grass) |\n" +
        "| --- | --- | --- |\n" +
        "| **Petals** | Large, brightly coloured | Small, dull green/brown (or absent) |\n" +
        "| **Scent & nectar** | Strong scent & sugary nectar reward | None (wind does not need attracting) |\n" +
        "| **Anthers** | Firmly inside flower so insects brush past | Dangling outside flower to shake in breeze |\n" +
        "| **Pollen grains** | Larger, sticky or spiky (clings to insects) | Vast quantities, tiny, smooth & lightweight |\n" +
        "| **Stigma** | Sticky, enclosed inside flower | Large and **feathery** outside flower to catch airborne pollen |\n\n" +
        "- **Pollination** is the transfer of pollen from an anther to a stigma (NOT the same as fertilisation!).\n" +
        "- **Fertilisation** occurs when a pollen grain grows a **pollen tube** down the style into an ovule and the male gamete nucleus **fuses** with the female egg nucleus. Afterwards, each **ovule** develops into a **seed** and the **ovary** swells into a **fruit**.\n" +
        "- **Seed dispersal** spreads offspring away from the parent plant to **reduce competition** for light, water, minerals, and space. Four mechanisms: **wind** (wings/parachutes like dandelion & Singapore's *Shorea* dipterocarps), **animal** (fleshy fruits eaten and egested, or hooked burrs on fur), **water** (buoyant air-filled husks like coconuts along Singapore's coasts), and **explosive / self-dispersal** (drying tension pods like balsam and Gippsland wattles).\n\n" +
        "### Ecological Fieldwork: Quadrats & Transects\n\n" +
        "Plant abundance and distribution depend on **abiotic factors** (non-living: light intensity, temperature, soil moisture, soil pH, wind) and **biotic factors** (living: grazing animals, competition from taller plants, pests/pathogens).\n\n" +
        "1. **Random Sampling with Quadrats (Estimating Population Size):**\n" +
        "   - Lay out two tape measures at right angles to create an `(x, y)` grid over the habitat.\n" +
        "   - Use a **random number generator** to pick coordinates — NEVER throw quadrats blindly, as humans subconsciously aim at lush patches (**bias**).\n" +
        "   - Count individuals (or estimate **percentage cover** for mats like moss/grass) in at least 10 quadrats for a reliable mean.\n" +
        "   - Formula: `Estimated total population = mean count per quadrat × (total habitat area ÷ area of one quadrat)`.\n" +
        "   - Watch out! A `0.5 m × 0.5 m` quadrat has an area of **0.25 m²** (4 quadrats fit into 1 m²), NOT 0.5 m²!\n" +
        "2. **Systematic Sampling with a Belt Transect (Measuring Distribution Across a Gradient):**\n" +
        "   - Run a tape measure straight across an environmental gradient (e.g., from dense shady eucalyptus canopy into an open sunlit clearing in Gippsland, or from pond edge onto dry turf in Singapore).\n" +
        "   - Place a quadrat at **regular intervals** (e.g., every 2 m) along the tape and record BOTH species abundance AND an abiotic measurement (such as light intensity with a light meter or soil moisture).",
      diagram:
        '<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: labelled insect-pollinated flower cross-section. Right: belt transect from shaded woodland canopy to sunny clearing with quadrats every 4 metres">' +
        '<rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />' +
        '<text x="128" y="22" font-size="12.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Insect-Pollinated Flower</text>' +
        '<ellipse cx="78" cy="112" rx="28" ry="48" transform="rotate(-24 78 112)" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />' +
        '<ellipse cx="178" cy="112" rx="28" ry="48" transform="rotate(24 178 112)" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />' +
        '<path d="M128 212 L128 184" stroke="var(--good)" stroke-width="6" stroke-linecap="round" />' +
        '<path d="M98 176 Q114 192 128 186 Q142 192 158 176" fill="none" stroke="var(--good)" stroke-width="3" />' +
        '<ellipse cx="128" cy="158" rx="18" ry="22" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.6" />' +
        '<circle cx="122" cy="154" r="4" fill="var(--brand)" /><circle cx="134" cy="156" r="4" fill="var(--brand)" /><circle cx="128" cy="167" r="4" fill="var(--brand)" />' +
        '<rect x="124" y="84" width="8" height="54" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4" />' +
        '<ellipse cx="128" cy="80" rx="12" ry="6" fill="var(--good)" stroke="var(--ink)" stroke-width="1.3" />' +
        '<path d="M112 162 Q94 128 96 96" fill="none" stroke="var(--ink)" stroke-width="1.8" />' +
        '<ellipse cx="96" cy="92" rx="7" ry="10" fill="var(--bad)" opacity="0.7" stroke="var(--bad)" stroke-width="1.2" />' +
        '<path d="M144 162 Q162 128 160 96" fill="none" stroke="var(--ink)" stroke-width="1.8" />' +
        '<ellipse cx="160" cy="92" rx="7" ry="10" fill="var(--bad)" opacity="0.7" stroke="var(--bad)" stroke-width="1.2" />' +
        '<g font-size="10" font-weight="600" fill="var(--ink)">' +
        '<text x="128" y="64" text-anchor="middle">Stigma</text>' +
        '<text x="60" y="92" text-anchor="end">Anther</text>' +
        '<text x="196" y="82">Petal</text>' +
        '<text x="192" y="128">Style</text>' +
        '<text x="186" y="160">Ovary &amp;</text><text x="186" y="172">ovules</text>' +
        '<text x="172" y="198">Sepal</text>' +
        '</g>' +
        '<line x1="254" y1="16" x2="254" y2="242" stroke="var(--line)" stroke-width="1.2" />' +
        '<text x="408" y="22" font-size="12.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Belt Transect: Shade to Sun</text>' +
        '<rect x="282" y="84" width="14" height="58" fill="var(--ink-2)" />' +
        '<circle cx="289" cy="68" r="28" fill="var(--good)" opacity="0.35" stroke="var(--good)" stroke-width="1.5" />' +
        '<circle cx="516" cy="54" r="14" fill="var(--bad)" opacity="0.55" stroke="var(--bad)" stroke-width="1.5" />' +
        '<text x="292" y="106" font-size="9.5" font-weight="700" fill="var(--ink)">Shade</text>' +
        '<text x="516" y="82" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--bad)">Bright sun</text>' +
        '<line x1="274" y1="142" x2="540" y2="142" stroke="var(--ink)" stroke-width="2" />' +
        '<g fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5">' +
        '<rect x="284" y="134" width="22" height="16" /><rect x="352" y="134" width="22" height="16" />' +
        '<rect x="420" y="134" width="22" height="16" /><rect x="488" y="134" width="22" height="16" />' +
        '</g>' +
        '<g font-size="9.5" text-anchor="middle" fill="var(--ink-2)">' +
        '<text x="295" y="164">0 m</text><text x="363" y="164">4 m</text><text x="431" y="164">8 m</text><text x="499" y="164">12 m</text>' +
        '</g>' +
        '<rect x="278" y="176" width="254" height="62" rx="8" fill="var(--surface-2)" stroke="var(--line)" />' +
        '<path d="M292 226 L360 212 L428 196 L516 186" fill="none" stroke="var(--bad)" stroke-width="2" />' +
        '<path d="M292 188 L360 198 L428 214 L516 226" fill="none" stroke="var(--good)" stroke-width="2" />' +
        '<text x="516" y="182" font-size="9" font-weight="700" text-anchor="end" fill="var(--bad)">Light ↑ &amp; Clover ↑</text>' +
        '<text x="516" y="234" font-size="9" font-weight="700" text-anchor="end" fill="var(--good)">Shade Ferns ↓</text>' +
        '</svg>',
      diagramCaption: "Left: flower parts for insect pollination. Right: a belt transect reveals how plant distribution shifts along an abiotic gradient.",
      whyItWorks:
        "Throwing a quadrat 'randomly' by hand introduces unconscious human bias (we avoid thorny patches or aim at clusters of flowers). Generating random `(x, y)` coordinates guarantees every square metre has an equal chance of being sampled, so the sample mean is an unbiased estimator of the whole meadow.",
      keyPoints: [
        "Insect-pollinated flowers have bright petals, scent, nectar, enclosed anthers and sticky pollen; wind-pollinated flowers have dull small petals, dangling anthers, feathery stigmas and huge clouds of light pollen.",
        "Pollination transfers pollen to the stigma; fertilisation is fusion of male and female nuclei inside the ovule (ovule → seed; ovary → fruit).",
        "Seed dispersal (wind, animal, water, explosive) reduces competition with the parent plant for light, water, minerals and space.",
        "Use random quadrats (with random number coordinates to avoid bias) to estimate total population size: mean per quadrat × (total area ÷ quadrat area).",
        "Use a belt transect (quadrats at regular intervals along a tape) to measure how species distribution changes across an abiotic gradient such as light or moisture.",
      ],
      strategies: [
        "Always compute the **area of one quadrat** first (`0.5 m × 0.5 m = 0.25 m²`, NOT `0.5 m²`!) before scaling up to the whole habitat.",
        "Check what the question is investigating: **total population in one area → random quadrats**; **change across a gradient → belt transect**.",
        "When explaining seed dispersal, state **both** what it prevents (**competition with the parent**) and **at least two resources** (light, water, mineral ions, space).",
      ],
      thinkDeeper:
        "Suppose a student wants to estimate moss cover on a tree-lined lawn using a quadrat. Why is counting individual moss plants nearly impossible, and what measurement should they record inside a 10 × 10 gridded quadrat instead?",
      workedExamples: [
        {
          title: "Estimating Population Size with 0.5 m × 0.5 m Quadrats",
          problem:
            "Year 9 students at Gippsland sample a rectangular bushland clearing measuring 20 m by 15 m using 10 randomly placed `0.5 m × 0.5 m` quadrats. The total number of bracken ferns counted across all 10 quadrats is 35. Estimate the total fern population in the clearing.",
          steps: [
            "Find the mean number of ferns per quadrat: {{35 / 10 = 3.5}} ferns per quadrat.",
            "Find the area of one quadrat: {{0.5 * 0.5 = 0.25}} m².",
            "Find the total habitat area: {{20 * 15 = 300}} m².",
            "Find how many quadrats fit into the clearing: {{300 / 0.25 = 1200}} quadrats.",
            "Multiply mean per quadrat by number of quadrats: {{3.5 * 1200 = 4200}} ferns.",
          ],
          answer: "4200 ferns",
          yourTurn: {
            question:
              "Students sample a 12 m × 10 m lawn using ten 0.5 m × 0.5 m quadrats and find a mean of 2.5 dandelions per quadrat. Estimate the total number of dandelions on the lawn.",
            answer: { type: "number", value: 1200, display: "1200" },
            solution:
              "Lawn area = 12 × 10 = 120 m². Quadrat area = 0.5 × 0.5 = 0.25 m². Number of quadrats = 120 ÷ 0.25 = 480. Estimated population = 2.5 × 480 = 1200 dandelions.",
          },
        },
        {
          title: "Choosing Random Quadrats vs Belt Transect",
          problem:
            "A team in Singapore notices that sensitive plant (*Mimosa pudica*) grows thickly in open sunlight near a walkway but disappears under a rain-tree canopy 10 m away. Which fieldwork method should they use to investigate this pattern, and what abiotic factor should they measure?",
          steps: [
            "Because there is a clear environmental gradient from sunny walkway to shaded canopy, choose a **belt transect**.",
            "Lay a 10 m tape measure from the sunlit walkway to under the canopy, placing a quadrat at regular intervals (e.g., every 1 m or 2 m).",
            "At each quadrat, record *Mimosa* count (or percentage cover) and measure **light intensity** with a light meter (plus optionally soil moisture).",
          ],
          answer: "Use a belt transect at regular intervals along a tape measure and record light intensity at each station.",
          yourTurn: {
            question:
              "After fertilisation in a flowering plant, which structure develops into the seed?",
            answer: {
              type: "text",
              accept: ["ovule", "the ovule", "ovules"],
              display: "ovule",
            },
            solution:
              "After the male and female nuclei fuse inside the ovule, the fertilised ovule becomes the seed while the surrounding ovary swells into the fruit.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the role of the waxy cuticle on a leaf?", back: "A thin waterproof layer on the upper surface that reduces water loss by evaporation while letting sunlight pass through." },
      { front: "Why is the upper epidermis transparent and lacking chloroplasts?", back: "So sunlight passes straight through to the chloroplast-packed palisade mesophyll beneath." },
      { front: "How are palisade mesophyll cells adapted for photosynthesis?", back: "Tall vertical columns near the top of the leaf, tightly packed and filled with chloroplasts to absorb maximum light." },
      { front: "What is the function of air spaces in the spongy mesophyll?", back: "They allow rapid diffusion of carbon dioxide into photosynthesising cells and oxygen/water vapour out." },
      { front: "How do guard cells open and close a stoma?", back: "When turgid (full of water) they curve apart to open the stoma; when flaccid (short of water) they close it." },
      { front: "Why do root hair cells have a long projection and NO chloroplasts?", back: "The projection creates a large surface area to absorb water and minerals; they lack chloroplasts because they are underground in darkness." },
      { front: "State the balanced symbol equation for photosynthesis.", back: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in the presence of light and chlorophyll)." },
      { front: "Why must the Bunsen burner be turned OFF before heating a leaf in ethanol?", back: "Ethanol is highly flammable and could ignite; a hot water bath safely heats it to dissolve chlorophyll." },
      { front: "What colour change confirms starch is present with iodine solution?", back: "Orange-brown iodine turns blue-black." },
      { front: "Why does photosynthesis drop sharply above 45 °C?", back: "High temperature denatures the enzymes controlling photosynthesis (their active sites change shape permanently)." },
      { front: "Compare xylem and phloem (substance & direction).", back: "Xylem: dead, lignified tubes carrying water & minerals ONE way UP. Phloem: living sieve tubes carrying dissolved sugars BOTH ways (translocation)." },
      { front: "Name four factors that increase the rate of transpiration.", back: "Higher temperature, higher wind speed, lower humidity (drier air), and higher light intensity." },
      { front: "State three features of a wind-pollinated flower.", back: "Small dull petals (no scent/nectar), anthers dangling outside, large feathery stigmas, and huge amounts of smooth lightweight pollen." },
      { front: "How do you estimate population size from random quadrats?", back: "Estimated population = mean count per quadrat × (total habitat area ÷ area of one quadrat)." },
    ],
    mustKnow: [
      "Label all layers of a leaf cross-section from top to bottom and match each to its function.",
      "Explain how palisade cells, guard cells, and root hair cells are specialised for their roles.",
      "Write both the word and balanced symbol equations for photosynthesis and list 4 uses of glucose.",
      "Describe the 4 steps of testing a leaf for starch, including the exact safety precaution for ethanol.",
      "Interpret limiting-factor graphs for light intensity, CO₂ concentration, and temperature (enzyme denaturation).",
      "Compare the structure and function of xylem vessels (transpiration stream) and phloem tubes (translocation).",
      "Predict and explain how wind, warmth, humidity, and light affect transpiration rate and potometer readings.",
      "Compare insect-pollinated and wind-pollinated flowers and distinguish pollination from fertilisation.",
      "Explain why seed dispersal is essential and give examples of wind, animal, water, and explosive dispersal.",
      "Choose between random quadrats (population size) and belt transects (distribution across a gradient) and calculate population estimates accurately.",
    ],
    misconceptions: [
      {
        wrong: "Plants only photosynthesise during the day and only respire at night.",
        right: "Plants respire continuously 24 hours a day (day AND night). Photosynthesis only happens in light, when its rate usually exceeds respiration.",
      },
      {
        wrong: "Xylem carries food up the plant and phloem carries water down.",
        right: "Xylem carries water and mineral ions UP only; phloem carries dissolved sugars BOTH up and down (translocation).",
      },
      {
        wrong: "Root hair cells have chloroplasts to make food for the roots.",
        right: "Root hair cells have NO chloroplasts because they grow underground in the dark; sugars arrive from the leaves via phloem.",
      },
      {
        wrong: "High temperatures kill the enzymes in photosynthesis.",
        right: "Enzymes are protein molecules, not living organisms — never say 'killed'. Say high temperatures **denature** enzymes by changing the shape of their active site.",
      },
      {
        wrong: "A 0.5 m × 0.5 m quadrat has an area of 0.5 m².",
        right: "Area = 0.5 m × 0.5 m = 0.25 m², so 4 of these quadrats fit into every 1 m² of habitat.",
      },
      {
        wrong: "Throwing a quadrat over your shoulder is a valid way to sample randomly.",
        right: "Throwing by hand introduces human bias and is unsafe. True random sampling uses a random number generator to pick (x, y) grid coordinates.",
      },
    ],
    examMistakes: [
      "Forgetting to state 'turn off the Bunsen burner / use a hot water bath because ethanol is flammable' in starch-test method questions.",
      "Writing 'carbon dioxide + water → energy + oxygen' instead of **glucose + oxygen** (light energy is transferred, not a chemical product).",
      "Mixing up **pollination** (transfer of pollen to stigma) with **fertilisation** (fusion of male and female nuclei in the ovule).",
      "Saying a potometer measures 'transpiration directly' without noting it actually measures **water uptake**.",
      "Forgetting to divide by the **area of one quadrat** (0.25 m²) when using 0.5 m × 0.5 m quadrats in population calculations.",
      "Saying 'more wind blows water out of the leaf' instead of 'wind removes humid air around the leaf, maintaining a steeper water-vapour concentration gradient'.",
      "Forgetting to mention **destarching** a plant in the dark for 24–48 hours before investigating whether light or CO₂ is needed for starch production.",
    ],
    mnemonics: [
      {
        topic: "Xylem vs Phloem",
        device: "Xylem = Water UP (XY goes high); Phloem = Food flows both ways (Ph sounds like F for Food)",
        explanation: "Links xylem to one-way upward water transport and phloem to bidirectional sugar translocation.",
      },
      {
        topic: "Starch Test 4 Steps",
        device: "B-E-R-I (Boil → Ethanol bath → Rinse → Iodine)",
        explanation: "Boil in water (kill/soften), Ethanol in flame-free water bath (remove chlorophyll), Rinse in warm water (soften), Iodine (blue-black = starch).",
      },
      {
        topic: "Leaf Layers Top to Bottom",
        device: "Wet Umbrellas Protect Sunny Leaves",
        explanation: "Waxy cuticle → Upper epidermis → Palisade mesophyll → Spongy mesophyll → Lower epidermis.",
      },
    ],
    realWorld: [
      {
        emoji: "🌳",
        title: "Singapore's Dipterocarp Helicopter Seeds",
        detail: "Towering *Shorea* trees in Bukit Timah Nature Reserve drop winged fruits that spin like helicopter rotors, catching forest breezes so seedlings escape the deep shade of the parent tree.",
      },
      {
        emoji: "🏔️",
        title: "Gippsland's Giant Mountain Ash & Fieldwork Transects",
        detail: "In Victoria's Gippsland hills, *Eucalyptus regnans* trees lift hundreds of litres of water daily over 80 m up lignified xylem tubes, while shaded understorey ferns give way to sun-loving grasses along clear belt transects.",
      },
      {
        emoji: "🏢",
        title: "Singapore Vertical Hydroponic Farms",
        detail: "Indoor urban farms optimise every limiting factor at once — tuned red/blue LED lights, controlled 24 °C air, and enriched CO₂ — to grow leafy greens rapidly in minimal land space.",
      },
      {
        emoji: "🌿",
        title: "Sungei Buloh Mangrove Adaptations",
        detail: "Mangrove leaves have thick waxy cuticles and sunken stomata to limit transpiration in salty coastal winds, while buoyant seeds float away on the tide by water dispersal.",
      },
    ],
    videos: [
      { title: "Leaf Structure & Specialised Plant Cells", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Biology+leaf+structure+plant+tissues" },
      { title: "Photosynthesis, Limiting Factors & Starch Test", channel: "FreeScienceLessons", url: "https://www.youtube.com/results?search_query=FreeScienceLessons+photosynthesis+limiting+factors+starch+test" },
      { title: "Xylem, Phloem, Transpiration & Potometers", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Biology+xylem+phloem+transpiration+potometer" },
      { title: "Quadrats & Belt Transects Fieldwork Sampling", channel: "FreeScienceLessons", url: "https://www.youtube.com/results?search_query=FreeScienceLessons+quadrats+transects+sampling+ecology" },
    ],
    formulas: [
      { name: "Photosynthesis (Word)", formula: "carbon dioxide + water → glucose + oxygen", note: "Requires light energy absorbed by chlorophyll (endothermic)." },
      { name: "Photosynthesis (Symbol)", formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", note: "Balanced: 6 C, 12 H, and 18 O atoms on both sides." },
      { name: "Stomatal Density", formula: "{{\"density\" = \"mean stomata count\" / \"field area (mm^2)\"}}", note: "Units: stomata per mm²." },
      { name: "Photosynthesis Bubble Rate", formula: "{{\"rate\" = \"number of O2 bubbles\" / \"time (min)\"}}", note: "Exclude anomalous repeats before averaging." },
      { name: "Potometer Uptake Rate", formula: "{{\"rate\" = \"distance moved by bubble\" / \"time\"}}", note: "Units: mm/min (or volume ÷ time in cm³/min)." },
      { name: "Quadrat Area (0.5 m side)", formula: "{{0.5 * 0.5 = 0.25}} m²", note: "4 such quadrats fit inside every 1 m²." },
      { name: "Population Estimate (Quadrats)", formula: "{{\"population\" = \"mean per quadrat\" * (\"total area\" / \"quadrat area\")}}", note: "Requires random coordinates to avoid bias." },
      { name: "Transpiration", formula: "Evaporation from spongy mesophyll + diffusion of water vapour out of stomata", note: "Increases with heat, wind, light and low humidity." },
      { name: "Translocation", formula: "Two-way transport of dissolved sugars (sucrose) in living phloem", note: "Requires ATP from companion cells." },
      { name: "Iodine Starch Test", formula: "Orange-brown iodine → blue-black with starch", note: "Always boil leaf in water, then ethanol (flame OFF), then rinse before testing." },
    ],
  },
};
