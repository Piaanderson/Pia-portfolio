"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection01() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0a1128]">
      {/* GradientWave using vivid portfolio accent colors */}
      <GradientWave
        colors={["#030414", "#0a1128", "#130f35", "#030427", "#1f1240", "#351230"]}
        shadowPower={4}
        darkenTop={false}
        noiseSpeed={0.000005}
        noiseFrequency={[0.00009, 0.00018]}
        deform={{ incline: 0.15, noiseAmp: 90, noiseFlow: 1.2, noiseSpeed: 6 }}
      />
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Headshot */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(220, 70%, 55%) 0%, hsl(270, 60%, 50%) 40%, hsl(330, 85%, 60%) 70%, hsl(25, 95%, 55%) 100%)",
            }}
          />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-[3px] border-white/20 md:h-44 md:w-44">
            <Image
              src="/images/headshot.jpeg"
              alt="Pia Anderson - UX Leader"
              fill
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>
        <h2 className="font-serif font-extrabold pt-10 text-white drop-shadow-lg tracking-tighter text-5xl md:text-7xl lg:text-9xl">
          Pia Anderson
        </h2>
        <div className="space-y-6 z-10 pt-10 flex justify-center items-center flex-col text-center px-6">
          <p className="text-white/80 w-full max-w-lg font-light text-sm md:text-xl drop-shadow-md">
            UX Leader Shaping the Future of AI-Powered Experiences. From
            strategy to execution, I lead teams building user-first solutions
            that move business and people forward.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <Link href="#work">
              <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10 bg-white text-[#0a1128] hover:bg-white/90 font-semibold shadow-lg">
                View My Work
              </Button>
            </Link>
            <Link href="#resume">
              <Button
                variant="secondary"
                className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                View Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
