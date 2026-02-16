export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export type NarrativeSection = {
  label: string;
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string; caption?: string };
  testimonial?: Testimonial;
  principles?: { title: string; description: string }[];
  phaseCards?: { label: string; description: string }[];
  outro?: string;
  subhead?: string;
  decisionList?: { title: string; bullets: string[] }[];
};

export type CaseStudyData = {
  slug: string;
  title: string;
  subhead?: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  type: "hands-on" | "leadership";
  heroImage: string;
  intro: string;
  introFollowup?: string;
  problem?: string[];
  constraints?: string[];
  impactHeading?: string;
  impactHighlights?: { label: string; items: string[] }[];
  roleDetail?: string | string[];
  teamTimeline?: string[];
  impact: string;
  role: string;
  team: string;
  timeline: string;
  frameworkIntro: string;
  frameworkParts: { label: string; description: string }[];
  sections: NarrativeSection[];
  outcomes: { metric: string; description: string }[];
  reflection: string;
  nextSlug?: string;
  nextTitle?: string;
};

const keyDesignDecisionsSection: NarrativeSection = {
  label: "KEY DESIGN DECISIONS",
  heading: "Key Design Decisions",
  paragraphs: [],
  decisionList: [
    {
      title: "Two skill levels, one experience",
      bullets: [
        "Business users / consultants working in natural language",
        "Advanced users who want deeper control and Python-level detail",
      ],
    },
    {
      title: "Progressive disclosure over “show everything”",
      bullets: [
        "Replace jargon with simple, outcome-oriented language",
        "Hide logs and technical readouts behind “Advanced” affordances",
        "Lead with status and outcome summaries users could act on",
      ],
    },
    {
      title: "Natural-language agent creation to remove bottlenecks",
      bullets: [
        "Instead of forcing users through long, technical steps to create and add skills, we designed a flow where the user describes the goal in plain language—and a backend agent builds the agent and attaches necessary skills behind the scenes.",
        "Result: users focus on outcomes, not plumbing.",
      ],
    },
    {
      title: "Accessibility as a build requirement, not a retrofit",
      bullets: ["user stories", "design specs", "QA acceptance criteria each sprint"],
    },
  ],
};

const sharedSections: NarrativeSection[] = [
  {
    label: "DISCOVER",
    heading: "Understanding what each team was really building",
    paragraphs: [
      "When multiple teams build in parallel, the hardest part isn't visual design. It's ensuring everyone is solving the same problem.",
      "I ran structured interviews with each team to capture:\n* Intended users and jobs-to-be-done\n* Their workflow model and assumptions\n* What existed today vs. what was aspirational\n* Technical constraints that would shape the front-end",
      "In parallel, I met with stakeholders and potential users to understand how consultants and clients would actually assemble, test, reuse, and govern workflows.",
      "Key insight: each team owned a piece of the puzzle, but none owned the end-to-end authoring experience. The opportunity was to unify around one builder and allow back-end capabilities to plug in behind it.",
    ],
    image: {
      src: "/images/case-study-research.jpg",
      alt: "Research synthesis wall with affinity-mapped findings",
      caption:
        "Affinity mapping findings from 24 user interviews across 4 segments.",
    },
  },
  {
    label: "FRAME",
    heading: "A single builder that scales with maturity and skill level",
    paragraphs: [
      "We needed to move quickly without locking into the wrong abstraction. I framed the experience around a simple, learnable pattern:",
      "* A canvas where users assemble workflow steps\n* A clear way to configure, test, and refine\n* A path to reuse and share workflows",
      "Then we translated this into a phased plan:",
    ],
    outro:
      "Then we translated this into a phased plan that sequenced features and clarified staffing needs so we could begin onboarding the future build team.",
    principles: [
      {
        title: "Alpha",
        description: "prove the core authoring → execution loop",
      },
      {
        title: "Beta",
        description: "expand capability + improve usability for real teams",
      },
      {
        title: "v1",
        description: "harden for broader adoption and client-ready pathways",
      },
    ],
  },
  keyDesignDecisionsSection,
  {
    label: "DESIGN",
    heading: "From early concept to a demo-ready prototype",
    paragraphs: [
      "This was a case where hands-on craft was the fastest path to alignment. I built an end-to-end Figma prototype covering:",
      "* Drag-and-drop authoring flow\n* Key states and guardrails that prevent dead ends\n* Conditional logic and parallel steps\n* Human-in-the-loop moments (pause for review, notify via email/Teams, then proceed)",
      "Because partner and stakeholder confidence mattered, I also produced:",
      "* A demo script tuned for consistent storytelling\n* A demo video to reduce live-demo risk and keep the narrative stable",
      "The prototype became the alignment artifact--turning abstract debate into concrete tradeoffs.",
    ],
    image: {
      src: "/images/case-study-prototype.jpg",
      alt: "High-fidelity prototype of the redesigned dashboard",
      caption:
        "The final dashboard design adapting its layout based on user tier and behavior.",
    },
  },
  {
    label: "VALIDATE",
    heading: "Tight feedback loops to de-risk the build",
    paragraphs: [
      "Before the new team ramped, we used the prototype as the test vehicle. Walkthroughs focused on:",
      "* Whether the builder matched real consultant mental models\n* Whether language and configuration patterns were understandable\n* Whether the v0 story was coherent enough for partners and stakeholders\n* Where users got stuck—and what needed to be guided vs. hidden",
      "Each loop refined both the product and the roadmap, so handoff was grounded in reality.",
    ],
  },
];

