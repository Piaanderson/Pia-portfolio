"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  const isAboutActive = pathname === "/about";
  const isCaseStudyPage = pathname.startsWith("/case-study/");

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 pt-[22px] ${isCaseStudyPage ? "nav-case-study px-6" : "px-7"}`}
    >
      <div
        className={`nav-pill flex items-center justify-between gap-[18px] rounded-full border border-pa-glass-border bg-pa-nav-pill px-[22px] py-[9px] pr-[9px] shadow-pa-glass backdrop-blur-[60px] backdrop-saturate-[1.8] ${isCaseStudyPage ? "w-full" : "mx-auto max-w-[1040px]"}`}
      >
        <Link href="/" aria-label="Pia Anderson - home" className="flex items-center">
          <Image
            src="/images/pia-logo.png"
            alt="PiA"
            width={90}
            height={30}
            className="block h-[30px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden items-center gap-[22px] text-[14.5px] font-medium text-pa-navlink md:flex"
        >
          <Link
            href="/#work"
            className="no-underline transition-opacity hover:opacity-80"
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`no-underline transition-opacity hover:opacity-80 ${isAboutActive ? "bg-[linear-gradient(90deg,#9b1f76,#e23e7e,#ff9d4d)] bg-left-bottom bg-[length:100%_2px] bg-no-repeat pb-[3px] font-semibold text-pa-text" : "font-medium text-inherit"}`}
          >
            About
          </Link>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle light and dark mode"
            className="inline-flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-pa-bstrong [background:var(--pa-trackBg)] p-0 text-pa-navlink"
          >
            {mounted && isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={17} height={17} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={4.2} />
                <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
              </svg>
            ) : mounted ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={17} height={17} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            ) : (
              <span className="h-[17px] w-[17px]" />
            )}
          </button>

          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] rounded-full bg-pa-cta px-5 py-[11px] font-semibold text-pa-cta-text no-underline transition-opacity hover:opacity-90"
          >
            LinkedIn
            <svg viewBox="0 0 24 24" fill="currentColor" width={12} height={12}>
              <path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H7v10h10v-3h2v5H5V5z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle light and dark mode"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-pa-bstrong [background:var(--pa-trackBg)] p-0 text-pa-navlink"
          >
            {mounted && isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={17} height={17} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={4.2} />
                <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
              </svg>
            ) : mounted ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={17} height={17} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-[38px] w-[38px] items-center justify-center border-none bg-transparent text-pa-navlink"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`nav-mobile-menu mt-3 rounded-2xl border border-pa-glass-border bg-pa-glass-bg px-6 py-4 shadow-pa-glass backdrop-blur-[40px] backdrop-saturate-[1.6] md:hidden ${isCaseStudyPage ? "w-full" : "mx-auto max-w-[1040px]"}`}
        >
          <Link
            href="/#work"
            onClick={() => setMobileOpen(false)}
            className="block py-[10px] text-[15px] text-pa-navlink no-underline"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-[10px] text-[15px] text-pa-navlink no-underline"
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-[6px] rounded-full bg-pa-cta px-5 py-[11px] text-sm font-semibold text-pa-cta-text no-underline"
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
