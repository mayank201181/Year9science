import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Right now, Earth's atmosphere is pressing down on every single square metre of your desk with over 100 000 newtons — the weight of ten small cars — yet the desk does not snap because air pushes equally hard upward from underneath!",
  didYouKnow: [
    "At the bottom of the Mariana Trench (11 km deep), seawater pressure reaches **110 million pascals (110 MPa)** — over 1000 times sea-level atmospheric pressure, like balancing 50 jumbo jets on a single person!",
    "In 1971 during the Apollo 15 Moon landing, astronaut David Scott dropped a 1.32 kg geological hammer and a 0.03 kg falcon feather side by side on live television; with zero lunar air resistance, both struck the Moon dust at the **exact same instant**.",
    "A falling house cat reaches a much lower terminal velocity (~27 m/s) than a falling human (~54 m/s) because a cat's splayed limbs create a huge surface-area-to-weight ratio.",
    "Archimedes famously boasted over 2200 years ago: *'Give me a lever long enough and a fulcrum on which to place it, and I shall move the world!'* — pure Principle of Moments in action.",
    "The SI unit of pressure, the **pascal (Pa)**, is tiny: resting a single 100 g apple evenly over a 1 m² tabletop exerts roughly **1 Pa** of pressure!",
  ],
  activities: [
    {
      title: "30 cm Ruler Coin-Balance Challenge",
      emoji: "⚖️",
      materials: [
        "A stiff 30 cm ruler",
        "A hexagonal pencil (to act as the pivot/fulcrum)",
        "10 identical Singapore 20-cent or 50-cent coins",
      ],
      steps: [
        "Balance the empty ruler horizontally right across the pencil at the **15.0 cm** mark.",
        "Stack **2 coins** neatly at the **3.0 cm** mark (distance {{d_1 = 15 - 3 = 12}} cm left of the pivot).",
        "Predict where a single stack of **4 coins** must sit on the right side to restore exact horizontal balance, then place them carefully to verify!",
        "Try an asymmetric challenge: put **1 coin** at 5.0 cm and **2 coins** at 10.0 cm on the left, then calculate where **4 coins** must sit on the right.",
      ],
      maths:
        "Since every identical coin has the same weight {{w}}, the factor {{w}} cancels out of {{Σ(F * d)_\"ACW\" = Σ(F * d)_\"CW\"}}! In the challenge, {{(1 * 10) + (2 * 5) = 20}} coin-cm left, so 4 coins must sit {{20 / 4 = 5}} cm right of centre (at the **20.0 cm** mark).",
    },
    {
      title: "Cupcake-Case Terminal Velocity Drop",
      emoji: "🪂",
      materials: [
        "6 identical paper cupcake liners (muffin cases)",
        "A metre ruler or tape measure",
        "A stopwatch (phone timer)",
      ],
      steps: [
        "Drop a single cupcake case from a marked height of 2.0 m and time how long it takes to hit the floor (repeat 3 times and find the mean).",
        "Notice how quickly it settles into a steady, constant **terminal velocity** — calculate {{v = 2.0 / t}}.",
        "Nest **2 cases** tightly inside one another (doubling the weight while keeping the exact same surface area and shape!) and time the 2.0 m drop again.",
        "Repeat with **3, 4, and 5 nested cases** and compare how terminal velocity changes as weight increases.",
      ],
      maths:
        "Nesting cases multiplies downward weight while keeping frontal area identical! Because air resistance rises with speed, a heavier stack must reach a **higher terminal velocity** before upward drag finally balances its greater weight.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Complete Skydiver Velocity–Time Graph",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph of a skydiver showing initial acceleration, first terminal velocity plateau, sharp deceleration at parachute opening, and lower terminal velocity plateau">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Skydiver Velocity–Time Graph (Jump to Safe Landing)</text>
  <!-- Axes -->
  <line x1="60" y1="204" x2="520" y2="204" stroke="var(--ink)" stroke-width="2" />
  <line x1="60" y1="204" x2="60" y2="42" stroke="var(--ink)" stroke-width="2" />
  <text x="290" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Time (s)</text>
  <text x="26" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 26 124)">Downward Velocity (m/s)</text>
  <!-- Horizontal reference lines for v1 and v2 -->
  <line x1="60" y1="68" x2="310" y2="68" stroke="var(--line)" stroke-width="1.2" stroke-dasharray="4,3" />
  <line x1="60" y1="168" x2="500" y2="168" stroke="var(--line)" stroke-width="1.2" stroke-dasharray="4,3" />
  <text x="54" y="72" text-anchor="end" font-size="10" font-weight="700" fill="var(--bad)">55</text>
  <text x="54" y="172" text-anchor="end" font-size="10" font-weight="700" fill="var(--good)">6</text>
  <!-- Curve: (60,204) curves smoothly up to (190,68), flat to (290,68), drops steeply to (355,168), flat to (475,168), drops to ground (490,204) -->
  <path d="M 60 204 Q 100 72 190 68 L 290 68 Q 312 162 355 168 L 475 168 L 488 204" fill="none" stroke="var(--brand)" stroke-width="3.2" stroke-linejoin="round" />
  <!-- Callout dots -->
  <circle cx="290" cy="68" r="5" fill="var(--bad)" />
  <text x="108" y="114" font-size="10" font-weight="700" fill="var(--ink)">Gradient falls</text>
  <text x="108" y="127" font-size="9.5" fill="var(--ink-2)">as drag grows</text>
  <text x="240" y="56" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">1st Terminal v (Drag = W)</text>
  <text x="348" y="96" font-size="10.5" font-weight="800" fill="var(--brand)">Parachute opens!</text>
  <text x="348" y="110" font-size="9.5" fill="var(--ink-2)">Drag &gt; W ⇒ rapid decel.</text>
  <line x1="296" y1="73" x2="344" y2="92" stroke="var(--brand)" stroke-width="1.3" />
  <text x="415" y="156" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">2nd Terminal v (Safe!)</text>
  <text x="498" y="198" font-size="9.5" font-weight="700" fill="var(--ink-2)">Lands</text>
</svg>`,
      caption: "Notice BOTH terminal velocities appear as flat horizontal sections (acceleration = 0, forces balanced), and velocity stays positive (downward) throughout!",
    },
    {
      title: "Hydraulic Press Force Multiplier",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydraulic press showing equal liquid pressure P transmitted from a small 5 cm squared piston with 40 N input to a large 60 cm squared piston producing 480 N output">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Hydraulic Force Multiplier: Equal Pressure Throughout Liquid</text>
  <!-- U-shaped hydraulic chamber filled with oil -->
  <path d="M 110 92 L 110 202 L 450 202 L 450 112 L 320 112 L 320 166 L 160 166 L 160 92 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2" />
  <!-- Small input piston -->
  <rect x="112" y="80" width="46" height="14" rx="2" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.5" />
  <!-- Input force arrow -->
  <line x1="135" y1="42" x2="135" y2="72" stroke="var(--brand)" stroke-width="3.5" />
  <polygon points="129,69 135,79 141,69" fill="var(--brand)" />
  <text x="135" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">F₁ = 40 N</text>
  <text x="64" y="104" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">A₁ = 5 cm²</text>
  <!-- Large output piston -->
  <rect x="322" y="100" width="126" height="14" rx="2" fill="var(--good)" stroke="var(--ink)" stroke-width="1.5" />
  <!-- Output force arrow -->
  <line x1="385" y1="98" x2="385" y2="54" stroke="var(--good)" stroke-width="4.5" />
  <polygon points="378,58 385,44 392,58" fill="var(--good)" />
  <text x="385" y="38" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">F₂ = 480 N (12× Force!)</text>
  <text x="496" y="122" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">A₂ = 60 cm²</text>
  <!-- Pressure label inside oil -->
  <text x="242" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">Incompressible Oil: P = 40 ÷ 5 = 8 N/cm² everywhere!</text>
  <!-- Footer -->
  <rect x="75" y="216" width="410" height="24" rx="6" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="280" y="232" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Same Pressure P = F₁/A₁ = F₂/A₂   ⇒   F₂ = 8 × 60 = 480 N</text>
</svg>`,
      caption: "Car brakes and workshop jacks rely on liquids being virtually incompressible, transmitting the exact same pressure P to a much wider piston to multiply force.",
    },
  ],
  history: {
    title: "Robert Hooke's Secret Latin Anagram",
    story:
      "In 1676, brilliant English physicist and architect Robert Hooke discovered the linear law connecting a spring's stretching force to its extension — a breakthrough essential for designing accurate pocket watches that helped sailors navigate across oceans! Worried that rivals (including Isaac Newton!) might steal his discovery before he published a full book, Hooke hid his law at the end of a paper as a cryptic 14-letter Latin anagram: **ceiiinosssttuv**. Two years later, in 1678, he finally revealed the unscrambled Latin sentence: *'Ut tensio, sic vis'* — literally **'As the extension, so the force'** — better known to every Year 9 physicist today as **Hooke's Law ({{F = k * e}})**.",
  },
};
