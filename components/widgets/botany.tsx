"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// Deterministic PRNG so React render stays 100% pure (no Math.random in render)
function mulberry32(seed: number): () => number {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ===========================================================================
// WIDGET 1: Photosynthesis Limiting-Factor Lab
// ===========================================================================
type LeafMode = "green" | "variegated" | "destarched";

function tempMultiplier(temp: number): number {
  if (temp <= 5) return 0.1;
  if (temp <= 35) return 0.1 + ((temp - 5) / 30) * 0.9;
  if (temp <= 42) return 1.0 - ((temp - 35) / 7) * 0.25;
  if (temp < 52) return Math.max(0, 0.75 * (1 - (temp - 42) / 10));
  return 0;
}

function computeRate(light: number, co2: number, temp: number, leaf: LeafMode): {
  rate: number;
  limiter: string;
  denatured: boolean;
} {
  if (leaf === "destarched" || light === 0) {
    return { rate: 0, limiter: leaf === "destarched" ? "Darkness (destarched)" : "Light intensity", denatured: false };
  }
  const tMult = tempMultiplier(temp);
  if (temp >= 52) {
    return { rate: 0, limiter: "Enzymes denatured (>50 °C)", denatured: true };
  }
  const chlorophyllScale = leaf === "variegated" ? 0.55 : 1.0;
  const lightCap = (light / 100) * 60;
  const co2Cap = (co2 / 0.12) * 56;
  const tempCap = tMult * 58;
  const rawMin = Math.min(lightCap, co2Cap, tempCap);
  const rate = Math.round(rawMin * chlorophyllScale);

  let limiter = "Light intensity";
  if (temp > 42) {
    limiter = "High temp (enzymes denaturing)";
  } else if (leaf === "variegated" && light > 65 && co2 > 0.08 && temp >= 25 && temp <= 38) {
    limiter = "Chlorophyll area (variegated)";
  } else if (rawMin === co2Cap && co2Cap < lightCap - 1 && co2Cap <= tempCap + 1) {
    limiter = "CO₂ concentration";
  } else if (rawMin === tempCap && tempCap < lightCap - 1 && tempCap < co2Cap - 1) {
    limiter = "Low temperature";
  }
  return { rate, limiter, denatured: temp > 42 };
}

function PhotosynthesisLab() {
  const [light, setLight] = useState(60);
  const [co2, setCo2] = useState(0.04);
  const [temp, setTemp] = useState(25);
  const [leaf, setLeaf] = useState<LeafMode>("green");

  const { rate, limiter, denatured } = computeRate(light, co2, temp, leaf);

  // Build curve points for rate vs light intensity (0..100) at current CO2, temp & leaf
  const curvePath = useMemo(() => {
    const pts: string[] = [];
    for (let l = 0; l <= 100; l += 5) {
      const r = computeRate(l, co2, temp, leaf).rate;
      const x = 48 + (l / 100) * 230;
      const y = 178 - (r / 60) * 136;
      pts.push(`${l === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [co2, temp, leaf]);

  const curX = 48 + (light / 100) * 230;
  const curY = 178 - (rate / 60) * 136;

  // Deterministic bubble positions inside the pondweed beaker
  const bubbleCount = Math.min(12, Math.round(rate / 5));
  const bubbles = Array.from({ length: bubbleCount }, (_, i) => ({
    cx: 392 + ((i * 19) % 24) - 12,
    cy: 152 - i * 9,
    r: i % 2 === 0 ? 3.2 : 2.4,
  }));

  const starchStatus =
    rate === 0
      ? "Orange-brown (no starch)"
      : leaf === "variegated"
        ? "Blue-black on green only"
        : "Blue-black (starch made)";

  return (
    <WidgetFrame
      title="Photosynthesis Limiting-Factor Lab"
      tryThis={[
        "Push Light to 100% while keeping CO₂ at 0.04% — notice the curve flattens because **CO₂ becomes the limiting factor**.",
        "Raise CO₂ to 0.12% and Temperature to 35 °C to unlock the maximum bubble rate.",
        "Slide Temperature past 45 °C and watch the rate crash as **enzymes denature**.",
      ]}
      caption={
        <>
          At <strong>{light}% light</strong>, <strong>{co2.toFixed(2)}% CO₂</strong> and <strong>{temp} °C</strong>,
          the pondweed produces <strong>{rate} O₂ bubbles/min</strong>. Current bottleneck:{" "}
          <strong>{limiter}</strong>.{" "}
          {denatured
            ? "Above 42 °C, excess heat changes enzyme active sites so photosynthesis collapses."
            : rate === 0
              ? "With zero photosynthesis, no new glucose or starch is formed."
              : "Increasing the active limiting factor will lift the rate; changing any non-limiting factor will not."}
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink-2">Leaf / plant condition</span>
          <Segmented
            label="Leaf condition"
            value={leaf}
            onChange={setLeaf}
            options={[
              { value: "green", label: "Green leaf" },
              { value: "variegated", label: "Variegated" },
              { value: "destarched", label: "Dark cupboard" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="Light intensity"
            value={light}
            min={0}
            max={100}
            step={5}
            onChange={setLight}
            format={(v) => `${v}%`}
          />
          <Slider
            label="CO₂ concentration"
            value={Math.round(co2 * 100)}
            min={1}
            max={12}
            step={1}
            onChange={(v) => setCo2(v / 100)}
            format={(v) => `${(v / 100).toFixed(2)}%`}
          />
          <Slider
            label="Temperature"
            value={temp}
            min={5}
            max={55}
            step={1}
            onChange={setTemp}
            format={(v) => `${v} °C`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 500 212"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live rate versus light intensity graph alongside a pondweed oxygen bubble beaker"
            className="h-auto w-full"
          >
            <rect x="0" y="0" width="500" height="212" rx="10" fill="var(--surface)" />
            {/* Left: Rate vs Light Graph */}
            <text x="160" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
              Rate vs Light (at {co2.toFixed(2)}% CO₂, {temp} °C)
            </text>
            <line x1="48" y1="178" x2="286" y2="178" stroke="var(--ink)" strokeWidth="1.5" />
            <line x1="48" y1="178" x2="48" y2="34" stroke="var(--ink)" strokeWidth="1.5" />
            <text x="167" y="198" fontSize="10.5" textAnchor="middle" fill="var(--ink-2)">
              Light intensity (%)
            </text>
            <text
              x="16"
              y="108"
              fontSize="10.5"
              textAnchor="middle"
              fill="var(--ink-2)"
              transform="rotate(-90 16 108)"
            >
              O₂ bubbles/min
            </text>
            {[0, 30, 60].map((v) => {
              const y = 178 - (v / 60) * 136;
              return (
                <g key={v}>
                  <line x1="48" y1={y} x2="282" y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="42" y={y + 3} fontSize="9.5" textAnchor="end" fill="var(--ink-2)">
                    {v}
                  </text>
                </g>
              );
            })}
            <path d={curvePath} fill="none" stroke="var(--brand)" strokeWidth="2.8" />
            <line x1={curX} y1="178" x2={curX} y2={curY} stroke="var(--bad)" strokeWidth="1.3" strokeDasharray="3 3" />
            <circle cx={curX} cy={curY} r="5.5" fill={denatured ? "var(--bad)" : "var(--good)"} stroke="var(--surface)" strokeWidth="2" />
            <text x={Math.min(260, curX + 8)} y={Math.max(46, curY - 8)} fontSize="10" fontWeight="700" fill="var(--ink)">
              {rate}/min
            </text>

            {/* Divider */}
            <line x1="306" y1="18" x2="306" y2="196" stroke="var(--line)" strokeWidth="1" />

            {/* Right: Beaker & LED Lamp */}
            <text x="404" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
              Pondweed Beaker
            </text>
            {/* Lamp glow */}
            <circle
              cx="336"
              cy="64"
              r="14"
              fill="var(--accent)"
              opacity={leaf === "destarched" ? 0.1 : 0.15 + (light / 100) * 0.85}
              stroke="var(--ink-2)"
              strokeWidth="1.2"
            />
            <text x="336" y="92" fontSize="9.5" textAnchor="middle" fill="var(--ink-2)">
              LED
            </text>
            {/* Beaker */}
            <rect x="358" y="46" width="96" height="132" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="1.6" />
            <rect x="360" y="64" width="92" height="112" rx="6" fill="var(--info-soft)" opacity="0.55" />
            {/* Pondweed stem & leaves */}
            <line x1="404" y1="174" x2="404" y2="112" stroke="var(--good)" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="390" cy="154" rx="12" ry="5" transform="rotate(-20 390 154)" fill={leaf === "variegated" ? "var(--surface)" : "var(--good)"} stroke="var(--good)" strokeWidth="1.4" />
            <ellipse cx="418" cy="144" rx="12" ry="5" transform="rotate(20 418 144)" fill="var(--good)" />
            <ellipse cx="390" cy="130" rx="11" ry="5" transform="rotate(-18 390 130)" fill="var(--good)" />
            <ellipse cx="418" cy="122" rx="11" ry="5" transform="rotate(18 418 122)" fill={leaf === "variegated" ? "var(--surface)" : "var(--good)"} stroke="var(--good)" strokeWidth="1.4" />
            {/* Rising oxygen bubbles */}
            {bubbles.map((b, idx) => (
              <circle key={idx} cx={b.cx} cy={b.cy} r={b.r} fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.4" />
            ))}
            {/* Thermometer bar */}
            <rect x="466" y="48" width="12" height="126" rx="6" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="1.2" />
            <rect
              x="468"
              y={172 - ((temp - 5) / 50) * 116}
              width="8"
              height={((temp - 5) / 50) * 116}
              rx="4"
              fill={temp > 42 ? "var(--bad)" : "var(--good)"}
            />
            <text x="472" y="192" fontSize="9.5" textAnchor="middle" fill="var(--ink-2)">
              {temp}°C
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="O₂ Bubble Rate" value={`${rate} / min`} tone={rate > 0 ? "good" : "bad"} />
          <Readout label="Limiting Factor" value={limiter} tone={denatured ? "bad" : "brand"} />
          <Readout label="Iodine Starch Test" value={starchStatus} tone={rate > 0 ? "good" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// WIDGET 2: TTS & Gippsland Fieldwork Quadrat & Transect Simulator
// ===========================================================================
type SampleMode = "random" | "transect";
type SiteMode = "gippsland" | "tts";

interface PlantDot {
  x: number; // 0..10 m
  y: number; // 0..10 m
  kind: "shade" | "sun";
}

function generateHabitat(site: SiteMode): PlantDot[] {
  const rng = mulberry32(site === "gippsland" ? 9031 : 4417);
  const dots: PlantDot[] = [];
  // 160 shade-tolerant plants concentrated on left (0..5 m) and 160 sun-loving plants concentrated on right (4..10 m)
  for (let i = 0; i < 160; i++) {
    const rawX = rng();
    const x = site === "gippsland" ? Math.pow(rawX, 1.55) * 9.6 + 0.2 : Math.pow(rawX, 1.4) * 9.6 + 0.2;
    const y = rng() * 9.6 + 0.2;
    dots.push({ x, y, kind: "shade" });
  }
  for (let i = 0; i < 160; i++) {
    const rawX = rng();
    const x = 10 - (Math.pow(rawX, 1.55) * 9.6 + 0.2);
    const y = rng() * 9.6 + 0.2;
    dots.push({ x, y, kind: "sun" });
  }
  return dots;
}

function FieldworkSampler() {
  const [mode, setMode] = useState<SampleMode>("random");
  const [site, setSite] = useState<SiteMode>("gippsland");
  const [quadratCount, setQuadratCount] = useState(8);
  const [trial, setTrial] = useState(1);

  const plants = useMemo(() => generateHabitat(site), [site]);
  const shadeLabel = site === "gippsland" ? "Bracken Ferns" : "Tropical Moss";
  const sunLabel = site === "gippsland" ? "Meadow Clover" : "Sun Mimosa";

  // Random 1 m × 1 m quadrats over 10 m × 10 m (100 m²) habitat
  const randomData = useMemo(() => {
    const rng = mulberry32(trial * 1337 + (site === "gippsland" ? 17 : 83) + quadratCount * 11);
    const quads: { x: number; y: number; count: number }[] = [];
    for (let i = 0; i < quadratCount; i++) {
      const qx = Math.floor(rng() * 10);
      const qy = Math.floor(rng() * 10);
      const count = plants.filter((p) => p.x >= qx && p.x < qx + 1 && p.y >= qy && p.y < qy + 1).length;
      quads.push({ x: qx, y: qy, count });
    }
    const mean = quads.reduce((s, q) => s + q.count, 0) / quads.length;
    const estTotal = Math.round(mean * 100);
    const trueTotal = plants.length;
    const pctError = Math.abs(Math.round(((estTotal - trueTotal) / trueTotal) * 100));
    return { quads, mean, estTotal, trueTotal, pctError };
  }, [plants, quadratCount, site, trial]);

  // Belt transect: 5 stations at x = 0.5, 2.5, 4.5, 6.5, 8.5 (each 1 m × 2 m belt slice at y = 4..6)
  const transectData = useMemo(() => {
    const stations = [0, 2, 4, 6, 8].map((startX) => {
      const inBox = plants.filter((p) => p.x >= startX && p.x < startX + 1.5 && p.y >= 3.5 && p.y < 6.5);
      const shade = inBox.filter((p) => p.kind === "shade").length;
      const sun = inBox.filter((p) => p.kind === "sun").length;
      const lightLux = 150 + startX * 110;
      return { dist: startX + 1, x: startX, shade, sun, lightLux };
    });
    return stations;
  }, [plants]);

  return (
    <WidgetFrame
      title="TTS & Gippsland Fieldwork Sampler"
      tryThis={[
        "In **Random Quadrats** mode, increase quadrats from 4 to 12 and tap **Resample** — watch the % error shrink with a larger sample size.",
        "Switch to **Belt Transect** mode to trace how shade-loving and sun-loving plants shift along a light gradient from canopy (0 m) to clearing (10 m).",
      ]}
      caption={
        mode === "random" ? (
          <>
            Across <strong>{quadratCount} random 1 m × 1 m quadrats</strong> in a <strong>100 m²</strong>{" "}
            {site === "gippsland" ? "Gippsland clearing" : "Tanglin campus lawn"}, mean count ={" "}
            <strong>{randomData.mean.toFixed(2)} plants/m²</strong> → estimated population ={" "}
            <strong>{randomData.estTotal}</strong> (true count: {randomData.trueTotal}, error:{" "}
            <strong>{randomData.pctError}%</strong>). More random quadrats improve reliability!
          </>
        ) : (
          <>
            Along the 10 m <strong>belt transect</strong>, light rises from{" "}
            <strong>{transectData[0].lightLux} lux</strong> under canopy shade to{" "}
            <strong>{transectData[transectData.length - 1].lightLux} lux</strong> in open sun.{" "}
            <strong>{shadeLabel}</strong> dominate the shade while <strong>{sunLabel}</strong> take over in bright sun.
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Sampling mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "random", label: "Random Quadrats" },
              { value: "transect", label: "Belt Transect" },
            ]}
          />
          <Segmented
            label="Fieldwork habitat"
            value={site}
            onChange={setSite}
            options={[
              { value: "gippsland", label: "Gippsland" },
              { value: "tts", label: "TTS Singapore" },
            ]}
          />
        </div>

        {mode === "random" ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <Stepper
                label="Random quadrats (1 m × 1 m)"
                value={quadratCount}
                min={4}
                max={12}
                step={2}
                onChange={setQuadratCount}
              />
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setTrial((t) => t + 1)}
            >
              🎲 Resample Coordinates
            </button>
          </div>
        ) : null}

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 500 232"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive 10 m by 10 m habitat map with random quadrats or belt transect sampling"
            className="h-auto w-full"
          >
            <rect x="0" y="0" width="500" height="232" rx="10" fill="var(--surface)" />
            {/* Left map: 10 m × 10 m grid mapped to x=24..224, y=24..204 (20 px per m horizontally, 18 px per m vertically) */}
            <text x="124" y="17" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">
              10 m × 10 m Habitat Plot (100 m²)
            </text>
            {/* Shaded canopy wash on left */}
            <rect x="24" y="24" width="90" height="180" fill="var(--good-soft)" opacity="0.55" />
            <rect x="114" y="24" width="110" height="180" fill="var(--warn-soft)" opacity="0.35" />
            {/* Grid lines */}
            {Array.from({ length: 11 }, (_, i) => (
              <g key={i}>
                <line x1={24 + i * 20} y1="24" x2={24 + i * 20} y2="204" stroke="var(--line)" strokeWidth="0.7" />
                <line x1="24" y1={24 + i * 18} x2="224" y2={24 + i * 18} stroke="var(--line)" strokeWidth="0.7" />
              </g>
            ))}
            <rect x="24" y="24" width="200" height="180" fill="none" stroke="var(--ink-2)" strokeWidth="1.4" />
            {/* Plant dots */}
            {plants.map((p, idx) => (
              <circle
                key={idx}
                cx={24 + p.x * 20}
                cy={24 + p.y * 18}
                r="2.1"
                fill={p.kind === "shade" ? "var(--good)" : "var(--bad)"}
                opacity="0.78"
              />
            ))}

            {/* Overlay quadrats or transect */}
            {mode === "random" ? (
              randomData.quads.map((q, idx) => (
                <rect
                  key={idx}
                  x={24 + q.x * 20}
                  y={24 + q.y * 18}
                  width="20"
                  height="18"
                  fill="var(--brand)"
                  fillOpacity="0.18"
                  stroke="var(--ink)"
                  strokeWidth="1.8"
                />
              ))
            ) : (
              <g>
                <line x1="24" y1="114" x2="224" y2="114" stroke="var(--ink)" strokeWidth="2" strokeDasharray="5 3" />
                {transectData.map((st) => (
                  <rect
                    key={st.dist}
                    x={24 + st.x * 20}
                    y={24 + 3.5 * 18}
                    width="30"
                    height="54"
                    fill="var(--brand)"
                    fillOpacity="0.14"
                    stroke="var(--ink)"
                    strokeWidth="1.8"
                  />
                ))}
              </g>
            )}
            <text x="58" y="220" fontSize="9.5" textAnchor="middle" fill="var(--good)" fontWeight="700">
              Shade ({shadeLabel})
            </text>
            <text x="180" y="220" fontSize="9.5" textAnchor="middle" fill="var(--bad)" fontWeight="700">
              Sun ({sunLabel})
            </text>

            {/* Right panel: bar chart summary */}
            <line x1="244" y1="16" x2="244" y2="218" stroke="var(--line)" strokeWidth="1" />
            {mode === "random" ? (
              <g>
                <text x="372" y="18" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                  Quadrat Counts (Sample #{trial})
                </text>
                {randomData.quads.slice(0, 12).map((q, i) => {
                  const barW = Math.min(18, Math.floor(210 / randomData.quads.length) - 4);
                  const step = 216 / randomData.quads.length;
                  const bx = 264 + i * step;
                  const bh = Math.min(140, q.count * 16);
                  return (
                    <g key={i}>
                      <rect
                        x={bx}
                        y={184 - bh}
                        width={barW}
                        height={bh}
                        rx="3"
                        fill="var(--brand)"
                        opacity="0.8"
                      />
                      <text x={bx + barW / 2} y={179 - bh} fontSize="9" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                        {q.count}
                      </text>
                      <text x={bx + barW / 2} y="198" fontSize="8.5" textAnchor="middle" fill="var(--ink-2)">
                        Q{i + 1}
                      </text>
                    </g>
                  );
                })}
                <line x1="258" y1="184" x2="486" y2="184" stroke="var(--ink)" strokeWidth="1.3" />
                <text x="372" y="218" fontSize="10" textAnchor="middle" fill="var(--ink-2)">
                  Mean = {randomData.mean.toFixed(2)}/m² × 100 m² = {randomData.estTotal} plants
                </text>
              </g>
            ) : (
              <g>
                <text x="372" y="18" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                  Transect Profile (0 m → 10 m)
                </text>
                <line x1="264" y1="184" x2="482" y2="184" stroke="var(--ink)" strokeWidth="1.3" />
                {transectData.map((st, idx) => {
                  const cx = 282 + idx * 44;
                  const hShade = Math.min(130, st.shade * 7);
                  const hSun = Math.min(130, st.sun * 7);
                  return (
                    <g key={st.dist}>
                      <rect x={cx - 13} y={184 - hShade} width="12" height={hShade} rx="2" fill="var(--good)" />
                      <rect x={cx + 1} y={184 - hSun} width="12" height={hSun} rx="2" fill="var(--bad)" />
                      <text x={cx} y="198" fontSize="9.5" textAnchor="middle" fill="var(--ink-2)">
                        {st.dist} m
                      </text>
                    </g>
                  );
                })}
                <text x="372" y="218" fontSize="10" textAnchor="middle" fill="var(--ink-2)">
                  Green = {shadeLabel} · Orange = {sunLabel}
                </text>
              </g>
            )}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {mode === "random" ? (
            <>
              <Readout label="Sample Mean" value={`${randomData.mean.toFixed(2)} / m²`} tone="brand" />
              <Readout label="Estimated Total" value={`${randomData.estTotal}`} tone="good" />
              <Readout
                label="Error vs True (320)"
                value={`${randomData.pctError}%`}
                tone={randomData.pctError <= 12 ? "good" : "bad"}
              />
            </>
          ) : (
            <>
              <Readout label="Shade Zone (1 m)" value={`${transectData[0].shade} shade · ${transectData[0].sun} sun`} tone="good" />
              <Readout label="Mid Zone (5 m)" value={`${transectData[2].shade} shade · ${transectData[2].sun} sun`} tone="brand" />
              <Readout label="Sun Zone (9 m)" value={`${transectData[4].shade} shade · ${transectData[4].sun} sun`} tone="bad" />
            </>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "photosynthesis-lab",
    title: "Photosynthesis Limiting-Factor Lab",
    blurb: "Control light, CO₂, temperature, and leaf type to discover which factor caps the O₂ bubble rate and when enzymes denature.",
    Component: PhotosynthesisLab,
  },
  {
    id: "fieldwork-quadrat-sim",
    title: "TTS & Gippsland Fieldwork Sampler",
    blurb: "Compare random quadrat population estimates with systematic belt transects across a shade-to-sunlight gradient.",
    Component: FieldworkSampler,
  },
];
