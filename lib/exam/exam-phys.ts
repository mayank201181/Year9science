import type { ExamPaper } from "../types";

const SANKEY_PUMP_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sankey diagram for an electric water pump with 800 J electrical input, 520 J useful output, and unknown wasted thermal output">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Sankey Diagram: Electric Water Pump (per second)</text>
  <rect x="44" y="48" width="176" height="120" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="132" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Electrical input</text>
  <text x="132" y="122" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">800 J</text>
  <path d="M 220 48 L 446 48 L 446 36 L 488 87 L 446 138 L 446 126 L 220 126 Z" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="334" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Useful output</text>
  <text x="334" y="103" text-anchor="middle" font-size="14" font-weight="700" fill="var(--good)">520 J</text>
  <path d="M 220 126 Q 326 126 326 200 L 338 200 L 305 232 L 272 200 L 284 200 Q 284 168 220 168 Z" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2"/>
  <text x="424" y="192" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Wasted thermal</text>
  <text x="424" y="212" text-anchor="middle" font-size="14" font-weight="700" fill="var(--bad)">? J</text>
  <line x1="350" y1="202" x2="334" y2="202" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>`;

const VT_GRAPH_SVG = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph of an electric shuttle accelerating from 0 to 20 m/s in 8 s, holding 20 m/s until 18 s, and stopping at 22 s">
  <rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Velocity–Time Graph: Electric Shuttle</text>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="75" y1="50" x2="515" y2="50"/>
    <line x1="75" y1="90" x2="515" y2="90"/>
    <line x1="75" y1="130" x2="515" y2="130"/>
    <line x1="75" y1="170" x2="515" y2="170"/>
    <line x1="115" y1="50" x2="115" y2="210"/>
    <line x1="155" y1="50" x2="155" y2="210"/>
    <line x1="195" y1="50" x2="195" y2="210"/>
    <line x1="235" y1="50" x2="235" y2="210"/>
    <line x1="275" y1="50" x2="275" y2="210"/>
    <line x1="315" y1="50" x2="315" y2="210"/>
    <line x1="355" y1="50" x2="355" y2="210"/>
    <line x1="395" y1="50" x2="395" y2="210"/>
    <line x1="435" y1="50" x2="435" y2="210"/>
    <line x1="475" y1="50" x2="475" y2="210"/>
    <line x1="515" y1="50" x2="515" y2="210"/>
  </g>
  <line x1="75" y1="210" x2="525" y2="210" stroke="var(--ink)" stroke-width="2"/>
  <line x1="75" y1="210" x2="75" y2="40" stroke="var(--ink)" stroke-width="2"/>
  <line x1="235" y1="50" x2="235" y2="210" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="435" y1="50" x2="435" y2="210" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <polyline points="75,210 235,50 435,50 515,210" fill="none" stroke="var(--brand)" stroke-width="3.5" stroke-linejoin="round"/>
  <circle cx="75" cy="210" r="4" fill="var(--brand)"/>
  <circle cx="235" cy="50" r="4.5" fill="var(--brand)"/>
  <circle cx="435" cy="50" r="4.5" fill="var(--brand)"/>
  <circle cx="515" cy="210" r="4" fill="var(--brand)"/>
  <g font-size="11" fill="var(--ink-2)" text-anchor="end">
    <text x="67" y="214">0</text>
    <text x="67" y="174">5</text>
    <text x="67" y="134">10</text>
    <text x="67" y="94">15</text>
    <text x="67" y="54">20</text>
  </g>
  <g font-size="11" fill="var(--ink-2)" text-anchor="middle">
    <text x="75" y="227">0</text>
    <text x="155" y="227">4</text>
    <text x="235" y="227">8</text>
    <text x="315" y="227">12</text>
    <text x="395" y="227">16</text>
    <text x="435" y="227">18</text>
    <text x="515" y="227">22</text>
  </g>
  <text x="295" y="248" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">Time (s)</text>
  <text x="22" y="130" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" transform="rotate(-90 22 130)">Velocity (m/s)</text>
</svg>`;

const LEVER_MOMENTS_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced horizontal beam on a pivot with a 180 N load 1.5 m to the left and unknown force F at 0.9 m to the right">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Balanced Uniform Beam in Equilibrium</text>
  <line x1="130" y1="78" x2="130" y2="118" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="310" y1="78" x2="310" y2="118" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="418" y1="78" x2="418" y2="118" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="134" y1="88" x2="306" y2="88" stroke="var(--ink)" stroke-width="1.5"/>
  <polygon points="130,88 139,84 139,92" fill="var(--ink)"/>
  <polygon points="310,88 301,84 301,92" fill="var(--ink)"/>
  <text x="220" y="79" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">1.5 m</text>
  <line x1="314" y1="88" x2="414" y2="88" stroke="var(--ink)" stroke-width="1.5"/>
  <polygon points="310,88 319,84 319,92" fill="var(--ink)"/>
  <polygon points="418,88 409,84 409,92" fill="var(--ink)"/>
  <text x="364" y="79" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">0.9 m</text>
  <rect x="76" y="122" width="408" height="13" rx="3" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="310,135 288,188 332,188" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <line x1="255" y1="188" x2="365" y2="188" stroke="var(--ink)" stroke-width="2.5"/>
  <text x="310" y="210" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Pivot</text>
  <line x1="130" y1="135" x2="130" y2="156" stroke="var(--ink)" stroke-width="2"/>
  <rect x="96" y="156" width="68" height="36" rx="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <text x="130" y="179" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">180 N</text>
  <line x1="130" y1="192" x2="130" y2="216" stroke="var(--bad)" stroke-width="2.5"/>
  <polygon points="130,224 124,213 136,213" fill="var(--bad)"/>
  <line x1="418" y1="135" x2="418" y2="156" stroke="var(--ink)" stroke-width="2"/>
  <rect x="384" y="156" width="68" height="36" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="418" y="179" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">F = ?</text>
  <line x1="418" y1="192" x2="418" y2="216" stroke="var(--brand)" stroke-width="2.5"/>
  <polygon points="418,224 412,213 424,213" fill="var(--brand)"/>
