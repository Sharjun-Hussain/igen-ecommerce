"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// --- COMPONENT: Smooth Product Card ---
export function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  // Calculate discount
  const discount =
    product.originalPrice > product.currentPrice
      ? Math.round(
          ((product.originalPrice - product.currentPrice) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <div className="group relative flex flex-col w-full gap-3 cursor-pointer">
      {/* 1. IMAGE CONTAINER (The Hero) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100 isolate">
        {/* Badge: Glassmorphic & Minimal */}
        {(product.isNew || discount > 0) && (
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm rounded-full border-none">
                New
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-black/80 text-white hover:bg-black backdrop-blur-md px-3 py-1 text-[10px] font-bold rounded-full border-none">
                -{discount}%
              </Badge>
            )}
          </div>
        )}

        {/* Wishlist Button: Floats and appears on hover (or always visible on mobile) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={cn(
            "absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 shadow-sm",
            isLiked
              ? "bg-red-500 text-white"
              : "bg-white/70 backdrop-blur-md text-gray-700 hover:bg-white hover:text-black hover:scale-110"
          )}
        >
          <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
        </button>

        {/* Main Image: Smooth Zoom Effect */}
        <div className="relative h-full w-full bg-gray-200">
          {/* Replace src with your actual image logic */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Action Bar: Slides up smoothly from bottom */}
        <div className="absolute bottom-4 left-0 right-0 px-4 z-20 translate-y-12 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hidden md:flex gap-2">
          <Button className="flex-1 rounded-full bg-white text-black hover:bg-gray-100 font-medium shadow-lg h-10 text-xs tracking-wide">
            <ShoppingBag className="w-3.5 h-3.5 mr-2" /> Add to Cart
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border-none shadow-lg h-10 w-10"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile: Simple cart icon always visible bottom right */}
        <button className="md:hidden absolute bottom-3 right-3 z-20 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-black active:scale-95 transition-transform">
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* 2. PRODUCT INFO (Clean & Readable) */}
      <div className="space-y-1">
        {/* Brand & Rating */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="font-medium uppercase tracking-wider">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-medium text-gray-900 text-[15px] leading-snug group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Price & Colors */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.currentPrice.toLocaleString()}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="text-xs text-gray-400 line-through decoration-gray-300">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Color Swatches (Mini) */}
          {product.colors && (
            <div className="flex -space-x-1">
              {product.colors.slice(0, 3).map((color, i) => (
                <div
                  key={i}
                  className="h-3 w-3 rounded-full border border-white ring-1 ring-gray-100"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function NewArrivalsSmooth() {
  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Noise Cancelling",
      brand: "Sony",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
      currentPrice: 24990,
      originalPrice: 29990,
      rating: 4.9,
      isNew: true,
      colors: ["#1a1a1a", "#e5e5e5"],
    },
    {
      id: 2,
      name: "Nike Air Max 90 Essentials",
      brand: "Nike",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      currentPrice: 11495,
      originalPrice: 0,
      rating: 4.8,
      colors: ["#ff0000", "#ffffff"],
    },
    {
      id: 3,
      name: "Premium Cotton Oversized Tee",
      brand: "Essentials",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
      currentPrice: 2499,
      originalPrice: 3999,
      rating: 4.5,
      colors: ["#ffffff", "#000000", "#5b21b6"],
    },
    {
      id: 4,
      name: "Analog Classic Watch Series 5",
      brand: "Fossil",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
      currentPrice: 9999,
      originalPrice: 14999,
      rating: 4.7,
      isNew: true,
      colors: ["#000000"],
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header: Centered & Modern */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Just Dropped
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            New Arrivals
          </h2>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-2"></div>
        </div>

        {/* The Smooth Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="px-8 h-12 rounded-full border-gray-300 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            Browse Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
