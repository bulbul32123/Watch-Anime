import Hero from "@/components/home/Hero";
import PopularSection from "@/components/home/popularsection/PopularSection";
import TrendingSection from "@/components/home/bestsection/BestSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <PopularSection />
      <TrendingSection />
    </main>
  );
}
