import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Experience } from "@/components/experience";
import { Recommendations } from "@/components/recommendations";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Recommendations />
      <Contact />
    </main>
  );
}
