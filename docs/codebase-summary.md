# Codebase Summary

**Project:** Astro CMS Blog - Vibe Coding Product Studio
**Language:** Vietnamese
**Last Updated:** 2025-11-28

## Tech Stack

- **Framework:** Astro 5.16+ (static site generation)
- **CMS:** Decap CMS
- **Deployment:** Dual-target (GitHub Pages static / Cloudflare Workers SSR)
- **Content:** MDX with content collections
- **Fonts:** Google Fonts (Montserrat + Open Sans + JetBrains Mono)

## Architecture

### Dual Deployment System
- **GitHub Pages:** `astro.config.mjs` - static output, base path `/repo-name/`
- **Cloudflare:** `astro.config.cloudflare.mjs` - server output, SSR

### Path Handling
All internal links use `getPath()` utility from `src/utils/paths.ts` to handle GitHub Pages base path automatically:
- Dev: `/`
- Production: `/repo-name/`

## Branding (Phase 1 Complete)

**Company:** Vibe Coding Product Studio
**Language:** Vietnamese (lang="vi" on all pages)
**Tagline:** "Lập trình theo cảm hứng, sáng tạo không giới hạn"

### Key Constants (`src/consts.ts`)
```typescript
SITE_TITLE = 'Vibe Coding Product Studio'
SITE_DESCRIPTION = 'Studio phát triển sản phẩm công nghệ hiện đại...'
COMPANY_EMAIL = 'hello@vibecoding.studio'
```

## Design System (Phase 1 Complete)

### Token Architecture
Location: `src/styles/tokens/*.css`
Imported via: `src/styles/global.css`

#### 1. Colors (`tokens/colors.css`) - 30 variables
- **Primary:** `--color-primary` (#0066FF) + light/dark variants
- **Accent:** `--color-accent` (#FF6B6B) + variants
- **Metallics:** `--color-metallic` (#B8C4CE) + variants
- **Ethereal:** `--color-ethereal` (#A7C7E7) + variants
- **Neutrals:** 10-step scale from `--color-neutral-900` to `--color-neutral-50`
- **Semantic:** `--color-text`, `--color-surface`, `--color-border`
- **Status:** success, warning, error, info
- **Glass:** `--glass-bg`, `--glass-border`, `--glass-shadow`
- **Legacy compatibility:** Maintains old vars for existing components

#### 2. Typography (`tokens/typography.css`) - 24 variables
- **Fonts:**
  - `--font-sans`: Open Sans (Vietnamese diacritics support)
  - `--font-heading`: Montserrat
  - `--font-mono`: JetBrains Mono
- **Sizes:** Modular scale 1.25 (12px-60px), 10 steps
- **Line heights:** 6 values optimized for Vietnamese (1.6 normal vs standard 1.5)
- **Letter spacing:** 5 values
- **Weights:** 400/500/600/700
- **Responsive:** Mobile breakpoint reduces h1-h3 sizes

#### 3. Spacing (`tokens/spacing.css`) - 19 variables
- **Scale:** 8px base system (4px-128px)
- **Containers:** 5 widths (640px-1400px)
- **Section padding:** Responsive (`--section-padding-y/x`)
- **Radius:** 6 values (4px-9999px)

#### 4. Effects (`tokens/effects.css`) - 15 variables + utilities
- **Shadows:** 5 standard + glass + neumorphism (light/dark/inset)
- **Transitions:** 4 speeds (150ms-500ms ease)
- **Blur:** 4 values (4px-24px)
- **Utilities:**
  - `.glass` / `.glass-dark` - Glassmorphism with backdrop-filter
  - `.neuro` - Neumorphism button with dual shadows
  - `.gradient-primary/accent/ethereal` - Gradient backgrounds
  - `.hover-lift` - Transform + shadow on hover
- **Accessibility:** `@media (prefers-reduced-motion: reduce)`

### Global Styles (`src/styles/global.css`)
- CSS reset (box-sizing, margin/padding reset)
- Typography defaults (headings, links, paragraphs)
- Code blocks (inline + pre with dark background)
- Containers + sections
- Accessibility (`.sr-only`, `::selection`, `:focus-visible`)
- Smooth scroll (respects reduced motion preference)

## File Structure

```
src/
├── components/
│   ├── BaseHead.astro       # SEO, fonts, meta (Vietnamese)
│   ├── Header.astro         # Navigation
│   ├── Footer.astro
│   ├── HeaderLink.astro
│   └── FormattedDate.astro
├── layouts/
│   └── BlogPost.astro       # Blog post template (lang="vi")
├── pages/
│   ├── index.astro          # Homepage (lang="vi")
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro      # Blog listing (lang="vi")
│   │   └── [...slug].astro  # Blog post routes
├── content/
│   └── blog/                # MDX blog posts
├── styles/
│   ├── global.css           # Base + token imports
│   └── tokens/
│       ├── colors.css       # 30 color variables
│       ├── typography.css   # 24 typography variables
│       ├── spacing.css      # 19 spacing variables
│       └── effects.css      # 15 effect variables + utilities
├── utils/
│   └── paths.ts             # getPath() for GitHub Pages
├── consts.ts                # Vietnamese branding constants
└── content.config.ts        # Content collections

public/
└── admin/                   # Decap CMS
    ├── config.yml
    └── index.html
```

## Content Collections

**Location:** `src/content/blog/`
**Schema:** Title, description, pubDate, updatedDate, heroImage (optional), body (markdown)
**Format:** MDX

## Deployment

### GitHub Pages
- **Workflow:** `.github/workflows/deploy-github-pages.yml`
- **Trigger:** Push to `main`
- **Config:** Reads `GITHUB_USERNAME` and `GITHUB_REPO` from `.env` or `astro.config.mjs`
- **CMS URL:** `https://[username].github.io/[repo]/admin/`

### Cloudflare Workers
- **Workflow:** `.github/workflows/deploy-cloudflare.yml`
- **Trigger:** Push to `cloudflare` branch
- **Secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- **Config:** `wrangler.toml` + `astro.config.cloudflare.mjs`

## Phase 1 Status: ✅ Complete

### Completed
- [x] Vietnamese branding (consts.ts, all page lang="vi")
- [x] Google Fonts integration (Montserrat + Open Sans + JetBrains Mono)
- [x] Design token system (88 variables across 4 files)
- [x] Global CSS reset and base styles
- [x] Glassmorphism + neumorphism utilities
- [x] Accessibility (reduced motion, focus states)
- [x] Responsive typography and spacing

### Design Token Summary
- **Colors:** 30 vars (primary/accent/metallic/ethereal/neutrals/semantic/glass)
- **Typography:** 24 vars (fonts/sizes/heights/spacing/weights + Vietnamese optimization)
- **Spacing:** 19 vars (8px scale + containers + radius)
- **Effects:** 15 vars + 8 utility classes (shadows/transitions/blur/glass/neuro)

### Next Phases
- Phase 2: Homepage hero + sections
- Phase 3: Blog listing + post layout
- Phase 4: Components (cards, buttons, navigation)
- Phase 5: Content migration + CMS configuration
