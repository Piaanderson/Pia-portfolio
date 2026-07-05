import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/lib/site";

export default function AboutPage() {
  const sectionGrid = "relative z-[1] mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-[54px] px-5 md:grid-cols-[400px_1fr] md:px-10";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-pa-bg font-sans text-pa-text transition-colors duration-[400ms]">
      {/* Ambient gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[440px] bg-pa-ambient" />

      <Navigation />

      {/* Hero Section */}
      <RevealOnScroll as="section" className={`${sectionGrid} pt-[124px]`}>
        {/* Photo column */}
        <div className="relative">
          {/* Warm glow behind photo */}
          <div className="absolute inset-[-6%_-8%_-5%] z-0 rounded-[18px] bg-pa-warm-glow blur-[34px]" />
          {/* Photo container */}
          <div className="about-hero-photo relative z-[1] h-[300px] w-full overflow-hidden rounded-[18px] shadow-pa-photo md:h-[660px]">
            <Image
              src="/images/pia-office.jpg"
              alt="Pia Anderson"
              fill
              className="object-cover object-[50%_22%]"
              priority
            />
            {/* Vignette overlay */}
            <div
              className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_110%_at_50%_32%,transparent_54%,var(--pa-vigEdge)_100%)]"
            />
          </div>
        </div>

        {/* Text column */}
        <div>
          <p className="mb-[18px] font-mono text-xs uppercase tracking-[3px] text-pa-accent">
            ABOUT
          </p>
          <h1 className="mb-[34px] font-serif text-[62px] font-medium leading-[0.98] tracking-[-1px] text-pa-text">
            Pia Anderson
          </h1>
          <p className="mb-[26px] text-xl leading-[1.6] tracking-[-0.1px] text-pa-text">
            I started my career as a designer who could not stop asking why the
            systems behind the screen were so much harder to use than they needed
            to be. Twenty years later, that question still drives everything I
            do.
          </p>
          <p className="mb-6 text-[17px] leading-[1.75] text-pa-body">
            At PwC, I have grown a design team from seven to over 130,
            established UX as a discipline inside a tax technology group that had
            never employed a designer, and led the design of AI platforms now
            deployed across the firm. Before that, I directed teams through a
            full airline rebrand at American Airlines and designed operational
            software at projekt202 that changed how Southwest Airlines recovers
            from weather disruptions.
          </p>
          <p className="m-0 text-[17px] leading-[1.75] text-pa-body">
            What I keep coming back to is the space between systems. The places
            where tools do not talk to each other, where teams work in silos, and
            where users build workarounds because nobody designed the
            connections. That is where I do my best work. Today, I am shaping how
            enterprise teams work with AI, both as a design leader guiding 80
            designers toward code-first delivery and as a practitioner who opens
            pull requests, responds to code reviews, and ships her own front-end
            work.
          </p>
        </div>
      </RevealOnScroll>

      {/* Background Section */}
      <RevealOnScroll as="section" className={`${sectionGrid} pt-14`}>
        {/* Label column */}
        <p className="pt-1 font-mono text-[11px] uppercase tracking-[2px] text-pa-muted">
          BACKGROUND
        </p>

        {/* Content column */}
        <div>
          {/* Hairline divider */}
          <div className="mb-[30px] h-px bg-pa-border" />

          <div className="about-bg-inner-grid grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Education */}
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[2px] text-pa-muted">
                EDUCATION
              </p>
              <div className="mb-[14px]">
                <p className="text-[15px] leading-[1.5] text-pa-text2">
                  Communication Design
                </p>
                <p className="mt-0.5 text-[13px] text-pa-muted2">
                  University of North Texas
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.5] text-pa-text2">
                  Multi Media and Animation
                </p>
                <p className="mt-0.5 text-[13px] text-pa-muted2">
                  Art Institute of Dallas
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[2px] text-pa-muted">
                CERTIFICATIONS
              </p>
              <p className="mb-[14px] text-[15px] leading-[1.5] text-pa-text2">
                IAAP Certified Professional in Accessibility Core Competencies
                (CPACC)
              </p>
              <p className="text-[15px] leading-[1.5] text-pa-text2">
                Nielsen Norman Group UX Master Certification
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Connect Section */}
      <RevealOnScroll as="section" className={`${sectionGrid} pb-[84px] pt-14`}>
        {/* Label column */}
        <p className="pt-2 font-mono text-[11px] uppercase tracking-[2px] text-pa-muted">
          CONNECT
        </p>

        {/* Content column */}
        <div>
          {/* Hairline divider */}
          <div className="mb-[30px] h-px bg-pa-border" />

          <h2 className="mb-[14px] font-serif text-[30px] font-medium tracking-[-0.5px] text-pa-text">
            Let&apos;s talk
          </h2>
          <p className="mb-6 max-w-[30em] text-[17.5px] leading-[1.6] text-pa-body">
            If you want to talk about design leadership, AI-first delivery, or
            what I could bring to your team, I am easy to find.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/uxpiaanderson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pa-cta px-[21px] py-3 text-[15px] font-semibold text-pa-cta-text no-underline"
            >
              LinkedIn
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="mailto:pia@piaanderson.com"
              className="inline-flex items-center rounded-full border border-pa-bstrong bg-transparent px-[21px] py-3 text-[15px] font-semibold text-pa-text no-underline"
            >
              pia@piaanderson.com
            </a>
            <a
              href={RESUME_HREF}
              download={RESUME_DOWNLOAD_NAME}
              className="inline-flex items-center gap-2 rounded-full border border-pa-bstrong bg-transparent px-[21px] py-3 text-[15px] font-semibold text-pa-text no-underline"
            >
              Resume
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}
