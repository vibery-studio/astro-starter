# Cà Phê Phin - Vietnamese Coffee Shop Starterkit

Production-ready Astro blog template for Vietnamese coffee shops with warm artisanal design.

## ☕ What's Included

### Design Theme
- **Warm Coffee Colors**: Dark roasted coffee backgrounds (#1A1512), rich coffee brown (#A0714D), condensed milk cream accents (#E6D5C3)
- **Typography**: Fraunces serif (artisanal headlines) + Work Sans (clean body)
- **Vietnamese Aesthetic**: Warm tones, generous spacing, coffee-inspired gradients

### Content (Vietnamese)
5 SEO-optimized blog posts about coffee culture:
1. **Cách pha cà phê phin ngon** - How to brew perfect Vietnamese coffee
2. **Lịch sử cà phê Việt Nam** - History of Vietnamese coffee (1857-present)
3. **Phân biệt Robusta và Arabica** - Robusta vs Arabica guide
4. **Các loại cà phê truyền thống** - 7 traditional Vietnamese coffee types
5. **Uống cà phê sao cho khỏe** - Healthy coffee drinking tips

### Features
- ✅ Decap CMS integration (git-based, no auth server needed)
- ✅ Vietnamese language support
- ✅ GitHub Pages deployment ready
- ✅ SEO-friendly (sitemap, RSS)
- ✅ Responsive design

## 🚀 Quick Start (After Fork)

### 1. Update Configuration

**Edit `.env`:**
```env
GITHUB_USERNAME=yourname
GITHUB_REPO=astro-coffee-shop-vn
```

**Edit `public/admin/config.yml` line 3:**
```yaml
repo: yourname/astro-coffee-shop-vn
```

### 2. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. **Source**: GitHub Actions
3. Push to `main` branch

### 3. Access CMS

- URL: `https://yourname.github.io/astro-coffee-shop-vn/admin/`
- Login with GitHub account
- Authorize Decap CMS app
- Start creating content!

## 📝 Customization

### Update Site Info

**Edit `src/consts.ts`:**
```ts
export const SITE_TITLE = 'Cà Phê Phin'; // Your shop name
export const SITE_DESCRIPTION = '...'; // Your description
export const COMPANY_EMAIL = 'hello@yourshop.vn';
export const COMPANY_PHONE = '+84 ...';
```

### Replace Logo
- Update `/public/favicon.svg`

### Add Your Images
- Hero images go in `/public/images/`
- CMS uploads go in `/public/images/uploads/`

## 🎨 Design System

### Color Palette
```css
--color-primary: #A0714D;        /* Coffee brown */
--color-accent: #E6D5C3;          /* Cream */
--color-bg: #1A1512;              /* Dark roast */
--color-text: #F5EFE7;            /* Warm white */
```

### Typography
- **Headings**: Fraunces (artisanal serif)
- **Body**: Work Sans (clean sans-serif)

### Customizing Colors
Edit `/src/styles/tokens/colors-coffee.css`

## 📦 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Configure coffee shop site"
git push origin main
```

Deploys automatically via GitHub Actions.

### Local Development
```bash
npm install
npm run dev  # http://localhost:4321
```

## 📚 Adding Content

### Via CMS (Recommended)
1. Login to `/admin/`
2. Click "Blog" → "New Bài viết"
3. Fill in Vietnamese content
4. Publish

### Manual (Git)
Create file in `src/content/blog/your-post.md`:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả SEO"
pubDate: "Nov 28 2025"
heroImage: "/images/your-image.jpg"
---

Nội dung bài viết...
```

## 🌟 Live Demo

(Add your deployed URL here after first deployment)

## 📄 License

MIT - Free to use and modify for your coffee shop!

---

**Need help?** Check `FORK_GUIDE.md` for detailed setup instructions.
