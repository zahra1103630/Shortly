"use client";

import { MousePointer2 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import LinkActions from "@/components/dashboard/link-card-actions";

interface LinkCardProps {
  id: number;
  title: string;
  slug: string;
  shortUrl: string;
  destination: string;
  clicks: number;
  createdAt: string;
}

export default function LinkCard({
  id,
  title,
  shortUrl,
  destination,
  clicks,
}: LinkCardProps) {
  return (
    <div
      className="
rounded-2xl
border
border-[var(--dashboard-border)]
bg-[var(--dashboard-surface)]
p-4
sm:p-5
overflow-hidden
"
    >
      <div
        className="
flex
items-start
justify-between
gap-3
"
      >
        <div
          className="
min-w-0
flex-1
"
        >
          <h3
            className="
truncate
text-sm
font-semibold
text-[var(--dashboard-text)]
sm:text-base
"
          >
            {title}
          </h3>

          <p
            className="
mt-1
truncate
text-xs
text-[var(--dashboard-green)]
sm:text-sm
"
          >
            {shortUrl}
          </p>

          <p
            className="
mt-2
line-clamp-2
break-all
text-xs
text-[var(--dashboard-muted)]
sm:text-sm
"
          >
            {destination}
          </p>
        </div>

        <div
          className="
flex
shrink-0
gap-1
"
        >
          <LinkActions id={id} url={shortUrl} />
        </div>
      </div>

      <div
        className="
mt-4
flex
items-center
justify-between
gap-2
"
      >
        <Badge
          className="
rounded-full
bg-[var(--dashboard-accent-soft)]
text-[var(--dashboard-accent-soft-text)]
"
        >
          <MousePointer2 size={13} className="mr-1" />

          {clicks}

          <span className="ml-1 hidden sm:inline">clicks</span>
        </Badge>

        <Link
          href={`/dashboard/links/${id}`}
          className="
text-xs
font-medium
text-[var(--dashboard-green)]
hover:underline
sm:text-sm
"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
