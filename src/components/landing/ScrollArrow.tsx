import { motion } from "framer-motion";

const ScrollArrow = () => {
  return (
    <div className="relative h-16 my-4 flex justify-start pl-8 lg:pl-12">
      <motion.svg
        width="60"
        height="64"
        viewBox="0 0 60 64"
        fill="none"
        className="text-muted-foreground/40"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Curved line */}
        <motion.path
          d="M30 4 C 10 4, 6 30, 20 48 Q 28 58, 30 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M24 54 L30 62 L36 54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
      </motion.svg>
      {/* Hand-written label */}
      <motion.span
        className="font-mono text-[10px] text-muted-foreground/40 self-center ml-2 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        read this ↓
      </motion.span>
    </div>
  );
};

export default ScrollArrow;
