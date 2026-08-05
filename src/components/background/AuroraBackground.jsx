"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 60, -60],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-15%] h-[600px] w-[600px] rounded-full bg-[#B8D68B]/30 blur-[140px] dark:bg-[#5E8C31]/30"
      />

      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [80, -80, 80],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#DDECC0]/30 blur-[150px] dark:bg-[#355A22]/30"
      />

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#EEF6DE]/40 blur-[140px] dark:bg-[#486D2F]/25"
      />

    </div>
  );
}