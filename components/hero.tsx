import Image from "next/image";
import Link from "next/link";

const HERO_GRADIENT =
  "linear-gradient(135deg, rgba(240, 66, 153, 1) 13%, rgba(139, 10, 245, 1) 40%, rgba(249, 122, 31, 1) 100%)";

const ANDERSON_GRADIENT =
  "linear-gradient(135deg, rgba(246, 30, 138, 1) 22%, rgba(139, 10, 245, 1) 50%, rgba(249, 122, 31, 1) 80%)";

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
              top: "9.5%",
              left: "37%",
              transform: "translateX(-50%)",
              backgroundImage: HERO_GRADIENT,
              backgroundSize: "300% 100%", // tune this to widen/narrow the slice
              backgroundPosition: "0% 0%",  // 0% = start of gradient (pink side)
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              filter: "var(--hero-name-shadow)",
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
              WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 75%)",
              maskImage: "linear-gradient(to bottom, black 40%, transparent 75%)",
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
              top: "27%",
              left: "49%",
              transform: "translateX(-50%)",
              backgroundImage: ANDERSON_GRADIENT,
              backgroundSize: "150% 100%",
              backgroundPosition: "50% 0%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              filter: "var(--hero-name-shadow)",
            }}
          >
            Anderson
          </span>
        </div>

        {/* Tagline */}
        <p
          className="relative z-30 -mt-[22%] text-center text-base font-medium sm:text-xl md:text-2xl"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(246, 30, 138, 1) 11%, rgba(139, 10, 245, 1) 45%, rgba(249, 122, 31, 1) 89%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "var(--hero-tagline-shadow)",
          }}
        >
          Scaling Design. Shaping Systems. Raising the Bar.
        </p>

        {/* CTA buttons */}
        <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center justify-center md:mt-12">
          <Link
            href="#work"
            className="glass glass-hover inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-sm font-medium text-foreground"
          >
            View My Work
          </Link>
          <Link
            href="#resume"
            className="glass glass-hover inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-sm font-medium text-foreground"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
