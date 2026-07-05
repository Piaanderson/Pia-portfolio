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

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll("[data-reveal]");

    if (prefersReduced) {
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      observer.observe(el);
    });

    // Safety fallback
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      });
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
    <div>
      {/* Fixed gradient wave background */}
      <div className="fixed inset-0 z-0" style={{ overflowX: "clip" }}>
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
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            padding: "120px 40px 60px",
            maxWidth: "1040px",
            margin: "0 auto",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12.5px",
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "var(--pa-muted)",
                marginBottom: "26px",
                background: "linear-gradient(90deg, #9b1f76, #e23e7e, #ff9d4d) left bottom/100% 2px no-repeat",
                paddingBottom: "6px",
                display: "inline-block",
              }}
            >
              UX DIRECTOR
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: "74px",
                lineHeight: 0.98,
                letterSpacing: "-1px",
                color: "var(--pa-text)",
                marginBottom: "24px",
              }}
              className="hero-heading"
            >
              Pia Anderson
            </h1>
            <p
              style={{
                fontSize: "18.5px",
                lineHeight: 1.55,
                color: "var(--pa-body)",
                maxWidth: "30em",
                marginBottom: "32px",
              }}
            >
              I lead design teams that deliver in code, not just Figma files. Over 20 years I have built UX practices inside resistant organizations, designed complex operational software, and now I am shaping how enterprise teams work with AI.
            </p>
            <RotatingQuotes />
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid var(--pa-bstrong)",
                  color: "var(--pa-text)",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  background: "transparent",
                }}
              >
                About Pia
              </Link>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "440px",
            }}
          >
            <Image
              src="/images/pia-headshot-circle.jpg"
              alt="Pia Anderson"
              width={380}
              height={380}
              priority
              style={{
                borderRadius: "50%",
                border: "5px solid var(--pa-bg2)",
                boxShadow: "0 22px 48px var(--pa-shadow)",
                position: "relative",
              }}
            />
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="work"
          data-reveal
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "30px 40px 70px",
            scrollMarginTop: "96px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "30px",
              fontWeight: 500,
              color: "var(--pa-text)",
              marginBottom: "28px",
            }}
          >
            Selected Work
          </h2>

          {/* Featured card */}
          <Link
            href={`/case-study/${homepageFeaturedCard.slug}`}
            className="featured-work-card"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--pa-bg2)",
              border: "1px solid var(--pa-border)",
              borderRadius: "16px",
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
              marginBottom: "22px",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,62,126,.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pa-border)";
            }}
          >
            <div
              style={{
                aspectRatio: "16/11",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={homepageFeaturedCard.image}
                alt="Project Forge portfolio overview dashboard"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div
              style={{
                padding: "38px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1.6px",
                    color: "var(--pa-accent)",
                    fontWeight: 600,
                  }}
                >
                  {homepageFeaturedCard.badge}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    color: "var(--pa-muted)",
                    background: "var(--pa-chip)",
                    padding: "3px 9px",
                    borderRadius: "20px",
                  }}
                >
                  <LockIcon />
                  Protected
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "30px",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  color: "var(--pa-text)",
                }}
              >
                {homepageFeaturedCard.title}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--pa-body)" }}>
                {homepageFeaturedCard.desc}
              </p>
              <p style={{ fontSize: "13px", color: "var(--pa-muted2)", fontWeight: 500 }}>
                {homepageFeaturedCard.role}
              </p>
            </div>
          </Link>

          {/* Standard cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
            className="work-cards-grid"
          >
            {homepageWorkCards.map((study) => (
              <Link
                key={study.slug}
                href={`/case-study/${study.slug}`}
                style={{
                  display: "block",
                  background: "var(--pa-bg2)",
                  border: "1px solid var(--pa-border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,62,126,.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--pa-border)";
                }}
              >
                <div style={{ position: "relative", aspectRatio: "16/8" }}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "var(--pa-text)",
                      marginBottom: "8px",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--pa-body)", marginBottom: "12px" }}>
                    {study.desc}
                  </p>
                  <p style={{ fontSize: "12.5px", color: "var(--pa-muted3)", fontWeight: 500, marginBottom: "8px" }}>
                    {study.role}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      color: "var(--pa-muted)",
                      background: "var(--pa-chip)",
                      padding: "3px 9px",
                      borderRadius: "20px",
                    }}
                  >
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
          style={{
            width: "100%",
            padding: "54px 0 64px",
            background: "var(--pa-bg3)",
            borderTop: "1px solid var(--pa-border)",
          }}
        >
          <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 40px" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "30px",
                fontWeight: 500,
                color: "var(--pa-text)",
                marginBottom: "30px",
              }}
            >
              What colleagues say
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "22px",
              }}
              className="testimonials-grid"
            >
              {testimonials.map((t) => (
                <div
                  key={t.initials}
                  className="glass"
                  style={{
                    borderRadius: "16px",
                    padding: "34px 32px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      fontFamily: "var(--font-sans)",
                      fontSize: "17px",
                      lineHeight: 1.55,
                      color: "var(--pa-qtext)",
                      marginBottom: "26px",
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        background: "var(--pa-chip)",
                        border: "1px solid var(--pa-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        color: "var(--pa-muted2)",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: "14.5px", fontWeight: 600, color: "var(--pa-text)", margin: 0 }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: "13px", color: "var(--pa-muted2)", marginTop: "2px", margin: 0 }}>
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
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "54px 40px 60px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "30px",
              fontWeight: 500,
              color: "var(--pa-text)",
              marginBottom: "32px",
            }}
          >
            Toolkit
          </h2>
          {toolkitRows.map((row, i) => (
            <div
              key={row.label}
              className="toolkit-row"
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "32px",
                alignItems: "baseline",
                padding: "18px 0",
                borderTop: "1px solid var(--pa-border)",
                borderBottom: i === toolkitRows.length - 1 ? "1px solid var(--pa-border)" : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: row.accent ? "var(--pa-accent)" : "var(--pa-muted)",
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "var(--pa-text2)",
                }}
              >
                {row.tools}
              </span>
            </div>
          ))}
        </section>

        <Footer />
      </main>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 20px !important;
            gap: 32px !important;
          }
          .hero-heading {
            font-size: 48px !important;
          }
          .work-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-work-card {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .toolkit-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
