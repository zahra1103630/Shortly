import { notFound } from "next/navigation";

import { getLinkDetail } from "@/actions/link-actions";
import ClicksChart from "@/components/dashboard/clicks-chart";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function LinkDetailPage({ params }: Props) {
  const { id } = await params;

  const linkId = Number(id);

  if (Number.isNaN(linkId)) {
    notFound();
  }

  const result = await getLinkDetail(linkId);

  if (result.error || !result.data) {
    notFound();
  }

  const { link, clicksPerDay } = result.data;

  return (
    <main className="w-full max-w-full space-y-6 overflow-x-hidden">
      <div className="flex items-center justify-between"></div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Link Info */}
        <section
          className="
          rounded-3xl
          border
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-surface)]
          p-4
          sm:p-6
        "
        >
          <div className="space-y-5">
            <div>
              <h1 className="text-xl font-bold text-[var(--dashboard-text)] sm:text-2xl">
                Link Details
              </h1>
            </div>
            <div>
              <p className="text-sm text-[var(--dashboard-muted)]">Short URL</p>

              <p className="mt-1 break-all font-semibold text-[var(--dashboard-green)]">
                /r/{link.slug}
              </p>
            </div>

            <div>
              <p className="text-sm text-[var(--dashboard-muted)]">
                Destination
              </p>

              <p
                className="
                mt-1
                break-all
                text-sm
                text-[var(--dashboard-text)]
              "
              >
                {link.destination}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div
                className="
                rounded-2xl
                bg-[var(--dashboard-background)]
                p-3
                sm:p-4
              "
              >
                <p className="text-xs text-[var(--dashboard-muted)]">
                  Total clicks
                </p>

                <p className="mt-1 text-xl font-bold text-[var(--dashboard-text)] sm:text-2xl">
                  {link.clickCount}
                </p>
              </div>

              <div
                className="
                rounded-2xl
                bg-[var(--dashboard-background)]
                p-3
                sm:p-4
              "
              >
                <p className="text-xs text-[var(--dashboard-muted)]">Created</p>

                <p className="mt-1 text-sm font-medium text-[var(--dashboard-text)]">
                  {link.createdAt.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chart */}
        <section
          className="
          rounded-3xl
          border
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-surface)]
          p-4
          sm:p-6
        "
        >
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-[var(--dashboard-text)]">
              Clicks Overview
            </h2>

            <p className="mt-1 text-sm text-[var(--dashboard-muted)]">
              Last 7 days performance
            </p>
          </div>

          <ClicksChart data={clicksPerDay} />
        </section>
      </div>
    </main>
  );
}