</svg>`;

const HOOKES_GRAPH_SVG = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force-extension graph for a steel spring showing a straight line from 0 to 10 cm at 8 N, then curving beyond the limit of proportionality">
  <rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Force–Extension Graph for a Steel Spring</text>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="80" y1="50" x2="500" y2="50"/>
    <line x1="80" y1="82" x2="500" y2="82"/>
    <line x1="80" y1="114" x2="500" y2="114"/>
    <line x1="80" y1="146" x2="500" y2="146"/>
    <line x1="80" y1="178" x2="500" y2="178"/>
    <line x1="140" y1="50" x2="140" y2="210"/>
    <line x1="200" y1="50" x2="200" y2="210"/>
    <line x1="260" y1="50" x2="260" y2="210"/>
    <line x1="320" y1="50" x2="320" y2="210"/>
    <line x1="380" y1="50" x2="380" y2="210"/>
    <line x1="440" y1="50" x2="440" y2="210"/>
    <line x1="500" y1="50" x2="500" y2="210"/>
  </g>
  <line x1="80" y1="210" x2="512" y2="210" stroke="var(--ink)" stroke-width="2"/>
  <line x1="80" y1="210" x2="80" y2="40" stroke="var(--ink)" stroke-width="2"/>
  <line x1="80" y1="82" x2="380" y2="82" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="380" y1="82" x2="380" y2="210" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="80" y1="210" x2="380" y2="82" stroke="var(--brand)" stroke-width="3.5"/>
  <path d="M 380 82 Q 438 66 500 62" fill="none" stroke="var(--bad)" stroke-width="3.5"/>
  <circle cx="230" cy="146" r="4" fill="var(--brand)"/>
  <circle cx="380" cy="82" r="5.5" fill="var(--surface)" stroke="var(--bad)" stroke-width="2.5"/>
  <rect x="96" y="46" width="212" height="24" rx="5" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="202" y="62" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">Limit of proportionality (10 cm, 8 N)</text>
  <line x1="308" y1="58" x2="373" y2="79" stroke="var(--ink-2)" stroke-width="1.5"/>
  <g font-size="11" fill="var(--ink-2)" text-anchor="end">
    <text x="72" y="214">0</text>
    <text x="72" y="182">2</text>
    <text x="72" y="150">4</text>
    <text x="72" y="118">6</text>
    <text x="72" y="86">8</text>
    <text x="72" y="54">10</text>
  </g>
  <g font-size="11" fill="var(--ink-2)" text-anchor="middle">
    <text x="80" y="227">0</text>
    <text x="140" y="227">2</text>
    <text x="200" y="227">4</text>
    <text x="260" y="227">6</text>
    <text x="320" y="227">8</text>
    <text x="380" y="227">10</text>
    <text x="440" y="227">12</text>
    <text x="500" y="227">14</text>
  </g>
  <text x="290" y="248" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">Extension (cm)</text>
  <text x="24" y="130" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" transform="rotate(-90 24 130)">Force (N)</text>
</svg>`;

const PARALLEL_CIRCUIT_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel circuit with a 12 V battery, main ammeter A1, top branch resistor R1 of 6 ohms, and bottom branch ammeter A2 with resistor R2 of 4 ohms">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Parallel Circuit Diagram</text>
  <g stroke="var(--ink)" stroke-width="2.2" fill="none">
    <polyline points="88,108 88,68 145,68"/>
    <line x1="181" y1="68" x2="310" y2="68"/>
    <line x1="398" y1="68" x2="478" y2="68"/>
    <polyline points="235,68 235,164 274,164"/>
    <line x1="306" y1="164" x2="344" y2="164"/>
    <polyline points="432,164 478,164 478,68"/>
    <polyline points="478,164 478,220 88,220 88,154"/>
    <line x1="68" y1="108" x2="108" y2="108"/>
    <line x1="78" y1="120" x2="98" y2="120" stroke-width="4.5"/>
    <line x1="68" y1="142" x2="108" y2="142"/>
    <line x1="78" y1="154" x2="98" y2="154" stroke-width="4.5"/>
    <line x1="88" y1="120" x2="88" y2="142" stroke-dasharray="3 3"/>
  </g>
  <text x="48" y="136" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">12 V</text>
  <circle cx="163" cy="68" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/>
  <text x="163" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">A₁</text>
  <text x="163" y="43" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--brand)">Main current</text>
  <circle cx="235" cy="68" r="4" fill="var(--ink)"/>
  <circle cx="478" cy="164" r="4" fill="var(--ink)"/>
  <rect x="310" y="55" width="88" height="26" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="354" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">R₁ = 6 Ω</text>
  <circle cx="290" cy="164" r="16" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="290" y="169" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">A₂</text>
  <rect x="344" y="151" width="88" height="26" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="388" y="169" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">R₂ = 4 Ω</text>
