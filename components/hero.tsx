import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{ height: "100dvh" }}
    >

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
            Scaling Design. Shaping Systems. Raising the Bar.
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            I build and scale UX organizations while staying close to the work. From defining product vision to shaping interaction models and systems, I dive into the details when craft and clarity matter most.
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
              className="glass glass-hover inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium text-foreground transition-all"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
