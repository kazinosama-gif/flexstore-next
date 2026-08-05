"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >

          <div className="flex flex-col items-center">

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#6E8B3D] text-4xl font-bold text-white shadow-2xl"
            >
              F
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-6 text-4xl font-black tracking-tight text-foreground"
            >
              FlexStore
            </motion.h1>

            <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-muted">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "0%",
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-[#6E8B3D]"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}