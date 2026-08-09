import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingNavbar() {
  return (
    <nav
      className="
        flex
        items-center
        justify-between
        px-6
        py-6
        lg:px-10
      "
    >
      <Link
        href="/"
        className="
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#b6f77d]
          "
        >
          <span
            className="
              font-bold
              text-[#0b110f]
            "
          >
            S
          </span>
        </div>

        <span className="text-xl font-bold text-white">Shortly</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button
            variant="ghost"
            className="
              text-gray-400
              hover:bg-transparent
              hover:text-white cursor-pointer
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
              px-5
              text-[#0b110f]
              hover:bg-[#a3df6b] cursor-pointer
            "
          >
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  );
}
