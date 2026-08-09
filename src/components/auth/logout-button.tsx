"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/client";

export default function LogoutButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);

      await authClient.signOut();

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out, please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleLogout}
      disabled={loading}
      title="Log out"
      aria-label="Log out"
      className="
        w-10 h-10
        rounded-full
        text-[var(--dashboard-muted)]
        hover:text-red-500
        hover:bg-red-500/10
        cursor-pointer
      "
    >
      <LogOut size={17} className={loading ? "animate-pulse" : ""} />
    </Button>
  );
}