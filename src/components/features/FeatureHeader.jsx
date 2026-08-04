export default function FeatureHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-[#DDE7CA] bg-[#F5F8EE] px-4 py-2 text-sm font-medium text-[#6E8B3D] transition-colors dark:border-[#4F6630] dark:bg-[#2B3A22]">
        Powerful Features
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-foreground">
        Everything you need
        <br />
        to scale your business
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Manage inventory, automate orders, gain powerful insights,
        and grow your business from one beautiful dashboard.
      </p>

    </div>
  );
}