import Link from "next/link";

export default function LandingNavbar() {
  return (
    <nav className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#b6f77d] rounded-full flex items-center justify-center">
          <span className="text-[#0b110f] font-bold text-lg">S</span>
        </div>

        <span className="text-xl font-bold tracking-tight">Shortly</span>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="
 bg-[#b6f77d]
 text-[#0b110f]
 px-5 py-2
 rounded-full
 text-sm
 font-bold
 hover:bg-[#a3df6b]
 transition-all
 "
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
