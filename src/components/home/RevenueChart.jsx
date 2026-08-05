"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import CountUp from "./CountUp";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 18 },
  { month: "Feb", revenue: 24 },
  { month: "Mar", revenue: 22 },
  { month: "Apr", revenue: 31 },
  { month: "May", revenue: 36 },
  { month: "Jun", revenue: 34 },
  { month: "Jul", revenue: 42 },
  { month: "Aug", revenue: 48 },
];

export default function RevenueChart() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -5,
      }}
      className="mt-6 rounded-[28px] border border-border bg-card p-6 transition-all duration-300 hover:border-[#6E8B3D]/40 hover:shadow-xl"
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            Revenue
          </p>

          <h2 className="mt-1 text-3xl font-bold text-foreground">
            $
            <CountUp end={148} />
            K
          </h2>

        </div>

        <button className="rounded-full bg-[#EEF3E5] px-4 py-2 text-sm font-semibold text-[#6E8B3D] transition-all duration-300 hover:scale-105 dark:bg-[#2B3A22]">
          2026
        </button>

      </div>

      <div className="mt-6 h-[190px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="fillRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#6E8B3D"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#6E8B3D"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke={isDark ? "#374151" : "#E5E7EB"}
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: isDark ? "#9CA3AF" : "#6B7280",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#6E8B3D",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: isDark ? "#1F2937" : "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid rgba(110,139,61,.15)",
                color: isDark ? "#fff" : "#111827",
                boxShadow: "0 12px 35px rgba(0,0,0,.12)",
              }}
              labelStyle={{
                color: isDark ? "#fff" : "#111827",
                fontWeight: 600,
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6E8B3D"
              strokeWidth={4}
              fill="url(#fillRevenue)"
              animationDuration={2200}
              animationEasing="ease-out"
              activeDot={{
                r: 7,
                fill: "#6E8B3D",
                strokeWidth: 3,
                stroke: "#fff",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}