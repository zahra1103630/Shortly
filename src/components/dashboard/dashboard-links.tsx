"use client";

import LinkCard from "./link-card";

const mockLinks = [
  {
    id: 1,
    title: "Portfolio",
    slug: "portfolio",
    destination: "https://zahra.dev",
    clicks: 234,
    createdAt: "Today",
  },
  {
    id: 2,
    title: "GitHub",
    slug: "github",
    destination: "https://github.com/",
    clicks: 82,
    createdAt: "Yesterday",
  },
  {
    id: 3,
    title: "Resume",
    slug: "resume",
    destination: "https://drive.google.com/",
    clicks: 16,
    createdAt: "2 days ago",
  },
];

export default function DashboardLinks() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--dashboard-text)]">
            My Links
          </h2>

          <p className="text-sm text-[var(--dashboard-muted)] mt-1">
            Manage and track your shortened links.
          </p>
        </div>
      </div>

      <div className="grid gap-5">
        {mockLinks.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
}
