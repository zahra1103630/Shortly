"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import GhostHero from "./ghost-hero";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-[80vh]
        flex-col
        justify-center
        overflow-hidden
        px-10
      "
    >
      <GhostHero />

      <div className="relative z-10">
        <h1
          className="
            max-w-3xl
            text-5xl
            font-bold
            tracking-tight
            leading-tight
            md:text-7xl
          "
        >
          Links that <span className="text-white">feel</span>{" "}
          <span className="text-[#b6f77d]">alive</span>
        </h1>

        <p
          className="
            mt-5
            max-w-lg
            text-lg
            text-gray-400
            md:text-xl
          "
        >
          Shorten, share and track your links with a tool that has actual
          personality.
        </p>

        <div
          className="
            mt-8
            flex
            w-full
            max-w-xl
            gap-2
            rounded-2xl
            bg-white
            p-1.5
            shadow-xl
          "
        >
          <Input
            placeholder="Paste a long link"
            disabled
            className="
              h-12
              border-0
              bg-transparent
              text-black
              focus-visible:ring-0
            "
          />

          <Link href="/login" className="flex shrink-0 items-center">
            <Button
              className="
                rounded-xl
                bg-[#b6f77d]
                px-6
                text-[#0b110f]
                hover:bg-[#a3df6b] cursor-pointer
              "
            >
              Shorten it
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        <p
          className="
            mt-6 px-2
            text-sm
            text-gray-500
          "
        >
          No credit card required • Start for free
        </p>
      </div>
    </section>
  );
}
