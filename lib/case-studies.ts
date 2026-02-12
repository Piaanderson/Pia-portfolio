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

const sharedSections: NarrativeSection[] = [
  {
    label: "DISCOVER",
    heading: "Understanding who we were really designing for",
    paragraphs: [
      "The existing platform tried to serve everyone and ended up serving no one. Power users felt slowed down by guardrails, while newcomers drowned in data density. Before touching a single wireframe, I needed to understand the mental models at play.",
      "I conducted 24 user interviews across 4 customer segments--data scientists, business analysts, C-suite executives, and operations managers. Each group had fundamentally different needs, vocabulary, and thresholds for complexity.",
      "The interviews revealed something critical: the problem was not too many features, it was that the interface made no distinction between a first-time viewer and a daily power user.",
    ],
    image: {
      src: "/images/case-study-research.jpg",
      alt: "Research synthesis wall with affinity-mapped findings",
      caption:
        "Affinity mapping findings from 24 user interviews across 4 segments.",
    },
    testimonial: {
      quote:
        "Pia has this rare ability to sit with ambiguity during research without rushing to solutions. The depth of understanding she built before designing a single screen is what made the final product so strong.",
      name: "Jordan Mercer",
      title: "VP of Product, Client Organization",
    },
  },
  {
    label: "FRAME",
    heading: "A progressive disclosure framework",
    paragraphs: [
      "The core insight from research was that every user falls on a spectrum of analytical sophistication--and their needs change over time. A rigid beginner/expert toggle would not work.",
      "Instead, I developed a progressive disclosure framework that organized every feature into three tiers based on frequency of use and user maturity. Tier 1 included the daily essentials visible to everyone by default. Tier 2 surfaced weekly workflows that appeared contextually. Tier 3 held advanced configuration and deep analytics, accessible but never in the way.",
      "This framework became the shared language between design and engineering for every decision that followed.",
    ],
    principles: [
      {
        title: "Contextual complexity",
        description:
          "Features reveal themselves when the user's context signals readiness, not through menus or toggles.",
      },
      {
        title: "No dead ends",
        description:
          "Every simplified view includes a clear path to the full-power version when needed.",
      },
      {
        title: "AI as invisible guide",
        description:
          "The system observes behavior patterns and adapts the interface over time--without the user needing to configure anything.",
      },
    ],
  },
  {
    label: "DESIGN",
    heading: "From wireframes to a living prototype",
    paragraphs: [
      "I designed an AI-assisted onboarding flow that adapted to user behavior, surfacing relevant features at the right moment rather than front-loading a tutorial. The first session was completely restructured: instead of a feature tour, users encountered a guided first task that taught the interface through doing.",
      "I worked through 3 rounds of increasing fidelity--starting with paper sketches to nail information hierarchy, moving to interactive Figma prototypes for flow validation, and finally building a coded prototype with the engineering team to test real data scenarios.",
      "Each round was tested with users from all 4 segments.",
    ],
    image: {
      src: "/images/case-study-prototype.jpg",
      alt: "High-fidelity prototype of the redesigned dashboard",
      caption:
        "The final dashboard design adapting its layout based on user tier and behavior.",
    },
    testimonial: {
      quote:
        "What impressed me most was how Pia brought engineering in early. By the time we were building, there were no surprises. The prototype she created with our team was nearly production-ready.",
      name: "Sam Okafor",
      title: "Senior Engineering Manager",
    },
  },
  {
    label: "VALIDATE",
    heading: "Measuring what matters",
    paragraphs: [
      "We ran a 3-week beta with 200 users split across the old and new experiences. The results validated every design decision--but also surfaced two areas where power users needed additional keyboard shortcuts we had not anticipated. We iterated in-sprint and re-tested before full rollout.",
      "Beyond the quantitative wins, the qualitative feedback shift was even more telling. Support tickets about \"I can't find X\" dropped by 75%. Users stopped asking for training sessions and started exploring on their own.",
    ],
  },
];

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
      "Understand who we were really designing for through deep user research across 4 segments.",
  },
  {
    label: "FRAME",
    description:
      "Develop a progressive disclosure framework that organizes complexity into three tiers of user maturity.",
  },
  {
    label: "DESIGN",
    description:
      "Move from sketches to interactive prototypes, testing at each fidelity level with real users.",
  },
  {
    label: "VALIDATE",
    description:
      "Run a controlled beta with 200 users, measure impact, iterate on feedback before full rollout.",
  },
];

