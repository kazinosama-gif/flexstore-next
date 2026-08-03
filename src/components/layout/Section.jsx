import clsx from "clsx";

export default function Section({
  children,
  className = "",
  id,
}) {
  return (
    <section
      id={id}
      className={clsx(
        "relative py-28",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}