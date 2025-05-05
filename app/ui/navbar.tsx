"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white/20 p-3 md:w-4/5  backdrop-blur-md sticky top-0 w-10/12 mx-auto rounded-2xl border border-black/40  mt-2 z-40 ">
      <Link href={"/dashboard"} className="flex items-center gap-2">
        <div className="text-xl font-semibold">WishCube</div>
      </Link>

      <button className="bg-[#1C1C1C] cursor-pointer text-[#F8F8FF] py-2 px-3 rounded-xl hover:bg-[#2C2C2C] transition duration-300 ease-in-out">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
