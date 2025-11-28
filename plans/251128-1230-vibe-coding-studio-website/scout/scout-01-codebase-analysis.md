# Codebase Analysis Report

## Current Stack
- Astro 5.16+ with MDX, sitemap integrations
- Dual deployment: GitHub Pages (static) + Cloudflare Workers (SSR)
- Decap CMS at `public/admin/`
- Path utility `getPath()` for base path handling

## File Structure
```
src/
├── assets/           # Images (blog-placeholder-*.jpg)
├── components/       # Astro components
│   ├── BaseHead.astro    # SEO, meta tags, font preloads
│   ├── Header.astro      # Navigation (uses getPath)
│   ├── Footer.astro
│   ├── HeaderLink.astro
│   └── FormattedDate.astro
├── content/
│   └── blog/         # Markdown posts
├── layouts/
│   └── BlogPost.astro    # Blog post layout
├── pages/
│   ├── index.astro       # Home page
│   ├── about.astro       # About page (uses BlogPost layout)
│   ├── rss.xml.js
│   └── blog/
│       ├── index.astro   # Blog listing
│       └── [...slug].astro
├── styles/
│   └── global.css
├── utils/
│   └── paths.ts          # getPath() utility
├── consts.ts             # SITE_TITLE, SITE_DESCRIPTION
└── content.config.ts     # Blog collection schema
```

## Key Patterns
- **lang="en"** hardcoded → needs **lang="vi"**
- **getPath()** required for all internal links
- **Image** from `astro:assets` for optimized images
- **getCollection('blog')** for content access
- CSS-in-component styling (scoped styles)

## Required Changes for Vietnamese Corporate Site
1. Update `src/consts.ts` with Vietnamese branding
2. Change `lang="en"` → `lang="vi"` in all pages/layouts
3. Add Vietnamese fonts supporting diacritics (Open Sans/Montserrat)
4. Create Contact page (`src/pages/contact.astro`)
5. Redesign all pages with modern effects
6. Replace placeholder images with real stock photos
7. Update Decap CMS config for Vietnamese fields
