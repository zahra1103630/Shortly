import LandingNavbar from "@/components/landing/landing-navbar";
import HeroSection from "@/components/landing/hero-section";
import FeatureList from "@/components/landing/feature-list";

export default function Home() {
  return (
    <div
      className="
min-h-screen
w-full
bg-[#0b110f]
relative
overflow-hidden
flex
flex-col
"
    >
      <div
        className="
absolute
top-[-20%]
left-[-10%]
w-[60%]
h-[60%]
bg-[#4c7a38]
rounded-full
blur-[120px]
opacity-20
"
      />

      <div
        className="
absolute
bottom-[-20%]
right-[-10%]
w-[50%]
h-[50%]
bg-[#2d4a22]
rounded-full
blur-[100px]
opacity-20
"
      />

      <LandingNavbar />

      <HeroSection />

      <FeatureList />
    </div>
  );
}
