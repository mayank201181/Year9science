import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "periodic-table",
  title: "The Periodic Table & Atomic Structure",
  strand: "Chemistry",
  icon: "⚛️",
  summary: "Unlock how proton numbers and electron shells explain Mendeleev's Periodic Table, explosive alkali metals, colourful halogens, and unreactive noble gases.",
  intro:
    "Every substance in the universe — from the silicon chips in your iPad to the salt in the Singapore Strait — is built from around a hundred chemical elements. Once you understand how protons sit in the nucleus and how electrons fill shells in the 2, 8, 8, 2 pattern, the entire Periodic Table stops being a list to memorise and turns into a prediction engine.",
  guide: [
    // =========================================================================
    // SECTION 1: atomic-structure-shells
    // =========================================================================
    {
      id: "atomic-structure-shells",
      heading: "Atoms, Subatomic Particles & Electron Shells",
      discovery: {
        problem:
          "Lithium (atomic number 3), sodium (atomic number 11), and potassium (atomic number 19) all explode or fizz dramatically in water, whereas neon (atomic number 10) and argon (atomic number 18) refuse to react with almost anything. Notice the jumps: 3 → 11 (+8) → 19 (+8) and 10 → 18 (+8). Why does chemical behaviour repeat after every 8 elements?",
        idea:
          "Electrons are arranged in layered **energy levels (shells)** around the nucleus holding up to **2, 8, 8, 2** electrons for the first 20 elements. Lithium (2,1), sodium (2,8,1), and potassium (2,8,8,1) ALL end with **1 outer-shell electron**, while neon (2,8) and argon (2,8,8) both end with a **full outer shell of 8**!",
      },
      body:
        "Every atom consists of a tiny, dense central **nucleus** containing **protons** and **neutrons**, surrounded by **electrons** orbiting in shells (energy levels).\n\n" +
        "| Subatomic particle | Location | Relative mass | Relative charge |\n" +
        "| --- | --- | --- | --- |\n" +
        "| **Proton (p⁺)** | Nucleus | **1** | **+1** |\n" +
        "| **Neutron (n⁰)** | Nucleus | **1** | **0** (neutral) |\n" +
        "| **Electron (e⁻)** | Shells around nucleus | **Very small** (≈ {{1/1836}}, negligible) | **−1** |\n\n" +
        "### Atomic Number, Mass Number & Isotopes\n\n" +
        "On the Periodic Table, each element tile shows two key numbers (for example, sodium: mass number **23**, atomic number **11**):\n\n" +
        "- **Atomic number (proton number)** = number of **protons** in the nucleus. This uniquely identifies the element! In a **neutral atom**, `number of electrons = number of protons` so total positive and negative charges cancel to zero.\n" +
        "- **Mass number** = total number of **protons + neutrons** in the nucleus.\n" +
        "- **Number of neutrons** = `mass number − atomic number` (e.g., sodium has `23 − 11 = 12` neutrons).\n" +
        "- **Isotopes** are atoms of the **same element** with the **same number of protons** (same atomic number) but a **different number of neutrons** (different mass number) — for example, chlorine-35 (17 p, 18 n) and chlorine-37 (17 p, 20 n). Because isotopes have identical electron arrangements, they have the **same chemical properties**.\n\n" +
        "### Writing Electronic Configurations (Elements 1 to 20)\n\n" +
        "Fill electron shells strictly from the **inside outwards**, obeying the shell capacities **2, 8, 8, 2** (up to calcium, Z = 20):\n\n" +
        "- 1st shell holds at most **2** electrons.\n" +
        "- 2nd shell holds at most **8** electrons.\n" +
        "- 3rd shell holds **8** electrons before the 4th shell starts filling (for potassium `2,8,8,1` and calcium `2,8,8,2`).\n\n" +
        "### The Golden Link to the Periodic Table\n\n" +
        "- **Number of electrons in the outer shell** = **Group number** (e.g., magnesium `2,8,2` → Group 2; chlorine `2,8,7` → Group 7). **Important exception:** helium (`2`) has a full 1st shell so it sits in **Group 0**, not Group 2!\n" +
        "- **Number of occupied electron shells** = **Period (row) number** (e.g., chlorine `2,8,7` has 3 shells → Period 3; calcium `2,8,8,2` has 4 shells → Period 4).",
      diagram:
        '<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bohr electron shell diagrams for Lithium (2,1), Chlorine (2,8,7), and Calcium (2,8,8,2) linking outer electrons to group number and shell count to period number">' +
        '<rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Electron Shells (2, 8, 8, 2 Rule) → Group &amp; Period</text>' +
        '<g transform="translate(88,128)">' +
        '<circle cx="0" cy="0" r="16" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6" />' +
        '<text x="0" y="4" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Li</text>' +
        '<circle cx="0" cy="0" r="32" fill="none" stroke="var(--line)" stroke-width="1.4" />' +
        '<circle cx="0" cy="0" r="50" fill="none" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="4 3" />' +
        '<circle cx="0" cy="-32" r="4" fill="var(--ink-2)" /><circle cx="0" cy="32" r="4" fill="var(--ink-2)" />' +
        '<circle cx="0" cy="-50" r="4.5" fill="var(--bad)" />' +
        '<text x="0" y="72" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Lithium (Z = 3): 2,1</text>' +
        '<text x="0" y="88" font-size="10" text-anchor="middle" fill="var(--ink-2)">2 shells → Period 2</text>' +
        '<text x="0" y="102" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">1 outer e⁻ → Group 1</text>' +
        '</g>' +
        '<g transform="translate(274,128)">' +
        '<circle cx="0" cy="0" r="16" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6" />' +
        '<text x="0" y="4" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Cl</text>' +
        '<circle cx="0" cy="0" r="28" fill="none" stroke="var(--line)" stroke-width="1.3" />' +
        '<circle cx="0" cy="0" r="44" fill="none" stroke="var(--line)" stroke-width="1.3" />' +
        '<circle cx="0" cy="0" r="60" fill="none" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="4 3" />' +
        '<circle cx="0" cy="-28" r="3.4" fill="var(--ink-2)" /><circle cx="0" cy="28" r="3.4" fill="var(--ink-2)" />' +
        '<circle cx="0" cy="-44" r="3.2" fill="var(--ink-2)" /><circle cx="31" cy="-31" r="3.2" fill="var(--ink-2)" />' +
        '<circle cx="44" cy="0" r="3.2" fill="var(--ink-2)" /><circle cx="31" cy="31" r="3.2" fill="var(--ink-2)" />' +
        '<circle cx="0" cy="44" r="3.2" fill="var(--ink-2)" /><circle cx="-31" cy="31" r="3.2" fill="var(--ink-2)" />' +
        '<circle cx="-44" cy="0" r="3.2" fill="var(--ink-2)" /><circle cx="-31" cy="-31" r="3.2" fill="var(--ink-2)" />' +
        '<circle cx="0" cy="-60" r="4" fill="var(--good)" /><circle cx="42" cy="-42" r="4" fill="var(--good)" />' +
        '<circle cx="60" cy="0" r="4" fill="var(--good)" /><circle cx="42" cy="42" r="4" fill="var(--good)" />' +
        '<circle cx="0" cy="60" r="4" fill="var(--good)" /><circle cx="-42" cy="42" r="4" fill="var(--good)" />' +
        '<circle cx="-60" cy="0" r="4" fill="var(--good)" />' +
        '<text x="0" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Chlorine (Z = 17): 2,8,7</text>' +
        '<text x="0" y="93" font-size="10" text-anchor="middle" fill="var(--ink-2)">3 shells → Period 3</text>' +
        '<text x="0" y="107" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">7 outer e⁻ → Group 7</text>' +
        '</g>' +
        '<g transform="translate(466,128)">' +
        '<circle cx="0" cy="0" r="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6" />' +
        '<text x="0" y="4" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Ca</text>' +
        '<circle cx="0" cy="0" r="24" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="37" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="50" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="63" fill="none" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="4 3" />' +
        '<circle cx="0" cy="-63" r="4.2" fill="var(--bad)" /><circle cx="0" cy="63" r="4.2" fill="var(--bad)" />' +
        '<text x="0" y="-27" font-size="8.5" text-anchor="middle" fill="var(--ink-2)">2</text>' +
        '<text x="0" y="-40" font-size="8.5" text-anchor="middle" fill="var(--ink-2)">8</text>' +
        '<text x="0" y="-53" font-size="8.5" text-anchor="middle" fill="var(--ink-2)">8</text>' +
        '<text x="0" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Calcium (Z = 20): 2,8,8,2</text>' +
        '<text x="0" y="93" font-size="10" text-anchor="middle" fill="var(--ink-2)">4 shells → Period 4</text>' +
        '<text x="0" y="107" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">2 outer e⁻ → Group 2</text>' +
        '</g>' +
        '</svg>',
      diagramCaption: "Counting occupied shells gives the Period number; counting outer-shell electrons gives the Group number (with helium in Group 0 as the full-1st-shell exception).",
      whyItWorks:
        "Chemical reactions only involve electrons in the **outermost shell** because inner shells are buried deep inside and tightly held by the nucleus. That is why every element in the same vertical group shares the same outer-electron count and reacts in the same family pattern.",
      keyPoints: [
        "Protons (+1, mass 1) and neutrons (0, mass 1) sit in the nucleus; electrons (−1, negligible mass) orbit in shells.",
        "Atomic number = protons (= electrons in a neutral atom); Mass number = protons + neutrons; Neutrons = mass number − atomic number.",
        "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
        "Up to calcium (Z = 20), shells fill in the order 2, 8, 8, 2.",
        "Number of occupied shells = Period number; number of outer-shell electrons = Group number (except helium, 2, which has a full first shell in Group 0).",
      ],
      strategies: [
        "Always check **larger number = mass number (p + n)** and **smaller number = atomic number (p)** — do not rely on top vs bottom, as different exam boards print them either way!",
        "When writing an electron configuration, sum your digits at the end to verify they equal the atomic number (e.g., `2 + 8 + 7 = 17`).",
        "Never skip straight to 2, 9 or 2, 8, 9! The 2nd shell caps at 8, and the 3rd shell fills to 8 before starting the 4th shell for K (`2,8,8,1`) and Ca (`2,8,8,2`).",
      ],
      thinkDeeper:
        "Naturally occurring chlorine is 75% chlorine-35 and 25% chlorine-37. Why is chlorine's relative atomic mass on the Periodic Table printed as **35.5** instead of a whole number?",
      workedExamples: [
        {
          title: "Counting Protons, Neutrons, Electrons & Writing Shells",
          problem:
            "A neutral atom of potassium has atomic number 19 and mass number 39. Find its number of protons, neutrons, and electrons, write its electronic configuration, and deduce its Group and Period.",
          steps: [
            "Protons = atomic number = **19**.",
            "Because the atom is neutral, electrons = protons = **19**.",
            "Neutrons = mass number − atomic number = {{39 - 19 = 20}}.",
            "Fill 19 electrons into shells (2, 8, 8, 2): 2 in shell 1, 8 in shell 2 (10 used), 8 in shell 3 (18 used), 1 in shell 4 → **2,8,8,1**.",
            "4 occupied shells → **Period 4**; 1 outer-shell electron → **Group 1**.",
          ],
          answer: "19 protons, 20 neutrons, 19 electrons; configuration 2,8,8,1; Group 1, Period 4.",
          yourTurn: {
            question:
              "How many neutrons are in a neutral atom of fluorine (atomic number 9, mass number 19)?",
            answer: { type: "number", value: 10, display: "10" },
            solution: "Neutrons = mass number − atomic number = 19 − 9 = 10 neutrons.",
          },
        },
        {
          title: "Deducing an Element from Group & Period",
          problem:
            "Element X is in Period 3 and Group 6 of the Periodic Table. Write its electronic configuration and find its atomic number.",
          steps: [
            "Period 3 means **3 occupied shells** (the first two shells must be full: `2, 8, ...`).",
            "Group 6 means **6 electrons in the outer shell** → configuration is **2,8,6**.",
            "Total electrons = {{2 + 8 + 6 = 16}} → atomic number is **16** (sulfur, S).",
          ],
          answer: "2,8,6 (atomic number 16, sulfur).",
          yourTurn: {
            question:
              "Write the electronic configuration of a neutral aluminium atom (atomic number 13), separated by commas.",
            answer: {
              type: "text",
              accept: ["2,8,3", "2.8.3", "2-8-3"],
              display: "2,8,3",
            },
            solution: "13 electrons fill shell 1 (2), shell 2 (8), and the remaining 3 go in shell 3 → 2,8,3.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: mendeleev-layout
    // =========================================================================
    {
      id: "mendeleev-layout",
      heading: "Mendeleev's Periodic Table & Metals vs Non-Metals",
      discovery: {
        problem:
          "In 1869, scientists did not yet know about protons, neutrons, or electrons — they could only weigh atoms (atomic mass) and watch how they reacted. When Dmitri Mendeleev lined up the 60 known elements by atomic mass, tellurium (mass 128) landed in Group 7 with the halogens while iodine (mass 127) landed in Group 6 with oxygen and sulfur, even though iodine clearly behaved like a halogen! What bold move did Mendeleev make?",
        idea:
          "Mendeleev trusted **chemical properties** over strict mass order: he **swapped** tellurium and iodine into their proper chemical families, AND he boldly **left empty gaps** for elements not yet discovered — predicting their exact densities and melting points before anyone ever found them!",
      },
      body:
        "### From Mendeleev (1869) to the Modern Periodic Table\n\n" +
        "Before Mendeleev, chemists such as John Newlands tried lining elements up strictly by atomic mass without leaving gaps, so metals and non-metals clashed in the same column and other scientists mocked his table. **Dmitri Mendeleev** solved this in 1869 with two brilliant decisions:\n\n" +
        "1. **He left gaps for undiscovered elements** — and used the patterns of neighbouring elements to predict their physical and chemical properties (for instance, he predicted *eka-aluminium* and *eka-silicon*, later discovered as **gallium** and **germanium**, matching his predictions with astonishing accuracy!).\n" +
        "2. **He swapped a few pairs out of mass order** (such as tellurium and iodine) so every element sat in the vertical group matching its chemical reactions.\n\n" +
        "Decades later, the discovery of **protons** and **isotopes** proved why Mendeleev's swaps worked: tellurium (52 protons) happens to have heavier common isotopes than iodine (53 protons). The **modern Periodic Table** is ordered strictly by **increasing atomic (proton) number**, placing elements with the same outer-shell electron count into vertical **groups** and the same number of shells into horizontal **periods**.\n\n" +
        "### Metals vs Non-Metals Across the Stepped Line\n\n" +
        "A diagonal staircase running between boron/aluminium down to astatine separates **metals** (about three-quarters of all elements, on the **left and centre**) from **non-metals** (clustered at the **top right**):\n\n" +
        "| Property | Metals (left & centre) | Non-Metals (top right) |\n" +
        "| --- | --- | --- |\n" +
        "| **Electrical & thermal conductivity** | Good conductors | Poor conductors / insulators (**except graphite** carbon) |\n" +
        "| **Appearance & mechanics** | Shiny (lustrous), **malleable** (hammered into sheets), **ductile** (drawn into wires), sonorous | Dull, **brittle** when solid (shatter when hit) |\n" +
        "| **Melting / boiling points & density** | Mostly high (exceptions: mercury is liquid; Group 1 metals have low density & lower m.p.) | Mostly low; many are gases or liquids at room temp (exception: carbon diamond/graphite) |\n" +
        "| **Ion formation** | **Lose** outer electrons → form **positive ions** (cations) | **Gain** electrons (→ negative ions) or **share** electrons |\n" +
        "| **Oxide pH in water** | Form **basic / alkaline oxides** (pH > 7 if soluble, e.g. Na₂O, MgO) | Form **acidic oxides** (pH < 7, e.g. CO₂, SO₂, NO₂) |",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified Periodic Table showing metals on the left, non-metals on the top right separated by a stepped line, Mendeleev gap for Gallium, and Group and Period axes">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Periodic Table Map: Metals, Non-Metals &amp; Mendeleev\'s Gaps</text>' +
        '<text x="22" y="138" font-size="10.5" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 22 138)" text-anchor="middle">Periods (1 → 4)</text>' +
        '<text x="280" y="42" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Groups: 1 · 2 · Transition Metals · 3 · 4 · 5 · 6 · 7 · 0</text>' +
        '<g stroke="var(--line)" stroke-width="1.2">' +
        '<rect x="44" y="54" width="38" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="478" y="54" width="38" height="32" rx="4" fill="var(--info-soft)" />' +
        '<rect x="44" y="90" width="38" height="32" rx="4" fill="var(--bad-soft)" />' +
        '<rect x="86" y="90" width="38" height="32" rx="4" fill="var(--surface-2)" />' +
        '<rect x="278" y="90" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="318" y="90" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="358" y="90" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="398" y="90" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="438" y="90" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="478" y="90" width="38" height="32" rx="4" fill="var(--info-soft)" />' +
        '<rect x="44" y="126" width="38" height="32" rx="4" fill="var(--bad-soft)" />' +
        '<rect x="86" y="126" width="38" height="32" rx="4" fill="var(--surface-2)" />' +
        '<rect x="278" y="126" width="36" height="32" rx="4" fill="var(--surface-2)" />' +
        '<rect x="318" y="126" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="358" y="126" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="398" y="126" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="438" y="126" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="478" y="126" width="38" height="32" rx="4" fill="var(--info-soft)" />' +
        '<rect x="44" y="162" width="38" height="32" rx="4" fill="var(--bad-soft)" />' +
        '<rect x="86" y="162" width="38" height="32" rx="4" fill="var(--surface-2)" />' +
        '<rect x="128" y="126" width="146" height="68" rx="6" fill="var(--surface-2)" />' +
        '<rect x="278" y="162" width="36" height="32" rx="4" fill="var(--warn-soft)" stroke="var(--bad)" stroke-width="2" stroke-dasharray="3 2" />' +
        '<rect x="318" y="162" width="36" height="32" rx="4" fill="var(--surface-2)" />' +
        '<rect x="358" y="162" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="398" y="162" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="438" y="162" width="36" height="32" rx="4" fill="var(--brand-soft)" />' +
        '<rect x="478" y="162" width="38" height="32" rx="4" fill="var(--info-soft)" />' +
        '</g>' +
        '<path d="M276 88 L276 124 L316 124 L316 160 L356 160 L356 196" fill="none" stroke="var(--ink)" stroke-width="2.6" />' +
        '<g font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">' +
        '<text x="63" y="74">H</text><text x="497" y="74">He</text>' +
        '<text x="63" y="110">Li</text><text x="105" y="110">Be</text><text x="296" y="110">B</text><text x="336" y="110">C</text><text x="376" y="110">N</text><text x="416" y="110">O</text><text x="456" y="110">F</text><text x="497" y="110">Ne</text>' +
        '<text x="63" y="146">Na</text><text x="105" y="146">Mg</text><text x="296" y="146">Al</text><text x="336" y="146">Si</text><text x="376" y="146">P</text><text x="416" y="146">S</text><text x="456" y="146">Cl</text><text x="497" y="146">Ar</text>' +
        '<text x="63" y="182">K</text><text x="105" y="182">Ca</text><text x="201" y="164" fill="var(--ink-2)">Transition Metals</text><text x="296" y="182" fill="var(--bad)">Ga?</text><text x="336" y="182">Ge</text><text x="376" y="182">As</text><text x="416" y="182">Se</text><text x="456" y="182">Br</text><text x="497" y="182">Kr</text>' +
        '</g>' +
        '<g font-size="10" font-weight="600">' +
        '<text x="155" y="218" text-anchor="middle" fill="var(--ink)">← METALS (lose e⁻, basic oxides)</text>' +
        '<text x="418" y="218" text-anchor="middle" fill="var(--good)">NON-METALS (gain/share e⁻, acidic oxides) →</text>' +
        '<text x="296" y="236" text-anchor="middle" fill="var(--bad)">Dashed box = Mendeleev predicted gap (Gallium, 1875)</text>' +
        '</g>' +
        '</svg>',
      diagramCaption: "The bold stepped line divides metals (left/centre) from non-metals (top right); Mendeleev's predicted gaps (like gallium) confirmed his table's power.",
      whyItWorks:
        "Elements on the left have only 1–3 outer electrons, so it takes far less energy to **lose** them and reveal a full shell underneath — making them metals that form positive ions. Elements on the top right have 5–7 outer electrons, so it is far easier to **gain or share** electrons — making them non-metals.",
      keyPoints: [
        "Mendeleev ordered known elements by atomic mass, left gaps for undiscovered elements (predicting gallium & germanium), and swapped pairs (like Te and I) to keep similar chemical properties aligned.",
        "The modern Periodic Table is ordered strictly by increasing atomic (proton) number — solving Mendeleev's mass-order swaps (caused by isotopes).",
        "Metals sit to the left/centre of the stepped line: good conductors, shiny, malleable, ductile, form positive ions and basic/alkaline oxides.",
        "Non-metals sit at the top right: mostly poor conductors (except graphite), brittle solids or gases, lower m.p./b.p., form negative ions or covalent bonds and acidic oxides.",
        "Testing an element's electrical conductivity and the pH of its dissolved oxide is a fast chemical/physical check for metal vs non-metal.",
      ],
      strategies: [
        "In exam questions on Mendeleev, always mention BOTH **leaving gaps + predicting properties** AND **swapping pairs to group similar chemical properties**.",
        "Remember the two big physical exceptions: **graphite** (a non-metal that conducts electricity) and **mercury** (a metal that is liquid at room temperature).",
        "Oxide shortcut: **Metal oxide → Basic/Alkaline** (pH > 7); **Non-metal oxide → Acidic** (pH < 7).",
      ],
      thinkDeeper:
        "Argon (atomic number 18, relative atomic mass 39.9) is actually heavier on average than potassium (atomic number 19, relative atomic mass 39.1). Why would ordering strictly by atomic mass put potassium in Group 0 and argon in Group 1 — and how does isotope abundance explain why argon is heavier?",
      workedExamples: [
        {
          title: "Predicting Properties of an Undiscovered Element Like Mendeleev",
          problem:
            "Mendeleev knew aluminium (just above his empty gap) had atomic mass 27 and density 2.7 g/cm³, while indium (just below the gap) had atomic mass 115 and density 7.3 g/cm³. Estimate the atomic mass of the missing element (gallium) using the midpoint of its two neighbours.",
          steps: [
            "Take the mean of the atomic masses directly above (Al = 27) and below (In = 115).",
            "Midpoint = {{(27 + 115) / 2 = 142 / 2 = 71}}.",
            "Compare with reality: gallium's true relative atomic mass is 69.7 (Mendeleev predicted ~68)!",
          ],
          answer: "Approximately 71 (actual gallium is 69.7).",
          yourTurn: {
            question:
              "Using the midpoint between silicon (atomic mass 28) above and tin (atomic mass 119) below, estimate the atomic mass of germanium to 1 decimal place.",
            answer: { type: "number", value: 73.5, display: "73.5" },
            solution: "Midpoint = (28 + 119) ÷ 2 = 147 ÷ 2 = 73.5 (true germanium is 72.6!).",
          },
        },
        {
          title: "Classifying an Unknown Element from Lab Tests",
          problem:
            "Element Y is a yellow solid that shatters when tapped with a hammer, does not conduct electricity, and burns in oxygen to form a gas that dissolves in water to give pH 3. Is Element Y a metal or a non-metal? Give two pieces of evidence.",
          steps: [
            "Classification: **Non-metal** (this is actually sulfur!).",
            "Physical evidence: it is **brittle** (shatters) and is a **poor electrical conductor**.",
            "Chemical evidence: it forms an **acidic oxide** (pH 3 < 7).",
          ],
          answer: "Non-metal — it is brittle, does not conduct electricity, and forms an acidic oxide (pH 3).",
          yourTurn: {
            question:
              "What type of oxide (acidic or basic) is formed when a Group 1 or Group 2 metal burns in oxygen?",
            answer: {
              type: "text",
              accept: ["basic", "basic oxide", "alkaline", "alkaline oxide"],
              display: "basic",
            },
            solution: "Metals form basic oxides (soluble metal oxides dissolve in water to form alkaline solutions with pH > 7).",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: group1-alkali-metals
    // =========================================================================
    {
      id: "group1-alkali-metals",
      heading: "Group 1: The Alkali Metals",
      discovery: {
        problem:
          "Drop a pea-sized cube of lithium into water and it fizzes gently across the surface. Drop the exact same size cube of potassium into water and it instantly melts, shoots sparks, and erupts in a lilac flame! Both atoms have just 1 electron in their outer shell — so why is potassium so much more reactive than lithium?",
        idea:
          "Potassium has **4 electron shells** (`2,8,8,1`) compared to lithium's **2 shells** (`2,1`). Its single outer electron sits much further from the positively charged nucleus and is shielded by more inner shells, so the nucleus holds it far more weakly — letting potassium **lose** that electron much more easily!",
      },
      body:
        "The **Group 1 alkali metals** — **lithium (Li)**, **sodium (Na)**, **potassium (K)**, rubidium (Rb), and caesium (Cs) — all have **1 electron in their outer shell** and are very reactive metals.\n\n" +
        "### Physical Properties & Trends Down Group 1\n\n" +
        "- **Soft enough to cut with a knife** (getting softer down the group); shiny silver when freshly cut, then quickly **tarnish** dull grey as they react with oxygen in air.\n" +
        "- **Stored under oil** to keep air (oxygen) and moisture away from their surfaces.\n" +
        "- **Unusually low density** — Li, Na, and K are all less dense than water (1.0 g/cm³), so they **float**! (Density generally increases down the group.)\n" +
        "- **Low melting & boiling points** for metals, which **DECREASE** going down Group 1 (Li 181 °C → Na 98 °C → K 63 °C → Rb 39 °C → Cs 29 °C).\n\n" +
        "### Reactions with Water\n\n" +
        "`alkali metal + water → metal hydroxide + hydrogen`\n\n" +
        "- **Balanced example (sodium):** `2Na + 2H₂O → 2NaOH + H₂`\n" +
        "- The dissolved **metal hydroxide** (LiOH, NaOH, KOH) is a strong **alkali** (turns universal indicator **purple/blue**, pH 13–14) — which is why Group 1 is called the **alkali metals**!\n" +
        "- The **hydrogen gas (H₂)** causes vigorous fizzing/effervescence (burns with a squeaky pop if collected and lit).\n\n" +
        "| Metal | Electronic config | Observations on water | Melting point |\n" +
        "| --- | --- | --- | --- |\n" +
        "| **Lithium (Li)** | `2,1` | Floats, moves slowly across surface, fizzes steadily, disappears | 181 °C |\n" +
        "| **Sodium (Na)** | `2,8,1` | Floats, **melts into a silvery ball**, whizzes rapidly, fizzes vigorously | 98 °C |\n" +
        "| **Potassium (K)** | `2,8,8,1` | Floats, melts instantly, fizzes violently, ignites with a **lilac flame** | 63 °C |\n\n" +
        "Alkali metals also react vigorously with **chlorine gas** to form white solid **metal chlorides** (`2Na + Cl₂ → 2NaCl`) and with **oxygen** to form metal oxides (`4Li + O₂ → 2Li₂O`).\n\n" +
        "### Why Reactivity INCREASES Down Group 1\n\n" +
        "When an alkali metal reacts, each atom **loses its 1 outer electron** to form a `+1` ion (`Li⁺`, `Na⁺`, `K⁺`). Going down Group 1:\n" +
        "1. Atoms have **more electron shells**, so the atomic radius is larger.\n" +
        "2. The outer electron is **further from the positive nucleus** and experiences **greater shielding** by inner electron shells.\n" +
        "3. The electrostatic attraction between the nucleus and outer electron is **weaker**, so the outer electron is **lost more easily** → reactivity increases!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Group 1 reactivity trend showing Lithium (2,1), Sodium (2,8,1), and Potassium (2,8,8,1) increasing in atomic radius and losing their single outer electron more easily down the group">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Why Reactivity INCREASES Down Group 1 (Li → Na → K)</text>' +
        '<g transform="translate(88,118)">' +
        '<circle cx="0" cy="0" r="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />' +
        '<text x="0" y="4" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Li</text>' +
        '<circle cx="0" cy="0" r="24" fill="none" stroke="var(--line)" stroke-width="1.4" />' +
        '<circle cx="0" cy="0" r="38" fill="none" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="4 3" />' +
        '<circle cx="38" cy="0" r="4.5" fill="var(--bad)" />' +
        '<text x="0" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Li (2,1)</text>' +
        '<text x="0" y="80" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">2 shells · strong pull</text>' +
        '<text x="0" y="95" font-size="9.5" text-anchor="middle" fill="var(--brand)">Steady fizz on water</text>' +
        '</g>' +
        '<g transform="translate(262,118)">' +
        '<circle cx="0" cy="0" r="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />' +
        '<text x="0" y="4" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Na</text>' +
        '<circle cx="0" cy="0" r="22" fill="none" stroke="var(--line)" stroke-width="1.3" />' +
        '<circle cx="0" cy="0" r="35" fill="none" stroke="var(--line)" stroke-width="1.3" />' +
        '<circle cx="0" cy="0" r="48" fill="none" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="4 3" />' +
        '<circle cx="48" cy="0" r="4.5" fill="var(--bad)" />' +
        '<text x="0" y="68" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Na (2,8,1)</text>' +
        '<text x="0" y="84" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">3 shells · weaker pull</text>' +
        '<text x="0" y="99" font-size="9.5" text-anchor="middle" fill="var(--brand)">Melts into silvery ball</text>' +
        '</g>' +
        '<g transform="translate(454,118)">' +
        '<circle cx="0" cy="0" r="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />' +
        '<text x="0" y="4" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">K</text>' +
        '<circle cx="0" cy="0" r="21" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="33" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="45" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="57" fill="none" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3" />' +
        '<circle cx="57" cy="0" r="4.8" fill="var(--bad)" />' +
        '<path d="M64 0 L84 0" stroke="var(--bad)" stroke-width="2" />' +
        '<polygon points="88,0 81,-4 81,4" fill="var(--bad)" />' +
        '<text x="0" y="74" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">K (2,8,8,1)</text>' +
        '<text x="0" y="90" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">4 shells · weakest pull</text>' +
        '<text x="0" y="105" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--bad)">Ignites with lilac flame!</text>' +
        '</g>' +
        '<path d="M96 234 L466 234" stroke="var(--bad)" stroke-width="2.2" />' +
        '<polygon points="472,234 462,229 462,239" fill="var(--bad)" />' +
        '<text x="280" y="246" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">More shells → greater distance &amp; shielding → outer e⁻ lost MORE easily → Reactivity ↑</text>' +
        '</svg>',
      diagramCaption: "Going down Group 1, more occupied shells put the single outer electron further from the nucleus, weakening attraction so it is lost much more easily.",
      whyItWorks:
        "Electrostatic attraction between the positive nucleus and negative outer electron weakens sharply as distance grows, and inner electron shells also repel/shield the outer electron. Removing 1 electron from potassium takes significantly less energy than removing 1 electron from lithium.",
      keyPoints: [
        "Group 1 alkali metals (Li, Na, K) are soft, low-density (float on water), stored under oil, and have melting points that DECREASE down the group.",
        "Word equation with water: alkali metal + water → metal hydroxide + hydrogen (e.g., 2K + 2H₂O → 2KOH + H₂).",
        "The resulting metal hydroxide solution is alkaline (universal indicator turns purple/blue).",
        "Observations escalate down the group: Li fizzes steadily → Na melts into a silvery ball & whizzes → K ignites with a lilac flame.",
        "Reactivity INCREASES down Group 1 because larger atoms with more shells hold their single outer electron less tightly, so it is lost more easily.",
      ],
      strategies: [
        "Use the 4-step reactivity chain for full marks: **more shells / larger atom → outer electron further from nucleus (more shielding) → weaker electrostatic attraction → outer electron lost more easily**.",
        "Never write 'metal + water → metal oxide + hydrogen' for Group 1! In cold water they form the **metal hydroxide** (e.g., NaOH) + hydrogen.",
        "Remember the opposite melting-point trend: Group 1 m.p. **decreases** down the group (unlike Group 7 and Group 0, which increase!).",
      ],
      thinkDeeper:
        "Sodium melts into a silvery sphere when dropped on cold water (20 °C), whereas lithium stays solid — even though both reactions are exothermic! Compare their melting points (Li 181 °C vs Na 98 °C) to explain why.",
      workedExamples: [
        {
          title: "Balancing & Conservation of Mass in a Sodium + Water Reaction",
          problem:
            "A student drops 2.3 g of sodium into 100.0 g of water in an open beaker on a digital balance. The balanced equation is `2Na + 2H₂O → 2NaOH + H₂`. After fizzing stops, the balance reads 102.2 g. Calculate the mass of hydrogen gas that escaped.",
          steps: [
            "Calculate the total starting mass of reactants: {{2.3 + 100.0 = 102.3}} g.",
            "By conservation of mass, total products must also weigh 102.3 g.",
            "Mass of escaped H₂ gas = {{102.3 - 102.2 = 0.1}} g.",
          ],
          answer: "0.1 g of hydrogen gas",
          yourTurn: {
            question:
              "When 3.9 g of potassium reacts completely with 120.0 g of water in an open beaker, the final alkaline solution weighs 123.8 g. What mass of hydrogen gas (in grams) escaped?",
            answer: { type: "number", value: 0.1, display: "0.1" },
            solution: "Total reactants = 3.9 + 120.0 = 123.9 g. Escaped H₂ mass = 123.9 − 123.8 = 0.1 g.",
          },
        },
        {
          title: "Predicting Rubidium's Properties Below Potassium",
          problem:
            "Potassium (Period 4, Group 1) melts at 63 °C and ignites with a lilac flame in water. Predict (a) whether rubidium (Period 5, Group 1) melts above or below 63 °C, and (b) how its reaction with water compares to potassium.",
          steps: [
            "Melting points decrease down Group 1, so rubidium melts **below 63 °C** (actual value: 39 °C).",
            "Reactivity increases down Group 1 because rubidium has 5 shells (outer electron even further from the nucleus and lost even more easily), so it reacts **more violently / explosively** than potassium, forming rubidium hydroxide + hydrogen.",
          ],
          answer: "(a) Below 63 °C; (b) Even more violent/explosive reaction forming rubidium hydroxide + hydrogen.",
          yourTurn: {
            question:
              "What colour flame is seen when potassium reacts vigorously with cold water?",
            answer: {
              type: "text",
              accept: ["lilac", "lilac flame", "purple", "light purple", "violet"],
              display: "lilac",
            },
            solution: "Potassium produces enough heat to ignite the hydrogen gas and excite potassium ions, burning with a characteristic **lilac** flame.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: group7-group0
    // =========================================================================
    {
      id: "group7-group0",
      heading: "Group 7 Halogens & Group 0 Noble Gases",
      discovery: {
        problem:
          "Going down Group 1 (Li → Na → K), reactivity **increases** dramatically. Yet going down Group 7 (F₂ → Cl₂ → Br₂ → I₂), reactivity does the exact **OPPOSITE** — it **decreases**! And right next door in Group 0 (He → Ne → Ar), reactivity is essentially **zero**. How can the exact same atomic-size rule explain all three groups at once?",
        idea:
          "Everything hinges on whether an atom wants to **lose**, **gain**, or **keep** electrons! Group 1 atoms **lose** 1 outer electron (easier in bigger atoms); Group 7 atoms **gain** 1 electron into their outer shell (harder in bigger atoms because the nucleus pulls weakly from far away!); Group 0 atoms already have a **full outer shell**, so they neither lose nor gain electrons!",
      },
      body:
        "### Group 7: The Halogens\n\n" +
        "The **halogens** — **fluorine (F₂)**, **chlorine (Cl₂)**, **bromine (Br₂)**, and **iodine (I₂)** — are reactive, toxic non-metals with **7 electrons in their outer shell**. They exist as **diatomic molecules** (two atoms covalently bonded in pairs: `F₂`, `Cl₂`, `Br₂`, `I₂`) and react by **gaining 1 electron** to form `−1` **halide ions** (`F⁻`, `Cl⁻`, `Br⁻`, `I⁻`).\n\n" +
        "| Halogen | Formula | State & colour at 20 °C | Melting point | Boiling point | Reactivity |\n" +
        "| --- | --- | --- | --- | --- | --- |\n" +
        "| **Fluorine** | `F₂` | Pale yellow **gas** | −220 °C | −188 °C | Most reactive |\n" +
        "| **Chlorine** | `Cl₂` | Pale green **gas** | −101 °C | −35 °C | Very reactive |\n" +
        "| **Bromine** | `Br₂` | Red-brown **liquid** | −7 °C | 59 °C | Moderately reactive |\n" +
        "| **Iodine** | `I₂` | Dark grey **solid** (purple vapour) | 114 °C | 184 °C | Least reactive |\n\n" +
        "- **Melting & boiling points INCREASE** down Group 7: molecules become larger and heavier, so intermolecular forces between molecules grow stronger and require more energy to overcome.\n" +
        "- **Reactivity DECREASES** down Group 7: going down the group, atoms have **more electron shells**, so the outer shell is **further from the positive nucleus** with **more shielding** → weaker electrostatic attraction for an incoming electron → **harder to gain 1 electron**.\n" +
        "- **Halogen Displacement Reactions:** A **more reactive halogen displaces a less reactive halogen** from an aqueous solution of its halide salt:\n" +
        "  - `Cl₂ + 2KBr → 2KCl + Br₂` (colourless solution turns **orange-brown** as bromine forms)\n" +
        "  - `Cl₂ + 2KI → 2KCl + I₂` (turns **brown** as iodine forms)\n" +
        "  - `Br₂ + 2KI → 2KBr + I₂` (turns **brown** as iodine forms)\n" +
        "  - `Br₂ + KCl → NO REACTION` and `I₂ + KBr → NO REACTION` (less reactive cannot displace more reactive!).\n\n" +
        "### Group 0: The Noble Gases\n\n" +
        "**Helium (He)**, **neon (Ne)**, **argon (Ar)**, krypton (Kr), and xenon (Xe) are colourless, odourless, **monatomic** (single-atom) gases.\n\n" +
        "- **Why are they unreactive (inert)?** Every noble gas already has a **full outer shell of electrons** (`He: 2`, `Ne: 2,8`, `Ar: 2,8,8`), so their atoms are energetically stable and do not easily lose, gain, or share electrons.\n" +
        "- **Trends down Group 0:** Boiling points and densities **INCREASE** down the group (He −269 °C → Ne −246 °C → Ar −186 °C → Kr −153 °C) because heavier atoms have stronger intermolecular attractions.\n" +
        "- **Everyday uses:** **Helium** in party balloons & airships (low density + non-flammable, unlike hydrogen!); **neon** in glowing signs; **argon** inside filament bulbs & arc welding (inert atmosphere stops hot metal reacting with oxygen).",
      diagram:
        '<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Group 7 Halogens showing physical states from yellow gas F2 to grey solid I2, rising boiling points, and falling reactivity with displacement arrows. Right: Group 0 Noble Gases with full outer shells and rising boiling points">' +
        '<rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />' +
        '<text x="155" y="22" font-size="12.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Group 7: Halogens (Diatomic X₂)</text>' +
        '<text x="435" y="22" font-size="12.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Group 0: Noble Gases</text>' +
        '<line x1="312" y1="14" x2="312" y2="244" stroke="var(--line)" stroke-width="1.2" />' +
        '<g stroke="var(--line)" stroke-width="1.2">' +
        '<rect x="18" y="38" width="192" height="36" rx="8" fill="var(--warn-soft)" />' +
        '<rect x="18" y="84" width="192" height="36" rx="8" fill="var(--brand-soft)" />' +
        '<rect x="18" y="130" width="192" height="36" rx="8" fill="var(--bad-soft)" />' +
        '<rect x="18" y="176" width="192" height="36" rx="8" fill="var(--surface-2)" />' +
        '</g>' +
        '<g font-size="10.5" fill="var(--ink)">' +
        '<text x="28" y="59" font-weight="700">F₂</text><text x="58" y="59">Pale yellow gas · b.p. −188 °C</text>' +
        '<text x="28" y="105" font-weight="700">Cl₂</text><text x="58" y="105">Pale green gas · b.p. −35 °C</text>' +
        '<text x="28" y="151" font-weight="700">Br₂</text><text x="58" y="151">Red-brown liquid · b.p. 59 °C</text>' +
        '<text x="28" y="197" font-weight="700">I₂</text><text x="58" y="197">Dark grey solid · b.p. 184 °C</text>' +
        '</g>' +
        '<path d="M234 206 L234 48" stroke="var(--good)" stroke-width="2.2" />' +
        '<polygon points="234,40 229,50 239,50" fill="var(--good)" />' +
        '<text x="225" y="128" font-size="9.5" font-weight="700" fill="var(--good)" transform="rotate(-90 225 128)" text-anchor="middle">Reactivity ↑</text>' +
        '<path d="M282 48 L282 206" stroke="var(--bad)" stroke-width="2.2" />' +
        '<polygon points="282,214 277,204 287,204" fill="var(--bad)" />' +
        '<text x="294" y="128" font-size="9.5" font-weight="700" fill="var(--bad)" transform="rotate(90 294 128)" text-anchor="middle">Boiling point ↑</text>' +
        '<text x="155" y="236" font-size="10" font-weight="700" text-anchor="middle" fill="var(--brand)">Cl₂ displaces Br⁻ &amp; I⁻ · Br₂ displaces I⁻</text>' +
        '<g transform="translate(382,76)">' +
        '<circle cx="0" cy="0" r="11" fill="var(--info-soft)" stroke="var(--brand)" stroke-width="1.3" />' +
        '<text x="0" y="4" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">He</text>' +
        '<circle cx="0" cy="0" r="22" fill="none" stroke="var(--brand)" stroke-width="1.5" />' +
        '<circle cx="0" cy="-22" r="3.4" fill="var(--brand)" /><circle cx="0" cy="22" r="3.4" fill="var(--brand)" />' +
        '<text x="34" y="-3" font-size="10.5" font-weight="700" fill="var(--ink)">He (2)</text>' +
        '<text x="34" y="11" font-size="9.5" fill="var(--ink-2)">b.p. −269 °C · balloons</text>' +
        '</g>' +
        '<g transform="translate(382,138)">' +
        '<circle cx="0" cy="0" r="11" fill="var(--info-soft)" stroke="var(--brand)" stroke-width="1.3" />' +
        '<text x="0" y="4" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Ne</text>' +
        '<circle cx="0" cy="0" r="19" fill="none" stroke="var(--line)" stroke-width="1.2" />' +
        '<circle cx="0" cy="0" r="28" fill="none" stroke="var(--brand)" stroke-width="1.5" />' +
        '<text x="38" y="-3" font-size="10.5" font-weight="700" fill="var(--ink)">Ne (2,8)</text>' +
        '<text x="38" y="11" font-size="9.5" fill="var(--ink-2)">b.p. −246 °C · glow signs</text>' +
        '</g>' +
        '<g transform="translate(382,200)">' +
        '<circle cx="0" cy="0" r="10" fill="var(--info-soft)" stroke="var(--brand)" stroke-width="1.3" />' +
        '<text x="0" y="3.5" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Ar</text>' +
        '<circle cx="0" cy="0" r="16" fill="none" stroke="var(--line)" stroke-width="1.1" />' +
        '<circle cx="0" cy="0" r="23" fill="none" stroke="var(--line)" stroke-width="1.1" />' +
        '<circle cx="0" cy="0" r="30" fill="none" stroke="var(--brand)" stroke-width="1.5" />' +
        '<text x="38" y="-3" font-size="10.5" font-weight="700" fill="var(--ink)">Ar (2,8,8)</text>' +
        '<text x="38" y="11" font-size="9.5" fill="var(--ink-2)">b.p. −186 °C · inert bulbs</text>' +
        '</g>' +
        '<text x="435" y="246" font-size="9.8" font-weight="700" text-anchor="middle" fill="var(--good)">Full outer shell → Monatomic &amp; Inert</text>' +
        '</svg>',
      diagramCaption: "Group 7 halogens get less reactive but higher-boiling down the group; Group 0 noble gases have full outer shells so remain monatomic and unreactive.",
      whyItWorks:
        "Why do Group 1 and Group 7 have opposite reactivity trends? Because Group 1 atoms must **lose** an electron (easier when far from the nucleus), whereas Group 7 atoms must **gain** an electron (harder when the outer shell is far from the nucleus and heavily shielded by inner shells)!",
      keyPoints: [
        "Halogens (F₂, Cl₂, Br₂, I₂) are diatomic non-metals with 7 outer electrons that gain 1 electron to form −1 halide ions.",
        "Down Group 7: colour darkens (yellow gas → green gas → red-brown liquid → grey solid), melting & boiling points INCREASE, and reactivity DECREASES.",
        "Reactivity decreases down Group 7 because larger atoms with more shells have weaker nuclear attraction to pull in an extra electron.",
        "A more reactive halogen displaces a less reactive halogen from its aqueous halide salt (e.g., Cl₂ + 2KBr → 2KCl + Br₂).",
        "Group 0 noble gases (He, Ne, Ar) are unreactive monatomic gases because they have full outer shells; boiling points and densities increase down the group.",
      ],
      strategies: [
        "To predict physical state at temperature T: if **T < m.p. → solid**; if **m.p. < T < b.p. → liquid**; if **T > b.p. → gas**.",
        "Never forget the `₂` subscript when writing symbol equations for halogens (`Cl₂`, `Br₂`, `I₂`) — they are **diatomic** molecules, whereas noble gases (`He`, `Ne`, `Ar`) are **monatomic**!",
        "Check displacement direction fast: **higher in Group 7 wins** (`Cl₂` beats `Br⁻` and `I⁻`; `Br₂` beats `I⁻` only; `I₂` beats neither).",
      ],
      thinkDeeper:
        "Astatine (At₂) sits directly beneath iodine in Group 7. Predict its physical state at room temperature (20 °C), its colour, and whether iodine solution could displace astatine from aqueous potassium astatide (KAt).",
      workedExamples: [
        {
          title: "Predicting Physical State from Melting & Boiling Points",
          problem:
            "Bromine has a melting point of −7 °C and a boiling point of 59 °C. State the physical state of bromine at (a) −20 °C, (b) 25 °C (Singapore room temperature), and (c) 80 °C.",
          steps: [
            "(a) −20 °C is **below** the melting point (−7 °C) → **solid**.",
            "(b) 25 °C lies **between** −7 °C and 59 °C → **liquid** (the only non-metal liquid at room temperature!).",
            "(c) 80 °C is **above** the boiling point (59 °C) → **gas**.",
          ],
          answer: "(a) Solid; (b) Liquid; (c) Gas.",
          yourTurn: {
            question:
              "Chlorine has a melting point of −101 °C and a boiling point of −35 °C. What is the physical state of chlorine at −60 °C?",
            answer: {
              type: "text",
              accept: ["liquid", "a liquid"],
              display: "liquid",
            },
            solution: "−60 °C is higher than −101 °C (melting point) and lower than −35 °C (boiling point), so chlorine is a **liquid** at −60 °C.",
          },
        },
        {
          title: "Predicting a Halogen Displacement Reaction",
          problem:
            "A student adds pale green chlorine water to colourless potassium iodide (KI) solution. Predict what is observed and write the balanced symbol equation.",
          steps: [
            "Check Group 7 reactivity: chlorine is **above** iodine, so chlorine is **more reactive**.",
            "Chlorine displaces iodine from potassium iodide: `chlorine + potassium iodide → potassium chloride + iodine`.",
            "Balance the diatomic halogens (`Cl₂` and `I₂`): `Cl₂ + 2KI → 2KCl + I₂`.",
            "Observation: the colourless solution turns **brown** (due to dissolved aqueous iodine).",
          ],
          answer: "The solution turns brown; Cl₂ + 2KI → 2KCl + I₂.",
          yourTurn: {
            question:
              "Name the element displaced (produced) when aqueous bromine is added to colourless potassium iodide solution.",
            answer: {
              type: "text",
              accept: ["iodine", "i2"],
              display: "iodine",
            },
            solution: "Bromine is more reactive than iodine, so Br₂ + 2KI → 2KBr + I₂ displaces **iodine** (turning the solution brown).",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Give the relative mass and charge of a proton, neutron, and electron.", back: "Proton: mass 1, charge +1. Neutron: mass 1, charge 0. Electron: negligible mass (~1/1836), charge −1." },
      { front: "How do you calculate the number of neutrons in an atom?", back: "Neutrons = mass number − atomic number." },
      { front: "Define the term 'isotope'.", back: "Atoms of the same element with the same number of protons (atomic number) but different numbers of neutrons (mass number)." },
      { front: "What are the shell capacities for the first 20 elements (up to calcium)?", back: "2, 8, 8, 2 (filled from the innermost shell outwards)." },
      { front: "How do electronic configurations link to Group and Period?", back: "Outer-shell electrons = Group number (except helium, 2, in Group 0); number of occupied shells = Period number." },
      { front: "Give two key things Mendeleev did that made his 1869 Periodic Table succeed.", back: "He left gaps for undiscovered elements (predicting properties of gallium & germanium) and swapped pairs (like Te & I) so similar chemical properties lined up in groups." },
      { front: "How is the modern Periodic Table ordered, and why?", back: "Strictly by increasing atomic (proton) number, which resolves mass-order anomalies caused by isotopes." },
      { front: "Compare metal oxides and non-metal oxides in water.", back: "Metals form basic/alkaline oxides (pH > 7 if soluble); non-metals form acidic oxides (pH < 7)." },
      { front: "Write the general word equation for a Group 1 alkali metal reacting with water.", back: "alkali metal + water → metal hydroxide + hydrogen (e.g., 2Na + 2H₂O → 2NaOH + H₂)." },
      { front: "State the observation when potassium reacts with cold water.", back: "Floats, melts instantly, fizzes violently, and ignites with a lilac flame; universal indicator turns purple/blue." },
      { front: "Why does reactivity INCREASE down Group 1?", back: "Atoms have more shells (larger radius), so the single outer electron is further from the nucleus with more shielding, held less strongly, and lost more easily." },
      { front: "State the room-temperature states & colours of Cl₂, Br₂, and I₂.", back: "Cl₂: pale green gas; Br₂: red-brown liquid; I₂: dark grey solid (purple vapour)." },
      { front: "Why does reactivity DECREASE down Group 7?", back: "Atoms have more shells so the outer shell is further from the nucleus with more shielding, giving weaker attraction for an incoming electron — harder to gain 1 electron." },
      { front: "Why are Group 0 noble gases unreactive and monatomic?", back: "They already have a full outer shell of electrons (2 for He; 8 for Ne, Ar, Kr), so they do not easily lose, gain, or share electrons." },
    ],
    mustKnow: [
      "State the relative mass, charge, and location of protons, neutrons, and electrons.",
      "Calculate protons, neutrons, and electrons from atomic number and mass number, and identify isotopes.",
      "Write electronic configurations for elements 1 to 20 (up to calcium 2,8,8,2) and deduce Group & Period.",
      "Explain Mendeleev's gaps, predictions (gallium/germanium), and pair swaps, and how modern ordering by atomic number improved it.",
      "Contrast physical and chemical properties of metals vs non-metals, including basic vs acidic oxides and exceptions (graphite, mercury).",
      "Describe Group 1 physical properties (soft, low density, stored under oil, decreasing m.p.) and reactions with water/chlorine/oxygen.",
      "Explain in terms of shells, distance, shielding, and electrostatic attraction why Group 1 reactivity INCREASES down the group.",
      "State Group 7 physical trends (diatomic, rising m.p./b.p., darkening colour) and explain why reactivity DECREASES down the group.",
      "Predict outcomes, colour changes, and balanced equations for halogen displacement reactions.",
      "Explain why Group 0 noble gases are inert and monatomic, why their boiling points rise down the group, and list everyday uses.",
    ],
    misconceptions: [
      {
        wrong: "Helium has 2 outer electrons so it belongs in Group 2 with magnesium and calcium.",
        right: "Helium's 2 electrons completely FILL its first shell, making it inert like neon and argon — so helium belongs in **Group 0**.",
      },
      {
        wrong: "The atomic number is always the top number on a Periodic Table tile.",
        right: "Different tables place atomic number at the top or bottom! Always remember: **atomic number is the SMALLER number** (protons), and **mass number is the LARGER number** (protons + neutrons).",
      },
      {
        wrong: "Potassium (Z = 19) has the electronic configuration 2, 8, 9.",
        right: "At Year 9 / GCSE level, the 3rd shell holds 8 electrons before the 4th shell starts, so potassium is **2,8,8,1** (Group 1, Period 4) and calcium is **2,8,8,2**.",
      },
      {
        wrong: "Group 1 metals react with water to form metal oxides and oxygen gas.",
        right: "Alkali metals react with cold water to form an alkaline **metal hydroxide** solution and **hydrogen** gas (`2Na + 2H₂O → 2NaOH + H₂`).",
      },
      {
        wrong: "Melting points increase down EVERY group in the Periodic Table.",
        right: "Melting & boiling points **INCREASE** down Group 7 and Group 0, but **DECREASE** down Group 1 alkali metals (Li 181 °C → Na 98 °C → K 63 °C).",
      },
      {
        wrong: "Bromine can displace chlorine from sodium chloride solution.",
        right: "Chlorine is HIGHER and MORE reactive than bromine in Group 7, so `Br₂ + NaCl` gives **no reaction**. Only a MORE reactive halogen displaces a less reactive one!",
      },
    ],
    examMistakes: [
      "Writing 'same number of electrons, different protons' when defining isotopes — isotopes ALWAYS have the **same number of protons** and a **different number of neutrons**.",
      "Forgetting the word **electrostatic** or **outer electron lost/gained** when explaining Group 1 and Group 7 reactivity trends.",
      "Writing monatomic `Cl` or `Br` instead of diatomic `Cl₂` or `Br₂` in halogen displacement symbol equations.",
      "Confusing Group 1 (reactivity INCREASES down) with Group 7 (reactivity DECREASES down) — always check whether the atom is LOSING or GAINING an electron!",
      "Saying 'noble gases have 8 outer electrons' without noting **helium has 2** (just say **a full outer shell** to be 100% accurate for all of Group 0!).",
      "Forgetting to include **hydrogen** as a product of `alkali metal + water → metal hydroxide + hydrogen`.",
      "Mixing up **brittle** (shatters when hit — non-metals) with **malleable** (bends/hammers into shape — metals).",
    ],
    mnemonics: [
      {
        topic: "Atomic & Mass Number",
        device: "PEN & MAN (Protons = Electrons = atomic Number; Mass − Atomic = Neutrons)",
        explanation: "Fast recall for counting all three subatomic particles in any neutral atom.",
      },
      {
        topic: "Group 1 vs Group 7 Reactivity",
        device: "Group 1: Bigger atom = Better Loser (Reactivity ↑); Group 7: Smaller atom = Stronger Grabber (Reactivity ↓)",
        explanation: "Connects atomic size directly to losing 1 electron (easier when larger) vs gaining 1 electron (easier when smaller).",
      },
      {
        topic: "Halogen States at 20 °C",
        device: "F & Cl Fly (Gas), Br Brews (Liquid), I is Ice-solid (Solid)",
        explanation: "Tracks the rise in boiling point down Group 7: gas → gas → liquid → solid.",
      },
    ],
    realWorld: [
      {
        emoji: "🔋",
        title: "Lithium-Ion Batteries in Every Phone & EV",
        detail: "Lithium sits at the very top of Group 1 — it is the lightest metal on Earth (density 0.53 g/cm³) and readily gives up its single outer electron, making it ideal for lightweight rechargeable batteries.",
      },
      {
        emoji: "🏊",
        title: "Halogens Keeping Water & Teeth Safe",
        detail: "Fluoride ions (F⁻) strengthen tooth enamel against decay, trace chlorine (Cl₂) disinfects Singapore's NEWater and swimming pools, and iodine solutions sterilise hospital wounds.",
      },
      {
        emoji: "🎈",
        title: "Why Airships Switched from Hydrogen to Helium",
        detail: "Hydrogen is slightly less dense than helium, but it is explosively flammable. Helium has a full outer shell (Group 0), giving low density with total chemical inertness.",
      },
      {
        emoji: "💡",
        title: "Argon Inside Incandescent Bulbs & Welding",
        detail: "White-hot tungsten filaments and molten steel welds would instantly burn in air; surrounding them with unreactive Group 0 argon gas blocks oxygen from reaching the hot metal.",
      },
    ],
    videos: [
      { title: "Atomic Structure, Isotopes & Electron Shells (2,8,8,2)", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Chemistry+atomic+structure+electron+shells+isotopes" },
      { title: "Mendeleev & Development of the Periodic Table", channel: "FreeScienceLessons", url: "https://www.youtube.com/results?search_query=FreeScienceLessons+Mendeleev+periodic+table+metals+non+metals" },
      { title: "Group 1 Alkali Metals & Water Reactions", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Chemistry+group+1+alkali+metals+reactivity" },
      { title: "Group 7 Halogens, Displacement & Group 0 Noble Gases", channel: "FreeScienceLessons", url: "https://www.youtube.com/results?search_query=FreeScienceLessons+group+7+halogens+displacement+group+0+noble+gases" },
    ],
    formulas: [
      { name: "Number of Protons", formula: "Protons = Atomic Number (Z)", note: "Defines the element; equals electrons in a neutral atom." },
      { name: "Number of Neutrons", formula: "Neutrons = Mass Number (A) − Atomic Number (Z)", note: "Isotopes differ ONLY in neutron number." },
      { name: "Shell Capacity Rule (Z ≤ 20)", formula: "2, 8, 8, 2", note: "Occupied shells = Period; outer electrons = Group (except He in Group 0)." },
      { name: "Relative Atomic Mass (2 isotopes)", formula: "{{A_r = ((%1 * m1) + (%2 * m2)) / 100}}", note: "Explains why chlorine has Aᵣ = 35.5." },
      { name: "Group 1 + Water (Word)", formula: "alkali metal + water → metal hydroxide + hydrogen", note: "Forms an alkaline solution (pH > 7)." },
      { name: "Sodium + Water (Symbol)", formula: "2Na + 2H₂O → 2NaOH + H₂", note: "Same balanced 2 : 2 : 2 : 1 ratio for Li and K." },
      { name: "Group 1 + Chlorine", formula: "2Na + Cl₂ → 2NaCl", note: "Produces a white ionic solid (metal chloride)." },
      { name: "Halogen Displacement", formula: "Cl₂ + 2KBr → 2KCl + Br₂", note: "More reactive halogen displaces less reactive halide ion." },
      { name: "State at Temperature T", formula: "T < m.p. → solid · m.p. < T < b.p. → liquid · T > b.p. → gas", note: "Works for predicting halogen and noble gas states." },
      { name: "Group 0 Electron Stability", formula: "Full outer shell (He: 2; Ne: 2,8; Ar: 2,8,8)", note: "Causes monatomic, inert behaviour." },
    ],
  },
};
