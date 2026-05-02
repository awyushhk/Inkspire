"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  // Animate clip-path to reveal the dark text over the light text
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section ref={containerRef} className="pt-60 pb-40 px-6 md:px-20 bg-background relative flex items-center justify-center min-h-screen">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Faint Text */}
        <h2 className="text-5xl md:text-8xl font-serif text-gray-200 leading-tight absolute inset-0">
          Stop building websites. <br />
          <span className="italic">Start telling stories.</span>
        </h2>
        
        {/* Dark Text with Purple Gradient Mask */}
        <motion.h2 
          className="text-5xl md:text-8xl font-serif leading-tight relative z-10"
          style={{ clipPath }}
        >
          <span className="bg-gradient-to-r from-ink via-iris to-ink bg-clip-text text-transparent">
            Stop building websites. <br />
            <span className="italic">Start telling stories.</span>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-secondary font-serif italic mt-8 relative z-10">
          The platform for narrative-driven creatives.
        </p>
      </div>
    </section>
  );
}
