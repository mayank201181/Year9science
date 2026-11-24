import type { Drill } from "./types.ts";

function clean(n: number, dp = 2): number {
  return Number(n.toFixed(dp));
}

const COMP: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };
const BASES = ["A", "T", "C", "G"] as const;

const SPECIES_CHROMOSOMES: ReadonlyArray<{ name: string; diploid: number }> = [
  { name: "fruit fly", diploid: 8 },
  { name: "garden pea", diploid: 14 },
  { name: "onion", diploid: 16 },
  { name: "cabbage", diploid: 18 },
  { name: "maize (corn)", diploid: 20 },
  { name: "rice", diploid: 24 },
  { name: "frog", diploid: 26 },
  { name: "honeybee queen", diploid: 32 },
  { name: "sunflower", diploid: 34 },
  { name: "domestic cat", diploid: 38 },
  { name: "mouse", diploid: 40 },
  { name: "human", diploid: 46 },
  { name: "chimpanzee", diploid: 48 },
  { name: "elephant", diploid: 56 },
  { name: "horse", diploid: 64 },
  { name: "domestic dog", diploid: 78 },
];

interface TraitSpec {
  organism: string;
  domLetter: string;
  recLetter: string;
  domPheno: string;
  recPheno: string;
}

const TRAITS: readonly TraitSpec[] = [
  { organism: "pea plants", domLetter: "T", recLetter: "t", domPheno: "tall stems", recPheno: "short stems" },
  { organism: "pea plants", domLetter: "R", recLetter: "r", domPheno: "round seeds", recPheno: "wrinkled seeds" },
  { organism: "pea plants", domLetter: "P", recLetter: "p", domPheno: "purple flowers", recPheno: "white flowers" },
  { organism: "mice", domLetter: "B", recLetter: "b", domPheno: "brown fur", recPheno: "white fur" },
  { organism: "guinea pigs", domLetter: "B", recLetter: "b", domPheno: "black coat", recPheno: "cream coat" },
  { organism: "rabbits", domLetter: "L", recLetter: "l", domPheno: "long ears", recPheno: "short ears" },
  { organism: "fruit flies", domLetter: "W", recLetter: "w", domPheno: "normal wings", recPheno: "vestigial wings" },
  { organism: "tomato plants", domLetter: "R", recLetter: "r", domPheno: "red fruit", recPheno: "yellow fruit" },
  { organism: "humans", domLetter: "D", recLetter: "d", domPheno: "dimples", recPheno: "no dimples" },
  { organism: "humans", domLetter: "F", recLetter: "f", domPheno: "healthy (unaffected)", recPheno: "cystic fibrosis" },
  { organism: "dogs", domLetter: "S", recLetter: "s", domPheno: "short fur", recPheno: "long fur" },
  { organism: "beetles", domLetter: "G", recLetter: "g", domPheno: "green shell", recPheno: "brown shell" },
  { organism: "cats", domLetter: "H", recLetter: "h", domPheno: "short hair", recPheno: "long hair" },
  { organism: "snapdragons", domLetter: "A", recLetter: "a", domPheno: "axial flowers", recPheno: "terminal flowers" },
];

function makeSeq(rng: { pick<T>(items: readonly T[]): T }, len: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < len; i++) out.push(rng.pick(BASES));
  return out;
}

