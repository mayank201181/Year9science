import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Every time you climb one flight of stairs at Tanglin, your muscles transfer roughly the same energy as a 60 W laptop running for 30 seconds — and every single joule stays accounted for in the universe forever.",
  didYouKnow: [
    "A single banana holds about **420 000 J (420 kJ)** in its chemical store — enough mechanical energy to lift a 60 kg student 700 metres vertically if human muscles were 100% efficient (in reality muscles are about 20–25% efficient!).",
    "The Sun radiates about {{3.8 * 10^26}} W of electromagnetic waves into space every second. Just **one hour** of sunlight striking Earth carries more energy than the entire human species uses in a whole year!",
    "Old incandescent light bulbs were essentially tiny heaters that happened to glow — up to **90%** of their electrical input dissipated thermally, whereas modern LEDs turn over **75–85%** into visible light.",
    "Singapore's Tengeh Reservoir floating solar farm benefits from water evaporation underneath the panels, keeping the panels 5–15 °C cooler than rooftop panels and boosting their electrical efficiency by up to 10%.",
    "In 1898, Captain Matthew Sankey drew the very first proportional energy-flow diagram to show how much heat a steam engine wasted up its chimney — and engineers have called them **Sankey diagrams** ever since!",
  ],
  activities: [
    {
      title: "The Leslie-Mug IR Radiation Race",
      emoji: "☕",
      materials: [
        "2 identical metal mugs or soda cans",
        "Black matt paper / paint and shiny aluminium foil",
        "Warm water (around 60 °C — handle safely!)",
        "2 thermometers (or digital probes) and a stopwatch",
      ],
      steps: [
        "Wrap one can snugly in dull matt black paper and the other in shiny aluminium foil, keeping the shiny side facing outward.",
        "Pour the exact same volume (e.g. 200 mL) of 60 °C water into both cans and place matching cardboard lids on top to reduce convection and evaporation.",
        "Record the starting temperature of both cans, then log the temperature every 2 minutes for 14 minutes.",
        "Plot both cooling curves on the same temperature–time graph and compare their gradients.",
      ],
      maths:
        "Because water volume, lids and room temperature are controlled, the steeper cooling curve of the matt black can proves that matt black surfaces are far better **emitters** of infrared radiation than shiny silver surfaces.",
    },
    {
      title: "Staircase Personal Power Audit",
      emoji: "🏃",
      materials: [
        "A safe staircase with a handrail",
        "A ruler or tape measure",
        "A stopwatch (phone timer)",
        "Bathroom scales (to find mass in kg)",
      ],
      steps: [
        "Measure the height of one single step in centimetres, multiply by the number of steps, and divide by 100 to get the total vertical climb {{h}} in metres.",
        "Calculate your weight in newtons: {{F = m * 9.8}} (or {{m * 10}}).",
        "Time yourself **walking** steadily from bottom to top, then rest and time a brisk (safe!) climb up the exact same stairs.",
        "Calculate your work done ({{W = F * h}}) and power ({{P = W / t}}) for both climbs.",
      ],
      maths:
        "Notice that your **work done** ({{W = m g h}}) is identical on both trips, yet climbing in half the time **doubles your power** ({{P = W / t}}). Most Year 9 students generate 150–450 W climbing stairs — enough to power several LED TVs!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Annotated Vacuum Flask Cross-Section",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a vacuum flask showing insulated plastic stopper, vacuum gap, silvered glass walls, and foam support">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">How a Vacuum Flask Blocks All Three Thermal Transfers</text>
  <!-- Flask body centered around x=200 -->
  <!-- Outer casing -->
  <rect x="132" y="66" width="136" height="158" rx="16" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2" />
  <!-- Vacuum gap -->
  <rect x="144" y="74" width="112" height="134" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" stroke-dasharray="4,2" />
  <!-- Inner silvered wall + hot liquid -->
  <rect x="156" y="82" width="88" height="114" rx="8" fill="var(--brand-soft)" stroke="var(--ink-2)" stroke-width="2" />
  <rect x="158" y="114" width="84" height="80" rx="6" fill="var(--bad-soft)" />
  <text x="200" y="158" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">Hot Soup</text>
  <text x="200" y="174" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(or Iced Water)</text>
  <!-- Neck & plastic stopper -->
  <rect x="174" y="42" width="52" height="32" rx="6" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.8" />
  <text x="200" y="62" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">STOPPER</text>
  <!-- Insulating base pad -->
  <rect x="166" y="208" width="68" height="10" rx="3" fill="var(--ink-2)" />
  <!-- Callouts right side -->
  <line x1="226" y1="56" x2="310" y2="56" stroke="var(--ink)" stroke-width="1.5" />
  <text x="316" y="54" font-size="11.5" font-weight="800" fill="var(--ink)">1. Plastic Stopper / Lid</text>
  <text x="316" y="68" font-size="10.5" fill="var(--ink-2)">Stops convection &amp; evaporation; poor conductor</text>

  <line x1="250" y1="108" x2="310" y2="108" stroke="var(--brand)" stroke-width="1.5" />
  <text x="316" y="106" font-size="11.5" font-weight="800" fill="var(--brand)">2. Vacuum Gap (No Particles)</text>
  <text x="316" y="120" font-size="10.5" fill="var(--ink-2)">Eliminates conduction &amp; convection completely</text>

  <line x1="244" y1="158" x2="310" y2="158" stroke="var(--good)" stroke-width="1.5" />
  <text x="316" y="156" font-size="11.5" font-weight="800" fill="var(--good)">3. Silvered Glass Walls</text>
  <text x="316" y="170" font-size="10.5" fill="var(--ink-2)">Reflects IR radiation back (poorest emitter)</text>

  <line x1="234" y1="213" x2="310" y2="213" stroke="var(--ink-2)" stroke-width="1.5" />
  <text x="316" y="211" font-size="11.5" font-weight="800" fill="var(--ink)">4. Insulating Foam Support</text>
  <text x="316" y="225" font-size="10.5" fill="var(--ink-2)">Minimises conduction to outer casing</text>
</svg>`,
      caption: "Invented by Sir James Dewar in 1892 to store liquid gases — still the textbook masterclass in blocking conduction, convection and IR radiation simultaneously.",
    },
    {
      title: "Typical Device Efficiencies Compared",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart comparing typical efficiencies of filament lamp 10%, petrol car 25%, coal power station 35%, LED lamp 80%, and electric motor 85%">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Typical Efficiencies of Real-World Devices</text>
  <!-- Grid ticks at 0%, 25%, 50%, 75%, 100% spanning x=180 to x=500 (320px = 100%) -->
  <g stroke="var(--line)" stroke-width="1" stroke-dasharray="3,3">
    <line x1="180" y1="42" x2="180" y2="212" />
    <line x1="260" y1="42" x2="260" y2="212" />
    <line x1="340" y1="42" x2="340" y2="212" />
    <line x1="420" y1="42" x2="420" y2="212" />
    <line x1="500" y1="42" x2="500" y2="212" />
  </g>
  <text x="180" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">0%</text>
  <text x="260" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">25%</text>
  <text x="340" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">50%</text>
  <text x="420" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">75%</text>
  <text x="500" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100%</text>
  <!-- Bars -->
  <text x="170" y="64" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--ink)">Filament Lamp</text>
  <rect x="180" y="48" width="32" height="22" rx="4" fill="var(--bad)" />
  <text x="220" y="64" font-size="11" font-weight="800" fill="var(--bad)">~10%</text>

  <text x="170" y="98" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--ink)">Petrol Car Engine</text>
  <rect x="180" y="82" width="80" height="22" rx="4" fill="var(--bad)" />
  <text x="268" y="98" font-size="11" font-weight="800" fill="var(--bad)">~25%</text>

  <text x="170" y="132" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--ink)">Thermal Power Plant</text>
  <rect x="180" y="116" width="112" height="22" rx="4" fill="var(--ink-2)" />
  <text x="300" y="132" font-size="11" font-weight="800" fill="var(--ink-2)">~35%</text>

  <text x="170" y="166" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--ink)">Modern LED Bulb</text>
  <rect x="180" y="150" width="256" height="22" rx="4" fill="var(--good)" />
  <text x="444" y="166" font-size="11" font-weight="800" fill="var(--good)">~80%</text>

  <text x="170" y="200" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--ink)">EV Electric Motor</text>
  <rect x="180" y="184" width="272" height="22" rx="4" fill="var(--brand)" />
  <text x="460" y="200" font-size="11" font-weight="800" fill="var(--brand)">~85%</text>
</svg>`,
      caption: "Switching from petrol engines (~25%) to electric motors (~85%) and filament lamps (~10%) to LEDs (~80%) slashes wasted thermal dissipation dramatically.",
    },
  ],
  history: {
    title: "James Joule's Paddle-Wheel & the Birth of the Joule",
    story:
      "In the 1840s, most scientists believed heat was an invisible weightless fluid called 'caloric' that had nothing to do with mechanical motion. James Prescott Joule — a young brewer's son from Salford, England — disagreed. Using ultra-precise thermometers from his family's brewery, he built a brass paddle wheel submerged inside an insulated tub of water and spun it with falling lead weights on pulleys. By measuring the exact gravitational potential energy lost by the falling weights and the tiny fraction-of-a-degree rise in the water's temperature, Joule proved that mechanical work and thermal energy are two faces of the **exact same conserved quantity**. He even packed a thermometer on his 1847 Swiss honeymoon to check whether water at the bottom of a waterfall was warmer than at the top! Today, every single joule (J) you calculate carries his name.",
  },
};