</svg>`;

const IV_CURVES_SVG = `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three current against potential difference graphs: Graph X is a straight line through the origin, Graph Y is an S-shaped curve flattening at high voltage, and Graph Z is zero for negative voltage then rises sharply for positive voltage">
  <rect x="0" y="0" width="560" height="235" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Current (I) vs Potential Difference (V) Graphs</text>
  <g>
    <rect x="20" y="38" width="160" height="180" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="100" y="57" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Graph X</text>
    <line x1="36" y1="136" x2="164" y2="136" stroke="var(--ink-2)" stroke-width="1.5"/>
    <line x1="100" y1="72" x2="100" y2="200" stroke="var(--ink-2)" stroke-width="1.5"/>
    <text x="166" y="132" font-size="11" font-weight="700" fill="var(--ink-2)">V</text>
    <text x="106" y="79" font-size="11" font-weight="700" fill="var(--ink-2)">I</text>
    <line x1="48" y1="188" x2="152" y2="84" stroke="var(--brand)" stroke-width="3"/>
  </g>
  <g>
    <rect x="200" y="38" width="160" height="180" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="280" y="57" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Graph Y</text>
    <line x1="216" y1="136" x2="344" y2="136" stroke="var(--ink-2)" stroke-width="1.5"/>
    <line x1="280" y1="72" x2="280" y2="200" stroke="var(--ink-2)" stroke-width="1.5"/>
    <text x="346" y="132" font-size="11" font-weight="700" fill="var(--ink-2)">V</text>
    <text x="286" y="79" font-size="11" font-weight="700" fill="var(--ink-2)">I</text>
    <path d="M 224 170 Q 256 168 280 136 Q 304 104 336 102" fill="none" stroke="var(--brand)" stroke-width="3"/>
  </g>
  <g>
    <rect x="380" y="38" width="160" height="180" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="460" y="57" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Graph Z</text>
    <line x1="396" y1="136" x2="524" y2="136" stroke="var(--ink-2)" stroke-width="1.5"/>
    <line x1="460" y1="72" x2="460" y2="200" stroke="var(--ink-2)" stroke-width="1.5"/>
    <text x="526" y="132" font-size="11" font-weight="700" fill="var(--ink-2)">V</text>
    <text x="466" y="79" font-size="11" font-weight="700" fill="var(--ink-2)">I</text>
    <path d="M 404 136 L 474 136 Q 488 136 498 80" fill="none" stroke="var(--brand)" stroke-width="3"/>
  </g>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-phys",
  title: "Year 9 End-of-Year Physics Mock Paper",
  calculator: true,
  minutes: 45,
  questions: [
    // ── WARMUP (q01–q05) ────────────────────────────────────────────────────
    {
      id: "exam-phys-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "energy-and-efficiency",
      guideRef: "stores-transfers-conservation",
      question:
        "When an electric kettle boils cold water, energy is transferred usefully from the mains power supply to the water. Which description correctly names the transfer pathway and the final energy store of the water?",
      options: [
        "Mechanically into the kinetic store of the water",
        "Electrically into the thermal store of the water",
        "By radiation into the chemical store of the water",
        "By heating into the elastic store of the water",
      ],
      answerIndex: 1,
      hints: [
        "Think about the 4 energy pathways: mechanical, electrical, heating, and radiation.",
        "An electric current brings energy to the kettle, raising the water's temperature.",
      ],
      explanation:
        "Current flowing through the heating element transfers energy **electrically**, increasing the internal **thermal store** of the water. Heating water does not stretch it (elastic store) or store chemical fuel.",
    },
    {
      id: "exam-phys-q02",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "further-forces",
      guideRef: "resultant-forces-newton",
      question:
        "A heavy crate on a flat, level floor is pushed to the right with a force of 85 N while friction pulls to the left with a force of 25 N. What is the resultant force on the crate, and how does its motion change?",
      options: [
        "110 N to the right; it accelerates to the right",
        "60 N to the right; it moves at a steady speed",
        "60 N to the right; it accelerates to the right",
        "25 N to the left; it decelerates to a stop",
      ],
      answerIndex: 2,
      hints: [
        "Forces acting in opposite directions subtract to give the resultant force.",
        "By Newton's laws, a non-zero resultant force causes acceleration in the direction of that resultant force.",
      ],
      explanation:
        "Subtracting the opposing forces gives {{85 - 25 = 60}} N to the right. Because the forces are unbalanced (non-zero resultant), the crate **accelerates to the right** rather than moving at a steady speed.",
    },
    {
      id: "exam-phys-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "further-electricity",
      guideRef: "charge-current-pd",
      question:
        "A student wants to measure both the electric current passing through a fixed resistor and the potential difference across it. How must the ammeter and voltmeter be connected?",
      options: [
        "Ammeter in series with it and voltmeter in parallel",
        "Ammeter in parallel with it and voltmeter in series",
        "Both the ammeter and voltmeter connected in series",
        "Both the ammeter and voltmeter connected in parallel",
      ],
      answerIndex: 0,
      hints: [
        "An ammeter counts the charge flowing through a component, so the same current must pass through it.",
        "A voltmeter compares electrical potential energy before and after a component.",
      ],
      explanation:
        "An **ammeter** must be wired **in series** so all the component's current flows through it. A **voltmeter** must be wired **in parallel** across the component to measure the potential difference between its two ends.",
    },
    {
      id: "exam-phys-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "further-electricity",
      guideRef: "charge-current-pd",
      question:
        "A desk lamp draws a steady current of 0.35 A for 4 minutes. Calculate the total electric charge that flows through the lamp in this time, in coulombs (C).",
      answer: { type: "number", value: 84, display: "84 C" },
      traps: [
        {
          spec: { type: "number", value: 1.4, tolerance: 0.01 },
          feedback: "Convert 4 minutes into seconds first (multiply by 60) before using Q = I × t.",
        },
        {
          spec: { type: "number", value: 685.7, tolerance: 1 },
          feedback: "You divided time by current — charge is Q = I × t, not t ÷ I.",
        },
      ],
      hints: [
        "Convert the time from minutes into SI units (seconds).",
        "Use the charge equation {{Q = I * t}}.",
      ],
      solution: [
        "Convert time to seconds: {{t = 4 * 60 = 240}} s.",
        "Apply {{Q = I * t = 0.35 * 240 = 84}} C.",
      ],
      commonError: "Forgetting to convert minutes to seconds before multiplying by current.",
    },
    {
      id: "exam-phys-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "scientific-skills",
      guideRef: "variables-fair-testing",
      question:
        "A student wraps four identical metal beakers in different insulating materials (wool, bubble wrap, foil and cotton), pours 150 cm³ of 80 °C water into each, and records the temperature drop after 10 minutes. Which row correctly identifies the independent and dependent variables?",
      options: [
        "Independent: temperature drop; dependent: type of material",
        "Independent: volume of water; dependent: temperature drop",
        "Independent: type of material; dependent: cooling time",
        "Independent: type of material; dependent: temperature drop",
      ],
      answerIndex: 3,
      hints: [
        "The independent variable is the single factor the investigator deliberately changes.",
        "The dependent variable is the outcome measured to see the effect of that change.",
      ],
      explanation:
        "The student deliberately changes the **type of material** (independent variable) and measures the resulting **temperature drop** (dependent variable). Both water volume (150 cm³) and cooling time (10 minutes) are control variables kept constant.",
    },

    // ── CORE (q06–q19) ──────────────────────────────────────────────────────
    {
      id: "exam-phys-q06",
      kind: "short",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "sankey-efficiency",
      diagram: SANKEY_PUMP_SVG,
      question:
        "The Sankey diagram shows the energy transfers in an electric water pump each second. Calculate the percentage efficiency of the pump. Give your answer as a percentage (%).",
      answer: { type: "number", value: 65, display: "65%" },
      traps: [
        {
          spec: { type: "number", value: 35 },
          feedback: "35% is the wasted thermal percentage (280 ÷ 800). Efficiency uses the useful output (520 J).",
        },
        {
          spec: { type: "number", value: 0.65 },
          feedback: "0.65 is the decimal efficiency — multiply by 100 to give a percentage.",
        },
      ],
      hints: [
        "Identify the useful output energy (straight horizontal arrow) and the total input energy.",
        "Use {{efficiency = (useful / total) * 100%}}.",
      ],
      solution: [
        "Total input = 800 J and useful output = 520 J (so wasted thermal = {{800 - 520 = 280}} J).",
        "Percentage efficiency = {{(520 / 800) * 100 = 65}}%.",
      ],
      commonError: "Calculating the wasted percentage (35%) instead of the useful percentage (65%), or forgetting to multiply the decimal by 100.",
    },
    {
      id: "exam-phys-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "thermal-transfer",
      question:
        "A vacuum flask keeps hot soup warm for hours using a double-walled glass vessel with air removed between the walls and shiny silvered inner surfaces. How do these two features reduce thermal energy loss?",
      options: [
        "The vacuum stops radiation, and the shiny walls stop conduction",
        "The vacuum stops convection only, and shiny walls absorb infrared",
        "The vacuum stops conduction and convection; shiny walls reflect infrared",
        "The vacuum stops conduction only, and shiny walls emit infrared quickly",
      ],
      answerIndex: 2,
      hints: [
        "Conduction and convection both require particles (solids or fluids) to transfer thermal energy.",
        "Infrared radiation can travel across empty space, so surfaces must be poor emitters and strong reflectors.",
      ],
      explanation:
        "Because a **vacuum** contains no particles, it prevents both **conduction** and **convection**. **Shiny silvered surfaces** are poor emitters and good reflectors of **infrared radiation**, keeping radiant energy inside the flask.",
    },
    {
      id: "exam-phys-q08",
      kind: "short",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "work-power-resources",
      strategy: "Two-step formula chain",
      question:
        "A dockside crane lifts a steel girder using a steady upward force of 4 500 N through a vertical height of 12 m in 15 seconds. Calculate the useful power output of the crane, in watts (W).",
      answer: { type: "number", value: 3600, display: "3600 W" },
      traps: [
        {
          spec: { type: "number", value: 54000 },
          feedback: "54 000 J is the work done — now divide by the time (15 s) to find power in watts.",
        },
        {
          spec: { type: "number", value: 810000 },
          feedback: "Power is energy transferred divided by time (P = W ÷ t), not multiplied by time.",
        },
      ],
      hints: [
        "First calculate the work done lifting the girder using {{W = F * d}}.",
        "Then calculate power as the rate of doing work: {{P = W / t}}.",
      ],
      solution: [
        "Work done: {{W = F * d = 4500 * 12 = 54000}} J.",
        "Power output: {{P = W / t = 54000 / 15 = 3600}} W.",
      ],
      commonError: "Stopping after computing work done (54 000 J) instead of dividing by time to obtain power.",
    },
    {
      id: "exam-phys-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "resultant-forces-newton",
      question:
        "A cyclist pedals along a flat, straight road at a constant speed of 8.0 m/s. The combined air resistance and tyre friction acting backwards total 42 N. What are the forward driving force and resultant force on the cyclist?",
      options: [
        "Driving force greater than 42 N; resultant force forwards",
        "Driving force equal to 42 N; resultant force equal to 0 N",
        "Driving force equal to 0 N; resultant force 42 N backwards",
        "Driving force equal to 84 N; resultant force 42 N forwards",
      ],
      answerIndex: 1,
      hints: [
        "What does Newton's First Law say about an object moving at a constant velocity in a straight line?",
        "Constant speed in a straight line means zero acceleration, so opposing forces must cancel out.",
      ],
      explanation:
        "By Newton's First Law, moving at a **constant velocity** requires a **resultant force of 0 N**. Therefore the forward driving force must exactly balance the 42 N of drag and friction (driving force = **42 N**).",
    },
    {
      id: "exam-phys-q10",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "motion-graphs",
      diagram: VT_GRAPH_SVG,
      question:
        "The velocity–time graph shows the motion of an electric shuttle travelling between two stops. Calculate the acceleration of the shuttle during the first 8 seconds. Give the numerical value in m/s².",
      answer: { type: "number", value: 2.5, display: "2.5" },
      traps: [
        {
          spec: { type: "number", value: 80 },
          feedback: "80 m is the area under the first triangle (distance travelled). Acceleration is the gradient (change in velocity ÷ time).",
        },
        {
          spec: { type: "number", value: 0.4 },
          feedback: "You inverted the gradient (time ÷ velocity). Use a = (v − u) ÷ t.",
        },
        {
          spec: { type: "number", value: 160 },
          feedback: "Do not multiply velocity by time — divide change in velocity by time taken.",
        },
      ],
      hints: [
        "On a velocity–time graph, acceleration equals the gradient of the line.",
        "Read the velocity at {{t = 0}} s and at {{t = 8}} s, then apply {{a = (v - u) / t}}.",
      ],
      solution: [
        "From the graph, initial velocity {{u = 0}} m/s and velocity at {{t = 8}} s is {{v = 20}} m/s.",
        "Acceleration: {{a = (20 - 0) / 8 = 2.5}} m/s².",
      ],
      commonError: "Finding the area under the line (distance = 80 m) instead of the gradient (acceleration = 2.5 m/s²).",
    },
    {
      id: "exam-phys-q11",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "pressure-solids-fluids",
      question:
        "A loaded delivery van has a total weight of 24 000 N. Each of its 4 tyres has a contact area of 0.03 m² with the road. Calculate the pressure exerted by the van on the road, in pascals (Pa).",
      answer: { type: "number", value: 200000, display: "200000 Pa" },
      traps: [
        {
          spec: { type: "number", value: 800000 },
          feedback: "Remember the van rests on all 4 tyres, so multiply 0.03 m² by 4 to find total contact area first.",
        },
        {
          spec: { type: "number", value: 2880 },
          feedback: "Pressure is Force ÷ Area, not Force × Area.",
        },
      ],
      hints: [
        "Find the total contact area of all 4 tyres combined.",
        "Use the pressure equation {{P = F / A}} with force in newtons and total area in m².",
      ],
      solution: [
        "Total contact area of 4 tyres: {{A = 4 * 0.03 = 0.12}} m².",
        "Pressure: {{P = F / A = 24000 / 0.12 = 200000}} Pa.",
      ],
      commonError: "Using the contact area of only one tyre (0.03 m²) instead of all four tyres (0.12 m²).",
    },
    {
      id: "exam-phys-q12",
      kind: "mcq",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "sankey-efficiency",
      question:
        "An LED lamp receives 12 W of electrical power and transfers 9 W usefully as light. An older filament lamp receives 60 W of electrical power to produce the same 9 W of light. What are the percentage efficiencies of the two lamps?",
      options: [
        "LED lamp: 75% efficient; filament lamp: 15% efficient",
        "LED lamp: 25% efficient; filament lamp: 85% efficient",
        "LED lamp: 75% efficient; filament lamp: 60% efficient",
        "LED lamp: 15% efficient; filament lamp: 75% efficient",
      ],
      answerIndex: 0,
      hints: [
        "Efficiency compares useful power output to total power input: {{useful / input * 100%}}.",
        "Compute the ratio separately for the 12 W LED lamp and the 60 W filament lamp.",
      ],
      explanation:
        "For the LED lamp: {{(9 / 12) * 100 = 75}}%. For the filament lamp: {{(9 / 60) * 100 = 15}}%. Choosing 25% and 85% accidentally gives the percentage of energy wasted as heat.",
    },
    {
      id: "exam-phys-q13",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "moments-hookes-law",
      diagram: LEVER_MOMENTS_SVG,
      question:
        "The light beam (negligible mass) shown in the diagram is balanced in horizontal equilibrium about the pivot. Calculate the unknown downward force F required on the right side, in newtons (N).",
      answer: { type: "number", value: 300, display: "300 N" },
      traps: [
        {
          spec: { type: "number", value: 270 },
          feedback: "270 N m is the turning moment — now divide by the right-hand distance (0.9 m) to find force F.",
        },
        {
          spec: { type: "number", value: 108 },
          feedback: "Since F sits closer to the pivot than the 180 N load, F must be larger than 180 N, not smaller.",
        },
      ],
      hints: [
        "In equilibrium, total anticlockwise moment equals total clockwise moment.",
        "Set {{180 * 1.5 = F * 0.9}} and solve for F.",
      ],
      solution: [
        "Anticlockwise moment = {{180 * 1.5 = 270}} N m.",
        "Clockwise moment = {{F * 0.9 = 270}} N m.",
        "Therefore {{F = 270 / 0.9 = 300}} N.",
      ],
      commonError: "Dividing by the wrong distance or stopping after calculating the moment (270 N m).",
    },
    {
      id: "exam-phys-q14",
      kind: "written",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "resultant-forces-newton",
      marks: 4,
      question:
        "A skydiver steps out of a hovering balloon and falls vertically towards the ground. Before opening their parachute, they accelerate rapidly at first, then reach a steady maximum speed. Explain, in terms of forces, why the skydiver's motion changes in this way. (4 marks)",
      hints: [
        "Compare the two vertical forces acting on the skydiver right after stepping out.",
        "Describe how the upward resistive force changes as the skydiver falls faster.",
        "State what happens to the resultant force and acceleration once both forces match in size.",
      ],
      modelAnswer:
        "Initially, the skydiver's downward weight is much larger than air resistance, producing a big downward resultant force and rapid acceleration. As they fall faster, upward air resistance (drag) increases, reducing the resultant force and lowering acceleration. Eventually air resistance equals weight, so the vertical forces are balanced with zero resultant force. The skydiver stops accelerating and falls at a constant terminal velocity.",
      markScheme: [
        {
          point: "Initially, downward weight is greater than air resistance, giving a downward resultant force.",
          keywords: ["weight", "gravitational pull"],
        },
        {
          point: "As speed grows, upward air resistance (drag) increases, reducing the resultant force.",
          keywords: ["air resistance", "drag"],
        },
        {
          point: "Eventually air resistance equals weight so forces are balanced (zero resultant force).",
          keywords: ["balanced", "equals weight", "equal to weight", "zero resultant"],
        },
        {
          point: "Acceleration stops and the skydiver falls at a constant terminal velocity.",
          keywords: ["terminal velocity", "constant velocity", "constant speed"],
        },
      ],
      commonError: "Writing that gravity gets weaker or that the skydiver stops falling once forces are balanced (balanced forces mean constant velocity, not stopping).",
    },
    {
      id: "exam-phys-q15",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "moments-hookes-law",
      diagram: HOOKES_GRAPH_SVG,
      question:
        "The force–extension graph for a steel spring is shown above. Using the straight-line (elastic) region of the graph, calculate the spring constant k of the spring, in N/m.",
      answer: { type: "number", value: 80, display: "80 N/m" },
      traps: [
        {
          spec: { type: "number", value: 0.8 },
          feedback: "Convert extension from centimetres to metres (10 cm = 0.10 m) so the unit is N/m rather than N/cm.",
        },
        {
          spec: { type: "number", value: 65.7, tolerance: 0.5 },
          feedback: "Only use points on the linear region up to the limit of proportionality (8 N), not the curved plastic region.",
        },
      ],
      hints: [
        "Hooke's Law {{F = k * e}} only applies along the straight section up to the limit of proportionality.",
        "Convert the extension at 8 N from centimetres to metres (divide by 100).",
        "Rearrange to {{k = F / e}}.",
      ],
      solution: [
        "At the limit of proportionality on the linear section, {{F = 8}} N and {{e = 10}} cm.",
        "Convert extension to metres: {{e = 10 / 100 = 0.10}} m.",
        "Spring constant: {{k = F / e = 8 / 0.10 = 80}} N/m.",
      ],
      commonError: "Leaving extension in centimetres (giving 0.8 N/cm instead of 80 N/m) or reading from the curved section past the limit of proportionality.",
    },
    {
      id: "exam-phys-q16",
      kind: "mcq",
      difficulty: "core",
      topicId: "further-electricity",
      guideRef: "series-parallel-circuits",
      question:
        "A single 12 Ω resistor is connected across a 6 V battery. A second identical 12 Ω resistor is then connected in parallel with the first resistor across the same battery. What happens to the total resistance and the total current leaving the battery?",
      options: [
        "Total resistance increases and total current decreases",
        "Total resistance stays constant and total current doubles",
        "Total resistance doubles and total current stays constant",
        "Total resistance decreases and total current increases",
      ],
      answerIndex: 3,
      hints: [
        "Adding another parallel branch creates an extra pathway for electric charge to flow.",
        "Both branches still get the full 6 V from the battery, so current flows through both branches simultaneously.",
      ],
      explanation:
        "Adding a resistor **in parallel** gives charge an extra path, so **total resistance decreases** (from 12 Ω down to 6 Ω) and **total current increases** (from 0.5 A up to 1.0 A). Resistance only increases when resistors are added in series.",
    },
    {
      id: "exam-phys-q17",
      kind: "short",
      difficulty: "core",
      topicId: "further-electricity",
      guideRef: "resistance-ohms-law",
      question:
        "When a potential difference of 9.0 V is applied across a thermistor in warm water, an ammeter records a current of 0.15 A through it. Calculate the resistance of the thermistor at this temperature, in ohms.",
      answer: { type: "number", value: 60, display: "60 ohms" },
      traps: [
        {
          spec: { type: "number", value: 1.35 },
          feedback: "You multiplied V × I (which gives electrical power in watts). Resistance is R = V ÷ I.",
        },
        {
          spec: { type: "number", value: 0.017, tolerance: 0.002 },
          feedback: "You divided I ÷ V instead of V ÷ I.",
        },
      ],
      hints: [
        "Recall Ohm's Law: {{V = I * R}}.",
        "Rearrange the formula to make resistance {{R}} the subject.",
      ],
      solution: [
        "Rearrange {{V = I * R}} to get {{R = V / I}}.",
        "Substitute values: {{R = 9.0 / 0.15 = 60}} ohms.",
      ],
      commonError: "Multiplying potential difference by current (computing power) instead of dividing V by I.",
    },
    {
      id: "exam-phys-q18",
      kind: "short",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "diagrams-tables-calculations",
      question:
        "A student measures the current (in A) through a nichrome wire at 4.0 V four times to check repeatability:\n\n| Trial 1 | Trial 2 | Trial 3 | Trial 4 |\n|---|---|---|---|\n| 0.42 | 0.44 | 0.71 | 0.43 |\n\nIdentify and exclude the anomalous reading, then calculate the mean current (in A).",
      answer: { type: "number", value: 0.43, display: "0.43 A" },
      traps: [
        {
          spec: { type: "number", value: 0.5 },
          feedback: "0.50 A includes the anomalous result (0.71 A). Exclude anomalies before finding the mean.",
        },
      ],
      hints: [
        "Look for the single reading that lies far outside the cluster of the other three measurements.",
        "Add only the three concordant readings and divide by 3.",
      ],
      solution: [
        "Trial 3 (0.71 A) is an anomaly compared with 0.42, 0.44 and 0.43 A, so exclude it.",
        "Mean of the remaining three trials: {{(0.42 + 0.44 + 0.43) / 3 = 1.29 / 3 = 0.43}} A.",
      ],
      commonError: "Dividing the sum of all four readings by 4 without excluding the outlier.",
    },
    {
      id: "exam-phys-q19",
      kind: "mcq",
      difficulty: "core",
      topicId: "further-electricity",
      guideRef: "electrical-power-safety-static",
      question:
        "An electric toaster with a metal casing develops a fault so the live wire touches the metal body. Which combination of safety features inside a standard UK/Singapore 3-pin plug protects the user from electric shock?",
      options: [
        "Blue neutral wire attached to casing; fuse wired in the neutral lead",
        "Brown live wire attached to casing; fuse wired in the earth lead",
        "Green/yellow earth wire gives a low-resistance path; live fuse melts",
        "Green/yellow earth wire melts first; plastic grip carries the surge",
      ],
      answerIndex: 2,
      hints: [
        "Which coloured wire connects a metal appliance casing safely to the ground?",
        "A huge surge of current through the live wire causes a thin safety wire in that lead to melt and break the circuit.",
      ],
      explanation:
        "The **green/yellow earth wire** connected to the metal casing provides a **low-resistance path** to earth, drawing a large fault current that **melts the fuse in the brown live wire** and isolates the toaster.",
    },

    // ── CHALLENGE (q20–q25) ─────────────────────────────────────────────────
    {
      id: "exam-phys-q20",
      kind: "short",
      difficulty: "challenge",
      topicId: "further-electricity",
      guideRef: "series-parallel-circuits",
      diagram: PARALLEL_CIRCUIT_SVG,
      strategy: "Solve branch by branch",
      question:
        "In the parallel circuit shown, a 12 V battery supplies two resistors (R₁ = 6 Ω and R₂ = 4 Ω) in separate branches. Calculate the total current reading on ammeter A₁ in the main circuit, in amperes (A).",
      answer: { type: "number", value: 5, display: "5 A" },
      traps: [
        {
          spec: { type: "number", value: 1.2 },
          feedback: "1.2 A treats the resistors as in series (6 + 4 = 10 Ω). In parallel, each branch receives the full 12 V independently.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "2 A is only the current in the top 6 Ω branch — add the current in the bottom 4 Ω branch too.",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "3 A is only the current on ammeter A₂ in the bottom branch — add the top branch current as well.",
        },
      ],
      hints: [
        "In a parallel circuit, every branch receives the full potential difference of the battery (12 V).",
        "Use {{I = V / R}} to find the current in the 6 Ω branch and in the 4 Ω branch separately.",
        "Total current leaving the battery equals the sum of the currents in all parallel branches.",
      ],
      solution: [
        "Potential difference across each parallel branch is 12 V.",
        "Top branch current: {{I_1 = 12 / 6 = 2}} A.",
        "Bottom branch current: {{I_2 = 12 / 4 = 3}} A.",
        "Total current on ammeter A₁: {{I = 2 + 3 = 5}} A.",
      ],
      commonError: "Adding parallel resistances as if they were in series (6 + 4 = 10 Ω) instead of adding the branch currents.",
    },
    {
      id: "exam-phys-q21",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "further-electricity",
      guideRef: "resistance-ohms-law",
      diagram: IV_CURVES_SVG,
      question:
        "The diagram shows current–potential difference (I–V) characteristic graphs for three electrical components labelled X, Y and Z. Which row correctly identifies components X, Y and Z?",
      options: [
        "X: filament lamp; Y: ohmic resistor; Z: semiconductor diode",
        "X: ohmic resistor; Y: filament lamp; Z: semiconductor diode",
        "X: ohmic resistor; Y: semiconductor diode; Z: filament lamp",
        "X: semiconductor diode; Y: filament lamp; Z: ohmic resistor",
      ],
      answerIndex: 1,
      hints: [
        "An ohmic conductor at constant temperature has current directly proportional to potential difference.",
        "A filament lamp heats up at higher current, increasing resistance and flattening the I–V curve.",
        "A diode only allows current to flow easily in one forward direction.",
      ],
      explanation:
        "**Graph X** is a straight line through the origin (constant resistance: **ohmic resistor**). **Graph Y** flattens as the wire heats up and resistance rises (**filament lamp**). **Graph Z** blocks reverse current and conducts only in the forward direction (**semiconductor diode**).",
    },
    {
      id: "exam-phys-q22",
      kind: "short",
      difficulty: "challenge",
      topicId: "further-forces",
      guideRef: "motion-graphs",
      strategy: "Split into simple geometric shapes",
      question:
        "A sprinter starts from rest and accelerates uniformly for 4.0 s to reach a top speed of 10 m/s, holds 10 m/s steadily for the next 6.0 s, and then decelerates uniformly to rest over the final 2.0 s. Calculate the total distance the sprinter travels, in metres (m).",
      answer: { type: "number", value: 90, display: "90 m" },
      traps: [
        {
          spec: { type: "number", value: 120 },
          feedback: "120 m assumes the sprinter ran at 10 m/s for all 12 s. Use triangle areas (½ × base × height) for the acceleration and deceleration stages.",
        },
        {
          spec: { type: "number", value: 60 },
          feedback: "60 m is only the constant-speed middle stage — include the distances covered while accelerating and decelerating.",
        },
      ],
      hints: [
        "Sketch a velocity–time graph: distance travelled equals the total area under the graph.",
        "Split the graph into three shapes: an initial triangle (4.0 s), a middle rectangle (6.0 s), and a final triangle (2.0 s).",
        "Sum the three areas (or use the trapezium area formula).",
      ],
      solution: [
        "Acceleration triangle: {{1/2 * 4.0 * 10 = 20}} m.",
        "Constant-velocity rectangle: {{6.0 * 10 = 60}} m.",
        "Deceleration triangle: {{1/2 * 2.0 * 10 = 10}} m.",
        "Total distance: {{20 + 60 + 10 = 90}} m.",
      ],
      commonError: "Multiplying top speed by total time (10 × 12 = 120 m) instead of computing the area of the trapezium under the velocity–time graph.",
    },
    {
      id: "exam-phys-q23",
      kind: "written",
      difficulty: "challenge",
      topicId: "energy-and-efficiency",
      guideRef: "thermal-transfer",
      marks: 3,
      question:
        "A wall-mounted heater is fitted near the floor of a cool classroom and switched on. Explain how a convection current warms the air throughout the room. (3 marks)",
      hints: [
        "Start with what happens to the kinetic energy and spacing of air particles touching the hot surface.",
        "Link that volume change directly to density and vertical movement.",
        "Explain how a continuous loop forms across the whole space.",
      ],
      modelAnswer:
        "Air molecules beside the heater gain thermal energy, move faster and spread further apart so the warm air expands. Because this heated air becomes less dense than the surrounding colder air, it rises towards the ceiling. Cooler, denser air sinks down to replace it and gets heated in turn, creating a continuous circulating loop.",
      markScheme: [
        {
          point: "Heated air particles move faster and spread further apart (air expands).",
          keywords: ["expand", "spread apart", "further apart", "faster"],
        },
        {
          point: "Warm air becomes less dense and rises upwards.",
          keywords: ["less dense", "rises", "rising"],
        },
        {
          point: "Cooler, denser air sinks to replace it, forming a continuous circulating loop.",
          keywords: ["denser", "sinks", "sinking", "replace"],
        },
      ],
      commonError: "Writing 'heat rises' instead of explaining that warm fluid expands, becomes less dense, and rises while cooler denser fluid sinks.",
    },
    {
      id: "exam-phys-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "energy-and-efficiency",
      guideRef: "work-power-resources",
      marks: 4,
      question:
        "A coastal city plans to replace an ageing coal-fired power station and is choosing between building an offshore wind farm or a natural gas power station. Evaluate both options by giving two advantages of offshore wind and two advantages of natural gas. (4 marks)",
      hints: [
        "Consider sustainability (will the resource run out?) and greenhouse gas emissions during electricity generation.",
        "Contrast weather dependence with reliability and how quickly output can respond to sudden demand surges.",
      ],
      modelAnswer:
        "Offshore wind is renewable, so it will never run out, and it releases zero emissions of carbon dioxide while generating electricity, helping limit climate change. Natural gas is reliable because it produces electricity continuously regardless of weather conditions, and gas turbines have a quick start-up time to meet sudden surges in peak demand.",
      markScheme: [
        {
          point: "Offshore wind is a renewable energy resource that will not run out.",
          keywords: ["renewable", "not run out", "never run out", "never runs out"],
        },
        {
          point: "Offshore wind produces no carbon dioxide / greenhouse gas emissions during operation.",
          keywords: ["no carbon dioxide", "zero emissions", "no greenhouse", "carbon-free", "no co2"],
        },
        {
          point: "Natural gas is reliable and generates electricity continuously regardless of weather.",
          keywords: ["reliable", "weather", "continuously", "on demand", "constant output"],
        },
        {
          point: "Natural gas has a fast start-up time for peak demand (or emits less CO₂ than coal).",
          keywords: ["start-up", "startup", "quick", "peak demand", "less co2", "less carbon dioxide"],
        },
      ],
      commonError: "Saying wind energy is 'completely free' (turbines have high construction and maintenance costs) or claiming natural gas produces no carbon dioxide.",
    },
    {
      id: "exam-phys-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "evaluating-techniques",
      marks: 3,
      question:
        "A student investigates how the extension of a steel spring depends on the suspended load. Before adding any masses, they notice their ruler's 0 cm mark sits 0.4 cm above the bottom of the unstretched spring, yet they still read directly off the scale for every load. State the type of error caused, explain how it affects their readings, and suggest one practical improvement to make the measurements more accurate. (3 marks)",
      hints: [
        "Errors that shift every measurement consistently in one direction have a specific scientific name.",
        "Think about whether every recorded length will be consistently too large or randomly scattered.",
        "Name a concrete lab adjustment using a pointer, set square, eye-level viewing, or subtraction.",
      ],
      modelAnswer:
        "This causes a systematic zero error. Every measurement recorded will be shifted by the same amount and be consistently too high, reducing accuracy. To improve accuracy, attach a horizontal pointer to the bottom of the spring, realign the zero mark with a set square at eye level to prevent parallax, or subtract the starting value from every reading.",
      markScheme: [
        {
          point: "Identifies the flaw as a systematic error (or zero error).",
          keywords: ["systematic", "zero error"],
        },
        {
          point: "Explains that every reading is shifted by the same fixed amount (consistently too high).",
          keywords: ["same amount", "fixed amount", "too high", "too large", "consistently high", "shifted"],
        },
        {
          point: "Suggests a concrete improvement (pointer, set square, eye level / parallax check, realigning zero, or subtracting initial position).",
          keywords: ["pointer", "set square", "eye level", "parallax", "realign", "subtract"],
        },
      ],
      commonError: "Calling a constant scale offset a 'human error' or 'random error' instead of a systematic zero error, or vaguely saying 'be more careful'.",
    },
  ],
};
