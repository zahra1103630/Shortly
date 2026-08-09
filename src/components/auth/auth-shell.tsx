// src/components/auth/auth-shell.tsx
import Link from "next/link";

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0b1410] flex items-center justify-center px-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#4ade80]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full bg-[#4ade80]/10 blur-3xl" />

      {/* Logo */}
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2.5 text-white z-10"
      >
        <div className="w-8 h-8 rounded-full bg-[#4ade80] flex items-center justify-center">
          <span className="font-bold text-sm text-[#0b1410]">S</span>
        </div>
        <span className="font-bold text-lg">Shortly</span>
      </Link>

      {/* Content - کاملاً وسط‌چین و بدون اسکرول */}
      <div className="relative w-full max-w-md flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
