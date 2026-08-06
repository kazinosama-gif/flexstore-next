"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-5">

      {/* Primary Button */}

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.2,
        }}
        className="group relative overflow-hidden rounded-full"
      >

        {/* Shimmer */}

        <span className="absolute inset-0 -translate-x-[130%] skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-[220%]" />

        <Button
          asChild
          size="lg"
          className="relative h-14 rounded-full bg-[#6E8B3D] px-9 text-white shadow-[0_15px_40px_rgba(110,139,61,0.35)] transition-all duration-300 hover:bg-[#5C7632] hover:shadow-[0_20px_50px_rgba(110,139,61,0.5)]"
        >
          <Link href="/auth/signup">
            Start Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>

      </motion.div>

      {/* Secondary Button */}

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <Button
          variant="outline"
          size="lg"
          className="h-14 rounded-full border-border bg-card px-9 shadow-md transition-all duration-300 hover:bg-muted hover:shadow-xl"
        >
          <Play className="mr-2 h-4 w-4 fill-current" />
          Live Demo
        </Button>
      </motion.div>

    </div>
  );
}