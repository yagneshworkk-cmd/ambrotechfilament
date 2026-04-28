import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FeatureBar from "@/components/FeatureBar";
import Products from "@/components/Products";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import QualityStrip from "@/components/QualityStrip";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Ticker />
      <FeatureBar />
      <Products />
      <About />
      <Stats />
      <Industries />
      <WhyChoose />
      <Process />
      <QualityStrip />
      <CTA />
      <Footer />
    </>
  );
}
