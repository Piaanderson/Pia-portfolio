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
      className={isCaseStudyPage ? "nav-case-study" : undefined}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isCaseStudyPage ? "22px 24px 0" : "22px 28px 0",
      }}
    >
      <div
        className="nav-pill"
        style={{
          maxWidth: isCaseStudyPage ? undefined : 1040,
          width: isCaseStudyPage ? "100%" : undefined,
          margin: isCaseStudyPage ? 0 : "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          padding: "9px 9px 9px 22px",
          borderRadius: 999,
          background: "var(--pa-navPillBg, rgba(10,17,40,.18))",
          backdropFilter: "blur(60px) saturate(1.8)",
          WebkitBackdropFilter: "blur(60px) saturate(1.8)",
          border: "1px solid var(--pa-glassBorder)",
          boxShadow: "var(--pa-glassShadow)",
        }}
      >
        <Link href="/" aria-label="Pia Anderson - home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/pia-logo.png"
            alt="PiA"
            width={90}
            height={30}
            style={{ height: 30, width: "auto", display: "block" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 22,
            fontSize: 14.5,
            fontWeight: 500,
            color: "var(--pa-navlink)",
          }}
        >
          <Link
            href="/#work"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Work
          </Link>
          <Link
            href="/about"
            style={{
              color: isAboutActive ? "var(--pa-text)" : "inherit",
              textDecoration: "none",
              fontWeight: isAboutActive ? 600 : 500,
              paddingBottom: isAboutActive ? 3 : 0,
              background: isAboutActive
                ? "linear-gradient(90deg, #9b1f76, #e23e7e, #ff9d4d) left bottom/100% 2px no-repeat"
                : "none",
            }}
          >
            About
          </Link>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle light and dark mode"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1px solid var(--pa-bstrong)",
              background: "var(--pa-trackBg)",
              color: "var(--pa-navlink)",
              cursor: "pointer",
              padding: 0,
              flex: "none",
            }}
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
              <span style={{ width: 17, height: 17 }} />
            )}
          </button>

          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--pa-ctaBg)",
              color: "var(--pa-ctaText)",
              textDecoration: "none",
              fontWeight: 600,
              padding: "11px 20px",
              borderRadius: 999,
            }}
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
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1px solid var(--pa-bstrong)",
              background: "var(--pa-trackBg)",
              color: "var(--pa-navlink)",
              cursor: "pointer",
              padding: 0,
            }}
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              background: "transparent",
              border: "none",
              color: "var(--pa-navlink)",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu md:hidden"
          style={{
            maxWidth: isCaseStudyPage ? undefined : 1040,
            width: isCaseStudyPage ? "100%" : undefined,
            margin: isCaseStudyPage ? "12px 0 0" : "12px auto 0",
            padding: "16px 24px",
            borderRadius: 16,
          background: "var(--pa-glassBg)",
          backdropFilter: "blur(40px) saturate(1.6)",
          WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          border: "1px solid var(--pa-glassBorder)",
          }}
        >
          <Link
            href="/#work"
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "10px 0", color: "var(--pa-navlink)", textDecoration: "none", fontSize: 15 }}
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "10px 0", color: "var(--pa-navlink)", textDecoration: "none", fontSize: 15 }}
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 8,
              background: "var(--pa-ctaBg)",
              color: "var(--pa-ctaText)",
              textDecoration: "none",
              fontWeight: 600,
              padding: "11px 20px",
              borderRadius: 999,
              fontSize: 14,
            }}
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
