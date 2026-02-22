import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { motion } from "framer-motion";

const sections = [
  {
    id: "overview",
    title: "Architecture Overview",
    content: "OpenFlux is a rule-mining engine that discovers systematic trading strategies from historical market data. Unlike black-box ML models, every output is a human-readable decision tree with explicit entry/exit conditions.",
  },
  {
    id: "temporal",
    title: "Temporal Isolation — Oracle/Observer Split",
    content: "The most critical architectural decision. Every data point exists in two states: what the observer (your strategy) can see, and what the oracle (future truth) knows. These two views are never mixed. The observer cannot access any information that wouldn't have been available at decision time. This eliminates lookahead bias at the infrastructure level, not as an afterthought.",
  },
  {
    id: "kernel",
    title: "Shared Kernel Architecture",
    content: "The same code that generates features during training generates features during validation and live execution. There is no separate 'backtest mode' vs 'live mode.' One kernel. One codebase. One truth. This prevents the silent divergence that plagues most backtesting systems — where training preprocessing subtly differs from production preprocessing.",
  },
  {
    id: "labelling",
    title: "Unbiased Labelling",
    content: "Most systems label bars using pivot points — which are, by definition, only identifiable in hindsight. OpenFlux labels every single bar using a forward-looking fixed window. No cherry-picking. No survivorship in the target variable itself. The label for bar N is determined by what happens in the next K bars, applied uniformly across the entire dataset.",
  },
  {
    id: "trees",
    title: "Decision Trees — Not Black Boxes",
    content: "The output is a constrained-depth decision tree. You can read it. You can audit it. You can explain it to a regulator. Each leaf node is an actionable signal with explicit conditions. No ensemble of 500 gradient-boosted trees. No neural network with 10M parameters. Just clean, interpretable logic that you can verify yourself.",
  },
  {
    id: "regime",
    title: "Regime-Agnostic Validation",
    content: "Every strategy is stress-tested across bull markets, bear markets, flash crashes, low liquidity periods, and parabolic runs. If your strategy only works in an uptrend, we'll tell you. The validation pipeline deliberately includes the worst market conditions in history to ensure robustness is not accidental.",
  },
  {
    id: "synthesis",
    title: "Distributed Rule Synthesis",
    content: "Our infrastructure evaluates billions of candidate strategies across configurable asset universes. The system employs symbolic regression, constrained optimization, and ensemble methods to produce interpretable, auditable trading logic suitable for institutional deployment. This parallel evaluation happens across distributed compute clusters with configurable embargo periods.",
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 lg:pb-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              Technical Documentation
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
              How OpenFlux Works
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The full technical architecture behind the mining engine.
              Read it. Find a flaw. We'll fix it or refund you.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            className="border border-border bg-card p-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Contents
            </div>
            <div className="space-y-2">
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="font-mono text-xs text-accent w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{section.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-mono text-xs text-accent mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            className="mt-20 border-t border-border pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground italic">
              This is a living document. More sections will be added as the architecture evolves.
              If you have questions or found something that doesn't add up — reach out. That's the point.
            </p>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default Docs;
