import TestimonialCard from "./TestimonialCard";

export default function TestimonialsGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <TestimonialCard
        quote="Our team became twice as productive after switching to FlexStore."
        name="Michael Roberts"
        role="CEO • Nova Commerce"
      />

      <TestimonialCard
        quote="Beautiful design, powerful analytics and an incredibly smooth workflow."
        name="Emily Davis"
        role="Operations Lead • Studio Nine"
      />

      <TestimonialCard
        quote="The inventory tools alone saved us dozens of hours every single week."
        name="Daniel Kim"
        role="Founder • Urban Supply"
      />

    </div>
  );
}