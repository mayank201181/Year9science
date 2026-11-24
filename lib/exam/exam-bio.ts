import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-bio",
  title: "Year 9 End-of-Year Biology Mock Paper",
  calculator: true,
  minutes: 45,
  questions: [
    // =========================================================================
    // DNA, VARIATION & EVOLUTION (10 Questions)
    // =========================================================================
    {
      id: "exam-bio-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "dna-and-evolution",
      guideRef: "dna-genes-chromosomes",
      question: "How many chromosomes are normally found inside a human skin cell (body cell) compared with a human egg cell (gamete)?",
      options: [
        "23 single chromosomes in a skin cell and 46 paired chromosomes in an egg cell",
        "46 chromosomes (23 pairs) in a skin cell and 23 single chromosomes in an egg cell",
        "46 chromosomes (23 pairs) in both a skin cell and an unfertilised egg cell",
        "92 chromosomes (46 pairs) in a skin cell and 46 chromosomes in an egg cell",
      ],
      answerIndex: 1,
      hints: [
        "Human body cells carry two full sets of chromosomes—one set from each parent.",
        "Gametes carry half the body-cell number so fertilisation restores the full count.",
      ],
      explanation:
        "Normal human body cells are diploid with 46 chromosomes (23 pairs), whereas gametes (sperm and egg cells) are haploid with 23 single chromosomes so fertilisation restores 46.",
    },
    {
      id: "exam-bio-q02",
      kind: "short",
      difficulty: "warmup",
      topicId: "dna-and-evolution",
      guideRef: "dna-genes-chromosomes",
      question: "A short section of one strand of a DNA double helix has the base sequence A T G C C A. Write the complementary base sequence on the opposite strand (using letters A, T, C, G).",
      answer: {
        type: "text",
        accept: ["TACGGT", "T A C G G T", "T-A-C-G-G-T"],
        display: "TACGGT",
      },
      traps: [
        { spec: { type: "text", accept: ["ATGCCA", "A T G C C A"] }, feedback: "That copies the original strand—pair each base with its complementary partner (A with T, C with G)." },
        { spec: { type: "text", accept: ["UACGGU", "U A C G G U"] }, feedback: "DNA uses thymine (T), not uracil (U)." },
      ],
      hints: [
        "Apply the complementary base-pairing rule in DNA: adenine pairs with thymine, and cytosine pairs with guanine.",
        "Convert each base in order: A→T, T→A, G→C, C→G.",
      ],
      solution: [
        "Apply DNA base-pairing rules: A pairs with T, and C pairs with G.",
        "A→T, T→A, G→C, C→G, C→G, A→T.",
        "The complementary strand sequence is **TACGGT**.",
      ],
    },
    {
      id: "exam-bio-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "dna-genes-chromosomes",
      question: "Which scientist produced the decisive X-ray diffraction photograph ('Photo 51') that provided crucial evidence for DNA's double-helix structure?",
      options: [
        "Charles Darwin",
        "Gregor Mendel",
        "Carl Linnaeus",
        "Rosalind Franklin",
      ],
      answerIndex: 3,
      hints: [
        "Think of the chemist working at King's College London alongside Maurice Wilkins in the early 1950s.",
        "Watson and Crick used her X-ray diffraction data to build their double-helix model.",
      ],
      explanation:
        "Rosalind Franklin captured Photo 51 using X-ray crystallography, revealing the helical geometry that enabled Watson and Crick to deduce the DNA double helix.",
    },
    {
      id: "exam-bio-q04",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "dna-and-evolution",
      guideRef: "variation-inheritance",
      question: "Which human characteristic is an example of discontinuous variation determined solely by inherited genes?",
      options: [
        "Human ABO blood group",
        "Adult standing height",
        "Length of a knee scar",
        "Total adult body mass",
      ],
      answerIndex: 0,
      hints: [
        "Discontinuous variation falls into distinct separate categories with no in-between values.",
        "Check which trait is unaffected by diet, exercise, or accidents.",
      ],
      explanation:
        "ABO blood group falls into four distinct inherited categories (A, B, AB, O) with no environmental influence. Height and body mass are continuous (genes + environment), while scars are purely environmental.",
    },
    {
      id: "exam-bio-q05",
      kind: "short",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "variation-inheritance",
      question: "In pea plants, the allele for tall stems (T) is dominant over the allele for dwarf stems (t). Two heterozygous tall plants (Tt × Tt) are crossed. What percentage of the offspring are predicted to have dwarf stems?",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        { spec: { type: "number", value: 50 }, feedback: "Draw a 2 × 2 Punnett square for Tt × Tt—only 1 out of 4 boxes is tt." },
        { spec: { type: "number", value: 75 }, feedback: "75% are predicted to be TALL (TT, Tt, Tt); the question asks for DWARF (tt) offspring." },
      ],
      hints: [
        "Draw a Punnett square crossing gametes T and t from one parent with T and t from the other parent.",
        "Count how many of the 4 equally likely genotypes are homozygous recessive (tt) and convert to a percentage.",
      ],
      solution: [
        "Gametes from each parent: T and t.",
        "Punnett square outcomes: TT, Tt, Tt, tt (4 equally likely combinations).",
        "Only tt produces dwarf stems: {{1 / 4 = 25}}%.",
      ],
    },
    {
      id: "exam-bio-q06",
      kind: "mcq",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "variation-inheritance",
      question: "A biologist measures the standing height of 150 Year 9 students to the nearest centimetre. Which chart best displays the distribution of this continuous variation?",
      options: [
        "A pie chart with separate wedges for each student",
        "A bar chart with wide gaps separating distinct categories",
        "A histogram with touching bars forming a bell-shaped curve",
        "A dichotomous branching key sorted by student initials",
      ],
      answerIndex: 2,
      hints: [
        "Height can take any numerical value within a range (continuous variation).",
        "Bar charts with gaps are for discontinuous categories; what shows grouped continuous measurements?",
      ],
      explanation:
        "Continuous variation such as height is grouped into class intervals and plotted as a histogram with touching bars, typically showing a normal (bell-shaped) distribution.",
    },
    {
      id: "exam-bio-q07",
      kind: "written",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "natural-selection",
      marks: 4,
      question: "During the 19th-century Industrial Revolution, soot darkened tree trunks across industrial cities and the dark-winged peppered moth became far more common than the pale form. Explain how this shift occurred through Darwin's theory of natural selection.",
      hints: [
        "Start with genetic variation (or random mutations) already existing in the moth population.",
        "Explain which moths survived predation better on soot-darkened trees and why.",
        "Finish by linking survival to reproduction and passing alleles to future generations.",
      ],
      modelAnswer:
        "Genetic variation caused by random mutations already existed in the moth population, producing both pale and dark alleles. On soot-darkened bark, dark moths were better camouflaged so bird predators ate fewer of them and more dark moths survived. These surviving dark moths reproduced more successfully and passed the advantageous allele for dark wings to their offspring, increasing its frequency over many generations.",
      markScheme: [
        { point: "Mentions existing genetic variation / mutation producing both pale and dark forms.", keywords: ["variation", "mutation", "mutations"] },
        { point: "Explains better camouflage on darkened bark reduced predation so dark moths survived.", keywords: ["camouflage", "camouflaged", "predator", "predators", "eaten", "survive", "survived"] },
        { point: "States that surviving dark moths reproduced more successfully.", keywords: ["reproduce", "reproduced", "breed", "bred", "mate"] },
        { point: "States they passed the advantageous allele/gene to offspring over many generations.", keywords: ["allele", "alleles", "gene", "genes", "offspring", "generations"] },
      ],
      commonError: "Never say individual moths 'decided to turn dark' or 'adapted during their lifetime to match the bark'.",
    },
    {
      id: "exam-bio-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "natural-selection",
      question: "Why can antibiotic-resistant strains of bacteria evolve over just a few years in hospitals?",
      options: [
        "Antibiotics deliberately rewrite bacterial chromosomes to help them survive",
        "Bacteria reproduce rapidly, so rare resistance mutations survive treatment and multiply",
        "Individual bacteria learn how to block medicines and teach nearby cells",
        "Bacteria have no DNA, allowing them to ignore chemical medicines completely",
      ],
      answerIndex: 1,
      hints: [
        "Recall how fast bacteria divide and how new alleles arise.",
        "What happens when an antibiotic kills non-resistant cells while a few mutated cells survive?",
      ],
      explanation:
        "Bacteria divide very rapidly (often every 20 minutes). Random mutations occasionally grant resistance; when antibiotics kill non-resistant bacteria, resistant mutants survive with less competition and multiply rapidly.",
    },
    {
      id: "exam-bio-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "fossils-extinction-biodiversity",
      question: "Why are there major gaps in the fossil record for many of Earth's earliest living organisms?",
      options: [
        "Early organisms contained solid metal skeletons that dissolved in rain",
        "Fossils only ever form inside active volcanic lava flows on mountain tops",
        "Early organisms lived exclusively on dry desert sand where rock never forms",
        "Early organisms were mostly soft-bodied and decayed before fossilisation could occur",
      ],
      answerIndex: 3,
      hints: [
        "Which body parts fossilise easily (bones, shells) vs rot away quickly?",
        "Also consider what earth movements and erosion can do to fossils already formed.",
      ],
      explanation:
        "Many early organisms were soft-bodied and decayed completely before minerals could replace them; in addition, geological activity and erosion have destroyed many fossils that did form.",
    },
    {
      id: "exam-bio-q10",
      kind: "written",
      difficulty: "core",
      topicId: "dna-and-evolution",
      guideRef: "fossils-extinction-biodiversity",
      marks: 3,
      question: "State two different causes of species extinction and explain how seed banks help protect global plant biodiversity.",
      hints: [
        "Give two distinct causes such as habitat destruction/deforestation and climate change, new predators/diseases, or overhunting.",
        "Explain what a seed bank stores and how those stored seeds can be used in the future.",
      ],
      modelAnswer:
        "Two causes of extinction are habitat loss (such as deforestation) and rapid climate change (or new predators, diseases, and overhunting). Seed banks dry and freeze seeds from thousands of wild plant species in secure storage, preserving their genetic diversity so endangered or extinct-in-the-wild plants can be regrown and reintroduced to habitats in the future.",
      markScheme: [
        { point: "States a first cause: habitat loss / habitat destruction / deforestation.", keywords: ["habitat", "deforestation"] },
        { point: "States a second distinct cause: climate change, new predator, disease, pollution, overhunting, or catastrophe.", keywords: ["climate", "predator", "disease", "overhunting", "poaching", "pollution", "invasive", "catastroph", "asteroid"] },
        { point: "Explains that seed banks store/freeze viable seeds (genetic material) long-term so species can be regrown/reintroduced.", keywords: ["freeze", "frozen", "store", "stored", "storage", "genetic", "reintroduc", "regrow"] },
      ],
    },

    // =========================================================================
    // BOTANY: PLANT BIOLOGY & FIELDWORK (10 Questions)
    // =========================================================================
    {
      id: "exam-bio-q11",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "botany",
      guideRef: "leaf-structure-cells",
      question: "Which layer of a green leaf consists of tall, tightly packed cells crammed with chloroplasts just beneath the upper epidermis?",
      options: [
        "Palisade mesophyll layer",
        "Waxy protective cuticle",
        "Spongy air-space mesophyll",
        "Lower stomatal guard layer",
      ],
      answerIndex: 0,
      hints: [
        "This tissue is positioned near the sunlit top surface of the leaf to trap maximum light.",
        "Its name comes from upright fence stakes packed closely together.",
      ],
      explanation:
        "The palisade mesophyll sits directly beneath the transparent upper epidermis; its column-shaped cells are packed with chloroplasts to maximise light absorption for photosynthesis.",
    },
    {
      id: "exam-bio-q12",
      kind: "mcq",
      difficulty: "core",
      topicId: "botany",
      guideRef: "leaf-structure-cells",
      question: "Why do root hair cells have a long, narrow finger-like projection and contain NO chloroplasts?",
      options: [
        "To push soil stones apart and reflect sunlight down to the deep taproot",
        "To store starch bubbles and trap carbon dioxide gas directly from soil",
        "To provide a large surface area for water uptake, while underground soil has no light",
        "To pump sugar out into the soil and prevent water entering by osmosis",
      ],
      answerIndex: 2,
      hints: [
        "Think about the job of a root hair cell in soil: absorbing water and dissolved mineral ions.",
        "Why would making chloroplasts underground waste the plant's energy?",
      ],
      explanation:
        "The thin extension dramatically increases surface area for faster absorption of water and mineral ions. Because roots grow underground in total darkness, chloroplasts would be useless.",
    },
    {
      id: "exam-bio-q13",
      kind: "short",
      difficulty: "core",
      topicId: "botany",
      guideRef: "photosynthesis-starch",
      question: "In the balanced symbol equation for photosynthesis, 6CO₂ + 6H₂O → C₆H₁₂O₆ + nO₂, what whole number value must n have to balance the oxygen atoms?",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "Each O₂ molecule already contains 2 oxygen atoms—count carefully: 18 total O on the left minus 6 in glucose leaves 12 atoms = 6 O₂ molecules." },
        { spec: { type: "number", value: 1 }, feedback: "Check total oxygen atoms on the left side (6 × 2 + 6 × 1 = 18)." },
      ],
      hints: [
        "Count the total number of oxygen atoms on the left side of the arrow: 6CO₂ has 12 and 6H₂O has 6.",
        "Subtract the 6 oxygen atoms inside glucose (C₆H₁₂O₆), then divide the remaining oxygen atoms by 2 because oxygen gas is O₂.",
      ],
      solution: [
        "Oxygen atoms on the left: {{6 * 2 + 6 * 1 = 18}}.",
        "Glucose ({{C_6 H_12 O_6}}) uses 6 oxygen atoms, leaving {{18 - 6 = 12}} oxygen atoms.",
        "Since each {{O_2}} molecule has 2 atoms, {{n = 12 / 2 = 6}}.",
      ],
    },
    {
      id: "exam-bio-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "botany",
      guideRef: "photosynthesis-starch",
      question: "When testing a green leaf for starch, why is the softened leaf placed in a tube of hot ethanol inside a hot-water bath with the Bunsen burner turned OFF?",
      options: [
        "Ethanol turns starch blue-black directly and cools the boiling water safely",
        "Ethanol dissolves green chlorophyll so the iodine colour change is clear, and ethanol is flammable",
        "Ethanol adds extra glucose to the leaf cells while preventing glass test tubes cracking",
        "Ethanol kills leaf guard cells so stomata stay closed when iodine drops are added",
      ],
      answerIndex: 1,
      hints: [
        "Why would a bright green leaf make it hard to spot an orange-brown to blue-black colour change?",
        "What fire hazard does ethanol pose near a naked Bunsen flame?",
      ],
      explanation:
        "Hot ethanol extracts green chlorophyll so the pale leaf clearly shows whether iodine turns blue-black. Turning the Bunsen flame off prevents highly flammable ethanol vapour from catching fire.",
    },
    {
      id: "exam-bio-q15",
      kind: "short",
      difficulty: "warmup",
      topicId: "botany",
      guideRef: "photosynthesis-starch",
      question: "An aquatic pondweed shoot releases 45 oxygen bubbles in 3 minutes under a bright lamp. Calculate the mean rate of photosynthesis in bubbles per minute.",
      answer: { type: "number", value: 15, display: "15" },
      traps: [
        { spec: { type: "number", value: 135 }, feedback: "Divide the total bubbles by the time in minutes rather than multiplying." },
      ],
      hints: [
        "Rate in bubbles per minute = total bubbles ÷ time in minutes.",
        "Divide 45 by 3.",
      ],
      solution: [
        "Rate = total bubbles ÷ time in minutes.",
        "{{45 / 3 = 15}} bubbles per minute.",
      ],
    },
    {
      id: "exam-bio-q16",
      kind: "written",
      difficulty: "core",
      topicId: "botany",
      guideRef: "photosynthesis-starch",
      marks: 3,
      question: "A graph of photosynthesis rate against light intensity first rises steeply and then levels off into a flat horizontal plateau even as brightness keeps rising. Explain BOTH sections of the graph.",
      hints: [
        "In the rising section, which factor is holding back or controlling the rate?",
        "On the flat plateau, why does adding even more light fail to increase the rate further?",
        "Name at least one other specific factor that could now be limiting the reaction.",
      ],
      modelAnswer:
        "In the rising section, light intensity is the limiting factor, so increasing light supplies more energy and increases the rate of photosynthesis. Once the graph flattens out, light is no longer the limiting factor because another factor restricts the rate—such as low carbon dioxide concentration or an unsuitable temperature.",
      markScheme: [
        { point: "States that initially light intensity is the limiting factor so more light increases rate.", keywords: ["limiting factor", "limiting"] },
        { point: "States that on the plateau light is no longer limiting because another factor restricts the rate.", keywords: ["no longer", "another factor", "other factor", "different factor"] },
        { point: "Names carbon dioxide concentration or temperature (or chlorophyll amount).", keywords: ["carbon dioxide", "co2", "temperature"] },
      ],
    },
    {
      id: "exam-bio-q17",
      kind: "mcq",
      difficulty: "core",
      topicId: "botany",
      guideRef: "plant-transport",
      question: "Which statement accurately compares transport inside xylem vessels and phloem tubes?",
      options: [
        "Xylem carries dissolved sugars downward; phloem carries water and mineral ions upward",
        "Both xylem and phloem are dead hollow lignin tubes transporting water upward only",
        "Xylem transports oxygen gas to roots; phloem transports carbon dioxide to leaves",
        "Xylem transports water and mineral ions upward; phloem translocates dissolved sugars both ways",
      ],
      answerIndex: 3,
      hints: [
        "Remember: Xylem = Water (Xy-Wa) moving up the transpiration stream; Phloem = Food (Phl-Food).",
        "Can sugars travel both down to roots and up to growing buds/fruits?",
      ],
      explanation:
        "Dead, lignin-strengthened xylem vessels carry water and mineral ions upward from roots to leaves, while living phloem cells translocate dissolved sugars in both directions to wherever the plant needs energy or storage.",
    },
    {
      id: "exam-bio-q18",
      kind: "short",
      difficulty: "core",
      topicId: "botany",
      guideRef: "plant-transport",
      question: "In a potometer experiment, an air bubble moves 36 mm along a narrow capillary tube in 4 minutes. Calculate the rate of water uptake in mm/min.",
      answer: { type: "number", value: 9, display: "9 mm/min" },
      traps: [
        { spec: { type: "number", value: 144 }, feedback: "Divide distance moved by time taken (36 ÷ 4) rather than multiplying." },
      ],
      hints: [
        "Rate = distance moved ÷ time taken.",
        "Divide 36 mm by 4 minutes.",
      ],
      solution: [
        "Use rate = distance ÷ time.",
        "{{36 / 4 = 9}} mm/min.",
      ],
    },
    {
      id: "exam-bio-q19",
      kind: "mcq",
      difficulty: "core",
      topicId: "botany",
      guideRef: "reproduction-fieldwork",
      question: "Which combination of floral features is typical of a wind-pollinated grass rather than an insect-pollinated flower?",
      options: [
        "Small dull petals, feathery exposed stigmas, and huge clouds of smooth light pollen",
        "Large brightly coloured petals, sweet nectar glands, and sticky spiky pollen grains",
        "Strong floral scent, enclosed stiff anthers, and very small numbers of heavy pollen grains",
        "Nectar guides on colourful petals, sticky internal stigma, and waxy waterproof seeds",
      ],
      answerIndex: 0,
      hints: [
        "Wind does not see bright petals or drink nectar—so what does a wind-pollinated plant save energy on?",
        "Think about how stigmas catch drifting pollen from the air and how pollen must fly easily.",
      ],
      explanation:
        "Wind-pollinated flowers have tiny dull petals and no nectar, dangling anthers and feathery stigmas outside to release and catch huge amounts of light, smooth pollen.",
    },
    {
      id: "exam-bio-q20",
      kind: "short",
      difficulty: "challenge",
      topicId: "botany",
      guideRef: "reproduction-fieldwork",
      strategy: "Find density per square metre first, then multiply by total habitat area",
      question: "During Year 9 bushland fieldwork in a rectangular clearing measuring 20 m by 15 m, students place 10 random quadrats of area 0.5 m² each and count a total of 35 ferns across all 10 quadrats. Calculate the estimated total fern population in the entire clearing.",
      answer: { type: "number", value: 2100, display: "2100" },
      traps: [
        { spec: { type: "number", value: 1050 }, feedback: "Each quadrat is only 0.5 m² (half a square metre), so multiply density per quadrat by 2 to get ferns per m²!" },
        { spec: { type: "number", value: 350 }, feedback: "Check the total area of the 20 m × 15 m clearing (300 m²) and total sampled area (5 m²)." },
      ],
      hints: [
        "Calculate the total area of the clearing: 20 m × 15 m.",
        "Calculate the total area sampled by 10 quadrats of 0.5 m² each (10 × 0.5 m²).",
        "Scale up the 35 ferns found in the sampled area to the full area of the clearing.",
      ],
      solution: [
        "Total clearing area: {{20 * 15 = 300}} m².",
        "Total area sampled: {{10 * 0.5 = 5}} m² (density = {{35 / 5 = 7}} ferns per m²).",
        "Estimated population: {{7 * 300 = 2100}} ferns.",
      ],
    },

    // =========================================================================
    // WORKING SCIENTIFICALLY IN BIOLOGY (5 Questions)
    // =========================================================================
    {
      id: "exam-bio-q21",
      kind: "mcq",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "variables-fair-testing",
      question: "A pupil investigates how water temperature affects pondweed photosynthesis by placing a lamp 15 cm away, using 0.5% sodium hydrogencarbonate solution, testing water at 15 °C, 25 °C, and 35 °C, and counting oxygen bubbles per minute. What are the independent and dependent variables?",
      options: [
        "Independent variable: lamp distance; Dependent variable: water temperature",
        "Independent variable: bubble count per minute; Dependent variable: water temperature",
        "Independent variable: water temperature; Dependent variable: bubble count per minute",
        "Independent variable: concentration of solution; Dependent variable: lamp distance",
      ],
      answerIndex: 2,
      hints: [
        "The independent variable (IV) is the ONE factor deliberately changed by the investigator.",
        "The dependent variable (DV) is the outcome measured to record the effect.",
      ],
      explanation:
        "Water temperature—varied across 15 °C, 25 °C, and 35 °C—is deliberately changed as the independent variable, and bubbles per minute are measured as the dependent variable. Lamp distance and solution concentration are control variables.",
    },
    {
      id: "exam-bio-q22",
      kind: "short",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "diagrams-tables-calculations",
      question: "A pupil repeats a photosynthesis bubble count four times at 25 °C and records: 24, 26, 11, and 25 bubbles per minute. Excluding the anomalous result, calculate the mean rate (in bubbles per minute).",
      answer: { type: "number", value: 25, display: "25" },
      traps: [
        { spec: { type: "number", value: 21.5 }, feedback: "21.5 includes the clear anomaly (11)—exclude 11 and divide the remaining three values by 3!" },
        { spec: { type: "number", value: 18.75 }, feedback: "After excluding the anomaly (11), divide the sum of the 3 valid results by 3, not by 4!" },
      ],
      hints: [
        "Spot the anomalous reading that lies far away from the tightly clustered readings.",
        "Add only the three concordant readings and divide by 3.",
      ],
      solution: [
        "Identify the anomaly: 11 is far lower than 24, 26, and 25, so exclude it.",
        "Mean of remaining 3 values: {{(24 + 26 + 25) / 3 = 75 / 3 = 25}} bubbles per minute.",
      ],
    },
    {
      id: "exam-bio-q23",
      kind: "short",
      difficulty: "core",
      topicId: "scientific-skills",
      guideRef: "diagrams-tables-calculations",
      question: "Five sun-exposed hibiscus leaves have lengths of 6.4 cm, 7.2 cm, 5.8 cm, 8.3 cm, and 6.9 cm. Calculate the range of these leaf lengths (in cm).",
      answer: { type: "number", value: 2.5, display: "2.5 cm" },
      traps: [
        { spec: { type: "number", value: 6.92 }, feedback: "6.92 cm is the mean—range is the largest value minus the smallest value." },
      ],
      hints: [
        "Find the largest leaf length and the smallest leaf length in the list.",
        "Subtract the smallest value from the largest value.",
      ],
      solution: [
        "Largest value = 8.3 cm; smallest value = 5.8 cm.",
        "Range = {{8.3 - 5.8 = 2.5}} cm.",
      ],
    },
    {
      id: "exam-bio-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "graphing-conclusions",
      marks: 3,
      question: "Using a fan and a potometer, students tested wind speeds of 0, 2, 4, and 6 m/s and recorded water uptake rates of 0.4, 1.1, 1.8, and 2.5 mm/min. Name the best graph to plot, describe the pattern using data from the experiment, and explain biologically why moving air causes this effect.",
      hints: [
        "Are both wind speed and water uptake continuous numerical variables?",
        "Describe how uptake changes from 0 to 6 m/s citing exact readings.",
        "Think about water vapour around the leaf stomata and the concentration gradient for diffusion.",
      ],
      modelAnswer:
        "Plot a line graph (or scatter graph with a straight line of best fit) because both variables are continuous. As wind speed increases steadily from 0 to 6 m/s, water uptake rises linearly from 0.4 to 2.5 mm/min (increasing by 0.7 mm/min for every 2 m/s rise). Moving air blows humid water vapour away from around the stomata, maintaining a steep concentration gradient so water evaporates and diffuses out of the leaf faster.",
      markScheme: [
        { point: "Chooses a line graph / scatter graph with a line of best fit (both variables continuous).", keywords: ["line graph", "scatter", "line of best fit"] },
        { point: "Describes the positive/linear increase citing specific data values (0.4 to 2.5 mm/min).", keywords: ["0.4", "2.5", "linear", "steadily", "increases from"] },
        { point: "Explains that wind blows away water vapour around stomata, keeping a steep concentration gradient for faster diffusion/evaporation.", keywords: ["vapour", "vapor", "concentration gradient", "diffusion", "evaporat", "stomata"] },
      ],
    },
    {
      id: "exam-bio-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "scientific-skills",
      guideRef: "evaluating-techniques",
      marks: 3,
      question: "To estimate clover density on a sports field, a student throws a quadrat twice toward the greenest patches and counts individual leaves rather than whole plants. Identify two flaws in this technique and suggest a specific improvement to make the estimate unbiased and reliable.",
      hints: [
        "Why is aiming at the greenest patches scientifically invalid?",
        "What is wrong with taking only two throws (and counting leaves instead of whole plants)?",
        "Suggest how to place quadrats genuinely randomly and how to improve reliability.",
      ],
      modelAnswer:
        "First, aiming toward green patches introduces severe sampling bias that overestimates the true population. Second, taking only two throws is far too small a sample size to be reliable (and counting separate leaves instead of whole plants distorts plant numbers). To improve the investigation, lay out tape measures as a grid, use a random number generator to pick coordinates, take at least 10 quadrats across the field, and count whole clover plants consistently.",
      markScheme: [
        { point: "Identifies sampling bias from aiming at green patches instead of random placement.", keywords: ["bias", "biased", "overestimate", "not random", "unrepresentative"] },
        { point: "Identifies tiny sample size (only 2 quadrats / unreliable) OR inconsistent counting of leaves instead of whole plants.", keywords: ["sample size", "too few", "two is", "reliable", "unreliable", "whole plants"] },
        { point: "Gives a concrete improvement: use random coordinates / random number generator AND increase the number of quadrats (e.g. 10+).", keywords: ["random number", "coordinates", "grid", "more quadrats", "10 quadrats", "larger sample"] },
      ],
    },
  ],
};
