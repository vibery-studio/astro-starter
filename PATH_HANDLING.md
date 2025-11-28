# Path Handling Guide

## Problem

GitHub Pages subdomain deployment (e.g., `username.github.io/repo-name/`) requires a base path, but local dev doesn't.

Hardcoded paths like `/blog` become `username.github.io/blog` (404) instead of `username.github.io/repo-name/blog`.

## Solution

This project automatically handles base paths for both environments.

## Configuration

### Option 1: Environment Variables (Recommended)

```bash
# .env
GITHUB_USERNAME=yourusername
GITHUB_REPO=your-repo-name
```

### Option 2: Direct Config

Edit `astro.config.mjs`:
```js
const GITHUB_USERNAME = 'yourusername';
const GITHUB_REPO = 'your-repo-name';
```

## Usage

### In Components/Pages

```astro
---
import { getPath } from '../utils/paths';
---

<!-- Internal links -->
<a href={getPath('/')}>Home</a>
<a href={getPath('/blog')}>Blog</a>
<a href={getPath('/about')}>About</a>

<!-- Dynamic links -->
<a href={getPath(`/blog/${post.slug}/`)}>Read Post</a>
```

### How It Works

**Development:**
- `base: '/'`
- `getPath('/blog')` → `/blog`

**Production (GitHub Pages):**
- `base: '/repo-name'`
- `getPath('/blog')` → `/repo-name/blog`

## Examples

### ✅ Correct

```astro
---
import { getPath } from '../utils/paths';
const posts = await getCollection('blog');
---

<nav>
  <a href={getPath('/')}>Home</a>
  <a href={getPath('/blog')}>Blog</a>
</nav>

<ul>
  {posts.map(post => (
    <li>
      <a href={getPath(`/blog/${post.id}/`)}>
        {post.data.title}
      </a>
    </li>
  ))}
</ul>
```

### ❌ Wrong

```astro
<!-- DON'T do this -->
<a href="/">Home</a>
<a href="/blog">Blog</a>
<a href={`/blog/${post.id}/`}>{post.data.title}</a>
```

## Special Cases

### External Links
No need for `getPath()`:
```astro
<a href="https://example.com">External</a>
```

### Assets
Vite handles these automatically:
```astro
<Image src={heroImage} alt="..." />
```

### RSS/Sitemap
Configured in `astro.config.mjs`, no action needed.

## Testing

**Local:**
```bash
npm run dev
# Check: http://localhost:4321/ (no base path)
```

**Build:**
```bash
npm run build
# Check: dist/index.html - should have /repo-name/ in hrefs
```

## Troubleshooting

**Problem:** Links still 404 on GitHub Pages

**Solutions:**
1. Verify `GITHUB_REPO` matches actual repo name
2. Check all links use `getPath()`
3. Clear browser cache
4. Rebuild and redeploy

**Problem:** Links broken in local dev

**Solution:** Ensure dev mode uses `base: '/'`:
```bash
# Set in .env if needed
ASTRO_BASE=/
```
