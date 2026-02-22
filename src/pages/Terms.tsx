import React from "react";
import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 lg:pb-32 relative">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Terms of <span className="text-accent">Service</span>
            </h1>
            
            <div className="prose prose-invert prose-emerald max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="text-sm font-mono uppercase tracking-wider mb-2">Last updated</p>
                <p className="text-foreground">February 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  License
                </h2>
                <p>
                  Purchase grants you a single-user license to use OpenFlux on your personal machines. You may not redistribute, resell, or share your license.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Nature of the product
                </h2>
                <p>
                  OpenFlux is a strategy research tool. It analyzes historical data and outputs trading rules. It is not financial advice, not a trading bot, and not a guarantee of future performance. Trading decisions are yours. Trading losses are yours.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  No warranty
                </h2>
                <p>
                  The software is provided "as is." We do not guarantee profitable outcomes. Past backtest performance does not predict future results.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Liability
                </h2>
                <p>
                  We are not liable for trading losses, missed trades, bugs, or any financial outcome. Maximum liability is limited to the purchase price.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Refunds
                </h2>
                <p>
                  14-day refund window. Refunds are granted if the software fails to run or is technically unusable on your system. Refunds are not granted for dissatisfaction with results, strategy performance, or change of mind. Email <a href="mailto:openfluxlabs@gmail.com" className="text-accent hover:underline">openfluxlabs@gmail.com</a> with details of the issue.
                </p>
              </div>

              <div className="space-y-4 pt-8">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Contact
                </h2>
                <p>
                  Email: <a href="mailto:openfluxlabs@gmail.com" className="text-accent hover:underline">openfluxlabs@gmail.com</a>
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

export default Terms;
