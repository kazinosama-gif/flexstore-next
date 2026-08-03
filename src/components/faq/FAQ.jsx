import Section from "@/components/layout/Section";

import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <Section className="py-32">

      <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

        <FAQHeader />

        <FAQList />

      </div>

    </Section>
  );
}