"use client";

import React from "react"

import { useState, useEffect, type ReactNode } from "react";
import { Lock, Eye, EyeOff, ArrowRight, Mail, X, Copy, Check } from "lucide-react";

const CORRECT_PASSWORD = "portfolio2026";
const STORAGE_KEY = "pia-portfolio-unlocked";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  }

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) {
    return null;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center px-6 py-16">
      <div className="glass rounded-2xl p-8 md:p-10 max-w-xl w-full text-center">
        {/* Lock icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-6 w-6 text-muted-foreground" />
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
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`w-full rounded-lg border bg-secondary/50 px-4 py-3 pr-12 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-pink/50 focus:ring-1 focus:ring-pink/30 ${
                error ? "border-red-500/50" : "border-border"
              }`}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {error && (
            <p className="mt-2 text-xs text-red-400">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pink px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Unlock Case Studies
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-5 text-xs text-muted-foreground">
          {"Need access? "}
          <button
            type="button"
            onClick={() => setShowEmailPopup(true)}
            className="text-pink hover:underline"
          >
            Request the password
          </button>
        </p>
      </div>

      {/* Email popup overlay */}
      {showEmailPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm px-6"
          onClick={() => setShowEmailPopup(false)}
          onKeyDown={(e) => { if (e.key === "Escape") setShowEmailPopup(false); }}
          role="button"
          tabIndex={0}
        >
          <div
            className="glass rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Request password"
          >
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink/10">
              <Mail className="h-5 w-5 text-pink" />
            </div>

            <h4 className="mt-4 font-serif text-lg font-bold text-foreground text-center">
              Request Access
            </h4>
            <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">
              Send me an email and I will share the password with you.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-lg bg-secondary/60 border border-border px-4 py-3">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm text-foreground flex-1">pia@example.com</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("pia@example.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <a
              href="mailto:pia@example.com?subject=Portfolio%20Access%20Request&body=Hi%20Pia%2C%0A%0AI'd%20love%20to%20view%20your%20case%20studies.%20Could%20you%20share%20the%20password%3F%0A%0AThanks!"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pink px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open in Email Client
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
