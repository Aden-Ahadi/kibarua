import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/About",
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
          <div className="py-5 flex flex-col justify-start items-center">
            {/* Logo */}
            <Link href="/">
              <div className="relative w-30 h-30 flex items-center">
                <Image
                  src="/worker.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
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
