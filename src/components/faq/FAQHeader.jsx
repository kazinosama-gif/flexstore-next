export default function FAQHeader() {
  return (
    <div className="max-w-xl">

      <span className="inline-flex rounded-full border border-[#DDE7CA] bg-[#F5F8EE] px-4 py-2 text-sm font-medium text-[#6E8B3D] transition-colors dark:border-[#4F6630] dark:bg-[#2B3A22]">
        FAQ
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-foreground">
        Frequently
        <br />
        asked questions
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Everything you need to know before choosing FlexStore.
        Can't find your answer? Our support team is always here to help.
      </p>

    </div>
  );
}