"use client";

import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-4">

      <Button
        size="lg"
        className="h-14 rounded-full bg-[#6E8B3D] px-8 text-white shadow-lg transition-all duration-300 hover:bg-[#5C7632] hover:shadow-xl"
      >
        Start Free

        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-14 rounded-full border-gray-300 bg-white px-8 shadow-sm transition-all duration-300 hover:bg-gray-50"
      >
        <Play className="mr-2 h-4 w-4 fill-current" />

        Live Demo
      </Button>

    </div>
  );
}