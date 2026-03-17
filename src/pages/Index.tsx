import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import ExperienceSection from "@/components/ExperienceSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TrainersSection from "@/components/TrainersSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <ExperienceSection />
      <FacilitiesSection />
      <TrainersSection />
      <MembershipSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
