import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PasswordGate } from "@/components/password-gate";

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  type: "hands-on" | "leadership";
};

const caseStudies: CaseStudy[] = [
  {
    slug: "ai-dashboard-redesign",
    title: "AI Dashboard Redesign",
    subtitle: "Enterprise SaaS Platform",
    description:
      "Led the end-to-end redesign of an AI-powered analytics dashboard, improving task completion rates by 40% and reducing onboarding time from 2 weeks to 3 days.",
    image: "/images/case-study-ai-dashboard.jpg",
    tags: ["UX Strategy", "AI/ML", "Research", "Hands-On Design"],
    type: "hands-on",
  },
  {
    slug: "design-system-scale",
    title: "Design System at Scale",
    subtitle: "Cross-Platform Component Library",
    description:
      "Built and scaled a design system adopted by 12 product teams, reducing design-to-dev handoff time by 60% and establishing a shared design language across web and mobile.",
    image: "/images/case-study-design-system.jpg",
    tags: ["Design Systems", "Leadership", "Ops"],
    type: "leadership",
  },
  {
    slug: "team-transformation",
    title: "UX Team Transformation",
    subtitle: "Org Design & Culture",
    description:
      "Grew a UX team from 3 to 18 designers, establishing career ladders, rituals, and a research practice that elevated design's influence at the executive level.",
    image: "/images/case-study-leadership.jpg",
    tags: ["Team Building", "Mentorship", "Culture"],
    type: "leadership",
  },
];

function TypeBadge({ type }: { type: CaseStudy["type"] }) {
  const styles =
    type === "hands-on"
      ? "bg-pink/10 text-pink border-pink/20"
      : "bg-deep-purple/10 text-[hsl(270,60%,65%)] border-deep-purple/20";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {type === "hands-on" ? "Hands-On" : "Leadership"}
    </span>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            Case studies spanning hands-on design and leadership impact.
          </p>
        </div>

        <PasswordGate>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-study/${study.slug}`}
                className="glass glass-hover group flex flex-col overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <TypeBadge type={study.type} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {study.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-pink transition-all group-hover:gap-3">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PasswordGate>
      </div>
    </section>
  );
}
