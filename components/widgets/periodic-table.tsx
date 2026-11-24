"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

interface ElemInfo {
  z: number;
  sym: string;
  name: string;
  defaultNeutrons: number;
  shells: number[];
  group: number;
  period: number;
  category: "Alkali metal" | "Metal" | "Non-metal" | "Halogen" | "Noble gas";
  note: string;
}

const FIRST_20: ElemInfo[] = [
  { z: 1, sym: "H", name: "Hydrogen", defaultNeutrons: 0, shells: [1], group: 1, period: 1, category: "Non-metal", note: "1 outer electron; shares or loses 1 e⁻ (non-metal gas)." },
  { z: 2, sym: "He", name: "Helium", defaultNeutrons: 2, shells: [2], group: 0, period: 1, category: "Noble gas", note: "Full 1st shell (2 e⁻) → Group 0 exception, totally inert!" },
  { z: 3, sym: "Li", name: "Lithium", defaultNeutrons: 4, shells: [2, 1], group: 1, period: 2, category: "Alkali metal", note: "1 outer e⁻ in 2nd shell → loses 1 e⁻ to form Li⁺; fizzes steadily on water." },
  { z: 4, sym: "Be", name: "Beryllium", defaultNeutrons: 5, shells: [2, 2], group: 2, period: 2, category: "Metal", note: "2 outer e⁻ → loses 2 e⁻ to form Be²⁺." },
  { z: 5, sym: "B", name: "Boron", defaultNeutrons: 6, shells: [2, 3], group: 3, period: 2, category: "Non-metal", note: "3 outer e⁻; sits on the metalloid boundary." },
  { z: 6, sym: "C", name: "Carbon", defaultNeutrons: 6, shells: [2, 4], group: 4, period: 2, category: "Non-metal", note: "4 outer e⁻; shares electrons in covalent bonds (graphite conducts!)." },
  { z: 7, sym: "N", name: "Nitrogen", defaultNeutrons: 7, shells: [2, 5], group: 5, period: 2, category: "Non-metal", note: "5 outer e⁻; gains or shares 3 e⁻ (N₂ gas)." },
  { z: 8, sym: "O", name: "Oxygen", defaultNeutrons: 8, shells: [2, 6], group: 6, period: 2, category: "Non-metal", note: "6 outer e⁻; gains 2 e⁻ to form O²⁻ or shares 2 pairs." },
  { z: 9, sym: "F", name: "Fluorine", defaultNeutrons: 10, shells: [2, 7], group: 7, period: 2, category: "Halogen", note: "7 outer e⁻ close to nucleus → strongest pull, most reactive halogen!" },
  { z: 10, sym: "Ne", name: "Neon", defaultNeutrons: 10, shells: [2, 8], group: 0, period: 2, category: "Noble gas", note: "Full 2nd shell (2,8) → monatomic and unreactive." },
  { z: 11, sym: "Na", name: "Sodium", defaultNeutrons: 12, shells: [2, 8, 1], group: 1, period: 3, category: "Alkali metal", note: "3 shells, 1 outer e⁻ → melts into a silvery ball on water!" },
  { z: 12, sym: "Mg", name: "Magnesium", defaultNeutrons: 12, shells: [2, 8, 2], group: 2, period: 3, category: "Metal", note: "2 outer e⁻ → loses 2 e⁻ to form Mg²⁺ (2,8, matching neon)." },
  { z: 13, sym: "Al", name: "Aluminium", defaultNeutrons: 14, shells: [2, 8, 3], group: 3, period: 3, category: "Metal", note: "3 outer e⁻ → lightweight metal forming basic/amphoteric oxide." },
  { z: 14, sym: "Si", name: "Silicon", defaultNeutrons: 14, shells: [2, 8, 4], group: 4, period: 3, category: "Non-metal", note: "4 outer e⁻; semiconductor directly above Mendeleev’s germanium gap." },
  { z: 15, sym: "P", name: "Phosphorus", defaultNeutrons: 16, shells: [2, 8, 5], group: 5, period: 3, category: "Non-metal", note: "5 outer e⁻; non-metal forming acidic oxides." },
  { z: 16, sym: "S", name: "Sulfur", defaultNeutrons: 16, shells: [2, 8, 6], group: 6, period: 3, category: "Non-metal", note: "6 outer e⁻; brittle yellow non-metal forming acidic SO₂." },
  { z: 17, sym: "Cl", name: "Chlorine", defaultNeutrons: 18, shells: [2, 8, 7], group: 7, period: 3, category: "Halogen", note: "7 outer e⁻ → gains 1 e⁻ to form Cl⁻; pale green diatomic gas Cl₂." },
  { z: 18, sym: "Ar", name: "Argon", defaultNeutrons: 22, shells: [2, 8, 8], group: 0, period: 3, category: "Noble gas", note: "Full 3rd shell (2,8,8) → inert gas used in bulbs and welding." },
  { z: 19, sym: "K", name: "Potassium", defaultNeutrons: 20, shells: [2, 8, 8, 1], group: 1, period: 4, category: "Alkali metal", note: "4 shells! Outer e⁻ far from nucleus → lost easily, burns with lilac flame!" },
  { z: 20, sym: "Ca", name: "Calcium", defaultNeutrons: 20, shells: [2, 8, 8, 2], group: 2, period: 4, category: "Metal", note: "4 shells, 2 outer e⁻ → loses 2 e⁻ to reach argon’s 2,8,8 configuration." },
];

