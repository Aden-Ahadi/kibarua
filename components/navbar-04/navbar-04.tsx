"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import waitlist from "@zootools/waitlist-js";

const clickPopup = (event: { preventDefault: () => void }) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("KrkEV72L2KVuLSv3IJpO");
};

const Navbar04Page = () => {
  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b dark:border-slate-700/70 z-[100]">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />

            <div className="flex items-center gap-3">
              <Button
                className="rounded-full text-base bg-orange-500 hover:bg-orange-600 text-white"
                onClick={clickPopup}
              >
                Get Started
              </Button>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <NavigationSheet />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
