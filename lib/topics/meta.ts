// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 Science.
// Source: Middle School Curriculum Overview pp. 10–11.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Scientific Skills",
  "Biology",
  "Chemistry",
  "Physics",
];

export const TOPIC_META: TopicMeta[] = [
  // ========================= SCIENTIFIC SKILLS ============================
  {
    id: "scientific-skills",
    title: "Working Scientifically & Practical Skills",
    strand: "Scientific Skills",
    icon: "🧪",
    curriculum: "Year 9 All Terms (PDF p. 10) — Variables & Fair Testing, Methods, Scientific Diagrams, Tables, Graphing, Conclusions & Evaluating Techniques",
    sections: [
      {
        id: "variables-fair-testing",
        heading: "Identifying Variables, Hypotheses & Fair Testing",
        covers: "Independent (IV), dependent (DV) and control (CV) variables; testable hypotheses; writing clear step-by-step methods naming apparatus, specific volumes/masses and ranges.",
      },
      {
        id: "diagrams-tables-calculations",
        heading: "Scientific Diagrams, Results Tables & Data Calculations",
        covers: "2D sharp-pencil ruled scientific diagrams (no sketching/shading, labelled straight lines); results tables (IV left, DV right, units ONLY in headers, consistent decimal places); excluding anomalies when calculating means and ranges.",
      },
      {
        id: "graphing-conclusions",
        heading: "Graphing Results & Writing Valid Conclusions",
        covers: "Choosing bar chart (categoric IV) vs line/scatter graph (continuous IV); scaling axes cleanly; straight vs curved lines of best fit; writing PEE/trend conclusions citing data values and explaining the underlying science.",
      },
      {
        id: "evaluating-techniques",
        heading: "Evaluating Experimental Techniques & Errors",
        covers: "Accuracy vs precision; repeatability vs reproducibility; systematic (zero) errors vs random errors; resolution of instruments; suggesting concrete, specific improvements.",
      },
    ],
  },

  // =============================== BIOLOGY ================================
  {
    id: "dna-and-evolution",
    title: "DNA, Variation & Evolution",
    strand: "Biology",
    icon: "🧬",
    curriculum: "Year 9 Term 1 Biology — Chromosomes, Genes & DNA, Variation, Natural Selection, Adaptation, Fossils & Extinction",
    sections: [
      {
        id: "dna-genes-chromosomes",
        heading: "Chromosomes, Genes & the DNA Double Helix",
        covers: "Cell nucleus → 46 chromosomes (23 pairs in human body cells, 23 single in gametes) → genes as short sections of DNA coding for traits; Watson, Crick & Rosalind Franklin's double helix and complementary base pairing (A–T, C–G).",
      },
      {
        id: "variation-inheritance",
        heading: "Inherited vs Environmental & Continuous vs Discontinuous Variation",
        covers: "Genetic (blood group, eye colour), environmental (scars, language) and combined (height, body mass) variation; continuous (normal-distribution histogram) vs discontinuous (bar chart) variation; basic dominant/recessive inheritance & Punnett squares.",
      },
      {
        id: "natural-selection",
        heading: "Darwin's Theory of Evolution by Natural Selection",
        covers: "Step-by-step mechanism: genetic variation/mutations → competition for limited resources → survival of better-adapted individuals → reproduction → passing advantageous alleles to offspring over many generations (peppered moths, Darwin's finches, antibiotic-resistant bacteria).",
      },
      {
        id: "fossils-extinction-biodiversity",
        heading: "Fossils, Extinction & Protecting Biodiversity",
        covers: "Fossil formation and gaps in the fossil record; causes of extinction (habitat loss, climate change, new predators/diseases, catastrophic events); importance of biodiversity, conservation & seed/gene banks.",
      },
    ],
  },
  {
    id: "botany",
    title: "Botany: Plant Biology & Fieldwork",
    strand: "Biology",
    icon: "🌿",
    curriculum: "Year 9 Term 3 Biology (TTS or Gippsland) — Leaf Structure, Photosynthesis, Xylem/Phloem Transport, Plant Reproduction & Ecological Fieldwork",
    sections: [
      {
        id: "leaf-structure-cells",
        heading: "Plant Organs, Leaf Cross-Section & Specialised Cells",
        covers: "Waxy cuticle, upper epidermis, palisade mesophyll (packed with chloroplasts), spongy mesophyll (air spaces for diffusion), guard cells & stomata, and root hair cells (large surface area, no chloroplasts).",
      },
      {
        id: "photosynthesis-starch",
        heading: "Photosynthesis, Limiting Factors & Testing for Starch",
        covers: "Word and symbol equation (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂); light intensity, CO₂ concentration & temperature limiting-factor graphs; boiling ethanol/iodine starch test and variegated-leaf controls.",
      },
      {
        id: "plant-transport",
        heading: "Xylem, Transpiration & Phloem Translocation",
        covers: "Xylem vessels carrying water & mineral ions upward (dead hollow tubes, lignin rings) driven by evaporation through stomata (transpiration stream; factors: wind, warmth, low humidity, light; potometer) vs living phloem transporting dissolved sugars both ways (translocation).",
      },
      {
        id: "reproduction-fieldwork",
        heading: "Plant Reproduction & TTS / Gippsland Fieldwork Sampling",
        covers: "Insect- vs wind-pollinated flowers, fertilisation & seed dispersal (wind, animal, water, explosive); using random quadrats to estimate population size and belt transects to measure distribution across abiotic gradients in Singapore tropical and Gippsland temperate bushland habitats.",
      },
    ],
  },

  // ============================== CHEMISTRY ===============================
  {
    id: "periodic-table",
    title: "The Periodic Table & Atomic Structure",
    strand: "Chemistry",
    icon: "⚛️",
    curriculum: "Year 9 Term 1 Chemistry — Subatomic Particles, Electronic Structure, Mendeleev, Group 1 Alkali Metals, Group 7 Halogens & Group 0 Noble Gases",
    sections: [
      {
        id: "atomic-structure-shells",
        heading: "Atoms, Subatomic Particles & Electron Shells",
        covers: "Protons (+1, mass 1), neutrons (0, mass 1), electrons (−1, negligible mass); atomic number vs mass number; isotopes; writing electronic configurations up to calcium (2,8,8,2) and linking outer electrons to group number and shells to period number.",
      },
      {
        id: "mendeleev-layout",
        heading: "Mendeleev's Periodic Table & Metals vs Non-Metals",
        covers: "How Mendeleev ordered elements by atomic mass, left gaps for undiscovered elements (e.g. gallium/germanium) and swapped pairs; modern ordering by atomic (proton) number; physical and chemical properties of metals vs non-metals and metal/non-metal oxides.",
      },
      {
        id: "group1-alkali-metals",
        heading: "Group 1: The Alkali Metals",
        covers: "Soft, low-density metals (Li, Na, K) stored under oil; reactions with water (metal + water → metal hydroxide + hydrogen, alkaline pH, fizzing/melting/lilac flame for K); why reactivity increases down Group 1 (larger atom, outer electron further from nucleus, lost more easily).",
      },
      {
        id: "group7-group0",
        heading: "Group 7 Halogens & Group 0 Noble Gases",
        covers: "Halogens (F₂, Cl₂, Br₂, I₂): diatomic molecules, rising melting/boiling points down the group, decreasing reactivity down the group, and halogen displacement reactions; Group 0 noble gases (He, Ne, Ar): full outer shells, monatomic, unreactive, rising boiling points.",
      },
    ],
  },
  {
    id: "making-and-purifying",
    title: "Making Salts & Purifying Substances",
    strand: "Chemistry",
    icon: "🧂",
    curriculum: "Year 9 Term 2 Chemistry — Soluble Salt Preparation, Crystallisation, Pure Substances vs Formulations, Distillation, Chromatography (Rf) & Gas Tests",
    sections: [
      {
        id: "making-soluble-salts",
        heading: "Making Soluble Salts from Acids",
        covers: "Neutralisation equations: acid + metal oxide/hydroxide → salt + water, acid + metal carbonate → salt + water + CO₂, acid + metal → salt + H₂; naming salts from HCl (chloride), H₂SO₄ (sulfate), HNO₃ (nitrate); adding excess insoluble base, warming, filtering, evaporating to crystallisation point & drying crystals.",
      },
      {
        id: "purity-formulations",
        heading: "Pure Substances, Mixtures & Formulations",
        covers: "Scientific meaning of 'pure' (single element or compound); testing purity via sharp, fixed melting/boiling points (impurities lower melting point and broaden range, raise boiling point); formulations as carefully measured mixtures (medicines, paints, alloys, fuels).",
      },
      {
        id: "distillation-chromatography",
        heading: "Distillation & Paper Chromatography (Rf Values)",
        covers: "Simple distillation (solvent from solution) vs fractional distillation (miscible liquids with different boiling points); paper chromatography (pencil baseline, solvent below line, mobile vs stationary phase); calculating Rf = distance moved by spot ÷ distance moved by solvent.",
      },
      {
        id: "chemical-gas-tests",
        heading: "Chemical Tests for Common Gases",
        covers: "Hydrogen (lit splint → squeaky pop), Oxygen (glowing splint → relights), Carbon dioxide (bubble through limewater → turns milky/cloudy), Chlorine (damp blue litmus paper → turns red then bleaches white).",
      },
    ],
  },
  {
    id: "oil-and-pollution",
    title: "Crude Oil, Fuels & Atmospheric Pollution",
    strand: "Chemistry",
    icon: "🛢️",
    curriculum: "Year 9 Term 2 Chemistry — Hydrocarbons & Alkanes, Fractional Distillation, Cracking & Alkenes, Combustion & Atmospheric Pollutants",
    sections: [
      {
        id: "hydrocarbons-alkanes",
        heading: "Crude Oil, Hydrocarbons & Alkanes",
        covers: "Crude oil as a finite mixture of hydrocarbons (compounds of hydrogen and carbon ONLY); alkanes as saturated hydrocarbons (single C–C bonds, general formula CₙH₂ₙ₊₂: methane, ethane, propane, butane); how chain length affects boiling point, viscosity and flammability.",
      },
      {
        id: "fractional-distillation-oil",
        heading: "Fractional Distillation of Crude Oil",
        covers: "Heating crude oil to vapour in a fractionating column (hot at bottom, cool at top); fractions condensing at their boiling-point zones (refinery gases, petrol, kerosene, diesel, fuel oil, bitumen) and their everyday uses.",
      },
      {
        id: "cracking-alkenes",
        heading: "Cracking & Testing for Alkenes",
        covers: "Why long-chain hydrocarbons are cracked (higher demand for short fuels + alkenes for polymers); thermal/catalytic cracking equations (conservation of C and H atoms); alkenes (C=C double bond, unsaturated, CₙH₂ₙ) turning orange bromine water colourless.",
      },
      {
        id: "combustion-pollution",
        heading: "Combustion & Atmospheric Pollution",
        covers: "Complete combustion (excess O₂ → CO₂ + H₂O) vs incomplete combustion (limited O₂ → toxic CO + soot/particulates); sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) causing acid rain; greenhouse gases (CO₂, CH₄), global warming & reducing emissions.",
      },
    ],
  },

  // =============================== PHYSICS ================================
  {
    id: "energy-and-efficiency",
    title: "Energy Stores, Transfers & Efficiency",
    strand: "Physics",
    icon: "⚡",
    curriculum: "Year 9 Term 1 Physics — Energy Stores & Conservation, Sankey Diagrams & Efficiency, Thermal Transfer, Work Done, Power & Energy Resources",
    sections: [
      {
        id: "stores-transfers-conservation",
        heading: "Energy Stores, Pathways & Conservation",
        covers: "8 energy stores (kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, magnetic, electrostatic) and 4 pathways (mechanical, electrical, heating, radiation); Law of Conservation of Energy and energy dissipation to thermal store of surroundings.",
      },
      {
        id: "sankey-efficiency",
        heading: "Sankey Diagrams & Calculating Efficiency",
        covers: "Drawing and reading proportional Sankey diagrams (arrow width = energy/power); efficiency = useful output ÷ total input (as decimal ≤ 1 or percentage ≤ 100%); reducing unwanted energy transfers (lubrication, streamlining, thermal insulation).",
      },
      {
        id: "thermal-transfer",
        heading: "Conduction, Convection & Infrared Radiation",
        covers: "Conduction via vibrating particles & delocalised electrons in metals; convection currents in fluids (warm expands, less dense, rises); infrared radiation through a vacuum (matt black = best emitter/absorber, shiny silver = best reflector); vacuum flasks & home insulation.",
      },
      {
        id: "work-power-resources",
        heading: "Work Done, Power & Renewable vs Non-Renewable Resources",
        covers: "Work done W = F × d (joules), Power P = E ÷ t (watts), kinetic/GPE concepts; comparing fossil fuels, nuclear, solar, wind, hydro, geothermal & biomass on reliability, carbon emissions and environmental impact.",
      },
    ],
  },
  {
    id: "further-forces",
    title: "Further Forces, Motion & Pressure",
    strand: "Physics",
    icon: "🚀",
    curriculum: "Year 9 Term 2 Physics — Resultant Forces & Newton's Laws, Motion Graphs, Pressure in Solids/Fluids, Moments & Hooke's Law",
    sections: [
      {
        id: "resultant-forces-newton",
        heading: "Resultant Forces, Terminal Velocity & Newton's Laws",
        covers: "Calculating resultant forces in 1D; balanced forces (stationary or constant velocity — Newton's 1st law) vs unbalanced forces (acceleration, F = m × a); weight W = m × g (g ≈ 9.8 or 10 N/kg); falling objects & terminal velocity.",
      },
      {
        id: "motion-graphs",
        heading: "Distance–Time & Velocity–Time Graphs",
        covers: "Speed = distance ÷ time; reading distance–time graphs (gradient = speed, flat = stationary, curve = accelerating) and velocity–time graphs (gradient = acceleration a = (v − u)/t, flat = constant velocity, area under graph = distance travelled).",
      },
      {
        id: "pressure-solids-fluids",
        heading: "Pressure in Solids, Liquids & Gases",
        covers: "Pressure P = F ÷ A (Pa or N/m²; N/cm²); sharp knives vs snowshoes; liquid pressure increasing with depth and density (acting in all directions); atmospheric pressure & particle collisions in gases.",
      },
      {
        id: "moments-hookes-law",
        heading: "Moments, Levers & Hooke's Law",
        covers: "Turning effect Moment = force × perpendicular distance from pivot (N m); Principle of Moments (sum of clockwise = sum of anticlockwise moments in equilibrium); Hooke's Law F = k × e, spring constant k, elastic vs plastic deformation & limit of proportionality.",
      },
    ],
  },
  {
    id: "further-electricity",
    title: "Further Electricity, Circuits & Resistance",
    strand: "Physics",
    icon: "🔋",
    curriculum: "Year 9 Term 3 Physics — Charge & Current, Series vs Parallel Circuits, Resistance & Ohm's Law (I–V Curves), Power, Domestic Safety & Static",
    sections: [
      {
        id: "charge-current-pd",
        heading: "Charge, Current, Potential Difference & Circuit Symbols",
        covers: "Electric current as rate of flow of charge Q = I × t (coulombs = amps × seconds); potential difference (volts = joules per coulomb); ammeters in series vs voltmeters in parallel; standard circuit symbols (resistor, variable resistor, diode, LED, LDR, thermistor, fuse).",
      },
      {
        id: "series-parallel-circuits",
        heading: "Series vs Parallel Circuits",
        covers: "Series rules: current same everywhere, potential difference shared across components, total resistance R_total = R₁ + R₂; Parallel rules: potential difference same across every branch, current splits across branches, adding a parallel branch REDUCES total resistance.",
      },
      {
        id: "resistance-ohms-law",
        heading: "Resistance, Ohm's Law & I–V Characteristics",
        covers: "V = I × R (and rearranging for I and R); I–V graphs for an ohmic conductor (straight line through origin at constant temperature), filament lamp (S-curve: hotter → higher R) and diode (current flows one way only); LDRs and thermistors in sensing circuits.",
      },
      {
        id: "electrical-power-safety-static",
        heading: "Electrical Power, Mains Safety & Static Electricity",
        covers: "Electrical power P = I × V and energy E = P × t; UK/Singapore 3-pin plug (live brown 230 V, neutral blue 0 V, earth green/yellow), fuses & circuit breakers; static electricity via electron transfer by friction (like charges repel, unlike attract).",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
