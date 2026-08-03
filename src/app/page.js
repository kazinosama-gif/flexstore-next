import Hero from "@/components/home/Hero";
import BrandLogos from "@/components/home/BrandLogos";

import Features from "@/components/features/Features";
import ProductShowcase from "@/components/showcase/ProductShowcase";

import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";

import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="brands">
        <BrandLogos />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="dashboard">
        <ProductShowcase />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}