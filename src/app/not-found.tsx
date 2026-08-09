// src/app/not-found.tsx

import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--dashboard-background)]">
      {/* Header */}
      <header
        className="
          flex
          items-center
          justify-between
          px-6
          py-5
          sm:px-8
          border-b
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-surface)]
        "
      >
        <Link
          href="/"
          className="
            text-xl
            font-extrabold
            tracking-tight
            text-[var(--dashboard-text)]
          "
        >
          Shortly
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="
              rounded-full
              border
              border-[var(--dashboard-border)]
              px-4
              py-2
              text-sm
              font-medium
              text-[var(--dashboard-text)]
              hover:bg-[var(--dashboard-accent-soft)]
              transition
            "
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
              bg-[var(--dashboard-green)]
              text-[var(--dashboard-green-text)]
              hover:bg-[var(--dashboard-green-hover)]
              transition
            "
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Content */}
      <main
        className="
          flex
          flex-col
          items-center
          text-center
          px-6
          pt-16
        "
      >
        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-[var(--dashboard-accent-soft)]
            text-[var(--dashboard-green)]
          "
        >
          <Ghost size={48} />
        </div>

        <h1
          className="
            mt-6
            text-7xl
            font-black
            tracking-tight
            text-[var(--dashboard-border)]
          "
        >
          404
        </h1>

        <h2
          className="
            mt-2
            text-xl
            font-bold
            text-[var(--dashboard-text)]
          "
        >
          Link not found
        </h2>

        <p
          className="
            mt-3
            max-w-sm
            text-sm
            leading-6
            text-[var(--dashboard-muted)]
          "
        >
          This link might have been deleted, expired, or typed incorrectly. Lets
          get you back on track.
        </p>

        <div
          className="
            mt-7
            flex
            flex-col
            gap-3
            sm:flex-row
          "
        >
          <Link
            href="/dashboard"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              px-6
              py-2.5
              text-sm
              font-semibold
              bg-[var(--dashboard-green)]
              text-[var(--dashboard-green-text)]
              hover:bg-[var(--dashboard-green-hover)]
              transition
            "
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[var(--dashboard-border)]
              px-6
              py-2.5
              text-sm
              font-medium
              text-[var(--dashboard-text)]
              hover:bg-[var(--dashboard-accent-soft)]
              transition
            "
          >
            Back Home
            <ArrowLeft size={15} />
          </Link>
        </div>
      </main>
    </div>
  );
}
