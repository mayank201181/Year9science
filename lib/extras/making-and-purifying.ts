import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Did you know that a single black felt-tip marker dot actually hides up to four different rainbow dyes — and that forensic chemists use the exact same paper-and-water trick to expose forged bank cheques?",
  didYouKnow: [
    "The world's largest natural salt crystals grow inside the Naica 'Cave of the Crystals' in Mexico, where mineral-rich water cooled so slowly over hundreds of thousands of years that gypsum crystals reached 11 metres long!",
    "When Singapore's NEWater plants reclaim ultra-pure water, its electrical conductivity is checked continuously because even tiny traces of dissolved salts raise boiling points and allow electrical current to flow.",
    "Pure 24-carat gold is too soft to hold a gemstone securely, so jewellers make 18-carat gold — a carefully engineered formulation containing 75% gold alloyed with 25% copper and silver.",
    "Spreading salt on snowy winter roads works because dissolved salt particles disrupt the regular ice crystal lattice, lowering water's freezing point to around −10 °C so ice melts even in sub-zero weather.",
    "The squeaky 'pop' of the hydrogen gas test is literally a miniature sonic boom created as hydrogen and oxygen snap together at high speed to form hot water vapour.",
  ],
  activities: [
    {
      title: "Kitchen Rainbow Ink Chromatography",
      emoji: "🌈",
      materials: [
        "Coffee filter paper or kitchen paper towel cut into 4 cm × 12 cm strips",
        "Washable black, green, and brown felt-tip markers",
        "Pencil, ruler, tall clear glass, and 1 cm depth of tap water",
        "Wooden skewer or pencil + paper clip to hang the strip",
      ],
      steps: [
        "Draw a light horizontal pencil baseline 2 cm up from the bottom of the paper strip (never use pen!).",
        "Place tiny, concentrated dots of black, green, and brown marker spaced along the pencil line.",
        "Pour roughly 1 cm of water into the glass and hang the strip so ONLY the bottom paper edge dips in — keeping the water level strictly BELOW the pencil line.",
        "Watch the water climb for 10–15 minutes, pull the strip out before the water hits the top, mark the solvent front in pencil, and calculate the Rf value of each separated colour!",
      ],
      maths:
        "Water acts as the mobile phase and cellulose fibres act as the stationary phase. Each dye moves at its own constant ratio Rf = distance moved by spot ÷ distance moved by solvent, proving 'black' ink is a carefully blended formulation of primary dyes.",
    },
    {
      title: "Growing Giant Table-Salt Crystals Slowly vs Fast",
      emoji: "💎",
      materials: [
        "Two clean saucers or shallow glass jars",
        "Hot tap water (adult supervision) and table salt (sodium chloride)",
        "Spoon, coffee filter, and magnifying glass",
      ],
      steps: [
        "Stir table salt into half a mug of hot water until excess solid sits undissolved at the bottom (a saturated solution).",
        "Filter the liquid through a coffee filter so zero undissolved grains pass through.",
        "Pour half the filtrate into Dish A (leave in a cool shady cupboard to evaporate slowly over 3–4 days) and half into Dish B (place in a warm sunny windowsill to dry quickly).",
        "Compare the crystal size and cubic shape in both dishes under a magnifying glass.",
      ],
      maths:
        "Slow cooling and gradual evaporation in Dish A give Na⁺ and Cl⁻ ions plenty of time to lock neatly into giant cubic lattices — the exact reason laboratory salt preparations avoid fierce boiling to dryness!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Choosing the Right Separation Method (Decision Map)",
      caption:
        "Match the physical state and solubility of your mixture straight to the winning laboratory separation method.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flowchart for choosing filtration, crystallisation, simple distillation, fractional distillation, or paper chromatography">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Separation Technique Decision Map</text>

  <!-- Root node -->
  <rect x="195" y="34" width="170" height="30" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="280" y="53" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">What kind of mixture?</text>

  <!-- Branches from root -->
  <line x1="225" y1="64" x2="88" y2="96" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="280" y1="64" x2="280" y2="96" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="335" y1="64" x2="470" y2="96" stroke="var(--ink-2)" stroke-width="1.6"/>

  <!-- Left branch: Insoluble solid + liquid -->
  <rect x="16" y="96" width="144" height="38" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="88" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Insoluble solid</text>
  <text x="88" y="125" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">+ liquid (e.g. excess CuO)</text>
  <line x1="88" y1="134" x2="88" y2="168" stroke="var(--brand)" stroke-width="1.8"/>
  <rect x="26" y="168" width="124" height="44" rx="8" fill="var(--brand)" opacity="0.92"/>
  <text x="88" y="187" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">FILTRATION</text>
  <text x="88" y="202" text-anchor="middle" font-size="9" fill="#ffffff">Residue + Filtrate</text>

  <!-- Middle branch: Soluble solid + solvent -->
  <rect x="188" y="96" width="184" height="38" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Soluble solid + solvent</text>
  <text x="280" y="125" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(e.g. salt solution or dyes)</text>
  <line x1="230" y1="134" x2="215" y2="168" stroke="var(--info)" stroke-width="1.8"/>
  <line x1="330" y1="134" x2="345" y2="168" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="195" y="156" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--info)">Keep solid</text>
  <text x="362" y="156" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--bad)">Keep liquid</text>

  <rect x="160" y="168" width="112" height="44" rx="8" fill="var(--info)" opacity="0.92"/>
  <text x="216" y="187" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">CRYSTALLISATION</text>
  <text x="216" y="202" text-anchor="middle" font-size="8.8" fill="#ffffff">(or Chromatography)</text>

  <rect x="284" y="168" width="122" height="44" rx="8" fill="var(--bad)" opacity="0.92"/>
  <text x="345" y="187" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">SIMPLE DISTILLATION</text>
  <text x="345" y="202" text-anchor="middle" font-size="8.8" fill="#ffffff">Pure solvent distillate</text>

  <!-- Right branch: Miscible liquids -->
  <rect x="394" y="96" width="152" height="38" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="470" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Miscible liquids</text>
  <text x="470" y="125" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">different b.p. (ethanol+H₂O)</text>
  <line x1="470" y1="134" x2="470" y2="168" stroke="var(--accent)" stroke-width="1.8"/>
  <rect x="414" y="168" width="134" height="44" rx="8" fill="var(--accent)" opacity="0.95"/>
  <text x="481" y="187" text-anchor="middle" font-size="9.5" font-weight="700" fill="#171a2f">FRACTIONAL</text>
  <text x="481" y="202" text-anchor="middle" font-size="9.5" font-weight="700" fill="#171a2f">DISTILLATION</text>
