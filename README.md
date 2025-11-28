# Astro Starter - Vietnamese Business Templates

Modern, beautifully designed Astro templates for Vietnamese businesses. Fork-ready with multiple verticals.

## 🎨 Available Templates

### Main Branch (Base Template)
Clean Astro blog starter - minimal styling, ready to customize.

### Coffee Shop Branch (`coffee-shop`)
Complete Vietnamese coffee shop website with:
- Full-width hero with real images
- Asymmetric masonry menu layout
- Organic curved section transitions
- Vietnamese content (5 blog posts)
- Authentic warm brown color palette
- Typography: Fraunces (display) + Work Sans (body)

**Live Preview:** [Coming soon]

---

## 🚀 Quick Start (Fork & Deploy)

### Step 1: Fork This Repository
1. Click **"Fork"** button (top right)
2. Choose your GitHub account
3. Name your repo (e.g., `my-coffee-shop`)

### Step 2: Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### Step 3: Choose Your Template
```bash
# For Coffee Shop template
git checkout coffee-shop

# For base template, stay on main
```

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

---

## 🎯 Customize Your Site

### 1. Update Site Information
Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'Your Business Name';
export const SITE_DESCRIPTION = 'Your description';
export const COMPANY_NAME = 'Your Company';
```

### 2. Update Colors (Coffee Shop)
Edit `src/styles/tokens/colors-coffee.css`:
```css
:root {
  --color-primary: #A0714D; /* Your brand color */
  --color-bg: #1A1512; /* Background */
}
```

### 3. Replace Images
See `IMAGE_GUIDE.md` for:
- Unsplash photo URLs (free)
- AI generation prompts (Midjourney/DALL-E)
- How to use your own photos

### 4. Update Content
**Blog posts:** `src/content/blog/*.md`
**Pages:** `src/pages/*.astro`
**Menu items:** Edit array in `src/pages/index.astro`

### 5. Update Contact Info
Edit location data in `src/pages/index.astro`:
```javascript
const locations = [
  {
    area: 'Your Area',
    name: 'Your Location Name',
    address: 'Your Address',
    hours: 'Your Hours'
  }
];
```

---

## 📦 Deploy to GitHub Pages

### Step 1: Configure Base Path
Edit `.env.example`, rename to `.env`:
```env
GITHUB_USERNAME=your-username
GITHUB_REPO=your-repo-name
```

### Step 2: Enable GitHub Pages
1. Go to your repo **Settings > Pages**
2. Source: **GitHub Actions**
3. Save

### Step 3: Push to GitHub
```bash
git add .
git commit -m "feat: customize for my business"
git push origin coffee-shop
```

GitHub Actions will automatically build and deploy!

Your site will be at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 📋 Commands Reference

| Command                      | Action                                              |
| :--------------------------- | :-------------------------------------------------- |
| `npm install`                | Install dependencies                                |
| `npm run dev`                | Start dev server at `localhost:4321`                |
| `npm run build`              | Build for GitHub Pages → `dist/`                    |
| `npm run build:cloudflare`   | Build for Cloudflare Workers                        |
| `npm run preview`            | Preview GitHub Pages build locally                  |
| `npm run preview:cloudflare` | Preview Cloudflare build with Wrangler              |
| `npm run deploy:cloudflare`  | Deploy to Cloudflare Workers                        |

---

## 🏗️ Project Structure

```
├── public/
│   ├── admin/           # Decap CMS (optional)
│   └── images/          # Your images here
├── src/
│   ├── components/      # Header, Footer, etc.
│   ├── content/
│   │   └── blog/        # Blog posts (Markdown)
│   ├── layouts/         # BlogPost layout
│   ├── pages/           # Routes (index, about, blog, contact)
│   ├── styles/
│   │   ├── tokens/      # Design tokens (colors, typography)
│   │   └── global.css   # Global styles
│   ├── utils/           # Helper functions
│   └── consts.ts        # Site constants
├── astro.config.mjs     # GitHub Pages config
├── astro.config.cloudflare.mjs  # Cloudflare config
└── .env                 # Environment variables
```

---

## 🎨 Design System (Coffee Shop)

### Colors
- **Background:** Dark roasted brown `#1A1512`
- **Primary:** Coffee brown `#A0714D`
- **Accent:** Cream `#E6D5C3`
- **Text:** Warm white `#F5EFE7`

### Typography
- **Display:** Fraunces (serif, elegant)
- **Body:** Work Sans (sans-serif, clean)

### Effects
- Glassmorphism cards
- Organic curved transitions
- Warm gradient overlays

---

## 🌐 Deploy to Other Platforms

### Cloudflare Workers (SSR)
```bash
npm run deploy:cloudflare
```

Edit `wrangler.toml` with your Cloudflare account info.

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repo
2. Auto-detected settings work!

---

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Decap CMS Setup](./FORK_GUIDE.md)
- [Image Guide](./IMAGE_GUIDE.md)
- [Coffee Shop Setup](./COFFEE_SHOP_README.md)

---

## 🤝 Contributing

Contributions welcome! Please open issues or PRs.

### Planned Templates
- 🧖 Spa/Salon
- 🍜 Restaurant
- 🏪 Retail Store
- 🏋️ Gym/Fitness
- 🏨 Hotel/Resort

---

## 📄 License

MIT License - Feel free to use for commercial projects!

---

## 💖 Credits

- Base template: [Astro Blog Theme](https://github.com/withastro/astro/tree/main/examples/blog)
- Inspired by: [Bear Blog](https://github.com/HermanMartinus/bearblog/)
- Photos: [Unsplash](https://unsplash.com) contributors

---

**Made with ❤️ for Vietnamese businesses**

Repository: https://github.com/vibery-studio/astro-starter
