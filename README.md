# Lash Legacy SG Website

A single-page landing site for **Lash Legacy SG**, a Singapore lash & brow studio.

- Instagram: [@lashlegacysg](https://www.instagram.com/lashlegacysg/)
- Live URL: *(deploy to Vercel to generate)*

## What's included

- `public/index.html` — static HTML version (works without a build step)
- Next.js 15 project files in `app/` and `components/` (for future React-based edits)
- Tailwind CSS styling
- Unsplash beauty/lash images with attribution

## Data to update before sharing with the salon

Search for these placeholders and replace with verified details:

- `REPLACE_ADDRESS`
- `REPLACE_PHONE`
- `REPLACE_EMAIL`
- `REPLACE_PRICE`

Update either:
- `lib/salon-data.ts` (Next.js version), then run `npm run build`
- `public/index.html` (static version) directly

## Deploy to Vercel from phichua GitHub

```powershell
# 1. Go to the project folder
cd "$env:USERPROFILE\code\lash-legacy-sg"

# 2. Initialize git and commit
git init
git add .
git commit -m "Initial Lash Legacy SG website"

# 3. Create repo on GitHub under phichua and push
git remote add origin https://github.com/phichua/lash-legacy-sg.git
git branch -M main
git push -u origin main

# 4. Deploy to Vercel (linked to phichua repo)
vercel --prod
```

When Vercel asks, choose:
- Framework preset: **Other** (for static HTML) or **Next.js** if deploying the React version
- Output directory: `public` (if using static HTML preset)
- Root directory: `./`

## Notes

- The static `public/index.html` is the fastest way to go live; it requires no build.
- The Next.js version is kept for future component-based expansion.
