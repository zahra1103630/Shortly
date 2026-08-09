"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth/client";
import { loginSchema } from "@/lib/validations/auth";

function getFriendlyAuthError(message?: string) {
  if (!message) return "Invalid email or password";

  const text = message.toLowerCase();

  if (
    text.includes("invalid") ||
    text.includes("credential") ||
    text.includes("password")
  ) {
    return "Invalid email or password";
  }

  if (text.includes("not found") || text.includes("user")) {
    return "No account found with this email";
  }

  if (text.includes("verify") || text.includes("verification")) {
    return "Please verify your email first";
  }

  return "Something went wrong. Please try again";
}

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = loginSchema.safeParse({
      email,
      password,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    try {
      setLoading(true);

      const result = await authClient.signIn.email(parsed.data);

      if (result.error) {
        toast.error(getFriendlyAuthError(result.error.message));
        return;
      }

      toast.success("Welcome back 👋");

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Unable to login right now");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        w-full
        max-w-sm
        rounded-3xl
        border
        border-[#24372b]
        bg-[#111a15]
        p-6
        shadow-xl
      "
    >
      <div className="mb-7">
        <h1
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Welcome back 👋
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-[#8b9d92]
          "
        >
          Sign in to your Shortly account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          flex
          flex-col
          gap-5
        "
      >
        <div>
          <Label
            htmlFor="email"
            className="
              text-sm
              text-[#b5c4bb]
            "
          >
            Email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="
              mt-2
              h-11
              rounded-xl
              border-[#2a3d30]
              bg-[#17231b]
              text-white
              placeholder:text-[#607166]
              focus:border-[#4ade80]
              focus:ring-[#4ade80]/20
            "
          />
        </div>

        <div>
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <Label
              htmlFor="password"
              className="
                text-sm
                text-[#b5c4bb]
              "
            >
              Password
            </Label>

            <Link
              href="/forgot-password"
              className="
                text-xs
                text-[#4ade80]
                hover:underline
              "
            >
              Forgot password?
            </Link>
          </div>

          <div
            className="
              relative
              mt-2
            "
          >
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="
                h-11
                rounded-xl
                border-[#2a3d30]
                bg-[#17231b]
                pr-11
                text-white
                placeholder:text-[#607166]
                focus:border-[#4ade80]
                focus:ring-[#4ade80]/20
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-[#607166]
                hover:text-white
              "
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="
            mt-2
            h-11
            rounded-full
            bg-[#4ade80]
            font-semibold
            text-[#07110b]
            hover:bg-[#22c55e]
          "
        >
          {loading ? (
            <Loader2
              size={16}
              className="
                  mr-2
                  animate-spin
                "
            />
          ) : (
            <LogIn size={16} className="mr-2" />
          )}

          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p
        className="
          mt-7
          text-center
          text-sm
          text-[#718276]
        "
      >
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="
            font-semibold
            text-[#4ade80]
            hover:underline
          "
        >
          Create one
        </Link>
      </p>
    </div>
  );
}
