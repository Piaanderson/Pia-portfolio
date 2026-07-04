# Southwest Airlines Ops Suite

## When a storm hit a major airport, Southwest went from needing 4 to 6 hours to recover to needing minutes.

I designed the core applications in Southwest Airlines' operational software suite and built the design system that unified them. The work helped transform crisis response for an airline running 3,900+ daily departures across 97 cities, and it earned Southwest the top on-time performance ranking among major U.S. carriers during severe weather events.

I joined this project mid-sprint, replacing a designer who had plagiarized the proposed design system. The engineering team was already building. I had less than a week.

---

## An airline that had outgrown its own operations

Southwest's Network Operations Control center is a windowless, dark room that runs 24 hours a day. It is the nerve center of the airline. When I arrived, the Supervisors on Duty (SODs) were managing one of the most complex flight networks in the country using paper checklists, whiteboards, and decades of tribal knowledge.

The human cost of that complexity was significant. New SODs took two to three years to become fully effective. Veterans could not take real vacations because their expertise was irreplaceable during disruptions. When a storm forced a mega-station shutdown, the manual recovery process consumed four to six hours of tedious fleet-balancing work while every other department waited for a plan.

The airline had grown from a small regional carrier into an operation with five different aircraft seating configurations and an expanding international presence. The manual processes that worked at a smaller scale were now a bottleneck. Southwest needed its operations teams to trust automated systems, and those systems did not yet exist.

Research for the broader Ops Suite was led by Jenny Bean and Matt Heard. Their team spent days embedded in the NOC, observed at four stations nationwide, shadowed ramp agents and transfer drivers, and conducted over a hundred interviews. The findings confirmed what the environment made obvious: cognitive overload from poorly structured information, communication breakdowns between the NOC and field stations, siloed tools that prevented coordination, and a deep reliance on gut instinct because the existing software could not be trusted.

---

## What I owned and what the team owned

I was the senior UX designer on The Baker (the AI-powered Recovery Optimizer), Gate Management, and Station Management. My scope on each covered experience design and visual design as well as the underlying information architecture. I also founded and grew the OpsSuite Design System, which became the shared foundation across every application in the suite. I led the user research specifically for The Baker, working directly with three veteran Network Operations Supervisors to understand their decision-making process during disruptions.

As the project grew, I onboarded and led additional designers who were responsible for Flight Audit and Turn Management. I created the onboarding materials, brought them up to speed on the design system, personally reviewed their work, and established regular peer-review sessions where designers critiqued each other's output. Those sessions improved the quality of every designer's work and made the team resilient; anyone could step in on anyone else's screens in the event of illness or time off.

Our core team was four people: myself, the front-end lead, the back-end developer, and the researcher. We sat together in a repurposed printer closet with an active printer that other employees visited regularly throughout the day. In those conditions, we built some of the most complex software of my career.

---

## Earning the trust of skeptical experts who had been doing this for decades

### Teaching an AI to think like a 20-year veteran

The Baker was the hero product of the suite. It was an AI-powered recovery optimizer designed to replace the manual, multi-hour process of recovering a mega-station during a weather event. The algorithm, built by Southwest's own optimization team, considered more than 20 factors: delayed flights, passenger accommodations, station curfews, aircraft maintenance schedules, crew misconnects, and unscheduled crew overnights.

The interface challenge was not the algorithm. It was the people.

The SODs had spent their careers building expertise that was now being encoded into a machine. They were skeptical, and they had reason to be. Their judgment had kept the airline running through countless disruptions. Asking them to hand that responsibility to an AI was asking them to trust something that had not yet earned it.

I pitched a design that gave them a way out. The Baker would present three AI-generated recovery plans, each scored and ranked. But if the SOD disagreed with all three, they could build their own solution directly within the tool. The critical detail was that the AI would learn from those manual decisions. Every time a SOD overrode the system and built a better plan, the algorithm got smarter.

This was not a concession to resistance. It was a deliberate trust-building mechanism. Over testing cycles, the SODs watched the AI improve based on their own input. They could see their expertise reflected in the machine's recommendations. Trust did not come from a polished demo or a leadership mandate. It came from the system proving, over time, that it understood what good looked like because they had taught it.

### Designing for a room with no sunlight

During my first round of research interviews in the NOC, I spent enough time in the space to understand something the existing software had ignored entirely. The NOC operates in perpetual darkness. Monitors are the primary light source. The station agents and ramp crews, by contrast, work on bright tarmacs and in sunlit gate areas.

