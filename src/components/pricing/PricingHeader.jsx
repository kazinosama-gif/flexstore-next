export default function PricingHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-[#DDE7CA] bg-[#F5F8EE] px-4 py-2 text-sm font-medium text-[#6E8B3D] transition-colors dark:border-[#4F6630] dark:bg-[#2B3A22]">
        Pricing
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-foreground">
        Simple pricing
        <br />
        for every business
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Whether you're just starting or scaling globally,
        FlexStore grows with your business.
      </p>

    </div>
  );
}