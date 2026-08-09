import { Zap, Sparkles, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time stats",
  },
  {
    icon: Sparkles,
    title: "Custom slugs",
  },
  {
    icon: Lock,
    title: "Secure & reliable",
  },
];

export default function FeatureList() {
  return (
    <div
      className="
flex
flex-wrap
items-center
justify-center
gap-6
mt-8
text-gray-400
text-sm
"
    >
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div key={feature.title} className="flex items-center gap-2">
            <div
              className="
p-1
bg-[#1f2a24]
rounded-md
"
            >
              <Icon size={14} className="text-[#b6f77d]" />
            </div>

            {feature.title}
          </div>
        );
      })}
    </div>
  );
}
