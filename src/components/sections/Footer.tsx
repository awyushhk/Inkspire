"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-[#EBE4F9] to-[#D4C5F5] pt-32 pb-16 px-6 md:px-20 overflow-hidden min-h-[600px] flex flex-col justify-between">
      {/* Soft radial purple glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#C9B8F0] rounded-full blur-[140px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        {/* Giant Logo */}
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl md:text-9xl font-serif text-ink tracking-tight mb-6">
            Inkspire.
          </h2>
          <p className="text-secondary max-w-sm text-2xl font-serif italic">
            Crafted for those who view the web as a canvas, not a container.
          </p>
        </div>

        {/* Links and Form */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end gap-16 md:gap-32">
          {/* Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-sm tracking-widest uppercase text-secondary font-semibold">Menu</h4>
            <nav className="flex flex-col gap-4">
              {["Templates", "Showcase", "Pricing", "Login"].map((link) => (
                <a key={link} href="#" className="text-ink text-xl hover:text-iris transition-colors relative group">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iris transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Email Signup */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <h4 className="font-sans text-sm tracking-widest uppercase text-secondary font-semibold">Stay Inspired</h4>
            <div className="relative w-full md:w-[300px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-ink/20 py-4 pr-12 text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-ink hover:text-white rounded-full transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-secondary mt-2">No spam. Only art.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto w-full mt-32 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ink/10 relative z-10 text-sm text-secondary">
        <p>&copy; {new Date().getFullYear()} Inkspire. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
