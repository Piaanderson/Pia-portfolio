"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/lib/site";

type CaseStudyNavItem = {
  slug: string;
  label: string;
  type: string;
};

type SidebarContentProps = {
  currentSlug: string;
  caseStudies: CaseStudyNavItem[];
  onNavigate?: () => void;
};

function SidebarContent({
  currentSlug,
  caseStudies,
  onNavigate,
}: SidebarContentProps) {
  return (
    <>
      <div className="flex flex-col gap-1 px-6 pt-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Case Studies
        </p>
        {caseStudies.map((item) => (
          <Link
            key={item.slug}
            href={`/case-study/${item.slug}`}
            onClick={onNavigate}
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
                item.slug === currentSlug ? "text-pink" : "text-muted-foreground/60"
              }`}
            >
              {item.type}
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom: resume link — height matches footer inner row (86px, 30px vertical padding) */}
      <div className="mt-auto flex min-h-[86px] items-center border-t border-border/20 px-6 py-[30px]">
        <a
          href={RESUME_HREF}
          download={RESUME_DOWNLOAD_NAME}
          className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </>
  );
}

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
  const mobileWasOpen = useRef(false);

  // Focus management: move focus into sidebar on open, return on close
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (mobileOpen) {
      timer = setTimeout(() => sidebarRef.current?.focus(), 50);
    } else if (mobileWasOpen.current && triggerRef.current) {
      triggerRef.current.focus();
    }

    mobileWasOpen.current = mobileOpen;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
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

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      {/* ---- Mobile toggle button (bottom-left floating) ---- */}
      <button
        ref={triggerRef}
        onClick={() => setMobileOpen(true)}
        className="sidebar-fab fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full md:hidden"
        aria-label="Open case study navigation"
        aria-expanded={mobileOpen}
        aria-controls="case-study-sidebar-mobile"
      >
        <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
      </button>

      {/* ---- Mobile overlay ---- */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
          role="presentation"
          aria-hidden="true"
        />
      )}

      {/* ---- Desktop Sidebar ---- */}
      <aside
        aria-label="Case studies"
        className="sidebar-panel fixed left-0 top-0 z-40 hidden h-full w-[260px] flex-col border-r border-border/30 pt-[96px] md:flex"
      >
        <SidebarContent currentSlug={currentSlug} caseStudies={caseStudies} />
      </aside>

      {/* ---- Mobile Sidebar ---- */}
      {mobileOpen && (
        <aside
          id="case-study-sidebar-mobile"
          ref={sidebarRef}
          aria-label="Case studies"
          tabIndex={-1}
          className="sidebar-panel fixed left-0 top-0 z-[70] flex h-full w-[260px] flex-col border-r border-border/30 pt-[96px] md:hidden"
        >
          <button
            onClick={closeMobile}
            className="absolute right-4 top-5 flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <SidebarContent
            currentSlug={currentSlug}
            caseStudies={caseStudies}
            onNavigate={closeMobile}
          />
        </aside>
      )}
    </>
  );
}
