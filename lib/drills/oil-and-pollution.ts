import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Number(n.toFixed(4));
}

const ALKANE_NAMES: Record<number, string> = {
  1: "methane",
  2: "ethane",
  3: "propane",
  4: "butane",
  5: "pentane",
  6: "hexane",
  7: "heptane",
  8: "octane",
  9: "nonane",
  10: "decane",
  11: "undecane",
  12: "dodecane",
  14: "tetradecane",
  16: "hexadecane",
  18: "octadecane",
  20: "eicosane",
};

const ALKENE_NAMES: Record<number, string> = {
  2: "ethene",
  3: "propene",
  4: "butene",
  5: "pentene",
  6: "hexene",
  7: "heptene",
  8: "octene",
  9: "nonene",
  10: "decene",
  12: "dodecene",
};

function alkaneLabel(n: number): string {
  return ALKANE_NAMES[n] ? `${ALKANE_NAMES[n]} (C${sub(n)}H${sub(2 * n + 2)})` : `C${sub(n)}H${sub(2 * n + 2)}`;
}

function sub(n: number): string {
  const digits = "₀₁₂₃₄₅₆₇₈₉";
  return String(n)
    .split("")
    .map((d) => digits[Number(d)] ?? d)
    .join("");
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1 — 60s Sprint): Alkane & Alkene Formulas + Mr
  // =========================================================================
  {
    id: "oil-and-pollution.alkane-alkene-formulas",
    topicId: "oil-and-pollution",
    title: "Alkane & Alkene Formulas",
    level: 1,
    guideRef: "hydrocarbons-alkanes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const isAlkane = rng.bool(0.55);
        if (isAlkane) {
          const n = rng.int(1, 20);
          const h = 2 * n + 2;
          const nm = ALKANE_NAMES[n] ? ` (**${ALKANE_NAMES[n]}**)` : "";
          const style = rng.int(0, 1);
          const prompt =
            style === 0
              ? `An **alkane**${nm} contains **${n} carbon atom${n === 1 ? "" : "s"}**. How many **hydrogen atoms** are in one molecule?`
              : `Using the alkane general formula {{C_nH_{2n+2}}}, find the number of hydrogen atoms when {{n = ${n}}}${nm}.`;
          return {
            prompt,
            answer: { type: "number", value: h, display: String(h) },
            traps: [
              {
                spec: { type: "number", value: 2 * n },
                feedback: `${2 * n} is for an alkene (2n). Alkanes follow 2n + 2!`,
              },
            ],
            hint: `Use the alkane general formula CₙH₂ₙ₊₂: double ${n} and add 2.`,
            solution: [
              `Alkanes obey {{C_nH_{2n+2}}}.`,
              `{{2(${n}) + 2 = ${h}}} hydrogen atoms (formula C${sub(n)}H${sub(h)}).`,
            ],
          };
        }
        const n = rng.int(2, 18);
        const h = 2 * n;
        const nm = ALKENE_NAMES[n] ? ` (**${ALKENE_NAMES[n]}**)` : "";
        const style = rng.int(0, 1);
        const prompt =
          style === 0
            ? `An **alkene**${nm} contains **${n} carbon atoms** and one C=C double bond. How many **hydrogen atoms** are in one molecule?`
            : `Using the alkene general formula {{C_nH_{2n}}}, find the number of hydrogen atoms when {{n = ${n}}}${nm}.`;
        return {
          prompt,
          answer: { type: "number", value: h, display: String(h) },
          traps: [
            {
              spec: { type: "number", value: 2 * n + 2 },
              feedback: `${2 * n + 2} is for a saturated alkane (2n + 2). Alkenes follow 2n!`,
            },
          ],
          hint: `Use the alkene general formula CₙH₂ₙ: simply double ${n}.`,
          solution: [
            `Alkenes obey {{C_nH_{2n}}}.`,
            `{{2(${n}) = ${h}}} hydrogen atoms (formula C${sub(n)}H${sub(h)}).`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const n = rng.int(2, 22);
          const h = 2 * n + 2;
          return {
            prompt: `A saturated **alkane** molecule contains **${h} hydrogen atoms**. How many **carbon atoms** are in one molecule?`,
            answer: { type: "number", value: n, display: String(n) },
            traps: [
              {
                spec: { type: "number", value: h / 2 },
                feedback: `Subtract 2 BEFORE dividing by 2 because alkanes follow 2n + 2!`,
              },
            ],
            hint: `Solve 2n + 2 = ${h} for n.`,
            solution: [
              `{{2n + 2 = ${h}}} → {{2n = ${h - 2}}} → {{n = ${n}}} carbon atoms.`,
            ],
          };
        }
        if (mode === 1) {
          const n = rng.int(2, 22);
          const h = 2 * n;
          return {
            prompt: `An unsaturated **alkene** molecule (with one C=C bond) contains **${h} hydrogen atoms**. How many **carbon atoms** are in one molecule?`,
            answer: { type: "number", value: n, display: String(n) },
            hint: `Solve 2n = ${h} for n.`,
            solution: [
              `Alkenes obey {{C_nH_{2n}}}, so {{n = ${h} / 2 = ${n}}} carbon atoms.`,
            ],
          };
        }
        // Total number of atoms in an alkane/alkene
        const isAlkane = rng.bool(0.5);
        const n = rng.int(2, 16);
        const h = isAlkane ? 2 * n + 2 : 2 * n;
        const total = n + h;
        return {
          prompt: `Calculate the **total number of atoms** (carbon + hydrogen combined) in one molecule of a${isAlkane ? "n **alkane**" : "n **alkene**"} with **${n} carbon atoms**.`,
          answer: { type: "number", value: total, display: String(total) },
          traps: [
            {
              spec: { type: "number", value: h },
              feedback: `${h} is only the hydrogen atoms — add the ${n} carbon atoms too!`,
            },
          ],
          hint: `Find the number of H atoms first (${isAlkane ? "2n + 2" : "2n"}), then add ${n} carbon atoms.`,
          solution: [
            `Hydrogens = ${h}; Carbons = ${n}.`,
            `Total atoms = {{${n} + ${h} = ${total}}}.`,
          ],
        };
      }

      // Tier 3: Relative molecular mass (Mr) forward & reverse
      const isAlkane = rng.bool(0.55);
      const n = rng.int(2, 16);
      const h = isAlkane ? 2 * n + 2 : 2 * n;
      const mr = 12 * n + h;
      if (rng.bool(0.5)) {
        return {
          prompt: `Calculate the relative molecular mass ({{M_r}}) of the **${isAlkane ? "alkane" : "alkene"}** containing **${n} carbon atoms** (use {{A_r(C) = 12}}, {{A_r(H) = 1}}).`,
          answer: { type: "number", value: mr, display: String(mr) },
          hint: `First find the formula (C${sub(n)}H${sub(h)}), then compute 12 × ${n} + ${h}.`,
          solution: [
            `Formula: C${sub(n)}H${sub(h)}.`,
            `{{M_r = (${n} * 12) + ${h} = ${12 * n} + ${h} = ${mr}}}.`,
          ],
        };
      }
      return {
        prompt: `An unknown **${isAlkane ? "alkane" : "alkene"}** has a relative molecular mass ({{M_r}}) of **${mr}** (using {{A_r(C) = 12}}, {{A_r(H) = 1}}). How many **carbon atoms** ({{n}}) are in one molecule?`,
        answer: { type: "number", value: n, display: String(n) },
        hint: `Write Mr in terms of n: ${isAlkane ? "14n + 2" : "14n"} = ${mr}, then solve for n.`,
        solution: [
          `For a${isAlkane ? "n alkane (CₙH₂ₙ₊₂)" : "n alkene (CₙH₂ₙ)"}, {{M_r = 12n + ${isAlkane ? "(2n + 2) = 14n + 2" : "2n = 14n"}}}.`,
          `${isAlkane ? `{{14n = ${mr} - 2 = ${mr - 2}}} → ` : ""}{{n = ${isAlkane ? mr - 2 : mr} / 14 = ${n}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 1 — 60s Sprint): Fractionating Column & Refinery Maths
  // =========================================================================
  {
    id: "oil-and-pollution.fraction-column-matcher",
    topicId: "oil-and-pollution",
    title: "Fractional Distillation & Column Trays",
    level: 1,
    guideRef: "fractional-distillation-oil",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const FRACTIONS = [
          {
            name: "refinery gases",
            accept: ["refinery gases", "refinery gas", "lpg", "petroleum gases"],
            uses: [
              "bottled cooking gas and domestic heating",
              "camping stove fuel and LPG cylinders",
              "household gas hobs and portable heaters",
            ],
            tempHint: "exits the very top as a gas below 25 °C (C₁–C₄)",
          },
          {
            name: "petrol",
            accept: ["petrol", "gasoline"],
            uses: [
              "fuel for passenger cars and motorbikes",
              "light vehicle spark-ignition engines",
              "everyday petrol cars",
            ],
            tempHint: "condenses near the top around 40–110 °C (C₅–C₁₀)",
          },
          {
            name: "kerosene",
            accept: ["kerosene", "paraffin"],
            uses: [
              "aviation fuel for commercial jet aircraft",
              "jet engines taking off from Changi Airport",
              "aeroplane turbine fuel and paraffin lamps",
            ],
            tempHint: "condenses below petrol around 150–250 °C (C₁₀–C₁₆)",
          },
          {
            name: "diesel oil",
            accept: ["diesel", "diesel oil"],
            uses: [
              "fuel for heavy lorries, public buses, and trains",
              "commercial freight trucks and diesel generators",
              "heavy road transport and railway locomotives",
            ],
            tempHint: "condenses below kerosene around 250–300 °C (C₁₄–C₂₀)",
          },
          {
            name: "fuel oil",
            accept: ["fuel oil", "heavy fuel oil"],
            uses: [
              "fuel for giant ocean cargo ships and power stations",
              "marine bunker engines on container vessels",
              "industrial furnaces and large sea tankers",
            ],
            tempHint: "condenses near the bottom around 300–350 °C (C₂₀–C₃₅)",
          },
          {
            name: "bitumen",
            accept: ["bitumen", "asphalt"],
            uses: [
              "surfacing tarmac roads and waterproofing flat roofs",
              "binding gravel on expressways and roofing felt",
              "road-building tar and waterproof roof coatings",
            ],
            tempHint: "remains as a thick black liquid residue at the bottom (>350 °C)",
          },
        ] as const;

        const frac = rng.pick(FRACTIONS);
        const batch = rng.int(1, 12);
        const use = rng.pick(frac.uses);
        return {
          prompt: `Refinery Batch #${batch} collects a crude oil fraction that ${frac.tempHint} and is widely used as **${use}**. Name this fraction.`,
          answer: { type: "text", accept: [...frac.accept], display: frac.name },
          hint: `Use the top-to-bottom mnemonic: Really Polite Kids Don't Fight Bullies.`,
          solution: [
            `Fraction matching ${use}: **${frac.name}**.`,
          ],
        };
      }

      if (tier === 2) {
        // Tray condensation temperature prediction
        const t5 = rng.pick([20, 25, 30]);
        const t4 = rng.pick([70, 80, 90, 100]);
        const t3 = rng.pick([150, 160, 170, 180]);
        const t2 = rng.pick([230, 240, 250, 260]);
        const t1 = rng.pick([310, 320, 330, 340]);
        const trays = [t1, t2, t3, t4, t5];
        // Pick a target tray index 1..4 so vapour definitely passes at least one hotter tray before condensing
        const targetIdx = rng.int(1, 4);
        const coolerTray = trays[targetIdx];
        const hotterTray = trays[targetIdx - 1];
        const bp = rng.int(coolerTray + 8, hotterTray - 8);
        const label = rng.pick(["Alkane A", "Alkane B", "Hydrocarbon X", "Hydrocarbon Y", "Sample Q", "Fuel Z"]);

        return {
          prompt: `A fractionating column has trays at **${t1} °C** (bottom), **${t2} °C**, **${t3} °C**, **${t4} °C**, and **${t5} °C** (top). **${label}** (boiling point **${bp} °C**) enters as hot vapour at 370 °C. At which **tray temperature (in °C)** does it first condense into a liquid?`,
          answer: { type: "number", value: coolerTray, display: `${coolerTray} °C` },
          traps: [
            {
              spec: { type: "number", value: hotterTray },
              feedback: `At ${hotterTray} °C the column is still HOTTER than ${bp} °C, so ${label} remains a gas and keeps rising!`,
            },
          ],
          hint: `Follow the vapour upwards from 370 °C: it condenses on the FIRST tray whose temperature is LESS than ${bp} °C.`,
          solution: [
            `Compare ${bp} °C against each tray moving upwards from the bottom.`,
            `At ${hotterTray} °C, ${hotterTray} > ${bp}, so it stays a vapour.`,
            `At **${coolerTray} °C**, ${coolerTray} < ${bp}, so it condenses on the **${coolerTray} °C** tray.`,
          ],
        };
      }

      // Tier 3: Refinery supply vs demand shortfall calculation
      const totalTonnes = rng.pick([400, 500, 600, 800, 1000, 1200, 1500, 2000]);
      const supplyPct = rng.pick([12, 15, 16, 18, 20, 22]);
      const demandPct = supplyPct + rng.pick([8, 10, 12, 14, 15, 16, 18, 20]);
      const fraction = rng.pick(["petrol", "diesel oil", "kerosene jet fuel"]);
      const diffPct = demandPct - supplyPct;
      const shortfall = clean((totalTonnes * diffPct) / 100);
      return {
        prompt: `A refinery distils **${totalTonnes} tonnes** of crude oil, yielding **${supplyPct}%** ${fraction}, whereas market demand equals **${demandPct}%** of the crude mass. How many **extra tonnes** of ${fraction} must be produced by **cracking** heavier fractions to meet demand?`,
        answer: { type: "number", value: shortfall, display: `${shortfall}` },
        traps: [
          {
            spec: { type: "number", value: diffPct },
            feedback: `${diffPct}% is the percentage gap — now calculate ${diffPct}% of ${totalTonnes} tonnes!`,
          },
        ],
        hint: `Find the percentage shortfall (${demandPct}% − ${supplyPct}% = ${diffPct}%), then calculate ${diffPct}% of ${totalTonnes} tonnes.`,
        solution: [
          `Percentage shortfall = {{${demandPct}% - ${supplyPct}% = ${diffPct}%}}.`,
          `Extra ${fraction} needed = {{(${diffPct} / 100) * ${totalTonnes} = ${shortfall}}} tonnes.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2 — 60s Sprint): Cracking Equation Balancer
  // =========================================================================
  {
    id: "oil-and-pollution.cracking-balancer",
    topicId: "oil-and-pollution",
    title: "Balancing Cracking Equations",
    level: 2,
    guideRef: "cracking-alkenes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const a = rng.int(8, 22);
        const b = rng.int(4, a - 2);
        const c = a - b;
        const askH = rng.bool(0.5);
        if (askH) {
          return {
            prompt: `Balance this cracking equation: **C${sub(a)}H${sub(2 * a + 2)} → C${sub(b)}H${sub(2 * b + 2)} + C${sub(c)}H{{x}}**. Find the missing number of **hydrogen atoms** ({{x}}) in the alkene.`,
            answer: { type: "number", value: 2 * c, display: String(2 * c) },
            traps: [
              {
                spec: { type: "number", value: 2 * c + 2 },
                feedback: `Check total H on the right: ${2 * b + 2} + ${2 * c + 2} = ${2 * a + 4}, which exceeds ${2 * a + 2}! The product is an alkene (2n).`,
              },
            ],
            hint: `Subtract ${2 * b + 2} hydrogen atoms from ${2 * a + 2}.`,
            solution: [
              `Conserve H atoms: {{${2 * a + 2} - ${2 * b + 2} = ${2 * c}}}.`,
              `Check alkene formula C${sub(c)}H${sub(2 * c)}: {{2(${c}) = ${2 * c}}} ✓.`,
            ],
          };
        }
        return {
          prompt: `Balance this cracking equation: **C${sub(a)}H${sub(2 * a + 2)} → C${sub(b)}H${sub(2 * b + 2)} + C{{x}}H${sub(2 * c)}**. Find the missing number of **carbon atoms** ({{x}}) in the alkene.`,
          answer: { type: "number", value: c, display: String(c) },
          hint: `Conserve carbon atoms: subtract ${b} from ${a}.`,
          solution: [
            `Conserve C atoms: {{${a} - ${b} = ${c}}} (alkene C${sub(c)}H${sub(2 * c)}).`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Two identical alkene molecules: C_aH_{2a+2} -> C_bH_{2b+2} + 2 C_xH_{2x}
          const x = rng.int(2, 6);
          const b = rng.int(4, 12);
          const a = b + 2 * x;
          return {
            prompt: `During catalytic cracking, **${alkaneLabel(a)}** splits into **${alkaneLabel(b)}** and **TWO identical molecules** of alkene **Y**: C${sub(a)}H${sub(2 * a + 2)} → C${sub(b)}H${sub(2 * b + 2)} + 2Y. How many **carbon atoms** are in ONE molecule of **Y**?`,
            answer: { type: "number", value: x, display: String(x) },
            traps: [
              {
                spec: { type: "number", value: 2 * x },
                feedback: `${2 * x} carbons are shared across TWO identical molecules of Y — divide by 2!`,
              },
            ],
            hint: `Find leftover carbons (${a} − ${b} = ${2 * x}), then divide by 2 for ONE molecule of Y.`,
            solution: [
              `Leftover carbons: {{${a} - ${b} = ${2 * x}}}.`,
              `Divide equally between 2 molecules: {{${2 * x} / 2 = ${x}}} carbons per molecule (C${sub(x)}H${sub(2 * x)}).`,
            ],
          };
        }
        // Solve for missing shorter alkane hydrogen or carbon count
        const a = rng.int(10, 24);
        const c = rng.int(2, Math.min(8, a - 4));
        const b = a - c;
        const askH = rng.bool(0.5);
        if (askH) {
          return {
            prompt: `When **C${sub(a)}H${sub(2 * a + 2)}** is cracked to form **C${sub(c)}H${sub(2 * c)}** and one shorter **alkane**, how many **hydrogen atoms** are in that shorter alkane?`,
            answer: { type: "number", value: 2 * b + 2, display: String(2 * b + 2) },
            hint: `Conserve H atoms: subtract ${2 * c} from ${2 * a + 2}.`,
            solution: [
              `H atoms in shorter alkane = {{${2 * a + 2} - ${2 * c} = ${2 * b + 2}}} (formula C${sub(b)}H${sub(2 * b + 2)}).`,
            ],
          };
        }
        return {
          prompt: `When **C${sub(a)}H${sub(2 * a + 2)}** is cracked to form **C${sub(c)}H${sub(2 * c)}** and one shorter **alkane**, how many **carbon atoms** are in that shorter alkane?`,
          answer: { type: "number", value: b, display: String(b) },
          hint: `Conserve C atoms: subtract ${c} from ${a}.`,
          solution: [
            `C atoms in shorter alkane = {{${a} - ${c} = ${b}}} (formula C${sub(b)}H${sub(2 * b + 2)}).`,
          ],
        };
      }

      // Tier 3: multi-product cracking: C_aH_{2a+2} -> C_bH_{2b+2} + C_cH_{2c} + k C_mH_{2m}
      const m = rng.pick([2, 3]);
      const mName = m === 2 ? "ethene (C₂H₄)" : "propene (C₃H₆)";
      const k = rng.int(2, 6);
      const b = rng.int(4, 10);
      const c = rng.int(2, 6);
      const a = b + c + k * m;
      return {
        prompt: `Steam cracking breaks **C${sub(a)}H${sub(2 * a + 2)}** into one molecule of **C${sub(b)}H${sub(2 * b + 2)}**, one molecule of **C${sub(c)}H${sub(2 * c)}**, and **{{k}}** molecules of **${mName}**. Find the integer value of {{k}}.`,
        answer: { type: "number", value: k, display: String(k) },
        traps: [
          {
            spec: { type: "number", value: k * m },
            feedback: `${k * m} is the total remaining carbon atoms — each ${mName} molecule uses ${m} carbons, so divide by ${m}!`,
          },
        ],
        hint: `Subtract ${b} + ${c} = ${b + c} from ${a}, then divide by ${m} carbons per ${mName} molecule.`,
        solution: [
          `Remaining carbons = {{${a} - (${b} + ${c}) = ${k * m}}}.`,
          `Each ${mName} molecule has ${m} carbons → {{k = ${k * m} / ${m} = ${k}}}.`,
          `Hydrogen check: {{${2 * b + 2} + ${2 * c} + ${k}(${2 * m}) = ${2 * a + 2}}} ✓.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Combustion Balancing & Emissions Calculations
  // =========================================================================
  {
    id: "oil-and-pollution.combustion-and-emissions",
    topicId: "oil-and-pollution",
    title: "Combustion Balancing & Sulfur Emissions",
    level: 3,
    guideRef: "combustion-pollution",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Complete combustion balancing for alkanes & alkenes
        const isAlkane = rng.bool(0.6);
        if (isAlkane) {
          const n = rng.int(1, 12);
          const odd = n % 2 === 1;
          const mult = odd ? 1 : 2;
          const o2 = odd ? (3 * n + 1) / 2 : 3 * n + 1;
          const co2 = mult * n;
          const h2o = mult * (n + 1);
          const ask = rng.pick(["o2", "co2", "h2o"] as const);
          const lhsFuel = `${mult === 1 ? "" : "2"}C${n === 1 ? "" : sub(n)}H${sub(2 * n + 2)}`;

          if (ask === "o2") {
            return {
              prompt: `Balance the complete combustion of this alkane: **${lhsFuel} + {{x}}O₂ → ${co2 === 1 ? "" : co2}CO₂ + ${h2o}H₂O**. What is the value of {{x}}?`,
              answer: { type: "number", value: o2, display: String(o2) },
              traps: [
                {
                  spec: { type: "number", value: 2 * o2 },
                  feedback: `${2 * o2} is the total number of O ATOMS — divide by 2 for O₂ molecules!`,
                },
              ],
              hint: `Count total O atoms on the right: (${co2} × 2) + ${h2o}, then divide by 2.`,
              solution: [
                `Right-hand O atoms = {{${co2} * 2 + ${h2o} = ${2 * o2}}}.`,
                `Number of {{O_2}} molecules: {{x = ${2 * o2} / 2 = ${o2}}}.`,
              ],
            };
          }
          if (ask === "co2") {
            return {
              prompt: `Balance the complete combustion of this alkane: **${lhsFuel} + ${o2}O₂ → {{x}}CO₂ + ${h2o}H₂O**. What is the value of {{x}}?`,
              answer: { type: "number", value: co2, display: String(co2) },
              hint: `Count total carbon atoms on the left side (${mult} × ${n}).`,
              solution: [
                `Left-hand carbon atoms = {{${mult} * ${n} = ${co2}}} → {{${co2}CO_2}}.`,
              ],
            };
          }
          return {
            prompt: `Balance the complete combustion of this alkane: **${lhsFuel} + ${o2}O₂ → ${co2 === 1 ? "" : co2}CO₂ + {{x}}H₂O**. What is the value of {{x}}?`,
            answer: { type: "number", value: h2o, display: String(h2o) },
            hint: `Count total hydrogen atoms on the left (${mult * (2 * n + 2)}) and divide by 2 for H₂O.`,
            solution: [
              `Left-hand hydrogen atoms = {{${mult} * ${2 * n + 2} = ${2 * h2o}}}.`,
              `Each {{H_2O}} contains 2 H atoms → {{x = ${2 * h2o} / 2 = ${h2o}}}.`,
            ],
          };
        }
        // Alkene complete combustion
        const n = rng.int(2, 12);
        const even = n % 2 === 0;
        const mult = even ? 1 : 2;
        const o2 = even ? (3 * n) / 2 : 3 * n;
        const co2 = mult * n;
        const h2o = mult * n;
        const lhsFuel = `${mult === 1 ? "" : "2"}C${sub(n)}H${sub(2 * n)}`;
        return {
          prompt: `Balance the complete combustion of this alkene: **${lhsFuel} + {{x}}O₂ → ${co2}CO₂ + ${h2o}H₂O**. What is the value of {{x}}?`,
          answer: { type: "number", value: o2, display: String(o2) },
          traps: [
            {
              spec: { type: "number", value: 2 * o2 },
              feedback: `${2 * o2} is total O ATOMS — divide by 2 for O₂ molecules!`,
            },
          ],
          hint: `Total right-side O atoms = (${co2} × 2) + ${h2o} = ${2 * o2}; divide by 2.`,
          solution: [
            `Right-hand O atoms = {{${co2} * 2 + ${h2o} = ${2 * o2}}}.`,
            `{{x = ${2 * o2} / 2 = ${o2}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Incomplete combustion (to CO + H2O): 2 C_nH_{2n+2} + (2n + 1) O_2 -> 2n CO + (2n + 2) H_2O
          const n = rng.int(1, 10);
          const coeffO2 = 2 * n + 1;
          const coeffCO = 2 * n;
          const coeffH2O = 2 * n + 2;
          return {
            prompt: `Balance this **incomplete combustion** equation forming toxic carbon monoxide: **2C${n === 1 ? "" : sub(n)}H${sub(2 * n + 2)} + {{x}}O₂ → ${coeffCO}CO + ${coeffH2O}H₂O**. Find {{x}}.`,
            answer: { type: "number", value: coeffO2, display: String(coeffO2) },
            traps: [
              {
                spec: { type: "number", value: 2 * coeffO2 },
                feedback: `${2 * coeffO2} is total O atoms — divide by 2 to get O₂ molecules!`,
              },
            ],
            hint: `Count O atoms on the right (${coeffCO} in CO + ${coeffH2O} in H₂O), then divide by 2.`,
            solution: [
              `Right-hand O atoms = {{${coeffCO} + ${coeffH2O} = ${2 * coeffO2}}}.`,
              `Number of {{O_2}} molecules: {{x = ${2 * coeffO2} / 2 = ${coeffO2}}}.`,
            ],
          };
        }
        // Fuel sulfur impurity mass calculation
        const fuelMass = rng.pick([50, 100, 150, 200, 250, 300, 400, 500, 600, 800, 1000]);
        const sulfurPct = rng.pick([0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]);
        const sulfurMass = clean((fuelMass * sulfurPct) / 100);
        const vehicle = rng.pick(["cargo ship", "coal power station", "container vessel", "industrial furnace"]);
        return {
          prompt: `A **${vehicle}** burns **${fuelMass} tonnes** of heavy fuel oil containing **${sulfurPct}%** sulfur impurities by mass. Calculate the mass (in tonnes) of **sulfur** burned into {{SO_2}}.`,
          answer: { type: "number", value: sulfurMass, display: `${sulfurMass}` },
          hint: `Calculate ${sulfurPct}% of ${fuelMass} tonnes.`,
          solution: [
            `Sulfur mass = {{(${sulfurPct} / 100) * ${fuelMass} = ${sulfurMass}}} tonnes.`,
          ],
        };
      }

      // Tier 3: IMO low-sulfur savings AND SO2 mass calculation (1 t S -> 2 t SO2 since Mr(SO2)=64, Ar(S)=32)
      const fuelMass = rng.pick([200, 250, 300, 400, 500, 600, 800, 1000]);
      const oldPct = rng.pick([2.5, 3.0, 3.5, 4.0, 4.5]);
      const newPct = rng.pick([0.5, 1.0]);
      const diffPct = clean(oldPct - newPct);
      const sulfurSaved = clean((fuelMass * diffPct) / 100);

      if (rng.bool(0.5)) {
        return {
          prompt: `Clean-air rules lower the sulfur limit in marine fuel from **${oldPct}%** to **${newPct}%** by mass. On a voyage burning **${fuelMass} tonnes** of fuel, how many **tonnes of sulfur** are prevented from burning?`,
          answer: { type: "number", value: sulfurSaved, display: `${sulfurSaved}` },
          traps: [
            {
              spec: { type: "number", value: diffPct },
              feedback: `${diffPct}% is the percentage reduction — multiply by ${fuelMass} tonnes!`,
            },
          ],
          hint: `Find the percentage reduction (${oldPct}% − ${newPct}% = ${diffPct}%), then take ${diffPct}% of ${fuelMass} tonnes.`,
          solution: [
            `Sulfur percentage saved = {{${oldPct}% - ${newPct}% = ${diffPct}%}}.`,
            `Mass of sulfur saved = {{(${diffPct} / 100) * ${fuelMass} = ${sulfurSaved}}} tonnes.`,
          ],
        };
      }
      // 1 tonne S (Ar=32) + O2 (Mr=32) -> 2 tonnes SO2 (Mr=64)
      const so2Saved = clean(sulfurSaved * 2);
      return {
        prompt: `Switching from **${oldPct}%** to **${newPct}%** sulfur fuel on a **${fuelMass}-tonne** voyage cuts burned sulfur. Because {{S + O_2 -> SO_2}} (with {{A_r(S) = 32}}, {{M_r(SO_2) = 64}}), every **1 tonne of sulfur** forms **2 tonnes of {{SO_2}}**. Calculate the total **tonnes of {{SO_2}}** prevented.`,
        answer: { type: "number", value: so2Saved, display: `${so2Saved}` },
        traps: [
          {
            spec: { type: "number", value: sulfurSaved },
            feedback: `${sulfurSaved} tonnes is the mass of SULFUR saved — double it because each 1 tonne of S forms 2 tonnes of SO₂!`,
          },
        ],
        hint: `First calculate tonnes of sulfur saved (${diffPct}% of ${fuelMass}), then multiply by 2 to get tonnes of SO₂.`,
        solution: [
          `Sulfur saved = {{((${oldPct} - ${newPct}) / 100) * ${fuelMass} = ${sulfurSaved}}} tonnes.`,
          `Since 1 t S forms 2 t {{SO_2}}: {{${sulfurSaved} * 2 = ${so2Saved}}} tonnes of {{SO_2}} prevented.`,
        ],
      };
    },
  },
];