I pitched a dark mode to the solution architect after those interviews. The response was immediate; they built it in a single evening. That speed was possible because the design system I was building supported theming from the start. The dark mode was not a cosmetic preference. It was an accessibility and ergonomic decision grounded in the reality of where these users spent their shifts.

### Starting too large and learning in real time

I began the design system with component sizing that was too generous and in light mode only. The initial screens for Gate Management informed the first set of components, and they looked good in isolation. When we moved into the denser, more complex screens for The Baker and Station Management, it became clear that the sizing did not hold. The information density required by these applications demanded tighter spacing and smaller typographic scales.

Because the four of us sat together and communicated constantly, the front-end lead and I were able to evolve the system smoothly. We adjusted the sizing, revisited the earlier screens with the new scale, and absorbed the rework without significant schedule impact. The design system grew from the work rather than being imposed on it, and that approach proved more durable than a speculative system built in advance would have been.

This is one of the things I would do differently if I could start over. I would begin with the most complex, information-dense screen first and let the simpler screens inherit from that baseline. Starting with the easier case and scaling down later worked because of the team dynamic, but it would not have worked with a larger team or a less collaborative engineering partner.

---

## Translating paper and whiteboards into pixel-level clarity

The visual design of the Ops Suite was not a matter of applying a style to wireframes. The existing workflows lived on whiteboards and paper checklists, and much of it existed only in the heads of experienced operators. I studied those artifacts closely and carried their logic into the digital interfaces.

The guiding design principle across every screen was "clarity at a glance, depth on demand." These users operated under extreme cognitive load in time-critical situations. Every element on every screen had to justify its presence. I used progressive disclosure throughout: status-level information visible at the top layer, detailed operational data available one interaction deeper. Color-coding and typographic hierarchy carried the visual weight, while spatial grouping followed the mental models the research team had documented.

The design system I built supported this discipline at scale. It included design libraries in Sketch that governed every screen and workflow in the suite, along with coded component libraries that the front-end lead maintained in lockstep. Each component was built to production grade and deployed directly from the system. The close collaboration between design and engineering meant that what I designed was what shipped, with no translation loss.

[Visual placeholders: NOC research photos showing the physical environment; paper checklists and whiteboards that informed the digital design; wireframe progressions for The Baker showing the evolution from early concepts to the manual-override interface; final dark-mode screens for Gate Management, The Baker, and Station Management; the OpsSuite Design System component library; before-and-after comparisons showing the sizing evolution]

---

## What changed for Southwest

**The Baker** was used successfully hundreds of times in its first winter after launching in November 2015. Mega-station shutdowns that previously required four to six hours of manual coordination were completed in minutes. Every department received a coordinated recovery plan simultaneously; Scheduling knew where to move crews, Dispatch knew where to place aircraft, Ground Operations had the full picture, and Customer Support could begin rebooking. Most importantly, passengers often knew the plan before leaving home.

The on-time performance improvement was measurable and significant. Southwest achieved a 1 to 1.8 percentage point year-over-year OTP improvement during major weather events and consistently finished first among major U.S. carriers in OTP when bad weather struck a major airport. By May 2016, the team was already operating on Baker Release 2 with plans to integrate with additional systems across the airline.

**Across the Ops Suite,** the unified dashboards eliminated reliance on paper and whiteboards. Custom views tailored to each role reduced cognitive overload and allowed less-experienced staff to contribute more quickly. The design system I built provided the consistency and velocity that made it possible to iterate rapidly across five applications without sacrificing quality.

The users said it best. One SOD described the suite as feeling like the first time the company was ahead of the curve. Another compared it to stepping out of an old car and into a new model year. A station agent noted that the integrated views eliminated the need to toggle between systems, saving time and freeing attention for the actual operational challenges.

---

## What I carried forward

This project taught me more about running UX within an Agile process than any other engagement in my career. The combination of a tiny, co-located team, a deeply embedded research practice, and a design system that grew from the work rather than preceding it created a rhythm I have tried to recreate on every team since. It was, as I have described it to colleagues, scrum magic that I have not seen replicated elsewhere.

The peer-review structure I built for the designers who joined later became a model I carried into future leadership roles. Making every designer familiar with every other designer's work was originally a practical decision for coverage, but it had a compounding effect on quality that I did not anticipate.

If I were starting this project today, I would begin the design system from the most complex screen and work outward. I would also push harder early on for a shared language between design and engineering around component naming, because the tight collaboration we had in the printer closet does not scale automatically to larger teams. The conditions that made this project exceptional were partly circumstantial, and I have spent the years since trying to understand which parts can be engineered deliberately.
