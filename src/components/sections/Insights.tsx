"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "The Death of 3D Web",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Typography as Interface",
    category: "Typography",
    image: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Embracing the Void",
    category: "Layout",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Motion in 2D Space",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Insights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-40 px-6 md:px-20 bg-background relative cursor-crosshair">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif mb-16">
          Latest <span className="italic text-iris">Insights</span>
        </h2>

        <div 
          className="border-t border-ink/10 relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="border-b border-ink/10 relative group overflow-hidden"
              whileHover={{ paddingBlock: "2rem", backgroundColor: "var(--color-surface)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ paddingBlock: "1.5rem" }}
            >
              <a href="#" className="flex items-center justify-between z-10 relative">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                  <span className="text-sm text-secondary uppercase tracking-widest">{article.category}</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-ink">{article.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          ))}

          {/* Floating Image */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-0 left-0 w-64 h-80 pointer-events-none z-50 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  x: mousePos.x + 20,
                  y: mousePos.y - 160,
                }}
              >
                <img
                  src={articles[hoveredIndex].image}
                  alt={articles[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
