import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import PatternDivider from "@/components/PatternDivider";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PatternDivider />
      <Container>
        <Stats />

        <Section
          id="about"
          title="Meet Aubriell"
          description="Your Licensed Esthetician in Grand Forks, ND"
        >
          <About />
        </Section>

        <Section
          id="services"
          title="Services & Pricing"
          description="Every treatment offered, with real pricing — no surprises."
        >
          <Services />
        </Section>

        <FAQ />

        <Section
          id="contact"
          title="Visit or Book Online"
          description="Grand Forks, ND — book online any time."
        >
          <Contact />
        </Section>

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
