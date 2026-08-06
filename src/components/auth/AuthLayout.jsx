import Link from "next/link";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20 transition-colors duration-300">

      {/* Left Glow */}

      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#EAF3DA] blur-[130px] dark:bg-[#3F5C2D]/30" />

      {/* Right Glow */}

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F4F7EE] blur-[130px] dark:bg-[#24351D]/30" />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}

        <Link
          href="/"
          className="mb-10 flex items-center justify-center gap-3"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6E8B3D] text-lg font-bold text-white shadow-lg">
            F
          </div>

          <span className="text-3xl font-extrabold tracking-tight">

            <span className="text-foreground">
              Flex
            </span>

            <span className="text-[#6E8B3D]">
              Store
            </span>

          </span>

        </Link>

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {title}
          </h1>

          <p className="mt-3 text-muted-foreground">
            {subtitle}
          </p>

        </div>

        {children}

      </div>

    </main>
  );
}