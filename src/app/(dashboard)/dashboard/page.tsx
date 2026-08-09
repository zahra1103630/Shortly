// src/app/(dashboard)/dashboard/page.tsx
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import DashboardLinks from "@/components/dashboard/dashboard-links";

import { getDashboardStats } from "@/actions/link-actions";
import { getSession } from "@/lib/auth/get-session";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const statsResult = await getDashboardStats();

  if (statsResult.error || !statsResult.data) {
    redirect("/login");
  }

  return (
    <DashboardLayout session={session} stats={statsResult.data}>
      <DashboardLinks userId={session.user.id} />
    </DashboardLayout>
  );
}
