import LogoutButton from "@/components/auth/logout-button";

export default function DashboardPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-8">Dashboard</h1>

      <LogoutButton />
    </main>
  );
}
