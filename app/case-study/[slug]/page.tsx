import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import { caseStudyNav, getCaseStudyBySlug } from "@/lib/case-studies";
import type { ImagePlacement, QuoteBlock } from "@/lib/case-studies";
import { CaseStudyLightbox } from "@/components/case-study-lightbox";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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
    description: study?.hero.headline?.slice(0, 160),
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
/*  Shared Components                                                   */
/* ------------------------------------------------------------------ */

function ImageBlock({ image }: { image: ImagePlacement }) {
  if (image.src) {
    return (
      <CaseStudyLightbox
        src={image.src}
        alt={image.alt}
        caption={image.caption}
      />
    );
  }

  return (
    <figure className="mt-6">
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-muted/20">
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <ImageIcon
            className="h-10 w-10 text-muted-foreground/40"
            aria-hidden="true"
          />
          <p className="max-w-sm text-sm text-muted-foreground/60">
            {image.placeholder || image.alt}
          </p>
        </div>
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function QuoteCallout({ quote }: { quote: QuoteBlock }) {
  if (quote.placeholder || /\bTBD\b/i.test(quote.quote)) {
    return null;
  }

  return (
    <blockquote className="mt-8 glass rounded-xl p-8 md:p-10">
      <p className="text-xl leading-relaxed text-foreground/90 italic md:text-2xl md:leading-relaxed">
        &ldquo;{quote.quote}&rdquo;
      </p>
      {quote.attribution && (
        <footer className="mt-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-muted-foreground">
            {quote.attribution
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">
              {quote.attribution}
            </p>
            {quote.role && (
              <p className="text-sm text-muted-foreground">{quote.role}</p>
            )}
          </div>
        </footer>
      )}
    </blockquote>
  );
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
    notFound();
  }

  return (
    <main id="main-content" className="relative flex min-h-screen flex-col">
      <Navigation />

      <CaseStudySidebar currentSlug={slug} caseStudies={caseStudyNav} />

      <div className="flex flex-1 flex-col md:pl-[260px]">
        {/* ---- HERO ---- */}
        <section className="px-6 pt-28 pb-4 md:px-10 md:pt-32 md:pb-8">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {study.subtitle}
              </p>

              {study.hero.status && (
                <span className="mt-3 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  {study.hero.status}
                </span>
              )}

              <h1 className="mt-5 font-serif text-3xl font-bold leading-[1.12] text-foreground md:text-4xl lg:text-5xl text-balance">
                {study.hero.headline}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                {study.hero.subhead}
              </p>

              {study.hero.metricCallout && (
                <div className="mt-8 glass rounded-xl p-6 md:p-8">
                  <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    {study.hero.metricCallout.text}
                  </p>
                  {study.hero.metricCallout.source && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Source: {study.hero.metricCallout.source}
                    </p>
                  )}
                </div>
              )}

              {study.hero.image && (
                <div className="mt-10">
                  {study.hero.image.src ? (
                    <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={study.hero.image.src}
                          alt={study.hero.image.alt}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                      </div>
                    </div>
                  ) : (
                    <ImageBlock image={study.hero.image} />
                  )}
                </div>
              )}
            </div>
        </section>

        {/* ---- THE PROBLEM ---- */}
        <section className="px-6 py-12 md:px-10 md:py-16 border-t border-border/30">
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    {study.problem.sideLabel || "Context"}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    {study.problem.heading || "The Problem"}
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  {study.problem.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg leading-[1.75] text-foreground/80 md:text-xl md:leading-[1.75]"
                    >
                      {p}
                    </p>
                  ))}
                  {study.problem.image && (
                    <ImageBlock image={study.problem.image} />
                  )}
                  {study.problem.contextCallout && (
                    <aside className="mt-4 rounded-xl border-l-4 border-pink/40 bg-pink/5 p-6 md:p-8">
                      <p className="text-base leading-relaxed text-foreground/80">
                        {study.problem.contextCallout}
                      </p>
                    </aside>
                  )}
                </div>
              </div>
            </div>
        </section>

        {/* ---- MY ROLE ---- */}
        {study.role.paragraphs.length > 0 && (
        <section className="px-6 py-12 md:px-10 md:py-16 border-t border-border/30">
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    Contribution
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    My Role
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  {study.role.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg leading-[1.75] text-foreground/80 md:text-xl md:leading-[1.75]"
                    >
                      {p}
                    </p>
                  ))}
                  {study.role.contextCallout && (
                    <aside className="mt-4 rounded-xl border-l-4 border-pink/40 bg-pink/5 p-6 md:p-8">
                      <p className="text-base leading-relaxed text-foreground/80">
                        {study.role.contextCallout}
                      </p>
                    </aside>
                  )}
                </div>
              </div>
            </div>
        </section>
        )}

        {/* ---- DECISIONS ---- */}
        {study.decisions.map((decision, i) => (
          <section
            key={i}
            className="px-6 py-16 md:px-10 md:py-24 border-t border-border/30"
          >
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    {decision.subtitle || `Decision ${i + 1}`}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-foreground md:text-3xl lg:text-4xl text-balance">
                    {decision.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {decision.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-lg leading-[1.75] text-foreground/80"
                    >
                      {p}
                    </p>
                  ))}

                  {decision.image && <ImageBlock image={decision.image} />}

                  {decision.reflectionCallout && (
                    <aside className="mt-4 rounded-xl border-l-4 border-pink/40 bg-pink/5 p-6 md:p-8">
                      <p className="text-base leading-relaxed text-foreground/80">
                        {decision.reflectionCallout}
                      </p>
                    </aside>
                  )}

                  {decision.quote && (
                    <QuoteCallout quote={decision.quote} />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ---- OUTCOMES ---- */}
        {(study.outcomes.metrics.length > 0 || (study.outcomes.prose && study.outcomes.prose.length > 0)) && (
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
                <div className="flex flex-col gap-8">
                  {study.outcomes.metrics.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {study.outcomes.metrics.map((metric, i) => (
                        <div key={i} className="glass rounded-xl p-6 md:p-8">
                          <p className="text-sm font-bold uppercase tracking-widest text-pink">
                            {metric.label}
                          </p>
                          <p className="mt-3 text-lg leading-relaxed text-foreground/90">
                            {metric.value}
                          </p>
                          {metric.source && (
                            <p className="mt-2 text-xs text-muted-foreground">
                              Source: {metric.source}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {study.outcomes.prose &&
                    study.outcomes.prose.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg leading-[1.75] text-foreground/80"
                      >
                        {p}
                      </p>
                    ))}

                  {study.outcomes.quote && (
                    Array.isArray(study.outcomes.quote)
                      ? study.outcomes.quote.map((q, i) => (
                          <QuoteCallout key={i} quote={q} />
                        ))
                      : <QuoteCallout quote={study.outcomes.quote} />
                  )}
                </div>
              </div>
            </div>
        </section>
        )}

        {/* ---- REFLECTION ---- */}
        <section className="px-6 py-16 md:px-10 md:py-24 border-t border-border/30">
            <div className="max-w-5xl">
              <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
                    Looking Back
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    {study.reflection.heading || "Reflection"}
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  {study.reflection.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg leading-[1.75] text-foreground/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* ---- NEXT CASE STUDY ---- */}
        {study.nextSlug &&
          (() => {
            const nextStudy = getCaseStudyBySlug(study.nextSlug);
            const nextLabel = nextStudy?.title;
            return nextLabel ? (
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
                        {nextLabel}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-pink"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </section>
            ) : null;
          })()}
      </div>

      <Footer insetForSidebar />
    </main>
  );
}
