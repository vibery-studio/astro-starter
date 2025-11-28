# Phase 2: UI Components

## Context
Build reusable UI components with glassmorphism effects, micro-interactions, ViewTransitions.

**Dependencies:** Phase 1 design tokens must be complete.

## Overview
Create component library: navigation, buttons, cards, forms with modern effects and accessibility.

## Key Insights
- ViewTransitions now support zero-JS with `@view-transition { navigation: auto; }`
- Micro-interactions: animate `transform` + `opacity` only (GPU-accelerated)
- Glassmorphism requires backdrop-filter support (90%+ browsers)
- Neumorphism best for buttons/inputs, glassmorphism for containers
- `prefers-reduced-motion` must disable all animations

## Requirements
1. Header with glassmorphism on scroll
2. Footer with company info
3. Button variants (primary, secondary, glass, neuro)
4. Card component with hover effects
5. Form inputs with neumorphism
6. ViewTransitions setup
7. Accessibility: keyboard nav, ARIA labels, reduced motion

## Architecture

### Component Structure
```
src/components/
├── ui/
│   ├── Button.astro          # Button variants
│   ├── Card.astro            # Glassmorphic card
│   ├── Input.astro           # Neumorphic input
│   └── AnimatedLink.astro    # Link with underline animation
├── Header.astro              # Sticky header with glass effect
├── Footer.astro              # Company footer
├── Navigation.astro          # Mobile-responsive nav
└── ViewTransitionSetup.astro # Centralized VT config
```

## Related Files

### To Modify
- `/Applications/MAMP/htdocs/workshop/astro/src/components/Header.astro` - Add glassmorphism on scroll
- `/Applications/MAMP/htdocs/workshop/astro/src/components/Footer.astro` - Update Vietnamese content
- `/Applications/MAMP/htdocs/workshop/astro/src/components/BaseHead.astro` - Add ViewTransitions CSS

### To Create
- `/Applications/MAMP/htdocs/workshop/astro/src/components/ui/Button.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/components/ui/Card.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/components/ui/Input.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/components/ui/AnimatedLink.astro`
- `/Applications/MAMP/htdocs/workshop/astro/src/styles/components/header.css`

## Implementation Steps

### Step 1: ViewTransitions Setup
1. Add to `BaseHead.astro`:
   ```css
   <style is:global>
   @view-transition {
     navigation: auto;
   }
   </style>
   ```
2. Add custom transition animations:
   ```css
   ::view-transition-old(root) {
     animation: fade-out 0.3s ease-out;
   }
   ::view-transition-new(root) {
     animation: fade-in 0.3s ease-in;
   }
   ```
3. Add reduced-motion media query to disable animations

### Step 2: Header Component
1. Modify `src/components/Header.astro`:
   - Add Vietnamese navigation labels
   - Implement scroll-based glassmorphism:
     ```css
     header.scrolled {
       background: rgba(255, 255, 255, 0.8);
       backdrop-filter: blur(20px);
       box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
     }
     ```
   - Add scroll detection script
   - Mobile hamburger menu
2. Use `getPath()` for all navigation links
3. Add ARIA labels for accessibility

### Step 3: Button Component
1. Create `src/components/ui/Button.astro`:
   - Props: variant (primary, secondary, glass, neuro), size, href
   - Variants:
     - **Primary**: Solid color, subtle scale on hover
     - **Glass**: Glassmorphism background
     - **Neuro**: Neumorphism with soft shadows
   - Micro-interaction:
     ```css
     button:hover {
       transform: translateY(-2px);
       transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
     }
     ```
   - Active state animation
   - Focus visible styles

### Step 4: Card Component
1. Create `src/components/ui/Card.astro`:
   - Glassmorphism base style
   - Hover effect: subtle shadow increase, scale
   - Props: title, description, image, link
   - Responsive padding
   - Optional overlay gradient

### Step 5: Input Component
1. Create `src/components/ui/Input.astro`:
   - Neumorphism style for inputs
   - Props: type, label, placeholder, required
   - Focus state animation
   - Error state styling
   - Vietnamese placeholder text support

### Step 6: Animated Link Component
1. Create `src/components/ui/AnimatedLink.astro`:
   - Underline animation (left-to-right scaleX)
   - Color transition on hover
   - Use `getPath()` for internal links
   - External link indicator icon

### Step 7: Footer Component
1. Update `src/components/Footer.astro`:
   - Vietnamese company info
   - Social links (if applicable)
   - Copyright with dynamic year
   - Simple layout with subtle glassmorphism

### Step 8: Accessibility Enhancements
1. Add to `global.css`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
2. Ensure all interactive elements have:
   - Focus visible styles
   - Keyboard navigation support
   - ARIA labels where needed

### Step 9: Component Testing
1. Test all components in isolation
2. Verify glassmorphism fallback in older browsers
3. Check keyboard navigation
4. Validate WCAG contrast ratios
5. Test with screen reader (macOS VoiceOver)

## Todo List
- [ ] Add ViewTransitions CSS to `BaseHead.astro`
- [ ] Modify `Header.astro` with scroll glassmorphism
- [ ] Create `Button.astro` with 4 variants
- [ ] Create `Card.astro` with hover effects
- [ ] Create `Input.astro` with neumorphism
- [ ] Create `AnimatedLink.astro` with underline animation
- [ ] Update `Footer.astro` with Vietnamese content
- [ ] Add `prefers-reduced-motion` styles to `global.css`
- [ ] Test all components with keyboard nav
- [ ] Verify WCAG AA compliance

## Success Criteria
- ✅ ViewTransitions work across all pages
- ✅ Header glassmorphism activates on scroll (JavaScript)
- ✅ All buttons have smooth micro-interactions
- ✅ Cards respond to hover with scale + shadow
- ✅ Inputs have clear focus states
- ✅ Animations disabled with `prefers-reduced-motion`
- ✅ Keyboard navigation works for all interactive elements
- ✅ WCAG AA contrast maintained on all components
- ✅ No layout shift on component load

## Risk Assessment

### High Risk
- **ViewTransitions browser support**: Not supported in Firefox
  - Mitigation: Astro provides fade fallback automatically
- **Backdrop-filter performance**: Can cause repaints
  - Mitigation: Limit to header only, test on mobile devices

### Medium Risk
- **Glassmorphism content legibility**: Low contrast on light backgrounds
  - Mitigation: Use darker text, increase background opacity

### Low Risk
- **Component reusability**: Over-abstraction may limit flexibility
  - Mitigation: Keep props simple, allow slot content

## Security Considerations
- No user input validation in components (handled at form level)
- External links use `rel="noopener noreferrer"`
- No inline event handlers (use Astro's client directives)

## Next Steps
After Phase 2 completion:
1. Use components in Phase 3 (Pages Implementation)
2. Test ViewTransitions between pages
3. Gather user feedback on micro-interactions

## Unresolved Questions
- Should header be sticky on mobile?
- Logo placement and format (SVG preferred)?
- Social media links to include?
- Mobile breakpoint (768px standard)?
