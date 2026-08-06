import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your free FlexStore workspace in less than a minute."
    >
      <AuthCard>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm font-medium text-foreground">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition-all focus:border-[#6E8B3D] focus:ring-4 focus:ring-[#6E8B3D]/10"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-foreground">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition-all focus:border-[#6E8B3D] focus:ring-4 focus:ring-[#6E8B3D]/10"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-foreground">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition-all focus:border-[#6E8B3D] focus:ring-4 focus:ring-[#6E8B3D]/10"
            />

          </div>

          <button className="h-12 w-full rounded-xl bg-[#6E8B3D] font-semibold text-white transition-all duration-300 hover:bg-[#5C7632]">
            Create Account
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="font-semibold text-[#6E8B3D] hover:underline"
            >
              Sign In
            </a>
          </p>

        </div>

      </AuthCard>
    </AuthLayout>
  );
}