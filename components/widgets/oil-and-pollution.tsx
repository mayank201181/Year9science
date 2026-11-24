"use client";
import { useState } from "react";
import {
  Readout,
  Segmented,
  Slider,
  Stepper,
  WidgetFrame,
  type WidgetDef,
} from "./kit";

function sub(n: number): string {
  const digits = "₀₁₂₃₄₅₆₇₈₉";
  return String(n)
    .split("")
    .map((d) => digits[Number(d)] ?? d)
    .join("");
}

// ============================================================================
// WIDGET 1: Fractionating Column & Alkane Chain-Length Explorer
// ============================================================================

interface FractionBand {
  id: string;
  name: string;
  cMin: number;
  cMax: number;
  tempLabel: string;
  use: string;
  y: number;
  fill: string;
}

const FRACTION_BANDS: FractionBand[] = [
  {
    id: "refinery",
    name: "Refinery gases",
    cMin: 1,
    cMax: 4,
    tempLabel: "< 25 °C (gas)",
    use: "Cooking & domestic heating",
    y: 26,
    fill: "var(--info-soft)",
  },
  {
    id: "petrol",
    name: "Petrol",
    cMin: 5,
    cMax: 10,
    tempLabel: "40–110 °C",
    use: "Cars & motorbikes",
    y: 62,
    fill: "var(--brand-soft)",
  },
  {
    id: "kerosene",
    name: "Kerosene",
    cMin: 11,
    cMax: 15,
    tempLabel: "150–250 °C",
    use: "Aviation jet fuel",
    y: 98,
    fill: "var(--warn-soft)",
  },
  {
    id: "diesel",
    name: "Diesel oil",
    cMin: 16,
    cMax: 20,
    tempLabel: "250–300 °C",
    use: "Lorries, buses & trains",
    y: 134,
    fill: "var(--accent-soft)",
  },
  {
    id: "fuel-oil",
    name: "Heavy fuel oil",
    cMin: 21,
    cMax: 34,
    tempLabel: "300–350 °C",
    use: "Cargo ships & power plants",
    y: 170,
    fill: "var(--bad-soft)",
  },
  {
    id: "bitumen",
    name: "Bitumen",
    cMin: 35,
    cMax: 40,
    tempLabel: "> 350 °C (residue)",
    use: "Road surfacing & roofs",
    y: 206,
    fill: "var(--surface-2)",
  },
];

function approxBoilingPoint(n: number): number {
  // Smooth realistic normal-alkane b.p. curve from CH4 (-162 °C) to C40 (~525 °C)
  if (n === 1) return -162;
  if (n === 2) return -89;
  if (n === 3) return -42;
  if (n === 4) return 0;
  if (n === 5) return 36;
  if (n === 6) return 69;
  if (n === 7) return 98;
  if (n === 8) return 126;
  return Math.round(126 + (n - 8) * 12.2);
}

