import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  key?: any;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Distribute the character fade-in ranges throughout the 0 -> 1 progress of the container
  const start = index / total;
  // Let each character take some scroll length to fade in smoothly
  const end = Math.min((index + 10) / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible placeholder to reserve exact space */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span style={{ opacity }} className="absolute top-0 left-0 select-none">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p 
      ref={containerRef} 
      style={style}
      className={`relative flex flex-wrap justify-center text-center ${className}`}
    >
      {characters.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
