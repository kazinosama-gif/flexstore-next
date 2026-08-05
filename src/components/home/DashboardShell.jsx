"use client";

import { motion } from "framer-motion";

export default function DashboardShell({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        scale: {
          duration: 0.8,
        },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      className="relative mx-auto max-w-[620px]"
    >
      {/* Main Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-[42px] bg-[#DCE8C6] blur-[110px] dark:bg-[#365124]/60"
      />

      {/* Left Glow */}

      <motion.div
        animate={{
          x: [-12, 12, -12],
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-10 top-6 h-56 w-56 rounded-full bg-[#EEF4E5] opacity-60 blur-[120px] dark:bg-[#23311C]/60"
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          x: [10, -10, 10],
          y: [8, -8, 8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 bottom-6 h-48 w-48 rounded-full bg-[#DCE8C6] opacity-50 blur-[110px] dark:bg-[#476A2F]/40"
      />

      {/* Dashboard */}

      <motion.div
        whileHover={{
          boxShadow: "0 70px 170px rgba(0,0,0,0.35)",
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative overflow-hidden rounded-[34px] border border-border bg-card/90 p-5 shadow-[0_45px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 dark:shadow-[0_55px_140px_rgba(0,0,0,0.65)]"
      >
        {/* Browser */}

        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground">
            flexstore.app
          </div>

          <div className="h-8 w-8 rounded-full bg-[#6E8B3D]" />

        </div>

        {children}

      </motion.div>

    </motion.div>
  );
}