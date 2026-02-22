import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl border border-white/10 bg-black/60 backdrop-blur-2xl rounded-full px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <MotionLink to="/" className="flex items-center gap-3 group" whileHover="hover">
          <motion.img 
            src="/favicon.png"
            alt="OpenFlux Logo"
            className="w-10 h-10 object-contain brightness-0 invert"
            variants={{
              hover: { rotate: 360 }
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <span className="font-mono text-lg font-black text-white tracking-[0.2em] uppercase">
            OpenFlux
          </span>
        </MotionLink>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="font-mono text-[11px] font-bold text-gray-400 hover:text-white transition-all hover:tracking-widest uppercase tracking-widest">
            Home
          </Link>
          <Link to="/docs" className="font-mono text-[11px] font-bold text-gray-400 hover:text-white transition-all hover:tracking-widest uppercase tracking-widest">
            Docs
          </Link>
          <Link to="/pricing" className="font-mono text-[11px] font-bold text-gray-400 hover:text-white transition-all hover:tracking-widest uppercase tracking-widest relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
           <Link to="/pricing">
             <Button className="bg-white text-black hover:bg-gray-200 font-mono text-xs font-black uppercase tracking-widest px-6 h-9 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
               Get Started
             </Button>
           </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;