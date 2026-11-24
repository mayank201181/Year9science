import type { ExamPaper } from "../types";

const LEAF_SECTION_SVG = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section diagram of a green leaf showing labelled layers P at the top waxy surface, Q packed column cells below the upper epidermis, R loosely arranged cells with air spaces, and S a pore flanked by two curved cells on the underside">
  <rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="245" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Microscope Cross-Section of a Green Leaf</text>
  <g stroke="var(--brand)" stroke-width="1.8">
    <line x1="150" y1="29" x2="150" y2="43"/>
    <polygon points="150,45 146,38 154,38" fill="var(--brand)"/>
    <line x1="245" y1="29" x2="245" y2="43"/>
    <polygon points="245,45 241,38 249,38" fill="var(--brand)"/>
    <line x1="340" y1="29" x2="340" y2="43"/>
    <polygon points="340,45 336,38 344,38" fill="var(--brand)"/>
  </g>
  <text x="106" y="39" font-size="11" font-weight="600" fill="var(--brand)">Sunlight</text>
  <rect x="75" y="47" width="340" height="9" fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="1.5"/>
  <g fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4">
    <rect x="75" y="56" width="68" height="20"/>
    <rect x="143" y="56" width="68" height="20"/>
    <rect x="211" y="56" width="68" height="20"/>
    <rect x="279" y="56" width="68" height="20"/>
    <rect x="347" y="56" width="68" height="20"/>
  </g>
  <g fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="1.5">
    <rect x="81" y="76" width="38" height="62" rx="5"/>
    <rect x="123" y="76" width="38" height="62" rx="5"/>
    <rect x="165" y="76" width="38" height="62" rx="5"/>
    <rect x="207" y="76" width="38" height="62" rx="5"/>
    <rect x="249" y="76" width="38" height="62" rx="5"/>
    <rect x="291" y="76" width="38" height="62" rx="5"/>
    <rect x="333" y="76" width="38" height="62" rx="5"/>
    <rect x="375" y="76" width="34" height="62" rx="5"/>
  </g>
  <g fill="var(--good)">
    <circle cx="94" cy="91" r="3.5"/><circle cx="107" cy="107" r="3.5"/><circle cx="95" cy="123" r="3.5"/>
    <circle cx="136" cy="92" r="3.5"/><circle cx="149" cy="109" r="3.5"/><circle cx="137" cy="124" r="3.5"/>
    <circle cx="178" cy="90" r="3.5"/><circle cx="191" cy="106" r="3.5"/><circle cx="179" cy="122" r="3.5"/>
    <circle cx="220" cy="93" r="3.5"/><circle cx="233" cy="110" r="3.5"/><circle cx="221" cy="125" r="3.5"/>
    <circle cx="262" cy="91" r="3.5"/><circle cx="275" cy="108" r="3.5"/><circle cx="263" cy="123" r="3.5"/>
    <circle cx="304" cy="92" r="3.5"/><circle cx="317" cy="108" r="3.5"/><circle cx="305" cy="124" r="3.5"/>
    <circle cx="346" cy="91" r="3.5"/><circle cx="359" cy="109" r="3.5"/><circle cx="347" cy="123" r="3.5"/>
    <circle cx="388" cy="92" r="3.5"/><circle cx="397" cy="111" r="3.5"/><circle cx="389" cy="124" r="3.5"/>
  </g>
  <rect x="75" y="138" width="340" height="66" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/>
  <g fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="1.5">
    <ellipse cx="108" cy="162" rx="22" ry="15"/>
    <ellipse cx="168" cy="176" rx="21" ry="15"/>
    <ellipse cx="225" cy="158" rx="20" ry="14"/>
    <ellipse cx="294" cy="175" rx="22" ry="15"/>
    <ellipse cx="358" cy="161" rx="22" ry="15"/>
    <ellipse cx="132" cy="188" rx="18" ry="11"/>
    <ellipse cx="378" cy="188" rx="19" ry="11"/>
  </g>
  <text x="245" y="191" text-anchor="middle" font-size="11" font-style="italic" fill="var(--ink-2)">Air spaces</text>
  <g fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4">
    <rect x="75" y="204" width="74" height="20"/>
    <rect x="149" y="204" width="66" height="20"/>
    <rect x="277" y="204" width="68" height="20"/>
    <rect x="345" y="204" width="70" height="20"/>
  </g>
  <ellipse cx="229" cy="214" rx="12" ry="9" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="1.8"/>
  <ellipse cx="263" cy="214" rx="12" ry="9" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="246" y="244" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Lower surface</text>
  <g stroke="var(--ink)" stroke-width="1.5">
    <line x1="415" y1="51" x2="458" y2="51"/>
    <line x1="415" y1="107" x2="458" y2="107"/>
    <line x1="415" y1="170" x2="458" y2="170"/>
    <polyline points="275,220 428,220 458,220" fill="none"/>
  </g>
  <g font-size="15" font-weight="700" fill="var(--brand)">
    <text x="468" y="56">P</text>
    <text x="468" y="112">Q</text>
    <text x="468" y="175">R</text>
    <text x="468" y="225">S</text>
  </g>
