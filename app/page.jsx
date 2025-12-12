import MainHeader from "@/components/headers/MainHeader";
import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUsSection from "@/components/sections/WhyUsSection";
import EmergencyStrip from "@/components/sections/EmergencyStrip";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/buttons/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary-950 font-sans selection:bg-secondary-500 selection:text-black">
      <MainHeader />

      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesGrid />
        <EmergencyStrip />
        <ProcessSection />
        <WhyUsSection />
        <AboutSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}