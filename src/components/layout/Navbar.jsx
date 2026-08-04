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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">

      <motion.div
        animate={{
          y: scrolled ? -4 : 0,
          scale: scrolled ? 0.985 : 1,
        }}
        transition={{ duration: 0.25 }}
        className={`mt-5 flex w-full max-w-7xl items-center justify-between rounded-2xl border px-6 transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 py-3 shadow-xl backdrop-blur-2xl"
            : "border-border/60 bg-background/80 py-4 backdrop-blur-xl"
        }`}
      >

        {/* Logo */}

        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-3"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6E8B3D] text-lg font-bold text-white">
            F
          </div>

          <span className="text-3xl font-extrabold tracking-tight">

            <span className="text-foreground">
              Flex
            </span>

            <span className="text-[#6E8B3D]">
              Store
            </span>

          </span>

        </button>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navigation.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-[15px] font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#6E8B3D]"
                  : "text-muted-foreground hover:text-[#6E8B3D]"
              }`}
            >

              {item.name}

              {activeSection === item.id && (

                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#6E8B3D]"
                />

              )}

            </button>

          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Button
            onClick={() => scrollToSection("#cta")}
            className="hidden rounded-full bg-[#6E8B3D] px-6 py-6 transition-all hover:bg-[#5C7632] hover:shadow-lg lg:flex"
          >
            Start Free →
          </Button>

          <MobileMenu />

        </div>

      </motion.div>

    </header>
  );
}