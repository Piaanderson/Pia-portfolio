"use client";

import { HeroSection01 } from "@/components/ui/hero-01";
import { useEffect } from "react";

export default function GradientDemoPage() {
  useEffect(() => {
    document.body.style.background = "transparent";
    document.documentElement.style.background = "transparent";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.background = "";
      document.documentElement.style.background = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <HeroSection01 />
    </div>
  );
}
