"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Nike", logo: "/logos/nike.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
];

export default function BrandLogos() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-gray-400">
          Trusted by innovative companies
        </p>

        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -3,
              }}
              className="group flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={36}
                className="h-8 w-auto opacity-60 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}