"use client";

import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "$148K",
    change: "+18%",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "1,248",
    change: "+12%",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "8,942",
    change: "+9%",
    icon: Users,
  },
  {
    title: "Growth",
    value: "24%",
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
            className="rounded-[24px] border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3E5]">
                <Icon
                  size={18}
                  className="text-[#6E8B3D]"
                />
              </div>

              <span className="text-xs font-semibold text-green-600">
                {item.change}
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#111827]">
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}