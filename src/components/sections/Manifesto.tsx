"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Line 1 reveals: [0.05 → 0.25], then wipes backwards (right-to-left): [0.3 → 0.48]
  const clipPath1 = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.3, 0.48, 1],
    [
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",    // Hidden (left edge)
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Fully Visible
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Stay Visible
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",     // Hidden backwards (collapses back to left)
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"      // Locked Hidden
    ]
  );

  // Line 2 reveals: [0.3 → 0.5]
  const clipPath2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 1],
    [
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",   // Hidden
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Fully Visible
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"  // Locked Visible
    ]
  );

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      {/* Sticky content — stays centered while user scrolls through 500vh */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">

          {/* Line 1 */}
          <div className="relative inline-block w-full mb-2">
            <h2 className="text-5xl md:text-8xl font-serif text-gray-200 leading-tight select-none">
              Stop building websites.
            </h2>
            <motion.h2
              className="text-5xl md:text-8xl font-serif leading-tight absolute inset-0 select-none will-change-[clip-path] z-20"
              style={{ clipPath: clipPath1 }}
            >
              <span className="bg-gradient-to-r from-ink via-iris to-ink bg-clip-text text-transparent">
                Stop building websites.
              </span>
            </motion.h2>
          </div>

          {/* Line 2 */}
          <div className="relative inline-block w-full">
            <h2 className="text-5xl md:text-8xl font-serif text-gray-200 leading-tight italic select-none">
              Start telling stories.
            </h2>
            <motion.h2
              className="text-5xl md:text-8xl font-serif leading-tight italic absolute inset-0 select-none will-change-[clip-path] z-20"
              style={{ clipPath: clipPath2 }}
            >
              <span className="bg-gradient-to-r from-ink via-iris to-ink bg-clip-text text-transparent">
                Start telling stories.
              </span>
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-secondary font-serif italic mt-12 relative z-10"
          >
            The platform for narrative-driven creatives.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
