"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Experience } from "@/components/experience";
import { Recommendations } from "@/components/recommendations";
import { Contact } from "@/components/contact";
import { GradientWave } from "@/components/ui/gradient-wave";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const darkColors = ["#030414", "#0a1128", "#130f35", "#030427", "#150d30", "#250c20"];
const lightColors = ["#ffffff", "#ebe0f0", "#d6c9ea", "#c9cde8", "#e8d0e4", "#f0d6e8"];

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <>
      {/* Fixed gradient wave background behind entire page */}
      <div className="fixed inset-0 z-0">
        <GradientWave
          key={isDark ? "dark" : "light"}
          colors={isDark ? darkColors : lightColors}
          shadowPower={4}
          darkenTop={false}
          noiseSpeed={0.000005}
          noiseFrequency={[0.00009, 0.00018]}
          deform={{ incline: 0.15, noiseAmp: 90, noiseFlow: 1.2, noiseSpeed: 6 }}
        />
      </div>
      <main id="main-content" className="relative z-10 min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
}
