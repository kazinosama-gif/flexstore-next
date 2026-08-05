"use client";

import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

import CountUp from "./CountUp";

const stats = [
  {
    title: "Revenue",
    value: 148,
    prefix: "$",
    suffix: "K",
    change: "+18%",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: 1248,
    change: "+12%",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: 8942,
    change: "+9%",
    icon: Users,
  },
  {
    title: "Growth",
    value: 24,
    suffix: "%",
    change: "+4%",
    icon: TrendingUp,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[24px] border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#6E8B3D]/40 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3E5] transition-transform duration-300 group-hover:scale-110 dark:bg-[#2B3A22]">

                <Icon
                  size={18}
                  className="text-[#6E8B3D]"
                />

              </div>

              <span className="text-xs font-semibold text-green-600">
                {item.change}
              </span>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {item.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-foreground">

              <CountUp
                end={item.value}
                prefix={item.prefix || ""}
                suffix={item.suffix || ""}
              />

            </h2>

          </div>
        );
      })}

    </div>
  );
}