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
const lightColors = ["#ffffff", "#f0e8f8", "#e2d4f2", "#d8daf0", "#f0dce8", "#f8e8f0"];

const gradientNoiseFrequency: [number, number] = [0.00009, 0.00018];

const darkDeform = { incline: 0.15, noiseAmp: 90, noiseFlow: 1.2, noiseSpeed: 6 };
const lightDeform = { incline: 0.15, noiseAmp: 90, noiseFlow: 1.6, noiseSpeed: 8 };

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const colors = isDark ? darkColors : lightColors;
  const noiseSpeed = isDark ? 0.000005 : 0.00001;
  const deform = isDark ? darkDeform : lightDeform;

  return (
    <>
      {/* Fixed gradient wave background behind entire page */}
      <div className="fixed inset-0 z-0">
        <GradientWave
          key={isDark ? "dark" : "light"}
          colors={colors}
          isPlaying={true}
          shadowPower={4}
          darkenTop={false}
          noiseSpeed={noiseSpeed}
          noiseFrequency={gradientNoiseFrequency}
          deform={deform}
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
