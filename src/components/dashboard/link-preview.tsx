"use client";

import Ghost from "@/components/ui/ghost";

interface LinkPreviewProps {
  slug: string;
}

export default function LinkPreview({ slug }: LinkPreviewProps) {
  return (
    <div
      className="
      flex
      h-full
      flex-col
      justify-between
      rounded-2xl
      border
      border-[var(--dashboard-border)]
      bg-[var(--dashboard-surface-soft)]
      p-4
      sm:p-6
      "
    >
      <div>
        <div className="flex items-center gap-3">
          <Ghost size={40} mood="thinking" />

          <div>
            <h3 className="font-semibold text-[var(--dashboard-text)]">
              Preview
            </h3>

            <p className="text-sm text-[var(--dashboard-muted)]">
              Your new short link
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs text-[var(--dashboard-muted)]">Short URL</p>

        <p className="mt-2 break-all font-semibold text-[var(--dashboard-green)]">
          shortly.app/{slug || "your-slug"}
        </p>
      </div>
    </div>
  );
}
