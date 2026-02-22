 import { motion } from "framer-motion";
 import { Play } from "lucide-react";
 
 const DemoSection = () => {
   return (
     <section className="py-24 lg:py-32 relative">
       <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              System Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Infrastructure Demonstration
            </h2>
          </div>
 
         {/* Video Placeholder */}
         <motion.div
           className="aspect-video border border-border bg-card relative group cursor-pointer"
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           whileHover={{ borderColor: "hsl(var(--accent) / 0.5)" }}
         >
           {/* Grid pattern inside */}
           <div className="absolute inset-0 bg-grid-subtle opacity-50" />
           
           {/* Play button */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 border border-border bg-background/80 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
               <Play className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
             </div>
           </div>
 
            {/* Terminal-style overlay */}
            <div className="absolute bottom-4 left-4 font-mono text-xs text-muted-foreground">
              Pipeline execution • Strategy synthesis module
            </div>

            {/* Duration indicator */}
            <div className="absolute bottom-4 right-4 font-mono text-xs text-muted-foreground">
              03:24
            </div>

            {/* Status overlay */}
            <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/70 text-right space-y-1">
              <div>throughput: <span className="text-foreground/70">24,847/s</span></div>
              <div>search_depth: <span className="text-foreground/70">7</span></div>
            </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default DemoSection;