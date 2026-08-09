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
interface SessionUser {
  user?: {
    id: string;
    name?: string | null;
    email?: string | null;
  };
}

interface DashboardLayoutProps {
  session: SessionUser;
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
