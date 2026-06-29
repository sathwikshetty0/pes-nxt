"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimal?: boolean;
  label: string;
}

const STATS: StatItem[] = [
  { value: 9000, suffix: "+", label: "Sq Ft Innovation Space" },
  { value: 14, suffix: "", label: "Startup Teams Supported" },
  { value: 2.2, suffix: "L+", prefix: "₹", decimal: true, label: "Seed Grants Disbursed" },
  { value: 4, suffix: "", label: "Teams Selected for Incubation" },
];

function AnimatedNumber({ item, animate }: { item: StatItem; animate: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const start = performance.now();
    const target = item.value;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (item.decimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [animate, item]);

  return (
    <span>
      {item.prefix ?? ""}
      {display}
      {item.suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary dark:bg-[#111] py-16">
      <div className="max-w-content mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber item={stat} animate={animate} />
            </p>
            <p className="text-white/70 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
