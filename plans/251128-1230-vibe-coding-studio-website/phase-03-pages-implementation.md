# Phase 3: Pages Implementation

## Context
Build Home, About, Contact pages with Vietnamese content, using components from Phase 2.

**Dependencies:** Phase 1 (design system) + Phase 2 (components) must be complete.

## Overview
Create corporate website pages with Vietnamese copy, modern layout, glassmorphism effects.

## Key Insights
- Vietnamese business communication: Balance hierarchy with Gen Z transparency
- Hero sections need bold CTAs with electric blue accents
- "Vibe coding" positioning: Highlight speed + prototyping, address AI quality concerns
- Contact forms: Simple, minimal fields (Vietnamese labels)
- About page: Team + values (collectivism > individualism in messaging)

## Requirements
1. **Home Page**: Hero, services, CTA, testimonials/stats
2. **About Page**: Company story, team, values, vibe coding approach
3. **Contact Page**: Form, company info, map (optional)
4. All pages in Vietnamese
5. SEO meta tags (Vietnamese)
6. Responsive design (mobile-first)

## Architecture

### Page Structure
```
src/pages/
├── index.astro           # Home (Hero + Services + CTA)
├── about.astro           # About (Story + Team + Values)
├── contact.astro         # Contact (Form + Info)
└── blog/
    └── index.astro       # Blog listing (Vietnamese)
```

### Layout Hierarchy
- BaseHead.astro (meta, fonts, ViewTransitions)
- Header.astro (navigation)
- [Page Content]
- Footer.astro

## Related Files

### To Modify
- `/Applications/MAMP/htdocs/workshop/astro/src/pages/index.astro` - Complete redesign
- `/Applications/MAMP/htdocs/workshop/astro/src/pages/about.astro` - Vietnamese content
- `/Applications/MAMP/htdocs/workshop/astro/src/pages/blog/index.astro` - Vietnamese headings

### To Create
- `/Applications/MAMP/htdocs/workshop/astro/src/pages/contact.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/content/copy/home.md` (Vietnamese copy)
- `/Applications/MAMP/htdocs/workshop/astro/src/content/copy/about.md`

## Implementation Steps

### Step 1: Home Page - Hero Section
1. Modify `src/pages/index.astro`:
   - Hero with gradient background + glassmorphism overlay
   - Vietnamese headline: "Studio Sản Phẩm Công Nghệ Hiện Đại"
   - Subheadline: "Xây dựng sản phẩm với Vibe Coding - nhanh, thông minh, sáng tạo"
   - CTA buttons: "Liên Hệ Ngay" (primary), "Tìm Hiểu Thêm" (secondary)
   - Background image from Unsplash (tech/office theme)
2. Use `Button.astro` component for CTAs
3. Add subtle animation on scroll (fade-in)

### Step 2: Home Page - Services Section
1. Services grid (3 columns on desktop):
   - **Phát Triển Sản Phẩm AI** (AI Product Development)
   - **Vibe Coding Tư Vấn** (Vibe Coding Consulting)
   - **Prototype Nhanh** (Rapid Prototyping)
2. Use `Card.astro` component for each service
3. Icons or images for visual interest
4. Hover effects on cards

### Step 3: Home Page - Stats/Social Proof
1. Stats section (glassmorphism background):
   - "50-67% giảm thời gian phát triển" (Time savings)
   - "Hàng trăm dự án thành công" (Projects completed)
   - "Cộng đồng Vibe Coding VN" (Community)
2. Simple grid layout
3. Count-up animation on scroll (optional)

### Step 4: Home Page - Final CTA
1. Bottom CTA section:
   - "Sẵn sàng biến ý tưởng thành hiện thực?"
   - "Liên hệ với chúng tôi hôm nay"
   - Button linking to Contact page

### Step 5: About Page
1. Modify `src/pages/about.astro`:
   - Remove blog layout, use standard page layout
   - Hero: "Về Vibe Coding Product Studio"
   - **Story section**:
     - "Chúng tôi là ai"
     - Focus on vibe coding approach
     - Address AI quality + speed balance
   - **Values section**:
     - Creativity (Sáng tạo)
     - Speed (Tốc độ)
     - Quality (Chất lượng)
     - Community (Cộng đồng)
   - **Team section** (optional):
     - Placeholder team member cards
     - Or skip if not applicable