</svg>`;

const QUADRAT_FIELD_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gippsland meadow fieldwork map measuring 12 m by 10 m containing five random 1 m by 1 m quadrats with plant counts Q1 equals 4, Q2 equals 6, Q3 equals 5, Q4 equals 7, and Q5 equals 3">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="235" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Gippsland Meadow: Random Quadrat Sampling</text>
  <text x="235" y="42" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">12 m</text>
  <text x="28" y="134" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)" transform="rotate(-90 28 134)">10 m</text>
  <rect x="52" y="50" width="366" height="170" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <g>
    <rect x="78" y="68" width="48" height="48" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="92" cy="82" r="3.5" fill="var(--good)"/><circle cx="112" cy="82" r="3.5" fill="var(--good)"/>
    <circle cx="92" cy="102" r="3.5" fill="var(--good)"/><circle cx="112" cy="102" r="3.5" fill="var(--good)"/>
    <text x="102" y="130" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Q1: 4</text>
  </g>
  <g>
    <rect x="196" y="64" width="48" height="48" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="208" cy="76" r="3.5" fill="var(--good)"/><circle cx="220" cy="76" r="3.5" fill="var(--good)"/><circle cx="232" cy="76" r="3.5" fill="var(--good)"/>
    <circle cx="208" cy="98" r="3.5" fill="var(--good)"/><circle cx="220" cy="98" r="3.5" fill="var(--good)"/><circle cx="232" cy="98" r="3.5" fill="var(--good)"/>
    <text x="220" y="126" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Q2: 6</text>
  </g>
  <g>
    <rect x="330" y="74" width="48" height="48" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="342" cy="86" r="3.5" fill="var(--good)"/><circle cx="366" cy="86" r="3.5" fill="var(--good)"/>
    <circle cx="354" cy="98" r="3.5" fill="var(--good)"/>
    <circle cx="342" cy="110" r="3.5" fill="var(--good)"/><circle cx="366" cy="110" r="3.5" fill="var(--good)"/>
    <text x="354" y="136" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Q3: 5</text>
  </g>
  <g>
    <rect x="128" y="148" width="48" height="48" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="140" cy="160" r="3.5" fill="var(--good)"/><circle cx="152" cy="160" r="3.5" fill="var(--good)"/><circle cx="164" cy="160" r="3.5" fill="var(--good)"/>
    <circle cx="152" cy="172" r="3.5" fill="var(--good)"/>
    <circle cx="140" cy="184" r="3.5" fill="var(--good)"/><circle cx="152" cy="184" r="3.5" fill="var(--good)"/><circle cx="164" cy="184" r="3.5" fill="var(--good)"/>
    <text x="152" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Q4: 7</text>
  </g>
  <g>
    <rect x="274" y="148" width="48" height="48" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="288" cy="164" r="3.5" fill="var(--good)"/><circle cx="308" cy="164" r="3.5" fill="var(--good)"/>
    <circle cx="298" cy="182" r="3.5" fill="var(--good)"/>
    <text x="298" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Q5: 3</text>
  </g>
  <rect x="434" y="52" width="112" height="168" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="490" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Quadrat Data</text>
  <text x="490" y="92" text-anchor="middle" font-size="11" fill="var(--ink-2)">Each square = 1 m²</text>
  <g font-size="12" fill="var(--ink)" text-anchor="middle">
    <text x="490" y="116">Q1 = 4 plants</text>
    <text x="490" y="136">Q2 = 6 plants</text>
    <text x="490" y="156">Q3 = 5 plants</text>
    <text x="490" y="176">Q4 = 7 plants</text>
    <text x="490" y="196">Q5 = 3 plants</text>
  </g>
</svg>`;

const CHROMATOGRAM_SVG = `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paper chromatogram with pencil baseline at 0.0 cm, solvent front at 8.0 cm, Ink X with spots at 2.4 cm and 5.6 cm, Dye A at 2.4 cm, Dye B at 4.0 cm, and Dye C at 5.6 cm">
  <rect x="0" y="0" width="560" height="265" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="295" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Paper Chromatogram of Food Colourings</text>
  <line x1="92" y1="50" x2="92" y2="210" stroke="var(--ink)" stroke-width="1.8"/>
  <g stroke="var(--ink)" stroke-width="1.4">
    <line x1="84" y1="50" x2="92" y2="50"/>
    <line x1="84" y1="90" x2="92" y2="90"/>
    <line x1="84" y1="130" x2="92" y2="130"/>
    <line x1="84" y1="170" x2="92" y2="170"/>
    <line x1="84" y1="210" x2="92" y2="210"/>
  </g>
  <g font-size="11" fill="var(--ink-2)" text-anchor="end">
    <text x="80" y="54">8.0 cm</text>
    <text x="80" y="94">6.0 cm</text>
    <text x="80" y="134">4.0 cm</text>
    <text x="80" y="174">2.0 cm</text>
    <text x="80" y="214">0.0 cm</text>
  </g>
  <rect x="122" y="36" width="356" height="202" rx="4" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="122" y1="50" x2="478" y2="50" stroke="var(--info)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="486" y="54" font-size="11.5" font-weight="700" fill="var(--info)">Solvent front</text>
  <text x="486" y="68" font-size="11" fill="var(--ink-2)">(8.0 cm)</text>
  <line x1="122" y1="210" x2="478" y2="210" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="486" y="208" font-size="11" font-weight="600" fill="var(--ink)">Pencil line</text>
  <text x="486" y="222" font-size="11" fill="var(--ink-2)">(0.0 cm)</text>
  <line x1="122" y1="98" x2="478" y2="98" stroke="var(--brand)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <text x="486" y="102" font-size="11.5" font-weight="700" fill="var(--brand)">5.6 cm</text>
  <circle cx="176" cy="162" r="8" fill="var(--bad)" stroke="var(--ink)" stroke-width="1.3"/>
  <circle cx="176" cy="98" r="8" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.3"/>
  <circle cx="258" cy="162" r="8" fill="var(--bad)" stroke="var(--ink)" stroke-width="1.3"/>
  <circle cx="340" cy="130" r="8" fill="var(--accent)" stroke="var(--ink)" stroke-width="1.3"/>
  <circle cx="422" cy="98" r="8" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.3"/>
  <text x="258" y="182" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">2.4 cm</text>
  <text x="340" y="150" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">4.0 cm</text>
  <g font-size="12.5" font-weight="700" fill="var(--ink)" text-anchor="middle">
    <text x="176" y="228">Ink X</text>
    <text x="258" y="228">Dye A</text>
    <text x="340" y="228">Dye B</text>
    <text x="422" y="228">Dye C</text>
  </g>
</svg>`;

const FRACTIONATING_COLUMN_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fractional distillation column heated to 350 degrees Celsius at the bottom and cooled to 25 degrees Celsius at the top, with outlet pipes W at the top, X and Y in the middle, and Z at the bottom">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Fractional Distillation Column for Crude Oil</text>
  <rect x="218" y="38" width="110" height="194" rx="18" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <g stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="6 4">
    <line x1="224" y1="84" x2="322" y2="84"/>
    <line x1="224" y1="132" x2="322" y2="132"/>
    <line x1="224" y1="180" x2="322" y2="180"/>
  </g>
  <rect x="52" y="188" width="166" height="24" rx="4" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="135" y="204" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Crude oil vapour in</text>
  <polygon points="214,200 202,194 202,206" fill="var(--bad)"/>
  <rect x="64" y="46" width="128" height="28" rx="6" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.5"/>
  <text x="128" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">Cool top (~25 °C)</text>
  <rect x="64" y="142" width="128" height="28" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="128" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Hot base (~350 °C)</text>
  <g stroke="var(--ink)" stroke-width="2.2">
    <line x1="328" y1="60" x2="404" y2="60"/>
    <line x1="328" y1="108" x2="404" y2="108"/>
    <line x1="328" y1="156" x2="404" y2="156"/>
    <line x1="328" y1="204" x2="404" y2="204"/>
  </g>
  <g fill="var(--brand)">
    <polygon points="410,60 400,55 400,65"/>
    <polygon points="410,108 400,103 400,113"/>
    <polygon points="410,156 400,151 400,161"/>
    <polygon points="410,204 400,199 400,209"/>
  </g>
  <g font-size="13" font-weight="700" fill="var(--ink)">
    <text x="422" y="65">Fraction W</text>
    <text x="422" y="113">Fraction X</text>
    <text x="422" y="161">Fraction Y</text>
    <text x="422" y="209">Fraction Z</text>
  </g>
