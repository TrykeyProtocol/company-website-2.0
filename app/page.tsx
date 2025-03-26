import AdvantagesSection from "@/library/components/organisms/advantages";
import Footer from "@/library/components/organisms/footer";
import HowItWorksSection from "@/library/components/organisms/how-it-works";
import LandingSection from "@/library/components/organisms/landing-hero";
import Navbar from "@/library/components/organisms/navbar";
import NewsLetterSection from "@/library/components/organisms/news-letter";
import UniquePropositionSection from "@/library/components/organisms/unique-proposition";
import FeaturesSection from "@/library/components/organisms/feature";
import FAQSection from "@/library/components/organisms/faq";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <LandingSection />
        <div id="features">
          <FeaturesSection />
        </div>
        {/* <div id="about-us"> */}
        <AdvantagesSection />
        {/* </div> */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <FAQSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </div>
  );
}
