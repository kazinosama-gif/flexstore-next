"use client";

import { motion } from "framer-motion";

export default function DashboardShell({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        rotateX: 2,
        rotateY: -2,
        scale: 1.01,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto max-w-[620px] perspective-[1400px]"
    >
      {/* Primary Glow */}

      <div className="absolute inset-0 rounded-[42px] bg-[#DCE8C6] opacity-45 blur-[90px] dark:bg-[#365124]/40" />

      {/* Secondary Glow */}

      <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-[#EEF4E5] opacity-60 blur-[100px] dark:bg-[#23311C]/40" />

      {/* Dashboard */}

      <div className="relative overflow-hidden rounded-[34px] border border-border bg-card/90 p-5 shadow-[0_45px_120px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-colors duration-300 dark:shadow-[0_45px_120px_rgba(0,0,0,0.55)]">

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

      </div>

    </motion.div>
  );
}