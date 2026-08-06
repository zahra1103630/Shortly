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
      <DialogContent className="max-w-6xl p-0">
        <div className="grid min-h-[650px] md:grid-cols-[1.7fr_1fr] bg-[var(--dashboard-surface-soft)] rounded-3xl overflow-hidden">
          <div className="px-10 py-9">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[var(--dashboard-surface)] flex items-center justify-center">
                <LinkIcon size={20} className="text-[var(--dashboard-green)]" />
              </div>

              <div>
                <h2 className="font-bold text-xl text-[var(--dashboard-text)]">
                  Add New Link
                </h2>

                <p className="text-sm text-[var(--dashboard-muted)]">
                  Shorten a long link and make it easy to share.
                </p>
              </div>
            </div>

            <CreateLinkForm
              slug={slug}
              setSlug={setSlug}
              onClose={() => onOpenChange(false)}
            />
          </div>

          <div className="p-6 bg-[var(--dashboard-surface-soft)]">
            <LinkPreviewCard slug={slug} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
