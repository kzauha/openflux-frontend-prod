import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";
import { Shield, Target, Zap, Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "The Mining Sandbox",
    subtitle: "Build Your Own Edge",
    description: "Full control over asset universes, labeling rules, and feature sets. Build a strategy that fits YOUR specific risk profile.",
    icon: Target,
    accent: "emerald"
  },
  {
    title: "Infinite Iteration",
    subtitle: "Mine Until You Find Truth",
    description: "Edges decay over time. Use the engine to iterate infinitely, discovering new rule sets as market regimes evolve.",
    icon: Zap,
    accent: "emerald"
  },
  {
    title: "Your strategy never leaves your pc",
    subtitle: "You own the edges you discover",
    description: "OpenFlux runs locally. Your data, configurations, and alpha never leave your hardware. True research sovereignty.",
    icon: Shield,
    accent: "emerald"
  },
  {
    title: "Exportable Rule Sets",
    subtitle: "Bot-ready and human readable",
    description: "Export your discovered edge as human-readable logic. Integrate directly with your favorite trading bot or execution engine.",
    icon: Search,
    accent: "emerald"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs text-accent mb-4 tracking-widest uppercase font-bold">
              Research vs Iteration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Research is <span className="text-data-positive text-glow-emerald">Iteration.</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl space-y-4">
              <p>
                Stop trusting random signals. OpenFlux gives you the power of a quantitative 
                research firm on your own machine. Build, iterate, and export with zero friction.
              </p>
              <p className="text-sm border-l border-accent/30 pl-4 py-1 italic">
                What if RSI 30 isn't the dip — what if it's 24? What if weekends are free money 
                and you've been sitting out? What if funding rate is the only indicator that matters?
              </p>
              <p>
                OpenFlux gives you the answer. It builds a strategy around it—or tells you it doesn't work.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 shrink-0 border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold group-hover:text-accent transition-colors text-sm uppercase tracking-wider">
                      {f.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {f.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right: CardSwap Interface */}
          <div className="relative h-[550px] flex items-center justify-center lg:justify-end">
            <CardSwap 
              width={440} 
              height={500} 
              cardDistance={35} 
              verticalDistance={35} 
              delay={3000}
              pauseOnHover={true}
            >
              {features.map((f, idx) => (
                <Card 
                  key={idx} 
                  customClass="border border-white/10 bg-card/90 backdrop-blur-2xl p-10 flex flex-col shadow-2xl"
                >
                  <div className="mb-8 font-mono text-[10px] text-accent uppercase tracking-[0.2em] font-bold flex items-center gap-1.5">
                    <span className="opacity-50">/</span>
                    0{idx + 1} System_Capability
                  </div>
                  
                  <div className="w-16 h-16 border border-accent/20 bg-accent/5 flex items-center justify-center mb-10">
                    <f.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base mb-8">
                    {f.description}
                  </p>

                  <Link to="/docs" className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group/link cursor-pointer">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest group-hover/link:text-accent transition-colors">
                      Learn architecture →
                    </span>
                    <div className="w-6 h-6 border border-white/10 flex items-center justify-center group-hover/link:border-accent transition-colors">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </Link>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default FeaturesSection;
