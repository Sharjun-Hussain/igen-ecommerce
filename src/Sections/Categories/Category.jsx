"use client";

import { Monitor, Headphones, Smartphone, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Smartphone,
    title: "Mobiles",
    count: "120+ Items",
    image: "/static/cat3.jpg",
  },
  {
    icon: Headphones,
    title: "Audio",
    count: "45+ Items",
    image: "/static/cat5.jpg",
  },
  {
    icon: Monitor,
    title: "Gadgets",
    count: "80+ Items",
    image: "/static/cat8.jpg",
  },
  {
    icon: Tag,
    title: "Deals",
    count: "Limited Time",
    image: "/static/cat6.jpg",
  },
];

export function ProductCategories() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
            <p className="text-muted-foreground mt-2">Find exactly what you need</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Grid Layout for Desktop, Snap Scroll for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative h-64 md:h-80 w-full overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                  <div className="flex items-center gap-3 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-sm text-white/80">{category.count}</span>
                    <div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}