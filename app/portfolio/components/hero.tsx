import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 md:py-16 py-3 p-4 max-w-4xl mx-auto md:w-1/2 w-full">
      <div className="flex flex-col  items-start gap-8">
        <Image
          src="/dp.jpg"
          alt="Abdullahi Olaiwon"
          width={120}
          height={120}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-100 shadow-lg"
          priority
        />
        <div className="flex flex-col gap-3 text-left">
          <div className="space-y-2">
            <h1 className="text-4xl whitespace-nowrap md:text-5xl font-bold text-gray-800">
              Hey, <br /> I&apos;m Abdullahi Olaiwon
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold  text-gray-800">
              Frontend Engineer
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-lg">
            Crafting elegant solutions to complex problems with clean, efficient
            code. Specialized in building scalable web applications with modern
            frameworks.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <a
          href="#contact"
          className="bg-neutral-900 text-white px-6 w-fit py-3 rounded-lg text-sm font-medium shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 sm:w-auto text-center"
        >
          Hire Me
        </a>

        <div className="flex items-center text-green-600  bg-green-600/20  pr-4 py-2 rounded-full">
          <BsDot className="size-10 " />
          <span className="font-medium text-base">
            Available for new projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
