import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1 — Foundations & Core Recall (15 MCQs)
  // =========================================================================
  {
    id: "making-and-purifying-m1",
    title: "MCQ Paper 1: Salts, Purity, Separation & Gas Tests",
    questions: [
      {
        id: "making-and-purifying-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "making-soluble-salts",
        question:
          "Which salt is produced when dilute hydrochloric acid reacts with magnesium oxide?",
        options: [
          "Magnesium chloride",
          "Magnesium sulfate",
          "Magnesium nitrate",
          "Magnesium carbonate",
        ],
        answerIndex: 0,
        explanation:
          "Hydrochloric acid (HCl) always forms **chloride** salts, and the metal from magnesium oxide is magnesium, giving **magnesium chloride** (plus water). Sulfates come from sulfuric acid and nitrates come from nitric acid.",
        hints: [
          "Split salt naming into two halves: metal first, acid ending second.",
          "Hydrochloric acid always ends in '-chloride'.",
        ],
      },
      {
        id: "making-and-purifying-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "making-soluble-salts",
        question:
          "What are the products when dilute sulfuric acid reacts with insoluble copper(II) carbonate?",
        options: [
          "Copper(II) sulfate and hydrogen gas only",
          "Copper(II) sulfate, water and carbon dioxide",
          "Copper(II) chloride, water and carbon dioxide",
          "Copper(II) sulfate and liquid water only",
        ],
        answerIndex: 1,
        explanation:
          "The general equation is **acid + metal carbonate → salt + water + carbon dioxide**. Sulfuric acid forms copper(II) sulfate, along with water and CO₂ gas (seen as fizzing). Metal oxides give salt and water only, while metals give salt and hydrogen.",
        hints: [
          "Recall the general word equation for acid + metal carbonate.",
          "Carbonates always release carbon dioxide gas in addition to salt and water.",
        ],
      },
      {
        id: "making-and-purifying-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "purity-formulations",
        question:
          "In chemistry, which statement accurately defines a **pure substance**?",
        options: [
          "A natural food or drink with zero artificial colours added",
          "A clear, colourless liquid that contains no suspended solids",
          "A single element or single compound not mixed with others",
          "A carefully measured mixture made for a specific practical job",
        ],
        answerIndex: 2,
        explanation:
          "Scientifically, a pure substance consists of **only one element or only one compound**. A carefully measured useful mixture describes a **formulation**, and clear colourless liquids like salt water are still mixtures.",
        hints: [
          "Separate everyday supermarket language ('pure juice') from scientific definitions.",
          "Think about how many different elements or compounds can be present.",
        ],
      },
      {
        id: "making-and-purifying-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "purity-formulations",
        question:
          "Which of the following is the best example of a **formulation**?",
        options: [
          "Pure distilled water boiled at 100 °C",
          "Solid oxygen frozen inside a laboratory",
          "A pure bar of 24-carat elemental gold",
          "House wall paint containing pigment, binder and solvent",
        ],
        answerIndex: 3,
        explanation:
          "A **formulation** is a mixture designed as a useful product with measured proportions of components. Wall paint combines pigment, binder, solvent and additives in precise ratios. Distilled water, oxygen and 24-carat gold are pure substances.",
        hints: [
          "A formulation must be a designed mixture, not a single element or compound.",
          "Look for a product where several ingredients each perform a different role.",
        ],
      },
      {
        id: "making-and-purifying-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "distillation-chromatography",
        question:
          "Why must the starting baseline on a paper chromatogram be drawn in **pencil** rather than pen ink?",
        options: [
          "Pencil graphite speeds up the rising solvent front",
          "Pencil graphite is insoluble and will not dissolve or run",
          "Pen ink absorbs water and stops capillary action completely",
          "Pen ink reacts chemically to destroy the paper fibres",
        ],
        answerIndex: 1,
        explanation:
          "Pencil lead is made of **graphite**, which is insoluble in water and organic solvents, so the baseline stays put. Pen ink contains soluble dyes that would dissolve, travel up the paper and contaminate the chromatogram.",
        hints: [
          "Think about what happens to ink dyes when solvent touches them.",
          "Graphite does not dissolve in the mobile phase.",
        ],
      },
      {
        id: "making-and-purifying-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "chemical-gas-tests",
        question:
          "What is the positive result when a **lit splint** is held at the mouth of a test tube containing **hydrogen** gas?",
        options: [
          "The gas burns rapidly with a squeaky pop",
          "The splint goes out and limewater turns milky",
          "The glowing ember bursts brightly back into flame",
          "Damp blue litmus turns red and bleaches white",
        ],
        answerIndex: 0,
        explanation:
          "Hydrogen mixes with oxygen in the air and ignites explosively when touched by a **lit splint**, producing a characteristic **squeaky pop** ({{2H_2 + O_2 -> 2H_2O}}). Relighting a glowing splint is the test for oxygen.",
        hints: [
          "Remember the mnemonic: H-Pop, O-Glow, C-Lime, Cl-Bleach.",
        ],
      },
      {
        id: "making-and-purifying-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "chemical-gas-tests",
        question:
          "Which reagent and positive observation confirm the presence of **carbon dioxide** gas?",
        options: [
          "Hold a lit wooden splint; it gives a squeaky pop",
          "Insert a glowing splint; the ember bursts into flame",
          "Hold damp blue litmus paper; it bleaches completely white",
          "Bubble through clear limewater; it turns milky white",
        ],
        answerIndex: 3,
        explanation:
          "Bubbling carbon dioxide through **limewater** (aqueous calcium hydroxide) forms an insoluble white precipitate of calcium carbonate, turning the clear solution **milky/cloudy white**.",
        hints: [
          "Think about the liquid solution used in a test tube with a delivery tube.",
        ],
      },
      {
        id: "making-and-purifying-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "When making copper(II) sulfate crystals from dilute sulfuric acid and insoluble copper(II) oxide, why is the copper(II) oxide added **in excess**?",
        options: [
          "To make the final crystals grow much larger during cooling",
          "To lower the boiling point so the water evaporates faster",
          "To ensure every drop of sulfuric acid reacts completely",
          "To make the blue salt solution turn into a solid immediately",
        ],
        answerIndex: 2,
        explanation:
          "Adding insoluble copper(II) oxide **in excess** guarantees that all the sulfuric acid is completely neutralised so no corrosive unreacted acid remains in the solution. The leftover solid oxide is then easily filtered off.",
        hints: [
          "Imagine what would stay dissolved in the water if you did not add enough copper(II) oxide.",
          "Unreacted acid cannot be filtered out, whereas unreacted insoluble solid can.",
        ],
      },
      {
        id: "making-and-purifying-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "A dye spot travels **3.0 cm** from the pencil baseline while the solvent front travels **6.0 cm** from the same baseline. What is the {{R_f}} value of the dye?",
        options: ["0.50", "2.00", "0.50 cm", "3.00"],
        answerIndex: 0,
        explanation:
          "{{R_f = " + '"distance moved by spot" / "distance moved by solvent"' + " = 3.0 / 6.0 = 0.50}}. Because both distances are in cm, the units cancel, so {{R_f}} has **no units** (not '0.50 cm') and is always between 0 and 1 (never 2.00).",
        hints: [
          "Use the formula Rf = distance moved by spot ÷ distance moved by solvent.",
          "Check whether Rf values ever carry units like cm.",
        ],
      },
      {
        id: "making-and-purifying-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "purity-formulations",
        question:
          "Pure water melts at 0 °C and boils at 100 °C. What happens to these temperatures when common salt is dissolved in the water?",
        options: [
          "Melting point rises above 0 °C and boiling point falls",
          "Both melting point and boiling point remain exactly fixed",
          "Both melting point and boiling point drop by 5 °C",
          "Melting point falls below 0 °C and boiling point rises",
        ],
        answerIndex: 3,
        explanation:
          "Dissolved impurities widen the liquid range: they **lower** the melting/freezing point below 0 °C (which is why salt melts icy roads) and **raise** the boiling point above 100 °C, causing state changes over a temperature range.",
        hints: [
          "Think about why rock salt is spread on snowy roads in winter.",
          "Impurities push the melting point DOWN and the boiling point UP.",
        ],
      },
      {
        id: "making-and-purifying-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "In a Liebig condenser used during distillation, how should the cold cooling water flow?",
        options: [
          "In at the top opening and out at the bottom opening",
          "In at the bottom opening and out at the top opening",
          "Poured directly into the boiling flask with the salt",
          "Held motionless inside a sealed glass tube with no flow",
        ],
        answerIndex: 1,
        explanation:
          "Cold water enters at the **bottom** and leaves at the **top**. Filling against gravity ensures the cooling jacket stays completely full of water (no air pockets) and gives efficient counter-current cooling.",
        hints: [
          "Imagine pouring water into the top of an angled open tube: would it fill the whole jacket?",
          "Entering at the lower end forces air out of the top so the jacket stays full.",
        ],
      },
      {
        id: "making-and-purifying-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "Which observation correctly identifies **chlorine** gas using damp blue litmus paper?",
        options: [
          "Turns green immediately and catches fire with a pop",
          "Stays bright blue and turns clear limewater milky",
          "Turns red first and then bleaches completely white",
          "Turns dark purple and relights a glowing splint",
        ],
        answerIndex: 2,
        explanation:
          "Chlorine dissolves in the moisture on **damp blue litmus paper** to form an acidic solution (turning blue litmus **red**) that contains bleaching hypochlorous acid (which then **bleaches the paper white**).",
        hints: [
          "Chlorine forms both an acid and a bleach when it dissolves in water.",
          "Look for a two-stage colour change ending in white.",
        ],
      },
      {
        id: "making-and-purifying-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "Which pair of reactants will **NOT** react to produce copper(II) chloride?",
        options: [
          "Dilute hydrochloric acid and copper(II) oxide",
          "Dilute hydrochloric acid and copper(II) carbonate",
          "Dilute hydrochloric acid and copper(II) hydroxide",
          "Dilute hydrochloric acid and pure copper metal",
        ],
        answerIndex: 3,
        explanation:
          "Copper metal sits **below hydrogen** in the reactivity series, so it cannot displace hydrogen from dilute hydrochloric acid. Copper(II) oxide, hydroxide, and carbonate all undergo neutralisation with HCl to form copper(II) chloride.",
        hints: [
          "Check the reactivity series: is copper more or less reactive than hydrogen?",
          "Bases (oxides, hydroxides, carbonates) react with acids even when the pure metal does not.",
        ],
      },
      {
        id: "making-and-purifying-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "Which separation method is best for separating pure liquid **ethanol** (b.p. 78 °C) from **water** (b.p. 100 °C)?",
        options: [
          "Fractional distillation using a glass-bead column",
          "Simple filtration using folded filter paper and funnel",
          "Paper chromatography using water as the mobile phase",
          "Gentle evaporation to crystallisation point in a dish",
        ],
        answerIndex: 0,
        explanation:
          "Ethanol and water are **miscible liquids** with different boiling points (78 °C vs 100 °C). **Fractional distillation** uses a fractionating column to separate miscible liquids cleanly, collecting lower-boiling ethanol first.",
        hints: [
          "Ethanol and water dissolve completely in one another (they are miscible liquids).",
          "Which technique separates miscible liquids with close boiling points?",
        ],
      },
      {
        id: "making-and-purifying-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "Hydrogen peroxide decomposes slowly to produce a colourless gas that **relights a glowing splint**. Which gas was produced?",
        options: [
          "Hydrogen gas (H₂)",
          "Carbon dioxide gas (CO₂)",
          "Oxygen gas (O₂)",
          "Chlorine gas (Cl₂)",
        ],
        answerIndex: 2,
        explanation:
          "Relighting a **glowing splint** is the unique positive chemical test for **oxygen** ({{O_2}}). Hydrogen needs a lit splint (squeaky pop), carbon dioxide turns limewater milky, and chlorine bleaches damp litmus.",
        hints: [
          "Notice the word 'glowing' splint rather than 'lit' splint.",
          "Which gas supports burning so strongly that a hot ember bursts back into flame?",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M2 — Practical Reasoning & Data Interpretation (15 MCQs)
  // =========================================================================
  {
    id: "making-and-purifying-m2",
    title: "MCQ Paper 2: Practical Methods & Experimental Data",
    questions: [
      {
        id: "making-and-purifying-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "What is the correct order of practical steps to obtain dry zinc sulfate crystals from dilute sulfuric acid and insoluble zinc oxide?",
        options: [
          "Filter → add excess zinc oxide → cool → evaporate",
          "Warm acid + excess zinc oxide → filter → evaporate gently → cool",
          "Evaporate acid → filter solid → add zinc oxide → boil dry",
          "Cool acid → add tiny amount of zinc oxide → boil dry → filter",
        ],
        answerIndex: 1,
        explanation:
          "First react warm dilute sulfuric acid with **excess** zinc oxide, then **filter** to remove unreacted excess solid, then **evaporate gently** to the crystallisation point, and finally **cool** slowly so crystals form before patting dry.",
        hints: [
          "You cannot filter out excess solid until after the reaction has finished.",
          "Evaporation must happen after filtration, followed by cooling to grow crystals.",
        ],
      },
      {
        id: "making-and-purifying-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "purity-formulations",
        question:
          "Pure benzoic acid has a melting point of **122 °C**. Four white solids are heated in melting-point tubes:\n- W melts from 114 °C to 119 °C\n- X melts sharply at 122 °C\n- Y melts sharply at 136 °C\n- Z melts from 124 °C to 130 °C\nWhich sample is **impure benzoic acid**?",
        options: [
          "Sample X because it melts right at 122 °C",
          "Sample Y because it melts sharply at 136 °C",
          "Sample W because it melts below 122 °C over a range",
          "Sample Z because it melts above 122 °C over a range",
        ],
        answerIndex: 2,
        explanation:
          "Impurities always **lower** the melting point below the pure value of 122 °C and broaden it into a range. Sample W, melting from 114 °C to 119 °C, fits this pattern. Sample X is pure benzoic acid, and Sample Y is a different pure compound.",
        hints: [
          "Remember: impurities LOWER the melting point and cause melting over a range.",
          "Compare each sample's start and finish temperatures against 122 °C.",
        ],
      },
      {
        id: "making-and-purifying-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "In paper chromatography, a student places the paper in the beaker so that the water level is **above** the pencil baseline and ink spots. What happens?",
        options: [
          "The ink spots wash straight into the water in the beaker",
          "The ink spots travel twice as fast up the paper strip",
          "The Rf values double because the water starts higher up",
          "Only pure dyes rise while mixtures stay fixed on the line",
        ],
        answerIndex: 0,
        explanation:
          "If the solvent level starts above the pencil baseline, the soluble dyes simply **dissolve straight out into the pool of solvent** in the beaker instead of being carried upwards along the paper.",
        hints: [
          "What happens when you dip a washable marker dot directly under water?",
          "The solvent needs to soak up past the baseline from below.",
        ],
      },
      {
        id: "making-and-purifying-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "Dye Q has an {{R_f}} value of **0.75** in ethanol. If the ethanol solvent front travels **8.0 cm** from the pencil baseline, how far does spot Q travel?",
        options: ["2.0 cm", "4.0 cm", "5.5 cm", "6.0 cm"],
        answerIndex: 3,
        explanation:
          "Rearranging {{R_f = d_{spot} / d_{solvent}}} gives {{d_{spot} = R_f * d_{solvent} = 0.75 * 8.0 = 6.0}} cm. Check: 6.0 cm is less than 8.0 cm, matching {{R_f < 1}}.",
        hints: [
          "Rearrange Rf = distance of spot ÷ distance of solvent.",
          "Multiply 0.75 by 8.0 cm.",
        ],
      },
      {
        id: "making-and-purifying-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "A colourless gas is bubbled into clear limewater and a white cloudiness forms. What is the chemical name of the white solid causing the cloudiness?",
        options: [
          "Calcium hydroxide",
          "Calcium chloride",
          "Calcium carbonate",
          "Calcium sulfate",
        ],
        answerIndex: 2,
        explanation:
          "Limewater is aqueous **calcium hydroxide**, {{Ca(OH)_2}}. When carbon dioxide reacts with it, insoluble white **calcium carbonate** ({{CaCO_3}}) precipitates out, making the liquid look milky.",
        hints: [
          "Limewater starts as dissolved calcium hydroxide.",
          "Adding carbon dioxide turns calcium hydroxide into insoluble chalk — what is chalk's chemical name?",
        ],
      },
      {
        id: "making-and-purifying-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "Why does a chemist dip a cool glass rod into the hot salt solution during the evaporation stage of making crystals?",
        options: [
          "To neutralise any leftover traces of dilute acid",
          "To check whether tiny crystals form at crystallisation point",
          "To filter out any remaining excess insoluble metal oxide",
          "To measure the exact boiling point of the pure solvent",
        ],
        answerIndex: 1,
        explanation:
          "Dipping a cool glass rod into the hot filtrate tests for the **crystallisation point**: as soon as tiny crystals form on the cool tip, the solution is saturated enough to remove from the heat and leave to cool slowly.",
        hints: [
          "You want to stop heating BEFORE the solution boils completely dry.",
          "What happens to a drop of saturated hot salt solution when it touches cool glass?",
        ],
      },
      {
        id: "making-and-purifying-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "purity-formulations",
        question:
          "In a water-based wall paint formulation, what is the specific function of the **binder** (resin)?",
        options: [
          "It forms a tough dry film that sticks pigment to the wall",
          "It evaporates quickly into the air to keep the paint runny",
          "It absorbs light to give the paint its bright colour",
          "It prevents bacteria from growing inside the sealed tin",
        ],
        answerIndex: 0,
        explanation:
          "In paint formulations, the **binder** glues the pigment particles together into a continuous protective film stuck to the wall. The **solvent** makes it spreadable and evaporates; the **pigment** gives colour; **additives** prevent mould.",
        hints: [
          "Match each component name to its everyday meaning: pigment, solvent, binder, additive.",
          "Think about what 'binds' the dry paint layer onto the surface.",
        ],
      },
      {
        id: "making-and-purifying-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "On a chromatogram using water as the solvent, **Red Dye 1** travels 6.4 cm while **Blue Dye 2** travels 2.4 cm. Which explanation best accounts for this difference?",
        options: [
          "Blue Dye 2 is more soluble in water and less attracted to paper",
          "Red Dye 1 is completely insoluble in water and stays on paper",
          "Blue Dye 2 evaporated faster because it had a lower boiling point",
          "Red Dye 1 is more soluble in water and less attracted to paper",
        ],
        answerIndex: 3,
        explanation:
          "Substances that are **more soluble in the mobile phase** (water) and **less strongly attracted to the stationary phase** (paper) spend more time moving with the solvent and travel further up the chromatogram.",
        hints: [
          "Which dye travelled further up the paper: Red Dye 1 or Blue Dye 2?",
          "Travelling further means stronger attraction to the moving solvent and weaker attraction to the paper.",
        ],
      },
      {
        id: "making-and-purifying-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "A student reacts dilute nitric acid with solid calcium carbonate. Which row shows ALL the correct products?",
        options: [
          "Calcium chloride + water + carbon dioxide",
          "Calcium nitrate + water + carbon dioxide",
          "Calcium nitrate + hydrogen gas only",
          "Calcium sulfate + water + carbon dioxide",
        ],
        answerIndex: 1,
        explanation:
          "Nitric acid produces **nitrate** salts, and reacting any acid with a metal **carbonate** gives **salt + water + carbon dioxide**, so the products are **calcium nitrate + water + carbon dioxide**.",
        hints: [
          "Match nitric acid to its salt ending.",
          "Carbonates always form three products: salt, water, and a gas.",
        ],
      },
      {
        id: "making-and-purifying-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "purity-formulations",
        question:
          "A student heats a solid smoothly and plots a temperature-time graph. Between 2 minutes and 6 minutes, the line is **completely horizontal** at 80 °C. What does this prove?",
        options: [
          "The substance is pure and is melting at exactly 80 °C",
          "The Bunsen burner ran out of fuel at exactly 2 minutes",
          "The substance is an impure mixture boiling above 80 °C",
          "No thermal energy is entering the solid during melting",
        ],
        answerIndex: 0,
        explanation:
          "A **flat horizontal plateau** on a heating curve shows a change of state taking place at a single fixed temperature (80 °C), proving the substance is **pure**. Thermal energy is still entering, used to overcome forces between particles rather than raising temperature.",
        hints: [
          "Compare the shape of a heating curve for a pure solid vs an impure solid.",
          "A flat section means temperature stays constant at a single sharp melting point.",
        ],
      },
      {
        id: "making-and-purifying-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "In a fractional distillation apparatus, where should the **thermometer bulb** be positioned to record the accurate boiling point of the distilling liquid?",
        options: [
          "Submerged deeply inside the boiling liquid in the round flask",
          "Inside the cold water outlet tube leaving the Liebig condenser",
          "Level with the side-arm opening entering the Liebig condenser",
          "Touching the bottom of the receiving conical flask below",
        ],
        answerIndex: 2,
        explanation:
          "The thermometer bulb must sit **level with the side-arm** leading into the condenser so it measures the exact temperature of the **vapour** that is actually passing over and condensing into the distillate.",
        hints: [
          "You want to measure the temperature of the vapour escaping into the condenser.",
          "The boiling liquid in the flask is a mixture at a higher temperature than the pure vapour at the top of the column.",
        ],
      },
      {
        id: "making-and-purifying-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "Why must blue litmus paper be **damp** when testing for chlorine gas?",
        options: [
          "Dry paper would immediately catch fire in chlorine gas",
          "Water turns the paper blue before the test even starts",
          "Damp paper prevents toxic chlorine escaping into the room",
          "Chlorine must dissolve in water to form acids and bleach",
        ],
        answerIndex: 3,
        explanation:
          "Chlorine reacts with water on the damp paper ({{Cl_2 + H_2O -> HCl + HClO}}) to produce acidic HCl (turning blue litmus red) and bleaching HClO (bleaching it white). Dry chlorine gas cannot form these ions on dry paper.",
        hints: [
          "Think about what chemical reaction happens between Cl₂ and H₂O.",
          "Acids only release H⁺ ions and bleach effectively in aqueous solution.",
        ],
      },
      {
        id: "making-and-purifying-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "In the filtration step of salt preparation, what are the correct scientific names for the **solid trapped in the filter paper** and the **clear liquid collected in the flask**?",
        options: [
          "Distillate in the paper; precipitate in the flask",
          "Residue in the paper; filtrate in the flask",
          "Filtrate in the paper; residue in the flask",
          "Solute in the paper; distillate in the flask",
        ],
        answerIndex: 1,
        explanation:
          "During filtration, the insoluble solid left behind in the filter paper is the **residue**, and the clear liquid that passes through the pores into the conical flask is the **filtrate**.",
        hints: [
          "Think of 'residue' as the solid that remains behind on the filter paper.",
          "Think of 'filtrate' as the clear solution that passes through the filter.",
        ],
      },
      {
        id: "making-and-purifying-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "A chromatogram of four food colourings (P, Q, R and unknown X) shows that unknown X separates into **two spots** at {{R_f = 0.25}} and {{R_f = 0.70}}. Pure P has one spot at 0.25, pure Q has one spot at 0.50, and pure R has one spot at 0.70. What can you conclude about X?",
        options: [
          "X is a pure substance with an average Rf of 0.475",
          "X is a mixture of dyes P, Q and R combined together",
          "X is a mixture containing dyes P and R, but not Q",
          "X contains none of P, Q or R because it split apart",
        ],
        answerIndex: 2,
        explanation:
          "Because X produced **two spots**, it is a mixture of at least two substances. Its spots match the exact {{R_f}} heights of **P (0.25)** and **R (0.70)**, with no spot at 0.50, so X contains **P and R, and not Q**.",
        hints: [
          "Count how many spots X produces to tell pure vs mixture.",
          "Match each of X's two Rf values directly against P, Q and R.",
        ],
      },
      {
        id: "making-and-purifying-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "purity-formulations",
        question:
          "A 250 g tin of fertiliser formulation contains 50 g of nitrogen compounds, 75 g of phosphorus compounds, and the rest is potassium compounds and inert filler. What percentage by mass is **nitrogen compounds**?",
        options: ["20%", "25%", "30%", "50%"],
        answerIndex: 0,
        explanation:
          "Percentage by mass = {{(50 / 250) * 100 = 0.20 * 100 = 20}}%. (75 g out of 250 g would be 30% for phosphorus compounds.)",
        hints: [
          "Use: percentage = (mass of component ÷ total mass) × 100.",
          "Divide 50 by 250, then multiply by 100.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M3 — Synthesis, Diagnostics & Challenge MCQs (15 MCQs)
  // =========================================================================
  {
    id: "making-and-purifying-m3",
    title: "MCQ Paper 3: Diagnostics, Synthesis & Exam Mastery",
    questions: [
      {
        id: "making-and-purifying-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "Why can you **NOT** prepare pure sodium chloride crystals simply by adding excess solid sodium hydroxide to hydrochloric acid and filtering?",
        options: [
          "Sodium hydroxide does not react with hydrochloric acid",
          "Sodium chloride is completely insoluble in warm water",
          "Excess sodium hydroxide dissolves and passes through filter paper",
          "The reaction releases toxic chlorine gas into the classroom",
        ],
        answerIndex: 2,
        explanation:
          "Sodium hydroxide is a **soluble** alkali (not an insoluble base). Any excess sodium hydroxide dissolves into the water and passes straight through the filter paper along with the sodium chloride, contaminating the crystals! A **titration** is required instead.",
        hints: [
          "Filtration only separates an INSOLUBLE solid from a liquid.",
          "Check whether sodium hydroxide dissolves in water.",
        ],
      },
      {
        id: "making-and-purifying-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "A mixture contains three miscible liquids: **pentane** (b.p. 36 °C), **hexane** (b.p. 69 °C), and **heptane** (b.p. 98 °C). During fractional distillation, in what order are the pure liquids collected?",
        options: [
          "Heptane first, then hexane, then pentane last",
          "Hexane first, then pentane, then heptane last",
          "All three distil over together at their mean boiling point",
          "Pentane first, then hexane, then heptane last",
        ],
        answerIndex: 3,
        explanation:
          "In fractional distillation, the liquid with the **lowest boiling point** reaches the top of the fractionating column and condenses first. Ordering from lowest to highest boiling point gives **pentane at 36 °C → hexane at 69 °C → heptane at 98 °C**.",
        hints: [
          "Does the lowest or highest boiling point vapourise and reach the top first?",
          "Sort 36 °C, 69 °C, and 98 °C from lowest to highest.",
        ],
      },
      {
        id: "making-and-purifying-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "A forensic ink spot produces only **one** spot on a water chromatogram. Why can the scientist **NOT** be 100% certain the ink is a single pure dye?",
        options: [
          "Pure dyes always split into at least two spots in water",
          "Two different dyes could have the exact same Rf in water",
          "Water cannot act as a mobile phase for coloured ink dyes",
          "One spot always proves that the baseline was drawn in pen",
        ],
        answerIndex: 1,
        explanation:
          "Two distinct dyes can coincidentally share the same solubility and {{R_f}} value in one solvent, overlapping as a single spot. Testing the ink in a **second solvent** (such as ethanol) checks whether that single spot separates further.",
        hints: [
          "Could two different chemicals move at the exact same speed in water?",
          "Think about how changing the solvent could reveal a hidden second dye.",
        ],
      },
      {
        id: "making-and-purifying-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "A student drops a strip of zinc ribbon into dilute hydrochloric acid and collects the fizzing gas in an inverted test tube. Which test and result confirm the identity of the gas?",
        options: [
          "Lit splint at tube mouth → burns with a squeaky pop",
          "Glowing splint inside tube → bursts back into flame",
          "Bubble through limewater → turns cloudy milky white",
          "Damp blue litmus paper → turns red then bleaches white",
        ],
        answerIndex: 0,
        explanation:
          "Zinc (a reactive metal) + hydrochloric acid → zinc chloride + **hydrogen** gas. Hydrogen is tested using a **lit splint**, which ignites the gas with a **squeaky pop**.",
        hints: [
          "First write the word equation: reactive metal + acid → salt + ?",
          "Now recall the exact test and positive observation for that gas.",
        ],
      },
      {
        id: "making-and-purifying-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "A student accidentally measures the spot distance (**5.0 cm**) and the solvent front distance (**10.0 cm**) from the **bottom edge of the paper** instead of the pencil baseline, which sits **1.0 cm** above the bottom edge. What is the **true** {{R_f}} value (to 2 d.p.)?",
        options: ["0.50", "0.56", "0.40", "0.44"],
        answerIndex: 3,
        explanation:
          "Subtract the 1.0 cm margin below the baseline from BOTH readings: true spot distance = {{5.0 - 1.0 = 4.0}} cm; true solvent front distance = {{10.0 - 1.0 = 9.0}} cm. Therefore {{R_f = 4.0 / 9.0 = 0.444...}} ≈ **0.44** (not 5.0 ÷ 10.0 = 0.50!).",
        hints: [
          "All chromatography distances must be measured from the pencil baseline, not the bottom edge.",
          "Subtract 1.0 cm from both 5.0 cm and 10.0 cm before dividing.",
          "Calculate 4.0 ÷ 9.0 and round to 2 decimal places.",
        ],
      },
      {
        id: "making-and-purifying-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "When preparing magnesium sulfate crystals, why should you warm the dilute sulfuric acid **gently** rather than boiling it furiously before adding magnesium oxide?",
        options: [
          "Boiling sulfuric acid turns it straight into pure water",
          "Cold acid reacts much faster than warm acid with oxides",
          "Warming speeds the reaction safely without hazardous acid spray",
          "Magnesium oxide only dissolves once all the water boils off",
        ],
        answerIndex: 2,
        explanation:
          "Gently warming increases the kinetic energy of acid particles so the reaction proceeds briskly, while avoiding boiling prevents dangerous spitting of hot corrosive acid fumes and spray.",
        hints: [
          "Think about both reaction rate and laboratory safety.",
          "Why is warming helpful, yet full boiling dangerous with dilute acid?",
        ],
      },
      {
        id: "making-and-purifying-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "purity-formulations",
        question:
          "Pure ethanol boils at 78.4 °C and pure water boils at 100.0 °C. A sample of liquid boils smoothly from **101.2 °C to 104.5 °C**. What is the most likely identity of the sample?",
        options: [
          "Pure water measured at normal atmospheric pressure",
          "Impure water containing a dissolved non-volatile solute",
          "Pure ethanol containing no dissolved impurities at all",
          "Impure ethanol contaminated with a small amount of air",
        ],
        answerIndex: 1,
        explanation:
          "Dissolved non-volatile impurities (such as salt or sugar) **raise** the boiling point of water above 100.0 °C and cause it to boil over a **range** (101.2–104.5 °C). Pure substances boil at a single sharp temperature.",
        hints: [
          "Notice that the boiling temperature is ABOVE 100.0 °C and spans a range.",
          "Which pure solvent has a boiling point just below 101.2 °C?",
        ],
      },
      {
        id: "making-and-purifying-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "chemical-gas-tests",
        question:
          "A student tests an unknown gas by inserting a **glowing** splint, which immediately goes out. Next, they bubble the gas into clear limewater, which turns milky. What is the gas?",
        options: [
          "Carbon dioxide (CO₂)",
          "Oxygen (O₂)",
          "Hydrogen (H₂)",
          "Chlorine (Cl₂)",
        ],
        answerIndex: 0,
        explanation:
          "**Carbon dioxide** does not support combustion (so it extinguishes a glowing splint) and reacts with limewater to produce insoluble white calcium carbonate (turning limewater **milky**).",
        hints: [
          "Which gas turns clear limewater milky white?",
          "Note that going out alone does not prove CO₂ (nitrogen also extinguishes flames), so limewater gives the positive confirmation.",
        ],
      },
      {
        id: "making-and-purifying-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distillation-chromatography",
        question:
          "In paper chromatography, a dye spot stays stuck right on the pencil baseline with {{R_f = 0.00}}. What should the chemist change to try to separate it?",
        options: [
          "Draw a darker pencil baseline using a softer graphite pencil",
          "Submerge the pencil baseline completely under the same water",
          "Repeat the chromatogram using a different solvent like ethanol",
          "Leave the paper in the same water beaker for ten more minutes",
        ],
        answerIndex: 2,
        explanation:
          "An {{R_f}} of **0.00** means the dye is **insoluble** in the chosen mobile phase (e.g. water). Switching to a **different solvent** (such as ethanol or propanone) can dissolve the dye so it moves up the paper.",
        hints: [
          "Why didn't the spot move at all when the solvent rose past it?",
          "If a dye does not dissolve in water, what can you swap out?",
        ],
      },
      {
        id: "making-and-purifying-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-soluble-salts",
        question:
          "When making **copper(II) sulfate** crystals, how can a student tell visually that **excess** black copper(II) oxide has been added to the warm dilute sulfuric acid?",
        options: [
          "The solution turns completely colourless and stops smoking",
          "Unreacted black powder stays settled at the bottom of the beaker",
          "Green bubbles of carbon dioxide stop rising from the beaker",
          "Large blue crystals immediately cover the glass stirring rod",
        ],
        answerIndex: 1,
        explanation:
          "While acid remains, each spatula of black copper(II) oxide reacts and disappears to form blue copper(II) sulfate solution. As soon as all acid is used up, additional **unreacted black powder remains visible** at the bottom of the beaker.",
        hints: [
          "Copper(II) oxide is an insoluble black solid; copper(II) sulfate is a blue solution.",
          "What do you see once there is no acid left to react with the next spatula of powder?",
        ],
      },
      {
        id: "making-and-purifying-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "purity-formulations",
        question:
          "Why is pure iron rarely used on its own for structural bridges, whereas **steel** (an alloy formulation of iron with carefully measured carbon and chromium) is used widely?",
        options: [
          "Pure iron melts at room temperature while steel stays solid",
          "Pure iron is a mixture whose composition changes randomly",
          "Steel is a chemically pure element with a fixed boiling point",
          "Steel's measured formulation gives far greater strength and durability",
        ],
        answerIndex: 3,
        explanation:
          "Alloys like steel are **formulations**: adding exact, carefully measured amounts of carbon (and other metals) disrupts the regular iron layers, producing a much stronger, harder, corrosion-resistant material engineered for a specific purpose.",
        hints: [
          "Is steel a pure element or a designed mixture (formulation)?",
          "Think about why engineers add measured percentages of other elements to iron.",
        ],
      },
      {
        id: "making-and-purifying-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "chemical-gas-tests",
        question:
          "A mystery solid reacts with dilute sulfuric acid to produce a blue solution and vigorous fizzing. The gas turns limewater milky. What was the mystery solid?",
        options: [
          "Copper(II) carbonate",
          "Copper(II) oxide",
          "Pure copper metal",
          "Magnesium carbonate",
        ],
        answerIndex: 0,
        explanation:
          "A **blue** solution indicates **copper(II) ions** (ruling out magnesium carbonate, which makes a colourless solution). Gas turning limewater milky proves **CO₂**, which comes from a **carbonate** (copper(II) oxide produces no gas; copper metal does not react).",
        hints: [
          "Use BOTH clues: the colour of the salt solution AND the gas test result.",
          "Which metal gives blue salt solutions, and which compound type releases CO₂ with acid?",
        ],
      },
      {
        id: "making-and-purifying-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distillation-chromatography",
        question:
          "In simple distillation of salty seawater to obtain pure drinking water, what stays behind inside the round-bottom heating flask?",
        options: [
          "Pure liquid water at 100 °C",
          "Condensed steam droplets only",
          "Solid salt (sodium chloride)",
          "Gaseous hydrogen and oxygen bubbles",
        ],
        answerIndex: 2,
        explanation:
          "Water boils at 100 °C and travels as steam into the Liebig condenser, collecting as pure distillate. Sodium chloride has a very high boiling point (1465 °C), so the **solid salt stays behind** in the heating flask.",
        hints: [
          "Compare the boiling point of water, 100 °C, with that of solid salt, over 1400 °C.",
          "Only the volatile solvent turns to vapour and travels through the condenser.",
        ],
      },
      {
        id: "making-and-purifying-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "making-soluble-salts",
        question:
          "A student places blue hydrated copper(II) sulfate crystals inside a very hot drying oven at 200 °C and returns to find a **white powder**. What happened?",
        options: [
          "The blue crystals reacted with nitrogen gas in the oven",
          "The crystals melted and recrystallised into pure copper",
          "Leftover sulfuric acid bleached the copper crystals white",
          "Excessive heat drove off the crystals' water of crystallisation",
        ],
        answerIndex: 3,
        explanation:
          "Blue copper(II) sulfate crystals are **hydrated** ({{CuSO_4 · 5H_2O}}). Strong heating drives off the water of crystallisation, leaving **white anhydrous copper(II) sulfate powder**. That is why freshly filtered crystals should be patted dry gently between filter paper or dried in a cool/warm place!",
        hints: [
          "Why does the salt-making method tell you to pat crystals dry between filter paper rather than roasting them?",
          "Hydrated copper(II) sulfate is blue; anhydrous copper(II) sulfate is white.",
        ],
      },
      {
        id: "making-and-purifying-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "chemical-gas-tests",
        question:
          "Four test tubes contain H₂, O₂, CO₂ and Cl₂. A student places **damp blue litmus paper** into Tube 1 (it turns red then white), inserts a **glowing splint** into Tube 2 (it relights), bubbles Tube 3 through **limewater** (it turns milky), and holds a **lit splint** to Tube 4 (squeaky pop). What is the correct order of gases in Tubes 1 to 4?",
        options: [
          "1: CO₂, 2: H₂, 3: Cl₂, 4: O₂",
          "1: Cl₂, 2: O₂, 3: CO₂, 4: H₂",
          "1: Cl₂, 2: H₂, 3: CO₂, 4: O₂",
          "1: O₂, 2: Cl₂, 3: H₂, 4: CO₂",
        ],
        answerIndex: 1,
        explanation:
          "Match each test one by one: Tube 1 (damp blue litmus red → bleached white) = **Cl₂**; Tube 2 (glowing splint relights) = **O₂**; Tube 3 (limewater milky) = **CO₂**; Tube 4 (lit splint squeaky pop) = **H₂**.",
        hints: [
          "Match Tube 1 first: which gas bleaches damp blue litmus paper?",
          "Check Tube 2 carefully: a GLOWING splint relights for oxygen, whereas a LIT splint pops for hydrogen.",
        ],
      },
    ],
  },
];
