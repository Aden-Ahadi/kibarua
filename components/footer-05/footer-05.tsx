import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About us",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const Footer05Page = () => {
  return (
    <div className="w-full">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-8 flex flex-col justify-start items-center">
            {/* Logo */} KIBARUA
            <ul className="mt-4 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-4 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Kibarua Works
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
