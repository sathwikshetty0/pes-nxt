"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white dark:bg-[#0f0f0f] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center"
          >
            <Image
              src="/logos/pesnext-logo.png"
              alt="PES NEXT"
              width={120}
              height={36}
              className={`transition-all ${
                scrolled ? "" : "brightness-0 invert"
              } dark:brightness-0 dark:invert`}
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all ${
                    activeSection === link.href.replace("#", "")
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  } ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-200 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Apply button (desktop) */}
          <a
            href="/apply"
            className={`hidden md:inline-block text-sm font-semibold rounded-full px-5 py-2 transition-all ${
              scrolled
                ? "bg-accent text-white hover:bg-accent-light"
                : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            Apply
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white text-2xl font-semibold hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/apply"
            className="mt-4 bg-accent text-white font-semibold rounded-full px-6 py-3 hover:bg-accent-light transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </>
  );
}
