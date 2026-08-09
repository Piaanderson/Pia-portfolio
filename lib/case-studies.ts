export type MetricCallout = {
  text: string;
  source?: string;
};

export type ImagePlacement = {
  src?: string;
  alt: string;
  caption?: string;
  placeholder?: string;
  flexHeight?: boolean;
  afterParagraph?: number;
};

export type QuoteBlock = {
  quote: string;
  attribution?: string;
  role?: string;
  placeholder?: boolean;
};

export type Decision = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  image?: ImagePlacement;
  images?: ImagePlacement[];
  quote?: QuoteBlock;
  reflectionCallout?: string;
};

export type OutcomeMetric = {
  label: string;
  value: string;
  highlight?: string;
  source?: string;
};

export type CaseStudyData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  type: "hands-on" | "leadership" | "hybrid";

  hero: {
    headline: string;
    subhead: string;
    metricCallout?: MetricCallout;
    image?: ImagePlacement;
    status?: string;
  };

  problem: {
    heading?: string;
    sideLabel?: string;
    paragraphs: string[];
    image?: ImagePlacement;
    contextCallout?: string;
  };

  role: {
    paragraphs: string[];
    contextCallout?: string;
  };

  decisions: Decision[];

  outcomes: {
    metrics: OutcomeMetric[];
    prose?: string[];
    quote?: QuoteBlock | QuoteBlock[];
  };

  reflection: {
    heading?: string;
    paragraphs: string[];
  };

  nextSlug?: string;
};

