import { useRef, useEffect } from "react";

const ROW1_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const ROW2_IMAGES = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

// Tripled lists for seamless scrolling coverage
const ROW1_TRIPLED = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2_TRIPLED = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        // Row 1: moves RIGHT on scroll (translateX(offset - 200))
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        // Row 2: moves LEFT on scroll (translateX(-(offset - 200)))
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    const onScrollPassive = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScrollPassive, { passive: true });
    // Run initial computation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScrollPassive);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {/* Row 1 Wrapper with offset starting left */}
        <div className="overflow-visible w-full flex">
          <div
            ref={row1Ref}
            style={{ willChange: "transform" }}
            className="flex gap-3 md:gap-4 transition-transform duration-75 ease-out whitespace-nowrap -translate-x-[500px]"
          >
            {ROW1_TRIPLED.map((url, index) => (
              <div
                key={`r1-${index}`}
                className="inline-block flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] bg-[#141414] rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={url}
                  alt={`Design portfolio preview row1 item ${index}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover block select-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Wrapper */}
        <div className="overflow-visible w-full flex">
          <div
            ref={row2Ref}
            style={{ willChange: "transform" }}
            className="flex gap-3 md:gap-4 transition-transform duration-75 ease-out whitespace-nowrap translate-x-[200px]"
          >
            {ROW2_TRIPLED.map((url, index) => (
              <div
                key={`r2-${index}`}
                className="inline-block flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] bg-[#141414] rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={url}
                  alt={`Design portfolio preview row2 item ${index}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover block select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
