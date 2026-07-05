"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/lib/site";

export default function AboutPage() {
  // Scroll reveal
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      htmlEl.style.transition =
        "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans), 'Hanken Grotesk', sans-serif",
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--pa-bg)",
        color: "var(--pa-text)",
        overflowX: "hidden",
        transition: "background-color .4s ease, color .4s ease",
      }}
    >
      {/* Ambient gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 440,
          background: "var(--pa-amb)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section
        className="about-page-section"
        data-reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "400px 1fr",
          gap: 54,
          padding: "110px 40px 0",
          alignItems: "start",
        }}
      >
        {/* Photo column */}
        <div style={{ position: "relative" }}>
          {/* Warm glow behind photo */}
          <div
            style={{
              position: "absolute",
              inset: "-6% -8% -5%",
              background: "var(--pa-warmGlow)",
              filter: "blur(34px)",
              zIndex: 0,
              borderRadius: 18,
            }}
          />
          {/* Photo container */}
          <div
            className="about-hero-photo"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: 660,
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 26px 60px var(--pa-shadow)",
            }}
          >
            <Image
              src="/images/pia-office.jpg"
              alt="Pia Anderson"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 22%" }}
              priority
            />
            {/* Vignette overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(120% 110% at 50% 32%, transparent 54%, var(--pa-vigEdge) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Text column */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--pa-accent)",
              marginBottom: 18,
            }}
          >
            ABOUT
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), Newsreader, serif",
              fontSize: 62,
              fontWeight: 500,
              lineHeight: 0.98,
              letterSpacing: -1,
              color: "var(--pa-text)",
              marginBottom: 34,
            }}
          >
            Pia Anderson
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              letterSpacing: -0.1,
              color: "var(--pa-text)",
              marginBottom: 26,
            }}
          >
            I started my career as a designer who could not stop asking why the
            systems behind the screen were so much harder to use than they needed
            to be. Twenty years later, that question still drives everything I
            do.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--pa-body)",
              marginBottom: 24,
            }}
          >
            At PwC, I have grown a design team from seven to over 130,
            established UX as a discipline inside a tax technology group that had
            never employed a designer, and led the design of AI platforms now
            deployed across the firm. Before that, I directed teams through a
            full airline rebrand at American Airlines and designed operational
            software at projekt202 that changed how Southwest Airlines recovers
            from weather disruptions.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--pa-body)",
              margin: 0,
            }}
          >
            What I keep coming back to is the space between systems. The places
            where tools do not talk to each other, where teams work in silos, and
            where users build workarounds because nobody designed the
            connections. That is where I do my best work. Today, I am shaping how
            enterprise teams work with AI, both as a design leader guiding 80
            designers toward code-first delivery and as a practitioner who opens
            pull requests, responds to code reviews, and ships her own front-end
            work.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section
        className="about-page-section"
        data-reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "400px 1fr",
          gap: 54,
          padding: "56px 40px 0",
          alignItems: "start",
        }}
      >
        {/* Label column */}
        <p
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "var(--pa-muted)",
            paddingTop: 4,
          }}
        >
          BACKGROUND
        </p>

        {/* Content column */}
        <div>
          {/* Hairline divider */}
          <div
            style={{
              height: 1,
              background: "var(--pa-border)",
              marginBottom: 30,
            }}
          />

          <div
            className="about-bg-inner-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
          >
            {/* Education */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--pa-muted)",
                  marginBottom: 16,
                }}
              >
                EDUCATION
              </p>
              <div style={{ marginBottom: 14 }}>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "var(--pa-text2)",
                  }}
                >
                  Communication Design
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--pa-muted2)",
                    marginTop: 2,
                  }}
                >
                  University of North Texas
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "var(--pa-text2)",
                  }}
                >
                  Multi Media and Animation
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--pa-muted2)",
                    marginTop: 2,
                  }}
                >
                  Art Institute of Dallas
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--pa-muted)",
                  marginBottom: 16,
                }}
              >
                CERTIFICATIONS
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "var(--pa-text2)",
                  marginBottom: 14,
                }}
              >
                IAAP Certified Professional in Accessibility Core Competencies
                (CPACC)
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "var(--pa-text2)",
                }}
              >
                Nielsen Norman Group UX Master Certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section
        className="about-page-section"
        data-reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "400px 1fr",
          gap: 54,
          padding: "56px 40px 84px",
          alignItems: "start",
        }}
      >
        {/* Label column */}
        <p
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "var(--pa-muted)",
            paddingTop: 8,
          }}
        >
          CONNECT
        </p>

        {/* Content column */}
        <div>
          {/* Hairline divider */}
          <div
            style={{
              height: 1,
              background: "var(--pa-border)",
              marginBottom: 30,
            }}
          />

          <h2
            style={{
              fontFamily: "var(--font-serif), Newsreader, serif",
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: -0.5,
              color: "var(--pa-text)",
              marginBottom: 14,
            }}
          >
            Let&apos;s talk
          </h2>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              color: "var(--pa-body)",
              maxWidth: "30em",
              marginBottom: 24,
            }}
          >
            If you want to talk about design leadership, AI-first delivery, or
            what I could bring to your team, I am easy to find.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/in/uxpiaanderson/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--pa-ctaBg)",
                color: "var(--pa-ctaText)",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 21px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              LinkedIn
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="mailto:pia@piaanderson.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid var(--pa-bstrong)",
                color: "var(--pa-text)",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 21px",
                borderRadius: 999,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              pia@piaanderson.com
            </a>
            <a
              href={RESUME_HREF}
              download={RESUME_DOWNLOAD_NAME}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid var(--pa-bstrong)",
                color: "var(--pa-text)",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 21px",
                borderRadius: 999,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              Resume
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .about-page-section {
            grid-template-columns: 1fr !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .about-hero-photo {
            height: 300px !important;
          }
          .about-bg-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}
