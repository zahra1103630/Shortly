import Ghost from "@/components/ui/ghost";

export default function GhostHero() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[70px]
        top-20
        z-0
        hidden
        opacity-90
        lg:block
        rotate-[-18deg]
      "
    >
      <Ghost size={400} mood="happy" />
    </div>
  );
}