</svg>`,
    },
    {
      title: "Fractional Distillation Column (Ethanol & Water)",
      caption:
        "Glass beads create a temperature gradient inside the column so water vapour (100 °C) condenses back down while ethanol vapour (78 °C) reaches the side-arm first.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fractional distillation setup separating ethanol at 78 degrees Celsius from water at 100 degrees Celsius using a glass-bead fractionating column">
  <rect width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Fractional Distillation: Ethanol (78 °C) &amp; Water (100 °C)</text>

  <!-- Flask -->
  <circle cx="155" cy="196" r="30" fill="var(--info-soft)" stroke="var(--ink)" stroke-width="2"/>
  <text x="155" y="199" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Ethanol + H₂O</text>
  <path d="M138 234 Q146 226 155 234 T172 234" fill="none" stroke="var(--bad)" stroke-width="2"/>

  <!-- Fractionating column -->
  <rect x="143" y="64" width="24" height="104" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Glass beads -->
  <circle cx="150" cy="154" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="160" cy="148" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="151" cy="138" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="160" cy="130" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="150" cy="120" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="160" cy="112" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="151" cy="102" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>
  <circle cx="160" cy="94" r="4" fill="var(--line)" stroke="var(--ink-2)" stroke-width="1"/>

  <!-- Thermometer at side-arm -->
  <line x1="155" y1="36" x2="155" y2="82" stroke="var(--bad)" stroke-width="2.5"/>
  <circle cx="155" cy="83" r="3.5" fill="var(--bad)"/>
  <text x="142" y="48" text-anchor="end" font-size="10" font-weight="700" fill="var(--bad)">Thermometer</text>
  <text x="142" y="61" text-anchor="end" font-size="9.5" fill="var(--ink-2)">reads 78 °C</text>

  <!-- Temperature gradient annotations -->
  <text x="132" y="88" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--info)">Cooler top (78 °C)</text>
  <text x="132" y="101" text-anchor="end" font-size="8.8" fill="var(--ink-2)">Ethanol stays vapour</text>
  <text x="132" y="142" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--bad)">Hotter base (~95 °C)</text>
  <text x="132" y="155" text-anchor="end" font-size="8.8" fill="var(--ink-2)">Water condenses back</text>

  <!-- Side arm & Liebig condenser -->
  <line x1="167" y1="80" x2="395" y2="144" stroke="var(--ink)" stroke-width="3"/>
  <polygon points="212,82 356,122 350,142 206,102" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6" opacity="0.88"/>
  <text x="288" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Liebig Condenser</text>
  <text x="348" y="160" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">Cold water IN (bottom)</text>
  <text x="234" y="64" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">Warm water OUT (top)</text>

  <!-- Receiving conical flask -->
  <path d="M394 148 L394 166 L372 214 Q370 218 375 218 L433 218 Q438 218 436 214 L414 166 L414 148" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M378 198 L430 198 L435 216 L373 216 Z" fill="var(--brand-soft)"/>
  <circle cx="404" cy="158" r="2.5" fill="var(--brand)"/>
  <text x="478" y="182" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Pure Ethanol</text>
  <text x="478" y="196" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">collected FIRST</text>
  <text x="478" y="210" text-anchor="middle" font-size="9" fill="var(--ink-2)">(lowest b.p. 78 °C)</text>
</svg>`,
    },
  ],
  history: {
    title: "Mikhail Tsvet & the Invention of 'Colour-Writing' (1903)",
    story:
      "In 1903, a young Russian-Italian botanist named Mikhail Tsvet puzzled over why green plant leaves turn brilliant yellow and orange in autumn. Everyone assumed green chlorophyll was a single pure pigment, yet Tsvet suspected hidden colours lurked beneath. Crushing spinach leaves in petroleum solvent and pouring the dark green extract down a tall glass tube packed with powdered chalk, he watched in amazement as distinct bands of dark green, olive green, yellow, and bright orange separated down the column! He named his discovery 'chromatography' — Greek for 'colour-writing' (and playfully, 'tsvet' also means 'colour' in Russian). Initially ignored by famous chemists for decades, chromatography went on to earn multiple Nobel Prizes and today powers everything from forensics and pharmaceutical purity checks to blood testing.",
  },
};
