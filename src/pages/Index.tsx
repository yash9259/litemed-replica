import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarqueeLogos, { trustedLogos, featuredLogos } from "@/components/MarqueeLogos";
import BenefitsSection from "@/components/BenefitsSection";
import ProductShowcase from "@/components/ProductShowcase";
import CorporateGifting from "@/components/CorporateGifting";
import BlogsSection from "@/components/BlogsSection";
import FAQSection from "@/components/FAQSection";
import InstagramSection from "@/components/InstagramSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MarqueeLogos title="Trusted by leading organisations and communities" logos={trustedLogos} />
      <BenefitsSection />
      <MarqueeLogos title="As Featured In" logos={featuredLogos} speed="slow" />
      <ProductShowcase />
      <CorporateGifting />
      <BlogsSection />
      <FAQSection />
      <InstagramSection />
      <FooterSection />
    </div>
  );
};

export default Index;
