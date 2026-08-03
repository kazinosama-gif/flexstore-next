"use client";

import { motion } from "framer-motion";

import DashboardShell from "./DashboardShell";
import StatsGrid from "./StatsGrid";
import RevenueChart from "./RevenueChart";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className="origin-center"
    >
      <DashboardShell>
        <StatsGrid />
        <RevenueChart />
      </DashboardShell>
    </motion.div>
  );
}