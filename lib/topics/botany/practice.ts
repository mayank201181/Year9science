import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "botany-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "leaf-structure-cells",
      question: "Name the waterproof outer layer on the top surface of a leaf that reduces water loss by evaporation.",
      answer: {
        type: "text",
        accept: ["waxy cuticle", "cuticle", "wax cuticle"],
        display: "waxy cuticle",
      },
      hints: [
        "It is the very topmost layer of a leaf cross-section.",
      ],
      solution: [
        "The **waxy cuticle** coats the upper epidermis, forming a transparent waterproof barrier that reduces evaporation.",
      ],
    },
    {
      id: "botany-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "leaf-structure-cells",
      question: "Which structure controls the opening and closing of each stoma on the underside of a leaf?",
      options: [
        "Palisade mesophyll cells",
        "Paired guard cells",
        "Xylem vessel rings",
        "Root hair projections",
      ],
      answerIndex: 1,
      hints: [
        "They curve apart when turgid and straighten when flaccid.",
      ],
      explanation:
        "A pair of guard cells flanks every stoma, becoming turgid to open the pore for gas exchange and flaccid to close it when water is scarce.",
    },
    {
      id: "botany-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "photosynthesis-starch",
      question: "In the starch test, orange-brown iodine solution turns what colour when starch is present in a leaf?",
      answer: {
        type: "text",
        accept: ["blue-black", "blue black", "black-blue", "dark blue-black", "dark blue"],
        display: "blue-black",
      },
      hints: [
        "Recall the standard two-word dark colour change for starch with iodine.",
      ],
      solution: [
        "Iodine solution changes from orange-brown to **blue-black** in the presence of starch.",
      ],
    },
    {
      id: "botany-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "photosynthesis-starch",
      question: "A shoot of *Elodea* pondweed produces 54 oxygen bubbles in 3 minutes. Calculate the rate of photosynthesis in bubbles per minute.",
      answer: { type: "number", value: 18, display: "18" },
      traps: [
        { spec: { type: "number", value: 162 }, feedback: "You multiplied 54 × 3 instead of dividing total bubbles by the number of minutes." },
      ],
      hints: [
        "Use rate = total bubbles ÷ time in minutes.",
        "Divide 54 by 3.",
      ],
      solution: [
        "Rate = {{54 / 3 = 18}} bubbles per minute.",
      ],
    },
    {
      id: "botany-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "photosynthesis-starch",
      question: "What happens to the rate of photosynthesis if temperature increases from 35 °C to 55 °C?",
      options: [
        "It increases steadily forever as collisions speed up",
        "It remains flat on a high plateau because CO₂ limits it",
        "It drops sharply to zero because enzymes denature",
        "It reverses to turn oxygen gas back into solid starch",
      ],
      answerIndex: 2,
      hints: [
        "Photosynthesis relies on enzyme catalysts inside chloroplasts.",
        "What happens to enzyme active sites above roughly 45 °C?",
      ],
      explanation:
        "Above the optimum temperature (~35 °C), excess thermal energy breaks bonds in photosynthesis enzymes, denaturing their active sites so the rate drops sharply to zero.",
    },
    {
      id: "botany-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "plant-transport",
      question: "Name the plant vascular tissue made of dead, hollow, lignified tubes that transports water and mineral ions upwards from roots to leaves.",
      answer: {
        type: "text",
        accept: ["xylem", "xylem vessels", "xylem tissue", "xylem tubes"],
        display: "xylem",
      },
      traps: [
        { spec: { type: "text", accept: ["phloem", "phloem tubes", "phloem vessels"] }, feedback: "Phloem is living tissue that transports dissolved sugars both ways; water travels upwards in the xylem." },
      ],
      hints: [
        "Remember the mnemonic: XY goes high (water up).",
      ],
      solution: [
        "**Xylem** vessels carry water and dissolved mineral ions one way upwards in the transpiration stream.",
      ],
    },
    {
      id: "botany-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "plant-transport",
      question: "The air bubble in a bubble potometer moves 45 mm in 10 minutes. Calculate the rate of water uptake in mm/min.",
      answer: { type: "number", value: 4.5, display: "4.5" },
      traps: [
        { spec: { type: "number", value: 450 }, feedback: "You multiplied distance by time — divide distance by time instead." },
      ],
      hints: [
        "Rate = distance moved ÷ time.",
        "Divide 45 mm by 10 minutes.",
      ],
      solution: [
        "Rate = {{45 / 10 = 4.5}} mm/min.",
      ],
    },
    {
      id: "botany-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "reproduction-fieldwork",
      question: "Which part of a flower catches pollen grains during pollination?",
      options: [
        "Anther",
        "Filament",
        "Ovule",
        "Stigma",
      ],
      answerIndex: 3,
      hints: [
        "Think of the sticky (insect-pollinated) or feathery (wind-pollinated) top of the female carpel.",
        "Pollen is made on the anther and lands on the female receiving tip.",
      ],
      explanation:
        "The stigma sits at the top of the style and is adapted to trap arriving pollen grains — sticky in insect-pollinated flowers and feathery in wind-pollinated ones.",
    },
    {
      id: "botany-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "reproduction-fieldwork",
      question: "What is the area in m² of a single square quadrat whose sides measure 0.5 m by 0.5 m?",
      answer: { type: "number", value: 0.25, display: "0.25" },
      traps: [
        { spec: { type: "number", value: 0.5 }, feedback: "Careful! 0.5 is the side length — area of a square is side × side = 0.5 × 0.5." },
        { spec: { type: "number", value: 2 }, feedback: "2 m is the perimeter (4 × 0.5), not the area." },
      ],
      hints: [
        "Area of a square = length × width.",
        "Calculate 0.5 × 0.5 carefully.",
      ],
      solution: [
        "Area = {{0.5 * 0.5 = 0.25}} m² (four of these quadrats fit into 1 m²).",
      ],
    },
    {
      id: "botany-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "reproduction-fieldwork",
      question: "Students count a mean of 4 clover plants per 1 m² quadrat across a 50 m² patch of Tanglin lawn. Estimate the total number of clover plants in that patch.",
      answer: { type: "number", value: 200, display: "200" },
      hints: [
        "Each quadrat is 1 m², so multiply the mean per m² by the total lawn area.",
        "Compute 4 × 50.",
      ],
      solution: [
        "Estimated population = mean per quadrat × (total area ÷ quadrat area) = {{4 * (50 / 1) = 200}} clover plants.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1 (15 questions: 9 short, 3 mcq, 3 written)
    // -----------------------------------------------------------------------
    {
      id: "botany-p1",
      title: "Practice Paper 1 — Leaf Adaptations, Photosynthesis & Transport",
      questions: [
        {
          id: "botany-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "leaf-structure-cells",
          question: "Name the tissue layer in a leaf that contains large air spaces to allow rapid diffusion of carbon dioxide and oxygen.",
          answer: {
            type: "text",
            accept: ["spongy mesophyll", "spongy layer", "spongy mesophyll layer", "spongy mesophyll tissue"],
            display: "spongy mesophyll",
          },
          traps: [
            { spec: { type: "text", accept: ["palisade mesophyll", "palisade layer", "palisade"] }, feedback: "Palisade mesophyll cells are tightly packed near the top; the loosely packed layer with air spaces beneath it is the spongy mesophyll." },
          ],
          hints: [
            "Its name sounds like something porous and full of tiny pockets of air.",
          ],
          solution: [
            "The **spongy mesophyll** consists of loosely arranged rounded cells separated by large air spaces for gas diffusion.",
          ],
        },
        {
          id: "botany-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "leaf-structure-cells",
          question: "Under a microscope, a student views a 0.2 mm² patch of lower leaf epidermis and counts 26 stomata. Calculate the stomatal density in stomata per mm².",
          answer: { type: "number", value: 130, display: "130" },
          traps: [
            { spec: { type: "number", value: 5.2 }, feedback: "You multiplied 26 × 0.2 — divide the count by the area in mm² instead." },
          ],
          hints: [
            "Stomatal density = number of stomata ÷ area viewed (in mm²).",
            "Dividing by 0.2 is the same as multiplying by 5.",
          ],
          solution: [
            "Stomatal density = {{26 / 0.2 = 130}} stomata per mm².",
          ],
        },
        {
          id: "botany-p1-q03",
          kind: "written",
          difficulty: "core",
          guideRef: "leaf-structure-cells",
          question: "Explain three ways a root hair cell is adapted for its function underground. [3 marks]",
          marks: 3,
          hints: [
            "Think about its outer shape and how that affects absorption speed.",
            "Consider cell wall thickness (or mitochondria for active transport) AND whether it needs chloroplasts underground.",
          ],
          modelAnswer:
            "A root hair cell has a long projection that gives a large surface area to absorb water and minerals faster. It has a thin cell wall for a short diffusion distance (and many mitochondria for active transport). It contains no chloroplasts because it grows in the dark where photosynthesis cannot occur.",
          markScheme: [
            { point: "Long finger-like projection provides a large surface area for faster absorption", keywords: ["surface area", "projection", "extension"] },
            { point: "Thin cell wall for short diffusion path (or many mitochondria for active transport)", keywords: ["thin", "mitochondria", "active transport", "vacuole"] },
            { point: "No chloroplasts because soil is dark and no photosynthesis happens there", keywords: ["no chloroplast", "no chloroplasts", "lack chloroplasts", "without chloroplasts", "dark"] },
          ],
          commonError: "Writing that root hair cells contain chloroplasts or forgetting to state WHY a long hair helps (large surface area).",
        },
        {
          id: "botany-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "photosynthesis-starch",
          question: "Name the green pigment inside chloroplasts that absorbs light energy for photosynthesis.",
          answer: {
            type: "text",
            accept: ["chlorophyll"],
            display: "chlorophyll",
          },
          traps: [
            { spec: { type: "text", accept: ["chloroplast", "chloroplasts"] }, feedback: "The chloroplast is the organelle — name the green pigment molecule inside it." },
          ],
          hints: [
            "It sounds very similar to 'chloroplast' but ends in '-phyll'.",
          ],
          solution: [
            "**Chlorophyll** is the green pigment within chloroplasts that absorbs sunlight.",
          ],
        },
        {
          id: "botany-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "In the balanced photosynthesis equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, how many molecules of oxygen gas (O₂) are produced when 3 molecules of glucose are formed?",
          answer: { type: "number", value: 18, display: "18" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 molecules of O₂ are made per 1 molecule of glucose — scale up for 3 molecules of glucose." },
            { spec: { type: "number", value: 36 }, feedback: "36 is the number of oxygen ATOMS, whereas the question asks for O₂ MOLECULES." },
          ],
          hints: [
            "Read the coefficient in front of O₂ for 1 molecule of C₆H₁₂O₆.",
            "Multiply 6 by 3.",
          ],
          solution: [
            "Every 1 molecule of glucose produces 6 molecules of O₂.",
            "For 3 molecules of glucose: {{3 * 6 = 18}} molecules of O₂.",
          ],
        },
        {
          id: "botany-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "A pondweed shoot emits 32, 36, 9, and 34 bubbles in four 2-minute trials. Exclude the anomaly and calculate the mean rate in bubbles per minute.",
          answer: { type: "number", value: 17, display: "17" },
          traps: [
            { spec: { type: "number", value: 34 }, feedback: "34 is the mean number of bubbles in 2 minutes — divide by 2 to get bubbles per minute." },
            { spec: { type: "number", value: 13.875 }, feedback: "You included the anomalous trial (9 bubbles). Discard clear outliers before averaging." },
          ],
          hints: [
            "Spot which of 32, 36, 9, and 34 is clearly anomalous and leave it out.",
            "Average the remaining three counts, then divide by 2 minutes.",
          ],
          solution: [
            "Discard the anomaly 9.",
            "Mean in 2 minutes = {{(32 + 36 + 34) / 3 = 102 / 3 = 34}} bubbles.",
            "Rate per minute = {{34 / 2 = 17}} bubbles/min.",
          ],
        },
        {
          id: "botany-p1-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "Describe the four main steps used to test a green leaf safely for starch, giving the reason for the ethanol step and the positive test colour. [4 marks]",
          marks: 4,
          hints: [
            "Start with boiling water to kill the leaf cells and soften membranes.",
            "Remember the safety rule for heating ethanol and why chlorophyll must be removed.",
            "Finish with warm-water rinsing and the iodine colour change.",
          ],
          modelAnswer:
            "First, boil the leaf in water for one minute to kill cells and break membranes. Second, turn off the Bunsen burner because ethanol is flammable, then heat the leaf in ethanol in a hot water bath to dissolve and remove green chlorophyll. Third, rinse the brittle leaf in warm water to soften it. Finally, add iodine solution, which turns blue-black if starch is present.",
          markScheme: [
            { point: "Boil leaf in water first to kill cells / break membranes / stop enzymes", keywords: ["boil", "boiling water", "membranes"] },
            { point: "Turn off Bunsen burner / use hot water bath because ethanol is flammable", keywords: ["flammable", "water bath", "turn off", "flame off"] },
            { point: "Ethanol dissolves / removes green chlorophyll so colour change can be seen", keywords: ["chlorophyll", "decolourise", "decolorise", "green pigment"] },
            { point: "Rinse in warm water and add iodine, which turns blue-black for starch", keywords: ["blue-black", "blue black"] },
          ],
          commonError: "Writing 'boil in ethanol over a Bunsen burner' — naked flames ignite ethanol vapour!",
        },
        {
          id: "botany-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "A student wants to prove that carbon dioxide is needed for photosynthesis. Which chemical placed inside a sealed bag around a destarched leaf removes carbon dioxide from the air?",
          options: [
            "Sodium hydrogencarbonate",
            "Potassium hydroxide",
            "Iodine solution",
            "Boiling ethanol",
          ],
          answerIndex: 1,
          hints: [
            "Sodium hydrogencarbonate ADDS CO₂ to water — we want the opposite chemical that ABSORBS CO₂.",
            "Strong alkalis like soda lime or potassium hydroxide absorb acidic CO₂ gas.",
          ],
          explanation:
            "Potassium hydroxide (or soda lime) absorbs carbon dioxide from air in a sealed flask or bag. Sodium hydrogencarbonate releases CO₂, iodine tests for starch, and ethanol dissolves chlorophyll.",
        },
        {
          id: "botany-p1-q09",
          kind: "short",
          difficulty: "warmup",
          guideRef: "plant-transport",
          question: "Name the strong waterproof substance arranged in spirals or rings that reinforces dead xylem walls so they do not collapse.",
          answer: {
            type: "text",
            accept: ["lignin"],
            display: "lignin",
          },
          hints: [
            "It is the tough woody polymer found inside xylem vessels.",
          ],
          solution: [
            "**Lignin** forms waterproof spirals or rings along xylem vessel walls, keeping the hollow pipe rigid under transpiration suction.",
          ],
        },
        {
          id: "botany-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "plant-transport",
          question: "In a potometer experiment, an air bubble moves 24 mm in 4 minutes in still air, and 54 mm in 4 minutes with a fan running. By how many mm/min did the fan increase the rate of water uptake?",
          answer: { type: "number", value: 7.5, display: "7.5" },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "30 mm is the extra distance moved in 4 minutes — divide by 4 to get the increase in mm/min." },
            { spec: { type: "number", value: 13.5 }, feedback: "13.5 mm/min is the rate WITH the fan — now subtract the still-air rate (6 mm/min)." },
          ],
          hints: [
            "Find both rates in mm/min: still air = 24 ÷ 4, fan = 54 ÷ 4.",
            "Subtract the still-air rate from the fan rate.",
          ],
          solution: [
            "Still-air rate = {{24 / 4 = 6}} mm/min.",
            "Fan rate = {{54 / 4 = 13.5}} mm/min.",
            "Increase = {{13.5 - 6 = 7.5}} mm/min.",
          ],
        },
        {
          id: "botany-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "plant-transport",
          question: "Which statement correctly contrasts phloem tubes with xylem vessels?",
          options: [
            "Phloem cells are living and carry dissolved sugars both ways",
            "Phloem cells are dead and carry dissolved sugars upwards only",
            "Phloem cells are living and carry soil water upwards only",
            "Phloem cells are dead and carry mineral ions downwards only",
          ],
          answerIndex: 0,
          hints: [
            "Remember: Xylem = dead, water UP. What about phloem?",
            "Sugars must reach BOTH growing shoot tips above leaves AND storage roots below.",
          ],
          explanation:
            "Phloem consists of living sieve-tube cells (with companion cells) that transport dissolved sugars both upwards and downwards by translocation.",
        },
        {
          id: "botany-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "plant-transport",
          question: "Explain why a eucalyptus shoot in dry, windy Gippsland air transpires faster than an identical shoot in still, humid Singapore air at the same temperature. [3 marks]",
          marks: 3,
          hints: [
            "Compare the water-vapour concentration outside the leaf in dry air versus humid air.",
            "Explain what wind does to the moist layer right outside the stomata.",
            "Connect the steeper gradient to the speed of diffusion out through the stomata.",
          ],
          modelAnswer:
            "Dry air has low humidity, so there is a steeper water-vapour concentration gradient between the moist air spaces inside the leaf and the outside air. Wind continuously blows away water vapour from around the leaf surface, maintaining that steep gradient. As a result, water vapour diffuses out through the open stomata faster.",
          markScheme: [
            { point: "Dry air / lower humidity creates a steeper water-vapour concentration gradient", keywords: ["concentration gradient", "gradient", "steeper"] },
            { point: "Wind sweeps / blows away humid air around the leaf surface", keywords: ["blows away", "removes", "sweeps away", "air movement"] },
            { point: "Water vapour diffuses out through the stomata at a faster rate", keywords: ["diffuses", "diffusion", "stomata"] },
          ],
          commonError: "Writing 'wind pushes water out of the leaf' instead of explaining diffusion down a steeper concentration gradient.",
        },
        {
          id: "botany-p1-q13",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reproduction-fieldwork",
          question: "What name is given to the transfer of pollen grains from an anther to a stigma?",
          answer: {
            type: "text",
            accept: ["pollination"],
            display: "pollination",
          },
          traps: [
            { spec: { type: "text", accept: ["fertilisation", "fertilization"] }, feedback: "Fertilisation is the fusion of male and female nuclei inside the ovule, which happens AFTER pollen lands on the stigma." },
          ],
          hints: [
            "It comes directly from the word 'pollen'.",
          ],
          solution: [
            "**Pollination** is the transfer of pollen from an anther to a stigma.",
          ],
        },
        {
          id: "botany-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Which seed dispersal method is used by coconut palms growing along Singapore's beaches?",
          options: [
            "Explosive pod dispersal",
            "Hooked animal fur dispersal",
            "Buoyant water dispersal",
            "Parachute wind dispersal",
          ],
          answerIndex: 2,
          hints: [
            "Coconuts are heavy and have a thick, fibrous, air-trapping outer husk.",
            "Where do coastal coconut palms drop their fruits?",
          ],
          explanation:
            "Coconuts have a waterproof skin and fibrous air-filled husk that allows them to float on ocean tides for long distances — a classic example of water dispersal.",
        },
        {
          id: "botany-p1-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Students place ten 1 m × 1 m random quadrats on a 20 m × 15 m meadow and record a total of 60 buttercups across all 10 quadrats. Estimate the total buttercup population in the meadow.",
          answer: { type: "number", value: 1800, display: "1800" },
          traps: [
            { spec: { type: "number", value: 18000 }, feedback: "You multiplied the TOTAL of 10 quadrats (60) by 300 m² — find the MEAN per quadrat (60 ÷ 10 = 6) first!" },
          ],
          hints: [
            "First find the mean number of buttercups per 1 m² quadrat: 60 ÷ 10.",
            "Next find the total area of the meadow: 20 × 15.",
            "Multiply the mean per m² by the total meadow area.",
          ],
          solution: [
            "Mean per quadrat = {{60 / 10 = 6}} buttercups per m².",
            "Meadow area = {{20 * 15 = 300}} m².",
            "Estimated total population = {{6 * 300 = 1800}} buttercups.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2 (15 questions: 9 short, 3 mcq, 3 written)
    // -----------------------------------------------------------------------
    {
      id: "botany-p2",
      title: "Practice Paper 2 — Limiting Factors, Reproduction & Fieldwork",
      questions: [
        {
          id: "botany-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "leaf-structure-cells",
          question: "In three microscope views of area 0.25 mm² each, a student counts 44, 52, and 48 stomata on the lower epidermis of a ficus leaf. Calculate the mean stomatal density in stomata per mm².",
          answer: { type: "number", value: 192, display: "192" },
          traps: [
            { spec: { type: "number", value: 48 }, feedback: "48 is the mean count in 0.25 mm² — divide by 0.25 (multiply by 4) to get stomata per 1 mm²." },
            { spec: { type: "number", value: 12 }, feedback: "You multiplied 48 × 0.25 instead of dividing 48 ÷ 0.25." },
          ],
          hints: [
            "Find the mean of 44, 52, and 48.",
            "Divide the mean by 0.25 mm².",
          ],
          solution: [
            "Mean count = {{(44 + 52 + 48) / 3 = 144 / 3 = 48}} stomata per 0.25 mm².",
            "Density = {{48 / 0.25 = 192}} stomata per mm².",
          ],
        },
        {
          id: "botany-p2-q02",
          kind: "mcq",
          difficulty: "core",
          guideRef: "leaf-structure-cells",
          question: "Why are leaves typically broad and very thin?",
          options: [
            "To maximise light capture and keep gas diffusion distances short",
            "To increase root hair surface area and strengthen lignin rings",
            "To trap rainwater inside the upper epidermis and block stomata",
            "To slow down carbon dioxide movement into the spongy mesophyll",
          ],
          answerIndex: 0,
          hints: [
            "Link 'broad' to absorbing sunlight and 'thin' to gases diffusing to inner cells.",
            "Remember that diffusion is fastest across very short distances.",
          ],
          explanation:
            "A broad blade gives a large surface area to absorb maximum sunlight, while thinness ensures CO₂ only has to diffuse a tiny distance from the stomata to every palisade chloroplast.",
        },
        {
          id: "botany-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "How many hydrogen atoms are present in a single molecule of glucose, C₆H₁₂O₆?",
          answer: { type: "number", value: 12, display: "12" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 is the number of carbon (or oxygen) atoms; read the subscript right after H." },
          ],
          hints: [
            "Read the subscript directly following the symbol H in C₆H₁₂O₆.",
            "Do not confuse the subscript for carbon (6) or oxygen (6) with hydrogen.",
          ],
          solution: [
            "In C₆H₁₂O₆, the subscript 12 after H shows there are **12** hydrogen atoms per glucose molecule.",
          ],
        },
        {
          id: "botany-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "A plant makes 120 g of glucose during a sunny day. If 25% of this glucose is used immediately in respiration and the rest is converted to starch, how many grams of glucose are converted to starch?",
          answer: { type: "number", value: 90, display: "90" },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "30 g is the 25% used in respiration — the question asks for the remaining 75% stored as starch." },
          ],
          hints: [
            "If 25% is used in respiration, what percentage remains for starch?",
            "Calculate 75% of 120 g (or subtract 25% of 120 from 120).",
          ],
          solution: [
            "Used in respiration = {{0.25 * 120 = 30}} g.",
            "Converted to starch = {{120 - 30 = 90}} g.",
          ],
        },
        {
          id: "botany-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "A variegated leaf (green in the middle, white around the edge) from a plant kept in bright sunlight is tested for starch with iodine. State the results for BOTH parts of the leaf and explain why they differ. [3 marks]",
          marks: 3,
          hints: [
            "State the exact iodine colour seen on the originally green part.",
            "State the exact iodine colour seen on the white edge.",
            "Explain which substance is missing from the white edge and why that stops starch being formed.",
          ],
          modelAnswer:
            "The originally green middle turns blue-black with iodine because starch is present, whereas the white edge stays orange-brown because no starch was made. Only the green cells contain chlorophyll to absorb light energy for photosynthesis and produce glucose to store as starch.",
          markScheme: [
            { point: "Green middle turns blue-black (starch present)", keywords: ["blue-black", "blue black"] },
            { point: "White edge stays orange-brown / yellow-brown (no starch)", keywords: ["orange", "brown", "yellow"] },
            { point: "Only green cells contain chlorophyll to absorb light and photosynthesise", keywords: ["chlorophyll", "absorb light", "photosynthesi"] },
          ],
          commonError: "Forgetting to name chlorophyll as the missing pigment in the white patches.",
        },
        {
          id: "botany-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "plant-transport",
          question: "In a bubble potometer with a capillary cross-sectional area of 0.5 mm², the air bubble travels 40 mm in 5 minutes. Calculate the volume of water taken up in mm³ per minute.",
          answer: { type: "number", value: 4, display: "4" },
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "20 mm³ is the total volume taken up in 5 minutes — divide by 5 to get the rate per minute." },
            { spec: { type: "number", value: 8 }, feedback: "8 mm/min is the speed of the bubble — multiply by the cross-sectional area (0.5 mm²) to get volume per minute." },
          ],
          hints: [
            "Total volume of cylinder = cross-sectional area × distance moved = 0.5 × 40.",
            "Divide the total volume in mm³ by 5 minutes.",
          ],
          solution: [
            "Total water volume = {{0.5 * 40 = 20}} mm³.",
            "Rate = {{20 / 5 = 4}} mm³/min.",
          ],
        },
        {
          id: "botany-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "plant-transport",
          question: "During a dry spell, a potted tomato plant begins to wilt and its guard cells turn flaccid. How does this response help the plant survive?",
          options: [
            "Closing the stomata reduces further water vapour loss by transpiration",
            "Opening the stomata wide pulls extra rainwater straight from dry air",
            "Flaccid guard cells pump extra dissolved sugars up through the xylem",
            "Closing the stomata permanently removes the waxy cuticle layer",
          ],
          answerIndex: 0,
          hints: [
            "Remember what flaccid guard cells do to the stomatal pore.",
            "How does closing stomata affect transpiration?",
          ],
          explanation:
            "When guard cells lose water and become flaccid, they close the stomata, dramatically reducing water-vapour loss by transpiration and conserving remaining water.",
        },
        {
          id: "botany-p2-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reproduction-fieldwork",
          question: "After fertilisation inside a flower, which structure swells and develops into the fruit surrounding the seeds?",
          answer: {
            type: "text",
            accept: ["ovary", "the ovary", "ovary wall"],
            display: "ovary",
          },
          traps: [
            { spec: { type: "text", accept: ["ovule", "ovules"] }, feedback: "The ovule becomes the seed; the surrounding ovary wall develops into the fruit." },
          ],
          hints: [
            "It is the swollen base of the female carpel that encloses the ovules.",
          ],
          solution: [
            "The **ovary** develops into the fruit while each fertilised ovule inside it becomes a seed.",
          ],
        },
        {
          id: "botany-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Students investigate a 16 m × 10 m Gippsland grassland plot using eight 0.5 m × 0.5 m random quadrats. Their dandelion counts are 2, 4, 3, 5, 1, 3, 2, and 4. Estimate the total dandelion population in the plot.",
          answer: { type: "number", value: 1920, display: "1920" },
          traps: [
            { spec: { type: "number", value: 480 }, feedback: "You treated each quadrat as 1 m² — remember a 0.5 m × 0.5 m quadrat has area 0.25 m² (so 4 fit in each m²)." },
            { spec: { type: "number", value: 960 }, feedback: "Careful: 0.5 m × 0.5 m = 0.25 m², not 0.5 m²!" },
          ],
          hints: [
            "Step 1: find the mean of the 8 counts (add them and divide by 8).",
            "Step 2: plot area = 16 × 10 = 160 m², and one quadrat = 0.5 × 0.5 = 0.25 m².",
            "Step 3: multiply mean per quadrat × (160 ÷ 0.25).",
          ],
          solution: [
            "Sum of counts = 2 + 4 + 3 + 5 + 1 + 3 + 2 + 4 = 24; mean = {{24 / 8 = 3}} dandelions per quadrat.",
            "Plot area = {{16 * 10 = 160}} m²; quadrat area = {{0.5 * 0.5 = 0.25}} m².",
            "Number of quadrats = {{160 / 0.25 = 640}}.",
            "Estimated population = {{3 * 640 = 1920}} dandelions.",
          ],
        },
        {
          id: "botany-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "A 10 × 10 gridded quadrat (100 equal small squares) is placed over a patch of moss. Moss covers more than half of 38 of the small squares. What is the estimated percentage cover of moss?",
          answer: { type: "number", value: 38, display: "38%" },
          hints: [
            "There are 100 small squares in total, so each small square represents 1% of the quadrat.",
            "Calculate (covered squares ÷ 100) × 100%.",
          ],
          solution: [
            "Percentage cover = {{(38 / 100) * 100 = 38}}%.",
          ],
        },
        {
          id: "botany-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Which feature helps insect-pollinated flowers ensure pollen transfers reliably onto visiting bees?",
          options: [
            "Tiny green petals with no scent and dry smooth pollen",
            "Feathery stigmas hanging outside on long flexible stalks",
            "Sweet nectar deep inside so bees brush sticky pollen off anthers",
            "Explosive dry seed pods that burst open in hot afternoon wind",
          ],
          answerIndex: 2,
          hints: [
            "Think about what attracts a bee into a flower and how pollen sticks to its hairy body.",
            "Compare nectar rewards and enclosed anthers with wind-pollinated traits like feathery stigmas.",
          ],
          explanation:
            "Bright petals, scent, and nectar reward guide bees inside the flower where they brush past enclosed anthers bearing sticky or spiky pollen grains.",
        },
        {
          id: "botany-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Compare two structural differences between a wind-pollinated flower and an insect-pollinated flower, explaining how each feature suits its pollination method. [4 marks]",
          marks: 4,
          hints: [
            "Pick two clear pairs of contrasting structures: petals/nectar, pollen grains, anthers, or stigmas.",
            "For each feature, state BOTH the difference AND why it helps wind or insect pollination.",
          ],
          modelAnswer:
            "Insect-pollinated flowers have large, bright petals and nectar to attract insects, whereas wind-pollinated flowers have small, dull petals with no nectar because wind does not need attracting. Insect-pollinated pollen is sticky or spiky to cling to insects, whereas wind-pollinated flowers release vast quantities of light, smooth pollen caught by large feathery stigmas dangling in the breeze.",
          markScheme: [
            { point: "Insect flowers have bright petals / scent / nectar to attract insects (wind flowers are small/dull with no nectar)", keywords: ["bright", "nectar", "scent", "attract", "dull"] },
            { point: "Insect pollen is sticky/spiky to attach to bodies; wind pollen is light/smooth/abundant to float on air", keywords: ["sticky", "spiky", "light", "smooth", "lightweight"] },
            { point: "Wind flowers have dangling anthers or large feathery stigmas outside to release/catch airborne pollen", keywords: ["feathery", "dangling", "hang", "outside"] },
            { point: "Clear link between structure and how wind or insects transfer the pollen", keywords: ["catch", "cling", "airborne", "breeze", "brush"] },
          ],
          commonError: "Listing structures without explaining HOW each adaptation assists wind or insects.",
        },
        {
          id: "botany-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Along a 20 m belt transect, students place a quadrat at 0 m and then every 2 m up to and including 20 m. How many quadrats do they record in total?",
          answer: { type: "number", value: 11, display: "11" },
          traps: [
            { spec: { type: "number", value: 10 }, feedback: "Don't forget the starting station at 0 m! Counting 0, 2, 4, …, 20 gives 10 intervals + 1 = 11 stations." },
          ],
          hints: [
            "List or count the stations: 0 m, 2 m, 4 m, ..., 20 m.",
            "Remember the fencepost rule: number of stations = (20 ÷ 2) + 1.",
          ],
          solution: [
            "Stations are at 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, and 20 m.",
            "Total quadrats = {{20 / 2 + 1 = 11}}.",
          ],
        },
        {
          id: "botany-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "photosynthesis-starch",
          question: "A leaf produces 48 bubbles of O₂ in 3 minutes at low CO₂ and 72 bubbles in 3 minutes when extra CO₂ is added. What is the percentage increase in photosynthesis rate?",
          answer: { type: "number", value: 50, display: "50%" },
          traps: [
            { spec: { type: "number", value: 24 }, feedback: "24 is the increase in bubbles over 3 minutes — divide the increase by the starting value (48) and multiply by 100." },
            { spec: { type: "number", value: 33.3 }, feedback: "Divide the increase (24) by the ORIGINAL value (48), not by the new value (72)." },
          ],
          hints: [
            "First find the rates (or compare the 3-minute totals directly: 48 → 72).",
            "Percentage increase = (increase ÷ original) × 100 = (24 ÷ 48) × 100.",
          ],
          solution: [
            "Original rate = {{48 / 3 = 16}} bubbles/min; new rate = {{72 / 3 = 24}} bubbles/min.",
            "Percentage increase = {{((24 - 16) / 16) * 100 = (8 / 16) * 100 = 50}}%.",
          ],
        },
        {
          id: "botany-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "reproduction-fieldwork",
          question: "Describe how Year 9 students should plan and carry out a valid fieldwork investigation to test whether *Mimosa* abundance changes from under a shaded tree canopy out into an open sunny field. [4 marks]",
          marks: 4,
          hints: [
            "Name the correct systematic sampling technique for a gradient.",
            "State how quadrats are placed along the tape measure and what biological data you record.",
            "State which abiotic factor to measure with a named instrument, and how to make the investigation more reliable.",
          ],
          modelAnswer:
            "Lay a tape measure in a straight line from under the shaded canopy out into the open sunny field to form a belt transect. Place a 0.5 m × 0.5 m quadrat at regular intervals such as every 2 m along the tape and count the number (or estimate percentage cover) of Mimosa plants in each quadrat. At every station, measure light intensity using a light meter (keeping the sensor facing straight up). Repeat two or three parallel transects and calculate a mean at each distance to improve reliability.",
          markScheme: [
            { point: "Use a belt transect / lay a tape measure from shade into open sun", keywords: ["transect", "tape measure", "gradient"] },
            { point: "Place a quadrat at regular intervals and count plants or record percentage cover", keywords: ["regular intervals", "quadrat", "percentage cover", "count"] },
            { point: "Measure light intensity with a light meter (or lux meter) at each station", keywords: ["light meter", "light intensity", "lux"] },
            { point: "Repeat parallel transects and calculate a mean to improve reliability", keywords: ["repeat", "parallel", "mean", "reliable", "reliability"] },
          ],
          commonError: "Choosing random quadrats instead of a belt transect when investigating a clear abiotic gradient.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard problems, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "botany-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "leaf-structure-cells",
      strategy: "Convert area units carefully before scaling up",
      question: "A hibiscus leaf has a lower surface area of 45 cm² and a mean stomatal density of 160 stomata per mm². Remembering that 1 cm² = 100 mm², calculate the total number of stomata on the underside of the leaf.",
      answer: { type: "number", value: 720000, display: "720000" },
      traps: [
        { spec: { type: "number", value: 7200 }, feedback: "You multiplied 45 × 160 without converting cm² to mm²! Remember 1 cm² = 10 mm × 10 mm = 100 mm²." },
        { spec: { type: "number", value: 72000 }, feedback: "1 cm = 10 mm, so 1 cm² = 10² = 100 mm² (not 10 mm²)." },
      ],
      hints: [
        "First convert the leaf area from cm² into mm² by multiplying by 100.",
        "45 cm² = 4500 mm².",
        "Now multiply 4500 mm² by 160 stomata/mm².",
      ],
      solution: [
        "Convert leaf area to mm²: {{45 * 100 = 4500}} mm².",
        "Total stomata = area × density = {{4500 * 160 = 720000}} stomata.",
      ],
    },
    {
      id: "botany-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "photosynthesis-starch",
      strategy: "Track net gas exchange = gross photosynthesis − respiration",
      question: "In bright light, a pondweed shoot produces oxygen by photosynthesis at a gross rate of 34 mm³/min while simultaneously using oxygen in aerobic respiration at a constant rate of 6 mm³/min. If the light is dimmed so photosynthesis drops to half its bright-light rate while respiration stays unchanged, what is the NEW net rate of oxygen release into the water (in mm³/min)?",
      answer: { type: "number", value: 11, display: "11" },
      traps: [
        { spec: { type: "number", value: 14 }, feedback: "Careful! You halved the NET rate (28 ÷ 2 = 14) instead of halving ONLY the gross photosynthesis rate (34 ÷ 2 = 17) and then subtracting respiration (6)." },
        { spec: { type: "number", value: 17 }, feedback: "17 mm³/min is the new gross photosynthesis rate — remember the plant is STILL respiring at 6 mm³/min!" },
      ],
      hints: [
        "Respiration continues at the same 6 mm³/min regardless of light intensity.",
        "First halve the GROSS photosynthesis rate: 34 ÷ 2 = 17 mm³/min.",
        "Now subtract the oxygen consumed by respiration (6 mm³/min) from 17 mm³/min.",
      ],
      solution: [
        "New gross photosynthesis rate = {{34 / 2 = 17}} mm³/min.",
        "Respiration still consumes 6 mm³/min of O₂.",
        "New net O₂ release = {{17 - 6 = 11}} mm³/min.",
      ],
    },
    {
      id: "botany-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "photosynthesis-starch",
      strategy: "Apply inverse-square light reasoning",
      question: "A student moves an LED lamp from 10 cm away to 20 cm away from a shoot of *Cabomba* pondweed (doubling the distance). Because light spreads out over an area proportional to distance², what happens to the light intensity hitting the pondweed?",
      options: [
        "It drops to one-half of its original value",
        "It drops to one-quarter of its original value",
        "It doubles to twice its original value",
        "It stays identical because an LED emits no heat",
      ],
      answerIndex: 1,
      hints: [
        "Light intensity follows the inverse-square law: intensity is proportional to 1 ÷ d².",
        "When distance d doubles (× 2), what is d² multiplied by?",
        "If the denominator becomes 2² = 4 times larger, the light intensity becomes 1/4 as strong.",
      ],
      explanation:
        "By the inverse-square law (I ∝ 1/d²), doubling the distance spreads the same beam of light over 2² = 4 times the area, so the light intensity drops to one-quarter of its original value.",
    },
    {
      id: "botany-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "plant-transport",
      strategy: "Use cylinder volume and unit conversion cleanly",
      question: "A potometer's capillary tube has a cross-sectional area of 0.8 mm². In a dry Gippsland breeze, the air bubble moves 75 mm in 15 minutes. Calculate the rate of water uptake in mm³ per HOUR.",
      answer: { type: "number", value: 240, display: "240" },
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "4 mm³/min is the rate per MINUTE — multiply by 60 to convert to mm³ per HOUR." },
        { spec: { type: "number", value: 60 }, feedback: "60 mm³ is the volume taken up in 15 minutes — multiply by 4 (since 60 min ÷ 15 min = 4) to get the hourly rate." },
      ],
      hints: [
        "Step 1: calculate the volume of water taken up in 15 minutes: area × distance = 0.8 × 75.",
        "Step 2: how many 15-minute intervals are in 1 hour (60 minutes)?",
        "Multiply the 15-minute volume by 4.",
      ],
      solution: [
        "Volume taken up in 15 minutes = {{0.8 * 75 = 60}} mm³.",
        "There are {{60 / 15 = 4}} fifteen-minute periods in 1 hour.",
        "Hourly rate = {{60 * 4 = 240}} mm³/hour.",
      ],
    },
    {
      id: "botany-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "photosynthesis-starch",
      strategy: "Evaluate cost vs limiting-factor benefit",
      question: "A commercial greenhouse grower pumps extra carbon dioxide and runs electric heaters to maintain 28 °C during sunny afternoons, but turns OFF the CO₂ supply at night and lowers the heating to 16 °C. Explain fully why this strategy maximises profit. [4 marks]",
      marks: 4,
      hints: [
        "In bright afternoon light, what factors could otherwise limit photosynthesis if not boosted?",
        "At night, why can the plants NOT use any extra CO₂?",
        "Why does lowering temperature slightly at night also save glucose (think about respiration)?",
      ],
      modelAnswer:
        "On sunny afternoons, light intensity is high so CO₂ concentration and temperature would become limiting factors; raising both speeds up photosynthesis and increases glucose production and crop yield. At night there is no light, so photosynthesis stops completely and pumping extra CO₂ would be wasted money. Lowering the night temperature saves heating fuel costs and also reduces the rate of respiration, so less stored glucose is used up overnight.",
      markScheme: [
        { point: "In bright sun, boosting CO₂ and temperature removes limiting factors so photosynthesis and yield rise", keywords: ["limiting factor", "yield", "faster photosynthesis", "speeds up"] },
        { point: "At night there is no light, so photosynthesis cannot happen", keywords: ["no light", "cannot photosynthesi", "stops"] },
        { point: "Turning off CO₂ and reducing heat avoids wasting money / fuel", keywords: ["waste", "cost", "money", "fuel", "save"] },
        { point: "Cooler night temperatures lower respiration rate so plants keep more stored glucose", keywords: ["respiration", "stored glucose", "less glucose"] },
      ],
      commonError: "Forgetting that plants still respire at night, so excess night-time heating actually burns away the sugar made during the day!",
    },
    {
      id: "botany-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reproduction-fieldwork",
      strategy: "Compare two different quadrat sizes accurately",
      question: "Two teams survey the same 30 m × 20 m Gippsland meadow. Team A uses 0.5 m × 0.5 m quadrats and finds a mean of 2.5 orchids per quadrat. Team B uses 1 m × 1 m quadrats and finds a mean of 9 orchids per quadrat. What is the difference between Team A's and Team B's estimated total orchid populations for the meadow?",
      answer: { type: "number", value: 600, display: "600" },
      traps: [
        { spec: { type: "number", value: 3900 }, feedback: "You forgot to divide by 0.25 m² for Team A's smaller 0.5 m × 0.5 m quadrats!" },
        { spec: { type: "number", value: 2400 }, feedback: "Check Team A's quadrat area: 0.5 × 0.5 = 0.25 m², not 0.5 m²!" },
      ],
      hints: [
        "Meadow area = 30 × 20 = 600 m².",
        "Team A's quadrat area is 0.25 m², so 2.5 orchids per 0.25 m² equals 10 orchids per m² → 10 × 600 = 6000.",
        "Team B's density is 9 orchids per m² → 9 × 600 = 5400. Now find the difference!",
      ],
      solution: [
        "Meadow area = {{30 * 20 = 600}} m².",
        "Team A density = {{2.5 / 0.25 = 10}} orchids/m² → estimate = {{10 * 600 = 6000}} orchids.",
        "Team B density = {{9 / 1 = 9}} orchids/m² → estimate = {{9 * 600 = 5400}} orchids.",
        "Difference = {{6000 - 5400 = 600}} orchids.",
      ],
    },
    {
      id: "botany-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "plant-transport",
      strategy: "Trace vascular pathway disruption step by step",
      question: "If a deer chews away a complete ring of bark (removing all phloem tubes) around the trunk of a young eucalyptus tree while leaving the woody xylem core untouched, explain why (a) the leaves stay green for weeks, (b) the bark swells just above the cut, and (c) the tree eventually dies. [4 marks]",
      marks: 4,
      hints: [
        "First trace water and minerals through the untouched inner xylem up to the leaves.",
        "Next trace sugars made in the leaves travelling downwards in the phloem until they hit the missing ring.",
        "Finally ask what happens to the roots without glucose, and how dead roots affect the whole tree.",
      ],
      modelAnswer:
        "Because the inner xylem vessels remain intact, water and mineral ions still travel upwards in the transpiration stream to the leaves, so the leaves stay turgid and keep photosynthesising. However, removing the phloem blocks downward translocation, causing dissolved sugars from the leaves to accumulate and swell the tissue just above the ring. Without sugars reaching the roots, root cells cannot respire to absorb minerals and eventually die, which finally stops water uptake and kills the entire tree.",
      markScheme: [
        { point: "Intact xylem still transports water and mineral ions upwards to keep leaves green/photosynthesising", keywords: ["xylem", "water", "upward", "transpiration"] },
        { point: "Missing phloem blocks downward translocation of dissolved sugars", keywords: ["translocation", "block", "sugars", "sucrose"] },
        { point: "Sugars accumulate above the cut causing swelling", keywords: ["accumulate", "build up", "collect", "swell"] },
        { point: "Roots starve of glucose for respiration and die, halting water uptake so the tree dies", keywords: ["roots", "respir", "starve", "die"] },
      ],
      commonError: "Claiming the leaves wilt immediately because water is blocked — remember xylem is deeper inside the trunk than phloem!",
    },
    {
      id: "botany-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reproduction-fieldwork",
      strategy: "Work backwards from a target population estimate",
      question: "A rectangular forest plot is 25 m long and 16 m wide. Ecologists estimate there are exactly 7200 ferns in the plot using twenty 0.5 m × 0.5 m random quadrats. What was the mean number of ferns per quadrat?",
      answer: { type: "number", value: 4.5, display: "4.5" },
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "18 is the mean number of ferns per 1 m² — each quadrat is only 0.25 m², so divide 18 by 4!" },
        { spec: { type: "number", value: 9 }, feedback: "Remember 0.5 m × 0.5 m = 0.25 m² (one-quarter of a m²), not 0.5 m²." },
      ],
      hints: [
        "First find the total area of the plot: 25 × 16 = 400 m².",
        "How many 0.25 m² quadrats fit into 400 m²? Compute 400 ÷ 0.25 = 1600.",
        "Divide the total estimated population (7200) by 1600 to get the mean per quadrat.",
      ],
      solution: [
        "Plot area = {{25 * 16 = 400}} m².",
        "Quadrat area = {{0.5 * 0.5 = 0.25}} m², so {{400 / 0.25 = 1600}} quadrats fit in the plot.",
        "Mean per quadrat = {{7200 / 1600 = 4.5}} ferns per quadrat.",
      ],
    },
  ],
};
