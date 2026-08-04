"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={className}
    >
      <Card
        className="
          h-full
          rounded-[32px]
          border-border
          bg-card
          shadow-sm
          transition-all
          duration-300
          hover:border-[#6E8B3D]/40
          hover:shadow-2xl
          dark:shadow-black/30
        "
      >
        <CardContent className="p-8">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3E5] transition-colors dark:bg-[#2B3A22]">
            <Icon
              size={28}
              className="text-[#6E8B3D]"
            />
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-foreground">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            {description}
          </p>

        </CardContent>
      </Card>
    </motion.div>
  );
}