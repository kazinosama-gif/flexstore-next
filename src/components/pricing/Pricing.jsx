import Section from "@/components/layout/Section";

import PricingHeader from "./PricingHeader";
import PricingGrid from "./PricingGrid";

export default function Pricing() {
  return (
    <Section className="py-32">

      <PricingHeader />

      <PricingGrid />

    </Section>
  );
}