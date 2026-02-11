import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Menu } from "lucide-react";
import type { Metadata } from "next";
import { PasswordGate } from "@/components/password-gate";
import { CaseStudySidebar } from "@/components/case-study-sidebar";

/* ------------------------------------------------------------------ */
/*  Data types                                                         */
/* ------------------------------------------------------------------ */

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type NarrativeSection = {
  label: string;
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string; caption?: string };
  testimonial?: Testimonial;
  principles?: { title: string; description: string }[];
};

type CaseStudyData = {
  slug: string;
  title: string;
  subtitle: string;
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

/* ------------------------------------------------------------------ */
/*  Case study catalogue                                               */
/* ------------------------------------------------------------------ */

const caseStudyNav = [
  { slug: "ai-dashboard-redesign", label: "AI Dashboard Redesign", type: "Hands-On" },
  { slug: "design-system-scale", label: "Design System at Scale", type: "Hands-On" },
  { slug: "team-transformation", label: "Team Transformation", type: "Leadership" },
];

const caseStudies: Record<string, CaseStudyData> = {
  "ai-dashboard-redesign": {
    slug: "ai-dashboard-redesign",
    title: "Redesigning an AI Analytics Platform for Every User",
    subtitle: "Enterprise SaaS Platform",
    type: "hands-on",
    heroImage: "/images/case-study-ai-dashboard.jpg",
    intro:
      "A Fortune 500 client needed their AI analytics platform redesigned to serve both technical and non-technical users. The existing dashboard was powerful but impenetrable\u2014new users took 2 weeks of training before they could complete basic tasks. Within a year I led the end-to-end redesign, from research through final delivery, creating a system that adapts to each user\u2019s level of expertise.",
    impact:
      "Reduced new-user onboarding from 2 weeks to 3 days while maintaining a 92% satisfaction score among power users.",
    role: "Lead Designer (IC)",
    team: "2 designers, 1 researcher, 6 engineers",
    timeline: "4 months",
    frameworkIntro: "My approach to this redesign had four phases:",
    frameworkParts: [
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
    ],
    sections: [
      {
        label: "DISCOVER",
        heading: "Understanding who we were really designing for",
        paragraphs: [
          "The existing platform tried to serve everyone and ended up serving no one. Power users felt slowed down by guardrails, while newcomers drowned in data density. Before touching a single wireframe, I needed to understand the mental models at play.",
          "I conducted 24 user interviews across 4 customer segments\u2014data scientists, business analysts, C-suite executives, and operations managers. Each group had fundamentally different needs, vocabulary, and thresholds for complexity.",
          "The interviews revealed something critical: the problem wasn\u2019t too many features, it was that the interface made no distinction between a first-time viewer and a daily power user.",
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
          "The core insight from research was that every user falls on a spectrum of analytical sophistication\u2014and their needs change over time. A rigid beginner/expert toggle wouldn\u2019t work.",
          "Instead, I developed a progressive disclosure framework that organized every feature into three tiers based on frequency of use and user maturity. Tier 1 included the daily essentials visible to everyone by default. Tier 2 surfaced weekly workflows that appeared contextually. Tier 3 held advanced configuration and deep analytics, accessible but never in the way.",
          "This framework became the shared language between design and engineering for every decision that followed.",
        ],
        principles: [
          {
            title: "Contextual complexity",
            description:
              "Features reveal themselves when the user\u2019s context signals readiness, not through menus or toggles.",
          },
          {
            title: "No dead ends",
            description:
              "Every simplified view includes a clear path to the full-power version when needed.",
          },
          {
            title: "AI as invisible guide",
            description:
              "The system observes behavior patterns and adapts the interface over time\u2014without the user needing to configure anything.",
          },
        ],
      },
      {
        label: "DESIGN",
        heading: "From wireframes to a living prototype",
        paragraphs: [
          "I designed an AI-assisted onboarding flow that adapted to user behavior, surfacing relevant features at the right moment rather than front-loading a tutorial. The first session was completely restructured: instead of a feature tour, users encountered a guided first task that taught the interface through doing.",
          "I worked through 3 rounds of increasing fidelity\u2014starting with paper sketches to nail information hierarchy, moving to interactive Figma prototypes for flow validation, and finally building a coded prototype with the engineering team to test real data scenarios.",
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
          "We ran a 3-week beta with 200 users split across the old and new experiences. The results validated every design decision\u2014but also surfaced two areas where power users needed additional keyboard shortcuts we hadn\u2019t anticipated. We iterated in-sprint and re-tested before full rollout.",
          "Beyond the quantitative wins, the qualitative feedback shift was even more telling. Support tickets about \u201cI can\u2019t find X\u201d dropped by 75%. Users stopped asking for training sessions and started exploring on their own.",
        ],
      },
    ],
    outcomes: [
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
        description:
          "post-launch satisfaction score from existing power users",
      },
      {
        metric: "2x",
        description:
          "increase in daily active usage of advanced analytics features",
      },
    ],
    reflection:
      "This project reinforced my belief that the best AI-powered tools are the ones that get out of the way. The biggest unlock wasn\u2019t adding more intelligence to the interface\u2014it was removing decisions the user didn\u2019t need to make. The AI worked best when it was invisible, quietly adapting the experience to each user\u2019s context. If I could do one thing differently, I\u2019d have started the engineering prototype collaboration even earlier. The technical feasibility conversations in phase 3 were invaluable, and having them sooner would have accelerated the whole timeline.",
    nextSlug: "design-system-scale",
    nextTitle: "Design System at Scale",
  },
};

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  return {
    title: study
      ? `${study.title} | Pia Anderson`
      : "Case Study | Pia Anderson",
    description: study?.intro?.slice(0, 160),
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "none" as const,
        "max-snippet": -1,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            Case Study Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            {"This case study doesn't exist yet."}
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-pink hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      {/* ================================================================ */}
      {/*  TOP HEADER — matches homepage nav exactly                       */}
      {/* ================================================================ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: "hsla(228, 40%, 8%, 0.4)",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          borderBottom: "1px solid hsla(228, 30%, 40%, 0.2)",
          boxShadow:
            "0 1px 0 0 hsla(220, 80%, 70%, 0.06), inset 0 -1px 0 0 hsla(270, 60%, 60%, 0.05)",
        }}
      >
        {/* Logo area — aligns with sidebar px-6 */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/images/pia-logo.png"
              alt="Pia Anderson"
              width={40}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Right side nav items */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Return to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
            <a
              href="/Pia_Anderson_Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ================================================================ */}
      {/*  LEFT SIDEBAR (desktop) + mobile drawer via client component     */}
      {/* ================================================================ */}
      <CaseStudySidebar currentSlug={slug} caseStudies={caseStudyNav} />

      {/* ================================================================ */}
      {/*  MAIN CONTENT: Shifted right on large screens                    */}
      {/* ================================================================ */}
      <div className="md:pl-[260px]">
        <PasswordGate>
          {/* ---- HERO ---- */}
          <section className="px-6 pt-28 pb-4 md:px-10 md:pt-36 md:pb-8">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {study.subtitle} &middot; {study.type === "hands-on" ? "Hands-On" : "Leadership"}
              </p>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] text-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance">
                {study.title}
              </h1>
            </div>
          </section>

          {/* ---- INTRO + METADATA ---- */}
          <section className="px-6 py-12 md:px-10 md:py-20">
            <div className="max-w-5xl">
              <p className="max-w-3xl text-lg leading-[1.75] text-foreground/80 md:text-xl md:leading-[1.75]">
                {study.intro}
              </p>

              <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-[3fr_2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Impact
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-foreground">
                    {study.impact}
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  {[
                    { label: "Role", value: study.role },
                    { label: "Team", value: study.team },
                    { label: "Timeline", value: study.timeline },
                  ].map((meta) => (
                    <div key={meta.label}>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {meta.label}
                      </p>
                      <p className="mt-2 text-base text-foreground">{meta.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---- FRAMEWORK ---- */}
          <section className="px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-5xl">
              <div className="glass rounded-2xl p-10 md:p-14">
                <p className="font-serif text-xl font-medium text-foreground md:text-2xl lg:text-3xl leading-snug text-balance">
                  {study.frameworkIntro}
                </p>
                <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
                  {study.frameworkParts.map((part, i) => (
                    <div key={part.label} className="flex gap-5">
                      <span className="text-3xl font-bold gradient-text flex-shrink-0 leading-none">
                        {i + 1}.
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-pink">
                          {part.label}
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                          {part.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---- NARRATIVE SECTIONS ---- */}
          {study.sections.map((section, i) => (
            <section
              key={i}
              className="px-6 py-16 md:px-10 md:py-24 border-t border-border/30"
            >
              <div className="max-w-5xl">
                <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                  {/* Left: label + heading, sticky */}
                  <div className="md:sticky md:top-24 md:self-start">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                      {section.label}
                    </p>
                    <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-foreground md:text-3xl lg:text-4xl text-balance">
                      {section.heading}
                    </h2>
                  </div>

                  {/* Right: prose */}
                  <div className="flex flex-col gap-8">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-lg leading-[1.75] text-foreground/80">
                        {p}
                      </p>
                    ))}

                    {section.image && (
                      <figure className="mt-4">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                          <Image
                            src={section.image.src || "/placeholder.svg"}
                            alt={section.image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {section.image.caption && (
                          <figcaption className="mt-3 text-sm text-muted-foreground">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {section.principles && (
                      <div className="mt-4 flex flex-col gap-5">
                        {section.principles.map((principle) => (
                          <div
                            key={principle.title}
                            className="glass glass-hover rounded-xl p-6 md:p-8"
                          >
                            <h3 className="text-base font-semibold text-foreground">
                              {principle.title}
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                              {principle.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.testimonial && (
                      <blockquote className="mt-4 glass rounded-xl p-8 md:p-10">
                        <p className="text-xl leading-relaxed text-foreground/90 italic md:text-2xl md:leading-relaxed">
                          &ldquo;{section.testimonial.quote}&rdquo;
                        </p>
                        <footer className="mt-6 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-muted-foreground">
                            {section.testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-base font-semibold text-foreground">
                              {section.testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {section.testimonial.title}
                            </p>
                          </div>
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ---- OUTCOMES ---- */}
          <section className="px-6 py-16 md:px-10 md:py-24 border-t border-border/30">
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    Results
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    Outcomes
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome.metric}
                      className="glass glass-hover rounded-xl p-8"
                    >
                      <p className="text-4xl font-bold gradient-text md:text-5xl">
                        {outcome.metric}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---- REFLECTION ---- */}
          <section className="px-6 py-16 md:px-10 md:py-24 border-t border-border/30">
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    Looking Back
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    Reflection
                  </h2>
                </div>
                <p className="text-lg leading-[1.75] text-foreground/80">
                  {study.reflection}
                </p>
              </div>
            </div>
          </section>

          {/* ---- NEXT CASE STUDY ---- */}
          {study.nextSlug && (
            <section className="px-6 pt-4 pb-24 md:px-10">
              <div className="max-w-5xl">
                <Link
                  href={`/case-study/${study.nextSlug}`}
                  className="glass glass-hover group flex items-center justify-between rounded-2xl p-8 md:p-12"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Next Case Study
                    </p>
                    <p className="mt-2 font-serif text-xl font-bold text-foreground md:text-2xl">
                      {study.nextTitle}
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-pink" />
                </Link>
              </div>
            </section>
          )}
        </PasswordGate>
      </div>
    </main>
  );
}
