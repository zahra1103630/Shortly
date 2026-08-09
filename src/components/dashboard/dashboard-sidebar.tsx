"use client";

import Link from "next/link";
import { Link2, BarChart3, Globe, Settings, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardSidebarProps {
  onCreateLink: () => void;
  session: any;
  open?: boolean;
  onClose?: () => void;
}

export default function DashboardSidebar({
  onCreateLink,
  session,
  open = false,
  onClose,
}: DashboardSidebarProps) {
  return (
    <>
      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-72
          flex-col
          border-r
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-sidebar)]
          p-6
          transition-transform
          duration-300

          lg:static
          lg:translate-x-0

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-6 flex justify-end lg:hidden">
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X size={20} stroke="white" />
          </Button>
        </div>

        <Link href="/" className="flex items-center gap-3" onClick={onClose}>
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[var(--dashboard-green)]
            "
          >
            <span
              className="
                font-bold
                text-[var(--dashboard-green-text)]
              "
            >
              S
            </span>
          </div>

          <span className="font-bold text-xl text-white">Shortly</span>
        </Link>

        <Button
          onClick={() => {
            onCreateLink();
            onClose?.();
          }}
          className="
            mt-8
            h-11
            rounded-full
            bg-[var(--dashboard-green)]
            text-[var(--dashboard-green-text)]
            hover:bg-[var(--dashboard-green-hover)]
          "
        >
          <Plus className="mr-2 h-4 w-4" />
          New Link
        </Button>

        <Separator
          className="
            my-7
            bg-[var(--dashboard-border)]
          "
        />

        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="
              w-full
              justify-start
              text-[var(--dashboard-green)]
              hover:bg-[var(--dashboard-surface-soft)]
            "
          >
            <Link2 className="mr-2 h-4 w-4" />
            My Links
          </Button>

          {[
            {
              icon: BarChart3,
              text: "Analytics",
            },
            {
              icon: Globe,
              text: "Domains",
            },
            {
              icon: Settings,
              text: "Settings",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Button
                key={item.text}
                variant="ghost"
                className="
                  w-full
                  justify-start
                  text-[var(--dashboard-muted)]
                  hover:bg-[var(--dashboard-surface-soft)]
                  hover:text-[var(--dashboard-text)]
                "
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.text}
              </Button>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Separator
            className="
              mb-5
              bg-[var(--dashboard-border)]
            "
          />

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback
                className="
                  bg-[var(--dashboard-surface-soft)]
                  text-[var(--dashboard-text)]
                "
              >
                {session?.user?.name
                  ?.split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <p
                className="
                  truncate
                  text-sm
                  font-semibold
                  text-[var(--dashboard-text)]
                "
              >
                {session?.user?.name || "User"}
              </p>

              <p
                className="
                  text-xs
                  text-[var(--dashboard-muted)]
                "
              >
                Free Plan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