const agentOsSections: NarrativeSection[] = sharedSections.map((section, index) =>
  index === 0
    ? {
        ...section,
        image: {
          src: "/case_study_images/AgentOS%20-%20Journey%20_%20Simple%20Tasks%20to%20Be%20Done%20for%20End%20User.svg",
          alt: "AgentOS journey: simple tasks to be done for end user",
          caption: "AgentOS journey from simple tasks to end-user outcomes.",
        },
      }
    : section
);

const sharedOutcomes = [
  {
    metric: "40%",
    description:
      "improvement in task completion rate for new users in their first week",
  },
  {
    metric: "3 days",
    description: "average onboarding time, down from 2 weeks",
  },
  {
    metric: "92%",
    description: "post-launch satisfaction score from existing power users",
  },
  {
    metric: "2x",
    description:
      "increase in daily active usage of advanced analytics features",
  },
];

const sharedFrameworkParts = [
  {
    label: "DISCOVER",
    description:
      "Align reality across three teams + validate real consultant workflows",
  },
  {
    label: "FRAME",
    description: "Define a shared workflow model + decide what v0 must prove",
  },
  {
    label: "DESIGN",
    description: "Build a demo-ready prototype + design for two skill levels",
  },
  {
    label: "VALIDATE",
    description:
      "Put the prototype in front of real users, then translate learnings into build ready requirements",
  },
];

const sharedReflection =
  "This project reinforced my belief that the best AI-powered tools are the ones that get out of the way. The biggest unlock was not adding more intelligence to the interface--it was removing decisions the user did not need to make. The AI worked best when it was invisible, quietly adapting the experience to each user's context. If I could do one thing differently, I would have started the engineering prototype collaboration even earlier. The technical feasibility conversations in phase 3 were invaluable, and having them sooner would have accelerated the whole timeline.";

const agentOsReflection =
  "AgentOS reinforced a leadership principle I rely on: a strong prototype can become the strategy tool when ambiguity is high. It creates shared language, accelerates decisions, and turns abstract debates into tangible tradeoffs.\n\nIf I did it again, I would still prototype early, but I'd formalize decision checkpoints sooner, so the growing stakeholder set stayed aligned as the team scaled.";

