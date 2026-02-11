"use client";

import { useState } from "react";
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

  return (
    <>
      {/* ---- Mobile toggle button (bottom-left floating) ---- */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full md:hidden"
        style={{
          background: "hsla(228, 35%, 14%, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid hsla(228, 30%, 40%, 0.25)",
          boxShadow: "0 4px 20px hsla(228, 40%, 8%, 0.4)",
        }}
        aria-label="Open case study navigation"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      {/* ---- Mobile overlay ---- */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobileOpen(false);
          }}
          role="button"
          tabIndex={0}
        />
      )}

      {/* ---- Sidebar ---- */}
      <aside
        className={`fixed left-0 top-0 z-[70] flex h-full w-[260px] flex-col border-r border-border/30 pt-[72px] transition-transform duration-300 md:z-40 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "hsla(228, 35%, 10%, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-4 top-5 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Close navigation"
        >
          <X className="h-5 w-5" />
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
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}
