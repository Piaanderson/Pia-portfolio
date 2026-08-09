# Project Forge (Working Title)

**Status: In Progress – Currently in Pilot**

---

## Hero Section

**Headline:** PwC's engagement tools could tell teams what happened yesterday but nothing about tomorrow. I designed an AI experience layer that unifies budgeting, staffing, and monitoring into a single predictive platform.

**Subhead:** I led the UX vision and strategy for Project Forge, an AI-first platform that unifies budget creation, staffing, and engagement monitoring across three legacy systems. I delivered front-end code directly into the codebase alongside the engineering pod.

> **Status callout:** Project Forge is currently in pilot. This case study covers the strategic and design decisions made to date. Outcomes will be updated as pilot data becomes available.

[Hero image: Project Forge interface showing the budget builder or comparison view]

---



## The Problem

PwC's internal budget creation and staffing tools carry more than a decade of business logic across three separate systems. The tools work, but the experience of using them has driven teams to build their own workarounds.

To create a budget, every resource must be entered manually through a series of dropdowns that don't persist between entries. Teams export to Excel, make their edits there, then import back rather than fight the tool directly.

Comparing budget options is where the downstream problems start. To give a client two or three alternatives, teams must create duplicate projects as drafts. There is no side-by-side view, no way to adjust one draft while referencing another. Those duplicate projects often cause duplicate deployment requests with slight variations. The Deployment team has to make calls and send emails to sort out which version to staff.

The monitoring side is just as limited. Dashboards report on yesterday and today with no predictive capability. If a resource is overbilling, the system can take 30 days or more to surface a red flag requiring manual weekly checks. Teams download spreadsheets and run reports outside the system to see what is coming rather than what has already happened. 

[Image: Diagram showing the three legacy systems and the pain points across budget creation, staffing, and monitoring]

---



## My Role

I was brought in for my systems thinking and ability to envision how interwoven systems should connect. The project started as a small proof of concept:[Callout: could an AI-first approach replace what three legacy systems were doing separately?]

I asked to lead the design personally. For the past year, I have been upskilling a team of 80 designers to evolve their delivery from Figma artifacts to front-end code delivered directly through GitHub. To lead that transformation credibly, I needed to have deeper experience myself. Project Forge became my proving ground.

Within ten days, the proof of concept escalated from a pet project to a Priority One initiative for Advisory. It was announced on an All Hands call before our second week demo. The stakeholders became senior partners. The scope expanded to cross-line-of-service collaboration. Sarah Halverson, the engineering pod lead, kept the team running while I stepped into the lead strategist and stakeholder alignment role on top of the design and front-end development work. I went from leading a small proof of concept to serving as lead designer, lead strategist, front-end developer, and stakeholder alignment lead, all while continuing to run the 65-person design capability.

I brought in Mitali Kamat, Sr UX Researcher, from my team to support generative research and stakeholder interviews once the project's scope outgrew what I could cover alone. Before and during the pilot, Mitali and I created the proof of concept that earned buy-in, then I evolved much of the UI to span the happy path across four main experience flows: pursuit, budget, staffing, and monitoring. Now that the pilot is underway and the engineering pod is working to catch up to the full UI and agent functionality, I am transitioning the project to a Design Manager who will steer the direction through Beta and launch.

> **Context callout:** Directors go deep when the work calls for their specific specialty. Mine is seeing a complex ecosystem, understanding how its pieces connect, and simplifying it into something centralized and usable. That is what this project needed, and the hands-on investment is what made the strategic vision credible to the people building it.

---



## Decision 1: An experience layer, not a replacement

The three legacy systems carry more than a decade of business rules, data structures, and organizational ownership. Each system has its own stakeholders, its own data teams, and its own political gravity. Proposing to replace them would have been dangerous on two fronts: technically, because hastily rewriting that much embedded logic invites serious errors; and politically, because the teams who own those systems would have had every reason to block cooperation.

I pushed for a different approach. Project Forge would be an AI and experience layer that sits above the existing systems, pulling in their data and orchestrating it through a unified interface. The underlying systems remain intact. If a user needs to do something advanced that Forge does not yet support, they can drop into the legacy tool and the data stays in sync.

