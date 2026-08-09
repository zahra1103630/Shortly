import Ghost from "@/components/ui/ghost";

export default function GhostHero() {
  return (
    <div
      className="
        absolute
        left-[10px]
        top-28
        hidden
        lg:block
        rotate-[-18deg]
        pointer-events-none
      "
    >
      <Ghost size={280} mood="happy" />
    </div>
  );
}
