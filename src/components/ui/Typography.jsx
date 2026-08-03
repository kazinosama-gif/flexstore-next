import clsx from "clsx";

export function Heading({
  children,
  className = "",
  level = "h1",
}) {
  const Tag = level;

  const styles = {
    h1: "text-5xl md:text-7xl lg:text-8xl font-black tracking-[-3px] leading-[0.92] text-[#111827]",
    h2: "text-4xl md:text-5xl font-bold tracking-[-2px] text-[#111827]",
    h3: "text-2xl md:text-3xl font-semibold text-[#111827]",
    h4: "text-xl font-semibold text-[#111827]",
  };

  return (
    <Tag className={clsx(styles[level], className)}>
      {children}
    </Tag>
  );
}

export function Text({
  children,
  className = "",
  size = "md",
}) {
  const styles = {
    sm: "text-sm leading-6 text-gray-500",
    md: "text-lg leading-8 text-gray-600",
    lg: "text-xl leading-9 text-gray-600",
  };

  return (
    <p className={clsx(styles[size], className)}>
      {children}
    </p>
  );
}

export function Label({
  children,
  className = "",
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-[#D8E4BE] bg-[#EEF3E5] px-5 py-2 text-sm font-semibold text-[#6E8B3D]",
        className
      )}
    >
      {children}
    </span>
  );
}