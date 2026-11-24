import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Core Foundations (15 MCQs)
  // =========================================================================
  {
    id: "energy-and-efficiency-m1",
    title: "MCQ Paper 1 — Stores, Sankey & Thermal Basics",
    questions: [
      {
        id: "energy-and-efficiency-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stores-transfers-conservation",
        question: "Which of the following is an **energy store** rather than an energy transfer pathway?",
        options: [
          "Elastic potential energy",
          "Electrical working in wires",
          "Infrared radiation waves",
          "Mechanical working by forces",
        ],
        answerIndex: 0,
        explanation:
          "Elastic potential energy is one of the 8 energy stores (held in stretched or squashed objects). Electrical working, mechanical working and radiation are all transfer pathways that shift energy between stores.",
        hints: [
          "Stores describe where energy is kept; pathways describe how energy moves.",
          "Check which item holds energy inside an object such as a stretched spring.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stores-transfers-conservation",
        question: "A cyclist pedals hard up a steep hill and then stops at the top. Which primary store transfer occurred from the cyclist's muscles to the cyclist-and-bike system?",
        options: [
          "Thermal store to magnetic store",
          "Chemical store to gravitational potential store",
          "Nuclear store to electrostatic store",
          "Elastic potential store to chemical store",
        ],
        answerIndex: 1,
        explanation:
          "Food molecules in the cyclist's body hold a **chemical store**. Climbing higher increases the **gravitational potential store** (while some energy is also dissipated to thermal stores).",
        hints: [
          "What energy store is held in food and muscles?",
          "What energy store increases whenever an object moves higher above the ground?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "A model rocket's fuel transfers 500 J from its chemical store during launch. At a certain height, the rocket has gained 180 J in its gravitational potential store and 120 J in its kinetic store. How much energy has been dissipated to the thermal store of the surroundings?",
        options: ["100 J", "180 J", "200 J", "300 J"],
        answerIndex: 2,
        explanation:
          "By conservation of energy, total input (500 J) equals useful stores (180 J + 120 J = 300 J) plus dissipated energy. Therefore 500 − 300 = 200 J has been dissipated. Choosing 300 J gives the useful sum instead of the dissipated remainder.",
        hints: [
          "Add the gravitational potential energy and kinetic energy gained first.",
          "Subtract that total from the 500 J chemical input using conservation of energy.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stores-transfers-conservation",
        question: "When a bouncing rubber ball eventually comes to rest on a classroom floor, what has happened to its original gravitational potential energy?",
        options: [
          "It has been completely destroyed by gravity",
          "It has turned into extra mass inside the rubber",
          "It has disappeared into the elastic store forever",
          "It has dissipated to the thermal store of the surroundings",
        ],
        answerIndex: 3,
        explanation:
          "Energy is never created or destroyed. Each bounce warms the ball, floor and air slightly via friction and sound waves, dissipating all the original energy into the thermal store of the surroundings.",
        hints: [
          "Recall the Law of Conservation of Energy — can energy ever vanish?",
          "Where does wasted energy from friction and sound always end up?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "A Sankey diagram for a petrol lawnmower shows a total energy input of 400 J and a useful kinetic energy output of 100 J. What is the efficiency of the lawnmower?",
        options: ["25%", "33%", "75%", "400%"],
        answerIndex: 0,
        explanation:
          "Efficiency = (useful output ÷ total input) × 100% = (100 ÷ 400) × 100% = 25%. Choosing 75% uses the wasted energy (300 J) by mistake, and 400% is impossible since efficiency cannot exceed 100%.",
        hints: [
          "Use Efficiency = (useful output ÷ total input) × 100%.",
          "Divide 100 J by 400 J, then multiply by 100.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "A desk lamp takes in 50 W of electrical power and dissipates 35 W to the thermal store of the room. What is its efficiency as a decimal?",
        options: ["0.15", "0.30", "0.70", "1.43"],
        answerIndex: 1,
        explanation:
          "First find the useful light power: 50 W − 35 W = 15 W. Then efficiency = 15 ÷ 50 = 0.30. Choosing 0.70 divides the wasted power (35 W) instead of the useful power.",
        hints: [
          "The 35 W given is WASTED power, not useful power.",
          "Subtract 35 W from 50 W to get the useful power, then divide by 50 W.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sankey-efficiency",
        question: "On a correctly drawn scale Sankey diagram, which measurement of an arrow represents the amount of energy transferred?",
        options: [
          "The horizontal length of the arrow shaft",
          "The angle at which the arrow bends downward",
          "The perpendicular width of the arrow shaft",
          "The area of the triangular arrowhead only",
        ],
        answerIndex: 2,
        explanation:
          "In a Sankey diagram, the **width (thickness)** of each arrow is strictly proportional to the energy or power it represents. Length and arrowhead area do not represent energy.",
        hints: [
          "Think about how the input arrow splits smoothly into useful and wasted branches.",
          "Which dimension must add up so that useful + wasted equals total input?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "A mechanic oils the rusty chain and wheel bearings of a bicycle. How does this change the bicycle's efficiency and why?",
        options: [
          "Efficiency decreases because oil absorbs kinetic energy",
          "Efficiency stays unchanged because mass stays constant",
          "Efficiency increases because gravity pulls less strongly",
          "Efficiency increases because lubrication reduces friction",
        ],
        answerIndex: 3,
        explanation:
          "Lubricating moving parts reduces friction between metal surfaces, so less energy is dissipated to the thermal store of the chain and surroundings, increasing the useful fraction.",
        hints: [
          "What unwanted force acts between rubbing metal parts in a chain?",
          "If less energy is wasted by heating, what happens to efficiency?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Why does copper conduct thermal energy much faster than glass?",
        options: [
          "Copper contains delocalised electrons that transfer kinetic energy rapidly",
          "Copper atoms are much further apart so convection flows between them",
          "Copper has a shiny outer surface that absorbs all infrared radiation",
          "Copper particles are completely stationary and never lose vibrational energy",
        ],
        answerIndex: 0,
        explanation:
          "Metals such as copper contain **delocalised (free) electrons** that move quickly through the metallic lattice, colliding with ions and transferring kinetic energy far faster than lattice vibrations alone.",
        hints: [
          "Conduction happens in solids, so rule out convection currents.",
          "What special mobile particles exist inside metals that glass does not have?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "During a convection current in a heated saucepan of water, why does the warm water at the bottom rise?",
        options: [
          "Water molecules become lighter when they are heated",
          "Warm water expands and becomes less dense than cooler water",
          "Boiling water pushes gravity downward away from the pan",
          "Warm water contracts and becomes denser than cooler water",
        ],
        answerIndex: 1,
        explanation:
          "Heating makes water particles move faster and spread slightly further apart, so the warm water expands. The same mass occupies a larger volume, decreasing its **density**, so it rises above cooler, denser water.",
        hints: [
          "Individual water molecules keep the exact same mass when heated.",
          "What happens to volume and density when particles spread further apart?",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Four identical metal cans filled with hot water at 95 °C are placed in a cool room. Which surface finish will cool down the **fastest** by infrared radiation?",
        options: [
          "Polished shiny silver",
          "Glossy bright white",
          "Dull matt black",
          "Mirrored chrome plating",
        ],
        answerIndex: 2,
        explanation:
          "A **dull matt black** surface is the best emitter (as well as the best absorber) of infrared radiation, so it radiates thermal energy away fastest and cools most quickly. Shiny silver is the poorest emitter.",
        hints: [
          "Cooling involves EMITTING infrared radiation to the surroundings.",
          "Remember: the best absorber of IR is also the best emitter of IR.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "work-power-resources",
        question: "A warehouse worker pushes a crate across a flat floor using a horizontal force of 60 N over a distance of 12 m. How much mechanical work is done?",
        options: ["5 J", "72 J", "120 J", "720 J"],
        answerIndex: 3,
        explanation:
          "Work done = force × distance = 60 N × 12 m = 720 J. Dividing 60 by 12 gives 5, which uses the formula backwards.",
        hints: [
          "Use the formula {{W = F * d}}.",
          "Multiply 60 N by 12 m.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "An electric motor transfers 3600 J of energy in 30 s. What is its power?",
        options: ["120 W", "180 W", "3630 W", "108 000 W"],
        answerIndex: 0,
        explanation:
          "Power = energy ÷ time = 3600 J ÷ 30 s = 120 W. Multiplying 3600 × 30 = 108 000 incorrectly multiplies energy and time instead of dividing.",
        hints: [
          "Power is the rate of energy transfer: {{P = E / t}}.",
          "Divide 3600 J by 30 s.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "work-power-resources",
        question: "Which row lists ONLY **renewable** energy resources?",
        options: [
          "Coal, geothermal and wind",
          "Solar, hydroelectric and wind",
          "Natural gas, nuclear and solar",
          "Nuclear, oil and biomass",
        ],
        answerIndex: 1,
        explanation:
          "Solar, hydroelectric and wind are all naturally replenished and will not run out. Coal, oil, natural gas and nuclear (uranium) are all non-renewable.",
        hints: [
          "Check every list for fossil fuels (coal, oil, natural gas) or nuclear fuel.",
          "Nuclear fuel (uranium) is finite, so any list containing nuclear is out.",
        ],
      },
      {
        id: "energy-and-efficiency-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "Which statement accurately describes **nuclear power**?",
        options: [
          "It is renewable and emits large amounts of carbon dioxide",
          "It is renewable and produces no hazardous waste products",
          "It is non-renewable and emits no carbon dioxide during operation",
          "It is non-renewable and depends completely on sunny weather",
        ],
        answerIndex: 2,
        explanation:
          "Nuclear power uses finite uranium fuel (so it is **non-renewable**), but nuclear fission does not burn carbon, so it emits **no {{CO_2}}** while generating reliable electricity.",
        hints: [
          "Does uranium replenish naturally on a human timescale?",
          "Is anything being burned (combusted) inside a nuclear reactor?",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Applied Calculations & Mechanisms (15 MCQs)
  // =========================================================================
  {
    id: "energy-and-efficiency-m2",
    title: "MCQ Paper 2 — Rearranging Formulas & Thermal Design",
    questions: [
      {
        id: "energy-and-efficiency-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "A stretched catapult launches a stone straight upward. Which sequence correctly describes the main **energy stores** from launch until the stone reaches its highest point?",
        options: [
          "Chemical store → thermal store → nuclear store",
          "Gravitational potential → elastic potential → kinetic",
          "Kinetic store → magnetic store → gravitational potential",
          "Elastic potential → kinetic → gravitational potential",
        ],
        answerIndex: 3,
        explanation:
          "Energy starts in the **elastic potential store** of the stretched band, transfers mechanically to the **kinetic store** as the stone accelerates, and transfers to the **gravitational potential store** as the stone rises and slows down.",
        hints: [
          "What store holds energy in a stretched rubber band before release?",
          "As the stone flies upward and slows down, kinetic energy shifts into which store?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "A pendulum bob is released from rest with 85 J in its gravitational potential store. At the bottom of its first swing, its kinetic store holds 72 J and its gravitational potential store is 0 J. What happened to the remaining 13 J?",
        options: [
          "It was dissipated to the thermal store of the air and pivot",
          "It remained hidden inside the nuclear store of the string",
          "It was destroyed by air resistance during the downward swing",
          "It turned into electrostatic charge on the metal pendulum bob",
        ],
        answerIndex: 0,
        explanation:
          "By conservation of energy, 85 J − 72 J = 13 J was transferred by mechanical work against air resistance and pivot friction, dissipating into the thermal store of the surroundings.",
        hints: [
          "Calculate 85 J − 72 J first.",
          "What forces oppose a swinging pendulum, and which store do they warm up?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "An electric kettle heats cold water from 25 °C to 100 °C. Which **pathway** carries energy from the wall socket to the heating element, and which **store** increases inside the water?",
        options: [
          "Mechanical working pathway → chemical store of the water",
          "Electrical working pathway → thermal store of the water",
          "Radiation pathway → elastic potential store of the water",
          "Heating pathway → nuclear store of the water",
        ],
        answerIndex: 1,
        explanation:
          "An electric current transfers energy to the heating element by **electrical working**, and the element heats the water, raising the water's **thermal store**.",
        hints: [
          "Which of the 4 pathways describes energy transferred by an electric current?",
          "Raising temperature increases which of the 8 energy stores?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "An electric heater takes in 2000 J electrically and transfers 1960 J to the thermal store of the room and 40 J as visible light from its glowing coils. If the heater's job is to warm the room, what is its efficiency?",
        options: ["2%", "50%", "98%", "102%"],
        answerIndex: 2,
        explanation:
          "For a heater, thermal energy transferred to the room is the **useful** output (1960 J). Efficiency = (1960 ÷ 2000) × 100% = 98%. Only the 40 J of unwanted light is wasted.",
        hints: [
          "Ask what the device is DESIGNED to do — thermal energy is useful for a heater!",
          "Divide 1960 J by 2000 J and multiply by 100%.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "A winch motor is 40% efficient and delivers 320 J of useful work lifting a stage backdrop. What was the total energy input to the motor?",
        options: ["128 J", "448 J", "533 J", "800 J"],
        answerIndex: 3,
        explanation:
          "Rearranging Efficiency = Useful ÷ Total gives Total = Useful ÷ Efficiency = 320 ÷ 0.40 = 800 J. Multiplying 320 × 0.40 = 128 J gives an input smaller than the useful output, which is physically impossible.",
        hints: [
          "Total input must be LARGER than the 320 J useful output.",
          "Convert 40% to 0.40 and calculate 320 ÷ 0.40.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "A small wind generator receives 2.5 kW of kinetic power from the wind and operates at an efficiency of 0.64. What is its useful electrical power output?",
        options: ["1.6 kW", "0.9 kW", "3.9 kW", "16.0 kW"],
        answerIndex: 0,
        explanation:
          "Useful power = efficiency × total input = 0.64 × 2.5 kW = 1.6 kW (or 1600 W). Notice that 0.9 kW is the wasted power (2.5 − 1.6), not the useful output.",
        hints: [
          "Rearrange Efficiency = Useful ÷ Total to Useful = Efficiency × Total.",
          "Calculate 0.64 × 2.5 kW.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sankey-efficiency",
        question: "On a grid-paper Sankey diagram, the input arrow is 10 squares wide and represents 500 J. The useful straight arrow is 6 squares wide, a downward thermal arrow is 3 squares wide, and a downward sound arrow is 1 square wide. How much thermal energy is wasted and what is the efficiency?",
        options: [
          "300 J wasted thermal; 40% efficiency",
          "150 J wasted thermal; 60% efficiency",
          "50 J wasted thermal; 60% efficiency",
          "200 J wasted thermal; 70% efficiency",
        ],
        answerIndex: 1,
        explanation:
          "Each square equals 500 J ÷ 10 = 50 J. The thermal waste arrow is 3 squares = 3 × 50 = 150 J. Useful output is 6 squares out of 10, so efficiency = 6 ÷ 10 = 60%.",
        hints: [
          "First find the energy value of 1 grid square: 500 J ÷ 10.",
          "Multiply by 3 squares for wasted thermal energy, and divide 6 by 10 for efficiency.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "In a vacuum flask, what is the specific purpose of the **vacuum** between the double glass walls?",
        options: [
          "It reflects infrared radiation back into the hot liquid",
          "It traps convection currents inside the hollow plastic stopper",
          "It prevents conduction and convection because there are no particles",
          "It stops all infrared radiation from passing through the glass",
        ],
        answerIndex: 2,
        explanation:
          "Conduction and convection both require particles (to vibrate or flow). A vacuum contains no particles, so it eliminates both mechanisms. Infrared radiation is reduced by the **silvered walls**, not the vacuum.",
        hints: [
          "Can electromagnetic waves (infrared radiation) pass through a vacuum?",
          "Which two heat-transfer mechanisms require matter/particles?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Why are air-conditioning units in Singapore classrooms mounted near the **ceiling** rather than near the floor?",
        options: [
          "Cold air is less dense and rises upward to cool the ceiling",
          "Metals in the ceiling conduct coldness downward by free electrons",
          "Infrared radiation can only travel downward from high walls",
          "Cold air is denser and sinks, displacing warmer air upward",
        ],
        answerIndex: 3,
        explanation:
          "Cooled air contracts, becomes **denser** than the surrounding warm air, and **sinks** down across the room. Warmer, less dense air rises toward the ceiling unit to be cooled, forming a room-wide convection current.",
        hints: [
          "Does cold air sink or rise compared with warm air?",
          "Trace the convection loop that cools the whole classroom evenly.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Why does filling the air gap inside a house's cavity wall with foam dramatically cut heat transfer compared with leaving an empty wide air gap?",
        options: [
          "Foam traps tiny pockets of air so convection currents cannot circulate",
          "Foam turns the air gap into a complete particle-free vacuum",
          "Foam contains free electrons that reflect all thermal vibrations",
          "Foam increases the density of the wall so heat rises out the roof",
        ],
        answerIndex: 0,
        explanation:
          "In a wide empty gap, air can circulate and transfer heat by **convection**. Foam traps millions of tiny air bubbles that cannot move (stopping convection), while air itself is a very poor conductor.",
        hints: [
          "What happens to air inside a wide gap when one side is hotter than the other?",
          "Air is a poor conductor, so why wasn't an open gap already enough?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Solar water-heating panels on rooftops are painted **matt black** rather than shiny silver. Why?",
        options: [
          "Matt black conducts heat faster than shiny copper metal",
          "Matt black is the best absorber of incoming infrared radiation",
          "Matt black prevents convection currents inside the water pipes",
          "Matt black reflects sunlight downward onto the roof tiles",
        ],
        answerIndex: 1,
        explanation:
          "Solar thermal panels need to absorb as much infrared radiation from the Sun as possible; **matt black** surfaces are the best absorbers of IR radiation, whereas shiny silver would reflect it away.",
        hints: [
          "How does energy reach rooftop panels from the Sun across space?",
          "Which surface colour and finish absorbs the highest fraction of IR waves?",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "A constant horizontal force does 900 J of mechanical work pulling a sled 15 m across snow. What is the size of the force?",
        options: ["15 N", "45 N", "60 N", "13 500 N"],
        answerIndex: 2,
        explanation:
          "Rearranging {{W = F * d}} gives {{F = W / d = 900 / 15 = 60}} N. Multiplying 900 × 15 = 13 500 rearranges the equation backwards.",
        hints: [
          "Rearrange {{W = F * d}} to make force {{F}} the subject.",
          "Divide 900 J by 15 m.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "A 1.5 kW electric kettle runs for 4.0 minutes. How much energy does it transfer?",
        options: ["6.0 kJ", "90 kJ", "240 kJ", "360 kJ"],
        answerIndex: 3,
        explanation:
          "Convert units first: {{P = 1.5 \"kW\" = 1500 \"W\"}} and {{t = 4.0 * 60 = 240 \"s\"}}. Then {{E = P * t = 1500 * 240 = 360 000 \"J\" = 360 \"kJ\"}}. Choosing 6.0 kJ forgot to convert minutes to seconds.",
        hints: [
          "Always convert minutes to seconds (4 × 60) and kW to W (1.5 × 1000).",
          "Use {{E = P * t}} and divide joules by 1000 for kilojoules.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "A building lift exerts an upward force of 4000 N to raise a load vertically by 12 m in 16 s. What is the useful power of the lift?",
        options: ["3.0 kW", "0.75 kW", "48 kW", "768 kW"],
        answerIndex: 0,
        explanation:
          "First find work done: {{W = 4000 * 12 = 48 000 \"J\"}}. Then divide by time: {{P = 48 000 / 16 = 3000 \"W\" = 3.0 \"kW\"}}.",
        hints: [
          "Step 1: calculate work done with {{W = F * d}}.",
          "Step 2: divide work done by 16 s to find watts, then divide by 1000 for kW.",
        ],
      },
      {
        id: "energy-and-efficiency-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "work-power-resources",
        question: "Which pairing correctly states a **major advantage** and a **major disadvantage** of hydroelectric power?",
        options: [
          "Advantage: works anywhere flat; Disadvantage: releases sulfur dioxide",
          "Advantage: reliable fast start-up; Disadvantage: floods valley habitats",
          "Advantage: needs no water supply; Disadvantage: produces radioactive waste",
          "Advantage: cheapest to build; Disadvantage: stops working at night",
        ],
        answerIndex: 1,
        explanation:
          "Hydroelectric dams can release water through turbines within seconds to meet peak demand reliably with zero {{CO_2}}, but building reservoirs floods large valleys and disrupts river ecosystems.",
        hints: [
          "Hydroelectric power uses water stored behind a dam in hilly terrain.",
          "Think about what happens to land upstream when a valley is dammed.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Stretch & Exam Mastery (15 MCQs)
  // =========================================================================
  {
    id: "energy-and-efficiency-m3",
    title: "MCQ Paper 3 — Multi-Step & Exam Mastery",
    questions: [
      {
        id: "energy-and-efficiency-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "A weightlifter holds a 1200 N barbell completely stationary 2.0 m above the floor for 5.0 seconds. How much **mechanical work** is done **on the barbell** during those 5.0 seconds?",
        options: ["240 J", "480 J", "0 J", "2400 J"],
        answerIndex: 2,
        explanation:
          "Mechanical work requires movement in the direction of the force ({{W = F * d}}). While held completely stationary, {{d = 0 \"m\"}}, so mechanical work done on the barbell is {{1200 * 0 = 0 \"J\"}} (though the lifter's muscles still transfer chemical to thermal energy internally).",
        hints: [
          "Read carefully: is the barbell moving during those 5.0 seconds?",
          "Substitute {{d = 0}} into {{W = F * d}}.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sankey-efficiency",
        question: "In a gas power station, the boiler transfers 80% of the fuel's chemical energy to steam, and the turbine-generator transfers 50% of the steam's energy into electrical output. What is the **overall efficiency** of the power station?",
        options: ["30%", "65%", "130%", "40%"],
        answerIndex: 3,
        explanation:
          "Chain efficiencies by multiplying decimals: {{0.80 * 0.50 = 0.40 = 40%}}. Averaging (65%) or subtracting (30%) is wrong: out of 100 J in, 80 J reaches the steam, and 50% of 80 J is 40 J out.",
        hints: [
          "Start with 100 J of fuel input and trace it through both stages.",
          "First find 80% of 100 J, then find 50% of THAT result.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stores-transfers-conservation",
        question: "A roller-coaster car starts from rest at Peak A (height 40 m) and coasts without an engine along a real track with friction. Why must Peak B later in the ride be **lower** than 40 m?",
        options: [
          "Friction dissipates some energy thermally, leaving less GPE available",
          "Gravity gets weaker after the first drop so mass decreases",
          "Kinetic energy cannot convert back into gravitational potential energy",
          "Air resistance destroys momentum and cancels out conservation of energy",
        ],
        answerIndex: 0,
        explanation:
          "Friction and air resistance continuously dissipate part of the initial GPE into the thermal store of the track and air, so the car never has enough remaining mechanical energy to climb back to 40 m.",
        hints: [
          "Can the car have MORE gravitational potential energy at Peak B than at Peak A?",
          "Where does some of the original mechanical energy go along a real track?",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sankey-efficiency",
        question: "An electric pump is 75% efficient. During one test, it dissipates 150 J of wasted thermal energy. What was its **useful** energy output?",
        options: ["200 J", "450 J", "600 J", "112.5 J"],
        answerIndex: 1,
        explanation:
          "If 75% is useful, then 25% is wasted. Since 25% = 150 J, total input = 150 ÷ 0.25 = 600 J, and useful output = 75% of 600 J = 450 J (or simply 3 × 150 J = 450 J). Choosing 600 J gives the total input rather than useful output.",
        hints: [
          "What percentage of the input energy is WASTED if efficiency is 75%?",
          "25% corresponds to 150 J; useful output is 75% (three times as much!).",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sankey-efficiency",
        question: "An 8 W LED bulb is 75% efficient. An old filament bulb gives the **exact same useful light power** as the LED, but is only 10% efficient. How much electrical input power does the filament bulb require?",
        options: ["10 W", "48 W", "60 W", "80 W"],
        answerIndex: 2,
        explanation:
          "Useful light power from the LED = 0.75 × 8 W = 6 W. For the filament bulb to emit 6 W at 10% (0.10) efficiency, total input = 6 ÷ 0.10 = 60 W — saving 52 W by switching to LED!",
        hints: [
          "First find the useful light power of the LED: 0.75 × 8 W.",
          "Now treat that useful power as 10% of the filament bulb's total input.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "A student tests four rods (copper, aluminium, iron, glass) of identical length and diameter using wax-stuck drawing pins at one end while heating the other end. Which variable is the **dependent variable**?",
        options: [
          "The material each rod is made from",
          "The diameter and length of each rod",
          "The distance from the Bunsen flame to the rods",
          "The time taken for each drawing pin to drop off",
        ],
        answerIndex: 3,
        explanation:
          "The material is the **independent variable** (changed deliberately), rod dimensions and flame position are **control variables**, and the **time taken for each pin to fall** is what you measure (the **dependent variable**).",
        hints: [
          "Dependent variable = what you MEASURE as the outcome.",
          "Length and flame distance must be kept the same to ensure a fair test.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "During a sunny afternoon on East Coast Beach, the sand heats up much faster than the sea. Which way does the **sea breeze** blow near ground level, and why?",
        options: [
          "From sea to land, as warm air over the sand rises and cool sea air flows in",
          "From land to sea, as hot sand pulls denser air downward toward the water",
          "From sea to land, as seawater conducts coldness horizontally through sand",
          "From land to sea, as infrared radiation blows air molecules offshore",
        ],
        answerIndex: 0,
        explanation:
          "Air above the hot sand heats up, expands, becomes less dense and **rises**. Cooler, denser air from over the sea flows inland at ground level to replace it, creating a sea breeze convection current.",
        hints: [
          "Where does air get warmer and less dense — over the hot sand or the cooler sea?",
          "When air rises over the land, which direction must surface air move to replace it?",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "thermal-transfer",
        question: "A Leslie cube (a hollow metal cube with matt black, shiny black, white and shiny silver vertical faces) is filled with boiling water. An infrared detector placed 10 cm from each face reads the highest value opposite the **matt black** face. What control variable is essential for a valid comparison?",
        options: [
          "Each face must be heated to a completely different temperature",
          "All four faces must be at the same temperature and same distance from the detector",
          "The cube must be made from four different insulating plastics",
          "The water must be stirred faster before testing the silver face only",
        ],
        answerIndex: 1,
        explanation:
          "To isolate surface colour/texture as the only independent variable, all four faces must share the same temperature (ensured by boiling water inside a conducting metal cube) and the detector must stay at the exact same distance.",
        hints: [
          "Rate of IR emission depends on both surface finish AND temperature/distance.",
          "Which quantities must stay identical when switching from one face to the next?",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Emergency foil blankets used after marathons are ultra-thin, shiny metallic sheets. How do they mainly reduce heat loss from an exhausted runner?",
        options: [
          "They are thick insulators packed with wool fibres to stop conduction",
          "They absorb cold wind and convert it into chemical energy",
          "They reflect the runner's infrared radiation back and block wind convection",
          "They create a permanent vacuum layer between the runner and the ground",
        ],
        answerIndex: 2,
        explanation:
          "Because the foil is very thin, its main insulating mechanisms are **reflecting emitted infrared radiation** back toward the body and forming an airtight barrier that reduces **convection** and evaporation.",
        hints: [
          "Think about the two properties of shiny plastic-backed metal foil: shiny AND windproof.",
          "Thin metal foil is NOT thick enough to trap foam bubbles or form a vacuum.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "thermal-transfer",
        question: "Why does placing a **shiny aluminium foil sheet** behind a home radiator on an external wall reduce heating bills?",
        options: [
          "Aluminium absorbs heat from outside air and conducts it inward",
          "Aluminium stops water from flowing inside the radiator pipes",
          "Aluminium eliminates convection currents rising above the radiator",
          "Aluminium reflects infrared radiation back into the room instead of heating the wall",
        ],
        answerIndex: 3,
        explanation:
          "A radiator emits infrared radiation in all directions, including toward the cold outside wall. Shiny foil reflects that IR back into the room, reducing thermal loss through the exterior wall.",
        hints: [
          "How does shiny metal interact with infrared waves striking it?",
          "Without foil, where does IR emitted from the back of the radiator go?",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "work-power-resources",
        question: "A crane lifts a 50 kg steel beam vertically by 18 m in 15 s (take {{g = 10 \"N/kg\"}}). If the crane's electric motor is 60% efficient, what electrical **input power** does it draw?",
        options: ["1000 W", "600 W", "360 W", "9000 W"],
        answerIndex: 0,
        explanation:
          "Weight = {{50 * 10 = 500 \"N\"}}. Useful work = {{500 * 18 = 9000 \"J\"}}. Useful power = {{9000 / 15 = 600 \"W\"}}. Since efficiency is 0.60, electrical input power = {{600 / 0.60 = 1000 \"W\"}}. Choosing 600 W stops at useful power; 360 W multiplies by 0.60 instead of dividing.",
        hints: [
          "First find the beam's weight ({{W = mg}}) and useful work done ({{F * d}}).",
          "Divide useful work by 15 s to get useful power.",
          "Finally divide useful power by 0.60 to find total electrical input power.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "work-power-resources",
        question: "A cyclist pedals at a steady speed of 6.0 m/s for 25 s against a constant total resistive force of 80 N. What is the cyclist's mechanical power output?",
        options: ["192 W", "480 W", "3000 W", "12 000 W"],
        answerIndex: 1,
        explanation:
          "Distance travelled = {{6.0 * 25 = 150 \"m\"}}. Work done = {{80 * 150 = 12 000 \"J\"}}. Power = {{12 000 / 25 = 480 \"W\"}} (notice the shortcut {{P = F * v = 80 * 6.0 = 480 \"W\"}}!). Choosing 12 000 W confuses work (J) with power (W).",
        hints: [
          "Find the distance travelled in 25 s at 6.0 m/s first.",
          "Calculate work done {{W = F * d}}, then divide by time {{t = 25 \"s\"}}.",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "work-power-resources",
        question: "Car A and Car B have the **exact same mass**, but Car B travels at **twice the speed** of Car A. Using {{E_k = 1/2 m v^2}}, how does Car B's kinetic energy compare with Car A's?",
        options: [
          "It is half as large",
          "It is twice as large",
          "It is four times as large",
          "It is eight times as large",
        ],
        answerIndex: 2,
        explanation:
          "Kinetic energy depends on speed **squared** ({{v^2}}). Doubling {{v}} multiplies {{v^2}} by {{2^2 = 4}}, so Car B has **four times** as much kinetic energy (which is also why braking distances quadruple when speed doubles!).",
        hints: [
          "Look at the exponent on speed {{v}} in {{E_k = 1/2 m v^2}}.",
          "What is {{(2v)^2}} compared with {{v^2}}?",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "work-power-resources",
        question: "A 3.0 kW rooftop solar array operates for 5.0 hours at an average output equal to 40% of its peak rating. How much electrical energy does it generate in total?",
        options: ["6.0 MJ", "12.0 MJ", "54.0 MJ", "21.6 MJ"],
        answerIndex: 3,
        explanation:
          "Average power = {{0.40 * 3000 \"W\" = 1200 \"W\"}}. Time in seconds = {{5.0 * 3600 = 18 000 \"s\"}}. Energy = {{1200 * 18 000 = 21 600 000 \"J\" = 21.6 \"MJ\"}}.",
        hints: [
          "First find the average power in watts: 40% of 3000 W.",
          "Convert 5.0 hours into seconds (5 × 60 × 60 = 18 000 s).",
          "Multiply watts by seconds and divide by 1 000 000 for megajoules (MJ).",
        ],
      },
      {
        id: "energy-and-efficiency-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "work-power-resources",
        question: "A national grid wants to replace coal power stations with solar and wind farms while still guaranteeing reliable electricity on calm nights. Which pairing best solves the intermittency problem?",
        options: [
          "Grid-scale batteries or pumped hydroelectric storage plus diverse renewable links",
          "Painting wind turbine blades matt black to generate electricity from moonlight",
          "Replacing all transmission cables with wood to reduce thermal conduction loss",
          "Running solar panels at 150% efficiency during midday to eliminate night demand",
        ],
        answerIndex: 0,
        explanation:
          "Because solar and wind are intermittent, pairing them with energy storage (grid batteries or pumped-storage hydro) and interconnected regional grids keeps supply balanced 24/7 without relying on coal.",
        hints: [
          "Think about how surplus daytime solar or windy-day energy can be saved for later.",
          "Check each option for physical impossibilities (like >100% efficiency or wooden cables).",
        ],
      },
    ],
  },
];
