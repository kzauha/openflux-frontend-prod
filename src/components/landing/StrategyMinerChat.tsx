import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { Activity, ShieldCheck, BarChart3 } from "lucide-react";

const StrategyMinerChat = memo(() => {
  const [phase, setPhase] = useState<"typing" | "processing" | "response">(
    "typing"
  );
  const [typedText, setTypedText] = useState("");

  const userQuery = "Can you find me a BTC 4h strategy with the least drawdown?";

  // Typewriter effect
  useEffect(() => {
    if (phase === "typing") {
      if (typedText.length < userQuery.length) {
        const timeout = setTimeout(() => {
          setTypedText(userQuery.slice(0, typedText.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("processing"), 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, typedText]);

  // Processing phase
  useEffect(() => {
    if (phase === "processing") {
      const timeout = setTimeout(() => setPhase("response"), 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  // Loop the animation
  useEffect(() => {
    if (phase === "response") {
      const timeout = setTimeout(() => {
        setPhase("typing");
        setTypedText("");
      }, 12000);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <div className="flex flex-col items-center w-full max-w-lg">
      <motion.div
        className="w-full border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Header content unchanged */}
        <div className="border-b border-white/5 px-4 py-3 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-data-positive" />
            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Strategy Miner Interface
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-data-positive rounded-full animate-pulse" />
            <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">Active</span>
          </div>
        </div>
        
        {/* Chat area content unchanged */}
        <div className="p-6 space-y-6">
          {/* User message */}
          <div className="flex flex-col items-end">
            <div className="font-mono text-[10px] text-gray-500 mb-2 uppercase tracking-tight">
              User Query
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-none px-4 py-3 max-w-[90%] shadow-lg">
              <p className="text-sm text-white font-medium leading-relaxed">
                {typedText}
                {phase === "typing" && (
                  <span className="inline-block w-1.5 h-4 bg-data-positive ml-1 animate-pulse" />
                )}
              </p>
            </div>
          </div>
          
          {/* Processing indicator */}
          <AnimatePresence>
            {phase === "processing" && (
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="font-mono text-[10px] text-gray-500 mb-2 uppercase">
                  Kernel System
                </div>
                <div className="bg-data-positive/5 border border-data-positive/20 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {[0, 0.2, 0.4].map(delay => (
                        <motion.span
                          key={delay}
                          className="w-1.5 h-1.5 bg-data-positive rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-sm text-data-positive font-bold tracking-tight uppercase">
                      MINING STRATEGY SPACE...
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Response */}
          <AnimatePresence>
            {phase === "response" && (
              <motion.div
                className="flex flex-col items-start space-y-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">
                  Analysis Report
                </div>
                
                {/* 1. Rule Found Section - Simplified */}
                <motion.div
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 shadow-inner"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-mono text-[11px] text-data-positive font-bold uppercase flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Rule Found
                    </div>
                    <div className="text-[10px] font-mono text-gray-500">BTC-4H-OPT</div>
                  </div>
                  <div className="font-mono text-sm text-white/90 bg-black/40 p-4 rounded-lg border border-white/5 leading-relaxed">
                    <div>IF RSI(14) &lt; 35</div>
                    <div>AND EMA(21) &gt; EMA(55)</div>
                    <div className="mt-2 pt-2 border-t border-white/5 text-data-positive font-bold">
                      THEN LONG
                    </div>
                  </div>
                </motion.div>
                
                {/* 2. Stats Section */}
                <motion.div
                  className="w-full grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Win Rate</div>
                    <div className="text-xl font-bold text-white">54.2%</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">P-Factor</div>
                    <div className="text-xl font-bold text-data-positive">1.45</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Sharpe</div>
                    <div className="text-xl font-bold text-white">1.12</div>
                  </div>
                  <div className="bg-data-positive/10 border border-data-positive/20 rounded-xl p-3">
                    <div className="text-[10px] font-mono text-data-positive/70 uppercase mb-1">
                      Max Drawdown
                    </div>
                    <div className="text-xl font-bold text-data-positive">-12.4%</div>
                  </div>
                </motion.div>
                
                {/* 3. Equity Curve + Trade Count Section */}
                <motion.div
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-[11px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Equity Curve
                    </div>
                    <div className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-mono text-white">
                      Trades: <span className="text-data-positive font-bold">147</span>
                    </div>
                  </div>
                  <div className="h-16 flex items-end gap-1 px-1">
                    {[20, 35, 25, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 95, 90, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-data-positive/60 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.6 + i * 0.03, duration: 0.4 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Narrative Context Note */}
      <AnimatePresence>
        {phase === "response" && (
          <motion.p
            className="mt-4 text-[11px] font-mono text-gray-500 text-center tracking-tight opacity-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            this is an oversimplication. you will be asked a lot of questions.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

export default StrategyMinerChat;
