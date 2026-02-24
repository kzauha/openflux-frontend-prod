import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const colors = [
  { name: "Background", token: "--background", hsl: "0 0% 4%", usage: "Page background, deep black" },
  { name: "Foreground", token: "--foreground", hsl: "0 0% 95%", usage: "Primary text, near-white" },
  { name: "Card", token: "--card", hsl: "0 0% 7%", usage: "Elevated surfaces, panels" },
  { name: "Card Foreground", token: "--card-foreground", hsl: "0 0% 95%", usage: "Text on cards" },
  { name: "Primary", token: "--primary", hsl: "0 0% 100%", usage: "CTAs, high-contrast buttons" },
  { name: "Primary Foreground", token: "--primary-foreground", hsl: "0 0% 4%", usage: "Text on primary buttons" },
  { name: "Secondary", token: "--secondary", hsl: "240 4% 16%", usage: "Zinc gray, secondary surfaces" },
  { name: "Secondary Foreground", token: "--secondary-foreground", hsl: "0 0% 85%", usage: "Text on secondary" },
  { name: "Muted", token: "--muted", hsl: "240 4% 12%", usage: "Subtle backgrounds" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "240 5% 55%", usage: "Secondary text, labels" },
  { name: "Accent", token: "--accent", hsl: "160 84% 39%", usage: "Emerald green, data highlights, status indicators" },
  { name: "Accent Foreground", token: "--accent-foreground", hsl: "0 0% 100%", usage: "Text on accent" },
  { name: "Destructive", token: "--destructive", hsl: "0 72% 51%", usage: "Red, risk/warning states" },
  { name: "Border", token: "--border", hsl: "240 4% 18%", usage: "Card borders, dividers" },
  { name: "Ring", token: "--ring", hsl: "160 84% 39%", usage: "Focus rings" },
  { name: "Data Positive", token: "--data-positive", hsl: "160 84% 39%", usage: "Positive metrics, success" },
  { name: "Data Neutral", token: "--data-neutral", hsl: "240 5% 55%", usage: "Neutral metrics" },
  { name: "Data Highlight", token: "--data-highlight", hsl: "160 60% 45%", usage: "Lighter emerald accent" },
];

const components = [
  { name: "Navbar", file: "landing/Navbar.tsx", purpose: "Fixed top nav with logo + Docs links" },
  { name: "HeroSection", file: "landing/HeroSection.tsx", purpose: "Split layout: headline left + StrategyMinerChat right" },
  { name: "StrategyMinerChat", file: "landing/StrategyMinerChat.tsx", purpose: "Animated LLM chat demo (typewriter → processing → results)" },
  { name: "ProblemSection", file: "landing/ProblemSection.tsx", purpose: "2×2 grid of backtesting flaws + stat bar" },
  { name: "SolutionSection", file: "landing/SolutionSection.tsx", purpose: "Architecture overview with pipeline diagram" },
  { name: "ProofSection", file: "landing/ProofSection.tsx", purpose: "Sample output metrics (search space, validated strategies, profit factor)" },
  { name: "FooterCTA", file: "landing/FooterCTA.tsx", purpose: "3-column footer (Brand, Navigate, Contact)" },
  { name: "ScrollArrow", file: "landing/ScrollArrow.tsx", purpose: "Animated SVG curved arrow with 'read this' label" },
  { name: "ScrollToTop", file: "ScrollToTop.tsx", purpose: "Route change scroll reset via useEffect" },
  { name: "NavLink", file: "NavLink.tsx", purpose: "react-router NavLink wrapper with active class support" },
];

