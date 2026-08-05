"use client";

import Ghost from "@/components/ui/ghost";

import { Bell, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardHeader() {
  return (
    <header className="h-20 border-b border-[#E6E9DE] bg-[#F4F5EE] px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Ghost size={38} mood="happy" />

        <div>
          <p className="text-sm text-[#7A8273]">Welcome back</p>

          <h1 className="text-xl font-bold text-[#12160F]">
            Good afternoon, Zahra 👋
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-72">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <Input
            placeholder="Search links..."
            className="pl-10 rounded-full bg-white"
          />
        </div>

        <Button size="icon" variant="outline" className="rounded-full">
          <Bell size={18} />
        </Button>

        <Avatar>
          <AvatarFallback>ZK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
