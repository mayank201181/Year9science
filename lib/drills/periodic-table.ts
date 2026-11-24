import type { Drill } from "./types.ts";

function clean(n: number, dp = 2): number {
  return Number(n.toFixed(dp));
}

interface ElementRow {
  z: number;
  sym: string;
  name: string;
  mass: number;
  config: string;
  group: number;
  period: number;
  isotopes: number[];
}

const ELEMENTS_20: ElementRow[] = [
  { z: 1, sym: "H", name: "hydrogen", mass: 1, config: "1", group: 1, period: 1, isotopes: [1, 2, 3] },
  { z: 2, sym: "He", name: "helium", mass: 4, config: "2", group: 0, period: 1, isotopes: [3, 4] },
  { z: 3, sym: "Li", name: "lithium", mass: 7, config: "2,1", group: 1, period: 2, isotopes: [6, 7] },
  { z: 4, sym: "Be", name: "beryllium", mass: 9, config: "2,2", group: 2, period: 2, isotopes: [9] },
  { z: 5, sym: "B", name: "boron", mass: 11, config: "2,3", group: 3, period: 2, isotopes: [10, 11] },
  { z: 6, sym: "C", name: "carbon", mass: 12, config: "2,4", group: 4, period: 2, isotopes: [12, 13, 14] },
  { z: 7, sym: "N", name: "nitrogen", mass: 14, config: "2,5", group: 5, period: 2, isotopes: [14, 15] },
  { z: 8, sym: "O", name: "oxygen", mass: 16, config: "2,6", group: 6, period: 2, isotopes: [16, 17, 18] },
  { z: 9, sym: "F", name: "fluorine", mass: 19, config: "2,7", group: 7, period: 2, isotopes: [19] },
  { z: 10, sym: "Ne", name: "neon", mass: 20, config: "2,8", group: 0, period: 2, isotopes: [20, 21, 22] },
  { z: 11, sym: "Na", name: "sodium", mass: 23, config: "2,8,1", group: 1, period: 3, isotopes: [23] },
  { z: 12, sym: "Mg", name: "magnesium", mass: 24, config: "2,8,2", group: 2, period: 3, isotopes: [24, 25, 26] },
  { z: 13, sym: "Al", name: "aluminium", mass: 27, config: "2,8,3", group: 3, period: 3, isotopes: [27] },
  { z: 14, sym: "Si", name: "silicon", mass: 28, config: "2,8,4", group: 4, period: 3, isotopes: [28, 29, 30] },
  { z: 15, sym: "P", name: "phosphorus", mass: 31, config: "2,8,5", group: 5, period: 3, isotopes: [31] },
  { z: 16, sym: "S", name: "sulfur", mass: 32, config: "2,8,6", group: 6, period: 3, isotopes: [32, 33, 34] },
  { z: 17, sym: "Cl", name: "chlorine", mass: 35, config: "2,8,7", group: 7, period: 3, isotopes: [35, 37] },
  { z: 18, sym: "Ar", name: "argon", mass: 40, config: "2,8,8", group: 0, period: 3, isotopes: [36, 38, 40] },
  { z: 19, sym: "K", name: "potassium", mass: 39, config: "2,8,8,1", group: 1, period: 4, isotopes: [39, 40, 41] },
  { z: 20, sym: "Ca", name: "calcium", mass: 40, config: "2,8,8,2", group: 2, period: 4, isotopes: [40, 42, 44] },
];

const ALKALI_METALS = [
  { name: "lithium", sym: "Li", mp: 181 },
  { name: "sodium", sym: "Na", mp: 98 },
  { name: "potassium", sym: "K", mp: 63 },
  { name: "rubidium", sym: "Rb", mp: 39 },
  { name: "caesium", sym: "Cs", mp: 29 },
] as const;

interface StateElem {
  name: string;
  formula: string;
  mp: number;
  bp: number;
  group: "Group 7" | "Group 0";
}

