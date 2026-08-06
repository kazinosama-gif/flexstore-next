"use client";

import { motion } from "framer-motion";

export default function AuthCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        rounded-[32px]
        border
        border-border
        bg-card/90
        p-8
        shadow-[0_25px_70px_rgba(0,0,0,0.10)]
        backdrop-blur-xl
        transition-all
        duration-300
        dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      {children}
    </motion.div>
  );
}