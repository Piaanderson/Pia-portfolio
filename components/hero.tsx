import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{ height: "100dvh" }}
    >
      {/* Background gradient blurs */}
      <div
        className="ambient-glow -left-32 -bottom-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(330, 85%, 60%) 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow -right-32 bottom-0 h-[400px] w-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(220, 70%, 55%) 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(270, 60%, 50%) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Headshot */}
        <div className="relative flex-shrink-0">
          {/* Refraction ring */}
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(220, 70%, 55%) 0%, hsl(270, 60%, 50%) 40%, hsl(330, 85%, 60%) 70%, hsl(25, 95%, 55%) 100%)",
            }}
          />
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-[3px] border-background md:h-56 md:w-56">
            <Image
              src="/images/headshot.jpeg"
              alt="Pia Anderson - UX Leader"
              fill
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="gradient-text text-balance">Pia Anderson</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground md:text-xl">
            UX Leader Shaping the Future of AI-Powered Experiences
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            From strategy to execution, I lead teams building AI-powered,
            user-first solutions that move business and people forward.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="glass glass-hover inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium text-foreground transition-all"
            >
              View My Work
            </a>
            <a
              href="#resume"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
