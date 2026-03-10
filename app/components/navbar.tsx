"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-16 flex items-center justify-between w-full max-w-7xl mx-auto px-4"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center cursor-pointer"
      >
        <h1 className="text-2xl md:text-3xl text-black tracking-tight font-bold">
          WishCube
        </h1>
      </motion.div>

      {/* Nav links — hidden on mobile, visible from lg up */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-10">
          {["About", "Features", "Pricing"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-black transition-colors hover:text-[#9151FF]"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="bg-[#191A23] cursor-not-allowed">
            Join Waitlist
          </Button>
        </motion.div>
      </div>

      <div className="flex lg:hidden">
        <Button
          size="sm"
          className="cursor-pointer rounded-md px-3 bg-[#191A23] text-white text-xs"
        >
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
