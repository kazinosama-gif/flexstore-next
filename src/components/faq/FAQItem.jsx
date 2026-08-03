"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >

        <span className="text-lg font-semibold text-[#111827]">
          {question}
        </span>

        {open ? (
          <Minus className="h-5 w-5 text-[#6E8B3D]" />
        ) : (
          <Plus className="h-5 w-5 text-[#6E8B3D]" />
        )}

      </button>

      {open && (
        <div className="px-7 pb-7 text-gray-600 leading-8">
          {answer}
        </div>
      )}

    </div>
  );
}