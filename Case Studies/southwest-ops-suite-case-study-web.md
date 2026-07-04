# Southwest Airlines Ops Suite

---

## Hero Section

**Headline:** When a storm strikes a major airport, Southwest went from needing 4 to 6 hours to recover to needing minutes.

**Subhead:** I designed the core applications in Southwest's operational software suite and built the design system that unified them across 3,900+ daily departures and 97 cities.

> **Metric callout:** 1–1.8 percentage point year-over-year improvement in on-time performance during major weather events, making Southwest the top-ranked U.S. carrier in those conditions.

[Hero image: Dark-mode Baker screen showing the aircraft schedule with recovery solution, or the NOC environment photo from the LUVLines article]

---

## The Problem

Southwest's Network Operations Control center runs 24 hours a day in a windowless, dark room. When I arrived, the Supervisors on Duty were managing one of the country's most complex flight networks using paper checklists, whiteboards, and decades of tribal knowledge.

New supervisors took two to three years to become effective. Veterans could not take real vacations because their expertise was irreplaceable during disruptions. The airline had outgrown its manual operations and needed its people to trust automated systems that did not yet exist.

[Image pair: Side-by-side of the legacy system screenshot (from the presentation deck, page 1) and a photo of the physical NOC environment or paper-based workflows]

---

## My Role

I was the senior UX designer on **The Baker** (the AI-powered Recovery Optimizer), **Gate Management**, and **Station Management**. I also founded and grew the **OpsSuite Design System**. I led the user research for The Baker, working directly with three veteran Network Operations Supervisors.

Research for the broader suite was led by Jenny Bean and Matt Heard, whose team embedded in the NOC and four stations nationwide, conducting over a hundred interviews.

As the project grew, I onboarded and led additional designers on Flight Audit and Turn Management, establishing peer-review sessions that improved quality across every screen.

> **Context callout:** Our core team was four people in a repurposed printer closet with an active printer. In those conditions, we built some of the most complex operational software of my career.

---

## Decision 1: Teaching an AI to earn trust

The Baker was designed to replace a manual recovery process that consumed four to six hours during a mega-station weather shutdown. The algorithm considered more than 20 operational factors. The interface challenge was not the algorithm. It was the people.

The SODs were skeptical of an AI making decisions they had spent their careers mastering. I designed a solution that gave them a way out: three AI-generated recovery plans, each scored and ranked, plus the ability to build their own solution if they disagreed with all three. The critical detail was that the AI learned from every manual override. Trust came from the system proving, over testing cycles, that it understood what good looked like because the SODs had taught it.

[Image: The Baker's "View Solution" screen showing the three ranked options with the manual alternative]

> **User quote:** "The benefit to our overall on-time performance has been staggering... Southwest has consistently finished first in OTP when bad weather strikes a major airport."
> – Charles Cunningham and Ryan Files, Dispatch Superintendents, Southwest Airlines (LUVLines, May 2016)

---

## Decision 2: Designing for a room with no sunlight

During my first research interviews in the NOC, I recognized something the existing software had ignored. The NOC operates in perpetual darkness with monitors as the primary light source, while station agents and ramp crews work on bright tarmacs and in sunlit gate areas.

I pitched a dark mode to the solution architect after those interviews. They built it in a single evening because the design system I was building supported theming from the start.

[Image pair: Same screen shown in dark mode (NOC) and light mode (station), demonstrating the environmental adaptation]

---

## Decision 3: Starting the design system wrong and recovering

I began with component sizing that was too generous, informed by the simpler Gate Management screens. When we moved into the denser screens for The Baker and Station Management, the sizing did not hold. The information density demanded tighter spacing and smaller typographic scales.

Because the four of us sat together and communicated constantly, the front-end lead and I evolved the system with minimal rework. The design system grew from the work rather than being imposed on it.

[Image: OpsSuite Design System component library, or a before/after comparison of the sizing evolution]

> **Reflection callout:** If I were starting today, I would begin the design system from the most complex screen and work outward. Starting with the easier case and scaling down worked because of the team dynamic, but that approach does not transfer automatically to larger teams.

---

## Outcomes

> **Metric: Recovery time** – Mega-station shutdowns reduced from 4–6 hours (manual) to minutes (Baker).

> **Metric: On-time performance** – 1 to 1.8 percentage point year-over-year OTP improvement; first among major U.S. carriers during severe weather.

> **Metric: Adoption** – The Baker was used successfully hundreds of times in its first winter. Release 2 was underway by May 2016.

The unified dashboards across the suite eliminated reliance on paper and whiteboards. Custom views for each role reduced cognitive overload and allowed less-experienced staff to contribute more quickly.

> **User quote:** "It feels like for the first time as a company we are ahead of the curve."
> – [Name TBD], [Role TBD], Southwest Airlines

> **User quote:** "The ability to track turn progress and have flight details, delayed customers, and connecting crews in an integrated view eliminates the need to toggle; this saves time and allows me to focus on operational challenges."
> – [Name TBD], [Role TBD], Southwest Airlines

[Image grid: Final screens across the suite – Gate Management, Station Management, Turn Management, Flight Audit, Shipment Management – showing the design system consistency and dark/light mode]

---

## What I Carried Forward

This project taught me more about running UX within Agile than any other engagement in my career. Part of what made it work was the dual-track agile process that the scrum masters on the project created and maintained. Discovery and delivery ran in parallel without collision, and the scrum masters kept the wheels turning so the rest of us could stay focused on the work itself. I have tried to recreate that rhythm on teams since, with partial success. Not every organization has dedicated scrum masters, and without them the dual-track structure requires more overhead from the design and engineering leads to sustain.

The peer-review structure I built for the designers who joined later became a model I carried into future leadership roles. The conditions that made this project exceptional were partly circumstantial, and I have spent the years since trying to understand which parts can be engineered deliberately.

Ask me about it sometime. It was scrum magic.

---

## Writing and visual notes (remove before publishing)

**Total text sections:** 9 (hero + 7 body sections + reflection). Equivalent to roughly 10–12 slides.

**Visual rhythm:** Every text section is followed by or contains an image placement. No section runs longer than two short paragraphs before a visual break, callout quote, or metric highlight.

**Callout quotes to source:** The user quotes come from the LUVLines article and the projekt202 presentation. Verify with Pia which are approved for external use.

**Metric callouts:** Three primary metrics are formatted as standalone callouts in the Outcomes section. The hero section repeats the OTP metric as the hook.

**Images needed from Pia:**
- NOC environment (LUVLines has a strong one)
- Legacy system screenshot (presentation deck page 1)
- Paper/whiteboard workflow photos from research
- The Baker "View Solution" screen (dark mode)
- Same screen in light mode for the dark/light comparison
- Gate Management final screen
- Station Management final screen
- Design system component library
- Turn Management and Flight Audit screens (from the designers she led)
- Before/after sizing comparison if available
