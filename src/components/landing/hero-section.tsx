"use client";

import { ArrowRight } from "lucide-react";
import GhostHero from "./ghost-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section
      className="
      relative
      z-10
      flex-1
      flex
      flex-col
      items-center
      justify-center
      px-6
      text-center
      pb-10
      "
    >
      <GhostHero />

      {/* mobile ghost */}
      <div className="mb-5 lg:hidden">
        <GhostHero />
      </div>

      <h1
        className="
        text-5xl
        md:text-7xl
        font-bold
        tracking-tight
        leading-tight
        max-w-3xl
        "
      >
        Links that <span className="text-white">feel</span>{" "}
        <span className="text-[#b6f77d]">alive</span>
      </h1>

      <p
        className="
        mt-5
        text-gray-400
        text-lg
        md:text-xl
        max-w-lg
        "
      >
        Shorten, share and track your links with a tool that has actual
        personality.
      </p>

      <div
        className="
        mt-8
        w-full
        max-w-xl
        bg-white
        rounded-2xl
        p-1.5
        flex
        gap-2
        shadow-xl
        "
      >
        <Input
          placeholder="Paste a long link"
          className="
          border-0
          text-black
          focus-visible:ring-0
          "
        />

        <Button
          className="
          bg-[#b6f77d]
          text-[#0b110f]
          rounded-xl
          px-6
          hover:bg-[#a3df6b]
          "
        >
          Shorten it
          <ArrowRight size={18} />
        </Button>
      </div>

      <p
        className="
        mt-6
        text-sm
        text-gray-500
        "
      >
        No credit card required • Start for free
      </p>
    </section>
  );
}
