 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Download } from "lucide-react";
 
const metrics = [
  {
    label: "Search Space",
    value: "2.4B",
    suffix: "candidate rules evaluated",
    highlight: false
  },
  {
    label: "Validated Strategies",
    value: "847",
    suffix: "passed out-of-sample",
    highlight: true
  },
  {
    label: "Median Profit Factor",
    value: "2.3",
    suffix: "top decile strategies",
    highlight: false
  }
];
 
 const ProofSection = () => {
   return (
     <section className="py-24 lg:py-32 border-y border-border">
       <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-accent mb-4 tracking-widest uppercase font-bold">
              Sample Output
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Research Summary: BTC/USDT 4H
            </h2>
            <p className="text-sm text-gray-400 mt-2 font-mono uppercase tracking-widest">
              2020-01 to 2024-12 • Walk-forward validation
            </p>
          </div>

         {/* Metrics Dashboard */}
         <motion.div
           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
         >
          {metrics.map((metric) => (
             <div 
               key={metric.label}
               className="border border-white/10 bg-black/40 backdrop-blur-xl p-8 text-center hover:border-accent/40 transition-all group"
             >
               <div className={`text-4xl font-black mb-2 tracking-tighter ${metric.highlight ? 'text-data-positive' : 'text-white'}`}>
                 {metric.value}
               </div>
               <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold group-hover:text-accent transition-colors">
                 {metric.label}
               </div>
               {metric.suffix && (
                 <div className="font-mono text-[11px] text-gray-400 mt-3 border-t border-white/5 pt-3">
                   {metric.suffix}
                 </div>
               )}
             </div>
           ))}
         </motion.div>
 
          {/* Download CTA */}
          <div className="text-center">
            <Button variant="terminal" size="default">
              <Download className="w-4 h-4 mr-2" />
              Request Full Documentation
            </Button>
          </div>
       </div>
     </section>
   );
 };
 
 export default ProofSection;