import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Startups } from "@/components/sections/Startups";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Programs } from "@/components/sections/Programs";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/sections/ScrollToTop";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Startups />
      <Portfolio />
      <Services />
      <Programs />
      <Testimonial />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
