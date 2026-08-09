"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { AlertTriangle } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  deleting?: boolean;
  onDelete: () => void;
}

export default function DeleteLinkDialog({
  open,
  onOpenChange,
  deleting = false,
  onDelete,
}: Props) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className="
w-[92vw]
max-w-sm
rounded-3xl
border
border-[var(--dashboard-border)]
bg-[var(--dashboard-surface)]
shadow-2xl
sm:w-full
"
      >
        <div className="flex gap-4">
          <div
            className="
h-12
w-12
shrink-0
rounded-2xl
bg-red-500/10
text-red-400
flex
items-center
justify-center
"
          >
            <AlertTriangle size={24} />
          </div>

          <AlertDialogHeader>
            <AlertDialogTitle
              className="
text-lg
text-[var(--dashboard-text)]
"
            >
              Delete link?
            </AlertDialogTitle>

            <AlertDialogDescription
              className="
text-sm
leading-6
text-[var(--dashboard-muted)]
"
            >
              This action cannot be undone. Your shortened link will be
              permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <AlertDialogFooter
          className="
mt-8
flex-col-reverse
gap-3
sm:flex-row
"
        >
          <AlertDialogCancel
            disabled={deleting}
            className="
w-full
rounded-full
border-[var(--dashboard-border)]
bg-transparent
sm:w-auto
"
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={deleting}
            onClick={onDelete}
            className="
w-full
rounded-full
bg-red-500
hover:bg-red-600
text-white
px-6
sm:w-auto
"
          >
            {deleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
