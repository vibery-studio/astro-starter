# Astro CMS Blog

Production-ready Astro blog with Decap CMS, configured for deployment to both GitHub Pages and Cloudflare Workers.

## Features

- ✅ Astro 5.16+ (latest)
- ✅ Decap CMS integration
- ✅ Dual deployment: GitHub Pages + Cloudflare Workers
- ✅ MDX support
- ✅ SEO-friendly with sitemap and RSS
- ✅ 100/100 Lighthouse performance

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for GitHub Pages to `./dist/` |
| `npm run build:cloudflare` | Build for Cloudflare Workers |
| `npm run preview` | Preview GitHub Pages build |
| `npm run preview:cloudflare` | Preview Cloudflare build with Wrangler |
| `npm run deploy:cloudflare` | Build and deploy to Cloudflare |

## GitHub Pages Deployment

### Setup

1. **Configure Environment Variables:**

   Create `.env` from `.env.example`:
   ```bash
   cp .env.example .env
   ```

   Update values:
   ```env
   GITHUB_USERNAME=yourusername
   GITHUB_REPO=your-repo-name
   ```

2. **OR Update Config Directly:**

   Edit `astro.config.mjs` lines 12-13:
   ```js
   const GITHUB_USERNAME = 'yourusername';
   const GITHUB_REPO = 'your-repo-name';
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: GitHub Actions

4. **Deploy:**
   - Push to `main` branch
   - Automatic deployment via `.github/workflows/deploy-github-pages.yml`

### Path Handling

**IMPORTANT:** This project correctly handles GitHub Pages base paths.

- **Local dev** (`npm run dev`): Uses `/` (no base path)
- **GitHub Pages**: Uses `/repo-name/` automatically
- All internal links use the `getPath()` utility from `src/utils/paths.ts`

No more 404s or broken URLs like `username.github.io/repo-nameblog`!

### CMS Access

After deployment: `https://yourusername.github.io/repo-name/admin/`

## Cloudflare Workers Deployment

### Setup

1. Install Wrangler CLI (if not using workflow):
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Update `wrangler.toml`:
   - Set `name` to your project name
   - Configure `routes` for custom domain

4. Update `astro.config.cloudflare.mjs`:
   - Set `site` to your domain

### Manual Deploy

```bash
npm run deploy:cloudflare
```

### GitHub Actions Deploy

1. Push to `cloudflare` branch
2. Set secrets in repo Settings → Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

## CMS Configuration

CMS config: `public/admin/config.yml`

### Setup Git Gateway (for GitHub)

1. Enable Netlify Identity or use alternative OAuth provider
2. Update `backend` in `config.yml`
3. Configure authentication

### Content Collections

Blog posts: `src/content/blog/`

Fields:
- Title
- Description
- Publish Date
- Hero Image (optional)
- Body (Markdown)

## Project Structure

```
├── public/
│   ├── admin/              # Decap CMS
│   │   ├── config.yml     # CMS config
│   │   └── index.html     # CMS UI
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/          # Blog posts
│   ├── layouts/
│   └── pages/
├── .github/
│   └── workflows/
│       ├── deploy-github-pages.yml
│       └── deploy-cloudflare.yml
├── astro.config.mjs             # GitHub Pages config
├── astro.config.cloudflare.mjs  # Cloudflare config
├── wrangler.toml                # Cloudflare settings
└── package.json
```

## Switching Between Deployments

**GitHub Pages (Static):**
- Uses `astro.config.mjs`
- Output mode: static
- Deploy: push to `main`

**Cloudflare Workers (SSR):**
- Uses `astro.config.cloudflare.mjs`
- Output mode: server (full SSR)
- Deploy: push to `cloudflare` or run `npm run deploy:cloudflare`

## Path Handling Deep Dive

### How It Works

1. **`astro.config.mjs`** automatically sets base path:
   - Dev: `base: '/'`
   - Production: `base: '/repo-name'`

2. **`src/utils/paths.ts`** provides `getPath()`:
   ```ts
   getPath('/blog') // Dev: '/blog' | Prod: '/repo-name/blog'
   ```

3. **All internal links** use `getPath()`:
   ```astro
   <a href={getPath('/blog')}>Blog</a>
   ```

### Adding New Links

Always use `getPath()` for internal links:

```astro
---
import { getPath } from '../utils/paths';
---

<a href={getPath('/about')}>About</a>
<a href={getPath('/blog/my-post')}>Post</a>
```

**DON'T** hardcode paths:
```astro
<!-- ❌ WRONG -->
<a href="/blog">Blog</a>

<!-- ✅ CORRECT -->
<a href={getPath('/blog')}>Blog</a>
```

## Notes

- Cloudflare: Requires Cloudflare account with Workers enabled
- CMS authentication requires OAuth setup (GitHub, GitLab, etc.)
- CMS media paths may need adjustment for GitHub Pages base path
