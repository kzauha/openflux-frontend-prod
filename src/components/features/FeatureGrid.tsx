import { motion } from "framer-motion";
import { Shield, Zap, Search, Target, Cpu, Database, Share2, LineChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Clinical Sovereignty",
    description: "Your data, your configurations, and your alpha never leave your hardware. OpenFlux runs locally, ensuring true research sovereignty."
  },
  {
    icon: Target,
    title: "Zero Lookahead Bias",
    description: "Strict oracle/observer separation. No signal ever sees what hasn't happened yet, preventing the most common backtesting trap."
  },
  {
    icon: Cpu,
    title: "The Mining Sandbox",
    description: "Build your own edge with full control over asset universes, labeling rules, and feature sets tailored to your risk profile."
  },
  {
    icon: Zap,
    title: "Infinite Iteration",
    description: "Edges decay. Use the engine to iterate infinitely, discovering new rule sets as market regimes evolve."
  },
  {
    icon: Database,
    title: "Local Execution",
    description: "Perform heavy quantitative research without latency or third-party dependencies. Total control over your compute environment."
  },
  {
    icon: LineChart,
    title: "Realistic Simulation",
    description: "Simulate fills with spread, latency, and partial execution. We move beyond 'close price' delusions into real market impact."
  },
  {
    icon: Search,
    title: "Interpretable Logic",
    description: "No black boxes. OpenFlux uses decision trees with constrained depth—auditable and impossible to overfit into oblivion."
  },
  {
    icon: Share2,
    title: "Bot-Ready Exports",
    description: "Export discovered edges as human-readable logic. Integrate directly with your favorite trading bot or execution engine."
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-black p-8 group hover:bg-neutral-900/50 transition-colors"
            >
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                <feature.icon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
