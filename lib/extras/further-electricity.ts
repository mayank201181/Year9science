import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Electrons in a copper kettle wire drift slower than a garden snail (under 0.2 mm per second!), yet the kettle switches on almost instantaneously—how can an electric circuit react at nearly the speed of light if the electrons barely crawl?",
  didYouKnow: [
    "In a 1 mm² copper wire carrying 1 A, electrons drift at roughly 0.07 mm/s—taking over 4 hours to travel 1 metre! The kettle turns on instantly because the electric field pushes ALL free electrons along the entire loop together like a bicycle chain.",
    "Singapore's BS 1363 3-pin plug was invented in 1947 after World War II copper shortages forced British engineers to wire homes in ring circuits—and its longer earth pin physically unlocks the shutters over the live and neutral holes before power can ever connect!",
    "A single lightning bolt transfers roughly 15–30 coulombs of charge in less than a millisecond—producing a peak current of 30 000 A (about 2300 times a full 13 A household fuse!).",
    "Superconductors cooled with liquid nitrogen drop to EXACTLY 0 Ω resistance: an electric current started in a superconducting ring keeps circulating for years with zero battery attached!",
    "Benjamin Franklin guessed the direction of electric flow in 1752—145 years before J. J. Thomson discovered the negatively charged electron—giving physics a 50/50 coin-flip that made conventional current point opposite to electron drift forever!",
  ],
  activities: [
    {
      title: "Bending a Stream of Water with Static Electricity",
      emoji: "💧",
      materials: [
        "1 plastic comb or inflated latex balloon",
        "A dry woollen jumper, fleece, or clean dry hair",
        "A kitchen or lab tap turned to a very thin, steady trickle of water",
      ],
      steps: [
        "Turn the tap on slowly until you get the thinnest unbroken thread of falling water.",
        "Rub the plastic comb or balloon briskly against the dry woollen cloth for 10 seconds to transfer electrons onto the plastic.",
        "Hold the charged comb about 1–2 cm away from the side of the water stream without touching it, and watch the stream bend dramatically toward the comb!",
        "Try holding the comb after briefly touching it to a metal tap (earthing it) and compare what happens.",
      ],
      maths:
        "Rubbing transfers negatively charged electrons onto the plastic comb. Water molecules are polar (one end slightly positive, the other slightly negative), so the negative comb attracts the positive ends of the water molecules and deflects the entire stream! Touching metal earths the comb so the excess electrons drain away and the effect vanishes.",
    },
    {
      title: "Household Fuse & Power Audit",
      emoji: "🔌",
      materials: [
        "Access to 5 everyday appliances at home (kettle, toaster, phone charger, desk fan, hairdryer — DO NOT open plugs!)",
        "A calculator and notebook",
      ],
      steps: [
        "Read the safety rating plate on the base or underside of each appliance to find its power rating in watts (W) and voltage (230 V in Singapore/UK).",
        "Use {{I = P / V}} to calculate the normal operating current in amps for each appliance.",
        "Predict which standard BS 1363 plug fuse (3 A, 5 A, or 13 A) should protect each appliance.",
        "Check the small rectangular fuse stamp printed next to the plug pins (or fuse carrier) to see if your physics calculation matches the real-world engineer's choice!",
      ],
      maths:
        "High-heating appliances like kettles (2000–3000 W) draw 9–13 A and require a 13 A fuse, whereas electronics like chargers and lamps draw under 1 A and are protected by a 3 A fuse so thin cables cannot overheat during a fault.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Potential Divider Sensing Circuit (Automatic Night Light)",
      svg:
        `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Series potential divider sensing circuit using an LDR and a fixed resistor across 12 V">` +
        `<rect width="560" height="240" rx="12" fill="var(--surface)" />` +
        `<text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">How an LDR Potential Divider Switches On Streetlights</text>` +
        // Left diagram: Circuit
        `<g stroke="var(--ink)" stroke-width="2" fill="none">` +
        `<polyline points="62,202 62,56 190,56 190,82" />` +
        `<rect x="174" y="82" width="32" height="44" fill="var(--surface-2)" />` +
        `<line x1="190" y1="126" x2="190" y2="146" />` +
        `<circle cx="190" cy="166" r="22" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        `<rect x="178" y="158" width="24" height="16" fill="var(--surface)" />` +
        `<polyline points="190,188 190,202 62,202" />` +
        // Cell on left rail
        `<line x1="48" y1="122" x2="76" y2="122" /><line x1="54" y1="132" x2="70" y2="132" stroke-width="4" />` +
        // Output voltmeter across LDR
        `<polyline points="190,136 270,136 270,152" stroke="var(--good)" />` +
        `<polyline points="270,180 270,202 190,202" stroke="var(--good)" />` +
        `<circle cx="270" cy="166" r="14" fill="var(--surface-2)" stroke="var(--good)" />` +
        `</g>` +
        `<text x="30" y="131" font-size="11" font-weight="700" text-anchor="middle" fill="var(--brand)">12 V</text>` +
        `<text x="190" y="108" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">1 kΩ</text>` +
        `<text x="142" y="108" font-size="10" text-anchor="end" fill="var(--ink-2)">Fixed R</text>` +
        `<text x="142" y="170" font-size="10" text-anchor="end" fill="var(--brand)" font-weight="700">LDR</text>` +
        `<text x="270" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="var(--good)">V_out</text>` +
        // Right side comparison cards
        `<rect x="314" y="50" width="224" height="72" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<text x="426" y="70" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Daytime (Bright Light)</text>` +
        `<text x="426" y="88" font-size="10" text-anchor="middle" fill="var(--ink-2)">LDR resistance drops low (e.g. 200 Ω)</text>` +
        `<text x="426" y="106" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">V_out = 2 V → Streetlamp stays OFF</text>` +
        `<rect x="314" y="136" width="224" height="72" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        `<text x="426" y="156" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Night-time (Darkness)</text>` +
        `<text x="426" y="174" font-size="10" text-anchor="middle" fill="var(--ink-2)">LDR resistance rises high (e.g. 5 kΩ)</text>` +
        `<text x="426" y="192" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">V_out = 10 V → Relay switches lamp ON!</text>` +
        `</svg>`,
      caption:
        "Because a larger resistor in a series pair takes a larger share of the supply voltage, an LDR automatically converts light level into a switching voltage.",
    },
    {
      title: "The Three Electricity Formula Triangles",
      svg:
        `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three formula triangles for Q equals I times t, V equals I times R, and P equals I times V">` +
        `<rect width="560" height="210" rx="12" fill="var(--surface)" />` +
        `<text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="var(--ink)">Three Core Triangles: Q = It · V = IR · P = IV</text>` +
        // Triangle 1: Q / I t
        `<g transform="translate(36,44)">` +
        `<polygon points="76,4 148,128 4,128" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="2.2" />` +
        `<line x1="40" y1="66" x2="112" y2="66" stroke="var(--brand)" stroke-width="1.8" />` +
        `<line x1="76" y1="66" x2="76" y2="128" stroke="var(--brand)" stroke-width="1.8" />` +
        `<text x="76" y="52" font-size="20" font-weight="800" text-anchor="middle" fill="var(--brand)">Q</text>` +
        `<text x="48" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">I</text>` +
        `<text x="104" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">t</text>` +
        `<text x="76" y="150" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink-2)">C = A × s</text>` +
        `</g>` +
        // Triangle 2: V / I R
        `<g transform="translate(204,44)">` +
        `<polygon points="76,4 148,128 4,128" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2.2" />` +
        `<line x1="40" y1="66" x2="112" y2="66" stroke="var(--good)" stroke-width="1.8" />` +
        `<line x1="76" y1="66" x2="76" y2="128" stroke="var(--good)" stroke-width="1.8" />` +
        `<text x="76" y="52" font-size="20" font-weight="800" text-anchor="middle" fill="var(--good)">V</text>` +
        `<text x="48" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">I</text>` +
        `<text x="104" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">R</text>` +
        `<text x="76" y="150" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink-2)">V = A × Ω</text>` +
        `</g>` +
        // Triangle 3: P / I V
        `<g transform="translate(372,44)">` +
        `<polygon points="76,4 148,128 4,128" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2.2" />` +
        `<line x1="40" y1="66" x2="112" y2="66" stroke="var(--bad)" stroke-width="1.8" />` +
        `<line x1="76" y1="66" x2="76" y2="128" stroke="var(--bad)" stroke-width="1.8" />` +
        `<text x="76" y="52" font-size="20" font-weight="800" text-anchor="middle" fill="var(--bad)">P</text>` +
        `<text x="48" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">I</text>` +
        `<text x="104" y="108" font-size="18" font-weight="800" text-anchor="middle" fill="var(--ink)">V</text>` +
        `<text x="76" y="150" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink-2)">W = A × V</text>` +
        `</g>` +
        `</svg>`,
      caption:
        "Cover the quantity you want to find: symbols side by side multiply; top over bottom divides. Always convert mA → A and minutes → seconds first!",
    },
  ],
  history: {
    title: "Georg Ohm's Mocked Discovery (1827)",
    story:
      "When Bavarian schoolteacher Georg Simon Ohm published his book linking voltage, current, and resistance in 1827, German physics professors mocked it as 'a web of naked fancies'! Ohm had built his own thermocouples and precision wire coils because batteries of the 1820s ran down too quickly to keep potential difference steady. Discouraged, he resigned from his teaching post in Cologne and lived in poverty for years—until British scientists at the Royal Society repeated his experiments in 1841, awarded him the Copley Medal, and later honoured his name forever as the SI unit of electrical resistance: the ohm (Ω).",
  },
};
