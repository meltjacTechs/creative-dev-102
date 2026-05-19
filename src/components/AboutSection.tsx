import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const paragraphText = 
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 1. Decorative 3D Corner Items */}
      {/* Top-Left Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D decorative moon"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D decorative orb"
          referrerPolicy="no-referrer"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
        />
      </FadeIn>

      {/* Top-Right Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D decorative lego"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
        />
      </FadeIn>

      {/* Bottom-Right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D decorative group"
          referrerPolicy="no-referrer"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
        />
      </FadeIn>

      {/* 2. Main Center Content Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl text-center w-full">
        
        {/* About heading with FadeIn */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight select-none mb-10 sm:mb-14 md:mb-16"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character scroll animation paragraph */}
        <div className="w-full flex justify-center px-4 sm:px-6 mb-16 sm:mb-20 md:mb-24">
          <AnimatedText 
            text={paragraphText} 
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] tracking-wide select-none"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" } as any}
          />
        </div>

        {/* Contact button below */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
