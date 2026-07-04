import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PasswordGate } from "@/components/password-gate";
import { caseStudies } from "@/lib/case-studies";

function TypeBadge({ type }: { type: "hands-on" | "leadership" }) {
  // Colors chosen to stay legible on white card images in both light and dark mode
  const styles =
    type === "hands-on"
      ? "bg-[hsl(330,45%,95%)] text-[hsl(330,70%,32%)] border-[hsl(330,40%,82%)]"
      : "bg-[hsl(270,40%,94%)] text-[hsl(270,55%,28%)] border-[hsl(270,35%,80%)]";

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
                        className="rounded-full bg-muted/90 px-2.5 py-1 text-xs font-medium text-foreground/90"
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
