"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart, Star, Plus } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for merging classes

// --- HELPER COMPONENT: Rating Stars ---
const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
    <span className="text-xs font-medium text-gray-700 mt-0.5">{rating}</span>
  </div>
);

// --- MAIN COMPONENT: Product Card ---
export function ProductCard({ product, onAddToCart, onLike, onQuickView }) {
  const [isLiked, setIsLiked] = useState(product.isLiked || false);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    if (onLike) onLike(product.id, !isLiked);
  };

  const discountPercentage =
    product.originalPrice > product.currentPrice
      ? Math.round(
          ((product.originalPrice - product.currentPrice) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <div className="group relative flex flex-col w-full bg-white">
      {/* 1. IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
        {/* Badges (Top Left) */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-black text-white hover:bg-black px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-sm shadow-sm">
              New
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-red-600 text-white hover:bg-red-600 px-2 py-0.5 text-[10px] font-bold rounded-sm shadow-sm">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button (Top Right) */}
        <button
          onClick={handleLike}
          className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 transition-all hover:bg-white hover:text-red-500 shadow-sm"
        >
          <Heart
            className={cn("w-4 h-4", isLiked && "fill-red-500 text-red-500")}
          />
        </button>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Desktop Overlay Actions (Hidden on mobile, slides up on desktop hover) */}
        <div className="absolute inset-x-0 bottom-0 z-20 hidden md:flex translate-y-full flex-col gap-1 p-3 transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-gradient-to-t from-black/40 to-transparent pt-10">
          <Button
            onClick={() => onAddToCart?.(product.id)}
            className="w-full bg-white text-black hover:bg-gray-100 h-9 text-xs font-semibold"
          >
            Add to Cart
          </Button>
          <Button
            variant="ghost"
            onClick={() => onQuickView?.(product.id)}
            className="w-full text-white hover:bg-white/20 hover:text-white h-8 text-xs bg-black/30 backdrop-blur-md"
          >
            <Eye className="w-3 h-3 mr-2" /> Quick View
          </Button>
        </div>

        {/* Mobile Cart Button (Visible only on mobile) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(product.id);
          }}
          className="md:hidden absolute bottom-2 right-2 z-20 bg-white p-2 rounded-full shadow-lg text-black active:scale-95 transition-transform"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* 2. PRODUCT DETAILS */}
      <div className="mt-3 flex flex-col gap-1">
        {/* Brand & Rating Row */}
        <div className="flex justify-between items-start">
          <p className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold truncate pr-2">
            {product.brand}
          </p>
          {product.rating && <RatingStars rating={product.rating} />}
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2 min-h-[2.5em]">
          {product.name}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-sm md:text-base font-bold text-gray-900">
            Rs. {product.currentPrice.toLocaleString()}
          </span>
          {product.originalPrice > product.currentPrice && (
            <span className="text-xs text-gray-400 line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Colors (Optional - kept minimal) */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-1.5 h-3">
            {product.colors.slice(0, 3).map((color, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] text-gray-400 leading-none self-center">
                +
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function NewArrivalsSection() {
  const products = [
    {
      id: 1,
      name: "Minimalist Noise Cancelling Wireless Headphones",
      brand: "SoundMax",
      image: "/placeholder-headphones.jpg", // Replace with real paths
      currentPrice: 12999,
      originalPrice: 15999,
      rating: 4.8,
      isNew: true,
      colors: ["#1a1a1a", "#e5e5e5"],
    },
    {
      id: 2,
      name: "Chronograph Leather Watch",
      brand: "TimeCraft",
      image: "/placeholder-watch.jpg",
      currentPrice: 18999,
      originalPrice: 22999,
      rating: 4.9,
      colors: ["#8B4513", "#000000"],
    },
    {
      id: 3,
      name: "Cotton Blend Slim Fit Shirt",
      brand: "UrbanStyle",
      image: "/placeholder-shirt.jpg",
      currentPrice: 4999,
      originalPrice: 6999,
      rating: 4.5,
      isNew: true,
      colors: ["#ffffff", "#000000", "#1e40af"],
    },
    {
      id: 4,
      name: "UV Protection Wayfarer",
      brand: "SunShades",
      image: "/placeholder-glasses.jpg",
      currentPrice: 8999,
      originalPrice: 8999,
      rating: 4.7,
      colors: ["#000000"],
    },
    {
      id: 5,
      name: "Air Cushion Running Shoes",
      brand: "RunFast",
      image: "/placeholder-shoes.jpg",
      currentPrice: 7999,
      originalPrice: 9999,
      rating: 4.6,
      isNew: true,
      colors: ["#ff0000", "#0000ff", "#000000", "#ffffff"],
    },
    {
      id: 6,
      name: "Travel Laptop Backpack",
      brand: "TravelGear",
      image: "/placeholder-bag.jpg",
      currentPrice: 5999,
      originalPrice: 7999,
      rating: 4.8,
      colors: ["#374151"],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              New Arrivals
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              The latest trends, picked just for you.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex rounded-full px-6"
          >
            View All Collection
          </Button>
        </div>

        {/* THE GRID 
          - grid-cols-2 (Mobile - Requirement Met)
          - sm:grid-cols-3 (Tablet)
          - lg:grid-cols-4 (Desktop)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(id) => console.log("Add", id)}
              onQuickView={(id) => console.log("View", id)}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full rounded-full">
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
