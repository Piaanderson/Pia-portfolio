"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

type CaseStudyNavItem = {
  slug: string;
  label: string;
  type: string;
};

export function CaseStudySidebar({
  currentSlug,
  caseStudies,
}: {
  currentSlug: string;
  caseStudies: CaseStudyNavItem[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Focus management: move focus into sidebar on open, return on close
  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(() => sidebarRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <>
      {/* ---- Mobile toggle button (bottom-left floating) ---- */}
      <button
        ref={triggerRef}
        onClick={() => setMobileOpen(true)}
        className="sidebar-fab fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full md:hidden"
        aria-label="Open case study navigation"
        aria-expanded={mobileOpen}
      >
        <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
      </button>

      {/* ---- Mobile overlay ---- */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          role="presentation"
          aria-hidden="true"
        />
      )}

      {/* ---- Sidebar ---- */}
      <aside
        ref={sidebarRef}
        aria-label="Case studies"
        tabIndex={-1}
        className={`sidebar-panel fixed left-0 top-0 z-[70] flex h-full w-[260px] flex-col border-r border-border/30 pt-[72px] transition-transform duration-300 md:z-40 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Close navigation"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex flex-col gap-1 px-6 pt-6">
          {/* Case study links */}
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Case Studies
          </p>
          {caseStudies.map((item) => (
            <Link
              key={item.slug}
              href={`/case-study/${item.slug}`}
              onClick={() => setMobileOpen(false)}
              aria-current={item.slug === currentSlug ? "page" : undefined}
              className={`group flex flex-col rounded-lg px-3 py-3 text-sm transition-all ${
                item.slug === currentSlug
                  ? "bg-secondary/80 text-foreground"
                  : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
              }`}
            >
              <span className="font-medium leading-snug">{item.label}</span>
              <span
                className={`mt-0.5 text-[10px] uppercase tracking-wider ${
                  item.slug === currentSlug
                    ? "text-pink"
                    : "text-muted-foreground/60"
                }`}
              >
                {item.type}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom: resume link */}
        <div className="mt-auto border-t border-border/20 px-6 py-5">
          <a
            href="/Pia_Anderson_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}
