"use client";

import { Package, ShoppingCart, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

function SmallCard({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-gray-200 bg-white p-5 shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3E5]">
        <Icon className="h-6 w-6 text-[#6E8B3D]" />
      </div>

      <p className="mt-5 text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-[#111827]">
        {value}
      </h3>
    </motion.div>
  );
}

export default function ProductPreview() {
  return (
    <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-2xl">

      <div className="mb-8 flex items-center justify-between">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="rounded-full bg-gray-100 px-5 py-2 text-sm text-gray-500">
          app.flexstore.com
        </div>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <SmallCard
          icon={Package}
          title="Products"
          value="1,248"
        />

        <SmallCard
          icon={ShoppingCart}
          title="Orders"
          value="328"
        />

        <SmallCard
          icon={Users}
          title="Customers"
          value="8,942"
        />

        <SmallCard
          icon={CreditCard}
          title="Payments"
          value="$148K"
        />

      </div>

      <div className="mt-8 rounded-3xl bg-[#F8F8F5] p-8">

        <div className="mb-4 flex justify-between">
          <span className="text-gray-500">Weekly Activity</span>
          <span className="font-semibold text-[#6E8B3D]">+18%</span>
        </div>

        <div className="flex h-40 items-end gap-3">

          {[40, 70, 55, 90, 75, 110, 95].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="flex-1 rounded-full bg-[#6E8B3D]"
            />
          ))}

        </div>

      </div>

    </div>
  );
}