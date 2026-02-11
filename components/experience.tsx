import { Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Role = {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
};

type Employer = {
  name: string;
  period: string;
  duration: string;
  roles: Role[];
};

const employers: Employer[] = [
  {
    name: "PricewaterhouseCoopers",
    period: "2017 - Present",
    duration: "8 years",
    roles: [
      {
        title: "Director of Client Experience",
        company: "Pricewaterhouse Coopers",
        period: "Jan 2025 - Present",
        description:
          "Leading the newly formed Client Experience organization, encompassing UX, Creative Studio (video, illustration, graphic design), Accessibility, and Customer Success teams.",
        bullets: [
          "Driving end-to-end client satisfaction through coordinated design, communication, support initiatives",
          "Building new frameworks for collaboration across service teams to streamline delivery, reinforce brand consistency",
          "Advancing AI and automation strategies across functions, supporting training, communication, and customer engagement",
        ],
      },
      {
        title: "Director of User Experience",
        company: "PwC Digital",
        period: "2021 - 2024",
        description:
          "Led cross-functional teams in delivering AI-powered tools, including agentic workflow builders, accessibility remediation platforms, and healthcare decision support systems.",
        bullets: [
          "Collaborated on and scaled custom GPTs to enhance internal processes like creative briefs, personas, and journey mapping",
          "Championed accessible, inclusive design and established scalable systems for consistency, and brand alignment across platforms",
          "Led the growth of UX team from 7 to over 130 globally within PwC Digital",
        ],
      },
      {
        title: "UX Sr Manager",
        company: "PwC Digital",
        period: "2019 - 2021",
        description:
          "Played a central role in evolving design strategy and collaboration across Advisory tech initiatives.",
        bullets: [
          "Helped shape and promote a celebrated team culture through onboarding practices, peer reviews, virtual team building",
          "Mentored growing teams in design ops, system thinking, and inclusive design practices",
          "Introduced user-centered design to complex legacy systems, dramatically improving usability and visual appeal",
        ],
      },
      {
        title: "UX Manager",
        company: "PwC Tax Technology",
        period: "2017 - 2019",
        description:
          "Helped grow UX maturity from non-existent to fully embedded, leading to NNVg certifications across roles.",
        bullets: [
          "Elevated perception of internal tools by aligning usability and aesthetics with client expectations",
          "Established design quality standards and user satisfaction metrics",
          "Built comprehensive design systems for tax technology platforms",
        ],
      },
    ],
  },
  {
    name: "Projekt202",
    period: "2014 - 2016",
    duration: "2 years",
    roles: [
      {
        title: "UX Creative Director",
        company: "Projekt202",
        period: "2014 - 2016",
        description:
          "Led the design of an AI-powered network recovery optimizer for Southwest Airlines, including creation of a custom light/dark mode design system.",
        bullets: [
          "Directed a unified design system and change management strategy at Sabre",
          "Led projects across industries including retail, POS systems, healthcare, and food service",
          "Enhanced usability, accessibility, and brand cohesion across varied environments",
        ],
      },
    ],
  },
  {
    name: "American Airlines",
    period: "2011 - 2014",
    duration: "3 years",
    roles: [
      {
        title: "UX Creative Director",
        company: "American Airlines",
        period: "2011 - 2014",
        description:
          "Co-led a 45-person UX and visual design team through a full rebranding of AA.com and the mobile app.",
        bullets: [
          "Directed modernization from a design standpoint, working closely with front-end developers",
          "Participated in extensive usability research including in-lab task-based validation and eye-tracking studies",
          "Elevated design quality and user satisfaction while aligning digital touchpoints with new brand identity",
        ],
      },
    ],
  },
];

const coreSkills = [
  "User Experience Strategy",
  "Design Leadership",
  "Team Management",
  "User Research",
  "Accessibility Design",
  "AI-Powered Tools",
  "Design Systems",
  "Cross-functional Collaboration",
  "Brand Alignment",
  "Usability Testing",
  "Design Operations",
  "Inclusive Design",
  "Client Experience",
  "Creative Direction",
  "Process Optimization",
  "Change Management",
];

const education = [
  {
    degree: "Communication Design",
    school: "University of North Texas",
    period: "1999 - 2003",
  },
  {
    degree: "Multi Media & Animation",
    school: "Art Institute of Dallas",
    period: "1998 - 1999",
  },
];

const certifications = [
  "IAAP Certified Professionals in Accessibility Core Competencies (CPACC)",
  "Nielsen Norman UX Master Certification",
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "130+", label: "Team Members Led" },
  { value: "30+", label: "Satisfied Clients" },
];

