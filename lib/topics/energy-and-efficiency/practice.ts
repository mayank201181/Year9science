import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "energy-and-efficiency-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "stores-transfers-conservation",
      question:
        "A stretched bowstring holds 64 J in its elastic potential store. When released, 52 J transfers to the arrow's kinetic store. How many joules are dissipated to the thermal store of the surroundings?",
      answer: { type: "number", value: 12, display: "12 J" },
      traps: [
        {
          spec: { type: "number", value: 116 },
          feedback: "Total energy is conserved — subtract the useful kinetic energy from the starting 64 J rather than adding them.",
        },
      ],
      solution: [
        "By conservation of energy: {{E_\"total\" = E_\"useful\" + E_\"dissipated\"}}.",
        "{{E_\"dissipated\" = 64 - 52 = 12}} J.",
      ],
      hints: [
        "Total energy before release must equal total energy after release.",
        "Subtract 52 J from 64 J.",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "stores-transfers-conservation",
      question: "A compressed spring pushes a lab trolley forward along a track. Which **transfer pathway** moves energy from the spring's elastic store to the trolley's kinetic store?",
      options: [
        "Mechanical working",
        "Electrical working",
        "Infrared radiation",
        "Thermal conduction",
      ],
      answerIndex: 0,
      explanation:
        "A force (the push from the spring) moves the trolley through a distance, which is the **mechanical working** pathway.",
      hints: [
        "Which pathway involves a force moving an object through a distance?",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "sankey-efficiency",
      question:
        "A kitchen blender has a total electrical input power of 250 W and transfers 175 W usefully to spin the blades. Calculate its efficiency as a percentage.",
      answer: { type: "number", value: 70, display: "70%" },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30% is the wasted percentage (75 W ÷ 250 W). Efficiency uses the USEFUL power (175 W).",
        },
        {
          spec: { type: "number", value: 0.7 },
          feedback: "0.7 is the decimal efficiency — multiply by 100 to give a percentage.",
        },
      ],
      solution: [
        "{{\"Efficiency (%)\" = (\"Useful power\" / \"Total power\") * 100%}}.",
        "{{\"Efficiency\" = (175 / 250) * 100% = 0.70 * 100% = 70%}}.",
      ],
      hints: [
        "Use {{\"Efficiency (%)\" = (\"Useful\" / \"Total\") * 100%}}.",
        "Divide 175 by 250, then multiply by 100.",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "sankey-efficiency",
      question:
        "A rooftop solar panel has an efficiency of 20% and receives 1500 W of sunlight power. Calculate its useful electrical power output in watts.",
      answer: { type: "number", value: 300, display: "300 W" },
      traps: [
        {
          spec: { type: "number", value: 7500 },
          feedback: "Output cannot be bigger than the 1500 W input! Multiply 1500 W by 0.20 instead of dividing.",
        },
      ],
      solution: [
        "Convert 20% to a decimal: {{0.20}}.",
        "Rearrange efficiency: {{\"Useful output\" = \"Efficiency\" * \"Total input\" = 0.20 * 1500 = 300}} W.",
      ],
      hints: [
        "Useful output must be smaller than the 1500 W input.",
        "Calculate 20% of 1500 W (multiply by 0.20).",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "thermal-transfer",
      question:
        "Name the thermal energy transfer mechanism in liquids and gases driven by warmer, less dense fluid rising and cooler, denser fluid sinking.",
      answer: {
        type: "text",
        accept: ["convection", "convection current", "convection currents"],
        display: "convection",
      },
      solution: [
        "Fluid circulation driven by expansion and density changes is called **convection**.",
      ],
      hints: [
        "This mechanism can only happen in fluids (liquids and gases), never in solids.",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "thermal-transfer",
      question: "Two identical metal kettles—one painted matt black and one polished shiny silver—are filled with boiling water and left on a bench. Which cools faster and why?",
      options: [
        "Shiny silver cools faster because silver reflects thermal energy outward",
        "Matt black cools faster because matt black is a better emitter of infrared radiation",
        "Both cool at the exact same speed because metal conducts equally fast",
        "Shiny silver cools faster because smooth surfaces create stronger convection",
      ],
      answerIndex: 1,
      explanation:
        "A **matt black** surface is the best emitter of infrared radiation, so the black kettle radiates thermal energy to the room faster than the shiny silver kettle.",
      hints: [
        "Hot objects cool partly by EMITTING infrared radiation.",
        "Which surface finish is the best emitter of infrared waves?",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "work-power-resources",
      question:
        "A horse pulls a cart with a steady horizontal force of 450 N across a distance of 20 m. Calculate the work done in joules.",
      answer: { type: "number", value: 9000, display: "9000 J" },
      traps: [
        {
          spec: { type: "number", value: 22.5 },
          feedback: "Work done is force MULTIPLIED by distance ({{W = F * d}}), not force divided by distance.",
        },
      ],
      solution: [
        "Use {{W = F * d}}.",
        "{{W = 450 * 20 = 9000}} J.",
      ],
      hints: [
        "Recall {{W = F * d}}.",
        "Multiply 450 N by 20 m.",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "work-power-resources",
      question:
        "An electric motor transfers 1800 J of energy in 12 s. Calculate its power in watts.",
      answer: { type: "number", value: 150, display: "150 W" },
      traps: [
        {
          spec: { type: "number", value: 21600 },
          feedback: "Power is energy DIVIDED by time ({{P = E / t}}), not energy multiplied by time.",
        },
      ],
      solution: [
        "Use {{P = E / t}}.",
        "{{P = 1800 / 12 = 150}} W.",
      ],
      hints: [
        "Power is the rate of energy transfer: {{P = E / t}}.",
        "Divide 1800 J by 12 s.",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "work-power-resources",
      question: "Which energy resource is **non-renewable** yet produces **zero carbon dioxide** during electricity generation?",
      options: [
        "Natural gas",
        "Biomass pellets",
        "Nuclear fuel",
        "Geothermal steam",
      ],
      answerIndex: 2,
      explanation:
        "Nuclear fuel (uranium) is finite (non-renewable), but nuclear fission does not burn carbon so it emits no {{CO_2}} during operation. Biomass and geothermal are renewable; natural gas emits {{CO_2}}.",
      hints: [
        "Rule out renewable resources first (biomass and geothermal).",
        "Between natural gas and nuclear, which one involves no combustion?",
      ],
    },
    {
      id: "energy-and-efficiency-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "thermal-transfer",
      marks: 3,
      question:
        "Explain why an electric heating element is fitted near the **base** of an electric kettle rather than near the top.",
      modelAnswer:
        "Water around the element is warmed and expands as particles move faster and spread further apart. This makes the warm water less dense, so it rises to the top of the kettle. Cooler, denser water sinks to replace it, setting up a convection current that heats the entire kettle evenly.",
      markScheme: [
        {
          point: "Water near the element warms up and expands (particles spread further apart).",
          keywords: ["expands", "expand", "spread", "further apart"],
        },
        {
          point: "Warm water becomes less dense and rises upward.",
          keywords: ["less dense", "density decreases", "lower density"],
        },
        {
          point: "Cooler, denser water sinks to replace it, creating a convection current throughout the water.",
          keywords: ["convection", "sinks", "sink"],
        },
      ],
      commonError: "Writing 'heat rises' without mentioning expansion, density, and warm fluid rising while cooler denser fluid sinks.",
      hints: [
        "Use the particle/density model of convection rather than saying 'heat rises'.",
        "Explain what happens to the volume and density of heated water, and what cooler water above does.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Core Calculation & Concept Practice
    // -----------------------------------------------------------------------
    {
      id: "energy-and-efficiency-p1",
      title: "Practice Paper 1 — Core Skills & Calculations",
      questions: [
        {
          id: "energy-and-efficiency-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stores-transfers-conservation",
          question:
            "A torch battery transfers 1200 J from its chemical store. Exactly 420 J is emitted usefully by light radiation. How many joules are dissipated to the thermal store of the torch and surroundings?",
          answer: { type: "number", value: 780, display: "780 J" },
          traps: [
            {
              spec: { type: "number", value: 1620 },
              feedback: "Subtract the useful light energy from the 1200 J input instead of adding.",
            },
          ],
          solution: [
            "Total input = useful output + dissipated energy.",
            "Dissipated energy = {{1200 - 420 = 780}} J.",
          ],
          hints: [
            "Apply the Law of Conservation of Energy.",
            "Subtract 420 J from 1200 J.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stores-transfers-conservation",
          question: "Convert 4.8 kJ into joules.",
          answer: { type: "number", value: 4800, display: "4800 J" },
          traps: [
            {
              spec: { type: "number", value: 480 },
              feedback: "Kilo means 1000, not 100 — multiply 4.8 by 1000.",
            },
          ],
          solution: [
            "{{1 \"kJ\" = 1000 \"J\"}}.",
            "{{4.8 * 1000 = 4800}} J.",
          ],
          hints: [
            "How many joules are in 1 kilojoule?",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "stores-transfers-conservation",
          question: "Which pair consists of **one energy store** and **one transfer pathway**?",
          options: [
            "Kinetic energy and gravitational potential energy",
            "Electrical working and mechanical working",
            "Thermal store and electrical working",
            "Light radiation and sound radiation",
          ],
          answerIndex: 2,
          explanation:
            "Thermal is one of the 8 energy stores, while electrical working is one of the 4 transfer pathways. Every other choice lists either two stores or two pathways.",
          hints: [
            "Classify both items in each pair as either a store or a pathway.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "A hairdryer takes in 1600 J of electrical energy each second and dissipates 400 J as unwanted sound and heat outside the nozzle. Calculate its efficiency as a decimal.",
          answer: { type: "number", value: 0.75, allowFraction: false, display: "0.75" },
          traps: [
            {
              spec: { type: "number", value: 0.25 },
              feedback: "0.25 is the WASTED fraction (400 ÷ 1600). Subtract 400 from 1600 first to get the useful energy (1200 J).",
            },
            {
              spec: { type: "number", value: 75 },
              feedback: "The question asks for a DECIMAL (between 0 and 1), not a percentage.",
            },
          ],
          solution: [
            "Useful energy per second = {{1600 - 400 = 1200}} J.",
            "Efficiency = {{1200 / 1600 = 0.75}}.",
          ],
          hints: [
            "First find the useful output: 1600 J − 400 J.",
            "Divide useful output by 1600 J and leave your answer as a decimal.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "On a scale Sankey diagram, the total input arrow is 8 cm wide and represents 640 J. The horizontal useful arrow is 5 cm wide. How many joules are transferred usefully?",
          answer: { type: "number", value: 400, display: "400 J" },
          traps: [
            {
              spec: { type: "number", value: 240 },
              feedback: "240 J is the WASTED energy (the remaining 3 cm width). The useful arrow is 5 cm wide.",
            },
          ],
          solution: [
            "Find the scale: {{640 \"J\" / 8 \"cm\" = 80 \"J per cm\"}}.",
            "Useful output (5 cm wide) = {{5 * 80 = 400}} J.",
          ],
          hints: [
            "Find how many joules each 1 cm of arrow width represents.",
            "Multiply that scale value by 5 cm.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "An aquarium water pump has an efficiency of 0.45 and transfers 180 J usefully to move water. Calculate the total energy input in joules.",
          answer: { type: "number", value: 400, display: "400 J" },
          traps: [
            {
              spec: { type: "number", value: 81 },
              feedback: "Total input must be LARGER than the 180 J useful output. Divide 180 by 0.45 instead of multiplying.",
            },
          ],
          solution: [
            "Rearrange {{\"Efficiency\" = \"Useful\" / \"Total\"}} to {{\"Total\" = \"Useful\" / \"Efficiency\"}}.",
            "{{\"Total\" = 180 / 0.45 = 400}} J.",
          ],
          hints: [
            "Total input must be larger than 180 J.",
            "Rearrange the efficiency equation so Total input = Useful ÷ Efficiency.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "thermal-transfer",
          question:
            "Name the mobile subatomic particles inside metals that allow metals to conduct thermal energy far faster than wood or plastic.",
          answer: {
            type: "text",
            accept: ["delocalised electrons", "free electrons", "electrons", "delocalized electrons"],
            display: "delocalised electrons",
          },
          solution: [
            "Metals contain **delocalised (free) electrons** that move quickly through the metal lattice and transfer kinetic energy through collisions.",
          ],
          hints: [
            "They are negatively charged particles that are free to roam through a metal lattice.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "thermal-transfer",
          question: "How does **double glazing** (two glass panes separated by a narrow sealed layer of dry air or argon) reduce thermal energy transfer through a window?",
          options: [
            "The sealed gas is a good thermal conductor that bounces vibrations backward",
            "Glass becomes completely impermeable to all visible and infrared light",
            "Air cannot conduct well and the narrow sealed gap restricts convection currents",
            "The outer glass pane creates a magnetic field that repels warm air molecules",
          ],
          answerIndex: 2,
          explanation:
            "Gases like air and argon are poor thermal conductors (particles far apart), and keeping the gap narrow restricts convection currents from forming between the two panes.",
          hints: [
            "Think about whether gases are good or poor thermal conductors.",
            "Why is the gap kept narrow and sealed?",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "thermal-transfer",
          marks: 3,
          question:
            "A student pours ice-cold water into a vacuum flask before a field trip in sunny Singapore. Explain how **three** structural features of the flask slow down thermal energy entering the cold water.",
          modelAnswer:
            "First, the vacuum between the double glass walls contains no particles, so it prevents thermal energy entering by conduction and convection. Second, the shiny silvered wall surfaces reflect external infrared radiation outward. Third, the insulated plastic stopper prevents warm outside air entering by convection and conducts heat very poorly.",
          markScheme: [
            {
              point: "Vacuum between the double walls stops conduction and convection (no particles).",
              keywords: ["no particles", "conduction and convection", "stops conduction"],
            },
            {
              point: "Silvered / shiny surfaces reflect incoming infrared radiation.",
              keywords: ["silver", "shiny", "reflect"],
            },
            {
              point: "Plastic lid / stopper reduces conduction and stops warm air entering by convection.",
              keywords: ["stopper", "lid", "plastic"],
            },
          ],
          commonError: "Claiming the vacuum stops infrared radiation — infrared waves pass freely through a vacuum; it is the shiny silvered coating that reflects IR.",
          hints: [
            "Name three physical parts of a vacuum flask: the gap between walls, the wall coating, and the top closure.",
            "Link EACH feature explicitly to conduction, convection or infrared radiation.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A gardener pushes a wheelbarrow 35 m along a path using a constant horizontal force of 80 N. Calculate the work done in joules.",
          answer: { type: "number", value: 2800, display: "2800 J" },
          traps: [
            {
              spec: { type: "number", value: 115 },
              feedback: "Multiply force and distance ({{W = F * d}}) rather than adding them.",
            },
          ],
          solution: [
            "{{W = F * d = 80 * 35 = 2800}} J.",
          ],
          hints: [
            "Use {{W = F * d}}.",
            "Multiply 80 N by 35 m.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A steady pulling force does 1440 J of work dragging a crate 16 m across a warehouse floor. Calculate the magnitude of the pulling force in newtons.",
          answer: { type: "number", value: 90, display: "90 N" },
          traps: [
            {
              spec: { type: "number", value: 23040 },
              feedback: "Rearrange {{W = F * d}} to {{F = W / d}} — divide 1440 by 16 instead of multiplying.",
            },
          ],
          solution: [
            "Rearrange {{W = F * d}} to {{F = W / d}}.",
            "{{F = 1440 / 16 = 90}} N.",
          ],
          hints: [
            "Make force {{F}} the subject of {{W = F * d}}.",
            "Divide 1440 J by 16 m.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A 1.8 kW hairdryer is switched on for 50 s. Calculate the total energy transferred in joules.",
          answer: { type: "number", value: 90000, display: "90000 J" },
          traps: [
            {
              spec: { type: "number", value: 90 },
              feedback: "90 is in kilojoules (kJ)! Convert 1.8 kW to 1800 W first to get joules.",
            },
          ],
          solution: [
            "Convert power to watts: {{1.8 \"kW\" = 1800 \"W\"}}.",
            "{{E = P * t = 1800 * 50 = 90 000}} J.",
          ],
          hints: [
            "Convert 1.8 kW into watts first (multiply by 1000).",
            "Then use {{E = P * t}}.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A 750 W toaster transfers 90 000 J of energy to toast two slices of bread. For how many seconds was the toaster switched on?",
          answer: { type: "number", value: 120, display: "120 s" },
          solution: [
            "Rearrange {{P = E / t}} to {{t = E / P}}.",
            "{{t = 90 000 / 750 = 120}} s (which is 2 minutes).",
          ],
          hints: [
            "Rearrange {{P = E / t}} to make time {{t}} the subject.",
            "Divide 90 000 J by 750 W.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          marks: 2,
          question:
            "Describe **two** practical modifications a racing cyclist can make to increase overall mechanical efficiency, stating which unwanted force each modification reduces.",
          modelAnswer:
            "First, applying lubricant oil to the chain and wheel bearings reduces friction, so less energy is dissipated thermally. Second, adopting an aerodynamic streamlined posture and helmet reduces air resistance (drag) at high speed.",
          markScheme: [
            {
              point: "Lubricating / oiling the chain or bearings to reduce friction.",
              keywords: ["lubricat", "oil", "friction"],
            },
            {
              point: "Streamlining / aerodynamic shape or posture to reduce air resistance (drag).",
              keywords: ["streamlin", "aerodynamic", "air resistance", "drag"],
            },
          ],
          commonError: "Naming only one modification twice (e.g. oiling the chain AND oiling the pedals) instead of two distinct mechanisms.",
          hints: [
            "Think about the two resistive forces opposing a moving bicycle: one inside the metal parts, and one from the air.",
            "Name the engineering fix for each resistive force.",
          ],
        },
        {
          id: "energy-and-efficiency-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "work-power-resources",
          marks: 3,
          question:
            "Evaluate **solar photovoltaic panels** compared with **natural gas power stations** across three criteria: renewability, greenhouse-gas impact during operation, and reliability.",
          modelAnswer:
            "Solar energy is renewable and will not run out, whereas natural gas is a finite non-renewable fossil fuel. Solar panels emit zero carbon dioxide while generating electricity, whereas burning natural gas releases carbon dioxide that contributes to global warming. However, solar output is intermittent (zero at night and lower under clouds), while gas stations provide reliable 24/7 electricity on demand.",
          markScheme: [
            {
              point: "Solar is renewable while natural gas is finite / non-renewable.",
              keywords: ["renewable", "finite", "non-renewable"],
            },
            {
              point: "Solar emits no CO₂ in operation while burning gas releases CO₂ / greenhouse gas.",
              keywords: ["carbon dioxide", "co2", "global warming"],
            },
            {
              point: "Solar is intermittent / weather- or night-dependent while gas is reliable on demand.",
              keywords: ["intermittent", "night", "clouds", "on demand"],
            },
          ],
          commonError: "Forgetting to mention BOTH technologies in each comparison point.",
          hints: [
            "Write three clear sentences — one for each criterion asked in the question.",
            "Use contrast words like 'whereas' to compare both resources in every sentence.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Applied & Multi-Step Exam Practice
    // -----------------------------------------------------------------------
    {
      id: "energy-and-efficiency-p2",
      title: "Practice Paper 2 — Applied & Multi-Step Problems",
      questions: [
        {
          id: "energy-and-efficiency-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "stores-transfers-conservation",
          question:
            "A 4.0 kg rock is dropped from a cliff where its gravitational potential store is 800 J. Halfway down, its gravitational potential store is 400 J and 55 J has been dissipated due to air resistance. Calculate the energy in the rock's kinetic store at this point.",
          answer: { type: "number", value: 345, display: "345 J" },
          traps: [
            {
              spec: { type: "number", value: 400 },
              feedback: "400 J ignores the 55 J dissipated to air resistance! Subtract 55 J from 400 J.",
            },
          ],
          solution: [
            "Total energy remains 800 J: {{E_p + E_k + E_\"dissipated\" = 800}} J.",
            "{{400 + E_k + 55 = 800}}.",
            "{{E_k = 800 - 455 = 345}} J.",
          ],
          hints: [
            "The rock lost 400 J of GPE so far, which split between kinetic energy and air-resistance heating.",
            "Subtract 55 J from the 400 J of GPE lost.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q02",
          kind: "mcq",
          difficulty: "core",
          guideRef: "stores-transfers-conservation",
          question: "When a driver applies the brakes on a fast-moving car to bring it safely to a halt on a flat road, which energy transfer description is scientifically accurate?",
          options: [
            "Kinetic store decreases; thermal store of brakes and surroundings increases by mechanical working",
            "Chemical store increases; gravitational potential store decreases by electrical working",
            "Kinetic store is destroyed; friction creates brand-new thermal energy out of nothing",
            "Thermal store decreases; elastic potential store of the tyres increases by radiation",
          ],
          answerIndex: 0,
          explanation:
            "Friction between brake pads and discs does **mechanical work** opposing the car's motion, shifting energy from the car's **kinetic store** into the **thermal store** of the brakes and surrounding air.",
          hints: [
            "Which energy store shrinks when a car slows down?",
            "Touch bicycle or car brakes after hard braking — which store got larger?",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "An electric kettle has an input power of 2200 W and an efficiency of 85%. Calculate its useful heating power in watts.",
          answer: { type: "number", value: 1870, display: "1870 W" },
          traps: [
            {
              spec: { type: "number", value: 330 },
              feedback: "330 W is the WASTED power (15% of 2200 W). Useful power is 85% of 2200 W.",
            },
          ],
          solution: [
            "Convert 85% to 0.85.",
            "Useful power = {{0.85 * 2200 = 1870}} W.",
          ],
          hints: [
            "Convert 85% to the decimal 0.85.",
            "Multiply 0.85 by 2200 W.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "A portable diesel generator uses 2.4 MJ from its fuel's chemical store and dissipates 1.56 MJ as wasted thermal energy. Calculate its efficiency as a percentage.",
          answer: { type: "number", value: 35, display: "35%" },
          traps: [
            {
              spec: { type: "number", value: 65 },
              feedback: "65% is the wasted percentage (1.56 ÷ 2.4). Subtract first to find useful output (0.84 MJ).",
            },
          ],
          solution: [
            "Useful energy output = {{2.4 - 1.56 = 0.84}} MJ.",
            "Efficiency = {{(0.84 / 2.4) * 100% = 0.35 * 100% = 35%}}.",
          ],
          hints: [
            "Find the useful energy output by subtracting 1.56 MJ from 2.4 MJ.",
            "Divide useful output by 2.4 MJ and multiply by 100%.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sankey-efficiency",
          question:
            "A petrol engine is 28% efficient. During a short drive it dissipates 1800 kJ of wasted thermal energy. Calculate the total chemical energy input from the petrol in kilojoules.",
          answer: { type: "number", value: 2500, display: "2500 kJ" },
          traps: [
            {
              spec: { type: "number", value: 1296 },
              feedback: "Total input must be larger than the 1800 kJ wasted! Divide 1800 by 0.72, not multiply.",
            },
          ],
          solution: [
            "If 28% is useful, then {{100% - 28% = 72%}} (0.72) is wasted.",
            "Since {{0.72 * \"Total\" = 1800}} kJ, {{\"Total\" = 1800 / 0.72 = 2500}} kJ.",
          ],
          hints: [
            "What percentage of the total input is WASTED if 28% is useful?",
            "Divide the 1800 kJ wasted energy by that wasted decimal fraction (0.72).",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "thermal-transfer",
          question:
            "An uninsulated roof loses 3200 W of thermal power in winter. Installing fibreglass loft insulation reduces thermal transfer through the roof by 75%. What is the new rate of thermal loss through the roof in watts?",
          answer: { type: "number", value: 800, display: "800 W" },
          traps: [
            {
              spec: { type: "number", value: 2400 },
              feedback: "2400 W is the power SAVED (75% of 3200 W). Subtract 2400 W from 3200 W to find the new rate of loss.",
            },
          ],
          solution: [
            "Remaining fraction after a 75% reduction = {{100% - 75% = 25% = 0.25}}.",
            "New rate of loss = {{0.25 * 3200 = 800}} W.",
          ],
          hints: [
            "If loss drops by 75%, what percentage of the original heat loss remains?",
            "Calculate 25% of 3200 W.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "thermal-transfer",
          question: "Firefighters battling intense furnace blazes wear aluminised **shiny silver** proximity suits rather than dark matt suits. What is the physics reason for this surface finish?",
          options: [
            "Shiny silver absorbs heat faster so the suit acts like a metal sponge",
            "Shiny silver reflects intense infrared radiation away from the firefighter",
            "Shiny silver increases thermal conduction from the flames into the suit",
            "Shiny silver stops air molecules from touching the outer layer of fabric",
          ],
          answerIndex: 1,
          explanation:
            "Intense flames emit huge amounts of infrared radiation. A **shiny silver** surface is the best reflector (and poorest absorber) of IR waves, keeping thermal energy out of the suit.",
          hints: [
            "Which heat-transfer mechanism carries intense thermal energy across air straight from flames?",
            "How does a shiny metallic surface interact with infrared waves?",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "thermal-transfer",
          marks: 3,
          question:
            "A stainless-steel teaspoon and a bamboo spoon have both rested on a 22 °C kitchen bench all morning. When you pick them up, the steel feels icy cold while the bamboo feels comfortable. Explain why.",
          modelAnswer:
            "Both spoons are at the same temperature (22 °C room temperature). However, steel is a metal with delocalised free electrons, making it a much better thermal conductor than insulating bamboo. Therefore steel conducts thermal energy away from your warmer 37 °C hand much more rapidly, which your skin senses as cold.",
          markScheme: [
            {
              point: "Both spoons are actually at the same temperature.",
              keywords: ["same temperature", "same room temperature", "both at 22", "equal temperature"],
            },
            {
              point: "Steel is a good thermal conductor (contains free/delocalised electrons) whereas bamboo is an insulator.",
              keywords: ["conductor", "delocalised", "free electrons", "insulator"],
            },
            {
              point: "Steel transfers thermal energy away from your warmer hand much faster.",
              keywords: ["away from", "faster", "rapidly", "from your hand"],
            },
          ],
          commonError: "Saying 'the metal spoon is colder' — objects left in the same room reach thermal equilibrium at the same temperature.",
          hints: [
            "First state how the actual temperatures of the two spoons compare.",
            "Compare their thermal conductivity and explain which direction thermal energy moves when you touch them.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A warehouse forklift exerts an upward force of 3500 N to lift a pallet vertically by 240 cm. Calculate the work done in joules.",
          answer: { type: "number", value: 8400, display: "8400 J" },
          traps: [
            {
              spec: { type: "number", value: 840000 },
              feedback: "Convert 240 cm into metres (2.4 m) before multiplying by 3500 N!",
            },
          ],
          solution: [
            "Convert distance to metres: {{240 \"cm\" = 240 / 100 = 2.4 \"m\"}}.",
            "{{W = F * d = 3500 * 2.4 = 8400}} J.",
          ],
          hints: [
            "Check the unit of distance! Work in joules requires distance in METRES.",
            "Convert 240 cm to metres, then multiply by 3500 N.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A 1.2 kW electric lawnmower runs continuously for 8 minutes. Calculate the energy transferred in **kilojoules**.",
          answer: { type: "number", value: 576, display: "576 kJ" },
          traps: [
            {
              spec: { type: "number", value: 9.6 },
              feedback: "You multiplied by 8 minutes instead of converting to seconds (480 s)!",
            },
            {
              spec: { type: "number", value: 576000 },
              feedback: "576 000 is in JOULES — divide by 1000 to give the answer in kilojoules (kJ).",
            },
          ],
          solution: [
            "Convert time to seconds: {{8 * 60 = 480}} s.",
            "{{E = P * t = 1200 \"W\" * 480 \"s\" = 576 000 \"J\"}}.",
            "Convert to kilojoules: {{576 000 / 1000 = 576}} kJ.",
          ],
          hints: [
            "Convert 8 minutes into seconds (8 × 60).",
            "Multiply power (1.2 kW = 1200 W) by seconds, then express the result in kJ.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "A harbour crane lifts a 250 kg container vertically by 14 m in 25 s (use {{g = 10 \"N/kg\"}}). Calculate the useful power output of the crane in watts.",
          answer: { type: "number", value: 1400, display: "1400 W" },
          traps: [
            {
              spec: { type: "number", value: 140 },
              feedback: "250 kg is MASS, not force! Multiply by {{g = 10 \"N/kg\"}} to find the weight (2500 N) first.",
            },
          ],
          solution: [
            "Weight of container: {{F = m * g = 250 * 10 = 2500}} N.",
            "Useful work done: {{W = 2500 * 14 = 35 000}} J.",
            "Useful power: {{P = 35 000 / 25 = 1400}} W.",
          ],
          hints: [
            "First find the container's weight in newtons using {{W_\"weight\" = m * g}}.",
            "Multiply force by 14 m for work done, then divide by 25 s for power.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "Calculate the increase in gravitational potential energy when a 65 kg rock climber climbs 18 m straight up a cliff face (take {{g = 10 \"N/kg\"}}).",
          answer: { type: "number", value: 11700, display: "11700 J" },
          traps: [
            {
              spec: { type: "number", value: 1170 },
              feedback: "Remember to include gravitational field strength {{g = 10 \"N/kg\"}} in {{E_p = m * g * h}}.",
            },
          ],
          solution: [
            "Use {{E_p = m * g * h}}.",
            "{{E_p = 65 * 10 * 18 = 11 700}} J.",
          ],
          hints: [
            "Use {{E_p = m * g * h}}.",
            "Multiply 65 × 10 × 18.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "work-power-resources",
          question:
            "Calculate the kinetic energy (in joules) of a 1200 kg electric car cruising at 15 m/s using {{E_k = 1/2 m v^2}}.",
          answer: { type: "number", value: 135000, display: "135000 J" },
          traps: [
            {
              spec: { type: "number", value: 9000 },
              feedback: "Remember to SQUARE the speed ({{15^2 = 225}}) before multiplying!",
            },
            {
              spec: { type: "number", value: 270000 },
              feedback: "Remember the factor of {{1/2}} in {{E_k = 1/2 m v^2}}!",
            },
          ],
          solution: [
            "Square the speed first: {{15^2 = 225}}.",
            "{{E_k = 0.5 * 1200 * 225 = 600 * 225 = 135 000}} J.",
          ],
          hints: [
            "Square only the speed {{v}} first: {{15^2 = 225}}.",
            "Then compute {{0.5 * 1200 * 225}}.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "stores-transfers-conservation",
          marks: 3,
          question:
            "A student drops a basketball from shoulder height. After hitting the gym floor, it rebounds to only three-quarters of its starting height. Explain in terms of energy conservation and dissipation why it does not bounce back to shoulder height.",
          modelAnswer:
            "Total energy is conserved and none is destroyed. During the fall and impact, air resistance and deformation of the rubber transfer energy mechanically, by heating and by sound waves. That wasted energy dissipates into the thermal store of the ball, floor and surrounding air, leaving less energy available for the ball's gravitational potential store at the top of the rebound.",
          markScheme: [
            {
              point: "Total energy is conserved / not destroyed.",
              keywords: ["conserved", "not destroyed", "never destroyed"],
            },
            {
              point: "Some energy is transferred by heating / sound waves (due to friction, air resistance or deformation).",
              keywords: ["sound", "heating", "friction", "air resistance"],
            },
            {
              point: "Energy dissipates to the thermal store of the surroundings/floor/ball, leaving less gravitational potential energy.",
              keywords: ["thermal store", "gravitational potential", "less gpe"],
            },
          ],
          commonError: "Saying 'energy is lost on the bounce' without stating where it goes (thermal store of surroundings).",
          hints: [
            "Start with the Law of Conservation of Energy.",
            "Name the wasted pathways (heating/sound) and the final store where dissipated energy ends up.",
          ],
        },
        {
          id: "energy-and-efficiency-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "work-power-resources",
          marks: 3,
          question:
            "A mountainous island with fast-flowing rivers and active volcanic hot springs plans to shut down its imported-coal plant. Recommend **two** renewable resources suited to this island and explain why they outperform wind turbines alone.",
          modelAnswer:
            "The island should invest in hydroelectric power using dams on its steep mountain rivers and geothermal power tapping heat from its volcanic rocks. Both resources generate reliable, continuous electricity with minimal carbon emissions, unlike wind turbines which are intermittent and drop to zero output on calm days.",
          markScheme: [
            {
              point: "Recommends hydroelectric power linked to the mountains / rivers.",
              keywords: ["hydroelectric", "hydro"],
            },
            {
              point: "Recommends geothermal power linked to the volcanic hot springs / underground heat.",
              keywords: ["geothermal"],
            },
            {
              point: "Explains that both are reliable / continuous whereas wind is intermittent / weather-dependent.",
              keywords: ["reliable", "continuous", "intermittent", "calm"],
            },
          ],
          commonError: "Listing solar or wave without using the specific geographical clues (mountains, rivers, volcanic hot springs) given in the stem.",
          hints: [
            "Match each geographical feature (mountain rivers + volcanic hot springs) to a specific renewable resource.",
            "Contrast their reliability with the intermittency of wind.",
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
      id: "energy-and-efficiency-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sankey-efficiency",
      strategy: "Chain efficiencies by multiplying decimals",
      question:
        "An off-grid solar water pump system consists of three stages in series: a solar panel (20% efficient), a rechargeable battery (80% efficient), and an electric motor (75% efficient). What is the **overall efficiency** of the entire chain as a percentage?",
      answer: { type: "number", value: 12, display: "12%" },
      traps: [
        {
          spec: { type: "number", value: 58.3 },
          feedback: "Never average efficiencies in a chain! Trace 100 J step by step through each stage.",
        },
      ],
      solution: [
        "Trace 100 J of sunlight through each stage:",
        "After solar panel (20%): {{0.20 * 100 = 20}} J enters the battery.",
        "After battery (80%): {{0.80 * 20 = 16}} J reaches the motor.",
        "After motor (75%): {{0.75 * 16 = 12}} J of useful pumping work.",
        "Overall efficiency = {{12 / 100 = 12%}} (equivalently {{0.20 * 0.80 * 0.75 = 0.12}}).",
      ],
      hints: [
        "Imagine 100 J of solar radiation arrives at the panel.",
        "Find how many joules leave stage 1, then feed ONLY those joules into stage 2.",
        "Multiply the three decimal efficiencies: {{0.20 * 0.80 * 0.75}}.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "work-power-resources",
      strategy: "Work backwards from useful mechanical power to electrical input",
      question:
        "A high-rise lift carries a total mass of 480 kg vertically upward by 25 m in 20 s (use {{g = 10 \"N/kg\"}}). Its electric drive motor has an efficiency of 75%. Calculate the **electrical input power** drawn by the motor in watts.",
      answer: { type: "number", value: 8000, display: "8000 W" },
      traps: [
        {
          spec: { type: "number", value: 6000 },
          feedback: "6000 W is the USEFUL mechanical power. Divide by 0.75 to find the larger electrical input power.",
        },
        {
          spec: { type: "number", value: 4500 },
          feedback: "Electrical input power must be LARGER than useful power (6000 W), so divide by 0.75 instead of multiplying.",
        },
      ],
      solution: [
        "Weight of load: {{F = m * g = 480 * 10 = 4800}} N.",
        "Useful work done: {{W = 4800 * 25 = 120 000}} J.",
        "Useful power: {{P_\"useful\" = 120 000 / 20 = 6000}} W.",
        "Electrical input power: {{P_\"in\" = 6000 / 0.75 = 8000}} W.",
      ],
      hints: [
        "Step 1: Find the weight ({{m * g}}) and useful work done ({{F * d}}).",
        "Step 2: Divide useful work by 20 s to get useful power.",
        "Step 3: Since 6000 W is 75% of the electrical input, divide 6000 by 0.75.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "stores-transfers-conservation",
      strategy: "Equate initial GPE store to final KE store",
      question:
        "A 2.0 kg model cart starts from rest at the top of a 5.0 m high frictionless track (use {{g = 10 \"N/kg\"}}). Assuming 100% of its gravitational potential energy transfers into kinetic energy, calculate its speed at the bottom in m/s.",
      answer: { type: "number", value: 10, display: "10 m/s" },
      traps: [
        {
          spec: { type: "number", value: 100 },
          feedback: "100 is {{v^2}} — remember to take the square root to find speed {{v}}!",
        },
      ],
      solution: [
        "Initial GPE: {{E_p = m * g * h = 2.0 * 10 * 5.0 = 100}} J.",
        "At the bottom, {{E_k = 100}} J, so {{1/2 * 2.0 * v^2 = 100}}.",
        "Simplify: {{v^2 = 100}}, therefore {{v = sqrt(100) = 10}} m/s.",
      ],
      hints: [
        "Calculate the starting gravitational potential energy with {{E_p = m * g * h}}.",
        "Set {{1/2 m v^2}} equal to that energy and solve for {{v^2}}.",
        "Take the square root of {{v^2}} to find the speed.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sankey-efficiency",
      strategy: "Compare total input power for identical useful output",
      question:
        "Two floodlights both emit **18 W of useful light power** and operate for 10 hours (36 000 s). Floodlight A is 60% efficient while Floodlight B is 15% efficient. How many **kilojoules (kJ)** of electrical energy are saved over 10 hours by choosing Floodlight A instead of Floodlight B?",
      answer: { type: "number", value: 3240, display: "3240 kJ" },
      traps: [
        {
          spec: { type: "number", value: 90 },
          feedback: "90 W is the POWER saved per second — now multiply by 36 000 s and convert to kJ!",
        },
        {
          spec: { type: "number", value: 3240000 },
          feedback: "3 240 000 is in JOULES — divide by 1000 to convert to kilojoules (kJ).",
        },
      ],
      solution: [
        "Input power of A: {{18 / 0.60 = 30}} W.",
        "Input power of B: {{18 / 0.15 = 120}} W.",
        "Power saved = {{120 - 30 = 90}} W.",
        "Energy saved in 36 000 s: {{90 * 36 000 = 3 240 000 \"J\" = 3240 \"kJ\"}}.",
      ],
      hints: [
        "Calculate the total electrical input power of each floodlight using {{P_\"in\" = P_\"useful\" / \"efficiency\"}}.",
        "Subtract to find how many watts are saved every second.",
        "Multiply watts saved by 36 000 s, then divide by 1000 for kilojoules.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "work-power-resources",
      strategy: "Link kinetic energy gained to average power",
      question:
        "A 1500 kg electric car accelerates from rest to 20 m/s in 12 s on a flat test track (ignoring air resistance). Using {{E_k = 1/2 m v^2}}, calculate the average useful power of its motor in **kilowatts (kW)**.",
      answer: { type: "number", value: 25, display: "25 kW" },
      traps: [
        {
          spec: { type: "number", value: 25000 },
          feedback: "25 000 is in WATTS — divide by 1000 to convert to kilowatts (kW).",
        },
      ],
      solution: [
        "Kinetic energy gained: {{E_k = 0.5 * 1500 * 20^2 = 750 * 400 = 300 000}} J.",
        "Average power: {{P = 300 000 / 12 = 25 000}} W.",
        "Convert to kilowatts: {{25 000 / 1000 = 25}} kW.",
      ],
      hints: [
        "First calculate the kinetic energy gained using {{E_k = 1/2 m v^2}}.",
        "Divide that energy by 12 s to get power in watts.",
        "Divide watts by 1000 to convert into kilowatts (kW).",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "thermal-transfer",
      strategy: "Connect power saved (kW) to kilowatt-hours and cost",
      question:
        "Upgrading a villa's insulation saves 1.8 kW of air-conditioning electrical power throughout a 10-hour tropical day. If electricity costs S$0.30 per kilowatt-hour (where {{1 \"kWh\" = 1 \"kW\" * 1 \"hour\"}}), how much money in Singapore dollars is saved in one day?",
      answer: { type: "number", value: 5.4, display: "S$5.40" },
      traps: [
        {
          spec: { type: "number", value: 18 },
          feedback: "18 kWh is the energy saved — multiply by S$0.30 per kWh to find the dollar saving.",
        },
      ],
      solution: [
        "Electrical energy saved in kWh = {{1.8 \"kW\" * 10 \"hours\" = 18 \"kWh\"}}.",
        "Cost saved = {{18 * 0.30 = 5.40}}, i.e. S$5.40.",
      ],
      hints: [
        "Find the number of kilowatt-hours saved: power (kW) × time (hours).",
        "Multiply the kWh saved by S$0.30.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "thermal-transfer",
      strategy: "Link every physical feature to a distinct heat-transfer mechanism",
      marks: 4,
      question:
        "An engineer builds an off-grid solar cooker using four key elements: a curved shiny parabolic mirror, a dull black outer pot coating, a thin aluminium pot body, and a transparent glass cover sealing the pot. Explain how **each** of these four features maximises the temperature of the food inside.",
      modelAnswer:
        "The curved shiny mirror reflects incoming infrared radiation from a wide area onto the pot. The dull black outer coating absorbs the maximum possible fraction of that focused infrared radiation. Aluminium is a metal containing delocalised electrons, so it conducts thermal energy quickly through the pot wall into the food. Finally, the sealed glass cover traps the warmed air around the pot, preventing heat loss by convection and wind while letting sunlight in.",
      markScheme: [
        {
          point: "Curved shiny mirror reflects / concentrates infrared radiation onto the pot.",
          keywords: ["reflect", "focus", "concentrat"],
        },
        {
          point: "Dull black coating is the best absorber of infrared radiation.",
          keywords: ["absorb"],
        },
        {
          point: "Aluminium conducts thermal energy rapidly (via free/delocalised electrons) into the food.",
          keywords: ["conduct", "electron"],
        },
        {
          point: "Glass cover traps air to prevent / reduce convection heat loss.",
          keywords: ["convection", "traps air", "wind"],
        },
      ],
      commonError: "Explaining only the mirror and black paint while ignoring conduction through the metal pot and convection stopped by the glass lid.",
      hints: [
        "Walk through the four features one by one in the order sunlight travels into the food.",
        "Feature 1 & 2 deal with infrared radiation (reflection vs absorption).",
        "Feature 3 deals with conduction through the pot wall; Feature 4 deals with trapped air and convection.",
      ],
    },
    {
      id: "energy-and-efficiency-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "work-power-resources",
      strategy: "Balance environmental, reliability, storage, and efficiency constraints",
      marks: 4,
      question:
        "A nation currently obtains 80% of its electricity from coal and wants to reach net-zero carbon emissions by 2045 without blackouts. Propose a balanced four-part plan covering: (1) cutting carbon from electricity generation, (2) handling intermittent weather, (3) guaranteeing continuous baseload supply, and (4) reducing total energy demand.",
      modelAnswer:
        "First, phase out coal stations and replace them with zero-carbon renewables such as solar and wind farms to cut greenhouse-gas emissions. Second, deploy grid-scale batteries and pumped hydroelectric storage to store surplus energy for calm nights and handle intermittency. Third, maintain reliable 24/7 baseload generation using nuclear, hydroelectric or geothermal plants where geography allows. Fourth, upgrade building insulation and switch to high-efficiency LED lighting and motors so less total electricity is needed.",
      markScheme: [
        {
          point: "Replace coal with zero-carbon renewables (solar/wind) to cut greenhouse-gas / CO₂ emissions.",
          keywords: ["solar", "wind", "renewable"],
        },
        {
          point: "Use energy storage (grid batteries or pumped hydro) to overcome intermittency.",
          keywords: ["batter", "pumped", "storage"],
        },
        {
          point: "Include reliable low-carbon baseload (nuclear, geothermal or hydro) for continuous output.",
          keywords: ["nuclear", "geothermal", "baseload"],
        },
        {
          point: "Improve efficiency / reduce demand (insulation, LEDs, efficient appliances).",
          keywords: ["insulation", "led", "efficiency"],
        },
      ],
      commonError: "Proposing 100% solar and wind without mentioning storage or reliable baseload backup for calm nights.",
      hints: [
        "Address all four numbered points in separate, concrete sentences.",
        "Think about how grid-scale storage bridges sunny/windy peaks and calm nights.",
        "Remember that cutting wasted energy through insulation and LEDs shrinks how many power stations you need to build.",
      ],
    },
  ],
};