const sharedReflection =
  "This project reinforced my belief that the best AI-powered tools are the ones that get out of the way. The biggest unlock was not adding more intelligence to the interface--it was removing decisions the user did not need to make. The AI worked best when it was invisible, quietly adapting the experience to each user's context. If I could do one thing differently, I would have started the engineering prototype collaboration even earlier. The technical feasibility conversations in phase 3 were invaluable, and having them sooner would have accelerated the whole timeline.";

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
      "Agent creation was trapped behind Python experts. In summer 2025, three teams were independently building agent tooling, but all three were Python-first. That meant the people with the clearest use cases, consultants and business teams, were effectively locked out. Bringing their ideas to life was dependent on a small pool of technical experts to create agents and workflows.\n\nI partnered with a Director-level PM and the architects across the three teams to democratize agent creation: a single, business-friendly workflow builder that let non-technical users author, test, and reuse agentic workflows--while still supporting advanced users when they needed deeper control.",
    impact:
      "Reduced new-user onboarding from 2 weeks to 3 days while maintaining a 92% satisfaction score among power users.",
    role: "Lead Designer (IC)",
    team: "2 designers, 1 researcher, 6 engineers",
    timeline: "4 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: sharedFrameworkParts,
    sections: sharedSections,
    outcomes: sharedOutcomes,
    reflection: sharedReflection,
    nextSlug: "design-system-scale",
    nextTitle: "Design System at Scale",
  },
  {
    slug: "design-system-scale",
    title: "Design System at Scale",
    subtitle: "Cross-Platform Component Library",
    description:
      "Built and scaled a design system adopted by 12 product teams, reducing design-to-dev handoff time by 60% and establishing a shared design language across web and mobile.",
    image: "/images/case-study-design-system.jpg",
    tags: ["Design Systems", "Leadership", "Ops"],
    type: "leadership",
    heroImage: "/images/case-study-design-system.jpg",
    intro:
      "A Fortune 500 client needed their AI analytics platform redesigned to serve both technical and non-technical users. The existing dashboard was powerful but impenetrable--new users took 2 weeks of training before they could complete basic tasks. Within a year I led the end-to-end redesign, from research through final delivery, creating a system that adapts to each user's level of expertise.",
    impact:
      "Reduced new-user onboarding from 2 weeks to 3 days while maintaining a 92% satisfaction score among power users.",
    role: "Lead Designer (IC)",
    team: "2 designers, 1 researcher, 6 engineers",
    timeline: "4 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: sharedFrameworkParts,
    sections: sharedSections,
    outcomes: sharedOutcomes,
    reflection: sharedReflection,
    nextSlug: "team-transformation",
    nextTitle: "Team Transformation",
  },
  {
    slug: "team-transformation",
    title: "UX Team Transformation",
    subtitle: "Org Design & Culture",
    description:
      "Grew a UX team from 3 to 18 designers, establishing career ladders, rituals, and a research practice that elevated design's influence at the executive level.",
    image: "/images/case-study-leadership.jpg",
    tags: ["Team Building", "Mentorship", "Culture"],
    type: "leadership",
    heroImage: "/images/case-study-leadership.jpg",
    intro:
      "A Fortune 500 client needed their AI analytics platform redesigned to serve both technical and non-technical users. The existing dashboard was powerful but impenetrable--new users took 2 weeks of training before they could complete basic tasks. Within a year I led the end-to-end redesign, from research through final delivery, creating a system that adapts to each user's level of expertise.",
    impact:
      "Reduced new-user onboarding from 2 weeks to 3 days while maintaining a 92% satisfaction score among power users.",
    role: "Lead Designer (IC)",
    team: "2 designers, 1 researcher, 6 engineers",
    timeline: "4 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: sharedFrameworkParts,
    sections: sharedSections,
    outcomes: sharedOutcomes,
    reflection: sharedReflection,
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
