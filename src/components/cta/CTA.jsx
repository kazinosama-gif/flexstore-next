import Section from "@/components/layout/Section";
import Reveal from "@/components/shared/Reveal";

import CTAContent from "./CTAContent";
import CTAActions from "./CTAActions";

export default function CTA() {
  return (
    <Section className="py-32">

      <Reveal>

        <div className="relative overflow-hidden rounded-[48px] border border-border bg-gradient-to-br from-[#F7FAF2] via-white to-[#EEF4E5] px-8 py-24 shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-300 dark:from-[#161C24] dark:via-[#1B222C] dark:to-[#222C36] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:px-16">

          {/* Background Glow */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#DCE8C6] opacity-40 blur-3xl dark:bg-[#365124]/40" />

          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#EEF4E5] opacity-60 blur-3xl dark:bg-[#23311C]/40" />

          <div className="relative z-10">

            <Reveal delay={0.1}>

              <CTAContent />

            </Reveal>

            <Reveal delay={0.25}>

              <CTAActions />

            </Reveal>

          </div>

        </div>

      </Reveal>

    </Section>
  );
}