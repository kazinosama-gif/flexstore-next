import Section from "@/components/layout/Section";

import ShowcaseContent from "./ShowcaseContent";
import ProductPreview from "./ProductPreview";

export default function ProductShowcase() {
  return (
    <Section className="py-32">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        <ShowcaseContent />

        <ProductPreview />

      </div>

    </Section>
  );
}