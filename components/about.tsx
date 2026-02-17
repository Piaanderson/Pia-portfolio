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
        className={`relative overflow-clip px-6 py-20 md:px-12 md:py-28 lg:px-16 ${
          isDark ? "bg-background" : ""
        }`}
        style={isDark ? undefined : { background: "#f3f1f8" }}
      >
        {/* Palette washes */}
        <div className="pointer-events-none sticky top-0 -mb-[1px] h-0 w-full">
          <div
            className="absolute -top-64 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(circle, hsl(270, 60%, 65%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full opacity-[0.10]"
            style={{ background: "radial-gradient(circle, hsl(330, 85%, 65%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, hsl(220, 70%, 60%) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className={`font-serif text-3xl font-bold md:text-4xl lg:text-5xl ${
            isDark ? "text-foreground" : "text-[#1d1d1f]"
          }`}>
            <span className="gradient-text">
              Director of User Experience
            </span>
          </h2>
          <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg md:leading-relaxed ${
            isDark ? "text-muted-foreground" : "text-[#6e6e73]"
          }`}>
            {"I'm a proven UX leader focused on designing AI-powered, human-centered products that deliver meaningful outcomes. I've led cross-functional teams, scaled design organizations, and shaped experiences used by millions. Whether building from zero or transforming legacy systems, I bring clarity, craft, and a deep commitment to the people doing the work."}
          </p>

          {/* Key highlights */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <span
                className="text-4xl font-bold gradient-text md:text-5xl"
              >
                20+
              </span>
              <span className={`mt-2 text-sm font-medium ${
                isDark ? "text-muted-foreground" : "text-[#6e6e73]"
              }`}>
                Years in UX
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                className="text-4xl font-bold gradient-text md:text-5xl"
              >
                130+
              </span>
              <span className={`mt-2 text-sm font-medium ${
                isDark ? "text-muted-foreground" : "text-[#6e6e73]"
              }`}>
                Team Members Led
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                className="text-4xl font-bold gradient-text md:text-5xl"
              >
                30+
              </span>
              <span className={`mt-2 text-sm font-medium ${
                isDark ? "text-muted-foreground" : "text-[#6e6e73]"
              }`}>
                Enterprise Clients
              </span>
            </div>
          </div>

          {/* Philosophy blurb */}
          <div className={`mx-auto mt-16 max-w-2xl rounded-2xl p-8 md:p-10 ${
            isDark ? "glass glass-hover" : "glass-light glass-light-hover"
          }`}>
            <p className={`text-sm font-medium uppercase tracking-wider ${
              isDark ? "text-muted-foreground" : "text-[#6e6e73]"
            }`}>
              My Philosophy
            </p>
            <p className={`mt-4 text-base leading-relaxed md:text-lg md:leading-relaxed ${
              isDark ? "text-foreground" : "text-[#1d1d1f]"
            }`}>
              {"Great design isn't just about pixels — it's about people. I believe in building inclusive, accessible experiences rooted in research, and in creating cultures where designers can do the best work of their careers."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
