import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Math.round(n * 1e6) / 1e6;
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Resultant Forces & Newton's Laws (Level 1)
  // =========================================================================
  {
    id: "further-forces.resultant-newton",
    topicId: "further-forces",
    title: "Resultant Forces, Weight & F = ma",
    level: 1,
    guideRef: "resultant-forces-newton",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool()) {
          // 1D opposite forces -> resultant magnitude
          const right = rng.int(15, 95) * 10;
          const left = rng.int(3, Math.floor(right / 10) - 2) * 10;
          const res = right - left;
          return {
            prompt: `A trolley is pulled forward by a force of ${right} N while friction and air resistance oppose it with ${left} N. Calculate the magnitude of the forward resultant force in newtons.`,
            answer: { type: "number", value: res, display: `${res} N` },
            traps: [
              {
                spec: { type: "number", value: right + left },
                feedback: "Opposite forces cancel each other out — subtract the backward force instead of adding.",
              },
            ],
            hint: "Subtract the opposing backward force from the forward pull.",
            solution: [`{{F_"res" = ${right} - ${left} = ${res}}} N forward.`],
          };
        }
        // Weight W = m * g
        const m = rng.int(8, 140);
        const g = rng.pick([10, 9.8] as const);
        const W = clean(m * g);
        return {
          prompt: `An object has a mass of ${m} kg. Taking gravitational field strength {{g = ${g} "N/kg"}}, calculate its weight in newtons.`,
          answer: { type: "number", value: W, display: `${W} N` },
          hint: "Use {{W = m * g}}.",
          solution: [`{{W = m * g = ${m} * ${g} = ${W}}} N.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // F = m * a (find F)
          const m = rng.int(2, 45) * 20;
          const a = clean(rng.int(2, 16) / 2); // 1.0 to 8.0 in steps of 0.5
          const F = clean(m * a);
          return {
            prompt: `A ${m} kg vehicle accelerates along a straight track at ${a} m/s². Calculate the resultant force acting on it in newtons.`,
            answer: { type: "number", value: F, display: `${F} N` },
            hint: "Use Newton's Second Law: {{F = m * a}}.",
            solution: [`{{F = m * a = ${m} * ${a} = ${F}}} N.`],
          };
        }
        // a = F / m (find a, plain numeric display since m/s² isn't in UNIT_TAIL)
        const m = rng.int(4, 40) * 10;
        const a = clean(rng.int(2, 18) / 2);
        const F = clean(m * a);
        return {
          prompt: `A resultant force of ${F} N acts on a ${m} kg sled on smooth ice. Calculate its acceleration (in m/s²).`,
          answer: { type: "number", value: a, display: `${a}` },
          hint: "Rearrange {{F = m * a}} to {{a = F / m}}.",
          solution: [`{{a = F / m = ${F} / ${m} = ${a}}} m/s².`],
        };
      }

      // Tier 3: Thrust - Drag = m * a (find a OR find thrust) OR vertical rocket liftoff
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const m = rng.int(6, 25) * 100; // 600 to 2500 kg
        const a = clean(rng.int(2, 10) / 2); // 1.0 to 5.0
        const drag = rng.int(3, 18) * 100;
        const res = clean(m * a);
        const thrust = res + drag;
        return {
          prompt: `A ${m} kg car has a forward driving force of ${thrust} N and faces ${drag} N of backward air resistance. Calculate its forward acceleration (in m/s²).`,
          answer: { type: "number", value: a, display: `${a}` },
          hint: "Subtract the backward drag from the driving force FIRST to get the resultant force, then divide by mass.",
          solution: [
            `Resultant force = {{${thrust} - ${drag} = ${res}}} N.`,
            `Acceleration = {{${res} / ${m} = ${a}}} m/s².`,
          ],
        };
      }
      if (mode === 1) {
        const m = rng.int(5, 22) * 100;
        const a = clean(rng.int(2, 9) / 2);
        const drag = rng.int(4, 16) * 100;
        const res = clean(m * a);
        const thrust = res + drag;
        return {
          prompt: `A ${m} kg racing car accelerates forward at ${a} m/s² against a constant backward drag of ${drag} N. Calculate the forward driving force supplied by the engine in newtons.`,
          answer: { type: "number", value: thrust, display: `${thrust} N` },
          traps: [
            {
              spec: { type: "number", value: res },
              feedback: `${res} N is the RESULTANT force — add the ${drag} N backward drag that the engine must also overcome!`,
            },
          ],
          hint: "Find resultant force {{F = m * a}}, then add the backward drag force.",
          solution: [
            `Resultant force = {{${m} * ${a} = ${res}}} N.`,
            `Engine driving force = {{${res} + ${drag} = ${thrust}}} N.`,
          ],
        };
      }
      // Vertical rocket liftoff (g = 10 N/kg)
      const m = rng.int(4, 30) * 100;
      const a = rng.int(2, 12);
      const weight = m * 10;
      const res = m * a;
      const thrust = weight + res;
      return {
        prompt: `A ${m} kg rocket launches straight upward with engine thrust ${thrust} N (take {{g = 10 "N/kg"}} and ignore air resistance). Calculate its initial upward acceleration (in m/s²).`,
        answer: { type: "number", value: a, display: `${a}` },
        traps: [
          {
            spec: { type: "number", value: clean(thrust / m) },
            feedback: `Subtract the rocket's downward weight (${weight} N) from the thrust first!`,
          },
        ],
        hint: "Find downward weight ({{m * 10}}), subtract it from thrust to get upward resultant force, then divide by mass.",
        solution: [
          `Weight = {{${m} * 10 = ${weight}}} N.`,
          `Upward resultant force = {{${thrust} - ${weight} = ${res}}} N.`,
          `Acceleration = {{${res} / ${m} = ${a}}} m/s².`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Speed, Acceleration & Motion-Graph Areas (Level 2)
  // =========================================================================
  {
    id: "further-forces.motion-graphs",
    topicId: "further-forces",
    title: "Motion Graphs: Speed, Acceleration & Area",
    level: 2,
    guideRef: "motion-graphs",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool()) {
          // Average speed v = d / t
          const v = rng.int(3, 35);
          const t = rng.int(4, 45);
          const d = v * t;
          return {
            prompt: `On a distance–time graph, a straight line climbs from 0 m to ${d} m over ${t} s. Calculate the speed (gradient) in m/s.`,
            answer: { type: "number", value: v, display: `${v} m/s` },
            hint: "Gradient of a distance–time graph = distance ÷ time.",
            solution: [`{{v = d / t = ${d} / ${t} = ${v}}} m/s.`],
          };
        }
        // Horizontal line on velocity-time graph -> rectangle area
        const v = rng.int(4, 32);
        const t = rng.int(5, 40);
        const d = v * t;
        return {
          prompt: `A velocity–time graph shows a flat horizontal line at ${v} m/s for ${t} s. Calculate the distance travelled in metres.`,
          answer: { type: "number", value: d, display: `${d} m` },
          hint: "Distance equals the area of the rectangle under the velocity–time graph ({{v * t}}).",
          solution: [`Area of rectangle = {{${v} * ${t} = ${d}}} m.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Acceleration a = (v - u) / t
          const u = rng.int(2, 16);
          const a = clean(rng.int(2, 12) / 2); // 1.0 to 6.0
          const t = rng.int(4, 14);
          const v = clean(u + a * t);
          return {
            prompt: `A vehicle accelerates uniformly from ${u} m/s to ${v} m/s in ${t} s. Calculate its acceleration (in m/s²).`,
            answer: { type: "number", value: a, display: `${a}` },
            hint: "Use {{a = (v - u) / t}} — subtract the starting velocity first.",
            solution: [
              `Change in velocity = {{${v} - ${u} = ${clean(v - u)}}} m/s.`,
              `{{a = ${clean(v - u)} / ${t} = ${a}}} m/s².`,
            ],
          };
        }
        // Triangle area under v-t graph (from rest to v in t s)
        const t = rng.int(3, 18) * 2; // even so 0.5*t*v is integer
        const v = rng.int(6, 36);
        const d = (t * v) / 2;
        return {
          prompt: `A drone accelerates uniformly from rest (0 m/s) to ${v} m/s in ${t} s. Use the area under its velocity–time graph to calculate the distance travelled in metres.`,
          answer: { type: "number", value: d, display: `${d} m` },
          traps: [
            {
              spec: { type: "number", value: t * v },
              feedback: "Remember the velocity–time graph is a TRIANGLE, so include the factor of {{1/2}}!",
            },
          ],
          hint: "Area of a triangle = {{1/2 * base * height}}.",
          solution: [`Distance = {{0.5 * ${t} * ${v} = ${d}}} m.`],
        };
      }

      // Tier 3: Trapezium (u -> v in t s) OR 3-stage accel + cruise + decel total distance
      if (rng.bool()) {
        const u = rng.int(4, 16);
        const v = u + rng.int(4, 24);
        const t = rng.int(2, 12) * 2; // even so 0.5*(u+v)*t is exact integer
        const d = ((u + v) * t) / 2;
        return {
          prompt: `A train already moving at ${u} m/s accelerates uniformly to ${v} m/s over ${t} s. Calculate the distance travelled during those ${t} s in metres.`,
          answer: { type: "number", value: d, display: `${d} m` },
          traps: [
            {
              spec: { type: "number", value: ((v - u) * t) / 2 },
              feedback: "That counts only the top triangle — include the bottom rectangle ({{u * t}}) too!",
            },
          ],
          hint: "Use the trapezium area {{1/2 * (u + v) * t}} (or rectangle + triangle).",
          solution: [
            `Rectangle: {{${u} * ${t} = ${u * t}}} m; Triangle: {{0.5 * ${t} * ${v - u} = ${((v - u) * t) / 2}}} m.`,
            `Total distance = {{${u * t} + ${((v - u) * t) / 2} = ${d}}} m.`,
          ],
        };
      }
      // 3-stage v-t graph: 0 -> v in t1, steady v for t2, v -> 0 in t3
      const v = rng.int(4, 18) * 2; // even
      const t1 = rng.int(4, 14);
      const t2 = rng.int(8, 30);
      const t3 = rng.int(3, 12);
      const d1 = (t1 * v) / 2;
      const d2 = t2 * v;
      const d3 = (t3 * v) / 2;
      const totalD = d1 + d2 + d3;
      return {
        prompt: `A shuttle accelerates uniformly from 0 to ${v} m/s in ${t1} s, cruises at ${v} m/s for ${t2} s, and brakes uniformly to rest in ${t3} s. Calculate the **total distance travelled** in metres.`,
        answer: { type: "number", value: totalD, display: `${totalD} m` },
        hint: "Sum the three areas under the velocity–time graph: triangle 1 + middle rectangle + triangle 2.",
        solution: [
          `Stage 1 triangle: {{0.5 * ${t1} * ${v} = ${d1}}} m.`,
          `Stage 2 rectangle: {{${t2} * ${v} = ${d2}}} m.`,
          `Stage 3 triangle: {{0.5 * ${t3} * ${v} = ${d3}}} m.`,
          `Total distance = {{${d1} + ${d2} + ${d3} = ${totalD}}} m.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Pressure in Solids & Fluids (Level 1)
  // =========================================================================
  {
    id: "further-forces.solid-pressure",
    topicId: "further-forces",
    title: "Pressure Calculations (P = F ÷ A)",
    level: 1,
    guideRef: "pressure-solids-fluids",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Direct P = F / A with exact integer Pa
        const areaPool = [0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5];
        const A = rng.pick(areaPool);
        const P = rng.int(15, 160) * 50; // 750 to 8000 Pa
        const F = clean(P * A);
        return {
          prompt: `A crate exerts a downward force of ${F} N across a flat contact area of ${A} m². Calculate the pressure exerted on the floor in pascals (Pa).`,
          answer: { type: "number", value: P, display: `${P} Pa` },
          hint: "Use {{P = F / A}}.",
          solution: [`{{P = F / A = ${F} / ${A} = ${P}}} Pa.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Rearranged F = P * A
          const areaPool = [0.02, 0.04, 0.05, 0.08, 0.1, 0.2, 0.25, 0.4, 0.5];
          const A = rng.pick(areaPool);
          const P = rng.int(20, 180) * 100; // 2000 to 18000 Pa
          const F = clean(P * A);
          return {
            prompt: `A flat base of area ${A} m² exerts a pressure of ${P} Pa on the ground. Calculate the downward force (weight) in newtons.`,
            answer: { type: "number", value: F, display: `${F} N` },
            hint: "Rearrange {{P = F / A}} to {{F = P * A}}.",
            solution: [`{{F = P * A = ${P} * ${A} = ${F}}} N.`],
          };
        }
        // Multi-foot / 4-tyre pressure
        const feet = rng.pick([2, 4] as const);
        const item = feet === 2 ? "boots" : "tyres";
        const single = feet === 2 ? "sole" : "tyre";
        const oneA = rng.pick([0.02, 0.025, 0.04, 0.05, 0.08, 0.1] as const);
        const totalA = clean(feet * oneA);
        const P = rng.int(20, 150) * 500; // 10 000 to 75 000 Pa
        const F = clean(P * totalA);
        return {
          prompt: `An object weighing ${F} N rests evenly on ${feet} ${item}, each with a ground contact area of ${oneA} m² per ${single}. Calculate the pressure on the ground in pascals (Pa).`,
          answer: { type: "number", value: P, display: `${P} Pa` },
          traps: [
            {
              spec: { type: "number", value: clean(F / oneA) },
              feedback: `Multiply the single-${single} area (${oneA} m²) by ${feet} to get total contact area first!`,
            },
          ],
          hint: `First find the total contact area of all ${feet} ${item}, then compute {{P = F / A}}.`,
          solution: [
            `Total area = {{${feet} * ${oneA} = ${totalA}}} m².`,
            `Pressure = {{${F} / ${totalA} = ${P}}} Pa.`,
          ],
        };
      }

      // Tier 3: cm² to Pa conversion OR Hydraulic piston force
      if (rng.bool()) {
        const areaCm2 = rng.pick([2, 4, 5, 8, 10, 20, 25, 40, 50]);
        const pNcm2 = rng.int(2, 35); // N/cm²
        const F = clean(pNcm2 * areaCm2);
        const pPa = pNcm2 * 10000;
        return {
          prompt: `A vertical force of ${F} N presses on an area of ${areaCm2} cm². Calculate the pressure in **pascals (N/m²)**.`,
          answer: { type: "number", value: pPa, display: `${pPa} Pa` },
          traps: [
            {
              spec: { type: "number", value: pNcm2 },
              feedback: `${pNcm2} is in N/cm² — multiply by 10 000 (since {{1 "m"^2 = 10 000 "cm"^2}}) to get pascals!`,
            },
            {
              spec: { type: "number", value: pNcm2 * 100 },
              feedback: "Watch out! {{1 \"m\"^2 = 100 * 100 = 10 000 \"cm\"^2}}, NOT 100 cm²!",
            },
          ],
          hint: "Divide force by area in cm² to get N/cm², then multiply by 10 000 to convert to N/m² (Pa).",
          solution: [
            `Pressure in N/cm² = {{${F} / ${areaCm2} = ${pNcm2}}} N/cm².`,
            `Convert to Pa (× 10 000): {{${pNcm2} * 10 000 = ${pPa}}} Pa.`,
          ],
        };
      }
      // Hydraulic force multiplier
      const aIn = rng.pick([2, 4, 5, 8, 10]);
      const mult = rng.int(3, 18);
      const aOut = aIn * mult;
      const pOil = rng.int(4, 30); // N/cm²
      const fIn = pOil * aIn;
      const fOut = pOil * aOut;
      return {
        prompt: `In a hydraulic press, a force of ${fIn} N pushes an input piston of area ${aIn} cm². The oil transmits equal pressure to an output piston of area ${aOut} cm². Calculate the output force in newtons.`,
        answer: { type: "number", value: fOut, display: `${fOut} N` },
        hint: "Find oil pressure {{P = F_1 / A_1}} in N/cm², then multiply by the output area {{A_2}}.",
        solution: [
          `Oil pressure = {{${fIn} / ${aIn} = ${pOil}}} N/cm².`,
          `Output force = {{${pOil} * ${aOut} = ${fOut}}} N.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Moments & Hooke's Law (Level 3)
  // =========================================================================
  {
    id: "further-forces.moments-hookes",
    topicId: "further-forces",
    title: "Principle of Moments & Hooke's Law",
    level: 3,
    guideRef: "moments-hookes-law",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool()) {
          // Direct Moment M = F * d
          const F = rng.int(12, 95) * 5;
          const d = clean(rng.int(2, 16) / 10); // 0.2 to 1.6 m
          const M = clean(F * d);
          return {
            prompt: `A perpendicular force of ${F} N acts on a lever at a distance of ${d} m from the pivot. Calculate the moment in Nm.`,
            answer: { type: "number", value: M, display: `${M} Nm` },
            hint: "Use {{M = F * d}}.",
            solution: [`{{M = F * d = ${F} * ${d} = ${M}}} Nm.`],
          };
        }
        // Direct Hooke's Law F = k * e
        const k = rng.int(4, 25) * 10; // 40 to 250 N/m
        const e = clean(rng.int(2, 30) / 100); // 0.02 to 0.30 m
        const F = clean(k * e);
        return {
          prompt: `A spring has a spring constant of ${k} N/m. Within its limit of proportionality, what stretching force (in newtons) produces an extension of ${e} m?`,
          answer: { type: "number", value: F, display: `${F} N` },
          hint: "Use Hooke's Law: {{F = k * e}}.",
          solution: [`{{F = k * e = ${k} * ${e} = ${F}}} N.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Balanced seesaw: F1 * d1 = F2 * d2 -> find F2
          const d2Pool = [0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5];
          const d2 = rng.pick(d2Pool);
          const F2 = rng.int(10, 80) * 10;
          const moment = clean(F2 * d2);
          const d1Pool = [0.4, 0.5, 0.8, 1.0, 1.6, 2.0];
          const d1 = rng.pick(d1Pool);
          const F1 = clean(moment / d1);
          if (Number.isInteger(F1) && F1 !== F2) {
            return {
              prompt: `A balanced seesaw has a ${F1} N weight sitting ${d1} m left of the pivot. What weight (in newtons) placed ${d2} m right of the pivot keeps the seesaw in equilibrium?`,
              answer: { type: "number", value: F2, display: `${F2} N` },
              hint: "Set clockwise moment equal to anticlockwise moment: {{F_2 * d_2 = F_1 * d_1}}.",
              solution: [
                `Anticlockwise moment = {{${F1} * ${d1} = ${moment}}} Nm.`,
                `{{F_2 = ${moment} / ${d2} = ${F2}}} N.`,
              ],
            };
          }
          // Fallback guaranteed clean number
          const fAClean = rng.int(5, 25) * 30;
          const distA = clean(rng.int(6, 24) / 10);
          const distB = rng.pick([0.5, 1.0, 1.5, 2.0]);
          const mClean = clean(fAClean * distA);
          const fBClean = clean(mClean / distB);
          return {
            prompt: `A balanced lever has a ${fAClean} N load placed ${distA} m to the left of the pivot. What downward force (in newtons) placed ${distB} m to the right of the pivot balances it?`,
            answer: { type: "number", value: fBClean, display: `${fBClean} N` },
            hint: "Calculate the anticlockwise moment ({{F * d}}) first, then divide by the right-side distance.",
            solution: [
              `Anticlockwise moment = {{${fAClean} * ${distA} = ${mClean}}} Nm.`,
              `Right-side force = {{${mClean} / ${distB} = ${fBClean}}} N.`,
            ],
          };
        }
        // Hooke's Law: unstretched L0 + stretched L -> find k in N/m
        const L0 = rng.int(8, 22); // cm
        const eCm = rng.pick([4, 5, 8, 10, 12, 15, 20, 25]);
        const L = L0 + eCm;
        const eM = clean(eCm / 100);
        const k = rng.int(4, 24) * 10; // 40 to 240 N/m
        const F = clean(k * eM);
        return {
          prompt: `A spring has an unstretched length of ${L0} cm. When a ${F} N weight hangs from it, its stretched length becomes ${L} cm (within its elastic limit). Calculate its spring constant {{k}} in **N/m**.`,
          answer: { type: "number", value: k, display: `${k} N/m` },
          traps: [
            {
              spec: { type: "number", value: clean(F / eCm) },
              feedback: `Convert the ${eCm} cm extension to ${eM} m before dividing!`,
            },
          ],
          hint: "Subtract the unstretched length from the stretched length, convert cm to m (÷ 100), then divide F by e.",
          solution: [
            `Extension = {{${L} - ${L0} = ${eCm} "cm" = ${eM} "m"}}.`,
            `Spring constant: {{k = F / e = ${F} / ${eM} = ${k}}} N/m.`,
          ],
        };
      }

      // Tier 3: Two weights on left of pivot -> find balancing force on right, OR Hooke's Law total stretched length (cm)
      if (rng.bool()) {
        const f1 = rng.int(2, 12) * 5;
        const d1 = clean(rng.int(2, 8) / 10);
        const f2 = rng.int(2, 12) * 5;
        const d2 = clean(rng.int(3, 10) / 10);
        const totalM = clean(f1 * d1 + f2 * d2);
        const dRight = rng.pick([0.4, 0.5, 0.8, 1.0]);
        const fRight = clean(totalM / dRight);
        return {
          prompt: `On a balanced uniform beam pivoted at the centre, two weights hang on the left: ${f1} N at ${d1} m and ${f2} N at ${d2} m from the pivot. What single weight (in newtons) placed ${dRight} m to the right of the pivot restores balance?`,
          answer: { type: "number", value: fRight, display: `${fRight} N` },
          hint: "Calculate both left-hand moments separately, add them together, then divide by the right-hand distance.",
          solution: [
            `Total anticlockwise moment = {{(${f1} * ${d1}) + (${f2} * ${d2}) = ${clean(f1 * d1)} + ${clean(f2 * d2)} = ${totalM}}} Nm.`,
            `Right-side weight = {{${totalM} / ${dRight} = ${fRight}}} N.`,
          ],
        };
      }
      // Total stretched length in cm from L0, k, and F
      const L0 = rng.int(10, 26); // cm
      const k = rng.pick([20, 25, 40, 50, 80, 100]);
      const eCm = rng.int(4, 24);
      const F = clean((k * eCm) / 100);
      const totalL = L0 + eCm;
      return {
        prompt: `A spring has an unstretched length of ${L0} cm and a spring constant of ${k} N/m. Within its limit of proportionality, calculate its **total stretched length in cm** when a ${F} N weight hangs from it.`,
        answer: { type: "number", value: totalL, display: `${totalL} cm` },
        traps: eCm !== totalL ? [
          {
            spec: { type: "number", value: eCm },
            feedback: `${eCm} cm is the EXTENSION — add it to the original ${L0} cm length to find the total stretched length!`,
          },
        ] : undefined,
        hint: "Find extension {{e = F / k}} in metres, convert to cm (× 100), and add to the original unstretched length.",
        solution: [
          `Extension = {{${F} / ${k} = ${clean(eCm / 100)} "m" = ${eCm} "cm"}}.`,
          `Total stretched length = {{${L0} + ${eCm} = ${totalL}}} cm.`,
        ],
      };
    },
  },
];