The precedent already existed inside PwC. An internal tool called Astro takes a similar approach with time and expense, hoteling, and metrics reporting. Astro adds AI and a better experience on top of older systems without replacing them. That metaphor resonated immediately with every stakeholder group I presented it to. It turned a threatening conversation ("we are replacing your system") into a collaborative one ("we are making your system more useful to more people").

I pressed our senior stakeholders to stop framing the project as a replacement, even internally. The messaging mattered. If data teams and product owners of the legacy systems heard "replacement," cooperation would slow or stop entirely. Even if Forge does eventually replace those systems, that outcome is years away, and aiming for it now would have stalled the work that could ship in months.

> **Stakeholder quote:** [Quote TBD – Look for a stakeholder or partner reaction to the experience-layer strategy, particularly anything about how it changed their willingness to cooperate or how it reframed what the project could accomplish. The Astro comparison landing well would also fit here.]

[Image: Architecture concept showing the experience layer sitting above the three legacy systems]

---



## Decision 2: Two equally powerful paths to the same result

The lead stakeholder on the project prefers AI-driven voice and chat interaction. He wanted a chat-first experience, with the ability to reach Forge through Claude, ChatGPT, or other AI assistants via MCP. That vision is real and worth building toward.

The users told a different story. In our first round of research, two out of five participants immediately closed the chat panel. The other three did not interact with it unless prompted. These are people who build budgets and staff engagements every week. They wanted faster, smarter versions of the screens they already understood, not a new interaction paradigm on top of a new tool.

My solution was to build both paths with equal depth and keep them in sync. AI helpers are built into the screens and flows directly: smarter defaults, suggestions based on past engagements, and one-click actions that eliminate the repetitive dropdown work from the legacy tools. The chat interface can do everything the screens can, and when a user issues a command through chat, the updates appear in the main interface in real time, as if the user had entered them manually. Nothing happens behind a curtain.

That transparency is the trust mechanism. Users who are skeptical of AI chat can ignore it entirely and still benefit from the AI-assisted screens. Users who prefer chat can watch every change reflected in the interface they already understand. Over time, as users see the AI producing accurate results in the screen-based helpers, the chat path becomes less intimidating. Neither audience is a second-class experience.

> **User quote:** [Quote TBD – Look for a user reaction from research or demos about the AI helpers in the screens, the transparency of the chat interface, or the moment they realized both paths produced the same result. A skeptic-turned-believer quote would be ideal here.]

[Image: Side-by-side showing the screen-based budget builder with AI helpers and the chat interface producing the same result]

---



## Decision 3: Making budget comparison possible for the first time

The legacy workflow for comparing budgets required teams to create full duplicate projects, toggle between them manually, and sometimes print or screenshot to compare side by side. Those duplicate projects would all show up in Deployment requesting the same resources with slight variations, and the Deployment team would have to call to sort out which one was real.

In Forge, multiple draft budgets live within a single project. The comparison experience is the design problem worth unpacking here. It needed to work in two contexts: the linear format of the chat interface and a visual side-by-side view on the main screen. The challenge was information density. A single budget contains enough detail that simplifying it for comparison risked hiding the information teams need to make a decision. Showing everything made comparison impossible at any useful scale.

It took three rounds of simplification to get the budget screen itself lean enough to support comparison. From there, I focused on the minimum information required to compare meaningfully and the visual hierarchy that would allow teams to scan two, three, or five options without losing the ability to dive into any single one. The flow I designed lets users compare at the summary level, select any draft to inspect in detail, make changes to any draft and see the comparison update immediately, then choose one to move forward. Only the chosen budget proceeds to Deployment and approvals. The version confusion that plagued the legacy workflow is eliminated by design rather than by policy.

> **User quote:** [Quote TBD – Look for a user or stakeholder reaction to seeing the budget comparison for the first time, particularly anything about the pain of the old process vs. the new experience, or a reaction to the "only one moves forward" workflow.]

[Image: The budget comparison view showing multiple drafts side by side with visual hierarchy for scanning]

---



## How I delivered: designing at the prompt

This was my first experience delivering front-end code directly into a shared codebase with an engineering pod. I used a combination of Claude Design for ideation, then Claude Code and Cursor to build. I opened pull requests, responded to comments from the engineering reviewers, and merged my own code.

