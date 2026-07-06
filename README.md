# Pia Anderson Portfolio

Production portfolio site built with Next.js, featuring NDA-protected case studies and code-first UX delivery.

## What This Shows

- End-to-end product thinking translated into shippable front-end code
- Accessibility-aware UI patterns (semantic HTML, keyboard/focus support)
- Secure gating for NDA case studies with signed session cookies
- Production readiness via lint + build checks in daily workflow

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next-themes` (light/dark mode)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

3. Add case-study access config in `.env.local` (use one password source):

```env
CASE_STUDY_PASSWORD=your-password
```

or:

```env
CASE_STUDY_PASSWORDS=password-one,password-two
```

Optional (recommended) explicit signing secret:

```env
CASE_STUDY_AUTH_SECRET=your-long-random-secret
```

If `CASE_STUDY_AUTH_SECRET` is omitted, the app derives a signing key from your configured password(s).

4. Start development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - local development server
- `npm run lint` - ESLint checks
- `npm run build` - production build + type checks
- `npm run start` - run production build locally
- `npm run generate-favicon` - regenerate favicon assets

## Project Structure

- `app/` - routes and page/layout composition
- `components/` - reusable UI and page components
- `lib/` - content models and helper logic
- `public/` - static assets (images, resume, media)
- `Case Studies/` - source case-study writing and drafts

## NDA Case-Study Access

- Protected pages are under `app/case-study/[slug]`
- Guard logic is handled by `proxy.ts` and `app/api/case-study-auth/route.ts`
- Successful login sets an HTTP-only signed session cookie (12-hour max age)

## Pre-PR Check

```bash
npm run lint
npm run build
```

Both should pass before opening a PR.
