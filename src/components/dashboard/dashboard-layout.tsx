// src/components/dashboard/dashboard-layout.tsx
import DashboardClient from "./dashboard-client";

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

interface DashboardLayoutProps {
  session: any;
  stats: DashboardStatsData;
  children: React.ReactNode;
}

export default function DashboardLayout({
  session,
  stats,
  children,
}: DashboardLayoutProps) {
  return (
    <DashboardClient session={session} stats={stats}>
      {children}
    </DashboardClient>
  );
}
