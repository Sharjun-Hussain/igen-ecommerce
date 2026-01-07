"use client";

import {
  Search,
  ShoppingCart,
  Menu,
  Package,
  Heart,
  User,
  Sun,
  Moon,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Headphones,
  Watch,
  Tag,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose, // Added for better UX
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// Enhanced Data Structure
const categories = [
  {
    name: "Mobiles",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Latest smartphones & flagship devices",
    subcategories: [
      "New Arrivals",
      "Apple iPhone",
      "Samsung Galaxy",
      "Google Pixel",
      "Refurbished",
    ],
    featuredBg:
      "bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20",
  },
  {
    name: "Audio & Sound",
    icon: <Headphones className="h-5 w-5" />,
    description: "Immersive audio equipment",
    subcategories: [
      "TWS Earbuds",
      "Noise Cancelling",
      "Bluetooth Speakers",
      "Home Audio",
      "Professional Gear",
    ],
    featuredBg:
      "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
  },
  {
    name: "Smart Wearables",
    icon: <Watch className="h-5 w-5" />,
    description: "Watches, bands & health trackers",
    subcategories: [
      "Apple Watch",
      "Galaxy Watch",
      "Fitness Bands",
      "Smart Rings",
      "Accessories",
    ],
    featuredBg:
      "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
  },
  {
    name: "Exclusive Deals",
    icon: <Zap className="h-5 w-5" />,
    description: "Limited time offers & clearances",
    subcategories: [
      "Flash Sales",
      "Clearance",
      "Bundle Offers",
      "Student Discounts",
    ],
    featuredBg:
      "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20",
  },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(categories[0].name);
  const menuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full z-50">
      {/* 1. TOP BAR */}
      <div
        className={cn(
          "w-full bg-slate-950 text-white dark:bg-black transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0" : "h-9"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-[11px] font-medium tracking-wide uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              <Package className="h-3 w-3" /> Worldwide Shipping
            </span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              <Tag className="h-3 w-3" /> Voucher Codes
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">
              Help Center
            </span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">
              Track Order
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header
        ref={menuRef}
        className={cn(
          "sticky top-0 w-full transition-all duration-300 border-b z-40",
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm py-2"
            : "bg-white dark:bg-gray-950 border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo Area & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden -ml-2"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                {/* --- FIX: POPULATED MOBILE MENU CONTENT --- */}
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] overflow-y-auto p-0"
                >
                  <div className="flex flex-col gap-6 p-6">
                    <div className="font-bold text-2xl flex items-center gap-1">
                      igen<span className="text-blue-600">.</span>
                    </div>

                    {/* Mobile Search */}
                    <div className="relative w-full md:hidden">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search products..."
                        className="pl-9 bg-slate-100 dark:bg-slate-900 border-none h-10 rounded-full"
                      />
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Menu
                      </p>
                      {["Deals", "What's New", "Delivery"].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

                    {/* Mobile Categories (Collapsible) */}
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Categories
                      </p>
                      {categories.map((cat) => (
                        <details key={cat.name} className="group">
                          <summary className="flex items-center justify-between py-2 text-base font-medium text-slate-700 dark:text-slate-200 cursor-pointer list-none select-none hover:text-blue-600 transition-colors">
                            <span className="flex items-center gap-3">
                              <span className="text-slate-400 group-hover:text-blue-500">
                                {cat.icon}
                              </span>
                              {cat.name}
                            </span>
                            <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                          </summary>
                          <div className="pl-9 flex flex-col gap-2 mt-1 mb-2 border-l-2 border-slate-100 dark:border-slate-800 ml-2.5">
                            {cat.subcategories.map((sub) => (
                              <Link
                                key={sub}
                                href="#"
                                className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white py-1 pl-4"
                              >
                                {sub}
                              </Link>
                            ))}
                            <Link
                              href="#"
                              className="text-sm font-semibold text-blue-600 pl-4 py-1 flex items-center gap-1"
                            >
                              View All <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </details>
                      ))}
                    </div>

                    {/* Mobile Account Section */}
                    <div className="mt-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                          <User className="h-5 w-5 text-slate-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">My Account</p>
                          <p className="text-xs text-slate-500">
                            Sign in for better experience
                          </p>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        Sign In / Register
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="group flex items-center gap-2">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  igen<span className="text-blue-600">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation (Unchanged) */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="ghost"
                className={cn(
                  "gap-2 font-medium text-sm h-10 px-4 rounded-full transition-all",
                  isMegaMenuOpen
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                <MenuSquareIcon className="h-4 w-4" />
                Categories
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-300",
                    isMegaMenuOpen && "rotate-180"
                  )}
                />
              </Button>

              <nav className="flex items-center gap-1 ml-2">
                {["Deals", "What's New", "Delivery"].map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </div>

            {/* Modern Search Bar (Hidden on Mobile/Small, Visible on Medium+) */}
            <div className="flex-1 hidden md:flex justify-center max-w-lg mx-auto">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <Input
                  placeholder="Search for products..."
                  className="pl-10 pr-12 h-11 rounded-full bg-slate-100 border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 dark:bg-slate-900 dark:focus:bg-slate-950 transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Button
                    size="sm"
                    className="h-8 rounded-full px-3 bg-blue-600 hover:bg-blue-700 text-xs"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden sm:flex text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-slate-600 dark:text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full relative text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2 rounded-full pl-2 pr-4 ml-1 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <User className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <span className="text-sm font-medium">Account</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MEGA MENU (Unchanged for Desktop) */}
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-in-out origin-top z-30",
            isMegaMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          )}
        >
          <div className="max-w-7xl mx-auto flex h-[450px]">
            {/* Sidebar: Categories */}
            <div className="w-1/4 border-r border-slate-100 dark:border-slate-900 py-6 pr-4">
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onMouseEnter={() => setHoveredCategory(cat.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      hoveredCategory === cat.name
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {cat.icon}
                      {cat.name}
                    </span>
                    {hoveredCategory === cat.name && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-8 px-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 font-semibold uppercase mb-2">
                    Need Help?
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Call our expert sales team for advice.
                  </p>
                  <span className="text-blue-600 font-bold text-lg">
                    +1 800 555 0199
                  </span>
                </div>
              </div>
            </div>

            {/* Content Area: Subcategories & Features */}
            <div className="w-3/4 p-8">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className={cn(
                    "grid grid-cols-12 gap-8 h-full transition-opacity duration-300",
                    hoveredCategory === cat.name
                      ? "opacity-100 flex"
                      : "opacity-0 hidden"
                  )}
                >
                  {/* Sub Links */}
                  <div className="col-span-8">
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {cat.name}
                      </h2>
                      <Badge
                        variant="secondary"
                        className="font-normal text-xs"
                      >
                        {cat.subcategories.length} Collections
                      </Badge>
                    </div>
                    <p className="text-slate-500 mb-8 max-w-md">
                      {cat.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href="#"
                          className="group flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                          {sub}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-12 flex items-center gap-2 text-sm font-semibold text-blue-600 cursor-pointer group">
                      View all {cat.name} products
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Visual / Promo Card */}
                  <div className="col-span-4 h-full">
                    <div
                      className={cn(
                        "h-full w-full rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group cursor-pointer",
                        cat.featuredBg
                      )}
                    >
                      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                        <Badge className="bg-white/90 text-black hover:bg-white mb-2 shadow-sm backdrop-blur-sm">
                          New Arrival
                        </Badge>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">
                          Premium Collection
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          Upgrade your setup today.
                        </p>
                      </div>

                      {/* Abstract Shapes/Image placeholder */}
                      <div className="absolute top-0 right-0 p-8 opacity-50 dark:opacity-30">
                        {cat.icon}{" "}
                        {/* Using the icon as a background graphic for now */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for focus */}
      {isMegaMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30 top-[148px]" />
      )}
    </div>
  );
}

function MenuSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
    </svg>
  );
}
