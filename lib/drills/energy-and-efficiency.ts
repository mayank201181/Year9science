import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Math.round(n * 1e6) / 1e6;
}

const DEVICES = [
  { name: "an electric winch", startStore: "chemical store of its battery", usefulStore: "gravitational potential store of the load" },
  { name: "a battery-powered toy car", startStore: "chemical store of its cells", usefulStore: "kinetic store of the car" },
  { name: "an LED torch", startStore: "chemical store of its battery", usefulStore: "useful light radiation" },
  { name: "a model drone", startStore: "chemical store of its battery", usefulStore: "gravitational potential and kinetic stores" },
  { name: "an electric food mixer", startStore: "electrical input", usefulStore: "kinetic store of the blades" },
  { name: "a catapult", startStore: "elastic potential store of its rubber band", usefulStore: "kinetic store of the projectile" },
  { name: "a cordless drill", startStore: "chemical store of its battery", usefulStore: "kinetic store of the drill bit" },
  { name: "a wind-up toy", startStore: "elastic potential store of its spring", usefulStore: "kinetic store of the toy" },
] as const;

const INSULATION_UPGRADES = [
  { name: "cavity wall foam", stops: "convection and conduction across the wall gap" },
  { name: "thick fibreglass loft insulation", stops: "conduction and convection through the roof" },
  { name: "double-glazed windows", stops: "conduction and convection across the panes" },
  { name: "shiny aluminium foil behind a radiator", stops: "infrared radiation loss through the exterior wall" },
  { name: "an insulated lid on a hot tank", stops: "convection and evaporation from the surface" },
  { name: "silvered vacuum-flask walls", stops: "infrared radiation, conduction and convection" },
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Conservation of Energy & Dissipation (Level 1)
  // =========================================================================
  {
    id: "energy-and-efficiency.conservation-balance",
    topicId: "energy-and-efficiency",
    title: "Conservation of Energy & Dissipation",
    level: 1,
    guideRef: "stores-transfers-conservation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const dev = rng.pick(DEVICES);
      if (tier === 1) {
        const total = rng.int(12, 95) * 10;
        const useful = rng.int(3, Math.floor(total / 10) - 3) * 10;
        const wasted = total - useful;
        return {
          prompt: `${dev.name[0].toUpperCase()}${dev.name.slice(1)} uses ${total} J from the ${dev.startStore}. Exactly ${useful} J ends up as ${dev.usefulStore}. How many joules are dissipated to the thermal store of the surroundings?`,
          answer: { type: "number", value: wasted, display: `${wasted} J` },
          traps: [
            {
              spec: { type: "number", value: total + useful },
              feedback: "Energy is conserved — subtract the useful output from the total input instead of adding them.",
            },
          ],
          hint: "Apply conservation of energy: Total input = useful output + dissipated energy.",
          solution: [
            `By conservation of energy: {{E_"dissipated" = E_"total" - E_"useful"}}.`,
            `{{E_"dissipated" = ${total} - ${useful} = ${wasted}}} J.`,
          ],
        };
      }
      if (tier === 2) {
        if (rng.bool()) {
          // Two useful stores (GPE + KE) -> find dissipated
          const gpe = rng.int(8, 45) * 10;
          const ke = rng.int(5, 35) * 10;
          const wasted = rng.int(4, 30) * 10;
          const total = gpe + ke + wasted;
          return {
            prompt: `A launch system transfers ${total} J in total. At a certain height the object has ${gpe} J in its gravitational potential store and ${ke} J in its kinetic store. How many joules have been dissipated to the thermal store of the surroundings?`,
            answer: { type: "number", value: wasted, display: `${wasted} J` },
            traps: wasted !== gpe + ke ? [
              {
                spec: { type: "number", value: gpe + ke },
                feedback: `${gpe + ke} J is the sum of GPE and KE — subtract that from ${total} J to find the dissipated energy.`,
              },
            ] : undefined,
            hint: "Add GPE and KE first, then subtract their sum from the total energy input.",
            solution: [
              `Useful mechanical energy = {{${gpe} + ${ke} = ${gpe + ke}}} J.`,
              `Dissipated energy = {{${total} - ${gpe + ke} = ${wasted}}} J.`,
            ],
          };
        }
        // Find total input from useful + two wasted pathways
        const useful = rng.int(12, 65) * 10;
        const heat = rng.int(5, 35) * 10;
        const sound = rng.int(2, 15) * 10;
        const total = useful + heat + sound;
        return {
          prompt: `During a test, ${dev.name} transfers ${useful} J usefully, dissipates ${heat} J by heating, and emits ${sound} J as unwanted sound waves. What was the total energy input in joules?`,
          answer: { type: "number", value: total, display: `${total} J` },
          traps: [
            {
              spec: { type: "number", value: useful + heat },
              feedback: "Include the sound waves too — all outputs must sum to the total input.",
            },
          ],
          hint: "In a closed system, total input equals the sum of EVERY output (useful + heating + sound).",
          solution: [
            `Total energy input = useful + heating + sound.`,
            `{{E_"total" = ${useful} + ${heat} + ${sound} = ${total}}} J.`,
          ],
        };
      }
      // Tier 3: kJ and J mixed units!
      const totalKJ = clean(rng.int(12, 65) / 10); // 1.2 to 6.5 kJ
      const totalJ = Math.round(totalKJ * 1000);
      const usefulJ = rng.int(3, Math.floor(totalJ / 100) - 3) * 100;
      const wastedJ = totalJ - usefulJ;
      return {
        prompt: `${dev.name[0].toUpperCase()}${dev.name.slice(1)} receives ${totalKJ} kJ from the ${dev.startStore}. If ${usefulJ} J ends up as ${dev.usefulStore}, how many **joules** are dissipated to the thermal store of the surroundings?`,
        answer: { type: "number", value: wastedJ, display: `${wastedJ} J` },
        hint: "Convert kilojoules (kJ) into joules (× 1000) before subtracting.",
        solution: [
          `Convert input to joules: {{${totalKJ} "kJ" = ${totalJ} "J"}}.`,
          `Dissipated energy = {{${totalJ} - ${usefulJ} = ${wastedJ}}} J.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Sankey Diagrams & Efficiency Calculations (Level 1)
  // =========================================================================
  {
    id: "energy-and-efficiency.sankey-efficiency",
    topicId: "energy-and-efficiency",
    title: "Efficiency & Sankey Ratios",
    level: 1,
    guideRef: "sankey-efficiency",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pctPool = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
      const eff = rng.pick(pctPool);
      const unit = rng.pick(["J", "W"] as const);
      const kind = unit === "J" ? "energy" : "power";

      if (tier === 1) {
        const mult = rng.int(2, 25);
        const total = mult * 20; // multiple of 20 so every multiple of 5% gives exact integer!
        const useful = Math.round((total * eff) / 100);
        const wasted = total - useful;
        const traps = wasted !== useful ? [{
          spec: { type: "number" as const, value: 100 - eff },
          feedback: `${100 - eff}% is the WASTED percentage. Efficiency uses the useful output (${useful} ${unit}).`,
        }] : undefined;
        return {
          prompt: `A Sankey diagram shows a device with a total ${kind} input of ${total} ${unit} and a useful ${kind} output of ${useful} ${unit}. Calculate its efficiency as a percentage.`,
          answer: { type: "number", value: eff, display: `${eff}%` },
          traps,
          hint: "Efficiency (%) = (useful output ÷ total input) × 100%.",
          solution: [
            `{{"Efficiency (%)" = (${useful} / ${total}) * 100% = ${eff}%}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Given total and WASTED -> find efficiency (%)
          const mult = rng.int(3, 30);
          const total = mult * 20;
          const useful = Math.round((total * eff) / 100);
          const wasted = total - useful;
          const traps = wasted !== useful ? [{
            spec: { type: "number" as const, value: 100 - eff },
            feedback: `Careful! ${wasted} ${unit} is the WASTED ${kind} — subtract it from ${total} ${unit} first to get the useful output.`,
          }] : undefined;
          return {
            prompt: `An appliance takes in ${total} ${unit} of total ${kind} and wastes ${wasted} ${unit} to the thermal store of the surroundings. Calculate its efficiency as a percentage.`,
            answer: { type: "number", value: eff, display: `${eff}%` },
            traps,
            hint: "Subtract wasted from total input first to find useful output, then divide by total input and multiply by 100.",
            solution: [
              `Useful output = {{${total} - ${wasted} = ${useful}}} ${unit}.`,
              `Efficiency = {{(${useful} / ${total}) * 100% = ${eff}%}}.`,
            ],
          };
        }
        // Given efficiency and total -> find useful output
        const mult = rng.int(4, 40);
        const total = mult * 20;
        const useful = Math.round((total * eff) / 100);
        const wasted = total - useful;
        const traps = wasted !== useful ? [{
          spec: { type: "number" as const, value: wasted },
          feedback: `${wasted} ${unit} is the wasted ${kind}. Multiply ${total} by ${clean(eff / 100)} to get the useful output.`,
        }] : undefined;
        return {
          prompt: `A machine operates at ${eff}% efficiency with a total ${kind} input of ${total} ${unit}. Calculate its useful ${kind} output in ${unit}.`,
          answer: { type: "number", value: useful, display: `${useful} ${unit}` },
          traps,
          hint: "Convert the percentage to a decimal and multiply by the total input.",
          solution: [
            `Decimal efficiency = {{${clean(eff / 100)}}}.`,
            `Useful output = {{${clean(eff / 100)} * ${total} = ${useful}}} ${unit}.`,
          ],
        };
      }

      // Tier 3: Find total input from useful (or wasted) + efficiency, OR 2-stage cascade
      if (rng.bool()) {
        const cleanEffs = [20, 25, 40, 50, 60, 75, 80];
        const e3 = rng.pick(cleanEffs);
        const total = rng.int(5, 45) * 20;
        const useful = Math.round((total * e3) / 100);
        return {
          prompt: `A motor is ${e3}% efficient and delivers ${useful} ${unit} of useful ${kind} output. Calculate the total ${kind} input required in ${unit}.`,
          answer: { type: "number", value: total, display: `${total} ${unit}` },
          traps: [
            {
              spec: { type: "number", value: clean((useful * e3) / 100) },
              feedback: "Total input must be LARGER than useful output — divide by the decimal efficiency instead of multiplying.",
            },
          ],
          hint: "Rearrange Efficiency = Useful ÷ Total to Total = Useful ÷ Efficiency (as a decimal).",
          solution: [
            `Convert ${e3}% to decimal {{${clean(e3 / 100)}}}.`,
            `Total input = {{${useful} / ${clean(e3 / 100)} = ${total}}} ${unit}.`,
          ],
        };
      }
      // 2-stage efficiency chain
      const eA = rng.pick([20, 25, 30, 40, 50, 60, 70, 75, 80, 90]);
      const eB = rng.pick([20, 40, 50, 60, 80]);
      const overall = clean((eA * eB) / 100);
      return {
        prompt: `In a two-stage energy system, Stage 1 is ${eA}% efficient and feeds directly into Stage 2, which is ${eB}% efficient. What is the **overall efficiency** as a percentage?`,
        answer: { type: "number", value: overall, display: `${overall}%` },
        hint: "Convert both percentages to decimals, multiply them together, then convert back to a percentage.",
        solution: [
          `Overall decimal efficiency = {{${clean(eA / 100)} * ${clean(eB / 100)} = ${clean(overall / 100)}}}.`,
          `Overall percentage efficiency = {{${overall}%}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Thermal Transfer & Insulation Savings (Level 2)
  // =========================================================================
  {
    id: "energy-and-efficiency.thermal-insulation",
    topicId: "energy-and-efficiency",
    title: "Thermal Insulation & Heat-Loss Rates",
    level: 2,
    guideRef: "thermal-transfer",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const upg = rng.pick(INSULATION_UPGRADES);
      const redPool = [20, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 80];
      const red = rng.pick(redPool);

      if (tier === 1) {
        const before = rng.int(10, 90) * 20; // 200 to 1800 W
        const saved = Math.round((before * red) / 100);
        const after = before - saved;
        const traps = after !== saved ? [{
          spec: { type: "number" as const, value: saved },
          feedback: `${saved} W is the thermal power SAVED. Subtract it from ${before} W to find the new rate of heat loss.`,
        }] : undefined;
        return {
          prompt: `An uninsulated surface loses ${before} W of thermal power. Adding ${upg.name} (${upg.stops}) cuts heat loss by ${red}%. What is the new rate of thermal energy loss in watts?`,
          answer: { type: "number", value: after, display: `${after} W` },
          traps,
          hint: `If heat loss falls by ${red}%, then ${100 - red}% of the original loss remains.`,
          solution: [
            `Remaining fraction = {{100% - ${red}% = ${100 - red}% = ${clean((100 - red) / 100)}}}.`,
            `New heat loss = {{${clean((100 - red) / 100)} * ${before} = ${after}}} W.`,
          ],
        };
      }

      if (tier === 2) {
        const before = rng.int(15, 120) * 20;
        const saved = Math.round((before * red) / 100);
        const after = before - saved;
        return {
          prompt: `Installing ${upg.name} reduces a building's thermal loss from ${before} W down to ${after} W. Calculate the **percentage reduction** in thermal loss.`,
          answer: { type: "number", value: red, display: `${red}%` },
          traps: after !== saved ? [
            {
              spec: { type: "number", value: 100 - red },
              feedback: `${100 - red}% is the remaining fraction of heat loss — subtract from 100% (or divide the ${saved} W saved by ${before} W).`,
            },
          ] : undefined,
          hint: "First find the power saved (before − after), then divide by the original rate and multiply by 100%.",
          solution: [
            `Thermal power saved = {{${before} - ${after} = ${saved}}} W.`,
            `Percentage reduction = {{(${saved} / ${before}) * 100% = ${red}%}}.`,
          ],
        };
      }

      // Tier 3: Total kJ saved over t minutes by insulation!
      const before = rng.int(15, 85) * 20; // W
      const red3 = rng.pick([25, 30, 40, 50, 60, 75]);
      const savedW = Math.round((before * red3) / 100);
      const mins = rng.pick([5, 10, 15, 20, 25, 30]);
      const secs = mins * 60;
      const savedKJ = clean((savedW * secs) / 1000);
      return {
        prompt: `A roof loses ${before} W of thermal power. Adding ${upg.name} reduces this heat loss by ${red3}%. How many **kilojoules (kJ)** of thermal energy are saved during ${mins} minutes?`,
        answer: { type: "number", value: savedKJ, display: `${savedKJ} kJ` },
        traps: [
          {
            spec: { type: "number", value: savedW },
            feedback: `${savedW} W is the power saved per second — multiply by ${secs} s and divide by 1000 for kJ.`,
          },
        ],
        hint: "Find the watts saved first, convert minutes to seconds (× 60), multiply to get joules, then divide by 1000 for kJ.",
        solution: [
          `Power saved = {{${clean(red3 / 100)} * ${before} = ${savedW}}} W.`,
          `Time in seconds = {{${mins} * 60 = ${secs}}} s.`,
          `Energy saved = {{${savedW} * ${secs} = ${savedW * secs} "J" = ${savedKJ} "kJ"}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Work Done (W = Fd) & Power (P = E/t) (Level 3)
  // =========================================================================
  {
    id: "energy-and-efficiency.work-and-power",
    topicId: "energy-and-efficiency",
    title: "Work Done & Power Calculations",
    level: 3,
    guideRef: "work-power-resources",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool()) {
          // Direct W = F * d
          const F = rng.int(12, 95) * 5;
          const d = rng.int(3, 25);
          const W = F * d;
          return {
            prompt: `A steady horizontal force of ${F} N pushes a trolley through a distance of ${d} m. Calculate the work done in joules.`,
            answer: { type: "number", value: W, display: `${W} J` },
            hint: "Use {{W = F * d}}.",
            solution: [`{{W = F * d = ${F} * ${d} = ${W}}} J.`],
          };
        }
        // Direct P = E / t
        const P = rng.int(15, 180) * 5;
        const t = rng.int(4, 30);
        const E = P * t;
        return {
          prompt: `An appliance transfers ${E} J of energy in ${t} s. Calculate its power in watts.`,
          answer: { type: "number", value: P, display: `${P} W` },
          hint: "Use {{P = E / t}}.",
          solution: [`{{P = E / t = ${E} / ${t} = ${P}}} W.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Rearranged F = W / d
          const F = rng.int(15, 120) * 2;
          const d = rng.int(4, 24);
          const W = F * d;
          return {
            prompt: `A steady force does ${W} J of work while moving a crate ${d} m along a floor. Calculate the force in newtons.`,
            answer: { type: "number", value: F, display: `${F} N` },
            hint: "Rearrange {{W = F * d}} to {{F = W / d}}.",
            solution: [`{{F = W / d = ${W} / ${d} = ${F}}} N.`],
          };
        }
        if (mode === 1) {
          // E = P * t with minutes -> seconds
          const P = rng.int(4, 30) * 50; // 200 to 1500 W
          const mins = rng.int(2, 9);
          const secs = mins * 60;
          const E = P * secs;
          const article = String(P).startsWith("8") ? "An" : "A";
          return {
            prompt: `${article} ${P} W electric heater runs for ${mins} minutes. Calculate the energy transferred in **joules**.`,
            answer: { type: "number", value: E, display: `${E} J` },
            traps: [
              {
                spec: { type: "number", value: P * mins },
                feedback: `Convert ${mins} minutes into ${secs} seconds before multiplying by ${P} W!`,
              },
            ],
            hint: "Convert minutes to seconds (× 60), then use {{E = P * t}}.",
            solution: [
              `Time = {{${mins} * 60 = ${secs}}} s.`,
              `{{E = P * t = ${P} * ${secs} = ${E}}} J.`,
            ],
          };
        }
        // W = F * d with cm -> m
        const F = rng.int(15, 95) * 10;
        const cm = rng.int(12, 48) * 10; // 120 to 480 cm
        const m = clean(cm / 100);
        const W = clean(F * m);
        return {
          prompt: `A forklift raises a pallet with an upward force of ${F} N through a height of ${cm} cm. Calculate the work done in joules.`,
          answer: { type: "number", value: W, display: `${W} J` },
          traps: [
            {
              spec: { type: "number", value: F * cm },
              feedback: `Convert ${cm} cm to ${m} m (divide by 100) before multiplying by ${F} N!`,
            },
          ],
          hint: "Convert centimetres to metres (÷ 100), then multiply force by distance.",
          solution: [
            `Distance = {{${cm} / 100 = ${m}}} m.`,
            `{{W = F * d = ${F} * ${m} = ${W}}} J.`,
          ],
        };
      }

      // Tier 3: Lift mass m kg by h m in t s (g = 10 N/kg) + motor efficiency -> electrical input power!
      const effPct = rng.pick([40, 50, 60, 75, 80]);
      const k = rng.int(2, 14);
      const tClean = rng.pick([5, 10, 15, 20, 25]);
      const hClean = rng.pick([6, 9, 12, 15, 18]);
      // m = k * (tClean / 5) * 6 guarantees pUseful = 12 * k * hClean is always an integer divisible by 12,
      // so dividing by 0.4, 0.5, 0.6, 0.75, or 0.8 always produces an exact integer!
      const m = k * (tClean / 5) * 6;
      const weight = m * 10;
      const work = weight * hClean;
      const pUseful = work / tClean;
      const pInput = Math.round(pUseful / (effPct / 100));
      return {
        prompt: `A crane lifts a ${m} kg steel load vertically by ${hClean} m in ${tClean} s (take {{g = 10 "N/kg"}}). Its electric motor is ${effPct}% efficient. Calculate the **electrical input power** drawn by the motor in watts.`,
        answer: { type: "number", value: pInput, display: `${pInput} W` },
        traps: [
          {
            spec: { type: "number", value: pUseful },
            feedback: `${pUseful} W is the USEFUL mechanical power. Divide by ${clean(effPct / 100)} to find the electrical input power.`,
          },
        ],
        hint: "Find weight (m × 10), then useful work (F × h), then useful power (W ÷ t), and finally divide by the decimal efficiency.",
        solution: [
          `Weight: {{F = ${m} * 10 = ${weight}}} N.`,
          `Useful work: {{W = ${weight} * ${hClean} = ${work}}} J.`,
          `Useful power: {{P_"useful" = ${work} / ${tClean} = ${pUseful}}} W.`,
          `Electrical input power: {{P_"in" = ${pUseful} / ${clean(effPct / 100)} = ${pInput}}} W.`,
        ],
      };
    },
  },
];
