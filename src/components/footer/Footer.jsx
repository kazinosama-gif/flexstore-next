import Section from "@/components/layout/Section";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <Section className="py-24">

        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">

          <FooterBrand />

          <FooterLinks />

        </div>

        <FooterBottom />

      </Section>

    </footer>
  );
}