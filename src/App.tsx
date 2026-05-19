import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const handleScrollToContact = () => {
    const target = document.querySelector("#contact-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased overflow-x-clip selection:bg-[#B600A8]/30 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleScrollToContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={handleScrollToContact} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact Section */}
      <ContactSection />
    </div>
  );
}
