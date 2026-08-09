import LandingNavbar from "@/components/landing/landing-navbar";
import HeroSection from "@/components/landing/hero-section";
import FeatureList from "@/components/landing/feature-list";

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#08110d]
        text-white
      "
    >
      <div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          h-[50%]
          w-[50%]
          rounded-full
          bg-[#2d4a22]
          opacity-20
          blur-[100px]
        "
      />

      <LandingNavbar />

      <HeroSection />

      <FeatureList />
    </main>
  );
}
