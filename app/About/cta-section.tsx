"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="py-24 bg-gradient-to-r from-amber-500 to-amber-600"
      ref={ref}
    >
      <div className="container mx-auto px-4 text-center">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Download Kibarua and book your first task today.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16 max-w-md mx-auto">
          <div
            className={cn(
              "absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full transition-all duration-1000 delay-500",
              isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          ></div>
          <div
            className={cn(
              "absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full transition-all duration-1000 delay-700",
              isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          ></div>
          <div
            className={cn(
              "absolute top-12 right-0 w-8 h-8 bg-white/10 rounded-full transition-all duration-1000 delay-900",
              isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          ></div>
        </div>
      </div>
    </section>
  );
}
