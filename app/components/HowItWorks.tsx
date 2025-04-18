import { Check } from "lucide-react";
import Image from "next/image";

export const Feature1 = () => (
  <div className="w-full py-12 lg:py-20">
    <div className="container mx-auto px-4">
      <div className="grid border rounded-lg container py-6 px-6 grid-cols-1 gap-6 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div></div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-4xl  lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                How it Works!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                3 easy steps.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-2xl">Search</p>
                <p className="text-muted-foreground text-sm">
                  Choose your service – repairs, cleaning, moving..
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-2xl">Select</p>
                <p className="text-muted-foreground text-sm">
                  See nearby workers, verified and reviewed.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-2xl">Start work</p>
                <p className="text-muted-foreground text-sm">
                  Track your worker on the map, pay securely, and let the job
                  get done.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md relative overflow-hidden">
          <Image
            src="/howitworks.png"
            alt="app UI"
            width={500}
            height={350}
            className="object-contain rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);
