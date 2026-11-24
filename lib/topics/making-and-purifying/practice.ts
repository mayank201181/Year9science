import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "making-and-purifying-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "making-soluble-salts",
      question:
        "Name the salt formed when dilute sulfuric acid reacts with magnesium oxide.",
      answer: {
        type: "text",
        accept: ["magnesium sulfate", "magnesium sulphate"],
        display: "magnesium sulfate",
      },
      traps: [
        {
          spec: { type: "text", accept: ["magnesium chloride"] },
          feedback:
            "Chlorides come from hydrochloric acid; sulfuric acid produces a **sulfate**.",
        },
        {
          spec: { type: "text", accept: ["magnesium nitrate"] },
          feedback:
            "Nitrates come from nitric acid; sulfuric acid produces a **sulfate**.",
        },
      ],
      solution: [
        "Take the metal name from magnesium oxide: **magnesium**.",
        "Sulfuric acid always forms **sulfate** salts.",
        "Word equation: sulfuric acid + magnesium oxide → **magnesium sulfate** + water.",
      ],
      hints: [
        "Use the metal from the oxide and the salt ending for sulfuric acid.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "purity-formulations",
      question:
        "Which melting-point observation proves that a solid sample is **impure**?",
      options: [
        "It melts completely at a single sharp temperature of 80 °C",
        "It stays solid at room temperature and conducts no electricity",
        "It softens at 72 °C and finishes melting at 77 °C",
        "It forms regular transparent crystals when cooled slowly",
      ],
      answerIndex: 2,
      explanation:
        "Impurities lower the melting point and cause a solid to melt over a **temperature range** (72–77 °C). A pure solid melts at one sharp, fixed temperature.",
      hints: [
        "Compare the melting behaviour of a pure substance with that of a mixture.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "distillation-chromatography",
      question:
        "On a paper chromatogram, a yellow dye spot moves **4.5 cm** from the pencil baseline and the solvent front moves **9.0 cm** from the baseline. Calculate the {{R_f}} value of the yellow dye.",
      answer: { type: "number", value: 0.5, display: "0.5" },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback:
            "You divided upside down! Remember Rf = spot distance ÷ solvent distance, so it must be less than 1.",
        },
      ],
      solution: [
        "Use the formula: {{R_f = " + '"distance moved by spot" / "distance moved by solvent"' + "}}.",
        "Substitute the values: {{R_f = 4.5 / 9.0 = 0.5}}.",
        "Rf has no units and lies between 0 and 1.",
      ],
      hints: [
        "Recall the retention factor formula: spot distance divided by solvent front distance.",
        "Compute 4.5 ÷ 9.0.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "chemical-gas-tests",
      question:
        "A colourless gas burns with a **squeaky pop** when tested with a lit wooden splint. Name the gas.",
      answer: {
        type: "text",
        accept: ["hydrogen", "h2", "hydrogen gas"],
        display: "hydrogen",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxygen", "o2"] },
          feedback:
            "Oxygen relights a glowing splint; a squeaky pop with a lit splint identifies **hydrogen**.",
        },
      ],
      solution: [
        "Hydrogen gas ignites explosively in air when touched by a lit splint, producing a squeaky pop ({{2H_2 + O_2 -> 2H_2O}}).",
      ],
      hints: [
        "Which gas ignites with a tiny explosion when a burning splint is placed at the tube mouth?",
      ],
    },
    {
      id: "making-and-purifying-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "making-soluble-salts",
      question:
        "Which acid and insoluble base pair should you react to prepare **zinc nitrate** crystals?",
      options: [
        "Nitric acid and zinc oxide",
        "Hydrochloric acid and zinc oxide",
        "Sulfuric acid and zinc carbonate",
        "Nitric acid and copper(II) oxide",
      ],
      answerIndex: 0,
      explanation:
        "**Zinc nitrate** requires **zinc** (from zinc oxide) and **nitric acid** (which produces nitrate salts). Copper(II) oxide would produce copper(II) nitrate.",
      hints: [
        "Match the metal 'zinc' and the ending 'nitrate' to the starting reactants.",
        "Nitrate salts always come from nitric acid.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "purity-formulations",
      question:
        "What single scientific word describes a mixture that has been carefully designed with measured proportions as a useful product (such as paint or a medicinal tablet)?",
      answer: {
        type: "text",
        accept: ["formulation", "a formulation"],
        display: "formulation",
      },
      solution: [
        "A **formulation** is a designed mixture in which every component is added in a carefully measured quantity to give exact desired properties.",
      ],
      hints: [
        "Think of the specific Year 9 chemistry term for an engineered mixture like medicines, alloys, or paints.",
        "It starts with the letter 'f'.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "distillation-chromatography",
      question:
        "Which separation technique recovers pure drinking water from salty seawater in a single step?",
      options: [
        "Filtration through fluted paper",
        "Simple distillation with a condenser",
        "Paper chromatography in a beaker",
        "Evaporation to complete dryness",
      ],
      answerIndex: 1,
      explanation:
        "**Simple distillation** boils off water vapour and condenses it back into pure liquid distillate inside a Liebig condenser, leaving solid salt behind. Evaporation alone loses the water steam to the room.",
      hints: [
        "You want to collect the liquid solvent, not just keep the solid salt.",
        "Which apparatus evaporates a solvent and then condenses the vapour back into liquid?",
      ],
    },
    {
      id: "making-and-purifying-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "chemical-gas-tests",
      question:
        "What happens when carbon dioxide gas is bubbled through clear **limewater**?",
      options: [
        "The limewater turns dark blue immediately",
        "The limewater catches fire with a bright pop",
        "The limewater bleaches completely colourless",
        "The limewater turns milky or cloudy white",
      ],
      answerIndex: 3,
      explanation:
        "Carbon dioxide reacts with aqueous calcium hydroxide (limewater) to form an insoluble white precipitate of **calcium carbonate**, making the solution turn **milky/cloudy white**.",
      hints: [
        "Think about the insoluble white solid formed when CO₂ reacts with calcium hydroxide solution.",
        "Recall the visual appearance of suspended chalk particles in water.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "making-soluble-salts",
      marks: 2,
      question:
        "Explain why an insoluble metal oxide must be added in excess and then filtered when preparing pure copper(II) sulfate crystals.",
      modelAnswer:
        "Adding more than enough solid guarantees that all the acid reacts completely and is fully neutralised, leaving no leftover acid. Filtration then removes the unreacted solid residue so only the clean salt solution passes through as the filtrate.",
      markScheme: [
        {
          point: "Ensures all the acid reacts completely / is fully neutralised",
          keywords: [
            "all the acid",
            "neutralis",
            "reacts completely",
            "no leftover acid",
            "use up all",
          ],
        },
        {
          point:
            "Removes the unreacted solid residue so only the salt solution (filtrate) remains",
          keywords: ["unreacted", "residue", "filtrate", "salt solution"],
        },
      ],
      hints: [
        "Give one reason for adding excess solid and a second reason for the filtration step.",
        "Think about what would happen if leftover acid stayed in the beaker versus leftover insoluble solid.",
      ],
    },
    {
      id: "making-and-purifying-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "chemical-gas-tests",
      marks: 2,
      question:
        "State how to test an unknown gas for chlorine and describe what a positive observation looks like.",
      modelAnswer:
        "Hold a strip of damp blue litmus paper inside the test tube of gas (in a fume cupboard). If chlorine is present, the litmus paper turns red first and then bleaches white.",
      markScheme: [
        {
          point: "Use damp blue litmus paper",
          keywords: ["damp", "moist", "wet", "litmus"],
        },
        {
          point: "Turns red and then bleaches white",
          keywords: ["bleach", "white"],
        },
      ],
      hints: [
        "Remember to specify the exact indicator paper and whether it must be dry or damp.",
        "Mention the final colour change caused by chlorine's bleaching action.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER P1 — Core Applications & Structured Skills
    // -----------------------------------------------------------------------
    {
      id: "making-and-purifying-p1",
      title: "Practice Paper 1: Salts, Purity & Separation Methods",
      questions: [
        {
          id: "making-and-purifying-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "making-soluble-salts",
          question:
            "Name the salt formed when dilute hydrochloric acid reacts with calcium carbonate.",
          answer: {
            type: "text",
            accept: ["calcium chloride"],
            display: "calcium chloride",
          },
          solution: [
            "Metal from calcium carbonate = **calcium**.",
            "Acid = hydrochloric acid → salt ending is **chloride**.",
            "Salt produced = **calcium chloride** (plus water and carbon dioxide).",
          ],
          hints: [
            "Combine the metal name with the chloride/sulfate/nitrate ending from hydrochloric acid.",
          ],
        },
        {
          id: "making-and-purifying-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "making-soluble-salts",
          question:
            "Name the gas released when zinc metal reacts with dilute sulfuric acid.",
          answer: {
            type: "text",
            accept: ["hydrogen", "h2", "hydrogen gas"],
            display: "hydrogen",
          },
          traps: [
            {
              spec: { type: "text", accept: ["carbon dioxide", "co2"] },
              feedback:
                "Carbon dioxide is released by metal carbonates; a reactive metal + acid releases **hydrogen**.",
            },
          ],
          solution: [
            "General equation: reactive metal + acid → salt + **hydrogen**.",
            "Zinc + sulfuric acid → zinc sulfate + **hydrogen**.",
          ],
          hints: [
            "Recall the general word equation for acid + reactive metal.",
          ],
        },
        {
          id: "making-and-purifying-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "In paper chromatography, a purple dye spot moves **5.4 cm** and the solvent front moves **9.0 cm** from the pencil baseline. Calculate its {{R_f}} value.",
          answer: { type: "number", value: 0.6, display: "0.6" },
          traps: [
            {
              spec: { type: "number", value: 1.67, tolerance: 0.02 },
              feedback:
                "You divided solvent distance by spot distance! Always divide spot distance by solvent front distance.",
            },
          ],
          solution: [
            "{{R_f = " + '"distance moved by spot" / "distance moved by solvent"' + "}}.",
            "{{R_f = 5.4 / 9.0 = 0.6}} (no units).",
          ],
          hints: [
            "Divide the spot distance by the solvent front distance.",
            "Calculate 5.4 ÷ 9.0.",
          ],
        },
        {
          id: "making-and-purifying-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "A green ink has an {{R_f}} value of **0.35** in water. If the solvent front moves **12.0 cm** from the pencil baseline, how many centimetres does the green ink spot move?",
          answer: { type: "number", value: 4.2, display: "4.2 cm" },
          solution: [
            "Rearrange {{R_f = d_{spot} / d_{solvent}}} to get {{d_{spot} = R_f * d_{solvent}}}.",
            "{{d_{spot} = 0.35 * 12.0 = 4.2}} cm.",
          ],
          hints: [
            "Rearrange the Rf equation to solve for distance moved by spot.",
            "Multiply 0.35 by 12.0.",
          ],
        },
        {
          id: "making-and-purifying-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "purity-formulations",
          question:
            "An impure sample of naphthalene begins melting at **73 °C** and finishes melting at **79 °C**. Calculate the width of its melting temperature range (in °C).",
          answer: { type: "number", value: 6, display: "6 °C" },
          solution: [
            "Melting range width = finishing temperature − starting temperature.",
            "{{79 - 73 = 6}} °C.",
          ],
          hints: [
            "Find the difference between the temperature where melting ends and where it starts.",
            "Subtract 73 from 79.",
          ],
        },
        {
          id: "making-and-purifying-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "purity-formulations",
          question:
            "A **600 mg** analgesic tablet formulation contains **450 mg** of active drug, **120 mg** of binder, and **30 mg** of coating. Calculate the percentage by mass of the active drug.",
          answer: { type: "number", value: 75, display: "75%" },
          solution: [
            "Percentage by mass = {{(" + '"mass of active drug" / "total mass"' + ") * 100}}.",
            "{{(450 / 600) * 100 = 0.75 * 100 = 75}}%.",
          ],
          hints: [
            "Divide the mass of active drug by the total tablet mass.",
            "Multiply 450 ÷ 600 by 100.",
          ],
        },
        {
          id: "making-and-purifying-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "chemical-gas-tests",
          question:
            "Name the clear solution used to test for carbon dioxide gas.",
          answer: {
            type: "text",
            accept: ["limewater", "lime water", "calcium hydroxide", "calcium hydroxide solution"],
            display: "limewater",
          },
          solution: [
            "**Limewater** (aqueous calcium hydroxide, {{Ca(OH)_2}}) turns milky/cloudy white when carbon dioxide is bubbled through it.",
          ],
          hints: [
            "It is an aqueous solution of calcium hydroxide with a one-word common lab name.",
          ],
        },
        {
          id: "making-and-purifying-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "In paper chromatography, what scientific term describes the **moving solvent** that carries dissolved dyes up the paper?",
          answer: {
            type: "text",
            accept: ["mobile phase", "the mobile phase"],
            display: "mobile phase",
          },
          traps: [
            {
              spec: { type: "text", accept: ["stationary phase", "the stationary phase"] },
              feedback:
                "The stationary phase is the paper that stays still; the moving solvent is the **mobile phase**.",
            },
          ],
          solution: [
            "Paper chromatography has two phases: the **stationary phase** (water trapped in the paper) and the **mobile phase** (the moving solvent).",
          ],
          hints: [
            "Chromatography uses two named 'phases': one stays still and one moves.",
            "Think of the word meaning 'able to move'.",
          ],
        },
        {
          id: "making-and-purifying-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "making-soluble-salts",
          question:
            "Why should a hot saturated salt solution be left to **cool slowly** after gentle evaporation rather than boiled fiercely until no water remains?",
          options: [
            "Cooling slowly allows large hydrated crystals to form cleanly",
            "Boiling dry converts every metal salt into pure oxygen gas",
            "Cooling slowly raises the solubility so no solid can form",
            "Boiling dry lowers the melting point of the glass basin",
          ],
          answerIndex: 0,
          explanation:
            "Slow cooling lets ions arrange orderly into large, pure hydrated crystals without spitting or driving off water of crystallisation. Solubility decreases as temperature drops.",
          hints: [
            "Compare the crystal quality and safety of slow cooling versus boiling completely dry.",
            "Remember what happens to hydrated crystals when roasted dry.",
          ],
        },
        {
          id: "making-and-purifying-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "A chromatogram of a food colouring shows **three** separate spots above the pencil baseline. What does this observation prove?",
          options: [
            "The food colouring is a single chemically pure compound",
            "The food colouring is a mixture of at least three dyes",
            "The solvent front failed to rise past the pencil baseline",
            "All three dyes were completely insoluble in the solvent",
          ],
          answerIndex: 1,
          explanation:
            "Each spot represents a separated substance, so **three spots** prove the colouring is a **mixture of at least three dyes** (there could even be more if two overlapped).",
          hints: [
            "How many spots does a pure substance produce on a chromatogram?",
            "Could two dyes still overlap inside one of those three spots?",
          ],
        },
        {
          id: "making-and-purifying-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "purity-formulations",
          question:
            "Which substance in the list below is a **chemically pure substance** rather than a formulation or everyday mixture?",
          options: [
            "Freshly squeezed apple juice",
            "Stainless steel cutlery alloy",
            "Pure liquid distilled water",
            "Unleaded petrol motor fuel",
          ],
          answerIndex: 2,
          explanation:
            "Pure distilled water consists of only a single compound ({{H_2O}}). Apple juice, stainless steel, and unleaded petrol are all mixtures (steel and petrol are formulations).",
          hints: [
            "Check which choice contains only ONE single compound.",
            "Alloys and fuels are carefully engineered mixtures.",
          ],
        },
        {
          id: "making-and-purifying-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "chemical-gas-tests",
          question:
            "Which safety precaution is specifically essential when generating and testing **chlorine** gas in a school laboratory?",
          options: [
            "Keep a roaring Bunsen flame right beside the tube mouth",
            "Use completely bone-dry blue litmus paper without water",
            "Inhale gently above the test tube to detect its green colour",
            "Carry out the entire reaction and test inside a fume cupboard",
          ],
          answerIndex: 3,
          explanation:
            "Chlorine is a **toxic**, irritating gas that damages the lungs, so any experiment generating or testing chlorine must be performed inside a working **fume cupboard**.",
          hints: [
            "Think about the specific chemical hazard symbol on a cylinder of chlorine gas.",
            "Where do chemists handle toxic gases safely?",
          ],
        },
        {
          id: "making-and-purifying-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "purity-formulations",
          marks: 3,
          question:
            "Describe how a heating curve can distinguish a sample of pure stearic acid from an impure sample containing wax.",
          modelAnswer:
            "Pure stearic acid melts at a single sharp fixed temperature, producing a completely flat horizontal plateau on the graph. The impure mixture melts at a lower temperature and melts over a broad range of temperatures, producing a sloped line instead of a flat plateau.",
          markScheme: [
            {
              point:
                "Pure stearic acid melts at a sharp/fixed temperature (flat horizontal plateau)",
              keywords: ["sharp", "fixed", "plateau", "horizontal", "flat"],
            },
            {
              point: "Impure mixture melts at a lower temperature",
              keywords: ["lower", "below", "drop", "decrease"],
            },
            {
              point:
                "Impure mixture melts over a range of temperatures (sloped line)",
              keywords: ["range", "slop", "broad", "spread"],
            },
          ],
          hints: [
            "Describe the shape of the melting section for a pure solid first.",
            "Then state BOTH ways impurities alter the melting section (temperature value and shape/spread).",
          ],
        },
        {
          id: "making-and-purifying-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          marks: 3,
          question:
            "Give three precautions needed when setting up paper chromatography to investigate food dyes, and explain one reason for each.",
          modelAnswer:
            "1. Draw the starting baseline in pencil because graphite is insoluble and will not run up the strip. 2. Keep the solvent level below the baseline so the spots do not wash straight into the beaker. 3. Place a lid on the beaker to stop volatile solvent from evaporating (and mark the solvent front before it reaches the top edge).",
          markScheme: [
            {
              point:
                "Draw baseline in pencil because graphite is insoluble and will not run",
              keywords: ["pencil", "graphite"],
            },
            {
              point:
                "Keep solvent level below the baseline so spots do not wash into the beaker",
              keywords: ["below", "underneath", "wash into"],
            },
            {
              point:
                "Use a lid to prevent evaporation OR stop before solvent front reaches top edge",
              keywords: ["lid", "evaporat", "solvent front", "top edge"],
            },
          ],
          hints: [
            "Think about what writing tool you use for the baseline.",
            "Check where the liquid level must sit relative to the spots.",
            "Think about preventing solvent evaporation or marking the solvent front.",
          ],
        },
        {
          id: "making-and-purifying-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "chemical-gas-tests",
          marks: 3,
          question:
            "Two bottles of colourless gases contain oxygen and carbon dioxide. Describe the laboratory tests and positive results to identify both gases.",
          modelAnswer:
            "Insert a glowing wooden splint into the tube; oxygen causes the glowing splint to relight into a flame. Bubble the other gas through clear limewater; carbon dioxide turns the limewater milky and cloudy white.",
          markScheme: [
            {
              point: "Insert a glowing splint",
              keywords: ["glowing"],
            },
            {
              point: "Oxygen relights the glowing splint",
              keywords: ["relight", "re-light", "bursts into flame"],
            },
            {
              point: "Bubble through limewater, which turns milky/cloudy white",
              keywords: ["limewater", "milky", "cloudy"],
            },
          ],
          hints: [
            "Remember the exact state of the splint needed for oxygen.",
            "Name the reagent and colour/appearance change for carbon dioxide.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER P2 — Applied Calculations, Diagnostics & Extended Writing
    // -----------------------------------------------------------------------
    {
      id: "making-and-purifying-p2",
      title: "Practice Paper 2: Applied Chromatography, Equations & Methods",
      questions: [
        {
          id: "making-and-purifying-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "making-soluble-salts",
          question:
            "Name the salt produced when dilute nitric acid reacts with insoluble copper(II) oxide.",
          answer: {
            type: "text",
            accept: ["copper(ii) nitrate", "copper nitrate", "copper (ii) nitrate", "copper 2 nitrate"],
            display: "copper(II) nitrate",
          },
          solution: [
            "Metal from copper(II) oxide = **copper(II)**.",
            "Nitric acid forms **nitrate** salts.",
            "Salt produced = **copper(II) nitrate** (plus water).",
          ],
          hints: [
            "Match the metal from the oxide with the salt ending from nitric acid.",
          ],
        },
        {
          id: "making-and-purifying-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "making-soluble-salts",
          question:
            "Name the ONLY other product besides magnesium chloride when dilute hydrochloric acid neutralises solid magnesium hydroxide.",
          answer: {
            type: "text",
            accept: ["water", "h2o"],
            display: "water",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hydrogen", "h2"] },
              feedback:
                "Metal + acid makes hydrogen, but metal **hydroxide** + acid is a neutralisation producing salt + **water**.",
            },
          ],
          solution: [
            "Acid + metal hydroxide → salt + **water**.",
            "Hydrochloric acid + magnesium hydroxide → magnesium chloride + **water**.",
          ],
          hints: [
            "Check the general word equation for acid + metal hydroxide.",
            "Is any gas released when an acid reacts with a metal hydroxide?",
          ],
        },
        {
          id: "making-and-purifying-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "A blue ink spot has {{R_f = 0.40}}. On a chromatogram, the spot travels **3.2 cm** from the pencil baseline. How far (in cm) did the **solvent front** travel?",
          answer: { type: "number", value: 8, display: "8 cm" },
          traps: [
            {
              spec: { type: "number", value: 1.28 },
              feedback:
                "You multiplied instead of dividing! The solvent front always travels FURTHER than the spot.",
            },
          ],
          solution: [
            "Start with {{R_f = d_{spot} / d_{solvent}}}.",
            "Rearrange for solvent front distance: {{d_{solvent} = d_{spot} / R_f}}.",
            "{{d_{solvent} = 3.2 / 0.40 = 8.0}} cm.",
          ],
          hints: [
            "Should the solvent front distance be larger or smaller than 3.2 cm?",
            "Rearrange Rf = spot ÷ solvent to find solvent = spot ÷ Rf.",
          ],
        },
        {
          id: "making-and-purifying-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "A chromatogram has its pencil baseline drawn **1.5 cm** above the bottom edge of the paper. Measuring from the bottom edge of the paper, a red spot sits at **6.3 cm** and the solvent front sits at **9.5 cm**. Calculate the true {{R_f}} value.",
          answer: { type: "number", value: 0.6, display: "0.6" },
          traps: [
            {
              spec: { type: "number", value: 0.66, tolerance: 0.01 },
              feedback:
                "You forgot to subtract the 1.5 cm margin below the pencil baseline from both measurements!",
            },
          ],
          solution: [
            "Subtract 1.5 cm from both readings so distances start at the pencil baseline.",
            "True spot distance = {{6.3 - 1.5 = 4.8}} cm.",
            "True solvent distance = {{9.5 - 1.5 = 8.0}} cm.",
            "{{R_f = 4.8 / 8.0 = 0.6}}.",
          ],
          hints: [
            "Both distances in the Rf formula must be measured from the pencil baseline, not the bottom edge.",
            "Subtract 1.5 cm from 6.3 cm and from 9.5 cm first, then divide.",
          ],
        },
        {
          id: "making-and-purifying-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "purity-formulations",
          question:
            "A 200 g tin of paint formulation contains 90 g of solvent, 60 g of binder, 40 g of pigment, and the rest is anti-mould additives. What percentage by mass is **anti-mould additives**?",
          answer: { type: "number", value: 5, display: "5%" },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback:
                "10 g is the mass of additives, not the percentage! Divide 10 g by the total 200 g and multiply by 100.",
            },
          ],
          solution: [
            "Mass of additives = {{200 - (90 + 60 + 40) = 200 - 190 = 10}} g.",
            "Percentage by mass = {{(10 / 200) * 100 = 5}}%.",
          ],
          hints: [
            "First subtract the masses of solvent, binder and pigment from 200 g to find the mass of additives.",
            "Convert that mass into a percentage of 200 g.",
          ],
        },
        {
          id: "making-and-purifying-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "A liquid mixture contains **methanol** (boiling point 65 °C), **ethanol** (boiling point 78 °C), and **water** (boiling point 100 °C). Which liquid distils over **first** during fractional distillation?",
          answer: {
            type: "text",
            accept: ["methanol"],
            display: "methanol",
          },
          solution: [
            "During fractional distillation, the liquid with the **lowest boiling point** evaporates first and reaches the top of the column first.",
            "65 °C < 78 °C < 100 °C, so **methanol** distils over first.",
          ],
          hints: [
            "Compare the three boiling points: 65 °C, 78 °C, and 100 °C.",
            "The lowest boiling point liquid leaves the fractionating column first.",
          ],
        },
        {
          id: "making-and-purifying-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "chemical-gas-tests",
          question:
            "A reaction releases a gas that turns **damp blue litmus paper red and then white**. Name the gas.",
          answer: {
            type: "text",
            accept: ["chlorine", "cl2", "chlorine gas"],
            display: "chlorine",
          },
          solution: [
            "**Chlorine** ({{Cl_2}}) dissolves in water on damp blue litmus paper to form acidic HCl (turning it red) and bleaching HClO (bleaching it white).",
          ],
          hints: [
            "Only one of the four Year 9 gases bleaches damp litmus paper white.",
            "Remember the mnemonic: H-Pop, O-Glow, C-Lime, Cl-Bleach.",
          ],
        },
        {
          id: "making-and-purifying-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "making-soluble-salts",
          question:
            "During filtration of excess copper(II) oxide from blue copper(II) sulfate solution, what is the scientific term for the clear blue liquid collected inside the conical flask?",
          answer: {
            type: "text",
            accept: ["filtrate", "the filtrate"],
            display: "filtrate",
          },
          traps: [
            {
              spec: { type: "text", accept: ["residue", "the residue"] },
              feedback:
                "The residue is the insoluble solid trapped in the filter paper; the liquid passing through is the **filtrate**.",
            },
          ],
          solution: [
            "The liquid that passes through filter paper into the conical flask is called the **filtrate**.",
          ],
          hints: [
            "Distinguish between the word for solid left behind and liquid passing through.",
            "The liquid that passes through the filter shares its root with the word 'filter'.",
          ],
        },
        {
          id: "making-and-purifying-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "purity-formulations",
          question:
            "Pure aspirin melts at 136.0 °C. A factory tests four batches of aspirin tablets:\n- Batch 1: melts 135.9–136.1 °C\n- Batch 2: melts 126–133 °C\n- Batch 3: melts 131–135 °C\n- Batch 4: melts 118–129 °C\nWhich batch is the **purest** aspirin?",
          options: [
            "Batch 4 because it melts at the lowest temperature",
            "Batch 1 because it melts sharply right at 136 °C",
            "Batch 2 because its melting range is 7 °C wide",
            "Batch 3 because its top melting value is 135 °C",
          ],
          answerIndex: 1,
          explanation:
            "The purest sample melts closest to the pure literature value of 136.0 °C over the narrowest temperature range. Batch 1 has a tiny 0.2 °C range centred right on 136.0 °C.",
          hints: [
            "Pure substances have the sharpest (narrowest) melting range right at the true melting point.",
            "Compare both the melting range width and closeness to 136.0 °C.",
          ],
        },
        {
          id: "making-and-purifying-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          question:
            "Why does placing a **lid** on top of a chromatography beaker improve accuracy when using volatile ethanol as the solvent?",
          options: [
            "It prevents ethanol evaporating from the rising paper strip",
            "It increases the mass of the dye spots on the baseline",
            "It turns the stationary phase into a liquid mobile phase",
            "It stops graphite pencil lines from dissolving into ethanol",
          ],
          answerIndex: 0,
          explanation:
            "A lid traps ethanol vapour inside the beaker so the air becomes saturated, preventing ethanol from **evaporating** off the paper surface before reaching the top — ensuring steady solvent movement and accurate {{R_f}} values.",
          hints: [
            "Ethanol evaporates very quickly in open air (it is volatile).",
            "Think about what happens to the solvent on the paper if the beaker is left uncovered.",
          ],
        },
        {
          id: "making-and-purifying-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "making-soluble-salts",
          question:
            "Which observation shows that **acid + magnesium carbonate** has reached completion when making magnesium chloride?",
          options: [
            "The colourless solution turns dark black immediately",
            "The thermometer drops rapidly down to 0 °C",
            "Fizzing stops and unreacted white solid sits at the bottom",
            "Thick white steam stops leaving the open Liebig condenser",
          ],
          answerIndex: 2,
          explanation:
            "Magnesium carbonate releases CO₂ bubbles while acid is present. When all acid is used up, **effervescence (fizzing) stops** and excess unreacted white carbonate remains undissolved at the bottom.",
          hints: [
            "What two visual signs show that a carbonate is still reacting versus finished reacting?",
            "Remember carbonates produce CO₂ bubbles until all the acid is consumed.",
          ],
        },
        {
          id: "making-and-purifying-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "chemical-gas-tests",
          question:
            "A student inserts a **glowing** splint into a test tube of hydrogen gas by mistake. What is the main flaw with this test?",
          options: [
            "A glowing splint is too cool to ignite hydrogen reliably",
            "Hydrogen turns a glowing splint immediately milky white",
            "Glowing splints only work inside cold water baths",
            "Hydrogen bleaches the wooden splint completely white",
          ],
          answerIndex: 0,
          explanation:
            "Testing for hydrogen requires a **lit (flaming) splint** to ignite the gas and produce the squeaky pop. A glowing ember is for **oxygen** (where it relights), not hydrogen.",
          hints: [
            "Check the exact difference between the splint used for hydrogen vs oxygen.",
            "Does hydrogen need a flame or just a glowing ember to ignite with a squeaky pop?",
          ],
        },
        {
          id: "making-and-purifying-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "distillation-chromatography",
          marks: 3,
          question:
            "Explain why fractional distillation is needed instead of simple distillation to separate ethanol (b.p. 78 °C) and water (b.p. 100 °C), stating which liquid is collected first.",
          modelAnswer:
            "Ethanol and water are miscible liquids with close boiling points, so simple distillation would allow both vapours to mix together. A fractionating column packed with glass beads creates a temperature gradient so higher-boiling vapour condenses back into the flask, while lower-boiling ethanol reaches the top and distils over ahead of water.",
          markScheme: [
            {
              point:
                "Both liquids are miscible and have close/similar boiling points",
              keywords: ["miscible", "close", "similar", "mix completely"],
            },
            {
              point:
                "Fractionating column (glass beads) creates a temperature gradient so higher-boiling vapour condenses back down",
              keywords: ["column", "bead", "gradient", "condenses back"],
            },
            {
              point:
                "Lower-boiling ethanol evaporates more easily and reaches the top/condenser ahead of water",
              keywords: [
                "lower boiling",
                "evaporates more easily",
                "reaches the top",
              ],
            },
          ],
          hints: [
            "State what makes ethanol and water harder to separate than salt and water.",
            "Explain the role of the fractionating column and glass beads.",
            "Identify which liquid has the lower boiling point and reaches the top first.",
          ],
        },
        {
          id: "making-and-purifying-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "purity-formulations",
          marks: 3,
          question:
            "Define the term 'formulation' and explain the roles of two different components inside a tin of household wall paint.",
          modelAnswer:
            "A formulation is a designed mixture made with carefully measured proportions of substances as a useful product. In paint, the pigment gives the desired colour, while the binder forms a tough dry film that adheres to the surface (and the solvent helps it spread smoothly before evaporating).",
          markScheme: [
            {
              point:
                "Designed mixture with carefully measured proportions for a specific useful purpose",
              keywords: ["designed mixture", "measured", "useful product"],
            },
            {
              point: "Pigment provides colour",
              keywords: ["pigment", "colour", "color"],
            },
            {
              point:
                "Binder holds the dry film OR solvent helps it spread and evaporates",
              keywords: ["binder", "solvent", "resin", "spread", "film"],
            },
          ],
          hints: [
            "Start with the two-part definition: designed mixture + measured quantities.",
            "Name two paint ingredients (such as pigment, binder, or solvent) and state each job.",
          ],
        },
        {
          id: "making-and-purifying-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "making-soluble-salts",
          marks: 4,
          question:
            "Outline a complete method to make dry crystals of magnesium sulfate starting from dilute sulfuric acid and insoluble magnesium carbonate powder.",
          modelAnswer:
            "Warm the acid gently and stir in solid powder in excess until fizzing stops and unreacted solid sits at the bottom. Filter the mixture through a funnel to remove the solid residue and collect the clear filtrate. Evaporate the filtrate gently over a water bath until the crystallisation point is reached. Leave the solution to cool slowly so crystals grow, then filter and pat them gently between sheets of filter paper.",
          markScheme: [
            {
              point:
                "Add the carbonate in excess until fizzing stops and unreacted solid remains",
              keywords: ["excess", "unreacted", "fizzing stops"],
            },
            {
              point:
                "Filter to remove excess solid residue and keep the filtrate",
              keywords: ["filter", "filtration", "filtrate", "residue"],
            },
            {
              point:
                "Evaporate gently (over a water bath) to the crystallisation point",
              keywords: ["evaporat", "water bath", "crystallisation point"],
            },
            {
              point:
                "Leave to cool slowly and pat dry gently between sheets of filter paper",
              keywords: ["cool", "pat", "filter paper"],
            },
          ],
          hints: [
            "Break the procedure into four clear stages: react, separate excess solid, concentrate, crystallise & dry.",
            "Include 'in excess', 'filtration', 'evaporate gently to crystallisation point', and 'cool slowly / pat between filter paper'.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 stretch questions, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "making-and-purifying-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "distillation-chromatography",
      strategy: "Work backwards from baseline offset",
      question:
        "Two dyes, **A** ({{R_f = 0.25}}) and **B** ({{R_f = 0.65}}), are separated on the same chromatogram. After the run finishes, the centre of spot B is **4.8 cm** higher up the paper than the centre of spot A. How far (in cm) did the **solvent front** travel from the pencil baseline?",
      answer: { type: "number", value: 12, display: "12 cm" },
      traps: [
        {
          spec: { type: "number", value: 7.38, tolerance: 0.05 },
          feedback:
            "4.8 cm is the gap BETWEEN spots A and B, not the height of spot B from the baseline! Use the difference in Rf values (0.65 − 0.25).",
        },
      ],
      solution: [
        "Let the solvent front distance be {{S}} cm.",
        "Spot A moves {{0.25S}} cm and spot B moves {{0.65S}} cm.",
        "The gap between them is {{0.65S - 0.25S = 0.40S = 4.8}} cm.",
        "Solve for {{S}}: {{S = 4.8 / 0.40 = 12}} cm.",
        "Check: spot A is at {{0.25 * 12 = 3.0}} cm and spot B is at {{0.65 * 12 = 7.8}} cm; gap = {{7.8 - 3.0 = 4.8}} cm ✓.",
      ],
      hints: [
        "Express the distance of spot A and spot B in terms of the unknown solvent front distance S.",
        "Subtract the two Rf values: 0.65 − 0.25 = 0.40.",
        "Now solve 0.40 × S = 4.8.",
      ],
    },
    {
      id: "making-and-purifying-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "making-soluble-salts",
      strategy: "Trace every ion & physical property",
      question:
        "A chemist accidentally mixes **solid copper(II) oxide** (insoluble in water) with **solid copper(II) sulfate** (soluble in water). Which sequence of steps recovers **pure dry crystals of copper(II) sulfate**?",
      options: [
        "Heat strongly to melt both solids, then decant the liquid",
        "Add water and stir, filter, evaporate filtrate gently, cool and dry",
        "Add excess dilute sulfuric acid, filter, then boil completely dry",
        "Run the dry powder mixture straight up paper chromatography",
      ],
      answerIndex: 1,
      explanation:
        "Adding water dissolves **only** the soluble copper(II) sulfate while leaving insoluble copper(II) oxide as solid particles. **Filtration** traps the copper(II) oxide residue, and **gentle evaporation + cooling + patting dry** recovers pure blue copper(II) sulfate crystals.",
      hints: [
        "Check the solubility of each solid in water.",
        "Once one solid dissolves and the other stays solid, how do you separate them and then recover dry crystals?",
      ],
    },
    {
      id: "making-and-purifying-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "purity-formulations",
      strategy: "Set up a mass balance",
      question:
        "A pharmacist designs an **800 mg** vitamin tablet formulation consisting of **35%** active vitamin C, **45%** starch filler, and the remainder a protective sugar coating. Calculate the mass (in mg) of the **protective sugar coating** in one tablet.",
      answer: { type: "number", value: 160, display: "160 mg" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback:
            "20% is the percentage of sugar coating — now calculate 20% of 800 mg!",
        },
        {
          spec: { type: "number", value: 640 },
          feedback:
            "640 mg is the combined mass of vitamin C + filler (80%). Subtract from 800 mg to get the coating.",
        },
      ],
      solution: [
        "Percentage of coating = {{100% - (35% + 45%) = 100% - 80% = 20%}}.",
        "Mass of coating = {{0.20 * 800 = 160}} mg.",
        "Check: vitamin C = 280 mg, filler = 360 mg, coating = 160 mg; {{280 + 360 + 160 = 800}} mg ✓.",
      ],
      hints: [
        "First find what percentage of the tablet is sugar coating (all percentages sum to 100%).",
        "Calculate 20% of 800 mg.",
      ],
    },
    {
      id: "making-and-purifying-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "chemical-gas-tests",
      strategy: "Process of elimination using chemical evidence",
      question:
        "A student reacts an unlabelled solid **M** with dilute nitric acid. Vigorous fizzing occurs, forming a colourless solution. The gas extinguishes a lit splint without popping and turns clear limewater milky. Solid **M** does NOT react with water on its own. Which substance could **M** be?",
      options: [
        "Magnesium metal ribbon",
        "Copper(II) carbonate powder",
        "Zinc carbonate powder",
        "Calcium oxide powder",
      ],
      answerIndex: 2,
      explanation:
        "Turning limewater milky proves **CO₂** gas → M must be a **carbonate** (ruling out magnesium metal and calcium oxide). Forming a **colourless** solution rules out copper(II) carbonate (which forms a blue solution), leaving **zinc carbonate** (forming colourless zinc nitrate solution).",
      hints: [
        "What does turning limewater milky tell you about the anion in solid M?",
        "Now use the colour of the resulting nitrate solution to decide between the two carbonates.",
      ],
    },
    {
      id: "making-and-purifying-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "distillation-chromatography",
      strategy: "Compare solubility trends across solvents",
      question:
        "A dye has {{R_f = 0.80}} in ethanol and {{R_f = 0.20}} in water. On two separate runs where BOTH solvent fronts move **10.0 cm**, how many centimetres **further** does the dye travel in ethanol than in water?",
      answer: { type: "number", value: 6, display: "6 cm" },
      traps: [
        {
          spec: { type: "number", value: 0.6 },
          feedback:
            "0.6 is the difference in Rf values — multiply by the 10.0 cm solvent front distance to find the distance in cm!",
        },
      ],
      solution: [
        "Distance in ethanol = {{0.80 * 10.0 = 8.0}} cm.",
        "Distance in water = {{0.20 * 10.0 = 2.0}} cm.",
        "Difference = {{8.0 - 2.0 = 6.0}} cm.",
      ],
      hints: [
        "Calculate the distance the dye moves in ethanol when the solvent front is 10.0 cm.",
        "Calculate its distance in water, then subtract the two distances.",
      ],
    },
    {
      id: "making-and-purifying-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "distillation-chromatography",
      strategy: "Track vapour composition in a column",
      question:
        "During fractional distillation of a 50:50 mixture of liquid **P** (b.p. 64 °C) and liquid **Q** (b.p. 112 °C), the thermometer at the side-arm holds steady at **64 °C** for 10 minutes, then climbs smoothly toward 112 °C. What is happening at the moment the thermometer starts rising above 64 °C?",
      options: [
        "Liquid Q has finished distilling and pure P is left behind",
        "The Liebig condenser water has frozen solid inside the jacket",
        "Liquid P has nearly all distilled over and Q vapour is rising",
        "Both liquids have chemically decomposed into carbon dioxide",
      ],
      answerIndex: 2,
      explanation:
        "While **P**, with boiling point 64 °C, is still plentiful in the flask, pure P vapour dominates the top of the column so the temperature stays steady at 64 °C. Once nearly all of P has distilled over, hotter **Q** vapour climbs the column, making the thermometer rise toward 112 °C — the exact signal to swap receiving flasks!",
      hints: [
        "Which liquid distils over while the thermometer stays fixed at 64 °C?",
        "Why does the vapour temperature at the top suddenly start climbing toward 112 °C?",
      ],
    },
    {
      id: "making-and-purifying-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "distillation-chromatography",
      strategy: "Evaluate scientific proof rigorously",
      marks: 3,
      question:
        "A pupil runs an orange food colouring on a water chromatogram and observes a single orange spot at Rf = 0.55. Explain why this does NOT fully prove the colouring is pure, and describe two further tests that could check its purity.",
      modelAnswer:
        "Two different dyes could have the exact same solubility and identical Rf value in water, causing them to overlap as one spot. First, repeat the chromatography using a different solvent such as ethanol to see whether the spot splits into separate colours. Second, dry the solid dye and measure its melting point: a sharp fixed temperature confirms purity, whereas a lower broad range reveals a mixture.",
      markScheme: [
        {
          point:
            "Two different substances may have the same solubility / identical Rf in water and overlap",
          keywords: ["same solubility", "overlap", "identical rf", "same rf"],
        },
        {
          point:
            "Repeat chromatography using a different solvent (e.g. ethanol) to check if the spot splits",
          keywords: ["different solvent", "ethanol", "splits"],
        },
        {
          point:
            "Measure its melting point (or boiling point) to check for a sharp fixed temperature",
          keywords: [
            "melting point",
            "sharp",
            "fixed temperature",
            "boiling point",
          ],
        },
      ],
      hints: [
        "Think about whether two distinct molecules could move at identical speeds in water.",
        "How could you alter the chromatography mobile phase to separate overlapping dyes?",
        "Which physical property test from Section 2 checks purity directly?",
      ],
    },
    {
      id: "making-and-purifying-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "making-soluble-salts",
      strategy: "Check solubility and reactivity constraints",
      marks: 4,
      question:
        "Explain why you CANNOT use the excess-solid filtration method to prepare pure sodium nitrate from nitric acid and sodium hydroxide, and explain why copper metal CANNOT be used with dilute sulfuric acid to make copper(II) sulfate.",
      modelAnswer:
        "Sodium hydroxide is a soluble alkali that dissolves completely in water. Any unreacted alkali would pass straight through the filter paper and contaminate the salt solution, so a titration is needed instead. Copper sits below hydrogen in the reactivity series, so it cannot displace hydrogen from dilute acid and no reaction occurs; an insoluble oxide or carbonate must be used instead.",
      markScheme: [
        {
          point: "Sodium hydroxide is soluble in water (an alkali)",
          keywords: ["soluble", "alkali", "dissolves"],
        },
        {
          point:
            "Excess alkali passes through filter paper and contaminates the salt (needs titration)",
          keywords: ["pass", "contaminat", "titration"],
        },
        {
          point: "Copper is below hydrogen in the reactivity series",
          keywords: ["below hydrogen", "reactivity series", "unreactive"],
        },
        {
          point:
            "Copper cannot displace hydrogen so no reaction occurs (must use oxide or carbonate)",
          keywords: ["displace", "no reaction", "oxide", "carbonate"],
        },
      ],
      hints: [
        "For the first part, ask: can filter paper trap a dissolved substance?",
        "State what method chemists use when both acid and alkali are soluble.",
        "For the second part, compare the reactivity of copper against hydrogen.",
      ],
    },
  ],
};
