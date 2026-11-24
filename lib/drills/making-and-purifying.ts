import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Number(n.toFixed(4));
}

function fmt1(n: number): string {
  return Number.isInteger(n) ? `${n}.0` : n.toFixed(1);
}

const ACIDS = [
  { name: "hydrochloric acid", formula: "HCl", saltEnd: "chloride" },
  { name: "sulfuric acid", formula: "H₂SO₄", saltEnd: "sulfate" },
  { name: "nitric acid", formula: "HNO₃", saltEnd: "nitrate" },
] as const;

const INSOLUBLE_BASES = [
  { metal: "magnesium", baseType: "oxide", solid: "magnesium oxide", gas: null },
  { metal: "magnesium", baseType: "carbonate", solid: "magnesium carbonate", gas: "carbon dioxide" },
  { metal: "magnesium", baseType: "hydroxide", solid: "magnesium hydroxide", gas: null },
  { metal: "zinc", baseType: "oxide", solid: "zinc oxide", gas: null },
  { metal: "zinc", baseType: "carbonate", solid: "zinc carbonate", gas: "carbon dioxide" },
  { metal: "zinc", baseType: "hydroxide", solid: "zinc hydroxide", gas: null },
  { metal: "calcium", baseType: "oxide", solid: "calcium oxide", gas: null },
  { metal: "calcium", baseType: "carbonate", solid: "calcium carbonate", gas: "carbon dioxide" },
  { metal: "calcium", baseType: "hydroxide", solid: "calcium hydroxide", gas: null },
  { metal: "copper(II)", baseType: "oxide", solid: "copper(II) oxide", gas: null },
  { metal: "copper(II)", baseType: "carbonate", solid: "copper(II) carbonate", gas: "carbon dioxide" },
  { metal: "copper(II)", baseType: "hydroxide", solid: "copper(II) hydroxide", gas: null },
  { metal: "iron(II)", baseType: "oxide", solid: "iron(II) oxide", gas: null },
  { metal: "iron(II)", baseType: "carbonate", solid: "iron(II) carbonate", gas: "carbon dioxide" },
  { metal: "lithium", baseType: "carbonate", solid: "lithium carbonate", gas: "carbon dioxide" },
  { metal: "sodium", baseType: "carbonate", solid: "sodium carbonate", gas: "carbon dioxide" },
  { metal: "potassium", baseType: "carbonate", solid: "potassium carbonate", gas: "carbon dioxide" },
  { metal: "aluminium", baseType: "oxide", solid: "aluminium oxide", gas: null },
] as const;

const REACTIVE_METALS = ["magnesium", "zinc", "iron", "calcium", "aluminium"] as const;