const GROUP7_0_STATES: StateElem[] = [
  { name: "fluorine", formula: "F₂", mp: -220, bp: -188, group: "Group 7" },
  { name: "chlorine", formula: "Cl₂", mp: -101, bp: -35, group: "Group 7" },
  { name: "bromine", formula: "Br₂", mp: -7, bp: 59, group: "Group 7" },
  { name: "iodine", formula: "I₂", mp: 114, bp: 184, group: "Group 7" },
  { name: "helium", formula: "He", mp: -272, bp: -269, group: "Group 0" },
  { name: "neon", formula: "Ne", mp: -249, bp: -246, group: "Group 0" },
  { name: "argon", formula: "Ar", mp: -189, bp: -186, group: "Group 0" },
  { name: "krypton", formula: "Kr", mp: -157, bp: -153, group: "Group 0" },
  { name: "xenon", formula: "Xe", mp: -112, bp: -108, group: "Group 0" },
];

const DISPLACEMENTS = [
  { hal: "chlorine", halF: "Cl₂", salt: "potassium bromide", saltF: "KBr", prodSaltF: "KCl", outF: "Br₂" },
  { hal: "chlorine", halF: "Cl₂", salt: "sodium bromide", saltF: "NaBr", prodSaltF: "NaCl", outF: "Br₂" },
  { hal: "chlorine", halF: "Cl₂", salt: "potassium iodide", saltF: "KI", prodSaltF: "KCl", outF: "I₂" },
  { hal: "chlorine", halF: "Cl₂", salt: "sodium iodide", saltF: "NaI", prodSaltF: "NaCl", outF: "I₂" },
  { hal: "bromine", halF: "Br₂", salt: "potassium iodide", saltF: "KI", prodSaltF: "KBr", outF: "I₂" },
  { hal: "bromine", halF: "Br₂", salt: "sodium iodide", saltF: "NaI", prodSaltF: "NaBr", outF: "I₂" },
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Subatomic Particles, Isotopes & Electron Shells
  // =========================================================================
  {
    id: "periodic-table.subatomic-shells",
    topicId: "periodic-table",
    title: "Protons, Neutrons, Isotopes & Shells",
    level: 1,
    guideRef: "atomic-structure-shells",
    generate(rng, tier) {
      if (tier === 1) {
        const el = rng.pick(ELEMENTS_20);
        const mass = rng.pick(el.isotopes);
        const neutrons = mass - el.z;
        const ask = rng.pick(["neutrons", "mass", "electrons"] as const);
        if (ask === "neutrons") {
          return {
            prompt: `A neutral atom of **${el.name}-${mass}** (${el.sym}) has atomic number **${el.z}** and mass number **${mass}**. How many **neutrons** are in its nucleus?`,
            answer: { type: "number", value: neutrons, display: `${neutrons}` },
            traps: [
              { spec: { type: "number", value: mass + el.z }, feedback: "Subtract atomic number from mass number (A − Z), do not add them." },
            ],
            hint: `Neutrons = mass number − atomic number (${mass} − ${el.z}).`,
            solution: [
              `Neutrons = mass number − atomic number = {{${mass} - ${el.z} = ${neutrons}}}.`,
            ],
          };
        }
        if (ask === "mass") {
          return {
            prompt: `An isotope of **${el.name}** (${el.sym}) has **${el.z} protons** and **${neutrons} neutrons**. What is its **mass number**?`,
            answer: { type: "number", value: mass, display: `${mass}` },
            traps: [
              { spec: { type: "number", value: el.z * 2 + neutrons }, feedback: "Electrons have negligible mass — add ONLY protons + neutrons." },
            ],
            hint: `Mass number = protons + neutrons (${el.z} + ${neutrons}).`,
            solution: [
              `Mass number = protons + neutrons = {{${el.z} + ${neutrons} = ${mass}}}.`,
            ],
          };
        }
        return {
          prompt: `A neutral atom of **${el.name}-${mass}** (${el.sym}) has atomic number **${el.z}** and mass number **${mass}**. How many **electrons** orbit its nucleus?`,
          answer: { type: "number", value: el.z, display: `${el.z}` },
          traps:
            mass !== el.z
              ? [{ spec: { type: "number", value: mass }, feedback: `${mass} is the mass number (protons + neutrons); in a neutral atom, electrons = atomic number.` }]
              : undefined,
          hint: "In a neutral atom, electrons = protons = atomic number.",
          solution: [
            `A neutral atom has equal protons and electrons → **${el.z}** electrons.`,
          ],
        };
      }

      if (tier === 2) {
        // Electronic configuration (Z = 3..20) or Period/Group lookup across isotopes
        const el = rng.pick(ELEMENTS_20.slice(2));
        const mass = rng.pick(el.isotopes);
        const mode = rng.pick(["config", "outer", "period"] as const);
        if (mode === "config") {
          const dots = el.config.replace(/,/g, ".");
          const dashes = el.config.replace(/,/g, "-");
          return {
            prompt: `Write the electronic configuration (using commas) for a neutral atom of **${el.name}-${mass}** (atomic number **${el.z}**).`,
            answer: { type: "text", accept: [el.config, dots, dashes], display: el.config },
            hint: `Fill ${el.z} electrons from the inside out using shell capacities 2, 8, 8, 2.`,
            solution: [
              `Atomic number ${el.z} gives ${el.z} electrons.`,
              `Filling shells (2, 8, 8, 2) gives **${el.config}**.`,
            ],
          };
        }
        if (mode === "outer") {
          const outer = Number(el.config.split(",").pop());
          return {
            prompt: `An atom of **${el.name}-${mass}** has atomic number **${el.z}**. How many electrons sit in its **outermost shell**?`,
            answer: { type: "number", value: outer, display: `${outer}` },
            hint: `Write the configuration of ${el.z} electrons (2, 8, 8, 2) and read the last number.`,
            solution: [
              `Electronic configuration of ${el.sym} (Z = ${el.z}) is ${el.config}.`,
              `The outermost shell contains **${outer}** electron${outer === 1 ? "" : "s"}.`,
            ],
          };
        }
        return {
          prompt: `An atom of **${el.name}-${mass}** has atomic number **${el.z}**. Which **Period** (number of occupied shells) does it belong to?`,
          answer: { type: "number", value: el.period, display: `${el.period}` },
          hint: `Write the electronic configuration for Z = ${el.z} and count how many shells are occupied.`,
          solution: [
            `Electronic configuration of ${el.sym} is ${el.config}, which occupies **${el.period}** shells → **Period ${el.period}**.`,
          ],
        };
      }

      // Tier 3: Relative atomic mass from two isotopes (exact 1 d.p.) OR ion electron count
      if (rng.bool(0.65)) {
        const el = rng.pick([
          { name: "boron", m1: 10, m2: 11 },
          { name: "chlorine", m1: 35, m2: 37 },
          { name: "copper", m1: 63, m2: 65 },
          { name: "bromine", m1: 79, m2: 81 },
          { name: "lithium", m1: 6, m2: 7 },
          { name: "gallium", m1: 69, m2: 71 },
          { name: "silver", m1: 107, m2: 109 },
        ]);
        const p1 = rng.pick([10, 20, 25, 30, 40, 60, 70, 75, 80, 90]);
        const p2 = 100 - p1;
        const ar = clean((p1 * el.m1 + p2 * el.m2) / 100, 2);
        const swapped = clean((p2 * el.m1 + p1 * el.m2) / 100, 2);
        return {
          prompt: `A sample of **${el.name}** contains **${p1}%** ${el.name}-${el.m1} and **${p2}%** ${el.name}-${el.m2}. Calculate its relative atomic mass.`,
          answer: { type: "number", value: ar, display: `${ar}` },
          traps:
            swapped !== ar
              ? [{ spec: { type: "number", value: swapped }, feedback: "Check which percentage goes with which isotope mass!" }]
              : undefined,
          hint: `Use ((${p1} × ${el.m1}) + (${p2} × ${el.m2})) ÷ 100.`,
          solution: [
            `Weighted sum = {{${p1} * ${el.m1} + ${p2} * ${el.m2} = ${p1 * el.m1 + p2 * el.m2}}}.`,
            `Relative atomic mass = {{${p1 * el.m1 + p2 * el.m2} / 100 = ${ar}}}.`,
          ],
        };
      }
      const ions = [
        { label: "Li⁺", z: 3, q: 1 },
        { label: "Na⁺", z: 11, q: 1 },
        { label: "Mg²⁺", z: 12, q: 2 },
        { label: "Al³⁺", z: 13, q: 3 },
        { label: "K⁺", z: 19, q: 1 },
        { label: "Ca²⁺", z: 20, q: 2 },
        { label: "F⁻", z: 9, q: -1 },
        { label: "Cl⁻", z: 17, q: -1 },
        { label: "O²⁻", z: 8, q: -2 },
        { label: "S²⁻", z: 16, q: -2 },
        { label: "N³⁻", z: 7, q: -3 },
        { label: "P³⁻", z: 15, q: -3 },
      ];
      const ion = rng.pick(ions);
      const electrons = ion.z - ion.q;
      const wrongSign = ion.z + ion.q;
      return {
        prompt: `How many **electrons** are in a **${ion.label}** ion (atomic number **${ion.z}**)?`,
        answer: { type: "number", value: electrons, display: `${electrons}` },
        traps: [
          {
            spec: { type: "number", value: wrongSign },
            feedback: "Remember electrons are NEGATIVE: a positive ion LOST electrons, while a negative ion GAINED electrons!",
          },
        ],
        hint: ion.q > 0 ? `A ${ion.q}+ charge means the atom LOST ${ion.q} electron(s).` : `A ${Math.abs(ion.q)}− charge means the atom GAINED ${Math.abs(ion.q)} electron(s).`,
        solution: [
          `Neutral atom has ${ion.z} electrons.`,
          ion.q > 0
            ? `Charge +${ion.q} means ${ion.q} electron(s) lost → {{${ion.z} - ${ion.q} = ${electrons}}} electrons.`
            : `Charge ${ion.q} means ${Math.abs(ion.q)} electron(s) gained → {{${ion.z} + ${Math.abs(ion.q)} = ${electrons}}} electrons.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 2): Mendeleev Gap Predictions & Group Trends
  // =========================================================================
  {
    id: "periodic-table.mendeleev-predictions",
    topicId: "periodic-table",
    title: "Mendeleev Gap Predictions",
    level: 2,
    guideRef: "mendeleev-layout",
    generate(rng, tier) {
      const groupName = rng.pick(["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6", "Group 7"]);
      const symbol = rng.pick(["X", "Y", "Q", "E", "M", "R"]);

      if (tier === 1) {
        // Estimate missing atomic mass from elements directly above and below in a group
        const above = rng.int(12, 48);
        const gap = rng.int(40, 100);
        const below = above + gap;
        const est = clean((above + below) / 2, 1);
        const traps = [
          {
            spec: { type: "number" as const, value: above + below },
            feedback: "You added the two atomic masses without dividing by 2 to find the midpoint!",
          },
          ...(below - above !== est
            ? [
                {
                  spec: { type: "number" as const, value: below - above },
                  feedback: "Do not subtract — find the MEAN (midpoint) by adding both masses and dividing by 2.",
                },
              ]
            : []),
        ];
        return {
          prompt: `In a Mendeleev-style table, an undiscovered element **${symbol}** sits in **${groupName}** directly between an element above (atomic mass **${above}**) and an element below (atomic mass **${below}**). Estimate the atomic mass of **${symbol}** using the midpoint.`,
          answer: { type: "number", value: est, display: `${est}` },
          traps,
          hint: `Midpoint = (${above} + ${below}) ÷ 2.`,
          solution: [
            `Estimate = {{(${above} + ${below}) / 2 = ${est}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Estimate density (in g/cm³) using midpoint to 2 d.p. (exact)
        const d1Tenths = rng.int(12, 46); // 1.2 to 4.6
        const diffTenths = rng.int(14, 58) * 2; // even tenths so midpoint is exact 1 d.p.!
        const d1 = clean(d1Tenths / 10, 1);
        const d2 = clean((d1Tenths + diffTenths) / 10, 1);
        const est = clean((d1 + d2) / 2, 1);
        return {
          prompt: `Using Mendeleev's method, element **${symbol}** in **${groupName}** sits between an element above with density **${d1} g/cm³** and an element below with density **${d2} g/cm³**. Predict the density of **${symbol}** in g/cm³.`,
          answer: { type: "number", value: est, display: `${est}` },
          traps: [
            { spec: { type: "number", value: clean(d1 + d2, 1) }, feedback: "You added the two densities without dividing by 2!" },
          ],
          hint: `Take the mean of ${d1} and ${d2}: (${d1} + ${d2}) ÷ 2.`,
          solution: [
            `Predicted density = {{(${d1} + ${d2}) / 2 = ${est}}} g/cm³.`,
          ],
        };
      }

      // Tier 3: Work backwards from a predicted midpoint mass OR compute neutron difference of a swapped pair
      if (rng.bool(0.55)) {
        const above = rng.int(14, 52);
        const mid = rng.int(above + 18, above + 56);
        const below = 2 * mid - above;
        return {
          prompt: `In **${groupName}**, Mendeleev predicts a missing element **${symbol}** has midpoint atomic mass **${mid}**. The known element directly above **${symbol}** has atomic mass **${above}**. What is the atomic mass of the element directly below **${symbol}**?`,
          answer: { type: "number", value: below, display: `${below}` },
          traps: [
            { spec: { type: "number", value: clean((above + mid) / 2, 1) }, feedback: `${mid} is ALREADY the midpoint — solve (${above} + below) ÷ 2 = ${mid}!` },
          ],
          hint: `Since (${above} + below) ÷ 2 = ${mid}, compute 2 × ${mid} − ${above}.`,
          solution: [
            `(${above} + below) ÷ 2 = ${mid} → ${above} + below = {{2 * ${mid} = ${2 * mid}}}.`,
            `Below = {{${2 * mid} - ${above} = ${below}}}.`,
          ],
        };
      }
      // Swapped-pair neutron comparison: Element A has z protons & mass mA; Element B has z+1 protons & mass mB < mA
      const zA = rng.int(18, 56);
      const zB = zA + 1;
      const nA = zA + rng.int(4, 16);
      const mA = zA + nA;
      const diffMass = rng.int(1, 3);
      const mB = mA - diffMass;
      const nB = mB - zB;
      const nDiff = nA - nB;
      return {
        prompt: `Like argon and potassium, Element A (atomic number **${zA}**, mass number **${mA}**) has a higher mass than Element B (atomic number **${zB}**, mass number **${mB}**). How many MORE neutrons does Element A have than Element B?`,
        answer: { type: "number", value: nDiff, display: `${nDiff}` },
        traps: [
          { spec: { type: "number", value: diffMass }, feedback: `${diffMass} is the mass-number difference — remember B also has 1 extra proton, so calculate both neutron counts first!` },
        ],
        hint: `Find neutrons in A (${mA} − ${zA}) and neutrons in B (${mB} − ${zB}), then subtract.`,
        solution: [
          `Neutrons in A = {{${mA} - ${zA} = ${nA}}}; neutrons in B = {{${mB} - ${zB} = ${nB}}}.`,
          `Difference = {{${nA} - ${nB} = ${nDiff}}} more neutrons in A.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2): Group 1 Alkali Metal Reactions & Mass Conservation
  // =========================================================================
  {
    id: "periodic-table.group1-reactions",
    topicId: "periodic-table",
    title: "Group 1 Alkali Metal Stoichiometry & Mass",
    level: 2,
    guideRef: "group1-alkali-metals",
    generate(rng, tier) {
      const m = rng.pick(ALKALI_METALS);

      if (tier === 1) {
        // Balanced equation 2M + 2H2O -> 2MOH + H2 or 2M + Cl2 -> 2MCl
        const k = rng.int(4, 35);
        const atoms = 2 * k;
        if (rng.bool()) {
          return {
            prompt: `Using the balanced equation \`2${m.sym} + 2H₂O → 2${m.sym}OH + H₂\`, how many molecules of **hydrogen gas (H₂)** form when **${atoms} atoms** of ${m.name} react completely with water?`,
            answer: { type: "number", value: k, display: `${k}` },
            traps: [
              { spec: { type: "number", value: atoms }, feedback: "Check the 2 : 1 ratio — every 2 metal atoms produce 1 H₂ molecule, so divide by 2." },
            ],
            hint: `Ratio ${m.sym} : H₂ is 2 : 1, so divide ${atoms} by 2.`,
            solution: [
              `Every 2 atoms of ${m.sym} produce 1 molecule of H₂.`,
              `Molecules of H₂ = {{${atoms} / 2 = ${k}}}.`,
            ],
          };
        }
        return {
          prompt: `Using the balanced equation \`2${m.sym} + Cl₂ → 2${m.sym}Cl\`, how many **${m.name} atoms** are needed to react completely with **${k} molecules** of chlorine gas (Cl₂)?`,
          answer: { type: "number", value: atoms, display: `${atoms}` },
          traps: [
            { spec: { type: "number", value: k }, feedback: "Each diatomic Cl₂ molecule requires TWO Group 1 metal atoms (ratio 2 : 1)." },
          ],
          hint: `Multiply ${k} molecules of Cl₂ by 2.`,
          solution: [
            `Ratio ${m.sym} : Cl₂ is 2 : 1.`,
            `Atoms of ${m.sym} = {{${k} * 2 = ${atoms}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Open-flask conservation of mass: mMetal + mWater -> mFinal + mH2
        const mMetal = clean(rng.int(11, 58) / 10, 1); // 1.1 to 5.8 g
        const mWater = rng.int(40, 150);
        const mH2 = clean(rng.int(1, 5) / 10, 1); // 0.1 to 0.5 g
        const totalStart = clean(mMetal + mWater, 1);
        const mFinal = clean(totalStart - mH2, 1);
        return {
          prompt: `A student drops **${mMetal} g** of ${m.name} into **${mWater} g** of cold water in an open beaker. After the vigorous reaction finishes, the alkaline ${m.name} hydroxide solution weighs **${mFinal} g**. What mass (in g) of **hydrogen gas** escaped?`,
          answer: { type: "number", value: mH2, display: `${mH2}` },
          traps: [
            { spec: { type: "number", value: totalStart }, feedback: `${totalStart} g is the total starting mass — subtract the final mass (${mFinal} g) to find the escaped hydrogen.` },
          ],
          hint: `Total reactants = ${mMetal} + ${mWater} = ${totalStart} g. Subtract ${mFinal} g.`,
          solution: [
            `Total starting mass = {{${mMetal} + ${mWater} = ${totalStart}}} g.`,
            `Mass of escaped H₂ = {{${totalStart} - ${mFinal} = ${mH2}}} g.`,
          ],
        };
      }

      // Tier 3: 4M + O2 -> 2M2O stoichiometry OR sealed chloride reaction mass + ratio
      if (rng.bool(0.5)) {
        const o2 = rng.int(5, 32);
        const atoms = o2 * 4;
        return {
          prompt: `Alkali metals tarnish in oxygen according to \`4${m.sym} + O₂ → 2${m.sym}₂O\`. How many **${m.name} atoms** react completely with **${o2} molecules** of oxygen gas (O₂)?`,
          answer: { type: "number", value: atoms, display: `${atoms}` },
          traps: [
            { spec: { type: "number", value: o2 * 2 }, feedback: "Check the balancing number in front of the alkali metal: 4 atoms react per 1 O₂ molecule!" },
          ],
          hint: `Ratio ${m.sym} : O₂ is 4 : 1, so multiply ${o2} by 4.`,
          solution: [
            `4 atoms of ${m.sym} react with every 1 molecule of O₂.`,
            `Total ${m.sym} atoms = {{${o2} * 4 = ${atoms}}}.`,
          ],
        };
      }
      const mMetal = clean(rng.int(15, 78) / 10, 1);
      const mCl2 = clean(rng.int(22, 95) / 10, 1);
      const mSalt = clean(mMetal + mCl2, 1);
      return {
        prompt: `Inside a sealed gas jar, **${mMetal} g** of ${m.name} reacts completely with chlorine gas to form **${mSalt} g** of white solid ${m.name} chloride (\`2${m.sym} + Cl₂ → 2${m.sym}Cl\`). What mass (in g) of **chlorine gas** reacted?`,
        answer: { type: "number", value: mCl2, display: `${mCl2}` },
        traps: [
          { spec: { type: "number", value: clean(mMetal + mSalt, 1) }, feedback: "Total product mass equals metal + chlorine — subtract the metal mass from the product mass!" },
        ],
        hint: `By conservation of mass, chlorine mass = ${mSalt} − ${mMetal}.`,
        solution: [
          `Mass of Cl₂ = total product mass − mass of ${m.name}.`,
          `Mass of Cl₂ = {{${mSalt} - ${mMetal} = ${mCl2}}} g.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Group 7 Halogens & Group 0 Physical States / Displacement
  // =========================================================================
  {
    id: "periodic-table.halogens-nobles",
    topicId: "periodic-table",
    title: "Halogen & Noble Gas States & Displacements",
    level: 3,
    guideRef: "group7-group0",
    generate(rng, tier) {
      if (tier === 1) {
        // Predict state (solid / liquid / gas) at temperature T °C for real Group 7 / Group 0 elements
        const el = rng.pick(GROUP7_0_STATES);
        const statePick = rng.pick(["solid", "liquid", "gas"] as const);
        let temp: number;
        if (statePick === "solid") {
          temp = el.mp - rng.int(2, 45);
          if (temp < -273) temp = el.mp - 1;
        } else if (statePick === "liquid") {
          const span = Math.max(1, el.bp - el.mp - 1);
          temp = el.mp + rng.int(1, span);
        } else {
          temp = el.bp + rng.int(2, 65);
        }
        const accept =
          statePick === "solid"
            ? ["solid", "a solid"]
            : statePick === "liquid"
              ? ["liquid", "a liquid"]
              : ["gas", "a gas", "vapour", "vapor"];
        return {
          prompt: `**${el.name[0].toUpperCase() + el.name.slice(1)}** (${el.formula}, ${el.group}) has a melting point of **${el.mp} °C** and a boiling point of **${el.bp} °C**. What is its physical state (solid, liquid, or gas) at **${temp} °C**?`,
          answer: { type: "text", accept, display: statePick },
          hint: `Compare ${temp} °C to ${el.mp} °C (m.p.) and ${el.bp} °C (b.p.) on a number line.`,
          solution: [
            statePick === "solid"
              ? `${temp} °C is below the melting point (${el.mp} °C) → **solid**.`
              : statePick === "liquid"
                ? `${temp} °C lies between ${el.mp} °C (m.p.) and ${el.bp} °C (b.p.) → **liquid**.`
                : `${temp} °C is above the boiling point (${el.bp} °C) → **gas**.`,
          ],
        };
      }

      if (tier === 2) {
        // Displacement stoichiometry OR boiling/melting temperature differences
        if (rng.bool(0.55)) {
          const rxn = rng.pick(DISPLACEMENTS);
          const n = rng.int(4, 38);
          const halideUnits = n * 2;
          return {
            prompt: `In the halogen displacement reaction \`${rxn.halF} + 2${rxn.saltF} → 2${rxn.prodSaltF} + ${rxn.outF}\`, how many **${rxn.saltF}** formula units react completely with **${n} molecules** of ${rxn.hal} (${rxn.halF})?`,
            answer: { type: "number", value: halideUnits, display: `${halideUnits}` },
            traps: [
              { spec: { type: "number", value: n }, feedback: "Check the balancing coefficient 2 in front of the halide salt: 1 X₂ reacts with 2 salt units." },
            ],
            hint: `Every 1 ${rxn.halF} molecule reacts with 2 ${rxn.saltF} units.`,
            solution: [
              `Ratio ${rxn.halF} : ${rxn.saltF} is 1 : 2.`,
              `Total ${rxn.saltF} units = {{${n} * 2 = ${halideUnits}}}.`,
            ],
          };
        }
        // Boiling point difference between two distinct Group 7/0 elements (negative number practice!)
        const idx1 = rng.int(0, GROUP7_0_STATES.length - 1);
        let idx2 = rng.int(0, GROUP7_0_STATES.length - 2);
        if (idx2 >= idx1) idx2++;
        const eA = GROUP7_0_STATES[idx1];
        const eB = GROUP7_0_STATES[idx2];
        const hi = eA.bp >= eB.bp ? eA : eB;
        const lo = eA.bp >= eB.bp ? eB : eA;
        const diff = hi.bp - lo.bp;
        return {
          prompt: `**${hi.name[0].toUpperCase() + hi.name.slice(1)}** (${hi.formula}) boils at **${hi.bp} °C** and **${lo.name}** (${lo.formula}) boils at **${lo.bp} °C**. By how many °C is the boiling point of ${hi.name} higher than that of ${lo.name}?`,
          answer: { type: "number", value: diff, display: `${diff}` },
          hint: `Compute (${hi.bp}) − (${lo.bp}) carefully — subtracting a negative number adds its value!`,
          solution: [
            `Difference = {{(${hi.bp}) - (${lo.bp}) = ${diff}}} °C.`,
          ],
        };
      }

      // Tier 3: Total electrons in n diatomic halogen molecules OR conservation of mass in halogen displacement
      if (rng.bool(0.5)) {
        const hal = rng.pick([
          { name: "fluorine", f: "F₂", z: 9 },
          { name: "chlorine", f: "Cl₂", z: 17 },
          { name: "bromine", f: "Br₂", z: 35 },
          { name: "iodine", f: "I₂", z: 53 },
        ]);
        const count = rng.int(2, 16);
        const totalE = count * 2 * hal.z;
        return {
          prompt: `Each atom of **${hal.name}** has atomic number **${hal.z}**. Remembering that ${hal.name} exists as **diatomic ${hal.f}** molecules, calculate the total number of electrons in **${count} molecules** of ${hal.f}.`,
          answer: { type: "number", value: totalE, display: `${totalE}` },
          traps: [
            { spec: { type: "number", value: count * hal.z }, feedback: `You used ${hal.z} electrons per molecule — each diatomic ${hal.f} molecule has TWO atoms (${2 * hal.z} electrons)!` },
          ],
          hint: `One ${hal.f} molecule contains 2 × ${hal.z} = ${2 * hal.z} electrons. Multiply by ${count}.`,
          solution: [
            `Electrons per ${hal.f} molecule = {{2 * ${hal.z} = ${2 * hal.z}}}.`,
            `Total electrons in ${count} molecules = {{${count} * ${2 * hal.z} = ${totalE}}}.`,
          ],
        };
      }
      const rxn = rng.pick(DISPLACEMENTS);
      const mHal = clean(rng.int(12, 65) / 10, 1);
      const mSaltIn = clean(rng.int(30, 120) / 10, 1);
      const mSaltOut = clean(rng.int(20, 85) / 10, 1);
      const total = clean(mHal + mSaltIn, 1);
      // Ensure mDisplaced > 0.5
      const safeSaltOut = mSaltOut < total - 0.8 ? mSaltOut : clean(total * 0.55, 1);
      const mDisplaced = clean(total - safeSaltOut, 1);
      return {
        prompt: `In a displacement test (\`${rxn.halF} + 2${rxn.saltF} → 2${rxn.prodSaltF} + ${rxn.outF}\`), **${mHal} g** of ${rxn.hal} reacts completely with **${mSaltIn} g** of ${rxn.salt}, forming **${safeSaltOut} g** of ${rxn.prodSaltF}. By conservation of mass, what mass (in g) of **${rxn.outF}** is displaced?`,
        answer: { type: "number", value: mDisplaced, display: `${mDisplaced}` },
        hint: `Total reactants = ${mHal} + ${mSaltIn} = ${total} g. Subtract ${safeSaltOut} g.`,
        solution: [
          `Total reactant mass = {{${mHal} + ${mSaltIn} = ${total}}} g.`,
          `Mass of displaced ${rxn.outF} = {{${total} - ${safeSaltOut} = ${mDisplaced}}} g.`,
        ],
      };
    },
  },
];
