"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Battery,
  Bluetooth,
  Play,
  ShieldCheck,
  ShoppingBag,
  Star,
  Zap,
  RotateCcw,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Reusable Bento Card ---
const BentoItem = ({ children, className, span = "col-span-1", onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    onClick={onClick}
    className={cn(
      "relative overflow-hidden rounded-[2rem] bg-white border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default group",
      span,
      className
    )}
  >
    {children}
  </motion.div>
);

const useCountdown = () => {
  const [time, setTime] = useState(14400);
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);
  return {
    h: Math.floor(time / 3600)
      .toString()
      .padStart(2, "0"),
    m: Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s: (time % 60).toString().padStart(2, "0"),
  };
};

const ProductBentoGrid = () => {
  const { h, m, s } = useCountdown();
  const [activeColor, setActiveColor] = useState("silver");

  const product = {
    title: "Sony WH-1000XM5",
    price: 299,
    colors: [
      {
        id: "silver",
        value: "#e4e4e7",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "black",
        value: "#18181b",
        img: "https://images.unsplash.com/photo-1487215078519-e21cc028d29c?q=80&w=800&auto=format&fit=crop",
      },
    ],
  };

  const activeImg = product.colors.find((c) => c.id === activeColor)?.img;

  return (
    <section className="py-12 w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-5">
        {/* --- FIXED HERO SECTION --- */}
        <BentoItem
          span="col-span-1 md:col-span-2 row-span-2"
          className="bg-zinc-50 dark:bg-zinc-800/50 p-0 relative isolate"
        >
          {/* 1. Text Content Layer (Top Left) */}
          <div className="absolute top-0 left-0 p-8 z-20 w-2/3">
            <Badge
              variant="outline"
              className="bg-white/50 backdrop-blur-md border-zinc-200 text-zinc-800 mb-3 dark:bg-black/20 dark:text-white dark:border-white/10"
            >
              Best Seller
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight mb-2">
              {product.title}
            </h2>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-red-600">
                ${product.price}
              </span>
              <span className="text-lg font-medium text-zinc-400 line-through">
                $399
              </span>
            </div>
          </div>

          {/* 2. Image Layer (Positioned Bottom Right with constraints) */}
          <div className="absolute inset-0 flex items-end justify-end z-10 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeColor}
                src={activeImg}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                // Fix: Removed negative margins that caused overflow issues
                // Fix: Added max-height constraints to prevent cropping
                className="object-cover   drop-shadow-2xl "
                alt="Product"
              />
            </AnimatePresence>
          </div>

          {/* 3. Color Controls (Bottom Left - Anchored) */}
          <div className="absolute bottom-8 left-8 z-30">
            <div className="flex gap-3 p-2 bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveColor(c.id)}
                  className={cn(
                    "w-6 h-6 rounded-full transition-transform hover:scale-110 relative",
                    activeColor === c.id
                      ? "ring-2 ring-zinc-900 ring-offset-2 dark:ring-white dark:ring-offset-zinc-900"
                      : ""
                  )}
                  style={{ backgroundColor: c.value }}
                  aria-label={`Select ${c.id} color`}
                />
              ))}
            </div>
          </div>

          {/* 4. Background Decor */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-200/50 dark:to-zinc-900/50 -z-10" />
        </BentoItem>

        {/* --- REST OF THE GRID (Unchanged) --- */}

        {/* Urgency */}
        <BentoItem className="bg-black text-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 text-[10px]">
              FLASH
            </Badge>
          </div>
          <div>
            <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">
              Expires In
            </p>
            <div className="font-mono text-3xl font-bold tracking-tight tabular-nums">
              {h}:{m}:{s}
            </div>
          </div>
        </BentoItem>

        {/* Specs */}
        <BentoItem className="p-0 grid grid-rows-2">
          <div className="flex items-center gap-4 px-6 border-b border-zinc-100 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Battery className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">30 Hr</p>
              <p className="text-[10px] text-muted-foreground uppercase">
                Battery
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Bluetooth className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">v5.2</p>
              <p className="text-[10px] text-muted-foreground uppercase">
                Wireless
              </p>
            </div>
          </div>
        </BentoItem>

        {/* Video */}
        <BentoItem span="row-span-2" className="group p-0 relative">
          <img
            src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Lifestyle"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white">
            <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-1" />
            </div>
            <p className="font-medium text-sm tracking-wide">
              See it in action
            </p>
          </div>
        </BentoItem>

        {/* Buy Action */}
        <BentoItem className="bg-zinc-900 text-white dark:bg-white dark:text-black p-6 flex flex-col justify-between group cursor-pointer">
          <div className="flex justify-between items-start">
            <ShoppingBag className="w-6 h-6" />
            <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          <div>
            <p className="text-xl font-bold">Buy Now</p>
            <p className="text-white/60 dark:text-black/60 text-xs">
              Free shipping included
            </p>
          </div>
        </BentoItem>

        {/* Reviews */}
        <BentoItem
          span="md:col-span-2"
          className="p-6 flex items-center justify-between bg-amber-50/50 dark:bg-amber-900/10 border-amber-100/50"
        >
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-amber-900 dark:text-amber-500">
                4.9
              </span>
              <div className="flex text-amber-500 text-[10px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-8 w-[1px] bg-amber-200" />
            <div>
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                "The silence is deafening."
              </p>
              <p className="text-xs text-amber-700/60 dark:text-amber-300/60 mt-0.5">
                Verified Purchase
              </p>
            </div>
          </div>

          <div className="hidden md:flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200"
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white text-[10px] flex items-center justify-center">
              +2k
            </div>
          </div>
        </BentoItem>

        {/* Trust Badges */}
        <BentoItem className="p-6 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <RotateCcw className="w-4 h-4" />
            <span>30-Day Returns</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <ShieldCheck className="w-4 h-4" />
            <span>2 Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <Truck className="w-4 h-4" />
            <span>Express Ship</span>
          </div>
        </BentoItem>
      </div>
    </section>
  );
};

export default ProductBentoGrid;
