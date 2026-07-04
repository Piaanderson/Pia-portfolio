"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Quote {
  text: string;
  name: string;
  title: string;
}

const quotes: Quote[] = [
  {
    text: "Pia has a clarity of mind and attention to detail that are rare, even among UX people.",
    name: "David Jennings",
    title: "UX Director",
  },
  {
    text: "Pia is a rare design talent and a truly empathic advocate for the user.",
    name: "Jimmy Ball",
    title: "Product Design + UX Strategy",
  },
  {
    text: "Her designs deliver value to her users and big ROI.",
    name: "Jaime Maldonado",
    title: "UX Leader",
  },
  {
    text: "Pia has been the most inclusive leader I have worked with.",
    name: "Mitali Kamat",
    title: "UX Researcher",
  },
];

export function RotatingQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const measureHeight = useCallback(() => {
    if (!containerRef.current) return;
    let maxH = 0;
    quoteRefs.current.forEach((el) => {
      if (el) {
        const h = el.scrollHeight;
        if (h > maxH) maxH = h;
      }
    });
    if (maxH > 0) setContainerHeight(maxH);
  }, []);

  useEffect(() => {
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [measureHeight, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonial quotes"
      aria-live="polite"
      aria-atomic="true"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: containerHeight > 0 ? `${containerHeight}px` : undefined,
        marginTop: "36px",
        marginBottom: "36px",
      }}
    >
      {quotes.map((quote, i) => (
        <div
          key={i}
          ref={(el) => { quoteRefs.current[i] = el; }}
          aria-hidden={i !== activeIndex}
          style={{
            position: i === 0 && containerHeight === 0 ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            opacity: i === activeIndex ? 1 : 0,
            transition: mounted ? "opacity 700ms ease-in-out" : "none",
            pointerEvents: i === activeIndex ? "auto" : "none",
          }}
        >
          <blockquote style={{ margin: 0, padding: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: 1.55,
                color: "var(--pa-text)",
                margin: 0,
                maxWidth: "30em",
              }}
            >
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer
              style={{
                marginTop: "14px",
                fontSize: "14.5px",
                color: "var(--pa-muted)",
                fontStyle: "normal",
              }}
            >
              &ndash; {quote.name}, {quote.title}
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
