import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyCommercialSection from '../components/home/WhyCommercialSection';
import ProjectsSection from '../components/home/ProjectsSection';
import FooterCTA from '../components/home/FooterCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyCommercialSection />
      <ProjectsSection />
      <FooterCTA />
    </>
  );
}
