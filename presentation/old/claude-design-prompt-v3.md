# ARCHIVED — Claude Design Prompt v3

> Do not use this prompt for the current deck. Use `claude-design-prompt.md`, which is synchronized to the 28-slide deck and the complete master script.

# Claude Design Prompt — Slide Deck Update (v3)

**Attach both files when you use this prompt:**
1. The previous slide deck PDF (`Design9-27-26asm.pdf`) — this is the design baseline
2. The updated script (`capital-one-portfolio-review.md`) — this is the presenter-notes source of truth

Paste everything below the line into Claude Design.

---

I'm updating my portfolio review deck for a Director-level interview at Capital One on Tuesday, September 29, 2026.

I have attached:
1. The previous slide deck (PDF, 24 slides, portrait Letter). That file is the **design baseline**. Keep its visual language, personality, color, type, photo treatment, and layout patterns. This is a content update, not a redesign.
2. The presentation script (Markdown, 26 slides). That file is the **presenter-notes source of truth**.

For **on-slide content**, follow the slide-by-slide instructions in this prompt. They intentionally condense some of the script's on-slide blocks into visual callouts. For **presenter notes**, use the complete spoken script verbatim.

## Hard constraints

- **Format: landscape 16:9.** The previous PDF is portrait Letter. Rebuild in 16:9 for a virtual screen share. Do not keep 8.5 × 11 portrait.
- **26 slides**, in the script's order. The previous deck has 24 slides. Expand to 26 by matching the script structure. Do not invent extra slides. Do not merge case-study decision slides.
- **Do not quote the job description** anywhere on slides.
- **No paragraph body copy on slides.** The presenter is speaking the full story. If the previous deck has a paragraph that duplicates the narration, rewrite it as a visual callout, pull quote, labeled tile, or concise caption. Do **not** overcorrect by stripping the deck to headlines only. Keep personality through short callouts, metrics, and annotations on screenshots. A callout may wrap when needed; the test is whether it is easy to scan while listening, not an arbitrary line count.
- **Presenter notes: the full spoken script, not key beats.** For every slide, paste the complete **WHAT TO SAY** text from the attached Markdown into presenter notes, verbatim. Preserve pauses, transition cues, and bracketed stage directions in their original position. Include any SPEAKER NOTE under that slide. Do not summarize, bullet, or shorten. I will practice from the full script and write my own key beats later.
- **Do not add Agent OS to the closing slide.** Agent OS may stay as a small optional visual on the credentials slide only.
- You own visual design. I am specifying content, structure, and what must change. Choose layout, type scale, crop, and composition.

## Text density: callouts, not paragraphs

Audit every slide in the previous PDF. Anywhere you see a block of sentences, replace it with an interesting callout. Keep images large.

Good on-slide forms:
- Single-line titles
- 3–6 word labels on photos or diagrams
- Metric tiles
- One pull quote
- A short annotation on a screenshot (one line)
- Numbered tiles that match spoken First / Second / Third

Not on slides:
- Paragraphs that duplicate the talk track
- Multi-sentence reflections
- Career-story prose
- Role descriptions written as a bio

### Callouts for slides that tend to run dense

**Slide 4 — Credentials.** Use the three certification badges plus three compact tiles: **Current**, **Recent**, and **Community**. This should establish credibility at a glance, not read like a resume.

**Slide 5 — Origin.** Timeline plus one pull quote, not a bio. Suggested pull quote: **"I got to make people's days easier."** Career labels only: Agencies → Freelance → AA → Consulting/SWA → PwC.

**Slide 8 — Role and suite.** App names as labels on the three screenshots. One callout for the suite, not a paragraph. Suggested: **"OpsSuite Design System · five applications."** Printer closet is spoken.

**Slide 12 — Design system.** Component library + the accessibility line as a small bar or caption: **WCAG AA · Keyboard navigation · Focus management.** The sizing-mistake story is spoken.

**Slide 13 — Research and team.** Hero photo. Two or three chips, not a recap. Suggested: **"3 veteran SODs"** · **"Peer review as alignment"** · **"Teaching design while delivering."**

**Slide 14 — Outcomes.** Use three metric tiles and a short quote excerpt. Do not place the full testimonial on the slide.

**Slide 15 — Southwest reflection.** Two tiles, not a speech. Title: **"Two things I hold from this work."** Left tile (primary — a stated principle, no quote marks, no attribution): **"Trust is a design deliverable — not a byproduct of good design."** Right tile (secondary, small label above reading "What I'd do differently"): **"Start every design system from the most complex screen."** No paragraph body copy. No accessibility line. No scrum-master or side-by-side-engineering references on the slide — those are Q&A material now.

**Slide 18 — Forge role.** One line of altitude, not an org dump. Suggested: **"Player-coach · UX vision, POC, four flows."** Team-building detail is spoken.

**Slide 23 — Making.** Screenshot does the work. One callout if needed: **"Shipped front-end in the shared repo."** No JD quote. No paragraph about 67 designers.