</svg>`;

const COOLING_CURVES_SVG = `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature against time cooling graph starting at 80 degrees Celsius showing Curve A dropping rapidly to 52 degrees Celsius and Curve B cooling slowly to 68 degrees Celsius over 10 minutes">
  <rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="290" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Cooling Curves of Two Identical Metal Cans</text>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="80" y1="50" x2="500" y2="50"/>
    <line x1="80" y1="90" x2="500" y2="90"/>
    <line x1="80" y1="130" x2="500" y2="130"/>
    <line x1="80" y1="170" x2="500" y2="170"/>
    <line x1="164" y1="50" x2="164" y2="210"/>
    <line x1="248" y1="50" x2="248" y2="210"/>
    <line x1="332" y1="50" x2="332" y2="210"/>
    <line x1="416" y1="50" x2="416" y2="210"/>
    <line x1="500" y1="50" x2="500" y2="210"/>
  </g>
  <line x1="80" y1="210" x2="512" y2="210" stroke="var(--ink)" stroke-width="2"/>
  <line x1="80" y1="210" x2="80" y2="40" stroke="var(--ink)" stroke-width="2"/>
  <path d="M 80 50 Q 260 76 500 98" fill="none" stroke="var(--info)" stroke-width="3.2" stroke-dasharray="7 4"/>
  <path d="M 80 50 Q 250 116 500 162" fill="none" stroke="var(--bad)" stroke-width="3.2"/>
  <circle cx="80" cy="50" r="4" fill="var(--ink)"/>
  <circle cx="500" cy="98" r="4" fill="var(--info)"/>
  <circle cx="500" cy="162" r="4" fill="var(--bad)"/>
  <text x="438" y="83" font-size="12.5" font-weight="700" fill="var(--info)">Curve B</text>
  <text x="438" y="148" font-size="12.5" font-weight="700" fill="var(--bad)">Curve A</text>
  <g font-size="11" fill="var(--ink-2)" text-anchor="end">
    <text x="72" y="214">40</text>
    <text x="72" y="174">50</text>
    <text x="72" y="134">60</text>
    <text x="72" y="94">70</text>
    <text x="72" y="54">80</text>
  </g>
  <g font-size="11" fill="var(--ink-2)" text-anchor="middle">
    <text x="80" y="227">0</text>
    <text x="164" y="227">2</text>
    <text x="248" y="227">4</text>
    <text x="332" y="227">6</text>
    <text x="416" y="227">8</text>
    <text x="500" y="227">10</text>
  </g>
  <text x="290" y="246" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">Time (min)</text>
  <text x="24" y="130" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" transform="rotate(-90 24 130)">Temperature (°C)</text>
