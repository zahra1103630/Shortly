import { Skeleton } from "@/components/ui/skeleton";

export default function LinkDetailLoading() {
  return (
    <main className="space-y-6">
      <Skeleton className="h-8 w-40" />

      <div
        className="
          rounded-2xl
          border
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-surface)]
          p-6
        "
      >
        <div className="space-y-5">
          <div>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-3 h-5 w-40" />
          </div>

          <div>
            <Skeleton className="h-4 w-28" />
            <Skeleton className="mt-3 h-5 w-full" />
          </div>

          <div className="flex gap-10">
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-3 h-8 w-16" />
            </div>

            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-3 h-5 w-28" />
            </div>
          </div>
        </div>
      </div>

      {/* Chart skeleton */}
      <div
        className="
          rounded-2xl
          border
          border-[var(--dashboard-border)]
          bg-[var(--dashboard-surface)]
          p-6
        "
      >
        <Skeleton className="h-[280px] w-full" />
      </div>
    </main>
  );
}
