import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between w-full max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl text-black tracking-tight">
          WishCube
        </h1>
      </div>

      {/* Nav links — hidden on mobile, visible from lg up */}
      <div className="hidden lg:flex items-center gap-10">
        {["About", "Features", "Pricing"].map((item) => (
          <Link
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            key={item}
            className="text-sm text-black transition-colors hover:text-[#9151FF]"
          >
            {item}
          </Link>
        ))}
        <Button
          size="lg"
          className="cursor-pointer rounded-md px-4 w-fit bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          Request Demo
        </Button>
      </div>

      {/* Mobile: show CTA only */}
      <div className="flex lg:hidden">
        <Button
          size="sm"
          className="cursor-pointer rounded-md px-3 bg-[#191A23] text-white text-xs"
        >
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
