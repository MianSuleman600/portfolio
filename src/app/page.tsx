// app/page.tsx
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Services } from "@/components/services/Services";
import {Contact} from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
  
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    
    </main>
  );
}