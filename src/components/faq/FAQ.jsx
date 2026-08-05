import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <Section className="py-32">

      <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

        <Reveal>

          <FAQHeader />

        </Reveal>

        <Reveal
          delay={0.15}
          y={50}
        >

          <FAQList />

        </Reveal>

      </div>

    </Section>
  );
}