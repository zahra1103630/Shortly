"use client";

import Link from "next/link";
import { Link2, BarChart3, Globe, Settings, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardSidebarProps {
  onCreateLink: () => void;
}

export default function DashboardSidebar({
  onCreateLink,
}: DashboardSidebarProps) {
  return (
    <aside className="w-72 bg-[var(--dashboard-sidebar)] text-white flex flex-col p-5 border-r border-[var(--dashboard-sidebar-border)]">
      {/* Logo */}

      <Link href="/" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[var(--dashboard-green)] flex items-center justify-center">
          <span className="font-bold text-[var(--dashboard-green-text)]">
            S
          </span>
        </div>

        <span className="font-bold text-xl">Shortly</span>
      </Link>

      <Button
        onClick={onCreateLink}
        className="mt-8 rounded-full h-11 bg-[var(--dashboard-green)] text-[var(--dashboard-green-text)] hover:bg-[var(--dashboard-green-hover)]"
      >
        <Plus className="mr-2 h-4 w-4" />
        New Link
      </Button>

      <Separator className="my-7 bg-[var(--dashboard-sidebar-border)]" />

      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="justify-start w-full text-[var(--dashboard-green)] hover:bg-[var(--dashboard-sidebar-hover)] hover:text-[var(--dashboard-green)]"
        >
          <Link2 className="mr-2 h-4 w-4" />
          My Links
        </Button>

        <Button
          variant="ghost"
          className="justify-start w-full text-gray-400 hover:text-white hover:bg-[var(--dashboard-sidebar-hover)]"
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Analytics
        </Button>

        <Button
          variant="ghost"
          className="justify-start w-full text-gray-400 hover:text-white hover:bg-[var(--dashboard-sidebar-hover)]"
        >
          <Globe className="mr-2 h-4 w-4" />
          Domains
        </Button>

        <Button
          variant="ghost"
          className="justify-start w-full text-gray-400 hover:text-white hover:bg-[var(--dashboard-sidebar-hover)]"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>

      <div className="mt-auto">
        <Separator className="mb-5 bg-[var(--dashboard-sidebar-border)]" />

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>ZK</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-semibold">Zahra</p>

            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
