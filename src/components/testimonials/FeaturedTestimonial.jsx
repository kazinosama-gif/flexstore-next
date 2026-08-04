import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedTestimonial() {
  return (
    <Card className="mx-auto mt-20 max-w-5xl rounded-[40px] border-border shadow-sm transition-all duration-300 hover:border-[#6E8B3D]/40 hover:shadow-xl">

      <CardContent className="p-14 text-center">

        <div className="mb-8 flex justify-center gap-1">

          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-[#6E8B3D] text-[#6E8B3D]"
            />
          ))}

        </div>

        <blockquote className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-foreground">

          "FlexStore completely transformed the way we manage inventory,
          payments and customer orders. The interface is beautiful,
          incredibly fast and our entire team learned it within a single day."

        </blockquote>

        <div className="mt-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6E8B3D] text-2xl font-bold text-white">
            S
          </div>

          <h4 className="mt-5 text-xl font-bold text-foreground">
            Sarah Chen
          </h4>

          <p className="text-muted-foreground">
            Founder • Bloom Studio
          </p>

        </div>

      </CardContent>

    </Card>
  );
}