import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import PricingHeader from "./PricingHeader";
import PricingGrid from "./PricingGrid";

export default function Pricing() {
  return (
    <Section className="py-32">

      <Reveal>

        <PricingHeader />

      </Reveal>

      <Reveal
        delay={0.15}
        y={50}
      >

        <PricingGrid />

      </Reveal>

    </Section>
  );
}