import Image from "next/image";
import Link from "next/link";
import { Linkedin, User, Users, LayoutGrid } from "lucide-react";

const HERO_GRADIENT =
  "linear-gradient(135deg, hsl(330, 85%, 60%) 0%, hsl(270, 60%, 55%) 40%, hsl(25, 95%, 55%) 100%)";

const ANDERSON_GRADIENT =
  "linear-gradient(135deg, rgba(240, 66, 153, 1) 69%, rgba(125, 14, 191, 1) 82%, rgba(249, 122, 31, 1) 100%)";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden px-6 pt-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center pb-12">
        {/*
          Name + headshot composition:
          - "Pia" upper line (z-0, back)
          - Headshot centered (z-10, middle)
          - "Anderson" lower line, ~85% line-height down, shifted left (z-20, front)
        */}
        {/* Locked-ratio composition container — scales as one unit */}
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: "1152 / 620", maxWidth: "1152px", containerType: "inline-size" }}
        >
          <h1 className="sr-only">Pia Anderson</h1>

          {/* "Pia" - back layer */}
          <span
            aria-hidden="true"
            className="absolute z-0 font-serif font-bold"
            style={{
              fontSize: "max(3.5rem, 16cqw)",
              lineHeight: 1,
              top: "4.5%",
              left: "36.3%",
              transform: "translateX(-50%)",
              backgroundImage: HERO_GRADIENT,
              backgroundSize: "300% 100%", // tune this to widen/narrow the slice
              backgroundPosition: "0% 0%",  // 0% = start of gradient (pink side)
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
            }}
          >
            Pia
          </span>

          {/* Headshot - middle layer */}
          <div
            className="absolute z-10"
            style={{
              width: "33%",
              height: "87%",
              top: "50%",
              left: "50%",
              transform: "translate(-46%, -50%)",
            }}
          >
            <Image
              src="/images/Pia-Anderson-headshot-2026.webp"
              alt=""
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 220px, 380px"
            />
          </div>

          {/* "Anderson" - front layer */}
          <span
            aria-hidden="true"
            className="absolute z-20 font-serif font-bold whitespace-nowrap"
            style={{
              fontSize: "max(3.5rem, 17cqw)",
              lineHeight: 1,
              top: "23%",
              left: "56%",
              transform: "translateX(-50%)",
              backgroundImage: ANDERSON_GRADIENT,
              backgroundSize: "300% 100%",
              backgroundPosition: "100% 0%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
            }}
          >
            Anderson
          </span>
        </div>

        {/* Tagline */}
        <p
          className="relative z-10 mt-4 text-center text-lg font-medium md:text-xl"
          style={{
            backgroundImage: "linear-gradient(135deg, hsl(330, 85%, 65%) 0%, hsl(290, 60%, 60%) 60%, hsl(25, 90%, 60%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Scaling Design. Shaping Systems. Raising the Bar.
        </p>

        {/* Stat boxes */}
        <div className="relative z-10 mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 md:mt-12 md:gap-6">
          {[
            { value: "20+", label: "Years in UX", Icon: User },
            { value: "130+", label: "Team Members Led", Icon: Users },
            { value: "30+", label: "Enterprise Clients", Icon: LayoutGrid },
          ].map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm md:px-6 md:py-5"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon
                  className="h-5 w-5 shrink-0"
                  style={{ color: "hsl(290, 60%, 65%)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-2xl font-bold md:text-3xl"
                  style={{
                    backgroundImage: HERO_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </span>
              </div>
              <span className="block text-xs font-medium text-white/60 md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center justify-center md:mt-12">
          <Link
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-all hover:opacity-90"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid",
              borderColor: "hsl(310, 60%, 55%)",
              backdropFilter: "blur(8px)",
            }}
          >
            View My Work
          </Link>
          <Link
            href="#resume"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-all hover:opacity-90"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid",
              borderColor: "hsl(310, 60%, 55%)",
              backdropFilter: "blur(8px)",
            }}
          >
            View Resume
          </Link>
        </div>

        {/* Social icons - bottom right */}
        <div className="relative z-10 mt-12 flex items-center justify-center gap-3 md:mt-16 md:justify-end">
          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
            aria-label="X (Twitter)"
          >
            𝕏
          </a>
          <a
            href="https://www.linkedin.com/in/piaanderson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-bold text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
            aria-label="Behance"
          >
            Be
          </a>
        </div>
      </div>
    </section>
  );
}
