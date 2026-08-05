"use client";

import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[32px] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3E5] dark:bg-[#24331D]">
        <Icon
          className="text-[#6E8B3D]"
          size={28}
        />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}