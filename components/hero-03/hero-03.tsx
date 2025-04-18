import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import React from "react";

const Hero03 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="text-center max-w-2xl mt-6">
        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full py-1 border-none"></Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-orange-950">
          Book Trusted Help For Any Task.{" "}
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-orange-900/80">
          Burst pipes • Furniture repair • Car breakdowns • gardens jobs •
          Endless digging • Blackout emergencies • Heavy lifting • washing • …or
          anything else with just a Tap.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base bg-orange-500 hover:bg-orange-600 text-white"
          >
            Learn more <ArrowUpRight className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-12">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/kibarua-guy.png"
            alt="Kibarua guy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero03;
