"use client";

import Ghost from "@/components/ui/ghost";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Menu, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import LogoutButton from "@/components/auth/logout-button";

interface SessionUser {
  user?: {
    name?: string | null;
    email?: string | null;
  };
}

interface DashboardHeaderProps {
  session: SessionUser;
  onMenuClick?: () => void;
}
export default function DashboardHeader({
  session,
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="flex h-16 w-full max-w-full items-center justify-between gap-3 bg-[var(--dashboard-bg)] px-4 sm:h-20 sm:px-8">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--dashboard-text)] hover:bg-[var(--dashboard-card)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <Ghost size={38} mood="happy" />

        <div className="min-w-0">
          <p className="hidden text-sm text-[var(--dashboard-muted-2)] sm:block">
            Welcome back
          </p>

          <h1 className="truncate text-base font-bold text-[var(--dashboard-text)] sm:text-xl">
            Good afternoon, {session?.user?.name || "there"}
          </h1>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="relative hidden w-40 sm:block md:w-56 lg:w-72">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--dashboard-muted)]"
            size={18}
          />

          <Input
            placeholder="Search links..."
            className="pl-10 rounded-full bg-[var(--dashboard-card)] border-[var(--dashboard-border)] text-[var(--dashboard-text)]"
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {/*
            ThemeToggle isn't in the files I have, so its internal button
            size can't be edited here. This wrapper forces it to the same
            size as the icon button and avatar above/below so the row
            lines up at every breakpoint. If it still renders bigger, the
            fix has to go inside theme-toggle.tsx itself (share that file
            and I'll match its size exactly).
          */}
          <LogoutButton />
          <div className="flex h-9 w-9 items-center justify-center [&>button]:h-9 [&>button]:w-9 [&_svg]:size-4 sm:h-10 sm:w-10 sm:[&>button]:h-10 sm:[&>button]:w-10">
            <ThemeToggle />
          </div>

          <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
            <AvatarFallback>
              {session?.user?.name
                ?.split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