**Slide 24 — Outcomes.** Tiles, not a paragraph stack. Keep the five facts as compact tiles. Tracking is a distinct row, not a sentence.

**Slide 25 — Forge reflection.** Use two concise cards:
- Slide title: **"What I'm taking from Forge"**
- **What worked:** "The right solution had to work for users and for the teams responsible for the existing systems."
- **What I'd change:** "We should have separated design review from code review as the POC became a product."

Do not use "Elevated, not replaced." Do not turn either card into a general rule about always building on top of legacy systems.

## Deck structure (26 slides)

Opening: 1 Title, 2 Agenda, 3 About Me person, 4 Credentials, 5 Origin story
Southwest: 6 Title, 7 Problem, 8 Role and suite, 9–10 AI trust, 11–12 Design system, 13 Research and team, 14 Outcomes, 15 Reflection
Forge: 16 Title, 17 Problem, 18 Role, 19 Experience layer, 20–21 Research direction, 22–23 Leading through making, 24 Outcomes, 25 Reflection
Close: 26 Thank you

## What goes ON each slide vs spoken only

Use the slide-by-slide instructions below as the source of truth for on-slide copy. Spoken content is presenter-only unless explicitly requested below.

### Slide 1 — Title
On-slide:
- Pia Anderson
- Design Director
- Portfolio Review — September 2026
Clean. No clutter.

### Slide 2 — Agenda
On-slide:
- About Me
- Case Study 1: Southwest Airlines Ops Suite · 20 min including intro + 10 min questions
- Case Study 2: Project Forge · 20 min + 10 min questions
The 20 + 10 timing must be visible. Previous deck likely omitted it.

### Slide 3 — About Me: The Person
Family photo collage. Warm, real life, not curated perfection.
On-slide supporting text may include family and UXPA / teaching AI at schools.
**Remove** any hair-dye / "the sunset is intentional" line.
**Do not** list hobbies as a text wall (reading, gaming, Pilates). Photos plus UXPA and school AI teaching are enough.

### Slide 4 — Credentials
Use the three certification badges:
- NN/g UX Certification
- IAAP Accessibility Certification
- Anthropic Claude Certified Associate

Use three compact tiles:
- **Current:** Design Director, PwC · 67 designers (US + Mexico) + 10 contractors
- **Recent:** Agent OS UX vision · patent-pending · 250+ deployed agents
- **Community:** Design Chair, UXPA 2026 Conference

Not a resume. Optional Agent OS screenshot only if the layout still has room.

### Slide 5 — Origin story
Typography-forward. If there is a career timeline, it must be:
**Agencies → Freelance → AA → Consulting/SWA → PwC**
Do not start the timeline at American Airlines.
Service design is spoken. Do not headline "service design" as a badge.
Do not put the origin story in paragraph form. Timeline + one pull quote. Full story goes in presenter notes.

### Slide 6 — Southwest title
NOC environment as background or alongside.
On-slide:
- Southwest Airlines Ops Suite
- Senior UX Designer · projekt202
- Recovery time during major weather events went from 4-6 hours to minutes.

### Slide 7 — Problem
Large NOC photo. Minimal text. Let the room do the work.

### Slide 8 — Role and suite
Three app screenshots (Gate Schedule, Station Settings, Recovery Optimizer). Mix dark and light.
Labels on the images plus one suite callout. No paragraph restating role, research, or the printer closet.

### Slide 9 — AI trust part 1
Baker / Recovery Optimizer in the NOC. Large image.
Light supporting text only if needed (three ranked plans + manual path). The trust story is spoken.

### Slide 10 — AI trust part 2
Closer Baker UI. Optional simple diagram of: three AI plans → human override → system learns.
Do not put the Capital One parallel on the slide.

### Slide 11 — Design system part 1
Side-by-side dark mode (NOC) and light mode (station / airport). Same system, different environments.

### Slide 12 — Design system part 2
Component library as the main visual. Optional tarmac tablet as secondary.
Add a small accessibility line, not a headline:
**WCAG AA · Keyboard navigation · Focus management — built into every component**
If the previous deck quoted the JD about design systems / swirl, remove that quote. Do not replace it with another JD line.

### Slide 13 — Research and team
Tarmac tablet photo is the hero. Give it space.
Chips or captions only. Influence-through-education is spoken. No paragraphs.

### Slide 14 — Outcomes
Large metrics:
- Recovery time: 4-6 hours → minutes
- On-time performance: 1–1.8 percentage point year-over-year improvement
- Adoption: used hundreds of times in first winter
Use only this testimonial excerpt with attribution:
**"The benefit to our overall on-time performance has been staggering."**
— Charles Cunningham and Ryan Files, Southwest Airlines

The full testimonial stays in presenter notes.
Add it after the full WHAT TO SAY text for this slide.

### Slide 15 — Southwest reflection
Two tiles. Not a speech. Title: **"Two things I hold from this work."**
- Left tile (larger, primary — a stated design principle, no quote marks, no attribution): **"Trust is a design deliverable — not a byproduct of good design."**
- Right tile (secondary, with a small label above it reading "What I'd do differently"): **"Start every design system from the most complex screen."**

