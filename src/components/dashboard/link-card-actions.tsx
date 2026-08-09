"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, ExternalLink, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { deleteLink } from "@/actions/link-actions";

import DeleteLinkDialog from "./delete-link-dialog";

interface LinkActionsProps {
  id: number;
  url: string;
}

export default function LinkActions({ id, url }: LinkActionsProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    try {
      setDeleting(true);

      const result = await deleteLink(id);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Link deleted successfully");

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete link");
    } finally {
      setDeleting(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(url);

    toast.success("Copied!");
  }

  function handleOpen() {
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-wrap items-center gap-0.5 sm:gap-2">
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="
          h-8 w-8
          text-[var(--dashboard-muted)]
          hover:text-[var(--dashboard-text)] cursor-pointer
          sm:h-9 sm:w-9
        "
      >
        <Copy size={15} className="sm:hidden" />
        <Copy size={16} className="hidden sm:block" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={handleOpen}
        className="
          h-8 w-8
          text-[var(--dashboard-muted)]
          hover:text-[var(--dashboard-text)] cursor-pointer
          sm:h-9 sm:w-9
        "
      >
        <ExternalLink size={15} className="sm:hidden" />
        <ExternalLink size={16} className="hidden sm:block" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setOpen(true)}
        className="
    h-8 w-8
    text-[var(--dashboard-danger)]
    hover:text-[var(--dashboard-danger-hover)] cursor-pointer
    sm:h-9 sm:w-9
  "
      >
        <Trash2 size={15} className="sm:hidden" />
        <Trash2 size={16} className="hidden sm:block" />
      </Button>
      <DeleteLinkDialog
        open={open}
        onOpenChange={setOpen}
        deleting={deleting}
        onDelete={handleDelete}
      />
    </div>
  );
}
