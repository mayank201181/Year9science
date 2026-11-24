import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — Core Concepts & Foundations
  // ===========================================================================
  {
    id: "further-electricity-m1",
    title: "MCQ Paper 1 — Charge, Circuits & Core Rules",
    questions: [
      {
        id: "further-electricity-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "charge-current-pd",
        question: "Which statement correctly defines electric current in a circuit?",
        options: [
          "The energy transferred per coulomb of charge",
          "The rate of flow of electric charge past a point",
          "The opposition to electrons drifting in a wire",
          "The total amount of charge stored inside a cell",
        ],
        answerIndex: 1,
        hints: [
          "Think about what quantity is measured in coulombs per second (C/s).",
          "Energy per coulomb defines potential difference, while opposition defines resistance.",
        ],
        explanation:
          "Electric current is the rate of flow of electric charge ({{I = Q / t}}), measured in amperes (1 A = 1 C/s). Energy transferred per coulomb defines potential difference, and opposition to flow defines resistance.",
      },
      {
        id: "further-electricity-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "charge-current-pd",
        question: "A steady current of 3 A flows through a heating element for 40 s. How much electric charge passes through it?",
        options: ["0.075 C", "13.3 C", "120 C", "43 C"],
        answerIndex: 2,
        hints: [
          "Use the equation linking charge, current, and time: {{Q = I * t}}.",
          "Check that time is already in seconds, then multiply current by time.",
        ],
        explanation:
          "Using {{Q = I * t}}: {{Q = 3 * 40 = 120}} C. Dividing 40 by 3 gives 13.3 C and adding gives 43 C, both of which apply the wrong operation.",
      },
      {
        id: "further-electricity-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "How must an ammeter and a voltmeter be connected to measure the current through and potential difference across a resistor?",
        options: [
          "Ammeter in series with the resistor; voltmeter in parallel across it",
          "Ammeter in parallel across the resistor; voltmeter in series with it",
          "Both the ammeter and the voltmeter connected in series with it",
          "Both the ammeter and the voltmeter connected in parallel across it",
        ],
        answerIndex: 0,
        hints: [
          "An ammeter must count every coulomb flowing through the resistor.",
          "A voltmeter compares energy before and after a component, so it clips across the component's two terminals.",
        ],
        explanation:
          "An ammeter is placed in series so the full current flows through it, while a voltmeter is connected in parallel across the resistor to measure the potential difference between its two ends.",
      },
      {
        id: "further-electricity-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "Which component is represented by a rectangular box with a diagonal arrow drawn straight through it?",
        options: ["Fixed resistor", "Melting fuse", "NTC thermistor", "Variable resistor"],
        answerIndex: 3,
        hints: [
          "A plain rectangle represents a fixed resistor.",
          "A diagonal arrow crossing a symbol in circuit diagrams means its value can be adjusted.",
        ],
        explanation:
          "A rectangle with a diagonal arrow represents a variable resistor (rheostat). A fuse has a straight wire continuing through the box, and a thermistor has a hockey-stick line across the box.",
      },
      {
        id: "further-electricity-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "A current of 0.8 A flows through a portable radio for 3 minutes. What total charge passes through the radio?",
        options: ["2.4 C", "144 C", "225 C", "37.5 C"],
        answerIndex: 1,
        hints: [
          "Convert the time from minutes into seconds before calculating.",
          "Multiply 3 minutes by 60 to get seconds, then use {{Q = I * t}}.",
        ],
        explanation:
          "First convert 3 minutes to seconds: {{t = 3 * 60 = 180}} s. Then {{Q = I * t = 0.8 * 180 = 144}} C. Forgetting to convert minutes to seconds gives the common trap answer 2.4 C.",
      },
      {
        id: "further-electricity-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "series-parallel-circuits",
        question: "Two lamps and two ammeters are connected in a single series loop with a battery. The first ammeter reads 0.6 A. What does the second ammeter read?",
        options: ["0.3 A", "1.2 A", "0.6 A", "0.0 A"],
        answerIndex: 2,
        hints: [
          "In a series loop there are no junctions where charge can split away.",
          "Is electric current used up as it passes through a lamp?",
        ],
        explanation:
          "Electric charge is conserved and cannot disappear, so in a single series loop the current is identical everywhere: 0.6 A. Halving to 0.3 A comes from the misconception that lamps use up current.",
      },
      {
        id: "further-electricity-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "Resistors of 5 Ω, 7 Ω, and 3 Ω are connected together in series. What is their combined total resistance?",
        options: ["15 Ω", "5 Ω", "1.4 Ω", "105 Ω"],
        answerIndex: 0,
        hints: [
          "Every electron in a series circuit must push through all three resistors in turn.",
          "Use the series resistance rule: {{R_total = R_1 + R_2 + R_3}}.",
        ],
        explanation:
          "In series, resistances add directly: {{R_total = 5 + 7 + 3 = 15}} Ω. Averaging them (5 Ω) or multiplying them (105 Ω) is incorrect.",
      },
      {
        id: "further-electricity-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "A 9 V battery is connected in parallel across a 3 Ω resistor and a 6 Ω resistor. What is the potential difference across the 6 Ω resistor?",
        options: ["3 V", "4.5 V", "6 V", "9 V"],
        answerIndex: 3,
        hints: [
          "Think about the potential difference rule for parallel branches.",
          "Each parallel branch connects directly across the two terminals of the battery.",
        ],
        explanation:
          "In a parallel circuit, every branch receives the full supply potential difference, regardless of its resistance: 9 V. The value 6 V is what the 6 Ω resistor would receive if the two resistors were in series instead.",
      },
      {
        id: "further-electricity-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "resistance-ohms-law",
        question: "A current of 2 A flows through a 9 Ω fixed resistor. What is the potential difference across the resistor?",
        options: ["4.5 V", "18 V", "11 V", "0.22 V"],
        answerIndex: 1,
        hints: [
          "Recall Ohm's Law linking potential difference, current, and resistance.",
          "Substitute into {{V = I * R}}.",
        ],
        explanation:
          "By Ohm's Law, {{V = I * R = 2 * 9 = 18}} V. Dividing 9 by 2 gives 4.5 V and adding gives 11 V, both of which misuse the formula.",
      },
      {
        id: "further-electricity-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "Under which condition is the current through a fixed metal resistor directly proportional to the potential difference across it?",
        options: [
          "Provided the circuit contains at least two cells",
          "Provided the current is kept above two amps",
          "Provided the temperature of the resistor stays constant",
          "Provided the resistor is wired in a parallel branch",
        ],
        answerIndex: 2,
        hints: [
          "What physical factor causes a metal wire's resistance to change when large currents flow?",
          "Recall the exact wording of Ohm's Law for an ohmic conductor.",
        ],
        explanation:
          "Ohm's Law applies only when temperature stays constant, because heating increases lattice vibrations and raises a metal conductor's resistance.",
      },
      {
        id: "further-electricity-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "As the potential difference across a filament lamp increases, what happens to its resistance and why?",
        options: [
          "It increases because the hotter filament's ions vibrate more",
          "It decreases because electrons gain extra speed from the battery",
          "It stays constant because metal wires always obey Ohm's Law",
          "It drops to zero once the tungsten filament glows brightly",
        ],
        answerIndex: 0,
        hints: [
          "A glowing bulb feels very hot to the touch.",
          "How do faster-vibrating metal ions affect drifting electrons?",
        ],
        explanation:
          "As the filament heats up, its metal ions vibrate with greater amplitude, causing more frequent collisions with drifting electrons and increasing the filament's resistance.",
      },
      {
        id: "further-electricity-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "An LDR (Light-Dependent Resistor) is moved from a dark cupboard into bright sunlight. How does its resistance change?",
        options: [
          "It increases steadily as more light hits the sensor",
          "It stays exactly the same regardless of brightness",
          "It rises at first and then falls back to normal",
          "It decreases sharply as the light intensity rises",
        ],
        answerIndex: 3,
        hints: [
          "Remember the mnemonic L-U-R-D for Light-Dependent Resistors.",
          "Light Up → Resistance Down!",
        ],
        explanation:
          "In an LDR, greater light intensity releases more charge carriers inside the semiconductor, causing its resistance to decrease sharply.",
      },
      {
        id: "further-electricity-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "electrical-power-safety-static",
        question: "In a standard UK or Singapore 3-pin mains plug, what colour is the insulation on the live wire and which side is it wired to?",
        options: [
          "Blue insulation, wired to the left-hand neutral terminal",
          "Brown insulation, wired to the right-hand terminal via the fuse",
          "Green and yellow stripes, wired to the topmost earth terminal",
          "Brown insulation, wired directly to the topmost safety terminal",
        ],
        answerIndex: 1,
        hints: [
          "Use the plug rhyme: bLue Left, bRown Right, sTriped Top.",
          "The live wire also passes through the cartridge fuse.",
        ],
        explanation:
          "The live wire has brown insulation and connects to the right-hand pin via the fuse. Blue is neutral (left) and green/yellow is earth (top).",
      },
      {
        id: "further-electricity-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "A 12 V spotlight draws a current of 2.5 A. What is its electrical power?",
        options: ["4.8 W", "14.5 W", "30 W", "0.21 W"],
        answerIndex: 2,
        hints: [
          "Recall the power equation linking power, current, and potential difference.",
          "Multiply current by potential difference: {{P = I * V}}.",
        ],
        explanation:
          "Using {{P = I * V}}: {{P = 2.5 * 12 = 30}} W. Dividing 12 by 2.5 gives the resistance (4.8 Ω), not the power.",
      },
      {
        id: "further-electricity-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "A dry polythene rod is rubbed with a woollen cloth and becomes negatively charged. Which statement explains why?",
        options: [
          "Negatively charged electrons transferred from the cloth onto the rod",
          "Positively charged protons transferred from the rod onto the cloth",
          "Negatively charged electrons were created inside the polythene rod",
          "Positively charged neutrons moved out of the polythene atoms",
        ],
        answerIndex: 0,
        hints: [
          "Which subatomic particle is free to transfer between insulating surfaces during friction?",
          "Protons and neutrons are locked inside atomic nuclei and never move during rubbing.",
        ],
        explanation:
          "Friction transfers negatively charged electrons from the woollen cloth onto the polythene rod, giving the rod an overall negative charge while leaving the cloth equally positive.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — Circuit Analysis, Graphs & Safety
  // ===========================================================================
  {
    id: "further-electricity-m2",
    title: "MCQ Paper 2 — Circuit Analysis, I–V Graphs & Safety",
    questions: [
      {
        id: "further-electricity-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "How do the directions of conventional current and actual electron flow compare in a metal wire connected to a cell?",
        options: [
          "Both flow together from the positive terminal to the negative terminal",
          "Both flow together from the negative terminal to the positive terminal",
          "Conventional current runs positive to negative; electrons drift negative to positive",
          "Conventional current runs negative to positive; electrons drift positive to negative",
        ],
        answerIndex: 2,
        hints: [
          "What electrical charge does an electron carry?",
          "Negative electrons are repelled by the negative terminal and attracted toward the positive terminal, opposite to the historical convention.",
        ],
        explanation:
          "Conventional current is drawn from positive (+) to negative (−), whereas negatively charged electrons actually drift from negative (−) to positive (+).",
      },
      {
        id: "further-electricity-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "A battery charger delivers a constant current of 1.5 A until 540 C of charge has flowed. For how many minutes was the charger running?",
        options: ["6 minutes", "9 minutes", "13.5 minutes", "3.6 minutes"],
        answerIndex: 0,
        hints: [
          "Rearrange {{Q = I * t}} to find the time in seconds first: {{t = Q / I}}.",
          "Divide your answer in seconds by 60 to convert to minutes.",
        ],
        explanation:
          "First find time in seconds: {{t = 540 / 1.5 = 360}} s. Converting to minutes: {{360 / 60 = 6}} minutes. Multiplying 540 by 1.5 instead of dividing leads to 13.5 minutes.",
      },
      {
        id: "further-electricity-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "When 20 C of electric charge flows through a motor, 240 J of energy is transferred. What is the potential difference across the motor?",
        options: ["4800 V", "260 V", "0.083 V", "12 V"],
        answerIndex: 3,
        hints: [
          "Potential difference is energy transferred per coulomb of charge.",
          "Rearrange {{E = Q * V}} to {{V = E / Q}}.",
        ],
        explanation:
          "Using {{V = E / Q}}: {{V = 240 / 20 = 12}} V (12 joules per coulomb). Multiplying gives 4800 V, which confuses {{V = E / Q}} with {{E = Q * V}}.",
      },
      {
        id: "further-electricity-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "A 2 Ω resistor and a 4 Ω resistor are connected in series to a 12 V battery. What is the potential difference across the 4 Ω resistor?",
        options: ["4 V", "8 V", "6 V", "12 V"],
        answerIndex: 1,
        hints: [
          "Find the total series resistance first, then calculate the circuit current using {{I = V / R_total}}.",
          "Once you know the current, multiply it by 4 Ω using {{V = I * R}}.",
        ],
        explanation:
          "Total resistance is {{2 + 4 = 6}} Ω, so the series current is {{12 / 6 = 2}} A. Across the 4 Ω resistor, {{V = 2 * 4 = 8}} V (leaving 4 V across the 2 Ω resistor; 8 + 4 = 12 V).",
      },
      {
        id: "further-electricity-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "Two resistors are connected in parallel to a power supply. The total current leaving the supply is 4.5 A, and 1.8 A flows through the first branch. What current flows through the second branch?",
        options: ["4.5 A", "6.3 A", "2.7 A", "2.5 A"],
        answerIndex: 2,
        hints: [
          "In a parallel circuit, the branch currents add up to the total supply current.",
          "Subtract the known branch current from 4.5 A.",
        ],
        explanation:
          "Because {{I_total = I_1 + I_2}}, the second branch carries {{4.5 - 1.8 = 2.7}} A. Adding the values to get 6.3 A would imply more current in one branch than leaves the supply.",
      },
      {
        id: "further-electricity-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "Two lamps are wired in parallel across a battery. A third identical lamp is added in a new parallel branch. What happens to the total resistance and total battery current?",
        options: [
          "Total resistance decreases and total battery current increases",
          "Total resistance increases and total battery current decreases",
          "Total resistance stays constant and total battery current drops",
          "Total resistance increases and total battery current increases",
        ],
        answerIndex: 0,
        hints: [
          "Adding a parallel branch opens an extra pathway for electrons to leave the battery.",
          "If more total current flows from the same battery voltage, what must have happened to total resistance ({{R = V / I}})?",
        ],
        explanation:
          "Adding a parallel branch gives charge an extra pathway, so total battery current increases for the same voltage. Since {{R_total = V / I_total}}, total resistance decreases.",
      },
      {
        id: "further-electricity-m2-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "series-parallel-circuits",
        question: "Two identical 12 Ω resistors are connected in parallel across a 6 V supply. What is the combined total resistance of the two resistors?",
        options: ["24 Ω", "12 Ω", "3 Ω", "6 Ω"],
        answerIndex: 3,
        hints: [
          "Find the current in ONE 12 Ω branch across 6 V using {{I = V / R}}.",
          "Add the two identical branch currents to get total current from the 6 V supply.",
          "Finally compute {{R_total = V / I_total}}.",
        ],
        explanation:
          "Each 12 Ω branch receives 6 V, so each carries {{6 / 12 = 0.5}} A. Total current is {{0.5 + 0.5 = 1.0}} A, giving {{R_total = 6 / 1.0 = 6}} Ω (half of one resistor). 24 Ω is the series sum.",
      },
      {
        id: "further-electricity-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "A potential difference of 9 V across a buzzer produces a current of 0.15 A. What is the resistance of the buzzer?",
        options: ["1.35 Ω", "60 Ω", "0.017 Ω", "9.15 Ω"],
        answerIndex: 1,
        hints: [
          "Rearrange Ohm's Law {{V = I * R}} to make resistance {{R}} the subject.",
          "Divide 9 V by 0.15 A carefully (note 0.15 = 15/100).",
        ],
        explanation:
          "Using {{R = V / I}}: {{R = 9 / 0.15 = 60}} Ω. Multiplying 9 × 0.15 gives 1.35 (which is actually power in watts, not resistance).",
      },
      {
        id: "further-electricity-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "Two ohmic resistors, X and Y, are plotted on the same I–V graph (current I on the vertical axis, potential difference V on the horizontal axis). Line X is steeper than line Y. Which conclusion is correct?",
        options: [
          "Resistor X has a greater resistance than resistor Y",
          "Resistor X heats up faster than resistor Y",
          "Resistor X has a smaller resistance than resistor Y",
          "Resistor X and resistor Y have identical resistance",
        ],
        answerIndex: 2,
        hints: [
          "Pick the same voltage V on the horizontal axis and read up to both lines.",
          "The steeper line allows MORE current for the same voltage—does that mean higher or lower resistance?",
        ],
        explanation:
          "For any given voltage V, steeper line X passes a larger current I. Since {{R = V / I}} (and gradient = {{1 / R}}), resistor X has the smaller resistance.",
      },
      {
        id: "further-electricity-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "Which description matches the I–V characteristic graph of a semiconductor diode?",
        options: [
          "Zero current for negative voltages, then a steep rise above about +0.7 V",
          "A perfectly straight line passing symmetrically through the origin",
          "An S-shaped curve that levels off symmetrically at large positive and negative V",
          "A flat horizontal line showing constant current at every positive voltage",
        ],
        answerIndex: 0,
        hints: [
          "Remember that a diode acts like a one-way valve for electric current.",
          "What happens in reverse bias (negative V) vs forward bias (positive V)?",
        ],
        explanation:
          "A diode has extremely high resistance in reverse bias (giving essentially zero current for negative V) and conducts sharply once forward voltage exceeds roughly 0.7 V.",
      },
      {
        id: "further-electricity-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "An NTC thermistor is connected in series with a fixed battery and an ammeter as a heat detector. When the room becomes hotter, what happens?",
        options: [
          "Thermistor resistance rises and ammeter reading falls",
          "Thermistor resistance rises and ammeter reading rises",
          "Thermistor resistance falls and ammeter reading falls",
          "Thermistor resistance falls and ammeter reading rises",
        ],
        answerIndex: 3,
        hints: [
          "Recall how an NTC thermistor responds to rising temperature (T-U-R-D).",
          "If circuit resistance drops while supply voltage stays fixed, what happens to current ({{I = V / R}})?",
        ],
        explanation:
          "As temperature rises, an NTC thermistor's resistance decreases sharply, allowing a larger current to flow through the circuit so the ammeter reading rises.",
      },
      {
        id: "further-electricity-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "A microwave oven rated at 920 W runs on the 230 V mains supply. Which standard plug fuse should be fitted?",
        options: ["3 A fuse", "5 A fuse", "13 A fuse", "1 A fuse"],
        answerIndex: 1,
        hints: [
          "First find the normal operating current using {{I = P / V}}.",
          "Select the standard fuse rating just ABOVE the normal current so it does not blow during normal use.",
        ],
        explanation:
          "Normal current is {{I = 920 / 230 = 4}} A. A 3 A fuse would melt immediately in normal use, while 13 A is unnecessarily high; the correct rating just above 4 A is 5 A.",
      },
      {
        id: "further-electricity-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "A 60 W laptop power adapter runs continuously for 5 minutes. How much electrical energy does it transfer?",
        options: ["300 J", "12 kJ", "18 kJ", "1.8 kJ"],
        answerIndex: 2,
        hints: [
          "Convert 5 minutes into seconds first.",
          "Use {{E = P * t}}, then divide by 1000 to express in kilojoules (kJ).",
        ],
        explanation:
          "Time in seconds is {{5 * 60 = 300}} s. Energy transferred is {{E = 60 * 300 = 18000}} J = 18 kJ. Forgetting the minutes-to-seconds conversion gives the trap 300 J.",
      },
      {
        id: "further-electricity-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "How does the earth wire protect a user if a loose live wire touches the metal casing of a toaster?",
        options: [
          "It provides a low-resistance path to earth so a huge surge melts the fuse",
          "It absorbs all 230 V into the plastic plug case so the toaster stays on",
          "It increases the toaster's resistance so only a harmless trickle flows",
          "It reverses the current direction back down the blue neutral wire safely",
        ],
        answerIndex: 0,
        hints: [
          "Does the earth wire have a very high or very low resistance?",
          "Think about what a sudden large current surge through the live wire does to the fuse.",
        ],
        explanation:
          "The earth wire connects the metal case to ground with very low resistance. If the live wire touches the case, a huge fault current flows to earth, immediately melting the live fuse and isolating the appliance.",
      },
      {
        id: "further-electricity-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "A suspended insulating rod P is pushed away (repelled) when a negatively charged rod Q is brought close to it. What must be true about rod P?",
        options: [
          "Rod P must be electrically neutral overall",
          "Rod P must carry a net positive charge",
          "Rod P could be either positive or neutral",
          "Rod P must carry a net negative charge",
        ],
        answerIndex: 3,
        hints: [
          "Recall the law of electrostatic forces: like charges repel, unlike charges attract.",
          "Note that a neutral object can be attracted by induction, but can it ever be repelled?",
        ],
        explanation:
          "Only two like charges repel each other. Since rod Q is negatively charged and repels rod P, rod P must also be negatively charged.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — Exam Mastery & Applied Multi-Step Problems
  // ===========================================================================
  {
    id: "further-electricity-m3",
    title: "MCQ Paper 3 — Applied Problems & Exam Mastery",
    questions: [
      {
        id: "further-electricity-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "An LED indicator draws a current of 250 mA for 80 seconds. How much charge flows through the LED?",
        options: ["20000 C", "20 C", "3.125 C", "200 C"],
        answerIndex: 1,
        hints: [
          "Convert milliamps into amps by dividing by 1000.",
          "Substitute your current in amps into {{Q = I * t}}.",
        ],
        explanation:
          "First convert {{250 mA = 0.25}} A. Then {{Q = I * t = 0.25 * 80 = 20}} C. Multiplying without converting mA gives 20000 C.",
      },
      {
        id: "further-electricity-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "charge-current-pd",
        question: "A 12 V immersion heater carries a current of 2 A for 30 s. How much total energy is transferred by the charge passing through the heater?",
        options: ["60 J", "24 J", "720 J", "360 J"],
        answerIndex: 2,
        hints: [
          "First calculate the charge transferred using {{Q = I * t}} (or find power {{P = I * V}} first).",
          "Then multiply charge by potential difference using {{E = Q * V}}.",
        ],
        explanation:
          "Charge transferred is {{Q = 2 * 30 = 60}} C. Energy is {{E = Q * V = 60 * 12 = 720}} J (equivalently {{P = 2 * 12 = 24}} W, then {{E = 24 * 30 = 720}} J).",
      },
      {
        id: "further-electricity-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charge-current-pd",
        question: "Why is a voltmeter designed to have an extremely high internal resistance?",
        options: [
          "So virtually no current diverts through the meter from the tested component",
          "So all the circuit's current flows straight through the voltmeter coil",
          "So the voltmeter doubles the battery's potential difference when connected",
          "So the voltmeter protects the battery like a fast-acting cartridge fuse",
        ],
        answerIndex: 0,
        hints: [
          "Remember a voltmeter is connected in parallel across a component.",
          "If a parallel branch had low resistance, what would happen to the current through the original component?",
        ],
        explanation:
          "Because a voltmeter sits in parallel across a component, its very high resistance prevents current from taking a shortcut through the meter, leaving the circuit's behaviour unchanged.",
      },
      {
        id: "further-electricity-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "A 16 Ω resistor and an unknown resistor X are connected in series to an 18 V supply. The circuit current is 0.5 A. What is the resistance of X?",
        options: ["9 Ω", "36 Ω", "52 Ω", "20 Ω"],
        answerIndex: 3,
        hints: [
          "First find the total resistance of the whole series circuit using {{R_total = V / I}}.",
          "Subtract the known 16 Ω resistor from {{R_total}}.",
        ],
        explanation:
          "Total resistance is {{R_total = 18 / 0.5 = 36}} Ω. Since resistors add in series, {{R_X = 36 - 16 = 20}} Ω. Adding instead of subtracting gives 52 Ω.",
      },
      {
        id: "further-electricity-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "series-parallel-circuits",
        question: "A 6 Ω resistor and a 3 Ω resistor are wired in parallel across a 12 V supply. What total current leaves the power supply?",
        options: ["1.33 A", "6 A", "2 A", "9 A"],
        answerIndex: 1,
        hints: [
          "Both branches receive the full 12 V potential difference.",
          "Calculate each branch current separately with {{I = V / R}}.",
          "Add the two branch currents to find the total supply current.",
        ],
        explanation:
          "The 6 Ω branch carries {{12 / 6 = 2}} A and the 3 Ω branch carries {{12 / 3 = 4}} A. Total current leaving the supply is {{2 + 4 = 6}} A. Adding resistances to get 9 Ω and 1.33 A is the series mistake.",
      },
      {
        id: "further-electricity-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "series-parallel-circuits",
        question: "A 6 Ω resistor and a 12 Ω resistor are connected in parallel across a 12 V battery. What is the combined total resistance of the parallel pair?",
        options: ["18 Ω", "9 Ω", "4 Ω", "3 Ω"],
        answerIndex: 2,
        hints: [
          "Find the current in each branch across 12 V: {{I_1 = 12 / 6}} and {{I_2 = 12 / 12}}.",
          "Add the branch currents to get total battery current {{I_total}}.",
          "Use {{R_total = V / I_total}} — check that your answer is smaller than 6 Ω!",
        ],
        explanation:
          "Branch currents are {{12 / 6 = 2}} A and {{12 / 12 = 1}} A, giving {{I_total = 3}} A. Therefore {{R_total = 12 / 3 = 4}} Ω (smaller than the smallest branch resistor of 6 Ω).",
      },
      {
        id: "further-electricity-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "series-parallel-circuits",
        question: "Why are ceiling lights in a school classroom wired in parallel rather than in series?",
        options: [
          "Each light gets full mains voltage and stays lit if another lamp fails",
          "Each light shares a tiny fraction of mains voltage to save wire",
          "Parallel wiring makes total resistance much higher than series wiring",
          "Parallel lights use half as much copper wire as a single series loop",
        ],
        answerIndex: 0,
        hints: [
          "What happens to the remaining bulbs in a series string if one bulb blows?",
          "Does every appliance in a building need the full 230 V supply?",
        ],
        explanation:
          "In parallel, every lamp receives the full 230 V supply at full brightness, can be switched independently, and remains lit even if another bulb breaks.",
      },
      {
        id: "further-electricity-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "A green LED lights brightly in a DC circuit. A student flips the battery round so its terminals are reversed, and the LED goes completely dark. Why?",
        options: [
          "The battery's voltage drops to zero whenever its polarity is reversed",
          "The connecting wires only conduct electrons in one fixed direction",
          "The reversed battery destroys all the delocalised electrons in the loop",
          "An LED is a diode with extremely high resistance in the reverse direction",
        ],
        answerIndex: 3,
        hints: [
          "What does the 'D' in LED stand for?",
          "Think about how a diode behaves when voltage is reversed.",
        ],
        explanation:
          "An LED (Light-Emitting Diode) allows current in one direction only. Reversing the battery places the LED in reverse bias where its resistance is extremely high, blocking current.",
      },
      {
        id: "further-electricity-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "resistance-ohms-law",
        question: "A filament lamp draws 0.5 A at 3 V, and draws 1.2 A when the potential difference is raised to 12 V. By how much did the lamp's resistance increase?",
        options: ["2 Ω", "4 Ω", "6 Ω", "10 Ω"],
        answerIndex: 1,
        hints: [
          "Calculate the resistance at 3 V using {{R = V / I}}.",
          "Calculate the resistance at 12 V using {{R = V / I}}.",
          "Subtract the lower resistance from the higher resistance.",
        ],
        explanation:
          "At 3 V: {{R_1 = 3 / 0.5 = 6}} Ω. At 12 V: {{R_2 = 12 / 1.2 = 10}} Ω. The resistance increased by {{10 - 6 = 4}} Ω as the filament heated up.",
      },
      {
        id: "further-electricity-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "resistance-ohms-law",
        question: "An LDR and a fixed resistor are connected in series across a 6 V battery. As night falls and light fades, what happens to the circuit current and the potential difference across the LDR?",
        options: [
          "Circuit current increases and PD across the LDR decreases",
          "Circuit current stays fixed and PD across the LDR stays fixed",
          "Circuit current decreases and PD across the LDR increases",
          "Circuit current decreases and PD across the LDR decreases",
        ],
        answerIndex: 2,
        hints: [
          "In darkness, does an LDR's resistance increase or decrease?",
          "Higher total series resistance reduces current, AND the larger resistor in a series pair takes a larger share of the 6 V supply!",
        ],
        explanation:
          "In darkness, the LDR's resistance rises sharply. Total series resistance rises so current falls, while the LDR now represents a bigger fraction of total resistance and claims a larger share of the 6 V potential difference.",
      },
      {
        id: "further-electricity-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resistance-ohms-law",
        question: "A thermistor connected in series with a 9 V cell and an ammeter is lowered from warm water into an ice bath. What happens to the thermistor's resistance and the ammeter reading?",
        options: [
          "Resistance decreases and the ammeter reading increases",
          "Resistance decreases and the ammeter reading decreases",
          "Resistance stays unchanged and the ammeter reading stays steady",
          "Resistance increases and the ammeter reading decreases",
        ],
        answerIndex: 3,
        hints: [
          "In an NTC thermistor, lowering the temperature produces the opposite change to heating.",
          "Higher resistance at constant supply voltage means smaller current.",
        ],
        explanation:
          "Cooling an NTC thermistor increases its resistance steeply. With a fixed 9 V cell, higher resistance means a smaller current ({{I = V / R}}), so the ammeter reading decreases.",
      },
      {
        id: "further-electricity-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "electrical-power-safety-static",
        question: "A 12 Ω electric heater coil is connected directly to a 24 V DC supply. What is the electrical power of the heater?",
        options: ["288 W", "48 W", "12 W", "24 W"],
        answerIndex: 1,
        hints: [
          "First find the current through the heater using Ohm's Law {{I = V / R}}.",
          "Then calculate power using {{P = I * V}}.",
        ],
        explanation:
          "Current is {{I = 24 / 12 = 2}} A. Power is {{P = I * V = 2 * 24 = 48}} W. Multiplying 24 × 12 directly gives the wrong trap 288 W.",
      },
      {
        id: "further-electricity-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "Why must a mains switch and fuse ALWAYS be connected in the live wire rather than the neutral wire?",
        options: [
          "Because the neutral wire carries a much higher voltage than the live wire",
          "Because current only flows through the live wire and never enters neutral",
          "Because breaking the live wire isolates the appliance from the 230 V supply",
          "Because the brown copper wire melts faster than the blue copper wire",
        ],
        answerIndex: 2,
        hints: [
          "Which wire sits at an alternating 230 V potential relative to earth?",
          "If a switch were in the neutral wire only, what voltage would still reach the inside of the appliance when switched off?",
        ],
        explanation:
          "Placing the switch and fuse in the live wire disconnects the appliance from the 230 V potential when off or faulted. Breaking only the neutral wire leaves internal parts live at 230 V!",
      },
      {
        id: "further-electricity-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "electrical-power-safety-static",
        question: "Why does a double-insulated phone charger with a sealed plastic casing NOT require an earth wire?",
        options: [
          "The outer plastic casing is an insulator and cannot become live if a wire comes loose",
          "Plastic casings conduct fault currents directly into the surrounding air safely",
          "Double-insulated appliances never use any live or neutral conductors inside",
          "Phone chargers draw currents too small to ever cause a dangerous electric shock",
        ],
        answerIndex: 0,
        hints: [
          "What material is the outside of a double-insulated appliance made from?",
          "Why would an earth wire attached to plastic serve no purpose?",
        ],
        explanation:
          "A double-insulated appliance has a non-conducting plastic outer casing (plus internal insulation), so a user cannot touch live metal even if an internal live wire comes loose.",
      },
      {
        id: "further-electricity-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "electrical-power-safety-static",
        question: "Before refuelling an aircraft at Changi Airport, ground crew connect a copper earthing cable between the fuel tanker and the plane. Why is this safety step essential?",
        options: [
          "To power the aircraft's cabin lights while the main jet engines are turned off",
          "To keep the aviation fuel warm so it flows rapidly through the rubber hose",
          "To magnetise the aluminium wings so fuel droplets stick inside the tank",
          "To discharge static built up by fuel friction so no spark ignites fuel vapour",
        ],
        answerIndex: 3,
        hints: [
          "Fuel rushing rapidly past the insulating walls of a hose creates friction.",
          "What danger arises if a large potential difference builds up near flammable vapour?",
        ],
        explanation:
          "Friction between fast-flowing fuel and the hose transfers electrons, creating static charge. An earthing cable lets charge flow away safely so no spark can jump and ignite fuel vapour.",
      },
    ],
  },
];
