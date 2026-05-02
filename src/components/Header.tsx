"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference text-white pointer-events-none">
      <div className="font-serif text-3xl font-bold tracking-tight">
        Inkspire.
      </div>
      <button className="pointer-events-auto border border-white/30 rounded-full px-6 py-2 text-sm font-sans hover:bg-white hover:text-black transition-colors" data-cursor="hover">
        Get Started
      </button>
    </header>
  );
}
