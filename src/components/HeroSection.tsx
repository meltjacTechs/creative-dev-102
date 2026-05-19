import React from "react";
import { motion } from "motion/react";
import Magnet from "./Magnet";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Price", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact-section" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#contact-section") {
      onContactClick();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Subtle Grid Overlay and Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#0C0C0C_70%)] opacity-40 z-0 pointer-events-none" />
      
      {/* Decorative Background Indicator (Hint at Marquee) */}
      <div className="absolute bottom-24 left-0 w-full h-[1px] bg-white/10 pointer-events-none z-10" />

      {/* 1. Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full z-30">
        <div className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 bg-gradient-to-b from-[#0C0C0C] to-transparent pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70"
            >
              {link.name}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* 2. Hero Heading (Behind Portrait) */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-4 sm:px-8 z-0">
        <div className="w-full overflow-hidden text-center z-0">
          <FadeIn as="div" delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 3. Hero Portrait (Centered absolute Layered in index-10) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <FadeIn delay={0.6} y={30} duration={0.9} className="pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
          >
            <div className="relative group overflow-hidden rounded-b-none rounded-t-[100px] border-b-0 border-[#D7E2EA]/10 shadow-2xl">
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack portrait"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover block select-none drop-shadow-3xl transform transition-transform duration-500 hover:scale-[1.02]"
              />
              {/* Subtle tech ambient back glow */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn delay={0.35} y={20} className="w-1/2 flex justify-start">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left self-end max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="w-1/2 flex justify-end">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
