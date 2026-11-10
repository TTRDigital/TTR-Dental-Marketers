import { BookingProvider } from "@/components/BookingModal";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, Offer, Process, Results, Stats, Story, TrustRow } from "@/components/Sections";

export default function HomePage() {
  return (
    <BookingProvider>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <Offer />
        <Stats />
        <Results />
        <Story />
        <Process />
        <CtaBlock />
        <Faq />
      </main>
      <Footer />
    </BookingProvider>
  );
}
