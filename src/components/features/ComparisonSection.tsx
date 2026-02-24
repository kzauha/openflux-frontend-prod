import { motion } from "framer-motion";
import { Check, X, Server, Cloud } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Choose Your Methodology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you want pre-mined excellence or a playground for your own alpha, we have the environment for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cloud */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-black/40 backdrop-blur-xl p-10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-blue-500/20 bg-blue-500/5 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">OpenFlux Cloud</h3>
                <p className="text-blue-500 text-xs font-mono uppercase tracking-widest font-bold">Curated Alpha</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Access pre-mined strategies found by our proprietary clusters. Perfect for those who want established edges without the compute overhead.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              <FeatureItem text="Access to pre-mined strategies" />
              <FeatureItem text="Daily strategy updates" />
              <FeatureItem text="Performance dashboard" />
              <FeatureItem text="Basic export formats" />
              <FeatureItem text="Zero hardware requirements" />
            </ul>
          </motion.div>

          {/* Engine */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="border border-accent/20 bg-accent/5 backdrop-blur-xl p-10 flex flex-col relative"
          >
            <div className="absolute top-0 right-0 bg-accent px-3 py-1 text-[10px] font-mono font-black text-black">
              RESEARCH GRADE
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-accent/20 bg-accent/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">OpenFlux Engine</h3>
                <p className="text-accent text-xs font-mono uppercase tracking-widest font-bold">Research Sandbox</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
              The full quantitative suite. Build, iterate, and mine your own strategies on your own hardware. Total clinical control.
            </p>

            <ul className="space-y-4 mb-10 flex-grow text-gray-200">
              <FeatureItem text="Full mining sandbox access" />
              <FeatureItem text="Infinite iteration capabilities" />
              <FeatureItem text="Local data sovereignty" />
              <FeatureItem text="Advanced export (Python/JSON)" />
              <FeatureItem text="Custom feature engineering" />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-sm">
    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
      <Check className="w-3 h-3 text-accent" />
    </div>
    <span>{text}</span>
  </li>
);

export default ComparisonSection;
