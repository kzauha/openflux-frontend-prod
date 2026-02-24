import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const FooterCTA = () => {
  return (
    <footer className="relative py-20 lg:py-24 border-t border-white/10 bg-black/60 backdrop-blur-3xl">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & Mission */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
               <img 
                 src="/favicon.png" 
                 alt="OpenFlux Logo" 
                 className="w-12 h-12 object-contain brightness-0 invert"
               />
               <span className="font-mono text-xl font-black text-white tracking-[0.2em] uppercase">
                 OpenFlux
               </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Quantitative Research Infrastructure.
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links Grid */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.3em] mb-6">
                Engine
              </div>
              <div className="space-y-4">
                {[{ label: "Overview", to: "/" }, { label: "Docs", to: "/docs" }].map((item) => (
                  <Link key={item.label} to={item.to} className="block text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.3em] mb-6">
                Architecture
              </div>
              <div className="space-y-4">
                {["Core Architecture"].map((item) => (
                  <Link key={item} to="/docs" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.3em] mb-6">
                Contact
              </div>
              <div className="space-y-4">
                <a href="mailto:research@openflux.io" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  research@openflux.io
                </a>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-sm w-fit">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                   <span className="font-mono text-[9px] text-accent font-bold">LIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            © 2025 OpenFlux Research // Quantitative Research Infrastructure
          </div>
          <div className="flex gap-8 font-mono text-[10px] text-gray-500 uppercase tracking-tighter">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
