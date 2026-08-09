"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GradientWave } from "@/components/ui/gradient-wave";
import { RotatingQuotes } from "@/components/rotating-quotes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { homepageFeaturedCard, homepageWorkCards } from "@/lib/case-studies";
import { CASE_STUDY_COOKIE_NAME } from "@/lib/case-study-auth";

const darkColors = ["#030414", "#0a1128", "#130f35", "#030427", "#150d30", "#250c20"];
const lightColors = ["#ffffff", "#f0e8f8", "#e2d4f2", "#d8daf0", "#f0dce8", "#f8e8f0"];

const gradientNoiseFrequency: [number, number] = [0.00009, 0.00018];

const darkDeform = { incline: 0.15, noiseAmp: 90, noiseFlow: 1.2, noiseSpeed: 6 };
const lightDeform = { incline: 0.15, noiseAmp: 90, noiseFlow: 1.6, noiseSpeed: 8 };

const testimonials = [
  {
    initials: "KK",
    name: "Kryssie Knowles",
    role: "PwC · Reimagine the Possible Award",
    quote:
      "Your ability to connect the dots and distill complex things into simple digestible components is uncanny. You are always willing to help, push the boundaries and think out of the box. Keep it up.",
  },
  {
    initials: "JL",
    name: "Jason Lunsford",
    role: "Designer, PwC",
    quote:
      "Being open, honest and human makes you relatable and, at least from my point of view, even easier to respect and appreciate. If I’m ever lucky enough to make Director, I quite frankly hope to be like you. Human.",
  },
  {
    initials: "AC",
    name: "Andrew Carlson",
    role: "Partner, PwC · Work Together Award",
    quote:
      "You are truly, wonderfully easy to work with and your approach to the whole team — bringing us all together regularly, coaxing contributions from multiple people and sharing best practices widely — has made us better. Thank you!",
  },
];

