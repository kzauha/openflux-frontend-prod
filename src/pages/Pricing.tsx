import React from "react";
import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Server, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 lg:pb-32 relative">
        <div className="section-container">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              Institutional Licensing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Own the Engine <span className="text-accent underline decoration-accent/20 underline-offset-8">Forever.</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              OpenFlux is licensed as a perpetual institutional research tool. One deployment. Your infrastructure. Your data.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <div className="max-w-xl mx-auto">
            <motion.div
              className="border-2 border-accent bg-card p-8 md:p-12 relative shadow-[0_32px_64px_-16px_rgba(16,185,129,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 bg-accent text-background font-mono text-xs px-4 py-1.5 font-bold uppercase tracking-widest">
                Perpetual License
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-bold tracking-tight uppercase">
                      The Engine
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest text-glow-emerald">
                    Lifetime Access · Local Deployment
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-muted-foreground line-through text-lg font-mono opacity-50">
                      $499
                    </span>
                    <span className="text-5xl font-bold font-mono text-accent">
                      $249
                    </span>
                  </div>
                  <p className="text-[15px] text-muted-foreground font-mono mt-1 uppercase tracking-tighter">
                    ONE-TIME
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Runs entirely on your machine",
                  "Unlimited strategy mining",
                  "Fully customized configurations",
                  "Ready-to-export decision rules",
                  "Lifetime support & updates",
                  "Free upgrade to future versions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-[15px] text-muted-foreground leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/access">
                <Button variant="hero" size="lg" className="w-full text-base h-14 shadow-[0_8px_20px_rgba(16,185,129,0.2)] gap-2">
                  Request Institutional Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[11px] text-muted-foreground leading-relaxed italic text-center">
                  Access is granted on a by-request basis. Submit your research context via the access form and we will follow up directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default Pricing;
