import React from "react";
import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import ScrollArrow from "@/components/landing/ScrollArrow";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Mail, Cloud, Server, ArrowRight } from "lucide-react";
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
              Limited Beta Release
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Own the Engine <span className="text-accent underline decoration-accent/20 underline-offset-8">Forever.</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              OpenFlux is a strategy research sandbox tool, designed to democratize quant research infrastructure to non-quant people. 
              Completely own the product, stop falling for signal selling scam, and make more informed trades.
            </p>
            <p className="text-accent font-mono text-sm mt-4 uppercase tracking-[0.2em]">
              -- Or just use it to learn the market, you decide --
            </p>
          </motion.div>

          {/* Pricing Card - Centered Single Product */}
          <div className="max-w-xl mx-auto">
            <motion.div
              className="border-2 border-accent bg-card p-8 md:p-12 relative shadow-[0_32px_64px_-16px_rgba(16,185,129,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 bg-accent text-background font-mono text-xs px-4 py-1.5 font-bold uppercase tracking-widest">
                Beta Access
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
                    Lifetime Access
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-muted-foreground line-through text-lg font-mono opacity-50">
                      $399
                    </span>
                    <span className="text-5xl font-bold font-mono text-accent">
                      $249
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-tighter">
                    One-time payment
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Own the Engine forever",
                  "Unlimited strategy mining",
                  "Complete access to sandbox",
                  "Lifetime support, bug fixes",
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

              <Button variant="hero" size="lg" className="w-full text-base h-14 shadow-[0_8px_20px_rgba(16,185,129,0.2)]">
                Claim Early Bird Access
              </Button>
              
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-accent">/</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                    OpenFlux Beta currently exclusively handles <span className="text-white font-medium">Long positions</span>. 
                    Shorts and advanced portfolio optimization are coming in v1 ($399).
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-accent">/</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                    Beta users get a <span className="text-white font-medium">free upgrade</span> to v1. We are offering this early discount in exchange for your feedback.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Arrow */}
          <ScrollArrow />

          {/* Founder's Note */}
          <motion.div
            className="max-w-2xl mx-auto mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="border border-border/60 bg-card/50 p-8 lg:p-10 relative">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" />
                Founder's Note
              </div>

              <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-lg">
                  For the skeptics —
                </p>
                <p>
                  I know how it sounds. There are a lot of signal selling scams in the market
                </p>
                <p>
                  OpenFlux was built to filter them out. By design, it prevents overfit, look-ahead, repainting and other common enemies, where the 10x money backtests are born. This is a honest system, designed for research.
                </p>
                <p>
                  It is fully customizable, and is always real time and adaptive. It will work the same 5 years from now despite market changes. I'll fix it if it isnt.
                </p>
                <p>
                  I have written down the architecture. Read the docs. Find a flaw. I'll fix it or refund you.
                </p>

                <div className="pt-4">
                  <Link to="/docs">
                    <Button variant="hero" size="default">
                      Technical Docs →
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground italic">
                  Why $249? Because it's Beta, it exclusively handles Long positions for now, and I need users to help me break it.
                  In exchange for your feedback, you get everything forever — including the v1 upgrade with shorts and portfolio optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default Pricing;
