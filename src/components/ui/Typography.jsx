import clsx from "clsx";

export function Heading({
  children,
  className = "",
  level = "h1",
}) {
  const Tag = level;

  const styles = {
    h1: "text-5xl md:text-7xl lg:text-8xl font-black tracking-[-3px] leading-[0.92] text-foreground",
    h2: "text-4xl md:text-5xl font-bold tracking-[-2px] text-foreground",
    h3: "text-2xl md:text-3xl font-semibold text-foreground",
    h4: "text-xl font-semibold text-foreground",
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
    sm: "text-sm leading-6 text-muted-foreground",
    md: "text-lg leading-8 text-muted-foreground",
    lg: "text-xl leading-9 text-muted-foreground",
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
        "inline-flex items-center rounded-full border border-[#D8E4BE] bg-[#EEF3E5] px-5 py-2 text-sm font-semibold text-[#6E8B3D] dark:border-[#4F6630] dark:bg-[#2B3A22]",
        className
      )}
    >
      {children}
    </span>
  );
}