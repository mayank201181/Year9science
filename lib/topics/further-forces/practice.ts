import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "further-forces-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "resultant-forces-newton",
      question:
        "A quadcopter drone generates an upward lift force of 32 N while its downward weight is 20 N. Calculate the magnitude of the upward resultant force in newtons.",
      answer: { type: "number", value: 12, display: "12 N" },
      traps: [
        {
          spec: { type: "number", value: 52 },
          feedback: "Upward lift and downward weight oppose each other — subtract 20 N from 32 N instead of adding.",
        },
      ],
      solution: [
        "Opposing vertical forces subtract: {{F_\"res\" = 32 - 20 = 12}} N upward.",
      ],
      hints: [
        "Lift acts upward and weight acts downward — opposite directions subtract.",
      ],
    },
    {
      id: "further-forces-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "resultant-forces-newton",
      question:
        "A resultant forward force of 450 N acts on a 150 kg bobsled. Calculate its acceleration (in m/s²).",
      answer: { type: "number", value: 3, display: "3" },
      traps: [
        {
          spec: { type: "number", value: 67500 },
          feedback: "Rearrange {{F = m * a}} to {{a = F / m}} — divide 450 by 150 instead of multiplying.",
        },
      ],
      solution: [
        "Rearrange {{F = m * a}} to {{a = F / m}}.",
        "{{a = 450 / 150 = 3}} m/s².",
      ],
      hints: [
        "Use Newton's Second Law: {{F = m * a}}.",
        "Divide 450 N by 150 kg.",
      ],
    },
    {
      id: "further-forces-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "resultant-forces-newton",
      question: "A cargo ship sails in a straight line across calm water at a **constant speed of 8.0 m/s**. What must be true about the horizontal forces acting on the ship?",
      options: [
        "Forward thrust equals backward water drag (resultant force is zero)",
        "Forward thrust is larger than drag to maintain constant speed",
        "No forward or backward forces act on the ship at all",
        "Water drag is larger than thrust so the ship stays steady",
      ],
      answerIndex: 0,
      explanation:
        "By Newton's First Law, constant velocity in a straight line requires **zero resultant force** — the engine's forward thrust exactly balances water and air resistance.",
      hints: [
        "Constant velocity means acceleration is zero.",
      ],
    },
    {
      id: "further-forces-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "motion-graphs",
      question:
        "A train accelerates uniformly from 5.0 m/s to 29 m/s in 8.0 s. Calculate its acceleration (in m/s²).",
      answer: { type: "number", value: 3, display: "3" },
      traps: [
        {
          spec: { type: "number", value: 3.625 },
          feedback: "Subtract the starting velocity (5.0 m/s) from 29 m/s before dividing by 8.0 s!",
        },
      ],
      solution: [
        "Use {{a = (v - u) / t}}.",
        "{{a = (29 - 5) / 8 = 24 / 8 = 3}} m/s².",
      ],
      hints: [
        "Find the change in velocity first: {{29 - 5}}.",
        "Divide that change by 8.0 s.",
      ],
    },
    {
      id: "further-forces-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "motion-graphs",
      question:
        "A scooter accelerates uniformly from rest (0 m/s) to 14 m/s in 10 s. Use the area under its velocity–time graph to calculate the distance travelled in metres.",
      answer: { type: "number", value: 70, display: "70 m" },
      traps: [
        {
          spec: { type: "number", value: 140 },
          feedback: "The velocity–time shape from 0 to 14 m/s is a TRIANGLE, not a rectangle — remember the factor of {{1/2}}!",
        },
      ],
      solution: [
        "Area of velocity–time triangle = {{1/2 * \"base\" * \"height\"}}.",
        "Distance = {{0.5 * 10 * 14 = 70}} m.",
      ],
      hints: [
        "Velocity rises steadily from 0 to 14 m/s over 10 s, forming a right-angled triangle.",
        "Calculate {{1/2 * 10 * 14}}.",
      ],
    },
    {
      id: "further-forces-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "pressure-solids-fluids",
      question:
        "A statue weighs 1200 N and rests on a flat marble base of area {{0.50 \"m\"^2}}. Calculate the pressure exerted on the floor in pascals (Pa).",
      answer: { type: "number", value: 2400, display: "2400 Pa" },
      traps: [
        {
          spec: { type: "number", value: 600 },
          feedback: "Pressure is force DIVIDED by area ({{P = F / A}}), not multiplied.",
        },
      ],
      solution: [
        "{{P = F / A = 1200 / 0.50 = 2400}} Pa.",
      ],
      hints: [
        "Use {{P = F / A}}.",
        "Divide 1200 N by {{0.50 \"m\"^2}}.",
      ],
    },
    {
      id: "further-forces-quiz-q07",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "pressure-solids-fluids",
      question: "Why are concrete hydroelectric dam walls always built **much thicker at the bottom** than at the top?",
      options: [
        "Water freezes near the base and expands sideways",
        "Liquid pressure increases with depth below the surface",
        "Atmospheric pressure is higher underwater than at the crest",
        "Concrete conducts heat downward faster at the base",
      ],
      answerIndex: 1,
      explanation:
        "Liquid pressure increases with depth because of the greater weight of water overhead, so the dam wall experiences its highest horizontal pushing force near the bottom.",
      hints: [
        "How does liquid pressure change as you go deeper beneath the water surface?",
      ],
    },
    {
      id: "further-forces-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "moments-hookes-law",
      question:
        "A technician pulls perpendicularly on a wrench handle with a force of 40 N at a distance of 0.35 m from the centre of a nut. Calculate the moment produced in Nm.",
      answer: { type: "number", value: 14, display: "14 Nm" },
      solution: [
        "{{M = F * d = 40 * 0.35 = 14}} Nm.",
      ],
      hints: [
        "Use {{M = F * d}}.",
        "Multiply 40 N by 0.35 m.",
      ],
    },
    {
      id: "further-forces-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "moments-hookes-law",
      question:
        "A steel spring has a spring constant of 60 N/m. Within its limit of proportionality, what stretching force (in newtons) is required to produce an extension of 0.25 m?",
      answer: { type: "number", value: 15, display: "15 N" },
      traps: [
        {
          spec: { type: "number", value: 240 },
          feedback: "Hooke's Law multiplies spring constant and extension ({{F = k * e}}), rather than dividing.",
        },
      ],
      solution: [
        "{{F = k * e = 60 * 0.25 = 15}} N.",
      ],
      hints: [
        "Use Hooke's Law: {{F = k * e}}.",
        "Multiply 60 N/m by 0.25 m.",
      ],
    },
    {
      id: "further-forces-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "resultant-forces-newton",
      marks: 3,
      question:
        "Explain in terms of forces why a falling raindrop initially accelerates downward after leaving a cloud, but soon stops speeding up and falls at a steady **terminal velocity**.",
      modelAnswer:
        "At the start, air resistance is tiny compared with weight, so there is a large downward resultant force that causes acceleration. As the raindrop speeds up, upward air resistance increases while downward weight stays constant. Eventually air resistance equals weight so the forces are balanced (zero resultant force), meaning zero acceleration and a steady terminal velocity.",
      markScheme: [
        {
          point: "Initially weight is much greater than air resistance, creating a downward resultant force.",
          keywords: ["resultant force", "weight is greater", "weight >"],
        },
        {
          point: "As speed rises, upward air resistance / drag increases.",
          keywords: ["air resistance increases", "drag increases", "resistance grows"],
        },
        {
          point: "Air resistance eventually equals weight (balanced / zero resultant force), so acceleration becomes zero.",
          keywords: ["equals weight", "balanced", "zero resultant"],
        },
      ],
      commonError: "Saying 'gravity runs out' or 'weight decreases' at terminal velocity — weight remains constant throughout the fall.",
      hints: [
        "Compare the sizes of downward weight and upward air resistance at the start, during the fall, and at terminal velocity.",
        "Remember: weight stays constant; only air resistance changes with speed.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Core Skills & Calculations
    // -----------------------------------------------------------------------
    {
      id: "further-forces-p1",
      title: "Practice Paper 1 — Core Forces, Graphs & Hooke's Law",
      questions: [
        {
          id: "further-forces-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "resultant-forces-newton",
          question:
            "Calculate the weight in newtons of an 85 kg scuba diver on Earth, taking {{g = 9.8 \"N/kg\"}}.",
          answer: { type: "number", value: 833, display: "833 N" },
          solution: [
            "{{W = m * g = 85 * 9.8 = 833}} N.",
          ],
          hints: [
            "Use {{W = m * g}} with {{g = 9.8}} N/kg.",
          ],
        },
        {
          id: "further-forces-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question:
            "A 1400 kg car accelerates along a runway at {{2.5 \"m/s\"^2}}. Calculate the resultant force acting on the car in newtons.",
          answer: { type: "number", value: 3500, display: "3500 N" },
          solution: [
            "{{F = m * a = 1400 * 2.5 = 3500}} N.",
          ],
          hints: [
            "Use Newton's Second Law: {{F = m * a}}.",
            "Multiply 1400 kg by {{2.5 \"m/s\"^2}}.",
          ],
        },
        {
          id: "further-forces-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question:
            "A 900 kg sports car generates a forward driving force of 4600 N while facing 1000 N of backward air resistance and tyre friction. Calculate its acceleration (in m/s²).",
          answer: { type: "number", value: 4, display: "4" },
          traps: [
            {
              spec: { type: "number", value: 5.11 },
              feedback: "Subtract the 1000 N backward drag from 4600 N FIRST to get the resultant force (3600 N).",
            },
          ],
          solution: [
            "Resultant force: {{F_\"res\" = 4600 - 1000 = 3600}} N.",
            "Acceleration: {{a = F / m = 3600 / 900 = 4}} m/s².",
          ],
          hints: [
            "Find the resultant force first: 4600 N − 1000 N.",
            "Divide the resultant force by 900 kg.",
          ],
        },
        {
          id: "further-forces-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question: "A 40 kg scientific probe is transported from Earth ({{g = 10 \"N/kg\"}}) to Jupiter's cloud tops where {{g = 25 \"N/kg\"}}. What are the probe's **mass** and **weight** at Jupiter?",
          options: [
            "Mass = 100 kg; Weight = 400 N",
            "Mass = 40 kg; Weight = 400 N",
            "Mass = 40 kg; Weight = 1000 N",
            "Mass = 16 kg; Weight = 1000 N",
          ],
          answerIndex: 2,
          explanation:
            "Mass stays **40 kg** everywhere in the universe. Weight changes with {{g}}: {{W = m * g = 40 * 25 = 1000}} N.",
          hints: [
            "Mass never changes when gravitational field strength changes.",
            "Calculate weight at Jupiter using {{W = 40 * 25}}.",
          ],
        },
        {
          id: "further-forces-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "motion-graphs",
          question:
            "A speedboat travels 720 m across a calm bay in 45 s. Calculate its average speed in m/s.",
          answer: { type: "number", value: 16, display: "16 m/s" },
          solution: [
            "{{v = d / t = 720 / 45 = 16}} m/s.",
          ],
          hints: [
            "Divide total distance (720 m) by time (45 s).",
          ],
        },
        {
          id: "further-forces-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "motion-graphs",
          question:
            "A test rocket accelerates uniformly from 12 m/s to 52 m/s in 8.0 s. Calculate its acceleration (in m/s²).",
          answer: { type: "number", value: 5, display: "5" },
          traps: [
            {
              spec: { type: "number", value: 6.5 },
              feedback: "6.5 divides 52 by 8 — subtract the initial 12 m/s first to find the CHANGE in velocity (40 m/s).",
            },
          ],
          solution: [
            "{{a = (v - u) / t = (52 - 12) / 8 = 40 / 8 = 5}} m/s².",
          ],
          hints: [
            "Calculate change in velocity: {{52 - 12}}.",
            "Divide by 8.0 s.",
          ],
        },
        {
          id: "further-forces-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "motion-graphs",
          question:
            "A velocity–time graph shows a tram travelling at a steady 18 m/s for 12 s, then decelerating uniformly to rest (0 m/s) in 6.0 s. Calculate the total distance travelled in metres.",
          answer: { type: "number", value: 270, display: "270 m" },
          traps: [
            {
              spec: { type: "number", value: 324 },
              feedback: "The braking section is a TRIANGLE (area {{0.5 * 6 * 18 = 54}} m), not a full rectangle!",
            },
          ],
          solution: [
            "Constant-speed rectangle: {{18 * 12 = 216}} m.",
            "Braking triangle: {{0.5 * 6 * 18 = 54}} m.",
            "Total distance = {{216 + 54 = 270}} m.",
          ],
          hints: [
            "Split the area under the velocity–time graph into a rectangle (12 s wide) and a triangle (6 s wide).",
            "Add both areas: {{(18 * 12) + (0.5 * 6 * 18)}}.",
          ],
        },
        {
          id: "further-forces-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          question:
            "A bulldozer weighs 36 000 N and rests on wide steel tracks with a total contact area of {{2.4 \"m\"^2}}. Calculate the pressure exerted on the mud in pascals (Pa).",
          answer: { type: "number", value: 15000, display: "15000 Pa" },
          solution: [
            "{{P = F / A = 36 000 / 2.4 = 15 000}} Pa (15 kPa).",
          ],
          hints: [
            "Use {{P = F / A}}.",
            "Divide 36 000 N by {{2.4 \"m\"^2}}.",
          ],
        },
        {
          id: "further-forces-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          question:
            "A hiker exerts a pressure of 25 000 Pa on flat ground while standing on boots with a total sole area of {{0.030 \"m\"^2}}. Calculate the hiker's weight in newtons.",
          answer: { type: "number", value: 750, display: "750 N" },
          solution: [
            "Rearrange {{P = F / A}} to {{F = P * A}}.",
            "{{F = 25 000 * 0.030 = 750}} N.",
          ],
          hints: [
            "Rearrange {{P = F / A}} to make force {{F}} the subject.",
            "Multiply 25 000 Pa by {{0.030 \"m\"^2}}.",
          ],
        },
        {
          id: "further-forces-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          marks: 3,
          question:
            "A cyclist pumps extra air into a rigid bicycle tyre at constant temperature. Explain using the **particle model** why the pressure inside the tyre rises.",
          modelAnswer:
            "Pumping adds more air particles into the same fixed volume of the tyre. Because there are more particles packed inside, they collide with the inner tyre walls much more frequently. More frequent collisions exert a greater total force per unit area on the walls, raising the gas pressure.",
          markScheme: [
            {
              point: "More gas / air particles are placed inside the same volume.",
              keywords: ["more particles", "more air particles", "same volume"],
            },
            {
              point: "Particles collide with the inner walls more frequently.",
              keywords: ["more frequent", "more often", "collisions"],
            },
            {
              point: "Greater total force per unit area on the walls increases pressure.",
              keywords: ["greater force", "per unit area", "total force"],
            },
          ],
          commonError: "Claiming particles move faster when temperature stays constant — at constant temperature average speed stays the same, only collision FREQUENCY rises.",
          hints: [
            "State what changes inside the fixed volume when you pump air in.",
            "Connect particle collisions against the inner tyre wall to force per unit area.",
          ],
        },
        {
          id: "further-forces-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A mechanic needs a turning moment of 36 Nm to loosen a bolt and pulls perpendicularly at a distance of 0.45 m from the bolt's centre. Calculate the force required in newtons.",
          answer: { type: "number", value: 80, display: "80 N" },
          solution: [
            "Rearrange {{M = F * d}} to {{F = M / d}}.",
            "{{F = 36 / 0.45 = 80}} N.",
          ],
          hints: [
            "Rearrange {{M = F * d}} to find force {{F}}.",
            "Divide 36 Nm by 0.45 m.",
          ],
        },
        {
          id: "further-forces-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A 500 N student sits 1.6 m to the left of a seesaw's central pivot. What downward weight (in newtons) placed 2.0 m to the right of the pivot will balance the seesaw?",
          answer: { type: "number", value: 400, display: "400 N" },
          solution: [
            "Anticlockwise moment = {{500 * 1.6 = 800}} Nm.",
            "For equilibrium: {{F * 2.0 = 800}}, so {{F = 800 / 2.0 = 400}} N.",
          ],
          hints: [
            "Find the anticlockwise moment on the left: {{500 * 1.6}}.",
            "Divide that moment by 2.0 m.",
          ],
        },
        {
          id: "further-forces-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A steel spring has an unstretched length of 15 cm. Hanging a 9.0 N load stretches it to a total length of 30 cm (within its elastic limit). Calculate its spring constant {{k}} in **N/m**.",
          answer: { type: "number", value: 60, display: "60 N/m" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "You divided by the TOTAL stretched length (0.30 m) instead of the extension (0.30 − 0.15 = 0.15 m)!",
            },
            {
              spec: { type: "number", value: 0.6 },
              feedback: "0.6 is in N/cm — convert the 15 cm extension to 0.15 m first to get N/m!",
            },
          ],
          solution: [
            "Extension: {{e = 30 - 15 = 15 \"cm\" = 0.15 \"m\"}}.",
            "Spring constant: {{k = F / e = 9.0 / 0.15 = 60}} N/m.",
          ],
          hints: [
            "Subtract 15 cm from 30 cm first to get the extension.",
            "Convert that extension to metres (÷ 100), then use {{k = F / e}}.",
          ],
        },
        {
          id: "further-forces-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          marks: 2,
          question:
            "Define the **limit of proportionality** of a spring, and explain the difference between **elastic** and **plastic** deformation.",
          modelAnswer:
            "The limit of proportionality is the point beyond which extension is no longer directly proportional to force (the force–extension graph stops being a straight line and curves). In elastic deformation the spring returns to its original length when the load is removed, whereas in plastic deformation it stays permanently stretched.",
          markScheme: [
            {
              point: "Point beyond which extension is no longer directly proportional to force / graph curves / Hooke's Law stops.",
              keywords: ["no longer", "curves", "stops obeying", "proportional"],
            },
            {
              point: "Elastic returns to original length when unloaded; plastic stays permanently stretched/deformed.",
              keywords: ["original length", "original shape", "permanently"],
            },
          ],
          commonError: "Saying 'elastic means stretchy' instead of specifically stating that it returns to its original length once the force is removed.",
          hints: [
            "Think about what happens to the straight line on a Hooke's Law graph past the limit.",
            "Contrast what happens after you REMOVE the weights in elastic vs plastic deformation.",
          ],
        },
        {
          id: "further-forces-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "motion-graphs",
          marks: 3,
          question:
            "Compare a **distance–time** graph and a **velocity–time** graph for three features: (1) a horizontal line above zero, (2) the gradient of a straight diagonal line, and (3) the area beneath the line.",
          modelAnswer:
            "First, a horizontal line above zero shows a stationary object on a distance–time graph, but constant velocity on a velocity–time graph. Second, the gradient gives speed on a distance–time graph, whereas it gives acceleration on a velocity–time graph. Third, the area beneath a velocity–time graph equals total distance travelled, whereas the area under a distance–time graph has no standard physical meaning.",
          markScheme: [
            {
              point: "Horizontal line above zero: stationary (d–t) vs constant velocity (v–t).",
              keywords: ["stationary", "constant velocity", "constant speed"],
            },
            {
              point: "Gradient: speed (d–t) vs acceleration (v–t).",
              keywords: ["acceleration", "speed"],
            },
            {
              point: "Area underneath: distance travelled on a velocity–time graph (not meaningful on d–t).",
              keywords: ["distance travelled", "total distance"],
            },
          ],
          commonError: "Forgetting to contrast BOTH graph types for each of the three features.",
          hints: [
            "Write one clear contrasting sentence for each of the three numbered features.",
            "Remember the mnemonic G-A-A-D for velocity–time graphs.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Applied & Multi-Step Exam Practice
    // -----------------------------------------------------------------------
    {
      id: "further-forces-p2",
      title: "Practice Paper 2 — Applied & Multi-Step Problems",
      questions: [
        {
          id: "further-forces-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question:
            "A 65 kg skydiver (take {{g = 10 \"N/kg\"}}) opens their parachute and immediately experiences an upward air resistance of 1170 N. Calculate the magnitude of their upward deceleration (in m/s²).",
          answer: { type: "number", value: 8, display: "8" },
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "You divided 1170 N directly by 65 kg! Subtract the skydiver's downward weight (650 N) first to find the resultant force (520 N).",
            },
          ],
          solution: [
            "Downward weight: {{W = m * g = 65 * 10 = 650}} N.",
            "Upward resultant force: {{F_\"res\" = 1170 - 650 = 520}} N.",
            "Deceleration: {{a = 520 / 65 = 8}} m/s².",
          ],
          hints: [
            "First find the skydiver's downward weight ({{m * g}}).",
            "Subtract weight from 1170 N to find the upward resultant force, then divide by 65 kg.",
          ],
        },
        {
          id: "further-forces-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question:
            "A 1200 kg electric SUV accelerates uniformly from rest to 18 m/s in 6.0 s against a steady resistive drag force of 700 N. Calculate the forward driving force supplied by its motor in newtons.",
          answer: { type: "number", value: 4300, display: "4300 N" },
          traps: [
            {
              spec: { type: "number", value: 3600 },
              feedback: "3600 N is the RESULTANT force. Add the 700 N drag that the motor also has to overcome!",
            },
          ],
          solution: [
            "Acceleration: {{a = (18 - 0) / 6.0 = 3.0}} m/s².",
            "Resultant force: {{F_\"res\" = m * a = 1200 * 3.0 = 3600}} N.",
            "Motor driving force: {{F_\"motor\" = 3600 + 700 = 4300}} N.",
          ],
          hints: [
            "Step 1: Find acceleration with {{a = (v - u) / t}}.",
            "Step 2: Find resultant force with {{F = m * a}}, then add the 700 N drag.",
          ],
        },
        {
          id: "further-forces-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          question: "Two cyclists pedal with the exact same maximum forward thrust of 90 N, but Cyclist A tucks into an aerodynamic crouch while Cyclist B sits upright. Why does Cyclist A reach a **higher top speed**?",
          options: [
            "Crouching reduces Cyclist A's mass so gravity stops pulling backward",
            "Smaller frontal area reduces air resistance, so drag only equals 90 N at a higher speed",
            "Crouching increases downward weight so the tyres produce extra thrust",
            "Aerodynamic posture eliminates Newton's First Law on flat roads",
          ],
          answerIndex: 1,
          explanation:
            "Top speed is reached when backward drag equals the 90 N thrust (balanced forces). Because Cyclist A's tucked posture reduces drag at any given speed, she accelerates further until drag finally hits 90 N at a **higher speed**.",
          hints: [
            "What condition determines the maximum constant speed of any vehicle?",
            "If drag is smaller at 10 m/s, is the resultant force still forward?",
          ],
        },
        {
          id: "further-forces-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "motion-graphs",
          question:
            "A cyclist rides 600 m in 50 s, pauses at traffic lights for 30 s, and then rides a further 900 m in 70 s. Calculate her **overall average speed** for the entire journey in m/s.",
          answer: { type: "number", value: 10, display: "10 m/s" },
          traps: [
            {
              spec: { type: "number", value: 12.5 },
              feedback: "Include the 30 s stationary wait in total time! Total time is 50 + 30 + 70 = 150 s.",
            },
          ],
          solution: [
            "Total distance = {{600 + 0 + 900 = 1500}} m.",
            "Total time = {{50 + 30 + 70 = 150}} s.",
            "Overall average speed = {{1500 / 150 = 10}} m/s.",
          ],
          hints: [
            "Add all distances together and add ALL times together (including the 30 s pause).",
            "Divide 1500 m by 150 s.",
          ],
        },
        {
          id: "further-forces-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "motion-graphs",
          question:
            "A shuttle bus already moving at 8.0 m/s accelerates uniformly to 20 m/s over a 10 s interval. Calculate the distance travelled during those 10 seconds in metres.",
          answer: { type: "number", value: 140, display: "140 m" },
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "60 m is ONLY the top triangle — remember the bottom rectangle (8 × 10 = 80 m) as well!",
            },
            {
              spec: { type: "number", value: 200 },
              feedback: "The bus wasn't moving at 20 m/s for the whole 10 s — use the trapezium area {{0.5 * (8 + 20) * 10}}.",
            },
          ],
          solution: [
            "Split the velocity–time trapezium into a rectangle + triangle:",
            "Rectangle: {{8.0 * 10 = 80}} m; Triangle: {{0.5 * 10 * (20 - 8) = 60}} m.",
            "Total distance = {{80 + 60 = 140}} m (or {{0.5 * (8 + 20) * 10 = 140}} m).",
          ],
          hints: [
            "Sketch velocity rising from 8 m/s to 20 m/s over 10 s — it forms a trapezium.",
            "Calculate rectangle (8 × 10) + triangle (0.5 × 10 × 12).",
          ],
        },
        {
          id: "further-forces-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "motion-graphs",
          question:
            "A tram travelling at 24 m/s applies its brakes and decelerates uniformly to a complete stop (0 m/s) over a stopping distance of 96 m. How many seconds did the tram take to stop?",
          answer: { type: "number", value: 8, display: "8 s" },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "Because the tram slows linearly to 0, its velocity–time graph is a TRIANGLE (area = {{0.5 * t * 24 = 96}}), not a rectangle!",
            },
          ],
          solution: [
            "Stopping distance = area of velocity–time triangle = {{1/2 * t * 24 = 96}}.",
            "{{12 t = 96}}, so {{t = 96 / 12 = 8}} s.",
          ],
          hints: [
            "The velocity–time graph is a triangle with height 24 m/s, unknown base {{t}}, and area 96 m.",
            "Solve {{0.5 * 24 * t = 96}} for {{t}}.",
          ],
        },
        {
          id: "further-forces-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          question:
            "A 1600 kg car (take {{g = 10 \"N/kg\"}}) rests evenly on all **four** tyres. Each tyre touches the road across an area of {{200 \"cm\"^2}}. Calculate the pressure exerted on the road in **pascals (Pa)**.",
          answer: { type: "number", value: 200000, display: "200000 Pa" },
          traps: [
            {
              spec: { type: "number", value: 800000 },
              feedback: "You divided the whole car's weight by only ONE tyre! Multiply {{200 \"cm\"^2}} by 4 tyres first.",
            },
            {
              spec: { type: "number", value: 20 },
              feedback: "20 is in N/cm²! Multiply by 10 000 (since {{1 \"m\"^2 = 10 000 \"cm\"^2}}) to convert to pascals (Pa).",
            },
          ],
          solution: [
            "Car weight: {{F = 1600 * 10 = 16 000}} N.",
            "Total area of 4 tyres: {{4 * 200 = 800 \"cm\"^2 = 800 / 10 000 = 0.08 \"m\"^2}}.",
            "Pressure: {{P = 16 000 / 0.08 = 200 000}} Pa (200 kPa).",
          ],
          hints: [
            "Find total weight ({{1600 * 10}}) and total area of ALL 4 tyres ({{4 * 200}} cm²).",
            "Convert cm² to m² by dividing by 10 000, then compute {{P = F / A}}.",
          ],
        },
        {
          id: "further-forces-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          question:
            "A rectangular marble slab weighs 960 N and measures {{0.80 \"m\" * 0.50 \"m\" * 0.20 \"m\"}}. Calculate the **minimum** pressure it can exert on a floor in pascals (Pa).",
          answer: { type: "number", value: 2400, display: "2400 Pa" },
          traps: [
            {
              spec: { type: "number", value: 9600 },
              feedback: "9600 Pa is the MAXIMUM pressure (resting on the smallest face). For MINIMUM pressure, use the largest face ({{0.80 * 0.50 = 0.40 \"m\"^2}}).",
            },
          ],
          solution: [
            "Minimum pressure occurs on the largest contact area: {{A_\"max\" = 0.80 * 0.50 = 0.40 \"m\"^2}}.",
            "{{P_\"min\" = 960 / 0.40 = 2400}} Pa.",
          ],
          hints: [
            "To MINIMISE pressure {{P = F / A}}, place the slab on its LARGEST face.",
            "Multiply the two longest sides (0.80 m × 0.50 m), then divide 960 N by that area.",
          ],
        },
        {
          id: "further-forces-p2-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "pressure-solids-fluids",
          marks: 3,
          question:
            "A hiker seals an empty plastic water bottle tightly at the top of a 4000 m mountain and brings it down to sea level. Explain why the bottle collapses inward by the time they reach the coast.",
          modelAnswer:
            "At high altitude atmospheric pressure is much lower, so the air trapped inside the sealed bottle is at low pressure. Back at sea level, outside atmospheric pressure is far greater because there is a greater weight of denser air overhead. Outside air molecules therefore strike the exterior walls more frequently and harder than internal particles hit the inside, creating an unbalanced inward force that crushes the bottle.",
          markScheme: [
            {
              point: "Trapped air inside the bottle was sealed at low mountain atmospheric pressure.",
              keywords: ["low pressure", "lower pressure", "less dense"],
            },
            {
              point: "External atmospheric pressure at sea level is much higher (more air above).",
              keywords: ["higher", "greater", "sea level", "more air"],
            },
            {
              point: "Outside collisions exceed inside collisions, producing a net / unbalanced inward force.",
              keywords: ["inward force", "unbalanced", "net force", "more frequent"],
            },
          ],
          commonError: "Saying 'the vacuum inside sucks the bottle in' — there is still low-pressure air inside, and it is the HIGHER OUTSIDE atmospheric pressure pushing inward that crushes it.",
          hints: [
            "Compare the gas pressure trapped INSIDE the bottle (from 4000 m up) with outside atmospheric pressure at sea level.",
            "Explain the crushing in terms of particle collisions and a net inward force.",
          ],
        },
        {
          id: "further-forces-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A mechanic exerts a perpendicular force of 120 N at the end of a 25 cm spanner. Calculate the turning moment in **Nm**.",
          answer: { type: "number", value: 30, display: "30 Nm" },
          traps: [
            {
              spec: { type: "number", value: 3000 },
              feedback: "3000 is in N cm! Convert 25 cm to 0.25 m before multiplying by 120 N.",
            },
          ],
          solution: [
            "Convert distance to metres: {{25 \"cm\" = 0.25 \"m\"}}.",
            "{{M = F * d = 120 * 0.25 = 30}} Nm.",
          ],
          hints: [
            "Convert 25 cm to metres (÷ 100) first.",
            "Multiply 120 N by 0.25 m.",
          ],
        },
        {
          id: "further-forces-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A uniform 2.0 m beam is balanced on a central pivot. On the left side, a 15 N weight hangs 0.40 m from the pivot and a 25 N weight hangs 0.60 m from the pivot. How far (in metres) to the right of the pivot must a single 30 N weight hang to balance the beam?",
          answer: { type: "number", value: 0.7, display: "0.7 m" },
          solution: [
            "Total anticlockwise moment = {{(15 * 0.40) + (25 * 0.60) = 6.0 + 15.0 = 21}} Nm.",
            "For equilibrium: {{30 * d = 21}}, so {{d = 21 / 30 = 0.7}} m.",
          ],
          hints: [
            "Calculate BOTH anticlockwise moments separately and sum them.",
            "Divide the total anticlockwise moment (21 Nm) by 30 N.",
          ],
        },
        {
          id: "further-forces-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question:
            "A steel spring has an unstretched length of 18 cm and a spring constant of 50 N/m. Within its limit of proportionality, calculate its **total stretched length** in **centimetres (cm)** when a 7.0 N load hangs from it.",
          answer: { type: "number", value: 32, display: "32 cm" },
          traps: [
            {
              spec: { type: "number", value: 14 },
              feedback: "14 cm is the EXTENSION — add it to the original 18 cm length to get the total stretched length!",
            },
          ],
          solution: [
            "Find extension: {{e = F / k = 7.0 / 50 = 0.14 \"m\" = 14 \"cm\"}}.",
            "Total stretched length = original length + extension = {{18 + 14 = 32}} cm.",
          ],
          hints: [
            "First find the extension in metres using {{e = F / k}} and convert to cm.",
            "Add the extension to the original 18 cm length.",
          ],
        },
        {
          id: "further-forces-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          question: "Why does holding a heavy toolbox **close to your chest** put far less strain on your lower back than holding the exact same toolbox **at arm's length**?",
          options: [
            "The toolbox weighs less when held closer to your heart",
            "Friction in your elbows disappears when arms are bent",
            "Shorter perpendicular distance from your spine pivot creates a smaller turning moment",
            "Holding weights close compresses air underneath to create upward lift",
          ],
          answerIndex: 2,
          explanation:
            "Your lower spine acts as a pivot. Pulling the toolbox closer shrinks the perpendicular distance {{d}}, directly reducing its downward turning moment ({{M = F * d}}) that your back muscles must balance.",
          hints: [
            "Treat your lower back/spine as the pivot and apply {{M = F * d}}.",
            "Compare the perpendicular distance {{d}} when holding the toolbox near your chest versus at arm's length.",
          ],
        },
        {
          id: "further-forces-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "resultant-forces-newton",
          marks: 3,
          question:
            "Describe and explain what happens to a skydiver's **air resistance**, **resultant force**, and **downward speed** from the instant their parachute opens until they reach their new lower terminal velocity.",
          modelAnswer:
            "Opening the parachute dramatically increases surface area, so upward air resistance suddenly becomes much larger than downward weight. This produces a large upward resultant force that makes the skydiver decelerate rapidly while still falling downward. As their downward speed decreases, air resistance drops until it again equals weight, giving zero resultant force and a safe, slow new terminal velocity.",
          markScheme: [
            {
              point: "Larger surface area makes upward air resistance suddenly much greater than weight.",
              keywords: ["surface area", "greater than weight", "larger than weight"],
            },
            {
              point: "Upward resultant force causes rapid deceleration (speed decreases while still moving downward).",
              keywords: ["upward resultant", "decelerat", "slows down"],
            },
            {
              point: "As speed drops, drag decreases until it equals weight again (zero resultant → lower steady speed).",
              keywords: ["equals weight", "balances", "zero resultant"],
            },
          ],
          commonError: "Writing that the skydiver moves upward when the parachute opens — an upward resultant force opposes downward velocity, so it causes deceleration downward.",
          hints: [
            "Start with what opening the canopy does to surface area and upward drag.",
            "Explain the direction of the resultant force, how speed responds, and why drag drops back to match weight.",
          ],
        },
        {
          id: "further-forces-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "moments-hookes-law",
          marks: 3,
          question:
            "Outline a practical experiment to verify **Hooke's Law** for a helical spring and explain how to determine the **spring constant {{k}}** from a graph of your results.",
          modelAnswer:
            "Hang the spring from a clamp stand beside a clamped vertical metre ruler and record its unstretched original length at eye level to avoid parallax error. Add known slotted weights one by one (e.g. 1 N steps), measuring the new total length each time and subtracting the original length to find extension. Plot Force (y-axis) against Extension in metres (x-axis); a straight line through the origin verifies Hooke's Law, and its gradient equals the spring constant k.",
          markScheme: [
            {
              point: "Measure original unstretched length with a vertical ruler (avoiding parallax) and add known weights step by step.",
              keywords: ["original length", "unstretched", "ruler", "slotted"],
            },
            {
              point: "Calculate extension by subtracting original length from each stretched length.",
              keywords: ["subtract", "extension"],
            },
            {
              point: "Plot Force vs Extension; straight line through origin verifies Hooke's Law and gradient gives k.",
              keywords: ["gradient", "straight line", "through the origin"],
            },
          ],
          commonError: "Plotting total stretched length instead of extension, which fails to pass through the origin (0, 0).",
          hints: [
            "Mention apparatus (clamp stand, vertical ruler, slotted masses) and how you calculate extension.",
            "Explain what graph you plot and which feature of that graph gives {{k}}.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-level multi-step problems, ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "further-forces-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "resultant-forces-newton",
      strategy: "Subtract weight before applying Newton's Second Law vertically",
      question:
        "A 2000 kg sounding rocket blasts off vertically from a launchpad with a constant upward engine thrust of 28 000 N (take {{g = 10 \"N/kg\"}} and ignore air resistance). Calculate its initial upward acceleration (in m/s²).",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "14 m/s² forgets the rocket's own downward weight (20 000 N)! Subtract weight from thrust first.",
        },
      ],
      solution: [
        "Downward weight of rocket: {{W = m * g = 2000 * 10 = 20 000}} N.",
        "Upward resultant force: {{F_\"res\" = 28 000 - 20 000 = 8000}} N.",
        "Initial acceleration: {{a = F_\"res\" / m = 8000 / 2000 = 4}} m/s².",
      ],
      hints: [
        "Draw a free-body diagram of the rocket on the pad: thrust points UP, what points DOWN?",
        "Calculate the rocket's weight ({{m * g}}) and subtract it from 28 000 N.",
        "Divide the upward resultant force by 2000 kg.",
      ],
    },
    {
      id: "further-forces-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "motion-graphs",
      strategy: "Find total distance from v–t area, then divide by total time",
      question:
        "A maglev shuttle accelerates uniformly from rest to 24 m/s in 10 s, cruises at 24 m/s for 20 s, and decelerates uniformly back to rest in 10 s. Calculate its **overall average speed** (in m/s) for the entire 40-second run.",
      answer: { type: "number", value: 18, display: "18 m/s" },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "12 m/s only works if it spent zero time cruising at 24 m/s! Calculate total area under the v–t graph first.",
        },
        {
          spec: { type: "number", value: 720 },
          feedback: "720 m is the TOTAL DISTANCE — now divide by the total 40 s time to get overall average speed!",
        },
      ],
      solution: [
        "Area of acceleration triangle: {{0.5 * 10 * 24 = 120}} m.",
        "Area of cruising rectangle: {{20 * 24 = 480}} m.",
        "Area of braking triangle: {{0.5 * 10 * 24 = 120}} m.",
        "Total distance = {{120 + 480 + 120 = 720}} m.",
        "Overall average speed = {{720 / 40 = 18}} m/s.",
      ],
      hints: [
        "First find the total distance travelled by calculating the area of the three v–t regions.",
        "Sum all three areas to get total distance (720 m).",
        "Divide total distance by total time (10 + 20 + 10 = 40 s).",
      ],
    },
    {
      id: "further-forces-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "motion-graphs",
      strategy: "Equate the areas under two velocity–time graphs",
      question:
        "At {{t = 0}}, Sprinter A runs past the starting line at a constant speed of 6.0 m/s. At the exact same instant, Sprinter B starts from rest (0 m/s) at the same line and accelerates uniformly at {{1.5 \"m/s\"^2}}. After how many seconds does Sprinter B catch up to Sprinter A?",
      answer: { type: "number", value: 8, display: "8 s" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "At {{t = 4}} s, Sprinter B reaches the same SPEED (6 m/s) as A, but B is still behind in DISTANCE!",
        },
      ],
      solution: [
        "Distance of A after time {{t}}: rectangle area = {{6 t}}.",
        "Speed of B after time {{t}}: {{v_B = 1.5 t}}, so distance of B = triangle area = {{1/2 * t * 1.5 t = 0.75 t^2}}.",
        "They meet when distances are equal ({{t > 0}}): {{0.75 t^2 = 6 t}}.",
        "Divide both sides by {{t}}: {{0.75 t = 6}}, so {{t = 6 / 0.75 = 8}} s (both have covered 48 m!).",
      ],
      hints: [
        "Careful: catching up means covering the same DISTANCE (area under v–t graph), not merely matching speed!",
        "Write distance of A as {{6t}} and distance of B as the triangle area {{1/2 * t * (1.5t)}}.",
        "Set {{0.75 t^2 = 6 t}} and solve for {{t > 0}}.",
      ],
    },
    {
      id: "further-forces-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pressure-solids-fluids",
      strategy: "Combine lever moments with hydraulic fluid pressure",
      question:
        "A mechanic operates a hydraulic car jack. Pushing down with 50 N at the end of a lever handle 0.80 m from the pivot presses a small hydraulic piston located 0.20 m from the pivot. That input piston has area {{4.0 \"cm\"^2}} and connects via oil to a main lifting piston of area {{160 \"cm\"^2}}. What maximum car weight (in newtons) can the jack lift?",
      answer: { type: "number", value: 8000, display: "8000 N" },
      traps: [
        {
          spec: { type: "number", value: 2000 },
          feedback: "2000 N ignores the 4× lever magnification before the oil piston! Apply moments to the handle first.",
        },
        {
          spec: { type: "number", value: 200 },
          feedback: "200 N is the force entering the small hydraulic piston — now calculate oil pressure and multiply by {{160 \"cm\"^2}}!",
        },
      ],
      solution: [
        "Lever moment balance: {{F_\"in\" * 0.20 = 50 * 0.80 = 40}} Nm ⇒ {{F_\"in\" = 40 / 0.20 = 200}} N.",
        "Hydraulic oil pressure: {{P = 200 / 4.0 = 50}} N/cm².",
        "Output lifting force: {{F_\"out\" = P * A_\"out\" = 50 * 160 = 8000}} N.",
      ],
      hints: [
        "Stage 1 (Lever): Use Principle of Moments to find the downward force exerted on the small piston at 0.20 m.",
        "Stage 2 (Hydraulics): Divide that force by {{4.0 \"cm\"^2}} to find fluid pressure in N/cm².",
        "Stage 3: Multiply the fluid pressure by the large piston's area ({{160 \"cm\"^2}}).",
      ],
    },
    {
      id: "further-forces-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "moments-hookes-law",
      strategy: "Take moments about one support to eliminate its unknown reaction force",
      question:
        "A uniform 5.0 m footbridge plank weighing 600 N (weight acts at its midpoint, 2.5 m from either end) rests horizontally on two pillars: Pillar A at the left end (0 m) and Pillar B at the right end (5.0 m). A 400 N crate is placed 1.0 m from Pillar A. Calculate the upward support force exerted by **Pillar B** in newtons.",
      answer: { type: "number", value: 380, display: "380 N" },
      traps: [
        {
          spec: { type: "number", value: 500 },
          feedback: "500 N assumes the weight splits equally — the crate sits much closer to Pillar A than Pillar B!",
        },
        {
          spec: { type: "number", value: 620 },
          feedback: "620 N is the reaction force at Pillar A (the closer pillar). Pillar B carries the remaining 380 N.",
        },
      ],
      solution: [
        "Choose **Pillar A** as the pivot so its unknown force creates zero moment.",
        "Total clockwise moment about A = plank ({{600 * 2.5 = 1500}} Nm) + crate ({{400 * 1.0 = 400}} Nm) = {{1900}} Nm.",
        "Anticlockwise moment from Pillar B (at 5.0 m): {{R_B * 5.0 = 1900}}.",
        "{{R_B = 1900 / 5.0 = 380}} N (and Pillar A carries {{1000 - 380 = 620}} N).",
      ],
      hints: [
        "Pick Pillar A as your pivot — any force passing right through the pivot has distance 0, so it drops out!",
        "Add the clockwise moments of BOTH the plank's weight (at 2.5 m) and the crate (at 1.0 m).",
        "Set Pillar B's anticlockwise moment ({{R_B * 5.0}}) equal to that sum and solve.",
      ],
    },
    {
      id: "further-forces-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "moments-hookes-law",
      strategy: "Track the tension felt by each spring in a series chain",
      question:
        "Two identical light springs, each with spring constant {{k = 40 \"N/m\"}}, are connected **end-to-end in series** and hung vertically. An 8.0 N weight hangs from the bottom of the lower spring (within the elastic limit). Calculate the **total combined extension** of the two-spring system in metres.",
      answer: { type: "number", value: 0.4, display: "0.4 m" },
      traps: [
        {
          spec: { type: "number", value: 0.2 },
          feedback: "0.2 m is the extension of ONE spring — both springs in series stretch by 0.2 m!",
        },
        {
          spec: { type: "number", value: 0.1 },
          feedback: "0.1 m is what happens when two springs share the load SIDE-BY-SIDE (parallel), not end-to-end (series)!",
        },
      ],
      solution: [
        "In a vertical series chain, BOTH the upper and lower spring must support the full 8.0 N tension.",
        "Extension of each spring: {{e_1 = 8.0 / 40 = 0.20}} m.",
        "Total extension = {{0.20 + 0.20 = 0.40}} m (effective spring constant halves to 20 N/m!).",
      ],
      hints: [
        "Ask yourself: what tension pulls on the bottom spring, and what tension pulls on the top spring?",
        "Because the springs are light and end-to-end, BOTH carry the full 8.0 N load.",
        "Calculate one spring's extension with {{e = F / k}}, then add both extensions together.",
      ],
    },
    {
      id: "further-forces-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "pressure-solids-fluids",
      strategy: "Apply depth, density, width-independence, and isotropy of liquid pressure",
      marks: 4,
      question:
        "An engineer compares a tall freshwater dam in the mountains with an identical-height seawall holding back denser saltwater. Using fluid pressure principles, explain: (1) why both walls are built thickest at the base, (2) why the seawall experiences greater pressure at the same depth, (3) why doubling the horizontal width of the freshwater reservoir behind the dam does NOT increase pressure at the dam wall, and (4) why a diver at 20 m depth feels pressure equally from above, below, and all sides.",
      modelAnswer:
        "First, liquid pressure increases with depth because there is a greater weight of water pressing down from above, so the base experiences the largest horizontal force. Second, saltwater has a higher density than fresh water, meaning a heavier column of liquid per square metre at the same depth, producing higher pressure. Third, liquid pressure depends only on vertical depth and density — widening the reservoir adds weight across a proportionally larger floor area rather than increasing depth directly above the dam wall. Fourth, liquid particles are free to move randomly and collide in every direction, so liquid pressure acts equally in all directions at a given depth.",
      markScheme: [
        {
          point: "Liquid pressure increases with depth due to greater weight of water above.",
          keywords: ["depth", "weight of water"],
        },
        {
          point: "Saltwater has greater density than fresh water, increasing pressure at the same depth.",
          keywords: ["density", "denser", "heavier column"],
        },
        {
          point: "Width does not change vertical depth (pressure depends only on depth and density, not horizontal area/volume).",
          keywords: ["only on", "depth and density", "vertical depth"],
        },
        {
          point: "Liquid particles move freely and collide in all directions, so pressure acts equally in every direction.",
          keywords: ["all directions", "every direction"],
        },
      ],
      commonError: "Claiming that a wider lake creates greater water pressure on a dam wall even when water depth is unchanged.",
      hints: [
        "Number your four points clearly to match the four questions asked.",
        "Remember the two variables that control liquid pressure: depth and density (NEVER horizontal width!).",
        "Connect omnidirectional fluid pressure to randomly moving, colliding liquid particles.",
      ],
    },
    {
      id: "further-forces-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "resultant-forces-newton",
      strategy: "Map all three of Newton's Laws onto a single physical system",
      marks: 4,
      question:
        "A space rocket sits motionless on a launchpad, ignites its engines to accelerate upward, and later fires its thrusters in the airless vacuum of deep space. Explain how **Newton's First Law**, **Newton's Second Law**, and **Newton's Third Law** apply across these stages, and explain why the rocket still accelerates in space with no air to push against.",
      modelAnswer:
        "Before ignition, upward normal reaction from the pad balances downward weight (zero resultant force), so by Newton's First Law the rocket stays stationary. Once engine thrust exceeds weight, there is an upward resultant force, causing upward acceleration according to Newton's Second Law (a = F/m). By Newton's Third Law, the rocket pushes hot exhaust gases downward and the exhaust gases simultaneously exert an equal and opposite upward thrust on the rocket. Because the rocket pushes against its own expelled exhaust gas rather than outside air, this Third Law reaction thrust works even better in the vacuum of space!",
      markScheme: [
        {
          point: "Newton's 1st Law: on the pad, balanced forces / zero resultant keep the rocket stationary.",
          keywords: ["balanced", "zero resultant", "normal reaction"],
        },
        {
          point: "Newton's 2nd Law: thrust > weight gives an upward resultant force causing acceleration (F = ma).",
          keywords: ["resultant force", "f = ma", "a = f/m", "exceeds weight"],
        },
        {
          point: "Newton's 3rd Law: rocket pushes exhaust gas backward/downward and gas exerts an equal and opposite forward/upward force on the rocket.",
          keywords: ["equal and opposite", "exhaust"],
        },
        {
          point: "Works in vacuum because the rocket pushes against its own expelled fuel/exhaust gas, not against outside air.",
          keywords: ["own", "expelled", "not against", "no air needed"],
        },
      ],
      commonError: "Thinking rockets push downward against the launchpad or surrounding air — if that were true, rockets could never steer or accelerate in space!",
      hints: [
        "Start on the launchpad before ignition (First Law), then liftoff (Second Law), then how thrust is actually generated (Third Law).",
        "Identify the exact Newton's Third Law pair: rocket and what else? (Not the launchpad or atmosphere!)",
      ],
    },
  ],
};
