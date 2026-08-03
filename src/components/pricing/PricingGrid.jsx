import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      <PricingCard
        title="Starter"
        price="$19"
        description="Perfect for individuals and small businesses."
        features={[
          "Up to 500 products",
          "Basic Analytics",
          "Order Management",
          "Email Support",
        ]}
      />

      <PricingCard
        highlighted
        title="Professional"
        price="$49"
        description="Everything you need to scale your business."
        features={[
          "Unlimited Products",
          "Advanced Analytics",
          "Inventory Management",
          "Customer Insights",
          "Priority Support",
        ]}
      />

      <PricingCard
        title="Enterprise"
        price="Custom"
        description="Tailored solutions for large organizations."
        features={[
          "Unlimited Everything",
          "Dedicated Manager",
          "Custom Integrations",
          "24/7 Premium Support",
          "Enterprise Security",
        ]}
      />

    </div>
  );
}