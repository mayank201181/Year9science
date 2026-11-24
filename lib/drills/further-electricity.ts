import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

function clean(n: number): number {
  return Number(n.toFixed(6));
}

function fmt(n: number): string {
  return String(clean(n));
}

function addTrap(traps: Trap[], ans: number, val: number, feedback: string) {
  const v = clean(val);
  if (!Number.isFinite(v)) return;
  if (Math.abs(v - ans) > 1e-4 && !traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - v) < 1e-4)) {
    traps.push({ spec: { type: "number", value: v }, feedback });
  }
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 — Charge, Current & Time (Q = It)
  // ===========================================================================
  {
    id: "further-electricity.charge-current",
    topicId: "further-electricity",
    title: "Charge, Current & Time (Q = It)",
    level: 1,
    guideRef: "charge-current-pd",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const devices = ["lamp", "desk fan", "heating coil", "torch", "motor", "radio", "speaker", "LED strip"];
      const device = rng.pick(devices);

      if (tier === 1) {
        const I = clean(rng.int(1, 18) * 0.5);
        const t = rng.int(4, 24) * 5;
        const Q = clean(I * t);
        const traps: Trap[] = [];
        addTrap(traps, Q, t / I, "You divided time by current—multiply current by time instead ({{Q = I * t}}).");
        addTrap(traps, Q, I + t, "Multiply current by time rather than adding them.");
        return {
          prompt: `A steady current of ${fmt(I)} A flows through a ${device} for ${t} s. Calculate the electric charge transferred (in coulombs).`,
          answer: { type: "number", value: Q, display: `${fmt(Q)} C` },
          traps,
          hint: "Use {{Q = I * t}} with current in amps and time in seconds.",
          solution: [
            "Write the formula: {{Q = I * t}}.",
            `Substitute: {{Q = ${fmt(I)} * ${t} = ${fmt(Q)}}} C.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Minutes to seconds conversion -> find Q
          const I = clean(rng.int(2, 24) * 0.25);
          const mins = rng.int(2, 12);
          const secs = mins * 60;
          const Q = clean(I * secs);
          const traps: Trap[] = [];
          addTrap(traps, Q, I * mins, "Convert minutes into seconds (× 60) before using {{Q = I * t}}!");
          return {
            prompt: `A ${device} carries a steady current of ${fmt(I)} A for ${mins} minutes. Calculate the charge transferred (in coulombs).`,
            answer: { type: "number", value: Q, display: `${fmt(Q)} C` },
            traps,
            hint: "First convert minutes to seconds by multiplying by 60, then apply {{Q = I * t}}.",
            solution: [
              `Convert time to seconds: {{t = ${mins} * 60 = ${secs}}} s.`,
              `Calculate charge: {{Q = ${fmt(I)} * ${secs} = ${fmt(Q)}}} C.`,
            ],
          };
        }
        if (mode === 1) {
          // Find current I = Q / t (with t in minutes)
          const I = clean(rng.int(2, 20) * 0.25);
          const mins = rng.int(1, 8);
          const secs = mins * 60;
          const Q = clean(I * secs);
          const traps: Trap[] = [];
          addTrap(traps, I, Q / mins, "Convert minutes to seconds (× 60) before dividing!");
          return {
            prompt: `A ${device} transfers ${fmt(Q)} C of electric charge in ${mins} minute${mins === 1 ? "" : "s"}. Calculate the current (in amps).`,
            answer: { type: "number", value: I, display: `${fmt(I)} A` },
            traps,
            hint: "Convert time to seconds first, then rearrange {{Q = I * t}} to {{I = Q / t}}.",
            solution: [
              `Convert time: {{t = ${mins} * 60 = ${secs}}} s.`,
              `Rearrange and solve: {{I = Q / t = ${fmt(Q)} / ${secs} = ${fmt(I)}}} A.`,
            ],
          };
        }
        // Find time t = Q / I in seconds
        const I = clean(rng.int(2, 16) * 0.5);
        const t = rng.int(6, 40) * 5;
        const Q = clean(I * t);
        const traps: Trap[] = [];
        addTrap(traps, t, Q * I, "Rearrange {{Q = I * t}} to {{t = Q / I}} instead of multiplying.");
        return {
          prompt: `A ${device} draws a steady current of ${fmt(I)} A until ${fmt(Q)} C of charge has flowed. For how many seconds was it switched on?`,
          answer: { type: "number", value: t, display: `${t} s` },
          traps,
          hint: "Rearrange {{Q = I * t}} to make time {{t}} the subject.",
          solution: [
            "Rearrange: {{t = Q / I}}.",
            `Substitute: {{t = ${fmt(Q)} / ${fmt(I)} = ${t}}} s.`,
          ],
        };
      }

      // Tier 3: mA + minutes OR combined Q = It & E = QV
      if (rng.bool(0.5)) {
        const mA = rng.int(2, 19) * 50;
        const I = clean(mA / 1000);
        const mins = rng.int(2, 12);
        const secs = mins * 60;
        const Q = clean(I * secs);
        const traps: Trap[] = [];
        addTrap(traps, Q, mA * secs, "Convert milliamps (mA) into amps (÷ 1000) before multiplying!");
        addTrap(traps, Q, I * mins, "Convert minutes into seconds (× 60) before multiplying!");
        return {
          prompt: `An electronic ${device} draws ${mA} mA for ${mins} minutes. Calculate the total charge transferred (in coulombs).`,
          answer: { type: "number", value: Q, display: `${fmt(Q)} C` },
          traps,
          hint: "Convert BOTH units to SI first: divide mA by 1000 for amps, and multiply minutes by 60 for seconds.",
          solution: [
            `Convert current: {{I = ${mA} / 1000 = ${fmt(I)}}} A.`,
            `Convert time: {{t = ${mins} * 60 = ${secs}}} s.`,
            `Charge: {{Q = ${fmt(I)} * ${secs} = ${fmt(Q)}}} C.`,
          ],
        };
      }
      const I = clean(rng.int(2, 10) * 0.5);
      const t = rng.int(4, 20) * 5;
      const V = rng.pick([3, 6, 9, 12, 15, 18, 24]);
      const Q = clean(I * t);
      const E = clean(Q * V);
      const traps: Trap[] = [];
      addTrap(traps, E, Q, "You calculated the charge Q in coulombs—now multiply by potential difference V ({{E = Q * V}})!");
      addTrap(traps, E, I * V, "I × V gives power in watts—multiply by time t to get energy in joules!");
      return {
        prompt: `A ${V} V ${device} draws a steady current of ${fmt(I)} A for ${t} s. Calculate the total electrical energy transferred (in joules).`,
        answer: { type: "number", value: E, display: `${fmt(E)} J` },
        traps,
        hint: "Find charge {{Q = I * t}} first, then calculate energy using {{E = Q * V}}.",
        solution: [
          `Charge transferred: {{Q = I * t = ${fmt(I)} * ${t} = ${fmt(Q)}}} C.`,
          `Energy transferred: {{E = Q * V = ${fmt(Q)} * ${V} = ${fmt(E)}}} J.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 — Ohm's Law (V = IR)
  // ===========================================================================
  {
    id: "further-electricity.ohms-law",
    topicId: "further-electricity",
    title: "Ohm's Law Calculations (V = IR)",
    level: 1,
    guideRef: "resistance-ohms-law",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const comps = ["fixed resistor", "heating wire", "buzzer", "coil", "metal conductor", "filament"];
      const comp = rng.pick(comps);

      if (tier === 1) {
        const I = clean(rng.int(1, 16) * 0.5);
        const R = rng.int(2, 24);
        const V = clean(I * R);
        const traps: Trap[] = [];
        addTrap(traps, V, R / I, "Use {{V = I * R}} (multiply current and resistance rather than dividing).");
        addTrap(traps, V, I + R, "Multiply I and R instead of adding them.");
        return {
          prompt: `A ${comp} has a resistance of ${R} Ω and carries a current of ${fmt(I)} A. Calculate the potential difference across it (in volts).`,
          answer: { type: "number", value: V, display: `${fmt(V)} V` },
          traps,
          hint: "Apply Ohm's Law: {{V = I * R}}.",
          solution: [
            "Write Ohm's Law: {{V = I * R}}.",
            `Substitute: {{V = ${fmt(I)} * ${R} = ${fmt(V)}}} V.`,
          ],
        };
      }

      if (tier === 2) {
        const niceI = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.2, 1.5, 2, 2.5, 3, 4];
        const I = rng.pick(niceI);
        const R = rng.int(4, 30) * (I < 0.5 ? 2 : 1);
        const V = clean(I * R);
        if (rng.bool(0.5)) {
          const traps: Trap[] = [];
          addTrap(traps, R, V * I, "Multiplying V × I gives power—rearrange to {{R = V / I}}.");
          addTrap(traps, R, I / V, "You divided I by V—resistance is V divided by I.");
          return {
            prompt: `A potential difference of ${fmt(V)} V across a ${comp} produces a current of ${fmt(I)} A. Calculate its resistance (in ohms).`,
            answer: { type: "number", value: R, display: `${R} ohms` },
            traps,
            hint: "Rearrange {{V = I * R}} to {{R = V / I}}.",
            solution: [
              "Rearrange Ohm's Law: {{R = V / I}}.",
              `Substitute: {{R = ${fmt(V)} / ${fmt(I)} = ${R}}} Ω.`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrap(traps, I, R / V, "You divided R by V—current is {{I = V / R}}.");
        addTrap(traps, I, V * R, "Divide voltage by resistance ({{I = V / R}}) rather than multiplying.");
        return {
          prompt: `A ${R} Ω ${comp} is connected across a ${fmt(V)} V supply. Calculate the current flowing through it (in amps).`,
          answer: { type: "number", value: I, display: `${fmt(I)} A` },
          traps,
          hint: "Rearrange {{V = I * R}} to {{I = V / R}}.",
          solution: [
            "Rearrange Ohm's Law: {{I = V / R}}.",
            `Substitute: {{I = ${fmt(V)} / ${R} = ${fmt(I)}}} A.`,
          ],
        };
      }

      // Tier 3: mA or kΩ prefix conversions
      if (rng.bool(0.5)) {
        const mA = rng.pick([20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500]);
        const I = clean(mA / 1000);
        const R = rng.int(4, 30) * 10;
        const V = clean(I * R);
        const traps: Trap[] = [];
        addTrap(traps, R, V / mA, "Convert milliamps (mA) into amps (÷ 1000) before dividing!");
        return {
          prompt: `A potential difference of ${fmt(V)} V across a sensing ${comp} causes a current of ${mA} mA. Calculate its resistance (in ohms).`,
          answer: { type: "number", value: R, display: `${R} ohms` },
          traps,
          hint: "Convert mA into amps (÷ 1000) first, then use {{R = V / I}}.",
          solution: [
            `Convert current to amps: {{I = ${mA} / 1000 = ${fmt(I)}}} A.`,
            `Calculate resistance: {{R = V / I = ${fmt(V)} / ${fmt(I)} = ${R}}} Ω.`,
          ],
        };
      }
      const mA = rng.int(2, 20) * 5;
      const kOhm = clean(rng.int(2, 16) * 0.25);
      const V = clean((mA / 1000) * (kOhm * 1000));
      const traps: Trap[] = [];
      addTrap(traps, V, (mA / 1000) * kOhm, "Convert kilohms (kΩ) to ohms (× 1000) as well as mA to A!");
      return {
        prompt: `A ${fmt(kOhm)} kΩ resistor carries a current of ${mA} mA. Calculate the potential difference across the resistor (in volts).`,
        answer: { type: "number", value: V, display: `${fmt(V)} V` },
        traps,
        hint: "Convert mA to A (÷ 1000) AND kΩ to Ω (× 1000), then apply {{V = I * R}}.",
        solution: [
          `Convert to SI: {{I = ${fmt(mA / 1000)}}} A and {{R = ${fmt(kOhm * 1000)}}} Ω.`,
          `Apply Ohm's Law: {{V = ${fmt(mA / 1000)} * ${fmt(kOhm * 1000)} = ${fmt(V)}}} V.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 — Series & Parallel Circuits
  // ===========================================================================
  {
    id: "further-electricity.series-parallel",
    topicId: "further-electricity",
    title: "Series & Parallel Circuit Rules",
    level: 2,
    guideRef: "series-parallel-circuits",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const r1 = rng.int(2, 20);
          const r2 = rng.int(2, 20);
          const r3 = rng.bool(0.4) ? rng.int(1, 12) : 0;
          const total = r1 + r2 + r3;
          const traps: Trap[] = [];
          addTrap(traps, total, r3 ? r1 * r2 * r3 : r1 * r2, "In series, resistances ADD together rather than multiplying.");
          return {
            prompt: r3
              ? `Three resistors of ${r1} Ω, ${r2} Ω, and ${r3} Ω are connected in series. Calculate their total resistance (in ohms).`
              : `Two resistors of ${r1} Ω and ${r2} Ω are connected in series. Calculate their total resistance (in ohms).`,
            answer: { type: "number", value: total, display: `${total} ohms` },
            traps,
            hint: "In a series circuit, resistances add directly: {{R_total = R_1 + R_2}}.",
            solution: [
              r3
                ? `Add all three series resistances: {{R_total = ${r1} + ${r2} + ${r3} = ${total}}} Ω.`
                : `Add both series resistances: {{R_total = ${r1} + ${r2} = ${total}}} Ω.`,
            ],
          };
        }
        const i1 = clean(rng.int(2, 25) * 0.2);
        const i2 = clean(rng.int(2, 25) * 0.2);
        const iTot = clean(i1 + i2);
        if (rng.bool(0.5)) {
          return {
            prompt: `Two branches in a parallel circuit carry currents of ${fmt(i1)} A and ${fmt(i2)} A. Calculate the total current leaving the battery (in amps).`,
            answer: { type: "number", value: iTot, display: `${fmt(iTot)} A` },
            hint: "In parallel, branch currents sum to the total current from the battery.",
            solution: [
              "Apply {{I_total = I_1 + I_2}}.",
              `{{I_total = ${fmt(i1)} + ${fmt(i2)} = ${fmt(iTot)}}} A.`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrap(traps, i2, iTot + i1, "Branch currents must sum to the total current—subtract instead of adding.");
        return {
          prompt: `A battery supplies a total current of ${fmt(iTot)} A to a parallel circuit with two branches. Branch 1 carries ${fmt(i1)} A. Calculate the current in branch 2 (in amps).`,
          answer: { type: "number", value: i2, display: `${fmt(i2)} A` },
          traps,
          hint: "Subtract the known branch current from the total supply current.",
          solution: [
            "Use {{I_total = I_1 + I_2}}.",
            `{{I_2 = ${fmt(iTot)} - ${fmt(i1)} = ${fmt(i2)}}} A.`,
          ],
        };
      }

      if (tier === 2) {
        const I = rng.pick([0.5, 1, 1.5, 2, 2.5, 3]);
        const r1 = rng.int(2, 14);
        const r2 = rng.int(2, 14);
        const rTot = r1 + r2;
        const V = clean(I * rTot);
        if (rng.bool(0.5)) {
          const traps: Trap[] = [];
          addTrap(traps, I, V / r1, "First add BOTH series resistors to get {{R_total}}, then divide V by {{R_total}}.");
          return {
            prompt: `A ${fmt(V)} V battery is connected in series with a ${r1} Ω resistor and a ${r2} Ω resistor. Calculate the current in the circuit (in amps).`,
            answer: { type: "number", value: I, display: `${fmt(I)} A` },
            traps,
            hint: "Add the two series resistances first, then apply {{I = V / R_total}}.",
            solution: [
              `Total series resistance: {{R_total = ${r1} + ${r2} = ${rTot}}} Ω.`,
              `Current: {{I = V / R_total = ${fmt(V)} / ${rTot} = ${fmt(I)}}} A.`,
            ],
          };
        }
        const v2 = clean(I * r2);
        const v1 = clean(I * r1);
        const traps: Trap[] = [];
        addTrap(traps, v2, v1, `That is the potential difference across the ${r1} Ω resistor—find the PD across the ${r2} Ω resistor!`);
        addTrap(traps, v2, V, "In a series circuit, the supply voltage splits between the two resistors.");
        return {
          prompt: `A ${fmt(V)} V supply is connected in series with a ${r1} Ω resistor and a ${r2} Ω resistor. Calculate the potential difference across the ${r2} Ω resistor (in volts).`,
          answer: { type: "number", value: v2, display: `${fmt(v2)} V` },
          traps,
          hint: "First find the shared series current using {{I = V / (R_1 + R_2)}}, then multiply by the resistor value.",
          solution: [
            `Total resistance: {{R_total = ${r1} + ${r2} = ${rTot}}} Ω.`,
            `Series current: {{I = ${fmt(V)} / ${rTot} = ${fmt(I)}}} A.`,
            `PD across ${r2} Ω resistor: {{V_2 = ${fmt(I)} * ${r2} = ${fmt(v2)}}} V.`,
          ],
        };
      }

      // Tier 3: Parallel circuit total current or exact parallel combined resistance
      const pairs: Array<[number, number, number]> = [
        [4, 4, 2], [6, 6, 3], [8, 8, 4], [10, 10, 5], [12, 12, 6], [16, 16, 8], [20, 20, 10],
        [6, 3, 2], [6, 12, 4], [4, 12, 3], [10, 15, 6], [12, 24, 8], [15, 30, 10], [20, 30, 12],
        [12, 6, 4], [9, 18, 6], [8, 24, 6], [12, 4, 3], [18, 9, 6], [24, 12, 8],
      ];
      const [r1, r2, rPar] = rng.pick(pairs);
      const mult = rng.int(1, 5);
      // Choose supply V as a clean multiple of lcm-friendly value so branch currents are neat decimals
      const V = clean(rPar * mult * rng.pick([1, 2, 3]));
      const i1 = clean(V / r1);
      const i2 = clean(V / r2);
      const iTot = clean(i1 + i2);
      if (rng.bool(0.5)) {
        const traps: Trap[] = [];
        addTrap(traps, iTot, V / (r1 + r2), "You added the resistors as if they were in series—find each parallel branch current separately!");
        return {
          prompt: `A ${fmt(r1)} Ω resistor and a ${fmt(r2)} Ω resistor are connected in parallel across a ${fmt(V)} V supply. Calculate the total current leaving the supply (in amps).`,
          answer: { type: "number", value: iTot, display: `${fmt(iTot)} A` },
          traps,
          hint: "Each branch receives the full supply voltage. Calculate {{I_1 = V / R_1}} and {{I_2 = V / R_2}}, then add them.",
          solution: [
            `Branch 1 current: {{I_1 = ${fmt(V)} / ${r1} = ${fmt(i1)}}} A.`,
            `Branch 2 current: {{I_2 = ${fmt(V)} / ${r2} = ${fmt(i2)}}} A.`,
            `Total current: {{I_total = ${fmt(i1)} + ${fmt(i2)} = ${fmt(iTot)}}} A.`,
          ],
        };
      }
      const traps: Trap[] = [];
      addTrap(traps, rPar, r1 + r2, "That is the series sum—in parallel, total resistance is SMALLER than the smallest branch resistor!");
      return {
        prompt: `A ${r1} Ω resistor and a ${r2} Ω resistor are connected in parallel across a ${fmt(V)} V supply. Calculate their combined total resistance (in ohms).`,
        answer: { type: "number", value: rPar, display: `${rPar} ohms` },
        traps,
        hint: "Find each branch current across the supply voltage, add them to get {{I_total}}, then divide {{V / I_total}}.",
        solution: [
          `Branch currents: {{I_1 = ${fmt(V)} / ${r1} = ${fmt(i1)}}} A and {{I_2 = ${fmt(V)} / ${r2} = ${fmt(i2)}}} A.`,
          `Total current: {{I_total = ${fmt(iTot)}}} A.`,
          `Combined resistance: {{R_total = ${fmt(V)} / ${fmt(iTot)} = ${rPar}}} Ω.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 — Electrical Power, Energy & Fuse Selection
  // ===========================================================================
  {
    id: "further-electricity.power-energy-fuse",
    topicId: "further-electricity",
    title: "Electrical Power (P = IV), Energy & Fuses",
    level: 3,
    guideRef: "electrical-power-safety-static",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const appliances = ["kettle", "hairdryer", "toaster", "heater", "blender", "steam iron", "microwave", "air fryer"];
      const app = rng.pick(appliances);

      if (tier === 1) {
        const V = rng.pick([6, 9, 12, 24, 110, 230]);
        const I = clean(rng.int(1, 20) * 0.5);
        const P = clean(I * V);
        const traps: Trap[] = [];
        addTrap(traps, P, V / I, "Dividing V by I gives resistance—multiply I × V to find power.");
        return {
          prompt: `A ${V} V ${app} draws a steady current of ${fmt(I)} A. Calculate its electrical power (in watts).`,
          answer: { type: "number", value: P, display: `${fmt(P)} W` },
          traps,
          hint: "Use {{P = I * V}}.",
          solution: [
            "Write the power formula: {{P = I * V}}.",
            `Substitute: {{P = ${fmt(I)} * ${V} = ${fmt(P)}}} W.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const I = clean(rng.int(1, 24) * 0.5);
          const P = clean(I * 230);
          const traps: Trap[] = [];
          addTrap(traps, I, P * 230, "Rearrange {{P = I * V}} to divide power by voltage ({{I = P / V}}).");
          return {
            prompt: `A ${app} rated at ${fmt(P)} W runs on the 230 V mains supply. Calculate its normal operating current (in amps).`,
            answer: { type: "number", value: I, display: `${fmt(I)} A` },
            traps,
            hint: "Rearrange {{P = I * V}} to {{I = P / V}}.",
            solution: [
              "Rearrange: {{I = P / V}}.",
              `Substitute: {{I = ${fmt(P)} / 230 = ${fmt(I)}}} A.`,
            ],
          };
        }
        const P = rng.int(2, 28) * 100;
        const mins = rng.int(2, 15);
        const secs = mins * 60;
        const eKJ = clean((P * secs) / 1000);
        const traps: Trap[] = [];
        addTrap(traps, eKJ, (P * mins) / 1000, "Convert minutes into seconds (× 60) before multiplying by power!");
        addTrap(traps, eKJ, P * secs, "That is the energy in joules—divide by 1000 to give kilojoules (kJ)!");
        return {
          prompt: `A ${P} W ${app} is switched on for ${mins} minutes. Calculate the electrical energy transferred in kilojoules (kJ).`,
          answer: { type: "number", value: eKJ, display: `${fmt(eKJ)} kJ` },
          traps,
          hint: "Convert minutes to seconds, compute {{E = P * t}} in joules, then divide by 1000 for kJ.",
          solution: [
            `Convert time: {{t = ${mins} * 60 = ${secs}}} s.`,
            `Energy in joules: {{E = ${P} * ${secs} = ${P * secs}}} J.`,
            `Convert to kilojoules: {{${P * secs} / 1000 = ${fmt(eKJ)}}} kJ.`,
          ],
        };
      }

      // Tier 3: Standard fuse selection (3 A, 5 A, 13 A) OR two-step Ohm's Law + Power
      if (rng.bool(0.5)) {
        const bucket = rng.int(0, 2);
        let I: number;
        let fuse: number;
        if (bucket === 0) {
          I = clean(rng.int(4, 24) * 0.1); // 0.4 .. 2.4 A -> 3 A fuse
          fuse = 3;
        } else if (bucket === 1) {
          I = clean(rng.int(32, 46) * 0.1); // 3.2 .. 4.6 A -> 5 A fuse
          fuse = 5;
        } else {
          I = clean(rng.int(55, 122) * 0.1); // 5.5 .. 12.2 A -> 13 A fuse
          fuse = 13;
        }
        const P = Math.round(I * 230);
        const actualI = clean(P / 230);
        const traps: Trap[] = [];
        addTrap(traps, fuse, Number(actualI.toFixed(1)), "That is the operating current—choose the next standard plug fuse rating above it (3 A, 5 A, or 13 A)!");
        return {
          prompt: `A 230 V mains ${app} has a power rating of ${P} W. Choose the correct standard UK/Singapore plug fuse (3 A, 5 A, or 13 A) to fit in its plug.`,
          answer: { type: "number", value: fuse, display: `${fuse} A` },
          traps,
          hint: "Find normal current with {{I = P / V}}, then pick the smallest fuse from 3 A, 5 A, or 13 A that is ABOVE that current.",
          solution: [
            `Normal operating current: {{I = P / V = ${P} / 230 = ${actualI.toFixed(2)}}} A.`,
            `Choose the standard fuse rating just above ${actualI.toFixed(2)} A: **${fuse} A**.`,
          ],
        };
      }

      // Two-step: given R and I, calculate power P = I^2 * R
      const I = clean(rng.int(2, 12) * 0.5);
      const R = rng.int(4, 30);
      const V = clean(I * R);
      const P = clean(I * V);
      const traps: Trap[] = [];
      addTrap(traps, P, V, "That is the potential difference V = I × R—now multiply by current I to get power P = I × V!");
      return {
        prompt: `A ${R} Ω heating element inside a ${app} carries a steady current of ${fmt(I)} A. Calculate the electrical power dissipated (in watts).`,
        answer: { type: "number", value: P, display: `${fmt(P)} W` },
        traps,
        hint: "Step 1: Find potential difference using {{V = I * R}}. Step 2: Calculate power using {{P = I * V}}.",
        solution: [
          `Potential difference: {{V = I * R = ${fmt(I)} * ${R} = ${fmt(V)}}} V.`,
          `Electrical power: {{P = I * V = ${fmt(I)} * ${fmt(V)} = ${fmt(P)}}} W.`,
        ],
      };
    },
  },
];
