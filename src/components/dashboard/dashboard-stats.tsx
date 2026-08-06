import { Link2, MousePointer2, TrendingUp, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Links",
    value: "128",
    sub: "All time",
    icon: Link2,
  },
  {
    title: "Total Clicks",
    value: "24.6K",
    sub: "All time",
    icon: MousePointer2,
  },
  {
    title: "This Week",
    value: "2.3K",
    sub: "+32%",
    icon: TrendingUp,
  },
  {
    title: "Top Link",
    value: "3.4K",
    sub: "Best performer",
    icon: Trophy,
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-5">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="rounded-2xl  bg-[var(--dashboard-surface)] shadow-none"
        >
          <CardContent className="px-4 pt-0.5">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center
               text-[var(--dashboard-green)]"
              >
                <item.icon size={16} stroke="green" />
              </div>

              <p className="text-sm text-[var(--dashboard-muted)]">
                {item.title}
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[var(--dashboard-text)]">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-[var(--dashboard-green)]">
              {item.sub}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
