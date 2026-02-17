"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Experience } from "@/components/experience";
import { Recommendations } from "@/components/recommendations";
import { Contact } from "@/components/contact";
import { GradientWave } from "@/components/ui/gradient-wave";

export default function Page() {
  return (
    <>
      {/* Fixed gradient wave background behind entire page */}
      <div className="fixed inset-0 z-0">
        <GradientWave
          colors={["#030414", "#0a1128", "#130f35", "#030427", "#1f1240", "#351230"]}
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
