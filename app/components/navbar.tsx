import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-3/4  ">
      <nav className="fixed w-3/4  h-16 flex items-center justify-between px-4 top-5 z-50 border border-neutral-500/20 bg-transparent rounded-full backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className=" w-[150px] h-[50px] flex items-center justify-center">
            <h1 className="text-3xl font-extrabold text-neutral-300 tracking-tight">
              WishCube
            </h1>
          </div>
        </div>
        <div className="hidden items-center gap-10 lg:flex">
          {["HOME", "ABOUT", "FEATURES", "HOW IT WORKS"].map((item) => (
            <Link
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              key={item}
              className="text-sm font-semibold text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 ">
          <Link href="/login" className="relative group cursor-pointer">
            <Button
              size="lg"
              className="rounded-full  mx-4 w-fit font-bold pr-1 pl-2   shadow-lg shadow-primary/20 border-neutral-500/20 border bg-[#151515] text-neutral-300 hover:scale-105 transition-transform"
            >
              GET STARTED
              <div className=" bg-white text-primary rounded-full p-2 flex items-center justify-center">
                <ArrowUpRight />
              </div>
            </Button>
          </Link>
          <div className=""></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
