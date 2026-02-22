 import { motion } from "framer-motion";
 
 const SolutionSection = () => {
   return (
     <section className="py-24 lg:py-32 relative">
       <div className="section-container">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Left: Text Content */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              {/* Section prefix */}
              <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
                Core Architecture
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
                Distributed Rule Synthesis
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Our infrastructure evaluates <span className="text-foreground font-medium">billions of candidate strategies</span> across 
                configurable asset universes. The system employs symbolic regression, constrained optimization, and ensemble methods 
                to produce interpretable, auditable trading logic suitable for institutional deployment.
              </p>

              {/* Key points */}
              <div className="space-y-3">
                {[
                  "Parallel evaluation across distributed compute clusters",
                  "Walk-forward validation with configurable embargo periods",
                  "Fully transparent decision logic for compliance review"
                ].map((point, index) => (
                 <div key={index} className="flex items-center gap-3 font-mono text-sm">
                   <span className="text-accent">✓</span>
                   <span className="text-muted-foreground">{point}</span>
                 </div>
               ))}
             </div>
           </motion.div>
 
           {/* Right: Diagram Placeholder */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <div className="border border-border bg-card aspect-square flex flex-col items-center justify-center p-8">
               {/* Diagram visualization */}
               <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                {/* Mining engine visualization */}
                <div className="border border-accent bg-accent/5 px-8 py-4 relative">
                  <span className="font-mono text-sm text-accent">MINING ENGINE</span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent animate-pulse-subtle" />
                 </div>
                 
                {/* Data flow arrows */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-accent/50" />
                    <div className="w-2 h-2 border-r border-b border-accent/50 rotate-45 -mt-1" />
                  </div>
                </div>

                {/* Rule generation */}
                <div className="flex gap-4">
                  <div className="border border-border px-4 py-2 bg-muted/20">
                    <span className="font-mono text-[10px] text-muted-foreground">GEN</span>
                  </div>
                   <div className="w-2 h-2 bg-accent" />
                  <div className="border border-border px-4 py-2 bg-muted/20">
                    <span className="font-mono text-[10px] text-muted-foreground">EVAL</span>
                  </div>
                  <div className="w-2 h-2 bg-accent" />
                  <div className="border border-border px-4 py-2 bg-muted/20">
                    <span className="font-mono text-[10px] text-muted-foreground">RANK</span>
                  </div>
                 </div>
 
                {/* Output */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 border-r border-b border-accent/50 rotate-45" />
                    <div className="w-px h-6 bg-accent/50" />
                   </div>
                </div>

                <div className="border border-accent/50 px-6 py-3">
                  <span className="font-mono text-xs text-accent">STRATEGY OUTPUT</span>
                 </div>
 
                 {/* Label */}
                 <div className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Rule Mining Pipeline
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default SolutionSection;