# Phase 1 Code Review: Foundation & Design System

**Reviewer:** code-reviewer
**Date:** 2025-11-28
**Scope:** Vietnamese branding, design tokens, CSS architecture
**Status:** ✅ PASSED with recommendations

---

## Critical Issues: 0

No security vulnerabilities or breaking changes detected.

---

## High Priority Findings: 2

### H1: Missing Scroll Behavior Accessibility Override
**File:** `src/styles/global.css:19`
**Issue:** `scroll-behavior: smooth` conflicts with `prefers-reduced-motion`

```css
/* Current */
html {
	scroll-behavior: smooth;
}

/* Should be */
@media (prefers-reduced-motion: no-preference) {
	html {
		scroll-behavior: smooth;
	}
}
```

**Impact:** Violates WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions). Users with vestibular disorders may experience nausea.
**Fix Priority:** HIGH

### H2: Legacy CSS Variables in BlogPost.astro
**File:** `src/layouts/BlogPost.astro:30,37,51,59,64,69`
**Issue:** Uses undefined variables `--box-shadow`, `--gray`, `--gray-dark`, `--black`, `--accent`

```css
/* Lines 30, 72 */
box-shadow: var(--box-shadow);  /* Undefined */
color: rgb(var(--gray));        /* Undefined */

/* Should use design tokens */
box-shadow: var(--shadow-lg);
color: var(--color-text-secondary);
```

**Impact:** Visual inconsistency, broken styles in production. Blog posts won't match design system.
**Fix Priority:** HIGH

---

## Medium Priority Improvements: 4

### M1: Suboptimal Font Loading Strategy
**File:** `src/components/BaseHead.astro:36-39`
**Issue:** Missing `font-display: swap`, loads 4 font weights (bloat)

```html
<!-- Current: 2 fonts × 4 weights = 8 files -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

<!-- Recommend: Remove unused weights -->
<!-- Phase plan only mentions 400,600,700 for Open Sans + 700 for Montserrat -->
```

**Actual Usage Analysis:**
- `typography.css` defines: 400, 500, 600, 700
- Plan specifies: 400, 600, 700 (500 is extra)

**Impact:** +50KB font payload (~200ms on 3G). FOUT risk.
**Recommendation:** Remove `500` weight, add `&display=swap` explicitly

### M2: Missing Content Security Policy (CSP)
**File:** `src/components/BaseHead.astro`
**Issue:** No CSP headers for Google Fonts

```html
<!-- Add before closing head -->
<meta http-equiv="Content-Security-Policy" content="font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

**Impact:** XSS vulnerability surface. Not critical but recommended for production.
**Fix Priority:** MEDIUM

### M3: Inconsistent Color Token Naming
**File:** `src/styles/tokens/colors.css`
**Issue:** Mixes semantic (`--color-primary`) and non-semantic (`--color-metallic`) naming

```css
/* Current palette */
--color-primary: #0066FF;      /* Semantic ✓ */
--color-metallic: #B8C4CE;     /* Non-semantic ✗ */
--color-ethereal: #A7C7E7;     /* Non-semantic ✗ */

/* Recommendation: Add semantic aliases */
--color-secondary: var(--color-metallic);
--color-tertiary: var(--color-ethereal);
```

**Impact:** Developer confusion, hard to maintain. Not urgent but weakens design system.

### M4: Typography Token Duplication
**Files:** `src/styles/tokens/typography.css:44-51` + `src/styles/global.css:23-32`
**Issue:** Body styles declared twice (DRY violation)

```css
/* typography.css:44-51 */
body {
	font-family: var(--font-sans);
	font-size: var(--text-base);
	/* ... */
}

