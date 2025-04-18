"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about-hero.jpg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            Kibarua: Connecting You to Trusted Local Help.
          </h1>
          <p
            className={cn(
              "text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 transition-all duration-1000 delay-300 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            Solving everyday challenges—from fixing pipes to lifting
            loads—Kibarua brings reliable workers right to your doorstep.
          </p>
        </div>

        {/* Scroll indicator - only show on desktop */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
