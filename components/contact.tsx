import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative px-6">
      {/* Ambient glow */}
      <div
        className="ambient-glow left-1/2 bottom-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse, hsl(270, 60%, 40%) 0%, transparent 70%)",
        }}
      />

      {/* Connect content */}
      <div className="relative z-10 mx-auto max-w-2xl pt-20 pb-20 text-center md:pt-24 md:pb-24">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"Let's Connect"}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {"I'm always interested in discussing UX leadership, AI-powered design, or new opportunities. Reach out and let's start a conversation."}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:pia@example.com"
            className="glass glass-hover inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg px-8 text-sm font-medium text-foreground transition-all sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            pia@example.com
          </a>
          <a
            href="https://linkedin.com/in/piaanderson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-border px-8 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground sm:w-auto"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-border pt-4 pb-6">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <Image
            src="/images/pia-logo.png"
            alt="Pia Anderson"
            width={32}
            height={32}
            className="h-7 w-auto"
          />
          <p className="text-xs text-muted-foreground">
            {"© 2026 Pia Anderson. Designed & built with care."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:pia@example.com"
              className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email Pia"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/piaanderson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Pia's LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