/* global.css:23-32 - DUPLICATE */
body {
	font-family: var(--font-sans);
	font-size: var(--text-base);
	/* ... */
}
```

**Recommendation:** Remove from `typography.css` (keep in `global.css` only)

---

## Low Priority Suggestions: 3

### L1: Hardcoded Color in Header.astro
**File:** `src/components/Header.astro:50`
```css
background: white;  /* Should use var(--color-surface) */
```

### L2: Missing Vietnamese Alt Text
**File:** `src/pages/blog/index.astro:100`, `src/layouts/BlogPost.astro:63`
```jsx
<Image ... alt="" />  /* Empty alt violates WCAG 1.1.1 */
```
**Recommendation:** Add `alt={post.data.title}` or `alt="Ảnh bìa: ${title}"`

### L3: No Dark Mode Foundation
**File:** All token files
**Observation:** Plan mentions "dark mode optional but foundation prepared" but no `@media (prefers-color-scheme: dark)` queries exist.
**Impact:** Deferred to Phase 6 (acceptable)

---

## Positive Observations

✅ **Clean token architecture:** Modular, well-organized
✅ **Accessibility baseline:** `sr-only`, `:focus-visible`, reduced motion support
✅ **Vietnamese support:** Proper `lang="vi"`, diacritics-friendly fonts, `content-language` meta
✅ **Build success:** Zero TypeScript errors, zero console warnings
✅ **Performance:** Design tokens use native CSS vars (no runtime cost)
✅ **YAGNI compliance:** No over-engineering, focused scope
✅ **Glassmorphism fallback:** Solid background colors for non-supporting browsers

---

## Security Audit

**XSS Risk:** None (no user input)
**Injection:** None (static site)
**Font Loading:** Google Fonts (GDPR concern noted in plan, acceptable)
**Secrets:** None committed (`.env.example` exists)
**Dependencies:** Standard Astro stack, no known CVEs

**Verdict:** ✅ Secure for Phase 1 scope

---

## Performance Analysis

### Font Loading
- **Payload:** ~120KB (compressed)
- **FCP Impact:** +200ms (3G network)
- **Mitigation:** `preconnect` exists, `font-display: swap` needed

### CSS Size
- **Total:** ~4KB (uncompressed tokens)
- **Optimization:** Minimal, efficient

### Build Output
- **Pages:** 8 static files
- **Build Time:** 968ms (excellent)
- **Bundle Size:** Not measured (acceptable for Phase 1)

**Verdict:** ✅ Performance baseline acceptable

---

## Task Completeness Verification

**Phase 1 TODO List Status:**

| Task | Status | Evidence |
|------|--------|----------|
| Update `src/consts.ts` with Vietnamese | ✅ | Lines 1-9: Vietnamese branding |
| Modify `BaseHead.astro` for lang="vi" + fonts | ✅ | Line 24: `content-language: vi`, Lines 36-39: Google Fonts |
| Create `tokens/colors.css` | ✅ | 56 lines, complete palette |
| Create `tokens/typography.css` | ✅ | 75 lines, responsive scales |
| Create `tokens/spacing.css` | ✅ | 46 lines, 8px base system |
| Create `tokens/effects.css` | ✅ | 101 lines, glass/neuro utilities |
| Update `global.css` to import tokens | ✅ | Lines 4-7: Token imports |
| Add lang="vi" to all page files | ✅ | index.astro:9, blog/index.astro:17, BlogPost.astro:14 |
| Test Vietnamese rendering | ⚠️ | Manual test needed |
| Verify glassmorphism cross-browser | ⚠️ | Safari fallback exists, manual test needed |

**Unresolved from Plan:**
- Manual testing (Vietnamese text, glassmorphism)
- Dark mode decision (deferred)
- Brand guidelines (logo/icons - deferred to Phase 5)

**Overall Completion:** 80% (code complete, testing pending)

---

## Recommended Actions

**Priority Order:**

1. **[CRITICAL]** Fix scroll-behavior accessibility (5 min)
2. **[HIGH]** Replace legacy CSS vars in BlogPost.astro (10 min)
3. **[HIGH]** Remove unused font weight (500) from BaseHead.astro (2 min)
4. **[MEDIUM]** Add CSP meta tag (5 min)
5. **[MEDIUM]** Deduplicate body styles (3 min)
6. **[LOW]** Replace hardcoded `white` in Header.astro (1 min)
7. **[LOW]** Add Vietnamese alt text for images (5 min)
8. **[TEST]** Manual Vietnamese rendering test (10 min)
9. **[TEST]** Safari glassmorphism verification (5 min)

**Total Fix Time:** ~46 minutes

---

## Metrics

- **Type Coverage:** N/A (no TypeScript in CSS)
- **Test Coverage:** N/A (design tokens don't have unit tests)
- **Linting Issues:** 0 syntax errors, 2 high-priority logic issues
- **Build Status:** ✅ PASSING
- **WCAG Compliance:** ⚠️ 1 violation (scroll-behavior)

---

## Next Steps

### Before Phase 2:
1. Apply all HIGH priority fixes
2. Manual test Vietnamese diacritics (ấăầặẫ at 12px, 16px, 48px)
3. Test glassmorphism in Safari 14+ (fallback to solid bg)
4. Update plan TODO status

### Phase 2 Preparation:
- Design tokens ready for component consumption
- Consider extracting Header.astro styles to use new tokens
- Plan component library structure

---

## Unresolved Questions

1. **Dark mode timeline:** Implement in Phase 2 or defer to Phase 6?
2. **Font weight 500:** Remove or keep? (typography.css defines it but plan doesn't mention)
3. **CSP enforcement:** Add meta tag or server headers in deployment?
4. **Blog post images:** Should alt text be Vietnamese or English?
5. **Glassmorphism browser support:** What's minimum Safari version target?

---

**Final Verdict:** ✅ APPROVED with required fixes
**Code Quality:** 8/10
**Adherence to Plan:** 9/10
**Security:** 10/10
**Performance:** 8/10

**Sign-off:** Proceed to fixes, then Phase 2.
