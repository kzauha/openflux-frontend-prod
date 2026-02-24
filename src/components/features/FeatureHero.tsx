import { motion } from "framer-motion";

const FeatureHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent mb-6 tracking-[0.3em] uppercase font-bold">
            Capabilities_Explorer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            The Engine of <span className="text-glow-emerald text-data-positive italic">Sovereign Alpha.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
            Stop consuming static signals. Start mining your own truth. OpenFlux provides the clinical environment for rigorous quantitative research.
          </p>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default FeatureHero;