const dailyTools = ["Figma", "Miro", "ChatGPT", "Copilot", "Microsoft365"];

const drawerTools = [
  "Sketch",
  "UXPin",
  "Bezel",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Relay",
  "Fol.dr",
  "ProCamera",
  "InVision",
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export function Experience() {
  return (
    <section
      id="resume"
      className="relative"
    >
      <div className="relative overflow-clip px-6 py-24 md:px-12 md:py-32 lg:px-16">
        {/* Fixed palette washes — stay in place while content scrolls */}
        <div className="pointer-events-none sticky top-0 -mb-[1px] h-0 w-full">
          <div
            className="absolute -top-48 right-0 h-[600px] w-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, hsl(330, 85%, 65%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-40 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, hsl(270, 60%, 60%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-[600px] right-1/4 h-[500px] w-[500px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(25, 95%, 60%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-[400px] left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(220, 70%, 55%) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header row */}
          <div className="mb-12 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Experience
              </h2>
              <p className="mt-2 text-muted-foreground">
                Over a decade of shaping products, teams, and culture.
              </p>
            </div>
            <a
              href="/Pia_Anderson_Resume.pdf"
              download
              className="glass glass-hover inline-flex h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium text-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* ---- LEFT: Timeline ---- */}
            <div className="flex-1 lg:max-w-[62%]">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[15px] top-3 bottom-0 w-px bg-white/10" />

                <div className="flex flex-col gap-10">
                  {employers.map((employer) => (
                    <div key={employer.name} className="relative">
                      {/* Employer header */}
                      <div className="relative mb-6 flex items-center gap-4 pl-10">
                        <div className="absolute left-[8px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 rounded-full border-2 border-[hsl(330,85%,50%)] bg-background" />
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {employer.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {employer.period} &middot; {employer.duration}
                          </p>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className="flex flex-col gap-6 pl-10">
                        {employer.roles.map((role) => (
                          <div
                            key={`${role.title}-${role.period}`}
                            className="glass relative rounded-xl p-5 md:p-6"
                          >
                            {/* Role dot */}
                            <div className="absolute -left-[29px] top-6 h-[10px] w-[10px] rounded-full bg-[hsl(270,60%,45%)]" />

                            <h4 className="text-base font-semibold text-foreground">
                              {role.title}
                            </h4>
                            <p className="text-sm text-pink">{role.company}</p>
                            <p className="text-xs text-muted-foreground">
                              {role.period}
                            </p>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {role.description}
                            </p>

                            <ul className="mt-3 flex flex-col gap-2">
                              {role.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                                >
                                  <span style={{ color: "hsl(25, 95%, 50%)" }} className="mt-1">&#10040;</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---- RIGHT: Sticky sidebar ---- */}
            <aside className="lg:w-[35%]">
              <div className="flex flex-col gap-8 lg:sticky lg:top-24">
                {/* Core Skills */}
                <div className="glass rounded-xl p-6">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/5 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="glass rounded-xl p-6">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Education
                  </h3>
                  <div className="flex flex-col gap-4">
                    {education.map((edu) => (
                      <div key={edu.degree}>
                        <p className="text-sm font-semibold text-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {edu.school}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="glass rounded-xl p-6">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Certifications
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {certifications.map((cert) => (
                      <li
                        key={cert}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span style={{ color: "hsl(270, 60%, 45%)" }}>&#9670;</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats highlight */}
                <div
                  className="overflow-hidden rounded-xl p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(270, 60%, 30%) 0%, hsl(330, 85%, 45%) 50%, hsl(25, 95%, 50%) 100%)",
                  }}
                >
                  <div className="flex flex-col gap-4 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-3xl font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs font-medium tracking-wider text-white/80">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toolkit */}
                <div className="glass rounded-xl p-6">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Toolkit
                  </h3>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Daily Tools
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {dailyTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-white/5 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Other Tools in the Drawer
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {drawerTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-white/5 border border-border/50 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
