# Phase 5: Assets Integration

## Context
Fetch and integrate real stock images from Unsplash/Pexels APIs. Replace placeholders with relevant photography.

**Dependencies:** Can run parallel with Phase 3-4. Requires Phase 1 (foundation).

## Overview
Build utility to fetch stock images, cache them locally, implement responsive image loading.

## Key Insights
- Unsplash: 3M+ photos, hotlink URLs required (tracks views for photographers)
- Pexels: Part of Canva, includes videos, API key required
- Cache strategy: Fetch once, save URLs/metadata, don't call API on every build
- Responsive images: Use `srcset` for different screen sizes
- SEO: Proper alt-text critical for Vietnamese search
- Performance: Lazy-load images, use WebP format

## Requirements
1. Unsplash API integration (free tier: 50 requests/hour)
2. Pexels API integration (optional, for videos)
3. Image fetching utility
4. Caching mechanism (JSON file or database)
5. Responsive image component
6. Replace all placeholder images
7. Alt text in Vietnamese

## Architecture

### API Integration Structure
```
src/utils/
├── unsplash.ts          # Unsplash API client
├── pexels.ts            # Pexels API client (optional)
└── imageCache.ts        # Cache management

src/data/
└── imageCache.json      # Cached image metadata

src/components/
└── ResponsiveImage.astro # Image component with srcset
```

### Image Categories Needed
- Hero backgrounds: Modern office, tech workspace (3-4 images)
- Service cards: AI, coding, collaboration (3 images)
- Blog hero images: Technology, Vietnam, teamwork (5 images)
- About page: Team collaboration, innovation (2-3 images)

## Related Files

### To Create
- `/Applications/MAMP/htdocs/workshop/astro/src/utils/unsplash.ts`
- `/Applications/MAMP/htdocs/workshop/astro/src/utils/imageCache.ts`
- `/Applications/MAMP/htdocs/workshop/astro/src/components/ResponsiveImage.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/data/imageCache.json`
- `/Applications/MAMP/htdocs/workshop/astro/.env` (API keys)

### To Modify
- `/Applications/MAMP/htdocs/workshop/astro/.env.example` - Add Unsplash API key
- All page files using images (index, about, contact, blog posts)

## Implementation Steps

### Step 1: Environment Setup
1. Create Unsplash account, get API key (free tier)
2. Add to `.env`:
   ```env
   UNSPLASH_ACCESS_KEY=your_access_key_here
   PEXELS_API_KEY=your_api_key_here (optional)
   ```
3. Update `.env.example` with placeholders

### Step 2: Unsplash API Client
1. Create `src/utils/unsplash.ts`:
   ```typescript
   const UNSPLASH_API = 'https://api.unsplash.com';
   const ACCESS_KEY = import.meta.env.UNSPLASH_ACCESS_KEY;

   export async function searchPhotos(query: string, perPage = 10) {
     const response = await fetch(
       `${UNSPLASH_API}/search/photos?query=${query}&per_page=${perPage}&client_id=${ACCESS_KEY}`
     );
     return await response.json();
   }

   export async function getRandomPhoto(query?: string) {
     const url = query
       ? `${UNSPLASH_API}/photos/random?query=${query}&client_id=${ACCESS_KEY}`
       : `${UNSPLASH_API}/photos/random?client_id=${ACCESS_KEY}`;
     const response = await fetch(url);
     return await response.json();
   }
   ```

### Step 3: Image Cache System
1. Create `src/utils/imageCache.ts`:
   ```typescript
   import fs from 'fs/promises';
   import path from 'path';

   const CACHE_FILE = './src/data/imageCache.json';

   export async function getCachedImage(key: string) {
     try {
       const data = await fs.readFile(CACHE_FILE, 'utf-8');
       const cache = JSON.parse(data);
       return cache[key] || null;
     } catch {
       return null;
     }
   }

   export async function setCachedImage(key: string, imageData: any) {
     let cache = {};
     try {
       const data = await fs.readFile(CACHE_FILE, 'utf-8');
       cache = JSON.parse(data);
     } catch {}

     cache[key] = imageData;
     await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
   }
   ```

2. Create `src/data/imageCache.json`:
   ```json
   {}
   ```

### Step 4: Fetch Images for Pages
1. Create script `scripts/fetchImages.ts`:
   ```typescript
   import { getRandomPhoto } from '../src/utils/unsplash';
   import { setCachedImage } from '../src/utils/imageCache';

   const imageNeeds = [
     { key: 'hero-home', query: 'modern office technology' },
     { key: 'service-ai', query: 'artificial intelligence coding' },
     { key: 'service-consulting', query: 'business consulting technology' },
     { key: 'service-prototype', query: 'rapid prototyping design' },
     { key: 'about-team', query: 'diverse team collaboration' },
     { key: 'blog-vibe-coding', query: 'programmer coding laptop' },
     { key: 'blog-tools', query: 'developer tools workspace' },
     { key: 'blog-practices', query: 'agile development team' },
     { key: 'blog-case-study', query: 'startup success celebration' },
     { key: 'blog-future', query: 'vietnam technology skyline' },
   ];

   async function fetchAllImages() {
     for (const { key, query } of imageNeeds) {
       const photo = await getRandomPhoto(query);
       await setCachedImage(key, {
         url: photo.urls.regular,
         urlSmall: photo.urls.small,
         urlThumb: photo.urls.thumb,
         alt: photo.alt_description || query,
         photographer: photo.user.name,
         photographerUrl: photo.user.links.html,
       });
       console.log(`✓ Fetched: ${key}`);
       // Rate limit: wait 1s between requests
       await new Promise(r => setTimeout(r, 1000));
     }
   }

   fetchAllImages();
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "fetch-images": "tsx scripts/fetchImages.ts"
   }
   ```

