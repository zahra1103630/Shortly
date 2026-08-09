import { db } from "@/lib/db";
import { links } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

import LinkCard from "./link-card";
import { buildShortURL } from "@/lib/utils/build-short-url";

interface DashboardLinksProps {
  userId: string;
}

export default async function DashboardLinks({ userId }: DashboardLinksProps) {
  const userLinks = await db
    .select()
    .from(links)
    .where(eq(links.userId, userId))
    .orderBy(desc(links.createdAt));

  return (
    <section className="w-full max-w-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[var(--dashboard-text)] sm:text-2xl">
          My Links
        </h2>

        <p className="mt-1 text-sm text-[var(--dashboard-muted)]">
          Manage and track your shortened links.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5">
        {userLinks.length === 0 ? (
          <div className="rounded-xl border border-[var(--dashboard-border)] p-6 text-center text-[var(--dashboard-muted)]">
            No links created yet.
          </div>
        ) : (
          userLinks.map((link) => (
            <LinkCard
              key={link.id}
              id={link.id}
              title={link.title ?? "Untitled"}
              slug={link.slug}
              shortUrl={buildShortURL(link.slug)}
              destination={link.destination}
              clicks={link.clickCount}
              createdAt={link.createdAt.toLocaleDateString()}
            />
          ))
        )}
      </div>
    </section>
  );
}
