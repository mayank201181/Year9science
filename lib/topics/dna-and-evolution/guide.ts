import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "dna-and-evolution",
  title: "DNA, Variation & Evolution",
  strand: "Biology",
  icon: "🧬",
  summary: "Decode the DNA double helix, classify genetic and environmental variation, master Punnett squares, and trace how natural selection shapes life on Earth.",
  intro: "Packed inside the tiny nucleus of almost every one of your 37 trillion body cells is nearly 2 metres of coiled chemical code — DNA. In this topic, you will zoom from molecular base pairs all the way up to traits, populations, Darwin's natural selection, fossils, and global biodiversity.",
  guide: [
    {
      id: "dna-genes-chromosomes",
      heading: "Chromosomes, Genes & the DNA Double Helix",
      discovery: {
        problem: "A human skin cell contains **46 chromosomes**. If a sperm cell and an egg cell each also contained 46 chromosomes, what would happen to the chromosome count of every human generation after fertilisation?",
        idea: "The count would double every generation — 46 → 92 → 184 → 368 — making cells impossible to function! To keep the species number steady at **46 (23 pairs)**, human sex cells (**gametes**: sperm and egg) each carry **half** the normal number: **23 single chromosomes**. At fertilisation, `23 + 23 = 46` restores the full diploid set, with half inherited from each parent!",
      },
      body: [
        "Genetic instructions are organised in a strict size hierarchy from largest to smallest: **Cell → Nucleus → Chromosomes → DNA molecule → Genes → Bases**.",
        "### 1. Chromosomes, Body Cells & Gametes\n- **Chromosomes** are long, tightly coiled strands of DNA found inside the **nucleus** of eukaryotic cells.\n- Human **body cells** (diploid) contain **46 chromosomes**, arranged in **23 matching pairs** (one chromosome in each pair comes from the mother and one from the father; pair 23 determines biological sex: `XX` female, `XY` male).\n- Human **gametes** (sex cells — sperm and eggs) are haploid and contain **23 single (unpaired) chromosomes**. At **fertilisation**, the nuclei fuse (`23 + 23 = 46`) to form a fertilised egg (**zygote**).\n- Different species have different chromosome numbers (e.g. fruit flies have 8, dogs have 78, garden peas have 14) — a bigger number does NOT mean a 'more complex' organism!",
        "### 2. Genes & the DNA Double Helix\n- **DNA** (*deoxyribonucleic acid*) is a giant polymer built from two strands twisted around each other into a **double helix** — like a twisted rope ladder.\n- A **gene** is a short section of DNA on a chromosome that codes for a specific **protein** (and therefore influences a characteristic such as eye pigment or blood group). The entire set of genetic material in an organism is its **genome**.\n- The 'rungs' of the DNA ladder are formed by four chemical **bases**: **Adenine (A)**, **Thymine (T)**, **Cytosine (C)**, and **Guanine (G)**.\n- **Complementary Base Pairing:** Bases ONLY pair with their exact partner across the two strands: **A always pairs with T**, and **C always pairs with G**. Because of this, **Chargaff's Rule** always holds in double-stranded DNA: `%A = %T`, `%C = %G`, and `%A + %T + %C + %G = 100%`.",
        "### 3. How Scientists Discovered the Structure (1953)\n- In 1952, **Rosalind Franklin** and **Maurice Wilkins** at King's College London captured sharp **X-ray diffraction** images of DNA — most famously **Photo 51**, whose crisp X-shaped cross proved DNA was a uniform helix.\n- Using Franklin's X-ray measurements alongside Chargaff's base-ratio rules, **James Watson** and **Francis Crick** at Cambridge built the famous 3D **double-helix** model in 1953, explaining how DNA copies itself cleanly before cell division.",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scale hierarchy from cell and nucleus to chromosome pair and uncoiled DNA double helix showing A-T and C-G complementary base pairs">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">From Cell to DNA Double Helix (Complementary Base Pairing)</text>

  <g transform="translate(18,46)">
    <circle cx="52" cy="84" r="46" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/>
    <circle cx="52" cy="84" r="21" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
    <path d="M 44 76 L 60 92 M 60 76 L 44 92" stroke="var(--brand)" stroke-width="2"/>
    <text x="52" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Body Cell</text>
    <text x="52" y="165" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Nucleus: 46</text>
    <text x="52" y="178" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(23 pairs)</text>
  </g>

  <line x1="118" y1="130" x2="144" y2="130" stroke="var(--ink-2)" stroke-width="1.6"/>
  <polygon points="148,130 140,125 140,135" fill="var(--ink-2)"/>

  <g transform="translate(152,52)">
    <rect x="0" y="0" width="96" height="146" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <path d="M 28 24 C 36 52 36 74 28 102 M 46 24 C 38 52 38 74 46 102" fill="none" stroke="var(--brand)" stroke-width="5" stroke-linecap="round"/>
    <path d="M 56 24 C 64 52 64 74 56 102 M 74 24 C 66 52 66 74 74 102" fill="none" stroke="var(--good)" stroke-width="5" stroke-linecap="round"/>
    <rect x="24" y="42" width="26" height="7" rx="2" fill="var(--bad)"/>
    <text x="48" y="122" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Chromosome</text>
    <text x="48" y="136" text-anchor="middle" font-size="9.5" fill="var(--bad)">Red band = 1 gene</text>
  </g>

  <line x1="252" y1="130" x2="278" y2="130" stroke="var(--ink-2)" stroke-width="1.6"/>
  <polygon points="282,130 274,125 274,135" fill="var(--ink-2)"/>

  <g transform="translate(290,42)">
    <rect x="0" y="0" width="252" height="190" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <text x="126" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">DNA Double Helix (Base Pairs)</text>
    <path d="M 24 44 Q 75 26 126 56 T 228 44" fill="none" stroke="var(--ink)" stroke-width="3.2"/>
    <path d="M 24 124 Q 75 142 126 112 T 228 124" fill="none" stroke="var(--ink)" stroke-width="3.2"/>

    <line x1="46" y1="42" x2="46" y2="83" stroke="var(--brand)" stroke-width="5"/>
    <line x1="46" y1="85" x2="46" y2="126" stroke="var(--bad)" stroke-width="5"/>
    <text x="46" y="67" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">A</text>
    <text x="46" y="109" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">T</text>

    <line x1="88" y1="42" x2="88" y2="83" stroke="var(--good)" stroke-width="5"/>
    <line x1="88" y1="85" x2="88" y2="126" stroke="var(--ink-2)" stroke-width="5"/>
    <text x="88" y="67" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">C</text>
    <text x="88" y="109" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">G</text>

    <line x1="130" y1="56" x2="130" y2="83" stroke="var(--bad)" stroke-width="5"/>
    <line x1="130" y1="85" x2="130" y2="112" stroke="var(--brand)" stroke-width="5"/>
    <text x="130" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">T</text>
    <text x="130" y="103" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">A</text>

    <line x1="172" y1="58" x2="172" y2="83" stroke="var(--ink-2)" stroke-width="5"/>
    <line x1="172" y1="85" x2="172" y2="110" stroke="var(--good)" stroke-width="5"/>
    <text x="172" y="75" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">G</text>
    <text x="172" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">C</text>

    <line x1="212" y1="47" x2="212" y2="83" stroke="var(--brand)" stroke-width="5"/>
    <line x1="212" y1="85" x2="212" y2="121" stroke="var(--bad)" stroke-width="5"/>
    <text x="212" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">A</text>
    <text x="212" y="107" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">T</text>

    <rect x="14" y="144" width="224" height="36" rx="6" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/>
    <text x="126" y="159" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">A ↔ T (Adenine–Thymine) · C ↔ G (Cytosine–Guanine)</text>
    <text x="126" y="173" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">%A = %T and %C = %G · Sugar-phosphate backbone</text>
  </g>
</svg>`,
      diagramCaption: "Hierarchy from cell nucleus (46 chromosomes = 23 pairs) down to a single gene and complementary DNA base pairs (A–T, C–G).",
      whyItWorks: "Complementary base pairing (`A–T`, `C–G`) means each single strand acts as a perfect chemical template for the opposite strand. When a cell divides, the helix unzips down the middle and builds two identical double helices — copying the genetic code with extraordinary accuracy!",
      keyPoints: [
        "Size hierarchy (largest → smallest): **Cell → Nucleus → Chromosomes → DNA → Gene → Bases**.",
        "Human body cells contain **46 chromosomes (23 pairs)**; human **gametes** (sperm and egg) contain **23 single chromosomes**.",
        "A **gene** is a short section of DNA on a chromosome that codes for a specific **protein / characteristic**.",
        "DNA is a **double helix** whose two strands are joined by complementary base pairs: **A pairs with T** and **C pairs with G**.",
        "**Rosalind Franklin**'s X-ray diffraction (Photo 51) and **Maurice Wilkins**'s work helped **Watson and Crick** (1953) deduce the double-helix model.",
      ],
      strategies: [
        "Remember **A–T / C–G** using **'Apples in the Tree, Cars in the Garage'** (or straight letters A/T together, curved letters C/G together!).",
        "For Chargaff percentage questions (`%A` given → find `%C`): first double `%A` (`%A + %T`), subtract from `100%` to get `%C + %G`, then divide by `2`!",
        "Check whether a question asks for **body cells** (diploid, `2n`) or **gametes** (haploid, `n = body ÷ 2`).",
      ],
      thinkDeeper: "Human red blood cells lose their nucleus as they mature so they can pack in more haemoglobin to carry oxygen. Can forensic scientists extract nuclear DNA from a mature red blood cell — and if not, which cells in a blood sample DO contain DNA?",
      workedExamples: [
        {
          title: "Complementary Strand & Chargaff Base-Pair Calculation",
          problem: "(a) Write the complementary DNA strand for `A T G C C A T G`. (b) A sample of double-stranded DNA contains **22% Adenine (A)**. Calculate the percentage of **Cytosine (C)**.",
          steps: [
            "(a) Match every base with its partner (`A ↔ T`, `C ↔ G`): `A→T`, `T→A`, `G→C`, `C→G`, `C→G`, `A→T`, `T→A`, `G→C` → **T A C G G T A C**.",
            "(b) Because A always pairs with T, `%T = %A = 22%`.",
            "Together, `%A + %T = 22% + 22% = 44%`.",
            "The remaining percentage is shared equally between C and G: `100% − 44% = 56%`, so `%C =` {{56 / 2}} = **28%**.",
          ],
          answer: "(a) T A C G G T A C; (b) 28% Cytosine.",
          yourTurn: {
            question: "A sample of double-stranded DNA contains 18% Guanine (G). Calculate the percentage of Adenine (A).",
            answer: { type: "number", value: 32, display: "32%" },
            solution: "%C = %G = 18%, so %G + %C = 36%. Remaining %A + %T = 100% − 36% = 64%. Since %A = %T, %A = 64% ÷ 2 = 32%.",
          },
        },
        {
          title: "Chromosomes in Body Cells vs Gametes",
          problem: "A chimpanzee body cell contains **48 chromosomes**. How many chromosomes are present in (a) a chimpanzee sperm cell, (b) a chimpanzee fertilised egg (zygote), and (c) how many pairs of chromosomes are in a chimpanzee liver cell?",
          steps: [
            "(a) Sperm cells are **gametes** and hold **half** the body-cell count: {{48 / 2}} = **24 chromosomes**.",
            "(b) A zygote is formed when sperm (`24`) and egg (`24`) fuse: `24 + 24 =` **48 chromosomes**.",
            "(c) Liver cells are diploid body cells (`48` chromosomes) arranged in matching pairs: {{48 / 2}} = **24 pairs**.",
          ],
          answer: "(a) 24; (b) 48; (c) 24 pairs.",
          yourTurn: {
            question: "A domestic cat's body cell has 38 chromosomes. How many chromosomes are inside a single cat egg cell?",
            answer: { type: "number", value: 19 },
            solution: "Egg cells are gametes (haploid), carrying half the diploid body-cell count: 38 ÷ 2 = 19 chromosomes.",
          },
        },
      ],
    },
    {
      id: "variation-inheritance",
      heading: "Inherited vs Environmental & Continuous vs Discontinuous Variation",
      discovery: {
        problem: "Identical twins Maya and Sara share **100% identical DNA** — yet at age 15, Maya is 3 cm taller than Sara, speaks fluent Mandarin after living in Beijing, and has a small chin scar, while both have blood group **O** and brown eyes. Which of these differences prove that DNA alone does NOT control every human trait?",
        idea: "Because their genes are identical, **blood group O** and **brown eyes** are strictly **inherited (genetic)**, while **language** and the **scar** are purely **environmental**. Their 3 cm **height** difference proves that height is controlled by **BOTH genes and environment** (nutrition, sleep, health)!",
      },
      body: [
        "**Variation** is the range of differences between living organisms. Differences *between different species* are **interspecific** variation, while differences *within the same species* are **intraspecific** variation.",
        "### 1. Causes of Variation: Genetic, Environmental, or Both\n- **Inherited (genetic) variation:** Passed from parents to offspring through DNA in gametes — e.g. **ABO blood group**, natural eye colour, attached/free earlobes, and inherited conditions such as cystic fibrosis or polydactyly.\n- **Environmental variation:** Acquired during an organism's lifetime from surroundings, diet, injury, or learning — e.g. **scars**, **language/accent**, piercings, suntan, or a plant turning yellow in low light. Environmental traits do NOT alter DNA and are **not inherited**.\n- **Combined (both genetic and environmental):** Controlled by genes *and* shaped by the environment — e.g. **human height**, **body mass**, skin tone, plant leaf size, and athletic fitness.",
        "### 2. Continuous vs Discontinuous Variation\n- **Continuous variation:** Takes **any numerical value within a range** with no clear gaps (e.g. height, mass, hand span, leaf length). Usually controlled by **many genes plus environment**. Always plotted as a **histogram** (touching bars) or **frequency polygon**, producing a classic **bell-shaped normal distribution curve** (most individuals near the mean, few at extremes).\n- **Discontinuous variation:** Falls into **distinct, separate categories** with no intermediates (e.g. ABO blood group `A, B, AB, O`, biological sex, ability to roll tongue, flower colour in Mendel's peas). Usually controlled by **a single gene (or very few genes)** with little environmental effect. Always plotted as a **bar chart with gaps** between bars.",
        "### 3. Alleles, Dominance & Punnett Squares\n- **Alleles** are different versions of the same gene (e.g. `B` for brown eyes, `b` for blue eyes).\n- A **dominant allele** (`B`, capital letter) is always expressed in the observable characteristic (**phenotype**) even if only **one** copy is present (`BB` or `Bb`).\n- A **recessive allele** (`b`, lower-case letter) is ONLY expressed in the phenotype when **two** recessive copies are present (`bb`).\n- **Genotype** = the pair of alleles an organism carries (`BB` = **homozygous dominant**, `Bb` = **heterozygous** / carrier, `bb` = **homozygous recessive**).\n- A **2×2 Punnett square** crosses the possible gametes from each parent to predict the **probability** (not a guarantee!) of each offspring genotype and phenotype. For two heterozygous parents (`Bb × Bb`), the genotypes are `1 BB : 2 Bb : 1 bb` (25% : 50% : 25%) and the phenotype ratio is **3 dominant : 1 recessive** (75% : 25%).",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of continuous variation bell-curve histogram, discontinuous variation bar chart with gaps, and a Bb by Bb Punnett square showing 3 to 1 ratio">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="22" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Continuous vs Discontinuous Variation &amp; Punnett Squares</text>

  <g transform="translate(14,36)">
    <rect x="0" y="0" width="176" height="198" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <text x="88" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Continuous (Histogram)</text>
    <line x1="22" y1="146" x2="162" y2="146" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="22" y1="146" x2="22" y2="34" stroke="var(--ink)" stroke-width="1.6"/>
    <rect x="28" y="128" width="18" height="18" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="46" y="102" width="18" height="44" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="64" y="64" width="18" height="82" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="82" y="48" width="18" height="98" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="100" y="68" width="18" height="78" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="118" y="106" width="18" height="40" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <rect x="136" y="130" width="18" height="16" fill="var(--brand-soft)" stroke="var(--brand)"/>
    <path d="M 28 134 Q 91 18 154 134" fill="none" stroke="var(--brand)" stroke-width="2.2"/>
    <text x="88" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink)">Height / cm (touching bars)</text>
    <text x="88" y="182" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Bell-shaped normal curve</text>
  </g>

  <g transform="translate(200,36)">
    <rect x="0" y="0" width="166" height="198" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <text x="83" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Discontinuous (Bar)</text>
    <line x1="20" y1="146" x2="152" y2="146" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="20" y1="146" x2="20" y2="34" stroke="var(--ink)" stroke-width="1.6"/>
    <rect x="28" y="62" width="22" height="84" fill="var(--good)" opacity="0.85"/>
    <rect x="60" y="106" width="22" height="40" fill="var(--good)" opacity="0.85"/>
    <rect x="92" y="128" width="22" height="18" fill="var(--good)" opacity="0.85"/>
    <rect x="124" y="50" width="22" height="96" fill="var(--good)" opacity="0.85"/>
    <text x="39" y="159" text-anchor="middle" font-size="9.5" fill="var(--ink)">A</text>
    <text x="71" y="159" text-anchor="middle" font-size="9.5" fill="var(--ink)">B</text>
    <text x="103" y="159" text-anchor="middle" font-size="9.5" fill="var(--ink)">AB</text>
    <text x="135" y="159" text-anchor="middle" font-size="9.5" fill="var(--ink)">O</text>
    <text x="83" y="182" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Distinct groups · Gaps</text>
  </g>

  <g transform="translate(376,36)">
    <rect x="0" y="0" width="170" height="198" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
    <text x="85" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Punnett: Bb × Bb</text>
    <rect x="24" y="34" width="122" height="108" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.4"/>
    <line x1="60" y1="34" x2="60" y2="142" stroke="var(--ink)" stroke-width="1.4"/>
    <line x1="103" y1="34" x2="103" y2="142" stroke="var(--line)" stroke-width="1.2"/>
    <line x1="24" y1="68" x2="146" y2="68" stroke="var(--ink)" stroke-width="1.4"/>
    <line x1="24" y1="105" x2="146" y2="105" stroke="var(--line)" stroke-width="1.2"/>
    <text x="42" y="55" text-anchor="middle" font-size="10" fill="var(--ink-2)">×</text>
    <text x="81" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">B</text>
    <text x="124" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">b</text>
    <text x="42" y="91" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">B</text>
    <text x="42" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">b</text>
    <text x="81" y="91" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">BB</text>
    <text x="124" y="91" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Bb</text>
    <text x="81" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Bb</text>
    <text x="124" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">bb</text>
    <text x="85" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">3 Dominant (75%)</text>
    <text x="85" y="182" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">1 Recessive (25%)</text>
  </g>
</svg>`,
      diagramCaption: "Continuous variation forms a bell-curve histogram with touching bars; discontinuous variation uses a bar chart with gaps; Bb × Bb predicts a 3:1 dominant-to-recessive ratio.",
      whyItWorks: "Continuous traits like height are controlled by dozens of different genes *plus* nutrition, so tiny positive and negative effects add up randomly — mathematically creating a bell-shaped normal curve. Discontinuous traits like ABO blood group depend on a single gene locus, producing crisp, non-overlapping categories.",
      keyPoints: [
        "**Inherited** traits (blood group, eye colour) come solely from DNA; **environmental** traits (scars, language) come solely from surroundings; **combined** traits (height, mass) come from both.",
        "**Continuous variation** spans any value in a range → plotted as a **histogram / bell-shaped normal distribution curve**.",
        "**Discontinuous variation** falls into distinct categories with no intermediates → plotted as a **bar chart with gaps**.",
        "**Genotype** = pair of alleles (`BB`, `Bb`, `bb`); **Phenotype** = observable physical characteristic expressed.",
        "**Homozygous** = two identical alleles (`BB` or `bb`); **Heterozygous** = two different alleles (`Bb`, where the dominant allele masks the recessive).",
      ],
      strategies: [
        "Ask the **'In-Between Test'** to separate continuous from discontinuous: can someone have a value halfway between two measurements (like 161.4 cm between 161 cm and 162 cm)? Yes → **continuous**; No (no blood group halfway between A and O!) → **discontinuous**.",
        "Always check whether a Punnett square question asks for **genotype** (`25% BB, 50% Bb, 25% bb`) or **phenotype** (`75% dominant, 25% recessive`).",
        "Remember: each baby is an independent genetic 'coin toss' — a 25% probability means 1 in 4 chance *per pregnancy*, not that 4 children automatically guarantee 1 recessive child!",
      ],
      thinkDeeper: "Two brown-eyed parents (`Bb` and `Bb`) have three brown-eyed children. They think their fourth child is *guaranteed* to have blue eyes (`bb`) because the Punnett ratio is 3 : 1. Why is that reasoning mathematically wrong?",
      workedExamples: [
        {
          title: "Predicting Inheritance with a Punnett Square",
          problem: "In pea plants, tall stem (`T`) is dominant over short stem (`t`). A **heterozygous** tall plant (`Tt`) is crossed with a **short** plant (`tt`). Draw the Punnett square and calculate the percentage probability of producing a **short** pea plant.",
          steps: [
            "Write the parent genotypes: `Tt` (gametes `T` and `t`) × `tt` (gametes `t` and `t`).",
            "Fill the 2×2 grid: `(T × t) = Tt`, `(T × t) = Tt`, `(t × t) = tt`, `(t × t) = tt`.",
            "Identify phenotypes: `2 Tt` (tall) and `2 tt` (short) — a **1 : 1** ratio.",
            "Calculate probability of short (`tt`): {{2 / 4}} × 100% = **50%**.",
          ],
          answer: "Genotypes: 50% Tt, 50% tt; 50% probability of a short pea plant.",
          yourTurn: {
            question: "Brown fur (B) is dominant to white fur (b) in mice. Two heterozygous brown mice (Bb × Bb) are crossed. What percentage of their offspring are expected to have white fur (bb)?",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "Bb × Bb gives BB, Bb, Bb, bb. Only 1 out of 4 squares is bb (white fur): (1 ÷ 4) × 100% = 25%.",
          },
        },
        {
          title: "Classifying Variation and Choosing the Graph",
          problem: "A Year 9 biology class records two measurements across 120 students: (a) **hand span in mm**, and (b) **ABO blood group**. Classify each as continuous or discontinuous, identify its cause, and name the correct graph.",
          steps: [
            "(a) Hand span can take any value in a range (e.g. 168 mm, 168.5 mm, 169 mm) → **continuous variation**, caused by **both genes and environment**, plotted as a **histogram** (touching bars, bell curve).",
            "(b) ABO blood group has only four distinct categories (`A, B, AB, O`) with no intermediates → **discontinuous variation**, caused by **inherited (genetic) factors only**, plotted as a **bar chart with gaps**.",
          ],
          answer: "(a) Continuous, genetic + environmental, histogram; (b) Discontinuous, genetic only, bar chart.",
        },
      ],
    },
    {
      id: "natural-selection",
      heading: "Darwin's Theory of Evolution by Natural Selection",
      discovery: {
        problem: "A student claims: *'Before 1850, tree trunks in Manchester were pale, so peppered moths were pale. When coal factories covered trees in black soot, the light moths decided to turn dark so birds wouldn't eat them!'* What is biologically impossible about that explanation?",
        idea: "An individual moth CANNOT change its own DNA or 'choose' to turn black! Instead, a tiny number of **dark (melanic) moths ALREADY existed** in the population due to a random **genetic mutation**. On soot-darkened bark, birds spotted and ate the pale moths, while the already-dark moths survived, reproduced, and passed their **dark allele** to their offspring!",
      },
      body: [
        "**Evolution** is the gradual change in the inherited characteristics of a population over many generations, which can eventually lead to the formation of new species. In 1859, **Charles Darwin** published *On the Origin of Species* (after his voyage on HMS *Beagle* to the **Galápagos Islands** and independent work by **Alfred Russel Wallace** in the Malay Archipelago right next to Singapore!), explaining *how* evolution happens: **natural selection**.",
        "### The 5-Step Exam Mechanism of Natural Selection (V-C-S-R-G)\nTo earn full marks on ANY natural selection question, hit all five logical steps in order:\n1. **Variation (Mutation):** Within a population there is **genetic variation** caused by random **mutations** in DNA (e.g. some beetles are darker, some bacteria carry a resistance allele, some finches have thicker beaks).\n2. **Competition / Selection Pressure:** Organisms compete for limited resources (food, territory, mates) or face a **selection pressure** (predators, drought, cold, antibiotics).\n3. **Survival of the Better Adapted:** Individuals with an **advantageous adaptation** are more likely to **survive**.\n4. **Reproduction & Inheritance:** Surviving individuals **reproduce** and pass their advantageous **alleles (genes)** on to their offspring.\n5. **Generations (Population Shift):** Over **many generations**, the advantageous allele becomes much more common in the population.",
        "### Three Classic Case Studies\n- **Peppered Moths (*Biston betularia*):** Before the Industrial Revolution, pale speckled moths camouflaged against lichen-covered birch bark. Soot killed the lichen and blackened the trunks, so birds ate pale moths and **dark mutants survived and reproduced**. After Clean Air Acts cleaned the bark, selection reversed and pale moths rebounded!\n- **Darwin's Galápagos Finches:** Ancestral finches spread across islands with different foods. On islands with hard seeds, birds with slightly thicker, stronger beaks survived droughts better and passed on thick-beak alleles; on insect-rich islands, narrow probing beaks were favoured.\n- **Antibiotic-Resistant Bacteria (e.g. MRSA):** Bacteria reproduce every ~20 minutes, so random mutations frequently occur. If a random mutation gives resistance, exposure to an antibiotic kills the non-resistant bacteria while the **resistant mutants survive and multiply rapidly** with zero competition. Finishing a full prescribed course of antibiotics helps wipe out partially resistant strains before they spread!",
        "### Darwin vs Lamarck (Common Exam Contrast)\n- **Jean-Baptiste Lamarck** mistakenly thought traits *acquired during a lifetime* (like a giraffe stretching its neck) were passed directly to offspring. We now know acquired changes do NOT rewrite gamete DNA.\n- **Charles Darwin** correctly showed that **pre-existing inherited variation** is filtered by survival and reproduction over many generations.",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage flowchart of natural selection in peppered moths showing genetic variation, bird predation selection pressure, survival and reproduction, and allele frequency shift over generations">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="22" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Natural Selection in Action: Peppered Moths on Soot-Darkened Bark</text>

  <g transform="translate(14,36)">
    <rect x="0" y="0" width="122" height="164" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="61" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">1. Variation</text>
    <rect x="12" y="26" width="98" height="86" rx="6" fill="var(--ink-2)" opacity="0.75"/>
    <circle cx="34" cy="48" r="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2"/>
    <circle cx="64" cy="54" r="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2"/>
    <circle cx="88" cy="46" r="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2"/>
    <circle cx="42" cy="86" r="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2"/>
    <circle cx="82" cy="88" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.8"/>
    <text x="61" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink)">Random mutation</text>
    <text x="61" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">creates rare dark</text>
    <text x="61" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">moth variant</text>
  </g>

  <polygon points="148,118 140,113 140,123" fill="var(--ink-2)"/>

  <g transform="translate(152,36)">
    <rect x="0" y="0" width="122" height="164" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="61" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">2. Selection</text>
    <rect x="12" y="26" width="98" height="86" rx="6" fill="var(--ink-2)" opacity="0.75"/>
    <circle cx="34" cy="48" r="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.8"/>
    <path d="M 28 42 L 40 54 M 40 42 L 28 54" stroke="var(--bad)" stroke-width="2"/>
    <circle cx="64" cy="54" r="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.8"/>
    <path d="M 58 48 L 70 60 M 70 48 L 58 60" stroke="var(--bad)" stroke-width="2"/>
    <circle cx="88" cy="46" r="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.8"/>
    <path d="M 82 40 L 94 52 M 94 40 L 82 52" stroke="var(--bad)" stroke-width="2"/>
    <circle cx="82" cy="88" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="2"/>
    <text x="61" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink)">Predator birds spot</text>
    <text x="61" y="144" text-anchor="middle" font-size="9.5" fill="var(--bad)">&amp; eat pale moths</text>
    <text x="61" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">on dark bark</text>
  </g>

  <polygon points="286,118 278,113 278,123" fill="var(--ink-2)"/>

  <g transform="translate(290,36)">
    <rect x="0" y="0" width="122" height="164" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="61" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">3. Survive &amp; Breed</text>
    <rect x="12" y="26" width="98" height="86" rx="6" fill="var(--ink-2)" opacity="0.75"/>
    <circle cx="42" cy="86" r="7" fill="var(--surface)" stroke="var(--ink)" stroke-width="1"/>
    <circle cx="44" cy="50" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.8"/>
    <circle cx="72" cy="64" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.8"/>
    <circle cx="88" cy="90" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.8"/>
    <text x="61" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink)">Camouflaged dark</text>
    <text x="61" y="144" text-anchor="middle" font-size="9.5" fill="var(--good)">moths reproduce &amp;</text>
    <text x="61" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">pass dark alleles</text>
  </g>

  <polygon points="424,118 416,113 416,123" fill="var(--ink-2)"/>

  <g transform="translate(428,36)">
    <rect x="0" y="0" width="118" height="164" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="59" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">4. Generations</text>
    <rect x="10" y="26" width="98" height="86" rx="6" fill="var(--ink-2)" opacity="0.75"/>
    <circle cx="32" cy="48" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.5"/>
    <circle cx="62" cy="46" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.5"/>
    <circle cx="86" cy="58" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.5"/>
    <circle cx="42" cy="84" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.5"/>
    <circle cx="76" cy="88" r="8" fill="var(--ink)" stroke="var(--good)" stroke-width="1.5"/>
    <text x="59" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink)">Dark allele now</text>
    <text x="59" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink)">dominates the</text>
    <text x="59" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">population</text>
  </g>

  <rect x="14" y="210" width="532" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>
  <text x="280" y="228" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">5 Exam Steps: Variation (Mutation) → Competition/Predation → Survival → Reproduction (Alleles) → Generations</text>