### Step 5: Responsive Image Component
1. Create `src/components/ResponsiveImage.astro`:
   ```astro
   ---
   interface Props {
     src: string;
     alt: string;
     sizes?: string;
     loading?: 'lazy' | 'eager';
     class?: string;
   }

   const { src, alt, sizes = '100vw', loading = 'lazy', class: className } = Astro.props;
   ---

   <img
     src={src}
     alt={alt}
     sizes={sizes}
     loading={loading}
     class={className}
     decoding="async"
   />

   <style>
     img {
       width: 100%;
       height: auto;
       display: block;
     }
   </style>
   ```

### Step 6: Integrate Images into Pages
1. Home page (`src/pages/index.astro`):
   ```astro
   ---
   import { getCachedImage } from '../utils/imageCache';
   const heroImage = await getCachedImage('hero-home');
   const serviceImages = {
     ai: await getCachedImage('service-ai'),
     consulting: await getCachedImage('service-consulting'),
     prototype: await getCachedImage('service-prototype'),
   };
   ---
   ```

2. About page:
   ```astro
   const teamImage = await getCachedImage('about-team');
   ```

3. Blog posts:
   - Update frontmatter with cached image URLs
   - Or fetch dynamically in blog layout

### Step 7: Update Blog Post Hero Images
1. Modify blog post frontmatter:
   ```yaml
   heroImage: "https://images.unsplash.com/photo-..."
   ```
   - Or use cached URLs from imageCache.json

### Step 8: Alt Text Localization
1. Add Vietnamese alt text to all images:
   - "Văn phòng hiện đại với công nghệ" (Modern office with technology)
   - "Nhóm phát triển AI" (AI development team)
   - Etc.

### Step 9: Performance Optimization
1. Add to `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     image: {
       service: squooshImageService(),
     },
   });
   ```
2. Use Astro's `<Image>` component for automatic optimization:
   ```astro
   import { Image } from 'astro:assets';
   <Image src={heroImage.url} alt={heroImage.alt} width={1200} height={600} />
   ```

### Step 10: Testing
1. Run `npm run fetch-images` to populate cache
2. Verify imageCache.json has all entries
3. Test image loading on all pages
4. Check responsive behavior (mobile/tablet/desktop)
5. Validate lazy loading works
6. Test with slow network (throttling)

## Todo List
- [ ] Create Unsplash account, get API key
- [ ] Add API keys to `.env`
- [ ] Create `unsplash.ts` API client
- [ ] Create `imageCache.ts` cache utility
- [ ] Create `fetchImages.ts` script
- [ ] Create `ResponsiveImage.astro` component
- [ ] Run `npm run fetch-images`
- [ ] Integrate cached images into Home page
- [ ] Integrate images into About page
- [ ] Update blog post hero images
- [ ] Add Vietnamese alt text to all images
- [ ] Test responsive image loading
- [ ] Optimize with Astro Image component

## Success Criteria
- ✅ All placeholder images replaced with real stock photos
- ✅ imageCache.json contains 10+ image entries
- ✅ Images load with proper alt text (Vietnamese)
- ✅ Responsive images work on mobile/tablet/desktop
- ✅ Lazy loading improves initial page load time
- ✅ No broken image links
- ✅ Unsplash photographer attribution present (if displayed)
- ✅ Page load time remains <3s

## Risk Assessment

### High Risk
- **API rate limits**: Unsplash free tier is 50 requests/hour
  - Mitigation: Cache aggressively, only fetch once
- **Hotlink dependency**: Images hosted on Unsplash CDN (external)
  - Mitigation: Download and host locally (violates Unsplash terms unless paid)

### Medium Risk
- **Image relevance**: Random photos may not match context
  - Mitigation: Review fetched images, re-fetch if needed
- **Alt text quality**: Auto-generated descriptions may be poor
  - Mitigation: Manually write Vietnamese alt text

### Low Risk
- **Cache file size**: JSON file grows with more images
  - Mitigation: Acceptable for <100 images

## Security Considerations
- API keys in `.env` (not committed to git)
- `.env.example` has placeholders only
- No user-uploaded images in this phase
- Unsplash CDN is trusted source (HTTPS)

## Next Steps
After Phase 5 completion:
1. Review image quality with stakeholders
2. Replace any unsatisfactory images
3. Consider paid Unsplash plan for higher limits (if needed)
4. Add image optimization to build process

## Unresolved Questions
- Should images be downloaded locally for full control?
- Pexels integration needed for videos?
- Image optimization service (Cloudinary, Imgix)?
- Fallback strategy if Unsplash CDN is down?
- Photographer attribution display location (footer, credits page)?
