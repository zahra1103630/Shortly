"use client";

import Ghost from "@/components/ui/ghost";
import { Check } from "lucide-react";

interface LinkPreviewCardProps {
  slug: string;
}

export default function LinkPreviewCard({ slug }: LinkPreviewCardProps) {
  return (
    <div
      className="
      flex
      h-full
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-[var(--dashboard-border)]
      bg-[var(--dashboard-surface)]
      p-4
      text-center
      sm:p-6
      "
    >
      <div
        className="
        flex
        w-full
        max-w-[220px]
        aspect-[3/5]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-[var(--dashboard-border)]
        bg-[var(--dashboard-card)]
        p-5
        shadow-sm
        sm:p-6
        "
      >
        <Ghost size={70} mood="happy" />

        <h3 className="mt-6 text-sm font-semibold text-[var(--dashboard-text)]">
          Preview
        </h3>

        <p className="mt-3 break-all text-sm font-bold text-[var(--dashboard-green)]">
          shortly.app/
          {slug || "my-link"}
        </p>

        <p className="mt-4 text-xs leading-relaxed text-[var(--dashboard-muted)]">
          This is how your
          <br />
          link will look like
        </p>

        <div className="mt-6 w-full rounded-2xl bg-[var(--dashboard-accent-soft)] p-3 space-y-2">
          {[
            "Track clicks in real-time",
            "Beautiful analytics",
            "Share anywhere",
            "Customizable & secure",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[11px] text-[var(--dashboard-accent-soft-text)]"
            >
              <Check size={13} className="shrink-0 text-[var(--dashboard-green)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
