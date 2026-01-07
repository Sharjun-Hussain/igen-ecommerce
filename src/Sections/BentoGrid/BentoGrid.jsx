"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Smartphone,
  Headphones,
  BatteryCharging,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Mobile Shop Data ---
const bentoItems = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    subtitle: "Titanium Series",
    description:
      "Experience the lightest, most durable design with the A17 Pro chip.",
    colSpan: "col-span-1 md:col-span-12 lg:col-span-8",
    rowSpan: "row-span-1 md:row-span-2",
    gradient: "from-slate-800 via-zinc-700 to-neutral-600",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Premium Audio",
    subtitle: "Noise Cancelling",
    description: "Immersive sound with new Galaxy Buds & AirPods.",
    colSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    rowSpan: "row-span-1",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: <Headphones className="w-6 h-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Power & Charging",
    subtitle: "MagSafe & Type-C",
    description: "20W fast chargers and 10,000mAh power banks.",
    colSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    rowSpan: "row-span-1",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    icon: <BatteryCharging className="w-6 h-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Gaming Beasts",
    subtitle: "144Hz & Snapdragon",
    description: "ROG & RedMagic phones for ultimate mobile gaming.",
    colSpan: "col-span-1 md:col-span-6",
    rowSpan: "row-span-1",
    gradient: "from-red-600 via-orange-600 to-amber-500",
    icon: <Cpu className="w-6 h-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Protection",
    subtitle: "Cases & Tempered Glass",
    description: "Military-grade drop protection for every model.",
    colSpan: "col-span-1 md:col-span-6",
    rowSpan: "row-span-1",
    gradient: "from-blue-600 via-indigo-700 to-violet-800",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function MobileBentoGrid() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".bento-card",
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 }
      );
    },
    { scope: containerRef }
  );

  return (
    // Changed: bg-zinc-50 (Light) / dark:bg-zinc-950 (Dark)
    // Changed: text-zinc-900 (Light) / dark:text-white (Dark)
    <section className="w-full py-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex flex-col gap-3">
            <span className="text-blue-600 dark:text-blue-500 font-semibold tracking-wider uppercase text-sm">
              Level Up Your Tech
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Next Gen{" "}
              <span className="text-zinc-400 dark:text-zinc-500">Mobile.</span>
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-right md:text-left text-lg leading-relaxed">
            Discover the latest flagships, premium accessories, and
            high-performance gear. Upgrade your digital lifestyle today.
          </p>
        </div>

        {/* Grid Container */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]"
        >
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                // Card Base:
                // Light Mode: bg-zinc-100 border-zinc-200
                // Dark Mode: dark:bg-zinc-900 dark:border-zinc-800
                "bento-card group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 cursor-pointer",
                "transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50",
                item.colSpan,
                item.rowSpan
              )}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-80 dark:group-hover:opacity-60"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay (Base) - Keeps text readable in Light Mode too */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

              {/* Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out bg-gradient-to-br mix-blend-multiply",
                  item.gradient
                )}
              />

              {/* Content Container - Always White Text for Image Contrast */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-20">
                {/* Top Row: Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-black/20 dark:bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-inner">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/10 text-white uppercase tracking-wider shadow-sm">
                    {item.subtitle}
                  </span>
                </div>

                {/* Bottom Row: Text Info */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    {item.title}
                  </h3>

                  <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                    <p className="text-zinc-100 dark:text-zinc-200 text-sm sm:text-base pt-2 pb-2 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Arrow (Bottom Right) */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-75">
                  <div className="p-3 rounded-full bg-white text-black shadow-xl hover:bg-zinc-200 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
