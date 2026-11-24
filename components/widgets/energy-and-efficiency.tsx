"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";

type PresetKey = "filament" | "car" | "motor" | "led";

const PRESETS: Record<PresetKey, { label: string; input: number; eff: number; usefulLabel: string }> = {
  filament: { label: "Filament Bulb", input: 100, eff: 10, usefulLabel: "Useful Light" },
  car: { label: "Petrol Car", input: 600, eff: 25, usefulLabel: "Useful Kinetic" },
  motor: { label: "Electric Motor", input: 400, eff: 75, usefulLabel: "Useful Kinetic" },
  led: { label: "Modern LED", input: 100, eff: 80, usefulLabel: "Useful Light" },
};

function SankeyStudio() {
  const [preset, setPreset] = useState<PresetKey>("motor");
  const [totalInput, setTotalInput] = useState(400);
  const [effPct, setEffPct] = useState(75);

  const applyPreset = (key: PresetKey) => {
    setPreset(key);
    setTotalInput(PRESETS[key].input);
    setEffPct(PRESETS[key].eff);
  };

  const useful = Math.round((totalInput * effPct) / 100);
  const wasted = totalInput - useful;
  const effDec = (effPct / 100).toFixed(2);

  // Proportional SVG band heights (total band = 110 px)
  const totalPx = 110;
  const topY = 38;
  const usefulPx = Math.max(8, (effPct / 100) * totalPx);
  const wastedPx = totalPx - usefulPx;
  const splitY = topY + usefulPx;
  const bottomY = topY + totalPx;

  return (
    <WidgetFrame
      title="Interactive Sankey Diagram & Efficiency Explorer"
      tryThis={[
        "Compare the **Filament Bulb** and **Modern LED** presets — notice how arrow thickness flips!",
        "Set Total Input to **500 W** and adjust Efficiency until Wasted Thermal equals **150 W**.",
      ]}
      caption={
        <span>
          Conservation check: <strong>{useful} W</strong> useful + <strong>{wasted} W</strong> dissipated ={" "}
          <strong>{totalInput} W</strong> total input. Efficiency ={" "}
          <M>{`${useful}/${totalInput} = ${effDec}`}</M> ({effPct}%).
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <Segmented<PresetKey>
          label="Appliance preset"
          value={preset}
          onChange={applyPreset}
          options={[
            { value: "filament", label: "Filament (10%)" },
            { value: "car", label: "Petrol Car (25%)" },
            { value: "motor", label: "Motor (75%)" },
            { value: "led", label: "LED (80%)" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Slider
            label="Total Input Power"
            value={totalInput}
            min={50}
            max={1000}
            step={10}
            onChange={setTotalInput}
            format={(v) => `${v} W`}
          />
          <Slider
            label="Efficiency"
            value={effPct}
            min={5}
            max={95}
            step={1}
            onChange={setEffPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3 overflow-hidden">
          <svg
            viewBox="0 0 560 245"
            className="w-full h-auto block"
            role="img"
            aria-label={`Sankey diagram with ${totalInput} W input, ${useful} W useful output (${effPct}%), and ${wasted} W wasted thermal output`}
          >
            <rect width="560" height="245" rx="10" fill="var(--surface)" />
            {/* Input + Useful straight arrow */}
            <path
              d={`M 45 ${topY} L 425 ${topY} L 425 ${topY - 10} L 478 ${topY + usefulPx / 2} L 425 ${splitY + 10} L 425 ${splitY} L 45 ${splitY} Z`}
              fill="var(--brand-soft)"
              stroke="var(--good)"
              strokeWidth="2"
            />
            {/* Wasted curving downward arrow */}
            <path
              d={`M 45 ${splitY} L 205 ${splitY} Q ${245 + wastedPx * 0.4} ${splitY} ${245 + wastedPx * 0.4} 194 L ${257 + wastedPx * 0.4} 194 L ${245 + wastedPx * 0.4 - wastedPx / 2} 226 L ${233 + wastedPx * 0.4 - wastedPx} 194 L ${245 + wastedPx * 0.4 - wastedPx} 194 Q ${245 + wastedPx * 0.4 - wastedPx} ${bottomY} 195 ${bottomY} L 45 ${bottomY} Z`}
              fill="var(--bad-soft)"
              stroke="var(--bad)"
              strokeWidth="2"
            />
            {/* Input dimension bracket */}
            <line x1="34" y1={topY} x2="34" y2={bottomY} stroke="var(--ink)" strokeWidth="2" />
            <line x1="29" y1={topY} x2="39" y2={topY} stroke="var(--ink)" strokeWidth="2" />
            <line x1="29" y1={bottomY} x2="39" y2={bottomY} stroke="var(--ink)" strokeWidth="2" />
            <text x="122" y={topY + totalPx / 2 - 4} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--ink)">
              Total Input
            </text>
            <text x="122" y={topY + totalPx / 2 + 13} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--brand)">
              {totalInput} W
            </text>
            {/* Useful label */}
            <text x="348" y={Math.max(24, topY + usefulPx / 2 - 2)} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--good)">
              {PRESETS[preset].usefulLabel}: {useful} W ({effPct}%)
            </text>
            {/* Wasted label */}
            <text x="345" y="198" textAnchor="start" fontSize="12.5" fontWeight="800" fill="var(--bad)">
              Dissipated Thermal
            </text>
            <text x="345" y="216" textAnchor="start" fontSize="12" fontWeight="700" fill="var(--ink-2)">
              {wasted} W ({100 - effPct}%)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-w-0">
          <Readout label="Useful Output" value={`${useful} W`} tone="good" />
          <Readout label="Wasted Thermal" value={`${wasted} W`} tone="bad" />
          <Readout label="Decimal Eff." value={effDec} tone="brand" />
          <Readout label="Percentage" value={`${effPct}%`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function WorkPowerCraneLab() {
  const [force, setForce] = useState(600);
  const [height, setHeight] = useState(12);
  const [time, setTime] = useState(10);
  const [effPct, setEffPct] = useState(75);

  const workDone = force * height;
  const usefulPower = Math.round(workDone / time);
  const inputPower = Math.round(usefulPower / (effPct / 100));
  const wastedPower = inputPower - usefulPower;

  // Map height (2..30 m) onto crane vertical shaft (y = 185 down to y = 55)
  const crateY = 185 - ((height - 2) / 28) * 120;
  // Bar chart scale up to max possible or dynamic scale
  const maxBarPower = Math.max(inputPower, 1000);
  const usefulBarW = Math.min(200, (usefulPower / maxBarPower) * 200);
  const inputBarW = Math.min(200, (inputPower / maxBarPower) * 200);

  return (
    <WidgetFrame
      title="Work Done & Crane Power Lab"
      tryThis={[
        "Keep Force and Height fixed, then **halve the Time** — notice what happens to Work Done vs Power!",
        "Lower **Motor Efficiency** from 80% to 40% — watch the Electrical Input Power double for the exact same lift.",
      ]}
      caption={
        <span>
          Lifting <strong>{force} N</strong> by <strong>{height} m</strong> does{" "}
          <M>{`W = ${force} * ${height} = ${workDone}`}</M> J of useful work. In <strong>{time} s</strong>, useful power is{" "}
          <strong>{usefulPower} W</strong>, requiring <strong>{inputPower} W</strong> from the electrical supply at {effPct}% efficiency.
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Slider
            label="Load Weight / Force (F)"
            value={force}
            min={100}
            max={2000}
            step={50}
            onChange={setForce}
            format={(v) => `${v} N`}
          />
          <Slider
            label="Lift Height (d)"
            value={height}
            min={2}
            max={30}
            step={1}
            onChange={setHeight}
            format={(v) => `${v} m`}
          />
          <Slider
            label="Time Taken (t)"
            value={time}
            min={2}
            max={40}
            step={1}
            onChange={setTime}
            format={(v) => `${v} s`}
          />
          <Slider
            label="Motor Efficiency"
            value={effPct}
            min={25}
            max={100}
            step={5}
            onChange={setEffPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2 sm:p-3 overflow-hidden">
          <svg
            viewBox="0 0 560 240"
            className="w-full h-auto block"
            role="img"
            aria-label={`Crane lifting ${force} N load by ${height} m in ${time} s: useful power ${usefulPower} W, electrical input power ${inputPower} W`}
          >
            <rect width="560" height="240" rx="10" fill="var(--surface)" />
            {/* Left half: Crane shaft */}
            <rect x="24" y="24" width="220" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
            {/* Crane boom & tower */}
            <rect x="44" y="34" width="16" height="176" fill="var(--ink-2)" rx="2" />
            <rect x="40" y="34" width="165" height="12" fill="var(--brand)" rx="2" />
            {/* Cable from boom to crate */}
            <line x1="145" y1="46" x2="145" y2={crateY} stroke="var(--ink)" strokeWidth="2.5" />
            {/* Ground line */}
            <line x1="36" y1="210" x2="232" y2="210" stroke="var(--ink-2)" strokeWidth="2" />
            {/* Crate */}
            <rect x="115" y={crateY} width="60" height="28" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
            <text x="145" y={crateY + 18} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--ink)">
              {force} N
            </text>
            {/* Height arrow */}
            <line x1="196" y1={crateY + 28} x2="196" y2="210" stroke="var(--good)" strokeWidth="2" strokeDasharray="3,2" />
            <text x="204" y={(crateY + 28 + 210) / 2 + 4} fontSize="11" fontWeight="800" fill="var(--good)">
              {height} m
            </text>

            {/* Right half: Live Power Comparison Bars */}
            <rect x="262" y="24" width="276" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
            <text x="400" y="46" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--ink)">
              Power Comparison (W = J/s)
            </text>

            <text x="280" y="76" fontSize="11.5" fontWeight="700" fill="var(--good)">
              Useful Mechanical Power ({usefulPower} W)
            </text>
            <rect x="280" y="84" width="200" height="22" rx="5" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
            <rect x="280" y="84" width={Math.max(4, usefulBarW)} height="22" rx="5" fill="var(--good)" />

            <text x="280" y="132" fontSize="11.5" fontWeight="700" fill="var(--brand)">
              Electrical Input Power ({inputPower} W)
            </text>
            <rect x="280" y="140" width="200" height="22" rx="5" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
            <rect x="280" y="140" width={Math.max(4, inputBarW)} height="22" rx="5" fill="var(--brand)" />

            <text x="280" y="190" fontSize="11" fontWeight="700" fill="var(--bad)">
              Wasted Thermal Power: {wastedPower} W ({100 - effPct}%)
            </text>
            <text x="280" y="207" fontSize="10.5" fill="var(--ink-2)">
              Total Work Done: {workDone.toLocaleString()} J in {time} s
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-w-0">
          <Readout label="Work Done" value={`${workDone.toLocaleString()} J`} tone="ink" />
          <Readout label="Useful Power" value={`${usefulPower} W`} tone="good" />
          <Readout label="Electrical Input" value={`${inputPower} W`} tone="brand" />
          <Readout label="Wasted Power" value={`${wastedPower} W`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sankey-studio",
    title: "Sankey Diagram & Efficiency Explorer",
    blurb: "Drag input power and efficiency sliders to watch useful and dissipated arrow widths stay conserved in real time.",
    Component: SankeyStudio,
  },
  {
    id: "work-power-crane-lab",
    title: "Work Done & Power Crane Lab",
    blurb: "Separate work done (W = Fd) from power (P = W/t) and see how motor efficiency drives electrical input power.",
    Component: WorkPowerCraneLab,
  },
];
