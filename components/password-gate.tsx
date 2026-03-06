"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { Lock, Eye, EyeOff, ArrowRight, Mail, X, Copy, Check } from "lucide-react";

const ALLOWED_PASSWORDS = [
  "StrongUXLeadership2025",
  "StrongUXLeadership2026",
  "PrincipalUX2026",
];
const STORAGE_KEY = "pia-portfolio-unlocked";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, []);

  // Focus trap and management for email popup
  useEffect(() => {
    if (!showEmailPopup) return;

    // Move focus into dialog
    const timer = setTimeout(() => {
      dialogRef.current?.focus();
    }, 50);

    // Trap focus within dialog
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowEmailPopup(false);
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showEmailPopup]);

  // Return focus to trigger when popup closes
  useEffect(() => {
    if (!showEmailPopup && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [showEmailPopup]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ALLOWED_PASSWORDS.includes(password.trim())) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  }

  if (!mounted) {
    return null;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center px-6 py-16">
      <div className="glass w-full max-w-4xl rounded-2xl p-6 text-left md:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>

        <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
          Protected Work
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          These case studies contain work under NDA. Please enter the password to
          view.
        </p>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
            <div className="relative min-w-0 flex-1">
              <label htmlFor="password-input" className="sr-only">
                Password
              </label>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                aria-invalid={error || undefined}
                aria-describedby={error ? "password-error" : undefined}
                className={`h-[42px] w-full rounded-lg border bg-secondary/50 px-4 py-3 pr-12 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-pink/50 focus:ring-1 focus:ring-pink/30 ${
                  error ? "border-red-500/50" : "border-border"
                }`}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-pink px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:h-[42px]"
            >
              Unlock Case Studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div aria-live="assertive" aria-atomic="true">
            {error && (
              <p id="password-error" className="mt-2 text-xs text-red-400">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          {"Need access? "}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setShowEmailPopup(true)}
            className="text-pink hover:underline"
          >
            Request the password
          </button>
        </p>
      </div>

      {/* Email popup — proper dialog pattern */}
      {showEmailPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm px-6"
          role="presentation"
          onClick={() => setShowEmailPopup(false)}
        >
          <div
            ref={dialogRef}
            className="glass rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Request password"
            tabIndex={-1}
          >
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink/10">
              <Mail className="h-5 w-5 text-pink" aria-hidden="true" />
            </div>

            <h4 className="mt-4 font-serif text-lg font-bold text-foreground text-center">
              Request Access
            </h4>
            <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">
              Send me an email and I will share the password with you.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-secondary/60 border border-border px-4 py-3">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
              <span className="text-sm text-foreground flex-1">pia@example.com</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("pia@example.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
                aria-label={copied ? "Copied to clipboard" : "Copy email address"}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <a
              href="mailto:pia@example.com?subject=Portfolio%20Access%20Request&body=Hi%20Pia%2C%0A%0AI'd%20love%20to%20view%20your%20case%20studies.%20Could%20you%20share%20the%20password%3F%0A%0AThanks!"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pink px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open in Email Client
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
