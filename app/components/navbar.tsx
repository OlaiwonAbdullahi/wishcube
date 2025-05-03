"use client";

import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-3 md:w-full w-11/12 mx-auto md:rounded-none rounded-2xl border border-black/40 md:border-0 mt-2 shadow-md">
      <div className="text-xl font-semibold">WishCube</div>
      <SignInButton mode="modal">
        <button className="bg-[#1C1C1C] text-[#F8F8FF] py-2 px-3 rounded-xl hover:bg-[#2C2C2C] transition duration-300 ease-in-out">
          Get Started
        </button>
      </SignInButton>
    </div>
  );
};

export default Navbar;
