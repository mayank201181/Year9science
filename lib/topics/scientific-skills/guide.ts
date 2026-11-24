import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "scientific-skills",
  title: "Working Scientifically & Practical Skills",
  strand: "Scientific Skills",
  icon: "🧪",
  summary: "Design fair tests, draw 2D lab diagrams, process anomalies, plot best-fit graphs, and evaluate experimental errors like a research scientist.",
  intro: "Every discovery in Biology, Chemistry, and Physics starts with a reliable investigation. Whether you are measuring enzyme activity, salt crystals, or electrical resistance in a Tanglin lab, the same universal toolkit turns messy observations into rock-solid scientific evidence.",
  guide: [
    {
      id: "variables-fair-testing",
      heading: "Identifying Variables, Hypotheses & Fair Testing",
      discovery: {
        problem: "Maya wants to test whether warm water dissolves sugar faster than cold water. She puts 1 teaspoon of icing sugar into 100 cm³ of 60 °C water and stirs rapidly, then puts 1 sugar cube into 250 cm³ of 20 °C water without stirring. The 60 °C water finishes first. Can Maya conclude that higher temperature increases dissolving speed?",
        idea: "No! Maya changed **four** things at once (temperature, surface area of the sugar, water volume, and stirring). Because multiple factors changed, it is impossible to know which one caused the faster dissolving. To make a **fair test**, you must change ONLY the one factor you are investigating (**independent variable**), measure one clear outcome (**dependent variable**), and keep every other factor strictly identical (**control variables**).",
      },
      body: `Every scientific investigation revolves around three types of **variables** — quantities or conditions that can change during an experiment:

- **Independent Variable (IV):** The **one** factor you deliberately change to test its effect. Decide on a sensible **range** (minimum to maximum value) and equal **intervals** (at least 5 values so you can spot a clear trend, e.g. 20 °C, 30 °C, 40 °C, 50 °C, 60 °C).
- **Dependent Variable (DV):** The factor you **measure** to observe the outcome. Always state *what* you measure, *with which instrument*, and in *what units* (e.g. time taken to dissolve, measured with a stopwatch in seconds).
- **Control Variables (CVs):** Every other factor that could affect the dependent variable and must be kept **constant** so the comparison stays a **fair test** (valid). Never just write "amount of water" — specify **volume** (e.g. 50 cm³) or **mass** (e.g. 2.0 g).

Before collecting data, scientists write a **testable hypothesis**: a clear prediction linking the independent variable to the dependent variable, backed by a scientific reason. For example: *"As the temperature of the water increases, the time taken for 5.0 g of sugar to dissolve will decrease, because particles have more kinetic energy and collide more frequently."*

A **repeatable method** reads like a precise recipe that another student could follow without asking you a single question. Every strong Year 9 method includes:
1. Named **apparatus** with sizes (e.g. 100 cm³ measuring cylinder, 250 cm³ beaker, digital balance, stopwatch).
2. Specific **quantities** for all control variables (exact volumes, masses, concentrations).
3. At least **5 values** of the independent variable and **3 repeats** at each value to spot anomalies and calculate a mean.
4. A clear **risk assessment** identifying the hazard (e.g. hot water or dilute acid), the risk (scalds or eye irritation), and the control measure (wear safety goggles, stand up while heating, wipe spills immediately).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fair test setup comparing three beakers at 20, 40 and 60 degrees Celsius with identical control variables">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Anatomy of a Fair Test: Changing ONLY the Independent Variable</text>
  <rect x="22" y="38" width="166" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="105" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">INDEPENDENT (Change)</text>
  <text x="105" y="72" text-anchor="middle" font-size="11" fill="var(--ink)">Water temperature: 20, 40, 60 °C</text>
  <rect x="198" y="38" width="164" height="44" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="280" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">DEPENDENT (Measure)</text>
  <text x="280" y="72" text-anchor="middle" font-size="11" fill="var(--ink)">Time to dissolve (stopwatch, s)</text>
  <rect x="372" y="38" width="166" height="44" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="455" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">CONTROLS (Keep Same)</text>
  <text x="455" y="72" text-anchor="middle" font-size="11" fill="var(--ink-2)">100 cm³ water · 5.0 g sugar · no stir</text>
  <g transform="translate(55,105)">
    <path d="M 10 0 L 10 88 L 94 88 L 94 0" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <rect x="12" y="34" width="80" height="52" fill="var(--brand-soft)" opacity="0.65"/>
    <line x1="12" y1="34" x2="92" y2="34" stroke="var(--brand)" stroke-width="1.5"/>
    <circle cx="52" cy="76" r="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="52" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">20 °C</text>
    <text x="52" y="122" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100 cm³ · 5.0 g</text>
  </g>
  <g transform="translate(228,105)">
    <path d="M 10 0 L 10 88 L 94 88 L 94 0" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <rect x="12" y="34" width="80" height="52" fill="var(--brand-soft)" opacity="0.8"/>
    <line x1="12" y1="34" x2="92" y2="34" stroke="var(--brand)" stroke-width="1.5"/>
    <circle cx="52" cy="76" r="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="52" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">40 °C</text>
    <text x="52" y="122" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100 cm³ · 5.0 g</text>
  </g>
  <g transform="translate(401,105)">
    <path d="M 10 0 L 10 88 L 94 88 L 94 0" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <rect x="12" y="34" width="80" height="52" fill="var(--brand-soft)" opacity="0.95"/>
    <line x1="12" y1="34" x2="92" y2="34" stroke="var(--brand)" stroke-width="1.5"/>
    <circle cx="52" cy="76" r="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="52" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">60 °C</text>
    <text x="52" y="122" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100 cm³ · 5.0 g</text>
  </g>
  <line x1="36" y1="194" x2="524" y2="194" stroke="var(--line)" stroke-width="2"/>
  <text x="280" y="242" text-anchor="middle" font-size="11" fill="var(--ink-2)">Valid conclusion: because ONLY temperature changed, any difference in time is caused by temperature.</text>
</svg>`,
      diagramCaption: "Controlling water volume, solute mass, and stirring isolates temperature as the sole cause of any change in dissolving time.",
      whyItWorks: "Controlling every confounding factor guarantees **validity**: your investigation genuinely answers the question you set out to test. If even one influential variable drifts — such as acid concentration or initial temperature — two explanations compete for the same data and your conclusion collapses.",
      keyPoints: [
        "**Independent variable (IV):** the single factor you deliberately change across a sensible range (usually at least 5 values).",
        "**Dependent variable (DV):** the factor you measure with a named instrument and unit to see the effect of changing the IV.",
        "**Control variables (CVs):** all other factors kept constant; specify **volume**, **mass**, or **concentration** — never the vague word 'amount'.",
        "A **control experiment** (such as boiled enzyme or water with no solute) provides a baseline showing what happens without the treatment.",
        "Every risk assessment links a **hazard** (the dangerous object/chemical), a **risk** (how it could harm you), and a **precaution** (how to reduce the risk).",
      ],
      strategies: [
        "Ask the **'I Change / I Measure / Keep Same'** check before writing anything in a planning question.",
        "Scan every piece of apparatus in the scenario — each item hints at a control variable (beaker → volume of liquid; balance → mass of solid; thermometer → starting temperature).",
        "Use **CORMS** for method writing: **C**hange (IV), **O**rganism/Object, **R**epeats, **M**easure (DV + instrument + unit), **S**ame (CVs with numbers).",
      ],
      thinkDeeper: "In a field study comparing dandelion height in sunlight versus shade on Tanglin's playing fields, you cannot keep soil moisture, wind, and foot traffic completely identical. How do biologists still obtain trustworthy data when strict lab control variables are impossible?",
      workedExamples: [
        {
          title: "Identifying IV, DV, and Control Variables",
          problem: "A student investigates how the concentration of hydrochloric acid affects the volume of hydrogen gas produced in 60 seconds when reacting with magnesium ribbon. Identify the IV, DV, and three specific control variables.",
          steps: [
            "Spot what the student deliberately changes: the **concentration of hydrochloric acid** (e.g. 0.5, 1.0, 1.5, 2.0 mol/dm³). This is the **independent variable**.",
            "Spot what is measured as the outcome: the **volume of hydrogen gas produced in 60 seconds** (in cm³ using a gas syringe). This is the **dependent variable**.",
            "List every other factor that affects reaction rate and give measurable quantities (not 'amount'): (1) **volume** of hydrochloric acid (e.g. 25 cm³), (2) **length/mass** and surface area of magnesium ribbon (e.g. 3.0 cm strip), (3) **starting temperature** of the acid (e.g. 25 °C).",
          ],
          answer: "IV: concentration of hydrochloric acid; DV: volume of hydrogen gas produced in 60 s (cm³); CVs: volume of acid, mass/length of magnesium ribbon, starting temperature.",
          yourTurn: {
            question: "A student investigates how the length of a wire affects its electrical resistance, keeping the wire material, thickness, and temperature constant. Which variable (independent, dependent, or control) is the thickness of the wire?",
            answer: { type: "text", accept: ["control", "control variable", "cv"], display: "control variable" },
            solution: "The wire's thickness is deliberately kept constant so it does not affect the resistance measurement — therefore it is a **control variable**.",
          },
        },
        {
          title: "Writing a Testable Hypothesis and Risk Assessment",
          problem: "A Year 9 group plans to heat 50 cm³ of 1.0 mol/dm³ sulfuric acid in a beaker using a Bunsen burner to see how temperature affects how quickly copper oxide dissolves. Write one testable hypothesis and one complete hazard–risk–precaution row.",
          steps: [
            "Link the IV (temperature of sulfuric acid) to the DV (time for copper oxide to dissolve) with a particle-theory reason.",
            "Identify the specific chemical/thermal hazard: warm dilute sulfuric acid is an **irritant** (or corrosive if hot).",
            "State the exact risk (splashes could damage eyes or burn skin) and a matching precaution (wear **safety goggles**, warm gently rather than boiling, and stand up during heating).",
          ],
          answer: "Hypothesis: Increasing the acid temperature decreases the time for copper oxide to dissolve because particles move faster and collide more frequently with greater energy. Hazard: hot dilute sulfuric acid; Risk: eye irritation or burns; Precaution: wear safety goggles and avoid boiling.",
        },
      ],
    },
    {
      id: "diagrams-tables-calculations",
      heading: "Scientific Diagrams, Results Tables & Data Calculations",
      discovery: {
        problem: "Three trials measuring the time for a marble chip to stop fizzing give **34.2 s**, **34.6 s**, **51.8 s**, and **34.4 s**. One student calculates the mean as **38.75 s** and writes `38.75 s` in every row of the table. Spot all three mistakes!",
        idea: "First, **51.8 s** is way out of line with the other three trials — it is an **anomalous result** and must be circled and **excluded** from the mean: {{(34.2 + 34.6 + 34.4) / 3}} = **34.4 s**. Second, **units (`s`) belong ONLY in the column header**, never beside individual numbers. Third, the mean should match the **1 decimal place** precision of the raw stopwatch readings, not jump to 2 decimal places.",
      },
      body: [
        "Clear presentation lets any scientist read your experiment in seconds without guesswork.",
        "### 1. Rules for 2D Scientific Apparatus Diagrams",
        "- Always draw in **sharp pencil** using a **ruler** for all straight edges (beakers, flasks, tripods, label lines).",
        "- Draw a simple **2D cross-section** — NEVER draw 3D cylinders, ellipses, artistic sketching, or shading.",
        "- Leave tubes and flask necks **open** where liquids or gases pass through; never draw lines straight across open glassware.",
        "- Label apparatus with **straight, ruled, horizontal lines** touching the exact object — **no arrowheads** and **no crossed label lines**.",
        "- Represent a Bunsen burner flame cleanly with a single labelled upward **HEAT** arrow underneath the gauze/tripod.",
        "### 2. Rules for Results Tables",
        "- Put the **independent variable** in the **left-hand column** and the **dependent variable** (repeats + mean) to the **right**.",
        "- Put **units ONLY in the column headings**, separated by a slash or brackets — e.g. `Temperature / °C` or `Time (s)`. Never repeat units inside the data cells!",
        "- Record all values in a column to the **same number of decimal places**, matching the resolution of your instrument (e.g. `12.0`, `14.5`, `16.0` — never drop trailing zeros!).",
        "- Include space for at least **three repeat trials** and a calculated **mean** column.",
        "### 3. Processing Data: Anomalies, Means, Ranges & Percentage Change",
        "- **Anomalous result (outlier):** A repeat reading that clearly does not fit the pattern of the other concordant trials (for example due to a misread stopwatch or spilled reagent). Circle it in your table and **exclude it** before calculating the mean!",
        "- **Mean:** Add all **concordant** (non-anomalous) values and divide by how many values you added. Round your mean to match the same decimal places (or significant figures) as the raw readings.",
        "- **Range:** `largest value − smallest value` (excluding anomalies if asked for the range of concordant repeats). Half the range (`± range ÷ 2`) estimates the **uncertainty** around the mean.",
        "- **Percentage change:** `((final − initial) ÷ initial) × 100%` — always divide by the **original (initial)** value.",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: correct 2D scientific filtration diagram drawn with ruled straight lines. Right: properly formatted results table with units in headers and an excluded anomaly.">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="135" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">2D Scientific Diagram (Filtration)</text>
  <rect x="16" y="34" width="238" height="202" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <path d="M 74 58 L 104 104 L 104 128 M 142 58 L 112 104 L 112 128" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <polyline points="80,62 108,101 136,62" fill="none" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="4 2"/>
  <path d="M 96 116 L 96 130 L 66 206 L 150 206 L 120 130 L 120 116" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <line x1="76" y1="184" x2="140" y2="184" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="133" y1="68" x2="176" y2="68" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="180" y="72" font-size="10.5" fill="var(--ink)">Filter paper</text>
  <line x1="126" y1="90" x2="176" y2="90" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="180" y="94" font-size="10.5" fill="var(--ink)">Filter funnel</text>
  <line x1="138" y1="158" x2="176" y2="158" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="180" y="162" font-size="10.5" fill="var(--ink)">Conical flask</text>
  <line x1="128" y1="184" x2="176" y2="184" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="180" y="188" font-size="10.5" fill="var(--ink)">Filtrate</text>
  <text x="135" y="226" text-anchor="middle" font-size="10" fill="var(--good)">Ruled lines · Open tops · No shading</text>

  <text x="408" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Results Table &amp; Anomaly Rule</text>
  <rect x="272" y="34" width="272" height="148" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
  <rect x="272" y="34" width="272" height="36" rx="8" fill="var(--brand-soft)"/>
  <line x1="272" y1="70" x2="544" y2="70" stroke="var(--line)" stroke-width="1.2"/>
  <line x1="342" y1="34" x2="342" y2="182" stroke="var(--line)" stroke-width="1"/>
  <line x1="392" y1="34" x2="392" y2="182" stroke="var(--line)" stroke-width="1"/>
  <line x1="442" y1="34" x2="442" y2="182" stroke="var(--line)" stroke-width="1"/>
  <line x1="492" y1="34" x2="492" y2="182" stroke="var(--line)" stroke-width="1"/>
  <text x="307" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Temp</text>
  <text x="307" y="63" text-anchor="middle" font-size="10" fill="var(--brand)">/ °C</text>
  <text x="367" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">T1</text>
  <text x="367" y="63" text-anchor="middle" font-size="10" fill="var(--ink-2)">/ s</text>
  <text x="417" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">T2</text>
  <text x="417" y="63" text-anchor="middle" font-size="10" fill="var(--ink-2)">/ s</text>
  <text x="467" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">T3</text>
  <text x="467" y="63" text-anchor="middle" font-size="10" fill="var(--ink-2)">/ s</text>
  <text x="518" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Mean</text>
  <text x="518" y="63" text-anchor="middle" font-size="10" fill="var(--good)">/ s</text>

  <line x1="272" y1="108" x2="544" y2="108" stroke="var(--line)" stroke-width="1"/>
  <line x1="272" y1="145" x2="544" y2="145" stroke="var(--line)" stroke-width="1"/>
  <text x="307" y="93" text-anchor="middle" font-size="11" fill="var(--ink)">20</text>
  <text x="367" y="93" text-anchor="middle" font-size="11" fill="var(--ink)">42.0</text>
  <text x="417" y="93" text-anchor="middle" font-size="11" fill="var(--ink)">42.4</text>
  <text x="467" y="93" text-anchor="middle" font-size="11" fill="var(--ink)">41.6</text>
  <text x="518" y="93" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">42.0</text>

  <text x="307" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">40</text>
  <text x="367" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">24.2</text>
  <ellipse cx="417" cy="127" rx="19" ry="12" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="417" y="131" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">39.5</text>
  <text x="467" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">24.6</text>
  <text x="518" y="131" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">24.4</text>

  <text x="307" y="168" text-anchor="middle" font-size="11" fill="var(--ink)">60</text>
  <text x="367" y="168" text-anchor="middle" font-size="11" fill="var(--ink)">11.8</text>
  <text x="417" y="168" text-anchor="middle" font-size="11" fill="var(--ink)">12.2</text>
  <text x="467" y="168" text-anchor="middle" font-size="11" fill="var(--ink)">12.0</text>
  <text x="518" y="168" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">12.0</text>

  <rect x="272" y="190" width="272" height="46" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1"/>
  <text x="408" y="209" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Anomaly 39.5 excluded at 40 °C!</text>
  <text x="408" y="226" text-anchor="middle" font-size="10.5" fill="var(--ink)">Mean = (24.2 + 24.6) ÷ 2 = 24.4 s (not ÷ 3)</text>
</svg>`,
      diagramCaption: "Left: crisp 2D filtration cross-section with straight uncrossed label lines. Right: units strictly in headers, matching 1 d.p. formatting, and the circled anomaly excluded.",
      whyItWorks: "When an anomalous trial is caused by a one-off mistake (like forgetting to stop the timer), averaging it into the mean drags the entire row away from the true value. Dividing ONLY by the number of concordant trials keeps your mean both unbiased and faithful to your raw measurements.",
      keyPoints: [
        "Scientific diagrams are **2D cross-sections** in sharp pencil with a ruler — no shading, no 3D curves, and straight horizontal label lines without arrowheads.",
        "In results tables, put the **IV in the left column**, **DV to the right**, and **units ONLY in headers** (e.g. `Mass / g`).",
        "Keep **consistent decimal places** throughout a column — write `12.0`, not `12`, if other readings are to 1 d.p.",
        "Always **circle and exclude anomalies** before finding a mean, and divide by the count of **remaining** trials.",
        "Calculate **range** = maximum − minimum; estimate uncertainty as **± half the range**.",
      ],
      strategies: [
        "Before computing any mean, scan the row left-to-right for a 'jumper' value far away from the tight cluster.",
        "Double-check your denominator: if you had 4 trials and excluded 1 anomaly, divide by **3**, not 4!",
        "Check that your calculated mean sits strictly between the smallest and largest concordant values — a quick sanity check that catches calculator typos.",
      ],
      thinkDeeper: "If you only took **two** trials and got 14.2 s and 19.8 s, why can you NOT decide which one is an anomaly? How many trials is the absolute minimum needed to identify an outlier?",
      workedExamples: [
        {
          title: "Calculating a Mean Excluding an Anomaly",
          problem: "Four repeat measurements of gas volume collected in 30 s are **28.4 cm³**, **28.8 cm³**, **19.5 cm³**, and **28.6 cm³**. Identify the anomaly, calculate the mean, and state the range of the concordant trials.",
          steps: [
            "Compare the four trials: `28.4`, `28.8`, and `28.6` cluster tightly within 0.4 cm³, while `19.5` is about 9 cm³ lower. So **19.5 cm³** is the anomaly.",
            "Exclude `19.5` and sum the 3 concordant values: `28.4 + 28.8 + 28.6 = 85.8`.",
            "Divide by **3** (the number of concordant trials): {{85.8 / 3}} = **28.6 cm³** (matches 1 d.p. of raw data).",
            "Find the range of the concordant results: `28.8 − 28.4 = 0.4 cm³` (giving an uncertainty of `± 0.2 cm³`).",
          ],
          answer: "Anomaly = 19.5 cm³; Mean = 28.6 cm³; Concordant range = 0.4 cm³.",
          yourTurn: {
            question: "Four repeat stopwatch readings are 16.4 s, 23.9 s, 16.0 s, and 16.2 s. Exclude the anomaly and calculate the mean time in seconds.",
            answer: { type: "number", value: 16.2, display: "16.2 s" },
            solution: "23.9 s is the anomaly. Exclude it and average the 3 concordant trials: (16.4 + 16.0 + 16.2) ÷ 3 = 48.6 ÷ 3 = 16.2 s.",
          },
        },
        {
          title: "Calculating Percentage Change in a Practical",
          problem: "A potato cylinder has an initial mass of **4.00 g**. After soaking in pure water for 30 minutes, its final mass is **4.60 g**. Calculate the percentage change in mass.",
          steps: [
            "Find the change in mass: `final − initial = 4.60 − 4.00 = +0.60 g`.",
            "Divide by the **original (initial)** mass: {{0.60 / 4.00}} = `0.15`.",
            "Multiply by 100 to convert to a percentage: `0.15 × 100 = +15%`.",
          ],
          answer: "+15% (an increase of 15%).",
          yourTurn: {
            question: "A leaf starts at a mass of 5.0 g and loses water until its mass is 4.2 g. Calculate the percentage decrease in mass (give a positive percentage).",
            answer: { type: "number", value: 16, display: "16%" },
            solution: "Mass lost = 5.0 − 4.2 = 0.8 g. Percentage decrease = (0.8 ÷ 5.0) × 100 = 16%.",
          },
        },
      ],
    },
    {
      id: "graphing-conclusions",
      heading: "Graphing Results & Writing Valid Conclusions",
      discovery: {
        problem: "Two students plot the same set of points showing how spring extension changes with load. Student 1 joins every dot with a zig-zag ruler line, including one wild point way above the trend. Student 2 draws one smooth straight line passing neatly through the middle of the cluster and ignores the outlier. Which graph makes better predictions for a load they never tested?",
        idea: "Student 2's **line of best fit** wins! Every real measurement contains tiny random wobbles. Joining dots zig-zag style copies the measurement noise instead of the true physical law. A smooth line (or curve) of best fit averages out random scatter and reveals the real underlying relationship.",
      },
      body: [
        "A great scientific graph lets your eye see a mathematical pattern immediately. Choosing the right graph depends on the type of **independent variable**:",
        "- **Categoric (discontinuous) IV** — data sorted into named groups or labels (e.g. metal type: copper, iron, zinc; blood group: A, B, AB, O) → draw a **bar chart** with **equal-width bars and gaps between them**.\n- **Continuous numerical IV** — data measured on a continuous number scale (e.g. temperature / °C, time / s, mass / g, length / cm) → draw a **scatter / line graph** with a **line or curve of best fit**.",
        "### Golden Rules for Plotting Graphs (SLAPUK)\n1. **Scale:** Choose simple linear increments (`1, 2, 5, 10, 20, 50` per major grid square — NEVER awkward steps like `3` or `7`) so your plotted points fill **more than half** the grid in both directions.\n2. **Line of best fit:** Draw ONE crisp **straight line** (with a ruler) or **smooth freehand curve** showing the trend, with roughly equal scatter above and below. Ignore clearly circled anomalies. **Never join points dot-to-dot!**\n3. **Axes:** Put the **independent variable on the x-axis** (horizontal) and the **dependent variable on the y-axis** (vertical).\n4. **Points:** Mark each coordinate cleanly with a sharp pencil **`×`** or **`+`** (within half a small grid square).\n5. **Units & Key:** Label both axes with **quantity and unit** (e.g. `Extension / mm`), and add a **key** if plotting more than one dataset.",
        "### Reading Relationships & Writing PEE Conclusions\n- **Directly proportional:** A **straight line passing through the origin `(0, 0)`** — doubling the IV exactly doubles the DV! (A straight line that misses `(0, 0)` is *linear*, NOT directly proportional.)\n- **Gradient of a straight line:** Pick two widely spaced points **on the line of best fit** (not noisy data points!) and calculate **gradient = change in y ÷ change in x** (`Δy ÷ Δx`).\n- **Interpolation vs Extrapolation:** Estimating a value *inside* your measured range is **interpolation** (reliable); extending the line *beyond* your measured data is **extrapolation** (risky, because the pattern might change!).\n- **PEE Conclusion Structure:**\n  1. **Point (Pattern):** State clearly how the DV changes as the IV increases (use *directly proportional*, *positive correlation*, *negative correlation*, or *levels off*).\n  2. **Evidence (Data):** Quote at least **two pairs of specific numbers with units** from your table or graph (e.g. *\"When temperature rose from 20 °C to 60 °C, mean rate increased from 1.2 cm³/s to 4.8 cm³/s\"*).\n  3. **Explain (Science):** Explain *why* this happened using scientific principles (particles, enzymes, forces, circuits, etc.).",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph with straight line of best fit, gradient triangle delta y over delta x, circled anomaly, and categoric bar chart comparison">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="195" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Continuous IV → Line of Best Fit</text>
  <line x1="60" y1="205" x2="345" y2="205" stroke="var(--ink)" stroke-width="2"/>
  <line x1="60" y1="205" x2="60" y2="38" stroke="var(--ink)" stroke-width="2"/>
  <g stroke="var(--line)" stroke-width="0.8">
    <line x1="115" y1="38" x2="115" y2="205"/><line x1="170" y1="38" x2="170" y2="205"/>
    <line x1="225" y1="38" x2="225" y2="205"/><line x1="280" y1="38" x2="280" y2="205"/><line x1="335" y1="38" x2="335" y2="205"/>
    <line x1="60" y1="172" x2="345" y2="172"/><line x1="60" y1="139" x2="345" y2="139"/>
    <line x1="60" y1="106" x2="345" y2="106"/><line x1="60" y1="73" x2="345" y2="73"/><line x1="60" y1="40" x2="345" y2="40"/>
  </g>
  <line x1="60" y1="205" x2="335" y2="45" stroke="var(--brand)" stroke-width="2.4"/>
  <polyline points="115,173 280,173 280,77" fill="none" stroke="var(--good)" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="198" y="187" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Δx = 3.0 N</text>
  <text x="313" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Δy = 18 mm</text>
  <g stroke="var(--ink)" stroke-width="2">
    <path d="M111,176 L119,168 M111,168 L119,176"/>
    <path d="M166,143 L174,135 M166,135 L174,143"/>
    <path d="M221,112 L229,104 M221,104 L229,112"/>
    <path d="M276,81 L284,73 M276,73 L284,81"/>
    <path d="M331,49 L339,41 M331,41 L339,49"/>
  </g>
  <circle cx="225" cy="166" r="10" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
  <path d="M221,170 L229,162 M221,162 L229,170" stroke="var(--bad)" stroke-width="2"/>
  <text x="225" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Anomaly</text>
  <text x="200" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Force (IV) / N</text>
  <text x="18" y="125" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" transform="rotate(-90 18 125)">Extension (DV) / mm</text>
  <text x="53" y="218" text-anchor="end" font-size="10" fill="var(--ink-2)">0</text>
  <text x="115" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">1</text>
  <text x="170" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">2</text>
  <text x="225" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">3</text>
  <text x="280" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">4</text>
  <text x="335" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">5</text>

  <rect x="372" y="34" width="172" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="458" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Categoric IV → Bar Chart</text>
  <line x1="395" y1="186" x2="530" y2="186" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="395" y1="186" x2="395" y2="70" stroke="var(--ink)" stroke-width="1.8"/>
  <rect x="408" y="114" width="26" height="72" fill="var(--brand)" opacity="0.85"/>
  <rect x="448" y="88" width="26" height="98" fill="var(--brand)" opacity="0.85"/>
  <rect x="488" y="142" width="26" height="44" fill="var(--brand)" opacity="0.85"/>
  <text x="421" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">Cu</text>
  <text x="461" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">Fe</text>
  <text x="501" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">Zn</text>
  <text x="458" y="220" text-anchor="middle" font-size="10" fill="var(--good)">Gaps between bars!</text>
</svg>`,
      diagramCaption: "Left: continuous IV plotted with × marks, a ruled line of best fit passing through (0, 0) (directly proportional), an ignored anomaly, and a large gradient triangle. Right: categoric IV plotted as a bar chart with gaps.",
      whyItWorks: "Using a large gradient triangle (spanning more than half the line of best fit) shrinks the relative reading error from the grid squares. And requiring a straight line *through the origin* for direct proportionality ensures that the ratio `y ÷ x` is truly constant everywhere.",
      keyPoints: [
        "Always put the **independent variable on the x-axis** and the **dependent variable on the y-axis**.",
        "Use a **bar chart** (with gaps) for a **categoric IV** and a **line/scatter graph** (with line/curve of best fit) for a **continuous IV**.",
        "A relationship is **directly proportional** ONLY if the line of best fit is **straight AND passes through the origin `(0, 0)`**.",
        "Calculate straight-line gradient using two widely spaced points **on the line**: `gradient = Δy ÷ Δx`.",
        "Write **PEE conclusions**: **P**attern (trend) + **E**vidence (quote numbers with units) + **E**xplain (underlying science).",
      ],
      strategies: [
        "Check **SLAPUK** before handing in any graph: **S**cale, **L**ine of best fit, **A**xes (IV on x, DV on y), **P**oints (`×`), **U**nits, **K**ey.",
        "To test if table data is directly proportional, divide `DV ÷ IV` for each row — if the ratio stays constant (e.g. always `6.0 mm/N`), it is directly proportional!",
        "Never write just 'it went up' in a conclusion — always name BOTH variables (`As [IV] increases, [DV] increases...`) and quote data values.",
      ],
      thinkDeeper: "A graph of cooling water temperature against time shows a smooth curve that starts steep and gradually flattens out at 22 °C. Why would drawing a straight line of best fit be scientifically wrong here, and what does the horizontal asymptote at 22 °C tell you?",
      workedExamples: [
        {
          title: "Calculating Gradient from a Line of Best Fit",
          problem: "On a graph of spring extension (y-axis, mm) against force (x-axis, N), the straight line of best fit passes through `(1.0, 6.0)` and `(5.0, 30.0)`. Find the gradient and decide whether extension is directly proportional to force.",
          steps: [
            "Calculate the vertical rise: `Δy = 30.0 − 6.0 = 24.0 mm`.",
            "Calculate the horizontal run: `Δx = 5.0 − 1.0 = 4.0 N`.",
            "Divide rise by run: `gradient =` {{24.0 / 4.0}} = **6.0 mm/N**.",
            "Check the origin `(0, 0)`: at `x = 0`, `y = 6.0 − 6.0 × 1.0 = 0 mm`. Because the line is straight AND passes through `(0, 0)`, extension is **directly proportional** to force.",
          ],
          answer: "Gradient = 6.0 mm/N; yes, directly proportional (straight line through the origin).",
          yourTurn: {
            question: "A straight line of best fit on a graph of gas volume (y-axis, cm³) against time (x-axis, s) passes through (10, 25) and (50, 125). Calculate the gradient in cm³/s.",
            answer: { type: "number", value: 2.5, display: "2.5" },
            solution: "Gradient = Δy ÷ Δx = (125 − 25) ÷ (50 − 10) = 100 ÷ 40 = 2.5 cm³/s.",
          },
        },
        {
          title: "Choosing Graph Type and Writing a PEE Conclusion",
          problem: "A student tests four metals (magnesium, zinc, iron, copper) in dilute acid and records temperature rise: Mg = 18 °C, Zn = 9 °C, Fe = 4 °C, Cu = 0 °C. Which graph should they draw, and what is a valid PEE conclusion?",
          steps: [
            "Check the IV: type of metal is **categoric** (discrete labels, no numbers in between) → draw a **bar chart** with gaps between the bars.",
            "**Point:** More reactive metals produce a larger temperature rise with dilute acid (magnesium gave the greatest rise, copper gave none).",
            "**Evidence:** Magnesium caused an 18 °C rise — twice zinc's 9 °C rise — while copper stayed at 0 °C.",
            "**Explain:** More reactive metals transfer more energy from chemical stores to the thermal store of the solution during this exothermic reaction; copper is below hydrogen in the reactivity series so it does not react.",
          ],
          answer: "Bar chart; PEE conclusion linking metal reactivity to temperature rise with quoted values (18 °C vs 9 °C vs 0 °C) and reactivity-series explanation.",
        },
      ],
    },
    {
      id: "evaluating-techniques",
      heading: "Evaluating Experimental Techniques & Errors",
      discovery: {
        problem: "Before weighing three identical brass masses (true mass **50.0 g**), a student forgets to press **TARE / ZERO** on a digital balance that reads **+2.5 g** when empty. Their three readings are **52.5 g**, **52.4 g**, and **52.6 g**. Are these measurements **accurate**, **precise**, or both — and will taking 20 more repeats fix the mistake?",
        idea: "The readings are tightly clustered within 0.2 g of each other, so they have **high precision**. However, their mean (52.5 g) is **2.5 g away from the true value (50.0 g)**, so they have **low accuracy**! Because the empty balance started at +2.5 g, every single reading shifted upward by the exact same amount — a **systematic (zero) error**. Repeating 20 times will NEVER remove a systematic error; you must zero the balance or subtract 2.5 g from every reading.",
      },
      body: [
        "Evaluating an experiment means judging **how trustworthy your measurements are** and suggesting **specific, practical ways to improve them**. Mastering the exact scientific vocabulary is essential because everyday English mixes these terms up!",
        "### 1. Accuracy vs Precision\n- **Accurate:** A measurement is **close to the true value**.\n- **Precise:** Repeat measurements are **closely clustered around the mean** (small spread / small range). A set of readings can be precise *without* being accurate!",
        "### 2. Repeatability vs Reproducibility\n- **Repeatable:** The **same person**, using the **same method and equipment**, gets similar results when repeating the experiment.\n- **Reproducible:** A **different person** (or using **different equipment or a different method**) obtains the same pattern/result. Reproducibility gives scientists far stronger confidence than repeatability alone.",
        "### 3. Systematic Errors vs Random Errors\n- **Systematic Error:** Causes all readings to differ from the true value by a **consistent amount in the same direction** (e.g. a **zero error** on a newton meter or balance, or consistently reading a ruler at an angle from one side). It reduces **accuracy** and **cannot** be fixed by repeating and averaging — you must recalibrate, tare/zero the apparatus, or subtract the zero error.\n- **Random Error:** Unpredictable fluctuations around the true value in **either direction** (e.g. human reaction time starting a stopwatch, judging by eye when a cross disappears under cloudy liquid, drafts blowing a Bunsen flame). It reduces **precision** (widens the spread) and **can be reduced** by taking **more repeats** and calculating a **mean** (or using automated sensors/data loggers).",
        "### 4. Resolution & Concrete Improvements\n- **Resolution:** The **smallest change** a measuring instrument can detect (the value of one smallest scale division). A digital thermometer reading to `0.1 °C` has higher resolution than an alcohol thermometer marked every `1 °C`.\n- **Golden Rule for Improvements:** Never write vague answers like *\"be more careful\"* or *\"use better equipment\"*. Always name the **exact equipment upgrade** and explain **which error it reduces**:\n  - Replace a measuring cylinder with a **gas syringe** (higher resolution, prevents soluble gas dissolving in water).\n  - Replace a liquid-in-glass thermometer with a **digital temperature probe / data logger** (higher resolution, eliminates parallax error).\n  - Use a **water bath** instead of a Bunsen burner (maintains a steady controlled temperature).\n  - Use a **light gate / colorimeter** instead of judging by eye (removes human reaction time / subjective endpoint judgment).",
      ].join("\n\n"),
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four bullseye targets comparing high and low accuracy and precision, highlighting systematic error and random error">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Accuracy vs Precision: Spotting Systematic &amp; Random Errors</text>

  <g transform="translate(75,112)">
    <circle cx="0" cy="0" r="52" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="34" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="15" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
    <circle cx="-3" cy="2" r="3.5" fill="var(--good)"/><circle cx="4" cy="-3" r="3.5" fill="var(--good)"/>
    <circle cx="1" cy="5" r="3.5" fill="var(--good)"/><circle cx="-4" cy="-4" r="3.5" fill="var(--good)"/>
    <text x="0" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Accurate &amp; Precise</text>
    <text x="0" y="88" text-anchor="middle" font-size="10" fill="var(--ink-2)">Tight cluster on</text>
    <text x="0" y="101" text-anchor="middle" font-size="10" fill="var(--ink-2)">the true value</text>
  </g>

  <g transform="translate(212,112)">
    <circle cx="0" cy="0" r="52" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="34" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="15" fill="var(--brand-soft)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="24" cy="-22" r="3.5" fill="var(--brand)"/><circle cx="29" cy="-18" r="3.5" fill="var(--brand)"/>
    <circle cx="22" cy="-15" r="3.5" fill="var(--brand)"/><circle cx="27" cy="-25" r="3.5" fill="var(--brand)"/>
    <line x1="2" y1="-2" x2="20" y2="-18" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="0" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Precise, NOT Accurate</text>
    <text x="0" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Systematic / Zero Error</text>
    <text x="0" y="101" text-anchor="middle" font-size="10" fill="var(--ink-2)">Repeats will NOT fix it!</text>
  </g>

  <g transform="translate(348,112)">
    <circle cx="0" cy="0" r="52" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="34" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="15" fill="var(--brand-soft)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="-26" cy="-14" r="3.5" fill="var(--ink)"/><circle cx="24" cy="-18" r="3.5" fill="var(--ink)"/>
    <circle cx="-18" cy="24" r="3.5" fill="var(--ink)"/><circle cx="22" cy="18" r="3.5" fill="var(--ink)"/>
    <path d="M-4,0 L4,0 M0,-4 L0,4" stroke="var(--good)" stroke-width="1.8"/>
    <text x="0" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Accurate Mean, Low Prec.</text>
    <text x="0" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Random Error</text>
    <text x="0" y="101" text-anchor="middle" font-size="10" fill="var(--ink-2)">Repeats + mean help!</text>
  </g>

  <g transform="translate(485,112)">
    <circle cx="0" cy="0" r="52" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="34" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="15" fill="var(--brand-soft)" stroke="var(--line)" stroke-width="1.2"/>
    <circle cx="32" cy="-26" r="3.5" fill="var(--bad)"/><circle cx="-10" cy="36" r="3.5" fill="var(--bad)"/>
    <circle cx="38" cy="18" r="3.5" fill="var(--bad)"/><circle cx="12" cy="-38" r="3.5" fill="var(--bad)"/>
    <text x="0" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Neither Accurate</text>
    <text x="0" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">nor Precise</text>
    <text x="0" y="101" text-anchor="middle" font-size="10" fill="var(--ink-2)">Both errors present</text>
  </g>
</svg>`,
      diagramCaption: "Centre = true value; dots = repeat trials. Tight off-centre clusters reveal systematic error; wide scatter around the centre reveals random error.",
      whyItWorks: "Random errors scatter equally above and below the true value, so averaging multiple trials lets positive and negative fluctuations cancel out. Systematic errors bias every measurement in one direction, so their average keeps the exact same offset until you fix the instrument or subtract the offset.",
      keyPoints: [
        "**Accuracy** = closeness to the true value; **Precision** = closeness of repeat readings to each other (small range).",
        "**Repeatable** = same person + same kit gets similar results; **Reproducible** = different person/kit/method confirms the same result.",
        "**Systematic (zero) error** shifts every reading in one direction — fix by zeroing/recalibrating/subtracting the offset (repeats do NOT fix it).",
        "**Random error** scatters readings unpredictably around the mean — reduce by repeating and taking a mean or using automated sensors.",
        "**Resolution** is the smallest interval an instrument can read (e.g. `0.1 g` is higher resolution than `1 g`).",
      ],
      strategies: [
        "When correcting a zero error, always compute: **True value = Measured reading − Zero error** (watch the sign if the zero error is negative!).",
        "Check the word in the question: **re-p-eatable** = same **p**erson; **re-prod-ucible** = different people **prod**ucing the same finding.",
        "Pair every evaluation critique with a concrete fix: *Error source → Specific apparatus/method change → Why it improves accuracy or precision*.",
      ],
      thinkDeeper: "A digital stopwatch has a resolution of `0.01 s`, yet a human's reaction time adds a random error of roughly `±0.2 s`. Why does recording a hand-timed pendulum swing as `1.47 s` give a false sense of accuracy, and how can you cut the effect of reaction time tenfold without buying a light gate?",
      workedExamples: [
        {
          title: "Correcting Positive and Negative Zero Errors",
          problem: "A newton meter reads **+0.4 N** when hanging empty. When a stone is suspended from it, the meter reads **6.2 N**. (a) What type of error is this? (b) Calculate the true weight of the stone.",
          steps: [
            "Because the meter reads +0.4 N with zero load, every reading is shifted upward by 0.4 N. This is a **systematic (zero) error**.",
            "Apply `True value = Measured reading − Zero error`.",
            "Substitute: `6.2 − 0.4 =` **5.8 N**.",
            "Sanity check: if the scale already started 0.4 N too high, the true weight must be 0.4 N smaller than the displayed reading.",
          ],
          answer: "(a) Systematic (zero) error; (b) 5.8 N.",
          yourTurn: {
            question: "An uncalibrated balance reads −0.3 g when nothing is on the pan. When a metal block is placed on it, the display shows 42.5 g. What is the true mass of the block in grams?",
            answer: { type: "number", value: 42.8, display: "42.8 g" },
            solution: "True value = Measured − Zero error = 42.5 − (−0.3) = 42.5 + 0.3 = 42.8 g. Because the balance started 0.3 g too low, you add 0.3 g back.",
          },
        },
        {
          title: "Finding Instrument Resolution",
          problem: "A 50 cm³ measuring cylinder has numbered marks every `10 cm³`, and there are `10` equal small intervals between `10 cm³` and `20 cm³`. What is its resolution?",
          steps: [
            "Find the difference between two consecutive numbered marks: `20 − 10 = 10 cm³`.",
            "Count the number of equal small divisions between them: `10` divisions.",
            "Divide interval by divisions: {{10 / 10}} = **1 cm³** (or `1.0 cm³`).",
          ],
          answer: "1 cm³.",
          yourTurn: {
            question: "A ruler has numbered marks every 1 cm, divided into 10 equal small divisions. What is the resolution of the ruler in millimetres?",
            answer: { type: "number", value: 1, display: "1 mm" },
            solution: "1 cm = 10 mm. Divided into 10 equal intervals gives 10 ÷ 10 = 1 mm resolution.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Independent Variable (IV)", back: "The ONE factor you deliberately change in an investigation (always plotted on the x-axis)." },
      { front: "Dependent Variable (DV)", back: "The factor you measure to observe the outcome of changing the IV (always plotted on the y-axis)." },
      { front: "Control Variables (CVs)", back: "All other factors kept constant so that only the IV can cause any change in the DV (ensuring a valid fair test)." },
      { front: "Valid Investigation", back: "An experiment designed so it genuinely tests the hypothesis — only the IV changes while all other influential variables are controlled." },
      { front: "Anomalous Result (Outlier)", back: "A measurement that lies far outside the pattern of the other concordant repeats; circle it and exclude it from the mean and line of best fit." },
      { front: "2D Scientific Diagram Rules", back: "Sharp pencil, ruled straight lines, 2D cross-section, no shading, open glassware necks, straight horizontal uncrossed label lines with no arrowheads." },
      { front: "Results Table Unit Rule", back: "Write units ONLY in the column headings (e.g. Time / s), never next to numbers inside data cells; keep consistent decimal places." },
      { front: "Categoric vs Continuous IV Graph", back: "Categoric IV (named groups) → bar chart with gaps. Continuous IV (measured numbers) → scatter/line graph with a line or curve of best fit." },
      { front: "Directly Proportional Graph", back: "A straight line of best fit that passes through the origin (0, 0); doubling the IV exactly doubles the DV." },
      { front: "Accuracy vs Precision", back: "Accuracy = closeness to the true value. Precision = closeness of repeat measurements to each other (small spread/range)." },
      { front: "Repeatable vs Reproducible", back: "Repeatable = same person, method & kit gets similar results. Reproducible = different person, kit or method obtains the same result." },
      { front: "Systematic (Zero) Error", back: "An error that shifts all measurements in one direction by a consistent amount; affects accuracy and is NOT fixed by taking repeats." },
      { front: "Random Error", back: "Unpredictable fluctuations scattered above and below the true value; affects precision and CAN be reduced by taking more repeats and finding a mean." },
      { front: "Resolution", back: "The smallest change in the quantity being measured that an instrument can detect (the size of one smallest scale division)." },
    ],
    mustKnow: [
      "Identify the independent, dependent, and at least three specific control variables (using volume/mass/concentration, never 'amount') from any experimental description.",
      "Write a testable hypothesis linking the IV to the DV with a clear scientific reason.",
      "Write a repeatable step-by-step method including named apparatus, quantities, range (5+ values), 3 repeats, and a hazard–risk–precaution table.",
      "Draw neat 2D ruled scientific diagrams of common apparatus (filtration, heating, distillation, gas collection) with straight uncrossed label lines.",
      "Construct results tables with IV left, DV right, units ONLY in headings, and consistent decimal places.",
      "Spot anomalous results, exclude them from mean calculations, and compute range and percentage change accurately.",
      "Select bar chart vs scatter/line graph correctly, choose linear scales covering >50% of the grid, draw straight or curved lines of best fit, and calculate straight-line gradients (Δy ÷ Δx).",
      "Write PEE conclusions (Point/pattern, Evidence quoting data with units, Explain the underlying science).",
      "Distinguish accuracy vs precision, repeatability vs reproducibility, and systematic vs random errors.",
      "Calculate instrument resolution, correct positive or negative zero errors, and propose concrete apparatus improvements.",
    ],
    misconceptions: [
      { wrong: "Never Write ❌: 'Keep the amount of acid the same.'", right: "Write Instead ✅: 'Keep the **volume** (25 cm³) and **concentration** (1.0 mol/dm³) of acid the same.'" },
      { wrong: "Never Write ❌: Put units beside every number in a table (`12 s`, `15 s`) and average the anomaly in.", right: "Write Instead ✅: Put units **only in the header** (`Time / s`), circle the anomaly, and **exclude it** before dividing by the remaining trials." },
      { wrong: "Never Write ❌: Join plotted graph points dot-to-dot with a ruler.", right: "Write Instead ✅: Draw ONE smooth **straight line** or **smooth curve of best fit** ignoring anomalies." },
      { wrong: "Never Write ❌: 'Any straight-line graph shows direct proportionality.'", right: "Write Instead ✅: 'Direct proportionality requires a **straight line passing through the origin (0, 0)**.'" },
      { wrong: "Never Write ❌: 'Do more repeats to fix a zero error / systematic error.'", right: "Write Instead ✅: 'Repeats only reduce **random** errors; fix a **systematic** error by zeroing/recalibrating the instrument or subtracting the zero error.'" },
      { wrong: "Never Write ❌: 'Improve the experiment by being more careful and preventing human error.'", right: "Write Instead ✅: 'Name a specific fix, e.g. use a **water bath** to control temperature or a **data logger/light gate** to remove reaction-time error.'" },
    ],
    examMistakes: [
      "Dividing by the original total number of trials (e.g. 4) instead of the remaining concordant trials (e.g. 3) after excluding an anomaly.",
      "Swapping the axes and plotting the independent variable on the y-axis instead of the x-axis.",
      "Choosing an uneven or awkward axis scale (like 0, 5, 10, 20, 50 or steps of 3) instead of a linear scale.",
      "Forgetting to include specific numbers with units when asked to 'use the data to describe the trend' in a conclusion.",
      "Confusing **precise** (tight repeats) with **accurate** (close to the true value) when analysing bullseye or trial data.",
      "Mixing up **repeatable** (same person & kit) with **reproducible** (different person/kit/method).",
      "Adding instead of subtracting a positive zero error (or forgetting that subtracting a negative zero error *adds* its size).",
      "Drawing 3D sketched apparatus, shading glassware, or putting arrowheads on label lines in scientific diagrams.",
    ],
    mnemonics: [
      {
        topic: "Graph Axes & Variables",
        device: "DRY MIX",
        explanation: "**D**ependent = **R**esponding variable on the **Y**-axis; **M**anipulated (**I**ndependent) variable on the **X**-axis.",
      },
      {
        topic: "Perfect Science Graphs",
        device: "SLAPUK",
        explanation: "**S**cale (linear, >50% grid), **L**ine of best fit (no dot-to-dot), **A**xes (IV on x, DV on y), **P**oints (crisp ×), **U**nits on both labels, **K**ey (if >1 line).",
      },
      {
        topic: "Planning a Method",
        device: "CORMS",
        explanation: "**C**hange (IV + range), **O**bject/Organism, **R**epeats (3+ for a mean), **M**easure (DV + instrument + unit), **S**ame (specific control variables).",
      },
    ],
    realWorld: [
      {
        title: "Clinical Drug Trials & Placebos",
        detail: "Before any new vaccine or medicine is approved, scientists run double-blind fair tests comparing the drug against an identical placebo (control group) while controlling age, dose, and health conditions.",
        emoji: "💊",
      },
      {
        title: "Formula 1 Wind Tunnels & Calibration",
        detail: "Aerodynamics engineers zero their pressure sensors before every wind-tunnel run — even a tiny systematic zero error would miscalculate downforce and slow the car on race day.",
        emoji: "🏎️",
      },
      {
        title: "Singapore NEA Weather & Air Quality Monitoring",
        detail: "Across Singapore, automated PSI and rainfall sensors take continuous high-resolution readings that are cross-checked between stations for reproducibility before public alerts go out.",
        emoji: "🌦️",
      },
      {
        title: "Sports Science Timing Gates",
        detail: "Olympic sprint events replaced hand-held stopwatches with electronic starting blocks and laser photo-finish cameras to eliminate human reaction-time random error.",
        emoji: "⏱️",
      },
      {
        title: "Food Safety Quality Control",
        detail: "Factories test repeat samples from every batch of milk or chocolate and flag anomalous pH or temperature readings immediately before products reach supermarket shelves.",
        emoji: "🍫",
      },
    ],
    videos: [
      { title: "Variables, Fair Testing & Hypotheses (KS3 / GCSE Science)", channel: "Cognito / Freesciencelessons", url: "https://www.youtube.com/results?search_query=GCSE+science+independent+dependent+control+variables" },
      { title: "Anomalies, Means & Results Tables in Practical Science", channel: "Freesciencelessons", url: "https://www.youtube.com/results?search_query=GCSE+science+anomalous+results+mean+tables" },
      { title: "Drawing Science Graphs, Lines of Best Fit & Gradients", channel: "Cognito", url: "https://www.youtube.com/results?search_query=GCSE+science+line+of+best+fit+gradient+bar+chart" },
      { title: "Accuracy, Precision, Repeatability, Reproducibility & Errors", channel: "Freesciencelessons", url: "https://www.youtube.com/results?search_query=GCSE+science+accuracy+precision+systematic+random+errors" },
    ],
    formulas: [
      { name: "Mean (Concordant)", formula: "Sum of concordant readings ÷ Number of concordant readings", note: "Always exclude circled anomalies first." },
      { name: "Range", formula: "Maximum value − Minimum value", note: "Measures spread (precision) of repeat trials." },
      { name: "Uncertainty from Repeats", formula: "± (Range ÷ 2)", note: "Written as Mean ± uncertainty (e.g. 24.4 ± 0.2 s)." },
      { name: "Percentage Change", formula: "((Final − Initial) ÷ Initial) × 100%", note: "Always divide by the ORIGINAL (initial) value." },
      { name: "Gradient of a Straight Line", formula: "Δy ÷ Δx = (y₂ − y₁) ÷ (x₂ − x₁)", note: "Use two widely spaced points ON the line of best fit." },
      { name: "True Value (Zero Error)", formula: "True value = Measured reading − Zero error", note: "Watch the sign when the zero error is negative." },
      { name: "Instrument Resolution", formula: "Value between numbered marks ÷ Number of equal divisions", note: "Smaller interval = higher resolution." },
      { name: "Direct Proportionality Test", formula: "y ÷ x = constant (and graph passes through (0, 0))", note: "Straight line NOT through (0, 0) is linear, not directly proportional." },
      { name: "Percentage Error", formula: "(|Measured − True| ÷ True) × 100%", note: "Quantifies how accurate a reading is compared to the accepted true value." },
      { name: "Rate of Reaction (from graph)", formula: "Quantity of product formed ÷ Time taken", note: "Equals the gradient of a volume-vs-time graph." },
    ],
  },
};
