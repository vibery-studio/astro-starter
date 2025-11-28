# Design System - Vibe Coding Product Studio

**Status:** Phase 1 Complete
**Last Updated:** 2025-11-28

## Token Architecture

All design tokens live in `src/styles/tokens/*.css` and are imported via `src/styles/global.css`.

### File Structure
```
src/styles/
├── global.css               # Imports tokens + base styles
└── tokens/
    ├── colors.css          # 30 color variables
    ├── typography.css      # 24 typography variables
    ├── spacing.css         # 19 spacing variables
    └── effects.css         # 15 effect variables + 8 utilities
```

## 1. Colors (30 variables)

### Primary Palette
```css
--color-primary: #0066FF        /* Brand blue */
--color-primary-light: #3385FF
--color-primary-dark: #0052CC
```

### Accent
```css
--color-accent: #FF6B6B         /* Coral red */
--color-accent-light: #FF8A8A
--color-accent-dark: #E55555
```

### Metallics
```css
--color-metallic: #B8C4CE       /* Silver-blue */
--color-metallic-light: #D4DDE5
--color-metallic-dark: #8A9BAA
```

### Ethereal Blues
```css
--color-ethereal: #A7C7E7       /* Soft sky blue */
--color-ethereal-light: #C5DCF2
--color-ethereal-dark: #7BA8D4
```

### Neutrals (10-step scale)
```css
--color-neutral-900: #1A1A2E    /* Darkest */
--color-neutral-800: #2D2D44
--color-neutral-700: #404060
--color-neutral-600: #5C5C7A
--color-neutral-500: #7A7A94
--color-neutral-400: #9999AD
--color-neutral-300: #B8B8C7
--color-neutral-200: #D6D6E0
--color-neutral-100: #EBEBF0
--color-neutral-50: #F5F5F8     /* Lightest */
--color-white: #FFFFFF
```

### Semantic
```css
--color-text: var(--color-neutral-900)
--color-text-secondary: var(--color-neutral-600)
--color-text-muted: var(--color-neutral-500)
--color-surface: var(--color-white)
--color-surface-elevated: var(--color-neutral-50)
--color-border: var(--color-neutral-200)
--color-border-light: var(--color-neutral-100)
```

### Status
```css
--color-success: #10B981
--color-warning: #F59E0B
--color-error: #EF4444
--color-info: var(--color-primary)
```

### Glass Effect
```css
--glass-bg: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
--glass-shadow: rgba(0, 0, 0, 0.1)
```

## 2. Typography (24 variables)

### Font Families
```css
--font-sans: 'Open Sans', system-ui, ...      /* Vietnamese diacritics support */
--font-heading: 'Montserrat', var(--font-sans)
--font-mono: 'JetBrains Mono', 'Fira Code', ...
```

### Font Sizes (Modular Scale 1.25)
```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */
```

**Mobile adjustments:** h1-h3 sizes reduced at max-width 768px.

### Line Heights (Vietnamese optimized)
```css
--leading-none: 1
--leading-tight: 1.25
--leading-snug: 1.375
--leading-normal: 1.6       /* Higher than standard 1.5 for Vietnamese diacritics */
--leading-relaxed: 1.75
--leading-loose: 2
```

### Letter Spacing
```css
--tracking-tighter: -0.05em
--tracking-tight: -0.025em
--tracking-normal: 0
--tracking-wide: 0.025em
--tracking-wider: 0.05em
```

### Font Weights
```css
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### Usage
- **Body:** `--font-sans`, `--text-base`, `--leading-normal`, `--font-normal`
- **Headings:** `--font-heading`, `--font-bold`, `--leading-tight`, `--tracking-tight`

## 3. Spacing (19 variables)

### Scale (8px base)
```css
--space-0: 0
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

### Containers
```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1200px
--container-2xl: 1400px
```

### Section Padding
```css
--section-padding-y: var(--space-16)  /* Desktop: 64px */
--section-padding-x: var(--space-6)   /* Desktop: 24px */

/* Mobile (max-width 768px): */
--section-padding-y: var(--space-12)  /* 48px */
--section-padding-x: var(--space-4)   /* 16px */
```