</svg>`;

const OHMS_PRACTICAL_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit diagram for measuring resistance R containing a battery, variable resistor, ammeter reading 0.40 A in series, fixed resistor R, and voltmeter reading 3.2 V connected in parallel across R">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Resistance Investigation Circuit</text>
  <g stroke="var(--ink)" stroke-width="2.2" fill="none">
    <polyline points="150,58 85,58 85,152 155,152"/>
    <line x1="184" y1="58" x2="322" y2="58"/>
    <polyline points="402,58 475,58 475,152 400,152"/>
    <line x1="191" y1="152" x2="312" y2="152"/>
    <polyline points="282,152 282,212 338,212"/>
    <polyline points="374,212 430,212 430,152"/>
    <line x1="150" y1="40" x2="150" y2="76"/>
    <line x1="162" y1="48" x2="162" y2="68" stroke-width="4.5"/>
    <line x1="172" y1="40" x2="172" y2="76"/>
    <line x1="184" y1="48" x2="184" y2="68" stroke-width="4.5"/>
  </g>
  <rect x="322" y="46" width="80" height="24" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <line x1="336" y1="78" x2="388" y2="38" stroke="var(--brand)" stroke-width="2.2"/>
  <polygon points="392,35 381,37 387,45" fill="var(--brand)"/>
  <text x="362" y="92" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink-2)">Variable resistor</text>
  <circle cx="173" cy="152" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/>
  <text x="173" y="157" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">A</text>
  <text x="173" y="188" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">0.40 A</text>
  <rect x="312" y="139" width="88" height="26" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="356" y="157" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">R</text>
  <circle cx="282" cy="152" r="4" fill="var(--ink)"/>
  <circle cx="430" cy="152" r="4" fill="var(--ink)"/>
  <circle cx="356" cy="212" r="18" fill="var(--info-soft)" stroke="var(--info)" stroke-width="2.2"/>
  <text x="356" y="217" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">V</text>
  <text x="458" y="217" text-anchor="start" font-size="13" font-weight="700" fill="var(--info)">3.2 V</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-skills",
  title: "Year 9 Combined Science & Practical Skills Paper",
  calculator: true,
  minutes: 45,
  questions: [
    // ── WARMUP (q01–q05) ────────────────────────────────────────────────────
    {
      id: "exam-skills-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "scientific-skills",
      guideRef: "graphing-conclusions",
      question:
        "A Year 9 class investigates how the form of marble chips (categoric: large lumps, small chips, fine powder) affects the volume of carbon dioxide collected in 60 seconds. Which type of graph should they draw, and on which axis should the marble chip form be placed?",
      options: [
        "A line graph with marble chip form placed on the y-axis",
        "A bar chart with marble chip form placed on the x-axis",
        "A bar chart with volume of gas placed on the x-axis",
        "A scatter graph with marble chip form placed on the y-axis",
      ],
      answerIndex: 1,
      hints: [
        "Check whether the independent variable is continuous (numerical) or categoric (named groups).",
        "By scientific convention, the independent variable always goes on the horizontal x-axis.",
      ],
      explanation:
        "Because marble chip form is a **categoric** independent variable, a **bar chart** is used, and the independent variable always goes on the **x-axis** (with the dependent variable, gas volume, on the y-axis).",
    },
    {
      id: "exam-skills-q02",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "dna-and-evolution",
      guideRef: "dna-genes-chromosomes",
      question:
        "A human body cell nucleus contains 46 chromosomes arranged in 23 pairs. A short section of one DNA strand reads A-T-G-C-C-A. How many chromosomes are inside a human egg cell, and what is the complementary DNA strand sequence?",
      options: [
        "46 chromosomes, with complementary strand T-A-C-G-G-T",
        "23 chromosomes, with complementary strand A-T-G-C-C-A",
        "23 chromosomes, with complementary strand T-A-C-G-G-T",
        "23 chromosomes, with complementary strand C-G-T-A-A-C",
      ],
      answerIndex: 2,
      hints: [
        "Gametes (sperm and egg cells) contain half the number of chromosomes of a normal body cell.",
        "In DNA base pairing, A always pairs with T, and C always pairs with G.",
      ],
      explanation:
        "A human gamete (egg cell) carries **23 single chromosomes** (half of 46). Applying complementary base pairing (A↔T and C↔G) turns A-T-G-C-C-A into **T-A-C-G-G-T**.",
    },
    {
      id: "exam-skills-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "botany",
      guideRef: "leaf-structure-cells",
      diagram: LEAF_SECTION_SVG,
      question:
        "The diagram shows a cross-section through a green leaf viewed under a microscope. Which row correctly matches structures Q and S to their primary functions?",
      options: [
        "Q: absorbs light for photosynthesis; S: controls gas exchange",
        "Q: stops water loss by evaporation; S: carries dissolved sugar",
        "Q: transports water from roots; S: traps light in chloroplasts",
        "Q: stores starch in air spaces; S: anchors leaf to the stem",
      ],
      answerIndex: 0,
      hints: [
        "Look closely at Q: tall, tightly packed cells near the upper surface filled with dark green dots.",
        "Look at S on the lower surface: two curved guard cells surrounding a small pore.",
      ],
      explanation:
        "**Q** is the **palisade mesophyll**, packed with chloroplasts to **absorb maximum sunlight for photosynthesis**. **S** shows **guard cells and a stoma**, which open and close to **control gas exchange** and water vapour loss.",
    },
    {
      id: "exam-skills-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "periodic-table",
      guideRef: "atomic-structure-shells",
      question:
        "A periodic table tile for phosphorus shows atomic number 15 and mass number 31. How many neutrons are in the nucleus of a phosphorus-31 atom?",
      answer: { type: "number", value: 16, display: "16" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 is the atomic number (protons). Subtract protons from the mass number to find neutrons.",
        },
        {
          spec: { type: "number", value: 46 },
          feedback: "Mass number is protons + neutrons, so subtract 15 from 31 rather than adding them.",
        },
      ],
      hints: [
        "Atomic number = number of protons; mass number = protons + neutrons.",
        "Subtract the atomic number from the mass number.",
      ],
      solution: [
        "Number of protons = atomic number = 15.",
        "Number of neutrons = mass number − atomic number = {{31 - 15 = 16}}.",
      ],
      commonError: "Confusing atomic number with neutron count, or adding mass number and atomic number together.",
    },
    {
      id: "exam-skills-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "making-and-purifying",
      guideRef: "chemical-gas-tests",
      question:
        "During two practical reactions, a student collects Gas X (which relights a glowing wooden splint) and Gas Y (which turns limewater milky when bubbled through it). What are Gas X and Gas Y?",
      options: [
        "Gas X is hydrogen and Gas Y is carbon dioxide",
        "Gas X is oxygen and Gas Y is chlorine gas",
        "Gas X is carbon dioxide and Gas Y is oxygen",
        "Gas X is oxygen and Gas Y is carbon dioxide",
      ],
      answerIndex: 3,
      hints: [
        "Recall the positive test for oxygen vs hydrogen (glowing splint vs lit splint).",
        "Limewater is aqueous calcium hydroxide, which reacts with one specific gas to form a cloudy white precipitate.",
      ],
      explanation:
        "**Oxygen** relights a glowing splint (hydrogen gives a squeaky pop with a lit splint). **Carbon dioxide** turns limewater milky/cloudy.",
    },

    // ── CORE (q06–q19) ──────────────────────────────────────────────────────
    {
      id: "exam-skills-q06",
      kind: "short",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "work-power-resources",
      question:
        "In a water-heating practical, a 50 W electrical immersion heater is switched on in a beaker of water for 3 minutes. Calculate the total electrical energy transferred to the heater, in joules (J).",
      answer: { type: "number", value: 9000, display: "9000 J" },
      traps: [
        {
          spec: { type: "number", value: 150 },
          feedback: "Convert 3 minutes into seconds (multiply by 60) before using E = P × t.",
        },
        {
          spec: { type: "number", value: 3.6 },
          feedback: "You divided time by power instead of multiplying power by time.",
        },
      ],
      hints: [
        "Power in watts means joules per second, so time must be converted to seconds.",
        "Use {{E = P * t}}.",
      ],
      solution: [
        "Convert time to seconds: {{t = 3 * 60 = 180}} s.",
        "Energy transferred: {{E = P * t = 50 * 180 = 9000}} J.",
      ],
      commonError: "Using time in minutes instead of converting to seconds.",
    },
    {
      id: "exam-skills-q07",
      kind: "short",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "diagrams-tables-calculations",
      question:
        "A student times how long it takes for a pencil cross under a conical flask to disappear during a reaction at 30 °C:\n\n| Repeat 1 (s) | Repeat 2 (s) | Repeat 3 (s) | Repeat 4 (s) |\n|---|---|---|---|\n| 24 | 26 | 41 | 25 |\n\nExclude the anomalous result and calculate the mean reaction time, in seconds (s).",
      answer: { type: "number", value: 25, display: "25 s" },
      traps: [
        {
          spec: { type: "number", value: 29 },
          feedback: "29 s includes the anomaly (41 s). Remove outliers before calculating the mean.",
        },
      ],
      hints: [
        "Spot the single measurement that does not fit the close cluster of the other three trials.",
        "Sum only the remaining three trials and divide by 3.",
      ],
      solution: [
        "Repeat 3 (41 s) is clearly anomalous compared with 24, 26 and 25 s, so discard it.",
        "Mean = {{(24 + 26 + 25) / 3 = 75 / 3 = 25}} s.",
      ],
      commonError: "Including the anomalous value when computing the mean.",
    },
    {
      id: "exam-skills-q08",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "pressure-solids-fluids",
      question:
        "A rectangular brass block has a weight of 36 N and rests flat on a laboratory bench on a rectangular face measuring 4.0 cm by 3.0 cm. Calculate the pressure the block exerts on the bench, in N/cm².",
      answer: { type: "number", value: 3, display: "3 N/cm²" },
      traps: [
        {
          spec: { type: "number", value: 432 },
          feedback: "Pressure is Force ÷ Area, not Force × Area.",
        },
        {
          spec: { type: "number", value: 9 },
          feedback: "Find the contact area by multiplying length × width (4.0 × 3.0) before dividing.",
        },
      ],
      hints: [
        "First find the area of the rectangular base in cm².",
        "Then calculate pressure using {{P = F / A}}.",
      ],
      solution: [
        "Contact area: {{A = 4.0 * 3.0 = 12}} cm².",
        "Pressure: {{P = F / A = 36 / 12 = 3}} N/cm².",
      ],
      commonError: "Dividing by a single side length instead of the full rectangular area, or multiplying force by area.",
    },
    {
      id: "exam-skills-q09",
      kind: "short",
      difficulty: "core",
      topicId: "botany",
      guideRef: "reproduction-fieldwork",
      diagram: QUADRAT_FIELD_SVG,
      strategy: "Scale up from sample mean",
      question:
        "During Year 9 Gippsland fieldwork, students place five random 1 m × 1 m quadrats across a 12 m × 10 m meadow and count the native wildflowers in each square as shown. Estimate the total wildflower population across the entire meadow.",
      answer: { type: "number", value: 600, display: "600" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25 is only the total counted inside the 5 quadrats. Find the mean per m² and multiply by the total meadow area.",
        },
        {
          spec: { type: "number", value: 5 },
          feedback: "5 is the mean number of plants per 1 m² quadrat — now multiply by the total area of the 12 m × 10 m meadow.",
        },
        {
          spec: { type: "number", value: 3000 },
          feedback: "You multiplied the sum of 5 quadrats (25) by 120 m² — divide by 5 first to get the mean per m².",
        },
      ],
      hints: [
        "First find the mean number of plants per 1 m² quadrat across all 5 quadrats.",
        "Calculate the total area of the 12 m × 10 m meadow in m².",
        "Multiply the mean per m² by the total meadow area.",
      ],
      solution: [
        "Mean per 1 m² quadrat = {{(4 + 6 + 5 + 7 + 3) / 5 = 25 / 5 = 5}} plants/m².",
        "Total meadow area = {{12 * 10 = 120}} m².",
        "Estimated population = {{5 * 120 = 600}} wildflowers.",
      ],
      commonError: "Stopping at the sample mean (5) or multiplying the total count across 5 quadrats (25) by the total field area.",
    },
    {
      id: "exam-skills-q10",
      kind: "short",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "distillation-chromatography",
      diagram: CHROMATOGRAM_SVG,
      question:
        "A student analyses food colouring Ink X alongside pure reference dyes A, B and C using paper chromatography, obtaining the chromatogram shown. Calculate the R_f value of Dye C (which moved 5.6 cm while the solvent front moved 8.0 cm). Give your answer as a decimal.",
      answer: { type: "number", value: 0.7, allowFraction: false, display: "0.7" },
      traps: [
        {
          spec: { type: "number", value: 1.43, tolerance: 0.02 },
          feedback: "R_f values are always ≤ 1. Divide spot distance by solvent distance, not solvent ÷ spot.",
        },
        {
          spec: { type: "number", value: 0.3 },
          feedback: "0.3 is the R_f value of Dye A (2.4 ÷ 8.0). Use Dye C's distance (5.6 cm).",
        },
      ],
      hints: [
        "Recall the retention factor formula: {{R_f = " + '"distance moved by spot"' + " / " + '"distance moved by solvent"' + "}}.",
        "Make sure both distances are measured from the pencil baseline (0.0 cm) and your answer is less than 1.",
      ],
      solution: [
        "Spot distance for Dye C = 5.6 cm; solvent front distance = 8.0 cm.",
        "{{R_f = 5.6 / 8.0 = 0.7}}.",
      ],
      commonError: "Inverting the fraction (solvent ÷ spot), which gives a value greater than 1.",
    },
    {
      id: "exam-skills-q11",
      kind: "short",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "variation-inheritance",
      question:
        "In pea plants, the allele for tall stems (T) is dominant over the allele for short stems (t). Two heterozygous tall pea plants (Tt × Tt) are crossed. Calculate the percentage probability (%) that an offspring plant will have a short stem.",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        {
          spec: { type: "number", value: 75 },
          feedback: "75% is the probability of a tall stem (TT, Tt or Tt). A short stem requires two recessive alleles (tt).",
        },
        {
          spec: { type: "number", value: 50 },
          feedback: "Draw a 2 × 2 Punnett square for Tt × Tt: only 1 out of 4 boxes is tt.",
        },
      ],
      hints: [
        "Draw a 2 × 2 Punnett square with gametes T and t along the top and side.",
        "Count how many of the 4 genotypes are homozygous recessive (tt) for a short stem.",
      ],
      solution: [
        "Crossing Tt × Tt produces four equally likely genotypes: TT, Tt, Tt and tt.",
        "Only tt produces a short stem: {{1/4 * 100 = 25}}%.",
      ],
      commonError: "Reporting the dominant phenotype percentage (75%) instead of the recessive phenotype percentage (25%).",
    },
    {
      id: "exam-skills-q12",
      kind: "mcq",
      difficulty: "core",
      topicId: "periodic-table",
      guideRef: "group7-group0",
      question:
        "A student adds aqueous halogens to three potassium halide solutions and records whether a displacement colour change occurs:\n\n| Solution tested | + Chlorine water | + Bromine water | + Iodine water |\n|---|---|---|---|\n| Potassium chloride | No reaction | No reaction | No reaction |\n| Potassium bromide | Orange-brown forms | No reaction | No reaction |\n| Potassium iodide | Brown forms | Brown forms | No reaction |\n\nWhich conclusion is best supported by these experimental results?",
      options: [
        "Iodine is the most reactive halogen because it stayed unreacted",
        "Reactivity decreases down Group 7: chlorine > bromine > iodine",
        "Bromine is more reactive than chlorine because it turned brown",
        "All three halogens have identical reactivity in aqueous solution",
      ],
      answerIndex: 1,
      hints: [
        "A more reactive halogen displaces a less reactive halide ion from its salt solution.",
        "Count how many halide ions each added halogen successfully displaced in the table.",
      ],
      explanation:
        "**Chlorine** displaced both bromide and iodide (2 reactions), **bromine** displaced only iodide (1 reaction), and **iodine** displaced none (0 reactions). Therefore Group 7 reactivity decreases going down the group: **chlorine > bromine > iodine**.",
    },
    {
      id: "exam-skills-q13",
      kind: "mcq",
      difficulty: "core",
      topicId: "oil-and-pollution",
      guideRef: "fractional-distillation-oil",
      diagram: FRACTIONATING_COLUMN_SVG,
      question:
        "The diagram shows a fractionating column separating crude oil into fractions W, X, Y and Z. Compared with fraction Z collected at the hot base, how do the hydrocarbon molecules collected at W near the cool top differ?",
      options: [
        "Longer chains, higher boiling point, higher viscosity, less flammable",
        "Shorter chains, higher boiling point, lower viscosity, less flammable",
        "Shorter chains, lower boiling point, lower viscosity, more flammable",
        "Longer chains, lower boiling point, higher viscosity, more flammable",
      ],
      answerIndex: 2,
      hints: [
        "Molecules only condense into liquid when the column temperature drops down to their boiling point.",
        "Small, short-chain hydrocarbons have weak intermolecular forces, making them runny and easy to ignite.",
      ],
      explanation:
        "Fraction **W** rises all the way to the cool top at roughly 25 °C before condensing, so its hydrocarbons have **shorter chains**, **lower boiling points**, **lower viscosity** (runnier) and are **more flammable** than heavy fraction Z.",
    },
    {
      id: "exam-skills-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "energy-and-efficiency",
      guideRef: "thermal-transfer",
      diagram: COOLING_CURVES_SVG,
      question:
        "Two identical metal cans—one painted matt black and one polished shiny silver—are filled with equal volumes of 80 °C water and left to cool in a draught-free room. Their cooling curves are shown above. Which statement correctly matches the curves and explains the difference?",
      options: [
        "Curve A is the matt black can because matt black is a better infrared emitter",
        "Curve A is the shiny silver can because shiny surfaces emit infrared faster",
        "Curve B is the matt black can because black paint stops metal conduction",
        "Curve B is the shiny silver can because silver completely blocks convection",
      ],
      answerIndex: 0,
      hints: [
        "Look at which curve drops in temperature more rapidly over the 10-minute interval.",
        "Recall which surface finish emits thermal infrared radiation fastest.",
      ],
      explanation:
        "**Curve A** cools much faster (dropping to 52 °C vs 68 °C), so Curve A must be the **matt black can**: dark, matt surfaces are the **best emitters of infrared radiation**, whereas shiny silver surfaces are poor emitters.",
    },
    {
      id: "exam-skills-q15",
      kind: "short",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "motion-graphs",
      question:
        "In a light-gate practical, a dynamics trolley rolls 1.8 m down a smooth ramp in 1.2 seconds. Calculate the average speed of the trolley, in m/s.",
      answer: { type: "number", value: 1.5, display: "1.5 m/s" },
      traps: [
        {
          spec: { type: "number", value: 2.16 },
          feedback: "Average speed is distance ÷ time, not distance × time.",
        },
        {
          spec: { type: "number", value: 0.67, tolerance: 0.02 },
          feedback: "You divided time by distance — put distance on top: speed = distance ÷ time.",
        },
      ],
      hints: [
        "Recall the average speed equation linking distance and time.",
        "Divide 1.8 m by 1.2 s.",
      ],
      solution: [
        "Average speed = {{" + '"distance"' + " / " + '"time"' + "}}.",
        "{{v = 1.8 / 1.2 = 1.5}} m/s.",
      ],
      commonError: "Inverting the speed formula to compute time ÷ distance.",
    },
    {
      id: "exam-skills-q16",
      kind: "short",
      difficulty: "core",
      topicId: "further-electricity",
      guideRef: "resistance-ohms-law",
      diagram: OHMS_PRACTICAL_SVG,
      question:
        "A student builds the circuit shown to measure the resistance of an unknown resistor R. When the variable resistor is adjusted, the voltmeter reads 3.2 V and the ammeter reads 0.40 A. Calculate the resistance of R, in ohms.",
      answer: { type: "number", value: 8, display: "8 ohms" },
      traps: [
        {
          spec: { type: "number", value: 1.28 },
          feedback: "Multiplying V × I gives electrical power in watts (1.28 W). Resistance is R = V ÷ I.",
        },
        {
          spec: { type: "number", value: 0.125 },
          feedback: "You divided I ÷ V instead of V ÷ I.",
        },
      ],
      hints: [
        "Read the potential difference from the voltmeter in parallel across R and the current from the ammeter in series.",
        "Apply Ohm's Law rearranged for resistance: {{R = V / I}}.",
      ],
      solution: [
        "From the diagram: {{V = 3.2}} V and {{I = 0.40}} A.",
        "Resistance: {{R = V / I = 3.2 / 0.40 = 8}} ohms.",
      ],
      commonError: "Multiplying voltage by current instead of dividing voltage by current.",
    },
    {
      id: "exam-skills-q17",
      kind: "mcq",
      difficulty: "core",
      topicId: "further-forces",
      guideRef: "moments-hookes-law",
      question:
        "A student hangs slotted masses from a helical spring and records its extension:\n\n| Force (N) | 0 | 2 | 4 | 6 | 8 | 10 |\n|---|---|---|---|---|---|---|\n| Extension (cm) | 0.0 | 3.0 | 6.0 | 9.0 | 12.0 | 17.5 |\n\nWhat can be concluded from this data table about the spring's behaviour?",
      options: [
        "The spring obeys Hooke's law across the entire 0 N to 10 N range",
        "The spring passed its limit of proportionality before 4 N",
        "The spring became stiffer after 8 N because extension dropped",
        "The spring obeys Hooke's law up to 8 N, then exceeds proportionality",
      ],
      answerIndex: 3,
      hints: [
        "Check how much the extension increases each time the force rises by 2 N.",
        "Look for where the constant 3.0 cm step per 2 N suddenly breaks down.",
      ],
      explanation:
        "From 0 N to 8 N, every extra 2 N increases extension by exactly **3.0 cm** (directly proportional, obeying Hooke's law). Between 8 N and 10 N, extension jumps by **5.5 cm**, showing the spring passed its **limit of proportionality** and began **plastic deformation**.",
    },
    {
      id: "exam-skills-q18",
      kind: "written",
      difficulty: "core",
      topicId: "botany",
      guideRef: "photosynthesis-starch",
      marks: 3,
      question:
        "A variegated leaf (with green central regions and white edges) is picked from a plant kept in bright sunlight for 6 hours. It is dipped in boiling water, heated in ethanol inside a hot water bath, rinsed, and covered with iodine solution. State the colour observed on the green and white regions, and explain why the two regions produce different outcomes. (3 marks)",
      hints: [
        "Recall the colour iodine turns when starch is present versus when starch is absent.",
        "Name the green pigment or organelle present in the centre of the leaf that is missing from the white edge.",
      ],
      modelAnswer:
        "The green central area turns blue-black because starch is present, whereas the white edge stays orange-brown showing no starch was made. Only the green cells contain chlorophyll inside chloroplasts, which absorbs light energy needed for photosynthesis to make glucose and store starch.",
      markScheme: [
        {
          point: "Green region turns blue-black (positive test for starch).",
          keywords: ["blue-black", "blue black", "black"],
        },
        {
          point: "White region remains orange-brown / yellow-brown (no starch present).",
          keywords: ["orange-brown", "yellow-brown", "brown", "orange"],
        },
        {
          point: "Only the green region contains chlorophyll / chloroplasts required for photosynthesis.",
          keywords: ["chlorophyll", "chloroplast"],
        },
      ],
      commonError: "Writing that the white edge 'turns white' or 'clear' instead of staying iodine's orange-brown colour, or forgetting to mention chlorophyll/chloroplasts.",
    },
    {
      id: "exam-skills-q19",
      kind: "written",
      difficulty: "core",
      topicId: "making-and-purifying",
      guideRef: "making-soluble-salts",
      marks: 4,
      question:
        "A student wants to prepare pure, dry copper(II) sulfate crystals starting from dilute sulfuric acid and insoluble black copper(II) oxide powder. Describe the key practical steps needed to make and isolate pure dry crystals from these reactants. (4 marks)",
      hints: [
        "How do you speed up the reaction and guarantee that zero unreacted acid remains in the beaker?",
        "How do you separate an insoluble unreacted solid from an aqueous salt solution?",
        "How do you turn an aqueous salt solution into large dry crystals without scorching them?",
      ],
      modelAnswer:
        "Warm the acid gently and add copper(II) oxide in excess, stirring until unreacted solid remains so all the acid is neutralised. Filter the mixture using filter paper and a funnel to remove the excess solid and keep the blue filtrate. Evaporate about half the water by heating gently in an evaporating basin until the crystallisation point is reached. Leave the solution to cool so crystals form, then pat dry gently between filter papers.",
      markScheme: [
        {
          point: "Warm the acid and add insoluble copper(II) oxide in excess until all acid is neutralised.",
          keywords: ["excess", "warm", "neutralise", "neutralize"],
        },
        {
          point: "Filter the mixture to remove unreacted excess solid and collect the blue filtrate.",
          keywords: ["filter", "filtration", "filtrate"],
        },
        {
          point: "Heat gently to evaporate part of the water to the crystallisation point.",
          keywords: ["evaporat", "crystallisation point", "crystallization point", "heat gently"],
        },
        {
          point: "Leave to cool so crystals form, then pat dry / blot between filter papers (or warm oven).",
          keywords: ["cool", "pat dry", "blot", "warm oven", "desiccator"],
        },
      ],
      commonError: "Heating the solution all the way to complete dryness (which produces anhydrous white powder instead of hydrated blue crystals) or forgetting to add the base in excess.",
    },

    // ── CHALLENGE (q20–q25) ─────────────────────────────────────────────────
    {
      id: "exam-skills-q20",
      kind: "short",
      difficulty: "challenge",
      topicId: "oil-and-pollution",
      guideRef: "cracking-alkenes",
      strategy: "Conserve every atom",
      question:
        "Long-chain dodecane (C₁₂H₂₆) is cracked using a hot catalyst to produce one molecule of octane (C₈H₁₈) and one molecule of an alkene. Write the chemical formula of the alkene produced (in plain text without subscripts, for example CH4 for methane).",
      answer: { type: "text", accept: ["C4H8", "c4h8"], display: "C₄H₈" },
      traps: [
        {
          spec: { type: "text", accept: ["C4H10", "c4h10"] },
          feedback: "Check the hydrogen balance: 26 − 18 = 8, not 10. Alkenes follow the general formula CₙH₂ₙ.",
        },
        {
          spec: { type: "text", accept: ["C2H4", "c2h4"] },
          feedback: "Only one alkene molecule is formed here, so subtract 8 carbons from 12 carbons.",
        },
      ],
      hints: [
        "Total carbon atoms and total hydrogen atoms must stay conserved before and after cracking.",
        "Subtract the carbon and hydrogen atoms in C₈H₁₈ from those in C₁₂H₂₆.",
        "Check that your product matches the alkene general formula {{C_nH_(2n)}}.",
      ],
      solution: [
        "Carbon atoms remaining: {{12 - 8 = 4}}.",
        "Hydrogen atoms remaining: {{26 - 18 = 8}}.",
        "The alkene formula is C₄H₈ (butene), which matches {{C_nH_(2n)}}.",
      ],
      commonError: "Writing the alkane formula C₄H₁₀ instead of checking conservation of hydrogen atoms.",
    },
    {
      id: "exam-skills-q21",
      kind: "short",
      difficulty: "challenge",
      topicId: "further-electricity",
      guideRef: "electrical-power-safety-static",
      strategy: "Two-step formula chain",
      question:
        "A portable 12 V camp heating coil draws a steady current of 6.5 A for 5 minutes. Calculate the total electrical energy transferred to the coil during this time, in joules (J).",
      answer: { type: "number", value: 23400, display: "23400 J" },
      traps: [
        {
          spec: { type: "number", value: 78 },
          feedback: "78 W is the electrical power (I × V). Now multiply by time in seconds to find energy in joules.",
        },
        {
          spec: { type: "number", value: 390 },
          feedback: "Convert 5 minutes into 300 seconds before multiplying by power.",
        },
      ],
      hints: [
        "First find the electrical power using {{P = I * V}}.",
        "Convert 5 minutes into seconds.",
        "Calculate total energy transferred using {{E = P * t}}.",
      ],
      solution: [
        "Electrical power: {{P = I * V = 6.5 * 12 = 78}} W.",
        "Time in seconds: {{t = 5 * 60 = 300}} s.",
        "Total energy: {{E = P * t = 78 * 300 = 23400}} J.",
      ],
      commonError: "Stopping after calculating power (78 W) or multiplying power by 5 minutes without converting to seconds.",
    },
    {
      id: "exam-skills-q22",
      kind: "written",
      difficulty: "challenge",
      topicId: "dna-and-evolution",
      guideRef: "natural-selection",
      marks: 4,
      question:
        "Over several decades, a hospital records that the percentage of Staphylococcus bacterial infections surviving treatment with a common antibiotic rose from 2% to 68%. Use Darwin's theory of natural selection to explain how this resistant population evolved over many generations. (4 marks)",
      hints: [
        "Start with how genetic differences first arise randomly in a population of bacteria.",
        "Explain what happens to susceptible versus resistant individuals when the drug is present.",
        "Finish by linking survival to reproduction and inheritance across generations.",
      ],
      modelAnswer:
        "Random genetic mutations create variation, giving some bacteria alleles that confer resistance. When the drug is applied, non-resistant bacteria are killed while better-adapted resistant cells survive with less competition. The surviving resistant bacteria reproduce rapidly by dividing. They pass on their advantageous alleles to offspring, so the frequency of resistant genes increases in the population.",
      markScheme: [
        {
          point: "Random genetic mutations produce variation in the bacterial population.",
          keywords: ["mutation", "variation"],
        },
        {
          point: "Non-resistant bacteria die / are killed while resistant individuals survive with less competition.",
          keywords: ["die", "killed", "competition", "better adapted", "better-adapted"],
        },
        {
          point: "Surviving resistant bacteria reproduce / divide rapidly.",
          keywords: ["reproduce", "reproducing", "divide", "dividing", "multiply"],
        },
        {
          point: "Resistance alleles / genes are inherited / passed on to offspring.",
          keywords: ["alleles", "genes", "offspring", "passed on", "inherited"],
        },
      ],
      commonError: "Writing that bacteria 'decide to adapt' or 'become immune' to antibiotics (mutations happen randomly first, and natural selection then favours resistant alleles).",
    },
    {
      id: "exam-skills-q23",
      kind: "written",
      difficulty: "challenge",
      topicId: "periodic-table",
      guideRef: "group1-alkali-metals",
      marks: 3,
      question:
        "In a classroom demonstration, a small piece of lithium fizzes steadily on water, whereas an equal-sized piece of potassium melts immediately and ignites with a lilac flame. Explain, in terms of atomic structure, why potassium is more reactive than lithium. (3 marks)",
      hints: [
        "Compare the number of electron shells and the size of a potassium atom (2,8,8,1) against a lithium atom (2,1).",
        "Explain how distance and inner shells affect the electrostatic pull from the positive nucleus.",
        "Connect that attraction strength to what Group 1 metals do with their single outer electron when reacting.",
      ],
      modelAnswer:
        "Potassium is a larger atom with more electron shells (4 shells compared with 2 in lithium), placing its outer electron further from the nucleus. Because of this greater distance and increased inner-shell shielding, there is a weaker attraction between the positive nucleus and the outer electron. Consequently, the outer electron is lost more easily during reactions.",
      markScheme: [
        {
          point: "Potassium is a larger atom / has more electron shells so its outer electron is further from the nucleus.",
          keywords: ["more electron shells", "more shells", "larger atom", "further from the nucleus", "greater distance"],
        },
        {
          point: "Electrostatic attraction between the nucleus and outer electron is weaker (greater shielding).",
          keywords: ["weaker attraction", "less attraction", "less strongly attracted", "electrostatic", "shielding"],
        },
        {
          point: "Therefore the single outer electron is lost more easily.",
          keywords: ["lost more easily", "easier to lose", "loses its outer electron", "lose its outer electron"],
        },
      ],
      commonError: "Claiming potassium has 'more outer electrons' (all Group 1 metals have exactly 1 outer electron) or saying it 'gains electrons more easily'.",
    },
    {
      id: "exam-skills-q24",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "energy-and-efficiency",
      guideRef: "sankey-efficiency",
      question:
        "During an outdoor physics investigation, Solar Panel P receives 400 W of sunlight and generates 88 W of electrical power. Solar Panel Q receives 250 W of sunlight and generates 65 W of electrical power. Which panel is more efficient, and what is its percentage efficiency?",
      options: [
        "Panel P is more efficient, with an efficiency of 22%",
        "Panel Q is more efficient, with an efficiency of 26%",
        "Panel P is more efficient, with an efficiency of 88%",
        "Panel Q is more efficient, with an efficiency of 38%",
      ],
      answerIndex: 1,
      hints: [
        "Do not just compare raw power outputs — efficiency depends on the fraction of input energy converted usefully.",
        "Calculate {{(useful / input) * 100%}} separately for Panel P and Panel Q.",
      ],
      explanation:
        "Panel P efficiency = {{(88 / 400) * 100 = 22}}%. Panel Q efficiency = {{(65 / 250) * 100 = 26}}%. Even though Panel P produces more watts overall because it receives more sunlight, **Panel Q is more efficient at 26%**.",
    },
    {
      id: "exam-skills-q25",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "evaluating-techniques",
      question:
        "Two students measure the boiling point of an unknown pure liquid. Student 1 records 78.2 °C, 78.3 °C and 78.2 °C using a digital probe reading to 0.1 °C. Student 2 uses a different thermometer and records 78.3 °C, 78.2 °C and 78.4 °C. Which statement best evaluates these measurements?",
      options: [
        "They have a resolution of 1 °C and are neither repeatable nor reproducible",
        "They are repeatable only, because a second student used another instrument",
        "They are both repeatable and reproducible, with a resolution of 0.1 °C",
        "They prove the liquid is pure water because all six readings match closely",
      ],
      answerIndex: 2,
      hints: [
        "Repeatable means the same person using the same equipment gets closely matching repeats.",
        "Reproducible means a different person or different equipment obtains the same result; resolution is the smallest scale interval.",
      ],
      explanation:
        "Student 1's repeats agree tightly (**repeatable**), Student 2 obtains the same value with different equipment (**reproducible**), and the smallest readable change is **0.1 °C** (**resolution**). Since pure water boils at 100 °C, 78.3 °C is ethanol rather than water.",
    },
  ],
};
