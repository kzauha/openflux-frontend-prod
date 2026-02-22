import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StrategyMinerChat from "./StrategyMinerChat";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-8 shadow-sm">
              Quantitative Research <span className="text-data-positive text-glow-emerald">Infrastructure.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
              OpenFlux is a strategy research sandbox that runs on your machine. It does the maths, you be the quant.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
              Experiment, discover, refine and verify your own edges. Get once, keep forever.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link to="/pricing">
                <Button variant="hero" size="lg">
                  Get Beta Access
                </Button>
              </Link>
            </motion.div>

            {/* Status indicators */}
            <div className="mt-12 font-mono text-xs text-muted-foreground flex items-center justify-center lg:justify-start gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" />
                <span>v0.1 beta</span>
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" />
                <span>Currently crypto only. FX/Stocks coming in v1 launch</span>
              </span>
            </div>
          </motion.div>

          {/* Right: Animated Chat Interface */}
          <div className="flex justify-center lg:justify-end">
            <StrategyMinerChat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;