function FractionatingColumnExplorer() {
  const [n, setN] = useState<number>(8);

  const active =
    FRACTION_BANDS.find((b) => n >= b.cMin && n <= b.cMax) ?? FRACTION_BANDS[5];
  const bp = approxBoilingPoint(n);
  const formula = `C${n === 1 ? "" : sub(n)}H${sub(2 * n + 2)}`;

  // Normalised 0..100 visual bars
  const bpPct = Math.max(5, Math.min(100, Math.round(((bp + 170) / 700) * 100)));
  const viscPct = Math.max(6, Math.min(100, Math.round((n / 40) * 100)));
  const flamPct = Math.max(8, Math.min(100, Math.round(104 - (n / 40) * 92)));

  return (
    <WidgetFrame
      title="Fractionating Column & Chain-Length Explorer"
      tryThis={[
        "Slide from **n = 1 (methane)** all the way to **n = 40 (bitumen)**: watch which fraction tray lights up!",
        "Find the chain length where the alkane switches from **gas** at 25 °C to **liquid** (hint: check **n = 4** vs **n = 5**).",
        "Compare the **Viscosity** and **Flammability** bars for Petrol (n = 8) vs Heavy Fuel Oil (n = 28).",
      ]}
      caption={
        <span>
          <strong>Why it condenses here:</strong> {formula} has{" "}
          {n <= 4
            ? "very weak intermolecular forces, so its boiling point is below 25 °C and it exits the top as a gas."
            : n >= 35
              ? "extremely strong intermolecular forces between giant chains, so it stays a sticky liquid residue at the 350 °C base."
              : `boiling point ≈ ${bp} °C. Rising vapour cools until it hits the ${active.name.toLowerCase()} zone (${active.tempLabel}), where it condenses back into liquid.`}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <Slider
          label="Alkane carbon chain length (n in CₙH₂ₙ₊₂)"
          value={n}
          min={1}
          max={40}
          step={1}
          onChange={setN}
          format={(v) => `n = ${v} (${`C${v === 1 ? "" : sub(v)}H${sub(2 * v + 2)}`})`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 256"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive fractionating column highlighting the active fraction and live property meters"
          >
            <rect width="420" height="256" rx="10" fill="var(--surface)" />

            {/* Column outline */}
            <text
              x="104"
              y="18"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill="var(--ink)"
            >
              Fractionating Tower
            </text>
            <rect
              x="44"
              y="24"
              width="120"
              height="218"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--ink)"
              strokeWidth="1.8"
            />

            {/* 6 fraction bands */}
            {FRACTION_BANDS.map((band) => {
              const isAct = band.id === active.id;
              return (
                <g key={band.id}>
                  <rect
                    x="46"
                    y={band.y}
                    width="116"
                    height="33"
                    rx="4"
                    fill={isAct ? "var(--brand)" : band.fill}
                    stroke={isAct ? "var(--ink)" : "var(--line)"}
                    strokeWidth={isAct ? 2 : 1}
                  />
                  <text
                    x="104"
                    y={band.y + 15}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="700"
                    fill={isAct ? "#ffffff" : "var(--ink)"}
                  >
                    {band.name}
                  </text>
                  <text
                    x="104"
                    y={band.y + 27}
                    textAnchor="middle"
                    fontSize="8"
                    fill={isAct ? "#ffffff" : "var(--ink-2)"}
                  >
                    {band.tempLabel}
                  </text>
                  {isAct ? (
                    <g>
                      <line
                        x1="164"
                        y1={band.y + 16}
                        x2="196"
                        y2={band.y + 16}
                        stroke="var(--brand)"
                        strokeWidth="3"
                      />
                      <polygon
                        points={`194,${band.y + 11} 204,${band.y + 16} 194,${band.y + 21}`}
                        fill="var(--brand)"
                      />
                    </g>
                  ) : null}
                </g>
              );
            })}

            {/* Temperature axis on far left */}
            <text x="36" y="42" textAnchor="end" fontSize="8.5" fontWeight="700" fill="var(--info)">
              COOL
            </text>
            <text x="36" y="53" textAnchor="end" fontSize="8" fill="var(--ink-2)">
              25 °C
            </text>
            <text x="36" y="222" textAnchor="end" fontSize="8.5" fontWeight="700" fill="var(--bad)">
              HOT
            </text>
            <text x="36" y="233" textAnchor="end" fontSize="8" fill="var(--ink-2)">
              350 °C
            </text>

            {/* Right panel: Property meters */}
            <rect
              x="212"
              y="24"
              width="196"
              height="218"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--line)"
              strokeWidth="1.4"
            />
            <text
              x="310"
              y="44"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="var(--ink)"
            >
              {formula} Properties
            </text>

            {/* Meter 1: Boiling point */}
            <text x="224" y="72" fontSize="9.5" fontWeight="700" fill="var(--ink)">
              Boiling Point ({bp} °C)
            </text>
            <rect x="224" y="79" width="172" height="14" rx="7" fill="var(--surface)" stroke="var(--line)" />
            <rect x="224" y="79" width={Math.round((bpPct / 100) * 172)} height="14" rx="7" fill="var(--bad)" />

            {/* Meter 2: Viscosity */}
            <text x="224" y="118" fontSize="9.5" fontWeight="700" fill="var(--ink)">
              Viscosity ({n <= 4 ? "Gas" : n <= 12 ? "Runny" : n <= 24 ? "Oily" : "Thick tar"})
            </text>
            <rect x="224" y="125" width="172" height="14" rx="7" fill="var(--surface)" stroke="var(--line)" />
            <rect x="224" y="125" width={Math.round((viscPct / 100) * 172)} height="14" rx="7" fill="var(--info)" />

            {/* Meter 3: Flammability */}
            <text x="224" y="164" fontSize="9.5" fontWeight="700" fill="var(--ink)">
              Flammability ({n <= 10 ? "High" : n <= 22 ? "Moderate" : "Very low"})
            </text>
            <rect x="224" y="171" width="172" height="14" rx="7" fill="var(--surface)" stroke="var(--line)" />
            <rect x="224" y="171" width={Math.round((flamPct / 100) * 172)} height="14" rx="7" fill="var(--brand)" />

            {/* Everyday use callout */}
            <rect x="224" y="198" width="172" height="34" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.2" />
            <text x="310" y="213" textAnchor="middle" fontSize="8.8" fontWeight="700" fill="var(--brand)">
              Main Everyday Use
            </text>
            <text x="310" y="226" textAnchor="middle" fontSize="9" fill="var(--ink)">
              {active.use}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <Readout label="Alkane Formula" value={formula} tone="brand" />
          <Readout label="Fraction Collected" value={active.name} tone="ink" />
          <Readout label="Approx. Boiling Point" value={`${bp} °C`} tone={bp < 25 ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Cracking Splitter & Bromine Water Test Lab
// ============================================================================

type SampleChoice = "parent" | "alkane" | "alkene";

function CrackingAndBromineLab() {
  const [parentC, setParentC] = useState<number>(12);
  const [rawCut, setRawCut] = useState<number>(8);
  const [tested, setTested] = useState<SampleChoice>("alkene");

  // Keep alkane fragment B between 3 and parentC - 2 so alkene always has >= 2 carbons
  const alkaneC = Math.max(3, Math.min(rawCut, parentC - 2));
  const alkeneC = parentC - alkaneC;

  const parentH = 2 * parentC + 2;
  const alkaneH = 2 * alkaneC + 2;
  const alkeneH = 2 * alkeneC;

  const parentFormula = `C${sub(parentC)}H${sub(parentH)}`;
  const alkaneFormula = `C${sub(alkaneC)}H${sub(alkaneH)}`;
  const alkeneFormula = `C${sub(alkeneC)}H${sub(alkeneH)}`;

  const isDecolourised = tested === "alkene";

  // Draw carbon chain dots cleanly inside width 390
  const gapX = Math.min(22, Math.floor(330 / parentC));
  const startX = Math.round(210 - ((parentC - 1) * gapX) / 2);

  return (
    <WidgetFrame
      title="Cracking Splitter & Bromine Water Test Lab"
      tryThis={[
        "Move the **cracking cut slider** to split **C₁₂H₂₆** at different points: verify that total C and H atoms ALWAYS stay conserved!",
        "Notice why the alkene fragment ALWAYS needs at least **2 carbon atoms** (there is no C₁ alkene).",
        "Shake each product with **Orange Bromine Water** — only the unsaturated **alkene** turns it **colourless**!",
      ]}
      caption={
        <span>
          <strong>Atom check:</strong> Carbons: {parentC} = {alkaneC} + {alkeneC} ✓ &nbsp;|&nbsp; Hydrogens: {parentH} = {alkaneH} + {alkeneH} ✓.{" "}
          {isDecolourised
            ? `${alkeneFormula} contains a reactive C=C double bond, so it turns orange bromine water colourless!`
            : `${tested === "parent" ? parentFormula : alkaneFormula} is a saturated alkane (single C–C bonds only), so orange bromine water stays orange.`}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <Stepper
          label="Parent long-chain alkane length (carbons)"
          value={parentC}
          min={8}
          max={16}
          onChange={setParentC}
          format={(v) => `C${sub(v)}H${sub(2 * v + 2)}`}
        />

        <Slider
          label="Cracking cut point (shorter alkane carbons)"
          value={alkaneC}
          min={3}
          max={parentC - 2}
          step={1}
          onChange={setRawCut}
          format={(v) => `${v} C alkane + ${parentC - v} C alkene`}
        />

        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Shake which hydrocarbon with orange bromine water?
          </div>
          <Segmented<SampleChoice>
            label="Hydrocarbon tested in bromine water"
            value={tested}
            onChange={setTested}
            options={[
              { value: "parent", label: `Parent (${parentFormula})` },
              { value: "alkane", label: `Alkane (${alkaneFormula})` },
              { value: "alkene", label: `Alkene (${alkeneFormula})` },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 218"
            className="w-full h-auto"
            role="img"
            aria-label="Molecular cracking diagram splitting a carbon chain into a shorter alkane and an unsaturated alkene, paired with a bromine water test tube"
          >
            <rect width="420" height="218" rx="10" fill="var(--surface)" />

            <text x="210" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">
              Cracking: {parentFormula} → {alkaneFormula} + {alkeneFormula}
            </text>

            {/* Carbon chain visualisation */}
            {Array.from({ length: parentC }, (_, i) => {
              const cx = startX + i * gapX;
              const isAlkanePart = i < alkaneC;
              const nextIsSame = i + 1 < parentC && (i + 1 < alkaneC) === isAlkanePart;
              const isDoubleBond = !isAlkanePart && i === alkaneC;
              return (
                <g key={i}>
                  {nextIsSame ? (
                    isDoubleBond ? (
                      <g>
                        <line x1={cx} y1="53" x2={cx + gapX} y2="53" stroke="var(--info)" strokeWidth="2.4" />
                        <line x1={cx} y1="61" x2={cx + gapX} y2="61" stroke="var(--info)" strokeWidth="2.4" />
                      </g>
                    ) : (
                      <line
                        x1={cx}
                        y1="57"
                        x2={cx + gapX}
                        y2="57"
                        stroke={isAlkanePart ? "var(--brand)" : "var(--info)"}
                        strokeWidth="2.4"
                      />
                    )
                  ) : null}
                  <circle
                    cx={cx}
                    cy="57"
                    r="8"
                    fill={isAlkanePart ? "var(--brand)" : "var(--info)"}
                  />
                  <text
                    x={cx}
                    y="60"
                    textAnchor="middle"
                    fontSize="8.5"
                    fontWeight="700"
                    fill="#ffffff"
                  >
                    C
                  </text>
                </g>
              );
            })}

            {/* Dashed cut line between alkaneC-1 and alkaneC */}
            <line
              x1={startX + (alkaneC - 0.5) * gapX}
              y1="34"
              x2={startX + (alkaneC - 0.5) * gapX}
              y2="82"
              stroke="var(--bad)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <text
              x={startX + (alkaneC - 0.5) * gapX}
              y="95"
              textAnchor="middle"
              fontSize="8.8"
              fontWeight="700"
              fill="var(--bad)"
            >
              Heat + Catalyst Cut
            </text>

            {/* Fragment captions */}
            <text x="108" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">
              Shorter Alkane: {alkaneFormula} (single C–C)
            </text>
            <text x="318" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--info)">
              Alkene: {alkeneFormula} (has C=C!)
            </text>

            {/* Bottom Bromine Water Test Box */}
            <rect
              x="22"
              y="128"
              width="376"
              height="78"
              rx="10"
              fill="var(--surface-2)"
              stroke={isDecolourised ? "var(--good)" : "var(--accent)"}
              strokeWidth="1.6"
            />
            {/* Test tube */}
            <path
              d="M64 138 L64 186 Q64 196 78 196 Q92 196 92 186 L92 138"
              fill="var(--surface)"
              stroke="var(--ink)"
              strokeWidth="1.8"
            />
            <path
              d="M66 160 L90 160 L90 186 Q90 194 78 194 Q66 194 66 186 Z"
              fill={isDecolourised ? "var(--surface-2)" : "#f59e0b"}
            />

            <text
              x="246"
              y="153"
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="800"
              fill={isDecolourised ? "var(--good)" : "var(--bad)"}
            >
              {isDecolourised
                ? "Bromine Water Turns COLOURLESS!"
                : "Bromine Water STAYS ORANGE"}
            </text>
            <text x="246" y="172" textAnchor="middle" fontSize="9.5" fill="var(--ink)">
              Testing: {tested === "parent" ? `${parentFormula} (parent alkane)` : tested === "alkane" ? `${alkaneFormula} (shorter alkane)` : `${alkeneFormula} (alkene product)`}
            </text>
            <text x="246" y="189" textAnchor="middle" fontSize="9" fill="var(--ink-2)">
              {isDecolourised
                ? "Unsaturated C=C bond reacts with bromine (decolourised)"
                : "Saturated single C–C bonds cannot react with bromine"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <Readout label="Shorter Alkane" value={alkaneFormula} tone="brand" />
          <Readout label="Alkene Product" value={alkeneFormula} tone="ink" />
          <Readout
            label="Bromine Water"
            value={isDecolourised ? "Colourless ✓" : "Stays Orange"}
            tone={isDecolourised ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "fractionating-column-explorer",
    title: "Fractionating Column & Chain-Length Explorer",
    blurb:
      "Adjust alkane carbon chain length from C₁ to C₄₀ to see where it condenses inside a fractionating column and watch boiling point, viscosity, and flammability shift.",
    Component: FractionatingColumnExplorer,
  },
  {
    id: "cracking-and-bromine-lab",
    title: "Cracking Splitter & Bromine Water Test Lab",
    blurb:
      "Crack long-chain alkanes at any bond to verify C and H atom conservation, form a C=C alkene, and test each product with orange bromine water.",
    Component: CrackingAndBromineLab,
  },
];
