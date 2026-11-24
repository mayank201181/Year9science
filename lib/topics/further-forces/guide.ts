import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "further-forces",
  title: "Further Forces, Motion & Pressure",
  strand: "Physics",
  icon: "🚀",
  summary: "Master resultant forces, Newton's laws, motion graphs, solid & fluid pressure, balanced moments and Hooke's Law.",
  intro:
    "Why does a skydiver stop accelerating mid-air? How can a tiny thumbtack pierce wood while wide snowshoes keep you afloat? Why does a longer spanner unscrew a rusted bolt effortlessly? In Year 9 Physics you will unify forces and motion through **Newton's Laws** and **terminal velocity**, decode **distance–time** and **velocity–time graphs**, calculate **pressure in solids and fluids**, balance **moments** around pivots, and model elastic springs with **Hooke's Law**.",
  guide: [
    // =========================================================================
    // SECTION 1: Resultant Forces, Terminal Velocity & Newton's Laws
    // =========================================================================
    {
      id: "resultant-forces-newton",
      heading: "Resultant Forces, Terminal Velocity & Newton's Laws",
      discovery: {
        problem:
          "A spacecraft drifts through deep space far from any planets with its engines completely switched OFF. Does it slow down and stop, or keep gliding at the exact same speed forever? Why?",
        idea:
          "It keeps gliding at the **exact same constant velocity forever**! On Earth we are fooled by friction and air resistance into thinking objects need a continuous push to keep moving. In fact, a **resultant force** is only needed to **change** velocity (speed up, slow down, or change direction) — never to maintain constant velocity.",
      },
      body: `### Scalars, Vectors & Resultant Forces
- A **scalar** has magnitude (size) only: mass, distance, speed, time, energy, temperature.
- A **vector** has magnitude **and direction**: force, weight, displacement, velocity, acceleration.
- The **resultant force** is the single overall force that has the exact same effect as all individual forces acting together. Along one line: add forces pointing the **same way**, subtract forces pointing **opposite ways**, and always state the **direction**!

### Newton's Three Laws of Motion
1. **Newton's First Law (Balanced Forces, {{F_"res" = 0}}):** If the resultant force on an object is **zero**, a stationary object **stays stationary** and a moving object **continues at constant velocity** (same speed, same direction).
2. **Newton's Second Law (Unbalanced Forces):** A non-zero resultant force causes **acceleration** in the direction of that resultant force:
   {{F = m * a}}
   where {{F}} is resultant force (N), {{m}} is mass (kg), and {{a}} is acceleration (m/s²).
3. **Newton's Third Law (Interaction Pairs):** Whenever Object A exerts a force on Object B, Object B simultaneously exerts an **equal and opposite** force of the same type on Object A.

### Mass vs Weight
- **Mass ({{m}}, in kg)** is the amount of matter in an object — a scalar that stays **identical** on Earth, the Moon, or in orbit.
- **Weight ({{W}}, in N)** is the downward gravitational force acting on a mass: {{W = m * g}} (on Earth, {{g ≈ 9.8 "N/kg"}}, often rounded to {{10 "N/kg"}} in Year 9).

### Falling Objects & Terminal Velocity
Trace a skydiver stepping out of an aircraft:
1. **At the start (speed = 0):** Only downward **weight** acts (air resistance = 0). Large downward resultant force → maximum downward acceleration.
2. **Speeding up:** As speed rises, upward **air resistance (drag)** increases. Weight stays constant, so the downward resultant force shrinks and acceleration decreases (she still speeds up, just less rapidly).
3. **First terminal velocity:** Air resistance grows until it **equals weight** (balanced forces, {{F_"res" = 0}}). Acceleration becomes **zero**, and she falls at a high **constant terminal velocity**.
4. **Parachute opens:** Surface area jumps dramatically, so upward air resistance suddenly becomes **much larger than weight**. Resultant force points **upward**, causing rapid **deceleration** (she is still moving downward, just slowing down!).
5. **New lower terminal velocity:** As she slows, air resistance drops until it again equals weight — balanced forces once more, giving a safe, slow landing speed.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage force diagram of a falling skydiver reaching terminal velocity, opening the parachute, and reaching a lower terminal velocity">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Skydiver Force Balance &amp; Terminal Velocity (Weight = 700 N)</text>
  <!-- Stage 1 -->
  <rect x="14" y="36" width="124" height="200" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="76" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">1. Jump Out</text>
  <circle cx="76" cy="112" r="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <!-- Down arrow 700 N -->
  <line x1="76" y1="126" x2="76" y2="178" stroke="var(--bad)" stroke-width="3.5" />
  <polygon points="70,174 76,186 82,174" fill="var(--bad)" />
  <text x="76" y="198" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">W = 700 N</text>
  <text x="76" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Drag = 0 N</text>
  <text x="76" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">F_res = 700 N ↓</text>
  <text x="76" y="229" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Max acceleration</text>
  <!-- Stage 2 -->
  <rect x="149" y="36" width="124" height="200" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="211" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">2. Terminal v₁</text>
  <!-- Up arrow 700 N -->
  <line x1="211" y1="98" x2="211" y2="66" stroke="var(--good)" stroke-width="3.5" />
  <polygon points="205,70 211,58 217,70" fill="var(--good)" />
  <circle cx="211" cy="112" r="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <!-- Down arrow 700 N -->
  <line x1="211" y1="126" x2="211" y2="178" stroke="var(--bad)" stroke-width="3.5" />
  <polygon points="205,174 211,186 217,174" fill="var(--bad)" />
  <text x="247" y="84" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">700 N</text>
  <text x="211" y="198" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">W = 700 N</text>
  <text x="211" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">F_res = 0 N</text>
  <text x="211" y="229" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">High constant v</text>
  <!-- Stage 3 -->
  <rect x="284" y="36" width="124" height="200" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="346" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">3. Chute Opens</text>
  <!-- Huge up arrow 1400 N -->
  <line x1="346" y1="112" x2="346" y2="66" stroke="var(--brand)" stroke-width="4.5" />
  <polygon points="339,71 346,57 353,71" fill="var(--brand)" />
  <circle cx="346" cy="126" r="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <!-- Down arrow 700 N -->
  <line x1="346" y1="140" x2="346" y2="180" stroke="var(--bad)" stroke-width="3.5" />
  <polygon points="340,176 346,188 352,176" fill="var(--bad)" />
  <text x="383" y="84" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--brand)">1400 N</text>
  <text x="346" y="198" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">W = 700 N</text>
  <text x="346" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">F_res = 700 N ↑</text>
  <text x="346" y="229" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Decelerates ↓</text>
  <!-- Stage 4 -->
  <rect x="419" y="36" width="127" height="200" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="482" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">4. Terminal v₂</text>
  <!-- Up arrow 700 N -->
  <line x1="482" y1="98" x2="482" y2="66" stroke="var(--good)" stroke-width="3.5" />
  <polygon points="476,70 482,58 488,70" fill="var(--good)" />
  <circle cx="482" cy="112" r="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <!-- Down arrow 700 N -->
  <line x1="482" y1="126" x2="482" y2="178" stroke="var(--bad)" stroke-width="3.5" />
  <polygon points="476,174 482,186 488,174" fill="var(--bad)" />
  <text x="518" y="84" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">700 N</text>
  <text x="482" y="198" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">W = 700 N</text>
  <text x="482" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">F_res = 0 N</text>
  <text x="482" y="229" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Slow safe landing</text>
</svg>`,
      diagramCaption: "Weight stays 700 N throughout the entire jump! Only air resistance changes with speed and parachute area — and Stage 3 decelerates downward rather than flying upward.",
      workedExamples: [
        {
          title: "Resultant Force & Newton's Second Law",
          problem:
            "A 1200 kg electric car experiences a forward driving force of 4200 N and total resistive forces (drag + friction) of 1800 N. Calculate (a) the resultant force and (b) the car's acceleration.",
          steps: [
            "Opposing forces subtract: {{F_\"res\" = 4200 - 1800 = 2400}} N **forward**.",
            "Rearrange {{F = m * a}} to {{a = F / m}}.",
            "Substitute: {{a = 2400 / 1200 = 2.0}} m/s² forward.",
          ],
          answer: "2400 N forward; acceleration = 2.0 m/s²",
          yourTurn: {
            question:
              "A 1500 kg delivery van has a forward engine force of 5100 N and total resistive forces of 2100 N. Calculate its acceleration (in m/s²).",
            answer: { type: "number", value: 2, display: "2" },
            solution: "Resultant force = 5100 − 2100 = 3000 N. Acceleration = 3000 ÷ 1500 = 2 m/s².",
          },
        },
        {
          title: "Mass vs Weight on Earth and the Moon",
          problem:
            "An astronaut has a mass of 72 kg. Calculate her weight on Earth ({{g = 10 \"N/kg\"}}) and state her mass and weight on the Moon ({{g = 1.6 \"N/kg\"}}).",
          steps: [
            "Earth weight: {{W = m * g = 72 * 10 = 720}} N.",
            "Mass never depends on gravity, so her mass on the Moon is still **72 kg**.",
            "Moon weight: {{W = 72 * 1.6 = 115.2}} N.",
          ],
          answer: "Earth weight = 720 N; Moon mass = 72 kg, Moon weight = 115.2 N",
          yourTurn: {
            question:
              "A Mars rover has a mass of 45 kg. Calculate its weight in newtons on Mars, where {{g = 3.8 \"N/kg\"}}.",
            answer: { type: "number", value: 171, display: "171 N" },
            solution: "Weight = m × g = 45 × 3.8 = 171 N.",
          },
        },
      ],
      keyPoints: [
        "**Balanced forces ({{F_\"res\" = 0}})** mean **zero acceleration** — the object is either stationary OR moving at a steady **constant velocity**.",
        "**Newton's 2nd Law:** {{F = m * a}} — use the **resultant** force, not just one individual force!",
        "**Weight** {{W = m * g}} is a force in **newtons (N)** that changes with gravity; **mass** (kg) stays constant everywhere.",
        "At **terminal velocity**, upward air resistance equals downward weight ({{F_\"res\" = 0}}), so speed is constant.",
        "Opening a parachute creates a huge **upward** resultant force that makes the skydiver **decelerate downward** — never fly upward!",
      ],
      whyItWorks:
        "Why does a heavier skydiver reach a higher terminal velocity than a lighter skydiver of the exact same size? Because air resistance grows with speed. To balance a larger downward weight, the heavier skydiver must fall faster so air molecules slam into them more often and harder until upward drag finally matches their greater weight.",
      strategies: [
        "**Free-Body Sketch First:** Draw every force as a labelled arrow before doing arithmetic — opposite arrows subtract, same-direction arrows add.",
        "**Constant Velocity Alert:** Whenever a question says 'constant speed in a straight line' or 'terminal velocity', immediately write {{F_\"res\" = 0}} (forward force = backward force).",
        "**Check Mass vs Weight:** If a question gives **kg**, multiply by {{g}} to get newtons; if it already gives **N**, do NOT multiply by {{g}} again!",
      ],
      thinkDeeper:
        "If you drop a hammer and a feather together inside a giant vacuum chamber on Earth (or on the airless Moon, as Apollo 15 astronaut David Scott famously did!), both hit the ground at the exact same instant even though the hammer has far greater weight. Use {{W = m * g}} and {{a = F / m}} to prove algebraically why mass cancels out in free fall without air resistance!",
    },

    // =========================================================================
    // SECTION 2: Distance–Time & Velocity–Time Graphs
    // =========================================================================
    {
      id: "motion-graphs",
      heading: "Distance–Time & Velocity–Time Graphs",
      discovery: {
        problem:
          "Look at a flat horizontal line on a graph. One student says 'the object has stopped!', while another says 'no, it is cruising at 20 m/s!'. How can BOTH students be right?",
        idea:
          "They are reading **different y-axes**! A horizontal line on a **distance–time** graph means distance is not changing (**stationary**). A horizontal line (above zero) on a **velocity–time** graph means velocity is not changing (**constant non-zero velocity**). Always check the y-axis label FIRST!",
      },
      body: `### Core Motion Equations
- **Average speed:** {{v = d / t}} (m/s = m ÷ s)
- **Acceleration** (rate of change of velocity): {{a = (v - u) / t}}
  where {{u}} = initial velocity (m/s), {{v}} = final velocity (m/s), {{t}} = time taken (s), and {{a}} = acceleration in **m/s²**. A negative value means **deceleration**.

### Side-by-Side Graph Decoder (Always Read the Y-Axis First!)
| Graph feature | Distance–Time Graph (y = distance) | Velocity–Time Graph (y = velocity) |
|---|---|---|
| **Horizontal line (above 0)** | **Stationary** (speed = 0) | **Constant velocity** (acceleration = 0) |
| **Straight diagonal line up** | **Constant speed** (steeper = faster) | **Constant acceleration** (steeper = greater {{a}}) |
| **Straight diagonal line down** | Moving back to start at constant speed | **Constant deceleration** (slowing down) |
| **Upward-curving line (steeper)** | **Accelerating** (speed increasing) | Increasing acceleration |
| **Gradient (slope = rise ÷ run)** | **Speed** ({{Delta d / Delta t}}) | **Acceleration** ({{(v - u) / t}}) |
| **Area under the graph** | *Not meaningful* | **Total distance travelled** (in metres!) |

### Finding Distance from a Velocity–Time Graph
Split the shape beneath the velocity–time line into neat geometric shapes:
- **Rectangle** (constant velocity section): {{"area" = "base" * "height" = t * v}}
- **Triangle** (uniform acceleration from rest or braking to rest): {{"area" = 1/2 * "base" * "height"}}
- **Trapezium** (accelerating from {{u}} to {{v}}): {{"area" = 1/2 * (u + v) * t}} (or split into a rectangle + triangle!)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side comparison of a distance-time graph and a velocity-time graph highlighting gradients and shaded area under the velocity-time graph">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="21" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Motion Graph Decoder: Check the Y-Axis First!</text>
  <!-- Left Panel: Distance-Time -->
  <rect x="14" y="32" width="260" height="206" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="144" y="50" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Distance–Time Graph</text>
  <!-- Axes -->
  <line x1="48" y1="186" x2="254" y2="186" stroke="var(--ink)" stroke-width="2" />
  <line x1="48" y1="186" x2="48" y2="66" stroke="var(--ink)" stroke-width="2" />
  <text x="150" y="204" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Time (s)</text>
  <text x="30" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 30 128)">Distance (m)</text>
  <!-- Curve: constant speed (48,186)->(120,126), stationary (120,126)->(178,126), steeper constant speed (178,126)->(240,74) -->
  <polyline points="48,186 120,126 178,126 240,74" fill="none" stroke="var(--brand)" stroke-width="3" />
  <text x="72" y="142" font-size="9.5" font-weight="700" fill="var(--brand)">Steady</text>
  <text x="149" y="117" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">Stationary</text>
  <text x="220" y="115" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Faster!</text>
  <rect x="26" y="212" width="236" height="20" rx="5" fill="var(--surface)" stroke="var(--line)" />
  <text x="144" y="226" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">Gradient = Speed (m/s)</text>

  <!-- Right Panel: Velocity-Time -->
  <rect x="286" y="32" width="260" height="206" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="416" y="50" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Velocity–Time Graph</text>
  <!-- Shaded area under graph -->
  <polygon points="320,186 380,96 472,96 516,186" fill="var(--brand-soft)" />
  <!-- Dashed vertical splits for triangle + rect + triangle -->
  <line x1="380" y1="96" x2="380" y2="186" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="3,2" />
  <line x1="472" y1="96" x2="472" y2="186" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="3,2" />
  <!-- Axes -->
  <line x1="320" y1="186" x2="528" y2="186" stroke="var(--ink)" stroke-width="2" />
  <line x1="320" y1="186" x2="320" y2="66" stroke="var(--ink)" stroke-width="2" />
  <text x="424" y="204" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Time (s)</text>
  <text x="302" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 302 128)">Velocity (m/s)</text>
  <!-- Velocity-time line -->
  <polyline points="320,186 380,96 472,96 516,186" fill="none" stroke="var(--good)" stroke-width="3" />
  <text x="342" y="120" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Accel.</text>
  <text x="426" y="88" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">Constant v</text>
  <text x="506" y="120" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">Decel.</text>
  <text x="426" y="150" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">Area = Distance</text>
  <rect x="298" y="212" width="236" height="20" rx="5" fill="var(--surface)" stroke="var(--line)" />
  <text x="416" y="226" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">Gradient = Accel. | Area = Distance</text>
</svg>`,
      diagramCaption: "Identical line shapes mean completely different motions on distance–time vs velocity–time graphs — check the vertical axis before answering!",
      workedExamples: [
        {
          title: "Reading Speed & Overall Average Speed on a Distance–Time Graph",
          problem:
            "A cyclist rides 180 m at steady speed in 15 s, stops at traffic lights for 10 s, and then rides a further 120 m in 15 s. Calculate (a) her speed during the first stage and (b) her overall average speed for the entire journey.",
          steps: [
            "(a) First stage speed = gradient = {{180 / 15 = 12}} m/s.",
            "(b) Total distance = {{180 + 0 + 120 = 300}} m; total time (including the stop!) = {{15 + 10 + 15 = 40}} s.",
            "Overall average speed = {{300 / 40 = 7.5}} m/s.",
          ],
          answer: "(a) 12 m/s; (b) 7.5 m/s",
          yourTurn: {
            question:
              "A runner covers 240 m in 30 s. Calculate their average speed in m/s.",
            answer: { type: "number", value: 8, display: "8 m/s" },
            solution: "Average speed = distance ÷ time = 240 ÷ 30 = 8 m/s.",
          },
        },
        {
          title: "Acceleration and Total Distance on a Velocity–Time Graph",
          problem:
            "An MRT train accelerates uniformly from rest (0 m/s) to 20 m/s in 10 s, travels at a constant 20 m/s for 25 s, and then decelerates uniformly to rest in 5 s. Calculate (a) its initial acceleration and (b) the total distance travelled.",
          steps: [
            "(a) Initial acceleration = gradient = {{(v - u) / t = (20 - 0) / 10 = 2.0}} m/s².",
            "(b) Split the area under the velocity–time graph into three shapes:",
            "Triangle 1 (acceleration): {{1/2 * 10 * 20 = 100}} m.",
            "Rectangle (constant speed): {{25 * 20 = 500}} m.",
            "Triangle 2 (braking): {{1/2 * 5 * 20 = 50}} m.",
            "Total distance = {{100 + 500 + 50 = 650}} m.",
          ],
          answer: "(a) 2.0 m/s²; (b) 650 m",
          yourTurn: {
            question:
              "A racing drone accelerates uniformly from rest (0 m/s) to 18 m/s in 6 s. Use the area of the velocity–time triangle to calculate the distance travelled in metres.",
            answer: { type: "number", value: 54, display: "54 m" },
            solution: "Distance = area of triangle = 0.5 × base × height = 0.5 × 6 × 18 = 54 m.",
          },
        },
      ],
      keyPoints: [
        "Always check the **y-axis label** before interpreting a motion graph!",
        "On a **distance–time** graph: **gradient = speed**, horizontal line = **stationary**, steeper = faster, curving steeper = accelerating.",
        "On a **velocity–time** graph: **gradient = acceleration** ({{a = (v - u) / t}}), horizontal line = **constant velocity**, **area under graph = distance travelled**.",
        "Overall average speed is **total distance ÷ total time** (including any stationary stops) — never simply average two stage speeds!",
        "A **negative gradient** on a velocity–time graph represents **deceleration** (slowing down).",
      ],
      whyItWorks:
        "Why does the area under a velocity–time graph equal distance? Because {{d = v * t}}! For constant velocity {{v}} over time {{t}}, the graph is a rectangle of height {{v}} and width {{t}}, whose area is literally {{v * t = d}}. When speed rises steadily from {{0}} to {{v}}, the average speed is {{1/2 v}}, so {{d = 1/2 v * t}} — which is the exact area of a triangle!",
      strategies: [
        "**Y-Axis Stamp:** Literally circle 'Distance' or 'Velocity' on the vertical axis of any exam graph before reading a single word of the question.",
        "**Triangles + Rectangles:** Never guess a tricky trapezium formula if unsure — drop vertical dashed lines to slice any velocity–time graph into simple rectangles and right-angled triangles.",
        "**Unit Check:** Speed is in **m/s**, acceleration is in **m/s²** (metres per second *per second*).",
      ],
      thinkDeeper:
        "Sketch in your head the velocity–time graph of the skydiver from Section 1 from jump-out to landing. What does the gradient look like at {{t = 0}}, just before terminal velocity, at the instant the parachute opens, and just before touchdown?",
    },

    // =========================================================================
    // SECTION 3: Pressure in Solids, Liquids & Gases
    // =========================================================================
    {
      id: "pressure-solids-fluids",
      heading: "Pressure in Solids, Liquids & Gases",
      discovery: {
        problem:
          "A 600 N person sinks knee-deep into soft snow in hiking boots, yet walks easily across the exact same snow wearing wide snowshoes. Did the snowshoes reduce the person's weight?",
        idea:
          "No — the weight is slightly *larger* with snowshoes on! Snowshoes spread the exact same downward force over a **much larger contact area**, dramatically reducing the **pressure** ({{P = F / A}}) below the snow's crushing point.",
      },
      body: `### Pressure in Solids
**Pressure** is the force acting per unit surface area (at right angles to the surface):

{{P = F / A}}

- {{P}} = pressure in **pascals (Pa)**, where {{1 "Pa" = 1 "N/m"^2}} (or **N/cm²** if area is in cm²)
- {{F}} = force in **newtons (N)**
- {{A}} = contact area in **m²** (or **cm²** — stay consistent!)

**Crucial Unit Conversion:** {{1 "m"^2 = 100 "cm" * 100 "cm" = 10 000 "cm"^2}}! Dividing cm² by 100 instead of 10 000 is a classic exam trap.

- **High pressure (small area):** sharp knives, pins, nails, ice skates, studs on football boots concentrate force onto a tiny area so they cut or grip easily.
- **Low pressure (large area):** snowshoes, wide bulldozer caterpillar tracks, camel feet and thick rucksack straps spread force over a large area to prevent sinking or bruising.

### Pressure in Liquids
Unlike a rigid solid (which pushes mainly downward), a **liquid** exerts pressure **equally in all directions** at any given depth because liquid particles are free to move and collide with every wall. Liquid pressure depends on **two** factors:
1. **Depth:** Pressure **increases with depth** because there is a greater weight of liquid pressing down from above. (That is why hydroelectric **dam walls are built much thicker at the bottom**, and why the lowest hole in a spouting water bottle shoots farthest!)
2. **Density of the liquid:** Denser liquids (like seawater or mercury compared with fresh water) exert greater pressure at the same depth.
*(In upper secondary you will use {{P = rho * g * h}} — notice container shape and width do NOT affect pressure at a given depth!)*

### Pressure in Gases & Atmospheric Pressure
- **Gas pressure** is caused by fast-moving gas particles **colliding** with the inner walls of their container, exerting tiny forces across the wall area.
- **Higher temperature** (at fixed volume) → particles move faster → collide **more frequently and harder** → higher pressure.
- **Smaller volume / pumping more gas in** (at fixed temperature) → more particles per unit volume → **more frequent collisions** → higher pressure.
- **Atmospheric pressure** is caused by the weight of the air column above us (about **101 000 Pa** or **101 kPa** at sea level). As **altitude increases**, there is less air above and air density drops, so **atmospheric pressure decreases** (making ears pop on flights!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel diagram showing solid pressure P equals F over A comparing heel vs snowshoe, liquid pressure increasing with depth in a spouting tank, and gas particles colliding with container walls">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="21" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Pressure Across States of Matter: Solids, Liquids &amp; Gases</text>
  <!-- Panel 1: Solids P = F / A -->
  <rect x="14" y="34" width="170" height="204" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="99" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. Solids (P = F ÷ A)</text>
  <!-- Narrow block -->
  <rect x="50" y="76" width="22" height="58" rx="3" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2" />
  <line x1="61" y1="60" x2="61" y2="74" stroke="var(--bad)" stroke-width="2.5" />
  <text x="61" y="150" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">Small A</text>
  <text x="61" y="162" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">HIGH P</text>
  <!-- Wide block -->
  <rect x="104" y="108" width="66" height="26" rx="3" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2" />
  <line x1="137" y1="88" x2="137" y2="106" stroke="var(--good)" stroke-width="2.5" />
  <text x="137" y="150" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Large A</text>
  <text x="137" y="162" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">LOW P</text>
  <line x1="26" y1="134" x2="174" y2="134" stroke="var(--ink)" stroke-width="2" />
  <text x="99" y="186" text-anchor="middle" font-size="10" fill="var(--ink)">Same force F:</text>
  <text x="99" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">smaller area ⇒ higher P</text>
  <text x="99" y="220" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">1 Pa = 1 N/m²</text>

  <!-- Panel 2: Liquids depth -->
  <rect x="195" y="34" width="170" height="204" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">2. Liquids (Depth)</text>
  <!-- Water tank -->
  <rect x="212" y="72" width="54" height="106" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2" />
  <!-- 3 water jets from right wall -->
  <path d="M 266 96 Q 286 98 292 178" fill="none" stroke="var(--brand)" stroke-width="2.2" />
  <path d="M 266 128 Q 304 130 318 178" fill="none" stroke="var(--brand)" stroke-width="2.5" />
  <path d="M 266 160 Q 332 162 348 178" fill="none" stroke="var(--bad)" stroke-width="3" />
  <text x="315" y="92" font-size="9" font-weight="700" fill="var(--ink-2)">Low P</text>
  <text x="330" y="148" font-size="9.5" font-weight="800" fill="var(--bad)">Highest P!</text>
  <line x1="205" y1="178" x2="355" y2="178" stroke="var(--ink)" stroke-width="1.8" />
  <text x="280" y="198" text-anchor="middle" font-size="10" fill="var(--ink)">Greater depth ⇒ more weight</text>
  <text x="280" y="212" text-anchor="middle" font-size="10" fill="var(--ink)">above ⇒ acts in all directions.</text>

  <!-- Panel 3: Gas collisions -->
  <rect x="376" y="34" width="170" height="204" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="461" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">3. Gases (Collisions)</text>
  <!-- Sealed box -->
  <rect x="404" y="74" width="114" height="96" rx="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="2" />
  <!-- Fast gas particles with motion arrows hitting walls -->
  <circle cx="426" cy="96" r="5" fill="var(--brand)" />
  <line x1="421" y1="96" x2="407" y2="96" stroke="var(--bad)" stroke-width="1.8" />
  <circle cx="494" cy="102" r="5" fill="var(--brand)" />
  <line x1="499" y1="102" x2="514" y2="102" stroke="var(--bad)" stroke-width="1.8" />
  <circle cx="456" cy="126" r="5" fill="var(--brand)" />
  <line x1="456" y1="121" x2="472" y2="108" stroke="var(--ink-2)" stroke-width="1.6" />
  <circle cx="436" cy="152" r="5" fill="var(--brand)" />
  <line x1="436" y1="157" x2="436" y2="167" stroke="var(--bad)" stroke-width="1.8" />
  <circle cx="486" cy="146" r="5" fill="var(--brand)" />
  <line x1="491" y1="146" x2="514" y2="146" stroke="var(--bad)" stroke-width="1.8" />
  <text x="461" y="190" text-anchor="middle" font-size="10" fill="var(--ink)">Particles hit container walls.</text>
  <text x="461" y="204" text-anchor="middle" font-size="10" fill="var(--ink)">Hotter / smaller V ⇒ more</text>
  <text x="461" y="218" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">frequent &amp; harder hits!</text>
</svg>`,
      diagramCaption: "Solid pressure depends on contact area (P = F/A); liquid pressure grows with depth and density; gas pressure comes from particle collisions with container walls.",
      workedExamples: [
        {
          title: "Comparing Boots vs Snowshoes Using P = F ÷ A",
          problem:
            "A 600 N hiker stands on snow. Her boots have a total sole area of {{0.04 \"m\"^2}}, while her snowshoes have a total area of {{0.24 \"m\"^2}}. Calculate the pressure exerted on the snow in each case.",
          steps: [
            "Boots: {{P = F / A = 600 / 0.04 = 15 000}} Pa (or 15 kPa).",
            "Snowshoes: {{P = F / A = 600 / 0.24 = 2500}} Pa (or 2.5 kPa).",
            "Increasing the area 6 times cuts the pressure to one-sixth!",
          ],
          answer: "Boots: 15 000 Pa; Snowshoes: 2500 Pa",
          yourTurn: {
            question:
              "A concrete block weighs 4800 N and rests flat on a base of area 0.60 m². Calculate the pressure it exerts on the ground in pascals (Pa).",
            answer: { type: "number", value: 8000, display: "8000 Pa" },
            solution: "Pressure = F ÷ A = 4800 ÷ 0.60 = 8000 Pa.",
          },
        },
        {
          title: "Pressure in N/cm² vs Pascals (N/m²)",
          problem:
            "A rectangular brick weighs 36 N and rests on a face measuring 15 cm by 8 cm. Calculate the pressure in (a) N/cm² and (b) pascals (Pa).",
          steps: [
            "Find contact area in cm²: {{A = 15 * 8 = 120 \"cm\"^2}}.",
            "(a) Pressure in N/cm²: {{P = 36 / 120 = 0.30}} N/cm².",
            "(b) Convert area to m² by dividing by 10 000: {{A = 120 / 10 000 = 0.012 \"m\"^2}}.",
            "Pressure in Pa: {{P = 36 / 0.012 = 3000}} Pa (notice {{1 \"N/cm\"^2 = 10 000 \"Pa\"}}!).",
          ],
          answer: "(a) 0.30 N/cm²; (b) 3000 Pa",
          yourTurn: {
            question:
              "A chef pushes down on a sharp knife with a force of 24 N along a cutting edge of area 0.4 cm². Calculate the pressure exerted in N/cm².",
            answer: { type: "number", value: 60, display: "60 N/cm²" },
            solution: "Pressure = F ÷ A = 24 ÷ 0.4 = 60 N/cm².",
          },
        },
      ],
      keyPoints: [
        "**Pressure** {{P = F / A}} — measured in **pascals (Pa = N/m²)** or **N/cm²**.",
        "Remember {{1 \"m\"^2 = 10 000 \"cm\"^2}} (never divide cm² by 100!).",
        "**Liquid pressure** acts in all directions and increases with **depth** and **liquid density**.",
        "**Gas pressure** results from particles **colliding with container walls**; heating or compressing increases collision frequency/force and raises pressure.",
        "**Atmospheric pressure** decreases with **altitude** because there is less weight of air above.",
      ],
      whyItWorks:
        "Why doesn't a wide swimming pool have more pressure at 2 m depth than a narrow 2 m vertical pipe? Because doubling the pool's width doubles BOTH the weight of water {{F}} AND the bottom area {{A}} — so {{F / A}} stays **identical**! Only vertical **depth** and **density** determine the weight of liquid directly above each square metre.",
      strategies: [
        "**Check Both Feet / Four Tyres:** If a question gives the area of *one* shoe or *one* car tyre, multiply by 2 (or 4) to get the total contact area before dividing!",
        "**State Both Force and Area:** When explaining sharp knives or snowshoes, explicitly mention BOTH that force is unchanged AND how area changes pressure.",
        "**Gas Pressure Mantra:** Always link gas pressure changes directly to **particle collisions with the container walls** (frequency and force of hits).",
      ],
      thinkDeeper:
        "If you drink from a sealed juice carton through a straw and keep sucking after the juice is gone, the carton collapses inward violently. Does the straw 'pull' the walls inward, or does something outside push them? Explain using internal vs external atmospheric gas pressure!",
    },

    // =========================================================================
    // SECTION 4: Moments, Levers & Hooke's Law
    // =========================================================================
    {
      id: "moments-hookes-law",
      heading: "Moments, Levers & Hooke's Law",
      discovery: {
        problem:
          "Try pushing a heavy classroom door open near its **hinges** versus near the **handle** at the far edge. Why is it dramatically easier near the handle even though the door's weight and friction haven't changed?",
        idea:
          "A turning effect (**moment**) depends on BOTH the force AND the **perpendicular distance from the pivot** ({{M = F * d}}). Doubling the distance from the hinge halves the force you need to produce the exact same turning moment!",
      },
      body: `### Moments & Levers
The turning effect of a force about a pivot (fulcrum) is called its **moment**:

{{M = F * d}}

- {{M}} = moment in **newton-metres (N m or Nm)**
- {{F}} = force in **newtons (N)**
- {{d}} = **perpendicular distance** from the pivot to the line of action of the force in **metres (m)**

A **lever** (crowbar, spanner, wheelbarrow, door handle) acts as a **force multiplier**: applying a small effort force far from the pivot creates a large moment that overcomes a huge load close to the pivot.

### The Principle of Moments
> **Principle of Moments:** For an object in **rotational equilibrium** (balanced, not turning), the **sum of clockwise moments** about any pivot equals the **sum of anticlockwise moments** about that same pivot:
> {{"Sum of clockwise moments" = "Sum of anticlockwise moments"}}

If multiple weights sit on the same side of a seesaw, calculate {{F * d}} for each weight separately and **add** them together!

### Hooke's Law & Stretching Springs
When you hang weights from a helical spring, it stretches by an **extension** {{e}}:

{{e = "stretched length" - "original (unstretched) length"}}

> **Hooke's Law:** The extension of a spring is **directly proportional** to the stretching force, provided the **limit of proportionality** is not exceeded:
> {{F = k * e}}

- {{F}} = stretching force (N)
- {{k}} = **spring constant** (stiffness) in **N/m** (or N/cm) — equal to the **gradient** of a Force–Extension graph! A stiffer spring has a larger {{k}} and a steeper straight line.
- {{e}} = **extension** in **m** (or cm) — NEVER use the total stretched length!

### Elastic vs Plastic (Inelastic) Deformation
- **Elastic deformation:** The spring obeys Hooke's Law (straight line through the origin on a force–extension graph) and **returns to its exact original length** when the force is removed.
- **Past the limit of proportionality / elastic limit:** The graph curves (force and extension are no longer proportional), and the spring undergoes **plastic (inelastic) deformation** — it stays **permanently stretched** even after the load is taken off.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram showing a balanced seesaw illustrating Principle of Moments and a Force-Extension graph illustrating Hooke's Law and the limit of proportionality">
  <rect width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="21" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Balanced Moments (M = F × d) &amp; Hooke's Law (F = k × e)</text>
  <!-- Left panel: Principle of Moments -->
  <rect x="14" y="34" width="260" height="204" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="144" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Principle of Moments (Balanced)</text>
  <!-- Pivot triangle at x=160, y=132 -->
  <polygon points="160,132 144,162 176,162" fill="var(--ink-2)" />
  <!-- Beam from x=36 to x=254 -->
  <rect x="36" y="124" width="218" height="8" rx="3" fill="var(--ink)" />
  <!-- Left force 400 N at x=52 (d = 1.8 m -> 108px) -->
  <rect x="38" y="96" width="28" height="28" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <text x="52" y="114" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">400N</text>
  <line x1="52" y1="132" x2="52" y2="156" stroke="var(--brand)" stroke-width="2.2" />
  <polygon points="48,153 52,161 56,153" fill="var(--brand)" />
  <!-- Right force 600 N at x=232 (d = 1.2 m -> 72px) -->
  <rect x="218" y="92" width="32" height="32" rx="4" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2" />
  <text x="234" y="112" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">600N</text>
  <line x1="234" y1="132" x2="234" y2="156" stroke="var(--bad)" stroke-width="2.2" />
  <polygon points="230,153 234,161 238,153" fill="var(--bad)" />
  <!-- Distance labels -->
  <line x1="52" y1="82" x2="160" y2="82" stroke="var(--brand)" stroke-width="1.5" />
  <text x="106" y="77" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">1.8 m (ACW)</text>
  <line x1="160" y1="82" x2="234" y2="82" stroke="var(--bad)" stroke-width="1.5" />
  <text x="197" y="77" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">1.2 m (CW)</text>
  <!-- Balance check box -->
  <rect x="26" y="176" width="236" height="50" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="144" y="194" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">ACW: 400 × 1.8 = 720 Nm</text>
  <text x="144" y="210" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">CW: 600 × 1.2 = 720 Nm</text>
  <text x="144" y="222" text-anchor="middle" font-size="9" font-weight="700" fill="var(--good)">Equal ⇒ Rotational Equilibrium!</text>

  <!-- Right panel: Hooke's Law graph -->
  <rect x="286" y="34" width="260" height="204" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="416" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Hooke's Law: Force vs Extension</text>
  <!-- Axes -->
  <line x1="322" y1="186" x2="528" y2="186" stroke="var(--ink)" stroke-width="2" />
  <line x1="322" y1="186" x2="322" y2="66" stroke="var(--ink)" stroke-width="2" />
  <text x="425" y="203" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Extension e (m)</text>
  <text x="304" y="126" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 304 126)">Force F (N)</text>
  <!-- Straight proportional section from (322,186) to (442,102) -->
  <line x1="322" y1="186" x2="442" y2="102" stroke="var(--good)" stroke-width="3" />
  <!-- Curved plastic section past limit -->
  <path d="M 442 102 Q 486 78 520 76" fill="none" stroke="var(--bad)" stroke-width="3" stroke-dasharray="5,3" />
  <!-- Limit of proportionality dot -->
  <circle cx="442" cy="102" r="5" fill="var(--bad)" />
  <text x="444" y="122" font-size="9.5" font-weight="800" fill="var(--bad)">Limit of</text>
  <text x="444" y="133" font-size="9.5" font-weight="800" fill="var(--bad)">proportionality</text>
  <text x="372" y="132" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)" transform="rotate(-34 372 132)">Linear (F = ke)</text>
  <rect x="298" y="212" width="236" height="20" rx="5" fill="var(--surface)" stroke="var(--line)" />
  <text x="416" y="226" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">Gradient = Spring Constant k (N/m)</text>
</svg>`,
      diagramCaption: "Balanced moments satisfy Σ(CW) = Σ(ACW); Hooke's Law holds ONLY along the straight-line region through the origin up to the limit of proportionality.",
      workedExamples: [
        {
          title: "Balancing a Seesaw with the Principle of Moments",
          problem:
            "Maya (weight 400 N) sits 1.8 m to the left of a seesaw's central pivot. How far to the right of the pivot must her brother (weight 600 N) sit so the seesaw balances horizontally?",
          steps: [
            "Calculate Maya's anticlockwise moment: {{M_\"ACW\" = 400 * 1.8 = 720}} Nm.",
            "For equilibrium, clockwise moment must also equal 720 Nm: {{600 * d = 720}}.",
            "Solve for distance: {{d = 720 / 600 = 1.2}} m.",
          ],
          answer: "1.2 m to the right of the pivot",
          yourTurn: {
            question:
              "A mechanic pulls a spanner with a perpendicular force of 85 N at a distance of 0.30 m from the centre of a bolt. Calculate the moment produced in Nm.",
            answer: { type: "number", value: 25.5, display: "25.5 Nm" },
            solution: "Moment = F × d = 85 × 0.30 = 25.5 Nm.",
          },
        },
        {
          title: "Hooke's Law — Extension vs Total Stretched Length",
          problem:
            "A steel spring has an unstretched length of 12 cm. When a 6.0 N weight is hung from it, its total length becomes 27 cm. Calculate (a) the extension in metres, (b) the spring constant {{k}} in N/m, and (c) the new extension produced by a 10 N load (within the limit of proportionality).",
          steps: [
            "(a) Extension {{e = 27 - 12 = 15 \"cm\" = 0.15 \"m\"}} (never use 27 cm!).",
            "(b) Rearrange {{F = k * e}} to {{k = F / e = 6.0 / 0.15 = 40}} N/m.",
            "(c) For 10 N: {{e = F / k = 10 / 40 = 0.25}} m (25 cm; total length = 12 + 25 = 37 cm).",
          ],
          answer: "(a) 0.15 m; (b) 40 N/m; (c) 0.25 m",
          yourTurn: {
            question:
              "A spring has a spring constant of 80 N/m. Within the limit of proportionality, what force in newtons is required to give it an extension of 0.15 m?",
            answer: { type: "number", value: 12, display: "12 N" },
            solution: "F = k × e = 80 × 0.15 = 12 N.",
          },
        },
      ],
      keyPoints: [
        "**Moment** {{M = F * d}} (unit: N m or Nm), where {{d}} is the **perpendicular** distance from the pivot.",
        "**Principle of Moments:** In equilibrium, sum of clockwise moments = sum of anticlockwise moments.",
        "**Hooke's Law:** {{F = k * e}} up to the **limit of proportionality** (straight line through the origin on a force–extension graph).",
        "**Extension** = stretched length − original length; always subtract the unstretched length first!",
        "**Elastic** deformation reverses when the load is removed; **plastic (inelastic)** deformation is permanent.",
      ],
      whyItWorks:
        "Why does a crowbar let you lift a 1000 N boulder using only a 200 N push without breaking conservation of energy? Because your hand is 5 times further from the pivot, so you must push your end **5 times further** ({{5d}}) while the boulder rises only {{d}}. Work in ({{200 * 5d = 1000d}}) equals work out ({{1000 * d}}) — levers multiply **force**, never energy!",
      strategies: [
        "**Pin the Pivot:** Put your finger on the pivot in the diagram, then imagine which way each arrow alone would spin the beam (clockwise vs anticlockwise).",
        "**Subtract Original Length First:** On every spring question, highlight whether the number given is *stretched length* or *extension* before touching {{F = k * e}}.",
        "**Watch Units on Moments:** Convert cm to m (÷ 100) whenever the answer is requested in **N m**.",
      ],
      thinkDeeper:
        "Suppose you connect two identical springs (each with spring constant {{k = 40 \"N/m\"}}) **side by side in parallel** versus **end to end in series**, and hang the same 12 N weight from each arrangement. Which arrangement stretches further, and what is the effective spring constant of each?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the difference between a scalar and a vector quantity?", back: "A **scalar** has magnitude only (e.g. mass, speed, distance); a **vector** has both magnitude and **direction** (e.g. force, velocity, acceleration)." },
      { front: "State Newton's First Law of Motion.", back: "If the resultant force is zero (balanced forces), a stationary object stays stationary and a moving object continues at **constant velocity**." },
      { front: "State Newton's Second Law equation and units.", back: "{{F = m * a}}: resultant force (N) = mass (kg) × acceleration (m/s²)." },
      { front: "Distinguish between mass and weight.", back: "**Mass** (kg) is the amount of matter and stays constant everywhere; **weight** ({{W = m * g}}, in N) is the gravitational force on a mass and varies with {{g}}." },
      { front: "Why does a falling skydiver reach terminal velocity?", back: "As speed increases, air resistance increases until upward air resistance **equals** downward weight (resultant force = 0), so acceleration drops to zero and velocity stays constant." },
      { front: "What does a horizontal line mean on a distance–time graph vs a velocity–time graph?", back: "On a **distance–time** graph it means **stationary** (speed = 0). On a **velocity–time** graph (above zero) it means **constant non-zero velocity** (acceleration = 0)." },
      { front: "What do the gradient and area under a velocity–time graph represent?", back: "**Gradient** = acceleration ({{a = (v - u) / t}}); **area under the graph** = total **distance travelled** (m)." },
      { front: "State the equation and SI unit for solid pressure.", back: "{{P = F / A}}, measured in **pascals (Pa)**, where {{1 \"Pa\" = 1 \"N/m\"^2}}." },
      { front: "How many cm² are in 1 m²?", back: "{{1 \"m\"^2 = 100 * 100 = 10 000 \"cm\"^2}} (divide cm² by 10 000 to convert to m²)." },
      { front: "State two factors that increase pressure inside a liquid.", back: "Increasing **depth** (greater weight of liquid above) and increasing **liquid density**; liquid pressure acts equally in all directions." },
      { front: "How do gas particles create pressure on container walls?", back: "Fast-moving gas particles **collide** with the container walls, exerting forces over the wall area; more frequent or harder collisions increase pressure." },
      { front: "State the equation for a moment and the Principle of Moments.", back: "{{M = F * d}} (perpendicular distance from pivot, unit Nm). In equilibrium: **sum of clockwise moments = sum of anticlockwise moments**." },
      { front: "State Hooke's Law and define the spring constant k.", back: "{{F = k * e}}: extension is directly proportional to force up to the **limit of proportionality**. {{k}} (N/m) measures spring stiffness (= gradient of F–e graph)." },
      { front: "Distinguish between elastic and plastic (inelastic) deformation.", back: "**Elastic:** returns to its exact original shape when force is removed. **Plastic (inelastic):** permanently deformed and does not return to its original length." },
    ],
    mustKnow: [
      "Calculate 1D resultant forces and predict whether an object accelerates, decelerates, stays at rest, or moves at constant velocity.",
      "Apply {{F = m * a}} and {{W = m * g}} and rearrange for any unknown.",
      "Explain every stage of a skydiver's jump (including opening the parachute) in terms of weight, air resistance, resultant force and acceleration.",
      "Interpret gradients and shapes on distance–time and velocity–time graphs without confusing the two.",
      "Calculate acceleration using {{a = (v - u) / t}} and distance travelled from the area under a velocity–time graph.",
      "Calculate pressure using {{P = F / A}}, including multi-foot/multi-tyre contact areas and {{cm^2}} to {{m^2}} conversions.",
      "Explain why liquid pressure increases with depth and density, and explain gas & atmospheric pressure using particle collisions.",
      "Calculate moments ({{M = F * d}}) and solve equilibrium problems using the Principle of Moments.",
      "Calculate extension ({{e = L - L_0}}), spring constant {{k}}, and force using Hooke's Law ({{F = k * e}}).",
      "Identify the limit of proportionality on a force–extension graph and distinguish elastic from plastic deformation.",
    ],
    misconceptions: [
      {
        wrong: "An object moving at constant speed needs an unbalanced forward force to keep it moving.",
        right: "By Newton's 1st Law, **constant velocity requires balanced forces** (resultant force = 0); forward thrust just equals resistive drag.",
      },
      {
        wrong: "When a skydiver opens their parachute, they shoot upward through the sky.",
        right: "The huge upward air resistance creates an **upward resultant force** that makes them **decelerate while still falling downward** (videos only look upward because the camera operator keeps falling fast!).",
      },
      {
        wrong: "A flat line on a velocity–time graph means the object has stopped moving.",
        right: "A horizontal line above zero on a velocity–time graph means **constant non-zero velocity** (only a flat line at {{v = 0}} is stationary).",
      },
      {
        wrong: "To convert cm² to m², divide by 100.",
        right: "Because area is length × width, {{1 \"m\"^2 = 100 * 100 = 10 000 \"cm\"^2}} — divide cm² by **10 000**!",
      },
      {
        wrong: "Hooke's Law uses the total stretched length of the spring for e.",
        right: "{{e}} in {{F = k * e}} is ALWAYS the **extension** (stretched length minus original unstretched length).",
      },
      {
        wrong: "Mass and weight are the same thing and both are measured in kilograms.",
        right: "**Mass** (kg) is the amount of matter and never changes with gravity; **weight** (N) is the gravitational force {{W = m * g}}.",
      },
    ],
    examMistakes: [
      "Plugging ONLY the driving force into {{F = m * a}} instead of subtracting drag first to get the **resultant force**.",
      "Forgetting to multiply one shoe's (or one tyre's) contact area by 2 (or 4) before applying {{P = F / A}}.",
      "Confusing distance–time graphs with velocity–time graphs because you didn't check the y-axis label.",
      "Using {{1/2 * b * h}} on a rectangular region (or forgetting the {{1/2}} on a triangular region!) when finding area under a velocity–time graph.",
      "Using total stretched length instead of **extension** ({{L - L_0}}) in {{F = k * e}}.",
      "Forgetting to convert **cm to m** when calculating moments in **N m** or spring constants in **N/m**.",
      "Averaging stage speeds directly instead of dividing **total distance by total time** for overall average speed.",
    ],
    mnemonics: [
      {
        topic: "Velocity–Time Graph Rules",
        device: "G-A-A-D (Gradients Are Acceleration; Area = Distance)",
        explanation: "On a v–t graph: **G**radient = **A**cceleration, **A**rea under graph = **D**istance.",
      },
      {
        topic: "Hooke's Law Extension Reminder",
        device: "E is Extra, never Entire!",
        explanation: "In {{F = k * e}}, **e** is strictly the **extra** length stretched beyond the original unstretched length.",
      },
      {
        topic: "Moments Equilibrium",
        device: "Clock = Anti-Clock at the Pivot",
        explanation: "For any balanced beam or seesaw, total **Clock**wise moments = total **Anti-Clock**wise moments about the pivot.",
      },
    ],
    realWorld: [
      {
        title: "Marina Barrage & Hydroelectric Dam Walls",
        emoji: "🌊",
        detail: "Dam walls are engineered far thicker at the base than at the crest because liquid pressure increases linearly with water depth and pushes horizontally against the wall.",
      },
      {
        title: "Formula 1 Singapore Night Race Aero & Braking",
        emoji: "🏎️",
        detail: "F1 cars use sculpted wings for downward force and carbon brakes delivering over 50 m/s² deceleration — steep downward slopes on their telemetry velocity–time graphs!",
      },
      {
        title: "Tower Cranes & Concrete Counterweights",
        emoji: "🏗️",
        detail: "Look at any Singapore skyline tower crane: massive concrete blocks sit on the short rear arm so their anticlockwise moment balances the clockwise moment of heavy steel loads lifted far out on the jib.",
      },
      {
        title: "Aircraft Cabin Pressurisation",
        emoji: "✈️",
        detail: "At 11 km cruising altitude, outside atmospheric pressure drops to less than a quarter of sea-level pressure, so aircraft cabins are sealed and pressurised to keep oxygen particle density safe for passengers.",
      },
      {
        title: "Car Suspension Coil Springs",
        emoji: "🚗",
        detail: "Suspension springs are engineered with high spring constants ({{k}}) and wide elastic limits so they absorb pothole bumps elastically without suffering permanent plastic deformation.",
      },
    ],
    videos: [
      {
        title: "Resultant Forces, Newton's Laws & Terminal Velocity",
        channel: "Cognito / Freesciencelessons",
        url: "https://www.youtube.com/results?search_query=resultant+forces+newtons+laws+terminal+velocity+GCSE+physics",
      },
      {
        title: "Distance-Time and Velocity-Time Graphs Explained",
        channel: "Cognito / Physics Online",
        url: "https://www.youtube.com/results?search_query=distance+time+velocity+time+graphs+GCSE+physics+cognito",
      },
      {
        title: "Pressure in Solids, Liquids and Gases",
        channel: "Cognito / FuseSchool",
        url: "https://www.youtube.com/results?search_query=pressure+solids+liquids+gases+GCSE+physics",
      },
      {
        title: "Moments, Levers and Hooke's Law",
        channel: "Freesciencelessons / Cognito",
        url: "https://www.youtube.com/results?search_query=moments+principle+of+moments+hookes+law+GCSE+physics",
      },
    ],
    formulas: [
      { name: "Newton's Second Law", formula: "{{F = m * a}}", note: "Resultant force F (N) = mass m (kg) × acceleration a (m/s²)." },
      { name: "Weight", formula: "{{W = m * g}}", note: "Weight W (N) = mass m (kg) × gravitational field strength g (≈ 9.8 or 10 N/kg on Earth)." },
      { name: "Average Speed", formula: "{{v = d / t}}", note: "Average speed (m/s) = total distance (m) ÷ total time (s)." },
      { name: "Acceleration", formula: "{{a = (v - u) / t}}", note: "Change in velocity (final v − initial u) ÷ time t; unit m/s²." },
      { name: "Distance from v–t Triangle", formula: '{{"Distance" = 1/2 * "base" * "height"}}', note: "Total distance = total area under a velocity–time graph." },
      { name: "Solid Pressure", formula: "{{P = F / A}}", note: "P in pascals (Pa = N/m²) or N/cm²; remember 1 m² = 10 000 cm²." },
      { name: "Moment of a Force", formula: "{{M = F * d}}", note: "Moment (Nm) = force (N) × perpendicular distance from pivot (m)." },
      { name: "Principle of Moments", formula: '{{Σ M_"CW" = Σ M_"ACW"}}', note: "Condition for rotational equilibrium about any pivot." },
      { name: "Hooke's Law", formula: "{{F = k * e}}", note: "Force F (N) = spring constant k (N/m) × extension e (m), up to limit of proportionality." },
      { name: "Spring Extension", formula: '{{e = L_"stretched" - L_"original"}}', note: "Always subtract the unstretched length before using Hooke's Law." },
    ],
  },
};
