import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavMenuProps extends NavigationMenuProps {
  onLinkClick?: () => void;
}

export const NavMenu = ({ onLinkClick, ...props }: NavMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/"
            className={cn(
              "text-lg font-medium transition-colors hover:text-orange-500",
              "data-[orientation=vertical]:text-xl data-[orientation=vertical]:py-2"
            )}
            onClick={onLinkClick}
          >
            Home
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/About"
            className={cn(
              "text-lg font-medium transition-colors hover:text-orange-500",
              "data-[orientation=vertical]:text-xl data-[orientation=vertical]:py-2"
            )}
            onClick={onLinkClick}
          >
            About
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/contact"
            className={cn(
              "text-lg font-medium transition-colors hover:text-orange-500",
              "data-[orientation=vertical]:text-xl data-[orientation=vertical]:py-2"
            )}
            onClick={onLinkClick}
          >
            Contact Us
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