export const drills: Drill[] = [
  {
    id: "dna-and-evolution.base-pairing",
    topicId: "dna-and-evolution",
    title: "DNA Base Pairing, Chargaff & Chromosomes",
    level: 1,
    guideRef: "dna-genes-chromosomes",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.75)) {
          const seq = makeSeq(rng, 4);
          const comp = seq.map((b) => COMP[b]);
          const joined = comp.join("");
          const spaced = comp.join(" ");
          return {
            prompt: `Write the complementary DNA base sequence matching **${seq.join(" ")}**.`,
            answer: { type: "text", accept: [joined, spaced], display: spaced },
            hint: "Pair Adenine (A) ↔ Thymine (T) and Cytosine (C) ↔ Guanine (G).",
            solution: [
              `Match each base (${seq.map((b, i) => `${b}→${comp[i]}`).join(", ")}) → **${spaced}**.`,
            ],
          };
        }
        const sp = rng.pick(SPECIES_CHROMOSOMES);
        const askGamete = rng.bool();
        if (askGamete) {
          const hap = sp.diploid / 2;
          return {
            prompt: `A **${sp.name}** body cell has **${sp.diploid}** chromosomes. How many chromosomes are inside a single ${sp.name} **gamete** (sex cell)?`,
            answer: { type: "number", value: hap },
            traps: [
              { spec: { type: "number", value: sp.diploid }, feedback: "Gametes carry HALF the diploid body-cell chromosome count." },
            ],
            hint: "Divide the diploid body-cell count by 2.",
            solution: [`Gamete chromosomes = ${sp.diploid} ÷ 2 = **${hap}**.`],
          };
        }
        const hap = sp.diploid / 2;
        return {
          prompt: `A **${sp.name}** gamete contains **${hap}** chromosomes. How many chromosomes are in a normal ${sp.name} **body cell** (zygote)?`,
          answer: { type: "number", value: sp.diploid },
          traps: [
            { spec: { type: "number", value: hap }, feedback: "Fertilisation fuses two gametes (egg + sperm), doubling the haploid count." },
          ],
          hint: "Multiply the gamete count by 2 (sperm + egg).",
          solution: [`Body cell count = ${hap} × 2 = **${sp.diploid}**.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const seq = makeSeq(rng, 6);
          const comp = seq.map((b) => COMP[b]);
          const joined = comp.join("");
          const spaced = comp.join(" ");
          return {
            prompt: `Write the complementary DNA strand matching the 6-base sequence **${seq.join(" ")}**.`,
            answer: { type: "text", accept: [joined, spaced], display: spaced },
            hint: "A pairs with T; C pairs with G.",
            solution: [
              `Complementary bases (${seq.map((b, i) => `${b}→${comp[i]}`).join(", ")}) → **${spaced}**.`,
            ],
          };
        }
        const givenBase = rng.pick(["Adenine (A)", "Thymine (T)", "Cytosine (C)", "Guanine (G)"] as const);
        const isAT = givenBase.startsWith("A") || givenBase.startsWith("T");
        const targetBase = isAT ? rng.pick(["Cytosine (C)", "Guanine (G)"] as const) : rng.pick(["Adenine (A)", "Thymine (T)"] as const);
        const pct = rng.int(11, 39);
        const otherPct = 50 - pct;
        const traps = [];
        if (pct !== otherPct) {
          traps.push({ spec: { type: "number" as const, value: pct }, feedback: `${pct}% is the base paired with ${givenBase}, not ${targetBase}!` });
        }
        if (2 * otherPct !== otherPct) {
          traps.push({ spec: { type: "number" as const, value: 2 * otherPct }, feedback: `${2 * otherPct}% is both remaining bases combined — divide by 2.` });
        }
        return {
          prompt: `A sample of double-stranded DNA contains **${pct}% ${givenBase}**. Calculate the percentage of **${targetBase}**.`,
          answer: { type: "number", value: otherPct, display: `${otherPct}%` },
          traps: traps.length ? traps : undefined,
          hint: "Double the given percentage, subtract from 100%, then divide by 2.",
          solution: [
            `Given pair = ${pct}% + ${pct}% = ${2 * pct}%.`,
            `Remaining pair = 100% − ${2 * pct}% = ${100 - 2 * pct}%.`,
            `${targetBase} = ${100 - 2 * pct}% ÷ 2 = **${otherPct}%**.`,
          ],
        };
      }

      // Tier 3: Total bases + count or percentage → exact count of non-paired base
      const total = rng.pick([200, 240, 300, 360, 400, 480, 500, 600]);
      const givenBase = rng.pick(["Adenine (A)", "Thymine (T)", "Cytosine (C)", "Guanine (G)"] as const);
      const isAT = givenBase.startsWith("A") || givenBase.startsWith("T");
      const targetBase = isAT ? rng.pick(["Cytosine (C)", "Guanine (G)"] as const) : rng.pick(["Adenine (A)", "Thymine (T)"] as const);
      const pctPool = [10, 15, 20, 30, 35, 40];
      const pct = rng.pick(pctPool);
      const givenCount = (total * pct) / 100;
      const otherCount = total / 2 - givenCount;
      const traps = [];
      if (givenCount !== otherCount) {
        traps.push({ spec: { type: "number" as const, value: givenCount }, feedback: `${givenCount} is the count of ${givenBase} (and its partner), not ${targetBase}.` });
      }
      traps.push({ spec: { type: "number" as const, value: 2 * otherCount }, feedback: `${2 * otherCount} is both remaining bases combined — divide by 2.` });

      if (rng.bool()) {
        return {
          prompt: `A double-stranded DNA section contains **${total} bases** in total, of which **${pct}%** are **${givenBase}**. How many **${targetBase}** bases are in this section?`,
          answer: { type: "number", value: otherCount },
          traps,
          hint: `First find %${targetBase} = 50% − ${pct}%, then multiply by ${total}.`,
          solution: [
            `%${targetBase} = (100% − ${2 * pct}%) ÷ 2 = ${50 - pct}%.`,
            `Count = (${50 - pct} ÷ 100) × ${total} = **${otherCount}** bases.`,
          ],
        };
      }
      return {
        prompt: `A double-stranded DNA section contains **${total} bases** in total, including **${givenCount} ${givenBase}** bases. How many **${targetBase}** bases are present?`,
        answer: { type: "number", value: otherCount },
        traps,
        hint: `Double ${givenCount}, subtract from ${total}, and divide by 2.`,
        solution: [
          `Given pair total = 2 × ${givenCount} = ${2 * givenCount} bases.`,
          `Remaining pair = ${total} − ${2 * givenCount} = ${total - 2 * givenCount} bases.`,
          `${targetBase} count = ${total - 2 * givenCount} ÷ 2 = **${otherCount}** bases.`,
        ],
      };
    },
  },
  {
    id: "dna-and-evolution.punnett-probability",
    topicId: "dna-and-evolution",
    title: "Punnett Squares & Offspring Counts",
    level: 2,
    guideRef: "variation-inheritance",
    generate(rng, tier) {
      const tr = rng.pick(TRAITS);
      const D = tr.domLetter;
      const r = tr.recLetter;
      type CrossDef = {
        p1: string;
        p2: string;
        domPct: number;
        recPct: number;
        homDomPct: number;
        hetPct: number;
        homRecPct: number;
        cells: string;
      };
      const crosses: CrossDef[] = [
        { p1: `${D}${D}`, p2: `${r}${r}`, domPct: 100, recPct: 0, homDomPct: 0, hetPct: 100, homRecPct: 0, cells: `${D}${r}, ${D}${r}, ${D}${r}, ${D}${r}` },
        { p1: `${D}${r}`, p2: `${D}${r}`, domPct: 75, recPct: 25, homDomPct: 25, hetPct: 50, homRecPct: 25, cells: `${D}${D}, ${D}${r}, ${D}${r}, ${r}${r}` },
        { p1: `${D}${r}`, p2: `${r}${r}`, domPct: 50, recPct: 50, homDomPct: 0, hetPct: 50, homRecPct: 50, cells: `${D}${r}, ${D}${r}, ${r}${r}, ${r}${r}` },
        { p1: `${D}${D}`, p2: `${D}${r}`, domPct: 100, recPct: 0, homDomPct: 50, hetPct: 50, homRecPct: 0, cells: `${D}${D}, ${D}${D}, ${D}${r}, ${D}${r}` },
      ];
      const cr = rng.pick(crosses);

      if (tier === 1) {
        const askRec = rng.bool();
        const ans = askRec ? cr.recPct : cr.domPct;
        const pheno = askRec ? tr.recPheno : tr.domPheno;
        return {
          prompt: `In ${tr.organism}, **${tr.domPheno}** (${D}) is dominant over **${tr.recPheno}** (${r}). For the cross **${cr.p1} × ${cr.p2}**, what **percentage** of offspring are expected to show **${pheno}**?`,
          answer: { type: "number", value: ans, display: `${ans}%` },
          hint: `Fill the 2×2 Punnett square for ${cr.p1} × ${cr.p2} and count the ${askRec ? `${r}${r}` : `${D}${D} or ${D}${r}`} squares.`,
          solution: [
            `Punnett square (${cr.p1} × ${cr.p2}): ${cr.cells}.`,
            `${pheno} = **${ans}%**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const askGeno = rng.pick(["het", "homDom", "homRec"] as const);
          const label =
            askGeno === "het"
              ? `heterozygous (${D}${r})`
              : askGeno === "homDom"
                ? `homozygous dominant (${D}${D})`
                : `homozygous recessive (${r}${r})`;
          const ans = askGeno === "het" ? cr.hetPct : askGeno === "homDom" ? cr.homDomPct : cr.homRecPct;
          return {
            prompt: `In ${tr.organism} (${D} = ${tr.domPheno}, ${r} = ${tr.recPheno}), parents **${cr.p1} × ${cr.p2}** are crossed. What **percentage** of offspring are expected to be **${label}**?`,
            answer: { type: "number", value: ans, display: `${ans}%` },
            hint: `Draw the 2×2 Punnett square (${cr.p1} × ${cr.p2}) and count exact matching genotypes out of 4.`,
            solution: [
              `Punnett square outcomes: ${cr.cells}.`,
              `Percentage ${label} = **${ans}%**.`,
            ],
          };
        }
        const cross2 = rng.pick([crosses[1], crosses[2]]); // Bb x Bb or Bb x bb
        const total = rng.pick([40, 60, 80, 100, 120, 160, 200, 240]);
        const askRec = rng.bool();
        const pct = askRec ? cross2.recPct : cross2.domPct;
        const expected = (total * pct) / 100;
        const other = total - expected;
        return {
          prompt: `In ${tr.organism}, ${tr.domPheno} (${D}) is dominant to ${tr.recPheno} (${r}). A **${cross2.p1} × ${cross2.p2}** cross produces **${total} offspring**. How many are expected to show **${askRec ? tr.recPheno : tr.domPheno}**?`,
          answer: { type: "number", value: expected },
          traps: other !== expected ? [
            { spec: { type: "number", value: other }, feedback: `${other} is the expected number of the opposite phenotype (${askRec ? tr.domPheno : tr.recPheno}).` },
          ] : undefined,
          hint: `Find the Punnett percentage (${pct}%) first, then multiply by ${total}.`,
          solution: [
            `${cross2.p1} × ${cross2.p2} gives ${cross2.cells} → ${pct}% ${askRec ? tr.recPheno : tr.domPheno}.`,
            `Expected count = (${pct} ÷ 100) × ${total} = **${expected}**.`,
          ],
        };
      }

      // Tier 3: Expected count of a specific genotype OR two-generation cross
      const total = rng.pick([80, 120, 160, 200, 240, 320, 400]);
      if (rng.bool()) {
        const cross3 = rng.pick([crosses[1], crosses[2], crosses[3]]);
        const askHet = rng.bool();
        const pct = askHet ? cross3.hetPct : cross3.homDomPct;
        const expected = (total * pct) / 100;
        return {
          prompt: `In ${tr.organism} (${D} dominant, ${r} recessive), a **${cross3.p1} × ${cross3.p2}** cross produces **${total} offspring**. How many offspring are expected to be **${askHet ? `heterozygous (${D}${r})` : `homozygous dominant (${D}${D})`}**?`,
          answer: { type: "number", value: expected },
          hint: `Determine the fraction of ${askHet ? `${D}${r}` : `${D}${D}`} squares in ${cross3.p1} × ${cross3.p2}, then multiply by ${total}.`,
          solution: [
            `Punnett square: ${cross3.cells} → ${pct}% ${askHet ? `${D}${r}` : `${D}${D}`}.`,
            `Expected count = (${pct} ÷ 100) × ${total} = **${expected}**.`,
          ],
        };
      }
      // Two-generation: pure-breeding DD x rr -> all Dr -> cross two F1 (Dr x Dr) -> count rr out of total
      const askRec = rng.bool();
      const expected = askRec ? total / 4 : (total * 3) / 4;
      const other = total - expected;
      return {
        prompt: `In ${tr.organism}, a pure-breeding **${D}${D}** (${tr.domPheno}) is crossed with **${r}${r}** (${tr.recPheno}). Two of their offspring are then crossed together to produce **${total}** second-generation offspring. How many are expected to have **${askRec ? tr.recPheno : tr.domPheno}**?`,
        answer: { type: "number", value: expected },
        traps: [
          { spec: { type: "number", value: other }, feedback: `${other} is the expected count of the opposite phenotype.` },
        ],
        hint: `Every first-generation offspring of ${D}${D} × ${r}${r} is ${D}${r}; now cross ${D}${r} × ${D}${r}.`,
        solution: [
          `Generation 1 (${D}${D} × ${r}${r}) → 100% heterozygous (${D}${r}).`,
          `Generation 2 (${D}${r} × ${D}${r}) → 75% ${tr.domPheno}, 25% ${tr.recPheno}.`,
          `Expected count = ${askRec ? "0.25" : "0.75"} × ${total} = **${expected}**.`,
        ],
      };
    },
  },
  {
    id: "dna-and-evolution.selection-shift",
    topicId: "dna-and-evolution",
    title: "Natural Selection Shifts & Bacterial Growth",
    level: 2,
    guideRef: "natural-selection",
    generate(rng, tier) {
      const habitats = [
        { org: "peppered moths", adv: "dark", dis: "pale", pred: "birds", bg: "soot-darkened bark" },
        { org: "desert mice", adv: "dark", dis: "sandy", pred: "owls", bg: "black volcanic rock" },
        { org: "beetles", adv: "brown", dis: "bright green", pred: "lizards", bg: "dry woodland soil" },
        { org: "snails", adv: "banded", dis: "plain yellow", pred: "thrushes", bg: "hedgerow leaves" },
        { org: "grasshoppers", adv: "tan", dis: "bright green", pred: "hawks", bg: "parched grass" },
        { org: "snowshoe hares", adv: "white", dis: "brown", pred: "foxes", bg: "winter snow" },
      ] as const;
      const hab = rng.pick(habitats);

      if (tier === 1) {
        const start = rng.pick([20, 25, 40, 50, 80, 100]);
        const pctSurv = rng.pick([20, 25, 30, 40, 50, 60, 70, 75, 80, 85, 90]);
        const surv = clean((start * pctSurv) / 100, 1);
        const eaten = clean(start - surv, 1);
        return {
          prompt: `On ${hab.bg}, a colony begins with **${start} ${hab.adv} ${hab.org}**. Before breeding, ${hab.pred} eat **${eaten}** of them. What **percentage** of the ${hab.adv} ${hab.org} **survived**?`,
          answer: { type: "number", value: pctSurv, display: `${pctSurv}%` },
          traps: 100 - pctSurv !== pctSurv ? [
            { spec: { type: "number", value: 100 - pctSurv }, feedback: `${100 - pctSurv}% were eaten — subtract from 100% to find the surviving percentage.` },
          ] : undefined,
          hint: `First find survivors (${start} − ${eaten}), then compute (survivors ÷ ${start}) × 100%.`,
          solution: [
            `Survivors = ${start} − ${eaten} = ${surv}.`,
            `Survival percentage = (${surv} ÷ ${start}) × 100% = **${pctSurv}%**.`,
          ],
        };
      }

      if (tier === 2) {
        // Exact integer percentage of surviving population that has the advantageous trait
        const totalSurv = rng.pick([40, 50, 80, 100]);
        const newPct = rng.pick([55, 60, 65, 70, 75, 80, 85]);
        const survAdv = (totalSurv * newPct) / 100;
        const survDis = totalSurv - survAdv;
        if (!Number.isInteger(survAdv)) {
          // Ensure clean integer counts
          const ts = 100;
          const sA = newPct;
          const sD = 100 - newPct;
          const eatenA = rng.int(5, 25);
          const eatenD = rng.int(40, 90);
          const startA = sA + eatenA;
          const startD = sD + eatenD;
          return {
            prompt: `On ${hab.bg}, a population starts with **${startD} ${hab.dis}** and **${startA} ${hab.adv} ${hab.org}**. Predators eat **${eatenD} ${hab.dis}** and **${eatenA} ${hab.adv}** individuals. What **percentage of the surviving population** are **${hab.adv}**?`,
            answer: { type: "number", value: newPct, display: `${newPct}%` },
            hint: `Find surviving ${hab.dis} and surviving ${hab.adv}, add them for total survivors, then compute (surviving ${hab.adv} ÷ total survivors) × 100%.`,
            solution: [
              `Surviving ${hab.dis} = ${startD} − ${eatenD} = ${sD}; surviving ${hab.adv} = ${startA} − ${eatenA} = ${sA}.`,
              `Total survivors = ${sD} + ${sA} = ${ts}.`,
              `${hab.adv} share = (${sA} ÷ ${ts}) × 100% = **${newPct}%**.`,
            ],
          };
        }
        const eatenA = rng.int(4, 20);
        const eatenD = rng.int(25, 70);
        const startA = survAdv + eatenA;
        const startD = survDis + eatenD;
        return {
          prompt: `On ${hab.bg}, a population starts with **${startD} ${hab.dis}** and **${startA} ${hab.adv} ${hab.org}**. Predators eat **${eatenD} ${hab.dis}** and **${eatenA} ${hab.adv}** individuals. What **percentage of the surviving population** are **${hab.adv}**?`,
          answer: { type: "number", value: newPct, display: `${newPct}%` },
          traps: 100 - newPct !== newPct ? [
            { spec: { type: "number", value: 100 - newPct }, feedback: `${100 - newPct}% is the ${hab.dis} share — find the ${hab.adv} share of survivors.` },
          ] : undefined,
          hint: `Subtract eaten from starting numbers for both groups, add for total survivors, then divide surviving ${hab.adv} by total survivors.`,
          solution: [
            `Surviving ${hab.dis} = ${startD} − ${eatenD} = ${survDis}; surviving ${hab.adv} = ${startA} − ${eatenA} = ${survAdv}.`,
            `Total survivors = ${survDis} + ${survAdv} = ${totalSurv}.`,
            `${hab.adv} share = (${survAdv} ÷ ${totalSurv}) × 100% = **${newPct}%**.`,
          ],
        };
      }

      // Tier 3: Exponential bacterial resistance growth OR percentage-point allele shift
      if (rng.bool(0.6)) {
        const startBact = rng.pick([1, 2, 3, 5, 10, 12, 15, 20, 25]);
        const divMin = rng.pick([15, 20, 30]);
        const divs = rng.int(3, 7);
        const totalMin = divMin * divs;
        const finalCount = startBact * 2 ** divs;
        const linearTrap = startBact * divs;
        return {
          prompt: `After an antibiotic kills all non-resistant cells, **${startBact}** resistant mutant bacteria survive and divide every **${divMin} minutes**. How many resistant bacteria will exist after **${totalMin} minutes**?`,
          answer: { type: "number", value: finalCount },
          traps: linearTrap !== finalCount ? [
            { spec: { type: "number", value: linearTrap }, feedback: `Bacteria DOUBLE every ${divMin} minutes (${startBact} × 2^${divs}), not multiply linearly by ${divs}!` },
          ] : undefined,
          hint: `First find the number of divisions (${totalMin} ÷ ${divMin} = ${divs}), then multiply ${startBact} by 2^${divs}.`,
          solution: [
            `Number of divisions = ${totalMin} ÷ ${divMin} = ${divs}.`,
            `Final bacteria = ${startBact} × 2^${divs} = ${startBact} × ${2 ** divs} = **${finalCount}**.`,
          ],
        };
      }

      // Percentage-point rise from a clean initial share to a clean post-predation share (out of 50 survivors)
      const startTotal = 200;
      const startPct = rng.pick([25, 30, 40, 50]);
      const startA = (startTotal * startPct) / 100;
      const cleanSurvA = rng.pick([30, 32, 35, 36, 38, 40, 42, 44]);
      const actualStartA = Math.max(startA, cleanSurvA + 8);
      const actualStartD = startTotal - actualStartA;
      const actualStartPct = clean((actualStartA / startTotal) * 100, 1);
      const survD = 50 - cleanSurvA;
      const eatenA = actualStartA - cleanSurvA;
      const eatenD = actualStartD - survD;
      const newPct = clean((cleanSurvA / 50) * 100, 1);
      const rise = clean(newPct - actualStartPct, 1);
      return {
        prompt: `On ${hab.bg}, **${actualStartA} ${hab.adv}** and **${actualStartD} ${hab.dis} ${hab.org}** live together (${actualStartPct}% ${hab.adv}). Predators eat **${eatenA} ${hab.adv}** and **${eatenD} ${hab.dis}**. By how many **percentage points** did the ${hab.adv} share increase?`,
        answer: { type: "number", value: rise },
        traps: newPct !== rise ? [
          { spec: { type: "number", value: newPct }, feedback: `${newPct}% is the NEW ${hab.adv} share — subtract the starting ${actualStartPct}% to get the rise in percentage points!` },
        ] : undefined,
        hint: `Find the new ${hab.adv} percentage among the 50 survivors, then subtract ${actualStartPct}%.`,
        solution: [
          `Surviving ${hab.adv} = ${cleanSurvA}; surviving ${hab.dis} = ${survD}; total survivors = 50.`,
          `New ${hab.adv} share = (${cleanSurvA} ÷ 50) × 100% = ${newPct}%.`,
          `Increase = ${newPct}% − ${actualStartPct}% = **${rise}** percentage points.`,
        ],
      };
    },
  },
  {
    id: "dna-and-evolution.biodiversity-strata",
    topicId: "dna-and-evolution",
    title: "Fossil Strata Ages & Biodiversity Math",
    level: 3,
    guideRef: "fossils-extinction-biodiversity",
    generate(rng, tier) {
      const ecosystems = [
        "tropical rainforest",
        "mangrove wetland",
        "coral reef",
        "peat swamp forest",
        "coastal estuary",
        "temperate woodland",
        "savannah grassland",
        "alpine meadow",
      ] as const;
      const groups = ["bird", "amphibian", "orchid", "beetle", "reef fish", "butterfly", "mammal"] as const;

      if (tier === 1) {
        if (rng.bool(0.5)) {
          const oldFossil = rng.pick(["trilobite", "ammonite", "ancient fern", "armoured fish", "early reptile"]);
          const youngFossil = rng.pick(["dinosaur", "Archaeopteryx", "early horse", "sabre-toothed cat", "woolly mammoth"]);
          const youngAge = rng.int(12, 165);
          const gap = rng.int(25, 290);
          const oldAge = youngAge + gap;
          return {
            prompt: `In an undisturbed sedimentary cliff, a **${oldFossil}** fossil sits in a deeper layer aged **${oldAge} million years** and a **${youngFossil}** fossil sits higher up in a layer aged **${youngAge} million years**. How many **million years older** is the ${oldFossil}?`,
            answer: { type: "number", value: gap },
            hint: `Subtract the younger rock age (${youngAge} Ma) from the older rock age (${oldAge} Ma).`,
            solution: [`Age difference = ${oldAge} − ${youngAge} = **${gap}** million years.`],
          };
        }
        const total = rng.pick([100, 150, 200, 250, 300, 400, 500, 600]);
        const extPct = rng.pick([60, 70, 75, 80, 85, 90, 95]);
        const survPct = 100 - extPct;
        const survivors = clean((total * survPct) / 100, 1);
        const extinct = clean(total - survivors, 1);
        return {
          prompt: `During a mass extinction event, **${extPct}%** of **${total}** marine species vanished. How many of those species **survived**?`,
          answer: { type: "number", value: survivors },
          traps: extinct !== survivors ? [
            { spec: { type: "number", value: extinct }, feedback: `${extinct} is the number that went EXTINCT (${extPct}%). The question asks how many SURVIVED (${survPct}%).` },
          ] : undefined,
          hint: `First find surviving percentage (100% − ${extPct}% = ${survPct}%), then multiply by ${total}.`,
          solution: [
            `Surviving share = 100% − ${extPct}% = ${survPct}%.`,
            `Surviving species = (${survPct} ÷ 100) × ${total} = **${survivors}**.`,
          ],
        };
      }

      if (tier === 2) {
        const eco = rng.pick(ecosystems);
        const grp = rng.pick(groups);
        const orig = rng.pick([40, 50, 80, 100, 120, 150, 160, 200, 250]);
        const pct = rng.pick([10, 15, 20, 25, 30, 35, 40, 45, 50]);
        const lost = (orig * pct) / 100;
        if (!Number.isInteger(lost)) {
          const o2 = 200;
          const l2 = (o2 * pct) / 100;
          const rem2 = o2 - l2;
          return {
            prompt: `A **${eco}** originally held **${o2} ${grp} species**. After habitat clearing, **${rem2} species** remained. Calculate the **percentage decrease** in ${grp} species.`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            hint: `Find species lost (${o2} − ${rem2}), divide by original count (${o2}), and multiply by 100.`,
            solution: [
              `Species lost = ${o2} − ${rem2} = ${l2}.`,
              `Percentage decrease = (${l2} ÷ ${o2}) × 100% = **${pct}%**.`,
            ],
          };
        }
        const rem = orig - lost;
        const traps = [];
        if (100 - pct !== pct) {
          traps.push({ spec: { type: "number" as const, value: 100 - pct }, feedback: `${100 - pct}% is the percentage REMAINING — subtract from 100% for percentage decrease.` });
        }
        if (lost !== pct) {
          traps.push({ spec: { type: "number" as const, value: lost }, feedback: `${lost} is the number of species lost — now divide by ${orig} and multiply by 100.` });
        }
        return {
          prompt: `A **${eco}** originally held **${orig} ${grp} species**. After habitat fragmentation, **${rem} species** remained. Calculate the **percentage decrease** in ${grp} species.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          traps: traps.length ? traps : undefined,
          hint: `Compute ((${orig} − ${rem}) ÷ ${orig}) × 100%.`,
          solution: [
            `Species lost = ${orig} − ${rem} = ${lost}.`,
            `Percentage decrease = (${lost} ÷ ${orig}) × 100% = **${pct}%**.`,
          ],
        };
      }

      // Tier 3: Sedimentary rock accumulation rate time-gap calculation
      const rock = rng.pick(["limestone", "sandstone", "shale", "mudstone", "chalk"]);
      const rate = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8]);
      const years = rng.int(12, 85);
      const sep = clean(rate * years, 2);
      const topDepth = rng.int(3, 18);
      const deepDepth = clean(topDepth + sep, 2);
      const multTrap = clean(sep * rate, 2);
      return {
        prompt: `A **${rock}** formation builds up at **${rate} m per million years**. Fossil X lies **${deepDepth} m** below the surface and Fossil Y lies **${topDepth} m** below the surface in undisturbed strata. How many **million years** passed between Fossil X and Fossil Y?`,
        answer: { type: "number", value: years },
        traps: multTrap !== years ? [
          { spec: { type: "number", value: multTrap }, feedback: "Divide the vertical rock thickness by the accumulation rate — do not multiply!" },
        ] : undefined,
        hint: `First subtract the two depths (${deepDepth} − ${topDepth} = ${sep} m), then divide by ${rate} m/Ma.`,
        solution: [
          `Vertical separation = ${deepDepth} − ${topDepth} = ${sep} m.`,
          `Time elapsed = ${sep} ÷ ${rate} = **${years}** million years.`,
        ],
      };
    },
  },
];
