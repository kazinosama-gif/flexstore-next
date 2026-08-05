"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";

import useActiveSection from "@/hooks/useActiveSection";

const navigation = [
  {
    name: "Home",
    href: "#home",
    id: "home",
  },
  {
    name: "Features",
    href: "#features",
    id: "features",
  },
  {
    name: "Pricing",
    href: "#pricing",
    id: "pricing",
  },
  {
    name: "FAQ",
    href: "#faq",
    id: "faq",
  },
  {
    name: "Contact",
    href: "#footer",
    id: "footer",
  },
];

export default function Navbar() {
  const { activeSection, scrolled } = useActiveSection();

  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5">

      <motion.div
        animate={{
          y: scrolled ? -6 : 0,
          scale: scrolled ? 0.975 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`mt-5 flex w-full max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-background/75 px-7 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-3xl"
            : "border-border/60 bg-background/55 px-8 py-4 backdrop-blur-2xl"
        }`}
      >

        {/* Logo */}

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-3"
        >

          <motion.div
            whileHover={{
              rotate: 8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6E8B3D] text-lg font-bold text-white shadow-lg"
          >
            F
          </motion.div>

          <span className="text-3xl font-extrabold tracking-tight">

            <span className="text-foreground">
              Flex
            </span>

            <span className="text-[#6E8B3D]">
              Store
            </span>

          </span>

        </motion.button>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-9 lg:flex">

          {navigation.map((item) => (

            <motion.button
              key={item.id}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-[15px] font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#6E8B3D]"
                  : "text-muted-foreground hover:text-[#6E8B3D]"
              }`}
            >

              {item.name}

              {activeSection === item.id && (

                <motion.div
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#6E8B3D]"
                />

              )}

            </motion.button>

          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >

            <Button
              onClick={() => scrollToSection("#cta")}
              className="hidden rounded-full bg-[#6E8B3D] px-7 py-6 shadow-lg transition-all duration-300 hover:bg-[#5C7632] hover:shadow-[0_15px_40px_rgba(110,139,61,0.4)] lg:flex"
            >
              Start Free →
            </Button>

          </motion.div>

          <MobileMenu />

        </div>

      </motion.div>

    </header>
  );
}