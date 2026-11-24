import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "oil-and-pollution-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "hydrocarbons-alkanes",
      question:
        "Using the alkane general formula {{C_nH_{2n+2}}}, how many **hydrogen atoms** are in one molecule of **butane** (which has 4 carbon atoms)?",
      answer: { type: "number", value: 10, display: "10" },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback:
            "8 hydrogens gives C₄H₈ (butene, an alkene). For an alkane, use 2n + 2!",
        },
      ],
      solution: [
        "Substitute {{n = 4}} into {{2n + 2}}.",
        "{{2(4) + 2 = 8 + 2 = 10}} hydrogen atoms (formula {{C_4H_{10}}}).",
      ],
      hints: [
        "Substitute n = 4 into 2n + 2.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "fractional-distillation-oil",
      question:
        "Which crude oil fraction is collected at the very **bottom** of a fractionating column and used to surface roads?",
      options: [
        "Refinery gases",
        "Petrol",
        "Kerosene",
        "Bitumen",
      ],
      answerIndex: 3,
      explanation:
        "**Bitumen** contains the longest hydrocarbon chains (>35 carbons) with boiling points over 350 °C, so it remains a thick black sticky residue at the very bottom of the column.",
      hints: [
        "Think about the thick, black, sticky tar used on road surfaces.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "cracking-alkenes",
      question:
        "In the cracking equation {{C_{12}H_{26} -> C_9H_{20} + C_xH_6}}, find the value of {{x}}.",
      answer: { type: "number", value: 3, display: "3" },
      solution: [
        "Conserve carbon atoms across the arrow: total C on left = 12.",
        "{{9 + x = 12}} → {{x = 12 - 9 = 3}} (propene, {{C_3H_6}}).",
        "Check hydrogen atoms: {{20 + 6 = 26}} ✓.",
      ],
      hints: [
        "Atoms are neither created nor destroyed during cracking.",
        "Subtract 9 carbon atoms from 12 carbon atoms.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "cracking-alkenes",
      question:
        "Name the orange aqueous reagent used to test for an unsaturated alkene (which turns colourless if a C=C bond is present).",
      answer: {
        type: "text",
        accept: ["bromine water", "orange bromine water", "aqueous bromine"],
        display: "bromine water",
      },
      solution: [
        "**Bromine water** starts orange and rapidly turns **colourless** when shaken with an unsaturated alkene.",
      ],
      hints: [
        "It is an orange aqueous solution of a Group 7 halogen.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "combustion-pollution",
      question:
        "Which pollutant gas is formed during **incomplete combustion** and binds to haemoglobin in red blood cells?",
      options: [
        "Carbon monoxide (CO)",
        "Sulfur dioxide (SO₂)",
        "Carbon dioxide (CO₂)",
        "Nitrogen gas (N₂)",
      ],
      answerIndex: 0,
      explanation:
        "**Carbon monoxide (CO)** forms when carbon fuels burn in limited oxygen. It binds irreversibly to haemoglobin, blocking oxygen transport around the body.",
      hints: [
        "Compare complete combustion (CO₂) with incomplete combustion (limited O₂).",
        "Which colourless, odourless gas stops red blood cells carrying oxygen?",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "hydrocarbons-alkanes",
      question:
        "Name the alkane with molecular formula {{C_2H_6}}.",
      answer: {
        type: "text",
        accept: ["ethane"],
        display: "ethane",
      },
      traps: [
        {
          spec: { type: "text", accept: ["methane"] },
          feedback:
            "Methane has only 1 carbon (CH₄); 2 carbons uses the prefix 'eth-' (**ethane**)!",
        },
        {
          spec: { type: "text", accept: ["propane"] },
          feedback:
            "Propane has 3 carbons (C₃H₈); 2 carbons gives **ethane**!",
        },
      ],
      solution: [
        "2 carbon atoms → prefix **eth-** (Monkeys **Eat** Peeled Bananas).",
        "6 hydrogens = {{2(2) + 2}} → alkane ending **-ane** → **ethane**.",
      ],
      hints: [
        "Use 'Monkeys Eat Peeled Bananas' for 1, 2, 3, 4 carbons.",
        "Check whether 6 hydrogens fits an alkane (-ane) or an alkene (-ene).",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "combustion-pollution",
      question:
        "Which pair of pollutant gases dissolves in rainwater to produce **acid rain**?",
      options: [
        "Methane and carbon dioxide",
        "Sulfur dioxide and nitrogen oxides",
        "Carbon monoxide and water vapour",
        "Oxygen gas and hydrogen gas",
      ],
      answerIndex: 1,
      explanation:
        "**Sulfur dioxide ({{SO_2}})** from sulfur fuel impurities and **nitrogen oxides ({{NO_x}})** from hot car engines dissolve in cloud droplets to form sulfuric and nitric acids (**acid rain**).",
      hints: [
        "Do NOT confuse greenhouse gases (CO₂, CH₄) with acid-rain gases.",
        "Identify the two non-metal oxides that make rainwater strongly acidic.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "fractional-distillation-oil",
      question:
        "Moving from the **top** to the **bottom** of a crude oil fractionating column, how do viscosity and flammability change?",
      options: [
        "Viscosity decreases and flammability increases",
        "Viscosity decreases and flammability decreases",
        "Viscosity increases and flammability decreases",
        "Viscosity increases and flammability increases",
      ],
      answerIndex: 2,
      explanation:
        "Going down the column means **longer hydrocarbon chains**: they tangle more (higher **viscosity** / thicker) and evaporate less readily (lower **flammability** / harder to ignite).",
      hints: [
        "Compare refinery gas/petrol at the top with thick bitumen at the bottom.",
        "Which is runnier and catches fire far more easily?",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "hydrocarbons-alkanes",
      marks: 2,
      question:
        "Explain why long-chain alkanes such as bitumen have much higher boiling points than short-chain alkanes such as methane.",
      modelAnswer:
        "Larger molecules have much stronger intermolecular forces between neighbouring molecules. Therefore, far more thermal energy is needed to overcome these attractive forces and separate the molecules into a gas.",
      markScheme: [
        {
          point:
            "Larger molecules have stronger intermolecular forces between molecules",
          keywords: [
            "intermolecular",
            "forces between",
            "attractions between",
          ],
        },
        {
          point: "More thermal energy is required to overcome those forces",
          keywords: ["energy", "overcome", "break the forces"],
        },
      ],
      hints: [
        "Remember: covalent bonds inside molecules do NOT break during boiling!",
        "Mention forces BETWEEN neighbouring molecules and the energy needed to overcome them.",
      ],
    },
    {
      id: "oil-and-pollution-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "cracking-alkenes",
      marks: 2,
      question:
        "Describe how a chemist tests a colourless gas to show it is an unsaturated alkene rather than a saturated alkane.",
      modelAnswer:
        "Bubble or shake the gas with orange bromine water. An unsaturated molecule rapidly decolourises the solution (it loses its orange colour completely), whereas a saturated molecule causes no change and the liquid stays orange.",
      markScheme: [
        {
          point: "Shake/bubble with orange bromine water",
          keywords: ["bromine", "orange"],
        },
        {
          point:
            "Decolourises with alkene (loses orange colour) while alkane leaves it unchanged / stays orange",
          keywords: [
            "decolouris",
            "decoloris",
            "loses its orange",
            "stays orange",
            "no change",
          ],
        },
      ],
      hints: [
        "Name the exact orange aqueous reagent used to spot a C=C double bond.",
        "State what happens with an alkene AND what happens with an alkane (remember: never write 'clear'!).",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER P1 — Core Formulas, Distillation, Cracking & Combustion
    // -----------------------------------------------------------------------
    {
      id: "oil-and-pollution-p1",
      title: "Practice Paper 1: Alkanes, Fractions & Cracking",
      questions: [
        {
          id: "oil-and-pollution-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "hydrocarbons-alkanes",
          question:
            "How many **hydrogen atoms** are present in one molecule of the alkane **heptane** (7 carbon atoms)?",
          answer: { type: "number", value: 16, display: "16" },
          traps: [
            {
              spec: { type: "number", value: 14 },
              feedback:
                "14 hydrogens corresponds to heptene (C₇H₁₄, an alkene). For an alkane use 2n + 2!",
            },
          ],
          solution: [
            "Alkane general formula: {{C_nH_{2n+2}}}.",
            "Substitute {{n = 7}}: {{2(7) + 2 = 14 + 2 = 16}} hydrogen atoms ({{C_7H_{16}}}).",
          ],
          hints: [
            "Use the alkane general formula CₙH₂ₙ₊₂ with n = 7.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "hydrocarbons-alkanes",
          question:
            "Name the alkane with 4 carbon atoms and molecular formula {{C_4H_{10}}}.",
          answer: {
            type: "text",
            accept: ["butane"],
            display: "butane",
          },
          solution: [
            "First four alkanes: Methane (1), Ethane (2), Propane (3), **Butane (4)**.",
          ],
          hints: [
            "Use the mnemonic: Monkeys Eat Peeled Bananas.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "hydrocarbons-alkanes",
          question:
            "An alkane molecule contains **20 hydrogen atoms**. How many **carbon atoms** are in this molecule?",
          answer: { type: "number", value: 9, display: "9" },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback:
                "If n = 10, an alkane would have 2(10) + 2 = 22 hydrogens! Subtract 2 before dividing by 2.",
            },
          ],
          solution: [
            "Set {{2n + 2 = 20}}.",
            "Subtract 2: {{2n = 18}}.",
            "Divide by 2: {{n = 9}} carbon atoms (nonane, {{C_9H_{20}}}).",
          ],
          hints: [
            "Set 2n + 2 = 20 and solve for n.",
            "Remember to subtract 2 first, then divide by 2.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "fractional-distillation-oil",
          question:
            "Which crude oil fraction condenses between kerosene and heavy fuel oil and powers lorries, buses, and trains?",
          answer: {
            type: "text",
            accept: ["diesel", "diesel oil"],
            display: "diesel oil",
          },
          solution: [
            "Top-to-bottom order: Refinery gases → Petrol → Kerosene → **Diesel oil** → Heavy fuel oil → Bitumen.",
          ],
          hints: [
            "Think of the heavy road/rail transport fuel right below kerosene.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "When tetradecane ({{C_{14}H_{30}}}) is cracked to produce **decane ({{C_{10}H_{22}}})** and one alkene molecule, how many **hydrogen atoms** are in that alkene molecule?",
          answer: { type: "number", value: 8, display: "8" },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback:
                "4 is the number of CARBON atoms (14 − 10 = 4) — the question asks for HYDROGEN atoms!",
            },
          ],
          solution: [
            "Conserve hydrogen atoms: {{30 - 22 = 8}} hydrogen atoms.",
            "(Carbon atoms: {{14 - 10 = 4}} → butene, {{C_4H_8}}, matching {{C_nH_{2n}}} ✓.)",
          ],
          hints: [
            "Total hydrogen atoms before cracking must equal total hydrogen atoms after cracking.",
            "Subtract 22 from 30.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "Name the smallest alkene, whose molecular formula is {{C_2H_4}}.",
          answer: {
            type: "text",
            accept: ["ethene", "ethylene"],
            display: "ethene",
          },
          traps: [
            {
              spec: { type: "text", accept: ["methene"] },
              feedback:
                "There is no 'methene' — a C=C double bond requires at least 2 carbons, so the smallest alkene is **ethene**!",
            },
            {
              spec: { type: "text", accept: ["propene"] },
              feedback:
                "Propene has 3 carbons (C₃H₆); 2 carbons gives **ethene**!",
            },
          ],
          solution: [
            "2 carbons = **eth-**; alkene with C=C double bond = **-ene** → **ethene** ({{C_2H_4}}).",
          ],
          hints: [
            "2 carbons gives the prefix 'eth-'.",
            "Alkenes end in '-ene' instead of '-ane'.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Balance the complete combustion of **pentane ({{C_5H_{12}}})**:\n{{C_5H_{12} + xO_2 -> 5CO_2 + 6H_2O}}\nWhat is the value of {{x}}?",
          answer: { type: "number", value: 8, display: "8" },
          traps: [
            {
              spec: { type: "number", value: 16 },
              feedback:
                "16 is the total number of O ATOMS — divide by 2 because oxygen exists as O₂ molecules!",
            },
          ],
          solution: [
            "Count oxygen atoms on the right: {{5 * 2 = 10}} from {{5CO_2}} plus {{6 * 1 = 6}} from {{6H_2O}} = 16 O atoms.",
            "Divide by 2 for {{O_2}} molecules: {{x = 16 / 2 = 8}}.",
          ],
          hints: [
            "Add the total oxygen atoms in 5CO₂ and 6H₂O.",
            "Divide the total oxygen atoms by 2 to get the coefficient of O₂.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Name the acidic pollutant gas formed when **sulfur impurities** inside coal or diesel burn in oxygen.",
          answer: {
            type: "text",
            accept: ["sulfur dioxide", "sulphur dioxide", "so2"],
            display: "sulfur dioxide",
          },
          solution: [
            "Sulfur reacts with oxygen during combustion: {{S + O_2 -> SO_2}} (**sulfur dioxide**), a major cause of acid rain.",
          ],
          hints: [
            "What oxide forms when sulfur burns in oxygen (S + O₂ → ?)?",
            "Give the full chemical name (or formula SO₂).",
          ],
        },
        {
          id: "oil-and-pollution-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "hydrocarbons-alkanes",
          question:
            "Which property **DECREASES** as the carbon chain length of alkanes gets longer?",
          options: [
            "Boiling point",
            "Viscosity",
            "Flammability",
            "Intermolecular force strength",
          ],
          answerIndex: 2,
          explanation:
            "Longer alkanes have higher boiling points, higher viscosity, and stronger intermolecular forces — so they evaporate far less easily and their **flammability decreases**.",
          hints: [
            "Compare how easily propane gas catches fire versus thick road bitumen.",
            "Three of the properties go UP with chain length; pick the one that goes DOWN.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "fractional-distillation-oil",
          question:
            "Which statement is **TRUE** about a single fraction (such as petrol) collected from a crude oil fractionating column?",
          options: [
            "It is still a mixture of hydrocarbons with similar boiling points",
            "It is a single chemically pure alkane with one exact melting point",
            "It consists exclusively of pure ethene molecules made by cracking",
            "It contains only non-hydrocarbon alcohols and pure liquid water",
          ],
          answerIndex: 0,
          explanation:
            "Each fraction (such as petrol, {{C_5}}–{{C_{10}}}) is still a **mixture** of many different hydrocarbon molecules that share a similar chain length and narrow boiling-point range.",
          hints: [
            "Check the chain length range of petrol in the guide table (C₅–C₁₀).",
            "Does fractional distillation separate every single alkane one by one, or in groups?",
          ],
        },
        {
          id: "oil-and-pollution-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "What type of chemical reaction is **cracking**?",
          options: [
            "Neutralisation",
            "Thermal decomposition",
            "Complete combustion",
            "Filtration",
          ],
          answerIndex: 1,
          explanation:
            "**Cracking** uses high heat (with a catalyst or steam) to break a single large hydrocarbon molecule down into two or more smaller molecules — the exact definition of **thermal decomposition**.",
          hints: [
            "One large reactant breaks down into smaller products using heat.",
            "What two-word chemistry term means 'breaking down using heat'?",
          ],
        },
        {
          id: "oil-and-pollution-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Which visual clue on a Bunsen burner immediately indicates **incomplete combustion**?",
          options: [
            "A cool blue flame with zero visible smoke",
            "A loud squeaky pop when lit with a splint",
            "A roaring colourless flame heating cleanly",
            "A flickering yellow flame depositing black soot",
          ],
          answerIndex: 3,
          explanation:
            "Limited oxygen causes **incomplete combustion**, forming glowing hot solid carbon (**soot**) particles that make the flame **yellow and smoky** and leave black carbon deposits on glassware.",
          hints: [
            "Think about what happens when you close the air hole on a Bunsen burner.",
            "Which flame colour is caused by glowing solid soot particles?",
          ],
        },
        {
          id: "oil-and-pollution-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "fractional-distillation-oil",
          marks: 4,
          question:
            "Describe how crude oil is separated into useful fractions inside an industrial fractionating tower.",
          modelAnswer:
            "First, the mixture is heated in a furnace until most of it evaporates into hot vapour. The vapour enters the bottom of the column, which has a temperature gradient that is very hot at the bottom and cooler towards the top. As the vapours rise upwards, each group of molecules condenses back into liquid when it reaches a height matching its own boiling point.",
          markScheme: [
            {
              point: "Heated in a furnace until it evaporates / turns to vapour",
              keywords: ["heated", "evaporat", "vapour", "vapor", "furnace"],
            },
            {
              point:
                "Temperature gradient: hot at the bottom and cooler at the top",
              keywords: ["gradient", "bottom", "top", "cooler"],
            },
            {
              point: "Vapours rise upwards through the column",
              keywords: ["rise", "rising", "upwards"],
            },
            {
              point:
                "Each fraction condenses back into liquid at its boiling point",
              keywords: ["condens", "boiling point"],
            },
          ],
          hints: [
            "Use four clear steps: (1) what happens in the furnace, (2) temperature gradient inside the column, (3) direction vapours move, (4) where each fraction turns back to liquid.",
            "Make sure you include 'evaporates', 'hot at bottom / cooler at top', 'rises', and 'condenses at its boiling point'.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          marks: 3,
          question:
            "Give two reasons why oil refineries crack long-chain hydrocarbons, and name one condition required for catalytic cracking.",
          modelAnswer:
            "1. There is far higher customer demand for shorter-chain fuels such as petrol than fractional distillation supplies naturally. 2. Cracking produces unsaturated alkenes, which are essential monomers for manufacturing plastics and polymers. Catalytic cracking requires a high temperature (around 550 °C) and a hot solid catalyst such as alumina or zeolite.",
          markScheme: [
            {
              point:
                "Meets higher demand for shorter-chain fuels (e.g. petrol)",
              keywords: ["demand", "petrol", "shorter", "fuel"],
            },
            {
              point:
                "Produces alkenes used as monomers/raw materials for plastics/polymers",
              keywords: ["alkene", "polymer", "plastic", "monomer"],
            },
            {
              point:
                "High temperature (~500–600 °C) and/or hot solid catalyst (alumina/zeolite)",
              keywords: [
                "high temperature",
                "550",
                "500",
                "catalyst",
                "alumina",
                "zeolite",
              ],
            },
          ],
          hints: [
            "Think about supply vs demand for petrol compared to heavy fuel oil.",
            "What major everyday materials are manufactured from alkenes like ethene?",
            "Include temperature and catalyst for catalytic cracking.",
          ],
        },
        {
          id: "oil-and-pollution-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "combustion-pollution",
          marks: 3,
          question:
            "Explain why incomplete combustion inside a faulty household gas boiler poses a deadly health risk and leaves black marks on walls.",
          modelAnswer:
            "A blocked flue creates a limited oxygen supply. Burning methane without enough oxygen forms toxic, odourless carbon monoxide, which binds tightly to haemoglobin in red blood cells and stops oxygen reaching organs. It also creates solid carbon soot particulates that stain surfaces and irritate lungs.",
          markScheme: [
            {
              point: "Caused by a limited / insufficient supply of oxygen",
              keywords: [
                "limited oxygen",
                "lack of oxygen",
                "insufficient oxygen",
                "not enough oxygen",
              ],
            },
            {
              point:
                "Produces toxic carbon monoxide, which binds to haemoglobin in red blood cells",
              keywords: [
                "carbon monoxide",
                "haemoglobin",
                "hemoglobin",
                "red blood",
              ],
            },
            {
              point:
                "Produces solid carbon soot particulates that blacken surfaces",
              keywords: ["soot", "particulate"],
            },
          ],
          hints: [
            "First explain what is missing inside a faulty boiler that causes incomplete combustion.",
            "Name the two harmful products — one invisible toxic gas and one black solid.",
            "Explain specifically how that toxic gas harms the blood.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER P2 — Applied Refinery, Cracking & Environmental Chemistry
    // -----------------------------------------------------------------------
    {
      id: "oil-and-pollution-p2",
      title: "Practice Paper 2: Equations, Alkenes & Atmospheric Pollution",
      questions: [
        {
          id: "oil-and-pollution-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "cracking-alkenes",
          question:
            "How many **hydrogen atoms** are in one molecule of the alkene **hexene** (6 carbon atoms)?",
          answer: { type: "number", value: 12, display: "12" },
          traps: [
            {
              spec: { type: "number", value: 14 },
              feedback:
                "14 hydrogens is hexane (an alkane, CₙH₂ₙ₊₂). Hexene is an ALKENE (CₙH₂ₙ)!",
            },
          ],
          solution: [
            "Alkenes follow the general formula {{C_nH_{2n}}}.",
            "Substitute {{n = 6}}: {{2(6) = 12}} hydrogen atoms ({{C_6H_{12}}}).",
          ],
          hints: [
            "Notice the ending '-ene': use CₙH₂ₙ, NOT CₙH₂ₙ₊₂.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "One molecule of hexadecane ({{C_{16}H_{34}}}) is cracked according to the balanced equation {{C_{16}H_{34} -> C_{10}H_{22} + 2P}}. How many **carbon atoms** are in ONE molecule of alkene **P**?",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback:
                "6 carbons are shared across TWO identical molecules of P — divide 6 by 2!",
            },
          ],
          solution: [
            "Remaining carbons after {{C_{10}H_{22}}}: {{16 - 10 = 6}} carbon atoms.",
            "Split equally across **2** identical molecules of P: {{6 / 2 = 3}} carbon atoms per molecule.",
            "Check hydrogens: {{34 - 22 = 12}}, split by 2 → 6 H → propene ({{C_3H_6}}) ✓.",
          ],
          hints: [
            "Subtract 10 carbons from 16 carbons first.",
            "Divide the remaining carbons by 2 because there are 2 molecules of P.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "In the balanced complete combustion of **methane**, {{CH_4 + xO_2 -> CO_2 + 2H_2O}}, what is the value of {{x}}?",
          answer: { type: "number", value: 2, display: "2" },
          solution: [
            "Right side oxygen atoms: {{2}} in {{CO_2}} + {{2 * 1 = 2}} in {{2H_2O}} = 4 oxygen atoms.",
            "{{4 / 2 = 2}} molecules of {{O_2}}.",
          ],
          hints: [
            "Count total O atoms on the right side (CO₂ + 2H₂O).",
            "Divide by 2 to get the number of O₂ molecules.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "fractional-distillation-oil",
          question:
            "Name the fraction collected immediately **above kerosene** in a crude oil fractionating column (used to fuel cars).",
          answer: {
            type: "text",
            accept: ["petrol", "gasoline"],
            display: "petrol",
          },
          solution: [
            "Top-to-bottom order: Refinery gases → **Petrol** → Kerosene → Diesel → Fuel oil → Bitumen.",
          ],
          hints: [
            "Recall the fraction order: Really Polite Kids Don't Fight Bullies.",
            "Which fraction sits right above Kerosene?",
          ],
        },
        {
          id: "oil-and-pollution-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Name the exhaust device coated with platinum and rhodium that converts toxic CO and NO into CO₂ and N₂ inside petrol cars.",
          answer: {
            type: "text",
            accept: ["catalytic converter", "a catalytic converter", "three-way catalytic converter"],
            display: "catalytic converter",
          },
          solution: [
            "A **catalytic converter** speeds up {{2CO + 2NO -> 2CO_2 + N_2}} inside car exhaust systems.",
          ],
          hints: [
            "It is a two-word device named after its precious-metal catalyst.",
            "First word starts with 'catalytic'.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "hydrocarbons-alkanes",
          question:
            "Calculate the relative molecular mass ({{M_r}}) of **propane ({{C_3H_8}})** using {{A_r(C) = 12}} and {{A_r(H) = 1}}.",
          answer: { type: "number", value: 44, display: "44" },
          solution: [
            "{{M_r(C_3H_8) = (3 * 12) + (8 * 1) = 36 + 8 = 44}}.",
          ],
          hints: [
            "Multiply 3 carbons by 12 and 8 hydrogens by 1.",
            "Add 36 and 8 together.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "In the balanced catalytic converter equation {{2CO + 2NO -> xCO_2 + N_2}}, what is the value of {{x}}?",
          answer: { type: "number", value: 2, display: "2" },
          solution: [
            "Left side has 2 carbon atoms (in {{2CO}}), so right side needs {{2CO_2}}.",
            "Check O atoms: {{2 + 2 = 4}} on left; {{2 * 2 = 4}} on right ✓.",
          ],
          hints: [
            "Count the number of carbon atoms on the left side.",
            "Match carbon atoms in xCO₂ on the right side.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "Give the single word describing the **colour** of bromine water AFTER it has reacted with propene ({{C_3H_6}}).",
          answer: {
            type: "text",
            accept: ["colourless", "colorless"],
            display: "colourless",
          },
          traps: [
            {
              spec: { type: "text", accept: ["clear"] },
              feedback:
                "Exam trap! Orange bromine water is ALREADY clear (transparent). Always write **colourless**!",
            },
          ],
          solution: [
            "Unsaturated alkenes turn orange bromine water **colourless**.",
          ],
          hints: [
            "Never write 'clear' — specify the absence of colour.",
            "Starts with 'colour-'.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "hydrocarbons-alkanes",
          question:
            "Which alkane is a **liquid** at a Singapore laboratory temperature of **25 °C**?\n- Methane: b.p. −162 °C\n- Ethane: b.p. −89 °C\n- Butane: b.p. −0.5 °C\n- Pentane: m.p. −130 °C, b.p. +36 °C",
          options: ["Methane", "Ethane", "Butane", "Pentane"],
          answerIndex: 3,
          explanation:
            "A substance is a **liquid** when the temperature of 25 °C sits **between its melting point and boiling point**. For **pentane**, −130 °C < 25 °C < +36 °C, so it is a liquid. Methane, ethane, and butane have all boiled already and are gases at 25 °C.",
          hints: [
            "Check whether 25 °C is ABOVE or BELOW each alkane's boiling point.",
            "If room temperature is lower than the boiling point (and above the melting point), the substance is a liquid.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cracking-alkenes",
          question:
            "Which pair of hydrocarbons consists of **one alkane** and **one alkene**?",
          options: [
            "C₃H₈ and C₃H₆",
            "CH₄ and C₂H₆",
            "C₂H₄ and C₄H₈",
            "C₄H₁₀ and C₆H₁₄",
          ],
          answerIndex: 0,
          explanation:
            "{{C_3H_8}} fits {{C_nH_{2n+2}}} (propane, alkane) and {{C_3H_6}} fits {{C_nH_{2n}}} (propene, alkene). The other pairs are either two alkanes or two alkenes.",
          hints: [
            "Test each formula against CₙH₂ₙ₊₂ (alkane) and CₙH₂ₙ (alkene).",
            "Look for a pair containing ONE of each.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Why does **steam cracking** produce a higher proportion of small **alkenes** like ethene than fractional distillation?",
          options: [
            "Fractional distillation freezes ethene into road bitumen",
            "Steam cracking breaks C–C covalent bonds inside long alkanes",
            "Steam reacts with air nitrogen to create brand-new carbon atoms",
            "Fractional distillation burns all alkenes into carbon dioxide",
          ],
          answerIndex: 1,
          explanation:
            "Crude oil naturally contains almost exclusively saturated alkanes; fractional distillation only sorts them physically. **Steam cracking** chemically decomposes long alkanes at ~850 °C by breaking {{C-C}} bonds to generate abundant **alkenes**.",
          hints: [
            "Does crude oil naturally contain large quantities of ethene before cracking?",
            "Compare physical separation vs chemical bond-breaking.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "combustion-pollution",
          question:
            "Which environmental problem is specifically caused by airborne **soot particulates** reflecting incoming sunlight back out into space?",
          options: [
            "Acid rain",
            "Eutrophication",
            "Global dimming",
            "Ocean acidification",
          ],
          answerIndex: 2,
          explanation:
            "Solid carbon particulates (soot) suspended in the atmosphere scatter and reflect sunlight, reducing the amount of solar energy reaching Earth's surface — an effect known as **global dimming**.",
          hints: [
            "Think about the exact name for reduced sunlight reaching the ground due to airborne soot.",
            "Acid rain is caused by SO₂ and NOₓ, not solid soot.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "combustion-pollution",
          marks: 3,
          question:
            "Contrast the chemical sources of sulfur dioxide and nitrogen oxides from road vehicles, and state two damaging environmental effects of the acidic rain they cause.",
          modelAnswer:
            "SO₂ forms when sulfur impurities inside fossil fuels (such as diesel) burn in oxygen, whereas NOₓ forms when N₂ and O₂ from the air react together at the very high temperatures inside car engines. Acid rain lowers lake pH (killing fish and aquatic life), damages forest trees, and corrodes limestone buildings and metal bridges.",
          markScheme: [
            {
              point: "SO₂ comes from sulfur impurities inside fossil fuels",
              keywords: ["impurit", "fuel"],
            },
            {
              point:
                "NOₓ forms from N₂ and O₂ in the air reacting at high engine temperatures",
              keywords: ["air", "high temperature", "engine"],
            },
            {
              point:
                "Damaging effects: kills fish/aquatic life, damages trees/forests, or corrodes limestone/metals",
              keywords: [
                "fish",
                "lake",
                "aquatic",
                "tree",
                "forest",
                "limestone",
                "corrod",
              ],
            },
          ],
          hints: [
            "Carefully distinguish WHERE the sulfur atoms come from vs WHERE the nitrogen atoms come from!",
            "Name two concrete ecosystems or materials harmed by acidic rainwater.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "combustion-pollution",
          marks: 3,
          question:
            "Explain how greenhouse gases such as carbon dioxide and methane warm the Earth's climate, and name two practical ways society can cut their emissions.",
          modelAnswer:
            "Incoming short-wave sunlight passes easily through the atmosphere to heat the surface. When the surface re-emits long-wave infrared radiation back upward, greenhouse molecules absorb and trap this heat in the lower atmosphere. Society can cut emissions by switching to renewable solar and wind electricity, using electric vehicles or public transport, and insulating buildings.",
          markScheme: [
            {
              point: "Short-wavelength sunlight passes through to heat Earth",
              keywords: ["short-wave", "sunlight", "solar"],
            },
            {
              point:
                "Greenhouse gases absorb/trap outgoing long-wavelength infrared radiation",
              keywords: ["infrared", "trap", "absorb", "long-wave"],
            },
            {
              point:
                "Two practical reductions (e.g. renewable solar/wind power, electric vehicles, insulation, public transport)",
              keywords: [
                "renewable",
                "solar",
                "wind",
                "electric",
                "insulation",
                "public transport",
              ],
            },
          ],
          hints: [
            "Distinguish between incoming sunlight and outgoing infrared heat radiation.",
            "Include two realistic low-carbon technologies or lifestyle shifts.",
          ],
        },
        {
          id: "oil-and-pollution-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "fractional-distillation-oil",
          marks: 3,
          question:
            "Compare the fractions petrol and heavy fuel oil in terms of chain length, viscosity, flammability, and where each condenses in the tower.",
          modelAnswer:
            "Petrol consists of much shorter molecules and condenses much higher up in a cooler zone near the top of the column. Petrol is runnier (less viscous) than thick heavy fuel oil and ignites far more easily (higher flammability).",
          markScheme: [
            {
              point:
                "Petrol has shorter chains and condenses higher up (cooler top zone)",
              keywords: ["shorter", "higher", "top", "cooler"],
            },
            {
              point:
                "Petrol is runnier / less viscous than thick heavy fuel oil",
              keywords: ["runn", "thicker", "less viscous", "lower viscosity"],
            },
            {
              point:
                "Petrol ignites more easily / has higher flammability than heavy fuel oil",
              keywords: [
                "ignit",
                "more flammable",
                "burns more easily",
                "higher flammability",
              ],
            },
          ],
          hints: [
            "Recall where petrol sits compared with heavy fuel oil (top vs near bottom).",
            "Make clear comparative statements ('shorter', 'runnier/less viscous', 'ignites more easily').",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 stretch questions, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "oil-and-pollution-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cracking-alkenes",
      strategy: "Conserve both C and H simultaneously",
      question:
        "One molecule of eicosane ({{C_{20}H_{42}}}) is cracked to yield **one** molecule of **octane ({{C_8H_{18}}})**, **one** molecule of **butene ({{C_4H_8}}})**, and **{{k}}** molecules of **ethene ({{C_2H_4}})**. Find the integer value of {{k}}.",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback:
            "8 is the total number of remaining carbon atoms — each ethene molecule uses 2 carbons, so divide by 2!",
        },
      ],
      solution: [
        "Carbon atoms used by octane and butene: {{8 + 4 = 12}} C atoms.",
        "Remaining carbon atoms for {{k}} molecules of {{C_2H_4}}: {{20 - 12 = 8}} C atoms → {{k = 8 / 2 = 4}}.",
        "Verify hydrogen atoms: {{18 + 8 + 4(4) = 18 + 8 + 16 = 42}} H atoms ✓!",
      ],
      hints: [
        "Add the carbon atoms in octane (8) and butene (4), then subtract from 20.",
        "Each ethene molecule (C₂H₄) contains 2 carbon atoms.",
        "Double-check your value of k by counting total hydrogen atoms on both sides!",
      ],
    },
    {
      id: "oil-and-pollution-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "combustion-pollution",
      strategy: "C → H → O balancing with fractional O₂ doubling",
      question:
        "In the balanced symbol equation for the complete combustion of **hexane ({{C_6H_{14}}})** with smallest whole-number coefficients:\n{{2C_6H_{14} + xO_2 -> 12CO_2 + 14H_2O}}\nCalculate the value of {{x}}.",
      answer: { type: "number", value: 19, display: "19" },
      traps: [
        {
          spec: { type: "number", value: 38 },
          feedback:
            "38 is the total number of O ATOMS — divide by 2 because oxygen exists as diatomic O₂ molecules!",
        },
      ],
      solution: [
        "Oxygen atoms in {{12CO_2}}: {{12 * 2 = 24}}.",
        "Oxygen atoms in {{14H_2O}}: {{14 * 1 = 14}}.",
        "Total oxygen atoms on right = {{24 + 14 = 38}}.",
        "Number of {{O_2}} molecules: {{x = 38 / 2 = 19}}.",
      ],
      hints: [
        "Count oxygen atoms inside 12CO₂ and inside 14H₂O separately.",
        "Add them to get 38 oxygen atoms, then divide by 2 for O₂ molecules.",
      ],
    },
    {
      id: "oil-and-pollution-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "hydrocarbons-alkanes",
      strategy: "Set up an algebraic equation for Mr",
      question:
        "An unknown **alkane** ({{C_nH_{2n+2}}}) has a relative molecular mass ({{M_r}}) of **114** (using {{A_r(C) = 12}} and {{A_r(H) = 1}}). How many **carbon atoms** ({{n}}) are in one molecule of this alkane?",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback:
            "For n = 9 (nonane, C₉H₂₀), Mr = 9(12) + 20 = 128, which is too large. Solve 14n + 2 = 114!",
        },
      ],
      solution: [
        "Write an expression for {{M_r}} of {{C_nH_{2n+2}}}: {{12n + (2n + 2) = 14n + 2}}.",
        "Set {{14n + 2 = 114}} → {{14n = 112}}.",
        "Divide by 14: {{n = 112 / 14 = 8}} (octane, {{C_8H_{18}}}).",
      ],
      hints: [
        "Express the relative molecular mass of CₙH₂ₙ₊₂ in terms of n: 12n + 1(2n + 2).",
        "Simplify to 14n + 2 = 114.",
        "Subtract 2 to get 14n = 112, then divide by 14.",
      ],
    },
    {
      id: "oil-and-pollution-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cracking-alkenes",
      strategy: "Compare carbon:hydrogen ratios",
      question:
        "A student cracks a pure alkane sample and tests the collected product mixture with orange bromine water; it turns colourless instantly. Why did the student **NOT** obtain 100% pure ethene gas?",
      options: [
        "Cracking long alkanes always makes a shorter alkane alongside alkenes",
        "Orange bromine water turns every alkane instantly into liquid ethene",
        "All hydrogen atoms vanish during cracking leaving pure graphite soot",
        "Ethene has a boiling point above 350 °C so it stays in the furnace",
      ],
      answerIndex: 0,
      explanation:
        "Because a starting alkane has formula {{C_nH_{2n+2}}} (two 'extra' hydrogens), cracking cannot convert all of it solely into alkenes ({{C_mH_{2m}}}) without releasing hydrogen — instead, cracking always produces a **mixture** containing at least one shorter **alkane** alongside the **alkene(s)** (which must later be separated by fractional distillation).",
      hints: [
        "Compare the general formula of an alkane (CₙH₂ₙ₊₂) with the general formula of alkenes (CₘH₂ₘ).",
        "Can you turn C₁₀H₂₂ purely into C₂H₄ molecules without leaving 2 extra H atoms behind?",
      ],
    },
    {
      id: "oil-and-pollution-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "combustion-pollution",
      strategy: "Calculate mass of sulfur burned",
      question:
        "Under older shipping regulations, heavy marine fuel oil contained **3.5%** sulfur by mass; under IMO 2020 clean-air rules, the limit dropped to **0.5%** sulfur by mass. On a cargo ship burning **200 tonnes** of fuel oil per voyage, how many **tonnes of sulfur** are prevented from burning into {{SO_2}} per voyage?",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback:
            "7 tonnes was the OLD sulfur mass (3.5% of 200 t) — subtract the 1 tonne still allowed at 0.5%!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback:
            "3% is the percentage drop — now calculate 3% of 200 tonnes!",
        },
      ],
      solution: [
        "Percentage reduction in sulfur = {{3.5% - 0.5% = 3.0%}}.",
        "Mass of sulfur saved = {{0.03 * 200 = 6}} tonnes per voyage.",
        "(Check: old = {{0.035 * 200 = 7}} t; new = {{0.005 * 200 = 1}} t; saved = {{7 - 1 = 6}} t ✓.)",
      ],
      hints: [
        "Find the percentage-point reduction in sulfur content (3.5% − 0.5%).",
        "Calculate 3.0% of 200 tonnes.",
      ],
    },
    {
      id: "oil-and-pollution-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "fractional-distillation-oil",
      strategy: "Match physical property data to column height",
      question:
        "Two unknown liquid fractions X and Y are sampled from a refinery tower:\n- Fraction X: pale straw colour, pours rapidly, ignites immediately with a match, boils 60–110 °C.\n- Fraction Y: dark brown, pours very slowly like honey, very hard to ignite, boils 300–350 °C.\nWhich statement about X and Y is **INCORRECT**?",
      options: [
        "Fraction X condensed much higher up the column than Fraction Y",
        "Fraction Y has stronger intermolecular forces between molecules than X",
        "Fraction Y contains shorter carbon chains and higher flammability than X",
        "Fraction Y is a prime candidate for cracking into shorter fuels and alkenes",
      ],
      answerIndex: 2,
      explanation:
        "Fraction Y — heavy fuel oil boiling from 300 °C to 350 °C — is dark, thick (high viscosity), and hard to ignite (low flammability), meaning it has **LONGER** carbon chains and **LOWER** flammability than Fraction X (petrol), so claiming Y has shorter chains and higher flammability is false!",
      hints: [
        "Identify X (petrol-like, near top) and Y (heavy fuel oil, near bottom).",
        "Notice the question asks which statement is INCORRECT.",
      ],
    },
    {
      id: "oil-and-pollution-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "combustion-pollution",
      strategy: "Evaluate environmental trade-offs quantitatively",
      marks: 3,
      question:
        "A car manufacturer fits a platinum catalytic converter to a petrol engine. Write the chemical change occurring inside the converter, explain how it protects human health, and explain why the car STILL contributes to global warming.",
      modelAnswer:
        "Inside the honeycomb block, carbon monoxide and nitrogen oxide react to form carbon dioxide and nitrogen gas (2CO + 2NO → 2CO₂ + N₂). This protects human health by removing toxic CO (which blocks oxygen binding to haemoglobin) and smog/acid-rain-causing NOₓ that triggers asthma. However, the exhaust still releases CO₂, a greenhouse gas that traps infrared heat in the atmosphere.",
      markScheme: [
        {
          point:
            "Converts carbon monoxide (CO) and nitrogen oxide (NO) into CO₂ and nitrogen gas (N₂)",
          keywords: [
            "carbon monoxide",
            "nitrogen oxide",
            "2co",
            "nitrogen gas",
          ],
        },
        {
          point:
            "Protects health by removing toxic CO (haemoglobin) and lung-irritating NOₓ (smog/asthma/acid rain)",
          keywords: [
            "toxic",
            "poison",
            "haemoglobin",
            "asthma",
            "smog",
            "acid rain",
          ],
        },
        {
          point:
            "Still emits CO₂, a greenhouse gas that traps infrared radiation",
          keywords: ["greenhouse", "co2", "carbon dioxide", "infrared"],
        },
      ],
      hints: [
        "Write out which two toxic gases react together and which two products leave the tailpipe.",
        "Link CO to blood oxygen transport and NOₓ to breathing/smog.",
        "Point out which final tailpipe product is still a greenhouse gas.",
      ],
    },
    {
      id: "oil-and-pollution-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "cracking-alkenes",
      strategy: "Distinguish physical intermolecular changes from chemical bond breaking",
      marks: 4,
      question:
        "A pupil says: 'When octane boils at 126 °C, its C–C covalent bonds break to form gases, just like during cracking.' Explain thoroughly why the pupil's statement is scientifically incorrect, contrasting both processes clearly.",
      modelAnswer:
        "Boiling is a physical change in which molecules remain intact and no new substances form; thermal energy only overcomes weak intermolecular forces between separate molecules. In contrast, cracking is a chemical thermal decomposition needing far higher temperatures (around 550 °C with a catalyst) that genuinely snaps covalent links to manufacture brand-new shorter alkanes and unsaturated alkenes containing C=C double bonds.",
      markScheme: [
        {
          point:
            "Boiling is a physical change — molecules remain intact and no new substances form",
          keywords: ["physical", "intact", "no new"],
        },
        {
          point:
            "Boiling only overcomes weak intermolecular forces between molecules",
          keywords: ["intermolecular", "between molecules"],
        },
        {
          point:
            "Cracking is a chemical thermal decomposition requiring much higher heat (500–550 °C / catalyst)",
          keywords: ["chemical", "decomposition", "catalyst", "500", "550"],
        },
        {
          point:
            "Cracking creates new shorter alkanes and unsaturated alkenes (with C=C double bonds)",
          keywords: ["alkane", "alkene", "double bond", "shorter"],
        },
      ],
      hints: [
        "Contrast physical change vs chemical reaction (thermal decomposition).",
        "Name the exact forces overcome during boiling versus the bonds broken during cracking.",
        "State what new families of molecules are created by cracking.",
      ],
    },
  ],
};
