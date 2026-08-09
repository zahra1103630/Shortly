"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      className="
        flex
        min-h-[500px]
        flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-red-500/10
          text-red-500
        "
      >
        <AlertTriangle size={26} />
      </div>

      <h1
        className="
          mt-5
          text-xl
          font-bold
          text-[var(--dashboard-text)]
        "
      >
        Something went wrong
      </h1>

      <p
        className="
          mt-2
          max-w-sm
          text-sm
          text-[var(--dashboard-muted)]
        "
      >
        We can&apos;t load your dashboard right now.
      </p>

      <Button
        onClick={reset}
        className="
          mt-6
          rounded-full
          bg-[var(--dashboard-green)]
          text-[var(--dashboard-green-text)]
        "
      >
        Try again
      </Button>
    </main>
  );
}
