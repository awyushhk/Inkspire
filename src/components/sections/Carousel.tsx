"use client";

import { motion } from "framer-motion";

const screenshots = [
  "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=800&auto=format&fit=crop",
];

export default function Carousel() {
  return (
    <section className="py-32 bg-iris overflow-hidden flex flex-col justify-center">
      <div className="mb-16 text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-serif">
          Endless <span className="italic text-lime">Inspiration</span>
        </h2>
      </div>

      <div className="relative flex w-[200%] md:w-[150%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex space-x-8 px-4"
        >
          {/* Duplicate array for seamless infinite scroll */}
          {[...screenshots, ...screenshots].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3]">
              <img
                src={src}
                alt={`Portfolio screenshot ${index}`}
                className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
