"use client";

import { useMemo, useState, useEffect, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, ArrowRight, Mail, X, Copy, Check } from "lucide-react";

const DEFAULT_CASE_STUDY_PATH = "/case-study/project-forge";

function sanitizeNextPath(nextPath?: string) {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return DEFAULT_CASE_STUDY_PATH;
  }
  return nextPath;
}

export function PasswordGate({ nextPath }: { nextPath?: string }) {
  const router = useRouter();
  const redirectTarget = useMemo(() => sanitizeNextPath(nextPath), [nextPath]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popupWasOpen = useRef(false);

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
    if (!showEmailPopup && popupWasOpen.current && triggerRef.current) {
      triggerRef.current.focus();
    }
    popupWasOpen.current = showEmailPopup;
  }, [showEmailPopup]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/case-study-auth", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          password,
          nextPath: redirectTarget,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | {
            ok: boolean;
            message?: string;
            redirectTo?: string;
          }
        | null;
      if (!data) {
        setErrorMessage("Unable to unlock case studies right now. Please try again.");
        return;
      }

      if (!response.ok || !data.ok) {
        setErrorMessage(data.message || "Unable to unlock case studies.");
        setPassword("");
        return;
      }

      router.replace(sanitizeNextPath(data.redirectTo));
      router.refresh();
    } catch {
      setErrorMessage("Unable to unlock case studies right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col px-6 pb-16 pt-28 md:px-10 md:pt-32">
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="glass w-full max-w-xl rounded-2xl p-8 text-center md:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <Lock className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </div>

          <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
            Protected Work
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            These case studies contain work under NDA. Please enter the password to
            view.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="relative">
              <label htmlFor="password-input" className="sr-only">
                Password
              </label>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="Enter password"
                aria-invalid={Boolean(errorMessage) || undefined}
                aria-describedby={errorMessage ? "password-error" : undefined}
                className={`w-full rounded-lg border bg-secondary/50 px-4 py-3 pr-12 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-pink/50 focus:ring-1 focus:ring-pink/30 ${
                  errorMessage ? "border-red-500/50" : "border-border"
                }`}
                autoComplete="current-password"
                required
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

            <div aria-live="assertive" aria-atomic="true">
              {errorMessage && (
                <p id="password-error" className="mt-2 text-xs text-red-400">
                  {errorMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pink px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Unlocking..." : "Unlock Case Studies"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <p className="mt-5 text-xs text-muted-foreground">
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
      </div>

      {/* Email popup — proper dialog pattern */}
      {showEmailPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 px-6 backdrop-blur-sm"
          role="presentation"
          onClick={() => setShowEmailPopup(false)}
        >
          <div
            ref={dialogRef}
            className="glass relative w-full max-w-md rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Request password"
            tabIndex={-1}
          >
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink/10">
              <Mail className="h-5 w-5 text-pink" aria-hidden="true" />
            </div>

            <h4 className="mt-4 text-center font-serif text-lg font-bold text-foreground">
              Request Access
            </h4>
            <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
              Send me an email and I will share the password with you.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="flex-1 text-sm text-foreground">pia@piaanderson.com</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("pia@piaanderson.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
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
              href="mailto:pia@piaanderson.com?subject=Portfolio%20Access%20Request&body=Hi%20Pia%2C%0A%0AI'd%20love%20to%20view%20your%20case%20studies.%20Could%20you%20share%20the%20password%3F%0A%0AThanks!"
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
