import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Links",
    value: "128",
    sub: "All time",
  },
  {
    title: "Total Clicks",
    value: "24.6K",
    sub: "All time",
  },
  {
    title: "This Week",
    value: "2.3K",
    sub: "+32%",
  },
  {
    title: "Top Link",
    value: "3.4K",
    sub: "Best performer",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-5">

      {stats.map((item) => (

        <Card
          key={item.title}
          className="rounded-2xl border-[#E6E9DE] shadow-none"
        >

          <CardContent className="p-6">

            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-[#8FE388]">
              {item.sub}
            </p>

          </CardContent>

        </Card>

      ))}

    </section>
  );
}