import Hero from "@/components/home/Hero";
import LibraryMarquee from "@/components/home/LibraryMarquee";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import ReaderBenefits from "@/components/home/ReaderBenefits";

export default function Home() {
  return (
    <>
      <Hero />
      <LibraryMarquee />
      <FeaturedBooks />
      <ReaderBenefits />
    </>
  );
}
