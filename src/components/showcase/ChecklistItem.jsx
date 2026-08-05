import { Check } from "lucide-react";

export default function ChecklistItem({ children }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF3E5] dark:bg-[#24331D]">
        <Check className="h-5 w-5 text-[#6E8B3D]" />
      </div>

      <span className="text-lg font-medium text-foreground">
        {children}
      </span>

    </div>
  );
}