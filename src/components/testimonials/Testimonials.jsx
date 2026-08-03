import Section from "@/components/layout/Section";

import TestimonialsHeader from "./TestimonialsHeader";
import FeaturedTestimonial from "./FeaturedTestimonial";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <Section className="py-32">

      <TestimonialsHeader />

      <FeaturedTestimonial />

      <TestimonialsGrid />

    </Section>
  );
}