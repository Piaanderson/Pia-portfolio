# Pia Portfolio – Setup on Mac

## Git remotes (work from both Macs)

This repo is set up so **GitLab is where you push and pull** (same as your work computer). GitHub is kept as a mirror target for Vercel.

| Remote  | URL | Use |
|---------|-----|-----|
| **origin** | GitLab (`piaanderson-group/piaanderson-sandbox`) | Daily work: `git pull`, `git push`, branches |
| **github** | GitHub (`Piaanderson/Pia-portfolio`) | Mirror only (GitLab → GitHub → Vercel); no need to push here from this Mac |

**On this (home) Mac, run once to connect to GitLab and set upstream:**

```bash
cd "/Users/piahome/Documents/SITE MARCH 2026/Pia-portfolio"

# Fetch from GitLab (you’ll be prompted to sign in to GitLab if needed)
git fetch origin

# Use the same branch you use at work (e.g. main or dev). If you use main:
git checkout main
git branch --set-upstream-to=origin/main main

# Or if you use dev and it exists on GitLab:
git checkout dev
git branch --set-upstream-to=origin/dev dev

# If dev doesn’t exist on GitLab yet, create it and push (you’ll be prompted for GitLab login):
git checkout dev
git push -u origin dev
```

After that, from this Mac use:

- **Pull latest:** `git pull`
- **Push your work:** `git push`

---

## 1. Prerequisites

### Node.js (required)

- **Check:** `node -v`
- If missing, install from [nodejs.org](https://nodejs.org) (LTS) or `brew install node`

### Git

- **Check:** `git -v`

---

## 2. Project setup (first time or after clone)

```bash
cd "/Users/piahome/Documents/SITE MARCH 2026/Pia-portfolio"
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 3. When you bring the project to a new machine

1. Clone from **GitLab** (so this machine matches work):
   ```bash
   git clone https://gitlab.com/piaanderson-group/piaanderson-sandbox.git Pia-portfolio
   cd Pia-portfolio
   ```
2. Optional: add GitHub as a second remote if you need it:
   ```bash
   git remote add github https://github.com/Piaanderson/Pia-portfolio.git
   ```
3. Then: `npm install` and `npm run dev` as in Section 2.

---

## 4. Clean install (if something’s broken)

```bash
cd "/Users/piahome/Documents/SITE MARCH 2026/Pia-portfolio"
rm -rf node_modules .next
npm install
npm run dev
```

Use **http://localhost:3000** or **http://127.0.0.1:3000** in the browser.

---

## 5. Quick reference

| Task           | Command |
|----------------|---------|
| Pull from GitLab | `git pull` |
| Push to GitLab   | `git push` |
| Install deps     | `npm install` |
| Run dev server   | `npm run dev` |
| Build for production | `npm run build` |
