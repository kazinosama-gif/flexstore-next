"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations/motion";

export default function Reveal({
  children,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}