"use client";

import { useState } from "react";
import { makePlane, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type CircuitMode = "series" | "parallel";

function CircuitExplorer() {
  const [mode, setMode] = useState<CircuitMode>("series");
  const [voltage, setVoltage] = useState(12);
  const [r1, setR1] = useState(4);
  const [r2, setR2] = useState(8);

  const isSeries = mode === "series";
  const rTotal = isSeries ? r1 + r2 : (r1 * r2) / (r1 + r2);
  const iTotal = voltage / rTotal;
  const i1 = isSeries ? iTotal : voltage / r1;
  const i2 = isSeries ? iTotal : voltage / r2;
  const v1 = isSeries ? iTotal * r1 : voltage;
  const v2 = isSeries ? iTotal * r2 : voltage;
  const power = voltage * iTotal;

  const wireStroke = Math.min(4.5, Math.max(1.8, 1.5 + iTotal * 0.35));

  return (
    <WidgetFrame
      title="Series & Parallel Circuit Lab"
      tryThis={[
        "Set R₁ = 6 Ω and R₂ = 6 Ω in Parallel — check how total resistance compares to one 6 Ω resistor!",
        "Switch between Series and Parallel at 12 V and watch what happens to total current and total power.",
        "In Series, make R₂ twice as large as R₁ and verify that V₂ is always twice V₁.",
      ]}
      caption={
        isSeries ? (
          <span>
            In <strong>series</strong>, charge flows around a single loop so current is identical everywhere (
            <strong>{iTotal.toFixed(2)} A</strong>). Resistances add to{" "}
            <strong>{rTotal.toFixed(1)} Ω</strong>, and the {voltage} V supply splits in proportion to resistance:{" "}
            <strong>{v1.toFixed(1)} V</strong> across R₁ + <strong>{v2.toFixed(1)} V</strong> across R₂ ={" "}
            <strong>{(v1 + v2).toFixed(1)} V</strong>.
          </span>
        ) : (
          <span>
            In <strong>parallel</strong>, each branch connects straight across the full{" "}
            <strong>{voltage} V</strong> supply. Branch 1 draws <strong>{i1.toFixed(2)} A</strong> and branch 2 draws{" "}
            <strong>{i2.toFixed(2)} A</strong>, so total current is <strong>{iTotal.toFixed(2)} A</strong>. Combined
            resistance is <strong>{rTotal.toFixed(2)} Ω</strong> — smaller than BOTH {r1} Ω and {r2} Ω!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Circuit layout"
            value={mode}
            onChange={setMode}
            options={[
              { value: "series", label: "Series Loop" },
              { value: "parallel", label: "Parallel Branches" },
            ]}
          />
          <span className="text-xs font-bold text-ink-2">Wire thickness scales with current</span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider label="Supply PD (V)" value={voltage} min={3} max={24} step={1} onChange={setVoltage} format={(v) => `${v} V`} />
          <Slider label="Resistor R₁" value={r1} min={2} max={20} step={1} onChange={setR1} format={(v) => `${v} Ω`} />
          <Slider label="Resistor R₂" value={r2} min={2} max={20} step={1} onChange={setR2} format={(v) => `${v} Ω`} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 210"
            className="mx-auto block h-auto w-full max-w-[440px]"
            role="img"
            aria-label={isSeries ? "Interactive series circuit diagram" : "Interactive parallel circuit diagram"}
          >
            <rect width="420" height="210" rx="10" fill="var(--surface)" />
            {isSeries ? (
              <g>
                {/* Top supply + loop */}
                <polyline points="56,154 56,48 196,48" fill="none" stroke="var(--brand)" strokeWidth={wireStroke} />
                <line x1="196" y1="34" x2="196" y2="62" stroke="var(--ink)" strokeWidth={2.5} />
                <line x1="208" y1="41" x2="208" y2="55" stroke="var(--ink)" strokeWidth={4.5} />
                <polyline points="208,48 364,48 364,154 320,154" fill="none" stroke="var(--brand)" strokeWidth={wireStroke} />
                <line x1="242" y1="154" x2="178" y2="154" stroke="var(--brand)" strokeWidth={wireStroke} />
                <line x1="100" y1="154" x2="56" y2="154" stroke="var(--brand)" strokeWidth={wireStroke} />
                {/* Battery label */}
                <text x="202" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--brand)">
                  {voltage} V Supply
                </text>
                {/* Total Ammeter */}
                <circle cx="56" cy="100" r="18" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
                <text x="56" y="104" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">
                  {iTotal.toFixed(1)}A
                </text>
                {/* Resistor 1 */}
                <rect x="100" y="140" width="78" height="28" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
                <text x="139" y="158" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink)">
                  R₁ = {r1} Ω
                </text>
                <text x="139" y="186" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--good)">
                  V₁ = {v1.toFixed(1)} V
                </text>
                {/* Resistor 2 */}
                <rect x="242" y="140" width="78" height="28" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
                <text x="281" y="158" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink)">
                  R₂ = {r2} Ω
                </text>
                <text x="281" y="186" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--good)">
                  V₂ = {v2.toFixed(1)} V
                </text>
              </g>
            ) : (
              <g>
                {/* Outer supply rails */}
                <polyline points="56,174 56,42 196,42" fill="none" stroke="var(--brand)" strokeWidth={wireStroke} />
                <line x1="196" y1="28" x2="196" y2="56" stroke="var(--ink)" strokeWidth={2.5} />
                <line x1="208" y1="35" x2="208" y2="49" stroke="var(--ink)" strokeWidth={4.5} />
                <polyline points="208,42 364,42 364,174" fill="none" stroke="var(--brand)" strokeWidth={wireStroke} />
                {/* Battery label */}
                <text x="202" y="21" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--brand)">
                  {voltage} V Supply
                </text>
                {/* Total Ammeter */}
                <circle cx="56" cy="76" r="18" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
                <text x="56" y="80" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--brand)">
                  {iTotal.toFixed(1)}A
                </text>
                {/* Branch 1 */}
                <line x1="56" y1="116" x2="170" y2="116" stroke="var(--good)" strokeWidth={Math.min(4, Math.max(1.5, 1.3 + i1 * 0.4))} />
                <line x1="250" y1="116" x2="364" y2="116" stroke="var(--good)" strokeWidth={Math.min(4, Math.max(1.5, 1.3 + i1 * 0.4))} />
                <rect x="170" y="102" width="80" height="28" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
                <text x="210" y="120" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink)">
                  R₁ = {r1} Ω
                </text>
                <text x="308" y="108" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--good)">
                  I₁ = {i1.toFixed(2)} A
                </text>
                <text x="112" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
                  {voltage} V
                </text>
                {/* Branch 2 */}
                <line x1="56" y1="174" x2="170" y2="174" stroke="var(--bad)" strokeWidth={Math.min(4, Math.max(1.5, 1.3 + i2 * 0.4))} />
                <line x1="250" y1="174" x2="364" y2="174" stroke="var(--bad)" strokeWidth={Math.min(4, Math.max(1.5, 1.3 + i2 * 0.4))} />
                <rect x="170" y="160" width="80" height="28" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
                <text x="210" y="178" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink)">
                  R₂ = {r2} Ω
                </text>
                <text x="308" y="166" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--bad)">
                  I₂ = {i2.toFixed(2)} A
                </text>
                <text x="112" y="166" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
                  {voltage} V
                </text>
                {/* Junction dots */}
                <circle cx="56" cy="116" r="3.5" fill="var(--ink)" />
                <circle cx="364" cy="116" r="3.5" fill="var(--ink)" />
              </g>
            )}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Total R" value={`${rTotal.toFixed(2)} Ω`} tone="ink" />
          <Readout label="Total Current" value={`${iTotal.toFixed(2)} A`} tone="brand" />
          <Readout
            label={isSeries ? "PD Split (V₁ / V₂)" : "Branches (I₁ / I₂)"}
            value={isSeries ? `${v1.toFixed(1)} / ${v2.toFixed(1)} V` : `${i1.toFixed(1)} / ${i2.toFixed(1)} A`}
            tone="good"
          />
          <Readout label="Total Power" value={`${power.toFixed(1)} W`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

type ComponentKind = "ohmic" | "lamp" | "diode";

function currentFor(kind: ComponentKind, v: number, ohmicR: number): number {
  if (kind === "ohmic") return v / ohmicR;
  if (kind === "lamp") return (v * 1.9) / (2.5 + Math.abs(v));
  // Semiconductor diode: essentially zero below +0.7 V, steep conduction above
  if (v <= 0.7) return 0;
  return 0.095 * Math.pow(v - 0.7, 2.05);
}

function IVCharacteristicExplorer() {
  const [kind, setKind] = useState<ComponentKind>("ohmic");
  const [vVal, setVVal] = useState(3);
  const [ohmicR, setOhmicR] = useState(4);

  const plane = makePlane({ width: 420, height: 250, xMin: -6, xMax: 6, yMin: -3, yMax: 3, pad: 28 });

  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = -6 + (12 * i) / 120;
    const y = currentFor(kind, x, ohmicR);
    if (y >= -3 && y <= 3) {
      pts.push(`${plane.px(x).toFixed(1)},${plane.py(y).toFixed(1)}`);
    }
  }

  const iVal = currentFor(kind, vVal, ohmicR);
  const clampedI = Math.max(-3, Math.min(3, iVal));
  const power = Math.abs(vVal * iVal);

  let rLabel: string;
  if (kind === "ohmic") {
    rLabel = `${ohmicR.toFixed(1)} Ω`;
  } else if (kind === "diode" && vVal <= 0.7) {
    rLabel = "Very high (∞)";
  } else if (Math.abs(iVal) < 1e-4) {
    rLabel = "—";
  } else {
    rLabel = `${Math.abs(vVal / iVal).toFixed(2)} Ω`;
  }

  return (
    <WidgetFrame
      title="I–V Characteristic Curve & Resistance Explorer"
      tryThis={[
        "Choose Fixed Resistor and slide R from 2 Ω to 12 Ω — notice that a STEEPER straight line means LOWER resistance!",
        "Switch to Filament Lamp and slide V from 1 V up to 6 V: watch instantaneous resistance R = V ÷ I climb as the filament heats up.",
        "Switch to Diode and compare V = −4 V (reverse bias) with V = +4 V (forward bias).",
      ]}
      caption={
        kind === "ohmic" ? (
          <span>
            At constant temperature, an <strong>ohmic resistor</strong> produces a straight line through the origin
            with gradient 1/R = {(1 / ohmicR).toFixed(2)} A/V. No matter what voltage you pick,{" "}
            <strong>R = V ÷ I stays fixed at {ohmicR} Ω</strong>.
          </span>
        ) : kind === "lamp" ? (
          <span>
            A <strong>filament lamp</strong> is non-ohmic: raising |V| heats the tungsten wire so metal ions vibrate
            faster, causing more collisions with electrons. The curve flattens and{" "}
            <strong>resistance rises</strong> (currently <strong>{rLabel}</strong> at {vVal.toFixed(1)} V).
          </span>
        ) : (
          <span>
            A <strong>diode</strong> acts like a one-way valve: for negative voltages (reverse bias) resistance is
            immense so current stays at <strong>0 A</strong>. Above +0.7 V (forward bias), resistance plummets and
            current surges steeply (<strong>{iVal.toFixed(2)} A</strong> at {vVal.toFixed(1)} V).
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Component type"
          value={kind}
          onChange={setKind}
          options={[
            { value: "ohmic", label: "Fixed Resistor" },
            { value: "lamp", label: "Filament Lamp" },
            { value: "diode", label: "Diode" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Applied PD (V)" value={vVal} min={-6} max={6} step={0.5} onChange={setVVal} format={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)} V`} />
          {kind === "ohmic" ? (
            <Slider label="Fixed Resistance (R)" value={ohmicR} min={2} max={12} step={1} onChange={setOhmicR} format={(v) => `${v} Ω`} />
          ) : (
            <div className="flex items-center rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs font-semibold text-ink-2">
              {kind === "lamp"
                ? "Non-ohmic: resistance rises automatically with temperature as |V| increases."
                : "Non-ohmic: conducts only in the forward direction above ~0.7 V."}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 420 250"
            className="mx-auto block h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Interactive current against potential difference characteristic graph"
          >
            <rect width="420" height="250" rx="10" fill="var(--surface)" />
            <PlaneGrid plane={plane} step={1} labels={true} />
            {/* Axis titles */}
            <text x={plane.px(0) + 8} y={20} fontSize="11" fontWeight="800" fill="var(--ink)">
              I (A)
            </text>
            <text x={392} y={plane.py(0) - 8} fontSize="11" fontWeight="800" textAnchor="end" fill="var(--ink)">
              V (V)
            </text>
            {/* Characteristic curve */}
            <polyline fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={pts.join(" ")} />
            {/* Dashed projections for current operating point */}
            <line
              x1={plane.px(vVal)}
              y1={plane.py(0)}
              x2={plane.px(vVal)}
              y2={plane.py(clampedI)}
              stroke="var(--bad)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1={plane.px(0)}
              y1={plane.py(clampedI)}
              x2={plane.px(vVal)}
              y2={plane.py(clampedI)}
              stroke="var(--bad)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* Highlighted operating point */}
            <circle cx={plane.px(vVal)} cy={plane.py(clampedI)} r="6" fill="var(--bad)" stroke="var(--surface)" strokeWidth="2" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="PD (V)" value={`${vVal > 0 ? "+" : ""}${vVal.toFixed(1)} V`} tone="ink" />
          <Readout label="Current (I)" value={`${iVal.toFixed(2)} A`} tone="brand" />
          <Readout label="R = V ÷ I" value={rLabel} tone="good" />
          <Readout label="Power (P)" value={`${power.toFixed(2)} W`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "series-parallel-circuit-lab",
    title: "Series & Parallel Circuit Lab",
    blurb: "Compare series loops and parallel branches live as you tune supply voltage and resistor values.",
    Component: CircuitExplorer,
  },
  {
    id: "iv-characteristic-explorer",
    title: "I–V Characteristic Curve & Resistance Explorer",
    blurb: "Sweep potential difference from −6 V to +6 V on a resistor, filament lamp, and diode to see Ohm’s Law in action.",
    Component: IVCharacteristicExplorer,
  },
];
