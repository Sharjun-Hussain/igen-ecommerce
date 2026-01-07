"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Cpu,
  Zap,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Enhanced Product Data ---
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 128,
    // Two images for hover effect
    imageFront:
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600",
    imageBack:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
    colors: ["#3f3f46", "#f4f4f5", "#2563eb"], // Hex codes for dots
    specs: { storage: "256GB", ram: "8GB", network: "5G" },
    tag: "Titanium",
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 94,
    imageFront:
      "https://images.unsplash.com/photo-1610945415295-d96bf067153c?auto=format&fit=crop&q=80&w=600",
    imageBack:
      "https://images.unsplash.com/photo-1610945265064-f3947e720ba0?auto=format&fit=crop&q=80&w=600",
    colors: ["#000000", "#fbbf24", "#e5e7eb"],
    specs: { storage: "512GB", ram: "12GB", network: "5G" },
    tag: "AI Ready",
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    reviews: 82,
    imageFront:
      "https://images.unsplash.com/photo-1698696884697-768a86561230?auto=format&fit=crop&q=80&w=600",
    imageBack:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
    colors: ["#bae6fd", "#171717", "#fef3c7"],
    specs: { storage: "128GB", ram: "12GB", network: "5G" },
    tag: "Best Camera",
  },
  {
    id: 4,
    name: "Sony Xperia 1 V",
    brand: "Sony",
    price: 1399,
    originalPrice: null, // No discount
    rating: 4.6,
    reviews: 45,
    imageFront:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
    imageBack:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
    colors: ["#18181b", "#166534"],
    specs: { storage: "256GB", ram: "12GB", network: "4K OLED" },
    tag: "Pro Media",
  },
  {
    id: 5,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 699,
    originalPrice: 750,
    rating: 4.8,
    reviews: 156,
    imageFront:
      "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&q=80&w=600",
    imageBack:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
    colors: ["#ffffff", "#52525b"],
    specs: { storage: "256GB", ram: "12GB", network: "Glyph" },
    tag: "Unique",
  },
];

export default function TrendingSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(
    () => {
      // Background Parallax
      gsap.fromTo(
        ".bg-grid-pattern",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 0.4,
          duration: 1.5,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  // Scroll Helpers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* --- DECORATIVE BACKGROUND --- */}
      {/* Fading Gradient from top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-950 z-10" />

      {/* Subtle Grid Pattern */}
      <div
        className="bg-grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(to right, #9ca3af 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase text-xs mb-2 block">
              Weekly Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-3">
              Trending Devices
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg">
              Top-rated smartphones and gear selected by our tech experts.
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-16 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group min-w-[300px] md:min-w-[340px] snap-center relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-500"
            >
              {/* --- IMAGE AREA --- */}
              <div className="relative h-[320px] bg-zinc-100 dark:bg-zinc-950/50 overflow-hidden p-6 flex items-center justify-center">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white dark:bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all shadow-sm">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Main Images (Swap on Hover) */}
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                  {/* Front Image */}
                  <img
                    src={product.imageFront}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Back Image (Revealed on Hover) */}
                  <img
                    src={product.imageBack}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-110"
                  />
                </div>

                {/* Quick View Button (Slide Up on Hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-black/80 backdrop-blur-md text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-transform">
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </button>
                </div>
              </div>

              {/* --- DETAILS AREA --- */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                {/* Color Swatches */}
                <div className="flex gap-2 mb-1">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-4 h-4 rounded-full border border-zinc-300 dark:border-zinc-700 cursor-pointer hover:scale-125 transition-transform",
                        i === 0
                          ? "ring-2 ring-offset-2 ring-zinc-400 dark:ring-zinc-600 dark:ring-offset-zinc-900"
                          : ""
                      )}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span className="text-xs text-zinc-400 ml-2 pt-0.5">
                    +2 more
                  </span>
                </div>

                {/* Title & Reviews */}
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-1 block">
                        {product.brand}
                      </span>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white leading-tight">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-md">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specs Grid (Mini) */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-100 dark:border-zinc-800">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Smartphone className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                      {product.specs.storage}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center border-l border-zinc-100 dark:border-zinc-800">
                    <Cpu className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                      {product.specs.ram}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center border-l border-zinc-100 dark:border-zinc-800">
                    <Zap className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
                      {product.specs.network}
                    </span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${product.price}
                    </span>
                  </div>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-110 transition-transform shadow-md">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