const buttonVariants: { variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "terminal"; label: string; desc: string }[] = [
  { variant: "default", label: "Default", desc: "White bg, dark text — standard actions" },
  { variant: "destructive", label: "Destructive", desc: "Red bg — danger/delete actions" },
  { variant: "outline", label: "Outline", desc: "Transparent, border — subtle actions" },
  { variant: "secondary", label: "Secondary", desc: "Zinc bg — secondary actions" },
  { variant: "ghost", label: "Ghost", desc: "Transparent, hover bg — inline actions" },
  { variant: "link", label: "Link", desc: "Underline — text links" },
  { variant: "hero", label: "Hero", desc: "White bg, semibold, tracking-wide — main CTAs" },
  { variant: "terminal", label: "Terminal", desc: "Mono, uppercase, accent border on hover — secondary CTAs" },
];

const buttonSizes: { size: "sm" | "default" | "lg" | "xl" | "icon"; label: string }[] = [
  { size: "sm", label: "sm" },
  { size: "default", label: "default" },
  { size: "lg", label: "lg" },
  { size: "xl", label: "xl" },
  { size: "icon", label: "icon" },
];

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div className="mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">Internal Reference</div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">Design System</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Living documentation of every design decision, component, color, typography choice, and copy used across the OpenFlux site.
            </p>
          </motion.div>

          {/* 1. Design Philosophy */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">01</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4">Design Philosophy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Institutional Quant / Terminal / Data Aesthetic.</span> The visual language is deliberately cold, precise, and functional — mirroring the rigor of the product itself.
              </p>
              <div className="border border-border bg-card p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-1">→</span>
                  <div><span className="text-foreground font-medium text-sm">Sharp corners (0px radius)</span> — No softness. This is infrastructure, not a consumer app.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-1">→</span>
                  <div><span className="text-foreground font-medium text-sm">Monospace labels</span> — JetBrains Mono for anything data-adjacent: status lines, metrics, section prefixes.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-1">→</span>
                  <div><span className="text-foreground font-medium text-sm">Dark-only</span> — No light mode. The terminal doesn't have a light mode.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-1">→</span>
                  <div><span className="text-foreground font-medium text-sm">1px borders</span> — Subtle zinc separators, never heavy dividers.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-accent text-xs mt-1">→</span>
                  <div><span className="text-foreground font-medium text-sm">Emerald green accent</span> — Data-positive, institutional. Not playful.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Color Palette */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">02</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Color Palette</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {colors.map((c) => (
                <div key={c.token} className="border border-border bg-card p-4 flex items-start gap-4">
                  <div
                    className="w-12 h-12 shrink-0 border border-border"
                    style={{ backgroundColor: `hsl(${c.hsl})` }}
                  />
                  <div className="min-w-0">
                    <div className="text-sm text-foreground font-medium">{c.name}</div>
                    <div className="font-mono text-xs text-accent mt-0.5">{c.hsl}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Typography */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">03</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Typography</h2>
            <div className="space-y-6">
              <div className="border border-border bg-card p-6">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Font Families</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg text-foreground font-medium">Inter</div>
                    <div className="text-sm text-muted-foreground">Weights 300–700. Body text, headings, all readable content.</div>
                  </div>
                  <div>
                    <div className="text-lg text-foreground font-medium font-mono">JetBrains Mono</div>
                    <div className="text-sm text-muted-foreground">Weights 400–600. Labels, data values, status indicators, section prefixes.</div>
                  </div>
                </div>
              </div>
              <div className="border border-border bg-card p-6 space-y-6">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Type Scale</div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Section Prefix</div>
                  <code className="text-xs text-accent font-mono">font-mono text-xs uppercase tracking-widest text-muted-foreground</code>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">Page Heading</div>
                  <code className="text-xs text-accent font-mono">text-3xl md:text-4xl font-semibold tracking-tight</code>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-2">Section Heading</div>
                  <code className="text-xs text-accent font-mono">text-xl md:text-2xl font-semibold tracking-tight</code>
                </div>
                <div>
                  <div className="text-muted-foreground leading-relaxed mb-2">Body text uses muted foreground with relaxed line height for comfortable reading.</div>
                  <code className="text-xs text-accent font-mono">text-muted-foreground leading-relaxed</code>
                </div>
                <div>
                  <div className="metric-value mb-2">2.31</div>
                  <code className="text-xs text-accent font-mono">font-mono text-2xl lg:text-3xl font-semibold tracking-tight</code>
                </div>
                <div>
                  <div className="metric-label mb-2">Metric Label</div>
                  <code className="text-xs text-accent font-mono">font-mono text-xs uppercase tracking-widest text-muted-foreground</code>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Layout Primitives */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">04</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Layout Primitives</h2>
            <div className="space-y-4">
              {[
                { name: "section-container", classes: "max-w-6xl mx-auto px-6 lg:px-8", desc: "Main content wrapper" },
                { name: "terminal-card", classes: "bg-card border border-border p-6", desc: "Standard card component" },
                { name: "bg-grid", classes: "40px grid, --grid-color lines", desc: "Background grid pattern" },
                { name: "bg-grid-subtle", classes: "80px grid, 50% opacity", desc: "Subtle section grid background" },
                { name: "radius", classes: "0px", desc: "All corners are sharp — no rounding" },
                { name: "hover-lift", classes: "translateY(-2px) + accent border", desc: "Card hover interaction" },
              ].map((p) => (
                <div key={p.name} className="border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <code className="font-mono text-sm text-accent shrink-0">.{p.name}</code>
                  <span className="text-sm text-muted-foreground">{p.desc}</span>
                  <code className="font-mono text-xs text-muted-foreground/70 ml-auto hidden sm:block">{p.classes}</code>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Component Inventory */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">05</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Component Inventory</h2>
            <div className="border border-border overflow-hidden">
              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_200px_1fr] bg-card">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest p-3 border-b border-border">Component</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest p-3 border-b border-border hidden sm:block">File</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest p-3 border-b border-border">Purpose</div>
              </div>
              {components.map((c, i) => (
                <div key={c.name} className={`grid grid-cols-[140px_1fr] sm:grid-cols-[160px_200px_1fr] ${i < components.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-3 text-sm text-foreground font-medium">{c.name}</div>
                  <div className="p-3 font-mono text-xs text-muted-foreground hidden sm:block">{c.file}</div>
                  <div className="p-3 text-sm text-muted-foreground">{c.purpose}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 6. Button Variants */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">06</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Button Variants</h2>
            <div className="space-y-4 mb-8">
              {buttonVariants.map((bv) => (
                <div key={bv.variant} className="border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button variant={bv.variant} size="default" className="w-fit">{bv.label}</Button>
                  <div>
                    <code className="font-mono text-xs text-accent">variant="{bv.variant}"</code>
                    <div className="text-xs text-muted-foreground mt-1">{bv.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-border bg-card p-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Sizes</div>
              <div className="flex flex-wrap items-center gap-4">
                {buttonSizes.map((bs) => (
                  <div key={bs.size} className="flex flex-col items-center gap-2">
                    <Button variant="default" size={bs.size}>{bs.size === "icon" ? "◆" : bs.label}</Button>
                    <code className="font-mono text-[10px] text-muted-foreground">{bs.label}</code>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 7. Animation Patterns */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">07</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Animation Patterns</h2>
            <div className="border border-border bg-card p-6 space-y-4">
              {[
                { name: "Scroll Reveal", code: 'whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}', desc: "Framer Motion scroll-triggered reveal" },
                { name: "Stagger", code: 'delay: index * 0.1', desc: "Sequential reveal for list items" },
                { name: "Spring Impact", code: 'type: "spring", stiffness: 200-300, damping: 15', desc: "High-impact element reveals" },
                { name: "Typewriter", code: 'setTimeout(() => ..., 40)', desc: "Character-by-character text reveal, 40ms interval" },
                { name: "Cursor Blink", code: 'animation: cursor-blink 1s infinite', desc: "CSS keyframe, 50% opacity toggle" },
                { name: "Pulse Subtle", code: 'animation: pulse-subtle 2s ease-in-out infinite', desc: "Gentle opacity oscillation for status indicators" },
              ].map((a) => (
                <div key={a.name} className="flex flex-col gap-1">
                  <div className="text-sm text-foreground font-medium">{a.name}</div>
                  <code className="font-mono text-xs text-accent">{a.code}</code>
                  <div className="text-xs text-muted-foreground">{a.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 8. Page Copy Reference */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">08</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Page Copy Reference</h2>

            {/* Landing */}
            <div className="border border-border bg-card p-6 mb-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Landing Page — /</div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-foreground font-medium mb-1">Hero Headline</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Maintain Your Edge in Any Market Regime`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Hero Subtext</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Strategies decay. Markets shift.\nOpenFlux mines rules that work now — and proves it's real.`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Status Line</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Institutional Research Sandbox`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Problem Section Title</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Why Your Backtest Lied to You\nMost traders are trading on fabricated performance and don't even know it.\nHere's what's actually wrong — and how OpenFlux fixes each one.`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Problem Cards</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`1. Lookahead Bias — "Your indicator peaked at tomorrow's data"
2. Execution Leak — "Your backtest bought at prices you'd never get"
3. Overfitted Curves — "Your strategy memorized the past"
4. Survivorship Bias — "You only tested the coins that survived"`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Solution Section</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Distributed Rule Synthesis
Our infrastructure evaluates billions of candidate strategies across
configurable asset universes. The system employs symbolic regression,
constrained optimization, and ensemble methods to produce interpretable,
auditable trading logic suitable for institutional deployment.`}</pre>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Proof Section</div>
                  <pre className="text-muted-foreground font-mono text-xs whitespace-pre-wrap">{`Research Summary: BTC/USDT 4H (2020-01 to 2024-12)
Search Space: 2.4B candidate rules evaluated
Validated Strategies: 847 passed out-of-sample
Median Profit Factor: 2.3 top decile strategies`}</pre>
                </div>
              </div>
            </div>

            {/* Pricing removed */}

            {/* Docs */}
            <div className="border border-border bg-card p-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Docs — /docs</div>
              <div className="space-y-4 text-sm">
                {[
                  { title: "Architecture Overview", text: "OpenFlux is a rule-mining engine that discovers systematic trading strategies from historical market data. Unlike black-box ML models, every output is a human-readable decision tree with explicit entry/exit conditions." },
                  { title: "Temporal Isolation", text: "Oracle/observer split — your signal never sees the future. Eliminates lookahead bias at the infrastructure level." },
                  { title: "Shared Kernel", text: "Same code generates features during training, validation, and live execution. One kernel. One codebase. One truth." },
                  { title: "Unbiased Labelling", text: "Every bar labeled using forward-looking fixed window. No cherry-picking. No survivorship in the target variable." },
                  { title: "Decision Trees", text: "Constrained-depth decision trees. Readable, auditable, explainable. No ensemble of 500 trees or 10M-parameter neural networks." },
                  { title: "Regime-Agnostic Validation", text: "Stress-tested across bull, bear, flash crashes, low liquidity, and parabolic runs." },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="text-foreground font-medium mb-1">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 9. Grid / Background Patterns */}
          <motion.div className="mb-20" {...sectionAnim}>
            <div className="font-mono text-xs text-accent mb-3">09</div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">Grid / Background Patterns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border overflow-hidden">
                <div className="bg-grid h-32" />
                <div className="p-4">
                  <code className="font-mono text-sm text-accent">.bg-grid</code>
                  <div className="text-xs text-muted-foreground mt-1">40px grid, --grid-color lines. Used on hero section.</div>
                </div>
              </div>
              <div className="border border-border overflow-hidden">
                <div className="bg-grid-subtle h-32" />
                <div className="p-4">
                  <code className="font-mono text-sm text-accent">.bg-grid-subtle</code>
                  <div className="text-xs text-muted-foreground mt-1">80px grid, 50% opacity. Used on content sections.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div className="border-t border-border pt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-sm text-muted-foreground italic">
              This is an internal reference. Not linked in navigation — access via /design-system directly.
            </p>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default DesignSystem;
