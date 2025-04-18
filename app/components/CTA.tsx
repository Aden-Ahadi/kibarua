"use client";
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import waitlist from "@zootools/waitlist-js";

const clickPopup = (event: { preventDefault: () => void }) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("KrkEV72L2KVuLSv3IJpO");
};

export const CTA1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Try our platform today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Juggling daily life in Tanzania’s fast-paced cities is tough enough.
            Stop wasting time chasing unverified helpers or haggling over
            prices. Kibarua eliminates the guesswork – connecting you to
            trusted, affordable service providers in minutes.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline" onClick={clickPopup}>
            Join as a worker <MoveRight className="w-4 h-4" />
          </Button>
          <Button className="gap-4" onClick={clickPopup}>
            Sign up as a user <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