const toolkitRows = [
  { label: "AI-First Delivery", tools: "Claude (Chat, Design, Code) · Cursor · v0 · ChatGPT Enterprise", accent: true },
  { label: "Design", tools: "Figma · Creative Cloud · Miro", accent: false },
  { label: "Development & Ops", tools: "GitHub · ADO · Deque Axe · Stark", accent: false },
];

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkAccess = () =>
      setHasAccess(document.cookie.includes(`${CASE_STUDY_COOKIE_NAME}-unlocked`));
    checkAccess();
    document.addEventListener("visibilitychange", checkAccess);
    window.addEventListener("focus", checkAccess);
    return () => {
      document.removeEventListener("visibilitychange", checkAccess);
      window.removeEventListener("focus", checkAccess);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const showElement = (el: HTMLElement) => el.classList.add("is-visible");

    if (prefersReduced) {
      elements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            showElement(el);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Safety fallback
    const fallbackTimer = setTimeout(() => {
      elements.forEach(showElement);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [mounted]);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const colors = isDark ? darkColors : lightColors;
  const noiseSpeed = isDark ? 0.000005 : 0.00001;
  const deform = isDark ? darkDeform : lightDeform;

  return (
    <div className="overflow-x-clip">
      {/* Fixed gradient wave background */}
      <div className="fixed inset-0 z-0 overflow-x-clip">
        <GradientWave
          key={isDark ? "dark" : "light"}
          colors={colors}
          isPlaying={true}
          shadowPower={4}
          darkenTop={false}
          noiseSpeed={noiseSpeed}
          noiseFrequency={gradientNoiseFrequency}
          deform={deform}
        />
      </div>

      <main id="main-content" className="relative z-10 min-h-screen">
        <Navigation />

        {/* Hero */}
        <section
          data-reveal
          className="hero-grid reveal-section mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-8 px-5 pb-10 pt-[124px] md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-10 md:pb-[60px] md:pt-[120px]"
        >
          <div>
            <p className="role-treatment">
              UX DIRECTOR
            </p>
            <h1 className="hero-heading mb-6 font-serif text-[48px] font-medium leading-[0.98] tracking-[-1px] text-pa-text md:text-[74px]">
              Pia Anderson
            </h1>
            <p className="mb-8 max-w-[30em] text-[18.5px] leading-[1.55] text-pa-body">
              As a child I was always told I asked too many questions. I've turned that nagging curiosity into a career making complex software feel simple for the people who depend on it.
            </p>
            <RotatingQuotes />
            <div className="flex flex-wrap gap-[14px]">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-pa-bstrong bg-transparent px-[22px] py-3 text-[15px] font-semibold text-pa-text no-underline"
              >
                About Pia
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[440px] items-center justify-center">
            <Image
              src="/images/pia-headshot-circle.jpg"
              alt="Pia Anderson"
              width={380}
              height={380}
              priority
              className="relative h-auto w-full max-w-[380px] rounded-full border-[5px] border-pa-bg2 shadow-pa-soft"
            />
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="work"
          data-reveal
          className="reveal-section mx-auto max-w-[1040px] scroll-mt-24 px-10 pb-[70px] pt-[30px]"
        >
          <h2 className="mb-7 font-serif text-[30px] font-medium text-pa-text">
            Selected Work
          </h2>

          {/* Featured card */}
          <Link
            href={`/case-study/${homepageFeaturedCard.slug}`}
            className="featured-work-card mb-[22px] grid grid-cols-1 overflow-hidden rounded-2xl border border-pa-border bg-pa-bg2 text-inherit no-underline transition-colors hover:border-[#e23e7e]/50 md:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={homepageFeaturedCard.image}
                alt="Project Forge portfolio overview dashboard"
                fill
                className={`object-cover transition-[filter] duration-500 ${!hasAccess ? "blur-md" : ""}`}
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-3 px-10 py-[38px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[1.6px] text-pa-accent">
                  {homepageFeaturedCard.badge}
                </span>
                <span className="inline-flex items-center gap-[5px] rounded-[20px] bg-pa-chip px-[9px] py-[3px] text-[11px] text-pa-muted">
                  <LockIcon />
                  Protected
                </span>
              </div>
              <h3 className="font-serif text-[30px] font-semibold leading-[1.05] text-pa-text">
                {homepageFeaturedCard.title}
              </h3>
              <p className="text-base leading-[1.5] text-pa-body">
                {homepageFeaturedCard.desc}
              </p>
              <p className="text-[13px] font-medium text-pa-muted2">
                {homepageFeaturedCard.role}
              </p>
            </div>
          </Link>

          {/* Standard cards grid */}
          <div className="work-cards-grid grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {homepageWorkCards.map((study, idx) => (
              <Link
                key={study.slug}
                href={`/case-study/${study.slug}`}
                className="block overflow-hidden rounded-[14px] border border-pa-border bg-pa-bg2 text-inherit no-underline transition-colors hover:border-[#e23e7e]/40"
              >
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className={`object-cover transition-[filter] duration-500 ${!hasAccess ? "blur-md" : ""}`}
                  />
                </div>
                <div className="px-[26px] pb-7 pt-6">
                  <h3 className="mb-2 font-serif text-[21px] font-semibold text-pa-text">
                    {study.title}
                  </h3>
                  <p className="mb-3 text-sm leading-[1.5] text-pa-body">
                    {study.desc}
                  </p>
                  <p className="mb-2 text-[12.5px] font-medium text-pa-muted3">
                    {study.role}
                  </p>
                  <span className="inline-flex items-center gap-[5px] rounded-[20px] bg-pa-chip px-[9px] py-[3px] text-[11px] text-pa-muted">
                    <LockIcon />
                    Protected
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section
          data-reveal
          className="reveal-section w-full border-t border-pa-border bg-pa-bg3 py-[54px] pb-16"
        >
          <div className="mx-auto max-w-[1040px] px-10">
            <h2 className="mb-[30px] font-serif text-[30px] font-medium text-pa-text">
              What colleagues say
            </h2>
            <div className="testimonials-grid grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.initials}
                  className="glass flex flex-col rounded-2xl px-8 py-[34px]"
                >
                  <p className="mb-[26px] flex-1 text-[17px] italic leading-[1.55] text-pa-qtext">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-pa-border bg-pa-chip text-sm font-semibold tracking-[0.5px] text-pa-muted2">
                      {t.initials}
                    </div>
                    <div>
                      <p className="m-0 text-[14.5px] font-semibold text-pa-text">
                        {t.name}
                      </p>
                      <p className="m-0 mt-[2px] text-[13px] text-pa-muted2">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Toolkit */}
        <section
          data-reveal
          className="reveal-section mx-auto max-w-[1040px] px-10 pb-[60px] pt-[54px]"
        >
          <h2 className="mb-8 font-serif text-[30px] font-medium text-pa-text">
            Toolkit
          </h2>
          {toolkitRows.map((row, i) => (
            <div
              key={row.label}
              className={`toolkit-row grid grid-cols-1 items-baseline gap-2 border-t border-pa-border py-[18px] md:grid-cols-[220px_1fr] md:gap-8 ${i === toolkitRows.length - 1 ? "border-b border-pa-border" : ""}`}
            >
              <span className={`font-mono text-xs font-semibold uppercase tracking-[1.4px] ${row.accent ? "text-pa-accent" : "text-pa-muted"}`}>
                {row.label}
              </span>
              <span className="text-[17px] leading-[1.7] text-pa-text2">
                {row.tools}
              </span>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
