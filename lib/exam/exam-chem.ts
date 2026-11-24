import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-chem",
  title: "Year 9 End-of-Year Chemistry Mock Paper",
  calculator: true,
  minutes: 45,
  questions: [
    // =========================================================================
    // THE PERIODIC TABLE & ATOMIC STRUCTURE (7 Questions)
    // =========================================================================
    {
      id: "exam-chem-q01",
      kind: "short",
      difficulty: "warmup",
      topicId: "periodic-table",
      guideRef: "atomic-structure-shells",
      question: "A neutral sodium atom has atomic number 11 and mass number 23. How many neutrons are inside its nucleus?",
      answer: { type: "number", value: 12, display: "12" },
      traps: [
        { spec: { type: "number", value: 11 }, feedback: "11 is the number of protons (and electrons). Subtract atomic number from mass number to find neutrons." },
        { spec: { type: "number", value: 23 }, feedback: "23 is the total of protons PLUS neutrons—subtract the 11 protons." },
        { spec: { type: "number", value: 34 }, feedback: "Subtract atomic number from mass number rather than adding them." },
      ],
      hints: [
        "Mass number equals the total count of protons plus neutrons in the nucleus.",
        "Subtract the atomic (proton) number from the mass number.",
      ],
      solution: [
        "Atomic number = 11 protons; mass number = 23 protons + neutrons.",
        "Neutrons = {{23 - 11 = 12}}.",
      ],
    },
    {
      id: "exam-chem-q02",
      kind: "short",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "atomic-structure-shells",
      question: "Write the electronic configuration of a neutral chlorine atom (atomic number 17), separating shell counts with commas (for example, x,y,z).",
      answer: {
        type: "text",
        accept: ["2,8,7", "2, 8, 7", "2.8.7", "2 8 7"],
        display: "2, 8, 7",
      },
      traps: [
        { spec: { type: "text", accept: ["2,8,8", "2, 8, 8"] }, feedback: "2,8,8 has 18 electrons (a chloride ion or argon atom)—neutral chlorine has 17 electrons." },
        { spec: { type: "text", accept: ["2,7,8", "2, 7, 8"] }, feedback: "Fill the second shell completely to 8 electrons before placing electrons in the third shell." },
      ],
      hints: [
        "A neutral atom with atomic number 17 has 17 electrons to arrange in shells.",
        "Shell capacities from innermost outward are 2, then 8, then up to 8 in the third shell.",
      ],
      solution: [
        "Place 2 electrons in shell 1 (15 remaining).",
        "Place 8 electrons in shell 2 (7 remaining).",
        "Place the remaining 7 electrons in shell 3 → **2, 8, 7** (Period 3, Group 7).",
      ],
    },
    {
      id: "exam-chem-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "mendeleev-layout",
      question: "Why did Dmitri Mendeleev leave empty gaps inside his 1869 Periodic Table?",
      options: [
        "To keep chemically similar elements in the same group and predict undiscovered elements",
        "Because he ran out of printing type for the heaviest transition metals in Russia",
        "To separate solid metals on the left from radioactive gases on the far right",
        "Because he discovered that noble gases reacted explosively with alkali metals",
      ],
      answerIndex: 0,
      hints: [
        "What mattered more to Mendeleev: forcing every box to be filled, or keeping chemical families aligned?",
        "Think about gallium and germanium, which were discovered years after 1869 matching his predictions.",
      ],
      explanation:
        "Mendeleev left gaps whenever the next known element did not match the group's properties, boldly predicting undiscovered elements (such as gallium and germanium) and their exact properties.",
    },
    {
      id: "exam-chem-q04",
      kind: "mcq",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "group1-alkali-metals",
      question: "A small piece of potassium reacts vigorously with cold water, melting into a ball and burning with a lilac flame. Which two chemical products are formed?",
      options: [
        "Potassium oxide and oxygen gas",
        "Potassium chloride and steam vapour",
        "Potassium hydroxide and hydrogen gas",
        "Potassium hydride and carbon dioxide",
      ],
      answerIndex: 2,
      hints: [
        "Recall the general word equation: alkali metal + water → metal hydroxide + hydrogen.",
        "Remember the solution turns universal indicator purple because it is strongly alkaline.",
      ],
      explanation:
        "Group 1 metals react with water according to: metal + water → metal hydroxide + hydrogen. Potassium forms alkaline potassium hydroxide solution and flammable hydrogen gas.",
    },
    {
      id: "exam-chem-q05",
      kind: "written",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "group1-alkali-metals",
      marks: 3,
      question: "Explain, in terms of electronic structure and electrostatic forces, why potassium is far more reactive than lithium.",
      hints: [
        "Compare the number of electron shells and the distance of the outer electron from the nucleus in potassium vs lithium.",
        "How does greater distance (and extra inner-shell shielding) affect the nucleus's pull on the outer electron?",
        "Connect that attraction to how easily a Group 1 atom forms a +1 ion.",
      ],
      modelAnswer:
        "Potassium has more electron shells than lithium, so it is a larger atom and its single outer electron is much further from the positive nucleus (with greater shielding from inner shells). As a result, the electrostatic attraction between the nucleus and the outer electron is weaker. Therefore, potassium loses its outer electron much more easily during reactions.",
      markScheme: [
        { point: "States potassium has more shells / is a larger atom so its outer electron is further from the nucleus.", keywords: ["more shells", "larger atom", "further from the nucleus", "farther from the nucleus", "distance"] },
        { point: "States there is weaker attraction between the nucleus and outer electron (and/or greater shielding).", keywords: ["weaker attraction", "less attraction", "shielding", "weakly held", "less pull"] },
        { point: "Concludes the outer electron is lost more easily.", keywords: ["lost more easily", "lose its outer electron", "easier to lose", "loses its outer electron", "loses an electron"] },
      ],
    },
    {
      id: "exam-chem-q06",
      kind: "mcq",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "group7-group0",
      question: "Pale green chlorine water is shaken with colourless potassium bromide solution. What observation occurs and why?",
      options: [
        "No visible colour change occurs because bromine is more reactive than chlorine",
        "The solution turns orange-brown because more reactive chlorine displaces bromine",
        "A bright purple solid sinks immediately because chlorine forms solid iodine",
        "Vigorous fizzing occurs as chlorine releases pure potassium metal bubbles",
      ],
      answerIndex: 1,
      hints: [
        "In Group 7 halogens, does reactivity increase or decrease going down the group (F → Cl → Br → I)?",
        "A more reactive halogen displaces a less reactive halide ion from aqueous solution—what colour is aqueous bromine?",
      ],
      explanation:
        "Halogen reactivity decreases down Group 7, so chlorine is more reactive than bromine. Chlorine displaces bromine from potassium bromide, turning the solution orange-brown.",
    },
    {
      id: "exam-chem-q07",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "periodic-table",
      guideRef: "group7-group0",
      question: "Why are Group 0 noble gases such as helium, neon, and argon chemically unreactive?",
      options: [
        "They contain zero protons inside their atomic nuclei",
        "They exist only as giant metallic crystal lattices at room temperature",
        "Their outer electron shells contain exactly seven unpaired electrons",
        "Their atoms already possess stable full outer shells of electrons",
      ],
      answerIndex: 3,
      hints: [
        "Look at the electronic configurations of helium (2), neon (2,8), and argon (2,8,8).",
        "Chemical reactions occur when atoms gain, lose, or share electrons to achieve a full outer shell.",
      ],
      explanation:
        "Noble gas atoms already have complete, stable outer electron shells (2 for He; 8 for Ne, Ar, etc.), so they have no tendency to lose, gain, or share electrons.",
    },

    // =========================================================================
    // MAKING SALTS & PURIFYING SUBSTANCES (7 Questions)
    // =========================================================================
    {
      id: "exam-chem-q08",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "making-and-purifying",
      guideRef: "making-soluble-salts",
      question: "Which soluble salt is produced when insoluble copper(II) oxide reacts completely with dilute sulfuric acid?",
      options: [
        "Copper(II) sulfate",
        "Copper(II) chloride",
        "Copper(II) nitrate",
        "Copper(II) carbonate",
      ],
      answerIndex: 0,
      hints: [
        "The second part of a salt's name always comes from the acid used.",
        "Hydrochloric acid makes chlorides, nitric acid makes nitrates—what salt does sulfuric acid make?",
      ],
      explanation:
        "Sulfuric acid always forms sulfate salts: copper(II) oxide + sulfuric acid → copper(II) sulfate + water.",
    },
    {
      id: "exam-chem-q09",
      kind: "written",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "making-soluble-salts",
      marks: 3,
      question: "To prepare pure dry copper(II) sulfate crystals, a pupil warms dilute sulfuric acid and stirs in excess black copper(II) oxide powder. Explain why excess solid is used, how unreacted solid is separated, and how dry crystals are then obtained from the blue solution.",
      hints: [
        "Why add MORE copper(II) oxide than needed instead of leaving unreacted acid behind?",
        "Name the separation technique that removes an insoluble solid from a liquid.",
        "Describe gentle evaporation to crystallisation point, cooling, and drying.",
      ],
      modelAnswer:
        "Adding excess copper(II) oxide ensures that all of the sulfuric acid has completely neutralised so no acid contaminates the salt. Next, filter the mixture through filter paper in a funnel to remove the unreacted insoluble oxide, collecting the blue filtrate. Finally, gently heat the solution in an evaporating basin until half the water evaporates (crystallisation point), leave it to cool so crystals form, and pat the crystals dry between filter paper.",
      markScheme: [
        { point: "Explains excess base ensures all the acid reacts / is completely neutralised.", keywords: ["all the acid", "all of the", "neutralis", "completely react", "reacts completely"] },
        { point: "Uses filtration (filter paper and funnel) to remove unreacted excess insoluble oxide.", keywords: ["filter", "filtration", "filtrate"] },
        { point: "Gently evaporates part of the water to crystallisation point, cools to form crystals, and pats dry.", keywords: ["evaporat", "crystallis", "cool", "pat dry", "warm oven"] },
      ],
    },
    {
      id: "exam-chem-q10",
      kind: "mcq",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "purity-formulations",
      question: "Pure aspirin has a sharp melting point of exactly 136 °C. A laboratory sample starts melting at 128 °C and finishes melting at 134 °C. What does this evidence show?",
      options: [
        "The sample is completely pure because all solids melt over a wide temperature range",
        "The sample is pure aspirin heated too quickly inside a glass melting-point tube",
        "The sample is impure because impurities lower the melting point and widen the melting range",
        "The sample must be a pure metallic element because its melting range lies below 136 °C",
      ],
      answerIndex: 2,
      hints: [
        "How does a pure substance melt compared with an impure mixture?",
        "Notice TWO clues: the melting temperature dropped below 136 °C AND spread over a 6 °C range.",
      ],
      explanation:
        "A pure substance melts at a single sharp, fixed temperature. Impurities disrupt regular particle packing, lowering the melting point and broadening it into a range.",
    },
    {
      id: "exam-chem-q11",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "making-and-purifying",
      guideRef: "purity-formulations",
      question: "Which of the following is a scientific example of a formulation?",
      options: [
        "Pure distilled water boiled at 100 °C",
        "A painkiller tablet containing exact measured proportions of active drug and binder",
        "A cylinder filled exclusively with pure oxygen gas",
        "A single crystal made entirely of pure solid sodium chloride",
      ],
      answerIndex: 1,
      hints: [
        "A formulation is a useful mixture carefully designed to a precise recipe.",
        "Distinguish single pure elements/compounds from engineered mixtures like medicines, paints, and fuels.",
      ],
      explanation:
        "A formulation is a mixture designed as a useful product where every component is added in carefully measured quantities for a specific function—such as medicines, paints, alloys, and fuels.",
    },
    {
      id: "exam-chem-q12",
      kind: "short",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "distillation-chromatography",
      question: "In a paper chromatography test, the solvent front rises 8.0 cm above the pencil baseline while a blue ink spot rises 5.2 cm above the baseline. Calculate the Rf value of the blue ink (as a decimal).",
      answer: { type: "number", value: 0.65, allowFraction: false, display: "0.65" },
      traps: [
        { spec: { type: "number", value: 1.54, tolerance: 0.02 }, feedback: "Rf values are ALWAYS between 0 and 1—divide spot distance by solvent distance, not the other way round!" },
      ],
      hints: [
        "Recall the formula: {{R_f = \"distance moved by spot\" / \"distance moved by solvent\"}}.",
        "Divide 5.2 cm by 8.0 cm and check that your answer lies between 0 and 1.",
      ],
      solution: [
        "Apply {{R_f = \"distance of spot\" / \"distance of solvent\"}}.",
        "{{R_f = 5.2 / 8.0 = 0.65}} (no units, because cm ÷ cm cancels).",
      ],
    },
    {
      id: "exam-chem-q13",
      kind: "mcq",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "distillation-chromatography",
      question: "When setting up paper chromatography, why must the starting baseline be drawn in pencil and kept ABOVE the solvent surface?",
      options: [
        "Pencil carbon attracts ink spots downward while deep solvent accelerates evaporation",
        "Pencil dissolves rapidly to mark the solvent front while submersion cleans the paper",
        "Pen ink evaporates in air whereas pencil lines waterproof the lower paper edge",
        "Pencil graphite is insoluble so it does not run, and keeping spots above solvent stops them washing away",
      ],
      answerIndex: 3,
      hints: [
        "What would happen to a baseline drawn in fountain-pen ink when solvent moves up the paper?",
        "What would happen to the dye spots if they were submerged directly under the liquid in the beaker?",
      ],
      explanation:
        "Graphite pencil is insoluble in the solvent so it stays put and will not contaminate the chromatogram. Keeping the solvent below the baseline prevents the sample spots dissolving straight into the beaker.",
    },
    {
      id: "exam-chem-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "chemical-gas-tests",
      question: "A gas produced during electrolysis turns damp blue litmus paper red and then bleaches it completely white. Which gas is present?",
      options: [
        "Chlorine gas",
        "Hydrogen gas",
        "Oxygen gas",
        "Carbon dioxide gas",
      ],
      answerIndex: 0,
      hints: [
        "Recall the four standard laboratory gas tests.",
        "Hydrogen gives a squeaky pop, oxygen relights a glowing splint, CO₂ turns limewater cloudy—which gas bleaches damp litmus?",
      ],
      explanation:
        "Chlorine dissolves slightly in water on the damp paper to form an acidic bleaching solution, turning blue litmus red and then bleaching it white.",
    },

    // =========================================================================
    // CRUDE OIL, FUELS & ATMOSPHERIC POLLUTION (7 Questions)
    // =========================================================================
    {
      id: "exam-chem-q15",
      kind: "short",
      difficulty: "warmup",
      topicId: "oil-and-pollution",
      guideRef: "hydrocarbons-alkanes",
      question: "Alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂. How many hydrogen atoms are present in one molecule of octane, which has 8 carbon atoms?",
      answer: { type: "number", value: 18, display: "18" },
      traps: [
        { spec: { type: "number", value: 16 }, feedback: "16 hydrogen atoms would be octene (an alkene, CₙH₂ₙ). Remember to add 2 for an alkane!" },
        { spec: { type: "number", value: 10 }, feedback: "Multiply n = 8 by 2 first, then add 2: (2 × 8) + 2." },
      ],
      hints: [
        "Substitute n = 8 into the hydrogen count expression 2n + 2.",
        "Calculate (2 × 8) + 2.",
      ],
      solution: [
        "For an alkane with n = 8 carbons, hydrogen atoms = {{2n + 2}}.",
        "{{2 * 8 + 2 = 18}} hydrogen atoms (formula C₈H₁₈).",
      ],
    },
    {
      id: "exam-chem-q16",
      kind: "mcq",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "hydrocarbons-alkanes",
      question: "Compared with short-chain hydrocarbons like propane, how do long-chain hydrocarbons like fuel oil and bitumen behave?",
      options: [
        "Lower boiling point, lower viscosity, and far easier to ignite",
        "Higher boiling point, higher viscosity (thicker), and harder to ignite",
        "Higher boiling point, lower viscosity (runnier), and far easier to ignite",
        "Lower boiling point, higher viscosity (thicker), and completely non-combustible",
      ],
      answerIndex: 1,
      hints: [
        "Think about thick, sticky black bitumen used to surface roads versus runny, explosive petrol or camping gas.",
        "Longer molecules have stronger intermolecular forces between chains, taking more energy to boil and sliding past each other slowly.",
      ],
      explanation:
        "Long-chain hydrocarbons have stronger intermolecular attractions between molecules, resulting in higher boiling points, higher viscosity (thick and treacly), and lower flammability.",
    },
    {
      id: "exam-chem-q17",
      kind: "mcq",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "fractional-distillation-oil",
      question: "Inside a crude-oil fractionating column (hot at the bottom, cool at the top), where do the shortest-chain fractions such as refinery gases and petrol condense and exit?",
      options: [
        "At the very hot bottom because short molecules have the highest boiling points",
        "Halfway down the middle because all hydrocarbons share the exact same boiling point",
        "Near the cool top because short molecules have the lowest boiling points",
        "Nowhere inside the tower because short chains stay solid at room temperature",
      ],
      answerIndex: 2,
      hints: [
        "Remember the column has a temperature gradient: hottest at the base, coolest at the top.",
        "Vapours keep rising until they reach a zone cool enough to condense below their boiling point.",
      ],
      explanation:
        "Short-chain hydrocarbons have the lowest boiling points, so they remain gases all the way up the column and condense or exit near the coolest region at the top.",
    },
    {
      id: "exam-chem-q18",
      kind: "short",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "cracking-alkenes",
      question: "During catalytic cracking, one molecule of tetradecane (C₁₄H₃₀) splits into one molecule of decane (C₁₀H₂₂) and one alkene molecule C₄Hᵧ. How many hydrogen atoms (y) are in the alkene molecule?",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        { spec: { type: "number", value: 10 }, feedback: "Count total hydrogen atoms on both sides: 30 on the left minus 22 in decane leaves 8 (an alkene CₙH₂ₙ, not an alkane!)." },
      ],
      hints: [
        "Atoms are always conserved during cracking: total H atoms before = total H atoms after.",
        "Subtract 22 from 30 (and double-check against the alkene formula CₙH₂ₙ for n = 4!).",
      ],
      solution: [
        "Check carbons: {{10 + 4 = 14}} (balanced).",
        "Balance hydrogens: {{y = 30 - 22 = 8}} (giving butene, C₄H₈).",
      ],
    },
    {
      id: "exam-chem-q19",
      kind: "mcq",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "cracking-alkenes",
      question: "Which chemical test cleanly distinguishes an unsaturated alkene (such as hexene) from a saturated alkane (such as hexane)?",
      options: [
        "Add universal indicator: the alkene turns deep purple while the alkane turns bright red",
        "Hold a glowing wooden splint over each liquid: only the alkene relights the splint immediately",
        "Bubble each through limewater: the alkene turns limewater milky while the alkane stays clear",
        "Shake each with orange bromine water: the alkene turns it colourless while the alkane leaves it orange",
      ],
      answerIndex: 3,
      hints: [
        "Alkenes contain a reactive C=C double bond that undergoes an addition reaction with a halogen solution.",
        "Recall the colour change of bromine water when an unsaturated hydrocarbon is added.",
      ],
      explanation:
        "Alkenes have a C=C double bond that reacts rapidly with bromine water, turning it from orange to colourless. Saturated alkanes have only C–C single bonds and leave bromine water orange.",
    },
    {
      id: "exam-chem-q20",
      kind: "written",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "combustion-pollution",
      marks: 3,
      question: "Explain why running a gas heater inside a sealed, poorly ventilated bedroom can be fatal, naming the combustion process, the toxic gas formed, and how it harms the body.",
      hints: [
        "What type of combustion occurs when oxygen supply is limited?",
        "Name the colourless, odourless toxic gas formed instead of carbon dioxide.",
        "Explain what that gas binds to inside red blood cells.",
      ],
      modelAnswer:
        "With a limited supply of oxygen, the fuel undergoes incomplete combustion. This produces carbon monoxide (CO), a colourless and odourless toxic gas. When inhaled, carbon monoxide binds strongly to haemoglobin in red blood cells, preventing them from carrying enough oxygen around the body, which can cause unconsciousness or death.",
      markScheme: [
        { point: "Names incomplete combustion (due to limited oxygen).", keywords: ["incomplete combustion", "incomplete"] },
        { point: "Names carbon monoxide (or CO).", keywords: ["carbon monoxide", "co"] },
        { point: "Explains it binds to haemoglobin / red blood cells and reduces oxygen transport around the body.", keywords: ["haemoglobin", "hemoglobin", "red blood", "oxygen"] },
      ],
    },
    {
      id: "exam-chem-q21",
      kind: "mcq",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "combustion-pollution",
      question: "Which pollutant gas, formed when sulfur impurities inside coal or diesel burn in air, dissolves in rainwater to produce acid rain?",
      options: [
        "Sulfur dioxide (SO₂)",
        "Methane gas (CH₄)",
        "Water vapour (H₂O)",
        "Pure nitrogen (N₂)",
      ],
      answerIndex: 0,
      hints: [
        "When sulfur burns in oxygen, what acidic non-metal oxide is formed?",
        "Acid rain damages limestone buildings, acidifies lakes, and harms forest trees.",
      ],
      explanation:
        "Burning sulfur impurities produces sulfur dioxide (SO₂), which dissolves in atmospheric water droplets to form acidic rain (alongside nitrogen oxides from hot car engines).",
    },

    // =========================================================================
    // WORKING SCIENTIFICALLY IN CHEMISTRY (4 Questions)
    // =========================================================================
    {
      id: "exam-chem-q22",
      kind: "short",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "diagrams-tables-calculations",
      question: "A pupil measures the temperature rise when magnesium reacts with dilute acid across four trials: 14.2 °C, 14.5 °C, 9.1 °C, and 14.2 °C. Excluding the anomalous reading, calculate the mean temperature rise (in °C).",
      answer: { type: "number", value: 14.3, display: "14.3 °C" },
      traps: [
        { spec: { type: "number", value: 13 }, feedback: "13.0 °C includes the anomalous reading 9.1 °C—discard 9.1 °C and average the remaining three readings!" },
      ],
      hints: [
        "Spot the anomalous measurement that sits far below the three closely grouped trials.",
        "Add only the three consistent trials and divide by 3.",
      ],
      solution: [
        "Exclude the anomaly: 9.1 °C.",
        "Mean of remaining three trials: {{(14.2 + 14.5 + 14.2) / 3 = 42.9 / 3 = 14.3}} °C.",
      ],
    },
    {
      id: "exam-chem-q23",
      kind: "short",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "graphing-conclusions",
      question: "Marble chips react with dilute hydrochloric acid in a conical flask on an electronic balance as carbon dioxide escapes. At 0 s the mass is 185.40 g, and at 40 s the mass has dropped to 183.80 g. Calculate the mean rate of mass loss over the 40 s (in g/s).",
      answer: { type: "number", value: 0.04, display: "0.04 g/s" },
      traps: [
        { spec: { type: "number", value: 1.6 }, feedback: "1.60 g is the TOTAL mass lost—now divide by 40 s to get the rate in g/s!" },
        { spec: { type: "number", value: 25 }, feedback: "Divide mass lost by time taken (1.60 ÷ 40), not time divided by mass." },
      ],
      hints: [
        "First find the total mass lost by subtracting 183.80 g from 185.40 g.",
        "Divide the total mass lost by the time elapsed (40 s).",
      ],
      solution: [
        "Total mass lost: {{185.40 - 183.80 = 1.60}} g.",
        "Mean rate of mass loss: {{1.60 / 40 = 0.04}} g/s.",
      ],
    },
    {
      id: "exam-chem-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "variables-fair-testing",
      marks: 3,
      question: "A pupil plans an investigation to test how changing the concentration of hydrochloric acid affects the time taken for a strip of magnesium ribbon to completely react. State the independent variable, the dependent variable, and TWO distinct control variables required for a fair test.",
      hints: [
        "Identify what is deliberately varied (IV) and what is measured with a stopwatch (DV).",
        "Give one control variable about the acid (such as volume or temperature) and a second distinct control variable about the magnesium (such as length, mass, or surface area).",
      ],
      modelAnswer:
        "The independent variable is the concentration of hydrochloric acid, and the dependent variable is the time taken for the magnesium ribbon to completely dissolve. Two control variables are keeping the volume (and starting temperature) of acid constant in every trial, and using the same length/mass of magnesium ribbon every time.",
      markScheme: [
        { point: "Correctly identifies IV = concentration of acid AND DV = time taken for magnesium to react.", keywords: ["independent", "dependent"] },
        { point: "Gives a valid control variable about the acid: volume of acid OR temperature of acid.", keywords: ["volume", "temperature"] },
        { point: "Gives a distinct control variable about the magnesium: same length, mass, or surface area (or same stirring).", keywords: ["length", "mass", "surface area", "size", "stir"] },
      ],
    },
    {
      id: "exam-chem-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "evaluating-techniques",
      marks: 3,
      question: "A pupil weighs dried salt crystals directly on an electronic top-pan balance that already displays +0.3 g when the pan is completely empty. Name this specific type of experimental error, explain how it affects the accuracy of the measurement, and state how to fix or prevent it.",
      hints: [
        "What do scientists call a consistent offset when an instrument does not read zero with nothing on it?",
        "Does it shift readings randomly up and down, or consistently too high away from the true value?",
        "Name the button on a digital balance (or arithmetic step) that eliminates this offset.",
      ],
      modelAnswer:
        "This is a zero error (a type of systematic error). It shifts every recorded mass consistently 0.3 g higher than the true value, which reduces the accuracy of the measurement. The pupil should press the tare/zero button before weighing (or subtract 0.3 g from every recorded mass).",
      markScheme: [
        { point: "Names zero error or systematic error.", keywords: ["zero error", "systematic"] },
        { point: "Explains every reading is consistently too high / shifted from the true value, reducing accuracy.", keywords: ["too high", "higher", "true value", "reduces accuracy", "less accurate", "lower accuracy"] },
        { point: "States to press the tare/zero button before weighing OR subtract 0.3 g from each reading.", keywords: ["tare", "zero button", "reset to zero", "subtract 0.3", "minus 0.3"] },
      ],
    },
  ],
};