No paragraph body copy. No third tile. No accessibility line. No references to scrum masters, dual-track agile, side-by-side engineering, or "amplifying expertise." No "a decade later" or similar age-signaling language. The scrum-master and side-by-side-engineering story is Q&A material only, not on the slide.

Presenter notes for this slide come verbatim from the attached script's WHAT TO SAY block — the ~55-second version ending with "Same conviction, at a different altitude — let's talk about Forge."

### Slide 16 — Forge title
Forge dashboard hero.
On-slide:
- Project Forge — AI-First Enterprise Platform
- Design Director · PwC (Player-Coach)
- Currently in pilot
Do not put "no spec / no brief / no end state" as a headline. That is spoken.

### Slide 17 — Forge problem
Create or update a **numbered three-system diagram**:
1. Budget Creation — Manual entry, export to Excel, no comparison
2. Staffing / Deployment — Systems don't talk — duplicates cause chaos
3. Monitoring & Reporting — Backward-looking only, 30-day lag on issues
Footer: 10+ years of business logic each · No integration between systems
Visual separation so First / Second / Third is easy to follow. Muted "before" treatment.

### Slide 18 — Role
Dashboard smaller. One altitude callout. Weekly Director syncs, Super-ssociates, and career-prep sessions are **spoken only**. Do not add them as an org-chart dump or a paragraph.

### Slide 19 — Experience layer
Architecture diagram, vertical:
- Top: Forge unified interface
- Middle: AI + Experience Layer (Flex Felix, smart defaults, predictive monitoring, budget comparison)
- Bottom: the three legacy systems
Arrows up. Message: elevated, not replaced. Keep it simple. Three colors max.
Do not put JD language about greenfield vs transformation on the slide.

### Slide 20 — Research part 1
Pursuit signals + briefing / decision frame with evidence. AI in the screens, not a separate chat as the only UI.
Minimal labels. The n=5 finding is spoken.

### Slide 21 — Research part 2
Dual path: chat + screens in sync, and/or wizard with "From briefing" prefill.
Transparency is spoken.

### Slide 22 — Leading through making part 1
Budget comparison (Traditional / AI-Augmented / AI-Forward).
Add a small annotation, not a headline:
**Role-based access governs create, edit, and approve**

### Slide 23 — Leading through making part 2
Wizard with AI pre-fill / "From briefing" labels.
If the previous deck quoted "player-coach" from the JD, **remove the quote**. Keep the making/code story visual. No JD citation.

### Slide 24 — Outcomes
Five compact tiles, not stacked sentences:
- POC → Priority One in 10 days
- Team I built: Engineering pod lead + Sr UX Researcher + Design Manager (transitioning for Beta)
- Pilot status: Engineering pod building full production UI. Pilot generating data.
- **Tracking:** Time to budget creation · Duplicate project reduction · User satisfaction
- Transitioning: Design Manager taking day-to-day through Beta and launch
Treat **Tracking** as "what we are measuring," visually distinct from "what we have achieved." The spoken outcomes paragraph lives in presenter notes.

### Slide 25 — Forge reflection
Use two cards on a clean background:
- Slide title: **"What I'm taking from Forge"**
- **What worked:** "The right solution had to work for users and for the teams responsible for the existing systems."
- **What I'd change:** "We should have separated design review from code review as the POC became a product."

Keep both statements in sentence case. Do not add quotation marks, slogans, or extra conclusions. Do not use "Elevated, not replaced." The complete reflection and transition into Q&A are spoken and belong in the presenter notes.

### Slide 26 — Thank you
On-slide:
- Pia Anderson
- Email (use a placeholder if needed)
- Happy to go deeper on anything we discussed.
**Remove** any "Agent OS" invite from this slide.

## Presenter notes (required)

Copy from the attached script, slide by slide:

1. Find that slide's **WHAT TO SAY** block.
2. Paste the full quoted talk track into that slide's presenter notes.
3. Preserve pauses, transition cues, and bracketed stage directions exactly where they occur.
4. Paste any **SPEAKER NOTE** for that slide underneath.
5. Do not turn this into key beats, bullets, or a summary.

Agenda, title, and thank-you slides still get their short WHAT TO SAY text in notes.

## Images

Follow the IMAGE INVENTORY in the attached script and `presentation/slides/README.md` if you have it. Prefer real product-in-environment photos over decoration.

## Design direction (from the previous deck, adapted to 16:9)

- Clean, modern, minimal. Slides frame the work. They do not compete with it.
- Dark backgrounds for title / section cards (1, 6, 16, 26).
- Light backgrounds for content slides.
- Large type, generous whitespace.
- Large contextual images.
- No decorative icons.
- Neutral base with the warm accent already in the previous deck.
- Tone: confident, warm, direct. It should feel like the same designer as the previous PDF, in a format that works on a video call.
