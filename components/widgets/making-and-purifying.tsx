"use client";
import { useState } from "react";
import {
  Readout,
  Segmented,
  Slider,
  WidgetFrame,
  type WidgetDef,
} from "./kit";

// ============================================================================
// WIDGET 1: Interactive Paper Chromatography & Rf Explorer
// ============================================================================

type SolventId = "water" | "ethanol";
type SampleId = "mystery-x" | "pure-blue" | "food-y" | "insoluble";

interface DyeSpot {
  name: string;
  color: string;
  rfWater: number;
  rfEthanol: number;
}

const REF_DYES: Record<"red" | "blue" | "yellow", DyeSpot> = {
  red: { name: "Red (R)", color: "#dc2626", rfWater: 0.75, rfEthanol: 0.45 },
  blue: { name: "Blue (B)", color: "#2563eb", rfWater: 0.5, rfEthanol: 0.8 },
  yellow: { name: "Yellow (Y)", color: "#eab308", rfWater: 0.25, rfEthanol: 0.6 },
};

const SAMPLES: Record<
  SampleId,
  { label: string; dyes: DyeSpot[]; noteWater: string; noteEthanol: string }
> = {
  "mystery-x": {
    label: "Mystery Ink X",
    dyes: [REF_DYES.red, REF_DYES.yellow],
    noteWater:
      "Mystery Ink X splits into 2 spots matching Red (Rf = 0.75) and Yellow (Rf = 0.25), proving it is a mixture of R and Y.",
    noteEthanol:
      "In ethanol, every Rf value changes! Yet Mystery Ink X still lines up with Red (0.45) and Yellow (0.60), confirming the match.",
  },
  "pure-blue": {
    label: "Pure Blue",
    dyes: [REF_DYES.blue],
    noteWater:
      "Only 1 spot appears at Rf = 0.50 — consistent with a single pure dye in water.",
    noteEthanol:
      "Still only 1 spot in ethanol (at Rf = 0.80), giving much stronger evidence that this sample is pure Blue.",
  },
  "food-y": {
    label: "Green Blend",
    dyes: [REF_DYES.blue, REF_DYES.yellow],
    noteWater:
      "The green sample separates into Blue (0.50) and Yellow (0.25) — two dyes blended together.",
    noteEthanol:
      "In ethanol, Blue (0.80) and Yellow (0.60) both travel further because they are more soluble in ethanol.",
  },
  insoluble: {
    label: "Marker Z",
    dyes: [{ name: "Marker Z", color: "#7c3aed", rfWater: 0, rfEthanol: 0.7 }],
    noteWater:
      "Rf = 0.00! Marker Z is insoluble in water so it stays stuck on the pencil baseline. Switch the solvent to Ethanol!",
    noteEthanol:
      "Success! Marker Z dissolves in ethanol and climbs to Rf = 0.70 (a dye that does not match R, B or Y).",
  },
};

