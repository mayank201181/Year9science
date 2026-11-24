import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Core Foundations (15 MCQs)
  // =========================================================================
  {
    id: "further-forces-m1",
    title: "MCQ Paper 1 — Forces, Graphs, Pressure & Springs Basics",
    questions: [
      {
        id: "further-forces-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "resultant-forces-newton",
        question: "Two students pull a trolley in opposite directions along a straight track: 120 N to the right and 45 N to the left. What is the **resultant force** on the trolley?",
        options: [
          "75 N to the right",
          "75 N to the left",
          "165 N to the right",
          "165 N to the left",
        ],
        answerIndex: 0,
        explanation:
          "Opposing forces subtract: 120 N − 45 N = 75 N, acting in the direction of the larger force (**to the right**). Adding 120 + 45 = 165 N only applies if both forces pull the same way.",
        hints: [
          "Opposite forces cancel each other out, so subtract the smaller from the larger.",
          "The resultant points in the direction of the stronger pull.",
        ],
      },
      {
        id: "further-forces-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "A car travels along a straight, level motorway at a **constant velocity** of 25 m/s. Its engine produces a forward driving force of 1400 N. What is the total backward resistive force (air resistance + friction)?",
        options: ["0 N", "1400 N", "2800 N", "35 000 N"],
        answerIndex: 1,
        explanation:
          "By Newton's First Law, constant velocity means **zero resultant force** (balanced forces). Therefore total backward drag must exactly equal the 1400 N forward driving force.",
        hints: [
          "Constant velocity means acceleration is zero — what does that tell you about the resultant force?",
          "If forces are balanced, forward thrust equals total backward drag.",
        ],
      },
      {
        id: "further-forces-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "A resultant force of 60 N acts on a 15 kg crate resting on smooth ice. What is the crate's acceleration?",
        options: ["0.25 m/s²", "45 m/s²", "4.0 m/s²", "900 m/s²"],
        answerIndex: 2,
        explanation:
          "Rearranging Newton's Second Law ({{F = m * a}}) gives {{a = F / m = 60 / 15 = 4.0}} m/s². Dividing 15 by 60 gives 0.25, which inverts the formula.",
        hints: [
          "Use Newton's Second Law: {{F = m * a}}.",
          "Rearrange to {{a = F / m}} and divide 60 N by 15 kg.",
        ],
      },
      {
        id: "further-forces-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "resultant-forces-newton",
        question: "A student has a mass of 50 kg. Taking Earth's gravitational field strength as {{g = 10 \"N/kg\"}}, what is the student's **weight**?",
        options: ["5.0 N", "50 N", "50 kg", "500 N"],
        answerIndex: 3,
        explanation:
          "Weight is a force measured in newtons: {{W = m * g = 50 * 10 = 500}} N. 50 kg is the student's mass, not weight.",
        hints: [
          "Weight is calculated using {{W = m * g}} and is measured in newtons (N).",
        ],
      },
      {
        id: "further-forces-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "motion-graphs",
        question: "On a **distance–time** graph, what does a straight **horizontal** line indicate?",
        options: [
          "The object is stationary",
          "The object moves at constant speed",
          "The object is accelerating steadily",
          "The object is decelerating steadily",
        ],
        answerIndex: 0,
        explanation:
          "A horizontal line on a **distance–time** graph shows that distance is not changing as time passes, so gradient = 0 and the object is **stationary**.",
        hints: [
          "Check the y-axis: it is DISTANCE, not velocity.",
          "If distance stays at the same value while time ticks on, is the object moving?",
        ],
      },
      {
        id: "further-forces-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "motion-graphs",
        question: "A cyclist rides 360 m along a straight path in 24 s. What is the cyclist's average speed?",
        options: ["12 m/s", "15 m/s", "336 m/s", "8640 m/s"],
        answerIndex: 1,
        explanation:
          "Average speed = distance ÷ time = {{360 / 24 = 15}} m/s. Multiplying 360 × 24 = 8640 misuses the formula.",
        hints: [
          "Use {{v = d / t}}.",
        ],
      },
      {
        id: "further-forces-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "A car accelerates uniformly from 4.0 m/s to 22 m/s in 6.0 s. What is its acceleration?",
        options: ["1.5 m/s²", "3.7 m/s²", "3.0 m/s²", "4.3 m/s²"],
        answerIndex: 2,
        explanation:
          "Acceleration = {{(v - u) / t = (22 - 4) / 6 = 18 / 6 = 3.0}} m/s². Dividing 22 by 6 (3.7) forgets to subtract the starting velocity 4 m/s.",
        hints: [
          "Find the CHANGE in velocity first: {{v - u = 22 - 4}}.",
          "Divide the change in velocity by the time (6.0 s).",
        ],
      },
      {
        id: "further-forces-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "motion-graphs",
        question: "What physical quantity is represented by the **area underneath a velocity–time graph**?",
        options: [
          "The average acceleration",
          "The final velocity reached",
          "The resultant force applied",
          "The total distance travelled",
        ],
        answerIndex: 3,
        explanation:
          "Because velocity (m/s) × time (s) = metres (m), the **area under a velocity–time graph** equals the **total distance travelled**.",
        hints: [
          "Think about multiplying the y-axis unit (m/s) by the x-axis unit (s).",
        ],
      },
      {
        id: "further-forces-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "A heavy crate exerts a downward force of 800 N across a flat contact area of {{0.40 \"m\"^2}}. What pressure does it exert on the floor?",
        options: ["2000 Pa", "320 Pa", "800 Pa", "4000 Pa"],
        answerIndex: 0,
        explanation:
          "Pressure = force ÷ area = {{800 / 0.40 = 2000}} Pa (N/m²). Multiplying 800 × 0.40 = 320 incorrectly multiplies force and area.",
        hints: [
          "Use {{P = F / A}}.",
          "Divide 800 N by {{0.40 \"m\"^2}}.",
        ],
      },
      {
        id: "further-forces-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "Why does a sharp kitchen knife slice vegetables far more easily than a blunt knife pushed with the exact same force?",
        options: [
          "The sharp blade increases the downward gravitational force on the food",
          "The sharp edge has a tiny area, creating a much higher cutting pressure",
          "The sharp metal conducts heat faster to melt the vegetable skin",
          "The sharp blade spreads the force over a wider area to lower pressure",
        ],
        answerIndex: 1,
        explanation:
          "Since {{P = F / A}}, concentrating the same pushing force onto a tiny blade-edge area produces an enormously higher **pressure**, easily slicing through the food.",
        hints: [
          "Compare the contact area of a sharp edge versus a thick blunt edge.",
          "When area {{A}} gets very small in {{P = F / A}}, what happens to {{P}}?",
        ],
      },
      {
        id: "further-forces-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "Three identical small holes are punched vertically down the side of a tall water bottle (top, middle and bottom). Which jet shoots out the **farthest** horizontally, and why?",
        options: [
          "The top hole, because atmospheric air pushes down directly on the water",
          "All three shoot equally far, because water pressure is identical everywhere",
          "The bottom hole, because liquid pressure increases with depth below the surface",
          "The middle hole, because gravity pulls sideways most strongly at half height",
        ],
        answerIndex: 2,
        explanation:
          "Liquid pressure increases with **depth** because there is a greater weight of water pressing down from above, forcing water out of the lowest hole at the highest speed.",
        hints: [
          "Which hole has the greatest column of water pressing down above it?",
          "Higher liquid pressure pushes water sideways out of the hole faster.",
        ],
      },
      {
        id: "further-forces-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "A student applies a perpendicular force of 35 N to a door handle situated 0.40 m from the hinges. What is the **moment** produced about the hinges?",
        options: ["8.75 Nm", "35.4 Nm", "87.5 Nm", "14 Nm"],
        answerIndex: 3,
        explanation:
          "Moment = force × perpendicular distance from pivot = {{35 * 0.40 = 14}} Nm. Dividing 35 by 0.40 gives 87.5, using the formula backwards.",
        hints: [
          "Use {{M = F * d}}.",
          "Multiply 35 N by 0.40 m.",
        ],
      },
      {
        id: "further-forces-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "A 300 N child sits 2.0 m to the left of a seesaw's pivot. How far to the right of the pivot must a 600 N parent sit so the seesaw balances?",
        options: ["1.0 m", "2.0 m", "4.0 m", "0.5 m"],
        answerIndex: 0,
        explanation:
          "Anticlockwise moment = {{300 * 2.0 = 600}} Nm. For balance, clockwise moment = {{600 * d = 600}} Nm, giving {{d = 1.0}} m. Twice the weight needs half the distance!",
        hints: [
          "Calculate the child's anticlockwise moment ({{300 * 2.0}}).",
          "Set {{600 * d}} equal to that moment and solve for {{d}}.",
        ],
      },
      {
        id: "further-forces-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "moments-hookes-law",
        question: "A helical spring has an unstretched length of 10 cm. When a weight hangs from it, its total length becomes 18 cm. What is the **extension** of the spring?",
        options: ["10 cm", "8 cm", "18 cm", "28 cm"],
        answerIndex: 1,
        explanation:
          "Extension is the extra length stretched beyond the original unstretched length: {{18 - 10 = 8}} cm. Using 18 cm (total length) is a common mistake.",
        hints: [
          "Extension = stretched length − original unstretched length.",
        ],
      },
      {
        id: "further-forces-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "A spring with spring constant {{k = 50 \"N/m\"}} is stretched elastically by an extension of 0.12 m. Using Hooke's Law ({{F = k * e}}), what force was applied?",
        options: ["4.2 N", "12 N", "6.0 N", "417 N"],
        answerIndex: 2,
        explanation:
          "By Hooke's Law, {{F = k * e = 50 * 0.12 = 6.0}} N. Dividing 50 by 0.12 gives 417 N, rearranging incorrectly.",
        hints: [
          "Substitute directly into {{F = k * e}}.",
          "Multiply 50 N/m by 0.12 m.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Applied Mechanisms & Graphs (15 MCQs)
  // =========================================================================
  {
    id: "further-forces-m2",
    title: "MCQ Paper 2 — Terminal Velocity, Fluids & Equilibrium",
    questions: [
      {
        id: "further-forces-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "A skydiver falling at terminal velocity pulls the ripcord and opens their parachute. Immediately after the parachute opens, what happens to the **resultant force** and the **motion** of the skydiver?",
        options: [
          "Resultant force points downward; the skydiver accelerates downward faster",
          "Resultant force drops to zero; the skydiver instantly stops mid-air",
          "Resultant force points upward; the skydiver rockets upward toward the plane",
          "Resultant force points upward; the skydiver decelerates while still falling downward",
        ],
        answerIndex: 3,
        explanation:
          "Opening the parachute dramatically increases upward air resistance above weight, producing an **upward resultant force**. Because the skydiver is already moving fast downward, an upward force causes rapid **deceleration downward** (never upward flight!).",
        hints: [
          "Does opening a parachute change the skydiver's weight, or does it change upward air resistance?",
          "When a net force acts OPPOSITE to the direction of motion, does an object reverse instantly or decelerate?",
        ],
      },
      {
        id: "further-forces-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "An 800 kg racing car accelerates forward at {{3.5 \"m/s\"^2}} while experiencing 600 N of backward air resistance. What forward **driving force** must the engine supply?",
        options: ["3400 N", "2800 N", "2200 N", "1400 N"],
        answerIndex: 0,
        explanation:
          "First find the required resultant force: {{F_\"res\" = m * a = 800 * 3.5 = 2800}} N. Since {{F_\"res\" = F_\"engine\" - 600}}, the engine must supply {{2800 + 600 = 3400}} N to both overcome drag and accelerate the car.",
        hints: [
          "Use {{F = m * a}} to find the RESULTANT force needed first.",
          "The engine must overcome the 600 N drag AND still leave that resultant force over!",
        ],
      },
      {
        id: "further-forces-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "An astronaut of mass 60 kg travels from Earth ({{g = 10 \"N/kg\"}}) to the Moon ({{g = 1.6 \"N/kg\"}}). How do her **mass** and **weight** compare on the Moon?",
        options: [
          "Mass drops to 9.6 kg and weight drops to 96 N",
          "Mass stays 60 kg and weight drops from 600 N to 96 N",
          "Mass stays 60 kg and weight stays 600 N everywhere",
          "Mass rises to 96 kg and weight drops to 60 N",
        ],
        answerIndex: 1,
        explanation:
          "Mass measures the amount of matter (60 kg) and never changes with location. Weight depends on gravity ({{W = m * g}}), falling from {{60 * 10 = 600}} N on Earth to {{60 * 1.6 = 96}} N on the Moon.",
        hints: [
          "Does the amount of matter in your body change when you land on the Moon?",
          "Calculate {{W = 60 * 1.6}} for her Moon weight.",
        ],
      },
      {
        id: "further-forces-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "resultant-forces-newton",
        question: "A footballer's boot kicks a stationary football forward with a force of 250 N. According to **Newton's Third Law**, what is the exact interaction-pair force?",
        options: [
          "Gravity pulls the football downward with a force of 250 N",
          "Air resistance pushes the football backward with a force of 250 N",
          "The football exerts a backward force of 250 N on the footballer's boot",
          "Friction from the grass pushes the football forward with 250 N",
        ],
        answerIndex: 2,
        explanation:
          "A Newton's Third Law pair always involves the **same two objects** (boot and ball) exerting **equal and opposite forces of the same contact type** on each other.",
        hints: [
          "Swap the two objects in 'boot pushes ball'.",
          "Newton's Third Law forces are equal in magnitude, opposite in direction, and act on TWO DIFFERENT objects.",
        ],
      },
      {
        id: "further-forces-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "A velocity–time graph shows a flat horizontal line at **16 m/s** from {{t = 5 \"s\"}} to {{t = 20 \"s\"}}. How far does the object travel during this 15-second interval?",
        options: ["0 m", "1.07 m", "80 m", "240 m"],
        answerIndex: 3,
        explanation:
          "A horizontal line at 16 m/s on a velocity–time graph means constant velocity of 16 m/s. Distance = area of rectangle = {{16 * (20 - 5) = 16 * 15 = 240}} m. Choosing 0 m confuses it with a distance–time graph!",
        hints: [
          "Check the graph type: this is a VELOCITY–time graph, so a flat line at 16 m/s means steady motion!",
          "Find the area of the rectangle of height 16 m/s and width (20 − 5) = 15 s.",
        ],
      },
      {
        id: "further-forces-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "A racing car accelerates uniformly from rest (0 m/s) to 24 m/s in 8.0 s. What is the **distance travelled** during these 8.0 seconds?",
        options: ["96 m", "192 m", "3.0 m", "48 m"],
        answerIndex: 0,
        explanation:
          "On a velocity–time graph, uniform acceleration from 0 to 24 m/s over 8 s forms a triangle. Area = {{1/2 * \"base\" * \"height\" = 0.5 * 8 * 24 = 96}} m. Choosing 192 m forgot the factor of {{1/2}} (rectangle instead of triangle).",
        hints: [
          "Sketch the velocity–time graph: it goes straight from (0, 0) up to (8, 24) — a triangle!",
          "Calculate the triangle's area: {{1/2 * 8 * 24}}.",
        ],
      },
      {
        id: "further-forces-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "A train slows down uniformly from 25 m/s to 5.0 m/s in 4.0 s as it approaches a station. What is its acceleration?",
        options: ["+5.0 m/s²", "−5.0 m/s²", "−6.25 m/s²", "−7.5 m/s²"],
        answerIndex: 1,
        explanation:
          "Using {{a = (v - u) / t = (5 - 25) / 4 = -20 / 4 = -5.0}} m/s². The minus sign shows deceleration (velocity decreasing by 5.0 m/s every second).",
        hints: [
          "Here initial velocity {{u = 25}} m/s and final velocity {{v = 5.0}} m/s.",
          "Compute {{(v - u) / t}} and keep careful track of the sign.",
        ],
      },
      {
        id: "further-forces-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "On a **distance–time** graph, a plotted line curves smoothly upward so that its gradient gets **steeper and steeper** as time increases. What is the object doing?",
        options: [
          "Moving at a steady high speed",
          "Slowing down to a complete stop",
          "Accelerating (its speed is increasing)",
          "Travelling backward toward the origin",
        ],
        answerIndex: 2,
        explanation:
          "On a distance–time graph, **gradient = speed**. A curve getting steeper means the gradient is increasing, so the object's speed is increasing (**accelerating**).",
        hints: [
          "What does the gradient of a distance–time graph represent?",
          "If the slope becomes steeper over time, is speed increasing or decreasing?",
        ],
      },
      {
        id: "further-forces-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "An elephant weighs 40 000 N and stands evenly on all **four** feet. Each foot has a contact area of {{0.10 \"m\"^2}}. What pressure does the elephant exert on the ground?",
        options: ["16 000 Pa", "400 000 Pa", "200 000 Pa", "100 000 Pa"],
        answerIndex: 3,
        explanation:
          "Total contact area of 4 feet = {{4 * 0.10 = 0.40 \"m\"^2}}. Pressure = {{40 000 / 0.40 = 100 000}} Pa (100 kPa). Choosing 400 000 Pa forgets to multiply by 4 feet!",
        hints: [
          "Count how many feet touch the ground: multiply {{0.10 \"m\"^2}} by 4 first!",
          "Divide 40 000 N by the total contact area.",
        ],
      },
      {
        id: "further-forces-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "Why does leaving a sealed rigid aerosol can inside a hot parked car cause the gas pressure inside the can to rise dangerously?",
        options: [
          "Gas particles move faster and collide more frequently and harder with the walls",
          "Heating creates extra gas molecules inside the sealed metal container",
          "Gas particles swell up and become heavier as their temperature rises",
          "Metal walls shrink inward while gas particles slow down and clump together",
        ],
        answerIndex: 0,
        explanation:
          "Heating increases the average kinetic energy of the trapped gas particles, so they move faster and strike the fixed inner walls **more frequently and with greater force**, raising pressure.",
        hints: [
          "Remember the container is sealed, so the number and size of gas particles cannot change.",
          "How does higher temperature change particle speed and wall collisions?",
        ],
      },
      {
        id: "further-forces-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "As a mountaineer climbs higher up Mount Everest, how and why does **atmospheric pressure** change?",
        options: [
          "It increases because the mountaineer gets closer to solar radiation",
          "It decreases because there is less weight of air above and air is less dense",
          "It stays constant at 101 kPa at every height above sea level",
          "It increases because colder air always compresses into higher pressure",
        ],
        answerIndex: 1,
        explanation:
          "Atmospheric pressure comes from the weight of the air column overhead. At higher altitude there is **less air above** and lower air density, so fewer collisions occur per second and atmospheric pressure **decreases**.",
        hints: [
          "What causes atmospheric pressure in the first place?",
          "Is there more air above you at sea level or on a 8848 m mountain summit?",
        ],
      },
      {
        id: "further-forces-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "On a balanced uniform 2.0 m beam pivoted at its centre, two weights hang on the left: 20 N at 0.30 m and 15 N at 0.40 m from the pivot. A single weight {{F}} hangs 0.60 m to the right of the pivot. What is {{F}}?",
        options: ["7.2 N", "14 N", "20 N", "35 N"],
        answerIndex: 2,
        explanation:
          "Total anticlockwise moment = {{(20 * 0.30) + (15 * 0.40) = 6.0 + 6.0 = 12}} Nm. For balance, {{F * 0.60 = 12}}, so {{F = 12 / 0.60 = 20}} N.",
        hints: [
          "Calculate BOTH anticlockwise moments separately and ADD them together.",
          "Set {{F * 0.60}} equal to that total anticlockwise moment.",
        ],
      },
      {
        id: "further-forces-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "Why does using a **longer spanner** make it easier to loosen a stubbornly rusted nut?",
        options: [
          "A longer handle reduces friction between the metal threads of the nut",
          "A longer handle makes the required turning moment smaller than before",
          "A longer handle stores elastic potential energy inside the steel bolt",
          "A longer perpendicular distance produces the same moment using a smaller force",
        ],
        answerIndex: 3,
        explanation:
          "The nut still requires the same turning moment {{M}}, but since {{M = F * d}}, increasing the perpendicular distance {{d}} from the pivot means you need a **smaller applied force** {{F}}.",
        hints: [
          "Does the nut's stiffness (needed turning moment) change when you switch spanners?",
          "Look at {{F = M / d}}: what happens to {{F}} when {{d}} increases?",
        ],
      },
      {
        id: "further-forces-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "A spring has an unstretched length of 14 cm. Hanging a 12 N load stretches it to a total length of 22 cm (within its elastic limit). What is its **spring constant** {{k}}?",
        options: ["150 N/m", "54.5 N/m", "1.5 N/m", "85.7 N/m"],
        answerIndex: 0,
        explanation:
          "Extension {{e = 22 - 14 = 8 \"cm\" = 0.08 \"m\"}}. Spring constant {{k = F / e = 12 / 0.08 = 150}} N/m. Choosing 54.5 N/m uses total length (0.22 m) instead of extension; 1.5 N/m forgets to convert cm to m.",
        hints: [
          "First subtract the original 14 cm length from 22 cm to find the extension.",
          "Convert the extension from cm to metres (÷ 100), then calculate {{k = F / e}}.",
        ],
      },
      {
        id: "further-forces-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "A student keeps adding slotted masses to a steel spring past its **limit of proportionality** and **elastic limit**. What two observations will they make?",
        options: [
          "The force–extension graph stays straight and the spring snaps back to original length",
          "The force–extension graph curves and the spring remains permanently stretched",
          "The spring constant becomes infinite and extension drops back down to zero",
          "The force drops to zero while the spring shrinks shorter than its original length",
        ],
        answerIndex: 1,
        explanation:
          "Past the limit of proportionality, Hooke's Law fails so the force–extension graph **curves**; past the elastic limit, **plastic (inelastic) deformation** occurs so the spring is **permanently stretched**.",
        hints: [
          "What shape is a Hooke's Law graph BEFORE vs AFTER the limit of proportionality?",
          "What does plastic (inelastic) deformation mean when the masses are removed?",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Stretch & Exam Mastery (15 MCQs)
  // =========================================================================
  {
    id: "further-forces-m3",
    title: "MCQ Paper 3 — Multi-Step & Exam Mastery",
    questions: [
      {
        id: "further-forces-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "resultant-forces-newton",
        question: "Which description matches the **velocity–time graph** of a skydiver from jump-out, through first terminal velocity, parachute opening, to their second slower terminal velocity?",
        options: [
          "A single straight diagonal line rising forever until touching the ground",
          "A curve rising to a flat line, then dropping straight to zero velocity mid-air",
          "A curve flattening to a high plateau, dropping steeply, then flattening to a lower plateau",
          "A horizontal line from start to finish because weight never changes during the fall",
        ],
        answerIndex: 2,
        explanation:
          "Acceleration starts high (steep curve) and drops to zero (flat high plateau = first terminal velocity). Opening the chute causes rapid deceleration (steep downward drop), then air resistance balances weight again at a lower constant speed (lower flat plateau).",
        hints: [
          "Remember: constant terminal velocity appears as a HORIZONTAL line on a velocity–time graph.",
          "Opening the chute slows the skydiver to a LOWER non-zero landing speed — not zero!",
        ],
      },
      {
        id: "further-forces-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "resultant-forces-newton",
        question: "Two tugboats pull a 2000 kg harbour barge forward along the same straight line with forces of 1800 N and 1400 N. Water drag opposes the barge with 1200 N. What is the barge's acceleration?",
        options: ["2.2 m/s²", "1.6 m/s²", "0.6 m/s²", "1.0 m/s²"],
        answerIndex: 3,
        explanation:
          "Total forward force = {{1800 + 1400 = 3200}} N. Resultant force = {{3200 - 1200 = 2000}} N. Acceleration = {{F / m = 2000 / 2000 = 1.0}} m/s².",
        hints: [
          "Add both forward tugboat pulls first, then subtract the 1200 N water drag.",
          "Divide the resultant force by the 2000 kg mass.",
        ],
      },
      {
        id: "further-forces-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "resultant-forces-newton",
        question: "A 10 kg bowling ball and a 0.01 kg feather are released simultaneously inside a giant evacuated vacuum chamber. Why do they hit the floor at the **exact same instant**?",
        options: [
          "With zero drag, resultant force is mg, so a = mg/m = g for every mass",
          "Gravity switches off inside a vacuum so both float down at the same rate",
          "The vacuum exerts an extra downward force on the feather to match the ball",
          "Both objects have the exact same weight when air molecules are pumped out",
        ],
        answerIndex: 0,
        explanation:
          "Although the bowling ball has 1000× more weight, it also has 1000× more mass (inertia). With zero air resistance, {{a = F / m = (m * g) / m = g}}, so every object accelerates identically at {{g}}!",
        hints: [
          "Substitute {{F = W = m * g}} into Newton's Second Law {{a = F / m}}.",
          "Watch what happens to mass {{m}} in the fraction {{(m * g) / m}}!",
        ],
      },
      {
        id: "further-forces-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motion-graphs",
        question: "An athlete sprints 100 m in 10 s, rests completely still for 10 s, and then walks another 100 m in 30 s. What is the athlete's **overall average speed** for the entire 50-second session?",
        options: ["6.7 m/s", "4.0 m/s", "5.0 m/s", "4.4 m/s"],
        answerIndex: 1,
        explanation:
          "Overall average speed = total distance ÷ total time (including the rest!) = {{(100 + 0 + 100) / (10 + 10 + 30) = 200 / 50 = 4.0}} m/s. Leaving out the 10 s rest gives 5.0 m/s, and averaging stage speeds (10 and 3.33) gives 6.7 m/s — both classic traps!",
        hints: [
          "Overall average speed ALWAYS equals total distance divided by TOTAL time (including stops!).",
          "Total distance = 200 m; total time = 10 + 10 + 30 = 50 s.",
        ],
      },
      {
        id: "further-forces-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motion-graphs",
        question: "A shuttle accelerates uniformly from 0 to 16 m/s in 8.0 s, cruises at 16 m/s for 12 s, and brakes uniformly to 0 m/s in 4.0 s. What **total distance** does it cover?",
        options: ["192 m", "384 m", "288 m", "320 m"],
        answerIndex: 2,
        explanation:
          "Area under the v–t graph = Triangle 1 ({{0.5 * 8 * 16 = 64}} m) + Rectangle ({{12 * 16 = 192}} m) + Triangle 2 ({{0.5 * 4 * 16 = 32}} m) = {{64 + 192 + 32 = 288}} m.",
        hints: [
          "Slice the velocity–time graph into 3 sections: left triangle, middle rectangle, right triangle.",
          "Calculate each area separately and sum them: 64 + 192 + 32.",
        ],
      },
      {
        id: "further-forces-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "motion-graphs",
        question: "A boat already moving at 6.0 m/s accelerates uniformly to 18 m/s over a 5.0 s period. How far does the boat travel during those 5.0 seconds?",
        options: ["30 m", "45 m", "90 m", "60 m"],
        answerIndex: 3,
        explanation:
          "The region under the velocity–time graph from 6 m/s to 18 m/s over 5 s is a trapezium: area = {{1/2 * (6 + 18) * 5 = 12 * 5 = 60}} m (or rectangle {{6 * 5 = 30}} m + triangle {{0.5 * 5 * 12 = 30}} m = 60 m).",
        hints: [
          "Do NOT use a triangle starting from zero — the boat starts at 6.0 m/s!",
          "Split the area into a rectangle (6 × 5) plus a triangle on top (0.5 × 5 × 12).",
        ],
      },
      {
        id: "further-forces-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "motion-graphs",
        question: "Two cars start from rest together at {{t = 0}}. On the same velocity–time graph, Car A's straight line is **steeper** than Car B's straight line over the first 6 seconds. Which statement is true?",
        options: [
          "Car A has a larger acceleration and covers more distance in the first 6 s",
          "Car B has a larger acceleration because its line stays closer to the time axis",
          "Both cars travel the exact same distance because both run for 6 seconds",
          "Car A is slowing down while Car B is travelling at a constant speed",
        ],
        answerIndex: 0,
        explanation:
          "On a velocity–time graph, a steeper upward line means a larger gradient (**greater acceleration**), and because Car A's line sits higher throughout the 6 s, the triangular **area** underneath it (**distance travelled**) is also larger.",
        hints: [
          "Compare both the GRADIENT (acceleration) and the AREA UNDER THE LINE (distance) for A vs B.",
          "A higher, steeper line on a velocity–time graph has both a larger gradient and a bigger triangular area underneath.",
        ],
      },
      {
        id: "further-forces-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pressure-solids-fluids",
        question: "A solid rectangular steel block weighs 800 N and has dimensions {{0.50 \"m\" * 0.20 \"m\" * 0.10 \"m\"}}. What is the **maximum** pressure it can exert when resting flat on a workbench?",
        options: ["8000 Pa", "40 000 Pa", "16 000 Pa", "80 000 Pa"],
        answerIndex: 1,
        explanation:
          "Maximum pressure occurs on the **smallest face area**: {{0.20 * 0.10 = 0.02 \"m\"^2}}. Therefore {{P_\"max\" = 800 / 0.02 = 40 000}} Pa (40 kPa). Resting on the largest face ({{0.10 \"m\"^2}}) gives the minimum pressure (8000 Pa).",
        hints: [
          "To MAXIMISE pressure {{P = F / A}}, should you rest the block on its smallest face or its largest face?",
          "Multiply the two shortest dimensions (0.20 m × 0.10 m) for the smallest area, then divide 800 N by it.",
        ],
      },
      {
        id: "further-forces-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pressure-solids-fluids",
        question: "A thumb pushes a drawing pin with a force of 15 N. The pin's flat head has area {{0.5 \"cm\"^2}}. What is the pressure on the thumb in **pascals (N/m²)**?",
        options: ["30 Pa", "3000 Pa", "300 000 Pa", "75 000 Pa"],
        answerIndex: 2,
        explanation:
          "First find pressure in N/cm²: {{15 / 0.5 = 30}} N/cm². Because {{1 \"m\"^2 = 10 000 \"cm\"^2}}, multiply by 10 000: {{30 * 10 000 = 300 000}} Pa (equivalently {{0.5 \"cm\"^2 = 0.00005 \"m\"^2}}, {{15 / 0.00005 = 300 000}} Pa).",
        hints: [
          "Remember {{1 \"m\"^2 = 10 000 \"cm\"^2}}, NOT 100 cm²!",
          "Find N/cm² first (15 ÷ 0.5 = 30 N/cm²), then multiply by 10 000 to get N/m² (Pa).",
        ],
      },
      {
        id: "further-forces-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pressure-solids-fluids",
        question: "Why must a deep-sea exploration submersible be built with thick, curved titanium walls rather than thin flat glass panes?",
        options: [
          "Seawater pressure drops to zero at great depths, pulling walls outward",
          "Water only pushes downward on the roof, leaving the sides unstressed",
          "Cold water turns liquid pressure into solid friction along the exterior",
          "Liquid pressure becomes immense at great depth and pushes inward in every direction",
        ],
        answerIndex: 3,
        explanation:
          "At extreme ocean depths, the colossal weight of dense seawater overhead creates huge hydrostatic pressure pushing **inward equally from all directions**; thick spherical/curved titanium shells resist crushing forces safely.",
        hints: [
          "Think about the two properties of liquid pressure: how it varies with depth AND which directions it acts in.",
          "At great ocean depths, does water push only downward on top, or inward from every side?",
        ],
      },
      {
        id: "further-forces-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pressure-solids-fluids",
        question: "In a hydraulic brake system, an incompressible oil transmits pressure equally to every piston. A driver pushes a {{5.0 \"cm\"^2}} master piston with 40 N. What output force is produced on a {{60 \"cm\"^2}} brake piston?",
        options: ["480 N", "8.0 N", "200 N", "3000 N"],
        answerIndex: 0,
        explanation:
          "Pressure in the oil = {{F_1 / A_1 = 40 / 5.0 = 8.0}} N/cm². That exact same pressure pushes the {{60 \"cm\"^2}} output piston: {{F_2 = P * A_2 = 8.0 * 60 = 480}} N (a 12× force multiplier!).",
        hints: [
          "Calculate the fluid pressure at the input piston: {{P = 40 / 5.0}} N/cm².",
          "The output piston feels the exact same pressure — multiply {{P}} by {{60 \"cm\"^2}}.",
        ],
      },
      {
        id: "further-forces-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "moments-hookes-law",
        question: "A **uniform** 6.0 m wooden plank weighs 300 N (its weight acts at its midpoint, 3.0 m from either end). It rests on a pivot placed **2.0 m from the left end**. What downward force at the far left end just balances the plank horizontally?",
        options: ["100 N", "150 N", "300 N", "450 N"],
        answerIndex: 1,
        explanation:
          "The plank's midpoint (3.0 m from left end) sits {{3.0 - 2.0 = 1.0 \"m\"}} to the right of the pivot, producing a clockwise moment of {{300 * 1.0 = 300}} Nm. A downward force {{F}} at the far left end sits 2.0 m left of the pivot: {{F * 2.0 = 300}}, so {{F = 150}} N.",
        hints: [
          "Mark the pivot at 2.0 m and the plank's weight (300 N) at its midpoint (3.0 m) — how far right of the pivot is that weight?",
          "Calculate the clockwise moment of the plank's weight ({{300 * 1.0}}), then divide by 2.0 m.",
        ],
      },
      {
        id: "further-forces-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "moments-hookes-law",
        question: "A wheelbarrow carries 450 N of wet soil whose centre of mass lies 0.40 m from the front wheel axle (the pivot). A gardener lifts straight up on the handles 1.50 m from the axle. What upward force must the gardener exert?",
        options: ["180 N", "270 N", "120 N", "1688 N"],
        answerIndex: 2,
        explanation:
          "Load moment = {{450 * 0.40 = 180}} Nm. For balance about the wheel axle, {{F_\"handles\" * 1.50 = 180}}, so {{F_\"handles\" = 180 / 1.50 = 120}} N.",
        hints: [
          "The pivot is the front wheel axle! Calculate the downward load moment: {{450 * 0.40}}.",
          "Divide that moment by the 1.50 m handle distance.",
        ],
      },
      {
        id: "further-forces-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "moments-hookes-law",
        question: "Spring A ({{k = 60 \"N/m\"}}) and Spring B ({{k = 20 \"N/m\"}}) both obey Hooke's Law when a 12 N weight hangs from each separately. How much **farther** does Spring B extend than Spring A?",
        options: ["0.20 m", "0.60 m", "0.80 m", "0.40 m"],
        answerIndex: 3,
        explanation:
          "Extension of A: {{e_A = 12 / 60 = 0.20}} m. Extension of B: {{e_B = 12 / 20 = 0.60}} m. Difference = {{0.60 - 0.20 = 0.40}} m.",
        hints: [
          "Find each spring's extension separately using {{e = F / k}}.",
          "Subtract Spring A's extension from Spring B's extension.",
        ],
      },
      {
        id: "further-forces-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "moments-hookes-law",
        question: "On a graph with **Force (N)** on the y-axis and **Extension (m)** on the x-axis, Spring X produces a steeper straight line through the origin than Spring Y. What does this tell you?",
        options: [
          "Spring X is stiffer and has a larger spring constant k than Spring Y",
          "Spring X is stretchier and has a smaller spring constant k than Spring Y",
          "Spring X does not obey Hooke's Law whereas Spring Y obeys it",
          "Spring X has a longer original unstretched length than Spring Y",
        ],
        answerIndex: 0,
        explanation:
          "With Force on the y-axis and Extension on the x-axis, gradient = {{F / e = k}} (the spring constant). A steeper straight line means a **larger spring constant** — more newtons needed per metre of extension, so Spring X is **stiffer**.",
        hints: [
          "Calculate what rise ÷ run equals when y = Force and x = Extension.",
          "A stiffer spring needs a larger force for the same extension.",
        ],
      },
    ],
  },
];
