import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Carousel from "@/components/sections/Carousel";
import Insights from "@/components/sections/Insights";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Hero />
      <Manifesto />
      <Features />
      <Showcase />
      <Carousel />
      <Insights />
      <Pricing />
      <Footer />
    </main>
  );
}
