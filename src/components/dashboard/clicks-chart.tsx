"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    date: string;
    count: number;
  }[];
}

export default function ClicksChart({ data }: Props) {
  return (
    <div
      className="
      h-[240px]
      w-full
      max-w-full
      overflow-hidden
      rounded-3xl
      border
      border-[var(--dashboard-border)]
      bg-[var(--dashboard-surface)]
      p-4
      sm:h-[320px]
      sm:p-6
      "
    >
      <h3
        className="
        mb-4
        text-base
        font-semibold
        text-[var(--dashboard-text)]
        sm:mb-6
        sm:text-lg
        "
      >
        Clicks last 7 days
      </h3>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ left: -20, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" tick={{ fontSize: 12 }} />

          <YAxis tick={{ fontSize: 12 }} width={35} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="count"
            stroke="#4ade80"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
