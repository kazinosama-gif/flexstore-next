"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const { activeSection } = useActiveSection();

  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>

          <SheetTitle className="flex items-center justify-between text-2xl font-bold">

            <span>FlexStore</span>

            <button onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>

          </SheetTitle>

        </SheetHeader>

        <div className="mt-10 flex flex-col gap-3">

          {navigation.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`rounded-xl px-4 py-3 text-left text-lg font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-[#EEF4E5] text-[#6E8B3D]"
                  : "hover:bg-muted"
              }`}
            >
              {item.name}
            </button>

          ))}

        </div>

        <Button
          onClick={() => scrollToSection("#cta")}
          className="mt-10 w-full rounded-full bg-[#6E8B3D] hover:bg-[#5C7632]"
        >
          Start Free →
        </Button>
      </SheetContent>
    </Sheet>
  );
}