The learning curve was steep and specific. I learned about meaningful commit organization, appropriate PR sizing, linter compliance, and accessibility testing that went well beyond color contrast into focus indicators and ARIA attributes. The dashboards required hand-coding because the AI tools were not yet capable of producing the combined data visualizations I needed. That constraint taught me where the tools have real limits and where a designer working at the prompt needs to be prepared to write code directly.

This experience was not incidental to the project. It was the reason I asked to lead the design. For the past year, I have been pushing 80 designers toward a delivery model that puts front-end code into GitHub rather than handing off Figma files. I needed to understand the friction, the workflow, and the collaboration patterns from the inside. Every lesson from Project Forge feeds directly back into how I coach the team on AI-first delivery.

> **Reflection callout:** I have been designing at the prompt and building my own solutions for over a year, but working inside a shared repository with engineers is a fundamentally different skill. The collaboration patterns, the review expectations, and the discipline of small, well-organized commits changed how I think about what "delivering design" means.

[Image: A pull request or code review screenshot showing the designer-engineer collaboration workflow, anonymized if needed]

---



## What Comes Next

Project Forge is in pilot now. The engineering pod is building out the full UI and agent functionality that I designed, and I have transitioned the day-to-day design leadership to a Design Manager who will take what we have learned and steer the direction through Beta and launch. I continue to set the design vision and provide director-level oversight.

The pilot will generate the usage data and user feedback that this case study currently lacks. I will update this page with outcomes as they become available.

---



## Writing and visual notes (remove before publishing)

**Case study type:** Hybrid (leadership context + IC design). Act 1 (Leadership) is Decisions 1 and 2: the experience-layer strategy and the dual-path AI interaction model. Decision 3 highlights one IC design problem (budget comparison) as the best story to tell in depth; the dashboards, chat experience, and other screens were equally demanding hands-on work. The AI delivery section bridges both, as it is simultaneously an IC skill (writing code) and a leadership proof point (credibility to lead the 80-person transformation).

**In-progress framing:** This case study deliberately avoids an Outcomes section with metrics. The status callout in the hero and the "What Comes Next" section frame it as live work. This is not a limitation; it signals to hiring managers that Pia is actively working at the intersection of AI, design, and code delivery right now.

**Portfolio positioning:** This is the fourth case study, joining Southwest Airlines Ops Suite (IC), PwC Digital Leadership, and PwC Tax Tech (Leadership). It is the most current work and the only one showing AI-first delivery methods. Consider placing it first or second in the portfolio navigation to lead with recency.

**Password protection:** The entire case study page will be password-protected since Forge is an internal tool. Screenshots can be shown at full fidelity behind the password gate.

**Naming:** "Project Forge" is a working title pending brand review. Update the headline and references once the final name is confirmed.

**Connection to the 80-person design team transformation:** The case study references Pia's role leading the AI-first upskilling initiative. If the PwC Digital Leadership case study is also in the portfolio, consider a brief cross-reference or let them stand independently and trust that a reader reviewing both will connect the dots.

**Images needed from Pia:**

- Budget builder interface (screen-based with AI helpers visible)
- Chat interface showing real-time updates to the budget
- Budget comparison view (multiple drafts side by side)
- Architecture or system diagram showing the experience layer above legacy systems
- Pull request or code review screenshot (anonymized if needed)
- Dashboard screens (hand-coded data visualizations)
- Optional: before/after showing legacy tool vs. Forge equivalent

**Quote placeholders:** Three quote placeholders are embedded in the draft, each with a description of what to look for. To find matching quotes in the Forge Claude project, search for:

- Decision 1: Stakeholder or partner reactions to the experience-layer framing, the Astro metaphor, or the shift from "replacement" to "layer" messaging
- Decision 2: User reactions from research sessions or demos about the AI helpers, the chat transparency, or the dual-path approach
- Decision 3: Reactions to the budget comparison view, the contrast with the old process, or the single-budget-moves-forward workflow

**Resolved questions:**

1. Sarah Halverson is named as pod lead.
2. Astro is named directly. Internal tool, password-protected page, no business risk.
3. Mitali Kamat is credited as the researcher.
4. Quote placeholders are in place with specific search criteria. Pia will source from the Forge Claude project when on Mac.

