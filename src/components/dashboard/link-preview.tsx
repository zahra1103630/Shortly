"use client";

import Ghost from "@/components/ui/ghost";

interface LinkPreviewProps {
  slug: string;
}

export default function LinkPreview({ slug }: LinkPreviewProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-[var(--dashboard-border)]
      bg-[var(--dashboard-surface-soft)]
      p-6
      h-full
      flex
      flex-col
      justify-between
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

        <p className="mt-2 font-semibold text-[var(--dashboard-green)] break-all">
          shortly.app/{slug || "your-slug"}
        </p>
      </div>
    </div>
  );
}
