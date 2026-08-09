// src/components/dashboard/dashboard-stats.tsx
"use client";

import { Link2, MousePointer2, TrendingUp, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface DashboardStatsData {
  totalLinks: number;
  totalClicks: number;
  thisWeek: number;
  topLink: {
    title: string | null;
    slug: string;
    clickCount: number;
  } | null;
}

interface DashboardStatsProps {
  stats: DashboardStatsData;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const items = [
    {
      title: "Total Links",
      value: formatNumber(stats.totalLinks),
      sub: "All time",
      icon: Link2,
    },
    {
      title: "Total Clicks",
      value: formatNumber(stats.totalClicks),
      sub: "All time",
      icon: MousePointer2,
    },
    {
      title: "This Week",
      value: formatNumber(stats.thisWeek),
      sub: "Clicks this week",
      icon: TrendingUp,
    },
    {
      title: "Top Link",
      value: stats.topLink ? formatNumber(stats.topLink.clickCount) : "0",
      sub: stats.topLink
        ? stats.topLink.title || `/${stats.topLink.slug}`
        : "No links yet",
      icon: Trophy,
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {items.map((item) => (
        <Card
          key={item.title}
          className="min-w-0 rounded-2xl bg-[var(--dashboard-card)] shadow-none"
        >
          <CardContent className="px-4 pt-0.5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--dashboard-accent-soft)] text-[var(--dashboard-green)]">
                <item.icon size={16} stroke="currentColor" />
              </div>

              <p className="truncate text-sm text-[var(--dashboard-muted)]">
                {item.title}
              </p>
            </div>

            <h2 className="mt-3 truncate text-2xl font-bold text-[var(--dashboard-text)] sm:text-3xl">
              {item.value}
            </h2>

            <p className="mt-2 truncate text-sm text-[var(--dashboard-green)]">
              {item.sub}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
