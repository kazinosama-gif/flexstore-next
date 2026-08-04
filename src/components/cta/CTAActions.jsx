"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function CTAActions() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          size="lg"
          className="rounded-full bg-[#6E8B3D] px-8 py-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#5C7632] hover:shadow-xl"
        >
          Start Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-border bg-background px-8 py-7 text-base text-foreground transition-all duration-300 hover:bg-muted"
        >
          <Play className="mr-2 h-5 w-5 fill-current" />
          Book Demo
        </Button>
      </motion.div>

    </div>
  );
}