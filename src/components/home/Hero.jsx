"use client";

import { motion } from "framer-motion";

import Section from "@/components/layout/Section";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <Section className="overflow-hidden bg-[#F8F8F5] pt-28 pb-20 lg:pt-32 lg:pb-24">

      {/* Left Glow */}

      <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[#EAF3DA] blur-[140px]" />

      {/* Right Glow */}

      <div className="absolute -right-32 top-16 h-[480px] w-[480px] rounded-full bg-[#F4F7EE] blur-[150px]" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <HeroContent />

          <HeroActions />
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative lg:-mt-4"
        >
          <DashboardPreview />
        </motion.div>

      </div>

    </Section>
  );
}