import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "periodic-table-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "atomic-structure-shells",
      question: "A neutral atom of magnesium has atomic number 12 and mass number 24. How many neutrons does it have?",
      answer: { type: "number", value: 12, display: "12" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "Do not add 24 + 12 — subtract atomic number from mass number (24 − 12)." },
      ],
      hints: [
        "Neutrons = mass number − atomic number.",
      ],
      solution: [
        "Neutrons = {{24 - 12 = 12}}.",
      ],
    },
    {
      id: "periodic-table-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "atomic-structure-shells",
      question: "Write the electronic configuration of a neutral chlorine atom (atomic number 17), separating shell counts with commas.",
      answer: {
        type: "text",
        accept: ["2,8,7", "2.8.7", "2-8-7"],
        display: "2,8,7",
      },
      traps: [
        { spec: { type: "text", accept: ["2,9,6", "2.9.6"] }, feedback: "The second electron shell can hold at most 8 electrons." },
        { spec: { type: "text", accept: ["2,8,8", "2.8.8"] }, feedback: "2 + 8 + 8 = 18 electrons (that is argon or a Cl⁻ ion, not a neutral chlorine atom with 17 electrons)." },
      ],
      hints: [
        "Fill shells from the inside out using capacities 2, 8, 8, 2.",
        "Place 2 in shell 1, 8 in shell 2, and put the remaining electrons in shell 3.",
      ],
      solution: [
        "17 electrons fill shell 1 (2), shell 2 (8), and shell 3 (7) → **2,8,7**.",
      ],
    },
    {
      id: "periodic-table-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "atomic-structure-shells",
      question: "An atom has the electronic configuration 2,8,8,2. Which Period (row number) of the Periodic Table is it in?",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        { spec: { type: "number", value: 2 }, feedback: "2 is the GROUP number (number of outer electrons). The PERIOD number equals the total number of occupied shells." },
      ],
      hints: [
        "Count how many occupied electron shells appear in 2,8,8,2.",
        "Period number = number of occupied shells; Group number = outer-shell electrons.",
      ],
      solution: [
        "There are **4** occupied electron shells, so calcium (2,8,8,2) sits in **Period 4**.",
      ],
    },
    {
      id: "periodic-table-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "mendeleev-layout",
      question: "In what order are elements arranged in the MODERN Periodic Table?",
      options: [
        "Increasing atomic (proton) number",
        "Increasing relative atomic mass",
        "Alphabetical order of chemical symbol",
        "Decreasing room-temperature density",
      ],
      answerIndex: 0,
      hints: [
        "Think about which subatomic particle uniquely identifies every element.",
      ],
      explanation:
        "The modern Periodic Table orders elements strictly by increasing atomic (proton) number, resolving anomalies caused by isotope masses when Mendeleev originally ordered by atomic mass.",
    },
    {
      id: "periodic-table-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "mendeleev-layout",
      question: "Do soluble non-metal oxides such as sulfur dioxide dissolve in water to form acidic or alkaline solutions?",
      answer: {
        type: "text",
        accept: ["acidic", "acid", "acidic solutions", "acidic solution"],
        display: "acidic",
      },
      traps: [
        { spec: { type: "text", accept: ["alkaline", "basic", "alkali", "base"] }, feedback: "Metals form basic/alkaline oxides; non-metals form acidic oxides (pH < 7)." },
      ],
      hints: [
        "Remember that CO₂ and SO₂ dissolving in rainwater create acid rain.",
      ],
      solution: [
        "Non-metal oxides dissolve in water to form **acidic** solutions (pH < 7).",
      ],
    },
    {
      id: "periodic-table-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "group1-alkali-metals",
      question: "Name the gas released whenever a Group 1 alkali metal reacts with cold water.",
      answer: {
        type: "text",
        accept: ["hydrogen", "hydrogen gas", "h2"],
        display: "hydrogen",
      },
      traps: [
        { spec: { type: "text", accept: ["oxygen", "oxygen gas", "o2"] }, feedback: "Alkali metal + water → metal hydroxide + HYDROGEN (not oxygen!)." },
      ],
      hints: [
        "Recall the equation: 2Na + 2H₂O → 2NaOH + ?",
      ],
      solution: [
        "Alkali metals react with water to produce a metal hydroxide and **hydrogen** gas (H₂).",
      ],
    },
    {
      id: "periodic-table-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "group1-alkali-metals",
      question: "Which Group 1 alkali metal is the MOST reactive out of lithium, sodium, potassium, and rubidium?",
      options: [
        "Lithium (Li)",
        "Sodium (Na)",
        "Potassium (K)",
        "Rubidium (Rb)",
      ],
      answerIndex: 3,
      hints: [
        "Recall which way reactivity changes going down Group 1.",
        "Rubidium sits below potassium with 5 electron shells.",
      ],
      explanation:
        "Reactivity increases down Group 1 as atoms get larger with more shells and lose their outer electron more easily, making rubidium the most reactive of the four.",
    },
    {
      id: "periodic-table-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "group7-group0",
      question: "How many electrons are in the outer shell of EVERY Group 7 halogen atom?",
      answer: { type: "number", value: 7, display: "7" },
      hints: [
        "Match the Group number to the outer-shell electron count.",
        "Halogens sit one column to the left of the full-shell Group 0 noble gases.",
      ],
      solution: [
        "All Group 7 halogens (F, Cl, Br, I) have **7** electrons in their outer shell.",
      ],
    },
    {
      id: "periodic-table-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "group7-group0",
      question: "When aqueous chlorine is added to colourless sodium bromide solution, which halogen is displaced?",
      options: [
        "Fluorine",
        "Bromine",
        "Iodine",
        "Sodium",
      ],
      answerIndex: 1,
      hints: [
        "Chlorine is higher (more reactive) in Group 7 than bromine.",
        "Write out the equation: Cl₂ + 2NaBr → 2NaCl + ?",
      ],
      explanation:
        "More reactive chlorine displaces less reactive bromine from sodium bromide: Cl₂ + 2NaBr → 2NaCl + Br₂, turning the solution orange-brown.",
    },
    {
      id: "periodic-table-quiz-q10",
      kind: "short",
      difficulty: "warmup",
      guideRef: "group7-group0",
      question: "Which Group number contains the unreactive monatomic noble gases helium, neon, and argon?",
      answer: { type: "number", value: 0, display: "0" },
      hints: [
        "It sits on the far right edge of the Periodic Table.",
      ],
      solution: [
        "The noble gases sit in **Group 0** (sometimes numbered Group 18 in university IUPAC tables, and Group 0 in UK/Tanglin Science).",
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
      id: "periodic-table-p1",
      title: "Practice Paper 1 — Atomic Structure, Shells & Mendeleev",
      questions: [
        {
          id: "periodic-table-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "atomic-structure-shells",
          question: "An atom of phosphorus has atomic number 15 and mass number 31. Calculate the number of neutrons in its nucleus.",
          answer: { type: "number", value: 16, display: "16" },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "15 is the number of protons (atomic number); neutrons = mass number − atomic number." },
            { spec: { type: "number", value: 46 }, feedback: "Subtract atomic number from mass number (31 − 15), do not add them." },
          ],
          hints: [
            "Neutrons = mass number − atomic number = 31 − 15.",
          ],
          solution: [
            "Neutrons = {{31 - 15 = 16}}.",
          ],
        },
        {
          id: "periodic-table-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "Write the electronic configuration of a neutral sulfur atom (atomic number 16), separated by commas.",
          answer: {
            type: "text",
            accept: ["2,8,6", "2.8.6", "2-8-6"],
            display: "2,8,6",
          },
          traps: [
            { spec: { type: "text", accept: ["2,8,8", "2.8.8"] }, feedback: "2 + 8 + 8 = 18 electrons (that is argon or S²⁻, not neutral sulfur with 16 electrons)." },
          ],
          hints: [
            "Fill the inner shells first: 2 in shell 1, 8 in shell 2.",
            "Subtract 2 + 8 = 10 from 16 to find the outer shell count.",
          ],
          solution: [
            "16 electrons fill shells as 2, then 8, then 6 → **2,8,6** (Period 3, Group 6).",
          ],
        },
        {
          id: "periodic-table-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "Element M sits in Period 4 and Group 1 of the Periodic Table. What is the atomic number of Element M?",
          answer: { type: "number", value: 19, display: "19" },
          traps: [
            { spec: { type: "number", value: 11 }, feedback: "Atomic number 11 (sodium, 2,8,1) has only 3 shells (Period 3), not 4 shells (Period 4)." },
            { spec: { type: "number", value: 20 }, feedback: "Atomic number 20 (calcium, 2,8,8,2) has 2 outer electrons (Group 2), not 1 (Group 1)." },
          ],
          hints: [
            "Period 4 means 4 shells (the first three are full: 2, 8, 8) and Group 1 means 1 electron in the 4th shell.",
            "Add the electrons in 2, 8, 8, 1.",
          ],
          solution: [
            "Period 4, Group 1 → electronic configuration is 2,8,8,1.",
            "Total electrons = protons = {{2 + 8 + 8 + 1 = 19}} (potassium, K).",
          ],
        },
        {
          id: "periodic-table-p1-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "Carbon-12 (atomic number 6, mass number 12) and carbon-14 (atomic number 6, mass number 14) are isotopes. Define 'isotope' and state the exact numbers of protons, neutrons, and electrons in BOTH neutral atoms. [3 marks]",
          marks: 3,
          hints: [
            "Define isotopes in terms of protons and neutrons.",
            "Give the proton, neutron, and electron counts for carbon-12.",
            "Give the proton, neutron, and electron counts for carbon-14.",
          ],
          modelAnswer:
            "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. Neutral carbon-12 has 6 protons, 6 electrons, and 6 neutrons. Neutral carbon-14 has 6 protons, 6 electrons, and 8 neutrons.",
          markScheme: [
            { point: "Isotopes have the same number of protons and different numbers of neutrons", keywords: ["same number of protons", "different number of neutrons", "different numbers of neutrons"] },
            { point: "Carbon-12 has 6 protons, 6 electrons, and 6 neutrons", keywords: ["6 neutrons", "six neutrons"] },
            { point: "Carbon-14 has 6 protons, 6 electrons, and 8 neutrons", keywords: ["8 neutrons", "eight neutrons"] },
          ],
          commonError: "Saying isotopes have different numbers of electrons — neutral isotopes always have identical electron counts!",
        },
        {
          id: "periodic-table-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mendeleev-layout",
          question: "Which historical discovery gave scientists the decisive proof that Mendeleev's 1869 Periodic Table was genuinely predictive?",
          options: [
            "The discovery of gallium and germanium matching his predicted properties",
            "The discovery that all solid elements melt at exactly 100 °C",
            "The invention of steel wires proving non-metals are malleable",
            "The discovery that sodium floats on oil and sinks in pure water",
          ],
          answerIndex: 0,
          hints: [
            "Think about the empty boxes Mendeleev left below aluminium and silicon.",
            "What happened when chemists discovered new elements in 1875 and 1886?",
          ],
          explanation:
            "When gallium (1875) and germanium (1886) were discovered with atomic masses, densities, and oxide formulae matching Mendeleev's predictions, the scientific community accepted his Periodic Table.",
        },
        {
          id: "periodic-table-p1-q06",
          kind: "written",
          difficulty: "core",
          guideRef: "mendeleev-layout",
          question: "Explain TWO ways Dmitri Mendeleev's 1869 Periodic Table improved on earlier attempts ordered strictly by atomic mass, and state how the modern Periodic Table is ordered instead. [3 marks]",
          marks: 3,
          hints: [
            "First explain why Mendeleev left blank spaces in his table.",
            "Second explain what he did when a pair like tellurium and iodine clashed with their group properties.",
            "Finally state the particle number used to order the modern table.",
          ],
          modelAnswer:
            "Mendeleev left gaps for undiscovered elements and accurately predicted their properties so known elements stayed lined up in matching chemical families. He also swapped a few pairs out of strict atomic mass order (such as tellurium and iodine) so elements with similar chemical properties sat in the same group. Today, elements are arranged strictly by increasing atomic number (proton number).",
          markScheme: [
            { point: "Left gaps for undiscovered elements and predicted their properties", keywords: ["gaps", "undiscovered", "predict"] },
            { point: "Swapped pairs (e.g., Te and I) to keep elements with similar chemical properties in the same group", keywords: ["swapped", "similar properties", "similar chemical"] },
            { point: "Modern Periodic Table is ordered by increasing atomic (proton) number", keywords: ["atomic number", "proton number"] },
          ],
          commonError: "Forgetting to explain WHY Mendeleev swapped pairs (to keep elements with similar chemical properties in the same vertical group).",
        },
        {
          id: "periodic-table-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mendeleev-layout",
          question: "Name the single metallic element that is a liquid at standard room temperature (20 °C).",
          answer: {
            type: "text",
            accept: ["mercury", "hg"],
            display: "mercury",
          },
          traps: [
            { spec: { type: "text", accept: ["bromine", "br", "br2"] }, feedback: "Bromine is a liquid NON-metal at 20 °C; the liquid METAL at 20 °C is mercury." },
          ],
          hints: [
            "Its chemical symbol is Hg, and it was traditionally used inside glass thermometers.",
          ],
          solution: [
            "**Mercury (Hg)** melts at −39 °C, making it the only metal that is liquid at 20 °C.",
          ],
        },
        {
          id: "periodic-table-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "When 1.4 g of lithium reacts completely with 50.0 g of water in an open conical flask, the remaining lithium hydroxide solution has a mass of 51.2 g. Calculate the mass of hydrogen gas (in g) that escaped.",
          answer: { type: "number", value: 0.2, display: "0.2" },
          traps: [
            { spec: { type: "number", value: 51.4 }, feedback: "51.4 g is the total starting mass (1.4 + 50.0) — now subtract the final flask mass (51.2 g)." },
          ],
          hints: [
            "Add the masses of lithium and water before the reaction: 1.4 + 50.0.",
            "Subtract the final mass (51.2 g) from the starting total using conservation of mass.",
          ],
          solution: [
            "Total reactant mass = {{1.4 + 50.0 = 51.4}} g.",
            "Mass of escaped H₂ = {{51.4 - 51.2 = 0.2}} g.",
          ],
        },
        {
          id: "periodic-table-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "What colour does universal indicator turn in water after a piece of sodium finishes reacting?",
          options: [
            "Bright red (strongly acidic)",
            "Pale green (neutral pH 7)",
            "Deep purple (strongly alkaline)",
            "Colourless (completely bleached)",
          ],
          answerIndex: 2,
          hints: [
            "Sodium + water produces sodium hydroxide (NaOH).",
            "Group 1 is called the ALKALI metals for a reason — what colour is universal indicator at pH 13–14?",
          ],
          explanation:
            "Sodium reacts with water to form sodium hydroxide (NaOH), a strong alkali with pH 13–14, which turns universal indicator deep purple/blue.",
        },
        {
          id: "periodic-table-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "In the balanced equation 2Na + Cl₂ → 2NaCl, how many sodium atoms are needed to react completely with 15 molecules of chlorine gas (Cl₂)?",
          answer: { type: "number", value: 30, display: "30" },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "Each Cl₂ molecule has TWO chlorine atoms and needs TWO sodium atoms (ratio 2 : 1)." },
          ],
          hints: [
            "Read the coefficient ratio of Na to Cl₂ in 2Na + Cl₂ → 2NaCl.",
            "Multiply 15 by 2.",
          ],
          solution: [
            "Every 1 Cl₂ molecule reacts with 2 Na atoms.",
            "For 15 Cl₂ molecules: {{15 * 2 = 30}} Na atoms.",
          ],
        },
        {
          id: "periodic-table-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "Explain, in terms of electron shells and electrostatic forces, why potassium reacts much more vigorously with water than lithium. [3 marks]",
          marks: 3,
          hints: [
            "Compare the number of electron shells and size of a potassium atom (2,8,8,1) versus a lithium atom (2,1).",
            "Describe how greater distance and inner-shell shielding affect the pull from the positive nucleus.",
            "Conclude whether potassium's single outer electron is lost more easily or less easily.",
          ],
          modelAnswer:
            "Potassium has more electron shells (4 shells vs 2 in lithium), making it a larger atom with more inner-shell shielding. Therefore, potassium's single outer electron is further from the positive nucleus and experiences a weaker electrostatic attraction. As a result, potassium loses its outer electron much more easily than lithium.",
          markScheme: [
            { point: "Potassium has more electron shells / larger atom / outer electron further from nucleus", keywords: ["more shells", "further", "larger", "shielding"] },
            { point: "Weaker electrostatic attraction between positive nucleus and outer electron", keywords: ["weaker", "attraction", "less strongly", "less tightly"] },
            { point: "Outer electron is lost more easily", keywords: ["lost more easily", "easier to lose", "loses its outer electron"] },
          ],
          commonError: "Writing that potassium 'gains an electron more easily' — alkali metals LOSE their 1 outer electron!",
        },
        {
          id: "periodic-table-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Chlorine melts at −101 °C and boils at −35 °C. What is the width (in °C) of the temperature range over which chlorine exists as a liquid?",
          answer: { type: "number", value: 66, display: "66" },
          traps: [
            { spec: { type: "number", value: 136 }, feedback: "Both temperatures are negative! Compute (−35) − (−101) = −35 + 101 = 66 °C." },
            { spec: { type: "number", value: -66 }, feedback: "A temperature range width is positive: boiling point minus melting point = (−35) − (−101) = 66 °C." },
          ],
          hints: [
            "Liquid range = boiling point − melting point = (−35) − (−101).",
            "Subtracting a negative number is the same as adding: −35 + 101.",
          ],
          solution: [
            "Liquid temperature range = {{(-35) - (-101) = 101 - 35 = 66}} °C.",
          ],
        },
        {
          id: "periodic-table-p1-q13",
          kind: "short",
          difficulty: "warmup",
          guideRef: "group7-group0",
          question: "What single word describes elements like Cl₂, Br₂, and I₂ whose molecules consist of pairs of two bonded atoms?",
          answer: {
            type: "text",
            accept: ["diatomic", "diatomic molecules"],
            display: "diatomic",
          },
          traps: [
            { spec: { type: "text", accept: ["monatomic", "monoatomic"] }, feedback: "Monatomic means single atoms (Group 0 noble gases); pairs of two atoms are diatomic." },
          ],
          hints: [
            "The prefix 'di-' means two (like carbon dioxide).",
          ],
          solution: [
            "Halogens exist as **diatomic** molecules (two atoms covalently bonded together).",
          ],
        },
        {
          id: "periodic-table-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Which halogen displacement mixture will turn a colourless salt solution orange-brown?",
          options: [
            "Bromine water added to sodium chloride solution",
            "Iodine solution added to potassium bromide solution",
            "Chlorine water added to potassium bromide solution",
            "Argon gas bubbled through potassium iodide solution",
          ],
          answerIndex: 2,
          hints: [
            "Only a MORE reactive halogen displaces a less reactive halide ion.",
            "Orange-brown aqueous colour indicates displaced bromine (Br₂).",
          ],
          explanation:
            "Chlorine is more reactive than bromine, so Cl₂ + 2KBr → 2KCl + Br₂ releases aqueous bromine, turning the colourless solution orange-brown.",
        },
        {
          id: "periodic-table-p1-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Neon (atomic number 10) sits in Group 0 and Period 2. Write the electronic configuration of a neutral neon atom, separated by commas.",
          answer: {
            type: "text",
            accept: ["2,8", "2.8", "2-8"],
            display: "2,8",
          },
          hints: [
            "Place 2 electrons in shell 1 and the rest in shell 2.",
            "Check that both shells are completely full and sum to 10.",
          ],
          solution: [
            "10 electrons fill shell 1 (2) and shell 2 (8) → **2,8** (a full outer shell, making neon inert).",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2 (15 questions: 9 short, 3 mcq, 3 written)
    // -----------------------------------------------------------------------
    {
      id: "periodic-table-p2",
      title: "Practice Paper 2 — Group Trends, Displacements & Properties",
      questions: [
        {
          id: "periodic-table-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "A neutral atom of silicon has 14 protons and 14 neutrons. What is its mass number?",
          answer: { type: "number", value: 28, display: "28" },
          traps: [
            { spec: { type: "number", value: 42 }, feedback: "Electrons have negligible mass — mass number counts ONLY protons + neutrons (14 + 14)." },
          ],
          hints: [
            "Mass number = number of protons + number of neutrons.",
            "Add 14 + 14.",
          ],
          solution: [
            "Mass number = protons + neutrons = {{14 + 14 = 28}}.",
          ],
        },
        {
          id: "periodic-table-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "How many electrons does a fluoride ion (F⁻) have, given that a neutral fluorine atom has atomic number 9?",
          answer: { type: "number", value: 10, display: "10" },
          traps: [
            { spec: { type: "number", value: 8 }, feedback: "Careful! Electrons are NEGATIVE, so gaining a −1 charge means GAINING 1 electron (9 + 1 = 10), not losing one." },
            { spec: { type: "number", value: 9 }, feedback: "9 electrons belong to a NEUTRAL fluorine atom; F⁻ has gained 1 extra electron." },
          ],
          hints: [
            "Each electron has a −1 charge, so a 1− ion has 1 MORE electron than protons.",
            "Add 1 to fluorine's atomic number 9.",
          ],
          solution: [
            "Neutral F has 9 electrons (2,7). Gaining 1 electron gives F⁻ with {{9 + 1 = 10}} electrons (full shell 2,8).",
          ],
        },
        {
          id: "periodic-table-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "atomic-structure-shells",
          question: "Which electronic configuration belongs to a neutral Group 2 alkaline-earth metal?",
          options: [
            "2, 8, 1",
            "2, 8, 2",
            "2, 8, 7",
            "2, 8, 8",
          ],
          answerIndex: 1,
          hints: [
            "Group 2 metals have 2 electrons in their outermost shell (except helium, 2, which is Group 0).",
            "Look at the final number in each configuration.",
          ],
          explanation:
            "2,8,2 has 2 outer electrons in its 3rd shell — magnesium (Z = 12), a Group 2 metal. 2,8,1 is Group 1 (Na), 2,8,7 is Group 7 (Cl), and 2,8,8 is Group 0 (Ar).",
        },
        {
          id: "periodic-table-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "mendeleev-layout",
          question: "Using the midpoint between calcium (atomic mass 40) and barium (atomic mass 137) in Group 2, estimate the atomic mass of strontium to 1 decimal place.",
          answer: { type: "number", value: 88.5, display: "88.5" },
          hints: [
            "Add the two neighbouring atomic masses (40 + 137) and divide by 2.",
            "Compute 177 ÷ 2 carefully.",
          ],
          solution: [
            "Estimated atomic mass = {{(40 + 137) / 2 = 177 / 2 = 88.5}} (actual relative atomic mass of strontium is 87.6!).",
          ],
        },
        {
          id: "periodic-table-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mendeleev-layout",
          question: "What single property word describes metals that can be hammered or rolled into thin flat sheets without shattering?",
          answer: {
            type: "text",
            accept: ["malleable", "malleability"],
            display: "malleable",
          },
          traps: [
            { spec: { type: "text", accept: ["ductile", "ductility"] }, feedback: "Ductile means drawn into thin WIRES; hammered into thin SHEETS is malleable." },
            { spec: { type: "text", accept: ["brittle"] }, feedback: "Brittle materials shatter when hammered (typical of solid non-metals)." },
          ],
          hints: [
            "Think of the Latin root 'malleus' meaning hammer (mallet).",
          ],
          solution: [
            "Metals are **malleable** — layers of metal ions can slide over one another into flat sheets without breaking.",
          ],
        },
        {
          id: "periodic-table-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "Lithium melts at 181 °C, sodium at 98 °C, and potassium at 63 °C. By how many °C does the melting point drop from lithium to potassium?",
          answer: { type: "number", value: 118, display: "118" },
          hints: [
            "Subtract potassium's melting point (63 °C) from lithium's melting point (181 °C).",
            "Calculate 181 − 63.",
          ],
          solution: [
            "Drop in melting point = {{181 - 63 = 118}} °C.",
          ],
        },
        {
          id: "periodic-table-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "Why do freshly cut cubes of lithium, sodium, and potassium turn dull grey within seconds when left out on a lab bench?",
          options: [
            "They react with nitrogen gas to turn into liquid noble gases",
            "They evaporate completely into purple vapour at room temperature",
            "They react rapidly with oxygen in air to form a metal oxide coat",
            "They absorb carbon dioxide to turn instantly into brittle sulfur",
          ],
          answerIndex: 2,
          hints: [
            "Fresh Group 1 surfaces are shiny silver, but air contains reactive oxygen gas.",
            "What compound forms when a metal reacts with oxygen in air?",
          ],
          explanation:
            "Alkali metals tarnish rapidly on exposure to air because their surface atoms react with oxygen to form a dull layer of solid metal oxide (e.g., 4Na + O₂ → 2Na₂O).",
        },
        {
          id: "periodic-table-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "group1-alkali-metals",
          question: "When 7.8 g of potassium reacts with 7.1 g of chlorine gas in a sealed jar (2K + Cl₂ → 2KCl), what mass (in g) of white potassium chloride is formed?",
          answer: { type: "number", value: 14.9, display: "14.9" },
          hints: [
            "Use the Law of Conservation of Mass: total product mass = sum of reactant masses.",
            "Add 7.8 + 7.1.",
          ],
          solution: [
            "Mass of KCl = {{7.8 + 7.1 = 14.9}} g.",
          ],
        },
        {
          id: "periodic-table-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Bromine has a melting point of −7 °C and a boiling point of 59 °C. What is the physical state of bromine at 75 °C?",
          answer: {
            type: "text",
            accept: ["gas", "a gas", "vapour", "vapor"],
            display: "gas",
          },
          traps: [
            { spec: { type: "text", accept: ["liquid", "a liquid"] }, feedback: "Bromine is liquid at 20 °C, but 75 °C is ABOVE its boiling point of 59 °C!" },
          ],
          hints: [
            "Compare 75 °C with bromine's boiling point (59 °C).",
            "Any substance heated above its boiling point exists as a gas.",
          ],
          solution: [
            "Because 75 °C > 59 °C (boiling point), bromine is a **gas** at 75 °C.",
          ],
        },
        {
          id: "periodic-table-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "In the halogen displacement equation Cl₂ + 2KBr → 2KCl + Br₂, how many total potassium bromide (KBr) formula units react with 9 molecules of Cl₂?",
          answer: { type: "number", value: 18, display: "18" },
          traps: [
            { spec: { type: "number", value: 9 }, feedback: "Look at the balancing number 2 in front of KBr: every 1 Cl₂ reacts with 2 KBr." },
          ],
          hints: [
            "Check the ratio between Cl₂ and KBr in the balanced equation (1 : 2).",
            "Multiply 9 by 2.",
          ],
          solution: [
            "Each 1 molecule of Cl₂ reacts with 2 units of KBr → {{9 * 2 = 18}} KBr units.",
          ],
        },
        {
          id: "periodic-table-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Explain why fluorine (2,7) is much more reactive than bromine (2,8,18,7) in terms of atomic structure and electron gain. [3 marks]",
          marks: 3,
          hints: [
            "State whether Group 7 halogens react by losing or gaining 1 electron.",
            "Compare the size/number of shells of fluorine versus bromine.",
            "Connect distance & shielding to electrostatic attraction for an incoming electron.",
          ],
          modelAnswer:
            "Halogens react by gaining 1 electron to fill their outer shell. Fluorine is a smaller atom with fewer electron shells and less shielding than bromine, so its outer shell is closer to the positive nucleus. This creates a stronger electrostatic attraction for an incoming electron, making it much easier for fluorine to gain an electron.",
          markScheme: [
            { point: "Halogens react by gaining 1 electron into their outer shell", keywords: ["gain", "gaining"] },
            { point: "Fluorine has fewer shells / smaller atom / outer shell closer to nucleus / less shielding", keywords: ["smaller", "fewer shells", "closer", "less shielding"] },
            { point: "Stronger electrostatic attraction pulls an incoming electron in more easily", keywords: ["stronger", "attraction", "easier"] },
          ],
          commonError: "Confusing Group 7 with Group 1 and writing that halogens 'lose an outer electron'.",
        },
        {
          id: "periodic-table-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Why do boiling points increase going down Group 7 (F₂ → Cl₂ → Br₂ → I₂) and down Group 0 (He → Ne → Ar → Kr)?",
          options: [
            "Atoms and molecules get larger, so intermolecular forces get stronger",
            "Outer shells hold fewer electrons, creating ionic bonds between gases",
            "Metallic bonding strengthens as proton numbers decrease down groups",
            "Smaller atoms always require extra thermal energy to break covalent bonds",
          ],
          answerIndex: 0,
          hints: [
            "Boiling simple molecular halogens or monatomic noble gases overcomes forces BETWEEN molecules/atoms, NOT covalent bonds inside them.",
            "How do intermolecular forces change as relative mass/size grows down a group?",
          ],
          explanation:
            "Down both Group 7 and Group 0, particles become larger and heavier, so intermolecular forces between neighbouring molecules/atoms increase and need more heat energy to overcome when boiling.",
        },
        {
          id: "periodic-table-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "Explain why Group 0 noble gases such as neon and argon are chemically unreactive, and link this property to ONE everyday use of either helium or argon. [3 marks]",
          marks: 3,
          hints: [
            "Describe the arrangement of electrons in the outer shell of Group 0 atoms.",
            "Explain what that full shell means for losing, gaining, or sharing electrons.",
            "Give a concrete use (e.g., helium in balloons/airships or argon in filament bulbs/welding) and WHY inertness matters there.",
          ],
          modelAnswer:
            "Group 0 noble gases already have a full outer shell of electrons (such as 2 for helium, 2,8 for neon, and 2,8,8 for argon), so they are stable and do not easily lose, gain, or share electrons. Because argon is inert, it is used inside filament light bulbs and arc welding to create an unreactive atmosphere that stops hot metal reacting with oxygen (or helium is used in airships because it has low density and is non-flammable).",
          markScheme: [
            { point: "Atoms already have a full outer shell of electrons", keywords: ["full outer shell", "complete outer shell", "full shell"] },
            { point: "Stable — do not easily lose, gain, or share electrons", keywords: ["do not", "don't", "stable", "gain", "lose", "share"] },
            { point: "Valid use (helium in balloons/airships because non-flammable, OR argon in bulbs/welding to prevent oxidation)", keywords: ["balloon", "airship", "non-flammable", "bulb", "filament", "welding", "oxygen", "oxid"] },
          ],
          commonError: "Saying 'all noble gases have 8 outer electrons' — remember helium only has 2 electrons (a full 1st shell)!",
        },
        {
          id: "periodic-table-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "How many TOTAL electrons are present in a single diatomic molecule of chlorine (Cl₂), given that one chlorine atom has atomic number 17?",
          answer: { type: "number", value: 34, display: "34" },
          traps: [
            { spec: { type: "number", value: 17 }, feedback: "17 electrons belong to ONE Cl atom — a diatomic Cl₂ molecule contains TWO chlorine atoms!" },
          ],
          hints: [
            "Cl₂ contains 2 chlorine atoms bonded together.",
            "Multiply 17 electrons per atom by 2.",
          ],
          solution: [
            "Each Cl atom has 17 electrons, so Cl₂ contains {{2 * 17 = 34}} electrons.",
          ],
        },
        {
          id: "periodic-table-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "group7-group0",
          question: "A student adds pale green chlorine water to colourless potassium iodide (KI) solution in Tube A, and adds brown aqueous iodine to colourless potassium chloride (KCl) solution in Tube B. Predict what is observed in EACH tube and explain both outcomes. [4 marks]",
          marks: 4,
          hints: [
            "Compare the positions of chlorine and iodine in Group 7 to see which is more reactive.",
            "State the colour change and reaction in Tube A (Cl₂ + 2KI).",
            "State whether any reaction happens in Tube B (I₂ + KCl) and explain why.",
          ],
          modelAnswer:
            "In Tube A, the colourless solution turns brown because chlorine is more reactive than iodine, so chlorine displaces iodine from potassium iodide to form potassium chloride and aqueous iodine (Cl₂ + 2KI → 2KCl + I₂). In Tube B, there is no reaction (the solution simply remains the colour of the added iodine) because iodine is less reactive than chlorine and cannot displace chloride ions from potassium chloride.",
          markScheme: [
            { point: "Tube A turns brown (aqueous iodine formed)", keywords: ["turns brown", "brown", "dark brown", "orange-brown"] },
            { point: "Chlorine is more reactive than iodine so it displaces iodine from KI", keywords: ["more reactive", "displaces iodine", "displace"] },
            { point: "Tube B shows no reaction", keywords: ["no reaction", "does not react", "doesn't react"] },
            { point: "Iodine is less reactive than chlorine so it cannot displace chloride ions", keywords: ["less reactive", "cannot displace", "can't displace"] },
          ],
          commonError: "Predicting a displacement in BOTH tubes — displacement only works in the downward direction of Group 7 (more reactive displaces less reactive).",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard problems, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "periodic-table-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "atomic-structure-shells",
      strategy: "Use weighted average for isotope relative atomic mass",
      question: "A sample of boron consists of 20% boron-10 (¹⁰B) and 80% boron-11 (¹¹B). Calculate the relative atomic mass (Aᵣ) of boron to 1 decimal place.",
      answer: { type: "number", value: 10.8, display: "10.8" },
      traps: [
        { spec: { type: "number", value: 10.5 }, feedback: "10.5 assumes an equal 50/50 split — weight ¹⁰B by 20% and ¹¹B by 80%!" },
        { spec: { type: "number", value: 10.2 }, feedback: "You swapped the percentages (80% of 10 and 20% of 11). Since 80% is boron-11, the answer must lie closer to 11." },
      ],
      hints: [
        "Use Aᵣ = ((%₁ × mass₁) + (%₂ × mass₂)) ÷ 100.",
        "Compute (20 × 10) + (80 × 11) = 200 + 880 = 1080.",
        "Divide 1080 by 100.",
      ],
      solution: [
        "Weighted sum = {{20 * 10 + 80 * 11 = 200 + 880 = 1080}}.",
        "Relative atomic mass Aᵣ = {{1080 / 100 = 10.8}}.",
      ],
    },
    {
      id: "periodic-table-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "atomic-structure-shells",
      strategy: "Combine Period, Group, and neutron-excess clues",
      question: "A neutral atom of Element X is in Period 3 and Group 7. Its nucleus contains 3 more neutrons than protons. Calculate the mass number of this specific isotope of Element X.",
      answer: { type: "number", value: 37, display: "37" },
      traps: [
        { spec: { type: "number", value: 35 }, feedback: "Chlorine-35 has 18 neutrons (only 1 more than 17 protons). Re-read: this isotope has 3 MORE neutrons than protons!" },
        { spec: { type: "number", value: 20 }, feedback: "20 is the number of neutrons (17 + 3) — now add the 17 protons to find the mass number." },
      ],
      hints: [
        "Period 3, Group 7 → electronic configuration is 2,8,7.",
        "Sum the electrons (2 + 8 + 7 = 17) to find the number of protons.",
        "Neutrons = 17 + 3 = 20. Mass number = protons + neutrons.",
      ],
      solution: [
        "Period 3, Group 7 gives configuration 2,8,7 → 17 electrons and **17 protons** (chlorine).",
        "Neutrons = {{17 + 3 = 20}}.",
        "Mass number = {{17 + 20 = 37}} (chlorine-37).",
      ],
    },
    {
      id: "periodic-table-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "atomic-structure-shells",
      strategy: "Track electrons carefully in positive and negative ions",
      question: "A sulfide ion (S²⁻, atomic number 16) and a calcium ion (Ca²⁺, atomic number 20) both have the exact same number of electrons as a neutral argon atom. How many electrons does each of these ions contain?",
      answer: { type: "number", value: 18, display: "18" },
      traps: [
        { spec: { type: "number", value: 14 }, feedback: "S²⁻ has a NEGATIVE 2− charge, meaning it GAINED 2 electrons (16 + 2 = 18), not lost 2." },
        { spec: { type: "number", value: 22 }, feedback: "Ca²⁺ has a POSITIVE 2+ charge, meaning it LOST 2 electrons (20 − 2 = 18), not gained 2." },
      ],
      hints: [
        "S²⁻ has gained 2 electrons from sulfur's neutral 16.",
        "Ca²⁺ has lost 2 electrons from calcium's neutral 20.",
        "Verify that both calculations land on argon's atomic number!",
      ],
      solution: [
        "Sulfur (Z = 16) gains 2 electrons → {{16 + 2 = 18}} electrons (2,8,8).",
        "Calcium (Z = 20) loses 2 electrons → {{20 - 2 = 18}} electrons (2,8,8), matching argon (Z = 18).",
      ],
    },
    {
      id: "periodic-table-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "group7-group0",
      strategy: "Contrast electron loss vs electron gain under the same radius trend",
      question: "Going down BOTH Group 1 and Group 7, atoms increase in size and have more electron shells. Explain why reactivity INCREASES down Group 1 yet DECREASES down Group 7. [4 marks]",
      marks: 4,
      hints: [
        "State what Group 1 atoms do to their outer shell during reactions vs what Group 7 atoms do.",
        "Explain how more shells, greater distance, and shielding affect the electrostatic pull from the nucleus in BOTH groups.",
        "Connect weaker nuclear attraction to losing 1 electron more easily (Group 1) versus gaining 1 electron less easily (Group 7).",
      ],
      modelAnswer:
        "Going down both groups, atoms gain more electron shells, so the outer shell is further from the positive nucleus with greater inner-shell shielding, weakening electrostatic attraction. Group 1 alkali metals react by losing 1 outer electron, so weaker attraction makes it easier to lose that electron and reactivity increases down the group. In contrast, Group 7 halogens react by gaining 1 electron into their outer shell, so weaker attraction makes it harder to attract an incoming electron and reactivity decreases down the group.",
      markScheme: [
        { point: "Down both groups, more shells put outer shell further from nucleus with more shielding → weaker electrostatic attraction", keywords: ["more shells", "further", "shielding", "weaker"] },
        { point: "Group 1 atoms react by losing 1 outer electron", keywords: ["lose", "losing"] },
        { point: "Group 7 atoms react by gaining 1 electron into their outer shell", keywords: ["gain", "gaining"] },
        { point: "Weaker attraction makes electron loss easier (Group 1 ↑) but electron gain harder (Group 7 ↓)", keywords: ["easier", "harder"] },
      ],
      commonError: "Explaining only ONE group instead of explicitly contrasting losing (Group 1) against gaining (Group 7).",
    },
    {
      id: "periodic-table-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "group7-group0",
      strategy: "Deduce reactivity order from a 3-halogen displacement table",
      question: "A chemist discovers three unknown halogens X₂, Y₂, and Z₂ and runs displacement tests with their aqueous sodium salts NaX, NaY, and NaZ:\n\n- X₂ reacts with BOTH NaY and NaZ.\n- Z₂ reacts with NaY, but shows NO reaction with NaX.\n- Y₂ shows NO reaction with either NaX or NaZ.\n\nWhich order lists these three halogens from TOP (most reactive) to BOTTOM (least reactive) in Group 7?",
      options: [
        "X₂ → Z₂ → Y₂",
        "Z₂ → X₂ → Y₂",
        "Y₂ → Z₂ → X₂",
        "X₂ → Y₂ → Z₂",
      ],
      answerIndex: 0,
      hints: [
        "The most reactive halogen (at the top of Group 7) displaces ALL the others.",
        "X₂ displaced both Y and Z, so X₂ must be at the very top.",
        "Between Z₂ and Y₂, Z₂ displaced Y from NaY — so Z₂ is more reactive than Y₂.",
      ],
      explanation:
        "X₂ displaces both Y and Z (most reactive, top), Z₂ displaces Y only (middle), and Y₂ displaces neither (least reactive, bottom) → order from top to bottom is X₂ → Z₂ → Y₂.",
    },
    {
      id: "periodic-table-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "mendeleev-layout",
      strategy: "Link isotopes to historical mass-order anomalies",
      question: "Argon has atomic number 18 and relative atomic mass 39.9, whereas potassium has atomic number 19 and relative atomic mass 39.1. Explain (a) why ordering strictly by atomic mass would place these two elements in the wrong chemical groups, and (b) how isotopes explain why argon atoms have a higher average mass despite having fewer protons. [4 marks]",
      marks: 4,
      hints: [
        "State which chemical groups argon (2,8,8) and potassium (2,8,8,1) belong in based on their reactions.",
        "Explain what would happen if mass order swapped them (inert gas in Group 1, reactive alkali metal in Group 0!).",
        "Explain the mass paradox using neutron counts in argon's main isotope (argon-40 has 22 neutrons vs potassium-39 with 20 neutrons).",
      ],
      modelAnswer:
        "Ordering strictly by atomic mass would place reactive potassium (39.1) in Group 0 with the unreactive noble gases and inert argon (39.9) in Group 1 with the reactive alkali metals, contradicting their chemical properties and electronic configurations (Ar 2,8,8 vs K 2,8,8,1). Argon has a higher average mass despite having 1 fewer proton because its most abundant natural isotope (argon-40) contains more neutrons (22 neutrons) than potassium's most abundant isotope (potassium-39, with 20 neutrons). Ordering the modern Periodic Table by atomic number (proton number) places both in the right groups.",
      markScheme: [
        { point: "Mass order would wrongly put reactive potassium in Group 0 and inert argon in Group 1", keywords: ["group 0", "group 1", "noble gas", "alkali metal", "wrong group"] },
        { point: "Argon has full outer shell (2,8,8) while potassium has 1 outer electron (2,8,8,1)", keywords: ["2,8,8", "full outer shell", "1 outer", "one outer"] },
        { point: "Argon's main isotope has more neutrons than potassium's main isotope", keywords: ["isotope", "more neutrons", "22 neutrons"] },
        { point: "Modern table orders by atomic (proton) number to solve this", keywords: ["proton number", "atomic number"] },
      ],
      commonError: "Claiming argon has 'more protons' than potassium — argon has 18 protons and potassium has 19; the extra mass comes strictly from NEUTRONS!",
    },
    {
      id: "periodic-table-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "group1-alkali-metals",
      strategy: "Track ratio of atoms in a Group 1 + oxygen equation",
      question: "Potassium burns in oxygen to form white solid potassium oxide according to the balanced equation `4K + O₂ → 2K₂O`. How many potassium atoms are required to react completely with 18 molecules of oxygen gas (O₂)?",
      answer: { type: "number", value: 72, display: "72" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "Look closely at the balanced equation: 4 K atoms react with 1 O₂ molecule (a 4 : 1 ratio, not 2 : 1!)." },
      ],
      hints: [
        "Read the balancing coefficients: 4 K atoms react with every 1 O₂ molecule.",
        "Multiply 18 molecules of O₂ by 4.",
      ],
      solution: [
        "Ratio of K : O₂ is 4 : 1.",
        "For 18 molecules of O₂: {{18 * 4 = 72}} potassium atoms.",
      ],
    },
    {
      id: "periodic-table-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "group7-group0",
      strategy: "Compute liquid range and extrapolate halogen trend",
      question: "The boiling points of the first four halogens are F₂ (−188 °C), Cl₂ (−35 °C), Br₂ (59 °C), and I₂ (184 °C). By how many °C is the boiling point of iodine higher than the boiling point of chlorine?",
      answer: { type: "number", value: 219, display: "219" },
      traps: [
        { spec: { type: "number", value: 149 }, feedback: "Watch the negative sign! Chlorine boils at −35 °C (below zero), so 184 − (−35) = 184 + 35 = 219 °C." },
      ],
      hints: [
        "Difference = boiling point of iodine − boiling point of chlorine = 184 − (−35).",
        "Remember that subtracting a negative number adds its magnitude: 184 + 35.",
      ],
      solution: [
        "Difference = {{184 - (-35) = 184 + 35 = 219}} °C.",
      ],
    },
  ],
};
