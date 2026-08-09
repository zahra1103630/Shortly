// src/components/dashboard/dashboard-client.tsx
"use client";

import { useState } from "react";

import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";
import DashboardStats from "./dashboard-stats";
import CreateLinkDialog from "./create-link-dialog";

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

interface Props {
  session: SessionUser;
  stats: DashboardStatsData;
  children: React.ReactNode;
}

export default function DashboardClient({ session, stats, children }: Props) {
  const [openCreateLink, setOpenCreateLink] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleCreateLink() {
    setOpenCreateLink(true);
    setMobileMenuOpen(false);
  }

  return (
    <div className="flex min-h-screen w-full max-w-full overflow-x-hidden">
      <DashboardSidebar
        session={session}
        onCreateLink={handleCreateLink}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardHeader
          session={session}
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <section className="flex-1 space-y-6 overflow-y-auto bg-[var(--dashboard-bg)] p-4 sm:space-y-8 sm:p-6 lg:p-8">
          <DashboardStats stats={stats} />

          {children}
        </section>
      </main>

      <CreateLinkDialog
        open={openCreateLink}
        onOpenChange={setOpenCreateLink}
      />
    </div>
  );
}
