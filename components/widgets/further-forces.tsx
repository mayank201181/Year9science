"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

function VelocityTimeStudio() {
  const [vMax, setVMax] = useState(20);
  const [t1, setT1] = useState(6);
  const [t2, setT2] = useState(10);
  const [t3, setT3] = useState(4);

  const totalT = t1 + t2 + t3;
  const accel = +(vMax / t1).toFixed(2);
  const decel = +(vMax / t3).toFixed(2);
  const d1 = +(0.5 * t1 * vMax).toFixed(1);
  const d2 = +(t2 * vMax).toFixed(1);
  const d3 = +(0.5 * t3 * vMax).toFixed(1);
  const totalDist = +(d1 + d2 + d3).toFixed(1);
  const avgSpeed = +(totalDist / totalT).toFixed(2);

  const plane = makePlane({
    width: 540,
    height: 230,
    xMin: 0,
    xMax: Math.max(24, totalT + 2),
    yMin: 0,
    yMax: 34,
    pad: 32,
  });

  const p0 = `${plane.px(0)},${plane.py(0)}`;
  const p1 = `${plane.px(t1)},${plane.py(vMax)}`;
  const p2 = `${plane.px(t1 + t2)},${plane.py(vMax)}`;
  const p3 = `${plane.px(totalT)},${plane.py(0)}`;

  return (
    <WidgetFrame
      title="Velocity–Time Graph & Distance Explorer"
      tryThis={[
        "Set **Cruise Time to 0 s** and watch the graph collapse into a single triangle.",
        "Double **Acceleration Time** while keeping Peak Speed fixed — notice how the gradient halves while Triangle 1 area doubles!",
      ]}
      caption={
        <span>
          Total distance = Area 1 (<strong>{d1} m</strong>) + Area 2 (<strong>{d2} m</strong>) + Area 3 (<strong>{d3} m</strong>) ={" "}
          <strong>{totalDist} m</strong>. Overall average speed = <M>{`${totalDist}/${totalT} = ${avgSpeed}`}</M> m/s.
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Slider label="Peak Velocity (v)" value={vMax} min={4} max={30} step={2} onChange={setVMax} format={(v) => `${v} m/s`} />
          <Slider label="Accel. Time (t₁)" value={t1} min={2} max={12} step={1} onChange={setT1} format={(v) => `${v} s`} />
          <Slider label="Cruise Time (t₂)" value={t2} min={0} max={16} step={1} onChange={setT2} format={(v) => `${v} s`} />
          <Slider label="Braking Time (t₃)" value={t3} min={2} max={12} step={1} onChange={setT3} format={(v) => `${v} s`} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3 overflow-hidden">
          <svg
            viewBox="0 0 540 230"
            className="w-full h-auto block"
            role="img"
            aria-label={`Velocity-time graph reaching ${vMax} m/s with total distance ${totalDist} m over ${totalT} s`}
          >
            <rect width="540" height="230" rx="10" fill="var(--surface)" />
            <PlaneGrid plane={plane} step={5} labels={true} />
            {/* Shaded regions */}
            <polygon
              points={`${p0} ${p1} ${plane.px(t1)},${plane.py(0)}`}
              fill="var(--brand-soft)"
              opacity="0.85"
            />
            {t2 > 0 ? (
              <polygon
                points={`${plane.px(t1)},${plane.py(0)} ${p1} ${p2} ${plane.px(t1 + t2)},${plane.py(0)}`}
                fill="var(--good-soft)"
                opacity="0.85"
              />
            ) : null}
            <polygon
              points={`${plane.px(t1 + t2)},${plane.py(0)} ${p2} ${p3}`}
              fill="var(--bad-soft)"
              opacity="0.85"
            />
            {/* Dashed vertical boundaries */}
            <line x1={plane.px(t1)} y1={plane.py(vMax)} x2={plane.px(t1)} y2={plane.py(0)} stroke="var(--brand)" strokeWidth="1.2" strokeDasharray="3,2" />
            {t2 > 0 ? (
              <line x1={plane.px(t1 + t2)} y1={plane.py(vMax)} x2={plane.px(t1 + t2)} y2={plane.py(0)} stroke="var(--bad)" strokeWidth="1.2" strokeDasharray="3,2" />
            ) : null}
            {/* Main v-t polyline */}
            <polyline points={`${p0} ${p1} ${p2} ${p3}`} fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinejoin="round" />
            {/* Area labels */}
            <text x={plane.px(t1 * 0.62)} y={plane.py(vMax * 0.32)} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--brand)">
              {d1} m
            </text>
            {t2 > 0 ? (
              <text x={plane.px(t1 + t2 / 2)} y={plane.py(vMax * 0.5)} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--good)">
                {d2} m
              </text>
            ) : null}
            <text x={plane.px(t1 + t2 + t3 * 0.38)} y={plane.py(vMax * 0.32)} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--bad)">
              {d3} m
            </text>
            {/* Axis titles */}
            <text x="270" y="224" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-2)">
              Time (s)
            </text>
            <text x="12" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-2)" transform="rotate(-90 12 115)">
              Velocity (m/s)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-w-0">
          <Readout label="Accel. (a₁)" value={`${accel} m/s²`} tone="brand" />
          <Readout label="Decel. (a₃)" value={`−${decel} m/s²`} tone="bad" />
          <Readout label="Distance (Area)" value={`${totalDist} m`} tone="good" />
          <Readout label="Avg. Speed" value={`${avgSpeed} m/s`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function MomentsSeesawLab() {
  const [fLeft, setFLeft] = useState(400);
  const [dLeft, setDLeft] = useState(1.8);
  const [fRight, setFRight] = useState(600);
  const [dRight, setDRight] = useState(1.2);

  const mACW = +(fLeft * dLeft).toFixed(1);
  const mCW = +(fRight * dRight).toFixed(1);
  const diff = +(mCW - mACW).toFixed(1);
  const balanced = Math.abs(diff) < 0.05;

  // Smooth tilt angle proportional to net moment, clamped to [-15, 15] deg
  const angleDeg = balanced ? 0 : Math.max(-15, Math.min(15, (diff / 600) * 15));

  // Beam coordinates relative to pivot (280, 148); 3.0 m spans 210 px (70 px per metre)
  const pxPerM = 70;
  const leftX = 280 - dLeft * pxPerM;
  const rightX = 280 + dRight * pxPerM;
  const leftSize = 24 + (fLeft / 800) * 18;
  const rightSize = 24 + (fRight / 800) * 18;

  const statusText = balanced ? "Balanced!" : diff > 0 ? "Tips Clockwise" : "Tips Anticlockwise";
  const statusTone = balanced ? "good" : "bad";

  return (
    <WidgetFrame
      title="Seesaw Moments & Equilibrium Simulator"
      tryThis={[
        "Set Left to **300 N at 2.0 m**, then set Right Force to **500 N** and slide Right Distance until the beam snaps level!",
        "Notice how doubling a weight requires **halving** its distance from the pivot to preserve equilibrium.",
      ]}
      caption={
        <span>
          Anticlockwise moment = <M>{`${fLeft} * ${dLeft} = ${mACW}`}</M> Nm; Clockwise moment ={" "}
          <M>{`${fRight} * ${dRight} = ${mCW}`}</M> Nm.{" "}
          {balanced
            ? "Both moments are equal — the beam is in exact rotational equilibrium!"
            : `Net moment is ${Math.abs(diff)} Nm ${diff > 0 ? "clockwise" : "anticlockwise"}, so the beam rotates.`}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Slider label="Left Force (F₁)" value={fLeft} min={100} max={800} step={50} onChange={setFLeft} format={(v) => `${v} N`} />
          <Slider label="Left Distance (d₁)" value={dLeft} min={0.5} max={3.0} step={0.1} onChange={setDLeft} format={(v) => `${v.toFixed(1)} m`} />
          <Slider label="Right Force (F₂)" value={fRight} min={100} max={800} step={50} onChange={setFRight} format={(v) => `${v} N`} />
          <Slider label="Right Distance (d₂)" value={dRight} min={0.5} max={3.0} step={0.1} onChange={setDRight} format={(v) => `${v.toFixed(1)} m`} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3 overflow-hidden">
          <svg
            viewBox="0 0 560 230"
            className="w-full h-auto block"
            role="img"
            aria-label={`Seesaw diagram with ${fLeft} N at ${dLeft} m left (${mACW} Nm) and ${fRight} N at ${dRight} m right (${mCW} Nm), currently ${statusText}`}
          >
            <rect width="560" height="230" rx="10" fill="var(--surface)" />
            {/* Status badge */}
            <rect
              x="190"
              y="12"
              width="180"
              height="26"
              rx="13"
              fill={balanced ? "var(--good-soft)" : "var(--bad-soft)"}
              stroke={balanced ? "var(--good)" : "var(--bad)"}
              strokeWidth="1.5"
            />
            <text
              x="280"
              y="29"
              textAnchor="middle"
              fontSize="12"
              fontWeight="800"
              fill={balanced ? "var(--good)" : "var(--bad)"}
            >
              {statusText}
            </text>

            {/* Rotating beam group around pivot (280, 148) */}
            <g transform={`rotate(${angleDeg} 280 148)`}>
              {/* Beam */}
              <rect x="52" y="143" width="456" height="10" rx="4" fill="var(--ink)" />
              {/* Metre tick marks */}
              {[-3, -2, -1, 1, 2, 3].map((m) => (
                <line
                  key={m}
                  x1={280 + m * pxPerM}
                  y1="143"
                  x2={280 + m * pxPerM}
                  y2="153"
                  stroke="var(--surface)"
                  strokeWidth="1.5"
                />
              ))}
              {/* Left block */}
              <rect
                x={leftX - leftSize / 2}
                y={143 - leftSize}
                width={leftSize}
                height={leftSize}
                rx="5"
                fill="var(--brand-soft)"
                stroke="var(--brand)"
                strokeWidth="2"
              />
              <text x={leftX} y={143 - leftSize / 2 + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink)">
                {fLeft}N
              </text>
              <text x={leftX} y="169" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--brand)">
                {dLeft.toFixed(1)} m
              </text>
              {/* Right block */}
              <rect
                x={rightX - rightSize / 2}
                y={143 - rightSize}
                width={rightSize}
                height={rightSize}
                rx="5"
                fill="var(--bad-soft)"
                stroke="var(--bad)"
                strokeWidth="2"
              />
              <text x={rightX} y={143 - rightSize / 2 + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink)">
                {fRight}N
              </text>
              <text x={rightX} y="169" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--bad)">
                {dRight.toFixed(1)} m
              </text>
            </g>

            {/* Fixed pivot triangle & floor */}
            <polygon points="280,150 258,198 302,198" fill="var(--ink-2)" />
            <circle cx="280" cy="148" r="5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
            <line x1="34" y1="198" x2="526" y2="198" stroke="var(--line)" strokeWidth="3" />
            <text x="280" y="216" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
              Pivot (Fulcrum)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-w-0">
          <Readout label="ACW Moment" value={`${mACW} Nm`} tone="brand" />
          <Readout label="CW Moment" value={`${mCW} Nm`} tone="bad" />
          <Readout label="Net Moment" value={`${Math.abs(diff)} Nm`} tone="ink" />
          <Readout label="Status" value={balanced ? "Level" : diff > 0 ? "CW ↻" : "ACW ↺"} tone={statusTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "velocity-time-studio",
    title: "Velocity–Time Graph & Distance Explorer",
    blurb: "Adjust speed and stage durations to see how gradients give acceleration and shaded shapes give total distance.",
    Component: VelocityTimeStudio,
  },
  {
    id: "moments-seesaw-lab",
    title: "Seesaw Moments & Equilibrium Simulator",
    blurb: "Move weights and distances along a pivoted beam to test the Principle of Moments visually.",
    Component: MomentsSeesawLab,
  },
];
