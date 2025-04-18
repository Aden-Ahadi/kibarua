"use client";

import { useRef } from "react";
import {
  Wrench,
  Hammer,
  Package,
  Truck,
  Paintbrush,
  Scissors,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const icons = [
    { icon: Wrench, label: "Repairs" },
    { icon: Hammer, label: "Construction" },
    { icon: Package, label: "Deliveries" },
    { icon: Truck, label: "Moving" },
    { icon: Paintbrush, label: "Painting" },
    { icon: Scissors, label: "Gardening" },
  ];

  return (
    <section id="problem" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Problem
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In Tanzania, many households and small businesses struggle to find
              reliable help for everyday tasks like repairs, cleaning,
              deliveries, and heavy lifting. Informal workers, on the other
              hand, lack visibility and trust channels to connect with clients.
            </p>
          </div>

          {/* Right Column - Icon Collage */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {icons.map((item, index) => (
              <IconCard
                key={index}
                Icon={item.icon}
                label={item.label}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconCard({
  Icon,
  label,
  index,
  isInView,
}: {
  Icon: LucideIcon;
  label: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100",
        "transition-all duration-700 ease-out",
        isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      style={{ transitionDelay: `${150 * index}ms` }}
    >
      <div className="bg-amber-100 p-4 rounded-full mb-4">
        <Icon className="h-8 w-8 text-amber-600" />
      </div>
      <span className="text-gray-700 font-medium text-center">{label}</span>
    </div>
  );
}
