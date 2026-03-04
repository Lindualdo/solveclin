import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Integrations />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