### Border Radius
```css
--radius-sm: 0.25rem    /* 4px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-full: 9999px   /* Pill shape */
```

## 4. Effects (15 variables + 8 utilities)

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), ...
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), ...
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), ...
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.1)
```

### Neumorphism Shadows
```css
--shadow-neuro-light: -5px -5px 10px rgba(255, 255, 255, 0.8)
--shadow-neuro-dark: 5px 5px 10px rgba(0, 0, 0, 0.15)
--shadow-neuro-inset-light: inset -3px -3px 7px rgba(255, 255, 255, 0.8)
--shadow-neuro-inset-dark: inset 3px 3px 7px rgba(0, 0, 0, 0.1)
```

### Transitions
```css
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 350ms ease
--transition-slower: 500ms ease
```

### Blur
```css
--blur-sm: 4px
--blur-md: 8px
--blur-lg: 16px
--blur-xl: 24px
```

## Utility Classes

### 1. Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(var(--blur-lg));
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-glass);
}

.glass-dark {
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(var(--blur-lg));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-glass);
}
```

**Use case:** Floating cards, modals, overlays with frosted glass effect.

### 2. Neumorphism
```css
.neuro {
  background: var(--color-neutral-100);
  box-shadow: var(--shadow-neuro-light), var(--shadow-neuro-dark);
  border-radius: var(--radius-lg);
  transition: box-shadow var(--transition-base);
}

.neuro:hover {
  box-shadow: var(--shadow-neuro-light), 8px 8px 16px rgba(0, 0, 0, 0.18);
}

.neuro:active,
.neuro-pressed {
  box-shadow: var(--shadow-neuro-inset-light), var(--shadow-neuro-inset-dark);
}
```

**Use case:** Soft UI buttons, input fields, tactile controls.

### 3. Gradients
```css
.gradient-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
}

.gradient-ethereal {
  background: linear-gradient(135deg, var(--color-ethereal-light) 0%, var(--color-primary-light) 100%);
}
```

**Use case:** Hero backgrounds, CTA buttons, section dividers.

### 4. Hover Lift
```css
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

**Use case:** Cards, buttons, interactive elements.

## Accessibility

### Reduced Motion
All animations/transitions disabled when user prefers reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Selection
```css
::selection {
  background: var(--color-primary);
  color: var(--color-white);
}
```

## Usage Examples

### Button with Glassmorphism
```astro
<button class="glass hover-lift" style="padding: var(--space-4) var(--space-8); border-radius: var(--radius-lg);">
  Click Me
</button>
```

### Neumorphic Card
```astro
<div class="neuro" style="padding: var(--space-6); max-width: var(--container-sm);">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>
```

### Hero Section with Gradient
```astro
<section class="gradient-ethereal section">
  <div class="container">
    <h1 style="color: var(--color-white);">Welcome</h1>
  </div>
</section>
```

### Responsive Typography
```astro
<h1 style="font-size: var(--text-5xl); line-height: var(--leading-tight);">
  Vietnamese Heading
</h1>
```

## Notes for AI

1. **Always use tokens** - Never hardcode colors, spacing, or effects.
2. **Vietnamese line-height** - Use `--leading-normal` (1.6) for body text due to diacritics.
3. **Glass effect requires backdrop-filter** - May not work in older browsers.
4. **Neumorphism works best on neutral backgrounds** - Use `--color-neutral-100` or `--color-neutral-50`.
5. **Legacy vars exist** - Some old components may use `--accent`, `--black`, `--gray` instead of new tokens.
6. **Mobile-first** - Tokens are desktop values; use `@media (max-width: 768px)` for mobile overrides.
7. **8px spacing scale** - All spacing should align to multiples of 4px (`--space-1`) or 8px (`--space-2`).

## Future Enhancements

- Dark mode color scheme (add `:root[data-theme="dark"]` overrides)
- Component-specific tokens (e.g., `--button-padding`, `--card-shadow`)
- Animation tokens (easing curves, durations for specific effects)
- Grid/layout tokens (column gaps, grid templates)
