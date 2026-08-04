import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCard({
  quote,
  name,
  role,
}) {
  return (
    <Card className="rounded-[32px] border-border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6E8B3D]/40 hover:shadow-xl">

      <CardContent className="p-8">

        <div className="mb-6 flex gap-1">

          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-[#6E8B3D] text-[#6E8B3D]"
            />
          ))}

        </div>

        <p className="leading-8 text-muted-foreground">
          "{quote}"
        </p>

        <div className="mt-8 border-t border-border pt-6">

          <h4 className="font-semibold text-foreground">
            {name}
          </h4>

          <p className="text-sm text-muted-foreground">
            {role}
          </p>

        </div>

      </CardContent>

    </Card>
  );
}