"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop",
    alt: "Nature - Sunlit Forest",
    title: "Silent Whispers",
  },
  {
    src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&auto=format&fit=crop",
    alt: "Village - Old World Charm",
    title: "Old World Charm",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop",
    alt: "Nature - Snowy Mountain Peaks",
    title: "Azure Peaks",
  },
];

// Left: square-ish, offset mid; Center: portrait tall, at top; Right: portrait, offset lower
const margins = ["mt-0 md:mt-28", "mt-0", "mt-0 md:mt-44"];
const heights = [
  "h-[400px] md:h-[480px]",   // left – wider square
  "h-[440px] md:h-[540px]",   // center – tallest, starts at top
  "h-[400px] md:h-[460px]",   // right – portrait, lowest start
];
const aspects = [
  "aspect-[4/3.5]",  // left: landscape-ish
  "aspect-[3/4]",    // center: portrait
  "aspect-[3/4]",    // right: portrait
];

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ys = [y1, y2, y3];

  return (
    <section
      ref={containerRef}
      className="py-32 pb-48 bg-background px-6 md:px-16 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif mb-24 text-center">
          The <span className="italic text-iris">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-xl w-full shadow-md group relative cursor-pointer ${margins[index]} ${heights[index]}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.0,
                ease: [0.76, 0, 0.24, 1],
                delay: index * 0.15,
              }}
            >
              <motion.div
                style={{ y: ys[index] }}
                className="w-full h-[160%] -mt-[30%]"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-cursor="hover"
                />
              </motion.div>

              {/* Project Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="text-white text-2xl md:text-3xl font-serif italic"
                >
                  {image.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
