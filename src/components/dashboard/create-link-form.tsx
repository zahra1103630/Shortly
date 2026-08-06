"use client";

import { Link as LinkIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CreateLinkFormProps {
  slug: string;
  setSlug: (value: string) => void;
  onClose: () => void;
}

export default function CreateLinkForm({
  slug,
  setSlug,
  onClose,
}: CreateLinkFormProps) {
  return (
    <div className="space-y-5">
      <div>
        <Label className="text-[var(--dashboard-text)]">Destination URL</Label>

        <Input
          placeholder="https://your-very-long-link.com/path"
          className="mt-2 h-12 rounded-xl bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] text-[var(--dashboard-text)]"
        />
      </div>

      <div>
        <Label className="text-[var(--dashboard-text)]">Custom slug</Label>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-12 px-4 flex items-center rounded-xl bg-[var(--dashboard-surface)] border border-[var(--dashboard-border)] text-sm text-[var(--dashboard-muted)]">
            shortly.app/
          </div>

          <Input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="my-link"
            className="h-12 rounded-xl bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] text-[var(--dashboard-text)]"
          />
        </div>

        <p className="mt-2 text-xs text-[var(--dashboard-muted)]">
          Leave blank to auto-generate
        </p>
      </div>

      <div>
        <Label className="text-[var(--dashboard-text)]">Title (optional)</Label>

        <Input
          placeholder="What's this link for?"
          className="mt-2 h-12 rounded-xl bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] text-[var(--dashboard-text)]"
        />

        <p className="mt-2 text-xs text-[var(--dashboard-muted)]">
          Helps you identify this link later
        </p>
      </div>

      <div className="flex justify-end gap-3 pt-6">
        <Button
          type="button"
          variant="outline"
          className="rounded-full px-6 border-[var(--dashboard-border)] text-[var(--dashboard-text)] hover:bg-[var(--dashboard-surface)]"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          className="rounded-full px-7 bg-[var(--dashboard-green)] text-[var(--dashboard-green-text)] hover:bg-[var(--dashboard-green-hover)]"
        >
          <LinkIcon size={15} className="mr-2" />
          Create Link
        </Button>
      </div>
    </div>
  );
}
