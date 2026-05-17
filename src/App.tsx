import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import IndustriesGrid from "@/components/IndustriesGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { videoFeatures, services } from "@/lib/content";

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header onContact={() => scrollTo("contact")} />
      <main>
        <Hero onContact={() => scrollTo("contact")} />

        <Section id="video-security">
          <SectionHeader
            title="Video security that actually works."
            lead="Clear footage. Reliable recording. Systems designed for your property's real conditions — not a showroom demo."
          />
          <FeatureGrid items={videoFeatures} />
        </Section>

        <Section id="services" tone="section">
          <SectionHeader
            title="Services."
            lead="Whether you have an existing system or are starting fresh, we offer focused engagements that meet you where you are."
          />
          <FeatureGrid items={services} />
        </Section>

        <Section id="industries" tone="section">
          <SectionHeader
            title="Built for real properties."
            lead="We design systems based on how your property actually operates."
          />
          <IndustriesGrid />
        </Section>

        <Section id="contact" tone="section">
          <SectionHeader
            title="Let's take a look at your property."
            lead="If you're dealing with unreliable WiFi, outdated cameras, or no clear system plan — we'll evaluate it and give you a straightforward recommendation."
          />
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
