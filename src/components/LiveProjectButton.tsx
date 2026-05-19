import { motion } from "motion/react";

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function LiveProjectButton({ onClick, className = "", href }: LiveProjectButtonProps) {
  const content = (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-[#D7E2EA]/10 select-none cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base ${className}`}
    >
      Live Project
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
