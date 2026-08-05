import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import FeatureHeader from "./FeatureHeader";
import FeatureGrid from "./FeatureGrid";

export default function Features() {
  return (
    <Section className="py-28">

      <Reveal>

        <FeatureHeader />

      </Reveal>

      <Reveal delay={0.15}>

        <FeatureGrid />

      </Reveal>

    </Section>
  );
}