"use client";

import { useState } from "react";

import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";
import DashboardStats from "./dashboard-stats";
import DashboardLinks from "./dashboard-links";

// فعلاً کامنت می‌ماند
// import CreateLinkDialog from "./create-link-dialog";

export default function DashboardLayout() {
  const [openCreateLink, setOpenCreateLink] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4F5EE] overflow-hidden">
      <DashboardSidebar onCreateLink={() => setOpenCreateLink(true)} />

      <main className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <section className="flex-1 overflow-y-auto p-8 space-y-8">
          <DashboardStats />

          <DashboardLinks />
        </section>
      </main>

      {/*
      <CreateLinkDialog
        open={openCreateLink}
        onOpenChange={setOpenCreateLink}
      />
      */}
    </div>
  );
}
