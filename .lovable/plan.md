

# Internal Design System Documentation

A new `/design-system` page documenting every design decision, component, color, typography choice, and copy used across the OpenFlux site. This serves as a living reference for maintaining consistency.

---

## Page Structure

The page will be a long-form reference document at route `/design-system`, using the same Navbar + footer layout as other pages. It will have these sections:

### 1. Design Philosophy
Brief overview of the "Institutional Quant / Terminal / Data Aesthetic" direction. Why sharp corners, why monospace labels, why dark-only.

### 2. Color Palette
Visual swatches with HSL values for every token:
- **Background**: `0 0% 4%` (deep black)
- **Foreground**: `0 0% 95%` (near-white)
- **Card**: `0 0% 7%` (elevated surface)
- **Primary**: `0 0% 100%` (white, high contrast CTAs)
- **Secondary**: `240 4% 16%` (zinc gray)
- **Muted**: `240 4% 12%` / foreground `240 5% 55%`
- **Accent**: `160 84% 39%` (emerald green, data highlights)
- **Destructive**: `0 72% 51%` (red, risk/warning)
- **Border**: `240 4% 18%`
- **Data tokens**: positive (emerald), neutral (zinc), highlight (lighter emerald)

Each color rendered as a swatch box with its name, HSL value, and usage note.

### 3. Typography
- **Body**: Inter (300-700 weights) -- used for all readable content
- **Mono**: JetBrains Mono (400-600) -- used for labels, data, status indicators, section prefixes
- Document the type scale: section prefixes (`text-xs uppercase tracking-widest`), headings (`text-3xl md:text-4xl font-semibold tracking-tight`), body (`text-muted-foreground leading-relaxed`), metric values (`font-mono text-2xl font-semibold`)

### 4. Layout Primitives
- **section-container**: `max-w-6xl mx-auto px-6 lg:px-8`
- **terminal-card**: `bg-card border border-border p-6`
- **bg-grid** / **bg-grid-subtle**: background grid patterns with sizes
- **radius**: `0px` -- all sharp corners, no rounding
- **hover-lift**: translateY(-2px) + accent border on hover

### 5. Component Inventory
Each component listed with its purpose and key props:

| Component | File | Purpose |
|-----------|------|---------|
| Navbar | `landing/Navbar.tsx` | Fixed top nav with logo + Docs/Pricing links |
| HeroSection | `landing/HeroSection.tsx` | Split layout: headline + StrategyMinerChat |
| StrategyMinerChat | `landing/StrategyMinerChat.tsx` | Animated LLM chat demo (typewriter -> processing -> results) |
| ProblemSection | `landing/ProblemSection.tsx` | 2x2 grid of backtesting flaws + stat bar |
| SolutionSection | `landing/SolutionSection.tsx` | Architecture overview with pipeline diagram |
| ProofSection | `landing/ProofSection.tsx` | Sample output metrics (search space, validated strategies, profit factor) |
| FooterCTA | `landing/FooterCTA.tsx` | 3-column footer (Brand, Navigate, Contact) |
| ScrollArrow | `landing/ScrollArrow.tsx` | Animated SVG curved arrow with "read this" label |
| ScrollToTop | `ScrollToTop.tsx` | Route change scroll reset |
| NavLink | `NavLink.tsx` | react-router NavLink wrapper with active class support |

### 6. Button Variants
Rendered examples of each variant from `button.tsx`:
- **default**: white bg, dark text
- **destructive**: red bg
- **outline**: transparent, border
- **secondary**: zinc bg
- **ghost**: transparent, hover bg
- **link**: underline
- **hero**: white bg, semibold, tracking-wide (used for main CTAs)
- **terminal**: transparent, mono font, uppercase tracking-widest, accent border on hover (used for secondary actions)

Sizes: `sm`, `default`, `lg`, `xl`, `icon`

### 7. Animation Patterns
- **Framer Motion**: `whileInView` with `viewport={{ once: true }}` for scroll reveals
- **Stagger pattern**: `delay: index * 0.1` for lists
- **Spring animations**: `type: "spring", stiffness: 200-300` for impactful reveals
- **Typewriter**: character-by-character with 40ms interval
- **Cursor blink**: CSS keyframe `cursor-blink 1s infinite`
- **Pulse subtle**: 2s ease-in-out infinite opacity oscillation

### 8. Page Copy Reference
All major text blocks organized by page:

**Landing Page (/):**
- Hero headline, subtext, CTA, status line
- Problem section: title, subtitle, 4 card texts (lookahead bias, execution leak, overfitted curves, survivorship bias)
- Solution section: title, description, key points
- Proof section: metrics and labels

**Pricing (/pricing):**
- Beta tier copy, pricing, founder's note
- Source licensing copy
- Skeptics founder's note with architecture bullets

**Docs (/docs):**
- 6 architecture sections with full text content

### 9. Grid / Background Patterns
- **bg-grid**: 40px grid, `--grid-color` lines
- **bg-grid-subtle**: 80px grid, 50% opacity lines

---

## Technical Details

- **New file**: `src/pages/DesignSystem.tsx` -- single long-form page component
- **Route**: Add `/design-system` to `App.tsx`
- **No navbar link** -- this is internal, accessed by direct URL only
- Color swatches will be rendered as `div` elements with inline `backgroundColor: hsl(...)` styling
- Button examples will use the actual `Button` component with each variant
- All sections use the existing `section-container` layout and `motion.div` scroll animations for consistency
- Copy sections will use `<pre>` or styled `<code>` blocks for exact text references

