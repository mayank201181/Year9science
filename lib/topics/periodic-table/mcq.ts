import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Atomic Structure, Shells & Mendeleev (15 MCQs)
  // =========================================================================
  {
    id: "periodic-table-m1",
    title: "MCQ Paper 1 — Subatomic Particles, Shells & Mendeleev",
    questions: [
      {
        id: "periodic-table-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "atomic-structure-shells",
        question: "Which row correctly matches the relative mass and relative charge of a neutron?",
        options: [
          "Relative mass 1, relative charge +1",
          "Relative mass 1, relative charge 0",
          "Relative mass negligible, relative charge −1",
          "Relative mass negligible, relative charge 0",
        ],
        answerIndex: 1,
        hints: [
          "Neutrons sit in the nucleus alongside protons, so they have mass 1 — and 'neutron' sounds like 'neutral'!",
        ],
        explanation:
          "A neutron sits in the nucleus with a relative mass of 1 and a relative charge of 0 (electrically neutral). Protons have mass 1 and charge +1; electrons have negligible mass and charge −1.",
      },
      {
        id: "periodic-table-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "atomic-structure-shells",
        question: "An atom of aluminium has atomic number 13 and mass number 27. How many protons, neutrons, and electrons does a neutral aluminium atom contain?",
        options: [
          "13 protons, 27 neutrons, 13 electrons",
          "14 protons, 13 neutrons, 14 electrons",
          "27 protons, 13 neutrons, 27 electrons",
          "13 protons, 14 neutrons, 13 electrons",
        ],
        answerIndex: 3,
        hints: [
          "Atomic number = protons (= electrons in a neutral atom).",
          "Neutrons = mass number − atomic number = 27 − 13.",
        ],
        explanation:
          "Atomic number 13 gives 13 protons and 13 electrons. Neutrons = mass number − atomic number = 27 − 13 = 14 neutrons.",
      },
      {
        id: "periodic-table-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "What makes carbon-12 and carbon-14 isotopes of the same element?",
        options: [
          "Same number of protons, different number of neutrons",
          "Same number of neutrons, different number of protons",
          "Same mass number, different number of electrons",
          "Different atomic number, same number of outer shells",
        ],
        answerIndex: 0,
        hints: [
          "Both atoms are carbon, so which subatomic particle MUST stay fixed at 6?",
          "Mass number equals protons + neutrons — so if mass changes from 12 to 14, which particle changed?",
        ],
        explanation:
          "Isotopes are atoms of the same element with identical proton numbers (6 for carbon) but different neutron numbers (6 in carbon-12 vs 8 in carbon-14).",
      },
      {
        id: "periodic-table-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "What is the correct electronic configuration of a neutral potassium atom (atomic number 19)?",
        options: [
          "2, 8, 9",
          "2, 9, 8",
          "2, 8, 8, 1",
          "2, 8, 7, 2",
        ],
        answerIndex: 2,
        hints: [
          "Remember the shell filling pattern for the first 20 elements: 2, 8, 8, 2.",
          "Check the sum (2 + 8 + 8 + 1 = 19) and remember potassium is in Group 1, Period 4.",
        ],
        explanation:
          "Shell capacities up to calcium are 2, 8, 8, 2. Placing 19 electrons gives 2,8,8,1 — placing potassium in Group 1 (1 outer electron) and Period 4 (4 occupied shells).",
      },
      {
        id: "periodic-table-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "Element Z has the electronic configuration 2, 8, 5. Where does Element Z sit in the Periodic Table?",
        options: [
          "Period 5, Group 3",
          "Period 3, Group 5",
          "Period 8, Group 5",
          "Period 3, Group 2",
        ],
        answerIndex: 1,
        hints: [
          "Count how many numbers (occupied shells) appear in 2, 8, 5 to find the Period.",
          "Read the last number (outer-shell electrons) to find the Group.",
        ],
        explanation:
          "2,8,5 has 3 occupied shells (Period 3) and 5 electrons in its outer shell (Group 5) — which is phosphorus (atomic number 15).",
      },
      {
        id: "periodic-table-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "Why is helium (electronic configuration 2) placed in Group 0 rather than Group 2?",
        options: [
          "Its first shell is completely full, making it chemically inert",
          "It is a metallic solid that loses two electrons easily in water",
          "It contains zero protons and two neutrons inside its nucleus",
          "Its two electrons occupy the third energy shell instead of the first",
        ],
        answerIndex: 0,
        hints: [
          "What is the maximum capacity of the very first electron shell?",
          "Atoms with a completely full outer shell behave like the unreactive noble gases.",
        ],
        explanation:
          "Because the first shell holds at most 2 electrons, helium's outer shell is already completely full. Like neon (2,8) and argon (2,8,8), helium is an unreactive Group 0 noble gas.",
      },
      {
        id: "periodic-table-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "Why did Dmitri Mendeleev leave empty spaces in his 1869 Periodic Table?",
        options: [
          "He ran out of space on his chart for the heavy transition metals",
          "He wanted to separate metals cleanly from liquid noble gases",
          "He mistakenly deleted elements whose names were not yet agreed",
          "He predicted undiscovered elements belonged in those exact gaps",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happened when gallium (1875) and germanium (1886) were later discovered.",
          "Mendeleev prioritized keeping elements with matching chemical properties in the same vertical group.",
        ],
        explanation:
          "Mendeleev left gaps for undiscovered elements so known elements stayed aligned by chemical properties, and he accurately predicted the properties of missing elements like gallium and germanium.",
      },
      {
        id: "periodic-table-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "Mendeleev ordered elements by atomic mass, yet swapped tellurium (mass 128) and iodine (mass 127). What later scientific discovery explained why this swap was right?",
        options: [
          "Tellurium and iodine are both inert monatomic Group 0 gases",
          "Iodine is actually a shiny solid metal that forms basic oxides",
          "Elements are truly ordered by proton number and isotopes affect mass",
          "Atomic mass increases randomly whenever elements are heated up",
        ],
        answerIndex: 2,
        hints: [
          "Tellurium has 52 protons while iodine has 53 protons.",
          "What causes an element with fewer protons to have a higher average atomic mass?",
        ],
        explanation:
          "The modern Periodic Table orders elements by atomic (proton) number. Tellurium (52 protons) has heavier abundant isotopes than iodine (53 protons), so ordering by proton number automatically puts iodine in Group 7.",
      },
      {
        id: "periodic-table-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mendeleev-layout",
        question: "Where are the non-metallic elements mainly located on the modern Periodic Table?",
        options: [
          "Along the bottom row and far left column",
          "Clustered in the top-right corner above the stepped line",
          "Packed strictly inside the central transition-metal block",
          "Spread evenly along Groups 1 and 2 on the far left",
        ],
        answerIndex: 1,
        hints: [
          "Picture the diagonal staircase starting near boron and aluminium.",
        ],
        explanation:
          "Metals occupy the left and centre of the Periodic Table (around three-quarters of all elements), while non-metals sit in the upper-right section to the right of the stepped line (plus hydrogen).",
      },
      {
        id: "periodic-table-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "Which non-metal is a famous exception to typical non-metal properties because it conducts electricity well?",
        options: [
          "Solid sulfur",
          "Solid iodine",
          "Liquid bromine",
          "Carbon as graphite",
        ],
        answerIndex: 3,
        hints: [
          "Think of the slippery dark-grey material used inside pencil leads and electrolysis electrodes.",
          "It is an allotrope of carbon with delocalised electrons between layers.",
        ],
        explanation:
          "Graphite (a form of carbon) is a non-metal that conducts electricity because each carbon atom bonds to three others, leaving delocalised electrons free to carry charge.",
      },
      {
        id: "periodic-table-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "An unknown shiny solid bends when hammered, conducts heat well, and burns in oxygen to form an oxide that turns universal indicator purple in water. How should it be classified?",
        options: [
          "A metal forming a basic oxide",
          "A non-metal forming an acidic oxide",
          "A noble gas with a full outer shell",
          "A halogen forming a diatomic liquid",
        ],
        answerIndex: 0,
        hints: [
          "Check each clue: shiny, malleable (bends when hammered), good conductor, and oxide gives alkaline purple (pH > 7).",
          "Which broad side of the Periodic Table forms basic/alkaline oxides?",
        ],
        explanation:
          "Lustre, malleability, thermal conductivity, and forming a basic/alkaline oxide (pH > 7, purple universal indicator) are hallmark properties of metals.",
      },
      {
        id: "periodic-table-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "Why is an uncombined atom electrically neutral overall?",
        options: [
          "Neutrons cancel out the mass of all electrons in outer shells",
          "The nucleus contains zero charged particles when uncombined",
          "It contains equal numbers of positive protons and negative electrons",
          "All electrons remain permanently locked inside the dense nucleus",
        ],
        answerIndex: 2,
        hints: [
          "Look at the charges of the three subatomic particles: +1, 0, and −1.",
          "When does total charge add up to exactly 0?",
        ],
        explanation:
          "In a neutral atom, the number of positively charged protons (+1 each) equals the number of negatively charged electrons (−1 each), so the charges cancel completely.",
      },
      {
        id: "periodic-table-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "Why are Group 1 alkali metals like sodium and potassium stored submerged under paraffin oil in school laboratories?",
        options: [
          "To lower their melting points before cutting them with a knife",
          "To prevent their atoms losing neutrons during warm weather",
          "To stop them dissolving rapidly into solid glass storage jars",
          "To keep oxygen and water vapour away from their reactive surfaces",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens to freshly cut sodium in air or if moisture touches it.",
          "Oil forms a waterproof, airtight barrier.",
        ],
        explanation:
          "Alkali metals tarnish rapidly in oxygen and react dangerously with water vapour in air, so storing them under oil keeps both air and moisture completely away.",
      },
      {
        id: "periodic-table-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "group7-group0",
        question: "Which Group 7 halogen is a red-brown liquid at room temperature (20 °C)?",
        options: [
          "Bromine (Br₂)",
          "Chlorine (Cl₂)",
          "Fluorine (F₂)",
          "Iodine (I₂)",
        ],
        answerIndex: 0,
        hints: [
          "Remember the states down Group 7: F₂ gas, Cl₂ gas, Br₂ liquid, I₂ solid.",
        ],
        explanation:
          "Bromine melts at −7 °C and boils at 59 °C, making it the only non-metal element that is a liquid at room temperature (20 °C).",
      },
      {
        id: "periodic-table-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "Which statement accurately describes the elements in Group 0 (the noble gases)?",
        options: [
          "Diatomic coloured gases that react vigorously with cold water",
          "Monatomic colourless gases that are unreactive with full shells",
          "Soft silvery metals that lose one outer electron very easily",
          "Brittle dark solids whose melting points decrease down the group",
        ],
        answerIndex: 1,
        hints: [
          "Consider helium, neon, and argon — do they form pairs like Cl₂ or stay as single atoms?",
          "Link their full outer shells directly to their reactivity.",
        ],
        explanation:
          "Noble gases exist as single unbonded atoms (monatomic), are colourless gases at room temperature, and are chemically unreactive because they have full outer electron shells.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Group 1 Alkali Metals, Group 7 Halogens & Group 0 (15 MCQs)
  // =========================================================================
  {
    id: "periodic-table-m2",
    title: "MCQ Paper 2 — Alkali Metals, Halogens & Noble Gases",
    questions: [
      {
        id: "periodic-table-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "group1-alkali-metals",
        question: "What are the two products formed when lithium reacts with cold water?",
        options: [
          "Lithium oxide and oxygen gas",
          "Lithium chloride and hydrogen gas",
          "Lithium hydroxide and hydrogen gas",
          "Lithium carbonate and oxygen gas",
        ],
        answerIndex: 2,
        hints: [
          "Recall the word equation: alkali metal + water → metal hydroxide + hydrogen.",
        ],
        explanation:
          "Every Group 1 alkali metal reacts with cold water to form an alkaline metal hydroxide solution and hydrogen gas: 2Li + 2H₂O → 2LiOH + H₂.",
      },
      {
        id: "periodic-table-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "Which set of observations best matches a small piece of potassium dropped onto water containing universal indicator?",
        options: [
          "Floats, ignites with a lilac flame, and indicator turns purple",
          "Sinks immediately, stays solid, and indicator turns bright red",
          "Floats without fizzing, melts slowly, and indicator stays green",
          "Sinks to the base, produces green gas, and indicator turns yellow",
        ],
        answerIndex: 0,
        hints: [
          "Potassium is less dense than water, very reactive, and produces alkaline KOH.",
          "Recall potassium's signature flame colour on water.",
        ],
        explanation:
          "Potassium floats (low density), melts immediately, fizzes violently, ignites with a characteristic lilac flame, and forms alkaline potassium hydroxide that turns universal indicator purple.",
      },
      {
        id: "periodic-table-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "How do melting point and reactivity change as you move DOWN Group 1 from lithium to caesium?",
        options: [
          "Melting point increases and reactivity decreases",
          "Melting point increases and reactivity increases",
          "Melting point decreases and reactivity decreases",
          "Melting point decreases and reactivity increases",
        ],
        answerIndex: 3,
        hints: [
          "Compare melting points down the group: Li 181 °C → Na 98 °C → K 63 °C.",
          "Compare reactions on water: Li gives a gentle fizz whereas K ignites with a lilac flame.",
        ],
        explanation:
          "Down Group 1, melting points decrease from 181 °C for Li to 98 °C for Na, 63 °C for K, 39 °C for Rb, and 29 °C for Cs, while reactivity increases dramatically because the outer electron is lost more easily.",
      },
      {
        id: "periodic-table-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "Why is potassium (2,8,8,1) more reactive than lithium (2,1)?",
        options: [
          "Potassium has more protons so it pulls incoming electrons closer",
          "Potassium's outer electron is further from the nucleus and lost more easily",
          "Potassium has fewer inner shells so it forms covalent pairs faster",
          "Potassium has a higher melting point so it releases extra heat energy",
        ],
        answerIndex: 1,
        hints: [
          "Do Group 1 metals react by LOSING or GAINING their outer electron?",
          "How do extra shells and greater distance affect the nuclear attraction on that outer electron?",
        ],
        explanation:
          "Potassium has 4 electron shells versus lithium's 2, so its single outer electron sits further from the positive nucleus with more inner-shell shielding, weakening electrostatic attraction so it is lost much more easily.",
      },
      {
        id: "periodic-table-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "Which balanced symbol equation correctly shows sodium reacting with chlorine gas?",
        options: [
          "Na + Cl → NaCl",
          "Na + Cl₂ → NaCl₂",
          "2Na + Cl₂ → 2NaCl",
          "2Na + 2Cl₂ → 2NaCl",
        ],
        answerIndex: 2,
        hints: [
          "Remember chlorine is diatomic (Cl₂) and sodium chloride has formula NaCl (from Na⁺ and Cl⁻).",
          "Balance the number of Cl and Na atoms on both sides.",
        ],
        explanation:
          "Chlorine exists as diatomic Cl₂ and sodium forms +1 ions with Cl⁻ to give NaCl. Balancing gives 2Na + Cl₂ → 2NaCl (2 Na and 2 Cl on both sides).",
      },
      {
        id: "periodic-table-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "How do boiling point and reactivity change as you move DOWN Group 7 from fluorine to iodine?",
        options: [
          "Boiling point decreases and reactivity increases",
          "Boiling point decreases and reactivity decreases",
          "Boiling point increases and reactivity increases",
          "Boiling point increases and reactivity decreases",
        ],
        answerIndex: 3,
        hints: [
          "States at room temp go gas (F₂, Cl₂) → liquid (Br₂) → solid (I₂), so what happens to boiling point?",
          "Which halogen sits at the top as the strongest electron grabber?",
        ],
        explanation:
          "Down Group 7, larger halogen molecules have stronger intermolecular forces (so boiling point increases), while the larger atomic radius makes it harder to attract and gain an incoming electron (so reactivity decreases).",
      },
      {
        id: "periodic-table-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "Why is chlorine (2,8,7) more reactive than iodine (2,8,18,18,7)?",
        options: [
          "Chlorine's outer shell is closer to the nucleus, attracting an electron more strongly",
          "Chlorine has more electron shells, allowing it to lose seven electrons more easily",
          "Chlorine is a dark grey solid at room temperature with very high density",
          "Chlorine atoms already have a full outer shell so they gain protons rapidly",
        ],
        answerIndex: 0,
        hints: [
          "Group 7 halogens react by GAINING 1 electron to fill their outer shell.",
          "Does a smaller atom with less shielding pull an incoming electron more strongly or more weakly?",
        ],
        explanation:
          "Chlorine has fewer shells and less shielding than iodine, so its outer shell is closer to the positive nucleus, exerting a stronger electrostatic pull on an incoming electron to form Cl⁻.",
      },
      {
        id: "periodic-table-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "What happens when pale green chlorine water is added to colourless aqueous potassium bromide (KBr)?",
        options: [
          "No reaction occurs because bromine is higher in Group 7 than chlorine",
          "Chlorine displaces bromine and the solution turns orange-brown",
          "Potassium metal precipitates out and bursts into a lilac flame",
          "Solid dark grey iodine crystals form at the bottom of the tube",
        ],
        answerIndex: 1,
        hints: [
          "Check which halogen is higher (more reactive) in Group 7: Cl₂ or Br₂?",
          "When Br₂ is released into water, what colour does the solution turn?",
        ],
        explanation:
          "Chlorine is more reactive than bromine, so it displaces bromine: Cl₂ + 2KBr → 2KCl + Br₂. The displaced aqueous bromine turns the solution orange-brown.",
      },
      {
        id: "periodic-table-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "Which mixture will produce NO chemical reaction at all?",
        options: [
          "Chlorine water added to potassium bromide solution",
          "Chlorine water added to potassium iodide solution",
          "Bromine water added to potassium iodide solution",
          "Iodine solution added to potassium chloride solution",
        ],
        answerIndex: 3,
        hints: [
          "Order of halogen reactivity from highest to lowest: F₂ > Cl₂ > Br₂ > I₂.",
          "Look for the mixture where the ADDED halogen is LESS reactive than the halide already in the salt.",
        ],
        explanation:
          "Iodine is less reactive than chlorine, so iodine cannot displace chloride ions from potassium chloride (I₂ + KCl → no reaction). In the other three mixtures, a more reactive halogen displaces a less reactive one.",
      },
      {
        id: "periodic-table-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "What is the balanced symbol equation for bromine reacting with aqueous potassium iodide?",
        options: [
          "Br + KI → KBr + I",
          "Br₂ + KI → KBr + I₂",
          "Br₂ + 2KI → 2KBr + I₂",
          "2Br₂ + 2KI → 2KBr₂ + I₂",
        ],
        answerIndex: 2,
        hints: [
          "Both bromine (Br₂) and iodine (I₂) are diatomic molecules.",
          "Balance the K, Br, and I atoms on both sides.",
        ],
        explanation:
          "Each Br₂ molecule contains 2 bromine atoms and produces 1 molecule of I₂, requiring 2 formula units of KI and producing 2KBr: Br₂ + 2KI → 2KBr + I₂.",
      },
      {
        id: "periodic-table-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "group7-group0",
        question: "Why is helium used instead of hydrogen to inflate weather balloons and airships?",
        options: [
          "Helium is denser than air and turns universal indicator purple",
          "Helium has low density and is completely non-flammable (inert)",
          "Helium reacts with oxygen in the sky to release extra lift heat",
          "Helium forms diatomic He₂ molecules that never leak from rubber",
        ],
        answerIndex: 1,
        hints: [
          "Hydrogen floats well too, so what major safety hazard makes helium far better?",
        ],
        explanation:
          "Helium is less dense than air (so it floats) and belongs to Group 0 with a full outer shell, making it totally unreactive and non-flammable, unlike explosive hydrogen gas.",
      },
      {
        id: "periodic-table-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "Why is argon gas sealed inside hot filament light bulbs and used during steel arc welding?",
        options: [
          "It provides an unreactive atmosphere preventing hot metal oxidising",
          "It reacts rapidly with hot tungsten to produce brighter white light",
          "It has a higher density than solid steel so it cools down welds",
          "It bleaches damp litmus paper to keep glass bulbs transparent",
        ],
        answerIndex: 0,
        hints: [
          "What would happen to red-hot tungsten or molten steel if normal oxygen-rich air touched it?",
          "Argon is a Group 0 noble gas with a full outer shell (2,8,8).",
        ],
        explanation:
          "Argon's full outer shell (2,8,8) makes it chemically inert, so surrounding hot metal filaments or molten welds with argon prevents oxygen from reacting with and burning the hot metal.",
      },
      {
        id: "periodic-table-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "How do the boiling points of Group 0 noble gases change going down the group from helium to xenon?",
        options: [
          "They decrease because atoms get heavier and hold less charge",
          "They stay fixed at exactly −200 °C because all are unreactive",
          "They increase because larger atoms have stronger intermolecular forces",
          "They jump erratically between positive and negative values",
        ],
        answerIndex: 2,
        hints: [
          "Compare noble gas boiling points: He −269 °C → Ne −246 °C → Ar −186 °C → Kr −153 °C.",
          "Larger atoms with more electrons experience stronger attractions between neighbouring atoms.",
        ],
        explanation:
          "Going down Group 0, atomic mass and size increase, strengthening intermolecular forces between atoms so more energy is needed to boil them (He −269 °C up to Xe −108 °C).",
      },
      {
        id: "periodic-table-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group7-group0",
        question: "Iodine has a melting point of 114 °C and a boiling point of 184 °C. What is the physical state of iodine at 150 °C?",
        options: [
          "Dark grey solid",
          "Purple vapour gas",
          "Aqueous brown salt",
          "Molten liquid",
        ],
        answerIndex: 3,
        hints: [
          "Compare 150 °C with both 114 °C (m.p.) and 184 °C (b.p.).",
          "Any temperature between melting point and boiling point corresponds to the liquid state.",
        ],
        explanation:
          "Since 114 °C < 150 °C < 184 °C, iodine has already melted but has not yet boiled, so at 150 °C it exists as a liquid.",
      },
      {
        id: "periodic-table-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "Why does sodium melt into a shiny sphere on cold water whereas lithium remains a solid piece?",
        options: [
          "Sodium releases more heat faster and has a much lower melting point",
          "Lithium is denser than water and sinks before it can absorb heat",
          "Sodium does not react with oxygen until water exceeds 181 °C",
          "Lithium hydroxide freezes water into ice around the metal surface",
        ],
        answerIndex: 0,
        hints: [
          "Compare the melting points: Li melts at 181 °C whereas Na melts at just 98 °C.",
          "Also compare how vigorously Na releases heat compared to Li.",
        ],
        explanation:
          "Sodium is both more reactive (releasing heat faster) and has a much lower melting point (98 °C vs lithium's 181 °C), so the exothermic heat easily melts sodium into a sphere on the water surface.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Mastery, Predictions & Quantitative Analysis (15 MCQs)
  // =========================================================================
  {
    id: "periodic-table-m3",
    title: "MCQ Paper 3 — Tanglin Mastery, Predictions & Calculations",
    questions: [
      {
        id: "periodic-table-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "atomic-structure-shells",
        question: "A neutral atom of isotope X has 17 protons and 20 neutrons. Which element is X, and what is its mass number?",
        options: [
          "Chlorine with mass number 37",
          "Calcium with mass number 37",
          "Chlorine with mass number 20",
          "Potassium with mass number 39",
        ],
        answerIndex: 0,
        hints: [
          "Atomic number (number of protons) uniquely identifies the element: Z = 17 is chlorine.",
          "Mass number = protons + neutrons = 17 + 20.",
        ],
        explanation:
          "17 protons identifies the element as chlorine (Z = 17), and 17 + 20 = 37 gives the isotope chlorine-37 (³⁷Cl). Calcium has 20 protons, not 20 neutrons!",
      },
      {
        id: "periodic-table-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "atomic-structure-shells",
        question: "When a magnesium atom (2,8,2) forms a Mg²⁺ ion, what is its new electronic configuration, and which noble gas has that exact same electron arrangement?",
        options: [
          "2,8,4 — matching silicon",
          "2,8,8 — matching argon",
          "2,8 — matching neon",
          "2 — matching helium",
        ],
        answerIndex: 2,
        hints: [
          "A 2+ charge means the magnesium atom LOST 2 negatively charged outer electrons.",
          "Remove the 2 outer electrons from 2,8,2 — how many total electrons remain?",
        ],
        explanation:
          "Losing its 2 outer electrons turns Mg (2,8,2) into Mg²⁺ (2,8) with 10 electrons — the same stable full-shell electronic structure as neon (Z = 10).",
      },
      {
        id: "periodic-table-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "atomic-structure-shells",
        question: "Naturally occurring chlorine consists of 75% chlorine-35 and 25% chlorine-37. What is its relative atomic mass?",
        options: [
          "36.0",
          "35.5",
          "35.25",
          "36.5",
        ],
        answerIndex: 1,
        hints: [
          "Use the weighted mean: ((75 × 35) + (25 × 37)) ÷ 100.",
          "Notice 75% is three-quarters and 25% is one-quarter — so the mean sits one-quarter of the way from 35 toward 37!",
        ],
        explanation:
          "Relative atomic mass = (0.75 × 35) + (0.25 × 37) = 26.25 + 9.25 = 35.5. The unweighted midpoint 36.0 wrongly assumes 50% of each isotope.",
      },
      {
        id: "periodic-table-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "Why do chlorine-35 and chlorine-37 have identical chemical reactions with sodium metal?",
        options: [
          "Both isotopes contain exactly 18 neutrons inside their nuclei",
          "Both isotopes have identical relative mass and identical density",
          "Neutrons directly form ionic bonds with outer sodium shells",
          "Both isotopes share the exact same electronic configuration (2,8,7)",
        ],
        answerIndex: 3,
        hints: [
          "Which subatomic particles actually take part in chemical bonding and reactions?",
          "Do isotopes differ in electrons or only in neutrons?",
        ],
        explanation:
          "Chemical properties depend on outer-shell electrons. Both ³⁵Cl and ³⁷Cl have 17 protons and 17 electrons arranged as 2,8,7, so they react identically.",
      },
      {
        id: "periodic-table-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "Element Q sits directly below silicon (Group 4, Period 3) in Mendeleev's table. Knowing silicon forms the oxide SiO₂, what formula did Mendeleev predict for Q's oxide (germanium oxide)?",
        options: [
          "QO₂",
          "Q₂O",
          "QO",
          "Q₂O₃",
        ],
        answerIndex: 0,
        hints: [
          "Elements in the same vertical group have the same number of outer electrons and form compounds with matching formulae.",
          "Match the ratio of element to oxygen in SiO₂.",
        ],
        explanation:
          "Because elements in Group 4 share 4 outer electrons, they form analogous dioxides: CO₂, SiO₂, and GeO₂ (QO₂). Mendeleev famously predicted GeO₂ before germanium was ever discovered!",
      },
      {
        id: "periodic-table-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group1-alkali-metals",
        question: "Rubidium (Rb) sits directly below potassium (m.p. 63 °C) and above caesium (m.p. 29 °C) in Group 1. Which prediction for rubidium is most consistent with Group 1 trends?",
        options: [
          "Melting point around 110 °C; reacts more slowly with water than sodium",
          "Melting point around 39 °C; reacts explosively with cold water",
          "Melting point around 15 °C; forms an acidic oxide with pH 2 in water",
          "Melting point around 85 °C; exists as a red-brown diatomic liquid",
        ],
        answerIndex: 1,
        hints: [
          "Interpolate the melting point between potassium at 63 °C and caesium at 29 °C.",
          "Check how reactivity changes down Group 1 past potassium.",
        ],
        explanation:
          "Melting point decreases steadily down Group 1, placing rubidium between 63 °C and 29 °C (actual value 39 °C), while reactivity increases past potassium so Rb reacts explosively with water.",
      },
      {
        id: "periodic-table-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group7-group0",
        question: "Astatine (At₂) lies directly beneath iodine (dark grey solid, m.p. 114 °C) in Group 7. Which set of predictions for astatine at 20 °C is scientifically sound?",
        options: [
          "Pale yellow gas; displaces chlorine from aqueous sodium chloride",
          "Red-brown liquid; reacts violently with water to give a lilac flame",
          "Black solid; displaced from sodium astatide by aqueous iodine",
          "Colourless monatomic gas; refuses to react with any alkali metal",
        ],
        answerIndex: 2,
        hints: [
          "Follow the trends down Group 7: colour darkens, melting point rises above 114 °C, and reactivity drops below iodine.",
          "If astatine is LESS reactive than iodine, can iodine displace astatine from NaAt?",
        ],
        explanation:
          "Down Group 7 colour darkens (grey → black), melting point rises (well above 114 °C → solid at 20 °C), and reactivity falls below iodine — so more reactive I₂ displaces At₂ from aqueous astatides.",
      },
      {
        id: "periodic-table-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group7-group0",
        question: "A student tests an unknown colourless halide salt solution (KX) with two reagents: adding chlorine water turns it brown, AND adding bromine water also turns it brown. What is the unknown salt KX?",
        options: [
          "Potassium iodide (KI)",
          "Potassium bromide (KBr)",
          "Potassium chloride (KCl)",
          "Potassium fluoride (KF)",
        ],
        answerIndex: 0,
        hints: [
          "BOTH chlorine AND bromine displaced a halogen from KX!",
          "Which halide ion lies BELOW both Cl₂ and Br₂ in Group 7 so both can displace it (producing brown aqueous iodine)?",
        ],
        explanation:
          "Because bromine (Br₂) displaced a halogen from KX, the unknown halide must be LESS reactive than bromine — namely iodide (I⁻). Both Cl₂ and Br₂ displace brown aqueous I₂ from KI.",
      },
      {
        id: "periodic-table-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group7-group0",
        question: "Why do Group 1 reactivity and Group 7 reactivity move in OPPOSITE directions going down their groups?",
        options: [
          "Group 1 atoms get smaller down the group whereas Group 7 atoms get bigger",
          "Group 1 elements are non-metals whereas Group 7 elements are soft metals",
          "Group 1 atoms lose an outer electron whereas Group 7 atoms must gain one",
          "Group 1 nuclei have negative charges whereas Group 7 nuclei are positive",
        ],
        answerIndex: 2,
        hints: [
          "In BOTH groups, atoms get larger with more shells and weaker nuclear pull on the outer shell going down.",
          "Does weaker nuclear attraction make LOSING an electron easier or harder? Now ask the same for GAINING an electron!",
        ],
        explanation:
          "In both groups, more shells weaken the nucleus's pull on the outer shell. Weaker pull makes it EASIER for Group 1 metals to lose 1 electron (reactivity increases down) but HARDER for Group 7 halogens to attract and gain 1 electron (reactivity decreases down).",
      },
      {
        id: "periodic-table-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "group1-alkali-metals",
        question: "When 4.6 g of sodium reacts completely with 7.1 g of chlorine gas in a sealed flask to form sodium chloride (2Na + Cl₂ → 2NaCl), what total mass of white solid sodium chloride is produced?",
        options: [
          "2.5 g",
          "11.7 g",
          "23.4 g",
          "7.1 g",
        ],
        answerIndex: 1,
        hints: [
          "Apply the Law of Conservation of Mass inside a sealed flask.",
          "Add the masses of both reactants: 4.6 + 7.1.",
        ],
        explanation:
          "No atoms enter or escape a sealed flask, so total product mass equals total reactant mass: 4.6 g + 7.1 g = 11.7 g of NaCl.",
      },
      {
        id: "periodic-table-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group7-group0",
        question: "Damp blue litmus paper is held inside a gas jar containing pale green chlorine gas (Cl₂). What exact colour sequence is observed?",
        options: [
          "Stays bright blue with no colour change",
          "Turns purple immediately then fades to green",
          "Turns bright yellow and sparks with a squeaky pop",
          "Turns red first and then bleaches completely white",
        ],
        answerIndex: 3,
        hints: [
          "Chlorine is a non-metal that dissolves in water on the damp paper to form an acidic solution first.",
          "Chlorine is also famous for its bleaching action in swimming pools and bleach.",
        ],
        explanation:
          "Chlorine dissolves in the moisture to form acidic HCl and HClO (turning blue litmus red) and then bleaches the indicator completely white — the standard chemical test for chlorine gas.",
      },
      {
        id: "periodic-table-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "atomic-structure-shells",
        question: "Which pair of elements belongs to the SAME vertical group of the Periodic Table and therefore has similar chemical reactions?",
        options: [
          "Carbon (2,4) and nitrogen (2,5)",
          "Fluorine (2,7) and chlorine (2,8,7)",
          "Neon (2,8) and sodium (2,8,1)",
          "Lithium (2,1) and beryllium (2,2)",
        ],
        answerIndex: 1,
        hints: [
          "Look at the LAST digit (outer-shell electrons) in each electronic configuration.",
          "Which pair shares the exact same number of outer-shell electrons?",
        ],
        explanation:
          "Fluorine (2,7) and chlorine (2,8,7) both have 7 outer-shell electrons, placing them in Group 7 with matching chemical behaviour. All other pairs sit in adjacent groups within the same period.",
      },
      {
        id: "periodic-table-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group7-group0",
        question: "At −190 °C, which of the following noble gases is a LIQUID? (Boiling points: He −269 °C, Ne −246 °C, Ar −186 °C; melting point of Ar is −189 °C; Kr melts at −157 °C.)",
        options: [
          "None — He and Ne are gases while Ar and Kr are both solids at −190 °C",
          "Argon only, because −190 °C lies halfway between −189 °C and −186 °C",
          "Neon only, because −190 °C is cooler than −246 °C",
          "Krypton only, because −190 °C is warmer than −157 °C",
        ],
        answerIndex: 0,
        hints: [
          "Be super careful with negative temperatures! −190 °C is COLDER (more negative) than −189 °C and −157 °C, and WARMER than −246 °C and −269 °C!",
          "Check each gas against its m.p. and b.p. on a number line.",
        ],
        explanation:
          "On the number line, −190 °C > −246 °C (so He and Ne are gases), while −190 °C < −189 °C (so Ar is already frozen solid!) and −190 °C < −157 °C (Kr is solid). Thus none of them is liquid at −190 °C.",
      },
      {
        id: "periodic-table-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mendeleev-layout",
        question: "Why does sodium oxide (Na₂O) dissolve in water to give pH 13 while sulfur dioxide (SO₂) dissolves in water to give pH 3?",
        options: [
          "Sodium is a noble gas whereas sulfur is a Group 1 alkali metal",
          "All solid oxides are acidic while all gaseous oxides are alkaline",
          "Water always neutralises sulfur oxides into strong alkali hydroxides",
          "Metals typically form basic/alkaline oxides while non-metals form acidic oxides",
        ],
        answerIndex: 3,
        hints: [
          "Classify sodium and sulfur as metal vs non-metal.",
          "Recall the general rule linking metal/non-metal oxides to pH.",
        ],
        explanation:
          "Sodium is a metal (its soluble oxide reacts with water to form alkaline NaOH, pH 13), whereas sulfur is a non-metal (its oxide forms acidic sulfurous acid in water, pH 3 — a major cause of acid rain).",
      },
      {
        id: "periodic-table-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "group1-alkali-metals",
        question: "In the balanced equation 2K + 2H₂O → 2KOH + H₂, how many molecules of hydrogen gas (H₂) are formed when 12 atoms of potassium react completely with excess water?",
        options: [
          "12 molecules of H₂",
          "24 molecules of H₂",
          "6 molecules of H₂",
          "3 molecules of H₂",
        ],
        answerIndex: 2,
        hints: [
          "Read the ratio from the balanced equation: 2 K atoms produce 1 H₂ molecule.",
          "Divide 12 potassium atoms by 2.",
        ],
        explanation:
          "The 2 : 1 ratio in 2K + 2H₂O → 2KOH + H₂ shows every 2 potassium atoms generate 1 H₂ molecule. Therefore 12 potassium atoms produce 12 ÷ 2 = 6 molecules of H₂.",
      },
    ],
  },
];
