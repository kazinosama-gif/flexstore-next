import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import ChecklistItem from "./ChecklistItem";

export default function ShowcaseContent() {
  return (
    <div className="max-w-xl">

      <span className="inline-flex rounded-full border border-[#DDE7CA] bg-[#F5F8EE] px-4 py-2 text-sm font-medium text-[#6E8B3D]">
        Product Overview
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111827]">
        One dashboard.
        <br />
        Complete control.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Manage products, customers, orders and payments from a single,
        beautifully designed workspace built for growing businesses.
      </p>

      <div className="mt-10 space-y-5">

        <ChecklistItem>Inventory Management</ChecklistItem>

        <ChecklistItem>Customer Database</ChecklistItem>

        <ChecklistItem>Order Tracking</ChecklistItem>

        <ChecklistItem>Revenue Analytics</ChecklistItem>

        <ChecklistItem>Secure Payments</ChecklistItem>

      </div>

      <div className="mt-10">

        <Button
          size="lg"
          className="rounded-full bg-[#6E8B3D] px-8"
        >
          <Play className="mr-2 h-5 w-5 fill-current" />
          Watch Demo
        </Button>

      </div>

    </div>
  );
}