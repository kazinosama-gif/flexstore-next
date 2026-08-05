"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>

      {visible && (

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          whileHover={{
            y: -4,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#6E8B3D] text-white shadow-[0_20px_45px_rgba(110,139,61,0.45)] transition-all duration-300 hover:bg-[#5C7632]"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>

      )}

    </AnimatePresence>
  );
}