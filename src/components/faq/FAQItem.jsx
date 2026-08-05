"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden rounded-[28px] border-border transition-all duration-300 hover:border-[#6E8B3D]/40 hover:shadow-lg">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >

        <span className="text-lg font-semibold text-foreground">
          {question}
        </span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {open ? (
            <Minus className="h-5 w-5 text-[#6E8B3D]" />
          ) : (
            <Plus className="h-5 w-5 text-[#6E8B3D]" />
          )}
        </motion.div>

      </button>

      <AnimatePresence initial={false}>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >

            <motion.div
              initial={{
                y: -8,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="px-7 pb-7 leading-8 text-muted-foreground"
            >
              {answer}
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </Card>
  );
}