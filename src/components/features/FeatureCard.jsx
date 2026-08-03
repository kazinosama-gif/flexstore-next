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
      className={`rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3E5]">
        <Icon className="text-[#6E8B3D]" size={28} />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-[#111827]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}