"use client";

import Ghost from "@/components/ui/ghost";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Bell, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardHeader() {
  return (
    <header className="h-20 border border-[var(--dashboard-border)] bg-[var(--dashboard-bg)] px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Ghost size={38} mood="happy" />

        <div>
          <p className="text-sm text-[var(--dashboard-muted-2)]">
            Welcome back
          </p>

          <h1 className="text-xl font-bold text-[var(--dashboard-text)]">
            Good afternoon, Zahra 👋
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-72">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--dashboard-muted)]"
            size={18}
          />

          <Input
            placeholder="Search links..."
            className="pl-10 rounded-full bg-[var(--dashboard-card)] border-[var(--dashboard-border)] text-[var(--dashboard-text)]"
          />
        </div>

        <div className="flex items-center gap-3">
          {/*
            ThemeToggle isn't in the files I have, so its internal button
            size can't be edited here. This wrapper forces it to the same
            10x10 circle as the icon button and avatar above/below so the
            row lines up. If it still renders bigger, the fix has to go
            inside theme-toggle.tsx itself (share that file and I'll
            match its size exactly).
          */}
          <div className="w-10 h-10 flex items-center justify-center [&>button]:w-10 [&>button]:h-10 [&_svg]:size-4">
            <ThemeToggle />
          </div>

          <Avatar className="w-10 h-10 ">
            <AvatarFallback>ZK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