// ===========================================================================
// WIDGET 1: Atom, Isotope & Electron Shell Builder (Z = 1 to 20)
// ===========================================================================
function AtomShellBuilder() {
  const [z, setZ] = useState(11);
  const [neutronShift, setNeutronShift] = useState(0);

  const el = FIRST_20[z - 1];
  const neutrons = Math.max(0, el.defaultNeutrons + neutronShift);
  const massNumber = el.z + neutrons;
  const configText = el.shells.join(",");
  const isIsotopeVariant = neutronShift !== 0;

  const radii = [32, 52, 72, 92];
  const cx = 132;
  const cy = 112;

  return (
    <WidgetFrame
      title="Atom, Isotope & Electron Shell Builder (H → Ca)"
      tryThis={[
        "Compare **Li (Z=3)**, **Na (Z=11)**, and **K (Z=19)** — notice every Group 1 atom adds a new shell while keeping **1 outer electron**.",
        "Slide to **He (Z=2)** — why is helium in **Group 0** instead of Group 2?",
        "Change the **Neutron shift** on Chlorine (Z=17) from 0 to +2 to switch between **³⁵Cl** and **³⁷Cl** without changing the electron shells!",
      ]}
      caption={
        <>
          <strong>
            {el.name}-{massNumber} ({el.sym})
          </strong>{" "}
          has <strong>{el.z} protons</strong>, <strong>{neutrons} neutrons</strong>, and{" "}
          <strong>{el.z} electrons</strong> arranged as <strong>{configText}</strong> ({el.period} shell
          {el.period === 1 ? "" : "s"} → Period {el.period}; Group {el.group}). {el.note}
          {isIsotopeVariant
            ? " Changing neutrons creates a different isotope — mass number changes, but electron shells and chemical reactivity stay identical!"
            : ""}
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Atomic Number (Protons, Z)"
            value={z}
            min={1}
            max={20}
            step={1}
            onChange={(nextZ) => {
              setZ(nextZ);
              setNeutronShift(0);
            }}
            format={(v) => `${v} (${FIRST_20[v - 1].sym})`}
          />
          <Stepper
            label="Neutron Shift (Isotopes)"
            value={neutronShift}
            min={el.defaultNeutrons >= 1 ? -1 : 0}
            max={2}
            step={1}
            onChange={setNeutronShift}
            format={(v) => (v > 0 ? `+${v} n⁰` : `${v} n⁰`)}
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[2, 3, 6, 9, 10, 11, 17, 18, 19, 20].map((presetZ) => {
            const p = FIRST_20[presetZ - 1];
            const active = z === presetZ;
            return (
              <button
                key={presetZ}
                type="button"
                onClick={() => {
                  setZ(presetZ);
                  setNeutronShift(0);
                }}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  active
                    ? "border-brand bg-brand-soft text-brand"
                    : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {p.sym} ({presetZ})
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 480 224"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Bohr shell diagram for ${el.name}-${massNumber} with electronic configuration ${configText}`}
            className="h-auto w-full"
          >
            <rect x="0" y="0" width="480" height="224" rx="10" fill="var(--surface)" />
            {/* Concentric shells */}
            {el.shells.map((count, sIdx) => {
              const r = radii[sIdx];
              const isOuter = sIdx === el.shells.length - 1;
              return (
                <g key={sIdx}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={isOuter ? "var(--brand)" : "var(--line)"}
                    strokeWidth={isOuter ? 2 : 1.3}
                    strokeDasharray={isOuter ? "5 3" : undefined}
                  />
                  {Array.from({ length: count }, (_, eIdx) => {
                    const angle = -Math.PI / 2 + (2 * Math.PI * eIdx) / count;
                    const ex = cx + r * Math.cos(angle);
                    const ey = cy + r * Math.sin(angle);
                    return (
                      <circle
                        key={eIdx}
                        cx={ex}
                        cy={ey}
                        r={isOuter ? 5 : 4}
                        fill={
                          isOuter
                            ? el.category === "Noble gas"
                              ? "var(--good)"
                              : el.category === "Halogen"
                                ? "var(--brand)"
                                : "var(--bad)"
                            : "var(--ink-2)"
                        }
                        stroke="var(--surface)"
                        strokeWidth="1.2"
                      />
                    );
                  })}
                </g>
              );
            })}
            {/* Nucleus */}
            <circle cx={cx} cy={cy} r="20" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.8" />
            <text x={cx} y={cy + 4} fontSize="13" fontWeight="800" textAnchor="middle" fill="var(--ink)">
              {el.sym}
            </text>

            {/* Right-side Periodic Table tile & summary */}
            <rect x="278" y="24" width="176" height="176" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
            <text x="296" y="50" fontSize="13" fontWeight="800" fill="var(--bad)">
              {massNumber}
            </text>
            <text x="436" y="50" fontSize="11" fontWeight="700" textAnchor="end" fill="var(--ink-2)">
              Mass no. (p + n)
            </text>
            <text x="366" y="102" fontSize="42" fontWeight="800" textAnchor="middle" fill="var(--ink)">
              {el.sym}
            </text>
            <text x="366" y="124" fontSize="13" fontWeight="700" textAnchor="middle" fill="var(--brand)">
              {el.name}
            </text>
            <text x="296" y="152" fontSize="13" fontWeight="800" fill="var(--good)">
              {el.z}
            </text>
            <text x="436" y="152" fontSize="11" fontWeight="700" textAnchor="end" fill="var(--ink-2)">
              Atomic no. (p⁺)
            </text>
            <line x1="292" y1="164" x2="440" y2="164" stroke="var(--line)" strokeWidth="1" />
            <text x="366" y="185" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">
              {el.z} p⁺ · {neutrons} n⁰ · {el.z} e⁻
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Shell Config" value={configText} tone="brand" />
          <Readout label="Group" value={`Group ${el.group}`} tone="good" />
          <Readout label="Period" value={`Period ${el.period}`} tone="ink" />
          <Readout label="Family" value={el.category} tone={el.category === "Noble gas" ? "good" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// WIDGET 2: Group 1 & Group 7 Virtual Reaction Bench
// ===========================================================================
type BenchMode = "group1" | "group7";
type AlkaliKey = "Li" | "Na" | "K";
type HalKey = "Cl2" | "Br2" | "I2";
type SaltKey = "KCl" | "KBr" | "KI";

const ALKALI_DATA: Record<
  AlkaliKey,
  {
    name: string;
    config: string;
    shells: number;
    mp: number;
    equation: string;
    obs: string;
    flame: boolean;
    molten: boolean;
    bubbles: number;
  }
> = {
  Li: {
    name: "Lithium",
    config: "2,1",
    shells: 2,
    mp: 181,
    equation: "2Li + 2H₂O → 2LiOH + H₂",
    obs: "Floats, moves steadily across water, fizzes gently, stays solid; indicator turns purple.",
    flame: false,
    molten: false,
    bubbles: 5,
  },
  Na: {
    name: "Sodium",
    config: "2,8,1",
    shells: 3,
    mp: 98,
    equation: "2Na + 2H₂O → 2NaOH + H₂",
    obs: "Floats, melts into a silvery sphere, whizzes rapidly, fizzes vigorously; indicator turns purple.",
    flame: false,
    molten: true,
    bubbles: 9,
  },
  K: {
    name: "Potassium",
    config: "2,8,8,1",
    shells: 4,
    mp: 63,
    equation: "2K + 2H₂O → 2KOH + H₂",
    obs: "Floats, melts instantly, fizzes violently, and ignites with a characteristic LILAC flame!",
    flame: true,
    molten: true,
    bubbles: 14,
  },
};

const HAL_RANK: Record<HalKey, number> = { Cl2: 3, Br2: 2, I2: 1 };
const SALT_RANK: Record<SaltKey, { hal: HalKey; rank: number; name: string; ion: string }> = {
  KCl: { hal: "Cl2", rank: 3, name: "Potassium chloride", ion: "Cl⁻" },
  KBr: { hal: "Br2", rank: 2, name: "Potassium bromide", ion: "Br⁻" },
  KI: { hal: "I2", rank: 1, name: "Potassium iodide", ion: "I⁻" },
};

function GroupReactionBench() {
  const [mode, setMode] = useState<BenchMode>("group1");
  const [alkali, setAlkali] = useState<AlkaliKey>("Na");
  const [halogen, setHalogen] = useState<HalKey>("Cl2");
  const [salt, setSalt] = useState<SaltKey>("KBr");

  const aInfo = ALKALI_DATA[alkali];
  const sInfo = SALT_RANK[salt];
  const displaces = HAL_RANK[halogen] > sInfo.rank;

  let tubeColour = "var(--surface-2)";
  let outcomeTitle = "No Reaction";
  let equation7 = `${halogen.replace("2", "₂")} + ${salt} → No reaction`;
  let explanation7 = `${halogen.replace("2", "₂")} is NOT more reactive than ${sInfo.hal.replace("2", "₂")}, so it cannot displace ${sInfo.ion} ions.`;

  if (displaces) {
    const prodSalt = halogen === "Cl2" ? "KCl" : "KBr";
    const displaced = sInfo.hal;
    tubeColour = displaced === "Br2" ? "#f59e0b" : "#92400e";
    outcomeTitle = displaced === "Br2" ? "Turns Orange-Brown (Br₂)" : "Turns Brown (I₂)";
    equation7 = `${halogen.replace("2", "₂")} + 2${salt} → 2${prodSalt} + ${displaced.replace("2", "₂")}`;
    explanation7 = `${halogen.replace("2", "₂")} sits higher in Group 7 than ${displaced.replace("2", "₂")}, so it pulls an electron more strongly and displaces ${displaced.replace("2", "₂")}!`;
  } else {
    tubeColour = halogen === "Cl2" ? "#dcfce7" : halogen === "Br2" ? "#fde68a" : "#d97706";
  }

  return (
    <WidgetFrame
      title="Group 1 & Group 7 Virtual Reaction Bench"
      tryThis={[
        "In **Group 1 + Water**, test **Li → Na → K**: watch atomic radius grow while reactivity escalates from gentle fizzing to a **lilac flame**.",
        "Switch to **Group 7 Displacement** and test `Cl₂ + KBr` vs `Br₂ + KCl` — confirm why displacement works in ONLY ONE direction!",
      ]}
      caption={
        mode === "group1" ? (
          <>
            <strong>{aInfo.name} ({aInfo.config})</strong>: {aInfo.obs} Equation: <code>{aInfo.equation}</code>.
          </>
        ) : (
          <>
            <strong>{outcomeTitle}</strong> — <code>{equation7}</code>. {explanation7}
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Bench mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "group1", label: "Group 1 + Water" },
              { value: "group7", label: "Group 7 Displacement" },
            ]}
          />
          {mode === "group1" ? (
            <Segmented
              label="Choose Group 1 metal"
              value={alkali}
              onChange={setAlkali}
              options={[
                { value: "Li", label: "Lithium (Li)" },
                { value: "Na", label: "Sodium (Na)" },
                { value: "K", label: "Potassium (K)" },
              ]}
            />
          ) : null}
        </div>

        {mode === "group7" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Add Halogen Water</div>
              <Segmented
                label="Choose halogen water"
                value={halogen}
                onChange={setHalogen}
                options={[
                  { value: "Cl2", label: "Cl₂ (aq)" },
                  { value: "Br2", label: "Br₂ (aq)" },
                  { value: "I2", label: "I₂ (aq)" },
                ]}
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Into Halide Salt Solution</div>
              <Segmented
                label="Choose halide salt"
                value={salt}
                onChange={setSalt}
                options={[
                  { value: "KCl", label: "KCl (aq)" },
                  { value: "KBr", label: "KBr (aq)" },
                  { value: "KI", label: "KI (aq)" },
                ]}
              />
            </div>
          </div>
        ) : null}

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          {mode === "group1" ? (
            <svg
              viewBox="0 0 480 205"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Reaction of ${aInfo.name} on water containing universal indicator`}
              className="h-auto w-full"
            >
              <rect x="0" y="0" width="480" height="205" rx="10" fill="var(--surface)" />
              {/* Left: Water trough with universal indicator turning alkaline purple */}
              <text x="150" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                Water Trough + Universal Indicator
              </text>
              <rect x="28" y="64" width="244" height="114" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="1.8" />
              <rect x="30" y="92" width="240" height="84" rx="6" fill="#9333ea" opacity="0.24" />
              {/* Floating metal piece */}
              {aInfo.molten ? (
                <circle cx="150" cy="92" r="10" fill="var(--ink-2)" stroke="var(--ink)" strokeWidth="1.5" />
              ) : (
                <rect x="140" y="83" width="20" height="14" rx="2" fill="var(--ink-2)" stroke="var(--ink)" strokeWidth="1.5" />
              )}
              {/* Lilac flame for Potassium */}
              {aInfo.flame ? (
                <g>
                  <path d="M150 42 C164 60 166 76 150 84 C134 76 136 60 150 42 Z" fill="#c084fc" opacity="0.85" />
                  <path d="M150 56 C158 67 158 76 150 82 C142 76 142 67 150 56 Z" fill="#f5d0fe" />
                </g>
              ) : null}
              {/* Hydrogen fizz bubbles */}
              {Array.from({ length: aInfo.bubbles }, (_, idx) => {
                const bx = 110 + ((idx * 17) % 82);
                const by = 86 - ((idx * 11) % 34);
                return <circle key={idx} cx={bx} cy={by} r={2.5 + (idx % 2)} fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.2" />;
              })}
              <text x="150" y="142" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                Alkaline {alkali}OH (pH 13–14, purple)
              </text>
              <text x="150" y="162" fontSize="10" textAnchor="middle" fill="var(--ink-2)">
                H₂ gas bubbles off surface
              </text>

              {/* Right: Shell-count atomic size comparison */}
              <line x1="296" y1="16" x2="296" y2="192" stroke="var(--line)" strokeWidth="1" />
              <text x="388" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                {aInfo.name} Atom ({aInfo.config})
              </text>
              {Array.from({ length: aInfo.shells }, (_, i) => {
                const r = 18 + i * 13;
                const isOuter = i === aInfo.shells - 1;
                return (
                  <circle
                    key={i}
                    cx="388"
                    cy="104"
                    r={r}
                    fill="none"
                    stroke={isOuter ? "var(--bad)" : "var(--line)"}
                    strokeWidth={isOuter ? 2 : 1.3}
                    strokeDasharray={isOuter ? "4 3" : undefined}
                  />
                );
              })}
              <circle cx="388" cy="104" r="11" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.4" />
              <text x="388" y="108" fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                {alkali}
              </text>
              <circle cx={388 + 18 + (aInfo.shells - 1) * 13} cy="104" r="4.5" fill="var(--bad)" />
              <text x="388" y="180" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                {aInfo.shells} shells · m.p. {aInfo.mp} °C
              </text>
              <text x="388" y="195" fontSize="9.5" textAnchor="middle" fill="var(--ink-2)">
                {alkali === "K" ? "Furthest e⁻ → lost fastest!" : alkali === "Na" ? "Medium radius → melts & whizzes" : "Closest e⁻ → gentle steady fizz"}
              </text>
            </svg>
          ) : (
            <svg
              viewBox="0 0 480 205"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Halogen displacement test adding ${halogen} to ${salt}`}
              className="h-auto w-full"
            >
              <rect x="0" y="0" width="480" height="205" rx="10" fill="var(--surface)" />
              {/* Left: Test tube */}
              <text x="128" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                Test Tube Result
              </text>
              <rect x="94" y="38" width="68" height="142" rx="30" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="2" />
              <rect x="96" y="88" width="64" height="90" rx="28" fill={tubeColour} opacity="0.65" />
              <text x="128" y="138" fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--ink)">
                {displaces ? (sInfo.hal === "Br2" ? "Br₂ formed" : "I₂ formed") : "No shift"}
              </text>
              <text x="128" y="196" fontSize="10" fontWeight="700" textAnchor="middle" fill={displaces ? "var(--good)" : "var(--ink-2)"}>
                {outcomeTitle}
              </text>

              {/* Right: Reactivity ladder */}
              <line x1="232" y1="16" x2="232" y2="192" stroke="var(--line)" strokeWidth="1" />
              <text x="356" y="20" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">
                Group 7 Reactivity Ladder
              </text>
              {(["Cl2", "Br2", "I2"] as HalKey[]).map((h, idx) => {
                const y = 46 + idx * 46;
                const isAdded = h === halogen;
                const isInSalt = h === sInfo.hal;
                return (
                  <g key={h}>
                    <rect
                      x="258"
                      y={y}
                      width="196"
                      height="34"
                      rx="8"
                      fill={isAdded ? "var(--brand-soft)" : "var(--surface-2)"}
                      stroke={isAdded ? "var(--brand)" : isInSalt ? "var(--bad)" : "var(--line)"}
                      strokeWidth={isAdded || isInSalt ? 2 : 1.2}
                    />
                    <text x="272" y={y + 21} fontSize="11.5" fontWeight="700" fill="var(--ink)">
                      {h.replace("2", "₂")} ({h === "Cl2" ? "most reactive" : h === "Br2" ? "middle" : "least reactive"})
                    </text>
                    {isAdded ? (
                      <text x="444" y={y + 21} fontSize="10" fontWeight="800" textAnchor="end" fill="var(--brand)">
                        ADDED
                      </text>
                    ) : isInSalt ? (
                      <text x="444" y={y + 21} fontSize="10" fontWeight="800" textAnchor="end" fill="var(--bad)">
                        IN SALT
                      </text>
                    ) : null}
                  </g>
                );
              })}
              <text x="356" y="194" fontSize="10" fontWeight="700" textAnchor="middle" fill={displaces ? "var(--good)" : "var(--bad)"}>
                {displaces ? "Higher halogen displaces lower halide!" : "Cannot displace a more (or equally) reactive halide."}
              </text>
            </svg>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {mode === "group1" ? (
            <>
              <Readout label="Melting Point" value={`${aInfo.mp} °C`} tone="brand" />
              <Readout label="Indicator pH" value="pH 13–14 (Purple)" tone="good" />
              <Readout label="Gas Released" value="Hydrogen (H₂)" tone="ink" />
            </>
          ) : (
            <>
              <Readout label="Displacement?" value={displaces ? "YES — Reacts" : "NO Reaction"} tone={displaces ? "good" : "bad"} />
              <Readout label="Final Appearance" value={outcomeTitle} tone="brand" />
              <Readout label="Balanced Equation" value={equation7} tone="ink" />
            </>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "atom-shell-builder",
    title: "Atom, Isotope & Electron Shell Builder",
    blurb: "Build any atom from Hydrogen (1) to Calcium (20), vary neutrons to make isotopes, and watch Group and Period emerge from the 2,8,8,2 shells.",
    Component: AtomShellBuilder,
  },
  {
    id: "group1-group7-bench",
    title: "Group 1 & Group 7 Virtual Reaction Bench",
    blurb: "Drop Li, Na, and K onto water and test every halogen displacement pair (Cl₂, Br₂, I₂ × KCl, KBr, KI) live.",
    Component: GroupReactionBench,
  },
];
