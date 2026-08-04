import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}) {
  return (
    <Card
      className={`rounded-[36px] transition-all duration-300 ${
        highlighted
          ? "scale-[1.03] border-[#6E8B3D] bg-[#6E8B3D] text-white shadow-2xl"
          : "border-border bg-card shadow-sm hover:border-[#6E8B3D]/40 hover:shadow-xl"
      }`}
    >
      <CardContent className="p-8">

        <div className="mb-8">

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p
            className={`mt-3 ${
              highlighted
                ? "text-green-100"
                : "text-muted-foreground"
            }`}
          >
            {description}
          </p>

        </div>

        <div className="mb-8">

          <span className="text-5xl font-bold">
            {price}
          </span>

          {price !== "Custom" && (
            <span
              className={
                highlighted
                  ? "text-green-100"
                  : "text-muted-foreground"
              }
            >
              /month
            </span>
          )}

        </div>

        <div className="space-y-4">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check
                className={`h-5 w-5 ${
                  highlighted
                    ? "text-white"
                    : "text-[#6E8B3D]"
                }`}
              />

              <span>{feature}</span>

            </div>
          ))}

        </div>

        <Button
          className={`mt-10 w-full rounded-full ${
            highlighted
              ? "bg-white text-[#6E8B3D] hover:bg-gray-100"
              : "bg-[#6E8B3D] text-white hover:bg-[#5C7632]"
          }`}
        >
          {highlighted ? "Get Started" : "Choose Plan"}
        </Button>

      </CardContent>
    </Card>
  );
}