</svg>`,
      diagramCaption: "Individuals do NOT adapt by choice — pre-existing genetic variants survive selection pressures better and pass their alleles to future generations.",
      whyItWorks: "Natural selection needs no conscious plan: whenever inherited traits affect survival or reproductive odds in a limited environment, mathematics guarantees that alleles improving survival represent a larger slice of the next generation's gene pool!",
      keyPoints: [
        "Random **mutations** in DNA generate new **alleles** and genetic variation within a population.",
        "Follow the **5 steps**: **V**ariation/mutation → **C**ompetition/selection pressure → **S**urvival of better-adapted → **R**eproduction passing advantageous **alleles** → shift over many **G**enerations.",
        "Classic evidence: **peppered moths** (industrial melanism), **Darwin's Galápagos finches** (beak shape), and **antibiotic-resistant bacteria** (e.g. MRSA).",
        "Bacteria evolve **resistance** (never say they 'become immune' or 'decide to adapt') rapidly because they reproduce every ~20 minutes.",
        "**Darwin vs Lamarck:** Acquired traits (scars, stretched necks) do NOT change DNA and are NOT inherited.",
      ],
      strategies: [
        "Always check your wording on antibiotic-resistance questions: say **'resistant bacteria survive and reproduce'**, NEVER 'immune bacteria' or 'the bacteria learn to resist'.",
        "Use the mnemonic **V-C-S-R-G** to tick off every bullet point on 4- or 5-mark natural selection exam questions.",
        "Explain *why* the trait gives a survival advantage in the specific habitat named in the question (e.g. camouflage from birds, cracking tough seeds, surviving antibiotic).",
      ],
      thinkDeeper: "Doctors advise patients to finish their entire 7-day course of antibiotics even if they feel completely cured on Day 3. Using natural selection, explain why stopping early speeds up the evolution of antibiotic-resistant superbugs!",
      workedExamples: [
        {
          title: "Explaining Antibiotic Resistance in 5 Marks",
          problem: "Explain how a population of bacteria can evolve resistance to an antibiotic over time.",
          steps: [
            "**Variation/Mutation:** A random **mutation** in bacterial DNA creates an allele giving resistance to the antibiotic.",
            "**Selection Pressure:** When the antibiotic is applied, non-resistant bacteria are killed.",
            "**Survival:** The better-adapted **resistant** bacteria survive (with reduced competition for nutrients).",
            "**Reproduction:** Surviving resistant bacteria **reproduce** rapidly by binary fission and pass the **resistance allele** to their offspring.",
            "**Generations:** Over many generations, the population becomes mostly resistant to that antibiotic.",
          ],
          answer: "Random mutation creates resistant bacteria → antibiotic kills non-resistant bacteria → resistant individuals survive → reproduce and pass on the resistance allele → population becomes predominantly resistant over generations.",
          yourTurn: {
            question: "What random change in DNA originally creates a brand-new allele such as antibiotic resistance or dark wing colour? (One word.)",
            answer: { type: "text", accept: ["mutation", "mutations", "gene mutation"], display: "mutation" },
            solution: "A random **mutation** (change in the DNA base sequence) creates brand-new alleles in a population.",
          },
        },
        {
          title: "Tracking Selection Shift in a Moth Population",
          problem: "On dark polluted tree trunks, a woodland starts with **120 light moths** and **80 dark moths**. Birds eat **75%** of the light moths but only **25%** of the dark moths before breeding. Calculate the percentage of the **surviving** moths that are dark.",
          steps: [
            "Surviving light moths = `120 × (1 − 0.75) = 120 × 0.25 = 30`.",
            "Surviving dark moths = `80 × (1 − 0.25) = 80 × 0.75 = 60`.",
            "Total surviving moths = `30 + 60 = 90`.",
            "Percentage dark among survivors = ({{60 / 90}}) × 100% = **66.7%** (up from `80 ÷ 200 = 40%` in a single generation!).",
          ],
          answer: "66.7% (two-thirds of the survivors are dark).",
          yourTurn: {
            question: "A beetle colony has 60 green beetles and 40 brown beetles on brown soil. Birds eat 45 green beetles and 15 brown beetles. What percentage of the surviving beetles are brown?",
            answer: { type: "number", value: 62.5, display: "62.5%" },
            solution: "Surviving green = 60 − 45 = 15. Surviving brown = 40 − 15 = 25. Total survivors = 15 + 25 = 40. Percentage brown = (25 ÷ 40) × 100% = 62.5%.",
          },
        },
      ],
    },
    {
      id: "fossils-extinction-biodiversity",
      heading: "Fossils, Extinction & Protecting Biodiversity",
      discovery: {
        problem: "Life on Earth began over **3.5 billion years ago**, yet scientists have almost NO fossils of the earliest soft-bodied organisms and many 'missing links' between ancient and modern animals. Does an incomplete fossil record disprove evolution?",
        idea: "Not at all! Fossils form only under rare conditions — usually when hard parts (bones, teeth, shells) are buried rapidly in sediment before decaying. Early life forms were **soft-bodied** and rotted completely away, while millions of years of volcanic activity, plate tectonics, and erosion destroyed countless sedimentary rocks containing fossils!",
      },
      body: [
        "### 1. How Fossils Form & Evidence for Evolution\nA **fossil** is the preserved remains or traces of an organism that lived thousands or millions of years ago, found almost exclusively in **sedimentary rock**.\n- **Mineral replacement (petrification):** Hard parts like bones, teeth, or shells do not decay easily and are gradually replaced by minerals from surrounding groundwater, forming rock-like copies.\n- **Preservation without decay:** In environments lacking oxygen, warmth, or moisture — such as **amber** (fossilised tree resin), **glaciers/ice**, or acidic **peat bogs** — decomposer bacteria cannot work, preserving whole organisms.\n- **Trace fossils:** Preserved **footprints, burrows, or rootlet casts** left in soft mud that later hardened into stone.\n- **Reading Rock Strata:** In undisturbed sedimentary rock layers, **older fossils lie deeper** at the bottom and **younger, more complex fossils lie nearer the surface**. Transitional fossils (such as *Archaeopteryx*, showing both dinosaur teeth/tail and bird feathers, or the multi-toed ancestors of modern horses) show step-by-step evolutionary change over millions of years.\n- **Why the Fossil Record Has Gaps:** (1) Earliest life forms were **soft-bodied** and decayed before fossilising; (2) **geological activity** (earthquakes, volcanic heat, erosion) destroyed many fossils; (3) many fossils remain buried and **undiscovered**.",
        "### 2. Extinction — When a Species Disappears Forever\n**Extinction** occurs when **every single individual** of a species dies out permanently. Key drivers of extinction include:\n- **Habitat destruction** (deforestation, urbanisation, wetland drainage — the leading modern human-driven cause).\n- **Rapid environmental or climate change** faster than a species can adapt by natural selection.\n- **New predators** (including invasive species introduced to islands, like rats and humans hunting the **dodo** on Mauritius).\n- **New diseases** (pathogens wiping out populations lacking resistant alleles).\n- **New, stronger competitors** outcompeting native species for food and space.\n- **Single catastrophic events** — such as the **Chicxulub asteroid impact** 66 million years ago that threw dust into the atmosphere, blocking sunlight, collapsing photosynthesis/food chains, and ending the non-avian dinosaurs.",
        "### 3. Biodiversity & Conservation\n- **Biodiversity** is the variety of all living species (and genetic diversity within species) in an ecosystem or across Earth.\n- High biodiversity keeps ecosystems **stable** because food webs are **interdependent** — if one species declines, alternative food sources buffer predators and pollinators. Biodiversity also provides **medicines** (many derived from tropical rainforest plants), crops, clean water, and pollination.\n- **Conservation Strategies:**\n  - **Protected habitats & nature reserves** (e.g. Singapore's **Bukit Timah Nature Reserve** and **Sungei Buloh Wetland Reserve**, preserving rainforest and mangrove ecosystems *in situ*).\n  - **Captive breeding & reintroduction programmes** in zoos and wildlife parks.\n  - **Seed banks** (like the **Svalbard Global Seed Vault** and **Kew Millennium Seed Bank**) storing dried plant seeds at sub-zero temperatures (`−18 °C`) to safeguard plant genetic diversity against extinction.\n  - **Gene banks (cryobanks)** freezing sperm, eggs, embryos, and tissue samples in liquid nitrogen to preserve endangered alleles.",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sedimentary rock strata showing oldest simple marine fossils at the bottom to modern mammals at the top, alongside extinction causes and conservation toolkit">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="158" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Sedimentary Rock Strata (Age)</text>

  <g transform="translate(18,34)">
    <rect x="0" y="0" width="280" height="46" rx="4" fill="var(--brand-soft)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="12" y="20" font-size="10.5" font-weight="700" fill="var(--brand)">Youngest Layer (~2 Ma)</text>
    <text x="12" y="36" font-size="9.5" fill="var(--ink)">Modern mammals &amp; flowering plants</text>
    <text x="266" y="29" text-anchor="end" font-size="14">🦌</text>

    <rect x="0" y="48" width="280" height="46" rx="4" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="12" y="68" font-size="10.5" font-weight="700" fill="var(--ink)">Mesozoic Layer (~150 Ma)</text>
    <text x="12" y="84" font-size="9.5" fill="var(--ink-2)">Dinosaurs &amp; Archaeopteryx (transitional)</text>
    <text x="266" y="77" text-anchor="end" font-size="14">🦕</text>

    <rect x="0" y="96" width="280" height="46" rx="4" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
    <text x="12" y="116" font-size="10.5" font-weight="700" fill="var(--ink)">Palaeozoic Layer (~360 Ma)</text>
    <text x="12" y="132" font-size="9.5" fill="var(--ink-2)">Early amphibians, fish &amp; ferns</text>
    <text x="266" y="125" text-anchor="end" font-size="14">🐟</text>

    <rect x="0" y="144" width="280" height="46" rx="4" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.2"/>
    <text x="12" y="164" font-size="10.5" font-weight="700" fill="var(--ink)">Oldest Deep Layer (~520 Ma)</text>
    <text x="12" y="180" font-size="9.5" fill="var(--ink-2)">Simple shelled trilobites (soft life decayed)</text>
    <text x="266" y="173" text-anchor="end" font-size="14">🐚</text>

    <text x="140" y="205" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Deeper undisturbed strata = Older fossils</text>
  </g>

  <g transform="translate(314,34)">
    <rect x="0" y="0" width="230" height="96" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.2"/>
    <text x="115" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">5 Main Extinction Drivers</text>
    <text x="12" y="36" font-size="10" fill="var(--ink)">• Rapid climate / habitat loss</text>
    <text x="12" y="51" font-size="10" fill="var(--ink)">• New predators (e.g. invasive rats)</text>
    <text x="12" y="66" font-size="10" fill="var(--ink)">• New diseases / lethal pathogens</text>
    <text x="12" y="81" font-size="10" fill="var(--ink)">• Stronger competitors or asteroids</text>

    <rect x="0" y="106" width="230" height="96" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/>
    <text x="115" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Protecting Biodiversity</text>
    <text x="12" y="142" font-size="10" fill="var(--ink)">• Protected reserves (Bukit Timah)</text>
    <text x="12" y="157" font-size="10" fill="var(--ink)">• Captive breeding &amp; reintroduction</text>
    <text x="12" y="172" font-size="10" fill="var(--ink)">• Seed banks (Svalbard, −18 °C)</text>
    <text x="12" y="187" font-size="10" fill="var(--ink)">• Gene banks / cryobanks (alleles)</text>
  </g>
</svg>`,
      diagramCaption: "Left: undisturbed sedimentary strata record increasing complexity from deep ancient layers up to modern surface layers. Right: drivers of extinction and conservation strategies.",
      whyItWorks: "Biodiversity acts like an ecological insurance policy: genetically varied populations carry rare alleles that can survive new diseases or warming climates, while complex food webs keep ecosystems stable even if one population dips.",
      keyPoints: [
        "**Fossils** form in **sedimentary rock** via mineral replacement of hard parts, trace impressions, or preservation without decay (amber, ice, peat bogs).",
        "The **fossil record is incomplete** because early life was **soft-bodied** (decayed rapidly), geological activity destroyed rocks, and many fossils remain undiscovered.",
        "**Extinction** is the permanent loss of every individual of a species, driven by habitat loss, rapid climate change, new predators, new diseases, stronger competitors, or catastrophic events.",
        "**Biodiversity** maintains stable interdependent ecosystems, food security, and future medicines.",
        "Conservation tools include **protected reserves**, **captive breeding**, **seed banks**, and **gene banks** (preserving endangered alleles).",
      ],
      strategies: [
        "When asked 'why is the fossil record incomplete?', always write TWO distinct reasons: (1) early organisms were **soft-bodied** and decayed, AND (2) **geological activity / erosion** destroyed fossils.",
        "Never confuse **endangered** (very few individuals left, still alive) with **extinct** (zero individuals left anywhere on Earth).",
        "Link conservation methods to **genetic diversity**: seed banks and gene banks preserve rare **alleles** so future populations can adapt.",
      ],
      thinkDeeper: "If a single disease wipes out a monoculture plantation of genetically identical banana plants (clones), why is a wild rainforest with hundreds of genetically diverse wild banana variants far more likely to survive?",
      workedExamples: [
        {
          title: "Explaining Gaps in the Fossil Record & Asteroid Extinction",
          problem: "(a) Give two reasons why scientists cannot find fossils of every organism that ever lived. (b) Explain how an asteroid impact 66 million years ago caused mass extinction of dinosaurs even thousands of kilometres from the crater.",
          steps: [
            "(a) Reason 1: Many early organisms were **soft-bodied** with no shells or bones, so decomposers broke them down before fossilisation could occur. Reason 2: **Geological activity** (earthquakes, volcanic heat, rock erosion) destroyed many fossils formed in sedimentary rock.",
            "(b) The asteroid threw massive clouds of dust and ash into the upper atmosphere, **blocking sunlight** across the globe. Plants could not **photosynthesise** and died, collapsing food chains so herbivores starved — and then carnivores starved too.",
          ],
          answer: "(a) Soft-bodied decay + geological destruction/undiscovered fossils. (b) Dust blocked sunlight → photosynthesis stopped → plants died → global food-chain collapse.",
          yourTurn: {
            question: "In which main type of rock (igneous, metamorphic, or sedimentary) are almost all fossils found?",
            answer: { type: "text", accept: ["sedimentary", "sedimentary rock", "sedimentary rocks"], display: "sedimentary" },
            solution: "Fossils form when remains are buried under layers of mud and sand that compress into **sedimentary** rock (the heat and pressure of igneous/metamorphic rock destroy fossils).",
          },
        },
        {
          title: "Calculating Biodiversity Loss & Conservation Impact",
          problem: "A wetland habitat originally supported **80 native bird species**. After half the wetland was drained for construction, only **52 native bird species** remained. Calculate the **percentage decrease** in bird species richness.",
          steps: [
            "Number of species lost = `80 − 52 = 28` species.",
            "Divide by the original number of species (`80`): {{28 / 80}} = `0.35`.",
            "Multiply by 100%: `0.35 × 100% =` **35% decrease**.",
          ],
          answer: "35% decrease in bird species.",
          yourTurn: {
            question: "A seed bank stores 250 endangered orchid species from Southeast Asia. After a new field expedition adds 45 more species, what is the percentage increase in stored orchid species?",
            answer: { type: "number", value: 18, display: "18%" },
            solution: "Percentage increase = (45 ÷ 250) × 100% = 0.18 × 100% = 18%.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Size Hierarchy of Genetic Material (Largest → Smallest)", back: "Cell → Nucleus → Chromosomes → DNA molecule → Genes → Chemical bases (A, T, C, G)." },
      { front: "Human Chromosome Counts (Body Cells vs Gametes)", back: "Body cells (diploid): 46 chromosomes (23 pairs). Gametes (sperm/egg, haploid): 23 single chromosomes." },
      { front: "Gene", back: "A short section of DNA on a chromosome that codes for a specific protein (influencing a characteristic)." },
      { front: "Complementary Base Pairing Rule", back: "Adenine (A) always pairs with Thymine (T); Cytosine (C) always pairs with Guanine (G). Thus %A = %T and %C = %G." },
      { front: "Rosalind Franklin & Photo 51 (1952)", back: "Captured X-ray diffraction images showing DNA is a helix — crucial evidence used by Watson & Crick (1953) to build the double-helix model." },
      { front: "Continuous vs Discontinuous Variation", back: "Continuous: any value in a range (height, mass) → histogram bell curve. Discontinuous: distinct categories (ABO blood group) → bar chart with gaps." },
      { front: "Genotype vs Phenotype", back: "Genotype = pair of alleles an organism carries (e.g. Bb). Phenotype = physical characteristic expressed (e.g. brown eyes)." },
      { front: "Dominant vs Recessive Allele", back: "Dominant (B) is expressed with just one copy (BB or Bb). Recessive (b) is ONLY expressed when two copies are present (bb)." },
      { front: "Homozygous vs Heterozygous", back: "Homozygous = two identical alleles (BB or bb). Heterozygous = two different alleles (Bb)." },
      { front: "5 Steps of Natural Selection", back: "1. Genetic variation (mutation) → 2. Competition/selection pressure → 3. Better-adapted survive → 4. Reproduce & pass advantageous alleles → 5. Trait common over many generations." },
      { front: "Why Bacteria Evolve Antibiotic Resistance Fast", back: "Bacteria reproduce rapidly (~every 20 min), so random mutations arise often; antibiotics kill non-resistant cells while resistant mutants survive and multiply." },
      { front: "Why the Fossil Record Is Incomplete", back: "Early organisms were soft-bodied and decayed without leaving fossils; geological activity (heat, erosion) destroyed rocks; many fossils remain undiscovered." },
      { front: "Extinction", back: "The permanent disappearance of every single individual of a species (driven by habitat loss, climate change, new predators/diseases/competitors, or asteroids)." },
      { front: "Seed Banks & Gene Banks", back: "Facilities preserving seeds (at −18 °C) or frozen gametes/tissue so endangered species and rare alleles are safeguarded against extinction." },
    ],
    mustKnow: [
      "Order cell, nucleus, chromosome, DNA, gene, and base from largest to smallest and state human diploid (46 / 23 pairs) vs gamete (23) counts.",
      "Write the complementary DNA strand for any base sequence (A–T, C–G) and compute base percentages using Chargaff's rule.",
      "Credit Rosalind Franklin, Maurice Wilkins, James Watson, and Francis Crick for discovering the DNA double helix.",
      "Classify traits as inherited, environmental, or both, and distinguish continuous (histogram) vs discontinuous (bar chart) variation.",
      "Define allele, dominant, recessive, homozygous, heterozygous, genotype, and phenotype, and complete 2×2 Punnett squares.",
      "Explain natural selection in 5 clear steps using peppered moths, Darwin's finches, or antibiotic-resistant bacteria.",
      "Contrast Darwin's theory of natural selection with Lamarck's rejected theory of inherited acquired characteristics.",
      "Explain three ways fossils form in sedimentary rock and why the fossil record has gaps.",
      "State the main causes of extinction (including asteroid impacts and human habitat destruction).",
      "Explain why biodiversity matters (ecosystem stability, medicines, food) and how reserves, captive breeding, seed banks, and gene banks protect species.",
    ],
    misconceptions: [
      { wrong: "Never Write ❌: 'Bacteria become immune to antibiotics / decide to mutate so they can survive.'", right: "Write Instead ✅: 'A **random mutation** produces **resistant** bacteria; antibiotics kill non-resistant cells while resistant mutants survive and reproduce.'" },
      { wrong: "Never Write ❌: 'Giraffes stretched their necks reaching tall leaves and passed their stretched necks to their babies.'", right: "Write Instead ✅: 'Pre-existing genetic variation meant giraffes born with longer necks reached more food, survived, and passed **long-neck alleles** to offspring.'" },
      { wrong: "Never Write ❌: 'All living organisms have 46 chromosomes.'", right: "Write Instead ✅: 'Humans have **46 chromosomes (23 pairs)** in body cells; other species have different chromosome counts (e.g. dogs 78, fruit flies 8).'" },
      { wrong: "Never Write ❌: 'Height is purely genetic because you inherit it from your parents.'", right: "Write Instead ✅: 'Height is controlled by **both inherited genes and environmental factors** (such as childhood nutrition and health).'" },
      { wrong: "Never Write ❌: 'A 3:1 Punnett ratio guarantees that 4 babies will be 3 dominant and 1 recessive.'", right: "Write Instead ✅: 'Each fertilisation is an independent **probability** (75% dominant, 25% recessive per offspring).'" },
      { wrong: "Never Write ❌: 'Fossils are actual bones still made of living calcium.'", right: "Write Instead ✅: 'Most fossils form when minerals slowly **replace** the hard tissues over millions of years inside **sedimentary rock**.'" },
    ],
    examMistakes: [
      "Writing 'immune' instead of **'resistant'** when describing antibiotic-resistant bacteria.",
      "Forgetting to mention **random mutation** as the original source of new alleles in natural selection answers.",
      "Saying 'characteristics are passed on' without mentioning **alleles** or **genes** in DNA.",
      "Drawing a bar chart with gaps for continuous data (like height) instead of a **histogram** with touching bars.",
      "Confusing **genotype** (letters like `Bb`) with **phenotype** (the physical trait like brown eyes).",
      "Forgetting to halve the body-cell chromosome number when asked for a **gamete** (sperm, egg, or pollen cell).",
      "Forgetting to double `%A` (`%A + %T`) before subtracting from `100%` in Chargaff base-percentage questions.",
      "Claiming that fossils form in igneous or volcanic rock (extreme magma heat destroys biological remains!).",
    ],
    mnemonics: [
      {
        topic: "DNA Base Pairing",
        device: "Apples in the Tree, Cars in the Garage",
        explanation: "**A**denine pairs with **T**hymine (`A–T`), and **C**ytosine pairs with **G**uanine (`C–G`).",
      },
      {
        topic: "5 Steps of Natural Selection",
        device: "V-C-S-R-G (Very Clever Species Reproduce Greatly)",
        explanation: "**V**ariation (mutation) → **C**ompetition / selection pressure → **S**urvival of better-adapted → **R**eproduction (passing alleles) → shift over many **G**enerations.",
      },
      {
        topic: "Causes of Extinction",
        device: "H-C-P-D-C (Habitats Can Permanently Disappear Completely)",
        explanation: "**H**abitat loss, **C**limate/environment change, new **P**redators, new **D**iseases, stronger **C**ompetitors (plus catastrophic events).",
      },
    ],
    realWorld: [
      {
        title: "Alfred Russel Wallace in Singapore (1854–1862)",
        detail: "Before co-publishing the theory of natural selection with Darwin in 1858, Wallace spent months collecting beetles and birds right in Singapore's Bukit Timah forest — spotting biodiversity patterns across the Malay Archipelago!",
        emoji: "🪲",
      },
      {
        title: "Hospital MRSA & Antibiotic Stewardship",
        detail: "Hospitals in Singapore and worldwide strictly limit unnecessary antibiotic prescriptions because overusing antibiotics creates relentless selection pressure driving multidrug-resistant superbugs.",
        emoji: "🏥",
      },
      {
        title: "Bukit Timah Nature Reserve Biodiversity",
        detail: "Despite covering only 1.6 square kilometres, Singapore's Bukit Timah Nature Reserve holds more native tree species than the entire continent of North America — showcasing why conserving tropical rainforest habitats is vital.",
        emoji: "🌴",
      },
      {
        title: "Svalbard Global Seed Vault (Arctic Norway)",
        detail: "Buried deep inside a frozen Arctic mountainside at −18 °C, Svalbard stores over 1.2 million backup crop seed samples from around the world to protect humanity's food biodiversity against war, pests, or climate disasters.",
        emoji: "❄️",
      },
      {
        title: "Forensic DNA Profiling",
        detail: "Except for identical twins, every human has a unique sequence of DNA bases — enabling scientists to match biological samples, trace endangered wildlife poaching, and confirm family ancestry.",
        emoji: "🔍",
      },
    ],
    videos: [
      { title: "DNA, Chromosomes, Genes & Base Pairing (GCSE / KS3 Biology)", channel: "Cognito / FuseSchool", url: "https://www.youtube.com/results?search_query=GCSE+biology+DNA+chromosomes+genes+double+helix" },
      { title: "Continuous vs Discontinuous Variation & Punnett Squares", channel: "Cognito", url: "https://www.youtube.com/results?search_query=GCSE+biology+variation+continuous+discontinuous+punnett+squares" },
      { title: "Evolution by Natural Selection — Peppered Moths & Antibiotic Resistance", channel: "Freesciencelessons / Stated Clearly", url: "https://www.youtube.com/results?search_query=GCSE+biology+natural+selection+peppered+moths+antibiotic+resistance" },
      { title: "Fossils, Extinction & Protecting Biodiversity", channel: "Cognito", url: "https://www.youtube.com/results?search_query=GCSE+biology+fossils+extinction+biodiversity+seed+banks" },
    ],
    formulas: [
      { name: "Complementary Base Pairing", formula: "A ↔ T and C ↔ G", note: "Adenine–Thymine and Cytosine–Guanine across opposite strands." },
      { name: "Chargaff's Percentage Rule", formula: "%A = %T,  %C = %G,  and  %A + %T + %C + %G = 100%", note: "So %C = (100% − 2 × %A) ÷ 2." },
      { name: "Human Chromosome Numbers", formula: "Body cell (2n) = 46 (23 pairs);  Gamete (n) = 23", note: "Fertilisation: 23 (sperm) + 23 (egg) = 46 (zygote)." },
      { name: "Heterozygous Cross (Bb × Bb)", formula: "Genotype 1 BB : 2 Bb : 1 bb  |  Phenotype 3 dominant : 1 recessive", note: "75% dominant phenotype, 25% recessive phenotype." },
      { name: "Test Cross (Bb × bb)", formula: "Genotype 1 Bb : 1 bb  |  Phenotype 50% dominant : 50% recessive", note: "Equal 1 : 1 probability." },
      { name: "Homozygous Cross (BB × bb)", formula: "100% Bb (all heterozygous, 100% dominant phenotype)", note: "All offspring are carriers of the recessive allele." },
      { name: "Survival Percentage", formula: "(Surviving individuals ÷ Starting individuals) × 100%", note: "Used to measure selection advantage of an adaptation." },
      { name: "Phenotype Frequency Shift", formula: "(Survivors with trait ÷ Total survivors) × 100%", note: "Shows how natural selection raises advantageous allele frequency." },
      { name: "Expected Offspring Count", formula: "Probability (as fraction or decimal) × Total offspring", note: "E.g. 25% of 200 pea seeds = 50 short plants." },
      { name: "Percentage Biodiversity Loss", formula: "((Original species − Remaining species) ÷ Original species) × 100%", note: "Measures extinction or habitat-loss impact." },
    ],
  },
};
