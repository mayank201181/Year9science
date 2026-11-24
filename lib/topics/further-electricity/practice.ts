import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ — 10 Mixed Questions
  // ===========================================================================
  quiz: [
    {
      id: "further-electricity-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "charge-current-pd",
      question: "A steady current of 4 A flows through a lamp for 15 s. Calculate the electric charge transferred (in coulombs).",
      answer: { type: "number", value: 60, display: "60 C" },
      traps: [
        { spec: { type: "number", value: 3.75 }, feedback: "You divided time by current—multiply current by time instead ({{Q = I * t}})." },
        { spec: { type: "number", value: 19 }, feedback: "Multiply current by time rather than adding them." },
      ],
      hints: [
        "Use the equation {{Q = I * t}}.",
        "Time is already in seconds, so multiply 4 A by 15 s.",
      ],
      solution: [
        "Recall {{Q = I * t}}.",
        "Substitute {{I = 4}} A and {{t = 15}} s.",
        "{{Q = 4 * 15 = 60}} C.",
      ],
    },
    {
      id: "further-electricity-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "charge-current-pd",
      question: "Which instrument measures potential difference across a resistor, and how must it be connected?",
      options: [
        "A voltmeter connected in parallel across the resistor",
        "An ammeter connected in parallel across the resistor",
        "A voltmeter connected in series inside the main loop",
        "An ammeter connected in series inside the main loop",
      ],
      answerIndex: 0,
      hints: [
        "Potential difference is measured in volts (V).",
        "To compare energy before and after a component, clip the meter across its two terminals.",
      ],
      explanation:
        "Potential difference is measured with a voltmeter connected in parallel across the component. An ammeter is connected in series to measure current.",
    },
    {
      id: "further-electricity-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "series-parallel-circuits",
      question: "An 8 Ω resistor and a 12 Ω resistor are connected in series. Calculate their combined total resistance (in ohms).",
      answer: { type: "number", value: 20, display: "20 ohms" },
      traps: [
        { spec: { type: "number", value: 96 }, feedback: "In series, resistances add—do not multiply them." },
        { spec: { type: "number", value: 4.8 }, feedback: "4.8 Ω would be their parallel resistance; in series, simply add them." },
      ],
      hints: [
        "In a series loop, current flows through both resistors one after the other.",
        "Apply {{R_total = R_1 + R_2}}.",
      ],
      solution: [
        "In series, resistances add directly: {{R_total = R_1 + R_2}}.",
        "{{R_total = 8 + 12 = 20}} Ω.",
      ],
    },
    {
      id: "further-electricity-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "series-parallel-circuits",
      question: "Two lamps are connected in parallel across a cell. The total current leaving the cell is 3.2 A and branch 1 carries 1.1 A. Calculate the current in branch 2 (in amps).",
      answer: { type: "number", value: 2.1, display: "2.1 A" },
      traps: [
        { spec: { type: "number", value: 4.3 }, feedback: "You added the currents—the branch currents must sum to 3.2 A, so subtract." },
      ],
      hints: [
        "In a parallel circuit, the branch currents add up to the total supply current.",
        "Solve {{1.1 + I_2 = 3.2}}.",
      ],
      solution: [
        "Use the parallel current rule: {{I_total = I_1 + I_2}}.",
        "{{I_2 = 3.2 - 1.1 = 2.1}} A.",
      ],
    },
    {
      id: "further-electricity-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "resistance-ohms-law",
      question: "A potential difference of 12 V across a component produces a current of 0.6 A. Calculate its resistance (in ohms).",
      answer: { type: "number", value: 20, display: "20 ohms" },
      traps: [
        { spec: { type: "number", value: 7.2 }, feedback: "Multiplying V × I gives power (7.2 W). Rearrange V = I × R to R = V ÷ I." },
        { spec: { type: "number", value: 0.05 }, feedback: "You divided I by V—resistance is V divided by I." },
      ],
      hints: [
        "Rearrange Ohm's Law {{V = I * R}} to make {{R}} the subject.",
        "Divide 12 V by 0.6 A.",
      ],
      solution: [
        "Rearrange {{V = I * R}} to {{R = V / I}}.",
        "{{R = 12 / 0.6 = 20}} Ω.",
      ],
    },
    {
      id: "further-electricity-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "resistance-ohms-law",
      question: "Which electronic component shows a sharp drop in resistance when bright sunlight shines on it?",
      options: [
        "NTC thermistor",
        "Tungsten filament lamp",
        "Light-dependent resistor (LDR)",
        "Fixed carbon resistor",
      ],
      answerIndex: 2,
      hints: [
        "Look for the component designed specifically to sense light intensity.",
        "Remember L-U-R-D: Light Up → Resistance Down.",
      ],
      explanation:
        "A Light-Dependent Resistor (LDR) decreases in resistance as light intensity rises. A thermistor responds to temperature rather than light.",
    },
    {
      id: "further-electricity-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "electrical-power-safety-static",
      question: "A mains toaster draws a current of 3 A from a 230 V supply. Calculate its electrical power (in watts).",
      answer: { type: "number", value: 690, display: "690 W" },
      traps: [
        { spec: { type: "number", value: 76.7, tolerance: 0.1 }, feedback: "Dividing V by I gives resistance, not power. Multiply I × V." },
      ],
      hints: [
        "Use the electrical power equation {{P = I * V}}.",
        "Multiply 3 A by 230 V.",
      ],
      solution: [
        "Recall {{P = I * V}}.",
        "{{P = 3 * 230 = 690}} W.",
      ],
    },
    {
      id: "further-electricity-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "electrical-power-safety-static",
      question: "What colour insulation identifies the earth wire inside a UK or Singapore 3-pin mains plug?",
      options: [
        "Solid brown insulation",
        "Solid blue insulation",
        "Red and black stripes",
        "Green and yellow stripes",
      ],
      answerIndex: 3,
      hints: [
        "Recall the plug wiring rhyme: bLue Left, bRown Right, sTriped Top.",
        "The earth wire connects to the top terminal and uses a two-colour striped sleeve.",
      ],
      explanation:
        "The earth wire is covered in green and yellow stripes and attaches to the top terminal. Brown is live (right) and blue is neutral (left).",
    },
    {
      id: "further-electricity-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "charge-current-pd",
      question: "A rechargeable lamp transfers 360 C of charge in 2 minutes. Calculate the current (in amps).",
      answer: { type: "number", value: 3, display: "3 A" },
      traps: [
        { spec: { type: "number", value: 180 }, feedback: "Convert 2 minutes to 120 seconds before dividing!" },
      ],
      hints: [
        "Convert 2 minutes into seconds first.",
        "Divide charge by time in seconds: {{I = Q / t}}.",
      ],
      solution: [
        "Convert time to seconds: {{t = 2 * 60 = 120}} s.",
        "Apply {{I = Q / t = 360 / 120 = 3}} A.",
      ],
    },
    {
      id: "further-electricity-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "electrical-power-safety-static",
      marks: 2,
      question: "Explain how rubbing a dry balloon against a woollen jumper gives the balloon a negative static charge.",
      hints: [
        "Name the subatomic particle that moves during friction between insulators.",
        "State which direction that particle moves so the balloon ends up negative.",
      ],
      modelAnswer:
        "Friction transfers negatively charged electrons from the woollen jumper onto the balloon. Because the balloon gains extra electrons, it acquires an overall negative charge (protons remain fixed inside nuclei).",
      markScheme: [
        { point: "States that friction transfers negatively charged electrons (not protons).", keywords: ["electron", "electrons"] },
        { point: "States that electrons move from the jumper onto the balloon / the balloon gains electrons.", keywords: ["gains", "onto", "from the jumper", "from the wool"] },
      ],
      commonError: "Never write that protons or positive charges move during rubbing.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS 1 & 2 — 15 Questions Each
  // ===========================================================================
  papers: [
    // ------------------------- PRACTICE PAPER 1 ------------------------------
    {
      id: "further-electricity-p1",
      title: "Practice Paper 1 — Circuits, Ohm's Law & Mains Safety",
      questions: [
        {
          id: "further-electricity-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "charge-current-pd",
          question: "A torch bulb draws a current of 0.5 A for 40 s. Calculate the total charge that passes through the bulb (in coulombs).",
          answer: { type: "number", value: 20, display: "20 C" },
          traps: [
            { spec: { type: "number", value: 80 }, feedback: "You divided 40 by 0.5 instead of multiplying 0.5 × 40." },
          ],
          hints: [
            "Use {{Q = I * t}}.",
            "Multiply 0.5 A by 40 s.",
          ],
          solution: [
            "Write {{Q = I * t}}.",
            "{{Q = 0.5 * 40 = 20}} C.",
          ],
        },
        {
          id: "further-electricity-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "charge-current-pd",
          question: "A cordless drill draws 2.4 A for 2.5 minutes. Calculate the total charge transferred (in coulombs).",
          answer: { type: "number", value: 360, display: "360 C" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Convert 2.5 minutes to 150 seconds first—do not leave time in minutes!" },
          ],
          hints: [
            "Convert 2.5 minutes into seconds (multiply by 60).",
            "Multiply current (2.4 A) by time in seconds.",
          ],
          solution: [
            "Convert time: {{t = 2.5 * 60 = 150}} s.",
            "Calculate charge: {{Q = I * t = 2.4 * 150 = 360}} C.",
          ],
        },
        {
          id: "further-electricity-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "charge-current-pd",
          question: "A toy motor transfers 180 J of energy when 15 C of charge flows through it. Calculate the potential difference across the motor (in volts).",
          answer: { type: "number", value: 12, display: "12 V" },
          traps: [
            { spec: { type: "number", value: 2700 }, feedback: "Potential difference is energy divided by charge ({{V = E / Q}}), not energy times charge." },
          ],
          hints: [
            "Recall that 1 volt equals 1 joule per coulomb: {{E = Q * V}}.",
            "Rearrange to {{V = E / Q}} and divide 180 by 15.",
          ],
          solution: [
            "Use {{V = E / Q}}.",
            "{{V = 180 / 15 = 12}} V.",
          ],
        },
        {
          id: "further-electricity-p1-q04",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "charge-current-pd",
          question: "A circuit symbol shows a triangle pointing at a vertical line inside a circle, with two small arrows pointing outward from the circle. Which component is this?",
          options: [
            "Light-dependent resistor (LDR)",
            "Light-emitting diode (LED)",
            "Variable filament lamp",
            "Standard cartridge fuse",
          ],
          answerIndex: 1,
          hints: [
            "The triangle pointing at a bar is the diode symbol.",
            "Outward arrows show that light is being emitted, whereas inward arrows show light being absorbed.",
          ],
          explanation:
            "A diode with two outward arrows represents a Light-Emitting Diode (LED). An LDR has inward arrows pointing onto a resistor rectangle.",
        },
        {
          id: "further-electricity-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          question: "A 9 V battery is connected in series with a 4 Ω resistor and a 5 Ω resistor. Calculate the current flowing in the circuit (in amps).",
          answer: { type: "number", value: 1, display: "1 A" },
          traps: [
            { spec: { type: "number", value: 2.25 }, feedback: "You divided 9 V by only the 4 Ω resistor—first add both series resistances!" },
          ],
          hints: [
            "Find the total series resistance first by adding 4 Ω and 5 Ω.",
            "Then apply Ohm's Law: {{I = V / R_total}}.",
          ],
          solution: [
            "Total series resistance: {{R_total = 4 + 5 = 9}} Ω.",
            "Current: {{I = V / R_total = 9 / 9 = 1}} A.",
          ],
        },
        {
          id: "further-electricity-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          question: "A 24 V power supply is connected in series with a 3 Ω resistor and a 9 Ω resistor. Calculate the potential difference across the 9 Ω resistor (in volts).",
          answer: { type: "number", value: 18, display: "18 V" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 V is the potential difference across the 3 Ω resistor—the question asks for the 9 Ω resistor." },
            { spec: { type: "number", value: 24 }, feedback: "In series, the 24 V supply is shared between the two resistors." },
          ],
          hints: [
            "Step 1: Add the resistances in series and calculate the circuit current using {{I = V / R_total}}.",
            "Step 2: Multiply that current by 9 Ω to find the PD across the 9 Ω resistor.",
          ],
          solution: [
            "Total series resistance: {{R_total = 3 + 9 = 12}} Ω.",
            "Circuit current: {{I = 24 / 12 = 2}} A.",
            "PD across 9 Ω resistor: {{V = I * R = 2 * 9 = 18}} V (check: 6 V + 18 V = 24 V).",
          ],
        },
        {
          id: "further-electricity-p1-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          marks: 3,
          question: "A student adds a second identical lamp in parallel to an existing lamp across a fixed battery. Explain why the combined resistance of the circuit becomes smaller.",
          hints: [
            "What does adding a parallel branch provide for electric charge leaving the battery?",
            "What happens to the total current leaving the battery when supply voltage is unchanged?",
            "Connect total current and fixed voltage using {{R = V / I}}.",
          ],
          modelAnswer:
            "Adding a branch creates an extra pathway for charge to flow. Because both branches receive the same supply voltage, the total current leaving the battery increases. Since R = V / I and the voltage stays unchanged while current rises, the total resistance decreases.",
          markScheme: [
            { point: "Mentions that adding a branch provides an extra / second pathway (or route) for current.", keywords: ["pathway", "extra path", "second path", "route", "another path"] },
            { point: "States that the total current drawn from the supply increases.", keywords: ["current increases", "more current", "larger current", "current rises", "greater current"] },
            { point: "Links higher current at the same potential difference to lower resistance via R = V / I.", keywords: ["r = v / i", "r = v/i", "same voltage", "same supply voltage", "same potential difference", "voltage stays"] },
          ],
        },
        {
          id: "further-electricity-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          question: "A 32 Ω fixed resistor carries a steady current of 0.25 A. Calculate the potential difference across it (in volts).",
          answer: { type: "number", value: 8, display: "8 V" },
          traps: [
            { spec: { type: "number", value: 128 }, feedback: "You divided 32 by 0.25 instead of multiplying I × R." },
          ],
          hints: [
            "Recall Ohm's Law: {{V = I * R}}.",
            "Multiply 0.25 A by 32 Ω (remember 0.25 = 1/4).",
          ],
          solution: [
            "Apply Ohm's Law: {{V = I * R}}.",
            "{{V = 0.25 * 32 = 8}} V.",
          ],
        },
        {
          id: "further-electricity-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          question: "A 75 Ω heating wire is connected across a 15 V supply. Calculate the current flowing through the wire (in amps).",
          answer: { type: "number", value: 0.2, display: "0.2 A" },
          traps: [
            { spec: { type: "number", value: 5 }, feedback: "You divided R by V instead of V by R—current is {{I = V / R}}." },
          ],
          hints: [
            "Rearrange {{V = I * R}} to make current {{I}} the subject.",
            "Divide 15 V by 75 Ω.",
          ],
          solution: [
            "Rearrange Ohm's Law: {{I = V / R}}.",
            "{{I = 15 / 75 = 0.2}} A.",
          ],
        },
        {
          id: "further-electricity-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          question: "What shape is the I–V graph of an ohmic conductor kept at constant temperature?",
          options: [
            "A straight line passing directly through the origin",
            "An S-shaped curve flattening at high voltages",
            "A flat line at zero for negative voltages only",
            "A downward curve showing resistance falling to zero",
          ],
          answerIndex: 0,
          hints: [
            "In an ohmic conductor at constant temperature, current is directly proportional to potential difference.",
            "What does a directly proportional relationship look like on a graph?",
          ],
          explanation:
            "Direct proportionality between current I and potential difference V produces a straight line passing through the origin (0, 0).",
        },
        {
          id: "further-electricity-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          marks: 3,
          question: "Explain, in terms of particles, why the resistance of a glowing tungsten bulb increases when a larger voltage is applied.",
          hints: [
            "What happens to the temperature of the wire as more current passes through it?",
            "How do the positive metal ions in the wire respond to heating?",
            "How does that affect the motion of drifting electrons?",
          ],
          modelAnswer:
            "A larger current heats the filament so its temperature rises. As a result, the metal ions in the lattice vibrate faster with greater amplitude. Drifting electrons therefore suffer more frequent collisions with the ions, increasing opposition to flow.",
          markScheme: [
            { point: "States that the filament heats up / temperature rises as current increases.", keywords: ["temperature", "heats", "hotter", "warmer"] },
            { point: "States that metal ions in the lattice vibrate more / faster / with greater amplitude.", keywords: ["vibrate", "vibrating", "vibrations", "ions"] },
            { point: "States that drifting electrons experience more frequent collisions.", keywords: ["collision", "collisions", "collide"] },
          ],
        },
        {
          id: "further-electricity-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "An electric room heater rated at 1380 W operates on the 230 V mains supply. Calculate the normal operating current (in amps).",
          answer: { type: "number", value: 6, display: "6 A" },
          traps: [
            { spec: { type: "number", value: 317400 }, feedback: "Rearrange P = I × V to divide power by voltage, not multiply." },
          ],
          hints: [
            "Recall {{P = I * V}} and rearrange to make current {{I}} the subject.",
            "Divide 1380 W by 230 V.",
          ],
          solution: [
            "Rearrange {{P = I * V}} to {{I = P / V}}.",
            "{{I = 1380 / 230 = 6}} A.",
          ],
        },
        {
          id: "further-electricity-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "A 1500 W steam iron is switched on for 4 minutes. Calculate the electrical energy transferred in kilojoules (kJ).",
          answer: { type: "number", value: 360, display: "360 kJ" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Convert 4 minutes into 240 seconds before multiplying by power!" },
            { spec: { type: "number", value: 360000 }, feedback: "360 000 J is the energy in joules—divide by 1000 to give kilojoules (kJ)." },
          ],
          hints: [
            "Convert 4 minutes into seconds (4 × 60).",
            "Multiply power in watts by time in seconds to get joules, then divide by 1000 for kJ.",
          ],
          solution: [
            "Convert time: {{t = 4 * 60 = 240}} s.",
            "Energy in joules: {{E = P * t = 1500 * 240 = 360000}} J.",
            "Convert to kilojoules: {{360000 / 1000 = 360}} kJ.",
          ],
        },
        {
          id: "further-electricity-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "A television rated at 460 W operates on a 230 V mains supply. Which standard UK/Singapore plug fuse should be fitted?",
          options: ["13 A fuse", "5 A fuse", "3 A fuse", "1 A fuse"],
          answerIndex: 2,
          hints: [
            "Calculate normal operating current first using {{I = P / V}}.",
            "Choose the standard fuse rating from 3 A, 5 A, or 13 A that sits just ABOVE the normal current.",
          ],
          explanation:
            "Normal current is {{I = 460 / 230 = 2}} A. The smallest standard plug fuse above 2 A is a 3 A fuse (a 1 A fuse would blow in normal use, while 5 A and 13 A are larger than needed).",
        },
        {
          id: "further-electricity-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          marks: 3,
          question: "A fault causes the loose brown wire inside a metal-cased toaster to touch the casing. Describe how the protective safety system prevents a user from receiving a shock.",
          hints: [
            "Which wire is attached to the metal casing, and what is its resistance like?",
            "What happens to the size of the current when the live wire touches that grounded casing?",
            "What component in the live wire responds to this sudden current surge?",
          ],
          modelAnswer:
            "The earth wire attached to the casing provides a very low-resistance path directly to ground. This causes a huge surge of current to flow through the live wire. The excessive current immediately melts the fuse, breaking the circuit and cutting off the 230 V supply.",
          markScheme: [
            { point: "States the earth wire gives a low-resistance path to ground / earth.", keywords: ["earth wire", "low resistance", "low-resistance", "ground"] },
            { point: "States that a very large current / surge flows.", keywords: ["large current", "huge current", "surge", "high current", "excessive current"] },
            { point: "States that the fuse melts (or blows / circuit breaker trips), breaking the circuit and isolating the supply.", keywords: ["melts", "melt", "blows", "fuse", "breaks the circuit", "breaking the circuit"] },
          ],
        },
      ],
    },

    // ------------------------- PRACTICE PAPER 2 ------------------------------
    {
      id: "further-electricity-p2",
      title: "Practice Paper 2 — Multi-Step Circuits, Sensors & Static",
      questions: [
        {
          id: "further-electricity-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "charge-current-pd",
          question: "A steady current of 400 mA flows through a sensor for 2.5 minutes. Calculate the charge transferred (in coulombs).",
          answer: { type: "number", value: 60, display: "60 C" },
          traps: [
            { spec: { type: "number", value: 60000 }, feedback: "Convert 400 mA to 0.4 A by dividing by 1000!" },
            { spec: { type: "number", value: 1 }, feedback: "Convert 2.5 minutes into 150 seconds!" },
          ],
          hints: [
            "Convert BOTH units to SI first: 400 mA ÷ 1000 = amps, and 2.5 min × 60 = seconds.",
            "Multiply current in amps by time in seconds using {{Q = I * t}}.",
          ],
          solution: [
            "Convert current: {{I = 400 / 1000 = 0.4}} A.",
            "Convert time: {{t = 2.5 * 60 = 150}} s.",
            "Charge: {{Q = 0.4 * 150 = 60}} C.",
          ],
        },
        {
          id: "further-electricity-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "charge-current-pd",
          question: "A battery charger supplies 3.5 A until 420 C of charge has flowed. For how many seconds was it connected?",
          answer: { type: "number", value: 120, display: "120 s" },
          traps: [
            { spec: { type: "number", value: 1470 }, feedback: "Rearrange {{Q = I * t}} to {{t = Q / I}} instead of multiplying." },
          ],
          hints: [
            "Rearrange {{Q = I * t}} to make time {{t}} the subject.",
            "Divide 420 C by 3.5 A.",
          ],
          solution: [
            "Rearrange: {{t = Q / I}}.",
            "{{t = 420 / 3.5 = 120}} s.",
          ],
        },
        {
          id: "further-electricity-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "charge-current-pd",
          question: "Why must an ammeter have an extremely low internal resistance?",
          options: [
            "So it can absorb extra voltage from the battery safely",
            "So it stops electrons flowing backward through the cell",
            "So it melts like a fuse if current becomes too small",
            "So placing it in series does not reduce the circuit current",
          ],
          answerIndex: 3,
          hints: [
            "Remember an ammeter is inserted directly into the series loop.",
            "Adding resistance in series lowers current—what resistance prevents that interference?",
          ],
          explanation:
            "Because an ammeter is connected in series, any appreciable resistance inside it would raise the total circuit resistance and reduce the very current it is measuring.",
        },
        {
          id: "further-electricity-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          question: "A 4 Ω resistor and a 12 Ω resistor are connected in parallel across a 12 V supply. Calculate the total current leaving the supply (in amps).",
          answer: { type: "number", value: 4, display: "4 A" },
          traps: [
            { spec: { type: "number", value: 0.75 }, feedback: "You added 4 + 12 = 16 Ω as if they were in series! Find each branch current separately." },
          ],
          hints: [
            "In parallel, BOTH branches receive the full 12 V supply.",
            "Compute {{I_1 = 12 / 4}} and {{I_2 = 12 / 12}}, then add the two branch currents.",
          ],
          solution: [
            "Branch 1 current: {{I_1 = 12 / 4 = 3}} A.",
            "Branch 2 current: {{I_2 = 12 / 12 = 1}} A.",
            "Total current: {{I_total = 3 + 1 = 4}} A.",
          ],
        },
        {
          id: "further-electricity-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          question: "A 30 V supply is wired in series with a 5 Ω resistor, a 7 Ω resistor, and an unknown resistor R. The ammeter reads 1.5 A. Calculate the resistance of R (in ohms).",
          answer: { type: "number", value: 8, display: "8 ohms" },
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "20 Ω is the TOTAL series resistance—now subtract 5 Ω and 7 Ω to find R." },
          ],
          hints: [
            "First find the total resistance of the entire series loop using {{R_total = V / I}}.",
            "Subtract the known 5 Ω and 7 Ω resistors from {{R_total}}.",
          ],
          solution: [
            "Total series resistance: {{R_total = 30 / 1.5 = 20}} Ω.",
            "Unknown resistor: {{R = 20 - 5 - 7 = 8}} Ω.",
          ],
        },
        {
          id: "further-electricity-p2-q06",
          kind: "short",
          difficulty: "challenge",
          guideRef: "series-parallel-circuits",
          question: "Two identical 18 Ω resistors are wired in parallel across a 9 V battery. Calculate their combined total resistance (in ohms).",
          answer: { type: "number", value: 9, display: "9 ohms" },
          traps: [
            { spec: { type: "number", value: 36 }, feedback: "36 Ω is their resistance in series—parallel resistance must be smaller than 18 Ω!" },
          ],
          hints: [
            "Find the current in one 18 Ω branch across 9 V.",
            "Double that current to get total battery current, then divide 9 V by the total current.",
          ],
          solution: [
            "Each branch current: {{I_branch = 9 / 18 = 0.5}} A.",
            "Total current from battery: {{I_total = 0.5 + 0.5 = 1.0}} A.",
            "Combined resistance: {{R_total = 9 / 1.0 = 9}} Ω (half of one 18 Ω resistor).",
          ],
        },
        {
          id: "further-electricity-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "series-parallel-circuits",
          question: "A 2 Ω resistor and an 8 Ω resistor are connected in series to a battery. How do the current through them and the potential difference across them compare?",
          options: [
            "Larger current in the 2 Ω resistor and equal potential difference across both",
            "Equal current through both and larger potential difference across the 8 Ω resistor",
            "Equal current through both and larger potential difference across the 2 Ω resistor",
            "Larger current in the 8 Ω resistor and larger potential difference across the 8 Ω resistor",
          ],
          answerIndex: 1,
          hints: [
            "In series, is current the same or different through the two resistors?",
            "Using {{V = I * R}} with the same current {{I}}, which resistor gets the bigger share of voltage?",
          ],
          explanation:
            "In series, both resistors carry the exact same current {{I}}. Since {{V = I * R}}, the larger 8 Ω resistor receives four times the potential difference of the 2 Ω resistor.",
        },
        {
          id: "further-electricity-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          question: "In bright daylight, an LDR has a resistance of 300 Ω and is connected across a 6 V battery. Calculate the current through the LDR in milliamps (mA).",
          answer: { type: "number", value: 20, display: "20 mA" },
          traps: [
            { spec: { type: "number", value: 0.02 }, feedback: "0.02 A is the current in amps—multiply by 1000 to convert to milliamps (mA)!" },
          ],
          hints: [
            "First find the current in amps using {{I = V / R}}.",
            "Multiply your answer in amps by 1000 to convert to milliamps (mA).",
          ],
          solution: [
            "Current in amps: {{I = 6 / 300 = 0.02}} A.",
            "Convert to milliamps: {{0.02 * 1000 = 20}} mA.",
          ],
        },
        {
          id: "further-electricity-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          question: "At 50 °C a thermistor carries a current of 0.05 A when the potential difference across it is 4 V. Calculate the thermistor's resistance at 50 °C (in ohms).",
          answer: { type: "number", value: 80, display: "80 ohms" },
          traps: [
            { spec: { type: "number", value: 0.2 }, feedback: "You multiplied 4 × 0.05 (which gives power in watts). Divide V by I instead." },
          ],
          hints: [
            "Apply {{R = V / I}}.",
            "Divide 4 V by 0.05 A carefully.",
          ],
          solution: [
            "Use {{R = V / I}}.",
            "{{R = 4 / 0.05 = 80}} Ω.",
          ],
        },
        {
          id: "further-electricity-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "resistance-ohms-law",
          marks: 3,
          question: "Outline the practical steps to collect I–V data for a fixed metallic component and state what graphical feature confirms it obeys Ohm's Law.",
          hints: [
            "Name the two meters (and how each is connected) plus how you change the voltage step by step.",
            "Mention reversing the supply connections to collect negative readings (or switching off between readings to prevent heating).",
            "Describe the exact shape of the I–V graph that proves direct proportionality.",
          ],
          modelAnswer:
            "Connect an ammeter in series and a voltmeter in parallel across the component, using a variable resistor (or variable power supply) to change the potential difference in steps and record pairs of V and I. Reverse the battery terminals to measure negative readings (switching off between readings so temperature stays constant). Plot I against V: a straight line passing through the origin confirms Ohm's Law.",
          markScheme: [
            { point: "Uses an ammeter in series and voltmeter in parallel, adjusting PD with a variable resistor or variable power supply.", keywords: ["ammeter", "voltmeter", "variable resistor", "variable power"] },
            { point: "Reverses supply terminals for negative values OR keeps temperature constant by switching off between readings.", keywords: ["reverse", "negative", "constant temperature", "switch off", "switching off"] },
            { point: "States that a straight line through the origin on the I–V graph confirms direct proportionality / Ohm's Law.", keywords: ["straight line", "origin", "directly proportional"] },
          ],
        },
        {
          id: "further-electricity-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "A 230 V electric kettle has a power rating of 2760 W. Calculate the current drawn by the kettle (in amps).",
          answer: { type: "number", value: 12, display: "12 A" },
          traps: [
            { spec: { type: "number", value: 13 }, feedback: "13 A is the fuse rating you would choose—the actual operating current is 2760 ÷ 230." },
          ],
          hints: [
            "Rearrange {{P = I * V}} to {{I = P / V}}.",
            "Divide 2760 W by 230 V.",
          ],
          solution: [
            "Use {{I = P / V}}.",
            "{{I = 2760 / 230 = 12}} A.",
          ],
        },
        {
          id: "further-electricity-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "A 45 Ω heating coil carries a steady current of 2 A. Calculate the electrical power of the coil (in watts).",
          answer: { type: "number", value: 180, display: "180 W" },
          traps: [
            { spec: { type: "number", value: 90 }, feedback: "90 V is the potential difference across the coil—now multiply by current (2 A) to find power!" },
          ],
          hints: [
            "Step 1: Find the potential difference across the coil using {{V = I * R}}.",
            "Step 2: Multiply current and potential difference using {{P = I * V}}.",
          ],
          solution: [
            "First find potential difference: {{V = I * R = 2 * 45 = 90}} V.",
            "Then find power: {{P = I * V = 2 * 90 = 180}} W (equivalently {{P = I^2 * R = 4 * 45 = 180}} W).",
          ],
        },
        {
          id: "further-electricity-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          question: "What is a major safety and practical advantage of a circuit breaker (such as an RCCB) compared with a traditional plug fuse?",
          options: [
            "It reacts much faster and can be reset with a switch without replacement",
            "It increases the mains potential difference so appliances heat twice as fast",
            "It works only in DC battery circuits and needs no live wire connection",
            "It allows damaged metal appliances to keep running during a live fault",
          ],
          answerIndex: 0,
          hints: [
            "What must you do to a cartridge fuse after its thin wire melts?",
            "Think about both speed of disconnection and convenience after fixing a fault.",
          ],
          explanation:
            "Circuit breakers disconnect a faulty circuit in milliseconds (faster than a fuse wire takes to melt) and can simply be flipped back on once the fault is fixed.",
        },
        {
          id: "further-electricity-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "electrical-power-safety-static",
          marks: 3,
          question: "A dry acetate strip rubbed with wool becomes positively charged and then picks up tiny uncharged bits of tissue. Explain both steps.",
          hints: [
            "Explain how the acetate strip ends up positive without moving protons.",
            "Think about what happens to electrons inside each tiny piece of neutral tissue when the positive strip comes close.",
            "State the electrostatic force rule between opposite charges.",
          ],
          modelAnswer:
            "Friction transfers negatively charged electrons off the acetate strip onto the wool, leaving the strip with a net positive charge (protons do not move). When held near the tissue, the positive strip pulls electrons inside the paper slightly closer, inducing a negative charge on the near surface. Because unlike charges attract, the tissue leaps up to the strip.",
          markScheme: [
            { point: "States that electrons transfer off the acetate strip onto the wool.", keywords: ["electrons", "electron"] },
            { point: "Explains that losing negative electrons leaves a net positive charge (protons stay fixed).", keywords: ["losing", "lost", "off the", "leaves"] },
            { point: "Explains induced opposite charge on the near surface of the paper and that unlike/opposite charges attract.", keywords: ["induc", "unlike charges attract", "opposite charges attract", "attracts", "attract"] },
          ],
        },
        {
          id: "further-electricity-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "resistance-ohms-law",
          marks: 3,
          question: "An automatic outdoor garden lamp uses an LDR wired in series with a fixed resistor across a 12 V supply. A switching relay connected across the LDR turns the lamp on when the voltage across the LDR exceeds 8 V. Explain how falling darkness switches the lamp on.",
          hints: [
            "How does darkness affect the resistance of the LDR?",
            "What happens to total series resistance and the share of the 12 V supply across the fixed resistor vs the LDR?",
            "Connect the rising voltage across the LDR to the relay threshold.",
          ],
          modelAnswer:
            "As darkness falls and light intensity drops, the resistance of the LDR increases sharply. This raises total series resistance so the circuit current falls, which reduces the potential difference across the fixed resistor. Consequently, the LDR claims a much larger share of the 12 V supply, pushing its voltage above 8 V and triggering the relay.",
          markScheme: [
            { point: "States that lower light intensity causes the LDR's resistance to increase.", keywords: ["resistance increases", "resistance rises", "higher resistance", "increases sharply"] },
            { point: "Explains that total resistance rises so current falls / PD across the fixed resistor drops.", keywords: ["current falls", "current decreases", "less current", "fixed resistor"] },
            { point: "Concludes that the LDR takes a larger share of the 12 V supply, exceeding the 8 V switch-on threshold.", keywords: ["larger share", "bigger share", "above 8", "exceed", "triggers", "triggering"] },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — 8 AoPS-Style Multi-Step Problems (all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "further-electricity-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "charge-current-pd",
      strategy: "Convert all units to SI first, then chain Q = It into E = QV",
      question: "A portable power bank delivers a steady 2000 mA at 5 V to a tablet for 15 minutes. Calculate the total electrical energy transferred in kilojoules (kJ).",
      answer: { type: "number", value: 9, display: "9 kJ" },
      traps: [
        { spec: { type: "number", value: 9000 }, feedback: "9000 J is the energy in joules—divide by 1000 to convert to kilojoules (kJ)." },
        { spec: { type: "number", value: 150 }, feedback: "Convert 15 minutes into 900 seconds and 2000 mA into 2 A first!" },
      ],
      hints: [
        "Convert 2000 mA to amps (÷ 1000) and 15 minutes to seconds (× 60).",
        "Find total charge {{Q = I * t}} (or power {{P = I * V}}).",
        "Calculate energy in joules ({{E = Q * V}} or {{E = P * t}}), then divide by 1000 for kJ.",
      ],
      solution: [
        "Convert to SI: {{I = 2000 / 1000 = 2}} A and {{t = 15 * 60 = 900}} s.",
        "Charge transferred: {{Q = I * t = 2 * 900 = 1800}} C.",
        "Energy transferred: {{E = Q * V = 1800 * 5 = 9000}} J = **9 kJ**.",
      ],
      solutions: [
        {
          label: "Via Electrical Power (P = IV, E = Pt)",
          steps: [
            "Power: {{P = I * V = 2 * 5 = 10}} W.",
            "Energy: {{E = P * t = 10 * 900 = 9000}} J = **9 kJ**.",
          ],
        },
      ],
    },
    {
      id: "further-electricity-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "series-parallel-circuits",
      strategy: "Use branch currents across the supply voltage to find equivalent parallel resistance",
      question: "A 12 Ω resistor and a 4 Ω resistor are connected in parallel across a 12 V battery. Calculate their combined total resistance (in ohms).",
      answer: { type: "number", value: 3, display: "3 ohms" },
      traps: [
        { spec: { type: "number", value: 16 }, feedback: "16 Ω is their series resistance. Parallel resistance must be smaller than the smallest branch (4 Ω)!" },
        { spec: { type: "number", value: 8 }, feedback: "Parallel resistance is NOT the mean of 12 and 4—find the branch currents first." },
      ],
      hints: [
        "Both branches have 12 V across them. Find the current through the 12 Ω branch and through the 4 Ω branch.",
        "Add the two branch currents to get total current leaving the battery.",
        "Divide battery voltage (12 V) by total current to get {{R_total}}.",
      ],
      solution: [
        "Branch currents: {{I_1 = 12 / 12 = 1}} A and {{I_2 = 12 / 4 = 3}} A.",
        "Total current leaving the battery: {{I_total = 1 + 3 = 4}} A.",
        "Combined resistance: {{R_total = V / I_total = 12 / 4 = 3}} Ω.",
      ],
    },
    {
      id: "further-electricity-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "series-parallel-circuits",
      strategy: "Collapse the parallel block into one equivalent resistor, then solve as a series loop",
      question: "A 6 Ω resistor is connected in series with a parallel pair of two identical 8 Ω resistors across a 20 V battery. Calculate the total current leaving the battery (in amps).",
      answer: { type: "number", value: 2, display: "2 A" },
      traps: [
        { spec: { type: "number", value: 0.91, tolerance: 0.02 }, feedback: "You added 6 + 8 + 8 = 22 Ω—remember the two 8 Ω resistors are in PARALLEL, not series!" },
      ],
      hints: [
        "First simplify the parallel pair of two identical 8 Ω resistors: two identical resistors {{R}} in parallel have combined resistance {{R / 2}}.",
        "Add that equivalent resistance to the 6 Ω series resistor to get total circuit resistance.",
        "Use {{I = V / R_total}} with the 20 V battery.",
      ],
      solution: [
        "Two identical 8 Ω resistors in parallel act like a single {{8 / 2 = 4}} Ω resistor.",
        "In series with the 6 Ω resistor, total resistance is {{R_total = 6 + 4 = 10}} Ω.",
        "Total battery current: {{I = 20 / 10 = 2}} A.",
      ],
    },
    {
      id: "further-electricity-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "resistance-ohms-law",
      strategy: "Find the shared series current from the fully known component first",
      question: "A 10 Ω fixed resistor and a thermistor are connected in series across a 12 V battery. At 25 °C a voltmeter across the 10 Ω resistor reads 4 V. Calculate the resistance of the thermistor at 25 °C (in ohms).",
      answer: { type: "number", value: 20, display: "20 ohms" },
      traps: [
        { spec: { type: "number", value: 30 }, feedback: "30 Ω is the TOTAL resistance of the circuit—subtract the 10 Ω fixed resistor!" },
        { spec: { type: "number", value: 8 }, feedback: "8 V is the potential difference across the thermistor—now divide by the series current to get resistance." },
      ],
      hints: [
        "Find the current through the 10 Ω resistor using its voltage (4 V): {{I = V / R}}.",
        "Because they are in series, the thermistor carries the exact same current and receives the remaining voltage ({{12 - 4}} V).",
        "Divide the thermistor's voltage by the series current to find its resistance.",
      ],
      solution: [
        "Current through the 10 Ω resistor: {{I = 4 / 10 = 0.4}} A (same everywhere in series).",
        "PD across the thermistor: {{V_therm = 12 - 4 = 8}} V.",
        "Thermistor resistance: {{R_therm = 8 / 0.4 = 20}} Ω.",
      ],
      solutions: [
        {
          label: "Voltage-Ratio Shortcut",
          steps: [
            "PD splits in the exact ratio of resistances: {{V_fixed = 4}} V and {{V_therm = 8}} V (twice as big).",
            "Therefore {{R_therm = 2 * 10 = 20}} Ω!",
          ],
        },
      ],
    },
    {
      id: "further-electricity-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "electrical-power-safety-static",
      strategy: "Work backwards from energy and time to power, then from power and voltage to current",
      question: "A 230 V instant electric shower transfers 690 kJ of energy in 2 minutes. Calculate the current drawn by the shower (in amps).",
      answer: { type: "number", value: 25, display: "25 A" },
      traps: [
        { spec: { type: "number", value: 5750 }, feedback: "5750 W is the shower's power—now divide by 230 V to get the current!" },
        { spec: { type: "number", value: 1500 }, feedback: "Convert 2 minutes to 120 seconds before finding power!" },
      ],
      hints: [
        "Convert 690 kJ into joules (× 1000) and 2 minutes into seconds (× 60).",
        "Calculate power using {{P = E / t}}.",
        "Finally find current using {{I = P / V}} with {{V = 230}} V.",
      ],
      solution: [
        "Convert units: {{E = 690000}} J and {{t = 2 * 60 = 120}} s.",
        "Power: {{P = E / t = 690000 / 120 = 5750}} W.",
        "Current: {{I = P / V = 5750 / 230 = 25}} A (which is why electric showers need their own high-current circuit breaker rather than a 13 A plug!).",
      ],
    },
    {
      id: "further-electricity-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "resistance-ohms-law",
      strategy: "Combine P = IV and V = IR to unlock the hidden series current",
      question: "Two lamps A and B are wired in series across a 12 V battery. Lamp A has a resistance of 4 Ω and transfers energy at a power of 16 W. Calculate the resistance of Lamp B (in ohms).",
      answer: { type: "number", value: 2, display: "2 ohms" },
      traps: [
        { spec: { type: "number", value: 6 }, feedback: "6 Ω is the TOTAL series resistance of Lamp A and Lamp B together—subtract Lamp A's 4 Ω!" },
      ],
      hints: [
        "Substitute {{V = I * R}} into {{P = I * V}} to obtain {{P = I^2 * R}} for Lamp A.",
        "Solve {{16 = I^2 * 4}} to find the series current {{I}}.",
        "Find total series resistance {{R_total = 12 / I}}, then subtract Lamp A's 4 Ω.",
      ],
      solution: [
        "For Lamp A, {{P = I * V = I^2 * R}}, so {{16 = I^2 * 4}} → {{I^2 = 4}} → {{I = 2}} A.",
        "Total resistance of the series loop: {{R_total = 12 / 2 = 6}} Ω.",
        "Resistance of Lamp B: {{R_B = 6 - 4 = 2}} Ω (check: {{V_A = 8}} V, {{P_A = 16}} W, {{V_B = 4}} V).",
      ],
    },
    {
      id: "further-electricity-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "series-parallel-circuits",
      marks: 4,
      strategy: "Compare extreme circuit layouts quantitatively using R_total, I_total, and P = IV",
      question: "Three identical 12 Ω resistors are connected across a 12 V battery, first all in series and then all in parallel. Calculate the total power transferred from the battery in each layout and explain why the parallel layout drains the battery far faster.",
      hints: [
        "Series layout: add the three resistances, find the current, then calculate {{P = I * V}}.",
        "Parallel layout: find the current in each 12 Ω branch across 12 V, sum all three currents, then calculate {{P = I_total * V}}.",
        "Compare the ratio of the two powers and explain physically in terms of pathways and voltage per resistor.",
      ],
      modelAnswer:
        "In series, total resistance is 12 + 12 + 12 = 36 Ω, so current is 12 / 36 = 0.33 A and total power is P = 12 × (1/3) = 4 W. In parallel, each 12 Ω branch gets the full 12 V and carries 1 A, so total current is 3 A (equivalent resistance 4 Ω) and total power is P = 3 × 12 = 36 W. The parallel circuit transfers 9 times as much power (36 W vs 4 W). It drains the battery much faster because opening three separate pathways at full 12 V draws nine times as much charge per second from the cell's chemical energy store.",
      markScheme: [
        { point: "Calculates series resistance (36 Ω), current (1/3 A or 0.33 A), and power = 4 W.", keywords: ["36", "4 w", "4 watts", "0.33"] },
        { point: "Calculates parallel branch current (1 A), total current (3 A), and power = 36 W.", keywords: ["3 a", "36 w", "36 watts"] },
        { point: "Explicitly compares the powers (parallel is 9 times greater / 36 W vs 4 W).", keywords: ["9 times", "nine times", "much greater", "higher power"] },
        { point: "Explains physically that every branch gets full 12 V / extra pathways draw far more current from the battery's chemical store.", keywords: ["pathway", "pathways", "full 12", "chemical", "more charge"] },
      ],
    },
    {
      id: "further-electricity-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "electrical-power-safety-static",
      marks: 3,
      strategy: "Apply BOTH electrostatic rules: like charges repel AND unlike charges attract",
      question: "In a car factory, paint droplets receive a positive static charge at the spray nozzle while the metal car door is connected to a negative supply. Explain how static electricity creates an even coat while cutting wasted paint.",
      hints: [
        "What electrostatic force acts between neighbouring positively charged paint droplets?",
        "What electrostatic force acts between the positive droplets and the negatively charged car door?",
        "Connect both forces to coat evenness and reduced wasted overspray.",
      ],
      modelAnswer:
        "Because all the paint droplets carry the same positive charge, like charges repel one another so the droplets spread apart into a fine, uniform mist rather than clumping. Meanwhile, unlike charges attract, so the negatively charged metal door strongly pulls the droplets toward its surface—even wrapping around edges and hidden corners. This reduces wasted overspray drifting into the air and produces an even thickness coat.",
      markScheme: [
        { point: "States that like-charged droplets repel each other, spreading out into an even fine spray.", keywords: ["repel", "spread", "fine", "uniform"] },
        { point: "States that oppositely charged droplets are attracted to the negative metal body (even around edges/back).", keywords: ["attract", "attracted", "opposite", "unlike"] },
        { point: "Links this to reduced overspray / less wasted paint and an even coat.", keywords: ["overspray", "waste", "wasted", "even coat", "uniform coat"] },
      ],
    },
  ],
};
