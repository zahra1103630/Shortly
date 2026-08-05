import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingNavbar() {
  return (
    <nav
      className="
      relative
      z-20
      w-full
      max-w-6xl
      mx-auto
      px-6
      py-6
      flex
      items-center
      justify-between
      "
    >
      <Link href="/" className="flex items-center gap-2">
        <div
          className="
          w-9
          h-9
          rounded-full
          bg-[#b6f77d]
          flex
          items-center
          justify-center
          "
        >
          <span
            className="
            text-[#0b110f]
            font-bold
            text-lg
            "
          >
            S
          </span>
        </div>

        <span className="text-xl font-bold">Shortly</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button
            variant="ghost"
            className="
            text-gray-400
            hover:text-white
            hover:bg-transparent
            "
          >
            Login
          </Button>
        </Link>

        <Link href="/signup">
          <Button
            className="
            rounded-full
            bg-[#b6f77d]
            text-[#0b110f]
            hover:bg-[#a3df6b]
            px-5
            "
          >
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  );
}
