import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingProvider } from "@/components/BookingModal";

export default function NotFound() {
  return (
    <BookingProvider>
      <Header />
      <main className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl">That page doesn’t exist.</h1>
        <p className="mt-4 max-w-md text-body">The link may be old. Head back to the home page to book your free strategy call.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </main>
      <Footer />
    </BookingProvider>
  );
}
