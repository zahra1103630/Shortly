"use client";

import { Copy, ExternalLink, MousePointer2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LinkCardProps {
  title: string;
  slug: string;
  destination: string;
  clicks: number;
  createdAt: string;
}

export default function LinkCard({
  title,
  slug,
  destination,
  clicks,
  createdAt,
}: LinkCardProps) {
  return (
    <div
      className="
      bg-[var(--dashboard-card)]
      rounded-2xl
      border
      border-[var(--dashboard-border)]
      p-5
      transition-all
      hover:border-[var(--dashboard-green)]
      hover:shadow-md
      "
    >
      <div className="flex justify-between items-start">
        <div className="min-w-0">
          <h3 className="font-semibold text-[var(--dashboard-text)] truncate">
            {title}
          </h3>

          <p className="mt-1 text-sm text-[var(--dashboard-green)] font-medium">
            shortly.app/{slug}
          </p>

          <p className="mt-2 text-sm text-[var(--dashboard-muted)] truncate">
            {destination}
          </p>
        </div>

        <div className="flex gap-2 ml-5">
          <Button
            size="icon"
            variant="ghost"
            className="text-[var(--dashboard-muted)] hover:text-[var(--dashboard-text)]"
          >
            <Copy size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="text-[var(--dashboard-muted)] hover:text-[var(--dashboard-text)]"
          >
            <ExternalLink size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="text-[var(--dashboard-danger)] hover:text-[var(--dashboard-danger-hover)]"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Badge
          variant="secondary"
          className="rounded-full bg-[var(--dashboard-surface)] text-[var(--dashboard-muted)] border border-[var(--dashboard-border)]"
        >
          <MousePointer2 size={14} className="mr-1" />
          {clicks} Clicks
        </Badge>

        <span className="text-xs text-[var(--dashboard-muted)]">
          {createdAt}
        </span>
      </div>
    </div>
  );
}
