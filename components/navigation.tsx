"use client";

import React from "react"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

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

      setIsLight(overlapsLight);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkStyles = {
    background: "hsla(228, 40%, 8%, 0.4)",
    backdropFilter: "blur(24px) saturate(1.6)",
    WebkitBackdropFilter: "blur(24px) saturate(1.6)",
    borderBottom: "1px solid hsla(228, 30%, 40%, 0.2)",
    boxShadow:
      "0 1px 0 0 hsla(220, 80%, 70%, 0.06), inset 0 -1px 0 0 hsla(270, 60%, 60%, 0.05)",
  } as React.CSSProperties;

  const lightStyles = {
    background: "hsla(245, 10%, 96%, 0.4)",
    backdropFilter: "blur(24px) saturate(1.6)",
    WebkitBackdropFilter: "blur(24px) saturate(1.6)",
    borderBottom: "1px solid hsla(0, 0%, 0%, 0.06)",
    boxShadow: "0 1px 3px hsla(0, 0%, 0%, 0.04)",
  } as React.CSSProperties;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={isLight ? lightStyles : darkStyles}
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
                isLight
                  ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-500 md:hidden ${
            isLight ? "text-[#1d1d1f]" : "text-foreground"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t px-6 pb-6 pt-2 md:hidden"
          style={
            isLight
              ? {
                  background: "hsla(245, 10%, 96%, 0.85)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderColor: "hsla(0, 0%, 0%, 0.06)",
                }
              : {
                  background: "hsla(228, 35%, 14%, 0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderColor: "hsla(228, 30%, 40%, 0.25)",
                }
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-3 text-base transition-colors ${
                isLight
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
