import { Sparkles } from "lucide-react";

import { Label } from "@/components/ui/Typography";

export default function HeroBadge() {
  return (
    <Label className="gap-2">
      <Sparkles className="h-4 w-4" />
      Trusted by 500+ businesses
    </Label>
  );
}