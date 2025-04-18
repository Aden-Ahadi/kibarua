"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Find verified local workers in minutes",
    "Book and schedule tasks with ease",
    "Secure payment system",
    "Rate and review workers",
  ];

  return (
    <section id="solution" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div
            className={cn(
              "order-2 md:order-1 transition-all duration-1000 ease-out",
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            )}
          >
            <div className="relative mx-auto max-w-xs">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-800 relative z-10">
                <img
                  src="/howitworks.png?height=600&width=300"
                  alt="Kibarua mobile app interface"
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center z-20 shadow-lg">
                <span className="text-white font-bold text-lg">Kibarua</span>
              </div>

              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-amber-200 rounded-[2.5rem] transform rotate-6"></div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gray-200 rounded-[2.5rem] transform -rotate-3"></div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div
            className={cn(
              "order-1 md:order-2 transition-all duration-1000 ease-out",
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Kibarua is a mobile platform that makes it easy to find, book, and
              pay verified local workers. Whether you need a plumber, a cleaner,
              or help moving furniture—we're building trust, creating jobs, and
              making everyday life easier.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-center transition-all duration-700 ease-out",
                    isInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  )}
                  style={{ transitionDelay: `${150 * index}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
