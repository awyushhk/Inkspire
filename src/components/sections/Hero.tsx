"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateLeft = useTransform(scrollYProgress, [0, 0.7], [0, -15]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.7], [0, 15]);
  const xLeft = useTransform(scrollYProgress, [0, 0.7], [0, -150]);
  const xRight = useTransform(scrollYProgress, [0, 0.7], [0, 150]);
  const yOffset = useTransform(scrollYProgress, [0, 0.7], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-background w-full"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Images Container */}
        <div className="relative w-[300px] md:w-[400px] aspect-[3/4] z-10">
          {/* Left Image */}
          <motion.div
            style={{ rotate: rotateLeft, x: xLeft, y: yOffset }}
            className="absolute inset-0 origin-bottom-left"
          >
            <img
              src="https://images.unsplash.com/photo-1540228232483-1b64a7024923?auto=format&fit=crop&q=80&w=800"
              alt="Fashion left"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ rotate: rotateRight, x: xRight, y: yOffset }}
            className="absolute inset-0 origin-bottom-right"
          >
            <img
              src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=80&w=800"
              alt="Fashion right"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Center Image */}
          <motion.div className="absolute inset-0 z-20">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
              alt="Fashion center"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Text Overlay */}
        <h1 className="absolute z-30 text-6xl md:text-9xl text-white font-serif tracking-tight text-center pointer-events-none mix-blend-difference">
          Your work, <br />
          <span className="italic">curated</span>.
        </h1>
      </div>
    </section>
  );
}
