"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Data ---
const footerSections = [
  {
    title: "Product",
    links: [
      "New Arrivals",
      "Best Sellers",
      "Gaming Gear",
      "PC Components",
      "Accessories",
    ],
  },
  {
    title: "Support",
    links: ["Help Center", "Order Status", "Returns", "Warranty", "Contact Us"],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Accessibility",
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4 1.2 8.1-2.9 5.6-7.4 1.7-.5 3.3-2 3-4.5 1.7.5 3-1 6.1-4z",
  },
  {
    name: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
  },
];

// *** UPDATED: Sri Lankan Payment Options & COD ***
const paymentMethodLogos = [
  { name: "Visa", src: "/static/visa.png" },
  { name: "Mastercard", src: "/static/mastercard.png" },
  { name: "Koko", src: "/static/koko.png" }, // Popular SL Buy Now Pay Later
];

const Footer = () => {
  const { theme } = useTheme();
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Reveal Footer
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Animate Columns
      gsap.fromTo(
        ".footer-col",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Hover Effects
      const links = document.querySelectorAll(".footer-link");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, { x: 5, color: "#3b82f6", duration: 0.3 });
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(link, { x: 0, color: "inherit", duration: 0.3 });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none ${
          theme === "dark" ? "bg-blue-600" : "bg-blue-400"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-16 footer-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 footer-col">
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold tracking-tight">
                igen<span className="text-blue-600">.</span>
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-sm">
              Sri Lanka's premium destination for the latest mobiles,
              accessories, and gadgets. Island-wide delivery available.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-col">
                <h4 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="footer-link text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 footer-col">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} igen Inc. All rights reserved.
          </div>

          {/* Payment Methods - Using Next Image */}
          <div className="flex items-center gap-3">
            {paymentMethodLogos.map((pm) => (
              <div key={pm.name} className="relative w-16 h-13" title={pm.name}>
                {/* Make sure your images exist in /public/static/ folder */}
                <Image
                  src={pm.src}
                  alt={pm.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Credits */}
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-gray-500">Designed & Developed by</span>
            <a
              href="#"
              className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Inzeedo (PVT) Ltd.
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
