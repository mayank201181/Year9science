import type { Drill } from "./types.ts";

function clean(n: number, dp = 2): number {
  return Number(n.toFixed(dp));
}

interface ExperimentSpec {
  context: string;
  iv: string;
  dv: string;
  cv: string;
  ivKind: "continuous" | "categoric";
}

const EXPERIMENTS: readonly ExperimentSpec[] = [
  { context: "heating water to dissolve sugar", iv: "temperature of the water", dv: "time taken for sugar to dissolve", cv: "volume of water", ivKind: "continuous" },
  { context: "reacting magnesium ribbon with hydrochloric acid", iv: "concentration of the acid", dv: "volume of hydrogen gas collected in 60 s", cv: "length of magnesium ribbon", ivKind: "continuous" },
  { context: "stretching a metal spring with slotted masses", iv: "force applied to the spring", dv: "extension of the spring", cv: "type of spring", ivKind: "continuous" },
  { context: "testing pondweed photosynthesis with a lamp", iv: "distance of the lamp from the pondweed", dv: "number of oxygen bubbles per minute", cv: "water temperature", ivKind: "continuous" },
  { context: "measuring resistance of a nichrome wire", iv: "length of the wire", dv: "electrical resistance of the wire", cv: "thickness of the wire", ivKind: "continuous" },
  { context: "rolling a trolley down an inclined ramp", iv: "height of the ramp", dv: "average speed of the trolley", cv: "mass of the trolley", ivKind: "continuous" },
  { context: "soaking potato cylinders in sucrose solutions", iv: "concentration of sucrose solution", dv: "percentage change in mass of potato", cv: "soaking time", ivKind: "continuous" },
  { context: "bouncing a rubber ball on the laboratory floor", iv: "drop height of the ball", dv: "rebound height of the ball", cv: "floor surface material", ivKind: "continuous" },
  { context: "building a wire-coil electromagnet", iv: "number of turns of wire", dv: "number of steel paperclips lifted", cv: "current through the coil", ivKind: "continuous" },
  { context: "digesting starch with amylase enzyme", iv: "pH of the buffer solution", dv: "time for iodine to stay orange-brown", cv: "volume of amylase solution", ivKind: "continuous" },
  { context: "swinging a simple pendulum", iv: "length of the pendulum string", dv: "time for 10 complete swings", cv: "mass of the pendulum bob", ivKind: "continuous" },
  { context: "cooling hot water in a beaker", iv: "volume of hot water", dv: "temperature drop after 5 minutes", cv: "starting temperature of water", ivKind: "continuous" },
  { context: "measuring friction with a newton meter", iv: "mass placed on the wooden block", dv: "pulling force needed to slide the block", cv: "bench surface type", ivKind: "continuous" },
  { context: "testing solar panel voltage output", iv: "angle of the solar panel", dv: "output voltage across the panel", cv: "lamp brightness", ivKind: "continuous" },
  { context: "dissolving vitamin C tablets in water", iv: "number of pieces the tablet is broken into", dv: "time for fizzing to stop", cv: "temperature of the water", ivKind: "continuous" },
  { context: "comparing metals reacting in dilute acid", iv: "type of metal (Mg, Zn, Fe, Cu)", dv: "maximum temperature rise", cv: "volume of hydrochloric acid", ivKind: "categoric" },
  { context: "testing thermal insulators around a beaker", iv: "type of insulating material (wool, foil, foam)", dv: "temperature drop after 10 minutes", cv: "starting water temperature", ivKind: "categoric" },
  { context: "measuring viscosity of household liquids", iv: "type of liquid (water, oil, syrup, milk)", dv: "time for a marble to sink", cv: "depth of liquid column", ivKind: "categoric" },
  { context: "testing parachute canopy materials", iv: "canopy fabric (nylon, cotton, plastic)", dv: "time to fall 2.0 metres", cv: "mass hanging from parachute", ivKind: "categoric" },
  { context: "comparing brands of paper towel", iv: "brand of paper towel", dv: "volume of water absorbed", cv: "area of paper towel square", ivKind: "categoric" },
  { context: "comparing fuels heating a copper can", iv: "type of alcohol fuel (methanol, ethanol, propanol)", dv: "temperature rise of water per gram burned", cv: "mass of water in the can", ivKind: "categoric" },
  { context: "investigating human blood groups in a population", iv: "blood group (A, B, AB, O)", dv: "number of people in each group", cv: "total sample size surveyed", ivKind: "categoric" },
  { context: "testing antacid brands neutralising stomach acid", iv: "brand of antacid tablet", dv: "volume of acid neutralised", cv: "concentration of hydrochloric acid", ivKind: "categoric" },
  { context: "comparing soil types for drainage speed", iv: "type of soil (sand, clay, loam, chalk)", dv: "volume of water drained in 2 minutes", cv: "mass of dry soil used", ivKind: "categoric" },
  { context: "testing lubricants on a metal ramp", iv: "type of lubricant (oil, grease, graphite, dry)", dv: "force needed to pull a sled", cv: "mass of the sled", ivKind: "categoric" },
  { context: "comparing fruit juices for vitamin C content", iv: "type of fruit juice (orange, lemon, apple, kiwi)", dv: "volume of juice to decolourise DCPIP", cv: "volume of DCPIP indicator", ivKind: "categoric" },
  { context: "comparing conductivity of rods", iv: "rod material (copper, aluminium, glass, wood)", dv: "time for wax to melt off the rod end", cv: "length and diameter of rod", ivKind: "categoric" },
  { context: "testing seed germination in different soils", iv: "type of compost mix", dv: "percentage of cress seeds germinating", cv: "volume of water added daily", ivKind: "categoric" },
  { context: "comparing surface colours for infrared emission", iv: "beaker surface finish (matt black, white, shiny silver)", dv: "temperature drop in 8 minutes", cv: "volume of hot water inside", ivKind: "categoric" },
  { context: "testing bouncing balls of different materials", iv: "ball material (rubber, foam, steel, plastic)", dv: "height of first bounce", cv: "drop height above the bench", ivKind: "categoric" },
];

