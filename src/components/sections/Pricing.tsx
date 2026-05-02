"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-20 bg-background max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif">
          Join the <span className="italic text-iris">Movement</span>
        </h2>
        <p className="text-secondary mt-4">Simple, transparent pricing for creators.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-surface/50 rounded-full blur-3xl -z-10" />

        {/* Basic Ticket */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative bg-white border border-ink/10 shadow-xl"
          style={{
            // Serrated edge mask on top and bottom, solid center
            WebkitMaskImage: "radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px), linear-gradient(black, black)",
            WebkitMaskSize: "20px 20px, 20px 20px, 100% calc(100% - 40px)",
            WebkitMaskRepeat: "repeat-x, repeat-x, no-repeat",
            WebkitMaskPosition: "top, bottom, center",
            maskImage: "radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px), linear-gradient(black, black)",
            maskSize: "20px 20px, 20px 20px, 100% calc(100% - 40px)",
            maskRepeat: "repeat-x, repeat-x, no-repeat",
            maskPosition: "top, bottom, center",
            padding: "40px 0",
          }}
        >
          <div className="px-10 pb-8 border-b-2 border-dotted border-ink/20">
            <h3 className="text-xl text-secondary uppercase tracking-widest font-sans mb-4">Standard</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-serif text-ink">$19</span>
              <span className="text-secondary">/month</span>
            </div>
          </div>
          <div className="px-10 pt-8 pb-4">
            <ul className="space-y-4">
              {["Unlimited stories", "Custom typography", "Standard support", "Lenis scrolling"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-ink/80">
                  <Check className="w-5 h-5 text-lime" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-10 py-4 bg-surface text-ink rounded-full font-medium hover:bg-ink hover:text-white transition-colors">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Pro Ticket */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative bg-ink text-white shadow-2xl"
          style={{
            // Serrated edge mask on top and bottom, solid center
            WebkitMaskImage: "radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px), linear-gradient(black, black)",
            WebkitMaskSize: "20px 20px, 20px 20px, 100% calc(100% - 40px)",
            WebkitMaskRepeat: "repeat-x, repeat-x, no-repeat",
            WebkitMaskPosition: "top, bottom, center",
            maskImage: "radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px), linear-gradient(black, black)",
            maskSize: "20px 20px, 20px 20px, 100% calc(100% - 40px)",
            maskRepeat: "repeat-x, repeat-x, no-repeat",
            maskPosition: "top, bottom, center",
            padding: "40px 0",
          }}
        >

          <div className="px-10 pb-8 border-b-2 border-dotted border-white/20">
            <h3 className="text-xl text-lilac uppercase tracking-widest font-sans mb-4">Pro</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-serif">$49</span>
              <span className="text-white/60">/month</span>
            </div>
          </div>
          <div className="px-10 pt-8 pb-4">
            <ul className="space-y-4">
              {["Everything in Standard", "Custom domain", "Priority support", "Advanced analytics", "Collaboration tools"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-lime" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-10 py-4 bg-iris text-white rounded-full font-medium hover:bg-lilac hover:text-ink transition-colors">
              Go Pro
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
