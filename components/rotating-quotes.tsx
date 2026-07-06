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
      className="relative my-9 w-full"
      style={{ minHeight: containerHeight > 0 ? `${containerHeight}px` : undefined }}
    >
      {quotes.map((quote, i) => (
        <div
          key={i}
          ref={(el) => { quoteRefs.current[i] = el; }}
          aria-hidden={i !== activeIndex}
          className={`${i === 0 && containerHeight === 0 ? "relative" : "absolute"} left-0 top-0 w-full ${i === activeIndex ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} ${mounted ? "transition-opacity duration-700 ease-in-out" : ""}`}
        >
          <blockquote className="m-0 p-0">
            <p className="m-0 max-w-[30em] font-serif text-xl italic leading-[1.55] text-pa-text">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-[14px] text-[14.5px] not-italic text-pa-muted">
              &ndash; {quote.name}, {quote.title}
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