function ChromatographyLab() {
  const [solvent, setSolvent] = useState<SolventId>("water");
  const [sampleId, setSampleId] = useState<SampleId>("mystery-x");
  const [solventDist, setSolventDist] = useState<number>(8.0);

  const sample = SAMPLES[sampleId];
  const getRf = (d: DyeSpot) => (solvent === "water" ? d.rfWater : d.rfEthanol);

  // Paper geometry inside viewBox 0 0 420 265
  const baselineY = 216;
  const maxCm = 12;
  const pxPerCm = 14; // 12 cm -> 168 px (top at y = 48)
  const yFromCm = (cm: number) => baselineY - cm * pxPerCm;
  const frontY = yFromCm(solventDist);

  const lanes = [
    { x: 118, tag: "R", dyes: [REF_DYES.red] },
    { x: 186, tag: "B", dyes: [REF_DYES.blue] },
    { x: 254, tag: "Y", dyes: [REF_DYES.yellow] },
    { x: 336, tag: "Sample", dyes: sample.dyes },
  ];

  const primaryDye = sample.dyes[0];
  const primaryRf = getRf(primaryDye);
  const primaryDist = Number((primaryRf * solventDist).toFixed(2));

  return (
    <WidgetFrame
      title="Paper Chromatography & Rf Lab"
      tryThis={[
        "Slide the solvent front from 4 cm to 12 cm: watch the spots rise while every **Rf value stays fixed**!",
        "Select **Marker Z** in Water (Rf = 0), then switch the solvent to **Ethanol** to free it.",
        "Switch between **Water** and **Ethanol** for Mystery Ink X to see how changing the mobile phase shifts every Rf.",
      ]}
      caption={
        <span>
          <strong>Live observation:</strong>{" "}
          {solvent === "water" ? sample.noteWater : sample.noteEthanol}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<SolventId>
            label="Mobile phase solvent"
            value={solvent}
            onChange={setSolvent}
            options={[
              { value: "water", label: "Water" },
              { value: "ethanol", label: "Ethanol" },
            ]}
          />
          <Segmented<SampleId>
            label="Sample tested"
            value={sampleId}
            onChange={setSampleId}
            options={[
              { value: "mystery-x", label: "Mystery X" },
              { value: "pure-blue", label: "Pure Blue" },
              { value: "food-y", label: "Green Blend" },
              { value: "insoluble", label: "Marker Z" },
            ]}
          />
        </div>

        <Slider
          label="Solvent front distance from pencil baseline"
          value={solventDist}
          min={4}
          max={12}
          step={0.5}
          onChange={setSolventDist}
          format={(v) => `${v.toFixed(1)} cm`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 265"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive paper chromatogram showing reference dyes R, B, Y alongside the chosen sample"
          >
            <rect width="420" height="265" rx="10" fill="var(--surface)" />
            {/* Beaker outline */}
            <path
              d="M72 34 L72 246 Q72 254 80 254 L388 254 Q396 254 396 246 L396 34"
              fill="none"
              stroke="var(--ink-2)"
              strokeWidth="2"
            />
            {/* Solvent pool at bottom (below pencil baseline) */}
            <rect
              x="74"
              y="228"
              width="320"
              height="24"
              rx="4"
              fill={solvent === "water" ? "var(--info-soft)" : "var(--warn-soft)"}
            />
            <text
              x="388"
              y="244"
              textAnchor="end"
              fontSize="9.5"
              fontWeight="700"
              fill="var(--ink-2)"
            >
              {solvent === "water" ? "Water" : "Ethanol"} (below baseline)
            </text>

            {/* Chromatography paper */}
            <rect
              x="86"
              y="32"
              width="292"
              height="206"
              fill="var(--surface)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />

            {/* Ruler ticks on left */}
            <line
              x1="54"
              y1={baselineY}
              x2="54"
              y2={yFromCm(maxCm)}
              stroke="var(--ink-2)"
              strokeWidth="1.4"
            />
            {[0, 2, 4, 6, 8, 10, 12].map((cm) => {
              const y = yFromCm(cm);
              return (
                <g key={cm}>
                  <line
                    x1="48"
                    y1={y}
                    x2="58"
                    y2={y}
                    stroke="var(--ink-2)"
                    strokeWidth="1.2"
                  />
                  <text
                    x="44"
                    y={y + 3}
                    textAnchor="end"
                    fontSize="9.5"
                    fill="var(--ink-2)"
                  >
                    {cm} cm
                  </text>
                </g>
              );
            })}

            {/* Wet paper tint up to solvent front */}
            <rect
              x="87"
              y={frontY}
              width="290"
              height={baselineY - frontY}
              fill={solvent === "water" ? "var(--info-soft)" : "var(--warn-soft)"}
              opacity="0.32"
            />

            {/* Pencil baseline */}
            <line
              x1="86"
              y1={baselineY}
              x2="378"
              y2={baselineY}
              stroke="var(--ink-2)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text
              x="375"
              y={baselineY - 4}
              textAnchor="end"
              fontSize="8.5"
              fill="var(--ink-2)"
            >
              Pencil baseline (0 cm)
            </text>

            {/* Solvent front line */}
            <line
              x1="86"
              y1={frontY}
              x2="378"
              y2={frontY}
              stroke="var(--info)"
              strokeWidth="2"
              strokeDasharray="6 3"
            />
            <text
              x="92"
              y={frontY - 5}
              fontSize="9.5"
              fontWeight="700"
              fill="var(--info)"
            >
              Solvent front = {solventDist.toFixed(1)} cm
            </text>

            {/* Faint horizontal alignment guides from sample spots */}
            {sample.dyes.map((d) => {
              const dist = getRf(d) * solventDist;
              const y = yFromCm(dist);
              return (
                <line
                  key={`guide-${d.name}`}
                  x1="92"
                  y1={y}
                  x2="365"
                  y2={y}
                  stroke={d.color}
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.45"
                />
              );
            })}

            {/* Lanes and spots */}
            {lanes.map((lane) => (
              <g key={lane.tag}>
                <circle cx={lane.x} cy={baselineY} r="2.2" fill="var(--ink-2)" />
                <text
                  x={lane.x}
                  y={baselineY + 13}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--ink)"
                >
                  {lane.tag}
                </text>
                {lane.dyes.map((d) => {
                  const rf = getRf(d);
                  const cm = rf * solventDist;
                  const cy = yFromCm(cm);
                  return (
                    <g key={`${lane.tag}-${d.name}`}>
                      <circle
                        cx={lane.x}
                        cy={cy}
                        r="8"
                        fill={d.color}
                        stroke="var(--ink)"
                        strokeWidth="1.2"
                      />
                      {lane.tag === "Sample" ? (
                        <text
                          x={lane.x + 12}
                          y={cy + 3}
                          fontSize="9"
                          fontWeight="700"
                          fill="var(--ink)"
                        >
                          {cm.toFixed(1)} cm
                        </text>
                      ) : null}
                    </g>
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <Readout
            label="Spots separated"
            value={`${sample.dyes.length} (${sample.dyes.length === 1 ? "single spot" : "mixture"})`}
            tone={sample.dyes.length === 1 ? "good" : "brand"}
          />
          <Readout
            label={`Top spot (${primaryDye.name})`}
            value={`${primaryDist.toFixed(1)} cm / ${solventDist.toFixed(1)} cm`}
            tone="ink"
          />
          <Readout
            label="Calculated Rf"
            value={primaryRf.toFixed(2)}
            tone={primaryRf === 0 ? "bad" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Soluble Salt Maker & Gas Test Bench
// ============================================================================

type AcidId = "hcl" | "h2so4" | "hno3";
type SolidId = "cuo" | "cuco3" | "cu" | "zn" | "mgco3";
type GasTestId = "lit" | "glowing" | "limewater" | "litmus";

const ACID_INFO: Record<AcidId, { name: string; formula: string; saltEnd: string }> = {
  hcl: { name: "Hydrochloric acid", formula: "HCl", saltEnd: "chloride" },
  h2so4: { name: "Sulfuric acid", formula: "H₂SO₄", saltEnd: "sulfate" },
  hno3: { name: "Nitric acid", formula: "HNO₃", saltEnd: "nitrate" },
};

const SOLID_INFO: Record<
  SolidId,
  {
    name: string;
    metal: string;
    reacts: boolean;
    gas: "none" | "co2" | "h2";
    solutionColor: string;
    solidColor: string;
    otherProducts: string;
  }
> = {
  cuo: {
    name: "Copper(II) oxide",
    metal: "Copper(II)",
    reacts: true,
    gas: "none",
    solutionColor: "#38bdf8",
    solidColor: "#1f2937",
    otherProducts: "water",
  },
  cuco3: {
    name: "Copper(II) carbonate",
    metal: "Copper(II)",
    reacts: true,
    gas: "co2",
    solutionColor: "#38bdf8",
    solidColor: "#16a34a",
    otherProducts: "water + carbon dioxide",
  },
  cu: {
    name: "Copper metal",
    metal: "Copper",
    reacts: false,
    gas: "none",
    solutionColor: "#e2e8f0",
    solidColor: "#c2410c",
    otherProducts: "",
  },
  zn: {
    name: "Zinc metal",
    metal: "Zinc",
    reacts: true,
    gas: "h2",
    solutionColor: "#e2e8f0",
    solidColor: "#64748b",
    otherProducts: "hydrogen",
  },
  mgco3: {
    name: "Magnesium carbonate",
    metal: "Magnesium",
    reacts: true,
    gas: "co2",
    solutionColor: "#e2e8f0",
    solidColor: "#cbd5e1",
    otherProducts: "water + carbon dioxide",
  },
};

function SaltAndGasBench() {
  const [acidId, setAcidId] = useState<AcidId>("h2so4");
  const [solidId, setSolidId] = useState<SolidId>("cuco3");
  const [gasTest, setGasTest] = useState<GasTestId>("limewater");

  const acid = ACID_INFO[acidId];
  const solid = SOLID_INFO[solidId];
  const saltName = solid.reacts ? `${solid.metal} ${acid.saltEnd}` : "No reaction!";

  const gasLabel =
    solid.gas === "co2"
      ? "Carbon dioxide (CO₂)"
      : solid.gas === "h2"
        ? "Hydrogen (H₂)"
        : "None";

  const isPositive =
    (solid.gas === "h2" && gasTest === "lit") ||
    (solid.gas === "co2" && gasTest === "limewater");

  const testResultText = !solid.reacts
    ? "No reaction occurs — copper is below hydrogen in the reactivity series."
    : solid.gas === "none"
      ? "No gas is released during neutralisation with a metal oxide (only salt + water)."
      : solid.gas === "h2" && gasTest === "lit"
        ? "POSITIVE! Burns with a sharp squeaky pop (confirms H₂)."
        : solid.gas === "co2" && gasTest === "limewater"
          ? "POSITIVE! Clear limewater turns milky white (CaCO₃ precipitate confirms CO₂)."
          : solid.gas === "h2" && gasTest === "glowing"
            ? "No positive result — glowing splints test for O₂; hydrogen needs a LIT splint!"
            : solid.gas === "co2" && gasTest === "lit"
              ? "Flame goes out quietly — use LIMEWATER for a positive CO₂ test."
              : "No positive match for this gas — choose the matching chemical test!";

  const equation = solid.reacts
    ? `${acid.name} + ${solid.name.toLowerCase()} → ${saltName.toLowerCase()} + ${solid.otherProducts}`
    : `${acid.name} + copper metal → NO REACTION (choose copper(II) oxide or carbonate instead!)`;

  return (
    <WidgetFrame
      title="Soluble Salt Maker & Gas Test Bench"
      tryThis={[
        "Try reacting **Copper metal** with sulfuric acid — why does nothing happen? Swap to **Copper(II) oxide** or **Copper(II) carbonate**!",
        "Make **Zinc chloride** and test the fizzing gas with a **Lit splint** vs a **Glowing splint**.",
        "Produce **CO₂** from a carbonate and confirm it with **Limewater**.",
      ]}
      caption={
        <span>
          <strong>Word equation:</strong> {equation}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            1. Choose dilute acid
          </div>
          <Segmented<AcidId>
            label="Dilute acid"
            value={acidId}
            onChange={setAcidId}
            options={[
              { value: "hcl", label: "HCl (Hydrochloric)" },
              { value: "h2so4", label: "H₂SO₄ (Sulfuric)" },
              { value: "hno3", label: "HNO₃ (Nitric)" },
            ]}
          />

          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            2. Choose insoluble solid reactant (added in excess)
          </div>
          <Segmented<SolidId>
            label="Solid reactant"
            value={solidId}
            onChange={setSolidId}
            options={[
              { value: "cuo", label: "Copper(II) oxide" },
              { value: "cuco3", label: "Copper(II) carbonate" },
              { value: "cu", label: "Copper metal" },
              { value: "zn", label: "Zinc metal" },
              { value: "mgco3", label: "Magnesium carbonate" },
            ]}
          />

          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            3. Apply chemical gas test
          </div>
          <Segmented<GasTestId>
            label="Gas test"
            value={gasTest}
            onChange={setGasTest}
            options={[
              { value: "lit", label: "Lit splint" },
              { value: "glowing", label: "Glowing splint" },
              { value: "limewater", label: "Limewater" },
              { value: "litmus", label: "Damp blue litmus" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 200"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive laboratory bench showing acid-solid reaction flask connected to gas testing tube"
          >
            <rect width="420" height="200" rx="10" fill="var(--surface)" />

            {/* Left side: Reaction flask */}
            <text
              x="110"
              y="22"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--ink)"
            >
              Reaction Beaker
            </text>
            <path
              d="M68 58 L68 148 Q68 156 76 156 L144 156 Q152 156 152 148 L152 58"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="2.2"
            />
            {/* Liquid inside beaker */}
            <rect
              x="70"
              y="98"
              width="80"
              height="56"
              rx="4"
              fill={solid.solutionColor}
              opacity="0.55"
            />
            {/* Excess solid grains at bottom */}
            <circle cx="88" cy="148" r="5" fill={solid.solidColor} />
            <circle cx="104" cy="150" r="5" fill={solid.solidColor} />
            <circle cx="120" cy="148" r="5" fill={solid.solidColor} />
            <circle cx="134" cy="150" r="4.5" fill={solid.solidColor} />

            {/* Bubbles if gas produced */}
            {solid.gas !== "none" ? (
              <g>
                <circle cx="92" cy="128" r="3" fill="var(--surface)" stroke="var(--ink-2)" strokeWidth="1" />
                <circle cx="112" cy="116" r="3.5" fill="var(--surface)" stroke="var(--ink-2)" strokeWidth="1" />
                <circle cx="126" cy="132" r="2.8" fill="var(--surface)" stroke="var(--ink-2)" strokeWidth="1" />
                <circle cx="104" cy="104" r="3" fill="var(--surface)" stroke="var(--ink-2)" strokeWidth="1" />
              </g>
            ) : null}

            {/* Label beneath beaker */}
            <text
              x="110"
              y="175"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill={solid.reacts ? "var(--brand)" : "var(--bad)"}
            >
              {solid.reacts ? `${saltName} (aq)` : "No reaction!"}
            </text>
            <text
              x="110"
              y="190"
              textAnchor="middle"
              fontSize="9"
              fill="var(--ink-2)"
            >
              {solid.reacts ? "Excess solid → filter next" : "Cu is below H in reactivity"}
            </text>

            {/* Delivery arrow */}
            <line
              x1="164"
              y1="108"
              x2="240"
              y2="108"
              stroke={solid.gas !== "none" ? "var(--brand)" : "var(--line)"}
              strokeWidth="2.5"
              strokeDasharray={solid.gas !== "none" ? undefined : "4 4"}
            />
            <polygon
              points="238,103 248,108 238,113"
              fill={solid.gas !== "none" ? "var(--brand)" : "var(--line)"}
            />
            <text
              x="204"
              y="98"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="700"
              fill="var(--ink-2)"
            >
              {solid.gas === "co2" ? "CO₂ gas" : solid.gas === "h2" ? "H₂ gas" : "No gas"}
            </text>

            {/* Right side: Gas test tube */}
            <text
              x="315"
              y="22"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--ink)"
            >
              Gas Test Station
            </text>
            <path
              d="M294 58 L294 142 Q294 156 315 156 Q336 156 336 142 L336 58"
              fill="var(--surface-2)"
              stroke="var(--ink)"
              strokeWidth="2.2"
            />

            {/* Visual for chosen gas test */}
            {gasTest === "limewater" ? (
              <path
                d="M296 112 L334 112 L334 142 Q334 154 315 154 Q296 154 296 142 Z"
                fill={isPositive ? "#d1d5db" : "var(--info-soft)"}
              />
            ) : null}

            {gasTest === "lit" ? (
              <g>
                <line x1="315" y1="36" x2="315" y2="70" stroke="var(--warn)" strokeWidth="3" />
                <path d="M315 70 Q307 82 315 92 Q323 82 315 70 Z" fill="var(--bad)" />
                {isPositive ? (
                  <text x="315" y="122" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--bad)">
                    POP!
                  </text>
                ) : null}
              </g>
            ) : null}

            {gasTest === "glowing" ? (
              <g>
                <line x1="315" y1="38" x2="315" y2="92" stroke="var(--warn)" strokeWidth="3" />
                <circle cx="315" cy="94" r="4" fill="var(--bad)" />
              </g>
            ) : null}

            {gasTest === "litmus" ? (
              <rect
                x="309"
                y="48"
                width="12"
                height="48"
                fill="var(--info)"
                stroke="var(--ink)"
                strokeWidth="1"
              />
            ) : null}

            <text
              x="315"
              y="175"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill={isPositive ? "var(--good)" : "var(--ink-2)"}
            >
              {isPositive ? "Positive Test ✓" : "No Positive Match"}
            </text>
            <text
              x="315"
              y="190"
              textAnchor="middle"
              fontSize="9"
              fill="var(--ink-2)"
            >
              {gasTest === "limewater"
                ? isPositive
                  ? "Turns milky white!"
                  : "Stays clear"
                : gasTest === "lit"
                  ? isPositive
                    ? "Squeaky pop!"
                    : "No pop"
                  : gasTest === "glowing"
                    ? "Does not relight (not O₂)"
                    : "No bleach (not Cl₂)"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <Readout
            label="Salt formed"
            value={saltName}
            tone={solid.reacts ? "brand" : "bad"}
          />
          <Readout
            label="Gas released"
            value={gasLabel}
            tone="ink"
          />
          <Readout
            label="Gas test result"
            value={isPositive ? "Positive ✓" : "Negative"}
            tone={isPositive ? "good" : "bad"}
          />
        </div>

        <p className="text-sm text-ink-2">{testResultText}</p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "chromatography-rf-lab",
    title: "Paper Chromatography & Rf Lab",
    blurb:
      "Slide the solvent front up the paper, swap between water and ethanol, and watch Rf values stay constant while mixtures split into reference dyes.",
    Component: ChromatographyLab,
  },
  {
    id: "salt-and-gas-bench",
    title: "Soluble Salt Maker & Gas Test Bench",
    blurb:
      "Mix acids with insoluble oxides, carbonates, or metals to predict the salt formed, spot non-reactions, and run live chemical gas tests.",
    Component: SaltAndGasBench,
  },
];
