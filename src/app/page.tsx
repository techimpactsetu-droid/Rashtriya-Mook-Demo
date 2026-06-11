import HeroSection from "@/components/home/HeroSection";
import ImpactCounters from "@/components/home/ImpactCounters";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import VocationalSection from "@/components/home/VocationalSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import GallerySection from "@/components/home/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactCounters />
      <AboutSection />
      <ProgramsSection />
      <VocationalSection />
      <SuccessStoriesSection />
      <GallerySection />
    </>
  );
}
