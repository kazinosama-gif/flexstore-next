import HeroBadge from "./HeroBadge";

import { Heading, Text } from "@/components/ui/Typography";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">

      <HeroBadge />

      <Heading className="mt-8">
        Sell smarter.
        <br />
        Grow faster.
      </Heading>

      <Text
        size="lg"
        className="mt-8 max-w-2xl"
      >
        Everything you need to launch, manage and grow your online
        business—from inventory and payments to analytics and customer
        insights.
      </Text>

    </div>
  );
}