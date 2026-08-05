import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import TestimonialsHeader from "./TestimonialsHeader";
import FeaturedTestimonial from "./FeaturedTestimonial";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <Section className="py-32">

      <Reveal>

        <TestimonialsHeader />

      </Reveal>

      <Reveal
        delay={0.15}
        y={40}
      >

        <FeaturedTestimonial />

      </Reveal>

      <Reveal
        delay={0.3}
        y={50}
      >

        <TestimonialsGrid />

      </Reveal>

    </Section>
  );
}