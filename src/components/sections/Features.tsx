"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Features() {
  const [scaleAa, setScaleAa] = useState(1);
  const [gridState, setGridState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScaleAa((prev) => (prev === 1 ? 1.5 : 1));
      setGridState((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 md:px-20 bg-background max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Card 1: Typography */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-surface rounded-2xl p-8 flex flex-col justify-between col-span-1 md:col-span-2 relative overflow-hidden"
          data-cursor="hover"
        >
          <div>
            <h3 className="text-2xl font-serif">Sharp Typography</h3>
            <p className="text-secondary mt-2">Thoughtfully paired serif & sans.</p>
          </div>
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <motion.span
              animate={{ scale: scaleAa }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-9xl font-serif text-ink"
            >
              Aa
            </motion.span>
          </div>
        </motion.div>

        {/* Card 2: Speed */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-surface rounded-2xl p-8 flex flex-col justify-between col-span-1"
          data-cursor="hover"
        >
          <div>
            <h3 className="text-2xl font-serif">Blazing Fast</h3>
            <p className="text-secondary mt-2">100ms Load Time.</p>
          </div>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "circOut", repeatDelay: 0.5 }}
                className="h-full bg-lime w-full origin-left"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 3: Layouts */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-surface rounded-2xl p-8 flex flex-col justify-between col-span-1 md:col-span-3 h-[400px]"
          data-cursor="hover"
        >
          <div>
            <h3 className="text-2xl font-serif">Dynamic Layouts</h3>
            <p className="text-secondary mt-2">Grids that adapt to your story.</p>
          </div>
          <div className="flex-1 mt-6 grid gap-4 w-full h-full"
               style={{
                 gridTemplateColumns: gridState === 0 ? "1fr 1fr 1fr" : gridState === 1 ? "2fr 1fr 1fr" : "1fr 2fr 1fr",
                 gridTemplateRows: gridState === 2 ? "1fr 2fr" : "1fr 1fr"
               }}>
            <motion.div layout transition={{ duration: 0.8, type: "spring" }} className="bg-lilac/30 rounded-xl w-full h-full"></motion.div>
            <motion.div layout transition={{ duration: 0.8, type: "spring" }} className="bg-iris/20 rounded-xl w-full h-full"></motion.div>
            <motion.div layout transition={{ duration: 0.8, type: "spring" }} className="bg-ink/10 rounded-xl w-full h-full"></motion.div>
            <motion.div layout transition={{ duration: 0.8, type: "spring" }} className="bg-lime/30 rounded-xl w-full h-full col-span-2"></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
