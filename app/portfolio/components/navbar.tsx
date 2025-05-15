"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-xs top-0 z-50 sticky shadow-sm border border-gray-300 rounded-xl md:w-1/2 w-11/12 mx-auto transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="group flex items-center justify-center hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
          <Link href="/">
            <Tooltip text="Home">
              <GoHome className="size-5 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-neutral-900" />
            </Tooltip>
          </Link>
        </div>

        <div className="flex items-center md:space-x-8 space-x-4 border-x border-gray-300 px-4 py-1.5">
          <Link
            href="https://x.com/abdullahiola_05"
            className="group flex items-center justify-center hover:bg-gray-200 p-2 rounded-lg hover:text-neutral-900 transition-all duration-300 ease-in-out"
          >
            <Tooltip text="Twitter">
              <RiTwitterXFill className="size-5 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-neutral-900" />
            </Tooltip>
          </Link>
          <Link
            href="/github"
            className="group flex items-center justify-center hover:bg-gray-200 p-2 rounded-lg hover:text-neutral-900 transition-all duration-300 ease-in-out"
          >
            <Tooltip text="GitHub">
              <FiGithub className="size-5 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-neutral-900" />
            </Tooltip>
          </Link>
          <Link
            href="#"
            className="group flex items-center justify-center hover:bg-gray-200 p-2 rounded-lg hover:text-neutral-900 transition-all duration-300 ease-in-out"
          >
            <Tooltip text="Resume">
              <IoDocumentTextOutline className="size-5 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-neutral-900" />
            </Tooltip>
          </Link>
        </div>

        <div>
          <button className="bg-neutral-900 whitespace-nowrap text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:shadow-md hover:scale-105 active:scale-95">
            My Blog
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
