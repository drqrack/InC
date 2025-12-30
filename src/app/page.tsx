import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
