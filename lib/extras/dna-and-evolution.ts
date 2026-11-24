import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "If you uncoiled all the DNA inside every cell of your body and laid the strands end-to-end, they would stretch to the Sun and back over 300 times — yet humans share roughly 60% of their genes with a banana!",
  didYouKnow: [
    "Every single human cell packs about 2 metres of DNA into a nucleus only 0.006 mm wide — equivalent to stuffing 40 kilometres of ultra-fine thread inside a single tennis ball!",
    "Alfred Russel Wallace spent months collecting over 700 beetle species right in Singapore's Bukit Timah rainforest during the 1850s — observations that helped him independently discover natural selection alongside Charles Darwin.",
    "You share ~99.9% of your DNA with every other human on Earth, ~98.8% with chimpanzees, and ~60% with bananas — powerful molecular proof that all living organisms share a common evolutionary ancestor.",
    "The Svalbard Global Seed Vault inside an Arctic mountain in Norway stays naturally chilled by permafrost and mechanical freezers at −18 °C, storing over 1.2 million backup crop samples to prevent agricultural extinction.",
    "In 1952, Rosalind Franklin took over 100 hours of X-ray exposure to capture 'Photo 51', whose crisp X-shaped diffraction cross directly revealed the geometry and helical pitch of DNA.",
  ],
  activities: [
    {
      title: "Kitchen Strawberry DNA Extraction Lab",
      emoji: "🍓",
      materials: [
        "2 ripe strawberries in a zip-lock bag",
        "100 ml water + 1 teaspoon dish soap + 1/2 teaspoon table salt",
        "Coffee filter / tea strainer, clear glass, and ice-cold rubbing alcohol (with adult supervision)",
      ],
      steps: [
        "Mash the strawberries inside the sealed bag for 2 minutes to break open cell walls mechanically.",
        "Add 2 tablespoons of the soapy salt water and gently squish for 1 minute (detergent dissolves fatty cell and nuclear membranes; salt helps DNA strands clump together).",
        "Filter the red liquid through a strainer into a clear glass.",
        "Slowly tilt the glass and pour an equal layer of ice-cold alcohol down the inside wall so it floats on top — within 60 seconds, cloudy white threads of real strawberry DNA precipitate out at the boundary!",
      ],
      maths: "Strawberries are octoploid (8 copies of every chromosome per cell instead of our 2!), releasing four times more DNA per cell than human cells — making the tangled polymer visible to the naked eye!",
    },
    {
      title: "Camouflage Natural Selection Toothpick Hunt",
      emoji: "🦅",
      materials: [
        "30 green toothpicks (or paper dots) and 30 bright yellow/red toothpicks",
        "A patch of green grass (or coloured towel/paper habitat) and a 30-second timer",
      ],
      steps: [
        "Scatter all 30 green and 30 bright toothpicks evenly over the green habitat (Generation 0: 50% green, 50% bright).",
        "Act as a bird predator with a partner: you have exactly 20 seconds to pick up as many toothpicks as you can spot one at a time.",
        "Count how many green and how many bright toothpicks SURVIVED un-eaten, then double each surviving number to simulate reproduction (passing alleles to Generation 1).",
        "Calculate the new percentage of green camouflaged variants — repeat for 3 generations and plot the shift on a graph!",
      ],
      maths: "Even a modest survival advantage compounds exponentially across generations: if camouflaged variants survive at 80% while conspicuous variants survive at 30%, the camouflaged share leaps from 50% to 73% in Generation 1 and 88% by Generation 2!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Diploid Body Cells vs Haploid Gametes & Fertilisation",
      caption: "Halving chromosome counts in sperm and eggs keeps human chromosome numbers constant at 46 across generations.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing human diploid body cells with 46 chromosomes producing haploid sperm and egg gametes with 23 chromosomes that fuse at fertilisation into a 46-chromosome zygote">
  <rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Keeping Chromosome Numbers Constant: Fertilisation</text>

  <g transform="translate(26,46)">
    <rect x="0" y="0" width="136" height="62" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
    <text x="68" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Father Body Cell</text>
    <text x="68" y="42" text-anchor="middle" font-size="11" fill="var(--ink)">46 chromosomes</text>
    <text x="68" y="56" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(23 pairs · XY)</text>

    <rect x="0" y="84" width="136" height="62" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4"/>
    <text x="68" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Mother Body Cell</text>
    <text x="68" y="126" text-anchor="middle" font-size="11" fill="var(--ink)">46 chromosomes</text>
    <text x="68" y="140" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(23 pairs · XX)</text>
  </g>

  <line x1="166" y1="77" x2="206" y2="77" stroke="var(--ink-2)" stroke-width="1.8"/>
  <polygon points="210,77 202,72 202,82" fill="var(--ink-2)"/>
  <line x1="166" y1="161" x2="206" y2="161" stroke="var(--ink-2)" stroke-width="1.8"/>
  <polygon points="210,161 202,156 202,166" fill="var(--ink-2)"/>
  <text x="186" y="68" text-anchor="middle" font-size="9" fill="var(--ink-2)">÷ 2</text>
  <text x="186" y="152" text-anchor="middle" font-size="9" fill="var(--ink-2)">÷ 2</text>

  <g transform="translate(216,46)">
    <rect x="0" y="0" width="128" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4"/>
    <text x="64" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Sperm (Gamete)</text>
    <text x="64" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">23 single</text>
    <text x="64" y="56" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Carries X or Y</text>

    <rect x="0" y="84" width="128" height="62" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4"/>
    <text x="64" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Egg (Gamete)</text>
    <text x="64" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">23 single</text>
    <text x="64" y="140" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Always carries X</text>
  </g>

  <path d="M 348 77 L 386 114 M 348 161 L 386 124" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="392,119 382,113 382,125" fill="var(--ink)"/>

  <g transform="translate(396,74)">
    <rect x="0" y="0" width="144" height="90" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
    <text x="72" y="24" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">Fertilised Zygote</text>
    <text x="72" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">23 + 23 = 46</text>
    <text x="72" y="62" text-anchor="middle" font-size="10" fill="var(--ink-2)">23 matching pairs</text>
    <text x="72" y="78" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">50% XX · 50% XY</text>
  </g>
</svg>`,
    },
    {
      title: "Darwin's Galápagos Finches: Adaptive Beak Radiation",
      caption: "Natural selection shaped ancestral finch beaks across different islands to match each habitat's primary food source.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adaptive radiation diagram of Darwin's finches showing four specialised beak shapes adapted for hard seeds, insects, cactus nectar, and buds">
  <rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Darwin's Finches: Selection Pressures Shaping Beak Adaptations</text>

  <rect x="200" y="38" width="160" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="280" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Ancestral Finch Population</text>
  <text x="280" y="68" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Varied beak alleles via mutation</text>

  <line x1="230" y1="74" x2="76" y2="104" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="262" y1="74" x2="212" y2="104" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="298" y1="74" x2="348" y2="104" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="330" y1="74" x2="484" y2="104" stroke="var(--ink-2)" stroke-width="1.5"/>

  <g transform="translate(14,106)">
    <rect x="0" y="0" width="124" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <path d="M 38 36 L 86 24 L 86 48 Z" fill="var(--brand)" opacity="0.85"/>
    <text x="62" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Thick Crushing Beak</text>
    <text x="62" y="81" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Cracks large hard</text>
    <text x="62" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">seeds in droughts</text>
  </g>

  <g transform="translate(150,106)">
    <rect x="0" y="0" width="124" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <path d="M 32 36 L 92 31 L 92 41 Z" fill="var(--good)" opacity="0.85"/>
    <text x="62" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Long Probing Beak</text>
    <text x="62" y="81" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Reaches nectar &amp;</text>
    <text x="62" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">cactus flowers</text>
  </g>

  <g transform="translate(286,106)">
    <rect x="0" y="0" width="124" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <path d="M 40 36 L 84 29 L 84 43 Z" fill="var(--ink)" opacity="0.8"/>
    <text x="62" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Fine Grasping Beak</text>
    <text x="62" y="81" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Catches insects</text>
    <text x="62" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">inside tree bark</text>
  </g>

  <g transform="translate(422,106)">
    <rect x="0" y="0" width="124" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
    <path d="M 42 38 Q 62 22 84 36 Q 64 46 42 38 Z" fill="var(--bad)" opacity="0.8"/>
    <text x="62" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Curved Biting Beak</text>
    <text x="62" y="81" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Snips leaves, buds</text>
    <text x="62" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">&amp; soft island fruit</text>
  </g>
</svg>`,
    },
  ],
  history: {
    title: "Photo 51: How Rosalind Franklin Unlocked the Double Helix (1952)",
    story: "In May 1952, chemist Rosalind Franklin and her PhD student Raymond Gosling at King's College London carefully controlled the humidity around a single microscopic fibre of DNA and aimed a fine beam of X-rays through it for over 60 hours. The resulting photograph — labelled 'Photo 51' — revealed a razor-sharp black X-shaped pattern. To a trained crystallographer, that X proved DNA was a uniform helix with its sugar-phosphate backbone facing outward and its paired bases tucked inside. When Franklin's colleague Maurice Wilkins showed Photo 51 to James Watson in early 1953, Watson and Francis Crick combined her exact dimensions with Erwin Chargaff's base-ratio rules (A = T, C = G) to assemble the famous double-helix model. Franklin sadly died of cancer in 1958, four years before the 1962 Nobel Prize was awarded to Watson, Crick, and Wilkins — today she is rightly celebrated worldwide as a co-architect of the greatest discovery in modern biology.",
  },
};
