import FadeIn from "./FadeIn";

const SERVICES_DATA = [
  {
    num: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="text-[#0C0C0C] font-black uppercase text-center select-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="max-w-5xl mx-auto flex flex-col">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              y={50}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${
                index === 0 ? "border-t" : ""
              }`}
            >
              {/* Service Number on Left */}
              <div 
                className="font-black leading-none text-[#0C0C0C] select-none md:w-1/4"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.num}
              </div>

              {/* Service Info on Right */}
              <div className="flex flex-col gap-2 md:w-3/4 text-left">
                <h3 
                  className="font-semibold uppercase tracking-tight text-[#0C0C0C]" 
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-75 max-w-2xl" 
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
