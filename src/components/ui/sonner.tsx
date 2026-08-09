"use client";

import { Toaster as Sonner } from "sonner";

import { useTheme } from "next-themes";

export function Toaster() {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-2xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] text-[var(--dashboard-text)]",
          description: "text-[var(--dashboard-muted)]",
          actionButton: "bg-[var(--dashboard-green)] text-black rounded-full",
          cancelButton: "bg-[var(--dashboard-surface-soft)]",
        },
      }}
    />
  );
}
