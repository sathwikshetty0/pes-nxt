"use client";

import { useCallback, useState, useEffect } from "react";

const HERO_IMAGES = [
  "/hero/hero-1.png",
  "/hero/hero-2.png",
  "/hero/hero-3.png",
  "/hero/hero-4.png",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images — stacked, crossfade */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center animate-kenburns transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Fallback color */}
      <div className="absolute inset-0 bg-primary -z-10" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-[3px] text-white/70 mb-5 font-medium">
          Welcome to PES NEXT
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-10">
          Empowering Innovators and Entrepreneurs of the Mandya Region
        </h1>
        <button
          onClick={() => scrollTo("#about")}
          className="bg-accent text-white font-semibold rounded-full px-8 py-4 hover:opacity-90 transition-opacity"
        >
          Explore More
        </button>
      </div>
    </section>
  );
}
