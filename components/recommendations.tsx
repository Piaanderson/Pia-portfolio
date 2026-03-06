"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Recommendation = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

const recommendations: Recommendation[] = [
  {
    quote:
      "Pia has a clarity of mind and attention to detail that is rare, even among UX people. She has an amazing ability to manage the details of many complex overlapping projects, and see patterns and trends that others might overlook. I found that Pia's opinions were always well structured, based on facts, and focused on the customer's best interests. When I began setting up the UX leadership team at American Airlines for dot com, I knew there was really only one choice for the Design Director, Pia Anderson. I would trust Pia on any project, to manage any UX team, and add immense value to any UX delivery. Trust what she says and you'll have no regrets.",
    name: "David R Jennings",
    title: "User Experience Leader",
    company: "Five Pack",
  },
  {
    quote:
      "Pia is an awesome person to work with and has a great personality! Being very organized and having a broad range of experience Pia's leadership role expanded very quickly in AA.com. She truly is the embodiment of servant leadership and has the unique insight to understand complex challenges and provide creative solutions for our customers. Pia was very instrumental to the success of many projects by having the ability to provide leadership in several areas (Information Architect, User Experience, and Visual Designer). Pia is able to manage several large efforts at once and keep them all in line. I highly recommend Pia to be a part of the leadership team in any organization!",
    name: "Ethan Hodges Jr",
    title: "IT Manager - Manage Reservations",
    company: "American Airlines",
  },
  {
    quote:
      "Whether designing and delivering a comprehensive Web design to the developers or leading and maintaining other UX Designers in the right direction, Pia clearly has the talent to help make your project a success! Having worked with her on several demanding projects for AA.com, I can say without a doubt, this is the young woman you want to lead your next UX Project. Meticulous in nature with a focus on UX Design and UX Leadership, and a 'let's get it done' attitude, Pia is ahead of her class in the UX Field. So if talent is what you are looking for, you've found it! Contact Pia today and see for yourself why she should be on your Team.",
    name: "Rob Busby",
    title: "Manager Web Services",
    company: "Trellix",
  },
  {
    quote:
      "Pia's skills lie in both communication and design. Her ability to understand complex problems and then be able to come back with the right answers the first time is not something you see everyday. Her ability to be thrown into a project and take charge was something that really helped me out and I have enjoyed working with her on projects since. Pia is a great IA, a great UX Designer, and a fun co-worker with a great attitude.",
    name: "Mike Townson",
    title: "Director of Product Design",
    company: "CNN",
  },
  {
    quote:
      "Pia is a rare design talent and a truly empathic advocate for the user. In a role where many different teams needs must be balanced, Pia could always find a solution that worked for everyone in the company, and the most important one outside the company, the user.",
    name: "Jimmy Ball",
    title: "Director of Global Product Design",
    company: "Solera",
  },
  {
    quote:
      "Pia is someone that anyone would want on their team or within their organization. She brings an infectious energy and an aptitude that is beyond measure, which helps everyone around her level up. Her keen eye for detail, a measured approach to tough UX problems, and a true servant leader make her an asset to everyone she's around. I truly enjoyed my time working alongside her and learned a lot from her.",
    name: "Issac Holcomb, M.S.",
    title: "Design Manager",
    company: "H-E-B",
  },
  {
    quote:
      "Pia and I worked together at AA.com during the recent Rebrand across their digital media while she was leading a group of UX and IA teams using agile! She provided excellent coaching and leadership to all teams. Pia clearly explained how to accurately create presentations for the customer as well as user stories for the agile teams, a Rebrand style guide, creating acceptance criteria and creating UX reviews to produce optimum results. She was motivational, fun to work with, professional, and extremely knowledgeable about all areas of UX and Lean UX!",
    name: "Peter Graves, RTE, SSM, PMP, SA, SP",
    title: "Agile Principal",
    company: "Cognizant",
  },
];

// Triple the array for seamless infinite looping
const GAP = 32;
const LEN = recommendations.length;
const track = [...recommendations, ...recommendations, ...recommendations];

export function Recommendations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  // Start in the middle copy so we can go backwards too
  const [index, setIndex] = useState(LEN);
  const [animate, setAnimate] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  // Measure container and detect mobile
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
      setIsMobile(window.innerWidth < 768);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Card width: 1 card on mobile, 2 cards on desktop
  const cardW = containerWidth > 0
    ? isMobile
      ? containerWidth
      : (containerWidth - GAP) / 2
    : 0;
  const step = cardW + (isMobile ? 0 : GAP);
  const offset = -(index * (cardW + GAP));

  const prev = () => { setAnimate(true); setIndex((i) => i - 1); };
  const next = () => { setAnimate(true); setIndex((i) => i + 1); };

  // After each slide, silently reset to middle copy if needed
  const handleTransitionEnd = useCallback(() => {
    let reset: number | null = null;
    if (index < LEN) reset = index + LEN;
    else if (index >= LEN * 2) reset = index - LEN;

    if (reset !== null) {
      setAnimate(false);
      setIndex(reset);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  }, [index]);

  return (
    <section className="relative px-6 pt-24 pb-8 md:pt-32 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recommendations from colleagues and collaborators.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Recommendations"
          className="relative flex items-center gap-4"
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous recommendation"
            className="flex-shrink-0 rounded-full border border-border/40 bg-background/60 p-2.5 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Sliding track */}
          <div ref={containerRef} className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${offset}px)`,
                transition: animate
                  ? "transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {track.map((rec, i) => (
                <div
                  key={`${rec.name}-${i}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${(i % LEN) + 1} of ${LEN}`}
                  className="glass flex flex-col rounded-xl p-6 md:p-8"
                  style={{
                    width: cardW > 0 ? `${cardW}px` : isMobile ? "100%" : "calc((100% - 32px) / 2)",
                    minWidth: cardW > 0 ? `${cardW}px` : isMobile ? "100%" : "calc((100% - 32px) / 2)",
                    flexShrink: 0,
                  }}
                >
                  <Quote className="mb-4 h-6 w-6 text-deep-purple opacity-60" aria-hidden="true" />
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {`"${rec.quote}"`}
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {rec.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {rec.title}, {rec.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next recommendation"
            className="flex-shrink-0 rounded-full border border-border/40 bg-background/60 p-2.5 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
