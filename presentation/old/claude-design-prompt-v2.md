# Claude Design Prompt — Slide Deck Update (v2)

**Attach both files when you use this prompt:**
1. The previous slide deck PDF (`Design9-27-26asm.pdf`) — this is the design baseline
2. The updated script (`capital-one-portfolio-review.md`) — the content source of truth

---

## The Prompt

I'm updating my portfolio review deck for a Director-level interview at Capital One. I've attached the previous version (PDF, 24 slides) and the updated script (Markdown, 26 slides).

**The previous deck is the baseline.** Keep the design language, visual personality, color palette, typography, layout patterns, and overall aesthetic. This is NOT a redesign — it's a content update with targeted refinements.

The deck goes from 24 to 26 slides. The structure is the same: Opening → Southwest Case Study → Forge Case Study → Close. Here's exactly what needs to change:

---

### Slide-by-slide changes

**Slide 3 — About Me: The Person**
- Remove the hair dye / "the sunset is intentional" line from the on-slide text if it appears. Everything else stays.

**Slide 5 — About Me: The Origin Story**
- If the slide has a career timeline visual, update the arc to: **Agencies → Freelance → AA → Consulting/SWA → PwC** (the previous version started at American Airlines — the actual career started earlier in agencies and freelance).

**Slide 8 — My Role & The Suite** ⚠️ Make more scannable
- Keep the three app screenshots and the overall layout. But if there are dense paragraphs of body text on this slide, convert them to shorter, scannable lines or compact bullets. The presenter will narrate the detail — the slide should support that, not duplicate it. Don't strip the text entirely; just make it breathable.

**Slide 12 — Decision 2: The Design System (Part 2)**
- Add a short accessibility callout: **"WCAG AA · Keyboard navigation · Focus management — built into every component"** — as a supporting detail alongside the existing visuals. Keep it understated, not a headline.
- Update the C1 connection text (if it appears on the slide). The old version quoted the JD directly ("Your JD mentions 'the value of design systems...'"). Replace with: **"Starting from the most complex screen and designing outward — that's the principle I'd bring to any design system at scale."**

**Slide 13 — Research & Growing the Team** ⚠️ Make more scannable
- Keep the tarmac tablet photo and the overall layout. But if there are dense paragraphs on this slide, convert to shorter, scannable lines. The research narrative and the new "Influence Through Education" content are spoken — they don't need to be on the slide as full paragraphs. Brief supporting text or short bullets are fine; walls of text are not.

**Slide 16 — Case Study 2 Title Card**
- No visual changes. On-slide text stays the same:
  - Project Forge — AI-First Enterprise Platform
  - Design Director · PwC (Player-Coach)
  - Currently in pilot

**Slide 17 — The Problem**
- If the diagram for the three legacy systems exists, update to emphasize **three distinct, numbered problems** with clear visual separation:
  1. **Budget Creation** — "Manual entry, export to Excel, no comparison"
  2. **Staffing / Deployment** — "Systems don't talk — duplicates cause chaos"
  3. **Monitoring & Reporting** — "Backward-looking only, 30-day lag on issues"
- The "First... Second... Third..." structure should be visually clear so the audience can follow along as the presenter walks through each one.

**Slide 18 — My Role**
- No visual changes to the slide layout. If there's on-slide text about team size, keep it. The new team structure detail (weekly Director syncs, peer reviews, Super-ssociates) is spoken only — it does NOT go on the slide.

**Slide 22 — Decision 3: Leading Through Making (Part 1)**
- Keep the budget comparison visual as-is. Add a small supporting detail: **"Role-based access governs create, edit, and approve"** — as a callout or annotation near the comparison view. Small, not a headline.

**Slide 24 — Outcomes & What's Next**
- Add a new line to the on-slide text between "Pilot status" and "What I'm transitioning":
  - **Tracking:** Time to budget creation · Duplicate project reduction · User satisfaction (multi-draft comparison + pursuit dashboard)
- Give this line a slightly different visual treatment to distinguish "what we're measuring" from "what we've achieved" — but keep it consistent with the slide's existing style.

---

### Slides with NO changes

Slides 1, 2, 4, 6, 7, 9, 10, 11, 14, 15, 19, 20, 21, 23, 25, 26 — keep exactly as they were in the previous deck. No content or visual changes.

---

### Diagrams (if not already created in previous version)

**Diagram 1: Forge Problem — Three Legacy Systems (Slide 17)**
Three boxes, numbered 1-2-3:
- **1. Budget Creation** — subtitle: "Manual entry, export to Excel, no comparison"
- **2. Staffing / Deployment** — subtitle: "Duplicate projects, phone calls to sort versions"
- **3. Monitoring & Reporting** — subtitle: "Backward-looking only, 30-day lag on issues"
Below all three: "10+ years of business logic each · No integration between systems"
**Style:** Clean, muted. These are the "before" — they should feel constrained. Numbered to match the spoken delivery.

**Diagram 2: Forge Architecture — Experience Layer (Slide 19)**
Vertical stack:
- **Top:** Forge UI — "Forge — Unified Interface"
- **Middle:** Wide bar — "AI + Experience Layer" with sub-labels: "Flex Felix AI Agent · Smart Defaults · Predictive Monitoring · Budget Comparison"
- **Bottom:** Three boxes (same systems, smaller)
- Arrows flowing upward
**Style:** Experience layer feels like connective tissue — different color from both legacy systems and Forge UI. Message: "elevated, not replaced."

---

### Design direction (maintain from v1)

- Clean, modern, minimal. Let the work speak — slides frame it, don't compete.
- Dark background for section transitions / title cards (Slides 1, 6, 16, 26)
- Light background for content slides
- Typography-forward. Large headlines, generous whitespace.
- Images should be large and contextual — real products in real environments.
- No decorative elements. No icons for decoration's sake.
- Color palette: neutral base with warm accent (maintain from v1)
- **Tone:** Confident, warm, direct. The deck should feel like the presenter — not a template.

---

### Image inventory

The `slides/README.md` file and the script's IMAGE INVENTORY section contain the full image-to-slide mapping. Use those as the definitive guide.
