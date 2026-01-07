"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const brands = [
  { id: 1, name: "HP", logo: "/brands/hp.png" },
  { id: 2, name: "Hisense", logo: "/brands/hisense.png" },
  { id: 3, name: "Samsung", logo: "/brands/samsung.png" },
  { id: 4, name: "Sony", logo: "/brands/sony.png" },
  { id: 5, name: "Lenovo", logo: "/brands/lenovo.png" },
  { id: 6, name: "Dell", logo: "/brands/dell.png" },
  { id: 7, name: "Asus", logo: "/brands/asus.png" },
  { id: 8, name: "Acer", logo: "/brands/acer.png" },
];

export default function BrandShowcaseGradient() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-gray-50/50 dark:bg-black/50">
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Base Radial Gradient (Creates the spotlight effect) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-100/50 to-transparent dark:from-gray-900 dark:via-black/80 dark:to-transparent pointer-events-none" />

      {/* 2. Ambient Color Glows (Subtle atmosphere) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* 3. Grid Pattern with Fade Out (Masks top/bottom edges) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.15] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        style={{
          backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* --- CONTENT --- */}
      <div className="container px-4 mx-auto relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join the ecosystem of top-tier brands accelerating their growth.
        </p>
      </div>

      {/* --- MARQUEE SECTION --- */}
      {/* The mask-image here creates the left/right fade for the logos */}
      <div className="relative flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Top Row - Slower */}
        <MarqueeRow brands={brands} direction="left" speed={60} />

        {/* Bottom Row - Faster */}
        <MarqueeRow brands={brands} direction="right" speed={50} />
      </div>

      {/* Decorative Horizontal Lines (Top/Bottom borders that fade out) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
    </section>
  );
}

function MarqueeRow({ brands, direction = "left", speed = 40 }) {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-16 md:gap-32 pr-16 md:pr-32"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <div
            key={`${brand.id}-${idx}`}
            className="group relative flex items-center justify-center min-w-[100px] md:min-w-[140px]"
          >
            {/* Logo Container */}
            <div className="relative h-10 w-28 md:h-14 md:w-40 transition-all duration-500 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 cursor-pointer">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain dark:invert"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
