import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import ShowcaseContent from "./ShowcaseContent";
import ProductPreview from "./ProductPreview";

export default function ProductShowcase() {
  return (
    <Section className="py-32">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        <Reveal>

          <ShowcaseContent />

        </Reveal>

        <Reveal delay={0.2} y={60}>

          <ProductPreview />

        </Reveal>

      </div>

    </Section>
  );
}