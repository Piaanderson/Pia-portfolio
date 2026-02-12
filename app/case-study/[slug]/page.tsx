import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Menu } from "lucide-react";
import type { Metadata } from "next";
import { PasswordGate } from "@/components/password-gate";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import { caseStudyNav, getCaseStudyBySlug } from "@/lib/case-studies";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
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
  const study = getCaseStudyBySlug(slug);

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
              {study.subhead && (
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                  {study.subhead}
                </p>
              )}
            </div>
          </section>

          {/* ---- INTRO + METADATA ---- */}
          <section className="px-6 py-12 md:px-10 md:py-20">
            <div className="max-w-5xl">
              <div className="max-w-3xl">
                {study.intro.split("\n\n").map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-lg leading-[1.75] text-foreground/80 first:mt-0 md:text-xl md:leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

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
