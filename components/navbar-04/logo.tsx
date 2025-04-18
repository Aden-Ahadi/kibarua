import Image from "next/image";

export const Logo = () => (
  <div className="relative w-40 h-40 flex items-center">
    <Image
      src="/worker.png"
      alt="Logo"
      width={100}
      height={100}
      className="object-contain"
      priority
    />
  </div>
);
