"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "features",
  "pricing",
  "faq",
  "footer",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If we're at the bottom of the page,
      // always activate Contact (Footer)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActiveSection("footer");
        return;
      }

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    activeSection,
    scrolled,
  };
}