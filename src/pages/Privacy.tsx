import React from "react";
import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy <span className="text-accent">Policy</span>
            </h1>
            
            <div className="prose prose-invert prose-emerald max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="text-sm font-mono uppercase tracking-wider mb-2">Last updated</p>
                <p className="text-foreground">February 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Data we collect
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email address (for license delivery and product updates)</li>
                  <li>Payment and billing information (processed and stored by Paddle, not us)</li>
                  <li>Country (for tax compliance)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Data we don't collect
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Usage data</li>
                  <li>Telemetry</li>
                  <li>Analytics</li>
                  <li>Your trading data, strategies, or market data</li>
                </ul>
              </div>

              <div className="bg-accent/5 border border-accent/20 p-6 rounded-sm">
                <p className="text-foreground font-medium">
                  OpenFlux runs locally on your machine. Nothing is transmitted to us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-mono uppercase tracking-tight border-b border-white/10 pb-2">
                  Third parties
                </h2>
                <p>
                  Payments are processed by Paddle (paddle.com). See their privacy policy at{" "}
                  <a 
                    href="https://paddle.com/legal/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    paddle.com/legal/privacy
                  </a>
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

export default Privacy;