export const caseStudies: CaseStudyData[] = [
  /* ================================================================== */
  /*  1. PROJECT FORGE                                                    */
  /* ================================================================== */
  {
    slug: "project-forge",
    title: "Project Forge",
    subtitle: "AI-First Internal Platform · In Progress",
    description:
      "Leading UX vision and front-end delivery for an AI experience layer that unifies budget creation, staffing, and engagement monitoring across three legacy systems.",
    image: "/case-studies/project-forge/portfolio-overview-laptop.png",
    tags: ["UX Strategy", "AI/ML", "Front-End Dev", "Systems Thinking"],
    type: "hybrid",

    hero: {
      headline:
        "PwC's budget and staffing tools were so painful that teams exported to Excel, edited there, and imported back. I designed the AI experience layer that makes that workaround unnecessary.",
      subhead:
        "I led the UX vision and strategy for Project Forge, an AI-first platform that unifies budget creation, staffing, and engagement monitoring across three legacy systems. I also delivered front-end code directly into the codebase alongside the engineering pod, opening PRs, responding to code reviews, and merging my own work.",
      metricCallout: {
        text: "Project Forge enters pilot in July 2026. This case study covers the strategic and design decisions made to date. Outcomes will be updated as pilot data becomes available.",
      },
      image: {
        src: "/case-studies/project-forge/portfolio-overview-laptop.png",
        alt: "Project Forge portfolio overview dashboard on a laptop, showing engagement health metrics, AI chat assistant, and attention queue",
      },
      status: "In Progress – Entering Pilot July 2026",
    },

    problem: {
      paragraphs: [
        "PwC's internal budget creation and staffing tools carry more than a decade of business logic across three separate systems. The tools work, but the experience of using them has driven teams to build their own workarounds.",
        "To create a budget, every resource must be entered manually through a series of dropdowns that do not remember the previous entry. When teams grow beyond a dozen people, the interface becomes untenable. Teams export to Excel, make their edits there, then import back rather than fight the tool directly.",
        "Comparing budget options is where the downstream problems start. To give a client two or three alternatives, teams must create full duplicate projects as drafts because there is no way to hold multiple budgets within a single project. There is no side-by-side view, no way to adjust one draft while referencing another. Those duplicate projects all flow into Deployment requesting the same resources with slight variations, and the Deployment team has to make calls and send emails to sort out which version to staff.",
        "The monitoring side is just as limited. Dashboards report on yesterday and today with no predictive capability. If a resource is overbilling, the system can take 30 days or more to surface a red flag without manual weekly checks. Teams download spreadsheets and run reports outside the system to see what is coming rather than what has already happened. Compounding all of this, users have little confidence in the data itself. There is no transparency into where numbers originate, when they were last refreshed, or whether conflicting data sources exist behind the scenes.",
      ],
    },

    role: {
      paragraphs: [
        "I was brought in for my systems thinking and ability to envision how interwoven systems should connect. The project started as a small proof of concept: could an AI-first approach replace what three legacy systems were doing separately?",
        "I asked to lead the design personally. For the past year, I have been upskilling a team of 80 designers to evolve their delivery from Figma artifacts to front-end code delivered directly through GitHub. To lead that transformation credibly, I needed to have done it myself, not just understand the mechanics from hearing about them in standups. Project Forge became my proving ground.",
        "Within ten days, the proof of concept escalated from a pet project to a Priority One initiative for Advisory. It was announced on an All Hands call before our second week demo. The stakeholders became senior partners. The scope expanded to cross-line-of-service collaboration. Sarah Halverson, the engineering pod lead, kept the team running while I stepped into the lead strategist and stakeholder alignment role on top of the design and front-end development work. I went from leading a small proof of concept to serving as lead designer, lead strategist, front-end developer, and stakeholder alignment lead, all while continuing to run the 80-person design capability.",
        "I brought in Mitali Kamat from my team to support generative research and stakeholder interviews once the project's scope outgrew what I could cover alone. I am now preparing the handoff to a senior designer who will carry the product through the Agile build alongside a newly added front-end developer. The designer will continue to design at the prompt and deliver in code.",
      ],
      contextCallout:
        "Directors go deep when the work calls for their specific specialty. Mine is seeing a complex ecosystem, understanding how its pieces connect, and simplifying it into something centralized and usable. That is what this project needed, and the hands-on investment is what made the strategic vision credible to the people building it.",
    },

    decisions: [
      {
        title: "An experience layer, not a replacement",
        paragraphs: [
          "The three legacy systems carry more than a decade of business rules, data structures, and organizational ownership. Each system has its own stakeholders, its own data teams, and its own political gravity. Proposing to replace them would have been dangerous on two fronts: technically, because hastily rewriting that much embedded logic invites serious errors; and politically, because the teams who own those systems would have had every reason to block cooperation.",
          "I pushed for a different approach. Project Forge would be an AI and experience layer that sits above the existing systems, pulling in their data and orchestrating it through a unified interface. The underlying systems remain intact. If a user needs to do something advanced that Forge does not yet support, they can drop into the legacy tool and the data stays in sync.",
          `The precedent already existed inside PwC. An internal tool called Astro takes a similar approach with time and expense, hoteling, and metrics reporting. Astro adds AI and a better experience on top of older systems without replacing them. That metaphor resonated immediately with every stakeholder group I presented it to. It turned a threatening conversation (\u201cwe are replacing your system\u201d) into a collaborative one (\u201cwe are making your system more useful to more people\u201d).`,
          `I pressed our senior stakeholders to stop framing the project as a replacement, even internally. The messaging mattered. If data teams and product owners of the legacy systems heard \u201creplacement,\u201d cooperation would slow or stop entirely. Even if Forge does eventually replace those systems, that outcome is years away, and aiming for it now would have stalled the work that could ship in months.`,
        ],
        image: {
          src: "/case-studies/project-forge/screens/briefing-decision-frame-evidence-panels.png",
          alt: "Forge briefing screen with decision frame and four evidence panels supporting AI-assisted recommendations",
          caption:
            "The experience layer in action — AI-synthesized briefing with a decision frame and evidence panels sitting above legacy system data.",
        },
      },
      {
        title: "Two equally powerful paths to the same result",
        paragraphs: [
          "The lead stakeholder on the project prefers AI-driven voice and chat interaction. He wanted a chat-first experience, with the ability to reach Forge through Claude, ChatGPT, or other AI assistants via MCP. That vision is real and worth building toward.",
          "The users told a different story. In our first round of research, two out of five participants immediately closed the chat panel. The other three did not interact with it unless prompted. These are people who build budgets and staff engagements every week. They wanted faster, smarter versions of the screens they already understood, not a new interaction paradigm on top of a new tool.",
          "My solution was to build both paths with equal depth and keep them in sync. AI helpers are built into the screens and flows directly: smarter defaults, suggestions based on past engagements, and one-click actions that eliminate the repetitive dropdown work from the legacy tools. The chat interface can do everything the screens can, and when a user issues a command through chat, the updates appear in the main interface in real time, as if the user had entered them manually. Nothing happens behind a curtain.",
          "That transparency is the trust mechanism. Users who are skeptical of AI chat can ignore it entirely and still benefit from the AI-assisted screens. Users who prefer chat can watch every change reflected in the interface they already understand. Over time, as users see the AI producing accurate results in the screen-based helpers, the chat path becomes less intimidating. Neither audience is a second-class experience.",
        ],
        image: {
          src: "/case-studies/project-forge/screens/portfolio-ranked-signals-tabbed.png",
          alt: "Forge pursuits view with Flex Felix chat sidebar and ranked pursuit signals in the main interface",
          caption:
            "Chat and screen in sync — Flex Felix in the sidebar while the main interface updates with pursuit signals and team activity.",
        },
      },
      {
        title: "Making budget comparison possible for the first time",
        paragraphs: [
          "The legacy workflow for comparing budgets required teams to create full duplicate projects, toggle between them manually, and sometimes print or screenshot to compare side by side. Those duplicate projects would all show up in Deployment requesting the same resources with slight variations, and the Deployment team would have to call to sort out which one was real.",
          "In Forge, multiple draft budgets live within a single project. The comparison experience is the design problem worth unpacking here. It needed to work in two contexts: the linear format of the chat interface and a visual side-by-side view on the main screen. The challenge was information density. A single budget contains enough detail that simplifying it for comparison risked hiding the information teams need to make a decision. Showing everything made comparison impossible at any useful scale.",
          "It took three rounds of simplification to get the budget screen itself lean enough to support comparison. From there, I focused on the minimum information required to compare meaningfully and the visual hierarchy that would allow teams to scan two, three, or five options without losing the ability to dive into any single one. The flow I designed lets users compare at the summary level, select any draft to inspect in detail, make changes to any draft and see the comparison update immediately, then choose one to move forward. Only the chosen budget proceeds to Deployment and approvals. The version confusion that plagued the legacy workflow is eliminated by design rather than by policy.",
        ],
        image: {
          src: "/case-studies/project-forge/budget-comparison-laptop.png",
          alt: "Forge budget comparison on a laptop showing traditional versus AI-augmented delivery options side by side",
          caption:
            "Side-by-side budget comparison — multiple draft options within a single project, with Flex Felix summarizing trade-offs.",
        },
        images: [
          {
            src: "/case-studies/project-forge/screens/wizard-step-2-budget-options.png",
            alt: "Forge wizard step two showing a budget plan with three staffing options in a comparison grid",
            caption:
              "The comparison wizard — three budget options and staffing details in one flow, without duplicate projects.",
          },
        ],
      },
      {
        title: "Designing at the prompt",
        subtitle: "How I delivered",
        paragraphs: [
          "This was my first experience delivering front-end code directly into a shared codebase with an engineering pod. I used a combination of Claude Design for ideation, then Claude Code and Cursor to build. I opened pull requests, responded to comments from the engineering reviewers, and merged my own code.",
          "The learning curve was steep and specific. I learned about meaningful commit organization, appropriate PR sizing, linter compliance, and accessibility testing that went well beyond color contrast into focus indicators and ARIA attributes. The dashboards required hand-coding because the AI tools were not yet capable of producing the combined data visualizations I needed. That constraint taught me where the tools have real limits and where a designer working at the prompt needs to be prepared to write code directly.",
          "This experience was not incidental to the project. It was the reason I asked to lead the design. For the past year, I have been pushing 80 designers toward a delivery model that puts front-end code into GitHub rather than handing off Figma files. I needed to understand the friction, the workflow, and the collaboration patterns from the inside. Every lesson from Project Forge feeds directly back into how I coach the team on AI-first delivery.",
        ],
        image: {
          src: "/case-studies/project-forge/screens/wizard-step-1-engagement-details.png",
          alt: "Forge wizard step one showing engagement details with briefing context carried forward into budget creation",
          caption:
            "Engagement wizard — one of the flows I designed at the prompt and shipped as front-end code in the shared repository.",
        },
        reflectionCallout:
          "I have been designing at the prompt and building my own solutions for over a year, but working inside a shared repository with engineers is a fundamentally different skill. The collaboration patterns, the review expectations, and the discipline of small, well-organized commits changed how I think about what \"delivering design\" means.",
      },
    ],

    outcomes: {
      metrics: [],
    },

    reflection: {
      heading: "What Comes Next",
      paragraphs: [
        "Project Forge enters pilot in July 2026 with a partner team. I am handing the day-to-day design to a senior designer who will work with the newly added front-end developer and the engineering pod. I will continue to set the design vision and direction, lead stakeholder alignment, and provide director-level oversight.",
        "The pilot will generate the usage data and user feedback that this case study currently lacks. I will update this page with outcomes as they become available.",
      ],
    },

    nextSlug: "agent-os",
  },

  /* ================================================================== */
  /*  2. AGENT OS                                                         */
  /* ================================================================== */
  {
    slug: "agent-os",
    title: "PwC Agent OS",
    subtitle: "Enterprise AI Platform",
    description:
      "Three teams were building the same AI agent tool in isolation. I designed the unified solution that became PwC's firm-wide platform for enterprise agentic workflows.",
    image: "/case-studies/agent-os/hero-workflow-environment-review.png",
    tags: ["UX Strategy", "AI/ML", "Prototyping", "Stakeholder Alignment"],
    type: "hands-on",

    hero: {
      headline:
        "Three teams were building the same AI agent tool in isolation. I designed the unified solution that became PwC's firm-wide platform for enterprise agentic workflows.",
      subhead:
        "Working with a Director-level PM, I led the UX vision for Agent OS, designing the drag-and-drop interface that makes agentic AI accessible to non-technical users across 250+ deployed agents.",
      metricCallout: {
        text: "Agent OS enables workflow creation up to 10x faster than traditional methods and is now deployed across PwC's global practice and to enterprise clients.",
        source: "PwC press release, April 2025",
      },
      image: {
        src: "/case-studies/agent-os/hero-workflow-environment-review.png",
        alt: "Agent OS canvas builder showing the drag-and-drop workflow interface",
      },
    },

    problem: {
      paragraphs: [
        "PwC had three separate teams building agent workflow tools. Each team reported to different stakeholders, served different audiences, and used different technical approaches. None of them were coordinating with each other.",
        "The business risk was straightforward: three parallel investments solving the same problem, with no shared front end and no path to a unified product. Left unchecked, PwC would have shipped three competing tools internally before any of them reached a client.",
      ],
    },

    role: {
      paragraphs: [
        "Nick Fico, a Director-level PM, and I were brought in to make sense of the situation. Before this project had a full team, it was the two of us figuring out what should be built, how to bring three solutions together, and what the new team should look like.",
        "I met with each of the three teams to understand their requirements and what they were building. I conducted stakeholder and user research, created the Figma prototype for the unified solution, and wrote and produced the demo video that partners used to present Agent OS to clients. I led the UX direction for the first three months, then worked with Nick and the solution architects to break the product into an alpha, beta, and v1 release roadmap before handing it off to a senior designer who joined the Agile build team.",
      ],
      contextCallout:
        "This was a Director-level engagement where I chose to go deep into the hands-on design work. The complexity of unifying three technical architectures into one coherent interface demanded it. It meant late nights balancing prototype work with leading the broader UX team, but the impact on the firm justified the investment.",
    },

    decisions: [
      {
        title: "One product, not three",
        paragraphs: [
          "The first and most consequential decision was not a design decision at all. It was the recommendation that PwC build a single unified platform rather than pick a winner among the three existing efforts or let them continue independently.",
          "Each team had built something valuable. Each team's stakeholders had opinions about how the combined product should work. Merging the efforts meant none of them would get exactly what they had envisioned, and every team had people who felt ownership over their original solution.",
          "Nick and I spent the early weeks in discovery sessions with all three teams, mapping where the requirements overlapped and where they genuinely diverged. The overlaps were larger than anyone expected. The divergences were mostly about audience: some teams had built for engineers, others for consultants, and one was targeting client-facing use cases. The unified product needed to serve all three audiences without collapsing into a lowest-common-denominator compromise.",
          "The trade-off was speed. Building one product took longer than shipping any single team's existing tool. We had to make the case to leadership that the longer path would produce something PwC could actually scale, while three separate tools would create a maintenance and governance burden that compounded over time.",
        ],
        image: {
          src: "/case-studies/agent-os/journey-simple-tasks.svg",
          alt: "Agent OS user journey diagram mapping simple tasks to be done for end users",
          caption:
            "Journey mapping during discovery — aligning three teams on what non-technical users actually needed to accomplish.",
        },
      },
      {
        title: "Designing for people who do not write code",
        paragraphs: [
          "The three existing tools had been built by technical teams for technical users. The architects and engineers who created them thought in terms of SDKs, orchestration graphs, and API integrations. That was the right level of abstraction for the people who had built the tools. It was the wrong level for the consultants and business users who would need to create agent workflows at scale.",
          "My job was to understand what the technical teams had built well enough to translate it into an interface that a non-technical user could operate confidently. The drag-and-drop canvas builder became the centerpiece of that translation. Users could assemble agents into workflows visually, connect them to enterprise systems, and see the data flow without writing a line of code.",
          "The harder part was defending those design decisions to the technical stakeholders. They had built the original solutions and felt, reasonably, that simplifying the interface meant losing capability. Every abstraction I introduced had to prove that it preserved the underlying power while removing the jargon that would stop a business user from getting started. Some of those conversations were tense. The architects needed to see that the canvas builder was not dumbing down their work; it was making their work usable by the people who would actually generate revenue with it.",
        ],
        image: {
          src: "/case-studies/agent-os/canvas-builder-prototype.png",
          alt: "The drag-and-drop canvas builder prototype from Figma, showing a workflow being assembled visually",
          caption:
            "Agent OS canvas builder: drag-and-drop workflow assembly for non-technical users.",
        },
        images: [
          {
            src: "/case-studies/agent-os/canvas-builder-laptop.png",
            alt: "Agent OS canvas builder displayed on a laptop in a workspace setting",
            caption:
              "The canvas builder prototype in context — the interface designed to translate technical orchestration into visual assembly.",
          },
          {
            src: "/case-studies/agent-os/workflow-orchestration-laptop.png",
            alt: "Agent OS workflow orchestration screen on a laptop showing agent groups and compliance agents connected in a flow",
            caption:
              "Workflow orchestration view — agent groups, supervisors, and compliance agents connected without writing code.",
          },
        ],
      },
      {
        title: "Phasing the build to ship value early",
        paragraphs: [
          "With three teams' worth of requirements consolidated into one product, we had more scope than any single release could carry. Nick, the solution architects, and I worked together to break the product into three phases: an alpha that proved the core orchestration concept, a beta that opened it to internal users, and a v1 that was client-ready.",
          "The phasing decisions were as much about organizational buy-in as they were about technical sequencing. Each phase needed to deliver enough visible value to keep stakeholders from the original three teams invested. If any group felt their priorities had been permanently shelved, we risked losing the coalition that made the unified product possible.",
          "I defined the UX scope for each phase and the handoff criteria for the senior designer who would carry the product through the Agile build. That handoff was deliberate: I had spent three months building the design foundation and needed to return full attention to leading the broader UX team.",
        ],
        image: {
          src: "/case-studies/agent-os/dashboard-home-laptop.png",
          alt: "Agent OS dashboard home screen on a laptop showing SDLC overview, code analytics, and agent workflow entry points",
          caption:
            "Agent OS home — the unified entry point that replaced three separate tools with one firm-wide platform.",
        },
      },
    ],

    outcomes: {
      metrics: [
        {
          label: "Firm-wide adoption",
          value:
            "Agent OS became PwC's centralized agent workflow platform, replacing the three separate efforts.",
        },
        {
          label: "Scale",
          value:
            "The platform now orchestrates 250+ deployed agents across PwC's global practice and enterprise clients.",
          source: "PwC managed services documentation, 2025",
        },
        {
          label: "Speed",
          value:
            "Agent OS enables workflow creation up to 10x faster than traditional integration methods.",
          source: "PwC press release, April 2025",
        },
        {
          label: "Innovation",
          value:
            "The orchestration system earned a patent-pending designation. PwC launched Agent OS publicly in April 2025 with integrations across Anthropic, AWS, Google Cloud, Microsoft Azure, OpenAI, Oracle, Salesforce, SAP, and Workday.",
        },
      ],
      prose: [
        "The drag-and-drop canvas builder I prototyped survived into the production product. PwC's April 2025 press release describes the interface as making workflow creation accessible to both technical and non-technical users, which was the core design problem I set out to solve.",
      ],
    },

    reflection: {
      heading: "What I Carried Forward",
      paragraphs: [
        "After I moved to a different team, Agent OS continued to evolve. The designer who replaced me was more junior, and without a senior UX voice in the room, the technical stakeholders reintroduced some of the jargon and complexity I had worked to remove. The product is still strong, but the gap between my prototype and the shipped interface taught me something I now consider essential: UX advocacy that depends on a single person's presence is fragile.",
        "If I were starting this project again, I would build more of the design rationale into documentation that could survive my departure. The decisions about why the interface was simplified, what user research supported each abstraction, and which technical capabilities were preserved beneath the simpler surface all lived in my head and in conversations with Nick. When I left, that context left with me.",
        "The other lesson was personal. Directors do not always need to stay at altitude. This project required me to go deep into Figma and stay there for months, and that hands-on investment is what made the unified vision credible to the technical teams. Knowing when to lead from the front and when to step back is a judgment call that gets easier with practice but never becomes automatic.",
      ],
    },

    nextSlug: "southwest-opssuite",
  },

  /* ================================================================== */
  /*  3. SOUTHWEST AIRLINES OPS SUITE                                     */
  /* ================================================================== */
  {
    slug: "southwest-opssuite",
    title: "Southwest Airlines Ops Suite",
    subtitle: "Airline Operations · Internal Tooling",
    description:
      "Designed the core applications in Southwest's operational software suite and built the design system that unified them across 3,900+ daily departures and 97 cities.",
    image: "/case-studies/southwest-opssuite/hero-gate-schedule.png",
    tags: ["UX Strategy", "Operations", "Research", "Design Systems"],
    type: "hands-on",

    hero: {
      headline:
        "When a storm strikes a major airport, Southwest went from needing 4 to 6 hours to recover to needing minutes.",
      subhead:
        "I designed the core applications in Southwest's operational software suite and built the design system that unified them across 3,900+ daily departures and 97 cities.",
      metricCallout: {
        text: "1–1.8 percentage point year-over-year improvement in on-time performance during major weather events, making Southwest the top-ranked U.S. carrier in those conditions.",
      },
      image: {
        src: "/case-studies/southwest-opssuite/hero-gate-schedule.png",
        alt: "Dark-mode Baker screen showing the aircraft schedule with recovery solution",
      },
    },

    problem: {
      paragraphs: [
        "Southwest's Network Operations Control center runs 24 hours a day in a windowless, dark room. When I arrived, the Supervisors on Duty were managing one of the country's most complex flight networks using paper checklists, whiteboards, and decades of tribal knowledge.",
        "New supervisors took two to three years to become effective. Veterans could not take real vacations because their expertise was irreplaceable during disruptions. The airline had outgrown its manual operations and needed its people to trust automated systems that did not yet exist.",
      ],
      image: {
        src: "/case-studies/southwest-opssuite/noc-environment.png",
        alt: "Network Operations Center with blue ambient lighting and multi-monitor workstations",
        caption:
          "The NOC environment: 24-hour operations with multi-monitor workstations and controlled lighting.",
      },
    },

    role: {
      paragraphs: [
        "I was the senior UX designer on The Baker (the AI-powered Recovery Optimizer), Gate Management, and Station Management. I also founded and grew the OpsSuite Design System. I led the user research for The Baker, working directly with three veteran Network Operations Supervisors.",
        "Research for the broader suite was led by Jenny Bean and Matt Heard, whose team embedded in the NOC and four stations nationwide, conducting over a hundred interviews.",
        "As the project grew, I onboarded and led additional designers on Flight Audit and Turn Management, establishing peer-review sessions that improved quality across every screen.",
      ],
      contextCallout:
        "Our core team was four people in a repurposed printer closet with an active printer. In those conditions, we built some of the most complex operational software of my career.",
    },

    decisions: [
      {
        title: "Teaching an AI to earn trust",
        paragraphs: [
          "The Baker was designed to replace a manual recovery process that consumed four to six hours during a mega-station weather shutdown. The algorithm considered more than 20 operational factors. The interface challenge was not the algorithm. It was the people.",
          "The SODs were skeptical of an AI making decisions they had spent their careers mastering. I designed a solution that gave them a way out: three AI-generated recovery plans, each scored and ranked, plus the ability to build their own solution if they disagreed with all three. The critical detail was that the AI learned from every manual override. Trust came from the system proving, over testing cycles, that it understood what good looked like because the SODs had taught it.",
        ],
        image: {
          src: "/case-studies/southwest-opssuite/recovery-optimizer-noc.png",
          alt: "The Baker's recovery interface showing ranked options in the NOC environment",
          caption:
            "Recovery Optimizer in the NOC – ranked AI solutions with manual override capability.",
        },
        quote: {
          quote:
            "The benefit to our overall on-time performance has been staggering... Southwest has consistently finished first in OTP when bad weather strikes a major airport.",
          attribution: "Charles Cunningham and Ryan Files",
          role: "Dispatch Superintendents, Southwest Airlines (LUVLines, May 2016)",
        },
      },
      {
        title: "Designing for a room with no sunlight",
        paragraphs: [
          "During my first research interviews in the NOC, I recognized something the existing software had ignored. The NOC operates in perpetual darkness with monitors as the primary light source, while station agents and ramp crews work on bright tarmacs and in sunlit gate areas.",
          "I pitched a dark mode to the solution architect after those interviews. They built it in a single evening because the design system I was building supported theming from the start.",
        ],
        image: {
          src: "/case-studies/southwest-opssuite/gate-schedule-tablet-tarmac.png",
          alt: "Ramp crew using a gate schedule tablet in bright daylight on the airport tarmac",
          caption:
            "Field operations in full sun — the contrast that drove dark mode for the NOC and light, high-contrast layouts for station and ramp crews.",
        },
      },
      {
        title: "Starting the design system wrong and recovering",
        paragraphs: [
          "I began with component sizing that was too generous, informed by the simpler Gate Management screens. When we moved into the denser screens for The Baker and Station Management, the sizing did not hold. The information density demanded tighter spacing and smaller typographic scales.",
          "Because the four of us sat together and communicated constantly, the front-end lead and I evolved the system with minimal rework. The design system grew from the work rather than being imposed on it.",
        ],
        image: {
          src: "/case-studies/southwest-opssuite/design-system.png",
          alt: "OpsSuite Design System component library showing typography, color palettes, and components for light and dark mode",
          caption:
            "Ops Suite design system: components, typography, and tokens aligned with coded components.",
        },
        images: [
          {
            src: "/case-studies/southwest-opssuite/station-settings-airport-view.png",
            alt: "Station Settings screen with Phoenix airport visible through the office window behind the monitor",
            caption:
              "Station Management in a sunlit gate office — light mode and dense operational data for station agents.",
          },
        ],
        reflectionCallout:
          "If I were starting today, I would begin the design system from the most complex screen and work outward. Starting with the easier case and scaling down worked because of the team dynamic, but that approach does not transfer automatically to larger teams.",
      },
    ],

    outcomes: {
      metrics: [
        {
          label: "Recovery time",
          value:
            "Mega-station shutdowns reduced from 4–6 hours (manual) to minutes (Baker).",
        },
        {
          label: "On-time performance",
          value:
            "1 to 1.8 percentage point year-over-year OTP improvement; first among major U.S. carriers during severe weather.",
        },
        {
          label: "Adoption",
          value:
            "The Baker was used successfully hundreds of times in its first winter. Release 2 was underway by May 2016.",
        },
      ],
      prose: [
        "The unified dashboards across the suite eliminated reliance on paper and whiteboards. Custom views for each role reduced cognitive overload and allowed less-experienced staff to contribute more quickly.",
      ],
      quote: [
        {
          quote:
            "It feels like for the first time as a company we are ahead of the curve.",
          attribution: "User",
          role: "Southwest Airlines",
        },
        {
          quote:
            "The ability to track turn progress and have flight details, delayed customers, and connecting crews in an integrated view eliminates the need to toggle; this saves time and allows me to focus on operational challenges.",
          attribution: "User",
          role: "Southwest Airlines",
        },
      ],
    },

    reflection: {
      heading: "What I Carried Forward",
      paragraphs: [
        "This project taught me more about running UX within Agile than any other engagement in my career. Part of what made it work was the dual-track agile process that the scrum masters on the project created and maintained. Discovery and delivery ran in parallel without collision, and the scrum masters kept the wheels turning so the rest of us could stay focused on the work itself. I have tried to recreate that rhythm on teams since, with partial success. Not every organization has dedicated scrum masters, and without them the dual-track structure requires more overhead from the design and engineering leads to sustain.",
        "The peer-review structure I built for the designers who joined later became a model I carried into future leadership roles. The conditions that made this project exceptional were partly circumstantial, and I have spent the years since trying to understand which parts can be engineered deliberately.",
        "Ask me about it sometime. It was scrum magic.",
      ],
    },

    nextSlug: "pwc-tax-tech",
  },

  /* ================================================================== */
  /*  4. PwC TAX TECHNOLOGY                                               */
  /* ================================================================== */
  {
    slug: "pwc-tax-tech",
    title: "PwC Tax Technology: UX from Zero",
    subtitle: "UX Maturity Transformation",
    description:
      "A team of 60+ engineers building powerful tax software had never worked with a designer. Two years later, they refused to start a sprint without one.",
    image: "/case-studies/pwc-tax-tech/hero-ux-maturity-stages.png",
    tags: ["UX Strategy", "Leadership", "Research", "Design Systems"],
    type: "leadership",

    hero: {
      headline:
        "A team of 60+ engineers building some of the most powerful tax software in the industry had never worked with a designer. Two years later, they refused to start a sprint without one.",
      subhead:
        "I was one of three UX practitioners brought in to establish user experience as a discipline within PwC's Tax Technology group. I led the initiative that moved the organization from NN/g UX Maturity Stage 1 (Absent) to Stage 5 (Integrated) across 8 to 10 products in two years.",
      metricCallout: {
        text: "60–70 team members certified in UX methods by Nielsen Norman Group. UX designers embedded on every product with a user interface. Generative research established as standard operating procedure.",
      },
      image: {
        src: "/case-studies/pwc-tax-tech/hero-ux-maturity-stages.png",
        alt: "UX Maturity transformation hero",
      },
    },

    problem: {
      paragraphs: [
        "PwC's tax technology tools were among the most powerful in the Big Four. In head-to-head capability comparisons, they consistently outperformed what competitors offered. None of that mattered during client pitches.",
        "When prospective clients saw the software in a pitch, they compared interfaces. Competitors with less capable tools but more polished interfaces won work on the perception that a better-looking product meant a better product. Tax leadership recognized the pattern and made the call: the technology team needed UX.",
        "The gap was not cosmetic. The organization had no UX roles, no design process, and no shared understanding of what user-centered design even meant. That is NN/g's Stage 1 (Absent), and the team's initial reaction confirmed it. We were met not with enthusiasm but with skepticism. Why are these people on my budget? Why are they slowing us down? Why should we change a process that already ships working software?",
      ],
    },

    role: {
      paragraphs: [
        "I joined as UX Manager alongside David Jennings and Mike Parra. We were the first three UX practitioners the Tax Technology group had ever employed, and we were asked to lead the transition to a user-centered practice across the full product portfolio.",
        "I led the strategy for how we introduced UX to the organization, built the design library and design system that unified the product suite, and managed the growth of the UX team from three to five during my tenure. I also conducted the initial interviews to hire the next wave of designers as I transitioned to PwC Digital, bringing the team to seven.",
        "David and Mike owned design on their respective product assignments. The three of us collaborated on the broader evangelism and education effort, but I drove the sequencing of how we earned trust, when we pushed for process change, and how we scaled the practice beyond ourselves.",
      ],
    },

    decisions: [
      {
        title: "Earning trust before asking for change",
        subtitle: "Moving from Stage 1 (Absent) to Stage 2 (Limited)",
        paragraphs: [
          "The instinct when you are brought in to \"fix\" something is to start fixing. We did the opposite. We started by showing up with smart solutions that improved what already existed rather than proposing a new way of working.",
          "The earliest wins came from cleaning up screens the teams already had. No new process. No new meetings. No asking anyone to change their workflow. Just visibly better interfaces on products the engineers already owned and cared about. That earned enough goodwill to open doors for the next step.",
          "I organized a series of brown bags and lunch-and-learns on UX as a discipline: what it was, why it mattered, and real examples of its impact in the broader technology industry. These were not mandatory. Attendance was voluntary, and it grew over time as word spread that the sessions were worth the hour. In every meeting we attended, we answered questions patiently and without defensiveness. The resistance was legitimate. These were experienced professionals being told their process needed to change by people they had not asked for.",
        ],
        reflectionCallout:
          "The key insight was sequencing. We did not ask anyone to change their process until they had already seen the results of ours. Trust came from evidence, not authority.",
      },
      {
        title: "Building shared infrastructure across the product suite",
        subtitle: "Moving from Stage 3 (Emergent) to Stage 4 (Structured)",
        paragraphs: [
          "Once individual teams were receptive, we faced a structural problem. Eight to ten products had been built independently, each with its own interface conventions. Users who worked across multiple tools encountered inconsistent patterns, redundant workflows, and competing interaction models.",
          "I led a comparative audit of every product in the portfolio, documenting the common components and divergent patterns. From that audit, I built a shared design library. The library was not imposed from above. I worked with the engineering leads to help them see the value of reusable components on their own terms: less duplicated effort, fewer visual QA cycles, and faster development for new features.",
          "The design library established the patterns, but scaling it across 8 to 10 products required more capacity than our small team could provide while also doing product work. I brought in an agency to build out the full component set and made the system available through a CDN that product teams could pull from immediately. New builds could adopt the system from day one, and teams updating existing products could migrate incrementally without a full rewrite. That distribution model removed the biggest barrier to adoption: nobody had to wait for us to hand them assets.",
          "The result was a shared design language across the portfolio for the first time. Engineers who had been skeptical of UX involvement could see concrete efficiency gains in their own velocity. PMs who had resisted adding design review to their timelines began requesting it because it reduced rework downstream.",
          "This was the period when the organization moved through NN/g's Stage 3 (Emergent), where UX work was happening but inconsistently and at the initiative of individual managers, and into Stage 4 (Structured), where the organization recognized UX as a discipline with dedicated roles, processes, and a shared methodology.",
        ],
        image: {
          src: "/case-studies/pwc-tax-tech/design-system-exploration-1.png",
          alt: "Design system exploration wall: Forms & Buttons and Grids boards covered with UI component printouts and sticky notes",
          caption:
            "Design system exploration – pulling components from multiple applications to compare variations and align on standards.",
        },
        images: [
          {
            src: "/case-studies/pwc-tax-tech/design-system-exploration-team.jpeg",
            alt: "Tax Technology design team reviewing component boards labeled Forms and Buttons, Grids and Data Viz, and Text and Icons",
            caption:
              "Component audit workshop — the team aligned on shared patterns across eight to ten products.",
          },
          {
            src: "/case-studies/pwc-tax-tech/design-system-exploration-boards.jpeg",
            alt: "Four design system exploration boards covering forms, grids, typography, icons, and modals",
          },
          {
            src: "/case-studies/pwc-tax-tech/design-system-exploration-2.png",
            alt: "Close-up of design system component comparison boards with sticky-note feedback",
          },
        ],
      },
      {
        title: "Research that redirected a project before a single screen was designed",
        paragraphs: [
          "By the time this story happened, David and Mike had moved on from the firm. I was leading the UX practice solo and had enough credibility with the team to push for something that would have been impossible in the early months: generative research before a kickoff.",
          "A new product redesign was on the roadmap, and the kickoff was scheduled in Boston where the tax practitioners who used the software worked side by side. I scheduled user interviews to coincide with the trip and brought two of the partners along. On the way to Boston, I walked them through what we would be doing and why. They had never observed a user interview. By the time we landed, they understood the basics of what to watch for and what not to say in the room.",
          "The contextual inquiries happened at the practitioners' desks, in the middle of their actual workflow. Within the first few sessions, a pattern emerged that nobody in the stakeholder conversations had mentioned. The application we had been asked to redesign was the one piece of the workflow that practitioners said worked well. The real bottleneck was a sister application upstream in the process. Practitioners had been compensating for its failures so routinely that the pain had become invisible to the people requesting the redesign.",
          "I presented the findings to stakeholders and recommended redirecting the effort to the sister application. That recommendation saved the team from rebuilding the one tool their users trusted while the actual problem continued unchecked. It also gave leadership a concrete example of what research could do that no amount of visual polish could: change what gets built, not just how it looks.",
        ],
        image: {
          src: "/case-studies/pwc-tax-tech/research/cars-workflow/personas-and-workflow-map-2.jpeg",
          alt: "CARS current-state workflow map and user personas pinned to a whiteboard showing specialist, reviewer, and partner roles",
          caption:
            "Generative research artifacts — personas and a current-state workflow map that revealed the real bottleneck upstream.",
        },
      },
      {
        title: "Making UX everyone's responsibility",
        subtitle: "Moving from Stage 4 (Structured) to Stage 5 (Integrated)",
        paragraphs: [
          "The hardest transition was the last one. Having a functioning UX team with good processes is Stage 4, and NN/g's research notes that most organizations plateau there. Reaching Stage 5 (Integrated) required UX to stop being the UX team's job and become part of how the entire organization worked.",
          "The Boston research redirect was a turning point, but it was still one project with one team. The question was whether that kind of research-first approach could become standard practice across the portfolio. Because our users were internal to PwC, setting up research sessions in their own workspaces was far easier than it would have been with external consumers. I used that advantage deliberately, replicating the model across teams until showing up for project kickoffs with completed contextual inquiries was no longer unusual. PMs began to see research not as a delay but as a competitive advantage that made their products better from the first sprint.",
          "The second was a decision from Andy Nardo and Jake Wilson, our leadership sponsors, to invest in org-wide UX certification through Nielsen Norman Group. Sixty to seventy team members, including PMs, developers, and QA, completed a week of training and earned NN/g UX certification. That investment signaled something that no amount of brown bags could: leadership believed UX was a permanent part of how this team would work, not a temporary experiment.",
          "After certification, the culture shifted in ways that were hard to reverse. Engineers volunteered for whiteboarding sessions. PMs built journey mapping into their planning process. Team members asked to sit in on task validation sessions and hear user feedback firsthand. PMs required UX artifacts and deliverables before the team would begin writing user stories or entering the first sprint.",
        ],
        image: {
          src: "/case-studies/pwc-tax-tech/nng-training-1.png",
          alt: "NN/g trainer presenting Design Thinking to the product dev team",
          caption:
            "NNg trainers spent 5 days with the entire Tax Technology org — PMs, Devs, QA, and Stakeholders.",
        },
        images: [
          {
            src: "/case-studies/pwc-tax-tech/nng-design-thinking-session.jpeg",
            alt: "Nielsen Norman Group trainer presenting Generating Big Ideas with Design Thinking to the Tax Technology team",
            caption:
              "NN/g certification week — Design Thinking training for PMs, developers, QA, and stakeholders.",
          },
          {
            src: "/case-studies/pwc-tax-tech/nng-training-2.png",
            alt: "Tax Technology team in a classroom setting during NN/g UX certification training",
          },
          {
            src: "/case-studies/pwc-tax-tech/empathy-map-journey-synthesis.jpeg",
            alt: "Design thinking workshop with empathy maps and journey synthesis boards covered in sticky notes",
            caption:
              "Workshop synthesis — empathy mapping and journey mapping became standard planning practice after certification.",
          },
        ],
        reflectionCallout:
          "NN/g explicitly states that moving up a single maturity level typically takes several years and that leapfrogging levels is unrealistic. We moved four levels in two. I attribute that pace partly to the internal-user advantage, partly to having a leadership sponsor willing to invest in certification, and partly to the sequencing strategy of earning trust before requesting change. Not every organization has all three of those conditions.",
      },
    ],

    outcomes: {
      metrics: [
        {
          label: "UX Maturity",
          value:
            "NN/g Stage 1 (Absent) to Stage 5 (Integrated) in two years across a portfolio of 8 to 10 products.",
        },
        {
          label: "Team growth",
          value:
            "UX practice grew from 0 to 3 (founding team), then to 5, then to 7+ with contractors supplementing. Every product with a user interface had a designer assigned.",
        },
        {
          label: "Organizational capability",
          value:
            "60 to 70 team members earned NN/g UX certification. Generative research became standard operating procedure. PMs required UX deliverables before sprint planning.",
        },
        {
          label: "Sustainability",
          value:
            "When I transitioned to PwC Digital, David and Mike had moved on from the firm, and I handed a smooth-running team to the next manager. The practice I built did not depend on the people who started it.",
        },
      ],
      prose: [
        "The strongest evidence that the initiative worked was what happened next. PwC Digital recruited me to replicate the model at a larger scale, helping them grow their design team rapidly during a period of expansion. The Tax Technology transformation became the proof of concept for a broader organizational investment in UX.",
      ],
    },

    reflection: {
      heading: "What I Carried Forward",
      paragraphs: [
        "The biggest lesson from this initiative was about sequencing. Organizational change does not respond well to authority, even when you have a mandate from leadership. The mandate opened the door, but the people on the other side of it still needed a reason to let us in. Showing value before requesting change was the strategy that made everything else possible.",
        "I also learned the limits of that approach. Evangelism and demonstration can move an organization from Stage 1 to Stage 3 or even Stage 4. Getting to Stage 5 required structural investment that only leadership could authorize: the NN/g certification, the dedicated headcount, the policy that UX deliverables were prerequisites for sprint planning. A UX manager can build the case for those investments, but cannot make them alone.",
        "If I were doing this again, I would push for the org-wide certification earlier. We spent months earning trust through brown bags and individual project wins, and that groundwork was necessary. But the certification accelerated the culture shift in a way that organic evangelism could not match, and I think we could have made the case for it sooner than we did.",
      ],
    },

    nextSlug: "pwc-digital-leadership",
  },

  /* ================================================================== */
  /*  5. PwC DIGITAL LEADERSHIP                                           */
  /* ================================================================== */
  {
    slug: "pwc-digital-leadership",
    title: "Building the Team That Built the Products",
    subtitle: "Org Design & Culture",
    description:
      "We grew PwC Digital's design team from 7 to 130 in under two years. Only three left voluntarily in four years — and two of them came back.",
    image: "/case-studies/pwc-digital-leadership/hero-onboarding-miro-board.png",
    tags: ["Team Building", "Hiring", "Culture", "Mentorship"],
    type: "leadership",

    hero: {
      headline:
        "We grew PwC Digital's design team from 7 to 130 in under two years. Only three left voluntarily in four years — and two of them came back.",
      subhead:
        "I designed the hiring, onboarding, and culture systems that let a brand-new product arm of a global consulting firm scale without losing the thing that made it worth joining.",
      metricCallout: {
        text: "3 voluntary departures over four years on a 130-person team. HR modeled their firm-wide onboarding process on ours.",
      },
      image: {
        src: "/case-studies/pwc-digital-leadership/hero-onboarding-miro-board.png",
        alt: "Welcome graphic for the PwC Digital UX Team onboarding experience, with design tool logos arranged around a friendly robot mascot",
      },
    },

    problem: {
      heading: "The Situation and My Role",
      sideLabel: "Context",
      paragraphs: [
        "PwC Digital was a new venture inside PwC Advisory. It was growing fast with new engagements rolling in every week. The design team needed to grow from 7 people to over a hundred, fast, with no playbook for how to do it.",
        "When I arrived, there was no structured hiring process, no coordination between interview rounds, and no formal onboarding. New designers learned the team through proximity and luck. I created or led the creation of every system described in this case study.",
      ],
      contextCallout:
        "There was no inherited process, no design ops support, and no template for what a 130-person consulting product design team was supposed to look like. We built it while running it.",
    },

    role: {
      paragraphs: [],
    },

    decisions: [
      {
        title: "Building the infrastructure to hire 130 people without losing control",
        paragraphs: [
          "## Interview Process",
          "We needed structure to grow the strongest team possible. The ad-hoc process made it impossible to compare candidates evenly and easy to introduce unconscious bias.",
          "I brought the leads together to align on questions we valued and why. We sorted the strongest into a two-interview template.",
          "Interviewers took notes in a shared copy during each call. The second-round team opened that same document and found the candidate's first-round answers alongside their own questions.",
          "## Onboarding",
          "Onboarding needed the same rigor. I designed an onboarding Miro board using macro and micro navigation; the zoomed-out view shows the full map, and zooming in reveals exactly what a new joiner needs. The content covered tool setup, Figma file conventions, accessibility standards, working with developers, and product demos. Each new hire received a specific action list for their first week, first month, first 60 days, and first 90 days.",
          "On day one, a \"friendlies\" leader welcomed them, walked them through the board, and answered the questions people are sometimes embarrassed to ask their direct manager that first week.",
        ],
        images: [
          {
            src: "/case-studies/pwc-digital-leadership/interview-process-illustration.png",
            alt: "Illustration of two interviewers conducting candidate evaluations with a shared document showing Round 1 answers and Round 2 questions in a tabbed interface",
            caption:
              "Structured interview process — Round 1 notes fed directly into Round 2 questions through a shared candidate evaluation document.",
            afterParagraph: 1,
          },
          {
            src: "/case-studies/pwc-digital-leadership/onboarding-miro-macro.png",
            alt: "Full onboarding Miro board zoomed out showing all sections: Where We Sit, Get to Know Us, Career, Processes, Tools, Workshop Assets, Brand Guidance, Glossary, Strategy, and Tutorials",
            caption:
              "The macro view — the full onboarding board with every section visible at a glance.",
            flexHeight: true,
            afterParagraph: 3,
          },
          {
            src: "/case-studies/pwc-digital-leadership/team-structure-empower-support.png",
            alt: "Empower and Support org diagram showing leadership structure with designers at the center",
            caption:
              "The micro view — zooming in on how the team is structured, with every role orbiting the people doing the work.",
            flexHeight: true,
            afterParagraph: 3,
          },
          {
            src: "/case-studies/pwc-digital-leadership/use-case-flow-template.png",
            alt: "Use case flow template from the onboarding board showing trigger, dashboard, and business value stages",
            caption:
              "Onboarding board template — a reusable use-case flow new designers learned to apply on product engagements.",
            afterParagraph: 4,
          },
        ],
        quote: {
          quote:
            "This award is really about your impact on our collaboration. You are truly, wonderfully easy to work with and your approach to the whole team — bringing us all together regularly, coaxing contributions from multiple people and sharing best practices widely — has made us better.",
          attribution: "Andrew Carlson",
          role: "Partner, PwC Digital (internal recognition award, May 2021)",
        },
      },
      {
        title: "Recognizing when the work had outgrown me",
        paragraphs: [
          "I was spending 60 to 70 percent of my time on hiring logistics: portfolio reviews, recruiter calls, moving interview notes between rounds, following up on pending decisions, managing onboarding. Other managers shared the load, and we were all still drowning.",
          "The work was not wrong. It just did not require a Director.",
          "I petitioned our Partner to create a Design Ops role. Once that person was up to speed, I shifted to reviewing portfolios and second interviews alongside the other directors. She and I met two to three times a week to stay aligned on everything else. I stayed connected to every new hire. The difference was that I could also lead the team that was already there.",
        ],
        reflectionCallout:
          "That decision is the one I am most glad I made quickly. The right time to build operational support is before you feel the strain, not after.",
      },
      {
        title: "Keeping the culture intact at 20x scale",
        paragraphs: [
          "When a team is seven people, culture is ambient. Everyone is in the same conversations, the same review sessions. When a team is 130, culture is architecture.",
          "I started weekly peer review sessions early, when the whole team could still fit in one call. As we grew, those evolved into team-wide show-and-tells. I worked with each Design Manager to stand up smaller peer reviews within their individual teams. The rhythm stayed; the format adapted.",
          "We ran sessions to define a team manifesto. The leadership team was consistent about one thing above all: every designer had our support to push back on bad decisions and escalate when their recommendations were being ignored to the detriment of the product. The role was not to take design orders. It was to understand the problem beneath the ask and advocate for the user.",
          "That message, repeated by every leader on the team, was part of why people stayed.",
        ],
        image: {
          src: "/case-studies/pwc-digital-leadership/grid-of-empowerment.svg",
          alt: "Grid of Empowerment diagram showing how designers are supported to advocate for users and push back on bad decisions",
          caption:
            "The Grid of Empowerment — a team manifesto session that codified designer advocacy as cultural architecture, not ambient luck.",
        },
        images: [
          {
            src: "/case-studies/pwc-digital-leadership/client-experience-manifestos.png",
            alt: "Client Experience team manifesto boards including mission, values, and design principles",
            caption:
              "Team manifesto sessions — we made the cultural principles visible so they could survive scale.",
          },
        ],
        quote: {
          quote:
            "That's something I like about you. Being open, honest and human makes you relatable and, at least from my point of view, even easier to respect and appreciate. I've noticed that as people climb the ladder here there's a tendency to adopt an attitude of aloofness. If I'm ever lucky enough to make Director, I quite frankly hope to be like you. Human.",
          attribution: "Jason Lunsford",
          role: "Designer, PwC Digital",
        },
      },
    ],

    outcomes: {
      metrics: [
        {
          label: "Team growth",
          value: "7 to 130 designers in under two years.",
        },
        {
          label: "Retention",
          highlight: "2 of 3 came back",
          value:
            "Only three departures in four years and two returned crediting the culture.",
        },
        {
          label: "Org influence",
          value:
            "HR engaged our team to model onboarding for other disciplines.",
        },
      ],
      prose: [
        "The design team was consistently recognized across PwC Digital for its culture, attributed directly to how we hired, onboarded, and maintained closeness as we grew.",
      ],
    },

    reflection: {
      heading: "What I Would Do Differently",
      paragraphs: [
        "I would have petitioned for Design Ops sooner. By the time I made the case, we had already lost weeks of leadership capacity to work that should not have been mine.",
        "I would also have documented the cultural principles earlier in a written form that new Design Managers could carry forward without needing direct context from me. As we added a third leadership tier, some nuance in how we talked about designer advocacy did not transfer as cleanly as I wanted. The culture held, but written artifacts would have made it more portable.",
      ],
    },

    nextSlug: "project-forge",
  },
];

