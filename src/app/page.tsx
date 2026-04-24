import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import Privacy from "@/components/Privacy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Value />
      <Problem />
      <Features />
      <Solution />
      <HowItWorks />
      <AppPreview />
      <Testimonials />
      <Privacy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
