import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";

const PROJECTS_DATA = [
  {
    num: "01",
    name: "Nextlevel Studio",
    category: "Client Work",
    link: "https://motionsites.ai",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    num: "02",
    name: "Aura Brand Identity",
    category: "Personal Work",
    link: "https://motionsites.ai",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    num: "03",
    name: "Solaris Digital",
    category: "Client Work",
    link: "https://motionsites.ai",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

function ProjectCard({ project, index, totalCards }: { project: any; index: number; totalCards: number; key?: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside container of this card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Scale down beautifully as scroll progress reaches the end
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full mb-10 md:mb-16 select-none"
      style={{
        zIndex: index + 10,
        // Card offset by top: index * 28px
        top: `calc(90px + ${index * 28}px)`
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: "transform"
        }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
      >
        {/* Top elements row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-4 md:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            <span className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black leading-none text-[#D7E2EA]/10 select-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/50">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>
          <div>
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom elements row - Grid of Images */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 md:gap-4 flex-1 mt-6">
          {/* Column 1 (40% width / 4 grid columns) */}
          <div className="md:col-span-4 flex flex-col gap-3 md:gap-4 justify-between">
            <div 
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141414] shadow-md border border-[rgba(215,226,234,0.05)]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.img1}
                alt={`${project.name} secondary preview 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover block select-none hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div 
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141414] shadow-md border border-[rgba(215,226,234,0.05)]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.img2}
                alt={`${project.name} secondary preview 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover block select-none hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 2 (60% width / 6 grid columns) */}
          <div className="md:col-span-6 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141414] shadow-lg border border-[rgba(215,226,234,0.05)] h-auto min-h-[290px] md:min-h-auto flex items-stretch">
            <img
              src={project.img3}
              alt={`${project.name} primary showcase preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover block select-none hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 pt-20 pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-20 overflow-visible"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2 
            className="hero-heading font-black uppercase tracking-tight leading-none select-none text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky cards column track */}
        <div className="max-w-5xl mx-auto relative flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.num} 
              project={project} 
              index={index} 
              totalCards={PROJECTS_DATA.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
