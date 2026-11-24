"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type Base = "A" | "T" | "C" | "G";
type DnaPreset = "balanced" | "at-rich" | "gc-rich";

const NEXT_BASE: Record<Base, Base> = { A: "T", T: "C", C: "G", G: "A" };
const COMP_BASE: Record<Base, Base> = { A: "T", T: "A", C: "G", G: "C" };

const BASE_COLOR: Record<Base, string> = {
  A: "var(--brand)",
  T: "var(--bad)",
  C: "var(--good)",
  G: "var(--ink-2)",
};

const DNA_PRESETS: Record<DnaPreset, Base[]> = {
  balanced: ["A", "T", "G", "C", "A", "C", "G", "T"],
  "at-rich": ["A", "T", "A", "A", "T", "G", "A", "T"],
  "gc-rich": ["G", "C", "G", "C", "C", "A", "G", "C"],
};

function DnaHelixBuilder() {
  const [strand1, setStrand1] = useState<Base[]>(DNA_PRESETS.balanced);
  const [preset, setPreset] = useState<DnaPreset>("balanced");

  const applyPreset = (p: DnaPreset) => {
    setPreset(p);
    setStrand1([...DNA_PRESETS[p]]);
  };

  const cycleBase = (idx: number) => {
    setStrand1((prev) => prev.map((b, i) => (i === idx ? NEXT_BASE[b] : b)));
  };

  const strand2 = strand1.map((b) => COMP_BASE[b]);
  const allBases = [...strand1, ...strand2];
  const total = allBases.length; // 16 bases total
  const countA = allBases.filter((b) => b === "A").length;
  const countT = allBases.filter((b) => b === "T").length;
  const countC = allBases.filter((b) => b === "C").length;
  const countG = allBases.filter((b) => b === "G").length;
  const pctA = ((countA / total) * 100).toFixed(1);
  const pctC = ((countC / total) * 100).toFixed(1);

  return (
    <WidgetFrame
      title="DNA Double Helix & Chargaff Base-Pairing Builder"
      tryThis={[
        "Click any base button on **Strand 1** to mutate it (`A → T → C → G`) and watch **Strand 2** update automatically.",
        "Switch between **AT-Rich** and **GC-Rich** and verify that `%A = %T`, `%C = %G`, and `%A + %C` ALWAYS equals **50%**!",
      ]}
      caption={
        <span>
          Across all 16 bases in this double-stranded section: <strong>A = T = {countA} ({pctA}%)</strong> and{" "}
          <strong>C = G = {countC} ({pctC}%)</strong>. Notice why Chargaff’s rule works: every time you add an A on Strand 1, complementary base pairing forces a T onto Strand 2!
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<DnaPreset>
            label="DNA preset sequence"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "balanced", label: "Balanced (50/50)" },
              { value: "at-rich", label: "AT-Rich" },
              { value: "gc-rich", label: "GC-Rich" },
            ]}
          />
        </div>

        <div className="space-y-2 min-w-0">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Tap any Strand 1 base to mutate it:
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 min-w-0">
            {strand1.map((b, i) => (
              <button
                key={`b-${i}`}
                type="button"
                onClick={() => cycleBase(i)}
                className="rounded-xl border border-line bg-surface px-2 py-2 text-center font-extrabold text-ink shadow-sm transition hover:border-brand"
                aria-label={`Position ${i + 1}: base ${b}, tap to change`}
              >
                <div className="text-[10px] font-semibold text-ink-2">#{i + 1}</div>
                <div className="text-lg leading-tight" style={{ color: BASE_COLOR[b] }}>
                  {b}
                </div>
                <div className="text-[10px] font-bold text-ink-2">↕ {strand2[i]}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 min-w-0">
          <svg
            viewBox="0 0 440 165"
            className="w-full h-auto max-w-full"
            role="img"
            aria-label="Interactive double-stranded DNA ladder showing complementary A-T and C-G rungs"
          >
            <line x1={24} y1={34} x2={416} y2={34} stroke="var(--ink)" strokeWidth={4} strokeLinecap="round" />
            <line x1={24} y1={132} x2={416} y2={132} stroke="var(--ink)" strokeWidth={4} strokeLinecap="round" />
            <text x={24} y={22} fontSize={10} fontWeight={700} fill="var(--ink-2)">
              Strand 1 (Template) — Sugar-Phosphate Backbone
            </text>
            <text x={24} y={152} fontSize={10} fontWeight={700} fill="var(--ink-2)">
              Strand 2 (Complementary) — Sugar-Phosphate Backbone
            </text>

            {strand1.map((b1, i) => {
              const b2 = strand2[i];
              const x = 48 + i * 49;
              const bonds = b1 === "A" || b1 === "T" ? 2 : 3;
              return (
                <g key={`rung-${i}`}>
                  <rect x={x - 13} y={37} width={26} height={38} rx={5} fill={BASE_COLOR[b1]} />
                  <text x={x} y={60} textAnchor="middle" fontSize={13} fontWeight={800} fill="var(--surface)">
                    {b1}
                  </text>
                  <rect x={x - 13} y={91} width={26} height={38} rx={5} fill={BASE_COLOR[b2]} />
                  <text x={x} y={114} textAnchor="middle" fontSize={13} fontWeight={800} fill="var(--surface)">
                    {b2}
                  </text>
                  {bonds === 2 ? (
                    <>
                      <line x1={x - 4} y1={77} x2={x - 4} y2={89} stroke="var(--ink-2)" strokeWidth={1.6} strokeDasharray="2 2" />
                      <line x1={x + 4} y1={77} x2={x + 4} y2={89} stroke="var(--ink-2)" strokeWidth={1.6} strokeDasharray="2 2" />
                    </>
                  ) : (
                    <>
                      <line x1={x - 6} y1={77} x2={x - 6} y2={89} stroke="var(--ink-2)" strokeWidth={1.6} strokeDasharray="2 2" />
                      <line x1={x} y1={77} x2={x} y2={89} stroke="var(--ink-2)" strokeWidth={1.6} strokeDasharray="2 2" />
                      <line x1={x + 6} y1={77} x2={x + 6} y2={89} stroke="var(--ink-2)" strokeWidth={1.6} strokeDasharray="2 2" />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 min-w-0">
          <Readout label="Adenine (A)" value={`${countA} (${pctA}%)`} tone="brand" />
          <Readout label="Thymine (T)" value={`${countT} (${pctA}%)`} tone="bad" />
          <Readout label="Cytosine (C)" value={`${countC} (${pctC}%)`} tone="good" />
          <Readout label="Guanine (G)" value={`${countG} (${pctC}%)`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

type BarkEnv = "clean" | "soot" | "recovery";

// Deterministic moth coordinates for the woodland canopy display
const MOTH_SLOTS: ReadonlyArray<{ x: number; y: number }> = [
  { x: 24, y: 36 },
  { x: 64, y: 42 },
  { x: 102, y: 34 },
  { x: 38, y: 74 },
  { x: 82, y: 78 },
  { x: 118, y: 68 },
  { x: 26, y: 114 },
  { x: 66, y: 118 },
  { x: 108, y: 110 },
  { x: 46, y: 150 },
  { x: 88, y: 154 },
  { x: 116, y: 146 },
];

function PepperedMothSelectionSim() {
  const [sootPct, setSootPct] = useState<number>(85);
  const [startDarkPct, setStartDarkPct] = useState<number>(15);
  const [generations, setGenerations] = useState<number>(12);
  const [envPreset, setEnvPreset] = useState<BarkEnv>("soot");

  const applyEnv = (e: BarkEnv) => {
    setEnvPreset(e);
    if (e === "clean") {
      setSootPct(10);
      setStartDarkPct(40);
    } else if (e === "soot") {
      setSootPct(90);
      setStartDarkPct(10);
    } else {
      setSootPct(15);
      setStartDarkPct(85);
    }
  };

  // Deterministic viability selection simulation:
  // Dark moth survival rises with bark darkness (sootPct); pale moth survival drops with sootPct.
  const darkFit = 0.45 + 0.50 * (sootPct / 100);
  const lightFit = 0.95 - 0.50 * (sootPct / 100);

  const trajectory: number[] = [];
  let freqDark = startDarkPct / 100;
  trajectory.push(freqDark * 100);
  for (let g = 1; g <= 20; g++) {
    const survD = freqDark * darkFit;
    const survL = (1 - freqDark) * lightFit;
    freqDark = survD / (survD + survL);
    trajectory.push(freqDark * 100);
  }

  const currentDarkPct = trajectory[generations];
  const currentLightPct = 100 - currentDarkPct;
  const darkCount = Math.round((currentDarkPct / 100) * MOTH_SLOTS.length);

  // Bark background grey lightness (pale lichen = 86%, soot = 24%)
  const barkL = Math.round(86 - 0.62 * sootPct);
  const barkFill = `hsl(35 12% ${barkL}%)`;

  const gx = (g: number) => 176 + (g / 20) * 234;
  const gy = (pct: number) => 168 - (pct / 100) * 134;

  const darkPolyline = trajectory
    .slice(0, generations + 1)
    .map((v, g) => `${gx(g).toFixed(1)},${gy(v).toFixed(1)}`)
    .join(" ");
  const lightPolyline = trajectory
    .slice(0, generations + 1)
    .map((v, g) => `${gx(g).toFixed(1)},${gy(100 - v).toFixed(1)}`)
    .join(" ");

  const favoured = sootPct > 52 ? "Dark Moths" : sootPct < 48 ? "Pale Moths" : "Balanced";

  return (
    <WidgetFrame
      title="Peppered Moth Natural Selection Simulator"
      tryThis={[
        "Pick **Industrial Soot (1850s)** and step **Generations** from `0` to `20` — watch rare 10% dark mutants sweep to dominance!",
        "Now pick **Clean Air Act (1960s)** starting from 85% dark moths — see how natural selection reverses when tree trunks turn pale again!",
      ]}
      caption={
        sootPct > 52 ? (
          <span>
            <strong>Soot-darkened bark ({sootPct}% darkness):</strong> birds spot and eat pale moths more easily, so camouflaged <strong>dark moths</strong> survive and reproduce more — shifting the population from <strong>{startDarkPct}%</strong> to <strong>{currentDarkPct.toFixed(1)}% dark</strong> after {generations} generations.
          </span>
        ) : sootPct < 48 ? (
          <span>
            <strong>Pale lichen-covered bark ({sootPct}% darkness):</strong> dark moths stand out to bird predators while <strong>pale moths</strong> stay camouflaged — raising pale moths to <strong>{currentLightPct.toFixed(1)}%</strong> after {generations} generations.
          </span>
        ) : (
          <span>
            <strong>Intermediate bark ({sootPct}% darkness):</strong> neither colour has a strong camouflage advantage, so both alleles remain nearly steady over generations.
          </span>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap gap-2">
          <Segmented<BarkEnv>
            label="Historical environment preset"
            value={envPreset}
            onChange={applyEnv}
            options={[
              { value: "clean", label: "Pre-Industrial Lichen" },
              { value: "soot", label: "Industrial Soot" },
              { value: "recovery", label: "Clean Air Act" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0">
          <Slider
            label="Tree bark darkness (soot pollution)"
            value={sootPct}
            min={0}
            max={100}
            step={5}
            onChange={setSootPct}
            format={(v) => `${v}% dark`}
          />
          <Slider
            label="Starting dark-moth population (Gen 0)"
            value={startDarkPct}
            min={5}
            max={95}
            step={5}
            onChange={setStartDarkPct}
            format={(v) => `${v}% dark`}
          />
        </div>

        <Stepper
          label="Generations elapsed"
          value={generations}
          min={0}
          max={20}
          step={1}
          onChange={setGenerations}
          format={(v) => `Gen ${v}`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-2 min-w-0">
          <svg
            viewBox="0 0 430 205"
            className="w-full h-auto max-w-full"
            role="img"
            aria-label="Woodland bark showing light and dark peppered moths next to a generation-by-generation natural selection frequency graph"
          >
            <rect x={10} y={14} width={126} height={164} rx={8} fill={barkFill} stroke="var(--line)" strokeWidth={1.4} />
            <text x={73} y={194} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink-2)">
              Bark at Gen {generations}
            </text>

            {MOTH_SLOTS.map((slot, i) => {
              const isDark = i < darkCount;
              return (
                <g key={`m-${i}`} transform={`translate(${slot.x}, ${slot.y})`}>
                  <path
                    d="M -10 -4 Q -4 -9 0 -2 Q 4 -9 10 -4 Q 9 5 0 3 Q -9 5 -10 -4 Z"
                    fill={isDark ? "#1f242c" : "#f4f2ec"}
                    stroke={isDark ? "#64748b" : "#94a3b8"}
                    strokeWidth={1.1}
                  />
                </g>
              );
            })}

            {[0, 25, 50, 75, 100].map((p) => (
              <g key={`yp-${p}`}>
                <line x1={176} y1={gy(p)} x2={410} y2={gy(p)} stroke="var(--line)" strokeWidth={0.8} />
                <text x={170} y={gy(p) + 3} textAnchor="end" fontSize={9.5} fill="var(--ink-2)">
                  {p}%
                </text>
              </g>
            ))}
            {[0, 5, 10, 15, 20].map((g) => (
              <text key={`xg-${g}`} x={gx(g)} y={182} textAnchor="middle" fontSize={9.5} fill="var(--ink-2)">
                {g}
              </text>
            ))}

            <line x1={176} y1={168} x2={412} y2={168} stroke="var(--ink)" strokeWidth={1.6} />
            <line x1={176} y1={168} x2={176} y2={30} stroke="var(--ink)" strokeWidth={1.6} />

            <polyline fill="none" stroke="var(--brand)" strokeWidth={2.5} points={darkPolyline} />
            <polyline fill="none" stroke="var(--good)" strokeWidth={2.2} strokeDasharray="5 3" points={lightPolyline} />

            <circle cx={gx(generations)} cy={gy(currentDarkPct)} r={4.5} fill="var(--brand)" />
            <circle cx={gx(generations)} cy={gy(currentLightPct)} r={4.5} fill="var(--good)" />

            <text x={294} y={20} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--ink)">
              Solid = Dark Moth % · Dashed = Pale Moth %
            </text>
            <text x={294} y={197} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink-2)">
              Generation Number
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 min-w-0">
          <Readout label={`Dark Moths (Gen ${generations})`} value={`${currentDarkPct.toFixed(1)}%`} tone="brand" />
          <Readout label={`Pale Moths (Gen ${generations})`} value={`${currentLightPct.toFixed(1)}%`} tone="good" />
          <Readout label="Selection Favours" value={favoured} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "dna-helix-builder",
    title: "DNA Double Helix & Chargaff Base-Pairing Builder",
    blurb: "Mutate individual bases on Strand 1 and watch complementary base pairing enforce Chargaff's rule (%A = %T, %C = %G) in real time.",
    Component: DnaHelixBuilder,
  },
  {
    id: "peppered-moth-selection",
    title: "Peppered Moth Natural Selection Simulator",
    blurb: "Control tree-bark pollution, initial dark-moth frequency, and generations to watch industrial melanism and Clean Air reversal unfold.",
    Component: PepperedMothSelectionSim,
  },
];
