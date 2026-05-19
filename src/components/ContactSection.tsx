import React, { useState } from "react";
import { 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Globe, 
  ArrowUpRight, 
  Check, 
  Send 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "3D Modeling",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectOptions = [
    "3D Modeling",
    "Rendering",
    "Motion Design",
    "Branding",
    "Web Design"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        projectType: "3D Modeling",
        message: ""
      });
      
      // Reset success status after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section 
      id="contact-section"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 py-24 border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Editorial Headers and Social Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full text-left gap-10">
          <div>
            <FadeIn delay={0} y={30}>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/40 block mb-2 font-medium">
                Got a brilliant idea?
              </span>
              <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
                Let&apos;s build <br />something
                <br />incredible
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1} y={20}>
              <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-sm mb-6 sm:mb-8 text-sm sm:text-base">
                Feel free to reach out for new freelance projects, partnerships, or just to say hello. Always excited to push creative boundaries.
              </p>
            </FadeIn>

            {/* Direct contact list */}
            <FadeIn delay={0.15} y={20} className="flex flex-col gap-4">
              <a 
                href="mailto:jack@example.com" 
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D7E2EA]" />
                  <span className="font-medium text-sm sm:text-base text-[#D7E2EA]">jack@creator3d.com</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/50 group-hover:text-white transition-colors" />
              </a>
              
              <div className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#D7E2EA]/60" />
                  <span className="text-sm font-medium text-[#D7E2EA]/60">Based globally / Remote</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Social Icons row */}
          <div>
            <FadeIn delay={0.25} y={15}>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-4">
                Follow my process
              </span>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
                  { icon: Linkedin, url: "https://linkedin.com", name: "LinkedIn" },
                  { icon: Github, url: "https://github.com", name: "GitHub" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 border border-white/10 hover:border-[#D7E2EA]/40 rounded-full flex items-center justify-center text-[#D7E2EA]"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Side: Interactive Email Form */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[40px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-16 text-center select-none"
              >
                <div className="w-16 h-16 bg-[#B600A8]/20 border border-[#B600A8] rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-[#D7E2EA] mb-2 tracking-wide">
                  Message Sent!
                </h3>
                <p className="text-[#D7E2EA]/60 max-w-xs leading-relaxed text-sm">
                  Thanks for reaching out, Jack will get back to you within 24 hours. Let&apos;s create!
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 text-left"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#0C0C0C]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-[#0C0C0C]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                  />
                </div>

                {/* Project selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-medium mb-1">
                    What can I help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: opt })}
                        className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                          formData.projectType === opt
                            ? "bg-white border-white text-[#0C0C0C]"
                            : "bg-transparent border-white/15 text-[#D7E2EA]/60 hover:text-white hover:border-[#D7E2EA]/40"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-medium">
                    Message details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision or project requirements..."
                    className="w-full bg-[#0C0C0C]/50 border border-white/10 rounded-xl p-4 text-sm text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit button inside form */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative mt-2 py-4 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:from-[#d500c4] hover:to-[#8c25cf] font-medium uppercase tracking-widest text-white text-xs sm:text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#ffffff]/10 hover:shadow-[0_0_15px_rgba(182,0,168,0.4)]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest text-[#D7E2EA]/30 uppercase">
        <span>© 2026 Jack. All rights reserved.</span>
        <span>Designed & developed for 3D portfolios.</span>
      </div>
    </section>
  );
}
