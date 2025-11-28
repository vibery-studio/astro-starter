# Fork & Deploy Guide

Complete guide for forking this starterkit and deploying to GitHub Pages.

## Quick Start (5 minutes)

### 1. Fork the Repository

Click "Fork" button → Create fork

### 2. Update Configuration

**Option A: Using Environment Variables (Recommended)**

```bash
cp .env.example .env
```

Edit `.env`:
```env
GITHUB_USERNAME=yourname
GITHUB_REPO=your-repo-name
PUBLIC_FORMSPREE_ID=your_formspree_id
```

**Option B: Direct Config Edit**

Edit `astro.config.mjs` lines 13-14:
```js
const GITHUB_USERNAME = 'yourname';
const GITHUB_REPO = 'your-repo-name';
```

### 3. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. **Source**: Deploy from a branch → Change to **GitHub Actions**
3. Save

### 4. Deploy

Push to `main` branch:
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

Site deploys to: `https://yourname.github.io/your-repo-name/`

---

## Service Configuration

### Decap CMS (Content Management)

**Access**: `https://yourname.github.io/your-repo-name/admin/`

**Setup (Git-Based - No Extra Auth Needed):**

1. Update `public/admin/config.yml` line 3:
```yaml
repo: yourname/your-repo-name
```

2. Login at `/admin/` with your GitHub account (first time only)
3. Authorize the CMS app when prompted
4. Create/edit content → Changes commit directly to your repo

**How it works**: CMS authenticates via GitHub, commits saved as regular git commits to your repo. No Netlify or external services needed.

### Formspree (Contact Form)

If using contact form:

1. Create free account at [formspree.io](https://formspree.io)
2. Create new form → Get Form ID (format: `xpwabcde`)
3. Add to `.env`:
```env
PUBLIC_FORMSPREE_ID=xpwabcde
```

**Without Formspree**: Remove contact form or replace with alternative (Netlify Forms, custom backend).

---

## Customization Checklist

### Required Changes

- [ ] Update `GITHUB_USERNAME` in `.env` or `astro.config.mjs`
- [ ] Update `GITHUB_REPO` in `.env` or `astro.config.mjs`
- [ ] Enable GitHub Pages in repo Settings
- [ ] Setup Decap CMS authentication (Netlify Identity or GitHub OAuth)

### Optional Changes

- [ ] Update site metadata in `src/consts.ts`:
  - `SITE_TITLE`
  - `SITE_DESCRIPTION`
- [ ] Replace `/public/favicon.svg`
- [ ] Update blog content in `src/content/blog/`
- [ ] Configure Formspree for contact form
- [ ] Customize theme colors in `src/styles/tokens/`
- [ ] Update social links in `src/components/Footer.astro`

### Content Management

**Delete sample blog posts**:
```bash
rm src/content/blog/*.md
```

**Add new posts via CMS**:
1. Login to `/admin/`
2. Click "Blog" → "New Blog"
3. Fill fields → Publish

**Or manually create** in `src/content/blog/`:
```markdown
---
title: "Your Post Title"
description: "SEO description"
pubDate: "Nov 28 2025"
heroImage: "/images/hero.jpg"
---

Your content here...
```

---

## Common Issues

### 404 on GitHub Pages

**Symptom**: Site shows 404 after deployment

**Fix**:
1. Check **Settings** → **Pages** → Source is **GitHub Actions**
2. Check Actions tab for failed builds
3. Verify `GITHUB_USERNAME` and `GITHUB_REPO` match your repo

### Broken Images/Links

**Symptom**: Images return 404, links point to wrong paths

**Fix**: All internal links MUST use `getPath()` from `src/utils/paths.ts`:

```astro
---
import { getPath } from '../utils/paths';
---

<!-- ✅ Correct -->
<a href={getPath('/blog')}>Blog</a>
<img src={getPath('/images/hero.jpg')} />

<!-- ❌ Wrong -->
<a href="/blog">Blog</a>
<img src="/images/hero.jpg" />
```

### CMS Can't Save Content

**Symptom**: CMS login works but can't save

**Fix**: Git Gateway not configured. See [Decap CMS Setup](#decap-cms-content-management) above.

### CMS Media Uploads 404

**Symptom**: Uploaded images show 404

**Fix**: Media path needs base path. Update `public/admin/config.yml`:

```yaml
public_folder: "/your-repo-name/images/uploads"
```

Or set programmatically (requires custom config loader).

---

## Development

```bash
# Install
npm install

# Dev server (localhost:4321)
npm run dev

# Build for GitHub Pages
npm run build

# Preview build
npm run preview
```

---

## Advanced: Cloudflare Deployment

If you prefer serverless edge deployment:

1. Update `wrangler.toml` → Set `name`
2. Update `astro.config.cloudflare.mjs` → Set `site`
3. Add secrets to GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to `cloudflare` branch

Workflow: `.github/workflows/deploy-cloudflare.yml`

---

## Support

- Astro Docs: https://docs.astro.build
- Decap CMS: https://decapcms.org/docs
- Issues: Create issue in this repo
