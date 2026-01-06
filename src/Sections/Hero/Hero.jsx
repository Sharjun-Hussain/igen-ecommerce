"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "The New Standard",
    subtitle: "Flagship Series",
    description:
      "Experience the pinnacle of mobile technology with the latest iPhone 15 Pro Max and Galaxy S24 Ultra.",
    image:
      "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-iphone-15-pro-max-box.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    cta: "Shop Flagships",
    link: "/shop?category=Mobiles",
    color: "from-blue-600 via-purple-600 to-violet-700",
    accentColor: "rgb(59 130 246)",
  },
  {
    id: 2,
    title: "Wireless Freedom",
    subtitle: "Premium Audio",
    description:
      "Immerse yourself in crystal clear sound with our collection of top-tier wireless headphones and earbuds.",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    cta: "Explore Audio",
    link: "/shop?category=Gadgets",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "rgb(20 184 166)",
  },
  {
    id: 3,
    title: "Smart Ecosystem",
    subtitle: "Connected Living",
    description:
      "Stay connected and track your health with the latest smartwatches and fitness bands.",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    cta: "Discover Smart Tech",
    link: "/shop?category=Gadgets",
    color: "from-orange-600 via-red-500 to-rose-600",
    accentColor: "rgb(249 115 22)",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const nextSlide = useCallback(() => {
    paginate(1);
  }, []);

  const prevSlide = useCallback(() => {
    paginate(-1);
  }, []);

  const goToSlide = (index) => {
    const newDirection = index > currentSlide ? 1 : -1;
    paginate(newDirection);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className="relative h-[700px] md:h-[800px] w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 80% 50%, ${currentSlideData.accentColor}40 0%, transparent 60%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="h-full w-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            />
            
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(45deg, ${currentSlideData.accentColor}15 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <div className="max-w-2xl space-y-8">
                {/* Subtitle with Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/50" />
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    bg-gradient-to-r text-white shadow-xl backdrop-blur-sm
                    border border-white/10 ${currentSlideData.color}`}>
                    <Sparkles className="h-3 w-3" />
                    {currentSlideData.subtitle}
                  </span>
                </motion.div>

                {/* Title with Gradient Text */}
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]
                    bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
                    drop-shadow-2xl"
                >
                  {currentSlideData.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group relative h-16 px-10 rounded-full text-lg font-semibold
                      overflow-hidden transition-all duration-300
                      hover:scale-105 hover:shadow-2xl
                      before:absolute before:inset-0 before:bg-gradient-to-r
                      before:from-white before:to-gray-100
                      after:absolute after:inset-[1px] after:rounded-full
                      after:bg-black after:transition-all after:duration-300
                      hover:after:opacity-0"
                  >
                    <Link href={currentSlideData.link}>
                      <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black transition-colors duration-300">
                        {currentSlideData.cta}
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-30">
        {/* Slide Indicators */}
        <div className="hidden md:flex items-center gap-2 mr-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="h-1 w-8 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
                  animate={{
                    width: index === currentSlide && !isHovered ? ["0%", "100%"] : "100%",
                  }}
                  transition={{
                    duration: 5,
                    repeat: index === currentSlide && !isHovered ? Infinity : 0,
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="h-12 w-12 rounded-full bg-black/40 text-white hover:bg-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="h-12 w-12 rounded-full bg-black/40 text-white hover:bg-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="h-1 w-6 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
                animate={{
                  width: index === currentSlide && !isHovered ? ["0%", "100%"] : "100%",
                }}
                transition={{
                  duration: 5,
                  repeat: index === currentSlide && !isHovered ? Infinity : 0,
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-6 w-px bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </div>
  );
}