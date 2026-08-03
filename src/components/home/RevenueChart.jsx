"use client";

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
  return (
    <div className="mt-6 rounded-[28px] border border-gray-200 bg-white p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Revenue
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            $148K
          </h2>
        </div>

        <button className="rounded-full bg-[#EEF3E5] px-4 py-2 text-sm font-semibold text-[#6E8B3D]">
          2026
        </button>

      </div>

      <div className="mt-6 h-[180px]">

        <ResponsiveContainer width="100%" height="100%">
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
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#6E8B3D"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid vertical={false} stroke="#EFEFEF" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              dataKey="revenue"
              stroke="#6E8B3D"
              strokeWidth={3}
              fill="url(#fillRevenue)"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}