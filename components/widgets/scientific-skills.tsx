"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type ErrorPreset = "ideal" | "systematic" | "random" | "both";

// Pure deterministic unit-circle scatter vectors so render is 100% pure (no Math.random).
const SCATTER_DIRS: ReadonlyArray<{ dx: number; dy: number }> = [
  { dx: 0.72, dy: -0.45 },
  { dx: -0.68, dy: 0.52 },
  { dx: 0.25, dy: 0.84 },
  { dx: -0.82, dy: -0.31 },
  { dx: 0.54, dy: 0.62 },
  { dx: -0.34, dy: -0.78 },
  { dx: 0.88, dy: 0.14 },
  { dx: -0.51, dy: 0.74 },
  { dx: 0.12, dy: -0.89 },
  { dx: -0.76, dy: -0.49 },
  { dx: 0.64, dy: -0.66 },
  { dx: -0.22, dy: 0.68 },
];

function BullseyeErrorLab() {
  const [zeroError, setZeroError] = useState<number>(2.5);
  const [randomSpread, setRandomSpread] = useState<number>(0.6);
  const [repeats, setRepeats] = useState<number>(6);
  const [preset, setPreset] = useState<ErrorPreset>("systematic");

  const applyPreset = (p: ErrorPreset) => {
    setPreset(p);
    if (p === "ideal") {
      setZeroError(0);
      setRandomSpread(0.4);
    } else if (p === "systematic") {
      setZeroError(2.8);
      setRandomSpread(0.5);
    } else if (p === "random") {
      setZeroError(0);
      setRandomSpread(3.2);
    } else {
      setZeroError(2.6);
      setRandomSpread(2.8);
    }
  };

  const cx = 180;
  const cy = 122;
  const scale = 20; // pixels per unit

  const shots = SCATTER_DIRS.slice(0, repeats).map((dir, i) => {
    const ux = zeroError + dir.dx * randomSpread;
    const uy = -zeroError * 0.45 + dir.dy * randomSpread;
    return {
      id: i,
      ux,
      uy,
      x: cx + ux * scale,
      y: cy + uy * scale,
    };
  });

  const meanUx = shots.reduce((s, p) => s + p.ux, 0) / shots.length;
  const meanUy = shots.reduce((s, p) => s + p.uy, 0) / shots.length;
  const meanError = Math.hypot(meanUx, meanUy);
  const meanRadius =
    shots.reduce((s, p) => s + Math.hypot(p.ux - meanUx, p.uy - meanUy), 0) / shots.length;

  const isAccurate = meanError <= 0.85;
  const isPrecise = meanRadius <= 1.05;

  const diagnosis =
    isAccurate && isPrecise
      ? "Accurate & Precise"
      : !isAccurate && isPrecise
        ? "Systematic (Zero) Error"
        : isAccurate && !isPrecise
          ? "Random Error"
          : "Both Errors Present";

  const diagnosisTone: "good" | "brand" | "bad" =
    isAccurate && isPrecise ? "good" : isAccurate || isPrecise ? "brand" : "bad";

  return (
    <WidgetFrame
      title="Accuracy, Precision & Error Simulator"
      tryThis={[
        "Select **Zero Error** and increase **Repeats** from 3 to 12 — watch whether the sample mean crosshair moves closer to the bullseye.",
        "Select **Random Error** and raise **Repeats** to 12 — notice how averaging pulls the mean crosshair right onto the centre!",
      ]}
      caption={
        isAccurate && isPrecise ? (
          <span>
            <strong>High accuracy and high precision:</strong> shots sit tightly clustered right on the true value.
          </span>
        ) : !isAccurate && isPrecise ? (
          <span>
            <strong>Systematic (zero) error:</strong> the cluster is tight (high precision), but every reading is shifted in one direction. Increasing repeats does <strong>not</strong> pull the mean to the centre — you must zero or recalibrate the instrument.
          </span>
        ) : isAccurate && !isPrecise ? (
          <span>
            <strong>Random error:</strong> individual shots scatter widely (low precision), yet positive and negative errors balance out so the <strong>mean crosshair</strong> stays close to the bullseye. Taking more repeats improves reliability.
          </span>
        ) : (
          <span>
            <strong>Both systematic and random error:</strong> measurements are both widely scattered and shifted off-centre. Zero the apparatus first, then reduce random noise and take repeat trials.
          </span>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<ErrorPreset>
            label="Error scenario preset"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "ideal", label: "Ideal" },
              { value: "systematic", label: "Zero Error" },
              { value: "random", label: "Random Error" },
              { value: "both", label: "Both" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 items-center">
          <div className="rounded-xl border border-line bg-surface-2 p-2 min-w-0">
            <svg
              viewBox="0 0 360 245"
              className="w-full h-auto max-w-full"
              role="img"
              aria-label="Interactive bullseye target showing repeat measurements, sample mean crosshair, and true value centre"
            >
              <circle cx={cx} cy={cy} r={100} fill="var(--surface)" stroke="var(--line)" strokeWidth={1.5} />
              <circle cx={cx} cy={cy} r={70} fill="var(--surface-2)" stroke="var(--line)" strokeWidth={1.2} />
              <circle cx={cx} cy={cy} r={40} fill="var(--surface)" stroke="var(--line)" strokeWidth={1.2} />
              <circle cx={cx} cy={cy} r={14} fill="var(--brand-soft)" stroke="var(--good)" strokeWidth={1.5} />
              <line x1={cx - 106} y1={cy} x2={cx + 106} y2={cy} stroke="var(--line)" strokeWidth={1} strokeDasharray="3 3" />
              <line x1={cx} y1={cy - 106} x2={cx} y2={cy + 106} stroke="var(--line)" strokeWidth={1} strokeDasharray="3 3" />

              <circle
                cx={cx + meanUx * scale}
                cy={cy + meanUy * scale}
                r={Math.max(6, meanRadius * scale)}
                fill="none"
                stroke="var(--brand)"
                strokeWidth={1.4}
                strokeDasharray="4 3"
                opacity={0.75}
              />

              {shots.map((s) => (
                <circle
                  key={s.id}
                  cx={Math.max(16, Math.min(344, s.x))}
                  cy={Math.max(16, Math.min(229, s.y))}
                  r={4.5}
                  fill="var(--brand)"
                  stroke="var(--surface)"
                  strokeWidth={1.2}
                />
              ))}

              <g transform={`translate(${Math.max(16, Math.min(344, cx + meanUx * scale))}, ${Math.max(16, Math.min(229, cy + meanUy * scale))})`}>
                <line x1={-7} y1={0} x2={7} y2={0} stroke="var(--bad)" strokeWidth={2.2} />
                <line x1={0} y1={-7} x2={0} y2={7} stroke="var(--bad)" strokeWidth={2.2} />
              </g>

              <text x={14} y={236} fontSize={10.5} fill="var(--ink-2)">
                Centre = True value · Blue dots = Trials · Red + = Sample mean
              </text>
            </svg>
          </div>

          <div className="space-y-4 min-w-0">
            <Slider
              label="Systematic zero error"
              value={zeroError}
              min={-3.5}
              max={3.5}
              step={0.1}
              onChange={(v) => {
                setZeroError(v);
              }}
              format={(v) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(1)} units`}
            />
            <Slider
              label="Random scatter"
              value={randomSpread}
              min={0.1}
              max={3.5}
              step={0.1}
              onChange={(v) => {
                setRandomSpread(v);
              }}
              format={(v) => `±${v.toFixed(1)} units`}
            />
            <Stepper
              label="Number of repeat trials"
              value={repeats}
              min={3}
              max={12}
              step={1}
              onChange={setRepeats}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 min-w-0">
          <Readout
            label="Mean Error (Accuracy)"
            value={`${meanError.toFixed(2)} u`}
            tone={isAccurate ? "good" : "bad"}
          />
          <Readout
            label="Avg Spread (Precision)"
            value={`±${meanRadius.toFixed(2)} u`}
            tone={isPrecise ? "good" : "bad"}
          />
          <Readout label="Diagnosis" value={diagnosis} tone={diagnosisTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type LineMode = "proportional" | "offset";

const BASE_POINTS: ReadonlyArray<{ x: number; y: number }> = [
  { x: 1, y: 6.2 },
  { x: 2, y: 11.8 },
  { x: 3, y: 18.1 },
  { x: 4, y: 23.9 },
  { x: 5, y: 30.0 },
];

function BestFitAnomalyLab() {
  const [excludeAnomaly, setExcludeAnomaly] = useState<"exclude" | "include">("exclude");
  const [anomalyDrop, setAnomalyDrop] = useState<number>(11);
  const [lineMode, setLineMode] = useState<LineMode>("proportional");

  const yOffset = lineMode === "offset" ? 6 : 0;
  const concordant = BASE_POINTS.map((p) => ({ x: p.x, y: p.y + yOffset }));
  const anomalyPoint = { x: 3, y: Math.max(1, 18.1 + yOffset - anomalyDrop) };

  const activePoints =
    excludeAnomaly === "include"
      ? concordant.map((p) => (p.x === 3 ? anomalyPoint : p))
      : concordant;

  // Least-squares linear fit y = m*x + c
  const n = activePoints.length;
  const sumX = activePoints.reduce((s, p) => s + p.x, 0);
  const sumY = activePoints.reduce((s, p) => s + p.y, 0);
  const sumXY = activePoints.reduce((s, p) => s + p.x * p.y, 0);
  const sumXX = activePoints.reduce((s, p) => s + p.x * p.x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  const px = (x: number) => 54 + (x / 5.4) * 336;
  const py = (y: number) => 210 - (y / 40) * 180;

  const yAt0 = intercept;
  const yAt52 = slope * 5.2 + intercept;

  const isDirectlyProp = Math.abs(intercept) < 1.2 && excludeAnomaly === "exclude";

  return (
    <WidgetFrame
      title="Line of Best Fit & Anomaly Impact Explorer"
      tryThis={[
        "Switch between **Exclude Anomaly** and **Include Anomaly** and drag **Anomaly offset** — watch how one unexcluded outlier tilts the line of best fit.",
        "Switch from **Proportional** to **Zero-error (+6 mm)** and check whether the line still passes through `(0, 0)`.",
      ]}
      caption={
        excludeAnomaly === "include" ? (
          <span>
            <strong>Anomaly included:</strong> dragging the circled point into the fit bends the line away from the concordant points and changes both the gradient and intercept. Always circle and exclude confirmed anomalies!
          </span>
        ) : isDirectlyProp ? (
          <span>
            <strong>Directly proportional:</strong> excluding the anomaly leaves a straight line passing right through `(0, 0)` with gradient ≈ <strong>{slope.toFixed(1)} mm/N</strong>.
          </span>
        ) : (
          <span>
            <strong>Linear, NOT directly proportional:</strong> the gradient is still ≈ <strong>{slope.toFixed(1)} mm/N</strong>, but the y-intercept sits near <strong>+{intercept.toFixed(1)} mm</strong> — the signature of a systematic zero error!
          </span>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap gap-2">
          <Segmented<"exclude" | "include">
            label="Anomaly handling"
            value={excludeAnomaly}
            onChange={setExcludeAnomaly}
            options={[
              { value: "exclude", label: "Exclude Anomaly" },
              { value: "include", label: "Include Anomaly" },
            ]}
          />
          <Segmented<LineMode>
            label="Dataset offset"
            value={lineMode}
            onChange={setLineMode}
            options={[
              { value: "proportional", label: "Proportional (0, 0)" },
              { value: "offset", label: "Zero-Error (+6 mm)" },
            ]}
          />
        </div>

        <Slider
          label="How far off-trend is the anomalous point at 3 N?"
          value={anomalyDrop}
          min={4}
          max={16}
          step={1}
          onChange={setAnomalyDrop}
          format={(v) => `−${v} mm below trend`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-2 min-w-0">
          <svg
            viewBox="0 0 420 245"
            className="w-full h-auto max-w-full"
            role="img"
            aria-label="Scatter graph comparing line of best fit with and without an anomalous data point"
          >
            {[0, 1, 2, 3, 4, 5].map((gx) => (
              <g key={`x${gx}`}>
                <line x1={px(gx)} y1={30} x2={px(gx)} y2={210} stroke="var(--line)" strokeWidth={0.9} />
                <text x={px(gx)} y={224} textAnchor="middle" fontSize={10} fill="var(--ink-2)">
                  {gx}
                </text>
              </g>
            ))}
            {[0, 10, 20, 30, 40].map((gy) => (
              <g key={`y${gy}`}>
                <line x1={54} y1={py(gy)} x2={390} y2={py(gy)} stroke="var(--line)" strokeWidth={0.9} />
                <text x={47} y={py(gy) + 3} textAnchor="end" fontSize={10} fill="var(--ink-2)">
                  {gy}
                </text>
              </g>
            ))}

            <line x1={54} y1={210} x2={392} y2={210} stroke="var(--ink)" strokeWidth={1.8} />
            <line x1={54} y1={210} x2={54} y2={28} stroke="var(--ink)" strokeWidth={1.8} />

            <line
              x1={px(0)}
              y1={Math.max(24, Math.min(212, py(yAt0)))}
              x2={px(5.2)}
              y2={Math.max(24, Math.min(212, py(yAt52)))}
              stroke={excludeAnomaly === "include" ? "var(--bad)" : "var(--brand)"}
              strokeWidth={2.6}
            />

            {concordant.map((p) => (
              <g key={`pt${p.x}`} transform={`translate(${px(p.x)}, ${py(p.y)})`}>
                <line x1={-4.5} y1={-4.5} x2={4.5} y2={4.5} stroke="var(--ink)" strokeWidth={2} />
                <line x1={-4.5} y1={4.5} x2={4.5} y2={-4.5} stroke="var(--ink)" strokeWidth={2} />
              </g>
            ))}

            <g transform={`translate(${px(anomalyPoint.x)}, ${py(anomalyPoint.y)})`}>
              <circle cx={0} cy={0} r={9} fill="none" stroke="var(--bad)" strokeWidth={1.8} />
              <line x1={-4} y1={-4} x2={4} y2={4} stroke="var(--bad)" strokeWidth={2} />
              <line x1={-4} y1={4} x2={4} y2={-4} stroke="var(--bad)" strokeWidth={2} />
            </g>

            <text x={222} y={240} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink)">
              Force (IV) / N
            </text>
            <text
              x={16}
              y={120}
              textAnchor="middle"
              fontSize={11}
              fontWeight={700}
              fill="var(--ink)"
              transform="rotate(-90 16 120)"
            >
              Extension (DV) / mm
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 min-w-0">
          <Readout label="Gradient (Δy/Δx)" value={`${slope.toFixed(2)} mm/N`} tone="brand" />
          <Readout
            label="y-Intercept"
            value={`${intercept >= 0 ? "+" : "−"}${Math.abs(intercept).toFixed(1)} mm`}
            tone={Math.abs(intercept) < 1.2 ? "good" : "bad"}
          />
          <Readout
            label="Relationship"
            value={isDirectlyProp ? "Directly Prop." : "Linear Offset"}
            tone={isDirectlyProp ? "good" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bullseye-error-lab",
    title: "Accuracy, Precision & Error Simulator",
    blurb: "Adjust systematic zero error, random scatter, and repeat count to see why repeats fix random noise but never fix a zero error.",
    Component: BullseyeErrorLab,
  },
  {
    id: "best-fit-anomaly-lab",
    title: "Line of Best Fit & Anomaly Impact Explorer",
    blurb: "Toggle an anomalous point on and off to watch how outliers skew gradients and test direct proportionality through (0, 0).",
    Component: BestFitAnomalyLab,
  },
];
