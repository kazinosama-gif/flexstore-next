"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative overflow-hidden rounded-full transition-all duration-300 hover:bg-muted"
    >
      <AnimatePresence mode="wait">

        {isDark ? (
          <motion.div
            key="sun"
            initial={{
              rotate: -90,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 90,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Sun className="h-5 w-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              rotate: 90,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: -90,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Moon className="h-5 w-5 text-slate-700" />
          </motion.div>
        )}

      </AnimatePresence>
    </Button>
  );
}