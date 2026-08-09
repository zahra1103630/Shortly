"use client";

import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import CreateLinkForm from "./create-link-form";
import LinkPreviewCard from "./link-preview-card";

interface Props {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

export default function CreateLinkDialog({ open, onOpenChange }: Props) {
  const [slug, setSlug] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-h-[90vh] max-w-6xl overflow-y-auto rounded-3xl p-0 sm:w-full">
        <div className="grid min-h-0 grid-cols-1 overflow-hidden rounded-3xl bg-[var(--dashboard-surface-soft)] md:min-h-[650px] md:grid-cols-[1.7fr_1fr]">
          <div className="px-5 py-6 sm:px-10 sm:py-9">
            <div className="mb-6 flex items-center gap-3 sm:mb-10 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--dashboard-surface)]">
                <LinkIcon size={20} className="text-[var(--dashboard-green)]" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[var(--dashboard-text)] sm:text-xl">
                  Add New Link
                </h2>

                <p className="text-xs text-[var(--dashboard-muted)] sm:text-sm">
                  Shorten a long link and make it easy to share.
                </p>
              </div>
            </div>

            {/* Compact live preview, mobile/tablet only — always visible
                above the fold instead of requiring a scroll down past
                the full form to reach the card version below. */}
            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] px-4 py-3 md:hidden">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--dashboard-accent-soft)]">
                <LinkIcon size={16} className="text-[var(--dashboard-green)]" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] text-[var(--dashboard-muted)]">
                  Preview
                </p>

                <p className="truncate text-sm font-bold text-[var(--dashboard-green)]">
                  shortly.app/{slug || "my-link"}
                </p>
              </div>
            </div>

            <CreateLinkForm
              slug={slug}
              setSlug={setSlug}
              onClose={() => onOpenChange(false)}
            />
          </div>

          <div className="hidden bg-[var(--dashboard-surface-soft)] p-4 sm:p-6 md:block">
            <LinkPreviewCard slug={slug} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
