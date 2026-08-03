"use client";

import {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  CreditCard,
  Truck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  return (
    <div className="mt-20 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">

      <FeatureCard
        icon={Boxes}
        title="Inventory Management"
        description="Track inventory in real time, receive low-stock alerts, and manage products effortlessly from one place."
        className="lg:col-span-2"
      />

      <FeatureCard
        icon={BrainCircuit}
        title="AI Insights"
        description="Discover sales trends, predict demand, and make smarter business decisions using AI."
      />

      <FeatureCard
        icon={ChartNoAxesCombined}
        title="Analytics"
        description="Visualize revenue, customer growth, and business performance with beautiful reports."
      />

      <FeatureCard
        icon={CreditCard}
        title="Secure Payments"
        description="Accept payments securely with Stripe and multiple payment providers."
      />

      <FeatureCard
        icon={Truck}
        title="Order Fulfillment"
        description="Automate shipping, order tracking, and customer notifications without manual work."
        className="lg:col-span-3"
      />

    </div>
  );
}