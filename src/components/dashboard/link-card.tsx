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
      bg-white
      rounded-2xl
      border
      border-[#E6E9DE]
      p-5
      transition-all
      hover:border-[#8FE388]
      hover:shadow-md
      "
    >
      <div className="flex justify-between items-start">
        <div className="min-w-0">
          <h3 className="font-semibold text-[#12160F] truncate">{title}</h3>

          <p className="mt-1 text-sm text-[#8FE388] font-medium">
            shortly.app/{slug}
          </p>

          <p className="mt-2 text-sm text-gray-500 truncate">{destination}</p>
        </div>

        <div className="flex gap-2 ml-5">
          <Button size="icon" variant="ghost">
            <Copy size={16} />
          </Button>

          <Button size="icon" variant="ghost">
            <ExternalLink size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Badge variant="secondary" className="rounded-full">
          <MousePointer2 size={14} className="mr-1" />
          {clicks} Clicks
        </Badge>

        <span className="text-xs text-gray-500">{createdAt}</span>
      </div>
    </div>
  );
}