export const drills: Drill[] = [
  {
    id: "scientific-skills.anomaly-mean",
    topicId: "scientific-skills",
    title: "Exclude Anomalies & Mean / Range",
    level: 1,
    guideRef: "diagrams-tables-calculations",
    generate(rng, tier) {
      const contexts = [
        { label: "stopwatch times", unit: "s", okUnit: "s" },
        { label: "mass readings", unit: "g", okUnit: "g" },
        { label: "temperature rises", unit: "°C", okUnit: "°C" },
        { label: "spring extensions", unit: "mm", okUnit: "mm" },
        { label: "bounce heights", unit: "cm", okUnit: "cm" },
      ] as const;
      const ctx = rng.pick(contexts);

      if (tier === 1) {
        const mean = rng.int(12, 48);
        const step = rng.pick([0.2, 0.3, 0.4, 0.5, 1.0]);
        const c1 = clean(mean - step, 1);
        const c2 = clean(mean, 1);
        const c3 = clean(mean + step, 1);
        const sign = rng.bool() ? 1 : -1;
        const jump = rng.int(6, 14);
        const anom = clean(Math.max(2.1, mean + sign * jump + 0.3), 1);
        const shown = rng.shuffle([c1, c2, c3, anom]);
        const rawMeanAll = clean((c1 + c2 + c3 + anom) / 4, 2);
        return {
          prompt: `Four repeat ${ctx.label} are **${shown.map((v) => `${v.toFixed(1)} ${ctx.unit}`).join(", ")}**. Exclude the anomaly and calculate the mean (in ${ctx.unit}).`,
          answer: { type: "number", value: mean, display: `${mean.toFixed(1)} ${ctx.okUnit}` },
          traps: [
            { spec: { type: "number", value: rawMeanAll, tolerance: 0.08 }, feedback: `Remember to exclude the anomalous value (${anom.toFixed(1)} ${ctx.unit}) first.` },
            { spec: { type: "number", value: clean((c1 + c2 + c3) / 4, 2), tolerance: 0.08 }, feedback: "After excluding 1 of the 4 trials, divide by 3 concordant readings — not 4." },
          ],
          hint: `Spot the single outlier (${anom.toFixed(1)}) far from the other three readings, then average the remaining 3.`,
          solution: [
            `Anomaly: ${anom.toFixed(1)} ${ctx.unit} (far outside the concordant cluster).`,
            `Sum of 3 concordant trials = ${c1.toFixed(1)} + ${c2.toFixed(1)} + ${c3.toFixed(1)} = ${clean(c1 + c2 + c3, 1).toFixed(1)}.`,
            `Mean = ${clean(c1 + c2 + c3, 1).toFixed(1)} ÷ 3 = **${mean.toFixed(1)} ${ctx.unit}**.`,
          ],
        };
      }

      if (tier === 2) {
        const mean = clean(rng.int(15, 65) + rng.pick([0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9]), 1);
        const offsets = rng.pick<[number, number, number]>([
          [-0.3, 0.1, 0.2],
          [-0.4, 0.1, 0.3],
          [-0.5, 0.2, 0.3],
          [-0.2, -0.1, 0.3],
          [-0.6, 0.2, 0.4],
        ]);
        const c1 = clean(mean + offsets[0], 1);
        const c2 = clean(mean + offsets[1], 1);
        const c3 = clean(mean + offsets[2], 1);
        const anom = clean(mean + (rng.bool() ? 1 : -1) * (rng.int(7, 13) + 0.4), 1);
        const shown = rng.shuffle([c1, c2, c3, anom]);
        const sum3 = clean(c1 + c2 + c3, 1);
        return {
          prompt: `Exclude the anomalous trial from these four ${ctx.label} and find the mean (in ${ctx.unit}): **${shown.map((v) => v.toFixed(1)).join(", ")}**.`,
          answer: { type: "number", value: mean, display: `${mean.toFixed(1)} ${ctx.okUnit}` },
          traps: [
            { spec: { type: "number", value: clean((sum3 + anom) / 4, 1), tolerance: 0.08 }, feedback: `Exclude the outlier ${anom.toFixed(1)} before calculating the mean.` },
            { spec: { type: "number", value: clean(sum3 / 4, 2), tolerance: 0.08 }, feedback: "You divided the 3 concordant readings by 4 instead of 3." },
          ],
          hint: "Circle the value far from the tight cluster, add the 3 concordant readings, and divide by 3.",
          solution: [
            `Exclude anomaly ${anom.toFixed(1)} ${ctx.unit}.`,
            `Concordant sum = ${c1.toFixed(1)} + ${c2.toFixed(1)} + ${c3.toFixed(1)} = ${sum3.toFixed(1)}.`,
            `Mean = ${sum3.toFixed(1)} ÷ 3 = **${mean.toFixed(1)} ${ctx.unit}**.`,
          ],
        };
      }

      // Tier 3: 5 trials (4 concordant + 1 anomaly), ask for concordant range or ± uncertainty
      const base = clean(rng.int(20, 80) + rng.pick([0.2, 0.4, 0.6, 0.8]), 1);
      const halfSpread = rng.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.8]);
      const low = clean(base - halfSpread, 1);
      const high = clean(base + halfSpread, 1);
      const mid1 = clean(base - 0.1, 1);
      const mid2 = clean(base + 0.1, 1);
      const anom = clean(base + (rng.bool() ? 1 : -1) * (rng.int(8, 15) + 0.3), 1);
      const shown = rng.shuffle([low, mid1, mid2, high, anom]);
      const rangeVal = clean(high - low, 1);
      const askUncertainty = rng.bool();
      const target = askUncertainty ? halfSpread : rangeVal;
      return {
        prompt: askUncertainty
          ? `Five repeat ${ctx.label} are **${shown.map((v) => v.toFixed(1)).join(", ")}** (all in ${ctx.unit}). Exclude the anomaly and calculate the **uncertainty** (± half the concordant range, enter positive number).`
          : `Five repeat ${ctx.label} are **${shown.map((v) => v.toFixed(1)).join(", ")}** (all in ${ctx.unit}). Exclude the anomaly and calculate the **range** of the concordant results.`,
        answer: { type: "number", value: target, display: `${target} ${ctx.okUnit}` },
        traps: [
          {
            spec: { type: "number", value: askUncertainty ? rangeVal : halfSpread },
            feedback: askUncertainty ? "That is the full range — divide by 2 for ± uncertainty." : "That is half the range (± uncertainty) — range is max − min.",
          },
        ],
        hint: askUncertainty
          ? "First exclude the anomaly, then find concordant range = max − min, then divide by 2."
          : "Exclude the outlier first, then compute largest concordant value minus smallest concordant value.",
        solution: askUncertainty
          ? [
              `Exclude anomaly ${anom.toFixed(1)}; concordant min = ${low.toFixed(1)}, max = ${high.toFixed(1)}.`,
              `Concordant range = ${high.toFixed(1)} − ${low.toFixed(1)} = ${rangeVal.toFixed(1)} ${ctx.unit}.`,
              `Uncertainty = ± (${rangeVal.toFixed(1)} ÷ 2) = **± ${halfSpread} ${ctx.unit}**.`,
            ]
          : [
              `Exclude anomaly ${anom.toFixed(1)}; concordant min = ${low.toFixed(1)}, max = ${high.toFixed(1)}.`,
              `Concordant range = ${high.toFixed(1)} − ${low.toFixed(1)} = **${rangeVal.toFixed(1)} ${ctx.unit}**.`,
            ],
      };
    },
  },
  {
    id: "scientific-skills.zero-error-resolution",
    topicId: "scientific-skills",
    title: "Zero Errors, Resolution & % Error",
    level: 1,
    guideRef: "evaluating-techniques",
    generate(rng, tier) {
      if (tier === 1) {
        const kits = [
          { name: "digital balance", qty: "mass", unit: "g" },
          { name: "thermometer", qty: "temperature", unit: "°C" },
          { name: "stopwatch", qty: "time", unit: "s" },
          { name: "ruler scale", qty: "length", unit: "mm" },
        ] as const;
        const kit = rng.pick(kits);
        const zeroErr = clean(rng.int(2, 18) * 0.1, 1);
        const trueVal = clean(rng.int(12, 85) + rng.pick([0, 0.2, 0.4, 0.5, 0.8]), 1);
        const measured = clean(trueVal + zeroErr, 1);
        return {
          prompt: `A ${kit.name} has a zero error of **+${zeroErr.toFixed(1)} ${kit.unit}** when unloaded. It displays **${measured.toFixed(1)} ${kit.unit}**. What is the true ${kit.qty} (in ${kit.unit})?`,
          answer: { type: "number", value: trueVal, display: `${trueVal} ${kit.unit}` },
          traps: [
            { spec: { type: "number", value: clean(measured + zeroErr, 1) }, feedback: "You added the positive zero error instead of subtracting it." },
          ],
          hint: "True value = Measured reading − Zero error.",
          solution: [
            `Every reading starts +${zeroErr.toFixed(1)} ${kit.unit} too high.`,
            `True ${kit.qty} = ${measured.toFixed(1)} − ${zeroErr.toFixed(1)} = **${trueVal} ${kit.unit}**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Negative or positive zero error
          const kits = [
            { name: "top-pan balance", qty: "mass", unit: "g" },
            { name: "alcohol thermometer", qty: "temperature", unit: "°C" },
            { name: "measuring scale", qty: "length", unit: "cm" },
          ] as const;
          const kit = rng.pick(kits);
          const sign = rng.bool(0.65) ? -1 : 1;
          const mag = clean(rng.int(2, 19) * 0.1, 1);
          const trueVal = clean(rng.int(15, 92) + rng.pick([0.1, 0.3, 0.5, 0.7]), 1);
          const measured = clean(trueVal + sign * mag, 1);
          const signStr = sign > 0 ? `+${mag.toFixed(1)}` : `−${mag.toFixed(1)}`;
          return {
            prompt: `An uncalibrated ${kit.name} reads **${signStr} ${kit.unit}** at zero load. When measuring an object, it reads **${measured.toFixed(1)} ${kit.unit}**. Calculate the true ${kit.qty} (in ${kit.unit}).`,
            answer: { type: "number", value: trueVal, display: `${trueVal} ${kit.unit}` },
            traps: [
              { spec: { type: "number", value: clean(measured + sign * mag, 1) }, feedback: sign < 0 ? "Watch the negative zero error: subtracting a negative ADDS its size!" : "Subtract a positive zero error rather than adding it." },
            ],
            hint: "True value = Measured reading − Zero error (take care when subtracting a negative!).",
            solution: [
              `True ${kit.qty} = ${measured.toFixed(1)} − (${signStr}) = **${trueVal} ${kit.unit}**.`,
            ],
          };
        }
        // Instrument resolution
        const scales = [
          { name: "measuring cylinder", unit: "ml", gap: 10, divs: 5, start: rng.int(1, 5) * 10 },
          { name: "measuring cylinder", unit: "ml", gap: 10, divs: 10, start: rng.int(1, 6) * 10 },
          { name: "measuring cylinder", unit: "ml", gap: 5, divs: 10, start: rng.int(1, 6) * 5 },
          { name: "thermometer", unit: "°C", gap: 10, divs: 20, start: rng.int(1, 5) * 10 },
          { name: "thermometer", unit: "°C", gap: 5, divs: 5, start: rng.int(2, 8) * 5 },
          { name: "thermometer", unit: "°C", gap: 2, divs: 10, start: rng.int(5, 18) * 2 },
          { name: "ruler", unit: "cm", gap: 1, divs: 10, start: rng.int(2, 14) },
          { name: "ruler", unit: "cm", gap: 1, divs: 5, start: rng.int(2, 14) },
          { name: "spring balance", unit: "g", gap: 50, divs: 10, start: rng.int(1, 5) * 50 },
          { name: "spring balance", unit: "g", gap: 20, divs: 5, start: rng.int(1, 6) * 20 },
        ];
        const sc = rng.pick(scales);
        const res = clean(sc.gap / sc.divs, 2);
        const recip = clean(sc.divs / sc.gap, 2);
        return {
          prompt: `A ${sc.name} has numbered marks at **${sc.start} ${sc.unit}** and **${sc.start + sc.gap} ${sc.unit}**, divided into **${sc.divs}** equal small intervals. What is its resolution (in ${sc.unit})?`,
          answer: { type: "number", value: res, display: `${res} ${sc.unit}` },
          traps: recip !== res ? [
            { spec: { type: "number", value: recip }, feedback: "Divide the numbered gap by the number of divisions — not divisions by gap." },
          ] : undefined,
          hint: "Resolution = (difference between numbered marks) ÷ (number of equal intervals).",
          solution: [
            `Gap = ${sc.start + sc.gap} − ${sc.start} = ${sc.gap} ${sc.unit}.`,
            `Resolution = ${sc.gap} ÷ ${sc.divs} = **${res} ${sc.unit}**.`,
          ],
        };
      }

      // Tier 3: Percentage error = |measured - true| / true * 100
      const truePool = [20, 25, 40, 50, 80, 100, 125, 200];
      const trueVal = rng.pick(truePool);
      const pctErr = rng.int(2, 18);
      const dir = rng.bool() ? 1 : -1;
      const diff = clean((trueVal * pctErr) / 100, 2);
      const measured = clean(trueVal + dir * diff, 2);
      const ctx = rng.pick([
        { label: "boiling point", unit: "°C" },
        { label: "standard mass", unit: "g" },
        { label: "rod length", unit: "mm" },
        { label: "liquid volume", unit: "ml" },
      ]);
      return {
        prompt: `The accepted true ${ctx.label} is **${trueVal} ${ctx.unit}**, but a student measures **${measured} ${ctx.unit}**. Calculate the **percentage error**.`,
        answer: { type: "number", value: pctErr, display: `${pctErr}%` },
        traps: diff !== pctErr ? [
          { spec: { type: "number", value: diff }, feedback: `${diff} ${ctx.unit} is the absolute error — now divide by the true value (${trueVal}) and multiply by 100.` },
        ] : undefined,
        hint: "Percentage error = (|measured − true| ÷ true) × 100%.",
        solution: [
          `Absolute error = |${measured} − ${trueVal}| = ${diff} ${ctx.unit}.`,
          `Percentage error = (${diff} ÷ ${trueVal}) × 100% = **${pctErr}%**.`,
        ],
      };
    },
  },
  {
    id: "scientific-skills.variables-graphs",
    topicId: "scientific-skills",
    title: "Variables, Graph Types & Error Terms",
    level: 2,
    guideRef: "variables-fair-testing",
    generate(rng, tier) {
      if (tier === 1) {
        const exp = rng.pick(EXPERIMENTS);
        const role = rng.pick(["independent", "dependent", "control"] as const);
        const targetFactor = role === "independent" ? exp.iv : role === "dependent" ? exp.dv : exp.cv;
        const acceptMap = {
          independent: ["independent", "independent variable", "iv"],
          dependent: ["dependent", "dependent variable", "dv"],
          control: ["control", "control variable", "cv"],
        };
        return {
          prompt: `In an experiment ${exp.context}, a student changes the **${exp.iv}**, measures the **${exp.dv}**, and keeps the **${exp.cv}** constant. Which type of variable is the **${targetFactor}**? (One word: independent, dependent, or control)`,
          answer: { type: "text", accept: acceptMap[role], display: role },
          hint: "Independent = deliberately changed; Dependent = measured outcome; Control = kept constant.",
          solution: [
            `Here, the ${targetFactor} is ${role === "independent" ? "deliberately changed" : role === "dependent" ? "measured as the outcome" : "kept constant"} → **${role}** variable.`,
          ],
        };
      }

      if (tier === 2) {
        const exp = rng.pick(EXPERIMENTS);
        if (rng.bool(0.55)) {
          const isBar = exp.ivKind === "categoric";
          return {
            prompt: `A student investigates ${exp.context}, changing the **${exp.iv}** and measuring the **${exp.dv}**. Should they plot a **bar chart** or a **line graph**?`,
            answer: isBar
              ? { type: "text", accept: ["bar chart", "bar graph", "bar"], display: "bar chart" }
              : { type: "text", accept: ["line graph", "scatter graph", "line", "scatter"], display: "line graph" },
            traps: [
              isBar
                ? { spec: { type: "text", accept: ["line graph", "scatter graph", "line"] }, feedback: `${exp.iv} is categoric (named groups), not continuous numbers — use a bar chart.` }
                : { spec: { type: "text", accept: ["bar chart", "bar graph", "bar"] }, feedback: `${exp.iv} is continuous numerical data — use a line/scatter graph with a line of best fit.` },
            ],
            hint: "Categoric (named groups) IV → bar chart; Continuous (numerical) IV → line/scatter graph.",
            solution: [
              `The independent variable (${exp.iv}) is **${exp.ivKind}** → plot a **${isBar ? "bar chart" : "line graph"}**.`,
            ],
          };
        }
        const askX = rng.bool();
        const factor = askX ? exp.iv : exp.dv;
        return {
          prompt: `When graphing results from ${exp.context} (changing **${exp.iv}**, measuring **${exp.dv}**), on which axis (**x-axis** or **y-axis**) should **${factor}** be plotted?`,
          answer: askX
            ? { type: "text", accept: ["x-axis", "x", "x axis", "horizontal"], display: "x-axis" }
            : { type: "text", accept: ["y-axis", "y", "y axis", "vertical"], display: "y-axis" },
          hint: "Remember DRY MIX: Dependent on Y-axis, Independent on X-axis.",
          solution: [
            `${factor} is the **${askX ? "independent" : "dependent"}** variable, so it belongs on the **${askX ? "x-axis" : "y-axis"}**.`,
          ],
        };
      }

      // Tier 3: rich error / evaluation terminology identification across varied numeric scenarios
      const trueMass = rng.int(20, 90);
      const offset = clean(rng.int(12, 35) * 0.1, 1);
      const kind = rng.int(0, 5);
      if (kind === 0) {
        const a = clean(trueMass + offset - 0.1, 1);
        const b = clean(trueMass + offset, 1);
        const c = clean(trueMass + offset + 0.1, 1);
        return {
          prompt: `A standard mass is **${trueMass}.0 g**. Three trials give **${a} g, ${b} g, ${c} g** because the balance was not zeroed. Is this a **systematic** or **random** error?`,
          answer: { type: "text", accept: ["systematic", "systematic error", "zero error"], display: "systematic" },
          hint: "Every trial shifted by the exact same amount in one direction.",
          solution: ["A consistent shift in one direction caused by an unzeroed balance is a **systematic** error."],
        };
      }
      if (kind === 1) {
        const t = rng.int(10, 40);
        const d = clean(rng.int(8, 22) * 0.1, 1);
        return {
          prompt: `Hand-timed repeats of a **${t}.0 s** process vary unpredictably between **${clean(t - d, 1)} s** and **${clean(t + d, 1)} s** due to reaction time. Is this a **systematic** or **random** error?`,
          answer: { type: "text", accept: ["random", "random error"], display: "random" },
          hint: "Values fluctuate unpredictably both above and below the true value.",
          solution: ["Unpredictable scatter above and below the true value (like reaction time) is a **random** error."],
        };
      }
      if (kind === 2) {
        const school = rng.pick(["London", "Sydney", "Tokyo", "Toronto", "Auckland"]);
        const val = clean(rng.int(15, 85) + 0.4, 1);
        return {
          prompt: `A class in Singapore and a partner lab in ${school} use different equipment to measure a constant and both obtain **${val}**. Are these results **repeatable** or **reproducible**?`,
          answer: { type: "text", accept: ["reproducible"], display: "reproducible" },
          hint: "Different people and different apparatus obtained the same finding.",
          solution: ["Independent confirmation by a different person or apparatus means the result is **reproducible**."],
        };
      }
      if (kind === 3) {
        const student = rng.pick(["Amina", "Ben", "Chloe", "Dev", "Elena"]);
        const trials = rng.int(3, 6);
        const val = clean(rng.int(12, 55) + 0.2, 1);
        return {
          prompt: `${student} runs the exact same method **${trials} times** with the same beaker and timer and gets values tightly clustered around **${val} s**. Are these results **repeatable** or **reproducible**?`,
          answer: { type: "text", accept: ["repeatable"], display: "repeatable" },
          hint: "Same person + same equipment + same method.",
          solution: ["Similar results obtained by the **same person** using the **same equipment and method** are **repeatable**."],
        };
      }
      if (kind === 4) {
        const low = rng.int(10, 25);
        const high = low + rng.int(30, 50);
        const target = high + rng.int(15, 35);
        return {
          prompt: `A pupil collects data between **${low} °C** and **${high} °C**, then extends the line of best fit to predict the value at **${target} °C**. Is this **interpolation** or **extrapolation**?`,
          answer: { type: "text", accept: ["extrapolation"], display: "extrapolation" },
          hint: "Does the predicted temperature lie inside or beyond the measured range?",
          solution: [`${target} °C lies beyond the measured ${low}–${high} °C range → **extrapolation**.`],
        };
      }
      const low = rng.int(10, 20);
      const high = low + rng.int(40, 60);
      const mid = low + rng.int(10, 30);
      return {
        prompt: `A pupil collects data between **${low} cm** and **${high} cm**, then reads the predicted value at **${mid} cm** off their line of best fit. Is this **interpolation** or **extrapolation**?`,
        answer: { type: "text", accept: ["interpolation"], display: "interpolation" },
        hint: "Does the target value lie between the lowest and highest measured values?",
        solution: [`${mid} cm lies inside the measured ${low}–${high} cm range → **interpolation**.`],
      };
    },
  },
  {
    id: "scientific-skills.gradient-rate",
    topicId: "scientific-skills",
    title: "Gradients, Proportionality & % Change",
    level: 3,
    guideRef: "graphing-conclusions",
    generate(rng, tier) {
      if (tier === 1) {
        const contexts = [
          { xName: "load", xU: "N", yName: "extension", yU: "mm" },
          { xName: "time", xU: "s", yName: "distance", yU: "m" },
          { xName: "voltage", xU: "V", yName: "current", yU: "mA" },
          { xName: "volume", xU: "cm³", yName: "mass", yU: "g" },
        ] as const;
        const c = rng.pick(contexts);
        const k = rng.pick([1.5, 2, 2.5, 3, 4, 5, 6, 8]);
        const x1 = rng.int(2, 6);
        let x2 = rng.int(3, 12);
        if (x2 === x1) x2 += 2;
        const y1 = clean(k * x1, 1);
        const y2 = clean(k * x2, 1);
        return {
          prompt: `In an experiment, ${c.yName} is **directly proportional** to ${c.xName}. When ${c.xName} = **${x1} ${c.xU}**, ${c.yName} = **${y1} ${c.yU}**. Calculate the ${c.yName} (in ${c.yU}) when ${c.xName} = **${x2} ${c.xU}**.`,
          answer: { type: "number", value: y2 },
          hint: `Find ${c.yName} per 1 ${c.xU} (${y1} ÷ ${x1}), then multiply by ${x2}.`,
          solution: [
            `Constant ratio k = ${y1} ÷ ${x1} = ${k} ${c.yU}/${c.xU}.`,
            `At ${x2} ${c.xU}: ${k} × ${x2} = **${y2} ${c.yU}**.`,
          ],
        };
      }

      if (tier === 2) {
        const m = rng.pick([0.5, 1.5, 2, 2.5, 3, 4, 5, 6]);
        const c0 = rng.int(0, 8);
        const x1 = rng.int(1, 5) * 2;
        const dx = rng.pick([4, 6, 8, 10]);
        const x2 = x1 + dx;
        const y1 = clean(m * x1 + c0, 1);
        const y2 = clean(m * x2 + c0, 1);
        return {
          prompt: `A straight line of best fit passes through **(${x1}, ${y1})** and **(${x2}, ${y2})**. Calculate the **gradient** of the line.`,
          answer: { type: "number", value: m },
          traps: [
            { spec: { type: "number", value: clean(1 / m, 2), tolerance: 0.02 }, feedback: "You divided Δx by Δy instead of Δy by Δx." },
            { spec: { type: "number", value: clean(y2 - y1, 1) }, feedback: "Remember to divide Δy by Δx!" },
          ],
          hint: "Gradient = (y₂ − y₁) ÷ (x₂ − x₁).",
          solution: [
            `Δy = ${y2} − ${y1} = ${clean(y2 - y1, 1)}.`,
            `Δx = ${x2} − ${x1} = ${dx}.`,
            `Gradient = ${clean(y2 - y1, 1)} ÷ ${dx} = **${m}**.`,
          ],
        };
      }

      // Tier 3: linear interpolation OR percentage change
      if (rng.bool()) {
        const m = rng.pick([2, 3, 4, 5, 2.5]);
        const c0 = rng.int(2, 12);
        const x1 = rng.int(2, 6);
        const x3 = x1 + rng.int(2, 5);
        const x2 = x3 + rng.int(2, 5);
        const y1 = clean(m * x1 + c0, 1);
        const y2 = clean(m * x2 + c0, 1);
        const y3 = clean(m * x3 + c0, 1);
        return {
          prompt: `A straight line of best fit passes through **(${x1}, ${y1})** and **(${x2}, ${y2})**. Interpolate the exact value of **y** when **x = ${x3}**.`,
          answer: { type: "number", value: y3 },
          hint: "Find the gradient m = (y₂ − y₁) ÷ (x₂ − x₁) first, then step from (x₁, y₁) to x₃.",
          solution: [
            `Gradient m = (${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${m}.`,
            `From x = ${x1} to x = ${x3} is +${x3 - x1} units.`,
            `y = ${y1} + ${m} × ${x3 - x1} = **${y3}**.`,
          ],
        };
      }
      const init = rng.pick([4.0, 5.0, 8.0, 10.0, 20.0, 25.0]);
      const pct = rng.pick([5, 10, 12, 15, 20, 25, 30]);
      const inc = rng.bool();
      const delta = clean((init * pct) / 100, 2);
      const fin = clean(inc ? init + delta : init - delta, 2);
      const item = rng.pick(["potato cylinder", "carrot strip", "gummy bear", "hydrated crystal"]);
      return {
        prompt: `A ${item} starts at **${init.toFixed(1)} g** and finishes at **${fin} g**. Calculate the percentage ${inc ? "increase" : "decrease"} in mass (enter a positive percentage).`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        traps: [
          { spec: { type: "number", value: delta }, feedback: `${delta} g is the mass change — divide by the initial mass (${init.toFixed(1)} g) and multiply by 100.` },
        ],
        hint: "Percentage change = (|final − initial| ÷ initial) × 100%.",
        solution: [
          `Mass change = |${fin} − ${init.toFixed(1)}| = ${delta} g.`,
          `Percentage ${inc ? "increase" : "decrease"} = (${delta} ÷ ${init.toFixed(1)}) × 100% = **${pct}%**.`,
        ],
      };
    },
  },
];
