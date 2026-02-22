import { memo } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, Eye, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Lookahead Bias",
    subtitle: "Your indicator peaked at tomorrow's data",
    description:
      "Your RSI divergence looked perfect — because it used a future pivot to define itself. Most indicators repaint without you knowing. OpenFlux enforces strict oracle/observer separation so no signal ever sees what hasn't happened yet.",
    highlight: "Zero lookahead bias",
  },
  {
    icon: Layers,
    title: "Execution Leak",
    subtitle: "Your backtest bought at prices you'd never get",
    description:
      "Backtesting on close prices, ignoring slippage, filling at the top of a wick — your 40% annual return becomes 4% when you add real execution. We simulate fills with spread, latency, and partial execution baked in.",
    highlight: "Realistic execution",
  },
  {
    icon: Eye,
    title: "Overfitted Curves",
    subtitle: "Your strategy memorized the past",
    description:
      "12 parameters tuned to perfection on historical data. It's not a strategy — it's a memory. OpenFlux uses decision trees with constrained depth. Interpretable, auditable, and impossible to overfit into oblivion.",
    highlight: "No black boxes",
  },
];

const ProblemSection = memo(() => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-accent mb-4 tracking-widest uppercase font-bold">
            The OpenFlux Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Why Your Backtest Lied to You
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Most traders are trading on fabricated performance and don't even
            know it. Here's what's actually wrong — and how OpenFlux fixes each
            one.
          </p>
        </div>

        {/* Reason Cards - Balanced 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8 hover:border-accent/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-accent/20 bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Subtitle - The problem */}
              <div className="font-mono text-[10px] text-amber-500/90 mb-2 uppercase tracking-[0.2em] font-bold flex items-center gap-1.5">
                <span className="opacity-50">/</span>
                {reason.subtitle}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {reason.description}
              </p>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-accent bg-accent/10 px-3 py-1.5 border border-accent/20 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                {reason.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          className="mt-12 border border-white/10 bg-black/60 backdrop-blur-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-mono text-3xl text-white font-black">0%</div>
              <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                Lookahead Bias
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl text-white font-black">
                847+
              </div>
              <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                Regimes Tested
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl text-white font-black">
                100%
              </div>
              <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                Interpretable
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl text-accent font-black">
                Real
              </div>
              <div className="font-mono text-[10px] text-accent/70 mt-2 uppercase tracking-widest font-bold">
                Performance Trusted
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ProblemSection;
