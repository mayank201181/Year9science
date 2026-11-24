import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1 — Foundations & Core Recall (15 MCQs)
  // =========================================================================
  {
    id: "oil-and-pollution-m1",
    title: "MCQ Paper 1: Alkanes, Fractions, Cracking & Combustion",
    questions: [
      {
        id: "oil-and-pollution-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Which statement gives the exact scientific definition of a **hydrocarbon**?",
        options: [
          "A compound containing hydrogen and carbon atoms only",
          "A mixture containing carbon, hydrogen and oxygen gas",
          "Any liquid fuel dissolved inside cold distilled water",
          "An element formed from compressed marine plankton",
        ],
        answerIndex: 0,
        explanation:
          "A **hydrocarbon** is strictly a compound made of **hydrogen and carbon atoms ONLY**. Compounds such as ethanol ({{C_2H_5OH}}) also contain oxygen, so they are NOT hydrocarbons.",
        hints: [
          "Look for the crucial limiting word 'only' in the definition.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hydrocarbons-alkanes",
        question:
          "What is the molecular formula of the alkane **propane**?",
        options: ["CH₄", "C₃H₈", "C₃H₆", "C₄H₁₀"],
        answerIndex: 1,
        explanation:
          "Propane has **3** carbon atoms (Monkeys Eat **Peeled** Bananas). Using the alkane general formula {{C_nH_{2n+2}}} with {{n = 3}} gives {{2(3) + 2 = 8}} hydrogens → **{{C_3H_8}}**. {{C_3H_6}} is propene (an alkene).",
        hints: [
          "Use 'Monkeys Eat Peeled Bananas' to find how many carbons are in propane.",
          "Substitute n = 3 into CₙH₂ₙ₊₂.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hydrocarbons-alkanes",
        question:
          "As the carbon chain length of an alkane **increases**, how do its boiling point and viscosity change?",
        options: [
          "Boiling point decreases and viscosity decreases",
          "Boiling point increases and viscosity decreases",
          "Boiling point increases and viscosity increases",
          "Boiling point decreases and viscosity increases",
        ],
        answerIndex: 2,
        explanation:
          "Longer hydrocarbon molecules experience stronger intermolecular forces between them, so both **boiling point** and **viscosity** (thickness) **increase** as chain length increases.",
        hints: [
          "Compare short methane gas with thick, sticky bitumen at the bottom of a column.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fractional-distillation-oil",
        question:
          "How does temperature vary inside an industrial crude oil **fractionating column**?",
        options: [
          "Coolest at the bottom and hottest at the very top",
          "Constant at 100 °C from the bottom to the very top",
          "Hottest in the exact middle and freezing at both ends",
          "Hottest at the bottom and coolest at the very top",
        ],
        answerIndex: 3,
        explanation:
          "Hot crude oil vapour at ~350 °C enters near the bottom, so the column is **hottest at the bottom and coolest at the top** at ~25 °C. Vapours cool as they rise and condense at their own boiling points.",
        hints: [
          "Where does the hot vapour from the furnace enter the fractionating tower?",
        ],
      },
      {
        id: "oil-and-pollution-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fractional-distillation-oil",
        question:
          "Which crude oil fraction is primarily used as aviation fuel for **jet aircraft**?",
        options: [
          "Refinery gases",
          "Heavy bitumen",
          "Kerosene",
          "Fuel oil",
        ],
        answerIndex: 2,
        explanation:
          "**Kerosene** (paraffin) condenses between petrol and diesel and is used as aviation jet fuel. Bitumen surfaces roads, fuel oil powers cargo ships, and refinery gases are used for cooking and heating.",
        hints: [
          "Recall the 6 fractions in order: Refinery gases, Petrol, Kerosene, Diesel, Fuel oil, Bitumen.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cracking-alkenes",
        question:
          "What colour change occurs when an unsaturated **alkene** is shaken with **orange bromine water**?",
        options: [
          "Orange to colourless",
          "Colourless to bright blue",
          "Orange to milky white",
          "Orange stays unchanged",
        ],
        answerIndex: 0,
        explanation:
          "Alkenes contain a reactive **{{C=C}} double bond** that reacts rapidly with bromine, turning orange bromine water **colourless**. Saturated alkanes leave bromine water orange.",
        hints: [
          "Remember: bromine adds across the C=C double bond, removing the orange bromine colour.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cracking-alkenes",
        question:
          "What is the general formula for the homologous series of **alkenes**?",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
        answerIndex: 1,
        explanation:
          "Alkenes contain one {{C=C}} double bond, giving them 2 fewer hydrogens than the matching alkane: general formula **{{C_nH_{2n}}}** (such as ethene {{C_2H_4}} and propene {{C_3H_6}}).",
        hints: [
          "Check the formula of ethene (C₂H₄) and propene (C₃H₆).",
        ],
      },
      {
        id: "oil-and-pollution-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "combustion-pollution",
        question:
          "What are the ONLY two products of the **complete combustion** of a pure hydrocarbon fuel in excess oxygen?",
        options: [
          "Carbon monoxide and black carbon soot",
          "Sulfur dioxide and nitrogen dioxide",
          "Hydrogen gas and solid carbon soot",
          "Carbon dioxide and water",
        ],
        answerIndex: 3,
        explanation:
          "In excess oxygen, all carbon oxidises fully to **carbon dioxide ({{CO_2}})** and all hydrogen oxidises to **water ({{H_2O}})**.",
        hints: [
          "A hydrocarbon contains only C and H — what does each element form when fully oxidised?",
        ],
      },
      {
        id: "oil-and-pollution-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Why are alkanes described as **saturated** hydrocarbons?",
        options: [
          "Every carbon–carbon bond is a single covalent bond",
          "They dissolve completely in cold distilled water",
          "Every molecule contains at least one C=C double bond",
          "They are found exclusively at the bottom of the sea",
        ],
        answerIndex: 0,
        explanation:
          "In chemistry, **saturated** means the carbon chain contains **single {{C-C}} covalent bonds only**, so each carbon atom holds the maximum possible number of hydrogen atoms.",
        hints: [
          "Contrast 'saturated' alkanes with 'unsaturated' alkenes.",
          "Think about single bonds versus double bonds between carbon atoms.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fractional-distillation-oil",
        question:
          "Which list places four crude oil fractions in the correct order from **TOP (lowest boiling point)** to **BOTTOM (highest boiling point)**?",
        options: [
          "Bitumen → Diesel → Petrol → Refinery gases",
          "Petrol → Refinery gases → Diesel → Kerosene",
          "Refinery gases → Petrol → Kerosene → Diesel",
          "Kerosene → Petrol → Fuel oil → Bitumen",
        ],
        answerIndex: 2,
        explanation:
          "From coolest top to hottest bottom, the fractions run: **Refinery gases → Petrol → Kerosene → Diesel → Fuel oil → Bitumen** ('Really Polite Kids Don't Fight Bullies').",
        hints: [
          "Use the mnemonic: Really Polite Kids Don't Fight Bullies.",
          "Shortest chains (gases) always leave at the very top.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "When decane ({{C_{10}H_{22}}}) is cracked to make **octane ({{C_8H_{18}}})** plus one other hydrocarbon molecule, what is the formula of the other product?",
        options: ["C₂H₆", "C₄H₈", "C₃H₆", "C₂H₄"],
        answerIndex: 3,
        explanation:
          "Conserve atoms: carbon = {{10 - 8 = 2}}, hydrogen = {{22 - 18 = 4}}, giving **{{C_2H_4}}** (ethene, an alkene). Notice {{C_2H_6}} would have 24 hydrogens in total, violating conservation of atoms.",
        hints: [
          "Subtract the atoms in C₈H₁₈ from the atoms in C₁₀H₂₂.",
          "Check: C = 10 − 8 and H = 22 − 18.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Why is **carbon monoxide (CO)** produced by incomplete combustion so dangerous to humans?",
        options: [
          "It dissolves in clouds to corrode limestone buildings",
          "It binds to haemoglobin and blocks oxygen transport in blood",
          "It absorbs UV light and destroys the stratospheric ozone layer",
          "It turns clear rainwater strongly alkaline across farmland",
        ],
        answerIndex: 1,
        explanation:
          "Carbon monoxide is a toxic, colourless, odourless gas that binds tightly to **haemoglobin** inside red blood cells, preventing the blood from carrying oxygen to vital organs.",
        hints: [
          "Think about what red blood cells carry around the human body.",
          "Acid rain is caused by SO₂ and NOₓ, not carbon monoxide.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Which two pollutant gases dissolve in rainwater clouds to cause **acid rain**?",
        options: [
          "Methane and carbon monoxide",
          "Oxygen and nitrogen gas",
          "Sulfur dioxide and nitrogen oxides",
          "Argon and water vapour",
        ],
        answerIndex: 2,
        explanation:
          "**Sulfur dioxide ({{SO_2}})** (from sulfur impurities in fuels) and **nitrogen oxides ({{NO_x}})** (from {{N_2 + O_2}} reacting in hot engines) dissolve in rainwater to form acidic solutions (sulfuric and nitric acids) that cause acid rain.",
        hints: [
          "Look for the two acidic non-metal oxides linked to burning fossil fuels and car engines.",
          "Remember methane is a greenhouse gas, not a cause of acid rain.",
        ],
      },
      {
        id: "oil-and-pollution-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "Which two conditions are used for industrial **catalytic cracking** of long-chain alkanes?",
        options: [
          "High temperature (~550 °C) and a hot solid catalyst",
          "Room temperature (25 °C) and dilute sulfuric acid",
          "Freezing temperatures (−40 °C) and ultraviolet light",
          "Boiling water (100 °C) and clear limewater solution",
        ],
        answerIndex: 0,
        explanation:
          "**Catalytic cracking** passes vaporised heavy hydrocarbons over a **hot catalyst** (aluminium oxide or zeolite) at around **500–600 °C**. Steam cracking uses steam and ~850 °C without a catalyst.",
        hints: [
          "Breaking strong C–C covalent bonds requires very high thermal energy.",
          "What does the word 'catalytic' tell you is also present?",
        ],
      },
      {
        id: "oil-and-pollution-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Which compound below is **NOT** a hydrocarbon?",
        options: ["C₅H₁₂", "C₃H₆", "CH₄", "C₂H₅OH"],
        answerIndex: 3,
        explanation:
          "**{{C_2H_5OH}}** (ethanol) contains an **oxygen** atom as well as carbon and hydrogen, so it breaks the strict rule that a hydrocarbon contains hydrogen and carbon **ONLY**.",
        hints: [
          "Check every element symbol in each formula.",
          "A hydrocarbon must contain ONLY C and H atoms.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M2 — Reasoning, Equations & Refinery Data (15 MCQs)
  // =========================================================================
  {
    id: "oil-and-pollution-m2",
    title: "MCQ Paper 2: Intermolecular Forces, Cracking & Pollutants",
    questions: [
      {
        id: "oil-and-pollution-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Why does octane ({{C_8H_{18}}}, b.p. 126 °C) have a much higher boiling point than methane ({{CH_4}}, b.p. −162 °C)?",
        options: [
          "Octane's covalent C–C bonds break during boiling whereas methane's do not",
          "Octane has stronger intermolecular forces between its larger molecules",
          "Octane contains ionic bonds that require extreme energy to melt",
          "Methane is an unsaturated alkene with weaker C=C double bonds",
        ],
        answerIndex: 1,
        explanation:
          "Boiling is a physical change that overcomes forces **between** separate molecules, NOT covalent bonds inside them. Octane is a much larger molecule, so its **intermolecular forces** are far stronger and need more thermal energy to overcome.",
        hints: [
          "Do covalent bonds inside molecules break when a liquid boils?",
          "Compare the strength of forces BETWEEN large octane molecules vs tiny methane molecules.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fractional-distillation-oil",
        question:
          "Why do **refinery gases** ({{C_1}} to {{C_4}}) leave as gases from the very top of a fractionating column instead of condensing on a tray?",
        options: [
          "They react with the metal column walls to form steam",
          "Their molecules are too heavy to sink back down the tower",
          "Their boiling points are even lower than the coolest top temperature",
          "They are thermally cracked into solid soot near the top",
        ],
        answerIndex: 2,
        explanation:
          "Methane, ethane, propane, and butane all have boiling points below 0 °C, which is colder than the coolest top zone of the column (~25 °C). Because the column never gets cold enough, they remain gases all the way out of the top.",
        hints: [
          "Compare the boiling points of C₁–C₄ alkanes — all below 0 °C — with the top temperature of the column at ~25 °C.",
          "A vapour only condenses when it reaches a zone COOLER than its boiling point.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "Which statement gives TWO genuine economic reasons why oil refineries perform **cracking** on heavy fuel oil?",
        options: [
          "High demand for short petrol fuels and alkenes for making plastics",
          "High demand for thick road bitumen and pure oxygen for hospitals",
          "To convert short petrol molecules into longer bitumen chains",
          "To remove sulfur impurities and turn hydrocarbons into pure water",
        ],
        answerIndex: 0,
        explanation:
          "Crude oil naturally yields too many heavy long chains and too few short chains. Cracking breaks heavy chains into **short-chain alkanes** (meeting huge demand for petrol/diesel) plus **alkenes** (vital monomers for manufacturing plastics/polymers).",
        hints: [
          "Ask: which fractions have more demand than crude oil naturally supplies?",
          "Think about what useful industrial materials are made from alkenes like ethene.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "Which balanced equation correctly represents the cracking of **dodecane ({{C_{12}H_{26}}})**?",
        options: [
          "C₁₂H₂₆ → C₈H₁₈ + C₄H₁₀",
          "C₁₂H₂₆ → C₆H₁₄ + C₅H₁₀",
          "C₁₂H₂₆ → C₇H₁₆ + C₅H₁₂",
          "C₁₂H₂₆ → C₉H₂₀ + C₃H₆",
        ],
        answerIndex: 3,
        explanation:
          "Check atom conservation on each choice: in **{{C_{12}H_{26} -> C_9H_{20} + C_3H_6}}**, carbons = {{9 + 3 = 12}} ✓ and hydrogens = {{20 + 6 = 26}} ✓, yielding a shorter alkane (nonane) + an alkene (propene)! Every other choice fails to conserve C or H atoms.",
        hints: [
          "Add up total C atoms on the right side (must equal 12).",
          "Add up total H atoms on the right side (must equal 26).",
        ],
      },
      {
        id: "oil-and-pollution-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Where do the **nitrogen oxides ({{NO_x}})** emitted from a petrol car exhaust come from?",
        options: [
          "Nitrogen impurities originally dissolved inside crude oil",
          "Nitrogen and oxygen from the air reacting at high engine temperatures",
          "Incomplete combustion of carbon atoms inside the petrol tank",
          "Breakdown of platinum metal inside the exhaust catalytic converter",
        ],
        answerIndex: 1,
        explanation:
          "Air drawn into a car engine is 78% nitrogen and 21% oxygen. At the extreme temperatures of spark combustion, atmospheric **{{N_2}} and {{O_2}}** react together to form nitrogen oxides ({{NO_x}}). (In contrast, {{SO_2}} comes from sulfur impurities in the fuel.)",
        hints: [
          "Do NOT confuse the source of SO₂ with the source of NOₓ.",
          "What two gases make up 99% of the air sucked into a hot car engine?",
        ],
      },
      {
        id: "oil-and-pollution-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "What is the balanced symbol equation for the **complete combustion of ethane ({{C_2H_6}})**?",
        options: [
          "C₂H₆ + 3O₂ → 2CO₂ + 3H₂O",
          "2C₂H₆ + 5O₂ → 4CO + 6H₂O",
          "2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O",
          "C₂H₆ + 4O₂ → 2CO₂ + 6H₂O",
        ],
        answerIndex: 2,
        explanation:
          "For 2 molecules of {{C_2H_6}}: **4 C** → {{4CO_2}}; **12 H** → {{6H_2O}}. Total O atoms on the right = {{4(2) + 6(1) = 8 + 6 = 14}} O atoms = **{{7O_2}}**. Check: {{2C_2H_6 + 7O_2 -> 4CO_2 + 6H_2O}}.",
        hints: [
          "Complete combustion MUST produce CO₂ and H₂O (not CO).",
          "Count total C, H, and O atoms on both sides of each equation.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "Why is there NO alkene called **'methene'** with only 1 carbon atom?",
        options: [
          "A carbon–carbon double bond requires at least two carbon atoms",
          "One carbon atom can only form two single covalent bonds in total",
          "Methane has too high a boiling point to react with bromine water",
          "One carbon atom cannot bond with hydrogen atoms at all",
        ],
        answerIndex: 0,
        explanation:
          "By definition, every alkene must contain a **carbon–carbon double bond ({{C=C}})**, which is impossible with fewer than **two** carbon atoms — so the smallest alkene is **ethene ({{C_2H_4}})**.",
        hints: [
          "What functional group defines every alkene?",
          "How many carbon atoms are needed to form a C=C bond?",
        ],
      },
      {
        id: "oil-and-pollution-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fractional-distillation-oil",
        question:
          "Compared with **diesel oil**, how do the properties of **petrol** differ?",
        options: [
          "Petrol has longer chains, darker colour and higher viscosity",
          "Petrol has a higher boiling point and lower flammability",
          "Petrol condenses lower down the fractionating column",
          "Petrol has shorter chains, lower viscosity and higher flammability",
        ],
        answerIndex: 3,
        explanation:
          "Petrol condenses **higher up** the column than diesel, meaning petrol contains **shorter hydrocarbon chains**, giving it a lower boiling point, **lower viscosity** (runnier), lighter colour, and **higher flammability**.",
        hints: [
          "Check which fraction sits higher up the column: petrol or diesel?",
          "Higher up = shorter chains, runnier (lower viscosity), easier to ignite (higher flammability).",
        ],
      },
      {
        id: "oil-and-pollution-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Tiny solid **carbon particulates (soot)** released from incomplete diesel combustion cause which pair of environmental and health problems?",
        options: [
          "Acid rain and limestone erosion",
          "Global dimming and respiratory disease",
          "Ozone depletion and radioactive fallout",
          "Ocean fertilisation and faster plant growth",
        ],
        answerIndex: 1,
        explanation:
          "Airborne soot particulates scatter and reflect incoming sunlight back to space (**global dimming**) and lodge deep inside human lungs, worsening **asthma and respiratory/cardiovascular disease**.",
        hints: [
          "Think about what dark particles floating in the atmosphere do to incoming sunlight.",
          "Think about what inhaling microscopic soot particles does to human lungs.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hydrocarbons-alkanes",
        question:
          "An alkane molecule contains **16 hydrogen atoms**. How many **carbon atoms** does it contain?",
        options: ["7", "8", "9", "14"],
        answerIndex: 0,
        explanation:
          "Set {{2n + 2 = 16}} → {{2n = 14}} → {{n = 7}} carbon atoms (heptane, {{C_7H_{16}}}). Dividing 16 by 2 directly gives 8, which would be octene ({{C_8H_{16}}}), an alkene!",
        hints: [
          "Set the alkane formula 2n + 2 equal to 16.",
          "Subtract 2 first, then divide by 2.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "What chemical reaction takes place inside a car's **catalytic converter** to reduce exhaust pollution?",
        options: [
          "Carbon dioxide and water react to regenerate liquid petrol",
          "Sulfur dioxide and soot react to form pure oxygen gas",
          "Methane and air react to produce solid road bitumen",
          "Carbon monoxide and nitrogen oxide react to form CO₂ and N₂",
        ],
        answerIndex: 3,
        explanation:
          "A catalytic converter uses platinum/rhodium catalysts to convert toxic **CO** and acid-rain-causing **NO** into less harmful **carbon dioxide and nitrogen gas**: {{2CO + 2NO -> 2CO_2 + N_2}}.",
        hints: [
          "Identify the two toxic exhaust gases removed by a catalytic converter.",
          "Check what harmless atmospheric gas nitrogen oxides are reduced back into.",
        ],
      },
      {
        id: "oil-and-pollution-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "Why will an exam marker **reject** the answer 'alkenes turn orange bromine water **clear**'?",
        options: [
          "Because bromine water actually turns bright purple with alkenes",
          "Because bromine water is cloudy white before adding the alkene",
          "Because orange bromine water is already clear; it turns colourless",
          "Because alkenes only react with bromine water below 0 °C",
        ],
        answerIndex: 2,
        explanation:
          "'Clear' simply means transparent (you can see through it). Orange bromine water is **already clear** before the test! The correct colour change is **orange to colourless**.",
        hints: [
          "Think about the exact difference in science between 'clear' (transparent) and 'colourless' (no colour).",
          "Can you see through a clean glass of orange squash?",
        ],
      },
      {
        id: "oil-and-pollution-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fractional-distillation-oil",
        question:
          "Which statement correctly compares **fractional distillation** of crude oil with **cracking**?",
        options: [
          "Both are chemical reactions that break strong C–C covalent bonds",
          "Fractional distillation is physical separation; cracking is chemical decomposition",
          "Fractional distillation creates alkenes; cracking separates mixtures by boiling point",
          "Both occur at room temperature without requiring any heating",
        ],
        answerIndex: 1,
        explanation:
          "**Fractional distillation** is a **physical separation** based on boiling points (no covalent bonds break; no new substances form). **Cracking** is a **chemical thermal decomposition** that breaks {{C-C}} covalent bonds to create shorter alkanes and alkenes.",
        hints: [
          "Does fractional distillation create brand-new molecules, or only sort molecules already present?",
          "Which process snaps strong covalent bonds to manufacture alkenes?",
        ],
      },
      {
        id: "oil-and-pollution-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Which two human activities are major sources of the potent greenhouse gas **methane ({{CH_4}})**?",
        options: [
          "Cattle farming and growing rice in flooded paddy fields",
          "Running electric trains and installing rooftop solar panels",
          "Purifying drinking water and condensing liquid nitrogen",
          "Building wind turbines and surfacing roads with bitumen",
        ],
        answerIndex: 0,
        explanation:
          "**Methane ({{CH_4}})** is released in large quantities by anaerobic microbes in **cattle digestive tracts**, **flooded rice paddies**, and rotting organic waste in **landfill sites**.",
        hints: [
          "Think about agriculture and decomposing waste where bacteria live without oxygen.",
          "Which farming practices are well-known methane emitters?",
        ],
      },
      {
        id: "oil-and-pollution-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Four alkanes have boiling points: P (−42 °C), Q (+69 °C), R (−0.5 °C), and S (+174 °C). Which alkane has the **longest carbon chain** and the **lowest flammability**?",
        options: ["Alkane P", "Alkane R", "Alkane S", "Alkane Q"],
        answerIndex: 2,
        explanation:
          "Higher boiling point corresponds to longer carbon chains and stronger intermolecular forces. **Alkane S** has the highest boiling point (+174 °C), so it has the **longest chain**, highest viscosity, and **lowest flammability**.",
        hints: [
          "Does the longest carbon chain have the highest or lowest boiling point?",
          "Compare −42 °C, −0.5 °C, +69 °C, and +174 °C.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M3 — Synthesis, Multi-Step Equations & Critical Analysis (15 MCQs)
  // =========================================================================
  {
    id: "oil-and-pollution-m3",
    title: "MCQ Paper 3: Refinery Puzzles, Cracking & Climate Chemistry",
    questions: [
      {
        id: "oil-and-pollution-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cracking-alkenes",
        question:
          "One molecule of hexadecane ({{C_{16}H_{34}}}) is cracked to produce **one** molecule of octane ({{C_8H_{18}}}) and **TWO** identical molecules of alkene **Y**. What is the formula of **Y**?",
        options: ["C₂H₄", "C₃H₆", "C₄H₈", "C₈H₁₆"],
        answerIndex: 2,
        explanation:
          "Remaining atoms after forming {{C_8H_{18}}}: carbons = {{16 - 8 = 8}}; hydrogens = {{34 - 18 = 16}}. Because **TWO identical molecules** of Y are produced, divide by 2: each molecule of Y has 4 carbons and 8 hydrogens → **{{C_4H_8}}** (butene)!",
        hints: [
          "First subtract C₈H₁₈ from C₁₆H₃₄ to find the atoms left over.",
          "Remember those leftover atoms are split equally between TWO identical molecules of Y!",
        ],
      },
      {
        id: "oil-and-pollution-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combustion-pollution",
        question:
          "Why does fitting a **catalytic converter** to a petrol car NOT eliminate the car's contribution to **global warming**?",
        options: [
          "Catalytic converters release large amounts of liquid sulfur",
          "Catalytic converters double the amount of soot particulates emitted",
          "Catalytic converters convert harmless nitrogen into toxic methane",
          "Catalytic converters still emit carbon dioxide, a greenhouse gas",
        ],
        answerIndex: 3,
        explanation:
          "Catalytic converters successfully remove poisonous CO and acid-rain-causing NO ({{2CO + 2NO -> 2CO_2 + N_2}}), but both the engine and the converter still release **carbon dioxide ({{CO_2}})** — a greenhouse gas that drives global warming.",
        hints: [
          "Write down the products of the catalytic converter reaction: 2CO + 2NO → ?",
          "Check whether one of those products is a greenhouse gas.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fractional-distillation-oil",
        question:
          "An alkane with boiling point **151 °C** enters the bottom of a fractionating column as hot vapour at 350 °C. The column has collecting trays at 310 °C, 240 °C, 130 °C, and 50 °C. On which tray does this alkane **condense**?",
        options: [
          "The 240 °C tray",
          "The 130 °C tray",
          "The 310 °C tray",
          "The 50 °C tray",
        ],
        answerIndex: 1,
        explanation:
          "As the vapour rises from 350 °C, it stays a gas at 310 °C and 240 °C because both trays are hotter than 151 °C. The **first** tray cooler than 151 °C is the **130 °C tray**, where it condenses into liquid and drains off before ever reaching 50 °C.",
        hints: [
          "Follow the vapour upwards from 350 °C one tray at a time.",
          "It condenses on the VERY FIRST tray whose temperature falls below 151 °C.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cracking-alkenes",
        question:
          "A student tests four pure hydrocarbon gases with orange bromine water:\n- Gas 1 ({{C_2H_6}})\n- Gas 2 ({{C_3H_6}})\n- Gas 3 ({{C_4H_{10}}})\n- Gas 4 ({{C_4H_8}})\nWhich gases turn the bromine water **colourless**?",
        options: [
          "Gas 2 and Gas 4 only",
          "Gas 1 and Gas 3 only",
          "Gas 1 and Gas 2 only",
          "Gas 3 and Gas 4 only",
        ],
        answerIndex: 0,
        explanation:
          "Only **alkenes** (general formula {{C_nH_{2n}}}) decolourise orange bromine water. Check each formula: {{C_3H_6}} (Gas 2: {{2 * 3 = 6}}) and {{C_4H_8}} (Gas 4: {{2 * 4 = 8}}) are alkenes; {{C_2H_6}} and {{C_4H_{10}}} follow {{C_nH_{2n+2}}} so they are saturated alkanes.",
        hints: [
          "Check each formula against CₙH₂ₙ (alkene) vs CₙH₂ₙ₊₂ (alkane).",
          "Only unsaturated alkenes react with orange bromine water.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "When **methane ({{CH_4}})** undergoes incomplete combustion to form **carbon monoxide** and water, what is the balanced symbol equation?",
        options: [
          "CH₄ + 2O₂ → CO₂ + 2H₂O",
          "2CH₄ + 2O₂ → 2CO + 4H₂O",
          "CH₄ + O₂ → CO + 2H₂O",
          "2CH₄ + 3O₂ → 2CO + 4H₂O",
        ],
        answerIndex: 3,
        explanation:
          "Check atom counts in **{{2CH_4 + 3O_2 -> 2CO + 4H_2O}}**: C = 2 both sides ✓; H = 8 both sides ✓; O = {{3 * 2 = 6}} on left and {{2(1) + 4(1) = 6}} on right ✓! (Notice {{CH_4 + 2O_2 -> CO_2 + 2H_2O}} is complete combustion.)",
        hints: [
          "Incomplete combustion here must form CO (not CO₂) plus H₂O.",
          "Count total oxygen atoms on both sides of each remaining equation.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hydrocarbons-alkanes",
        question:
          "A student claims: 'Crude oil is a pure compound made of identical alkane molecules, which is why it burns at one exact temperature.' What is wrong with this claim?",
        options: [
          "Crude oil is actually an element rather than a compound",
          "Crude oil is a mixture of many hydrocarbons with different boiling points",
          "Crude oil contains only alkenes and zero saturated alkanes",
          "Crude oil is a renewable biofuel that boils sharply at 100 °C",
        ],
        answerIndex: 1,
        explanation:
          "Crude oil is a **finite mixture** of hundreds of different hydrocarbons with different chain lengths and different boiling points — which is precisely why it can be separated by **fractional distillation**!",
        hints: [
          "Can a single pure compound be separated into petrol, kerosene, diesel and bitumen by boiling?",
          "Recall whether crude oil is a pure compound, element, or mixture.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combustion-pollution",
        question:
          "Which statement accurately explains how **greenhouse gases** warm the Earth's atmosphere?",
        options: [
          "They block incoming short-wave sunlight from reaching Earth at all",
          "They react with rainwater to release exothermic acid heat into oceans",
          "They transmit short-wave sunlight in, then absorb outgoing infrared radiation",
          "They strip oxygen out of the upper atmosphere to create an ozone hole",
        ],
        answerIndex: 2,
        explanation:
          "Short-wavelength solar radiation passes easily through greenhouse gases ({{CO_2}}, {{CH_4}}, {{H_2O}}) to warm Earth's surface. Earth radiates longer-wavelength **infrared radiation** back upward, which greenhouse gas molecules **absorb and re-radiate**, warming the lower atmosphere.",
        hints: [
          "Distinguish between incoming short-wavelength sunlight and outgoing long-wavelength infrared heat.",
          "Greenhouse gases let sunlight IN, then trap outgoing heat.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cracking-alkenes",
        question:
          "In a school laboratory demonstration of cracking liquid paraffin using heated broken porcelain pot, why must you remove the delivery tube from the water trough **before** turning off the Bunsen burner?",
        options: [
          "To prevent cold water sucking back and cracking the hot glass tube",
          "To stop orange bromine water from boiling out of the porcelain pot",
          "To prevent ethene gas turning instantly into solid road bitumen",
          "To allow air nitrogen to enter and form solid ammonium nitrate",
        ],
        answerIndex: 0,
        explanation:
          "If the flame is removed first, gas inside the hot boiling tube cools and contracts rapidly, lowering pressure so cold trough water **sucks back** into the red-hot glass tube, shattering it!",
        hints: [
          "Think about what happens to gas pressure inside a hot tube when it suddenly cools down.",
          "What happens when cold water hits red-hot glass?",
        ],
      },
      {
        id: "oil-and-pollution-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fractional-distillation-oil",
        question:
          "A refinery processes 1,000 tonnes of crude oil. Fractional distillation yields 180 tonnes of petrol (demand: 350 tonnes) and 420 tonnes of heavy fuel oil (demand: 150 tonnes). How should the refinery close this mismatch?",
        options: [
          "Burn the extra 270 tonnes of fuel oil in open air to waste it",
          "Cool the fractionating column to 0 °C so petrol turns into fuel oil",
          "Distil the petrol fraction a second time to double its mass",
          "Crack surplus heavy fuel oil into shorter petrol chains and alkenes",
        ],
        answerIndex: 3,
        explanation:
          "There is a 270-tonne surplus of heavy fuel oil and a 170-tonne shortage of petrol. **Cracking** the surplus long-chain fuel oil converts low-demand long chains into high-demand shorter petrol alkanes plus valuable alkenes!",
        hints: [
          "Notice you have too much long-chain fuel oil and not enough short-chain petrol.",
          "Which industrial chemical process turns long chains into shorter chains?",
        ],
      },
      {
        id: "oil-and-pollution-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combustion-pollution",
        question:
          "In the balanced complete combustion equation for **butane ({{2C_4H_{10}}})**:\n{{2C_4H_{10} + xO_2 -> 8CO_2 + 10H_2O}}\nWhat is the value of {{x}}?",
        options: ["9", "13", "18", "26"],
        answerIndex: 1,
        explanation:
          "Count total oxygen atoms on the right side: {{8 * 2 = 16}} in {{8CO_2}} plus {{10 * 1 = 10}} in {{10H_2O}} = **26 oxygen atoms**. Since each {{O_2}} molecule has 2 oxygen atoms, {{x = 26 / 2 = 13}}.",
        hints: [
          "Count oxygen atoms in 8CO₂ and in 10H₂O separately, then add them.",
          "Divide the total number of O atoms by 2 to get the number of O₂ molecules.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combustion-pollution",
        question:
          "Why does a Bunsen burner flame turn from **clean blue** to **smoky yellow** when you close the collar air hole?",
        options: [
          "Less oxygen enters, causing incomplete combustion with glowing soot",
          "More oxygen enters, turning methane into pure sulfur dioxide gas",
          "Closing the collar freezes the methane into liquid propane droplets",
          "Nitrogen from the collar turns the flame yellow by forming acid rain",
        ],
        answerIndex: 0,
        explanation:
          "Closing the air hole restricts oxygen supply, switching methane from complete combustion (hot blue flame) to **incomplete combustion**, which produces tiny hot solid **carbon (soot) particles** that glow bright yellow and deposit black soot.",
        hints: [
          "What gas enters through the collar air hole of a Bunsen burner?",
          "What happens to hydrocarbon combustion when oxygen supply becomes limited?",
        ],
      },
      {
        id: "oil-and-pollution-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cracking-alkenes",
        question:
          "Hydrocarbon **Z** has the molecular formula **{{C_5H_{10}}}**. Which row correctly describes **Z**?",
        options: [
          "Alkane · saturated · bromine water stays orange",
          "Alkane · unsaturated · bromine water turns colourless",
          "Alkene · unsaturated · bromine water turns colourless",
          "Alkene · saturated · bromine water stays orange",
        ],
        answerIndex: 2,
        explanation:
          "Check {{C_5H_{10}}} against the general formulas: {{2(5) = 10}}, so it matches **{{C_nH_{2n}}}** → **pentene**, an **unsaturated alkene** with a {{C=C}} double bond that turns orange bromine water **colourless**.",
        hints: [
          "Compare the ratio of H to C in C₅H₁₀: is H equal to 2n or 2n + 2?",
          "Now match alkene to saturated/unsaturated and the bromine water observation.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fractional-distillation-oil",
        question:
          "Why is **bitumen** well suited to surfacing roads rather than powering passenger cars?",
        options: [
          "Bitumen is a light gas that ignites explosively at room temperature",
          "Bitumen has a very low boiling point and dissolves rapidly in rain",
          "Bitumen contains short C₂ chains that evaporate cleanly in engines",
          "Bitumen is thick, waterproof, sticky and has a very high boiling point",
        ],
        answerIndex: 3,
        explanation:
          "Bitumen contains very long hydrocarbon chains (>35 carbons), making it **extremely viscous (thick), waterproof, sticky**, and non-volatile with a boiling point over 350 °C — ideal for binding road gravel together, useless as a car fuel.",
        hints: [
          "Where is bitumen collected in the fractionating column (top or bottom)?",
          "Connect long chain length to viscosity, boiling point, and flammability.",
        ],
      },
      {
        id: "oil-and-pollution-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combustion-pollution",
        question:
          "Which action is the MOST effective way to cut **sulfur dioxide ({{SO_2}})** emissions from diesel lorries and cargo ships?",
        options: [
          "Open engine air intakes wider so more nitrogen enters",
          "Remove sulfur impurities from the fuel before burning (desulfurisation)",
          "Switch the diesel engine from complete to incomplete combustion",
          "Add extra long-chain bitumen directly into the fuel tank",
        ],
        answerIndex: 1,
        explanation:
          "Because {{SO_2}} comes directly from **sulfur impurities inside the fuel**, **desulfurising** diesel and marine fuel oil at the refinery prevents {{SO_2}} from ever forming during combustion (as enforced globally by IMO 2020 low-sulfur shipping rules).",
        hints: [
          "Recall the exact source of sulfur dioxide in fossil-fuel combustion.",
          "If there is no sulfur atom in the fuel, can SO₂ be created?",
        ],
      },
      {
        id: "oil-and-pollution-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hydrocarbons-alkanes",
        question:
          "Which alkane has a relative molecular mass of **58** (using {{A_r(C) = 12}}, {{A_r(H) = 1}})?",
        options: [
          "Methane (CH₄)",
          "Propane (C₃H₈)",
          "Butane (C₄H₁₀)",
          "Pentane (C₅H₁₂)",
        ],
        answerIndex: 2,
        explanation:
          "Compute each relative molecular mass: {{CH_4 = 12 + 4 = 16}}; {{C_3H_8 = 3(12) + 8 = 44}}; **{{C_4H_{10} = 4(12) + 10 = 48 + 10 = 58}}** ✓; {{C_5H_{12} = 5(12) + 12 = 72}}.",
        hints: [
          "For each formula CₙH₂ₙ₊₂, calculate 12 × n + (2n + 2) = 14n + 2.",
          "Solve 14n + 2 = 58 to find n.",
        ],
      },
    ],
  },
];
