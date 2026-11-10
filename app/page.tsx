import { BookingProvider } from "@/components/BookingModal";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, Process, Results, StopAds, ThreeSteps, WhyTtr } from "@/components/Sections";

export default function HomePage() {
  return (
    <BookingProvider>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <StopAds />
        <WhyTtr />
        <Results />
        <ThreeSteps />
        <Process />
        <CtaBand />
        <Faq />
      </main>
      <Footer />
    </BookingProvider>
  );
}