export const caseStudyNav = caseStudies.map((study) => ({
  slug: study.slug,
  label: study.title,
  type:
    study.type === "hands-on"
      ? "Hands-On"
      : study.type === "leadership"
        ? "Leadership"
        : "Hybrid",
}));

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Homepage work cards (single source of truth for slugs + images)    */
/* ------------------------------------------------------------------ */

export type HomepageWorkCard = {
  slug: string;
  title: string;
  desc: string;
  role: string;
  image: string;
};

export type HomepageFeaturedCard = HomepageWorkCard & {
  badge: string;
};

const homepageCardCopy: Record<
  string,
  Pick<HomepageWorkCard, "title" | "desc" | "role">
> = {
  "project-forge": {
    title: "AI and Experience Layer",
    desc: "I designed at the prompt and shipped code alongside engineers to build an AI experience layer across three disconnected internal systems. Every lesson feeds back into the AI-first delivery model I am building for 80 designers.",
    role: "Lead Designer, Strategist & Front-End Developer",
  },
  "agent-os": {
    title: "Agent Workflow Builder",
    desc: "Three teams were building the same AI agent tool in isolation. I designed the unified solution that became the firm-wide platform for 250+ deployed agents.",
    role: "UX Director (Hands-on)",
  },
  "southwest-opssuite": {
    title: "Airline Operational Suite",
    desc: "When a storm strikes a major airport, only one went from needing 4 to 6 hours to recover to needing minutes.",
    role: "UX Manager, Design System Founder",
  },
  "pwc-digital-leadership": {
    title: "Design Org in Hypergrowth",
    desc: "I grew a design team from a small group to 130 people in under two years, with retention that outpaced the industry.",
    role: "UX Director",
  },
  "pwc-tax-tech": {
    title: "UX Maturity Transformation",
    desc: "A team of 60+ engineers had never worked with a designer. Two years later, they refused to start a sprint without one.",
    role: "UX Manager",
  },
};

function buildHomepageWorkCard(slug: string): HomepageWorkCard {
  const study = getCaseStudyBySlug(slug);
  const copy = homepageCardCopy[slug];
  if (!study || !copy) {
    throw new Error(`Missing homepage work card data for slug: ${slug}`);
  }
  return { slug, image: study.image, ...copy };
}

export const homepageFeaturedCard: HomepageFeaturedCard = {
  ...buildHomepageWorkCard("project-forge"),
  badge: "Featured · Current",
};

export const homepageWorkCards: HomepageWorkCard[] = [
  "agent-os",
  "southwest-opssuite",
  "pwc-digital-leadership",
  "pwc-tax-tech",
].map(buildHomepageWorkCard);
