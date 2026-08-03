import clsx from "clsx";

export default function AppCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={clsx(
        "rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}