2. Use glassmorphism cards for values
3. Add images from Unsplash (team collaboration)

### Step 6: Contact Page
1. Create `src/pages/contact.astro`:
   - Hero: "Liên Hệ Với Chúng Tôi"
   - **Form section** (left):
     - Fields: Name (Tên), Email, Message (Tin nhắn)
     - Use `Input.astro` component
     - Submit button with neumorphism
     - Form action: placeholder (no backend yet)
   - **Info section** (right):
     - Email: hello@vibecoding.studio (placeholder)
     - Phone: +84 xxx xxx xxx (placeholder)
     - Address: Ho Chi Minh City, Vietnam (generic)
   - Two-column layout on desktop
2. Add form validation (client-side, basic)
3. Success/error states for form submission

### Step 7: Blog Listing Update
1. Modify `src/pages/blog/index.astro`:
   - Vietnamese heading: "Blog & Insights"
   - Subheading: "Chia sẻ kiến thức về Vibe Coding và công nghệ"
   - Update layout to use Card component
   - Add filter/search (optional, for later)

### Step 8: SEO Optimization
1. Update meta tags in each page:
   - Vietnamese title tags
   - Vietnamese descriptions
   - og:image (social sharing preview)
   - Canonical URLs
2. Add structured data (JSON-LD):
   - Organization schema
   - WebSite schema

### Step 9: Responsive Design
1. Test all pages on:
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)
2. Adjust grid layouts, font sizes
3. Mobile navigation (hamburger menu)

### Step 10: Content Review
1. Review all Vietnamese copy for:
   - Grammar accuracy
   - Cultural appropriateness
   - Tone consistency (professional + approachable)
2. Check diacritics rendering
3. Verify link paths with `getPath()`

## Todo List
- [ ] Redesign Home page with hero + services + CTA
- [ ] Add Vietnamese copy to Home page
- [ ] Update About page with company story + values
- [ ] Create Contact page with form + info
- [ ] Update Blog listing with Vietnamese headings
- [ ] Add SEO meta tags to all pages
- [ ] Implement responsive layouts
- [ ] Test forms (client-side validation)
- [ ] Review Vietnamese content accuracy
- [ ] Verify all internal links use `getPath()`

## Success Criteria
- ✅ Home page has compelling hero + 3 service cards
- ✅ About page tells cohesive brand story
- ✅ Contact form collects name, email, message
- ✅ All content in Vietnamese with correct diacritics
- ✅ SEO meta tags present on all pages
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ No broken links or 404s
- ✅ Page load time <3s
- ✅ WCAG AA compliance maintained

## Risk Assessment

### High Risk
- **Vietnamese copy quality**: Non-native content may sound unnatural
  - Mitigation: Review with native speaker, use formal business language
- **Form backend**: No submission handler yet
  - Mitigation: Add placeholder, implement backend in future phase

### Medium Risk
- **Content length**: Vietnamese is verbose, may overflow designs
  - Mitigation: Test with actual content, adjust layouts
- **Image placeholders**: Stock photos may not match brand
  - Mitigation: Select carefully from Unsplash, maintain consistent style

### Low Risk
- **SEO**: Missing structured data initially
  - Mitigation: Add basic schema, expand later

## Security Considerations
- Contact form: Add CSRF protection (future backend)
- Email validation: Client-side only (basic regex)
- No PII collection beyond contact form
- Form submission: Should use POST method
- Add rate limiting to form (future backend)

## Next Steps
After Phase 3 completion:
1. Integrate real images from Phase 5
2. Add blog content from Phase 4
3. Test cross-page ViewTransitions
4. Gather feedback on copy/layout

## Unresolved Questions
- Contact form backend solution (Netlify Forms, Cloudflare Workers)?
- Team member info/photos available?
- Specific service pricing to display?
- Map integration needed (Google Maps embed)?
- Newsletter signup form on homepage?
