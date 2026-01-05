import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-3/4 ">
      <nav className="sticky h-16 flex items-center justify-between px-4 top-0 z-50 border border-neutral-500/20 bg-transparent rounded-full backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className=" w-[150px] h-[50px] flex items-center justify-center">
            <h1 className="text-3xl font-extrabold text-neutral-300 tracking-tight">
              WishCube
            </h1>
          </div>
        </div>
        <div className="hidden items-center gap-10 lg:flex">
          {["HOME", "ABOUT", "HOW IT WORK", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-neutral-400 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 ">
          <Button
            size="lg"
            className="rounded-full  mx-4 w-[122px] font-bold shadow-lg shadow-primary/20 border-neutral-500/20 border bg-[#151515] text-neutral-300 hover:scale-105 transition-transform"
          >
            GET STARTED
            <div className=" bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
              <ArrowUpRight />
            </div>
          </Button>
          <div className=""></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