export const caseStudies: CaseStudyData[] = [
  {
    slug: "ai-dashboard-redesign",
    title: "AgentOS - Agent Workflow Builder",
    subhead:
      "Bringing agent creation and workflow orchestration to non-technical consultants",
    subtitle: "Enterprise SaaS Platform",
    description:
      "Led the end-to-end redesign of an AI-powered analytics dashboard, improving task completion rates by 40% and reducing onboarding time from 2 weeks to 3 days.",
    image: "/images/case-study-ai-dashboard.jpg",
    tags: ["UX Strategy", "AI/ML", "Research", "Hands-On Design"],
    type: "hands-on",
    heroImage: "/images/case-study-ai-dashboard.jpg",
    intro:
      "Agent creation was trapped behind Python experts. In summer 2025, three teams were independently building agent tooling, but all three were Python-first. That meant the people with the clearest use cases, consultants and business teams, were effectively locked out. Bringing their ideas to life was dependent on a small pool of technical experts to create agents and workflows.",
    introFollowup:
      "I partnered with a Director-level PM and the architects across the three teams to democratize agent creation. We created a single, business-friendly workflow builder that let non-technical users create, test, and share agentic workflows, while still supporting advanced users when they needed deeper control.",
    problem: [
      "Agents were being created by three different teams, but the experience was built for Python users. That created a bottleneck. Business users and consultants knew the workflows they needed, but lacked tools to create agents, add skills, and orchestrate repeatable processes without technical overhead.",
      "At the time, summer 2025, comparable market tools were rare. We could not rely on established patterns or competitive benchmarks. We had to set the bar ourselves, fast.",
    ],
    constraints: [
      "Timeline pressure. Three teams building variations of the same capability needed to converge quickly",
      "No clear market comps. Limited external reference points for business friendly agent workflow authoring",
      "Lean start. Two person core team until requirements and a happy path prototype aligned stakeholders",
    ],
    impactHeading: "Impact at a glance",
    impactHighlights: [
      {
        label: "Impact",
        items: [
          "Teams report 20–80% margin improvement in engagements enabled by AgentOS (range varies by use case)",
        ],
      },
      {
        label: "What changed",
        items: [
          "One unified product direction replaced three competing concepts",
          "A v0 demo experience unlocked partner storytelling and internal alignment",
          "A phased plan (alpha -> beta -> v1) set the build team up to deliver sustainably",
        ],
      },
    ],
    roleDetail: [
      "UX Director",
      "Experience strategy",
      "Discovery & synthesis",
      "Figma prototyping",
      "Stakeholder alignment",
      "Demo storytelling",
    ],
    teamTimeline: [
      "Director PM + UX Director; 3 architect partners",
      "12 weeks to v0 demo + roadmap; handed off to Senior Designer",
    ],
    impact:
      "Reduced new-user onboarding from 2 weeks to 3 days while maintaining a 92% satisfaction score among power users.",
    role: "Lead Designer (IC)",
    team: "2 designers, 1 researcher, 6 engineers",
    timeline: "4 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: sharedFrameworkParts,
    sections: agentOsSections,
    outcomes: [
      {
        metric: "18,000",
        description: "agents created",
      },
      {
        metric: "3,600+",
        description: "workflows built",
      },
      {
        metric: "4,600",
        description: "active consultant users",
      },
      {
        metric: "20–80%",
        description: "margin improvement",
      },
    ],
    reflection: agentOsReflection,
    nextSlug: "design-system-scale",
    nextTitle: "Design System at Scale",
  },
  {
    slug: "design-system-scale",
    title: "Tax Technology UX Maturity Transformation",
    subhead:
      "Building a UX function and raising UX maturity from level 1 to level 5 in 2 years",
    subtitle: "UX Maturity Transformation",
    description:
      "Built and scaled a design system adopted by 12 product teams, reducing design-to-dev handoff time by 60% and establishing a shared design language across web and mobile.",
    image: "/images/case-study-design-system.jpg",
    tags: ["Design Systems", "Leadership", "Ops"],
    type: "leadership",
    heroImage: "/images/case-study-design-system.jpg",
    intro:
      "When I joined the Tax Technology team, the products were genuinely best in class in capability. They solved complex, specialized tax workflows better than competitors. But we were still losing work in pitches because competitors looked more modern, and stakeholders equated visual polish with overall quality.\n\nTax leadership asked the product org to bring in UX and make it a real part of how work got done. I was one of the first three UX hires brought in to lead that change. Early on, the team was highly capable and delivery oriented, but UX was seen as a cost, a slowdown, and a challenge to established ways of working. Two years later, UX was embedded in pods, PMs expected UX artifacts before story writing, and cross functional teams were actively using research and design methods inside the Agile rhythm.\n\nThis journey aligns to Nielsen Norman Group's UX Maturity Model, moving from early stage adoption to Integrated UX where user centered practices become consistent, scalable, and supported by leadership.",
    impact:
      "We shifted UX from a nice-to-have into a standard part of delivery, with shared expectations for discovery and user validation before build. Along the way, we improved storytelling in demos creating stronger visual cohesion across the tax suite. We also a style guide integrated into an SDK that reduced reinvention and ultimately made delivery faster over time.",
    role: "UX Manager",
    team: "One of the initial three UX hires\nScaled to embedded designers across pods, partnered deeply with PM, Engineering, and QA",
    timeline: "2 years",
    frameworkIntro: "My approach to this transformation had four phases:",
    frameworkParts: [
      {
        label: "DISCOVER",
        description: "Earn trust with practical improvements and user insight",
      },
      {
        label: "FRAME",
        description: "Set expectations for artifacts, roles, and cadence",
      },
      {
        label: "DESIGN",
        description: "Standardize UI through a library and design system",
      },
      {
        label: "VALIDATE",
        description: "Make UX durable through certification and coaching",
      },
    ],
    sections: [
      {
        label: "DISCOVER",
        heading: "Diagnose the maturity gap and earn trust through usefulness",
        paragraphs: [
          "I started by learning the product ecosystem as it really operated, not as it was documented. That meant sitting in ceremonies, pairing with engineers, shadowing internal users, and mapping where friction showed up in real workflows.",
          "Just as important, I treated credibility as a deliverable. I showed up with practical improvements that respected what already worked, cleaned up inconsistencies, and removed avoidable user burden. That early momentum created space for deeper conversations about process, outcomes, and what \"good\" could look like.",
        ],
      },
      {
        label: "FRAME",
        heading: "Create a shared operating model for UX inside Agile",
        paragraphs: [
          "Once the team saw UX improving outcomes rather than slowing delivery, we aligned on a common language and expectations. I framed the transformation as a maturity journey, not a redesign project.",
          "We defined what \"good\" looked like for each stage of maturity and translated it into concrete behaviors:",
          "* what artifacts PMs could expect\n* what research was feasible and valuable with internal users\n* what \"definition of ready\" meant when UX was involved\n* how to make decisions with evidence rather than preference",
          "This is the point where UX shifted from individual contribution to an organizational capability, consistent with the move toward Integrated UX in the NNGroup model.",
        ],
      },
      {
        label: "DESIGN",
        heading: "Build the UX capability, then make it scalable",
        paragraphs: [
          "With alignment in place, we built the infrastructure that made good UX easier than skipping it:",
          "* created a shared component library, then evolved it into a design system for designers and developers\n* established reusable patterns across products so teams could move faster with more consistency\n* embedded designers into pods so discovery and delivery happened together, not as handoffs\n* ran steady enablement through brown bags, lunch and learns, and ongoing coaching in working sessions",
          "Because our users were internal, we could move quickly on contextual inquiry and task based validation. That speed helped teams see the cause and effect between user insight, design decisions, and build outcomes.",
        ],
      },
      {
        label: "VALIDATE",
        heading: "Institutionalize the behavior change through training and shared rituals",
        paragraphs: [
          "To make the shift durable, leadership invested in upskilling the entire org. We brought in Nielsen Norman Group training and certified the full cross functional team, not just designers. After that, the energy changed.",
          "Teams began pulling UX into the work naturally:",
          "* PMs asked for journeys, workflows, and validation findings\n* engineers joined co design sessions and whiteboarding\n* QA partnered earlier on usability and acceptance criteria\n* stakeholders attended user sessions and heard feedback first hand",
          "This is where UX stopped being a role and became a habit, which is the practical signal of an Integrated maturity stage.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "1 → 5",
        description: "UX maturity progression, early stage to Integrated",
      },
      {
        metric: "2 years",
        description: "to embed UX into pod delivery and team norms",
      },
      {
        metric: "1",
        description: "design system to unify UI patterns across a complex suite",
      },
      {
        metric: "1 week",
        description: "of org wide NNGroup training to scale shared understanding",
      },
    ],
    reflection: "This transformation worked because we treated UX maturity as change management, not just design improvement. The turning point was shifting from \"why UX matters\" presentations to everyday proof, delivered through better decisions, better alignment, and less friction for teams and users.\n\nIf I did it again, I would start measurement earlier. Even lightweight baselines around rework, research participation, and cycle time would have made the maturity story even easier to quantify and defend as the org scaled.",
    nextSlug: "team-transformation",
    nextTitle: "Team Transformation",
  },
  {
    slug: "team-transformation",
    title: "Design Org in Hypergrowth",
    subhead: "Scaling PwC Digital UX from 7 to 130 designers in under 2 years",
    subtitle: "Org Design & Culture",
    description:
      "Grew a UX team from 3 to 18 designers, establishing career ladders, rituals, and a research practice that elevated design's influence at the executive level.",
    image: "/images/case-study-leadership.jpg",
    tags: ["Team Building", "Mentorship", "Culture"],
    type: "leadership",
    heroImage: "/images/case-study-leadership.jpg",
    intro:
      "Hypergrowth breaks teams when culture is left to chance. I treated our design org like a product and built an operating system for people, so we could scale without losing quality or identity.\n\nFrom hiring and onboarding to community rituals, learning programs, and leadership norms, I helped create the structures that made a 130 person UX org feel like one team. We clarified what we stand for through a manifesto, created weekly spaces to share work and whiteboard together, and launched shadowing so newer designers could learn intentionally from specialists. The goal was consistency where it matters, and humanity everywhere else.",
    impact:
      "Grew PwC Digital UX from 7 to 130 in under 2 years while strengthening culture, craft, and consistency",
    role: "UX Director\nOwned the operating model across hiring, onboarding, community, and enablement",
    team: "Grew to 5 UX Directors",
    timeline: "20 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: [
      {
        label: "DISCOVER",
        description:
          "Map where inconsistency showed up and what the team needed to scale with confidence.",
      },
      {
        label: "FRAME",
        description:
          "Define shared standards for quality, fairness, and \"how we work\" so growth did not dilute the bar.",
      },
      {
        label: "DESIGN",
        description:
          "Build repeatable systems across hiring, onboarding, community rituals, and learning pathways.",
      },
      {
        label: "VALIDATE",
        description:
          "Run it in real hiring and delivery cycles, then refine as the org multiplied.",
      },
    ],
    sections: [
      {
        label: "DISCOVER",
        heading: "Understanding what a small team was doing by instinct",
        paragraphs: [
          "When we were seven, the team operated on trust, shared context, and informal habits. It worked because everyone knew everyone. As demand increased, those same informal habits started to show cracks.",
          "What I noticed early:\n* Interview experiences varied widely, often without a planned agenda\n* Second interview handoffs were thin, which led to repeated questions and uneven evaluation\n* Onboarding relied on tribal knowledge and who you happened to meet first\n* As headcount accelerated, we needed rituals to keep craft visible and community real",
          "What I did:\n* Partnered with design leads to inventory the existing \"unwritten process\"\n* Identified the moments where inconsistency could create quality risk and fairness risk\n* Defined the outcomes we wanted from scale: consistent evaluation, faster ramp, stronger belonging, and a culture that could survive multiple layers of management",
        ],
      },
      {
        label: "FRAME",
        heading: "Principles that guided every system we built",
        paragraphs: [
          "Before building artifacts, I aligned leadership on shared principles. This kept the work from becoming \"more process\" and ensured everything we introduced reinforced the culture we wanted.",
          "The principles we aligned on:\n* Fair and consistent candidate experience\n* Clear expectations and transparent decision making\n* Designers are empowered partners, not order takers\n* Craft stays visible through community and critique\n* Learning is intentional, not accidental\n* Scale should feel supportive, not bureaucratic",
        ],
        principles: [
          {
            title: "Consistency builds trust",
            description: "",
          },
          {
            title: "Culture must be designed",
            description: "",
          },
          {
            title: "Rituals scale better than rules",
            description: "",
          },
        ],
      },
      {
        label: "DESIGN",
        heading: "The operating system we built across the full designer lifecycle",
        paragraphs: [
          "This is where the work became tangible. I created or led the creation of every step, from first touch with a candidate through a guided onboarding and ongoing community programs.",
          "1. Structured, fair hiring that scales\nHiring was not the headline, but it was foundational. We needed a consistent experience that reduced duplication, improved interviewer handoffs, and ensured candidates were evaluated against the same criteria.",
          "What I led:\n* Facilitated a working session with leads to gather the best interview questions and why they mattered\n* Divided questions intentionally across first and second interviews\n* Built interview templates that interviewers used live for note taking\n* Added a second interview tab so round two started with full context, not guesswork\n* Created a folder structure to track candidates and decisions cleanly across a high volume pipeline",
          "2. A documented end to end process, from portfolio to offer\nTo scale, the team needed clarity on ownership and next steps at every stage.",
          "What I documented:\n* Portfolio review ownership, criteria, and where feedback is captured\n* Interviewer selection guidance and decision recording\n* Second interview scheduling rules and who could participate\n* Offer letter workflow, follow ups, background checks, equipment ordering\n* Pre start expectations and day one experience",
          "This removed reliance on tribal knowledge and made the candidate and new joiner experience feel intentional.",
          "3. Onboarding designed like a product\nI created an Onboarding Miro board that combined macro navigation with micro level detail, so new joiners could find what they needed fast, then go deeper only when relevant.",
          "What the onboarding experience included:\n* A meet and greet led by our friendlies leader\n* A guided walkthrough of the board\n* Action items organized by timeframe: first week, first month, first 60 days, first 90 days\n* Practical setup and delivery readiness: software and device setup, time reporting and HR essentials, how we use the design system, Figma file structure guidance, accessibility practices and working with engineering, product demos and upskilling pathways",
          "4. Culture artifacts and leadership norms\nAs we grew, we made culture explicit so it could scale through managers and across squads.",
          "What we created:\n* Manifesto sessions to define who we are and what we stand for\n* Shared leadership expectations that designers have air cover to do the right thing: ask the right questions, advocate for users, escalate when recommendations are not being followed to the detriment of outcomes",
          "This framed designers as strategic partners who listen for the real problem, not just the first solution.",
          "5. Community rituals that kept craft visible\nI started weekly peer review sessions. As the org expanded, these evolved into a mix of critique, show and tells, whiteboarding, and team building.",
          "How it scaled:\n* Continued a central weekly community rhythm to connect the broader org\n* Enabled design managers to create smaller peer reviews within their teams\n* Reinforced shared language for craft and collaboration",
          "6. Shadowing and intentional learning pathways\nTo help early career designers grow quickly, we created a shadowing program with planned learning sessions over a set period.",
          "What made it work:\n* Pairing with specialists on the team\n* Clear expectations for what \"good\" looks like\n* Time boxed sessions so learning was protected, not optional\n* Designed to build both skills and relationships",
          "This became a real signal that growth and mentorship were part of how we operate.",
        ],
      },
      {
        label: "VALIDATE",
        heading: "Making the systems real, then improving them as headcount accelerated",
        paragraphs: [
          "We validated everything in real cycles, then iterated based on feedback from interviewers, new joiners, and managers.",
          "What I looked for:\n* Does this reduce confusion or add it\n* Are decisions clearer and more consistent\n* Are new joiners ramping with less friction\n* Do people still feel connected to the org\n* Is craft staying visible as teams multiply",
          "Because we treated these systems like products, they stayed alive instead of becoming stale documentation.",
        ],
      },
    ],
    outcomes: [
      {
        metric: "7 → 130",
        description: "team growth",
      },
      {
        metric: "20 months",
        description: "hypergrowth timeframe",
      },
      {
        metric: "12 → 3 weeks",
        description: "time to confident onboarding",
      },
      {
        metric: "2 per month",
        description: "UX community and peer calls",
      },
    ],
    reflection: "This work reinforced something I believe deeply. You cannot scale culture by hoping it survives. You have to design it.\n\nThe biggest shift was treating org growth like a design problem. I balanced structure with humanity, so people had clarity without losing autonomy. If I were expanding this in the future, I would add lightweight measurement earlier, especially around onboarding effectiveness and community health, so the impact is visible even to leaders outside the design org.",
    nextSlug: "ai-dashboard-redesign",
    nextTitle: "AI Dashboard Redesign",
  },
];

export const caseStudyNav = caseStudies.map((study) => ({
  slug: study.slug,
  label: study.title,
  type: study.type === "hands-on" ? "Hands-On" : "Leadership",
}));

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
