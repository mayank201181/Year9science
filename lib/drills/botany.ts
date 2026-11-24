import type { Drill } from "./types.ts";

function clean(n: number, dp = 2): number {
  return Number(n.toFixed(dp));
}

const LEAF_SPECIES = [
  "hibiscus",
  "eucalyptus",
  "ficus",
  "bougainvillea",
  "mangrove",
  "frangipani",
  "bracken fern",
  "water lily",
] as const;

const PONDWEEDS = ["Elodea", "Cabomba", "hornwort", "pondweed"] as const;

const SHOOTS = [
  "hibiscus shoot",
  "eucalyptus shoot",
  "geranium shoot",
  "privet shoot",
  "mint shoot",
  "basil shoot",
] as const;

const CONDITIONS = [
  { label: "in bright light", env: "bright sunlight" },
  { label: "with a gentle desk fan running", env: "moving air" },
  { label: "in a warm 30 °C laboratory", env: "warm dry air" },
  { label: "in dry Gippsland air", env: "low humidity" },
  { label: "in a humid Singapore greenhouse", env: "high humidity" },
] as const;

const HABITATS = [
  { place: "Gippsland bushland clearing", species: "bracken ferns" },
  { place: "Tanglin campus lawn", species: "clover plants" },
  { place: "Bukit Timah forest edge", species: "wild orchids" },
  { place: "Gippsland meadow", species: "dandelions" },
  { place: "Singapore park grassland", species: "Mimosa plants" },
  { place: "sunlit woodland paddock", species: "buttercups" },
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Stomatal Density & Leaf Surface Calculations
  // =========================================================================
  {
    id: "botany.stomatal-density",
    topicId: "botany",
    title: "Stomatal Density & Leaf Counts",
    level: 1,
    guideRef: "leaf-structure-cells",
    generate(rng, tier) {
      const species = rng.pick(LEAF_SPECIES);

      if (tier === 1) {
        const area = rng.pick([0.2, 0.25, 0.5]);
        const count = rng.int(12, 55);
        const density = clean(count / area, 2);
        const wrongMult = clean(count * area, 2);
        return {
          prompt: `A student inspects a **${area} mm²** microscope view of a ${species} leaf lower epidermis and counts **${count} stomata**. Calculate the stomatal density in stomata per mm².`,
          answer: { type: "number", value: density, display: `${density}` },
          traps: [
            {
              spec: { type: "number", value: wrongMult },
              feedback: "You multiplied count × area — divide the count by the field area in mm² instead.",
            },
          ],
          hint: `Use stomatal density = count ÷ area in mm² (${count} ÷ ${area}).`,
          solution: [
            `Stomatal density = number of stomata ÷ field area.`,
            `Density = {{${count} / ${area} = ${density}}} stomata per mm².`,
          ],
        };
      }

      if (tier === 2) {
        const area = rng.pick([0.2, 0.25, 0.5]);
        const mean = rng.int(18, 52);
        const d1 = rng.int(1, 5);
        const d2 = rng.int(1, 5);
        const c1 = mean - d1;
        const c2 = mean + d2;
        const c3 = mean + d1 - d2;
        const density = clean(mean / area, 2);
        return {
          prompt: `Across three **${area} mm²** views of a ${species} leaf, a student counts **${c1}, ${c2}, and ${c3} stomata**. Calculate the mean stomatal density in stomata per mm².`,
          answer: { type: "number", value: density, display: `${density}` },
          traps: [
            {
              spec: { type: "number", value: mean },
              feedback: `${mean} is the mean count per ${area} mm² view — now divide by ${area} to find stomata per 1 mm².`,
            },
          ],
          hint: `Find the mean of ${c1}, ${c2}, and ${c3}, then divide by ${area} mm².`,
          solution: [
            `Mean per view = {{(${c1} + ${c2} + ${c3}) / 3 = ${mean}}} stomata.`,
            `Stomatal density = {{${mean} / ${area} = ${density}}} stomata per mm².`,
          ],
        };
      }

      // Tier 3: convert cm² to mm² (× 100) and scale up to total stomata on leaf
      const leafCm2 = rng.int(12, 65);
      const density = rng.int(8, 26) * 10; // 80 to 260 stomata/mm²
      const leafMm2 = leafCm2 * 100;
      const total = leafMm2 * density;
      return {
        prompt: `A ${species} leaf has a lower surface area of **${leafCm2} cm²** and a stomatal density of **${density} stomata per mm²**. Using 1 cm² = 100 mm², calculate the total number of stomata on the underside.`,
        answer: { type: "number", value: total, display: `${total}` },
        traps: [
          {
            spec: { type: "number", value: leafCm2 * density },
            feedback: "You forgot to convert cm² to mm²! Multiply the area in cm² by 100 first.",
          },
          {
            spec: { type: "number", value: leafCm2 * 10 * density },
            feedback: "1 cm = 10 mm, so 1 cm² = 10 × 10 = 100 mm² (not 10 mm²).",
          },
        ],
        hint: `Convert ${leafCm2} cm² into mm² (× 100), then multiply by ${density}.`,
        solution: [
          `Leaf area in mm² = {{${leafCm2} * 100 = ${leafMm2}}} mm².`,
          `Total stomata = {{${leafMm2} * ${density} = ${total}}} stomata.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 2): Photosynthesis Rate & Gas Stoichiometry
  // =========================================================================
  {
    id: "botany.photosynthesis-rate",
    topicId: "botany",
    title: "Photosynthesis Bubble Rates & Anomalies",
    level: 2,
    guideRef: "photosynthesis-starch",
    generate(rng, tier) {
      const plant = rng.pick(PONDWEEDS);

      if (tier === 1) {
        const mins = rng.pick([2, 3, 4, 5]);
        const rate = rng.int(6, 36);
        const bubbles = rate * mins;
        const dist = rng.pick([10, 15, 20, 25, 30]);
        return {
          prompt: `With an LED lamp **${dist} cm** away, a shoot of *${plant}* releases **${bubbles} oxygen bubbles** in **${mins} minutes**. Calculate the rate of photosynthesis in bubbles per minute.`,
          answer: { type: "number", value: rate, display: `${rate}` },
          traps: [
            {
              spec: { type: "number", value: bubbles * mins },
              feedback: "Divide total bubbles by time in minutes rather than multiplying.",
            },
          ],
          hint: `Rate = total bubbles ÷ time in minutes.`,
          solution: [
            `Rate = {{${bubbles} / ${mins} = ${rate}}} bubbles/min.`,
          ],
        };
      }

      if (tier === 2) {
        // 4 repeats including one clear anomaly, measured over 2 or 3 minutes
        const mins = rng.pick([2, 3]);
        const rate = rng.int(9, 28);
        const meanTotal = rate * mins;
        const step = rng.int(1, 3);
        const v1 = meanTotal - step;
        const v2 = meanTotal;
        const v3 = meanTotal + step;
        const anomaly = rng.int(3, Math.max(4, Math.floor(meanTotal * 0.35)));
        const readings = rng.shuffle([v1, v2, v3, anomaly]);
        const wrongWithAnom = clean((v1 + v2 + v3 + anomaly) / (4 * mins), 2);
        return {
          prompt: `Four **${mins}-minute** trials with *${plant}* produce **${readings.join(", ")}** oxygen bubbles. Exclude the anomalous reading and calculate the mean rate in bubbles per minute.`,
          answer: { type: "number", value: rate, display: `${rate}` },
          traps: [
            {
              spec: { type: "number", value: meanTotal },
              feedback: `${meanTotal} is the mean bubbles in ${mins} minutes — divide by ${mins} to get bubbles per minute.`,
            },
            {
              spec: { type: "number", value: wrongWithAnom, tolerance: 0.1 },
              feedback: `Check for the clear outlier (${anomaly}) and exclude it before calculating the mean.`,
            },
          ],
          hint: `Discard the clear outlier (${anomaly}), average the other three counts, then divide by ${mins} min.`,
          solution: [
            `Exclude the anomaly: ${anomaly}.`,
            `Mean bubbles in ${mins} min = {{(${v1} + ${v2} + ${v3}) / 3 = ${meanTotal}}}.`,
            `Rate = {{${meanTotal} / ${mins} = ${rate}}} bubbles/min.`,
          ],
        };
      }

      // Tier 3: Net O₂ release = gross photosynthesis − constant respiration
      const resp = rng.int(3, 12);
      const gross = rng.int(resp + 10, resp + 42);
      const net = gross - resp;
      const mode = rng.bool();
      if (mode) {
        return {
          prompt: `In bright light, a shoot of *${plant}* produces oxygen by photosynthesis at a gross rate of **${gross} mm³/min** while consuming **${resp} mm³/min** in respiration. What is the **net** rate of oxygen released into the water (in mm³/min)?`,
          answer: { type: "number", value: net, display: `${net}` },
          traps: [
            {
              spec: { type: "number", value: gross + resp },
              feedback: "Respiration USES oxygen while photosynthesis PRODUCES it — subtract respiration from gross photosynthesis.",
            },
          ],
          hint: "Net O₂ release = gross photosynthesis − respiration.",
          solution: [
            `Net O₂ released = gross photosynthesis − respiration.`,
            `Net rate = {{${gross} - ${resp} = ${net}}} mm³/min.`,
          ],
        };
      }
      // Or percentage increase when CO₂ is added
      const base = rng.pick([10, 12, 16, 20, 24, 25, 40]);
      const pct = rng.pick([25, 50, 75, 100, 125, 150]);
      const nextVal = clean(base * (1 + pct / 100), 2);
      const diff = clean(nextVal - base, 2);
      return {
        prompt: `Adding sodium hydrogencarbonate increases a *${plant}* shoot's photosynthesis rate from **${base}** to **${nextVal} bubbles/min**. Calculate the percentage increase in rate.`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        traps: [
          {
            spec: { type: "number", value: diff },
            feedback: `${diff} is the raw increase — divide by the starting rate (${base}) and multiply by 100 to find the percentage increase.`,
          },
        ],
        hint: `Percentage increase = ((new − original) ÷ original) × 100.`,
        solution: [
          `Increase = {{${nextVal} - ${base} = ${diff}}} bubbles/min.`,
          `Percentage increase = {{(${diff} / ${base}) * 100 = ${pct}}}%.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2): Potometer Transpiration Rate
  // =========================================================================
  {
    id: "botany.potometer-rate",
    topicId: "botany",
    title: "Potometer Water Uptake Rates",
    level: 2,
    guideRef: "plant-transport",
    generate(rng, tier) {
      const shoot = rng.pick(SHOOTS);
      const cond = rng.pick(CONDITIONS);

      if (tier === 1) {
        const mins = rng.pick([2, 4, 5, 8, 10]);
        const rateHalf = rng.int(4, 28); // half-integers from 2.0 to 14.0
        const rate = clean(rateHalf / 2, 1);
        const dist = clean(rate * mins, 1);
        return {
          prompt: `A bubble potometer holds a ${shoot} ${cond.label}. The air bubble moves **${dist} mm** in **${mins} minutes**. Calculate the rate of water uptake in mm/min.`,
          answer: { type: "number", value: rate, display: `${rate}` },
          traps: [
            {
              spec: { type: "number", value: clean(dist * mins, 1) },
              feedback: "Divide distance moved by time taken (mm ÷ min), do not multiply.",
            },
          ],
          hint: `Rate = distance moved ÷ time (${dist} ÷ ${mins}).`,
          solution: [
            `Rate = distance ÷ time = {{${dist} / ${mins} = ${rate}}} mm/min.`,
          ],
        };
      }

      if (tier === 2) {
        // Volume uptake = cross-sectional area × distance ÷ time
        const area = rng.pick([0.5, 0.8, 1.0, 1.5, 2.0]);
        const mins = rng.pick([4, 5, 6, 10]);
        const speed = rng.int(3, 14);
        const dist = speed * mins;
        const volTotal = clean(area * dist, 2);
        const volRate = clean(volTotal / mins, 2);
        return {
          prompt: `In a potometer with capillary cross-sectional area **${area} mm²**, a ${shoot} (${cond.env}) pulls the air bubble **${dist} mm** in **${mins} minutes**. Calculate the volume rate of water uptake in mm³/min.`,
          answer: { type: "number", value: volRate, display: `${volRate}` },
          traps: [
            {
              spec: { type: "number", value: volTotal },
              feedback: `${volTotal} mm³ is the TOTAL volume in ${mins} minutes — divide by ${mins} to get mm³ per minute.`,
            },
            ...(area !== 1.0
              ? [
                  {
                    spec: { type: "number" as const, value: speed },
                    feedback: `${speed} mm/min is the linear bubble speed — multiply by the cross-sectional area (${area} mm²) to get volume per minute.`,
                  },
                ]
              : []),
          ],
          hint: `First find volume = area × distance (${area} × ${dist}), then divide by ${mins} minutes.`,
          solution: [
            `Total volume taken up = {{${area} * ${dist} = ${volTotal}}} mm³.`,
            `Rate = {{${volTotal} / ${mins} = ${volRate}}} mm³/min.`,
          ],
        };
      }

      // Tier 3: Compare two shoots or convert a 10/12/15-min uptake to hourly mm³/hour
      const area = rng.pick([0.4, 0.5, 0.8, 1.2]);
      const mins = rng.pick([10, 12, 15, 20]);
      const mult = 60 / mins; // 6, 5, 4, or 3
      const dist = rng.int(4, 18) * 5; // 20 to 90 mm
      const volSlice = clean(area * dist, 2);
      const hourly = clean(volSlice * mult, 2);
      return {
        prompt: `A ${shoot} ${cond.label} is attached to a potometer with capillary cross-sectional area **${area} mm²**. The bubble moves **${dist} mm** in **${mins} minutes**. Calculate the rate of water uptake in **mm³ per hour**.`,
        answer: { type: "number", value: hourly, display: `${hourly}` },
        traps: [
          {
            spec: { type: "number", value: volSlice },
            feedback: `${volSlice} mm³ is the uptake in ${mins} minutes — multiply by ${mult} to convert to 1 hour (60 min).`,
          },
          {
            spec: { type: "number", value: clean(volSlice / mins, 2) },
            feedback: "That is the rate per MINUTE — multiply by 60 to convert to mm³ per HOUR.",
          },
        ],
        hint: `Find volume in ${mins} min (${area} × ${dist}), then multiply by ${mult} because ${mins} × ${mult} = 60 minutes.`,
        solution: [
          `Volume in ${mins} min = {{${area} * ${dist} = ${volSlice}}} mm³.`,
          `In 1 hour (60 min) there are {{60 / ${mins} = ${mult}}} intervals.`,
          `Hourly rate = {{${volSlice} * ${mult} = ${hourly}}} mm³/hour.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Quadrat Population Estimation (TTS / Gippsland)
  // =========================================================================
  {
    id: "botany.quadrat-population",
    topicId: "botany",
    title: "Quadrat Population Estimates",
    level: 3,
    guideRef: "reproduction-fieldwork",
    generate(rng, tier) {
      const hab = rng.pick(HABITATS);

      if (tier === 1) {
        // 1 m × 1 m quadrats
        const length = rng.int(8, 25);
        const width = rng.int(5, 18);
        const area = length * width;
        const meanHalf = rng.int(3, 18); // 1.5 to 9.0
        const mean = clean(meanHalf / 2, 1);
        const est = clean(mean * area, 1);
        return {
          prompt: `Using random **1 m × 1 m** quadrats across a **${length} m × ${width} m** ${hab.place}, students record a mean of **${mean} ${hab.species}** per quadrat. Estimate the total number of ${hab.species}.`,
          answer: { type: "number", value: est, display: `${est}` },
          traps: [
            {
              spec: { type: "number", value: clean(mean * (length + width), 1) },
              feedback: "Find the total AREA (length × width), not length + width.",
            },
          ],
          hint: `Total area = ${length} × ${width} = ${area} m². Each quadrat is 1 m².`,
          solution: [
            `Total habitat area = {{${length} * ${width} = ${area}}} m².`,
            `Estimated population = {{${mean} * ${area} = ${est}}} ${hab.species}.`,
          ],
        };
      }

      if (tier === 2) {
        // 0.5 m × 0.5 m (0.25 m²) quadrats — classic × 4 check!
        const length = rng.int(8, 24);
        const width = rng.int(6, 16);
        const area = length * width;
        const meanHalf = rng.int(3, 14);
        const mean = clean(meanHalf / 2, 1);
        const numQuads = area * 4;
        const est = clean(mean * numQuads, 1);
        return {
          prompt: `Students sample a **${length} m × ${width} m** ${hab.place} using random **0.5 m × 0.5 m** quadrats and find a mean of **${mean} ${hab.species}** per quadrat. Estimate the total population.`,
          answer: { type: "number", value: est, display: `${est}` },
          traps: [
            {
              spec: { type: "number", value: clean(mean * area, 1) },
              feedback: "You treated each quadrat as 1 m² — a 0.5 m × 0.5 m quadrat is only 0.25 m², so 4 fit in every 1 m²!",
            },
            {
              spec: { type: "number", value: clean(mean * area * 2, 1) },
              feedback: "Careful! Area of one quadrat is 0.5 × 0.5 = 0.25 m², NOT 0.5 m².",
            },
          ],
          hint: `Plot area = ${length} × ${width} = ${area} m². One quadrat = 0.5 × 0.5 = 0.25 m², so divide ${area} by 0.25 first!`,
          solution: [
            `Habitat area = {{${length} * ${width} = ${area}}} m²; quadrat area = {{0.5 * 0.5 = 0.25}} m².`,
            `Number of quadrats = {{${area} / 0.25 = ${numQuads}}}.`,
            `Estimated population = {{${mean} * ${numQuads} = ${est}}} ${hab.species}.`,
          ],
        };
      }

      // Tier 3: Raw counts in 5 random 0.5 m × 0.5 m quadrats → mean → scale up
      const length = rng.int(10, 26);
      const width = rng.int(8, 18);
      const area = length * width;
      const mean = rng.int(2, 9);
      const a = rng.int(0, Math.min(2, mean));
      const b = rng.int(0, Math.min(2, mean));
      const counts = rng.shuffle([mean - a, mean + a, mean - b, mean + b, mean]);
      const sum = counts.reduce((acc, x) => acc + x, 0);
      const numQuads = area * 4;
      const est = mean * numQuads;
      return {
        prompt: `In five random **0.5 m × 0.5 m** quadrats across a **${length} m × ${width} m** ${hab.place}, students count **${counts.join(", ")}** ${hab.species}. Estimate the total number of ${hab.species} in the plot.`,
        answer: { type: "number", value: est, display: `${est}` },
        traps: [
          {
            spec: { type: "number", value: mean * area },
            feedback: "Remember a 0.5 m × 0.5 m quadrat has area 0.25 m², so multiply the mean per m² (mean × 4) by the plot area.",
          },
          {
            spec: { type: "number", value: sum * numQuads },
            feedback: `You multiplied the SUM of all 5 quadrats (${sum}) instead of the MEAN per quadrat (${mean}).`,
          },
        ],
        hint: `Find the mean of (${counts.join(", ")}), calculate how many 0.25 m² quadrats fit into ${length} × ${width} m², and multiply.`,
        solution: [
          `Mean per quadrat = {{${sum} / 5 = ${mean}}} ${hab.species}.`,
          `Habitat area = {{${length} * ${width} = ${area}}} m²; quadrat area = 0.25 m² → {{${area} / 0.25 = ${numQuads}}} quadrats.`,
          `Estimated total = {{${mean} * ${numQuads} = ${est}}} ${hab.species}.`,
        ],
      };
    },
  },
];
