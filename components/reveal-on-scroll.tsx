"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

type RevealOnScrollProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
};

export function RevealOnScroll({
  as: Component = "div",
  className,
  children,
  id,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      id={id}
      ref={ref}
      className={className ? `reveal-section ${className}` : "reveal-section"}
      data-reveal
    >
      {children}
    </Component>
  );
}
