"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden rounded-[28px] border-border transition-all duration-300 hover:border-[#6E8B3D]/40">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >

        <span className="text-lg font-semibold text-foreground">
          {question}
        </span>

        {open ? (
          <Minus className="h-5 w-5 text-[#6E8B3D]" />
        ) : (
          <Plus className="h-5 w-5 text-[#6E8B3D]" />
        )}

      </button>

      {open && (
        <div className="px-7 pb-7 leading-8 text-muted-foreground">
          {answer}
        </div>
      )}

    </Card>
  );
}