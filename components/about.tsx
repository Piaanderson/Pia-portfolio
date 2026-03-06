"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      id="about"
      className="relative z-10"
      data-theme={isDark ? undefined : "light"}
    >
      <div
        className="relative overflow-clip px-6 py-20 md:px-12 md:py-28 lg:px-16"
      >

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="gradient-text">
              Principal UX Leader
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            {"I design AI powered, human centered products that drive real outcomes. I've led cross functional teams, scaled design organizations, and shaped systems used by millions. Whether building from zero or transforming legacy platforms, I bring clarity, craft, and a deep commitment to the people doing the work."}
          </p>

          {/* Key highlights */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text md:text-5xl">
                20+
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                Years in UX
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text md:text-5xl">
                130+
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                Team Members Led
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold gradient-text md:text-5xl">
                30+
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                Enterprise Clients
              </span>
            </div>
          </div>

          {/* Philosophy blurb */}
          <div className={`mx-auto mt-16 max-w-2xl rounded-2xl p-8 md:p-10 ${isDark ? "glass" : "glass-light"}`}>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              My Philosophy
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg md:leading-relaxed">
              {"Great design aligns user needs with business intent. I'm committed to accessible systems, rigorous thinking, and creating environments where teams deliver meaningful, measurable impact."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
