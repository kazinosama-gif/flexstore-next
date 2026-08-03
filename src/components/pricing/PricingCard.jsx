import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}) {
  return (
    <div
      className={`rounded-[36px] border p-8 transition-all ${
        highlighted
          ? "border-[#6E8B3D] bg-[#6E8B3D] text-white shadow-2xl scale-[1.03]"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >

      <div className="mb-8">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p
          className={`mt-3 ${
            highlighted ? "text-green-100" : "text-gray-500"
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
          <span className={highlighted ? "text-green-100" : "text-gray-500"}>
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
                highlighted ? "text-white" : "text-[#6E8B3D]"
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
            : "bg-[#6E8B3D] hover:bg-[#5f7735]"
        }`}
      >
        {highlighted ? "Get Started" : "Choose Plan"}
      </Button>

    </div>
  );
}