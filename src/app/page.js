import FeaturedBooks from "@/components/home/FeatureBooks";
import Hero from "@/components/home/Hero";
import LibraryMarquee from "@/components/home/LibraryMarquee";

import ReaderBenefits from "@/components/home/ReaderBenefits";
import ReaderStories from "@/components/home/ReaderStories";

export default function Home() {
  return (
    <>
      <Hero />
      <LibraryMarquee />
      <FeaturedBooks />
      <ReaderBenefits />
      <ReaderStories />
    </>
  );
}
