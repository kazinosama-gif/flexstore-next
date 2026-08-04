"use client";

import { Package, ShoppingCart, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

function SmallCard({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="rounded-3xl border-border shadow-md transition-all duration-300 hover:border-[#6E8B3D]/40 hover:shadow-xl">

        <CardContent className="p-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3E5] transition-colors dark:bg-[#2B3A22]">
            <Icon className="h-6 w-6 text-[#6E8B3D]" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-foreground">
            {value}
          </h3>

        </CardContent>

      </Card>
    </motion.div>
  );
}

export default function ProductPreview() {
  return (
    <Card className="rounded-[36px] border-border shadow-2xl">

      <CardContent className="p-8">

        <div className="mb-8 flex items-center justify-between">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="rounded-full bg-muted px-5 py-2 text-sm text-muted-foreground">
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

        <div className="mt-8 rounded-3xl bg-muted p-8 transition-colors duration-300">

          <div className="mb-4 flex justify-between">

            <span className="text-muted-foreground">
              Weekly Activity
            </span>

            <span className="font-semibold text-[#6E8B3D]">
              +18%
            </span>

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

      </CardContent>

    </Card>
  );
}