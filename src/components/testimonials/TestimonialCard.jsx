import { Star } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  role,
}) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-[#6E8B3D] text-[#6E8B3D]"
          />
        ))}
      </div>

      <p className="leading-8 text-gray-600">
        "{quote}"
      </p>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <h4 className="font-semibold text-[#111827]">
          {name}
        </h4>

        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>

    </div>
  );
}