function saltAccepts(metal: string, ending: string): string[] {
  const full = `${metal} ${ending}`.toLowerCase();
  const list = [full];
  if (ending === "sulfate") list.push(`${metal} sulphate`.toLowerCase());
  if (metal.includes("(II)")) {
    const plain = metal.replace("(II)", "").trim().toLowerCase();
    list.push(`${plain} ${ending}`);
    list.push(`${plain} (ii) ${ending}`);
    if (ending === "sulfate") {
      list.push(`${plain} sulphate`);
      list.push(`${plain} (ii) sulphate`);
    }
  }
  return list;
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1 — 60s Sprint): Salt Namer & Acid Matching
  // =========================================================================
  {
    id: "making-and-purifying.salt-namer",
    topicId: "making-and-purifying",
    title: "Naming Soluble Salts & Acids",
    level: 1,
    guideRef: "making-soluble-salts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const acid = rng.pick(ACIDS);

      if (tier === 1) {
        const base = rng.pick(INSOLUBLE_BASES);
        const saltDisplay = `${base.metal} ${acid.saltEnd}`;
        const vol = rng.pick([20, 25, 30, 40, 50]);
        const style = rng.int(0, 1);
        const prompt =
          style === 0
            ? `Name the salt formed when **${vol} cm³** of dilute **${acid.name}** reacts with excess **${base.solid}**.`
            : `Complete the word equation by naming the salt: **${acid.name} + ${base.solid} → ? + ${base.gas ? "water + carbon dioxide" : "water"}**`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: saltAccepts(base.metal, acid.saltEnd),
            display: saltDisplay,
          },
          hint: `${acid.name} always produces a -${acid.saltEnd} salt.`,
          solution: [
            `Take the metal from ${base.solid}: **${base.metal}**.`,
            `${acid.name} (${acid.formula}) always forms **${acid.saltEnd}** salts.`,
            `Salt produced: **${saltDisplay}**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.65)) {
          const useMetal = rng.bool(0.35);
          if (useMetal) {
            const metal = rng.pick(REACTIVE_METALS);
            const saltDisplay = `${metal} ${acid.saltEnd}`;
            const mass = rng.pick([0.5, 1.0, 1.5, 2.0, 2.5]);
            return {
              prompt: `A student adds **${fmt1(mass)} g** of **${metal}** ribbon to dilute **${acid.name}**. Name the soluble salt produced alongside hydrogen gas.`,
              answer: {
                type: "text",
                accept: saltAccepts(metal, acid.saltEnd),
                display: saltDisplay,
              },
              hint: `Combine the reactive metal name with the salt ending from ${acid.name}.`,
              solution: [
                `Reactive metal + acid → salt + hydrogen.`,
                `${metal} + ${acid.name} → **${saltDisplay}** + hydrogen.`,
              ],
            };
          }
          const base = rng.pick(INSOLUBLE_BASES);
          const saltDisplay = `${base.metal} ${acid.saltEnd}`;
          return {
            prompt: `In a salt-making practical, dilute **${acid.formula}** is warmed with excess **${base.solid}** and filtered. Name the salt dissolved in the filtrate.`,
            answer: {
              type: "text",
              accept: saltAccepts(base.metal, acid.saltEnd),
              display: saltDisplay,
            },
            hint: `Identify the acid from its formula ${acid.formula}, then pair its ending with the metal.`,
            solution: [
              `${acid.formula} is **${acid.name}**, which forms **${acid.saltEnd}** salts.`,
              `Metal from ${base.solid} is **${base.metal}**.`,
              `Dissolved salt in filtrate: **${saltDisplay}**.`,
            ],
          };
        }
        // Reverse: give target salt and base, ask for acid name
        const base = rng.pick(INSOLUBLE_BASES);
        const saltDisplay = `${base.metal} ${acid.saltEnd}`;
        return {
          prompt: `Which **acid** must be reacted with **${base.solid}** to prepare pure crystals of **${saltDisplay}**?`,
          answer: {
            type: "text",
            accept: [acid.name, acid.formula.toLowerCase(), acid.name.replace(" acid", "")],
            display: acid.name,
          },
          hint: `Look at the ending '-${acid.saltEnd}' to identify the acid.`,
          solution: [
            `A **${acid.saltEnd}** salt is always prepared using **${acid.name}** (${acid.formula}).`,
          ],
        };
      }

      // Tier 3: deduce acid OR by-product gas OR target salt in practical scenarios
      const mode = rng.int(0, 2);
      const base = rng.pick(INSOLUBLE_BASES);
      const saltDisplay = `${base.metal} ${acid.saltEnd}`;
      const vol = rng.pick([25, 30, 40, 50, 75, 100]);
      if (mode === 0) {
        return {
          prompt: `A technician needs **${saltDisplay}** crystals and already has solid **${base.solid}** and **${vol} cm³** of an unlabelled dilute acid. Name the exact **acid** required.`,
          answer: {
            type: "text",
            accept: [acid.name, acid.formula.toLowerCase()],
            display: acid.name,
          },
          hint: `Match '-${acid.saltEnd}' to HCl, H₂SO₄ or HNO₃.`,
          solution: [
            `Target salt ending: **${acid.saltEnd}**.`,
            `Required acid: **${acid.name}** (${acid.formula}).`,
          ],
        };
      }
      if (mode === 1) {
        const carb = rng.pick(INSOLUBLE_BASES.filter((b) => b.baseType === "carbonate"));
        const carbSalt = `${carb.metal} ${acid.saltEnd}`;
        return {
          prompt: `Excess **${carb.solid}** is added to **${vol} cm³** of warm **${acid.formula}**. Fizzing occurs and the gas turns limewater milky. Name the soluble salt remaining in the filtrate.`,
          answer: {
            type: "text",
            accept: saltAccepts(carb.metal, acid.saltEnd),
            display: carbSalt,
          },
          hint: `First identify ${acid.formula}, then pair it with ${carb.metal}.`,
          solution: [
            `${acid.formula} is **${acid.name}** → forms **${acid.saltEnd}** salts.`,
            `Word equation: ${acid.name} + ${carb.solid} → **${carbSalt}** + water + carbon dioxide.`,
          ],
        };
      }
      const metal = rng.pick(REACTIVE_METALS);
      const mSalt = `${metal} ${acid.saltEnd}`;
      return {
        prompt: `When **${metal}** reacts with **${vol} cm³** of **${acid.formula}**, a gas gives a squeaky pop with a lit splint. Name the **salt** formed in solution.`,
        answer: {
          type: "text",
          accept: saltAccepts(metal, acid.saltEnd),
          display: mSalt,
        },
        hint: `The squeaky pop confirms hydrogen gas; pair ${metal} with the salt ending from ${acid.formula}.`,
        solution: [
          `${acid.formula} is **${acid.name}** → forms **${acid.saltEnd}** salts.`,
          `${metal} + ${acid.name} → **${mSalt}** + hydrogen.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 1 — 60s Sprint): Purity & Formulation Maths
  // =========================================================================
  {
    id: "making-and-purifying.purity-and-formulations",
    topicId: "making-and-purifying",
    title: "Melting Ranges & Formulations",
    level: 1,
    guideRef: "purity-formulations",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const PURE_SOLIDS = [
        { name: "stearic acid", mp: 69 },
        { name: "naphthalene", mp: 80 },
        { name: "benzoic acid", mp: 122 },
        { name: "aspirin", mp: 136 },
        { name: "paracetamol", mp: 169 },
        { name: "salol", mp: 42 },
        { name: "sulfur", mp: 115 },
      ] as const;

      const PRODUCTS = [
        { item: "painkiller tablet", comp1: "active drug", comp2: "binder", comp3: "coating" },
        { item: "wall paint tin", comp1: "solvent", comp2: "binder", comp3: "pigment" },
        { item: "stainless-steel bar", comp1: "iron", comp2: "chromium", comp3: "nickel" },
        { item: "fertiliser pack", comp1: "nitrogen compound", comp2: "phosphorus compound", comp3: "potassium compound" },
        { item: "sunscreen tube", comp1: "UV filter", comp2: "emulsifier", comp3: "water base" },
      ] as const;

      if (tier === 1) {
        if (rng.bool(0.5)) {
          const solid = rng.pick(PURE_SOLIDS);
          const width = rng.int(2, 9);
          const end = solid.mp - rng.int(1, 3);
          const start = end - width;
          return {
            prompt: `Pure **${solid.name}** melts sharply at **${solid.mp} °C**. An impure lab sample starts melting at **${start} °C** and finishes melting at **${end} °C**. What is the width of its melting range (in °C)?`,
            answer: { type: "number", value: width, display: `${width} °C` },
            hint: `Subtract the starting melting temperature from the finishing melting temperature.`,
            solution: [
              `Melting range width = finishing temperature − starting temperature.`,
              `{{${end} - ${start} = ${width}}} °C (a range > 0 °C confirms the sample is impure).`,
            ],
          };
        }
        const prod = rng.pick(PRODUCTS);
        const total = rng.pick([100, 200, 250, 400, 500]);
        const pct = rng.pick([10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80]);
        const partMass = clean((total * pct) / 100);
        return {
          prompt: `A **${total} g** ${prod.item} formulation contains **${partMass} g** of ${prod.comp1}. What percentage by mass of the formulation is **${prod.comp1}**?`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: `Divide ${partMass} by ${total}, then multiply by 100.`,
          solution: [
            `Percentage = {{(${partMass} / ${total}) * 100 = ${pct}}}%.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const prod = rng.pick(PRODUCTS);
          const total = rng.pick([200, 250, 300, 400, 500, 600, 800]);
          const pct = rng.pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 60, 75]);
          const ans = clean((total * pct) / 100);
          return {
            prompt: `A **${total} g** ${prod.item} formulation is designed to contain **${pct}%** ${prod.comp1} by mass. Calculate the mass (in g) of **${prod.comp1}** needed.`,
            answer: { type: "number", value: ans, display: `${ans} g` },
            hint: `Find ${pct}% of ${total} g by multiplying ${total} × ${clean(pct / 100)}.`,
            solution: [
              `Mass = {{(${pct} / 100) * ${total} = ${ans}}} g.`,
            ],
          };
        }
        const prod = rng.pick(PRODUCTS);
        const p1 = rng.pick([20, 25, 30, 35, 40, 45, 50]);
        const p2 = rng.pick([15, 20, 25, 30, 35]);
        const p3 = 100 - p1 - p2;
        return {
          prompt: `A **${prod.item}** formulation consists solely of three ingredients: **${p1}%** ${prod.comp1}, **${p2}%** ${prod.comp2}, and the rest is **${prod.comp3}**. What percentage by mass is **${prod.comp3}**?`,
          answer: { type: "number", value: p3, display: `${p3}%` },
          hint: `All component percentages in a formulation add up to 100%.`,
          solution: [
            `Known components: {{${p1}% + ${p2}% = ${p1 + p2}%}}.`,
            `Remaining ${prod.comp3}: {{100% - ${p1 + p2}% = ${p3}%}}.`,
          ],
        };
      }

      // Tier 3: two-step formulation mass from remainder OR melting-point depression & range
      if (rng.bool(0.6)) {
        const prod = rng.pick(PRODUCTS);
        const total = rng.pick([200, 250, 400, 500, 600, 800, 1000]);
        const p1 = rng.pick([25, 30, 35, 40, 45]);
        const p2 = rng.pick([15, 20, 25, 30, 35]);
        const p3 = 100 - p1 - p2;
        const mass3 = clean((total * p3) / 100);
        return {
          prompt: `A **${total} g** ${prod.item} formulation contains **${p1}%** ${prod.comp1}, **${p2}%** ${prod.comp2}, and the remainder is **${prod.comp3}**. Calculate the mass (in g) of **${prod.comp3}**.`,
          answer: { type: "number", value: mass3, display: `${mass3} g` },
          traps: [
            {
              spec: { type: "number", value: p3 },
              feedback: `${p3}% is the percentage of ${prod.comp3} — multiply by ${total} g to find its mass!`,
            },
          ],
          hint: `First find the percentage of ${prod.comp3} (100% − ${p1}% − ${p2}%), then find that percentage of ${total} g.`,
          solution: [
            `Percentage of ${prod.comp3} = {{100% - (${p1}% + ${p2}%) = ${p3}%}}.`,
            `Mass of ${prod.comp3} = {{(${p3} / 100) * ${total} = ${mass3}}} g.`,
          ],
        };
      }
      const solid = rng.pick(PURE_SOLIDS);
      const drop = rng.int(4, 14);
      const start = solid.mp - drop;
      const end = solid.mp - rng.int(1, 3);
      return {
        prompt: `Pure **${solid.name}** melts sharply at **${solid.mp} °C**. An impure batch starts melting at **${start} °C** and finishes at **${end} °C**. By how many °C has the impurity **lowered the start** of melting below the pure melting point?`,
        answer: { type: "number", value: drop, display: `${drop} °C` },
        traps: [
          {
            spec: { type: "number", value: end - start },
            feedback: `${end - start} °C is the melting range width — compare the start (${start} °C) against the pure melting point (${solid.mp} °C).`,
          },
        ],
        hint: `Subtract the impure onset temperature (${start} °C) from the pure melting point (${solid.mp} °C).`,
        solution: [
          `Melting-point depression at onset = {{${solid.mp} - ${start} = ${drop}}} °C.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2 — 60s Sprint): Paper Chromatography Rf Calculator
  // =========================================================================
  {
    id: "making-and-purifying.rf-calculator",
    topicId: "making-and-purifying",
    title: "Chromatography Rf Calculations",
    level: 2,
    guideRef: "distillation-chromatography",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const DYES = ["red", "blue", "yellow", "green", "purple", "orange", "turquoise", "crimson"] as const;
      const SOLVENTS = ["water", "ethanol", "propanone"] as const;
      const CLEAN_RFS = [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85] as const;

      const dye = rng.pick(DYES);
      const solvent = rng.pick(SOLVENTS);

      if (tier === 1) {
        const dSol = rng.pick([4, 5, 6, 8, 10, 12, 16, 20]);
        // Pick an Rf that gives a clean 1-decimal dSpot
        const validRfs = CLEAN_RFS.filter((r) => Math.abs(r * dSol * 10 - Math.round(r * dSol * 10)) < 1e-6);
        const rf = rng.pick(validRfs);
        const dSpot = clean(rf * dSol);
        const inv = clean(dSol / dSpot);
        return {
          prompt: `On a paper chromatogram using **${solvent}**, a **${dye}** dye spot travels **${fmt1(dSpot)} cm** from the pencil baseline while the solvent front travels **${fmt1(dSol)} cm**. Calculate the {{R_f}} value.`,
          answer: { type: "number", value: rf, display: String(rf) },
          traps: [
            {
              spec: { type: "number", value: inv, tolerance: 0.02 },
              feedback: `Check your division order! Rf = spot distance ÷ solvent distance and must always be less than 1.`,
            },
          ],
          hint: `Use Rf = distance moved by spot ÷ distance moved by solvent.`,
          solution: [
            `{{R_f = ${fmt1(dSpot)} / ${fmt1(dSol)} = ${rf}}} (no units).`,
          ],
        };
      }

      if (tier === 2) {
        const dSol = rng.pick([5, 6, 8, 10, 12, 14, 15, 16, 20]);
        const validRfs = CLEAN_RFS.filter((r) => Math.abs(r * dSol * 10 - Math.round(r * dSol * 10)) < 1e-6);
        const rf = rng.pick(validRfs);
        const dSpot = clean(rf * dSol);

        if (rng.bool(0.5)) {
          return {
            prompt: `A **${dye}** dye has {{R_f = ${rf}}} in **${solvent}**. If the solvent front moves **${fmt1(dSol)} cm** above the pencil baseline, how far (in cm) does the **${dye}** spot travel?`,
            answer: { type: "number", value: dSpot, display: `${dSpot} cm` },
            hint: `Rearrange Rf = spot ÷ solvent to get spot distance = Rf × solvent distance.`,
            solution: [
              `Distance moved by spot = {{R_f * d_{solvent}}}`,
              `{{${rf} * ${fmt1(dSol)} = ${dSpot}}} cm.`,
            ],
          };
        }
        return {
          prompt: `A **${dye}** dye has {{R_f = ${rf}}} in **${solvent}**. During a run, the spot travels **${fmt1(dSpot)} cm** from the pencil baseline. How far (in cm) did the **solvent front** travel?`,
          answer: { type: "number", value: dSol, display: `${dSol} cm` },
          traps: [
            {
              spec: { type: "number", value: clean(dSpot * rf), tolerance: 0.02 },
              feedback: `You multiplied instead of dividing! The solvent front always moves further than the spot.`,
            },
          ],
          hint: `Rearrange Rf = spot ÷ solvent to get solvent distance = spot distance ÷ Rf.`,
          solution: [
            `Solvent front distance = {{d_{spot} / R_f}}`,
            `{{${fmt1(dSpot)} / ${rf} = ${dSol}}} cm.`,
          ],
        };
      }

      // Tier 3: baseline offset error correction OR two-spot gap calculation
      if (rng.bool(0.55)) {
        const offset = rng.pick([1.0, 1.5, 2.0]);
        const dSol = rng.pick([5, 8, 10, 12, 16, 20]);
        const validRfs = CLEAN_RFS.filter((r) => Math.abs(r * dSol * 10 - Math.round(r * dSol * 10)) < 1e-6);
        const rf = rng.pick(validRfs);
        const dSpot = clean(rf * dSol);
        const rawSpot = clean(dSpot + offset);
        const rawSol = clean(dSol + offset);
        return {
          prompt: `A pencil baseline is drawn **${fmt1(offset)} cm** above the bottom edge of a strip. Measured from the **bottom edge**, a **${dye}** spot sits at **${fmt1(rawSpot)} cm** and the **${solvent}** front sits at **${fmt1(rawSol)} cm**. Calculate the true {{R_f}} value.`,
          answer: { type: "number", value: rf, display: String(rf) },
          hint: `Subtract the ${fmt1(offset)} cm baseline offset from BOTH readings before dividing.`,
          solution: [
            `True spot distance from baseline = {{${fmt1(rawSpot)} - ${fmt1(offset)} = ${fmt1(dSpot)}}} cm.`,
            `True solvent distance from baseline = {{${fmt1(rawSol)} - ${fmt1(offset)} = ${fmt1(dSol)}}} cm.`,
            `{{R_f = ${fmt1(dSpot)} / ${fmt1(dSol)} = ${rf}}}.`,
          ],
        };
      }

      const rf1 = rng.pick([0.15, 0.2, 0.25, 0.3, 0.35]);
      const diff = rng.pick([0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5]);
      const rf2 = clean(rf1 + diff);
      const dSol = rng.pick([8, 10, 12, 16, 20]);
      const gap = clean(diff * dSol);
      return {
        prompt: `In **${solvent}**, Dye A has {{R_f = ${rf1}}} and Dye B has {{R_f = ${rf2}}}. After a run, Dye B sits **${fmt1(gap)} cm** higher than Dye A. How far (in cm) did the **solvent front** move from the pencil baseline?`,
        answer: { type: "number", value: dSol, display: `${dSol} cm` },
        hint: `Find the difference in Rf values (${rf2} − ${rf1} = ${diff}), then divide the ${fmt1(gap)} cm gap by ${diff}.`,
        solution: [
          `Difference in Rf = {{${rf2} - ${rf1} = ${diff}}}.`,
          `Gap = {{${diff} * d_{solvent} = ${fmt1(gap)}}} cm.`,
          `{{d_{solvent} = ${fmt1(gap)} / ${diff} = ${dSol}}} cm.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Gas Test Detective & Reaction Diagnostics
  // =========================================================================
  {
    id: "making-and-purifying.gas-test-detective",
    topicId: "making-and-purifying",
    title: "Gas Test Detective",
    level: 3,
    guideRef: "chemical-gas-tests",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const TUBES = ["Tube A", "Tube B", "Tube C", "Tube D", "Sample 1", "Sample 2", "Sample 3", "Sample 4", "Flask X", "Flask Y"] as const;
      const VOLS = [15, 20, 25, 30, 40, 50] as const;

      const tube = rng.pick(TUBES);
      const vol = rng.pick(VOLS);

      if (tier === 1) {
        const cases = [
          {
            gas: "hydrogen",
            accept: ["hydrogen", "h2", "hydrogen gas"],
            obs: rng.pick([
              "burns rapidly with a sharp squeaky pop when a lit splint is held at its mouth",
              "ignites with a squeaky pop when tested with a burning wooden splint",
              "produces a distinct squeaky pop upon contact with a lit splint",
            ]),
            why: "Hydrogen combusts rapidly with oxygen in air when ignited by a lit splint.",
          },
          {
            gas: "oxygen",
            accept: ["oxygen", "o2", "oxygen gas"],
            obs: rng.pick([
              "causes a glowing wooden splint to burst brightly back into flame",
              "relights a glowing splint inserted into the test tube",
              "immediately relights a glowing ember on the tip of a wooden splint",
            ]),
            why: "Concentrated oxygen strongly accelerates combustion, relighting a glowing splint.",
          },
          {
            gas: "carbon dioxide",
            accept: ["carbon dioxide", "co2", "carbon dioxide gas"],
            obs: rng.pick([
              "turns clear limewater milky white when bubbled through a delivery tube",
              "produces a cloudy white precipitate when bubbled into limewater",
              "changes aqueous calcium hydroxide (limewater) from colourless to milky",
            ]),
            why: "Carbon dioxide reacts with limewater to form insoluble white calcium carbonate.",
          },
          {
            gas: "chlorine",
            accept: ["chlorine", "cl2", "chlorine gas"],
            obs: rng.pick([
              "turns damp blue litmus paper red and then bleaches it completely white",
              "changes moist blue litmus paper red before bleaching it white in a fume cupboard",
              "bleaches damp blue litmus paper white after briefly turning it red",
            ]),
            why: "Chlorine dissolves on damp litmus to form acidic HCl (red) and bleaching HClO (white).",
          },
        ] as const;

        const c = rng.pick(cases);
        return {
          prompt: `A pupil collects **${vol} cm³** of a gas in **${tube}**. When tested, the gas ${c.obs}. Name the gas.`,
          answer: { type: "text", accept: [...c.accept], display: c.gas },
          hint: `Use the mnemonic: H-Pop, O-Glow, C-Lime, Cl-Bleach.`,
          solution: [
            `${c.why}`,
            `Identified gas: **${c.gas}**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Identify gas from chemical reaction
          const rxns = [
            {
              reactants: `${rng.pick(["magnesium", "zinc", "iron"])} ribbon + ${vol} cm³ of dilute ${rng.pick(["hydrochloric", "sulfuric"])} acid`,
              gas: "hydrogen",
              accept: ["hydrogen", "h2", "hydrogen gas"],
              test: "burns with a squeaky pop using a lit splint",
            },
            {
              reactants: `${rng.pick(["calcium carbonate", "copper(II) carbonate", "magnesium carbonate", "zinc carbonate"])} + ${vol} cm³ of dilute ${rng.pick(["hydrochloric", "nitric", "sulfuric"])} acid`,
              gas: "carbon dioxide",
              accept: ["carbon dioxide", "co2", "carbon dioxide gas"],
              test: "turns clear limewater milky white",
            },
            {
              reactants: `catalytic decomposition of ${vol} cm³ of hydrogen peroxide solution using manganese(IV) oxide`,
              gas: "oxygen",
              accept: ["oxygen", "o2", "oxygen gas"],
              test: "relights a glowing splint",
            },
            {
              reactants: `electrolysis of ${vol} cm³ of concentrated sodium chloride solution (brine) at the positive anode`,
              gas: "chlorine",
              accept: ["chlorine", "cl2", "chlorine gas"],
              test: "turns damp blue litmus red then bleaches it white",
            },
          ] as const;

          const r = rng.pick(rxns);
          return {
            prompt: `In **${tube}**, a chemist performs the reaction: **${r.reactants}**. Name the gas released (which ${r.test}).`,
            answer: { type: "text", accept: [...r.accept], display: r.gas },
            hint: `Combine both the chemical reaction pattern and the gas test clue.`,
            solution: [
              `The positive observation (${r.test}) confirms **${r.gas}**.`,
            ],
          };
        }

        // Identify the reagent/apparatus needed for a named gas
        const tests = [
          {
            gas: "carbon dioxide",
            ask: "Name the clear aqueous reagent you bubble the gas through to test for it.",
            accept: ["limewater", "lime water", "calcium hydroxide", "calcium hydroxide solution"],
            display: "limewater",
            sol: "Bubble carbon dioxide through **limewater** (aqueous calcium hydroxide) — it turns milky.",
          },
          {
            gas: "hydrogen",
            ask: "State the exact splint type needed to produce a squeaky pop.",
            accept: ["lit splint", "a lit splint", "burning splint", "a burning splint", "lighted splint"],
            display: "lit splint",
            sol: "Hold a **lit splint** (burning splint) at the mouth of the test tube → squeaky pop.",
          },
          {
            gas: "oxygen",
            ask: "State the exact splint type that relights inside this gas.",
            accept: ["glowing splint", "a glowing splint"],
            display: "glowing splint",
            sol: "Insert a **glowing splint** (ember only) into the tube → it relights.",
          },
          {
            gas: "chlorine",
            ask: "Name the damp indicator paper that turns red and then bleaches white in this gas.",
            accept: ["damp blue litmus paper", "blue litmus paper", "damp blue litmus", "litmus paper", "damp litmus paper"],
            display: "damp blue litmus paper",
            sol: "Hold **damp blue litmus paper** in chlorine → turns red then bleaches white.",
          },
        ] as const;
        const t = rng.pick(tests);
        return {
          prompt: `You have collected **${vol} cm³** of **${t.gas}** in **${tube}**. ${t.ask}`,
          answer: { type: "text", accept: [...t.accept], display: t.display },
          hint: `Recall the exact test apparatus or solution for ${t.gas}.`,
          solution: [t.sol],
        };
      }

      // Tier 3: multi-step diagnostic combining salt colour, acid, and gas test
      const acid = rng.pick(ACIDS);
      const scenarios = [
        {
          desc: `An unknown black/green powder in **${tube}** reacts with **${vol} cm³** of dilute **${acid.name}** to form a **blue** solution and vigorous fizzing that turns limewater milky.`,
          ask: "Name the exact **solid reactant** used.",
          display: "copper(II) carbonate",
          accept: ["copper(ii) carbonate", "copper carbonate", "copper (ii) carbonate"],
          sol: [
            "Blue solution → contains **copper(II)** ions.",
            "Gas turns limewater milky → **CO₂** gas, proving a **carbonate**.",
            "Therefore the solid reactant is **copper(II) carbonate**.",
          ],
        },
        {
          desc: `An unknown black powder in **${tube}** reacts with warm **${vol} cm³** of dilute **${acid.name}** to form a **blue** solution with **zero fizzing** (no gas released).`,
          ask: "Name the insoluble **copper oxide** reactant used.",
          display: "copper(II) oxide",
          accept: ["copper(ii) oxide", "copper oxide", "copper (ii) oxide"],
          sol: [
            "Blue solution → **copper(II)** compound.",
            "No fizzing/gas released → metal **oxide** (not a carbonate).",
            "Black solid reactant = **copper(II) oxide**.",
          ],
        },
        {
          desc: `A grey metal strip in **${tube}** reacts briskly with **${vol} cm³** of dilute **${acid.name}**, giving a gas that pops with a lit splint and a **colourless** solution. The metal is **zinc**.`,
          ask: "Name the **soluble salt** formed in solution.",
          display: `zinc ${acid.saltEnd}`,
          accept: saltAccepts("zinc", acid.saltEnd),
          sol: [
            "Squeaky pop confirms hydrogen gas from zinc + acid.",
            `${acid.name} forms **${acid.saltEnd}** salts → **zinc ${acid.saltEnd}**.`,
          ],
        },
        {
          desc: `A white carbonate powder (**magnesium carbonate**) in **${tube}** reacts with **${vol} cm³** of dilute **${acid.name}**, releasing gas that turns limewater milky.`,
          ask: "Name the **soluble salt** left in the filtrate after excess solid is filtered off.",
          display: `magnesium ${acid.saltEnd}`,
          accept: saltAccepts("magnesium", acid.saltEnd),
          sol: [
            "Limewater milky confirms CO₂ from magnesium carbonate.",
            `${acid.name} forms **${acid.saltEnd}** salts → **magnesium ${acid.saltEnd}**.`,
          ],
        },
        {
          desc: `Bubbling the gas from **${tube}** (${vol} cm³ collected from ${acid.name} + calcium carbonate) through limewater produces a milky white suspension.`,
          ask: "Name the insoluble **white precipitate** responsible for the milky colour.",
          display: "calcium carbonate",
          accept: ["calcium carbonate", "caco3"],
          sol: [
            "Carbon dioxide reacts with limewater (calcium hydroxide) to precipitate insoluble white **calcium carbonate** ({{CaCO_3}}).",
          ],
        },
      ] as const;

      const s = rng.pick(scenarios);
      return {
        prompt: `${s.desc} ${s.ask}`,
        answer: { type: "text", accept: [...s.accept], display: s.display },
        hint: `Combine EVERY clue: solution colour, gas test result, and the acid name.`,
        solution: [...s.sol],
      };
    },
  },
];
