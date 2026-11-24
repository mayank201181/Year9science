import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1869, Dmitri Mendeleev predicted an undiscovered metal so accurately that when a French chemist finally discovered gallium six years later, Mendeleev wrote from Russia telling him he had measured its density wrong — and Mendeleev was right!",
  didYouKnow: [
    "If an atom were enlarged to the size of Singapore's National Stadium, its dense central nucleus of protons and neutrons would be smaller than a single marble at the centre spot — the rest is mostly empty space patrolled by electrons!",
    "Pure gallium (Mendeleev's predicted *eka-aluminium*) melts at 29.8 °C — solid in an air-conditioned Tanglin classroom, yet turning into a shiny silver puddle right in the palm of your hand!",
    "Chlorine gas (toxic green halogen) and sodium metal (explosive alkali metal) react vigorously to form everyday table salt (NaCl), which your body needs to survive!",
    "Lithium is so low in density (0.53 g/cm³) that it even floats on paraffin oil — nearly half the density of liquid water!",
    "Helium was actually discovered in the Sun's spectrum in 1868 (named after *Helios*, the Greek Sun god) 27 years before anyone ever isolated helium on Earth.",
  ],
  activities: [
    {
      title: "Mendeleev's Missing-Card Detective Challenge",
      emoji: "🃏",
      materials: [
        "18 small index cards or cut squares of paper",
        "Pen and Periodic Table reference",
        "One partner (friend or parent)",
      ],
      steps: [
        "Write one element (from H to Ar) on each card with ONLY its atomic mass, physical state at 20 °C, oxide pH (acidic/basic/none), and reactivity — hide the element name on the back!",
        "Have your partner secretly remove 2 cards (just like undiscovered elements in 1869) and shuffle the remaining 16 cards.",
        "Arrange the 16 cards into rows by mass and columns by matching chemical behaviour until you spot the two missing gaps.",
        "Predict the approximate atomic mass, state, and reactivity of BOTH missing cards before flipping them over to score your accuracy!",
      ],
      maths:
        "Averaging the atomic masses of the elements directly above and below a gap reproduces Mendeleev's exact interpolation formula — you can check your percentage error against the real value!",
    },
    {
      title: "Household Metal vs Non-Metal Conductivity & Property Audit",
      emoji: "🔌",
      materials: [
        "6 safe everyday objects: aluminium foil, copper coin, pencil lead (graphite!), plastic ruler, glass marble, rubber eraser",
        "Optional: a simple 1.5 V torch/LED continuity tester or kitchen fridge magnet",
        "Notebook table",
      ],
      steps: [
        "Predict which items are metals and which are non-metals based on lustre (shininess) and flexibility (malleable vs brittle).",
        "Test each item for conductivity (or feel which feels coldest to the touch — good thermal conductors pull heat out of your fingertips faster!).",
        "Notice the famous surprise: graphite pencil lead is dull and brittle like a non-metal, yet conducts electricity!",
        "Record your observations in a clean results table contrasting metals, typical non-metals, and graphite as the exception.",
      ],
      maths:
        "Graphite conducts because each carbon atom uses 3 of its 4 outer electrons in flat hexagonal rings, leaving 1 delocalised electron per atom — 25% of its outer electrons — free to carry electric current.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Opposite Reactivity Trends: Group 1 vs Group 7",
      caption: "Both groups get bigger with more shells going down — weaker nuclear pull makes LOSING 1 electron easier (Group 1 ↑) but GAINING 1 electron harder (Group 7 ↓).",
      svg:
        '<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison showing why reactivity increases down Group 1 as atoms lose an electron more easily, while reactivity decreases down Group 7 as atoms gain an electron less easily">' +
        '<rect x="0" y="0" width="560" height="215" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Same Atomic-Size Rule → Opposite Reactivity Trends!</text>' +
        '<rect x="18" y="38" width="252" height="162" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />' +
        '<rect x="290" y="38" width="252" height="162" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />' +
        '<g font-size="11" fill="var(--ink)">' +
        '<text x="144" y="60" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bad)">Group 1: Alkali Metals (LOSE 1 e⁻)</text>' +
        '<text x="36" y="84" font-weight="700">Li (2,1)</text><text x="116" y="84" fill="var(--ink-2)">Small · strong pull</text>' +
        '<text x="36" y="112" font-weight="700">Na (2,8,1)</text><text x="116" y="112" fill="var(--ink-2)">Larger · weaker pull</text>' +
        '<text x="36" y="140" font-weight="700">K (2,8,8,1)</text><text x="116" y="140" fill="var(--ink-2)">Largest · easiest loss!</text>' +
        '<text x="144" y="170" font-weight="700" text-anchor="middle" fill="var(--bad)">Down Group 1: Reactivity INCREASES ↓</text>' +
        '<text x="144" y="187" font-size="10" text-anchor="middle" fill="var(--ink-2)">Melting point DECREASES ↓</text>' +
        '<text x="416" y="60" font-size="12" font-weight="700" text-anchor="middle" fill="var(--brand)">Group 7: Halogens (GAIN 1 e⁻)</text>' +
        '<text x="308" y="84" font-weight="700">F₂ (2,7)</text><text x="384" y="84" fill="var(--ink-2)">Smallest · strongest pull!</text>' +
        '<text x="308" y="112" font-weight="700">Cl₂ (2,8,7)</text><text x="384" y="112" fill="var(--ink-2)">Medium · strong pull</text>' +
        '<text x="308" y="140" font-weight="700">Br₂ / I₂</text><text x="384" y="140" fill="var(--ink-2)">Larger · hardest to gain</text>' +
        '<text x="416" y="170" font-weight="700" text-anchor="middle" fill="var(--brand)">Down Group 7: Reactivity DECREASES ↓</text>' +
        '<text x="416" y="187" font-size="10" text-anchor="middle" fill="var(--ink-2)">Boiling point INCREASES ↑</text>' +
        '</g>' +
        '</svg>',
    },
    {
      title: "Halogen Displacement Quick-Reference Grid",
      caption: "Only the three shaded boxes above the diagonal react — higher Group 7 halogens displace lower halide ions from aqueous solution.",
      svg:
        '<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three by three halogen displacement grid showing chlorine displaces bromine and iodine, bromine displaces iodine only, and iodine displaces neither">' +
        '<rect x="0" y="0" width="560" height="205" rx="12" fill="var(--surface)" />' +
        '<text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Halogen Displacement Matrix (Cl₂, Br₂, I₂ × KCl, KBr, KI)</text>' +
        '<g stroke="var(--line)" stroke-width="1.2">' +
        '<rect x="24" y="38" width="128" height="36" fill="var(--surface-2)" />' +
        '<rect x="152" y="38" width="128" height="36" fill="var(--surface-2)" />' +
        '<rect x="280" y="38" width="128" height="36" fill="var(--surface-2)" />' +
        '<rect x="408" y="38" width="128" height="36" fill="var(--surface-2)" />' +
        '<rect x="24" y="74" width="128" height="38" fill="var(--surface-2)" />' +
        '<rect x="152" y="74" width="128" height="38" fill="var(--surface)" />' +
        '<rect x="280" y="74" width="128" height="38" fill="var(--warn-soft)" />' +
        '<rect x="408" y="74" width="128" height="38" fill="var(--bad-soft)" />' +
        '<rect x="24" y="112" width="128" height="38" fill="var(--surface-2)" />' +
        '<rect x="152" y="112" width="128" height="38" fill="var(--surface)" />' +
        '<rect x="280" y="112" width="128" height="38" fill="var(--surface)" />' +
        '<rect x="408" y="112" width="128" height="38" fill="var(--bad-soft)" />' +
        '<rect x="24" y="150" width="128" height="38" fill="var(--surface-2)" />' +
        '<rect x="152" y="150" width="128" height="38" fill="var(--surface)" />' +
        '<rect x="280" y="150" width="128" height="38" fill="var(--surface)" />' +
        '<rect x="408" y="150" width="128" height="38" fill="var(--surface)" />' +
        '</g>' +
        '<g font-size="11" text-anchor="middle" fill="var(--ink)">' +
        '<text x="88" y="60" font-weight="700">Added ↓ / Salt →</text>' +
        '<text x="216" y="60" font-weight="700">KCl (aq)</text>' +
        '<text x="344" y="60" font-weight="700">KBr (aq)</text>' +
        '<text x="472" y="60" font-weight="700">KI (aq)</text>' +
        '<text x="88" y="97" font-weight="700">Cl₂ (aq)</text>' +
        '<text x="216" y="97" fill="var(--ink-2)">No reaction</text>' +
        '<text x="344" y="97" font-weight="700" fill="var(--good)">Br₂ (orange-brown)</text>' +
        '<text x="472" y="97" font-weight="700" fill="var(--bad)">I₂ (brown)</text>' +
        '<text x="88" y="135" font-weight="700">Br₂ (aq)</text>' +
        '<text x="216" y="135" fill="var(--ink-2)">No reaction</text>' +
        '<text x="344" y="135" fill="var(--ink-2)">No reaction</text>' +
        '<text x="472" y="135" font-weight="700" fill="var(--bad)">I₂ (brown)</text>' +
        '<text x="88" y="173" font-weight="700">I₂ (aq)</text>' +
        '<text x="216" y="173" fill="var(--ink-2)">No reaction</text>' +
        '<text x="344" y="173" fill="var(--ink-2)">No reaction</text>' +
        '<text x="472" y="173" fill="var(--ink-2)">No reaction</text>' +
        '</g>' +
        '</svg>',
    },
  ],
  history: {
    title: "How Mendeleev Corrected a Chemist Who Actually Held Gallium",
    story:
      "In February 1869, Russian chemist Dmitri Mendeleev wrote the properties of all 63 known elements onto blank cards and played 'chemical solitaire' on his desk in St Petersburg. Instead of forcing elements into neat rows when they clashed, he left empty gaps — boldly predicting a soft silvery metal he called *eka-aluminium* with atomic mass ~68, melting point near 30 °C, and density 5.9 g/cm³. Six years later, French chemist Paul-Émile Lecoq de Boisbaudran isolated a brand-new metal (gallium) and published its density as 4.7 g/cm³. Without ever seeing a sample, Mendeleev sent a letter to Paris insisting the new metal MUST be his predicted element and that Boisbaudran's sample was impure — when the French chemist purified his gallium and re-measured it, the true density came out at 5.94 g/cm³!",
  },
};
