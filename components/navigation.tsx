"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overLightSection, setOverLightSection] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleScroll() {
      const navHeight = 64;
      const lightSections = document.querySelectorAll('[data-theme="light"]');
      let overlapsLight = false;

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < navHeight && rect.bottom > navHeight) {
          overlapsLight = true;
        }
      });

      setOverLightSection(overlapsLight);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  // In dark mode, when nav overlaps a light-bg section, use special styles
  const sectionLightOverride = isDark && overLightSection;

  // Use dark text when global theme is light OR when over a light section in dark mode
  const useDarkText = !isDark || sectionLightOverride;

  const sectionLightNavStyles = {
    background: "hsla(245, 10%, 96%, 0.4)",
    backdropFilter: "blur(24px) saturate(1.6)",
    WebkitBackdropFilter: "blur(24px) saturate(1.6)",
    borderBottom: "1px solid hsla(0, 0%, 0%, 0.06)",
    boxShadow: "0 1px 3px hsla(0, 0%, 0%, 0.04)",
  } as React.CSSProperties;

  const sectionLightMobileStyles = {
    background: "hsla(245, 10%, 96%, 0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderColor: "hsla(0, 0%, 0%, 0.06)",
  } as React.CSSProperties;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        sectionLightOverride ? "" : "nav-glass"
      }`}
      style={sectionLightOverride ? sectionLightNavStyles : undefined}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src="/images/pia-logo.png"
            alt="Pia Anderson"
            width={40}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-500 ${
                useDarkText
                  ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-500 ${
              useDarkText ? "text-[#1d1d1f]" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t px-6 pb-6 pt-2 md:hidden"
          style={sectionLightOverride ? sectionLightMobileStyles : undefined}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // useDarkText forces light-mode palette values when the nav overlaps
              // the light About section while dark theme is active — CSS tokens
              // would resolve to dark-mode values and be unreadable there.
              className={`block py-3 text-base transition-colors ${
                useDarkText
                  ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
